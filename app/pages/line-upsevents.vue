<template>
  <div class="page">

    <header class="page-header">
      <h1 class="heading">Line-ups + Events</h1>

      <div class="week-nav">
        <button class="nav-btn" @click="prevWeek">←</button>
        <span class="week-label">{{ weekLabel }}</span>
        <button class="nav-btn" @click="nextWeek">→</button>
      </div>
    </header>

    <div v-if="pending" class="status">Loading schedule...</div>
    <div v-else-if="error" class="status error">Failed to load schedule.</div>
    <div v-else-if="activeDays.length === 0" class="status">No events scheduled this week.</div>

    <div v-else class="schedule-wrap">
      <!-- Desktop: grid table -->
      <div
        class="schedule-grid"
        :style="{ gridTemplateColumns: `120px repeat(${activeDays.length}, 1fr)` }"
      >

        <!-- Day headers -->
        <div class="grid-corner"></div>
        <div v-for="day in activeDays" :key="day.date" class="day-header">
          <span class="day-name">{{ day.dayName }}</span>
          <span class="day-date">{{ day.shortDate }}</span>
        </div>

        <!-- Lower Bowl row -->
        <div class="bowl-label">Lower Bowl</div>
        <div v-for="day in activeDays" :key="'lower-' + day.date" class="bowl-cell">
          <div
            v-for="slot in day.lower"
            :key="slot.id"
            class="slot"
          >
            <span class="slot-time">{{ slot.startTime }}–{{ slot.endTime }}</span>
            <span class="slot-dj">{{ slot.dj }}</span>
          </div>
          <div v-if="day.lower.length === 0" class="slot-empty">—</div>
        </div>

        <!-- Upper Bowl row -->
        <div class="bowl-label">Upper Bowl</div>
        <div v-for="day in activeDays" :key="'upper-' + day.date" class="bowl-cell">
          <div
            v-for="slot in day.upper"
            :key="slot.id"
            class="slot"
          >
            <span class="slot-time">{{ slot.startTime }}–{{ slot.endTime }}</span>
            <span class="slot-dj">{{ slot.dj }}</span>
          </div>
          <div v-if="day.upper.length === 0" class="slot-empty">—</div>
        </div>

      </div>

      <!-- Mobile: stacked cards -->
      <div class="schedule-mobile">
        <div v-for="day in activeDays" :key="'m-' + day.date" class="day-card">
          <div class="day-card-header">
            <span class="day-name">{{ day.dayName }}</span>
            <span class="day-date">{{ day.shortDate }}</span>
          </div>

          <div v-if="day.lower.length > 0" class="bowl-block">
            <div class="bowl-label-mobile">Lower Bowl</div>
            <div v-for="slot in day.lower" :key="slot.id" class="slot">
              <span class="slot-time">{{ slot.startTime }}–{{ slot.endTime }}</span>
              <span class="slot-dj">{{ slot.dj }}</span>
            </div>
          </div>

          <div v-if="day.upper.length > 0" class="bowl-block">
            <div class="bowl-label-mobile">Upper Bowl</div>
            <div v-for="slot in day.upper" :key="slot.id" class="slot">
              <span class="slot-time">{{ slot.startTime }}–{{ slot.endTime }}</span>
              <span class="slot-dj">{{ slot.dj }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
useHead({ title: "Line-ups + Events — Rowan's" })

const API = '/api/schedule'

// Get Monday of the current week
function getMondayOf(d: Date): Date {
  const day = d.getDay()
  const diff = (day === 0 ? -6 : 1 - day)
  const monday = new Date(d)
  monday.setDate(d.getDate() + diff)
  monday.setHours(0, 0, 0, 0)
  return monday
}

function addDays(d: Date, n: number): Date {
  const result = new Date(d)
  result.setDate(d.getDate() + n)
  return result
}

function toYMD(d: Date): string {
  return d.toISOString().slice(0, 10)
}

const weekOffset = ref(0)

const weekStart = computed(() => addDays(getMondayOf(new Date()), weekOffset.value * 7))
const weekEnd = computed(() => addDays(weekStart.value, 6))

const weekLabel = computed(() => {
  const fmt = (d: Date) => d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })
  return `${fmt(weekStart.value)} – ${fmt(weekEnd.value)} ${weekEnd.value.getFullYear()}`
})

function prevWeek() { weekOffset.value-- }
function nextWeek() { weekOffset.value++ }

interface Slot {
  id: number
  date: string
  bowl: 'upper' | 'lower'
  startTime: string
  endTime: string
  dj: string
}

const { data, pending, error } = await useFetch<Slot[]>(
  () => `${API}?startDate=${toYMD(weekStart.value)}&endDate=${toYMD(weekEnd.value)}`,
  { watch: [weekStart] }
)

const DAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const activeDays = computed(() => {
  const slots = data.value ?? []
  const byDate: Record<string, { lower: Slot[], upper: Slot[] }> = {}

  for (const slot of slots) {
    if (!byDate[slot.date]) byDate[slot.date] = { lower: [], upper: [] }
    byDate[slot.date][slot.bowl].push(slot)
  }

  // Sort slots within each day/bowl by startTime
  for (const d of Object.values(byDate)) {
    d.lower.sort((a, b) => a.startTime.localeCompare(b.startTime))
    d.upper.sort((a, b) => a.startTime.localeCompare(b.startTime))
  }

  return Object.keys(byDate).sort().map(date => {
    const d = new Date(date + 'T12:00:00')
    return {
      date,
      dayName: DAY_NAMES[d.getDay()],
      shortDate: d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' }),
      lower: byDate[date].lower,
      upper: byDate[date].upper,
    }
  })
})
</script>

<style scoped>
.page {
  min-height: 100vh;
  background-color: #000;
  font-family: 'JetBrains Mono', monospace;
}

.page-header {
  padding: 2.5rem 1.5rem 1.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
}

.heading {
  font-weight: 400;
  font-size: 26px;
  color: #ff3333;
  margin: 0;
  line-height: 1.1;
}

.week-nav {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.nav-btn {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #fff;
  font-family: 'JetBrains Mono', monospace;
  font-size: 16px;
  width: 36px;
  height: 36px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.15s;
}

.nav-btn:hover {
  border-color: #fff;
}

.week-label {
  font-size: 13px;
  color: #fff;
  opacity: 0.8;
  min-width: 180px;
  text-align: center;
}

.status {
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  color: #fff;
  opacity: 0.5;
  text-align: center;
  padding: 4rem 1.5rem;
}

.status.error {
  color: #ff3333;
  opacity: 1;
}

/* ── Desktop grid ── */
.schedule-wrap {
  padding: 0 1rem 4rem;
  overflow-x: auto;
}

.schedule-grid {
  display: none;
}

.schedule-mobile {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 480px;
  margin: 0 auto;
}

/* Day card (mobile) */
.day-card {
  border: 1px solid rgba(255, 255, 255, 0.12);
}

.day-card-header {
  background: rgba(255, 255, 255, 0.07);
  padding: 0.6rem 1rem;
  display: flex;
  gap: 0.5rem;
  align-items: baseline;
}

.day-name {
  font-size: 14px;
  color: #fff;
  font-weight: 700;
}

.day-date {
  font-size: 11px;
  color: rgba(255, 255, 255, 0.5);
}

.bowl-block {
  padding: 0.5rem 0;
}

.bowl-label-mobile {
  font-size: 10px;
  color: rgba(255, 255, 255, 0.4);
  letter-spacing: 0.08em;
  padding: 0.4rem 1rem 0.2rem;
  text-transform: uppercase;
}

.slot {
  display: flex;
  flex-direction: column;
  padding: 0.4rem 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.slot:last-child {
  border-bottom: none;
}

.slot-time {
  font-size: 10px;
  color: rgba(255, 255, 255, 0.45);
  letter-spacing: 0.04em;
}

.slot-dj {
  font-size: 14px;
  color: #fff;
  font-weight: 700;
}

.slot-empty {
  padding: 0.75rem 1rem;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.2);
}

/* ── Desktop (640px+) ── */
@media (min-width: 640px) {
  .heading {
    font-size: 38px;
  }

  .week-label {
    font-size: 14px;
    min-width: 220px;
  }

  .schedule-grid {
    display: grid;
    min-width: 600px;
    max-width: 1400px;
    margin: 0 auto;
    border: 1px solid rgba(255, 255, 255, 0.12);
  }

  .schedule-mobile {
    display: none;
  }
}

/* Desktop grid layout - computed via JS cols */
.schedule-grid {
  /* grid-template-columns set inline below via computed */
}

.grid-corner {
  background: rgba(255, 255, 255, 0.04);
  padding: 0.75rem 1rem;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.day-header {
  background: rgba(255, 255, 255, 0.07);
  padding: 0.75rem 0.5rem;
  text-align: center;
  border-right: 1px solid rgba(255, 255, 255, 0.08);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.day-header .day-name {
  font-size: 13px;
}

.day-header .day-date {
  font-size: 11px;
}

.bowl-label {
  font-size: 11px;
  color: rgba(255, 255, 255, 0.4);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 0.75rem 0.75rem;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  display: flex;
  align-items: flex-start;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  transform: rotate(180deg);
  justify-content: center;
}

.bowl-cell {
  padding: 0.5rem 0;
  border-right: 1px solid rgba(255, 255, 255, 0.08);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  min-width: 110px;
}

.bowl-cell .slot {
  padding: 0.35rem 0.6rem;
}

.bowl-cell .slot-dj {
  font-size: 13px;
}

.bowl-cell .slot-time {
  font-size: 10px;
}

@media (min-width: 1280px) {
  .heading {
    font-size: 52px;
  }
}
</style>


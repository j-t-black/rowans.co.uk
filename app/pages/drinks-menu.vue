<template>
  <div class="menu-page">
    <!-- Title + Logo -->
    <div class="menu-header">
      <h1 class="menu-title">Bar Menu</h1>
      <img src="/design-assets/MAIN LOGO.png" alt="Rowans Bowl" class="menu-logo" />
    </div>

    <!-- Main content -->
    <div class="menu-content">

      <!-- Row 1: Draught | Guest Cans -->
      <div class="row two-col">
        <div class="section">
          <h2 class="section-heading">Draught</h2>
          <p class="section-note">Price is per pint · 10% discount on 4 Pint Pitchers</p>
          <div class="item-list">
            <div v-for="item in draught" :key="item.name" class="item-row">
              <span class="item-name">{{ item.name }}</span>
              <span class="item-detail">{{ item.abv }}</span>
              <span class="item-price">{{ item.price }}</span>
            </div>
          </div>
        </div>

        <div class="section">
          <h2 class="section-heading">Guest Cans</h2>
          <div class="item-list">
            <div v-for="item in guestCans" :key="item.name" class="item-row">
              <span class="item-name">{{ item.name }}</span>
              <span class="item-detail">{{ item.abv }} {{ item.size }}</span>
              <span class="item-price">{{ item.price }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Row 2: Bottles | Bar Snacks -->
      <div class="row two-col">
        <div class="section">
          <h2 class="section-heading">Bottles</h2>
          <div class="item-list">
            <div v-for="(item, i) in bottles" :key="i" class="item-row">
              <span class="item-name">{{ item.name }}</span>
              <span class="item-detail">{{ item.abv }} {{ item.size }}</span>
              <span class="item-price">{{ item.price }}</span>
            </div>
          </div>
        </div>

        <div class="section">
          <h2 class="section-heading">Bar Snacks</h2>
          <div class="item-list">
            <div v-for="item in barSnacks" :key="item.name" class="item-row">
              <span class="item-name">{{ item.name }}</span>
              <span class="item-price">{{ item.price }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Row 3: Wines | Cocktails | Mocktails+Soft -->
      <div class="row three-col">

        <!-- Wines column -->
        <div class="wines-col">
          <div class="section">
            <h2 class="section-heading">Sparkling Wines</h2>
            <div class="sparkling-header">
              <span class="flex-1"></span>
              <span>Bottle</span>
              <span>Magnum</span>
            </div>
            <div class="item-list">
              <div v-for="item in sparklingWines" :key="item.name" class="sparkling-row">
                <div class="sparkling-name">
                  <div>{{ item.name }}</div>
                  <div v-if="item.label" class="item-sublabel">{{ item.label }}</div>
                </div>
                <span class="item-price">{{ item.price }}</span>
                <span class="item-price mag-price">{{ item.priceMagnum ?? '' }}</span>
              </div>
            </div>
          </div>

          <div class="section">
            <h2 class="section-heading">White + Rose Wines</h2>
            <div class="wine-size-header">
              <span class="flex-1"></span>
              <span>125</span><span>175</span><span>250</span><span>Btl</span>
            </div>
            <div class="item-list">
              <div v-for="item in whiteRoseWines" :key="item.name" class="wine-row">
                <div class="wine-name">
                  <div>{{ item.name }}</div>
                  <div v-if="item.origin" class="item-sublabel">{{ item.origin }}</div>
                </div>
                <div class="wine-prices">
                  <span>{{ item.p125 }}</span>
                  <span>{{ item.p175 }}</span>
                  <span>{{ item.p250 }}</span>
                  <span>{{ item.pBtl }}</span>
                </div>
              </div>
            </div>
          </div>

          <div class="section">
            <h2 class="section-heading">Red Wines</h2>
            <div class="wine-size-header">
              <span class="flex-1"></span>
              <span>125</span><span>175</span><span>250</span><span>Btl</span>
            </div>
            <div class="item-list">
              <div v-for="item in redWines" :key="item.name" class="wine-row">
                <div class="wine-name">
                  <div>{{ item.name }}</div>
                  <div v-if="item.origin" class="item-sublabel">{{ item.origin }}</div>
                </div>
                <div class="wine-prices">
                  <span>{{ item.p125 }}</span>
                  <span>{{ item.p175 }}</span>
                  <span>{{ item.p250 }}</span>
                  <span>{{ item.pBtl }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Cocktails column -->
        <div class="cocktails-col">
          <div class="section">
            <h2 class="section-heading">Frozen Cocktails</h2>
            <div class="item-list">
              <div v-for="item in frozenCocktails" :key="item.name" class="cocktail-row">
                <div class="cocktail-top">
                  <span class="item-name">{{ item.name }}</span>
                  <span class="item-price">£{{ item.price }}</span>
                </div>
                <div v-if="item.description" class="item-sublabel">{{ item.description }}</div>
              </div>
            </div>
          </div>

          <div class="section">
            <h2 class="section-heading">Classic Cocktails</h2>
            <div class="item-list">
              <div v-for="item in classicCocktails" :key="item.name" class="cocktail-row">
                <div class="cocktail-top">
                  <span class="item-name">{{ item.name }}</span>
                  <span class="item-price">£{{ item.price }}</span>
                </div>
                <div v-if="item.description" class="item-sublabel">{{ item.description }}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Mocktails + Soft column -->
        <div class="mocktails-col">
          <div class="section">
            <h2 class="section-heading">Mocktails</h2>
            <div class="item-list">
              <div v-for="item in mocktails" :key="item.name" class="cocktail-row">
                <div class="cocktail-top">
                  <span class="item-name">{{ item.name }}</span>
                  <span class="item-price">£{{ item.price }}</span>
                </div>
                <div v-if="item.description" class="item-sublabel">{{ item.description }}</div>
              </div>
            </div>
          </div>

          <div class="section">
            <h2 class="section-heading">Soft</h2>
            <div class="item-list">
              <div v-for="item in soft" :key="item.name" class="item-row">
                <span class="item-name">{{ item.name }}</span>
                <span class="item-price">{{ item.price }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Row 4: Vodka | Rum | Tequila -->
      <div class="row three-col">
        <div v-for="group in spiritsRow1" :key="group.title" class="section">
          <h2 class="section-heading">{{ group.title }}</h2>
          <div class="item-list">
            <div v-for="item in group.items" :key="item.name" class="item-row">
              <span class="item-name">{{ item.name }}</span>
              <span class="item-price">{{ item.price }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Row 5: Gin | Whisky | Brandy | Liquors -->
      <div class="row four-col">
        <div v-for="group in spiritsRow2" :key="group.title" class="section">
          <h2 class="section-heading">{{ group.title }}</h2>
          <div class="item-list">
            <div v-for="item in group.items" :key="item.name" class="item-row">
              <span class="item-name">{{ item.name }}</span>
              <span class="item-price">{{ item.price }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="menu-footer">
        <p>Drink Responsibly</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Bar Menu — Rowans Bowl' })

interface MenuItem {
  name: string
  abv?: string
  size?: string
  price: string
}

interface CocktailItem {
  name: string
  description?: string
  price: string
}

interface WineItem {
  name: string
  origin?: string
  p125: string
  p175: string
  p250: string
  pBtl: string
}

interface SparklingItem {
  name: string
  label?: string
  price: string
  priceMagnum?: string
}

interface SpiritsGroup {
  title: string
  items: MenuItem[]
}

const draught: MenuItem[] = [
  { name: 'Carling', abv: '3.7%', price: '£6.0' },
  { name: 'Rowans Number One', abv: '4.4%', price: '£6.0' },
  { name: 'Staropramen', abv: '5.0%', price: '£6.4' },
  { name: 'Pravha', abv: '3.8%', price: '£6.4' },
  { name: 'Madri', abv: '4.6%', price: '£6.4' },
  { name: 'Blue Moon', abv: '5.4%', price: '£6.4' },
  { name: 'Guinness', abv: '4.1%', price: '£6.8' },
  { name: 'Aspall Cider', abv: '5.5%', price: '£6.8' },
  { name: 'Alpaca Lypse', abv: '4.25%', price: '£6.7' },
]

const guestCans: MenuItem[] = [
  { name: 'Beavertown Rock Oil', abv: '4.3%', size: '330ml', price: '£6.0' },
  { name: 'Beavertown Gamma Ray', abv: '5.4%', size: '330ml', price: '£6.2' },
  { name: 'Beavertown Lazer Crush', abv: '8.0%', size: '500ml', price: '£6.2' },
  { name: 'Camden Hells', abv: '4.6%', size: '330ml', price: '£6.0' },
  { name: 'Camden Pale Ale', abv: '4.0%', size: '330ml', price: '£6.0' },
  { name: 'Brew Dog Punk IPA', abv: '4.0%', size: '330ml', price: '£6.0' },
  { name: 'Red Stripe', abv: '4.7%', size: '440ml', price: '£6.8' },
  { name: 'Jubel', abv: '4.0%', size: '330ml', price: '£6.0' },
  { name: 'White Claw Seltzer', abv: '4.0%', size: '330ml', price: '£6.8' },
  { name: "Dusty's Ginger Beer", abv: '4.0%', size: '330ml', price: '£6.0' },
]

const bottles: MenuItem[] = [
  { name: 'Peroni', abv: '5.1%', size: '330ml', price: '£6.8' },
  { name: 'Corona', abv: '4.5%', size: '330ml', price: '£6.0' },
  { name: 'Desperados', abv: '5.9%', size: '330ml', price: '£6.0' },
  { name: 'Thunderbirds', abv: '4.0%', size: '500ml', price: '£6.2' },
  { name: 'Becks Blue 0%', abv: '0.0%', size: '500ml', price: '£6.2' },
  { name: 'Peroni 0%', abv: '0.0%', size: '330ml', price: '£6.2' },
  { name: 'Beck Blue 0%', abv: '0.0%', size: '500ml', price: '£6.2' },
  { name: 'Peroni 0%', abv: '0.0%', size: '500ml', price: '£6.2' },
  { name: 'Thatchers 0%', abv: '0.0%', size: '500ml', price: '£6.2' },
  { name: 'Old Mout Berries 0%', abv: '0.0%', size: '500ml', price: '£6.2' },
]

const barSnacks: MenuItem[] = [
  { name: 'Real Crisps', price: '£1.5' },
  { name: "Nobby's Nuts", price: '£1.5' },
  { name: 'Mr Filberts Rosemary Almonds', price: '£3.2' },
  { name: 'Mr Filberts Chilli Crackers', price: '£2.4' },
  { name: 'Mr Filberts Adnams Beer Nuts', price: '£2.6' },
  { name: "Olly's Pretzels", price: '£1.8' },
  { name: 'Naked Bars', price: '£1.9' },
  { name: 'Eat Real Bars', price: '£2.0' },
  { name: "Tony's Chocolate", price: '£2.8' },
]

const sparklingWines: SparklingItem[] = [
  { name: 'Lanson Black Label', label: 'Champagne', price: '£52' },
  { name: 'Moet and Chandon', label: 'Champagne', price: '£69', priceMagnum: '£138' },
  { name: 'Veuve Clicquot', label: 'Champagne', price: '£67', priceMagnum: '£135' },
  { name: 'Prosecco', price: '£24' },
  { name: 'Prosecco Mini', price: '£6.8' },
]

const whiteRoseWines: WineItem[] = [
  { name: 'House White', p125: '£5.2', p175: '£6.6', p250: '£8.5', pBtl: '£23' },
  { name: 'Flying Zebra', origin: 'Chenin Blanc, S.Africa', p125: '£5.0', p175: '£6.6', p250: '£9.5', pBtl: '£27' },
  { name: 'Mountain Range', origin: 'Sauvignon Blanc, Chile', p125: '£5.8', p175: '£6.7', p250: '£9.3', pBtl: '£27' },
  { name: 'Ripieno', origin: 'Chardonnay, France', p125: '£5.0', p175: '£6.6', p250: '£9.3', pBtl: '£27' },
  { name: 'Avito Rose', origin: 'Pinot Grigio, Italy', p125: '£5.8', p175: '£6.6', p250: '£9.3', pBtl: '£27' },
]

const redWines: WineItem[] = [
  { name: 'House Red', p125: '£5.2', p175: '£6.6', p250: '£8.5', pBtl: '£23' },
  { name: 'Pince Alchman', origin: 'Malbec, Chile', p125: '£5.0', p175: '£6.6', p250: '£9.3', pBtl: '£27' },
  { name: 'Rangapoi', origin: 'Merlot, New Zealand', p125: '£5.8', p175: '£6.6', p250: '£9.3', pBtl: '£27' },
]

const frozenCocktails: CocktailItem[] = [
  { name: 'Rowans Kiss', description: 'Merlot, Dark Rum, Orange and Lime', price: '9.8' },
  { name: 'Rowans Pornstar', description: 'Vanilla Vodka, Prosecco, Passion Fruit', price: '9.8' },
  { name: 'Mojito', description: 'White Rum + Mint, Fresh Mint', price: '9.8' },
  { name: 'Vodka Mojito', description: 'Vodka, Lime + Mint', price: '9.8' },
  { name: 'Kamikaze', description: 'Vodka, Orange and Lime', price: '9.8' },
  { name: 'Berry Daiquiri', description: 'Rum, Lime Juice and Lime', price: '9.8' },
  { name: 'San Francisco', description: 'Vodka, Strawberry and Lime', price: '9.8' },
  { name: 'Margarita', description: 'Tequila, Orange and Lime, Lime Wedge', price: '9.8' },
]

const classicCocktails: CocktailItem[] = [
  { name: 'Dark + Stormy', description: 'Rum & Fever Tree Ginger Beer', price: '18' },
  { name: 'Gin Gin Mule', description: 'Gin, Fever Tree Ginger Beer', price: '18' },
  { name: 'Negroni', description: 'Campari, Tanqueray, Martini', price: '18' },
  { name: 'Aperol Spritz', description: 'Aperol, Prosecco, Soda, Orange Slice', price: '18' },
  { name: 'Tequila Sunrise', description: 'Tequila, Orange Juice, Grenadine', price: '18' },
  { name: 'Long Island Iced Tea', description: 'Tequila, Bacardi, Vodka, Gin, Cointreau', price: '18' },
  { name: 'Tequila Darkness (shot)', description: 'Kahlúa, Baileys', price: '6.2' },
]

const mocktails: CocktailItem[] = [
  { name: 'Frozen Mohito', description: 'Frozen Mohito Mix, Fresh Mint, Lime', price: '4.5' },
  { name: 'Frozen Virgin Margherita', description: 'Orange and Lime', price: '4.5' },
  { name: 'Frozen Berry Daiquiri', description: 'Mohito Mix, Strawberry and Lime, Fresh Lime', price: '4.5' },
  { name: 'Coconut Pineapple Mohito', description: 'Bacardi, Dark Rum, Orange and Lime', price: '9.8' },
]

const soft: MenuItem[] = [
  { name: 'House Sodas', price: '£2.8' },
  { name: 'Lime + Soda', price: '£1.0' },
  { name: 'Slushies', price: '£3.7' },
  { name: 'Karma Cola', price: '£3.5' },
  { name: 'Fever Tree Tonic', price: '£3.4' },
  { name: 'Fever Tree Ginger Ale / Beer', price: '£3.4' },
  { name: 'Red Bull', price: '£3.5' },
  { name: 'Kombucha', price: '£3.5' },
  { name: 'Innocent Smoothies', price: '£3.0' },
  { name: 'Coconut Juice', price: '£3.5' },
  { name: 'Fruit Juice', price: '£2.9' },
  { name: 'J20', price: '£3.5' },
  { name: 'Sparkling Water', price: '£2.5' },
  { name: 'Yorkshire Tea', price: '£3.6' },
  { name: 'Coffee', price: '£3.0' },
]

const spiritsRow1: SpiritsGroup[] = [
  {
    title: 'Vodka',
    items: [
      { name: 'Smirnoff', price: '£4.6' },
      { name: 'Smirnoff Vanilla', price: '£4.9' },
      { name: 'Absolut', price: '£6.7' },
      { name: 'Absolut Raspberry', price: '£6.7' },
      { name: 'Belvedere', price: '£5.3' },
      { name: 'Ciroc', price: '£5.6' },
      { name: 'Ciroc Pineapple', price: '£5.6' },
      { name: 'Grey Goose', price: '£9.8' },
    ],
  },
  {
    title: 'Rum',
    items: [
      { name: 'Bacardi', price: '£4.6' },
      { name: 'Bacardi Coconut', price: '£4.8' },
      { name: 'Bacardi Dark', price: '£4.7' },
      { name: 'Bacardi Caribbean', price: '£4.8' },
      { name: 'Sailor Jerry', price: '£4.8' },
      { name: 'Kraken Spiced', price: '£4.9' },
      { name: 'Kraken Coffee', price: '£4.6' },
      { name: 'Kraken Cherry', price: '£4.6' },
      { name: 'Malibu', price: '£4.5' },
    ],
  },
  {
    title: 'Tequila',
    items: [
      { name: 'Jose Cuervo', price: '£4.9' },
      { name: 'Cazcabel', price: '£5.5' },
      { name: '1800 Coconut', price: '£5.5' },
      { name: 'Patron Silver', price: '£6.3' },
      { name: 'Casamigos Blanco', price: '£6.7' },
      { name: 'Tequila Rose', price: '£4.0' },
    ],
  },
]

const spiritsRow2: SpiritsGroup[] = [
  {
    title: 'Gin',
    items: [
      { name: 'Gordons', price: '£4.6' },
      { name: 'Gordons Pink', price: '£4.5' },
      { name: 'Tarquin Cornish', price: '£6.5' },
      { name: 'Tanqueray', price: '£4.8' },
      { name: 'Tanqueray Rangpur', price: '£4.8' },
      { name: "Bobby's Sapphire", price: '£4.6' },
      { name: 'Warners Rhubarb', price: '£4.9' },
      { name: 'Hendricks', price: '£6.5' },
      { name: 'Sipsmith', price: '£5.3' },
      { name: 'Monkey 47', price: '£9.8' },
    ],
  },
  {
    title: 'Whisky',
    items: [
      { name: 'Jameson', price: '£6.6' },
      { name: 'Jack Daniels', price: '£6.4' },
      { name: 'Jack Daniels Fire', price: '£4.8' },
      { name: 'Jack Daniels Honey', price: '£4.8' },
      { name: 'Jack Daniels Apple', price: '£6.8' },
      { name: 'GlenFiddich', price: '£6.8' },
      { name: 'Johnnie Walker Black', price: '£5.2' },
      { name: 'Makers Mark', price: '£5.5' },
    ],
  },
  {
    title: 'Brandy',
    items: [
      { name: 'Courvoisier', price: '£4.8' },
      { name: 'Hennessy VS', price: '£5.3' },
      { name: 'Martell VSOP', price: '£5.7' },
    ],
  },
  {
    title: 'Liquors',
    items: [
      { name: 'Southern Comfort', price: '£4.7' },
      { name: 'Cointreau', price: '£4.7' },
      { name: 'Disaronno', price: '£4.6' },
      { name: 'Kahlúa', price: '£4.2' },
      { name: 'Sambuca', price: '£3.6' },
      { name: 'Jagermeister', price: '£4.9' },
      { name: 'Chartreuse', price: '£8.8' },
      { name: 'Baileys', price: '£3.7' },
    ],
  },
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,300;0,400;0,700;1,300&display=swap');

.menu-page {
  background: #000;
  color: #fff;
  font-family: 'JetBrains Mono', monospace;
  min-height: 100vh;
}

/* ── Header ── */
.menu-header {
  text-align: center;
  padding: 136px 24px 32px;
}

.menu-title {
  font-size: 40px;
  font-weight: 400;
  letter-spacing: 0.15em;
  color: #e8000d;
  margin: 0 0 28px;
}

.menu-logo {
  height: 90px;
  width: auto;
  display: block;
  margin: 0 auto;
}

/* ── Content wrapper ── */
.menu-content {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 16px 64px 16px;
  /* right padding bumped on mobile — fixed nav buttons sit top-right */
  padding-right: 72px;
}

/* ── Grid rows ── */
.row {
  display: grid;
  gap: 24px;
  margin-bottom: 32px;
}

.two-col   { grid-template-columns: 1fr; }
.three-col { grid-template-columns: 1fr; }
.four-col  { grid-template-columns: 1fr; }

/* ── Section block ── */
.section {
  margin-bottom: 24px;
}

.section-heading {
  font-size: 13px;
  font-weight: 400;
  color: #e8000d;
  text-align: center;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  border-bottom: 1px solid #2a2a2a;
  padding-bottom: 6px;
  margin: 0 0 10px;
}

.section-note {
  font-size: 9px;
  color: #888;
  font-style: italic;
  text-align: center;
  margin: -4px 0 10px;
  letter-spacing: 0.05em;
}

/* ── Item rows ── */
.item-list {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.item-row {
  display: flex;
  align-items: baseline;
  gap: 6px;
  font-size: 11px;
  line-height: 1.5;
}

.item-name {
  flex: 1;
  color: #fff;
}

.item-detail {
  color: #888;
  font-size: 10px;
  white-space: nowrap;
}

.item-price {
  color: #fff;
  white-space: nowrap;
  font-size: 11px;
}

.item-sublabel {
  font-size: 9px;
  color: #888;
  margin-top: 1px;
  margin-bottom: 4px;
  font-style: italic;
}

/* ── Sparkling wines ── */
.sparkling-header {
  display: flex;
  gap: 8px;
  font-size: 9px;
  color: #666;
  margin-bottom: 4px;
  padding: 0 0 2px;
}

.sparkling-header span:not(.flex-1) {
  width: 44px;
  text-align: right;
}

.sparkling-row {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 11px;
  margin-bottom: 6px;
}

.sparkling-name {
  flex: 1;
}

.mag-price {
  width: 44px;
  text-align: right;
}

/* ── Sized wines ── */
.wine-size-header {
  display: flex;
  gap: 4px;
  font-size: 9px;
  color: #666;
  margin-bottom: 4px;
}

.wine-size-header span:not(.flex-1) {
  width: 28px;
  text-align: right;
}

.wine-row {
  display: flex;
  align-items: flex-start;
  gap: 4px;
  font-size: 11px;
  margin-bottom: 6px;
}

.wine-name {
  flex: 1;
}

.wine-prices {
  display: flex;
  gap: 4px;
}

.wine-prices span {
  width: 28px;
  text-align: right;
  white-space: nowrap;
}

/* ── Cocktail rows ── */
.cocktail-row {
  margin-bottom: 8px;
}

.cocktail-top {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 8px;
  font-size: 11px;
}

/* ── Wines column stacks sections vertically ── */
.wines-col {
  display: flex;
  flex-direction: column;
  gap: 0;
}

/* ── Footer ── */
.menu-footer {
  text-align: center;
  padding: 32px 0 16px;
  border-top: 1px solid #222;
}

.menu-footer p {
  color: #e8000d;
  font-size: 14px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
}

/* ── Desktop breakpoints ── */
@media (min-width: 768px) {
  .menu-header { padding: 80px 24px 32px; }
  .menu-title  { font-size: 64px; }
  .menu-logo   { height: 120px; }
  .menu-content { padding: 0 48px 80px; }

  .two-col   { grid-template-columns: 1fr 1fr; }
  .three-col { grid-template-columns: 1fr 1fr 1fr; }
  .four-col  { grid-template-columns: 1fr 1fr 1fr 1fr; }

  .item-row   { font-size: 12px; }
  .item-price { font-size: 12px; }
  .section-heading { font-size: 14px; }
}

@media (min-width: 1024px) {
  .item-row { font-size: 13px; }
  .item-price { font-size: 13px; }
}
</style>

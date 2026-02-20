export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const { startDate, endDate } = query

  if (!startDate || !endDate) {
    throw createError({ statusCode: 400, message: 'startDate and endDate required' })
  }

  const url = new URL('https://rowans-djs.vercel.app/api/schedule')
  url.searchParams.set('startDate', String(startDate))
  url.searchParams.set('endDate', String(endDate))

  return $fetch(url.toString())
})

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const { startDate, endDate } = query

  if (!startDate || !endDate) {
    throw createError({ statusCode: 400, message: 'startDate and endDate required' })
  }

  const url = `https://rowans-djs.vercel.app/api/schedule?startDate=${startDate}&endDate=${endDate}`
  return $fetch(url)
})

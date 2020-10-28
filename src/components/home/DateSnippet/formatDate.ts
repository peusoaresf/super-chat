const formatDate = (dateObj: Date) => {
  const isToday = (d: Date) => d.toDateString() === (new Date()).toDateString()

  const isYesterday = (d: Date) => {
    const yest = new Date()
    yest.setDate(yest.getDate() - 1)
    return d.toDateString() === yest.toDateString()
  }

  const toTodayString = (d: Date) => `${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`

  if (isToday(dateObj)) {
    return toTodayString(dateObj)
  }

  if (isYesterday(dateObj)) {
    return 'yesterday'
  }

  return dateObj.toLocaleDateString()
}

export default formatDate

export function getCurrentWeekDay(): string {
  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const date = new Date()
  const weekdayNumber = date.getDay()

  if (weekdayNumber >= 0 && weekdayNumber <= 6) {
    return weekdays[weekdayNumber]
  }

  throw new Error('Weekday number must be between 0 and 6')
}

export function formatDate(input: string | number): string {
  const date = new Date(input)
  return date.toLocaleDateString('en-GB', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

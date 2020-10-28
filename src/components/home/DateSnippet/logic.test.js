import { formatDate } from './logic'

describe('Date formatter', () => {
  it('formats today correctly', () => {
    const today = new Date();
    today.setHours(5)
    today.setMinutes(8)

    expect(formatDate(today)).toEqual('05:08')
  })

  it('formats yesterday correctly', () => {
    const yesterday = new Date()
    yesterday.setDate(yesterday.getDate() - 1)

    expect(formatDate(yesterday)).toEqual('yesterday')
  })

  it('formats older dates correctly', () => {
    const date = new Date()
    date.setDate(1)
    date.setMonth(5)
    date.setFullYear(2015)

    expect(formatDate(date)).toEqual(date.toLocaleDateString())
  })
})
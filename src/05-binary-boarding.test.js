import { seats } from './05-input'
import {
  findSeatId,
  findHighestSeatId,
  findMissingSeatId,
} from './05-binary-boarding'

describe('findSeatId', () => {
  it('returns numbers for the row, column, and seat id', () => {
    const [row, column, seatId] = findSeatId('FBFBBFFRLR')

    expect(typeof row).toBe('number')
    expect(typeof column).toBe('number')
    expect(typeof seatId).toBe('number')
  })

  it('returns 357 for a seat in row 44, column 5', () => {
    const [row, column, seatId] = findSeatId('FBFBBFFRLR')

    expect(row).toBe(44)
    expect(column).toBe(5)
    expect(seatId).toBe(357)
  })

  it('returns 119 for a seat in row 14, column 7', () => {
    const [row, column, seatId] = findSeatId('FFFBBBFRRR')

    expect(row).toBe(14)
    expect(column).toBe(7)
    expect(seatId).toBe(119)
  })
  it('returns 820 for a seat in row 102, column 4', () => {
    const [row, column, seatId] = findSeatId('BBFFBBFRLL')

    expect(row).toBe(102)
    expect(column).toBe(4)
    expect(seatId).toBe(820)
  })
})

describe('findHighestSeatId', () => {
  it('returns a number', () => {
    expect(typeof findHighestSeatId(seats)).toBe('number')
  })

  it('returns the correct highest id for the sample seats', () => {
    const sampleSeats = ['BFFFBBFRRR', 'FFFBBBFRRR', 'BBFFBBFRLL']
    expect(findHighestSeatId(sampleSeats)).toBe(820)
  })

  it('returns the correct highest id for the seats', () => {
    expect(findHighestSeatId(seats)).toBe(816)
  })
})

describe('findMissingSeatId', () => {
  it('returns the missing seat id', () => {
    expect(findMissingSeatId(seats)).toBe(539)
  })
})

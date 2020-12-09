import { numbers } from './09-input'
import {
  findFirstIncorrectNumber,
  findContiguousRange,
} from './09-encoding-error'
import { it } from '@jest/globals'

describe('findFirstIncorrectNumber', () => {
  it('returns a number', () => {
    expect(typeof findFirstIncorrectNumber(numbers)).toBe('number')
  })

  it('returns 127 for the sample input', () => {
    const sampleNumbers = [
      35,
      20,
      15,
      25,
      47,
      40,
      62,
      55,
      65,
      95,
      102,
      117,
      150,
      182,
      127,
      219,
      299,
      277,
      309,
      576,
    ]

    expect(findFirstIncorrectNumber(sampleNumbers, 5)).toBe(127)
  })

  it('returns the first unfound sum based on the problem input', () => {
    expect(findFirstIncorrectNumber(numbers)).toBe(104054607)
  })

  it('returns -1 if everything sums correctly', () => {
    const sampleNumbersWithNoIssues = [
      35,
      20,
      15,
      25,
      47,
      40,
      62,
      55,
      65,
      95,
      102,
      117,
      150,
      182,
    ]

    expect(findFirstIncorrectNumber(sampleNumbersWithNoIssues)).toBe(-1)
  })
})

describe('findContiguousRange', () => {
  it('returns an array of three numbers', () => {
    const [min, max, sum] = findContiguousRange(
      numbers,
      findFirstIncorrectNumber(numbers)
    )

    expect(typeof min).toBe('number')
    expect(typeof max).toBe('number')
    expect(typeof sum).toBe('number')
  })

  it('returns [15, 47, 62[ for the sample input', () => {
    const sampleNumbers = [
      35,
      20,
      15,
      25,
      47,
      40,
      62,
      55,
      65,
      95,
      102,
      117,
      150,
      182,
      127,
      219,
      299,
      277,
      309,
      576,
    ]

    const targetSum = findFirstIncorrectNumber(sampleNumbers, 5)
    const [min, max, sum] = findContiguousRange(sampleNumbers, targetSum)

    expect(min).toBe(15)
    expect(max).toBe(47)
    expect(sum).toBe(62)
  })

  it('returns the correct sum for the problem input', () => {
    const targetSum = findFirstIncorrectNumber(numbers)
    const [min, max, sum] = findContiguousRange(numbers, targetSum)

    expect(min).toBe(4574403)
    expect(max).toBe(9361394)
    expect(sum).toBe(13935797)
  })

  it('returns [-1, -1, -1] if no contiguous range can be found', () => {
    const sampleNumbersWithoutAContiguousRange = [
      35,
      20,
      15,
      25,
      47,
      40,
      62,
      55,
      65,
      95,
      102,
      117,
      150,
      182,
    ]

    const targetSum = findFirstIncorrectNumber(
      sampleNumbersWithoutAContiguousRange,
      5
    )
    const [min, max, sum] = findContiguousRange(
      sampleNumbersWithoutAContiguousRange,
      targetSum
    )

    expect(min).toBe(-1)
    expect(max).toBe(-1)
    expect(sum).toBe(-1)
  })
})

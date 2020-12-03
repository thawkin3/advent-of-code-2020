import { passwordInputs } from './02-input'
import {
  validPasswordCount,
  validPasswordCountByPosition,
} from './02-password-philosophy'

describe('validPasswordCount', () => {
  it('returns a number', () => {
    expect(typeof validPasswordCount(passwordInputs)).toBe('number')
  })

  it('returns the total number of valid passwords found in the sample input', () => {
    const sampleInput = ['1-3 a: abcde', '1-3 b: cdefg', '2-9 c: ccccccccc']
    expect(validPasswordCount(sampleInput)).toBe(2)
  })

  it('returns the total number of valid passwords found in the input', () => {
    expect(validPasswordCount(passwordInputs)).toBe(607)
  })
})

describe('validPasswordCountByPosition', () => {
  it('returns a number', () => {
    expect(typeof validPasswordCountByPosition(passwordInputs)).toBe('number')
  })

  it('returns the total number of valid passwords found in the sample input', () => {
    const sampleInput = ['1-3 a: abcde', '1-3 b: cdefg', '2-9 c: ccccccccc']
    expect(validPasswordCountByPosition(sampleInput)).toBe(1)
  })

  it('uses a 1-based index for the positions', () => {
    expect(validPasswordCountByPosition(['3-4 c: abcde'])).toBe(1)
    expect(validPasswordCountByPosition(['3-4 e: abcde'])).toBe(0)
  })

  it('returns the total number of valid passwords found in the input', () => {
    expect(validPasswordCountByPosition(passwordInputs)).toBe(321)
  })
})

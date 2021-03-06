import { reportInputs } from './01-input'
import {
  find2020FromPairUsingArray,
  find2020FromPairUsingObject,
  find2020FromTriplet,
} from './01-report-repair'

describe('find2020', () => {
  describe('find2020FromPairUsingArray', () => {
    it('returns the product of two numbers that sum to 2020', () => {
      const result = find2020FromPairUsingArray(reportInputs)

      expect(result[0] + result[1]).toBe(2020)
      expect(result[0] * result[1]).toBe(319531)
      expect(result[2]).toBe(319531)
    })

    it('returns null if there are not two numbers that sum to 2020 in the array', () => {
      expect(find2020FromPairUsingArray([1, 2])).toBe(null)
    })
  })

  describe('find2020FromPairUsingObject', () => {
    it('returns the product of two numbers that sum to 2020', () => {
      const result = find2020FromPairUsingObject(reportInputs)

      expect(result[0] + result[1]).toBe(2020)
      expect(result[0] * result[1]).toBe(319531)
      expect(result[2]).toBe(319531)
    })

    it('returns null if there are not two numbers that sum to 2020 in the array', () => {
      expect(find2020FromPairUsingObject([1, 2])).toBe(null)
    })
  })

  describe('find2020FromTriplet', () => {
    it('returns the product of three numbers that sum to 2020', () => {
      const result = find2020FromTriplet(reportInputs)

      expect(result[0] + result[1] + result[2]).toBe(2020)
      expect(result[0] * result[1] * result[2]).toBe(244300320)
      expect(result[3]).toBe(244300320)
    })

    it('returns null if there are not three numbers that sum to 2020 in the array', () => {
      expect(find2020FromTriplet([1, 2, 3])).toBe(null)
    })
  })
})

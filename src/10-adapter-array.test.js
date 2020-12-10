import { joltageRatings } from './10-input'
import { getJoltageDifferences } from './10-adapter-array'

describe('getJoltageDifferences', () => {
  it('returns a number for each of the three array elements returned', () => {
    const [
      oneJoltDifferences,
      threeJoltDifferences,
      product,
    ] = getJoltageDifferences(joltageRatings)

    expect(typeof oneJoltDifferences).toBe('number')
    expect(typeof threeJoltDifferences).toBe('number')
    expect(typeof product).toBe('number')
  })

  it('returns [7, 5, 35] for the sample input', () => {
    const sampleJoltageRatings = [16, 10, 15, 5, 1, 11, 7, 19, 6, 12, 4]

    const [
      oneJoltDifferences,
      threeJoltDifferences,
      product,
    ] = getJoltageDifferences(sampleJoltageRatings)

    expect(oneJoltDifferences).toBe(7)
    expect(threeJoltDifferences).toBe(5)
    expect(product).toBe(35)
  })

  it('returns [22, 10, 220] for the second set of sample input', () => {
    const sampleJoltageRatings = [
      28,
      33,
      18,
      42,
      31,
      14,
      46,
      20,
      48,
      47,
      24,
      23,
      49,
      45,
      19,
      38,
      39,
      11,
      1,
      32,
      25,
      35,
      8,
      17,
      7,
      9,
      4,
      2,
      34,
      10,
      3,
    ]

    const [
      oneJoltDifferences,
      threeJoltDifferences,
      product,
    ] = getJoltageDifferences(sampleJoltageRatings)

    expect(oneJoltDifferences).toBe(22)
    expect(threeJoltDifferences).toBe(10)
    expect(product).toBe(220)
  })

  it('returns [74, 35, 2590] for the given problem input', () => {
    const [
      oneJoltDifferences,
      threeJoltDifferences,
      product,
    ] = getJoltageDifferences(joltageRatings)

    expect(oneJoltDifferences).toBe(74)
    expect(threeJoltDifferences).toBe(35)
    expect(product).toBe(2590)
  })
})

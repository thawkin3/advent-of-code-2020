import { expect, it } from '@jest/globals'
import { forest } from './03-input'
import {
  countTreesInPath,
  countTreesInPathForGivenSlope,
} from './03-toboggan-trajectory'

describe('countTreesInPath', () => {
  it('returns a number', () => {
    expect(typeof countTreesInPath(forest)).toBe('number')
  })

  it('returns 7 trees for the sample input', () => {
    const sampleForest = [
      '..##.......',
      '#...#...#..',
      '.#....#..#.',
      '..#.#...#.#',
      '.#...##..#.',
      '..#.##.....',
      '.#.#.#....#',
      '.#........#',
      '#.##...#...',
      '#...##....#',
      '.#..#...#.#',
    ]

    expect(countTreesInPath(sampleForest)).toBe(7)
  })

  it('wraps appropriately at the end of rows', () => {
    const sampleForest = ['....', '...#', '..#.', '.#..']

    expect(countTreesInPath(sampleForest)).toBe(3)
  })

  it('returns the correct number of trees encountered', () => {
    expect(countTreesInPath(forest)).toBe(282)
  })
})

describe('countTreesInPathForGivenSlope', () => {
  it('returns a number', () => {
    expect(typeof countTreesInPathForGivenSlope(forest)).toBe('number')
  })

  it('returns 2, 7, 3, 4, 2 trees for the sample input', () => {
    const sampleForest = [
      '..##.......',
      '#...#...#..',
      '.#....#..#.',
      '..#.#...#.#',
      '.#...##..#.',
      '..#.##.....',
      '.#.#.#....#',
      '.#........#',
      '#.##...#...',
      '#...##....#',
      '.#..#...#.#',
    ]

    expect(countTreesInPathForGivenSlope(sampleForest, 1, 1)).toBe(2)
    expect(countTreesInPathForGivenSlope(sampleForest, 3, 1)).toBe(7)
    expect(countTreesInPathForGivenSlope(sampleForest, 5, 1)).toBe(3)
    expect(countTreesInPathForGivenSlope(sampleForest, 7, 1)).toBe(4)
    expect(countTreesInPathForGivenSlope(sampleForest, 1, 2)).toBe(2)
  })

  it('wraps appropriately at the end of rows', () => {
    const sampleForest = ['....', '...#', '..#.', '.#..']

    expect(countTreesInPathForGivenSlope(sampleForest, 3, 1)).toBe(3)
  })

  it('returns the correct number of trees encountered', () => {
    expect(countTreesInPathForGivenSlope(forest, 1, 1)).toBe(53)
    expect(countTreesInPathForGivenSlope(forest, 3, 1)).toBe(282)
    expect(countTreesInPathForGivenSlope(forest, 5, 1)).toBe(54)
    expect(countTreesInPathForGivenSlope(forest, 7, 1)).toBe(54)
    expect(countTreesInPathForGivenSlope(forest, 1, 2)).toBe(22)

    expect(53 * 282 * 54 * 54 * 22).toBe(958815792)
  })
})

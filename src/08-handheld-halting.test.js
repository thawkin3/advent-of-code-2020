import { gameInstructions } from './08-input'
import {
  getAccumulatorValueBeforeLoop,
  fixJmpOrNopCommandCorruption,
} from './08-handheld-halting'

describe('getAccumulatorValueBeforeLoop', () => {
  it('returns a number', () => {
    expect(typeof getAccumulatorValueBeforeLoop(gameInstructions)).toBe(
      'number'
    )
  })

  it('returns 5 for the sample input', () => {
    const sampleInput = [
      'nop +0',
      'acc +1',
      'jmp +4',
      'acc +3',
      'jmp -3',
      'acc -99',
      'acc +1',
      'jmp -4',
      'acc +6',
    ]

    expect(getAccumulatorValueBeforeLoop(sampleInput)).toBe(5)
  })

  it('returns the accumulator value before the infinite loop for the problem input', () => {
    expect(getAccumulatorValueBeforeLoop(gameInstructions)).toBe(1727)
  })
})

describe('fixJmpOrNopCommandCorruption', () => {
  it('returns a number', () => {
    expect(typeof fixJmpOrNopCommandCorruption(gameInstructions)).toBe('number')
  })

  it('returns 8 for the sample input', () => {
    const sampleInput = [
      'nop +0',
      'acc +1',
      'jmp +4',
      'acc +3',
      'jmp -3',
      'acc -99',
      'acc +1',
      'jmp -4',
      'acc +6',
    ]

    expect(fixJmpOrNopCommandCorruption(sampleInput)).toBe(8)
  })

  it('returns the accumulator value after fixing one corrupted command', () => {
    expect(fixJmpOrNopCommandCorruption(gameInstructions)).toBe(552)
  })

  it('returns 0 if the commands cannot be fixed to exit successfully', () => {
    const sampleInput = ['nop +0', 'jmp -1', 'jmp -1']

    expect(fixJmpOrNopCommandCorruption(sampleInput)).toBe(0)
  })
})

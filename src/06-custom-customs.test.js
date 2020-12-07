import { customsAnswers } from './06-input'
import {
  findYesAnswersByGroup,
  findYesAnswersForAllByGroup,
} from './06-custom-customs'

describe('findYesAnswersByGroup', () => {
  it('returns a number', () => {
    expect(typeof findYesAnswersByGroup(customsAnswers)).toBe('number')
  })

  it('returns 11 for the sample input', () => {
    const sampleInput = `abc

a
b
c

ab
ac

a
a
a
a

b`
    expect(findYesAnswersByGroup(sampleInput)).toBe(11)
  })

  it('returns the correct total number of yes questions by group', () => {
    expect(findYesAnswersByGroup(customsAnswers)).toBe(6443)
  })
})

describe('findYesAnswersForAllByGroup', () => {
  it('returns a number', () => {
    expect(typeof findYesAnswersForAllByGroup(customsAnswers)).toBe('number')
  })

  it('returns 6 for the sample input', () => {
    const sampleInput = `abc

a
b
c

ab
ac

a
a
a
a

b`
    expect(findYesAnswersForAllByGroup(sampleInput)).toBe(6)
  })

  it('returns the correct total number of yes questions by group', () => {
    expect(findYesAnswersForAllByGroup(customsAnswers)).toBe(3232)
  })
})

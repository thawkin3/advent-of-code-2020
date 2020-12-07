export const findYesAnswersByGroup = customsAnswers => {
  const customsAnswersByGroup = customsAnswers
    .split('\n\n')
    .map(answer => answer.replace(/\n/g, ''))

  let uniqueAnswers = 0

  for (let i = 0; i < customsAnswersByGroup.length; i++) {
    const groupAnswers = customsAnswersByGroup[i]
    const uniqueGroupAnswers = {}

    for (let j = 0; j < groupAnswers.length; j++) {
      if (!uniqueGroupAnswers.hasOwnProperty(groupAnswers[j])) {
        uniqueGroupAnswers[groupAnswers[j]] = true
      }
    }

    uniqueAnswers += Object.keys(uniqueGroupAnswers).length
  }

  return uniqueAnswers
}

export const findYesAnswersForAllByGroup = customsAnswers => {
  const customsAnswersByGroup = customsAnswers.split('\n\n')

  let uniqueAnswers = 0

  for (let i = 0; i < customsAnswersByGroup.length; i++) {
    const groupAnswers = customsAnswersByGroup[i].split('\n')
    const uniqueGroupAnswers = {}

    for (let j = 0; j < groupAnswers.length; j++) {
      const individualAnswers = groupAnswers[j]

      for (let k = 0; k < individualAnswers.length; k++) {
        if (!uniqueGroupAnswers.hasOwnProperty(individualAnswers[k])) {
          uniqueGroupAnswers[individualAnswers[k]] = 1
        } else {
          uniqueGroupAnswers[individualAnswers[k]]++
        }
      }
    }

    const answerKeys = Object.keys(uniqueGroupAnswers)
    let questionsAnsweredByAll = 0

    for (let n = 0; n < answerKeys.length; n++) {
      if (uniqueGroupAnswers[answerKeys[n]] === groupAnswers.length) {
        questionsAnsweredByAll++
      }
    }

    uniqueAnswers += questionsAnsweredByAll
  }

  return uniqueAnswers
}

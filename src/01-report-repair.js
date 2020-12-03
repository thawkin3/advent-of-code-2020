export const find2020FromPairUsingArray = values => {
  const checkedValues = []

  for (let i = 0; i < values.length; i++) {
    const currentValue = values[i]
    const counterpartValue = 2020 - currentValue

    if (!checkedValues.includes(currentValue)) {
      checkedValues.push(currentValue)
      checkedValues.push(counterpartValue)
    } else {
      return [currentValue, counterpartValue, currentValue * counterpartValue]
    }
  }
}

export const find2020FromPairUsingObject = values => {
  const checkedValues = {}

  for (let i = 0; i < values.length; i++) {
    const currentValue = values[i]
    const counterpartValue = 2020 - currentValue

    if (!checkedValues.hasOwnProperty(currentValue)) {
      checkedValues[currentValue] = currentValue
      checkedValues[counterpartValue] = counterpartValue
    } else {
      return [currentValue, counterpartValue, currentValue * counterpartValue]
    }
  }
}

export const find2020FromTriplet = values => {
  for (let i = 0; i < values.length; i++) {
    for (let j = 0; j < values.length; j++) {
      for (let k = 0; k < values.length; k++) {
        if (values[i] + values[j] + values[k] === 2020) {
          return [
            values[i],
            values[j],
            values[k],
            values[i] * values[j] * values[k],
          ]
        }
      }
    }
  }
}

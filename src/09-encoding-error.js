export const findFirstIncorrectNumber = (numbers, preambleLength = 25) => {
  for (let i = preambleLength; i < numbers.length; i++) {
    const currentRequiredSum = numbers[i]
    const checkedNumbers = {}
    let noPairsFound = true

    for (let j = i - preambleLength; j < i; j++) {
      if (checkedNumbers.hasOwnProperty(numbers[j])) {
        noPairsFound = false
        break
      }

      checkedNumbers[numbers[j]] = true
      checkedNumbers[currentRequiredSum - numbers[j]] = true
    }

    if (noPairsFound) {
      return currentRequiredSum
    }
  }

  return -1
}

export const findContiguousRange = (numbers, targetSum) => {
  const filteredNumbers = numbers.filter(num => num < targetSum)

  for (let startIndex = 0; startIndex < filteredNumbers.length; startIndex++) {
    let sum = 0
    let checkedNumbers = []

    for (let j = startIndex; j < filteredNumbers.length; j++) {
      sum += filteredNumbers[j]
      checkedNumbers.push(filteredNumbers[j])

      if (sum > targetSum) {
        break
      }

      if (sum === targetSum) {
        const min = Math.min(...checkedNumbers)
        const max = Math.max(...checkedNumbers)

        return [min, max, min + max]
      }
    }
  }

  return [-1, -1, -1]
}

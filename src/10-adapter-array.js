export const getJoltageDifferences = joltageRatings => {
  const outletJoltage = 0
  const allAdapters = [outletJoltage, ...joltageRatings.sort((a, b) => a - b)]

  let oneJoltDifferencesCount = 0
  let threeJoltDifferencesCount = 0

  for (let i = 1; i < allAdapters.length; i++) {
    const difference = allAdapters[i] - allAdapters[i - 1]
    if (difference === 1) {
      oneJoltDifferencesCount++
    } else if (difference === 3) {
      threeJoltDifferencesCount++
    }
  }

  // include your built-in adapter which is 3 greater than the lat adapter
  threeJoltDifferencesCount++

  return [
    oneJoltDifferencesCount,
    threeJoltDifferencesCount,
    oneJoltDifferencesCount * threeJoltDifferencesCount,
  ]
}

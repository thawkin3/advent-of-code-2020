// tree
// parent node
// child nodes

export const findBagsThatMayContainAShinyGoldBag = (
  rules,
  searchColors = ['shiny gold'],
  previousResults = []
) => {
  const updatedResults = [...previousResults]
  for (let i = 0; i < rules.length; i++) {
    const [bag, bagContents] = rules[i].split(' bags contain ')

    for (let j = 0; j < searchColors.length; j++) {
      if (
        bagContents.indexOf(searchColors[j]) !== -1 &&
        !updatedResults.includes(bag)
      ) {
        updatedResults.push(bag)
      }
    }
  }

  if (previousResults.length === updatedResults.length) {
    return updatedResults.length
  }

  return findBagsThatMayContainAShinyGoldBag(
    rules,
    updatedResults,
    updatedResults
  )
}

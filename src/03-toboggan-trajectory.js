export const countTreesInPath = forest => {
  let currentX = 0
  const changeX = 3
  const forestRowLength = forest[0].length

  let treesEncountered = 0

  for (let i = 0; i < forest.length; i++) {
    if (forest[i].charAt(currentX) === '#') {
      treesEncountered++
    }
    currentX = (currentX + changeX) % forestRowLength
  }

  return treesEncountered
}

export const countTreesInPathForGivenSlope = (forest, changeX, changeY) => {
  let currentX = 0
  const forestRowLength = forest[0].length

  let treesEncountered = 0

  for (let i = 0; i < forest.length; i += changeY) {
    if (forest[i] && forest[i].charAt(currentX) === '#') {
      treesEncountered++
    }
    currentX = (currentX + changeX) % forestRowLength
  }

  return treesEncountered
}

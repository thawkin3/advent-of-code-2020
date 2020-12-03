export const validPasswordCount = values => {
  let numberOfValidPasswords = 0

  values.forEach(line => {
    let [minAndMax, character, password] = line.split(' ')
    const [min, max] = minAndMax.split('-')
    character = character.slice(0, 1)

    let characterCount = password
      .split('')
      .reduce((total, currentCharacter) => {
        return currentCharacter === character ? total + 1 : total
      }, 0)

    if (characterCount >= min && characterCount <= max) {
      numberOfValidPasswords++
    }
  })

  return numberOfValidPasswords
}

export const validPasswordCountByPosition = values => {
  let numberOfValidPasswords = 0

  values.forEach(line => {
    let [firstAndLastPositions, character, password] = line.split(' ')
    const [first, last] = firstAndLastPositions.split('-')
    character = character.slice(0, 1)
    const passwordCharacters = password.split('')
    const firstCharacter = passwordCharacters[first - 1]
    const lastCharacter = passwordCharacters[last - 1]

    if (
      (firstCharacter === character || lastCharacter === character) &&
      firstCharacter !== lastCharacter
    ) {
      numberOfValidPasswords++
    }
  })

  return numberOfValidPasswords
}

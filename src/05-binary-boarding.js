export const findHighestSeatId = seats => {
  const seatIds = seats.map(seat => findSeatId(seat)[2])
  return Math.max(...seatIds)
}

const magicMultiplier = 8

export const findSeatId = seat => {
  const numberOfRowsOnPlane = 128
  const numberOfColumnsOnPlane = 8
  const seatCharacters = seat.split('')

  let currentRowUpperBound = numberOfRowsOnPlane
  let currentRowLowerBound = 0

  let currentColumnUpperBound = numberOfColumnsOnPlane
  let currentColumnLowerBound = 0

  for (let i = 0; i < seatCharacters.length; i++) {
    const character = seatCharacters[i]

    switch (character) {
      case 'F':
        currentRowUpperBound -=
          (currentRowUpperBound - currentRowLowerBound) / 2
        break
      case 'B':
        currentRowLowerBound +=
          (currentRowUpperBound - currentRowLowerBound) / 2
        break
      case 'L':
        currentColumnUpperBound -=
          (currentColumnUpperBound - currentColumnLowerBound) / 2
        break
      case 'R':
        currentColumnLowerBound +=
          (currentColumnUpperBound - currentColumnLowerBound) / 2
        break
    }
  }

  const row = currentRowUpperBound - 1
  const column = currentColumnUpperBound - 1

  return [row, column, row * magicMultiplier + column]
}

export const findMissingSeatId = seats => {
  const seatIds = seats.map(seat => findSeatId(seat)[2])
  seatIds.sort((a, b) => a - b)

  for (let i = 1; i < seatIds.length; i++) {
    if (seatIds[i] - seatIds[i - 1] > 1) {
      return seatIds[i] - 1
    }
  }

  return 0
}

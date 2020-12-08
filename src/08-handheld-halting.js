import { commandDir } from 'yargs'

export const getAccumulatorValueBeforeLoop = commands => {
  const visitedLines = {}
  let accumulator = 0
  let currentLineIndex = 0

  while (!visitedLines.hasOwnProperty(currentLineIndex)) {
    visitedLines[currentLineIndex] = true

    const currentCommand = commands[currentLineIndex]
    const [operation, amount] = currentCommand.split(' ')

    switch (operation) {
      case 'acc':
        accumulator += Number(amount)
        currentLineIndex++
        break
      case 'jmp':
        currentLineIndex += Number(amount)
        break
      case 'nop':
        currentLineIndex++
        break
    }
  }

  return accumulator
}

export const fixJmpOrNopCommandCorruption = commands => {
  let accumulator = 0

  for (let i = 0; i < commands.length; i++) {
    accumulator = 0
    const copiedCommands = [...commands]
    const visitedLines = {}
    let currentLineIndex = 0
    const currentCommand = copiedCommands[i]
    const operation = currentCommand.split(' ')[0]

    if (operation === 'acc') {
      continue
    }

    copiedCommands[i] =
      operation === 'nop'
        ? copiedCommands[i].replace('nop', 'jmp')
        : copiedCommands[i].replace('jmp', 'nop')

    while (
      !visitedLines.hasOwnProperty(currentLineIndex) &&
      currentLineIndex < copiedCommands.length
    ) {
      visitedLines[currentLineIndex] = true

      const currentCommand = copiedCommands[currentLineIndex]
      const [operation, amount] = currentCommand.split(' ')

      switch (operation) {
        case 'acc':
          accumulator += Number(amount)
          currentLineIndex++
          break
        case 'jmp':
          currentLineIndex += Number(amount)
          break
        case 'nop':
          currentLineIndex++
          break
      }
    }

    if (currentLineIndex >= commands.length) {
      return accumulator
    }
  }

  return accumulator
}

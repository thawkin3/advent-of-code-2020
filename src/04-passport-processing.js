const requiredFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid']
const optionalField = 'cid'

export const checkValidPassportFields = passportsText => {
  const passportsArray = passportsText.split('\n\n')

  let validPassportsCount = 0

  for (let i = 0; i < passportsArray.length; i++) {
    const passportItems = passportsArray[i].split(/\s+/)
    const remainingRequiredFields = [...requiredFields]

    for (let j = 0; j < passportItems.length; j++) {
      const messageKey = passportItems[j].split(':')[0]
      const foundIndex = remainingRequiredFields.indexOf(messageKey)

      if (foundIndex > -1) {
        remainingRequiredFields.splice(foundIndex, 1)
      }
    }

    if (remainingRequiredFields.length === 0) {
      validPassportsCount++
    }
  }

  return validPassportsCount
}

const patternInch = /in$/
const patternCentimeter = /cm$/
const patternHairColor = /^#[0-9a-f]{6}$/
const patternPassportId = /^[0-9]{9}$/

const validationRules = {
  byr: val => Number(val) >= 1920 && Number(val) <= 2002,
  iyr: val => Number(val) >= 2010 && Number(val) <= 2020,
  eyr: val => Number(val) >= 2020 && Number(val) <= 2030,
  hgt: val => {
    const endsWithIn = patternInch.test(val)
    const endsWithCm = patternCentimeter.test(val)

    if (endsWithCm) {
      const height = Number(val.split('cm')[0])
      return height >= 150 && height <= 193
    } else if (endsWithIn) {
      const height = Number(val.split('in')[0])
      return height >= 59 && height <= 76
    }

    return false
  },
  hcl: val => patternHairColor.test(val),
  ecl: val => ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(val),
  pid: val => patternPassportId.test(val),
}

export const checkValidPassportFieldsAndValues = passportsText => {
  const passportsArray = passportsText.split('\n\n')

  let validPassportsCount = 0

  for (let i = 0; i < passportsArray.length; i++) {
    const passportItems = passportsArray[i].split(/\s+/)
    const remainingRequiredFields = [...requiredFields]

    for (let j = 0; j < passportItems.length; j++) {
      const [messageKey, value] = passportItems[j].split(':')
      const foundIndex = remainingRequiredFields.indexOf(messageKey)

      if (foundIndex > -1 && validationRules[messageKey](value)) {
        remainingRequiredFields.splice(foundIndex, 1)
      }
    }

    if (remainingRequiredFields.length === 0) {
      validPassportsCount++
    }
  }

  return validPassportsCount
}

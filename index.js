const { n2aMap, a2nMap } = require('./numberMappings')

function convertFromMap(digit, map) {
  return digit.toString().split('').map(num => map[num]).join('')
}

const numberToArabic = (digit) => convertFromMap(digit, n2aMap)

const arabicToNumber = (digit) => convertFromMap(digit, a2nMap)

module.exports = { numberToArabic, arabicToNumber }
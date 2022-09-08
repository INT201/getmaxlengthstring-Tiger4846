const { template } = require('@babel/core')

function getMaxLengthString(arrayOfString) {
  if (arrayOfString === null || arrayOfString === undefined){
  return undefined
}
let arrayOfLength = arrayOfString.map((string)=> string.length);
let maxLength = Math.max(...arrayOfLength);
  return arrayOfString.filter((string) => string.length === maxLength)
}
module.exports = getMaxLengthString

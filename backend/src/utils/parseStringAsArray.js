module.exports = function parseStringAsArray(arrayAsString) {
  let result = [];
  
  if(arrayAsString) {
    result = arrayAsString.split(',').map(tech => tech.trim());
  }
  return result
}
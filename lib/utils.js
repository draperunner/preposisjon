exports.arrayToObject = function arrayToObject (arrayOfKeys, value) {
  var obj = {}
  for (var key in arrayOfKeys) {
    obj[key] = value
  }
  return obj
}

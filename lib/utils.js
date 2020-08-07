exports.arrayToObject = function arrayToObject(arrayOfKeys, value) {
  var obj = {}
  for (var k = 0; k < arrayOfKeys.length; k++) {
    var key = arrayOfKeys[k]
    obj[key] = value
  }
  return obj
}

module.exports = (object)->

  return "" if object is null or object is undefined
  return "" + object.toString()

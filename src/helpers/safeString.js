module.exports = object => {
  if (object == null) {
    return ""
  }
  return `${object.toString()}`
}

module.exports = function(source) {
  return /^\s*$/.test(this.safeString(source))
}

module.exports = function(source, starts, position) {
  const safeSource = this.safeString(source)
  const safeStarts = this.safeString(starts)
  const pos = !position ? 0 : Math.min(this.toPositive(position), safeSource.length)
  return safeSource.lastIndexOf(safeStarts, pos) === pos
}

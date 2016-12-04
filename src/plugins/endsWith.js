module.exports = function (source, ends, position) {
  const safeSource = this.safeString(source);
  const safeEnds = this.safeString(ends);

  let pos;
  if (!position) {
    pos = safeSource.length - safeEnds.length;
  } else {
    pos = Math.min(this.toPositive(position), safeSource.length) - safeEnds.length;
  }

  return pos >= 0 && safeSource.indexOf(safeEnds, pos) === pos;
};

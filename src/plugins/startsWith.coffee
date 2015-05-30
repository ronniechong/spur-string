module.exports = (source, starts, position)->

  source = @safeString(source)
  starts = @safeString(starts)

  position = if position is null then 0 else Math.min(@toPositive(position), source.length)

  return source.lastIndexOf(starts, position) is position

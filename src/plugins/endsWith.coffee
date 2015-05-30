module.exports = (source, ends, position)->

  source = @safeString(source)
  ends = @safeString(ends)

  if !position
    position = source.length - ends.length
  else
    position = Math.min(@toPositive(position), source.length) - ends.length

  return position >= 0 && source.indexOf(ends, position) is position

module.exports = (characters)->

  if !characters
    return "\\s"
  else if characters.source
    return characters.source
  else
    return "[#{@escapeRegExp(characters)}]"

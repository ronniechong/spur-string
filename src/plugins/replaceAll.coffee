module.exports = (source, find, replace, ignorecase)->
  flags = if ignorecase is true then "gi" else "g"
  expression = new RegExp(find, flags);

  @safeString(source).replace(expression, replace);

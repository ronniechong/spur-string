module.exports = (source)->

  return [] if source is null or source is undefined

  String(source).split(/\r?\n/)

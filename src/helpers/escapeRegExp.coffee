module.exports = (source)->

  @safeString(source).replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1')

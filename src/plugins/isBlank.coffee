module.exports = (source)->

  console.log "------", @safeString(source), "======"
  /^\s*$/.test @safeString(source)

module.exports = (number)->
  if number < 0
    0
  else
    (+number || 0)

module.exports = function (source, find, replace, ignorecase) {
  const flags = ignorecase === true ? 'gi' : 'g';
  const expression = new RegExp(find, flags);

  return this.safeString(source).replace(expression, replace);
};

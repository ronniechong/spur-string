module.exports = function (characters) {
  if (!characters) {
    return '\\s';
  }

  if (characters.source) {
    return characters.source;
  }

  return `[${this.escapeRegExp(characters)}]`;
};

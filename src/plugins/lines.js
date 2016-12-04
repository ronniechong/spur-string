module.exports = function (source) {
  if (source == null) {
    return [];
  }

  return String(source).split(/\r?\n/);
};

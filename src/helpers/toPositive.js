module.exports = function (number) {
  if (number < 0) {
    return 0;
  }

  return +number || 0;
};

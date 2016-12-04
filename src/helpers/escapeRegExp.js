module.exports = function (source) {
  return this.safeString(source).replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
};

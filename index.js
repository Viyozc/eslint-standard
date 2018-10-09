module.exports = (option) => {
  if (option.typescript && option.react) {
    return require('./typescript-react.js');
  }
  if (option.typescript) {
    return require('./typescript.js');
  }
  if (option.react) {
    return require('./react.js');
  }
  return require('./react.js');
};

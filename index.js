const path = require('path');

module.exports = (options) => {
  let config = {
    ...options
  };
  if (options.typescript && options.react) {
    config.extends = [path.resolve(__dirname, './typescript-react.js')];
  } else if (option.typescript) {
    config.extends = [path.resolve(__dirname, './typescript.js')];
  } else if (option.react) {
    config.extends = [path.resolve(__dirname, './react.js')];
  } else {
    config.extends = [path.resolve(__dirname, './javascript.js')];
  }
  return config;
};

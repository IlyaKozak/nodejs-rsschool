const { existsSync } = require('fs');

const checkFileAccess = (filepath) => {
  return existsSync(filepath);
};

module.exports = checkFileAccess;
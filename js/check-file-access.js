const { existsSync, accessSync, constants } = require('fs');
const path = require('path');

const checkFileAccess = (filepath, accessMode) => {
  let mode;
  if (accessMode === 'read') {
    mode = constants.R_OK;
  }
  if (accessMode === 'write') {
    mode = constants.W_OK;
  }

  return existsSync(path.resolve(filepath)) 
    && (accessSync(path.resolve(filepath), mode) === undefined);
};

module.exports = checkFileAccess;
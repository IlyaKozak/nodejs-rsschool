const { existsSync, accessSync, constants } = require('fs');
const path = require('path');

const { errorColor } = require('./utils');

const checkFileAccess = (filepath, accessMode) => {
  let mode;
  if (accessMode === 'input') {
    mode = constants.R_OK;
  }
  if (accessMode === 'output') {
    mode = constants.W_OK;
  }

  if (!existsSync(path.resolve(filepath))) {
    process.stderr.write(errorColor(`error: can't find ${accessMode} file "${filepath}"\n`));
    process.exit(1);
  }

  try {
    accessSync(path.resolve(filepath), mode);
  } catch (error) {
    process.stderr.write(errorColor(`error: ${error.message}\n`));
    process.exit(1);
  }

  return true;
};

module.exports = checkFileAccess;
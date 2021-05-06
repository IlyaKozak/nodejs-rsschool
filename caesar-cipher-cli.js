const fs = require('fs');
const path = require('path');
const { pipeline } = require('stream');

const options = require('./js/argv-processing');
const createTransformStream = require('./js/streams');
const checkFileAccess = require('./js/check-file-access');
const { errorColor } = require('./js/utils');

let readStream;
let writeStream;

if (options.output) {
  if (checkFileAccess(options.output, 'write')) {
    writeStream = fs.createWriteStream(path.resolve(options.output), {
      flags: 'a', 
    });
  } else {
    process.stderr.write(`error: output file "${options.output}" can't be reached\n`);
    process.exit(1);
  }
} else {
  writeStream = process.stdout;
}

if (options.input) {
  if (checkFileAccess(options.input, 'read')) {
    readStream = fs.createReadStream(path.resolve(options.input));
  } else {
    process.stderr.write(errorColor(`error: input file "${options.input}" can't be reached\n`));
    process.exit(1);
  }
} else {
  process.stdout.write(`Please provide input to ${options.action} (to exit press Ctrl + C): `);
  readStream = process.stdin;
}

const transformStream = createTransformStream(options);

pipeline(
  readStream,
  transformStream,
  writeStream,
  (err) => {
    if (err) {
      process.stderr.write(errorColor(`error: ${err.message}\n`));
    }
  }
);
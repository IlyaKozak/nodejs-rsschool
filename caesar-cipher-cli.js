const fs = require('fs');
const path = require('path');
const { pipeline } = require('stream');

const options = require('./js/argv-processing');
const createTransformStream = require('./js/streams');
const checkFileAccess = require('./js/check-file-access');

process.on('exit', (code) => {
  if (code !== 0) {
    console.log('process exit status code:', code);
  }
});

let readStream;
let writeStream;

if (options.output) {
  if (checkFileAccess(options.output, 'write')) {
    writeStream = fs.createWriteStream(path.resolve(options.output), {
      flags: 'a', 
    });
  } else {
    console.error(`error: output file can't be reached`);
    process.exit(1);
  }
} else {
  writeStream = process.stdout;
}

if (options.input) {
  if (checkFileAccess(options.input, 'read')) {
    readStream = fs.createReadStream(path.resolve(options.input));
  } else {
    console.error(`error: input file can't be reached`);
    process.exit(1);
  }
} else {
  console.log(`Please provide input to ${options.action} (to exit press Ctrl + C):`);
  readStream = process.stdin;
}

const transformStream = createTransformStream(options);

pipeline(
  readStream,
  transformStream,
  writeStream,
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('success');
    }
  }
);
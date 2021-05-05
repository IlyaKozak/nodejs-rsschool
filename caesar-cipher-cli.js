const { constants } = require('fs');
const { access } = require('fs/promises');
const { pipeline, Transform } = require('stream');

const options = require('./js/argv-processing');
const caesarCipherTransform = require('./js/caesar-cipher-transform');

process.on('exit', (code) => {
  if (code !== 0) {
    console.log('process exit status code:', code);
  }
});

// console.log(access);

// if (options.input) {
//   try {
//     await access(options.input, constants.R_OK);
//   } catch (error) {
//     console.error(`error: ${err.message}`);
//     process.exit(1);
//   }
// }

// const readStream = fs.createReadStream(options.input);
// const writeStream = fs.createWriteStream(options.output);

const readStream = process.stdin;
const writeStream = process.stdout;
const transformStream = new Transform({
  transform(chunk, encoding, callback) {
    const shift = options.action === 'encode' ? options.shift : -options.shift;
    this.push(caesarCipherTransform(chunk.toString(), shift));
    callback();
  }
})

pipeline(
  readStream,
  transformStream,
  writeStream,
  (err) => {
    console.log(err);
  }
)
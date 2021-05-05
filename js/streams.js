const { Transform } = require('stream');

const caesarCipherTransform = require('./caesar-cipher-transform');

const createTransformStream = (action, shiftValue) => {
  const transformStream = new Transform({
    transform(chunk, encoding, callback) {
      const shift = action === 'encode' ? shiftValue : -shiftValue;
      callback(null, caesarCipherTransform(chunk.toString(), shift));
    }
  });
  return transformStream;
};

module.exports = createTransformStream;
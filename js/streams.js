const { Transform } = require('stream');

const caesarCipherTransform = require('./caesar-cipher-transform');

const createTransformStream = ({ action, shift, input, output }) => {
  const transformStream = new Transform({
    transform(chunk, encoding, callback) {
      const shiftKey = action === 'encode' ? shift : -shift;
      const textBefore = output ? '' : 'Output: ';

      let textAfter = '';
      if (!output) {
        textAfter = input ? '\n' : '\nInput: ';
      } else {
        textAfter = input ? '\n' : '';
      }

      callback(null, textBefore + caesarCipherTransform(chunk.toString(), shiftKey)  + textAfter);
    }
  });
  return transformStream;
};

module.exports = createTransformStream;
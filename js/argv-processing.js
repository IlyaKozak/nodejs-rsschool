const { program, Option } = require('commander');

const { errorColor } = require('./utils');

const actionOption = new Option('-a, --action <encode|decode>', 'action type (required)')
  .choices(['encode', 'decode'])
  .makeOptionMandatory();

const shiftOption = new Option('-s, --shift <number>', 'shift value (required)')
  .makeOptionMandatory()
  .argParser((value) => {
    const number = Number(value);

    if (Number.isNaN(number) || !Number.isInteger(number)) {
      throw new program.InvalidOptionArgumentError('Shift is not a valid integer number.');
    }

    return number;
  });

const inputOption = new Option('-i, --input <filepath>', 'input file (optional)');

const outputOption = new Option('-o, --output <filepath>', 'output file (optional)');

program
  .addOption(actionOption)
  .addOption(shiftOption)
  .addOption(inputOption)
  .addOption(outputOption);

program.addHelpText('before', 'Caesar Cipher CLI Tool.\nEncodes and decodes a text by Caesar cipher.');

program.exitOverride();

program
  .configureOutput({
    writeOut: (str) => process.stdout.write(str),
    writeErr: (str) => process.stdout.write(str),
    outputError: (str, write) => write(errorColor(str))
  });

try {
  program.parse(process.argv);
} catch (error) {
  process.exit(1);
}

const options = program.opts();

module.exports = options;

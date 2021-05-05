const { program, Option } = require('commander');

const actionOption = new Option('-a, --action <encode|decode>', 'action type')
  .choices(['encode', 'decode'])
  .makeOptionMandatory();

const shiftOption = new Option('-s, --shift <number>', 'shift value')
  .makeOptionMandatory()
  .argParser((value) => {
    const number = Number(value);

    if (Number.isNaN(number)) {
      throw new program.InvalidOptionArgumentError('Shift is not a valid integer number.');
    }

    return number;
  });

const inputOption = new Option('-i, --input <filepath>', 'input file');

const outputOption = new Option('-o, --output <filepath>', 'output file');

program
  .addOption(actionOption)
  .addOption(shiftOption)
  .addOption(inputOption)
  .addOption(outputOption);

program.parse(process.argv);

const options = program.opts();

module.exports = options;

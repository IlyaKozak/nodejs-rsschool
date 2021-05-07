const errorColor = (str) => {
  // Add ANSI escape codes to display text in red
  return `\x1b[31m${str}\x1b[0m`;
};

module.exports = {
  errorColor,
};
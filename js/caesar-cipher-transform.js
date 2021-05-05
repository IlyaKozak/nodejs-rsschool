const ABC_LENGTH = 26;
const CHAR_CODE_A_UPPER  = 65;
const CHAR_CODE_A_LOWER  = 97;

const caesarCipherTransform = (str, shift) => {
  const shiftUpperCaseChar = (char) => {
    let newCharCode = (char.charCodeAt(0) - CHAR_CODE_A_UPPER + shift) % ABC_LENGTH;
    if (newCharCode < 0) {
      newCharCode += ABC_LENGTH;
    }
    newCharCode += CHAR_CODE_A_UPPER;
    return String.fromCharCode(newCharCode);
  };
  
  const shiftLowerCaseChar = (char) => {
    let newCharCode = (char.charCodeAt(0) - CHAR_CODE_A_LOWER + shift) % ABC_LENGTH;
    if (newCharCode < 0) {
      newCharCode += ABC_LENGTH;
    }
    newCharCode += CHAR_CODE_A_LOWER;
    return String.fromCharCode(newCharCode);
  };

  return str
    .replace(/[A-Z]/g, shiftUpperCaseChar)
    .replace(/[a-z]/g, shiftLowerCaseChar);
};

module.exports = caesarCipherTransform;
import constants from '../constants/constants';

const findButtonData = (x) => constants.buttonsData.find((button) => button.value === x);

const customModulo = (x, y) => ((x % y) + y) % y;
const isOdd = (x) => customModulo(x, 2) === 1;

export default {
  findButtonData,
  isOdd,
  customModulo,
};

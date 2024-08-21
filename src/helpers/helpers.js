import constants from '../constants/constants';

const findButtonData = (x) => constants.buttonsData.find((button) => button.value === x);

export default {
  findButtonData,
};

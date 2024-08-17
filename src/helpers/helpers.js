import constants from '../constants/constants';

const findButtonData = (x) => constants.buttonsData.find((button) => button.id === x);

export default {
  findButtonData,
};

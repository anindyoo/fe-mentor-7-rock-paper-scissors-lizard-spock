import PlayerButton from './PlayerButton';
import pentagonPad from '../../assets/images/player_button_pad/bg-pentagon.svg';
import constants from '../../constants/constants';

const PlayerButtonPad = () => {
  const { buttonsData } = constants;

  return (
    <div className="
    PLAYER-BUTTON-PAD
    relative
    flex justify-center
    max-w-[19.688rem] lg:max-w-[44rem] w-full"
    >
      <ul className="
      BUTTON-LIST
      absolute z-102 left-0"
      >
        {buttonsData.map((button) => (
          <PlayerButton
            key={button.id}
            data={button}
          />
        ))}
      </ul>
      <img
        src={pentagonPad}
        alt="Pentagon line."
        className="
        PENTAGON-PAD
        w-[12.5rem] lg:w-auto h-[11.875rem] lg:h-auto
        mt-[3.681rem] lg:mt-[4.688rem]"
      />
    </div>
  );
};

export default PlayerButtonPad;

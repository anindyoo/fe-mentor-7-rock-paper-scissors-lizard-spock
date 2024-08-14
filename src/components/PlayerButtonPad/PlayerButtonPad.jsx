import PlayerButton from './PlayerButton';
import pentagonPad from '../../assets/images/player_button_pad/bg-pentagon.svg';

const buttonsData = [
  {
    id: 'scissors',
    gradient: 'bg-scissorsGradient',
    shadow: 'border-b-scissorsShadow',
    icon: 'icon-scissors.svg',
    iconAlt: 'A hand gesture formed by extending the index and middle fingers and crossing them over each other resembling the shape of open scissors.',
    positions: 'left-[17.375rem]',
  },
  {
    id: 'paper',
    gradient: 'bg-paperGradient',
    shadow: 'border-b-paperShadow',
    icon: 'icon-paper.svg',
    iconAlt: 'Open hand resembling a sheet of paper.',
    positions: 'left-[27.688rem] top-[8.063rem]',
  },
  {
    id: 'rock',
    gradient: 'bg-rockGradient',
    shadow: 'border-b-rockShadow',
    icon: 'icon-rock.svg',
    iconAlt: 'Clenched fist resembling the shape of a rock.',
    positions: 'left-[23.563rem] top-[19.688rem]',
  },
  {
    id: 'lizard',
    gradient: 'bg-lizardGradient',
    shadow: 'border-b-lizardShadow',
    icon: 'icon-lizard.svg',
    iconAlt: 'A four-legged lizard.',
    positions: 'left-[11.188rem] top-[19.688rem]',
  },
  {
    id: 'spock',
    gradient: 'bg-spockGradient',
    shadow: 'border-b-spockShadow',
    icon: 'icon-spock.svg',
    iconAlt: 'A hand gesture popularized by the 1960s television series Star Trek. It consists of a raised hand with the palm forward and the thumb extended, while the fingers are parted between the middle and ring finger.',
    positions: 'left-[7.125rem] top-[8.063rem]',
  },
];

const PlayerButtonPad = () => {
  console.log();

  return (
    <div className="
    PLAYER-BUTTON-PAD
    relative
    flex justify-center
    max-w-[44rem] w-full"
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
        mt-[4.688rem]"
      />
    </div>
  );
};

export default PlayerButtonPad;

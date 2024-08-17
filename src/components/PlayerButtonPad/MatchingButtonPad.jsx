import useGameStore from '../../store/gameStore';
import SelectedButton from './SelectedButton';

const MatchingButtonPad = () => {
  const {
    player1,
    player2,
  } = useGameStore();

  return (
    <div className="
    MATCHING-BUTTON-PAD
    relative
    flex flex-row justify-between
    max-w-[44rem] w-full"
    >
      <SelectedButton
        player="1"
        choice={player1}
        text="YOU PICKED"
      />
      <SelectedButton
        player="2"
        choice={player2}
        text="THE HOUSE PICKED"
      />
    </div>
  );
};

export default MatchingButtonPad;

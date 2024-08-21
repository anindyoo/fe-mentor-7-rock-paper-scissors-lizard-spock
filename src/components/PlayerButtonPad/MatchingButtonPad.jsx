import { useEffect, useState } from 'react';
import useGameStore from '../../store/gameStore';
import GameResult from '../GameResult/GameResult';
import SelectedButton from './SelectedButton';

const MatchingButtonPad = () => {
  const {
    player1,
    player2,
  } = useGameStore();

  const [showGameResult, setShowGameResult] = useState(false);

  useEffect(() => {
    if (player1 && player2) {
      setTimeout(() => setShowGameResult(true), 1600);
    }
  }, [player1, player2]);

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
      {showGameResult && <GameResult />}
      <SelectedButton
        player="2"
        choice={player2}
        text="THE HOUSE PICKED"
      />
    </div>
  );
};

export default MatchingButtonPad;

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
    MATCHING-BUTTON-PAD-RESULT-WRAPPER
    flex flex-col items-center
    max-w-[19.688rem] lg:max-w-[44rem] w-full"
    >
      <div className="
      MATCHING-BUTTON-PAD
      relative
      flex flex-row justify-between
      max-w-[19.688rem] lg:max-w-[44rem] w-full"
      >
        <div className={`
        ${showGameResult
          ? 'lg:absolute lg:left-[-9.125rem]'
          : ''}
        `}
        >
          <SelectedButton
            player="1"
            choice={player1}
            text="YOU PICKED"
          />
        </div>
        {showGameResult && (
          <div className="lg:absolute lg:left-[15.188rem] hidden lg:block">
            <GameResult />
          </div>
        )}
        <div className={`
        ${showGameResult
          ? 'lg:absolute lg:right-[-7.5rem]'
          : ''}
        `}
        >
          <SelectedButton
            player="2"
            choice={player2}
            text="THE HOUSE PICKED"
          />
        </div>
      </div>
      {showGameResult && (
        <div className="w-fit visible lg:hidden">
          <GameResult />
        </div>
      )}
    </div>
  );
};

export default MatchingButtonPad;

import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import useGameStore from '../../store/gameStore';
import GameResult from '../GameResult/GameResult';
import SelectedButton from './SelectedButton';

gsap.registerPlugin(useGSAP);

const MatchingButtonPad = () => {
  const {
    player1,
    player2,
    winner,
  } = useGameStore();

  const [showGameResult, setShowGameResult] = useState(false);

  useEffect(() => {
    if (player1 && player2) {
      setTimeout(() => setShowGameResult(true), 1600);
    }
  }, [player1, player2]);

  const mm = gsap.matchMedia();
  const resultContainer = '.GAME-RESULT-CONTAINER';
  const resultMobileContainer = '.GAME-RESULT-CONTAINER-MOBILE';
  const movingButton1 = '.MOVING-BUTTON-CONTAINER-1';
  const movingButton2 = '.MOVING-BUTTON-CONTAINER-2';

  useGSAP(
    () => {
      if (showGameResult) {
        mm.add('(min-width: 1024px)', () => {
          if (document.querySelector(resultContainer)) {
            gsap.fromTo(
              resultContainer,
              { y: 100, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: 'power4.in',
                delay: 0.8,
              },
            );
          }
          if (document.querySelector(movingButton1) && document.querySelector(movingButton2)) {
            gsap.fromTo(
              movingButton1,
              { x: 0 },
              {
                x: -146,
                duration: 1.8,
                ease: 'power1.in',
              },
            );
            gsap.fromTo(
              movingButton2,
              { x: 378 },
              {
                x: 498,
                duration: 1.8,
                ease: 'power1.in',
              },
            );
          }
        });
        mm.add('(max-width: 1023px)', () => {
          if (document.querySelector(resultMobileContainer)) {
            gsap.fromTo(
              resultMobileContainer,
              { y: 100, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: 'power4.in',
                delay: 0.8,
              },
            );
          }
        });
      }
    },
    {
      dependencies: [showGameResult],
    },
  );

  return (
    <div className="
    MATCHING-BUTTON-PAD-RESULT-WRAPPER
    flex flex-col items-center
    max-w-[19.688rem] lg:max-w-[44rem] w-full
    mt-1 lg:mt-6"
    >
      <div className="
      MATCHING-BUTTON-PAD
      relative
      flex flex-row justify-between
      max-w-[19.688rem] lg:max-w-[44rem] w-full"
      >
        <div className={`
        MOVING-BUTTON-CONTAINER-1
        ${showGameResult
          ? 'lg:absolute -z-50'
          : ''}
        `}
        >
          <SelectedButton
            player={1}
            choice={player1}
            text="YOU PICKED"
          />
        </div>
        {showGameResult && (
          <div className="
          GAME-RESULT-CONTAINER
          lg:absolute lg:left-[15.188rem] hidden lg:block"
          >
            <GameResult />
          </div>
        )}
        <div className={`
        MOVING-BUTTON-CONTAINER-2
        ${showGameResult
          ? `lg:absolute ${winner === 2 ? '-z-[100]' : '-z-50'}`
          : ''}
        `}
        >
          <SelectedButton
            player={2}
            choice={player2}
            text="THE HOUSE PICKED"
          />
        </div>
      </div>
      {showGameResult
        ? (
          <div className="
        GAME-RESULT-CONTAINER-MOBILE
        w-fit visible lg:hidden"
          >
            <GameResult />
          </div>
        ) : (<div className="GAME-RESULT-MOBILE-BUFFER h-[12.953rem]" />)}
    </div>
  );
};

export default MatchingButtonPad;

import { useEffect, useState } from 'react';
import useGameStore from '../../store/gameStore';

const titleNames = ['ROCK', 'PAPER', 'SCISSORS', 'LIZARD', 'SPOCK'];

const Header = () => {
  const { score } = useGameStore();

  const [currentScore, setCurrentScore] = useState(score);

  useEffect(() => {
    setTimeout(() => setCurrentScore(score), 2400);
  }, [score]);

  return (
    <div className="
    HEADER
    SECTION-CENTER
    flex justify-center"
    >
      <div className="
      SCORE-HEADER
      flex flex-row justify-between items-center
      max-w-[19.688rem] lg:max-w-[44rem] w-full h-[6.25rem] lg:h-[9.625rem]
      p-[0.875rem] lg:pl-[2.125rem] lg:pr-[1.625rem]
      border-4 border-headerOutline
      rounded-lg lg:rounded-2xl"
      >
        <ul className="
        TITLE-BOX
        flex flex-col gap-[-0.625rem] lg:gap-[-1.375rem]
        text-[0.813rem] lg:text-[1.75rem] font-bold"
        >
          {titleNames.map((data, index) => (
            <li
              key={data}
              className={`
              TITLE-NAME
              ${index > 0 && '-mt-[0.625rem] lg:-mt-[1.313rem]'}`}
            >
              {data}
            </li>
          ))}
        </ul>
        <div className="
        SCORE-BOX
        flex flex-col items-center
        max-w-20 lg:max-w-[9.375rem] w-full h-[4.5rem] lg:h-[7.125rem]
        pt-2.5 lg:pt-3
        rounded-[0.25rem] lg:rounded-lg
        bg-scoreBgColor"
        >
          <div className="
          SCORE-TITLE
          ml-[0.15rem] lg:[0.11rem  ]
          text-[0.625rem] lg:text-[1.063rem]
          tracking-[0.15rem] lg:tracking-[0.11rem]
          font-semibold text-scoreText
          text-center"
          >
            SCORE
          </div>
          <div className="
          SCORE-NUMBER
          -mt-[0.188rem]
          text-[2.5rem]/[2.813rem] lg:text-[3.875rem]/[1.065em]
          font-bold text-scoreNumberText"
          >
            {currentScore}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

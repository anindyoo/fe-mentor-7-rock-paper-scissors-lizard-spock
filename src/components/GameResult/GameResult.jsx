import useGameStore from '../../store/gameStore';

const GameResult = () => {
  const { winner } = useGameStore();

  return (
    <div className="
    GAME-RESULT-DISPLAY
    flex flex-col items-center gap-4
    w-[13.75rem]
    pt-[11.375rem]"
    >
      <div className="
      RESULT-TEXT
      text-[3.5rem] font-bold text-white"
      >
        {winner === 3
          ? 'DRAW'
          : `${winner === 1 ? 'YOU WIN' : 'YOU LOSE'}`}
      </div>
      <button
        type="button"
        className="
        PLAY-AGAIN-BUTTON
        w-full
        py-3.5
        rounded-lg
        text-[1.063rem] font-semibold text-darkText
        bg-white"
      >
        PLAY AGAIN
      </button>
    </div>
  );
};

export default GameResult;

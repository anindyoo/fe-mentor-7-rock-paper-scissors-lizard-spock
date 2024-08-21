import helpers from '../../helpers/helpers';
import useGameStore from '../../store/gameStore';

const GameResult = () => {
  const { winner, player1, player2 } = useGameStore();

  return (
    <div className="
    GAME-RESULT-DISPLAY
    pt-[11.375rem]"
    >
      <div className="
      RESULT-TEXT
      text-[3.5rem] font-bold text-white"
      >
        player
        {winner}
        :
        {winner === 3 ? 'DRAW!' : ''}
        {helpers.isOdd(helpers.customModulo((player1 - player2), 5)) ? 'MENANG' : 'kalah'}
        <br />
        {' '}
        hasil modulo:
        {helpers.customModulo((player1 - player2), 5)}
        <br />
        {' '}
        choice1:
        {player1}
        choice2:
        {player2}
      </div>
    </div>
  );
};

export default GameResult;

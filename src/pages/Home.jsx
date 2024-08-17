import MatchingButtonPad from '../components/PlayerButtonPad/MatchingButtonPad';
import PlayerButtonPad from '../components/PlayerButtonPad/PlayerButtonPad';
import useGameStore from '../store/gameStore';

const Home = () => {
  const {
    player1,
    player2,
  } = useGameStore();

  return (
    <div className="
    HOME
    SECTION-CENTER
    flex justify-center"
    >
      {!player1 && !player2 && <PlayerButtonPad />}
      {player1 && <MatchingButtonPad />}
    </div>
  );
};

export default Home;

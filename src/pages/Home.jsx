import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import MatchingButtonPad from '../components/PlayerButtonPad/MatchingButtonPad';
import PlayerButtonPad from '../components/PlayerButtonPad/PlayerButtonPad';
import useGameStore from '../store/gameStore';

gsap.registerPlugin(useGSAP);

const Home = () => {
  const {
    player1,
    player2,
  } = useGameStore();

  const homeContainer = useRef();

  useGSAP(
    () => {
      if (player1 !== null) {
        gsap.fromTo('.PLAYER-BUTTON', { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5 });
      }
    },
    {
      scope: homeContainer,
      dependencies: [player1],
    },
  );

  return (
    <div
      ref={homeContainer}
      className="
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

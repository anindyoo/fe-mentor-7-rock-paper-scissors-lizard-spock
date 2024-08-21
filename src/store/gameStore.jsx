import { create } from 'zustand';
import helpers from '../helpers/helpers';
// import helpers from '../helpers/helpers';

const useGameStore = create((set) => ({
  player1: null,
  player2: null,
  score: 0,
  winner: 0,
  setPlayer: ({ player, choice }) => {
    set(() => (
      player === 1
        ? ({ player1: choice })
        : ({ player2: choice })
    ));
  },
  setScore: () => {
    set((state) => {
      const difference = state.player1 - state.player2;
      if (difference === 0) {
        return ({ winner: 3 });
      }

      return (helpers.isOdd(helpers.customModulo((difference), 5)))
        ? ({
          winner: 1,
          score: state.score + 1,
        })
        : ({
          winner: 2,
          score: state.score - 1 < 0
            ? 0
            : state.score - 1,
        });
    });
  },
}));

export default useGameStore;

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import helpers from '../helpers/helpers';

const useGameStore = create(
  persist(
    (set) => ({
      player1: null,
      player2: null,
      score: 0,
      winner: 0,
      played: false,
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
      resetGame: () => set({
        player1: null,
        player2: null,
        winner: 0,
      }),
      setPlayed: () => set({ played: true }),
    }),
    {
      name: 'rock-paper-scissors-ls',
    },
  ),
);

export default useGameStore;

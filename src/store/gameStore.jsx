import { create } from 'zustand';

const useGameStore = create((set) => ({
  player1: null,
  player2: null,
  score: 0,
  setPlayer: ({ player, choice }) => {
    set(() => (
      player === 1
        ? ({ player1: choice })
        : ({ player2: choice })
    ));
  },
  setScore: () => {
  },
}));

export default useGameStore;

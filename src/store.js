import create from 'zustand';

export const useStore = create(set => ({
  showWelcoming: false,
  setShowWelcoming: () => {
    console.log('Set welcoming');
    return set(state => ({showWelcoming: true}));
  },
}));

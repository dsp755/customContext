import { state } from '.';
import { eventEmitter } from '../events';

const updateState = () => eventEmitter.emit('updateState');

export const toggleTheme = () => {
  [state.theme[0], state.theme[1]] = [state.theme[1], state.theme[0]];
  updateState();
};

export const toggleSharedText = () => {
  [state.sharedText[0], state.sharedText[1]] = [
    state.sharedText[1],
    state.sharedText[0],
  ];
  updateState();
};

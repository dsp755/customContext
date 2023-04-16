import { state } from '.';
import { eventEmitter } from '../events';

const updateState = () => eventEmitter.emit('updateState');

export const toggleTheme = () => {
  [state.theme[0], state.theme[1]] = [state.theme[1], state.theme[0]];
  updateState();
};

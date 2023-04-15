import { state } from './state';
import { eventEmitter } from '../events';

const updateState = () => eventEmitter.emit('updateState');

export const toggleTheme = () => {
  if (state.theme.currentTheme === 'light') {
    state.theme.currentTheme = 'dark';
  } else {
    state.theme.currentTheme = 'light';
  }
  updateState();
};

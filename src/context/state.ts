import { CSSProperties } from 'react';

export type StateType = {
  theme: {
    currentTheme: string;
    themes: { [key: string]: CSSProperties };
  };
};

export const state: StateType = {
  theme: {
    currentTheme: 'dark',
    themes: {
      dark: { background: '#242424', color: '#dbdbdb' },
      light: { background: '#dbdbdb', color: '#242424' },
    },
  },
};

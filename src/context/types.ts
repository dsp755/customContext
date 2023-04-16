import { CSSProperties } from 'react';

export type Theme = {
  background: CSSProperties['backgroundColor'];
  color: CSSProperties['color'];
};

export type StateType = {
  theme: Theme[];
  sharedText: Array<string>;
};

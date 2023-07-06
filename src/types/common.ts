export enum LoaderType {
  Blank = 'blank',
  Balls = 'balls',
  Bars = 'bars',
  Bubbles = 'bubbles',
  Cubes = 'cubes',
  Cylon = 'cylon',
  Spin = 'spin',
  SpinningBubbles = 'spinningBubbles',
  Spokes = 'spokes',
}


export interface LoaderProps {
    type: LoaderType | undefined;
    color?: string;
  }
  
export interface SquarePlacement {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface Coordinates {
  x: number;
  y: number;
}

export interface GridData {
  x: number;
  y: number;
}

export interface MovementLimits {
  x1: number;
  x2: number;
  y1: number;
  y2: number;
}

export interface LevelSettings {
  gridSize: GridData;
  rocketDog: SquarePlacement;
  otherDogs: SquarePlacement[];
  walls: SquarePlacement[];
  goal: SquarePlacement;
}

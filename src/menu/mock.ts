import type { LevelSettings } from "src/game/models";

export const DEFAULT_LEVEL: LevelSettings = {
  gridSize: { x: 15, y: 8 },
  rocketDog: {x: 2, y: 2, width: 2, height: 1},
  otherDogs: [
    { x: 6, y: 1, width: 1, height: 3 },
    { x: 2, y: 4, width: 3, height: 1 },
  ],
  goal: { x: 8, y: 2, width: 2, height: 1 },
};

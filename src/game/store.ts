import { derived, writable } from "svelte/store";
import type { SquarePlacement, GridData } from "./models";
import { getAllDogCoordinates } from "./utils";


// Dogs & walls positions
export const otherDogs = writable<SquarePlacement[]>([]);
export const rocketDog = writable<SquarePlacement | undefined>();
export const walls = writable<SquarePlacement[]>([]);
export const obstacles = derived(([otherDogs, rocketDog, walls]), 
  ([$otherDogs, $rocketDog, $walls]) => ([...$otherDogs, $rocketDog, ...$walls])
);
export const isThereDogBeingWalked = writable<boolean>(false);

// Level grid info
export const gridSize = writable<GridData>({ x: 8, y: 8 });
export const cellWidth = writable(64);
const gridBaseSpace = derived(gridSize, $gridSize => (
  Array.from(Array($gridSize.y).keys()).map(() => Array.from(Array($gridSize.x).keys()).map(() => false))
));
export const gridOccupiedSpace = derived(([gridBaseSpace, obstacles]), ([$gridBaseSpace, $obstacles]) => {
  const grid = [...$gridBaseSpace.map(gridRow => ([...gridRow]))];
  $obstacles.forEach(obstacle => {
    getAllDogCoordinates(obstacle).forEach(({ x, y }) => {
      grid[y][x] = true;
    });
  });
  return grid;
});

// Goal
export const goal = writable<SquarePlacement>();
export const isGoalReached = derived([rocketDog, goal], ([$rocketDog, $goal]) => $rocketDog?.x === $goal.x && $rocketDog?.y === $goal.y);
export const moveCount = writable<number>(0);

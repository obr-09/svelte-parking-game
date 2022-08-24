import { derived, writable, type Writable } from "svelte/store";
import type { DogPlacement, GridData } from "./models";
import { getAllDogCoordinates } from "./utils";


// Dogs positions
export const otherDogs = writable<DogPlacement[]>([
  { x: 6, y: 1, width: 1, height: 3 },
  { x: 2, y: 4, width: 3, height: 1 },
]);
export const rocketDog = writable<DogPlacement>({x: 2, y: 2, width: 2, height: 1});
export const isThereDogBeingWalked = writable<boolean>(false);

// Level grid info
export const gridSize = writable<GridData>({ x: 15, y: 8 });
export const cellWidth = writable(64);
const gridBaseSpace = derived(gridSize, $gridSize => (
  Array.from(Array($gridSize.y).keys()).map(() => Array.from(Array($gridSize.x).keys()).map(() => false))
));
export const gridOccupiedSpace = derived(([gridBaseSpace, otherDogs, rocketDog]), ([$gridBaseSpace, $otherDogs, $rocketDog]) => {
  const grid = [...$gridBaseSpace.map(gridRow => ([...gridRow]))];
  if ($rocketDog) {
    getAllDogCoordinates($rocketDog).forEach(({ x, y }) => {
      grid[y][x] = true;
    });
  }
  $otherDogs.forEach(otherDog => {
    getAllDogCoordinates(otherDog).forEach(({ x, y }) => {
      grid[y][x] = true;
    });
  });
  return grid;
});

// Goal
export const goal = writable<DogPlacement>({ x: 8, y: 2, width: 2, height: 1 });
export const isGoalReached = derived([rocketDog, goal], ([$rocketDog, $goal]) => $rocketDog.x === $goal.x && $rocketDog.y === $goal.y);

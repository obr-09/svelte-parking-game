import { derived, writable } from "svelte/store";
import type { DogPlacement, GridData } from "./models";
import { getAllDogCoordinates } from "./utils";


// Dogs positions
export const otherDogs = writable<DogPlacement[]>([]);
export const rocketDog = writable<DogPlacement | undefined>();
export const isThereDogBeingWalked = writable<boolean>(false);

// Level grid info
export const gridSize = writable<GridData>({ x: 8, y: 8 });
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
export const goal = writable<DogPlacement>();
export const isGoalReached = derived([rocketDog, goal], ([$rocketDog, $goal]) => $rocketDog?.x === $goal.x && $rocketDog?.y === $goal.y);

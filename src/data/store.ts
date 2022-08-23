import { derived, writable, type Writable } from "svelte/store";
import type { DogPlacement, GridData } from "./models";
import { getAllDogCoordinates } from "./utils";

export const gridSize = writable<GridData>({ x: 15, y: 8 });
export const cellWidth = writable(64);

export const otherDogs: Writable<DogPlacement[]> = writable([
  { x: 6, y: 1, width: 1, height: 3 },
  { x: 2, y: 4, width: 3, height: 1 },
]);
export const rocketDog: Writable<DogPlacement> = writable<DogPlacement>({x: 2, y: 2, width: 2, height: 1});
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

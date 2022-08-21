import { writable } from "svelte/store";
import type { DogPlacement } from "./models";

export const gridSize = writable({ x: 15, y: 8 });

export const otherDogs = writable<DogPlacement | undefined>();
export const rocketDog = writable<DogPlacement[]>([]);

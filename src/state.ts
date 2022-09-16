import { writable } from "svelte/store";
import type { LevelSettings } from "./game/models";

export const currentLevelSettings = writable<LevelSettings>(null);

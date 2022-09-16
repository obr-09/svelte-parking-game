import { writable } from "svelte/store"
import type { LevelSettings } from "../game/models"

export const storedLevels = writable<{ [levelName: string]: LevelSettings }>({});

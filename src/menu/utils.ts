import type { LevelSettings } from "src/game/models";
import { DEFAULT_LEVEL } from "./mock";

export const getDefaultLevels = (): { [levelName: string]: LevelSettings } => {
  return { 'default': DEFAULT_LEVEL };
}

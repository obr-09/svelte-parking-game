import type { LevelSettings } from "src/game/models";
import bobox from "./levels/LivingInABox.json";

export const getLevelList = (): LevelSettings[] => {
  return [bobox]
}

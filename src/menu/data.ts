import type { LevelSettings } from "src/game/models";
import inTooDeep from "./levels/InTooDeep.json";
import livingInABox from "./levels/LivingInABox.json";
import haveACigar from "./levels/HaveACigar.json";

export const getLevelList = (): LevelSettings[] => {
  return [inTooDeep, livingInABox, haveACigar]
}

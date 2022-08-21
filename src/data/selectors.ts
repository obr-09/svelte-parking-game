import { gridSize } from "./store";

export let cellWidth: number = 0;

gridSize.subscribe(({ x }) => {
  cellWidth = 100 / x;
});

import type { Coordinates, DogPlacement } from "./models";

export const getAllDogCoordinates = (dog: DogPlacement): Coordinates[] => {
  const xValues: number[] = Array.from(new Array(dog.width).keys()).map(index => index + dog.x);
  const yValues: number[] = Array.from(new Array(dog.height).keys()).map(index => index + dog.y);
  return xValues.map(x => yValues.map(y => ({ x, y }))).flat();
};

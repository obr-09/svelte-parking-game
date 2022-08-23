

<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import type { Coordinates, DogPlacement, MovementLimits } from "../data/models";
  import { cellWidth, gridOccupiedSpace, gridSize } from "../data/store";

  export let placement: DogPlacement;
  export let isRocketDog: boolean = false;

  let isDogBeingWalked: boolean = false;
  let movementLimits: MovementLimits;
  let movementCoordinates: Coordinates = { x: (placement.x + placement.width/2) * $cellWidth, y: (placement.y + placement.height/2) * $cellWidth };



  onMount(() => {
    addEventListener('mouseup', onDogRelease);
    addEventListener('mousemove', onDogMove);
  });
  onDestroy(() => {
    removeEventListener('mouseup', onDogRelease);
    removeEventListener('mousemove', onDogMove);
  });

  const computeMovementLimits = (): void => {
    movementLimits = { x1: placement.x, x2: placement.x, y1: placement.y, y2: placement.y };
    if (placement.width > 1) {
      while (movementLimits.x1 - 1 >= 0 && !$gridOccupiedSpace[movementLimits.y1][movementLimits.x1 - 1])
        movementLimits.x1--;
      while (movementLimits.x2 + placement.width < $gridSize.x && !$gridOccupiedSpace[movementLimits.y1][movementLimits.x2 + placement.width])
        movementLimits.x2++;
    }

    if (placement.height > 1) {
      while (movementLimits.y1 - 1 >= 0 && !$gridOccupiedSpace[movementLimits.y1 - 1][movementLimits.x1])
        movementLimits.y1--;
      while (movementLimits.y2 + placement.height < $gridSize.y && !$gridOccupiedSpace[movementLimits.y2 + placement.height][movementLimits.x1])
        movementLimits.y2++;
    }
  };

  const onDogHold = () => {
    isDogBeingWalked = true;
    computeMovementLimits();
  };
  const onDogRelease = (): void => {
    if (isDogBeingWalked) {
      // Set dog logical and visual position to store data
      placement.x = Math.round((movementCoordinates.x - placement.width * $cellWidth / 2) / $cellWidth);
      placement.y = Math.round((movementCoordinates.y - placement.height * $cellWidth / 2) / $cellWidth);
      movementCoordinates = { x: (placement.x + placement.width/2) * $cellWidth, y: (placement.y + placement.height/2) * $cellWidth };
      isDogBeingWalked = false;
    }
  };
  const onDogMove = ({ pageX, pageY }): void => {
    if (isDogBeingWalked) {
      // Set dog visual position to mouse
      movementCoordinates = {
        x: Math.min((movementLimits.x2 + placement.width/2) * $cellWidth, Math.max((movementLimits.x1 + placement.width/2) * $cellWidth, pageX)),
        y: Math.min((movementLimits.y2 + placement.height/2) * $cellWidth, Math.max((movementLimits.y1 + placement.height/2) * $cellWidth, pageY)),
      };
    }
  };
</script>

<div 
  class="dog"
  class:rocket="{isRocketDog}"
  style="
    left: {movementCoordinates.x}px; 
    top: {movementCoordinates.y}px;
    width: {placement.width * $cellWidth}px;
    height: {placement.height * $cellWidth}px;
  "
  on:mousedown|preventDefault={onDogHold}
/>

<style>
  .dog {
    position: absolute;
    background: sandybrown;
    border: 1px solid peru;
    box-sizing: border-box;
    margin: auto;
    transform: translate(-50%, -50%);
  } 

  .dog.rocket {
    background: crimson;
  }
</style>

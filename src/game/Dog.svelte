

<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import type { Coordinates, DogPlacement, MovementLimits } from "../data/models";
  import { cellWidth, gridOccupiedSpace, gridSize, isThereDogBeingWalked } from "../data/store";

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

  const onDogHold = () => {
    if (!isDogBeingWalked) {
      isDogBeingWalked = true;
      $isThereDogBeingWalked = true;
      computeMovementLimits();
    }
  };
  // On mouse release, set dog logical and visual position to store data
  const onDogRelease = (): void => {
    if (isDogBeingWalked) {
      placement.x = Math.round((movementCoordinates.x - placement.width * $cellWidth / 2) / $cellWidth);
      placement.y = Math.round((movementCoordinates.y - placement.height * $cellWidth / 2) / $cellWidth);
      movementCoordinates = { x: (placement.x + placement.width/2) * $cellWidth, y: (placement.y + placement.height/2) * $cellWidth };
      isDogBeingWalked = false;
      $isThereDogBeingWalked = false;
    }
  };
  // On mouse move when holding, set dog visual position to mouse
  const onDogMove = (event): void => {
    if (isDogBeingWalked && event.target?.classList?.contains('dog-container')) {
      movementCoordinates = {
        x: Math.min((movementLimits.x2 + placement.width/2) * $cellWidth, Math.max((movementLimits.x1 + placement.width/2) * $cellWidth, event.offsetX)),
        y: Math.min((movementLimits.y2 + placement.height/2) * $cellWidth, Math.max((movementLimits.y1 + placement.height/2) * $cellWidth, event.offsetY)),
      };
    }
  };

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
</script>

<div 
  class="dog"
  class:rocket="{isRocketDog}"
  class:unselectable="{$isThereDogBeingWalked}"
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
    transform: translate(-50%, -50%);
    z-index: 1;
  }

  .dog.rocket {
    background: crimson;
  }

  .dog.unselectable {
    pointer-events: none;
  }
</style>

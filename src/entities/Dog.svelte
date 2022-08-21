

<script lang="ts">
  import type { DogPlacement } from "src/data/models";
  import { gridSize } from "../data/store";
  import { cellWidth } from "../data/selectors";

  export let placement: DogPlacement;
  export let isRocketDog: boolean = false;
  let isDogBeingWalked: boolean = false;
  // let canDogMove: { x: boolean; y: boolean; };

  const onHold = () => {
    isDogBeingWalked = true;
  };
  addEventListener('mouseup', () => {
    isDogBeingWalked = false;
  });
</script>

<div 
  class="dog"
  class:rocket="{isRocketDog}"
  style="
    left: {placement.x * cellWidth}%; 
    top: {placement.y / $gridSize.y * 100}%;
    width: {placement.width * cellWidth}%;
    height: {placement.height / $gridSize.y * 100}%;
  "
  on:mousedown={onHold}
/>
<style>
  .dog {
    position: absolute;
    background: sandybrown;
    border: 1px solid peru;
    box-sizing: border-box;
    margin: auto;
    /* transform: translate(-50%, -50%); */
  } 

  .dog.rocket {
    background: crimson;
  }
</style>

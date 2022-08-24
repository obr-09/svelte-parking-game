<script lang="ts">
  import type { DogPlacement } from "../data/models";
  import { cellWidth } from "../data/store";


  export let placement: DogPlacement;
</script>

<div 
  class="goal"
  style="
    left: {(placement.x + placement.width/2) * $cellWidth}px; 
    top: {(placement.y + placement.height/2) * $cellWidth}px;
    width: {placement.width * $cellWidth}px;
    height: {placement.height * $cellWidth}px;
  "
/>

<style>
  .goal {
    position: absolute;
    box-sizing: border-box;
    transform: translate(-50%, -50%);
    background: lightcoral;
    pointer-events: none;
  }
</style>

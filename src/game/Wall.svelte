<script lang="ts">
  import type { SquarePlacement } from "./models";
  import { cellWidth } from "./store";

  export let placement: SquarePlacement;
</script>

<div 
  class="wall"
  style="
    left: {placement.x * $cellWidth + 1}px; 
    top: {placement.y * $cellWidth + 1}px;
    width: {placement.width * $cellWidth - 2}px;
    height: {placement.height * $cellWidth - 2}px;
  "
/>

<style>
  .wall {
    position: absolute;
    box-sizing: border-box;
    background: lightgrey;
  }
</style>

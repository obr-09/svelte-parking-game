<script lang="ts">
  import { onMount } from "svelte";
  import type { DogPlacement } from "./models";
  import { cellWidth, isGoalReached } from "./store";

  export let placement: DogPlacement;

  let barkAudios: HTMLAudioElement[];
  $: barkAudios = [new Audio('bark.ogg'), new Audio('bark.ogg')]


  onMount(() => {
    isGoalReached.subscribe(barkVictory);
  });

  const barkVictory = (isReached: boolean): void => {
    if (isReached) {
      barkAudios[0].play();
      setTimeout(() => barkAudios[1].play(), 320);
    }
  };
</script>

<div 
  class="goal"
  style="
    left: {(placement.x + placement.width/2) * $cellWidth}px; 
    top: {(placement.y + placement.height/2) * $cellWidth}px;
    width: {placement.width * $cellWidth}px;
    height: {placement.height * $cellWidth}px;
  "
>
</div>

<style>
  .goal {
    position: absolute;
    box-sizing: border-box;
    transform: translate(-50%, -50%);
    background: lightcoral;
    pointer-events: none;
  }
</style>

<script context="module" lang="ts">
  export type DogProps = {
    nose: DogCoordinate;
    butt: DogCoordinate;
  };
  export type DogCoordinate = {
    x: number;
    y: number;
  };
</script>

<script lang="ts">
  export let nose: DogCoordinate;
  export let butt: DogCoordinate;
  export let isRocketDog: boolean = false;
  let isDogBeingWalked: boolean = false;
  let canDogMove: { x: boolean; y: boolean; };

  let dogWidth: number, dogHeight: number;
  $: dogWidth = (Math.abs(nose.x - butt.x) + 1) * CELL_WIDTH;
  $: dogHeight = (Math.abs(nose.y - butt.y) + 1) * CELL_WIDTH;
  $: canDogMove = { x: dogWidth > dogHeight, y: dogWidth < dogHeight };
  let dogLeft: number, dogTop: number;
  $: dogLeft = ((butt.x + nose.x) / 2 + 0.5) * CELL_WIDTH;
  $: dogTop = ((butt.y + nose.y) / 2 + 0.5) * CELL_WIDTH;



  const onHold = () => {
    isDogBeingWalked = true;
  };
  addEventListener('mouseup', () => {
    isDogBeingWalked = false;
  });



  import { CELL_WIDTH } from '../terrain/Cell.svelte';
</script>

<div 
  class="dog"
  class:rocket="{isRocketDog}"
  style="
    left: calc({dogLeft}rem); 
    top: calc({dogTop}rem);
    width: calc({dogWidth}rem);
    height: calc({dogHeight}rem);
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
    transform: translate(-50%, -50%);
  }

  .dog.rocket {
    background: crimson;
  }
</style>

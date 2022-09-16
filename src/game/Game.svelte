<script lang="ts">
  import { onMount } from 'svelte';
  import type { LevelSettings } from './models';
  import { goal, gridSize, isThereDogBeingWalked, otherDogs, rocketDog } from './store';
  import Dog from './Dog.svelte';
  import Goal from './Goal.svelte';
  import Grid from './Grid.svelte';
  import { currentLevelSettings } from '../state';

  export let levelSettings: LevelSettings;
  let isLevelInitialized: boolean = false;

  onMount(() => {
    $isThereDogBeingWalked = false;
    $gridSize= levelSettings.gridSize;
    $goal = levelSettings.goal;
    $rocketDog = {...levelSettings.rocketDog};
    $otherDogs = levelSettings.otherDogs.map(dog => ({ ...dog }));
    isLevelInitialized = true;
  });

  const backToMenu = () => {
    $currentLevelSettings = null;
  };;
</script>

<div class="game">
  <span on:click={backToMenu} class="back">Back to the menu</span>
  <Grid>
    {#if isLevelInitialized}
    <div class="dog-container">
      <!-- My (rocket) dog -->
      {#if $rocketDog}
        <Dog bind:placement={$rocketDog} isRocketDog />
      {/if}
      {#if $goal}
        <Goal bind:placement={$goal} />
      {/if}
      <!-- Other people's dogs -->
      {#each $otherDogs as otherDog }
        <Dog bind:placement={otherDog} />
      {/each}
    </div>
    {/if}
  </Grid>
</div>

<style>
  .game {
    position: relative;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .back {
    cursor: pointer;
  }
  .back:hover {
    text-decoration: underline;
  }

  .dog-container {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: 8px;
  }
</style>
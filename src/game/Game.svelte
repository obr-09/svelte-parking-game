<script lang="ts">
  import { onMount } from 'svelte';
  import type { LevelSettings } from './models';
  import { goal, gridSize, isThereDogBeingWalked, moveCount, otherDogs, rocketDog } from './store';
  import Dog from './Dog.svelte';
  import Goal from './Goal.svelte';
  import Grid from './Grid.svelte';
  import VictoryOverlay from './VictoryOverlay.svelte';
  import { currentLevelSettings } from '../state';

  export let levelSettings: LevelSettings;
  let isLevelInitialized: boolean = false;

  onMount(() => {
    initLevel();
  });

  const initLevel = () => {
    $isThereDogBeingWalked = false;
    $gridSize= levelSettings.gridSize;
    $goal = levelSettings.goal;
    $rocketDog = {...levelSettings.rocketDog};
    $otherDogs = levelSettings.otherDogs.map(dog => ({ ...dog }));
    isLevelInitialized = true;
    $moveCount = 0;
  }

  const backToMenu = () => {
    $currentLevelSettings = null;
  };

  const restartLevel = () => {
    initLevel();
  };
</script>

<div class="game">
  <Grid>
    {#if isLevelInitialized}
    <div class="dog-container">
      {#if $rocketDog}
        <Dog bind:placement={$rocketDog} isRocketDog />
      {/if}
      {#each $otherDogs as otherDog }
        <Dog bind:placement={otherDog} />
      {/each}
      {#if $goal}
        <Goal bind:placement={$goal} />
      {/if}
    </div>
    <VictoryOverlay />
    {/if}
  </Grid>
  <div class="subtext">
    <span class="moveCount">{$moveCount} moves</span>
    <span on:click={restartLevel} class="restart">Restart</span>
    <span on:click={backToMenu} class="back">Back to the menu</span>
  </div>
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

  .moveCount {
    font-style: italic;
  }

  .back, .restart {
    cursor: pointer;
    font-weight: bold;
  }
  .back:hover, .restart:hover {
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

  .subtext {
    display: flex;
    flex-direction: row;
  }

  .subtext span {
    margin: 0 16px;
  }
</style>
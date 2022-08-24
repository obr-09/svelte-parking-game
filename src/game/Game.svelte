<script lang="ts">
  import { goal, isGoalReached, otherDogs, rocketDog } from '../data/store';
  import Dog from './Dog.svelte';
  import Goal from './Goal.svelte';
  import Grid from './Grid.svelte';
</script>

<div class="game">
  <Grid>
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
  </Grid>

    {$isGoalReached}
</div>

<style>
  .game {
    position: relative;
    width: 100%;
    height: 100%;
    height: auto;
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
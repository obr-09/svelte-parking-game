<script lang="ts">
  import { otherDogs, rocketDog } from './data/store';
  import Dog from './entities/Dog.svelte';
  import Grid from './terrain/Grid.svelte';
</script>

<main>
  <Grid>
  </Grid>
  <div class="dog-container">
    <!-- My (rocket) dog -->
    {#if $rocketDog}
      <Dog bind:placement={$rocketDog} isRocketDog />
    {/if}
    <!-- Other people's dogs -->
    {#each $otherDogs as otherDog }
      <Dog bind:placement={otherDog} />
    {/each}
  </div>
</main>

<style>
  main {
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
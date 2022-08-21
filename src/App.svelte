<script lang="ts">
import type { DogPlacement } from './data/models';

  const dogsData: DogPlacement[] = [
    { x: 6, y: 1, width: 1, height: 3 },
    { x: 2, y: 4, width: 3, height: 1 },
  ];

  import Dog from './entities/Dog.svelte';
  import Grid from './terrain/Grid.svelte'
</script>

<main>
  <Grid>
  </Grid>
  <div class="dog-container">
    <!-- My (rocket) dog -->
    <Dog placement={{x: 2, y: 2, width: 2, height: 1}} isRocketDog />
    <!-- Other people's dogs -->
    {#each dogsData as dogData }
      <Dog placement={dogData} />
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
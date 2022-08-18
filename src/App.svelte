<script lang="ts">
  const dogsData: DogProps[] = [
    { nose: { x: 6, y: 1 }, butt: { x: 6, y: 3 } },
    { nose: { x: 2, y: 4 }, butt: { x: 5, y: 4 } },
  ];

  import Dog from './entities/Dog.svelte';
  import type { DogProps } from './entities/Dog.svelte';
  import Grid from './terrain/Grid.svelte'
</script>

<main>
  <Grid>
    <!-- My (rocket) dog -->
    <Dog nose={{x: 2, y: 2}} butt={{x: 3, y: 2}} isRocketDog />
    <!-- Other people's dogs -->
    {#each dogsData as dogData }
      <Dog {...dogData} />
    {/each}
  </Grid>
</main>

<style>
  main {
    position: relative;
    width: auto;
    height: auto;
  }
</style>
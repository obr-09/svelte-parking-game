<script lang="ts">
  import type { LevelSettings } from './data/models';
  import Game from './game/Game.svelte';

  const levelSettings: LevelSettings = {
    gridSize: { x: 15, y: 8 },
    rocketDog: {x: 2, y: 2, width: 2, height: 1},
    otherDogs: [
      { x: 6, y: 1, width: 1, height: 3 },
      { x: 2, y: 4, width: 3, height: 1 },
    ]
  };
</script>

<main>
  <Game levelSettings={levelSettings} />
</main>

<style>
</style>
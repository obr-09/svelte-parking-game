<script lang="ts">
  import type { LevelSettings } from './game/models';
  import Game from './game/Game.svelte';
  import Menu from './menu/Menu.svelte';
  import { currentLevelSettings } from './state';
</script>

<main>
  {#if $currentLevelSettings}
    <Game levelSettings={$currentLevelSettings} />
  {:else}
    <Menu />
  {/if}
</main>

<style>
</style>
<script lang="ts">
  import { gridSize } from '../data/store';
  import Cell from './Cell.svelte'

  const preventDefault = (event): void => {
    event.preventDefault();
  }
</script>

<div class="grid" on:mousedown={preventDefault}>
  {#each Array.from(Array($gridSize.y).keys()) as y}
    <div class="row">
      {#each Array.from(Array($gridSize.x).keys()) as x}
        <Cell />
      {/each}
    </div>
  {/each}

  <slot />
</div>

<style>
  .grid {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 8px;
    width: fit-content;
  }

  .row {
    display: flex;
    flex-direction: row;
  }
</style>

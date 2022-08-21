<script lang="ts">
  import { gridSize } from '../data/store';
  import Cell from './Cell.svelte'
</script>

<div class="grid">
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
    width: 100%;
    box-sizing: border-box;
    padding: 8px;
  }

  .row {
    display: flex;
    flex-direction: row;
  }
</style>

<script lang="ts">
  export let width: number = 15;
  export let height: number = 8;

  import Cell from './Cell.svelte'
</script>

<div class="grid">
  {#each Array.from(Array(height).keys()) as y}
    <div class="row">
      {#each Array.from(Array(width).keys()) as x}
        <Cell />
      {/each}
    </div>
  {/each}

  <slot />
</div>

<style>
  .grid {
    display: flex;
    flex-direction: column;;
  }

  .row {
    display: flex;
    flex-direction: row;
  }
</style>

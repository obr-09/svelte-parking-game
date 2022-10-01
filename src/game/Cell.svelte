<script context="module" lang="ts">
import { cellWidth } from "./store";
</script>

<div
  class="cell"
  style="
    width: {$cellWidth}px;
    height: {$cellWidth}px;
  "
>
<div></div>
</div>

<style>
  .cell {
    background: var(--primaryBackground);
    border: 1px solid var(--primaryEdges);
    box-sizing: border-box;
  }
</style>

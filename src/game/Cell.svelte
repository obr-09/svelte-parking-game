<script context="module" lang="ts">
import { cellWidth } from "../data/store";
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
    background: lightcyan;
    border: 1px solid royalblue;
    box-sizing: border-box;
  }
</style>

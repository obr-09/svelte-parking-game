<script context="module" lang="ts">
  import { cellWidth } from '../data/selectors';
</script>

<div
  class="cell"
  style="
    width: {cellWidth}vw;
    padding-bottom: {cellWidth}vw;
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

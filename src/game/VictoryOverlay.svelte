<script>

  import { isGoalReached, moveCount } from "./store";

</script>


<div
  class="victory-overlay"
  style="
    opacity: {$isGoalReached ? 0.3 : 0};
  "
>
</div>
{#if $isGoalReached}
  <span class="message">
    Dog parked in {$moveCount} moves!
  </span>
{/if}

<style>
  .victory-overlay {
    background: black;
    position: absolute;
    transition: opacity 2s;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 1;
    pointer-events: none;
  }

  .message {
    font-size: 36px;
    font-weight: bold;
    color: white;
    z-index: 2;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
</style>

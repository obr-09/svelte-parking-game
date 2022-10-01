<script lang="ts">
  import { currentLevelSettings } from "../state";
  import { onMount } from "svelte";
  import { storedLevels } from "./store";
  import { getDefaultLevels } from "./utils";

  const loadLevel = (levelSetting) => {
    $currentLevelSettings = $storedLevels[levelSetting];
  };

  onMount(() => {
    $storedLevels = getDefaultLevels();
  })
</script>

<div class="menu">
  <h2>Choose your level</h2>
  <ul class="levels">
    {#each Object.keys($storedLevels) as storedLevel}
      <li class="level"><button on:click={() => loadLevel(storedLevel)}>{storedLevel}</button></li>
    {/each}
  </ul>
</div>

<style>
  .menu {
    display: flex;
    width: 400px;
    margin: auto;
    flex-direction: column;
    text-align: center;
  }

  .levels {
    padding: 0;
    list-style: none;
  }

  .level {
    cursor: pointer;
  }
  .level:hover {
    text-decoration: underline;
  }
</style>
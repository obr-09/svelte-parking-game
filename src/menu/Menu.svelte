<script lang="ts">
  import { currentLevelSettings } from "../state";
  import { onMount } from "svelte";
  import { storedLevels } from "./store";
  import { getLevelList } from "./data";

  const loadLevel = (levelSetting) => {
    $currentLevelSettings = levelSetting;
  };

  onMount(() => {
    $storedLevels = getLevelList();
  })
</script>

<div class="menu">
  <h2 class="hint">Choose your level</h2>
  <ul class="levels">
    {#each $storedLevels as storedLevel}
      <li>
        <button class="level" on:click={() => loadLevel(storedLevel)}>{storedLevel.name}</button>
      </li>
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

  .hint {
    font-weight: normal;
  }

  .levels {
    padding: 0;
    list-style: none;
  }

  .level {
    cursor: pointer;
    color: var(--fontColor);
    font-weight: bold;
    background-color: #fde7ce;
    border: 2px solid #fbd4a8;
    border-radius: 4px;
    margin-bottom: 8px;
    padding: 4px 12px;
    min-width: 200px;
  }
  .level:hover {
    text-decoration: underline;
    background-color: #fdebd7;
    transition: background 0.5s;
  }
</style>
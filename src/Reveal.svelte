<script>
  import { onMount } from 'svelte';

  export let name, alt = '', variant = 'default';

  const base = '/cse168-extra-credit';
  let active = 0;
</script>

{#if variant === 'default'}
  <div class="container">
    <img class="in" src="{base}/final/{name}/{name}_in.png" alt="Input" />
    <img class="out" src="{base}/final/{name}/{name}_oidn.png" alt="Output after OIDN" class:active={active == 1} />
    <img class="out" src="{base}/final/{name}/{name}_twsc.png" alt="Output after TWSC" class:active={active == 2} />
    <div class="buttons">
      <button on:click={() => { active = 0; }} class:active={active == 0}>Input</button>
      <button on:click={() => { active = 1; }} class:active={active == 1}>OIDN</button>
      <button on:click={() => { active = 2; }} class:active={active == 2}>TWSC</button>
    </div>
  </div>
{:else}
  <div class="container difference">
    <img class="in" src="{name}.png" alt={alt} />
    <img class="out" src="{name}.diff.png" alt="{alt} (Difference)" />
  </div>
{/if}

<style>
  .container {
    position: relative;
  }
  .in {
    z-index: 0;
    position: relative;
  }
  .out {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    opacity: 0;
    transition: opacity 0.2s;
  }
  .out.active {
    opacity: 1;
  }
  .buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
  }
  .buttons button {
    flex: 1;
    border: none;
    padding: 0.5rem 0;
    cursor: pointer;
    transition: background 0.1s;
  }
  .buttons button.active {
    background: #0D9276;
  }

  .container.difference:hover > .out {
    opacity: 1;
  }
</style>

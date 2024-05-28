<script>
  import { onMount } from 'svelte';

  export let left, right;

  let edge, container, dragger, down = false;
  onMount(() => {
    const update = (x) => {
      const left = container.getBoundingClientRect().left;
      edge.style.left = (x - left - 5) + 'px';
      dragger.style.width = (x - left) + 'px';
    };

    edge.addEventListener('mousedown', (e) => { down = true; });
    container.addEventListener('mouseup', () => { down = false; });
    container.addEventListener('mousemove', (e) => {
      if (!down) return;

      update(e.clientX);
    });

    update(container.getBoundingClientRect().left + (container.offsetWidth / 2));
  });
</script>

<div bind:this={container} class="image_compare">
  <div bind:this={dragger} class="dragger">
    <img src={left} alt="Left image" draggable={false} />
    <div bind:this={edge} class="edge" />
  </div>
  <img src={right} alt="Right image" draggable={false} />
</div>

<style>
.image_compare {
  width: 100%;
  max-width: 40rem;
  margin: 0 auto;
  position: relative;
  user-select: none;
}
.image_compare > img {
  width: 100%;
  user-select: none;
}
.image_compare .dragger {
  width: 50%;
  max-width: 40rem;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
}
.image_compare .dragger img {
  max-width: 40rem;
  user-select: none;
}
.image_compare .dragger .edge {
  width: 5px;
  height: 100%;
  background: #242424;
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
}

@media only screen and (max-width: 640px) {
  .image_compare .dragger img {
    max-width: 100vw;
    user-select: none;
  }
}
</style>

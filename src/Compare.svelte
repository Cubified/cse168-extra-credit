<script>
  import { onMount } from 'svelte';

  export let left, right;

  let edge, container, dragger;
  onMount(() => {
    const update = (x) => {
      const left = container.getBoundingClientRect().left;
      edge.style.left = (x - left - 5) + 'px';
      dragger.style.width = (x - left) + 'px';
    };

    container.addEventListener('mousemove', (e) => {
      e.preventDefault();
      update(e.clientX);
    });
    container.addEventListener('touchmove', (e) => {
      e.preventDefault();
      update(e.touches[0].clientX);
    });

    update(container.getBoundingClientRect().left + (container.offsetWidth / 2));
  });
</script>

<div bind:this={container} class="image_compare">
  <div bind:this={dragger} class="dragger">
    <img src={left} alt="Scene before TWSC denoising" draggable={false} />
    <div bind:this={edge} class="edge" />
  </div>
  <img src={right} alt="Scene after TWSC denoising" draggable={false} />
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
  height: 100%;
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
    height: 98%;
    user-select: none;
  }
  .image_compare > img {
    height: 100%;
    user-select: none;
  }
}
</style>

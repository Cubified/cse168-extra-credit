<script>
  const hw2 = [
    { desc: '<b>Cubemaps</b>:<br>Press <code>c</code> to switch between cubemaps.', img: 'cubemaps.png' },
    { desc: '<b>Mouse orbit</b>:<br>Use the mouse to orbit the scene.', img: 'mouse_orbit.png' },
    { desc: '<b>Edit mode</b>:<br>Press <code>e</code> to enter edit mode, then <code>tab/shift+tab</code> to focus different objects in the scene.', img: 'edit_mode.png' },
    { desc: '<b>Scene editing</b>:<br>Press <code>x/y/z</code> to select an axis, <code>t/r/s</code> to select an operation, and <code>up/down</code> to modify the current object.', img: 'scene_editing.png' },
    { desc: '<b>Keyframes</b>:<br>Press <code>space</code> in edit mode to add a keyframe, then <code>e</code> to exit edit mode and play back the animation.', img: 'keyframes.gif' },
    { desc: '<b>Reflections</b>:<br>Use the <code>reflectivity</code> command to specify how much of the cubemap an object reflects.', img: 'reflections.png' },
    { desc: '<b>Textures</b>:<br>Press <code>n</code> when in edit mode to cycle between textures for each object.', img: 'textures.png' },
  ];
</script>

<main>
  <div class="masthead">
    <img src="/utah.png" alt="Utah Teapot" />
    <h1>CSE 167 Extra Credit Site</h1>
    <h3>Andrew Russell (<a href="mailto:alrussell@ucsd.edu">alrussell@ucsd.edu</a>)</h3>
  </div>
  <div class="content">
    <h1>Homework 2: Scene Animator</h1>
    <p>My project extends Homework 2 by adding more interactivity, turning the scene viewer into a scene editor.  Users can select a cubemap, transform individual objects, apply a texture to an object, add keyframes, and play back animations.</p>
    <div class="assignment">
      <div class="video">
        <iframe src="https://www.youtube.com/embed/CLpkFVdgKuM?si=_gJuo5xSdA0HqF8o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <div class="scroller">
        <div>
          {#each hw2 as { desc, img }, i}
            <div class="item">
              <img src="/hw2/{img}" alt="HW2 demo {i}" />
              <p>{ @html desc }</p>
            </div>
          {/each}
        </div>
      </div>
    </div>
    <h4>Sources and Asset Credits:</h4>
    <p class="spread">
      <a href="https://learnopengl.com/Advanced-OpenGL/Cubemaps">Learn OpenGL: Cubemaps</a>
      &nbsp;|&nbsp;
      <a href="https://www.humus.name/index.php?page=Textures&start=0">Cubemap Images</a>
      &nbsp;|&nbsp;
      <a href="https://architextures.org/textures/category/stone">Limestone Texture</a>
      &nbsp;|&nbsp;
      <a href="https://easings.net/#easeInOutQuad">Easing Function Formula</a>
      &nbsp;|&nbsp;
      I used <a href="https://glm.g-truc.net/0.9.3/api/a00178.html"><code>glm::interpolate</code></a> to achieve interpolation between keyframes.
    </p>
  </div>
</main>

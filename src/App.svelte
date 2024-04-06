<script>
  const base = '/cse168-extra-credit';
  const hw2 = [
    { desc: '<b>Custom Scene</b><br>Use <code>extra_credit_scene.txt</code> to view a custom scene built with cubemaps and reflections in mind.', img: 'custom_scene.png' },
    { desc: '<b>Cubemaps</b>:<br>Press <code>c</code> to switch between cubemaps.', img: 'cubemaps.png' },
    { desc: '<b>Keyframes</b>:<br>Press <code>space</code> in edit mode to add a keyframe, then <code>e</code> to exit edit mode and play back the animation.', img: 'keyframes.gif' },
    { desc: '<b>Edit mode</b>:<br>Press <code>e</code> to enter edit mode, then <code>tab/shift+tab</code> to focus different objects in the scene.', img: 'edit_mode.png' },
    { desc: '<b>Scene editing</b>:<br>Press <code>x/y/z</code> to select an axis, <code>t/r/s</code> to select an operation, and <code>up/down</code> to modify the current object.', img: 'scene_editing.png' },
    { desc: '<b>Mouse orbit</b>:<br>Use the mouse to orbit the scene.', img: 'mouse_orbit.png' },
    { desc: '<b>Reflections</b>:<br>Use the <code>reflectivity</code> command to specify how much of the cubemap an object reflects.', img: 'reflections.png' },
    { desc: '<b>Textures</b>:<br>Press <code>n</code> when in edit mode to cycle between textures for each object.', img: 'textures.png' },
  ];
  const hw3 = [
    { desc: '<b>Real-time Editing</b><br>Construct curves in a 2D editing window and see them converted into 3D within an interactive viewing window.', img: 'lathe.png' },
    { desc: '<b>Multiple Curves</b><br>Press <code>1/2/3</code> to add a new curve, and <code>C</code> to clear all curves.', img: 'compound.png' },
    { desc: '<b>Vertex Normals</b><br>Each 3D object generates per-vertex normals, capable of smoothly reflecting a cubemap image.', img: 'reflect.png' },
    { desc: '<b>Curve Coloring</b><br>Press <code>N</code> to change a single curve\'s color.', img: 'color.png' },
  ];
  const hw4 = [
    { desc: '<b>Main Assignment: High-Performance</b><br>Capable of rendering the Stanford dragon (100,000 triangles) at 4K resolution (3840x2160 pixels) in 1.7 seconds on an M1 Macbook Air.', img: 'dragon_4k.png' },
    { desc: '<b>Main Assignment: Acceleration Structure</b><br>Computes a bounding volume hierarchy for fast intersection tests, reducing the time to render a scene with 100,000 triangles at 4K from 10 minutes to 1.7 seconds.', img: 'acceleration.png' },
    { desc: '<b>Main Assignment: Multithreaded</b><br>Uses <code>std::thread</code> to render each scanline in a separate thread, improving performance by approximately 10x for sufficiently complex scenes.', img: 'multithreaded.png' },
    { desc: '<b>Extra Credit: Real-Time</b><br>Capable of rendering directly to the terminal via ANSI escape sequences in real-time.', img: 'realtime.png' },
    { desc: '<b>Extra Credit: Interactive</b><br>Click and drag the mouse to orbit around the scene to view it from different angles.', img: 'interactive.png' },
    { desc: '<b>Extra Credit: Resizable</b><br>Re-run the program with the terminal at different zoom levels to view the scene at different resolutions.', img: 'resolution.png' },
  ];

  const hw1_168 = [
    { desc: '<b>Acceleration Structure</b><br>Computes a bounding volume hierarchy for fast intersection tests, reducing the time to render a scene with 100,000 triangles at 4K from 10 minutes to 1.7 seconds.', img: 'acceleration.png' },
    { desc: '<b>.OBJ File Parsing</b><br>Use the <code>obj</code> command to add a Wavefront OBJ model to the scene, with support for models that supply their own vertex normals and texture coordinates.', img: 'obj.png' },
    { desc: '<b>Texture Mapping</b><br>Use the <code>image</code> command to set the scene\'s background image, and the <code>texture</code> command to set the current object\'s texture using a PNG file.', img: 'textures.png' },
    { desc: '<b>Area Lights/Soft Shadows</b><br>Use the <code>area</code> command to create an area light, which randomly samples shadow rays based on the <code>shadowsamples</code> command.', img: 'soft_shadows.png' },
    { desc: '<b>Antialiasing</b><br>Use the <code>aasamples</code> command to adjust the number of jitter-sampled rays. The first ray is always shot through the center of each pixel.', img: 'antialiasing.png' },
    { desc: '<b>Depth-of-Field</b><br>Modify <code>focallen, aperture,</code> and <code>dofsamples</code> to adjust the lens properties for randomly-sampled depth-of-field.', img: 'dof.png' },
    { desc: '<b>Multithreading</b><br>Uses <code>std::thread</code> to render scanlines in separate threads, improving performance by approximately 10x for sufficiently complex scenes. Adjust the <code>threads</code> command to spawn a different number of threads.', img: 'multithreaded.png' },
  ];
</script>

<main>
  <div class="masthead">
    <img src="{base}/utah.png" alt="Utah Teapot" />
    <h1>CSE 168 Extra Credit Site</h1>
    <h3>Andrew Russell (<a href="mailto:alrussell@ucsd.edu">alrussell@ucsd.edu</a>)</h3>
  </div>
  <div class="content">
    <h1>Homework 1:<br>Ray Tracer Improvements</h1>
    <p>I improved my ray tracer from CSE 167 by adding antialiasing, area lights, depth-of-field, texture mapping, and .OBJ file parsing.</p>
    <div class="assignment">
      <div class="scroller">
        <div>
          {#each hw1_168 as { desc, img }, i}
            <div class="item nonsquare">
              <img src="{base}/hw1_168/{img}" alt="HW1 demo {i}" />
              <p>{ @html desc }</p>
            </div>
          {/each}
        </div>
      </div>
    </div>

    <h4>Sources:</h4>
    <p class="spread">
      <a href="https://cadxfem.org/inf/Fast%20MinimumStorage%20RayTriangle%20Intersection.pdf">Triangle intersection algorithm</a>
      &nbsp;|&nbsp;
      <a href="https://math.stackexchange.com/a/128999">Triangle area formula</a>
      &nbsp;|&nbsp;
      <a href="https://jacco.ompf2.com/2022/04/13/how-to-build-a-bvh-part-1-basics">BVH calculation</a>
      &nbsp;|&nbsp;
      <a href="https://tavianator.com/2011/ray_box.html">AABB intersection test</a>
      &nbsp;|&nbsp;
      <a href="https://en.wikipedia.org/wiki/Wavefront_.obj_file">.OBJ file format</a>
      &nbsp;|&nbsp;
      <a href="https://github.com/nothings/stb/blob/master/stb_image_write.h"><code>stb_image_write</code></a>
      &nbsp;|&nbsp;
      <a href="https://github.com/nothings/stb/blob/master/stb_image.h"><code>stb_image</code></a>
    </p>
  </div>
  <div class="content">
    <h1>CSE 167 Final Project:<br>Interactive, Real-Time Ray Tracer in the Terminal</h1>
    <p>I extended my raytracer by reading and writing <a href="https://en.wikipedia.org/wiki/ANSI_escape_code">ANSI escape sequences</a> to standard input and standard output.  Coupled with the performance gains from my bounding volume hierarchy and the addition of multithreading, this allows for interactive raytracing in real-time.</p>
    <div class="assignment">
      <div class="video">
        <iframe src="https://www.youtube.com/embed/F71dgYAOl-I?si=9SXhBIqVycQj7vqg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <div class="scroller">
        <div>
          {#each hw4 as { desc, img }, i}
            <div class="item nonsquare">
              <img src="{base}/hw4/{img}" alt="HW4 demo {i}" />
              <p>{ @html desc }</p>
            </div>
          {/each}
        </div>
      </div>
    </div>

    <h4>Sources:</h4>
    <p class="spread">
      <a href="https://cadxfem.org/inf/Fast%20MinimumStorage%20RayTriangle%20Intersection.pdf">Triangle intersection algorithm</a>
      &nbsp;|&nbsp;
      <a href="https://math.stackexchange.com/a/128999">Triangle area formula</a>
      &nbsp;|&nbsp;
      <a href="https://jacco.ompf2.com/2022/04/13/how-to-build-a-bvh-part-1-basics">BVH calculation</a>
      &nbsp;|&nbsp;
      <a href="https://tavianator.com/2011/ray_box.html">AABB intersection test</a>
      &nbsp;|&nbsp;
      <a href="https://github.com/nothings/stb/blob/master/stb_image_write.h"><code>stb_image_write</code></a>
    </p>
  </div>
  <div class="content">
    <h1>CSE 167 Homework 3: Lathe Editor</h1>
    <p>My project extends Homework 3 by generating a solid of revolution (lathe) from the user's curves.  It also generates smooth vertex normals, demonstrated by a cubemap for reflections.  Users can also add multiple curves and change their colors, in order to create complex compound shapes.</p>
    <div class="assignment">
      <div class="video">
        <iframe src="https://www.youtube.com/embed/aVaHUaQEquQ?si=9SXhBIqVycQj7vqg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <div class="scroller">
        <div>
          {#each hw3 as { desc, img }, i}
            <div class="item nonsquare">
              <img src="{base}/hw3/{img}" alt="HW3 demo {i}" />
              <p>{ @html desc }</p>
            </div>
          {/each}
        </div>
      </div>
    </div>
    <h4>Sources and Asset Credits:</h4>
    <p class="spread">
      <a href="https://stackoverflow.com/questions/7904281/opengl-rotate-a-curve-about-the-y-axis">Solid of Revolution Generation</a>
      &nbsp;|&nbsp;
      <a href="https://computergraphics.stackexchange.com/questions/4031/programmatically-generating-vertex-normals">Vertex Normals Calculation</a>
      &nbsp;|&nbsp;
      <a href="https://www.humus.name/index.php?page=Textures&start=0">Cubemap Image</a>
    </p>
  </div>
  <div class="content">
    <h1>CSE 167 Homework 2: Scene Animator</h1>
    <p>My project extends Homework 2 by adding more interactivity, turning the scene viewer into a scene editor.  Users can select a cubemap, transform individual objects, apply a texture to an object, add keyframes, and play back animations.  It also adds a custom scene, built to show off these features.</p>
    <div class="assignment">
      <div class="video">
        <iframe src="https://www.youtube.com/embed/l4iw-qttC9c?si=9SXhBIqVycQj7vqg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <div class="scroller">
        <div>
          {#each hw2 as { desc, img }, i}
            <div class="item">
              <img src="{base}/hw2/{img}" alt="HW2 demo {i}" />
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

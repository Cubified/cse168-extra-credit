var jt=Object.defineProperty;var It=(e,t,n)=>t in e?jt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Ie=(e,t,n)=>(It(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))i(l);new MutationObserver(l=>{for(const d of l)if(d.type==="childList")for(const h of d.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&i(h)}).observe(document,{childList:!0,subtree:!0});function n(l){const d={};return l.integrity&&(d.integrity=l.integrity),l.referrerPolicy&&(d.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?d.credentials="include":l.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function i(l){if(l.ep)return;l.ep=!0;const d=n(l);fetch(l.href,d)}})();function E(){}function Ct(e){return e()}function ft(){return Object.create(null)}function ve(e){e.forEach(Ct)}function Tt(e){return typeof e=="function"}function Mt(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let ge;function A(e,t){return e===t?!0:(ge||(ge=document.createElement("a")),ge.href=t,e===ge.href)}function $t(e){return Object.keys(e).length===0}function r(e,t){e.appendChild(t)}function X(e,t,n){e.insertBefore(t,n||null)}function q(e){e.parentNode&&e.parentNode.removeChild(e)}function pe(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function a(e){return document.createElement(e)}function qt(e){return document.createTextNode(e)}function u(){return qt(" ")}function c(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Bt(e){return Array.from(e.childNodes)}let z;function K(e){z=e}function Ot(){if(!z)throw new Error("Function called outside component initialization");return z}function Pt(e){Ot().$$.on_mount.push(e)}const D=[],Y=[];let Q=[];const ht=[],Rt=Promise.resolve();let qe=!1;function Nt(){qe||(qe=!0,Rt.then(St))}function Be(e){Q.push(e)}const $e=new Set;let V=0;function St(){if(V!==0)return;const e=z;do{try{for(;V<D.length;){const t=D[V];V++,K(t),Ut(t.$$)}}catch(t){throw D.length=0,V=0,t}for(K(null),D.length=0,V=0;Y.length;)Y.pop()();for(let t=0;t<Q.length;t+=1){const n=Q[t];$e.has(n)||($e.add(n),n())}Q.length=0}while(D.length);for(;ht.length;)ht.pop()();qe=!1,$e.clear(),K(e)}function Ut(e){if(e.fragment!==null){e.update(),ve(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Be)}}function Ft(e){const t=[],n=[];Q.forEach(i=>e.indexOf(i)===-1?t.push(i):n.push(i)),n.forEach(i=>i()),Q=t}const be=new Set;let Wt;function Lt(e,t){e&&e.i&&(be.delete(e),e.i(t))}function Gt(e,t,n,i){if(e&&e.o){if(be.has(e))return;be.add(e),Wt.c.push(()=>{be.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function I(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function Vt(e){e&&e.c()}function Ht(e,t,n){const{fragment:i,after_update:l}=e.$$;i&&i.m(t,n),Be(()=>{const d=e.$$.on_mount.map(Ct).filter(Tt);e.$$.on_destroy?e.$$.on_destroy.push(...d):ve(d),e.$$.on_mount=[]}),l.forEach(Be)}function kt(e,t){const n=e.$$;n.fragment!==null&&(Ft(n.after_update),ve(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Dt(e,t){e.$$.dirty[0]===-1&&(D.push(e),Nt(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function At(e,t,n,i,l,d,h=null,p=[-1]){const m=z;K(e);const f=e.$$={fragment:null,ctx:[],props:d,update:E,not_equal:l,bound:ft(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(m?m.$$.context:[])),callbacks:ft(),dirty:p,skip_bound:!1,root:t.target||m.$$.root};h&&h(f.root);let g=!1;if(f.ctx=n?n(e,t.props||{},(v,b,...C)=>{const j=C.length?C[0]:b;return f.ctx&&l(f.ctx[v],f.ctx[v]=j)&&(!f.skip_bound&&f.bound[v]&&f.bound[v](j),g&&Dt(e,v)),b}):[],f.update(),g=!0,ve(f.before_update),f.fragment=i?i(f.ctx):!1,t.target){if(t.hydrate){const v=Bt(t.target);f.fragment&&f.fragment.l(v),v.forEach(q)}else f.fragment&&f.fragment.c();t.intro&&Lt(e.$$.fragment),Ht(e,t.target,t.anchor),St()}K(m)}class Et{constructor(){Ie(this,"$$");Ie(this,"$$set")}$destroy(){kt(this,1),this.$destroy=E}$on(t,n){if(!Tt(n))return E;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const l=i.indexOf(n);l!==-1&&i.splice(l,1)}}$set(t){this.$$set&&!$t(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Qt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Qt);function Xt(e){let t,n,i,l,d,h,p,m,f;return{c(){t=a("div"),n=a("div"),i=a("img"),d=u(),h=a("div"),p=u(),m=a("img"),A(i.src,l=e[0])||c(i,"src",l),c(i,"alt","Left image"),c(i,"draggable",!1),c(i,"class","svelte-1cn9k4o"),c(h,"class","edge svelte-1cn9k4o"),c(n,"class","dragger svelte-1cn9k4o"),A(m.src,f=e[1])||c(m,"src",f),c(m,"alt","Right image"),c(m,"draggable",!1),c(m,"class","svelte-1cn9k4o"),c(t,"class","image_compare svelte-1cn9k4o")},m(g,v){X(g,t,v),r(t,n),r(n,i),r(n,d),r(n,h),e[5](h),e[6](n),r(t,p),r(t,m),e[7](t)},p(g,[v]){v&1&&!A(i.src,l=g[0])&&c(i,"src",l),v&2&&!A(m.src,f=g[1])&&c(m,"src",f)},i:E,o:E,d(g){g&&q(t),e[5](null),e[6](null),e[7](null)}}}function Kt(e,t,n){let{left:i,right:l}=t,d,h,p,m=!1;Pt(()=>{const b=C=>{const j=h.getBoundingClientRect().left;n(2,d.style.left=C-j-5+"px",d),n(4,p.style.width=C-j+"px",p)};d.addEventListener("mousedown",C=>{m=!0}),h.addEventListener("mouseup",()=>{m=!1}),h.addEventListener("mousemove",C=>{m&&b(C.clientX)}),b(h.getBoundingClientRect().left+h.offsetWidth/2)});function f(b){Y[b?"unshift":"push"](()=>{d=b,n(2,d)})}function g(b){Y[b?"unshift":"push"](()=>{p=b,n(4,p)})}function v(b){Y[b?"unshift":"push"](()=>{h=b,n(3,h)})}return e.$$set=b=>{"left"in b&&n(0,i=b.left),"right"in b&&n(1,l=b.right)},[i,l,d,h,p,f,g,v]}class Yt extends Et{constructor(t){super(),At(this,t,Kt,Xt,Mt,{left:0,right:1})}}function gt(e,t,n){const i=e.slice();return i[4]=t[n].desc,i[5]=t[n].img,i[7]=n,i}function pt(e,t,n){const i=e.slice();return i[4]=t[n].desc,i[5]=t[n].img,i[7]=n,i}function bt(e,t,n){const i=e.slice();return i[4]=t[n].desc,i[5]=t[n].img,i[7]=n,i}function vt(e,t,n){const i=e.slice();return i[4]=t[n].desc,i[5]=t[n].img,i[7]=n,i}function _t(e){let t,n,i,l,d,h=e[4]+"",p;return{c(){t=a("div"),n=a("img"),l=u(),d=a("p"),p=u(),A(n.src,i=$+"/hw1_168/"+e[5])||c(n,"src",i),c(n,"alt","HW1 demo "+e[7]),c(t,"class","item nonsquare")},m(m,f){X(m,t,f),r(t,n),r(t,l),r(t,d),d.innerHTML=h,r(t,p)},p:E,d(m){m&&q(t)}}}function wt(e){let t,n,i,l,d,h=e[4]+"",p;return{c(){t=a("div"),n=a("img"),l=u(),d=a("p"),p=u(),A(n.src,i=$+"/hw4/"+e[5])||c(n,"src",i),c(n,"alt","HW4 demo "+e[7]),c(t,"class","item nonsquare")},m(m,f){X(m,t,f),r(t,n),r(t,l),r(t,d),d.innerHTML=h,r(t,p)},p:E,d(m){m&&q(t)}}}function yt(e){let t,n,i,l,d,h=e[4]+"",p;return{c(){t=a("div"),n=a("img"),l=u(),d=a("p"),p=u(),A(n.src,i=$+"/hw3/"+e[5])||c(n,"src",i),c(n,"alt","HW3 demo "+e[7]),c(t,"class","item nonsquare")},m(m,f){X(m,t,f),r(t,n),r(t,l),r(t,d),d.innerHTML=h,r(t,p)},p:E,d(m){m&&q(t)}}}function xt(e){let t,n,i,l,d,h=e[4]+"",p;return{c(){t=a("div"),n=a("img"),l=u(),d=a("p"),p=u(),A(n.src,i=$+"/hw2/"+e[5])||c(n,"src",i),c(n,"alt","HW2 demo "+e[7]),c(t,"class","item")},m(m,f){X(m,t,f),r(t,n),r(t,l),r(t,d),d.innerHTML=h,r(t,p)},p:E,d(m){m&&q(t)}}}function zt(e){let t,n,i,l,d,h,p,m,f,g,v,b,C,j,Oe,Pe,_e,Re,Ne,Ue,B,Fe,we,We,T,ye,Ge,xe,Ve,O,J,De,Z,ee,Qe,Ce,Xe,te,Ke,M,Te,Ye,Me,ze,P,ne,Je,re,ie,Ze,Se,et,oe,tt,S,Le,nt,He,rt,R,ae,it,se,ce,ot,ke,at,le,st,L,Ae,ct,Ee,lt,N,de,dt,ue,me,ut,je,mt,fe,he;B=new Yt({props:{left:$+"/final/twsc_in.png",right:$+"/final/twsc_out.png"}});let U=I(e[3]),_=[];for(let s=0;s<U.length;s+=1)_[s]=_t(vt(e,U,s));let F=I(e[2]),w=[];for(let s=0;s<F.length;s+=1)w[s]=wt(bt(e,F,s));let W=I(e[1]),y=[];for(let s=0;s<W.length;s+=1)y[s]=yt(pt(e,W,s));let G=I(e[0]),x=[];for(let s=0;s<G.length;s+=1)x[s]=xt(gt(e,G,s));return{c(){t=a("main"),n=a("div"),i=a("img"),d=u(),h=a("h1"),h.textContent="CSE 168 Extra Credit Site",p=u(),m=a("h3"),m.innerHTML='Andrew Russell (<a href="mailto:alrussell@ucsd.edu">alrussell@ucsd.edu</a>)',f=u(),g=a("div"),v=a("h1"),v.innerHTML="Final Project:<br/>Modern Image Denoising",b=u(),C=a("p"),C.innerHTML='My planned final project implements the denoising algorithm proposed in the 2018 paper <a href="https://arxiv.org/abs/1807.04364">&quot;A Trilateral Weighted Sparse Coding Scheme for Real-World Image Denoising&quot; by Xu, Zhang, and Zhang</a>.',j=u(),Oe=a("br"),Pe=u(),_e=a("p"),_e.innerHTML="It is a notable algorithm because it specifically aims to reduce &quot;real-world noise,&quot; or noise patterns that occur more commonly in photos taken by physical cameras.  This is in contrast to algorithms which assume noise samples randomly from <b>additive white Gaussian noise (AWGN)</b>, a relatively simple analytical model for electron motion.  I would like to investigate <b>whether this more complex modeling of noise positively impacts image denoising in path-traced images</b>, and if so what specific parameters produce the best results.",Re=u(),Ne=a("br"),Ue=u(),Vt(B.$$.fragment),Fe=u(),we=a("p"),we.innerHTML="<i>This is a side-by-side comparison of the original GGX sample scene (left) and the GGX sample scene after being passed through TWSC denoising (right). Drag the divider to compare the images.</i>",We=u(),T=a("div"),ye=a("h1"),ye.innerHTML="Homework 1:<br/>Interactive Scene Editor for Ray Tracer",Ge=u(),xe=a("p"),xe.innerHTML='I improved my ray tracer from CSE 167 by adding antialiasing, area lights, depth-of-field, texture mapping, and .OBJ file parsing. Scenes are now editable in real-time using a <a href="https://github.com/ocornut/imgui">Dear Imgui</a>-based user interface.',Ve=u(),O=a("div"),J=a("div"),J.innerHTML='<iframe src="https://www.youtube.com/embed/b-tWFDPlZHQ?si=9SXhBIqVycQj7vqg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen=""></iframe>',De=u(),Z=a("div"),ee=a("div");for(let s=0;s<_.length;s+=1)_[s].c();Qe=u(),Ce=a("h4"),Ce.textContent="Sources:",Xe=u(),te=a("p"),te.innerHTML=`<a href="https://cadxfem.org/inf/Fast%20MinimumStorage%20RayTriangle%20Intersection.pdf">Triangle intersection algorithm</a>
       | 
      <a href="https://math.stackexchange.com/a/128999">Triangle area formula</a>
       | 
      <a href="https://jacco.ompf2.com/2022/04/13/how-to-build-a-bvh-part-1-basics">BVH calculation</a>
       | 
      <a href="https://tavianator.com/2011/ray_box.html">AABB intersection test</a>
       | 
      <a href="https://en.wikipedia.org/wiki/Wavefront_.obj_file">.OBJ file format</a>
       | 
      <a href="https://github.com/nothings/stb/blob/master/stb_image_write.h"><code>stb_image_write</code></a>
       | 
      <a href="https://github.com/nothings/stb/blob/master/stb_image.h"><code>stb_image</code></a>`,Ke=u(),M=a("div"),Te=a("h1"),Te.innerHTML="CSE 167 Final Project:<br/>Interactive, Real-Time Ray Tracer in the Terminal",Ye=u(),Me=a("p"),Me.innerHTML='I extended my raytracer by reading and writing <a href="https://en.wikipedia.org/wiki/ANSI_escape_code">ANSI escape sequences</a> to standard input and standard output.  Coupled with the performance gains from my bounding volume hierarchy and the addition of multithreading, this allows for interactive raytracing in real-time.',ze=u(),P=a("div"),ne=a("div"),ne.innerHTML='<iframe src="https://www.youtube.com/embed/F71dgYAOl-I?si=9SXhBIqVycQj7vqg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen=""></iframe>',Je=u(),re=a("div"),ie=a("div");for(let s=0;s<w.length;s+=1)w[s].c();Ze=u(),Se=a("h4"),Se.textContent="Sources:",et=u(),oe=a("p"),oe.innerHTML=`<a href="https://cadxfem.org/inf/Fast%20MinimumStorage%20RayTriangle%20Intersection.pdf">Triangle intersection algorithm</a>
       | 
      <a href="https://math.stackexchange.com/a/128999">Triangle area formula</a>
       | 
      <a href="https://jacco.ompf2.com/2022/04/13/how-to-build-a-bvh-part-1-basics">BVH calculation</a>
       | 
      <a href="https://tavianator.com/2011/ray_box.html">AABB intersection test</a>
       | 
      <a href="https://github.com/nothings/stb/blob/master/stb_image_write.h"><code>stb_image_write</code></a>`,tt=u(),S=a("div"),Le=a("h1"),Le.textContent="CSE 167 Homework 3: Lathe Editor",nt=u(),He=a("p"),He.textContent="My project extends Homework 3 by generating a solid of revolution (lathe) from the user's curves.  It also generates smooth vertex normals, demonstrated by a cubemap for reflections.  Users can also add multiple curves and change their colors, in order to create complex compound shapes.",rt=u(),R=a("div"),ae=a("div"),ae.innerHTML='<iframe src="https://www.youtube.com/embed/aVaHUaQEquQ?si=9SXhBIqVycQj7vqg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen=""></iframe>',it=u(),se=a("div"),ce=a("div");for(let s=0;s<y.length;s+=1)y[s].c();ot=u(),ke=a("h4"),ke.textContent="Sources and Asset Credits:",at=u(),le=a("p"),le.innerHTML=`<a href="https://stackoverflow.com/questions/7904281/opengl-rotate-a-curve-about-the-y-axis">Solid of Revolution Generation</a>
       | 
      <a href="https://computergraphics.stackexchange.com/questions/4031/programmatically-generating-vertex-normals">Vertex Normals Calculation</a>
       | 
      <a href="https://www.humus.name/index.php?page=Textures&amp;start=0">Cubemap Image</a>`,st=u(),L=a("div"),Ae=a("h1"),Ae.textContent="CSE 167 Homework 2: Scene Animator",ct=u(),Ee=a("p"),Ee.textContent="My project extends Homework 2 by adding more interactivity, turning the scene viewer into a scene editor.  Users can select a cubemap, transform individual objects, apply a texture to an object, add keyframes, and play back animations.  It also adds a custom scene, built to show off these features.",lt=u(),N=a("div"),de=a("div"),de.innerHTML='<iframe src="https://www.youtube.com/embed/l4iw-qttC9c?si=9SXhBIqVycQj7vqg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen=""></iframe>',dt=u(),ue=a("div"),me=a("div");for(let s=0;s<x.length;s+=1)x[s].c();ut=u(),je=a("h4"),je.textContent="Sources and Asset Credits:",mt=u(),fe=a("p"),fe.innerHTML=`<a href="https://learnopengl.com/Advanced-OpenGL/Cubemaps">Learn OpenGL: Cubemaps</a>
       | 
      <a href="https://www.humus.name/index.php?page=Textures&amp;start=0">Cubemap Images</a>
       | 
      <a href="https://architextures.org/textures/category/stone">Limestone Texture</a>
       | 
      <a href="https://easings.net/#easeInOutQuad">Easing Function Formula</a>
       | 
      I used <a href="https://glm.g-truc.net/0.9.3/api/a00178.html"><code>glm::interpolate</code></a> to achieve interpolation between keyframes.`,A(i.src,l=$+"/utah.png")||c(i,"src",l),c(i,"alt","Utah Teapot"),c(n,"class","masthead"),c(g,"class","content"),c(J,"class","video"),c(Z,"class","scroller"),c(O,"class","assignment"),c(te,"class","spread"),c(T,"class","content"),c(ne,"class","video"),c(re,"class","scroller"),c(P,"class","assignment"),c(oe,"class","spread"),c(M,"class","content"),c(ae,"class","video"),c(se,"class","scroller"),c(R,"class","assignment"),c(le,"class","spread"),c(S,"class","content"),c(de,"class","video"),c(ue,"class","scroller"),c(N,"class","assignment"),c(fe,"class","spread"),c(L,"class","content")},m(s,k){X(s,t,k),r(t,n),r(n,i),r(n,d),r(n,h),r(n,p),r(n,m),r(t,f),r(t,g),r(g,v),r(g,b),r(g,C),r(g,j),r(g,Oe),r(g,Pe),r(g,_e),r(g,Re),r(g,Ne),r(g,Ue),Ht(B,g,null),r(g,Fe),r(g,we),r(t,We),r(t,T),r(T,ye),r(T,Ge),r(T,xe),r(T,Ve),r(T,O),r(O,J),r(O,De),r(O,Z),r(Z,ee);for(let o=0;o<_.length;o+=1)_[o]&&_[o].m(ee,null);r(T,Qe),r(T,Ce),r(T,Xe),r(T,te),r(t,Ke),r(t,M),r(M,Te),r(M,Ye),r(M,Me),r(M,ze),r(M,P),r(P,ne),r(P,Je),r(P,re),r(re,ie);for(let o=0;o<w.length;o+=1)w[o]&&w[o].m(ie,null);r(M,Ze),r(M,Se),r(M,et),r(M,oe),r(t,tt),r(t,S),r(S,Le),r(S,nt),r(S,He),r(S,rt),r(S,R),r(R,ae),r(R,it),r(R,se),r(se,ce);for(let o=0;o<y.length;o+=1)y[o]&&y[o].m(ce,null);r(S,ot),r(S,ke),r(S,at),r(S,le),r(t,st),r(t,L),r(L,Ae),r(L,ct),r(L,Ee),r(L,lt),r(L,N),r(N,de),r(N,dt),r(N,ue),r(ue,me);for(let o=0;o<x.length;o+=1)x[o]&&x[o].m(me,null);r(L,ut),r(L,je),r(L,mt),r(L,fe),he=!0},p(s,[k]){if(k&8){U=I(s[3]);let o;for(o=0;o<U.length;o+=1){const H=vt(s,U,o);_[o]?_[o].p(H,k):(_[o]=_t(H),_[o].c(),_[o].m(ee,null))}for(;o<_.length;o+=1)_[o].d(1);_.length=U.length}if(k&4){F=I(s[2]);let o;for(o=0;o<F.length;o+=1){const H=bt(s,F,o);w[o]?w[o].p(H,k):(w[o]=wt(H),w[o].c(),w[o].m(ie,null))}for(;o<w.length;o+=1)w[o].d(1);w.length=F.length}if(k&2){W=I(s[1]);let o;for(o=0;o<W.length;o+=1){const H=pt(s,W,o);y[o]?y[o].p(H,k):(y[o]=yt(H),y[o].c(),y[o].m(ce,null))}for(;o<y.length;o+=1)y[o].d(1);y.length=W.length}if(k&1){G=I(s[0]);let o;for(o=0;o<G.length;o+=1){const H=gt(s,G,o);x[o]?x[o].p(H,k):(x[o]=xt(H),x[o].c(),x[o].m(me,null))}for(;o<x.length;o+=1)x[o].d(1);x.length=G.length}},i(s){he||(Lt(B.$$.fragment,s),he=!0)},o(s){Gt(B.$$.fragment,s),he=!1},d(s){s&&q(t),kt(B),pe(_,s),pe(w,s),pe(y,s),pe(x,s)}}}const $="/cse168-extra-credit";function Jt(e){return[[{desc:"<b>Custom Scene</b><br>Use <code>extra_credit_scene.txt</code> to view a custom scene built with cubemaps and reflections in mind.",img:"custom_scene.png"},{desc:"<b>Cubemaps</b>:<br>Press <code>c</code> to switch between cubemaps.",img:"cubemaps.png"},{desc:"<b>Keyframes</b>:<br>Press <code>space</code> in edit mode to add a keyframe, then <code>e</code> to exit edit mode and play back the animation.",img:"keyframes.gif"},{desc:"<b>Edit mode</b>:<br>Press <code>e</code> to enter edit mode, then <code>tab/shift+tab</code> to focus different objects in the scene.",img:"edit_mode.png"},{desc:"<b>Scene editing</b>:<br>Press <code>x/y/z</code> to select an axis, <code>t/r/s</code> to select an operation, and <code>up/down</code> to modify the current object.",img:"scene_editing.png"},{desc:"<b>Mouse orbit</b>:<br>Use the mouse to orbit the scene.",img:"mouse_orbit.png"},{desc:"<b>Reflections</b>:<br>Use the <code>reflectivity</code> command to specify how much of the cubemap an object reflects.",img:"reflections.png"},{desc:"<b>Textures</b>:<br>Press <code>n</code> when in edit mode to cycle between textures for each object.",img:"textures.png"}],[{desc:"<b>Real-time Editing</b><br>Construct curves in a 2D editing window and see them converted into 3D within an interactive viewing window.",img:"lathe.png"},{desc:"<b>Multiple Curves</b><br>Press <code>1/2/3</code> to add a new curve, and <code>C</code> to clear all curves.",img:"compound.png"},{desc:"<b>Vertex Normals</b><br>Each 3D object generates per-vertex normals, capable of smoothly reflecting a cubemap image.",img:"reflect.png"},{desc:"<b>Curve Coloring</b><br>Press <code>N</code> to change a single curve's color.",img:"color.png"}],[{desc:"<b>Main Assignment: High-Performance</b><br>Capable of rendering the Stanford dragon (100,000 triangles) at 4K resolution (3840x2160 pixels) in 1.7 seconds on an M1 Macbook Air.",img:"dragon_4k.png"},{desc:"<b>Main Assignment: Acceleration Structure</b><br>Computes a bounding volume hierarchy for fast intersection tests, reducing the time to render a scene with 100,000 triangles at 4K from 10 minutes to 1.7 seconds.",img:"acceleration.png"},{desc:"<b>Main Assignment: Multithreaded</b><br>Uses <code>std::thread</code> to render each scanline in a separate thread, improving performance by approximately 10x for sufficiently complex scenes.",img:"multithreaded.png"},{desc:"<b>Extra Credit: Real-Time</b><br>Capable of rendering directly to the terminal via ANSI escape sequences in real-time.",img:"realtime.png"},{desc:"<b>Extra Credit: Interactive</b><br>Click and drag the mouse to orbit around the scene to view it from different angles.",img:"interactive.png"},{desc:"<b>Extra Credit: Resizable</b><br>Re-run the program with the terminal at different zoom levels to view the scene at different resolutions.",img:"resolution.png"}],[{desc:"<b>Acceleration Structure</b><br>Computes a bounding volume hierarchy for fast intersection tests, reducing the time to render a scene with 100,000 triangles at 4K from 10 minutes to 1.7 seconds.",img:"acceleration.png"},{desc:"<b>.OBJ File Parsing</b><br>Use the <code>obj</code> command to add a Wavefront OBJ model to the scene, with support for models that supply their own vertex normals and texture coordinates.",img:"obj.png"},{desc:"<b>Texture Mapping</b><br>Use the <code>image</code> command to set the scene's background image, and the <code>texture</code> command to set the current object's texture using a PNG file.",img:"textures.png"},{desc:"<b>Area Lights/Soft Shadows</b><br>Use the <code>area</code> command to create an area light, which randomly samples shadow rays based on the <code>shadowsamples</code> command.",img:"soft_shadows.png"},{desc:"<b>Antialiasing</b><br>Use the <code>aasamples</code> command to adjust the number of jitter-sampled rays. The first ray is always shot through the center of each pixel.",img:"antialiasing.png"},{desc:"<b>Depth-of-Field</b><br>Modify <code>focallen, aperture,</code> and <code>dofsamples</code> to adjust the lens properties for randomly-sampled depth-of-field.",img:"dof.png"},{desc:"<b>Multithreading</b><br>Uses <code>std::thread</code> to render scanlines in separate threads, improving performance by approximately 10x for sufficiently complex scenes. Adjust the <code>threads</code> command to spawn a different number of threads.",img:"multithreaded.png"}]]}class Zt extends Et{constructor(t){super(),At(this,t,Jt,zt,Mt,{})}}new Zt({target:document.getElementById("app")});
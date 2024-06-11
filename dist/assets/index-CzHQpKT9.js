var jt=Object.defineProperty;var zt=(e,t,i)=>t in e?jt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i;var Re=(e,t,i)=>(zt(e,typeof t!="symbol"?t+"":t,i),i);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function i(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(n){if(n.ep)return;n.ep=!0;const s=i(n);fetch(n.href,s)}})();function P(){}function Pt(e){return e()}function Ct(){return Object.create(null)}function oe(e){e.forEach(Pt)}function Ht(e){return typeof e=="function"}function Fe(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let Le;function k(e,t){return e===t?!0:(Le||(Le=document.createElement("a")),Le.href=t,e===Le.href)}function Ut(e){return Object.keys(e).length===0}function o(e,t){e.appendChild(t)}function M(e,t,i){e.insertBefore(t,i||null)}function W(e){e.parentNode&&e.parentNode.removeChild(e)}function ae(e,t){for(let i=0;i<e.length;i+=1)e[i]&&e[i].d(t)}function d(e){return document.createElement(e)}function xt(e){return document.createTextNode(e)}function p(){return xt(" ")}function ve(){return xt("")}function je(e,t,i,a){return e.addEventListener(t,i,a),()=>e.removeEventListener(t,i,a)}function u(e,t,i){i==null?e.removeAttribute(t):e.getAttribute(t)!==i&&e.setAttribute(t,i)}function Vt(e){return Array.from(e.childNodes)}function me(e,t,i,a){i==null?e.style.removeProperty(t):e.style.setProperty(t,i,a?"important":"")}function A(e,t,i){e.classList.toggle(t,!!i)}let _e;function pe(e){_e=e}function Ft(){if(!_e)throw new Error("Function called outside component initialization");return _e}function Gt(e){Ft().$$.on_mount.push(e)}const ie=[],ge=[];let re=[];const kt=[],Kt=Promise.resolve();let Ue=!1;function Xt(){Ue||(Ue=!0,Kt.then(Bt))}function Ve(e){re.push(e)}const ze=new Set;let ee=0;function Bt(){if(ee!==0)return;const e=_e;do{try{for(;ee<ie.length;){const t=ie[ee];ee++,pe(t),Zt(t.$$)}}catch(t){throw ie.length=0,ee=0,t}for(pe(null),ie.length=0,ee=0;ge.length;)ge.pop()();for(let t=0;t<re.length;t+=1){const i=re[t];ze.has(i)||(ze.add(i),i())}re.length=0}while(ie.length);for(;kt.length;)kt.pop()();Ue=!1,ze.clear(),pe(e)}function Zt(e){if(e.fragment!==null){e.update(),oe(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Ve)}}function Jt(e){const t=[],i=[];re.forEach(a=>e.indexOf(a)===-1?t.push(a):i.push(a)),i.forEach(a=>a()),re=t}const qe=new Set;let U;function Ge(){U={r:0,c:[],p:U}}function Ke(){U.r||oe(U.c),U=U.p}function $(e,t){e&&e.i&&(qe.delete(e),e.i(t))}function S(e,t,i,a){if(e&&e.o){if(qe.has(e))return;qe.add(e),U.c.push(()=>{qe.delete(e),a&&(i&&e.d(1),a())}),e.o(t)}else a&&a()}function N(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function x(e){e&&e.c()}function q(e,t,i){const{fragment:a,after_update:n}=e.$$;a&&a.m(t,i),Ve(()=>{const s=e.$$.on_mount.map(Pt).filter(Ht);e.$$.on_destroy?e.$$.on_destroy.push(...s):oe(s),e.$$.on_mount=[]}),n.forEach(Ve)}function E(e,t){const i=e.$$;i.fragment!==null&&(Jt(i.after_update),oe(i.on_destroy),i.fragment&&i.fragment.d(t),i.on_destroy=i.fragment=null,i.ctx=[])}function Qt(e,t){e.$$.dirty[0]===-1&&(ie.push(e),Xt(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Xe(e,t,i,a,n,s,r=null,f=[-1]){const l=_e;pe(e);const c=e.$$={fragment:null,ctx:[],props:s,update:P,not_equal:n,bound:Ct(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(l?l.$$.context:[])),callbacks:Ct(),dirty:f,skip_bound:!1,root:t.target||l.$$.root};r&&r(c.root);let _=!1;if(c.ctx=i?i(e,t.props||{},(h,v,...I)=>{const y=I.length?I[0]:v;return c.ctx&&n(c.ctx[h],c.ctx[h]=y)&&(!c.skip_bound&&c.bound[h]&&c.bound[h](y),_&&Qt(e,h)),v}):[],c.update(),_=!0,oe(c.before_update),c.fragment=a?a(c.ctx):!1,t.target){if(t.hydrate){const h=Vt(t.target);c.fragment&&c.fragment.l(h),h.forEach(W)}else c.fragment&&c.fragment.c();t.intro&&$(e.$$.fragment),q(e,t.target,t.anchor),Bt()}pe(l)}class Ze{constructor(){Re(this,"$$");Re(this,"$$set")}$destroy(){E(this,1),this.$destroy=P}$on(t,i){if(!Ht(i))return P;const a=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return a.push(i),()=>{const n=a.indexOf(i);n!==-1&&a.splice(n,1)}}$set(t){this.$$set&&!Ut(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Yt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Yt);function ei(e){let t,i,a,n,s,r,f,l,c;return{c(){t=d("div"),i=d("div"),a=d("img"),s=p(),r=d("div"),f=p(),l=d("img"),k(a.src,n=e[0])||u(a,"src",n),u(a,"alt","Scene before TWSC denoising"),u(a,"draggable",!1),u(a,"class","svelte-161ok2r"),u(r,"class","edge svelte-161ok2r"),u(i,"class","dragger svelte-161ok2r"),k(l.src,c=e[1])||u(l,"src",c),u(l,"alt","Scene after TWSC denoising"),u(l,"draggable",!1),u(l,"class","svelte-161ok2r"),u(t,"class","image_compare svelte-161ok2r")},m(_,h){M(_,t,h),o(t,i),o(i,a),o(i,s),o(i,r),e[5](r),e[6](i),o(t,f),o(t,l),e[7](t)},p(_,[h]){h&1&&!k(a.src,n=_[0])&&u(a,"src",n),h&2&&!k(l.src,c=_[1])&&u(l,"src",c)},i:P,o:P,d(_){_&&W(t),e[5](null),e[6](null),e[7](null)}}}function ti(e,t,i){let{left:a,right:n}=t,s,r,f;Gt(()=>{const h=v=>{const I=r.getBoundingClientRect().left;i(2,s.style.left=v-I-5+"px",s),i(4,f.style.width=v-I+"px",f)};r.addEventListener("mousemove",v=>{v.preventDefault(),h(v.clientX)}),r.addEventListener("touchmove",v=>{v.preventDefault(),h(v.touches[0].clientX)}),h(r.getBoundingClientRect().left+r.offsetWidth/2)});function l(h){ge[h?"unshift":"push"](()=>{s=h,i(2,s)})}function c(h){ge[h?"unshift":"push"](()=>{f=h,i(4,f)})}function _(h){ge[h?"unshift":"push"](()=>{r=h,i(3,r)})}return e.$$set=h=>{"left"in h&&i(0,a=h.left),"right"in h&&i(1,n=h.right)},[a,n,s,r,f,l,c,_]}class ii extends Ze{constructor(t){super(),Xe(this,t,ti,ei,Fe,{left:0,right:1})}}function ni(e){let t,i,a,n,s,r,f;return{c(){t=d("div"),i=d("img"),n=p(),s=d("img"),u(i,"class","in svelte-1hku06d"),k(i.src,a=e[0]+".png")||u(i,"src",a),u(i,"alt",e[1]),u(s,"class","out svelte-1hku06d"),k(s.src,r=e[0]+".diff.png")||u(s,"src",r),u(s,"alt",f=e[1]+" (Difference)"),u(t,"class","container difference svelte-1hku06d")},m(l,c){M(l,t,c),o(t,i),o(t,n),o(t,s)},p(l,c){c&1&&!k(i.src,a=l[0]+".png")&&u(i,"src",a),c&2&&u(i,"alt",l[1]),c&1&&!k(s.src,r=l[0]+".diff.png")&&u(s,"src",r),c&2&&f!==(f=l[1]+" (Difference)")&&u(s,"alt",f)},d(l){l&&W(t)}}}function ri(e){let t,i,a,n,s,r,f,l,c,_,h,v,I,y,B,T,H,le;return{c(){t=d("div"),i=d("img"),n=p(),s=d("img"),f=p(),l=d("img"),_=p(),h=d("div"),v=d("button"),v.textContent="Input",I=p(),y=d("button"),y.textContent="OIDN",B=p(),T=d("button"),T.textContent="TWSC",u(i,"class","in svelte-1hku06d"),k(i.src,a=te+"/final/"+e[0]+"/"+e[0]+"_in.png")||u(i,"src",a),u(i,"alt","Input"),u(s,"class","out svelte-1hku06d"),k(s.src,r=te+"/final/"+e[0]+"/"+e[0]+"_oidn.png")||u(s,"src",r),u(s,"alt","Output after OIDN"),A(s,"active",e[3]==1),u(l,"class","out svelte-1hku06d"),k(l.src,c=te+"/final/"+e[0]+"/"+e[0]+"_twsc.png")||u(l,"src",c),u(l,"alt","Output after TWSC"),A(l,"active",e[3]==2),u(v,"class","svelte-1hku06d"),A(v,"active",e[3]==0),u(y,"class","svelte-1hku06d"),A(y,"active",e[3]==1),u(T,"class","svelte-1hku06d"),A(T,"active",e[3]==2),u(h,"class","buttons svelte-1hku06d"),u(t,"class","container svelte-1hku06d")},m(b,C){M(b,t,C),o(t,i),o(t,n),o(t,s),o(t,f),o(t,l),o(t,_),o(t,h),o(h,v),o(h,I),o(h,y),o(h,B),o(h,T),H||(le=[je(v,"click",e[4]),je(y,"click",e[5]),je(T,"click",e[6])],H=!0)},p(b,C){C&1&&!k(i.src,a=te+"/final/"+b[0]+"/"+b[0]+"_in.png")&&u(i,"src",a),C&1&&!k(s.src,r=te+"/final/"+b[0]+"/"+b[0]+"_oidn.png")&&u(s,"src",r),C&8&&A(s,"active",b[3]==1),C&1&&!k(l.src,c=te+"/final/"+b[0]+"/"+b[0]+"_twsc.png")&&u(l,"src",c),C&8&&A(l,"active",b[3]==2),C&8&&A(v,"active",b[3]==0),C&8&&A(y,"active",b[3]==1),C&8&&A(T,"active",b[3]==2)},d(b){b&&W(t),H=!1,oe(le)}}}function ai(e){let t;function i(s,r){return s[2]==="default"?ri:ni}let a=i(e),n=a(e);return{c(){n.c(),t=ve()},m(s,r){n.m(s,r),M(s,t,r)},p(s,[r]){a===(a=i(s))&&n?n.p(s,r):(n.d(1),n=a(s),n&&(n.c(),n.m(t.parentNode,t)))},i:P,o:P,d(s){s&&W(t),n.d(s)}}}const te="/cse168-extra-credit";function oi(e,t,i){let{name:a,alt:n="",variant:s="default"}=t,r=0;const f=()=>{i(3,r=0)},l=()=>{i(3,r=1)},c=()=>{i(3,r=2)};return e.$$set=_=>{"name"in _&&i(0,a=_.name),"alt"in _&&i(1,n=_.alt),"variant"in _&&i(2,s=_.variant)},[a,n,s,r,f,l,c]}class z extends Ze{constructor(t){super(),Xe(this,t,oi,ai,Fe,{name:0,alt:1,variant:2})}}function It(e,t,i){const a=e.slice();return a[1]=t[i],a}function Tt(e,t,i){const a=e.slice();return a[4]=t[i],a}function Ot(e,t,i){const a=e.slice();return a[7]=t[i],a}function St(e,t,i){const a=e.slice();return a[1]=t[i],a}function Nt(e,t,i){const a=e.slice();return a[4]=t[i],a}function Wt(e,t,i){const a=e.slice();return a[7]=t[i],a}function Dt(e){let t,i,a,n,s,r,f,l;return i=new z({props:{name:ne+"/final/teapot/teapot_"+e[1]+"_"+e[4]+"_"+e[7],alt:e[1]+" outer, "+e[4]+" inner, "+e[7]+" patch",variant:"difference"}}),{c(){t=d("div"),x(i.$$.fragment),a=p(),n=d("br"),s=p(),r=d("i"),r.textContent=`${e[1]} outer iteration${e[1]===1?"":"s"}, ${e[4]} inner iteration${e[4]===1?"":"s"}, patch size ${e[7]}`,f=p()},m(c,_){M(c,t,_),q(i,t,null),o(t,a),o(t,n),o(t,s),o(t,r),o(t,f),l=!0},p:P,i(c){l||($(i.$$.fragment,c),l=!0)},o(c){S(i.$$.fragment,c),l=!1},d(c){c&&W(t),E(i)}}}function Mt(e){let t,i,a=N([5,10]),n=[];for(let r=0;r<2;r+=1)n[r]=Dt(Wt(e,a,r));const s=r=>S(n[r],1,1,()=>{n[r]=null});return{c(){for(let r=0;r<2;r+=1)n[r].c();t=ve()},m(r,f){for(let l=0;l<2;l+=1)n[l]&&n[l].m(r,f);M(r,t,f),i=!0},p(r,f){if(f&0){a=N([5,10]);let l;for(l=0;l<2;l+=1){const c=Wt(r,a,l);n[l]?(n[l].p(c,f),$(n[l],1)):(n[l]=Dt(c),n[l].c(),$(n[l],1),n[l].m(t.parentNode,t))}for(Ge(),l=2;l<2;l+=1)s(l);Ke()}},i(r){if(!i){for(let f=0;f<2;f+=1)$(n[f]);i=!0}},o(r){n=n.filter(Boolean);for(let f=0;f<2;f+=1)S(n[f]);i=!1},d(r){r&&W(t),ae(n,r)}}}function At(e){let t,i,a=N([1,2]),n=[];for(let r=0;r<2;r+=1)n[r]=Mt(Nt(e,a,r));const s=r=>S(n[r],1,1,()=>{n[r]=null});return{c(){for(let r=0;r<2;r+=1)n[r].c();t=ve()},m(r,f){for(let l=0;l<2;l+=1)n[l]&&n[l].m(r,f);M(r,t,f),i=!0},p(r,f){if(f&0){a=N([1,2]);let l;for(l=0;l<2;l+=1){const c=Nt(r,a,l);n[l]?(n[l].p(c,f),$(n[l],1)):(n[l]=Mt(c),n[l].c(),$(n[l],1),n[l].m(t.parentNode,t))}for(Ge(),l=2;l<2;l+=1)s(l);Ke()}},i(r){if(!i){for(let f=0;f<2;f+=1)$(n[f]);i=!0}},o(r){n=n.filter(Boolean);for(let f=0;f<2;f+=1)S(n[f]);i=!1},d(r){r&&W(t),ae(n,r)}}}function Lt(e){let t,i,a,n,s,r,f,l,c,_,h,v,I;return{c(){t=d("tr"),i=d("td"),i.textContent=`${e[1]}`,a=p(),n=d("td"),n.textContent=`${e[4]}`,s=p(),r=d("td"),r.textContent=`${e[7]}`,f=p(),l=d("td"),c=d("code"),c.textContent=`${e[0][`${e[1]}_${e[4]}_${e[7]}`][0]}`,_=p(),h=d("td"),v=d("code"),v.textContent=`${e[0][`${e[1]}_${e[4]}_${e[7]}`][1]}`,I=p(),me(l,"background-color",e[0][`${e[1]}_${e[4]}_${e[7]}`][2]),me(l,"color","black"),me(h,"background-color",e[0][`${e[1]}_${e[4]}_${e[7]}`][3]),me(h,"color","black")},m(y,B){M(y,t,B),o(t,i),o(t,a),o(t,n),o(t,s),o(t,r),o(t,f),o(t,l),o(l,c),o(t,_),o(t,h),o(h,v),o(t,I)},p:P,d(y){y&&W(t)}}}function qt(e){let t,i=N([5,10]),a=[];for(let n=0;n<2;n+=1)a[n]=Lt(Ot(e,i,n));return{c(){for(let n=0;n<2;n+=1)a[n].c();t=ve()},m(n,s){for(let r=0;r<2;r+=1)a[r]&&a[r].m(n,s);M(n,t,s)},p(n,s){if(s&1){i=N([5,10]);let r;for(r=0;r<2;r+=1){const f=Ot(n,i,r);a[r]?a[r].p(f,s):(a[r]=Lt(f),a[r].c(),a[r].m(t.parentNode,t))}for(;r<2;r+=1)a[r].d(1)}},d(n){n&&W(t),ae(a,n)}}}function Et(e){let t,i=N([1,2]),a=[];for(let n=0;n<2;n+=1)a[n]=qt(Tt(e,i,n));return{c(){for(let n=0;n<2;n+=1)a[n].c();t=ve()},m(n,s){for(let r=0;r<2;r+=1)a[r]&&a[r].m(n,s);M(n,t,s)},p(n,s){if(s&1){i=N([1,2]);let r;for(r=0;r<2;r+=1){const f=Tt(n,i,r);a[r]?a[r].p(f,s):(a[r]=qt(f),a[r].c(),a[r].m(t.parentNode,t))}for(;r<2;r+=1)a[r].d(1)}},d(n){n&&W(t),ae(a,n)}}}function li(e){let t,i,a,n,s,r,f,l,c,_,h,v,I,y,B,T,H,le,b,C,Je,V,be,F,Qe,ye,Ye,G,we,et,$e,K,tt,X,Ce,se,it,nt,ke,rt,Z,Ie,at,Te,J,ot,L,R,ce,lt,st,ct,ut,Ee,dt,j,ue,ft,ht,mt,pt,Pe,gt,_t,Q,Oe,Y,vt,Se,bt,Ne,de,fe,He,yt,We,wt,De,$t,Me,Ae;a=new ii({props:{left:ne+"/final/hero_day/hero_day_in.png",right:ne+"/final/hero_day/hero_day_twsc.png"}}),v=new z({props:{name:"reflect"}}),C=new z({props:{name:"suzanne"}}),F=new z({props:{name:"ggx"}}),K=new z({props:{name:"magnolia"}}),J=new z({props:{name:"dragon"}});let xe=N([1,5,10]),w=[];for(let m=0;m<3;m+=1)w[m]=At(St(e,xe,m));const Rt=m=>S(w[m],1,1,()=>{w[m]=null});Y=new z({props:{name:"cornell_brdf"}});let Be=N([1,5,10]),D=[];for(let m=0;m<3;m+=1)D[m]=Et(It(e,Be,m));return{c(){t=d("main"),i=d("div"),x(a.$$.fragment),n=p(),s=d("h1"),s.innerHTML="A Comparison of Modern Denoising Approaches<br/>for Path Traced Images",r=p(),f=d("h3"),f.innerHTML='Andrew Russell (<a href="mailto:alrussell@ucsd.edu">alrussell@ucsd.edu</a>)',l=p(),c=d("div"),_=d("div"),h=d("div"),x(v.$$.fragment),I=p(),y=d("div"),y.innerHTML='<h1 id="introduction">Introduction</h1> <p>For my final project, I sought to understand the degree to which auxiliary feature buffers improve the quality of denoised images.  While I understood how a deep denoiser (such as the <a href="https://developer.nvidia.com/optix-denoiser">denoiser included with NVIDIA&#39;s OptiX</a> or <a href="https://www.openimagedenoise.org">Intel&#39;s Open Image Denoise</a>) used features such as normals as inputs to their models, I was curious whether a state-of-the-art &quot;naive&quot; denoiser used in computer vision could be effective in denoising path traced images.</p> <p>I elected to implement the denoising algorithm proposed in the 2018 paper <a href="https://arxiv.org/abs/1807.04364">&quot;A Trilateral Weighted Sparse Coding Scheme for Real-World Image Denoising&quot; by Xu, Zhang, and Zhang</a>.  It is a notable paper because it specifically aims to reduce &quot;real-world noise,&quot; or noise patterns that occur more commonly in photos taken by physical cameras.  This is in contrast to algorithms which assume noise samples randomly from <b>additive white Gaussian noise (AWGN)</b>, a relatively simple analytical model for electron motion.</p>',B=p(),T=d("div"),H=d("div"),H.innerHTML="<h1>Algorithm Design</h1> <p>The Trilateral Weighted Sparse Coding Scheme (TWSC) algorithm operates on <b>patches</b>, rectangular portions of a given input image.  A set of patches can be generated by <b>computing local variance at various regions in the image</b> and aggregating regions with similar variance, after which each patch can be compared for similarity to all other patches.  Once a set of nonlocal similar patches is created, the <b>&quot;TWSC scheme&quot; (derived by singular value decomposition)</b> can be applied to denoise the patch.  After this is completed, the output image can be <b>reconstructed from each of the processed patches</b>.</p>",le=p(),b=d("div"),x(C.$$.fragment),Je=p(),V=d("div"),be=d("div"),x(F.$$.fragment),Qe=p(),ye=d("div"),ye.innerHTML='<h1>Implementation</h1> <p>Because the paper authors made their <a href="https://github.com/csjunxu/TWSC-ECCV2018">MATLAB code available on GitHub</a>, I aimed to convert this into pure C++.  My resulting code produced the following functions:</p> <ul style="text-align: left"><li><b><code>SearchNeighborIndex</code></b>: Constructs matrices/vectors allowing for fast lookup of a patch&#39;s neighbors</li> <li><b><code>Image2Patch</code></b>: Converts an image to a set of patches</li> <li><b><code>Block_Matching_RW</code></b>: Performs block matching by determining nonlocal similar patches for each patch</li> <li><b><code>PGs2Image</code></b>: Reconstructs the output image from a set of processed patches</li> <li><b><code>TWSC_RW</code></b>: Composes the above functions and applies the TWSC scheme to each patch</li></ul> <p>Due to the matrix-heavy nature of the original MATLAB code, I made use of <a href="https://opencv.org">OpenCV</a>&#39;s <a href="https://docs.opencv.org/4.x/d3/d63/classcv_1_1Mat.html"><code>Mat</code></a> class for matrix operations.  However, many features did not have direct analogues and required manual implementation (such as matrix/vector broadcasting via <code>bsxfun</code> or column slicing by an index array).  Overall, this was an extremely difficult programming task and took me significantly longer than any prior assignment.</p>',Ye=p(),G=d("div"),we=d("div"),we.innerHTML='<h1 id="oidn">Open Image Denoise</h1> <p>For comparison against TWSC, I also added Intel&#39;s Open Image Denoise (OIDN) to my path tracer.  OIDN is a deep denoiser that provides a variety of pre-trained deep learning models for use with computer generated images.  It is capable of naively denoising images (like TWSC), but also accepts inputs in the form of auxiliary feature buffers such as normals or albedo.  I <a href="https://github.com/RenderKit/oidn">compiled OIDN from source</a> to use the CPU backend, and integrated it into my codebase using the <a href="https://github.com/RenderKit/oidn?tab=readme-ov-file#basic-denoising-c11-api">C++11 API</a>.  OIDN can also be run on the command line using the <code>oidnDenoise</code> command-line tool.</p>',et=p(),$e=d("div"),x(K.$$.fragment),tt=p(),X=d("div"),Ce=d("div"),se=d("img"),nt=p(),ke=d("div"),ke.innerHTML="<h1>Normals</h1> <p>To improve OIDN&#39;s performance, I added support for my path tracer to store normals to an output buffer.  While a pixel is being path traced, its first intersection writes the intersected object&#39;s normals into the buffer.  Then, this data is passed as an auxiliary buffer to OIDN.</p> <p>While OIDN supports naive denoising (i.e. without normals), I found its output to be largely similar to the deep denoised images with slightly more blurring.  Therefore, all OIDN images displayed in this writeup were denoised using normals as an auxiliary feature buffer.</p>",rt=p(),Z=d("div"),Ie=d("div"),Ie.innerHTML=`<h1>Results</h1> <p>Many images produced with this algorithm are compelling, and exhibit a number of useful properties.  However, there are also a number of noticeable drawbacks when compared to OIDN.</p> <ul style="text-align: left"><li><b>Pro</b>:  High-frequency &quot;fireflies&quot; are largely removed.
            <ul><li>As would be expected, TWSC is capable of removing almost all (if not all) &quot;fireflies&quot; seen in path traced images.</li></ul></li> <li><b>Pro</b>:  Edges are preserved without blurring.
            <ul><li>The patch similarity and variance comparison subroutines ensure that only noise is eliminated, rather than blurring edges between true image elements.</li></ul></li> <li><b>Pro</b>:  Sharp specular highlights are kept sharp.
            <ul><li>Specular reflections from small area lights onto highly reflective surfaces are not blurred away.</li></ul></li> <hr/> <li><b>Con</b>:  Low-frequency details are blurred.
            <ul><li>As is visible in the dragon image, the low-frequency details such as the ridges along the inner edge of its body are heavily blurred.  Upon further testing, tweaking the algorithm&#39;s input parameters help but do not fully resolve this for most images.</li></ul></li> <li><b>Con</b>:  Reflections remain relatively noisy.
            <ul><li>As demonstrated in the <a href="#introduction">teapots image</a>, the reflections present along the mirror ball remain noisy.  This is likely due to the image lacking any similar patches to the reflected regions, whereas portions of the floor or teapots have a significant number of self-similar regions.</li></ul></li> <li><b>Con</b>:  Path traced effects are not reproduced faithfully.
            <ul><li>The <a href="#oidn">magnolia image</a> shows how OIDN excels at reproducing what an image <i>should</i> look like, whereas TWSC simply removes noise without adding any new qualities to the image.  This makes sense because OIDN&#39;s models have a conception of the types of reflection, indirect lighting, and other effects that are desirable in path traced images due to their training data.  Unsurprisingly, TWSC has no such ability to reproduce these effects.</li></ul></li></ul> <p>Below is a comparison of various input parameters described in the paper:  Outer loop iterations (recommended by authors to be set between 1 and 10), inner loop iterations (either 1 or 2), and image patch size (between 5 and 10).  Further testing outside of these ranges did not yield significantly different results, therefore only results using parameters in recommended ranges are shown.</p>`,at=p(),Te=d("div"),x(J.$$.fragment),ot=p(),L=d("div"),R=d("div"),ce=d("img"),st=p(),ct=d("br"),ut=p(),Ee=d("i"),Ee.textContent="Input image (16 spp)",dt=p(),j=d("div"),ue=d("img"),ht=p(),mt=d("br"),pt=p(),Pe=d("i"),Pe.textContent="Ground truth (256 spp)",gt=p();for(let m=0;m<3;m+=1)w[m].c();_t=p(),Q=d("div"),Oe=d("div"),x(Y.$$.fragment),vt=p(),Se=d("div"),Se.innerHTML='<h1>Performance Analysis</h1> <p>Overall, this algorithm&#39;s major drawbacks are that it is <b>very slow</b> and <b>largely unparallelizable</b>.  However, of note is that performance did not appear to vary with the amount of noise in an image, only its resolution and the algorithm&#39;s input parameters.  Below is a table comparing various input parameters and their corresponding root-mean-square errors for the above set of teapot images.  All 720x480 images were generated using my C++/OpenCV implementation and exclude render time, and all timing tests were performed on a 2021 M1 MacBook Air with no background activity.</p> <p>Clearly, larger patch sizes are associated with longer denoise times (as are increased iteration counts).  However, a few other points of note arise as well:</p> <ul style="text-align: left"><li>Increasing patch size produces a visually smoother image, while increasing either iteration count eliminates more &quot;fireflies.&quot;</li> <li>5 outer iterations, 1 inner iteration, and patch size 5 produced the smallest error (approximately 3.74), but noise is still visually apparent in its generated image.</li> <li>Qualitatively, images generated with patch size 10 are more pleasing than those generated with patch size 5 despite their worse overall error measurements.</li></ul>',bt=p(),Ne=d("div"),de=d("div"),fe=d("table"),He=d("thead"),He.innerHTML="<tr><th>Outer Loop Iterations</th> <th>Inner Loop Iterations</th> <th>Patch Size</th> <th>Denoise Time</th> <th>RMSE</th></tr>",yt=p(),We=d("tbody");for(let m=0;m<3;m+=1)D[m].c();wt=p(),De=d("div"),De.innerHTML='<div class="center"><h1>Conclusion</h1> <p>Ultimately, OIDN denoising is almost always more effective while also being orders of magnitude faster.  While this does not mean that TWSC is not without its valid applications, implementing and using it on path traced images has shown it to be insufficient for the types of noise generated during Monte Carlo rendering.</p> <p>Further, performing this comparison has demonstrated that the main strength of a deep learning-based denoiser is not simply its ability to use auxiliary feature information, but the speed and wide applicability of a well-trained deep learning model at reproducing the types of effects most common in computer-generated images.</p> <p>This result is largely unsurprising, however it does not mean that TWSC was incapable of producing pleasing images.  Taken to its extreme, TWSC was able to denoise the <a href="#top">mountain scene</a> to produce a very compelling image.  The initial render was done at 8K resolution and denoising took several hours to complete, making TWSC exceptionally costly for reproducing fine details such as the mountain&#39;s ridges.  Despite this somewhat underwhelming result, this exploration was an excellent learning experience for me regarding modern image processing and the implementation of a complex algorithm.</p></div>',$t=p(),Me=d("div"),Me.innerHTML=`<div><h4>Sources and Asset Credits</h4> <p class="spread"><a href="https://free3d.com/3d-model/mountain-183041.html">Mountain model</a>
         | 
        <a href="https://graphics.stanford.edu/courses/cs148-10-summer/as3/code/as3/teapot.obj">Utah Teapot model</a>
         | 
        <a href="https://people.sc.fsu.edu/~jburkardt/data/obj/obj.html">Magnolia model</a>
         | 
        <a href="https://openaccess.thecvf.com/content_ECCV_2018/papers/XU_JUN_A_Trilateral_Weighted_ECCV_2018_paper.pdf">TWSC paper</a>
         | 
        <a href="https://github.com/RenderKit/oidn">OIDN documentation and examples</a>
         | 
        <a href="https://docs.opencv.org/4.10.0">OpenCV 4 documentation</a></p></div>`,u(i,"id","top"),u(i,"class","masthead"),u(h,"class","left"),u(y,"class","right"),u(_,"class","row"),u(H,"class","left"),u(b,"class","right"),u(T,"class","row"),u(be,"class","left"),u(ye,"class","right"),u(V,"class","row"),u(we,"class","left"),u($e,"class","right"),u(G,"class","row"),k(se.src,it=ne+"/final/hero/hero_normal.png")||u(se,"src",it),u(se,"alt","Mountain normal"),u(Ce,"class","left"),u(ke,"class","right"),u(X,"class","row"),u(Ie,"class","left"),u(Te,"class","right"),u(Z,"class","row"),k(ce.src,lt=ne+"/final/teapot/teapot_16_in.png")||u(ce,"src",lt),u(ce,"alt","Input (16 spp)"),k(ue.src,ft=ne+"/final/teapot/teapot_256_in.png")||u(ue,"src",ft),u(ue,"alt","Ground truth (256 spp)"),u(L,"class","compare"),u(Oe,"class","left"),u(Se,"class","right"),u(Q,"class","row"),u(de,"class","left"),me(de,"flex","1"),u(Ne,"class","row"),u(De,"class","row"),u(c,"class","scroller"),u(Me,"class","light")},m(m,O){M(m,t,O),o(t,i),q(a,i,null),o(i,n),o(i,s),o(i,r),o(i,f),o(t,l),o(t,c),o(c,_),o(_,h),q(v,h,null),o(_,I),o(_,y),o(c,B),o(c,T),o(T,H),o(T,le),o(T,b),q(C,b,null),o(c,Je),o(c,V),o(V,be),q(F,be,null),o(V,Qe),o(V,ye),o(c,Ye),o(c,G),o(G,we),o(G,et),o(G,$e),q(K,$e,null),o(c,tt),o(c,X),o(X,Ce),o(Ce,se),o(X,nt),o(X,ke),o(c,rt),o(c,Z),o(Z,Ie),o(Z,at),o(Z,Te),q(J,Te,null),o(c,ot),o(c,L),o(L,R),o(R,ce),o(R,st),o(R,ct),o(R,ut),o(R,Ee),o(L,dt),o(L,j),o(j,ue),o(j,ht),o(j,mt),o(j,pt),o(j,Pe),o(L,gt);for(let g=0;g<3;g+=1)w[g]&&w[g].m(L,null);o(c,_t),o(c,Q),o(Q,Oe),q(Y,Oe,null),o(Q,vt),o(Q,Se),o(c,bt),o(c,Ne),o(Ne,de),o(de,fe),o(fe,He),o(fe,yt),o(fe,We);for(let g=0;g<3;g+=1)D[g]&&D[g].m(We,null);o(c,wt),o(c,De),o(t,$t),o(t,Me),Ae=!0},p(m,[O]){if(O&0){xe=N([1,5,10]);let g;for(g=0;g<3;g+=1){const he=St(m,xe,g);w[g]?(w[g].p(he,O),$(w[g],1)):(w[g]=At(he),w[g].c(),$(w[g],1),w[g].m(L,null))}for(Ge(),g=3;g<3;g+=1)Rt(g);Ke()}if(O&1){Be=N([1,5,10]);let g;for(g=0;g<3;g+=1){const he=It(m,Be,g);D[g]?D[g].p(he,O):(D[g]=Et(he),D[g].c(),D[g].m(We,null))}for(;g<3;g+=1)D[g].d(1)}},i(m){if(!Ae){$(a.$$.fragment,m),$(v.$$.fragment,m),$(C.$$.fragment,m),$(F.$$.fragment,m),$(K.$$.fragment,m),$(J.$$.fragment,m);for(let O=0;O<3;O+=1)$(w[O]);$(Y.$$.fragment,m),Ae=!0}},o(m){S(a.$$.fragment,m),S(v.$$.fragment,m),S(C.$$.fragment,m),S(F.$$.fragment,m),S(K.$$.fragment,m),S(J.$$.fragment,m),w=w.filter(Boolean);for(let O=0;O<3;O+=1)S(w[O]);S(Y.$$.fragment,m),Ae=!1},d(m){m&&W(t),E(a),E(v),E(C),E(F),E(K),E(J),ae(w,m),E(Y),ae(D,m)}}}const ne="/cse168-extra-credit";function si(e){return[{"1_1_5":["1m14s","5.031754","#56bb89","#f2a86b"],"1_2_5":["2m18s","5.031754","#8ac37e","#f2a86b"],"1_1_10":["1m28s","5.414220","#63bc88","#e67c73"],"1_2_10":["1m38s","5.414220","#6bbe85","#e67c73"],"5_1_5":["2m58s","3.741353","#aac879","#63bc88"],"5_2_5":["2m46s","3.756481","#9fc67b","#63bc88"],"5_1_10":["7m48s","4.184678","#f9bf69","#afc978"],"5_2_10":["6m51s","4.199410","#fbc667","#f9bf69"],"10_1_5":["6m28s","5.208630","#fcc966","#ec946f"],"10_1_10":["13m36s","3.803667","#ec926e","#63bc88"],"10_2_5":["7m14s","5.177674","#fbc368","#ed976f"],"10_2_10":["16m19s","3.848877","#e67c73","#6bbe85"]}]}class ci extends Ze{constructor(t){super(),Xe(this,t,si,li,Fe,{})}}new ci({target:document.getElementById("app")});

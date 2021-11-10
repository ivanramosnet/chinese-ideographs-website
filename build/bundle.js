var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,e){t.appendChild(e)}function l(t,e,n){t.insertBefore(e,n||null)}function s(t){t.parentNode.removeChild(t)}function u(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function a(){return f(" ")}function d(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}let g;function h(t){g=t}const p=[],m=[],$=[],_=[],b=Promise.resolve();let y=!1;function x(t){$.push(t)}let k=!1;const v=new Set;function w(){if(!k){k=!0;do{for(let t=0;t<p.length;t+=1){const e=p[t];h(e),j(e.$$)}for(h(null),p.length=0;m.length;)m.pop()();for(let t=0;t<$.length;t+=1){const e=$[t];v.has(e)||(v.add(e),e())}$.length=0}while(p.length);for(;_.length;)_.pop()();y=!1,k=!1,v.clear()}}function j(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(x)}}const E=new Set;function C(t,e){-1===t.$$.dirty[0]&&(p.push(t),y||(y=!0,b.then(w)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function A(i,c,l,u,f,a,d,p=[-1]){const m=g;h(i);const $=i.$$={fragment:null,ctx:null,props:a,update:t,not_equal:f,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(m?m.$$.context:c.context||[]),callbacks:n(),dirty:p,skip_bound:!1,root:c.target||m.$$.root};d&&d($.root);let _=!1;if($.ctx=l?l(i,c.props||{},((t,e,...n)=>{const o=n.length?n[0]:e;return $.ctx&&f($.ctx[t],$.ctx[t]=o)&&(!$.skip_bound&&$.bound[t]&&$.bound[t](o),_&&C(i,t)),e})):[],$.update(),_=!0,o($.before_update),$.fragment=!!u&&u($.ctx),c.target){if(c.hydrate){const t=function(t){return Array.from(t.childNodes)}(c.target);$.fragment&&$.fragment.l(t),t.forEach(s)}else $.fragment&&$.fragment.c();c.intro&&((b=i.$$.fragment)&&b.i&&(E.delete(b),b.i(y))),function(t,n,i,c){const{fragment:l,on_mount:s,on_destroy:u,after_update:f}=t.$$;l&&l.m(n,i),c||x((()=>{const n=s.map(e).filter(r);u?u.push(...n):o(n),t.$$.on_mount=[]})),f.forEach(x)}(i,c.target,c.anchor,c.customElement),w()}var b,y;h(m)}function N(t,e,n){const o=t.slice();return o[1]=e[n].id,o[2]=e[n].filename,o[4]=n,o}function O(t){let e,n,o,r,i=t[2]+"";return{c(){e=u("li"),n=u("a"),o=f(i),d(n,"terget","_blank"),d(n,"href",r="./images/"+t[2])},m(t,r){l(t,e,r),c(e,n),c(n,o)},p(t,e){1&e&&i!==(i=t[2]+"")&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(o,i),1&e&&r!==(r="./images/"+t[2])&&d(n,"href",r)},d(t){t&&s(e)}}}function q(e){let n,o,r,i,f,g,h=e[0],p=[];for(let t=0;t<h.length;t+=1)p[t]=O(N(e,h,t));return{c(){n=u("main"),o=u("h1"),o.textContent="Chinese Ideographs",r=a(),i=u("h2"),i.textContent="Base Drawings",f=a(),g=u("ul");for(let t=0;t<p.length;t+=1)p[t].c();d(o,"class","svelte-1q5k8sv"),d(n,"class","svelte-1q5k8sv")},m(t,e){l(t,n,e),c(n,o),c(n,r),c(n,i),c(n,f),c(n,g);for(let t=0;t<p.length;t+=1)p[t].m(g,null)},p(t,[e]){if(1&e){let n;for(h=t[0],n=0;n<h.length;n+=1){const o=N(t,h,n);p[n]?p[n].p(o,e):(p[n]=O(o),p[n].c(),p[n].m(g,null))}for(;n<p.length;n+=1)p[n].d(1);p.length=h.length}},i:t,o:t,d(t){t&&s(n),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(p,t)}}}function S(t,e,n){let{image_files:o=[]}=e;return console.log(o),t.$$set=t=>{"image_files"in t&&n(0,o=t.image_files)},[o]}return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),A(this,t,S,q,i,{image_files:0})}}({target:document.body,props:{image_files:JSON.parse('[{"id":1,"filename":"000001-42.600.2.jpg"},{"id":2,"filename":"000002-42.600.2.jpg"},{"id":3,"filename":"000003-42.600.2.jpg"}]')}})}();
//# sourceMappingURL=bundle.js.map

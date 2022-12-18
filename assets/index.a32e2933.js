(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function D(){}function Xe(t,e){for(const n in e)t[n]=e[n];return t}function Ge(t){return t()}function ke(){return Object.create(null)}function V(t){t.forEach(Ge)}function Ne(t){return typeof t=="function"}function B(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Ye(t){return Object.keys(t).length===0}function Te(t,...e){if(t==null)return D;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function $(t,e,n){t.$$.on_destroy.push(Te(e,n))}function Je(t,e,n,l){if(t){const o=Pe(t,e,n,l);return t[0](o)}}function Pe(t,e,n,l){return t[1]&&l?Xe(n.ctx.slice(),t[1](l(e))):n.ctx}function Qe(t,e,n,l){if(t[2]&&l){const o=t[2](l(n));if(e.dirty===void 0)return o;if(typeof o=="object"){const i=[],r=Math.max(e.dirty.length,o.length);for(let c=0;c<r;c+=1)i[c]=e.dirty[c]|o[c];return i}return e.dirty|o}return e.dirty}function Ue(t,e,n,l,o,i){if(o){const r=Pe(e,n,l,i);t.p(r,o)}}function Ze(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let l=0;l<n;l++)e[l]=-1;return e}return-1}function E(t,e,n){return t.set(n),e}function k(t,e){t.appendChild(e)}function j(t,e,n){t.insertBefore(e,n||null)}function A(t){t.parentNode.removeChild(t)}function Q(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function x(t){return document.createElement(t)}function I(t){return document.createTextNode(t)}function z(){return I(" ")}function Ie(){return I("")}function U(t,e,n,l){return t.addEventListener(e,n,l),()=>t.removeEventListener(e,n,l)}function et(t){return function(e){return e.preventDefault(),t.call(this,e)}}function S(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function tt(t){return Array.from(t.childNodes)}function ve(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function v(t,e,n,l){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,l?"important":"")}function le(t,e,n){t.classList[n?"add":"remove"](e)}let Z;function X(t){Z=t}function qe(){if(!Z)throw new Error("Function called outside component initialization");return Z}function be(t){qe().$$.on_mount.push(t)}function nt(t){qe().$$.on_destroy.push(t)}const K=[],H=[],re=[],_e=[],lt=Promise.resolve();let me=!1;function ot(){me||(me=!0,lt.then(Ve))}function ye(t){re.push(t)}function ue(t){_e.push(t)}const pe=new Set;let oe=0;function Ve(){const t=Z;do{for(;oe<K.length;){const e=K[oe];oe++,X(e),rt(e.$$)}for(X(null),K.length=0,oe=0;H.length;)H.pop()();for(let e=0;e<re.length;e+=1){const n=re[e];pe.has(n)||(pe.add(n),n())}re.length=0}while(K.length);for(;_e.length;)_e.pop()();me=!1,pe.clear(),X(t)}function rt(t){if(t.fragment!==null){t.update(),V(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ye)}}const ie=new Set;let q;function T(){q={r:0,c:[],p:q}}function P(){q.r||V(q.c),q=q.p}function y(t,e){t&&t.i&&(ie.delete(t),t.i(e))}function b(t,e,n,l){if(t&&t.o){if(ie.has(t))return;ie.add(t),q.c.push(()=>{ie.delete(t),l&&(n&&t.d(1),l())}),t.o(e)}else l&&l()}function fe(t,e,n){const l=t.$$.props[e];l!==void 0&&(t.$$.bound[l]=n,n(t.$$.ctx[l]))}function R(t){t&&t.c()}function O(t,e,n,l){const{fragment:o,on_mount:i,on_destroy:r,after_update:c}=t.$$;o&&o.m(e,n),l||ye(()=>{const u=i.map(Ge).filter(Ne);r?r.push(...u):V(u),t.$$.on_mount=[]}),c.forEach(ye)}function W(t,e){const n=t.$$;n.fragment!==null&&(V(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function it(t,e){t.$$.dirty[0]===-1&&(K.push(t),ot(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function G(t,e,n,l,o,i,r,c=[-1]){const u=Z;X(t);const s=t.$$={fragment:null,ctx:null,props:i,update:D,not_equal:o,bound:ke(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:ke(),dirty:c,skip_bound:!1,root:e.target||u.$$.root};r&&r(s.root);let g=!1;if(s.ctx=n?n(t,e.props||{},(h,p,...f)=>{const L=f.length?f[0]:p;return s.ctx&&o(s.ctx[h],s.ctx[h]=L)&&(!s.skip_bound&&s.bound[h]&&s.bound[h](L),g&&it(t,h)),p}):[],s.update(),g=!0,V(s.before_update),s.fragment=l?l(s.ctx):!1,e.target){if(e.hydrate){const h=tt(e.target);s.fragment&&s.fragment.l(h),h.forEach(A)}else s.fragment&&s.fragment.c();e.intro&&y(t.$$.fragment),O(t,e.target,e.anchor,e.customElement),Ve()}X(u)}class N{$destroy(){W(this,1),this.$destroy=D}$on(e,n){const l=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return l.push(n),()=>{const o=l.indexOf(n);o!==-1&&l.splice(o,1)}}$set(e){this.$$set&&!Ye(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const F=[];function st(t,e){return{subscribe:C(t,e).subscribe}}function C(t,e=D){let n;const l=new Set;function o(c){if(B(t,c)&&(t=c,n)){const u=!F.length;for(const s of l)s[1](),F.push(s,t);if(u){for(let s=0;s<F.length;s+=2)F[s][0](F[s+1]);F.length=0}}}function i(c){o(c(t))}function r(c,u=D){const s=[c,u];return l.add(s),l.size===1&&(n=e(o)||D),c(t),()=>{l.delete(s),l.size===0&&(n(),n=null)}}return{set:o,update:i,subscribe:r}}function ae(t,e,n){const l=!Array.isArray(t),o=l?[t]:t,i=e.length<2;return st(n,r=>{let c=!1;const u=[];let s=0,g=D;const h=()=>{if(s)return;g();const f=e(l?u[0]:u,r);i?r(f):g=Ne(f)?f:D},p=o.map((f,L)=>Te(f,_=>{u[L]=_,s&=~(1<<L),c&&h()},()=>{s|=1<<L}));return c=!0,h(),function(){V(p),g()}})}const ct=t=>{const e=Array.from(new Array(t.width).keys()).map(l=>l+t.x),n=Array.from(new Array(t.height).keys()).map(l=>l+t.y);return e.map(l=>n.map(o=>({x:l,y:o}))).flat()},se=C([]),Y=C(),we=C([]),ut=ae([se,Y,we],([t,e,n])=>[...t,e,...n]),J=C(!1),ee=C({x:8,y:8}),he=C(64),ft=ae(ee,t=>Array.from(Array(t.y).keys()).map(()=>Array.from(Array(t.x).keys()).map(()=>!1))),at=ae([ft,ut],([t,e])=>{const n=[...t.map(l=>[...l])];return e.forEach(l=>{ct(l).forEach(({x:o,y:i})=>{n[i][o]=!0})}),n}),ce=C(),Fe=ae([Y,ce],([t,e])=>(t==null?void 0:t.x)===e.x&&(t==null?void 0:t.y)===e.y),te=C(0);function ht(t){let e,n,l;return{c(){e=x("div"),S(e,"class","dog svelte-v5njxd"),v(e,"left",t[3].x+"px"),v(e,"top",t[3].y+"px"),v(e,"width",t[0].width*t[2]-2+"px"),v(e,"height",t[0].height*t[2]-2+"px"),le(e,"rocket",t[1]),le(e,"unselectable",t[4])},m(o,i){j(o,e,i),n||(l=U(e,"mousedown",et(t[5])),n=!0)},p(o,[i]){i&8&&v(e,"left",o[3].x+"px"),i&8&&v(e,"top",o[3].y+"px"),i&5&&v(e,"width",o[0].width*o[2]-2+"px"),i&5&&v(e,"height",o[0].height*o[2]-2+"px"),i&2&&le(e,"rocket",o[1]),i&16&&le(e,"unselectable",o[4])},i:D,o:D,d(o){o&&A(e),n=!1,l()}}}function gt(t,e,n){let l,o,i,r,c,u;$(t,at,a=>n(8,l=a)),$(t,ee,a=>n(9,o=a)),$(t,he,a=>n(2,i=a)),$(t,te,a=>n(10,r=a)),$(t,J,a=>n(4,c=a)),$(t,Fe,a=>n(11,u=a));let{placement:s}=e,{isRocketDog:g=!1}=e,h,p,f;be(()=>{addEventListener("mouseup",_),addEventListener("mousemove",d)}),nt(()=>{removeEventListener("mouseup",_),removeEventListener("mousemove",d)});const L=()=>{!h&&!u&&(h=!0,E(J,c=!0,c),m())},_=()=>{if(h){const a={...s};n(0,s.x=Math.round((f.x-s.width*i/2)/i),s),n(0,s.y=Math.round((f.y-s.height*i/2)/i),s),n(3,f={x:(s.x+s.width/2)*i,y:(s.y+s.height/2)*i}),h=!1,E(J,c=!1,c),(s.x!==a.x||s.y!==a.y)&&E(te,r++,r)}},d=a=>{var M,w;h&&((w=(M=a.target)==null?void 0:M.classList)==null?void 0:w.contains("dog-container"))&&n(3,f={x:Math.min((p.x2+s.width/2)*i,Math.max((p.x1+s.width/2)*i,a.offsetX)),y:Math.min((p.y2+s.height/2)*i,Math.max((p.y1+s.height/2)*i,a.offsetY))})},m=()=>{if(p={x1:s.x,x2:s.x,y1:s.y,y2:s.y},s.width>1){for(;p.x1-1>=0&&!l[p.y1][p.x1-1];)p.x1--;for(;p.x2+s.width<o.x&&!l[p.y1][p.x2+s.width];)p.x2++}if(s.height>1){for(;p.y1-1>=0&&!l[p.y1-1][p.x1];)p.y1--;for(;p.y2+s.height<o.y&&!l[p.y2+s.height][p.x1];)p.y2++}};return t.$$set=a=>{"placement"in a&&n(0,s=a.placement),"isRocketDog"in a&&n(1,g=a.isRocketDog)},t.$$.update=()=>{t.$$.dirty&5&&n(3,f={x:(s.x+s.width/2)*i,y:(s.y+s.height/2)*i})},h=!1,[s,g,i,f,c,L]}class He extends N{constructor(e){super(),G(this,e,gt,ht,B,{placement:0,isRocketDog:1})}}function dt(t){let e;return{c(){e=x("div"),S(e,"class","goal svelte-ip8xos"),v(e,"left",(t[0].x+t[0].width/2)*t[1]+"px"),v(e,"top",(t[0].y+t[0].height/2)*t[1]+"px"),v(e,"width",t[0].width*t[1]-2+"px"),v(e,"height",t[0].height*t[1]-2+"px")},m(n,l){j(n,e,l)},p(n,[l]){l&3&&v(e,"left",(n[0].x+n[0].width/2)*n[1]+"px"),l&3&&v(e,"top",(n[0].y+n[0].height/2)*n[1]+"px"),l&3&&v(e,"width",n[0].width*n[1]-2+"px"),l&3&&v(e,"height",n[0].height*n[1]-2+"px")},i:D,o:D,d(n){n&&A(e)}}}function pt(t,e,n){let l;$(t,he,i=>n(1,l=i));let{placement:o}=e;return t.$$set=i=>{"placement"in i&&n(0,o=i.placement)},[o,l]}class _t extends N{constructor(e){super(),G(this,e,pt,dt,B,{placement:0})}}function mt(t){let e,n;return{c(){e=x("div"),n=x("div"),S(e,"class","cell svelte-1os2xyq"),v(e,"width",t[0]+"px"),v(e,"height",t[0]+"px")},m(l,o){j(l,e,o),k(e,n)},p(l,[o]){o&1&&v(e,"width",l[0]+"px"),o&1&&v(e,"height",l[0]+"px")},i:D,o:D,d(l){l&&A(e)}}}function yt(t,e,n){let l;return $(t,he,o=>n(0,l=o)),[l]}class wt extends N{constructor(e){super(),G(this,e,yt,mt,B,{})}}function $e(t,e,n){const l=t.slice();return l[4]=e[n],l}function xe(t,e,n){const l=t.slice();return l[7]=e[n],l}function De(t){let e,n;return e=new wt({}),{c(){R(e.$$.fragment)},m(l,o){O(e,l,o),n=!0},i(l){n||(y(e.$$.fragment,l),n=!0)},o(l){b(e.$$.fragment,l),n=!1},d(l){W(e,l)}}}function Le(t){let e,n,l=Array.from(Array(t[0].x).keys()),o=[];for(let r=0;r<l.length;r+=1)o[r]=De(xe(t,l,r));const i=r=>b(o[r],1,1,()=>{o[r]=null});return{c(){e=x("div");for(let r=0;r<o.length;r+=1)o[r].c();S(e,"class","row svelte-18shd7v")},m(r,c){j(r,e,c);for(let u=0;u<o.length;u+=1)o[u].m(e,null);n=!0},p(r,c){if(c&1){const u=l.length;l=Array.from(Array(r[0].x).keys());let s;for(s=u;s<l.length;s+=1)xe(r,l,s),o[s]?y(o[s],1):(o[s]=De(),o[s].c(),y(o[s],1),o[s].m(e,null));for(T(),s=l.length;s<o.length;s+=1)i(s);P()}},i(r){if(!n){for(let c=0;c<l.length;c+=1)y(o[c]);n=!0}},o(r){o=o.filter(Boolean);for(let c=0;c<o.length;c+=1)b(o[c]);n=!1},d(r){r&&A(e),Q(o,r)}}}function vt(t){let e,n,l,o,i,r=Array.from(Array(t[0].y).keys()),c=[];for(let h=0;h<r.length;h+=1)c[h]=Le($e(t,r,h));const u=h=>b(c[h],1,1,()=>{c[h]=null}),s=t[3].default,g=Je(s,t,t[2],null);return{c(){e=x("div");for(let h=0;h<c.length;h+=1)c[h].c();n=z(),g&&g.c(),S(e,"class","grid svelte-18shd7v")},m(h,p){j(h,e,p);for(let f=0;f<c.length;f+=1)c[f].m(e,null);k(e,n),g&&g.m(e,null),l=!0,o||(i=U(e,"mousedown",t[1]),o=!0)},p(h,[p]){if(p&1){r=Array.from(Array(h[0].y).keys());let f;for(f=0;f<r.length;f+=1){const L=$e(h,r,f);c[f]?(c[f].p(L,p),y(c[f],1)):(c[f]=Le(L),c[f].c(),y(c[f],1),c[f].m(e,n))}for(T(),f=r.length;f<c.length;f+=1)u(f);P()}g&&g.p&&(!l||p&4)&&Ue(g,s,h,h[2],l?Qe(s,h[2],p,null):Ze(h[2]),null)},i(h){if(!l){for(let p=0;p<r.length;p+=1)y(c[p]);y(g,h),l=!0}},o(h){c=c.filter(Boolean);for(let p=0;p<c.length;p+=1)b(c[p]);b(g,h),l=!1},d(h){h&&A(e),Q(c,h),g&&g.d(h),o=!1,i()}}}function bt(t,e,n){let l;$(t,ee,c=>n(0,l=c));let{$$slots:o={},$$scope:i}=e;const r=c=>{c.preventDefault()};return t.$$set=c=>{"$$scope"in c&&n(2,i=c.$$scope)},[l,r,i,o]}class kt extends N{constructor(e){super(),G(this,e,bt,vt,B,{})}}function Se(t){let e,n,l,o;return{c(){e=x("span"),n=I("Parked in "),l=I(t[1]),o=I(" moves!"),S(e,"class","message svelte-k8vi8z")},m(i,r){j(i,e,r),k(e,n),k(e,l),k(e,o)},p(i,r){r&2&&ve(l,i[1])},d(i){i&&A(e)}}}function $t(t){let e,n,l,o=t[0]&&Se(t);return{c(){e=x("div"),n=z(),o&&o.c(),l=Ie(),S(e,"class","victory-overlay svelte-k8vi8z"),v(e,"opacity",t[0]?.3:0)},m(i,r){j(i,e,r),j(i,n,r),o&&o.m(i,r),j(i,l,r)},p(i,[r]){r&1&&v(e,"opacity",i[0]?.3:0),i[0]?o?o.p(i,r):(o=Se(i),o.c(),o.m(l.parentNode,l)):o&&(o.d(1),o=null)},i:D,o:D,d(i){i&&A(e),i&&A(n),o&&o.d(i),i&&A(l)}}}function xt(t,e,n){let l,o;return $(t,Fe,i=>n(0,l=i)),$(t,te,i=>n(1,o=i)),[l,o]}class Dt extends N{constructor(e){super(),G(this,e,xt,$t,B,{})}}const ne=C(null);function Lt(t){let e;return{c(){e=x("div"),S(e,"class","wall svelte-b23nfn"),v(e,"left",t[0].x*t[1]+1+"px"),v(e,"top",t[0].y*t[1]+1+"px"),v(e,"width",t[0].width*t[1]-2+"px"),v(e,"height",t[0].height*t[1]-2+"px")},m(n,l){j(n,e,l)},p(n,[l]){l&3&&v(e,"left",n[0].x*n[1]+1+"px"),l&3&&v(e,"top",n[0].y*n[1]+1+"px"),l&3&&v(e,"width",n[0].width*n[1]-2+"px"),l&3&&v(e,"height",n[0].height*n[1]-2+"px")},i:D,o:D,d(n){n&&A(e)}}}function St(t,e,n){let l;$(t,he,i=>n(1,l=i));let{placement:o}=e;return t.$$set=i=>{"placement"in i&&n(0,o=i.placement)},[o,l]}class At extends N{constructor(e){super(),G(this,e,St,Lt,B,{placement:0})}}function Ae(t,e,n){const l=t.slice();return l[17]=e[n],l[18]=e,l[19]=n,l}function je(t,e,n){const l=t.slice();return l[20]=e[n],l[21]=e,l[22]=n,l}function Ee(t){let e,n,l,o,i,r,c,u=t[4]&&ze(t),s=t[3],g=[];for(let d=0;d<s.length;d+=1)g[d]=Ce(je(t,s,d));const h=d=>b(g[d],1,1,()=>{g[d]=null});let p=t[0].walls,f=[];for(let d=0;d<p.length;d+=1)f[d]=Me(Ae(t,p,d));const L=d=>b(f[d],1,1,()=>{f[d]=null});let _=t[5]&&Be(t);return r=new Dt({}),{c(){e=x("div"),u&&u.c(),n=z();for(let d=0;d<g.length;d+=1)g[d].c();l=z();for(let d=0;d<f.length;d+=1)f[d].c();o=z(),_&&_.c(),i=z(),R(r.$$.fragment),S(e,"class","dog-container svelte-xjj8od")},m(d,m){j(d,e,m),u&&u.m(e,null),k(e,n);for(let a=0;a<g.length;a+=1)g[a].m(e,null);k(e,l);for(let a=0;a<f.length;a+=1)f[a].m(e,null);k(e,o),_&&_.m(e,null),j(d,i,m),O(r,d,m),c=!0},p(d,m){if(d[4]?u?(u.p(d,m),m&16&&y(u,1)):(u=ze(d),u.c(),y(u,1),u.m(e,n)):u&&(T(),b(u,1,1,()=>{u=null}),P()),m&8){s=d[3];let a;for(a=0;a<s.length;a+=1){const M=je(d,s,a);g[a]?(g[a].p(M,m),y(g[a],1)):(g[a]=Ce(M),g[a].c(),y(g[a],1),g[a].m(e,l))}for(T(),a=s.length;a<g.length;a+=1)h(a);P()}if(m&1){p=d[0].walls;let a;for(a=0;a<p.length;a+=1){const M=Ae(d,p,a);f[a]?(f[a].p(M,m),y(f[a],1)):(f[a]=Me(M),f[a].c(),y(f[a],1),f[a].m(e,o))}for(T(),a=p.length;a<f.length;a+=1)L(a);P()}d[5]?_?(_.p(d,m),m&32&&y(_,1)):(_=Be(d),_.c(),y(_,1),_.m(e,null)):_&&(T(),b(_,1,1,()=>{_=null}),P())},i(d){if(!c){y(u);for(let m=0;m<s.length;m+=1)y(g[m]);for(let m=0;m<p.length;m+=1)y(f[m]);y(_),y(r.$$.fragment,d),c=!0}},o(d){b(u),g=g.filter(Boolean);for(let m=0;m<g.length;m+=1)b(g[m]);f=f.filter(Boolean);for(let m=0;m<f.length;m+=1)b(f[m]);b(_),b(r.$$.fragment,d),c=!1},d(d){d&&A(e),u&&u.d(),Q(g,d),Q(f,d),_&&_.d(),d&&A(i),W(r,d)}}}function ze(t){let e,n,l;function o(r){t[8](r)}let i={isRocketDog:!0};return t[4]!==void 0&&(i.placement=t[4]),e=new He({props:i}),H.push(()=>fe(e,"placement",o)),{c(){R(e.$$.fragment)},m(r,c){O(e,r,c),l=!0},p(r,c){const u={};!n&&c&16&&(n=!0,u.placement=r[4],ue(()=>n=!1)),e.$set(u)},i(r){l||(y(e.$$.fragment,r),l=!0)},o(r){b(e.$$.fragment,r),l=!1},d(r){W(e,r)}}}function Ce(t){let e,n,l;function o(r){t[9](r,t[20],t[21],t[22])}let i={};return t[20]!==void 0&&(i.placement=t[20]),e=new He({props:i}),H.push(()=>fe(e,"placement",o)),{c(){R(e.$$.fragment)},m(r,c){O(e,r,c),l=!0},p(r,c){t=r;const u={};!n&&c&8&&(n=!0,u.placement=t[20],ue(()=>n=!1)),e.$set(u)},i(r){l||(y(e.$$.fragment,r),l=!0)},o(r){b(e.$$.fragment,r),l=!1},d(r){W(e,r)}}}function Me(t){let e,n,l;function o(r){t[10](r,t[17],t[18],t[19])}let i={};return t[17]!==void 0&&(i.placement=t[17]),e=new At({props:i}),H.push(()=>fe(e,"placement",o)),{c(){R(e.$$.fragment)},m(r,c){O(e,r,c),l=!0},p(r,c){t=r;const u={};!n&&c&1&&(n=!0,u.placement=t[17],ue(()=>n=!1)),e.$set(u)},i(r){l||(y(e.$$.fragment,r),l=!0)},o(r){b(e.$$.fragment,r),l=!1},d(r){W(e,r)}}}function Be(t){let e,n,l;function o(r){t[11](r)}let i={};return t[5]!==void 0&&(i.placement=t[5]),e=new _t({props:i}),H.push(()=>fe(e,"placement",o)),{c(){R(e.$$.fragment)},m(r,c){O(e,r,c),l=!0},p(r,c){const u={};!n&&c&32&&(n=!0,u.placement=r[5],ue(()=>n=!1)),e.$set(u)},i(r){l||(y(e.$$.fragment,r),l=!0)},o(r){b(e.$$.fragment,r),l=!1},d(r){W(e,r)}}}function jt(t){let e,n,l=t[1]&&Ee(t);return{c(){l&&l.c(),e=Ie()},m(o,i){l&&l.m(o,i),j(o,e,i),n=!0},p(o,i){o[1]?l?(l.p(o,i),i&2&&y(l,1)):(l=Ee(o),l.c(),y(l,1),l.m(e.parentNode,e)):l&&(T(),b(l,1,1,()=>{l=null}),P())},i(o){n||(y(l),n=!0)},o(o){b(l),n=!1},d(o){l&&l.d(o),o&&A(e)}}}function Et(t){let e,n,l,o,i,r,c,u,s,g,h,p,f,L;return n=new kt({props:{$$slots:{default:[jt]},$$scope:{ctx:t}}}),{c(){e=x("div"),R(n.$$.fragment),l=z(),o=x("div"),i=x("span"),r=I(t[2]),c=I(" moves"),u=z(),s=x("span"),s.textContent="Restart",g=z(),h=x("span"),h.textContent="Back to the menu",S(i,"class","moveCount svelte-xjj8od"),S(s,"class","restart svelte-xjj8od"),S(h,"class","back svelte-xjj8od"),S(o,"class","subtext svelte-xjj8od"),S(e,"class","game svelte-xjj8od")},m(_,d){j(_,e,d),O(n,e,null),k(e,l),k(e,o),k(o,i),k(i,r),k(i,c),k(o,u),k(o,s),k(o,g),k(o,h),p=!0,f||(L=[U(s,"click",t[7]),U(h,"click",t[6])],f=!0)},p(_,[d]){const m={};d&8388667&&(m.$$scope={dirty:d,ctx:_}),n.$set(m),(!p||d&4)&&ve(r,_[2])},i(_){p||(y(n.$$.fragment,_),p=!0)},o(_){b(n.$$.fragment,_),p=!1},d(_){_&&A(e),W(n),f=!1,V(L)}}}function zt(t,e,n){let l,o,i,r,c,u,s,g;$(t,ne,w=>n(12,l=w)),$(t,te,w=>n(2,o=w)),$(t,we,w=>n(13,i=w)),$(t,se,w=>n(3,r=w)),$(t,Y,w=>n(4,c=w)),$(t,ce,w=>n(5,u=w)),$(t,ee,w=>n(14,s=w)),$(t,J,w=>n(15,g=w));let{levelSettings:h}=e,p=!1;be(()=>{f()});const f=()=>{E(J,g=!1,g),E(ee,s=h.gridSize,s),E(ce,u=h.goal,u),E(Y,c={...h.rocketDog},c),E(se,r=h.otherDogs.map(w=>({...w})),r),E(we,i=h.walls.map(w=>({...w})),i),n(1,p=!0),E(te,o=0,o)},L=()=>{E(ne,l=null,l)},_=()=>{f()};function d(w){c=w,Y.set(c)}function m(w,Ke,ge,de){ge[de]=w,se.set(r)}function a(w,Ke,ge,de){ge[de]=w,n(0,h)}function M(w){u=w,ce.set(u)}return t.$$set=w=>{"levelSettings"in w&&n(0,h=w.levelSettings)},[h,p,o,r,c,u,L,_,d,m,a,M]}class Ct extends N{constructor(e){super(),G(this,e,zt,Et,B,{levelSettings:0})}}const Oe=C([]),Mt="In Too Deep",Bt={x:6,y:8},Ot={x:3,y:0,width:1,height:2},Wt=[{x:0,y:0,width:3,height:1},{x:1,y:1,width:1,height:3},{x:3,y:2,width:3,height:1},{x:3,y:5,width:3,height:1}],Rt=[{x:0,y:6,width:3,height:2},{x:4,y:6,width:2,height:2}],Gt={x:3,y:6,width:1,height:2},Nt={name:Mt,gridSize:Bt,rocketDog:Ot,otherDogs:Wt,walls:Rt,goal:Gt},Tt="Living in a box",Pt={x:7,y:6},It={x:0,y:2,width:2,height:1},qt=[{x:0,y:0,width:1,height:2},{x:2,y:0,width:3,height:1},{x:2,y:1,width:1,height:3},{x:0,y:3,width:1,height:2},{x:1,y:4,width:2,height:1},{x:3,y:3,width:1,height:2},{x:4,y:2,width:1,height:2}],Vt=[{x:5,y:0,width:2,height:2},{x:5,y:3,width:2,height:3}],Ft={x:5,y:2,width:2,height:1},Ht={name:Tt,gridSize:Pt,rocketDog:It,otherDogs:qt,walls:Vt,goal:Ft},Kt="Have a cigar",Xt={x:14,y:6},Yt={x:0,y:1,width:3,height:1},Jt=[{x:0,y:2,width:1,height:3},{x:2,y:3,width:5,height:1},{x:3,y:0,width:1,height:2},{x:4,y:0,width:1,height:3},{x:5,y:0,width:1,height:3},{x:7,y:0,width:4,height:1},{x:10,y:2,width:1,height:3}],Qt=[{x:11,y:0,width:3,height:1},{x:11,y:2,width:3,height:4},{x:5,y:5,width:7,height:1}],Ut={x:11,y:1,width:3,height:1},Zt={name:Kt,gridSize:Xt,rocketDog:Yt,otherDogs:Jt,walls:Qt,goal:Ut},en=()=>[Nt,Ht,Zt];function We(t,e,n){const l=t.slice();return l[4]=e[n],l}function Re(t){let e,n,l=t[4].name+"",o,i,r,c;function u(){return t[2](t[4])}return{c(){e=x("li"),n=x("button"),o=I(l),i=z(),S(n,"class","level svelte-7xra3e")},m(s,g){j(s,e,g),k(e,n),k(n,o),k(e,i),r||(c=U(n,"click",u),r=!0)},p(s,g){t=s,g&1&&l!==(l=t[4].name+"")&&ve(o,l)},d(s){s&&A(e),r=!1,c()}}}function tn(t){let e,n,l,o,i=t[0],r=[];for(let c=0;c<i.length;c+=1)r[c]=Re(We(t,i,c));return{c(){e=x("div"),n=x("h2"),n.textContent="Level selection",l=z(),o=x("ul");for(let c=0;c<r.length;c+=1)r[c].c();S(n,"class","hint svelte-7xra3e"),S(o,"class","levels svelte-7xra3e"),S(e,"class","menu svelte-7xra3e")},m(c,u){j(c,e,u),k(e,n),k(e,l),k(e,o);for(let s=0;s<r.length;s+=1)r[s].m(o,null)},p(c,[u]){if(u&3){i=c[0];let s;for(s=0;s<i.length;s+=1){const g=We(c,i,s);r[s]?r[s].p(g,u):(r[s]=Re(g),r[s].c(),r[s].m(o,null))}for(;s<r.length;s+=1)r[s].d(1);r.length=i.length}},i:D,o:D,d(c){c&&A(e),Q(r,c)}}}function nn(t,e,n){let l,o;$(t,Oe,c=>n(0,l=c)),$(t,ne,c=>n(3,o=c));const i=c=>{E(ne,o=c,o)};return be(()=>{E(Oe,l=en(),l)}),[l,i,c=>i(c)]}class ln extends N{constructor(e){super(),G(this,e,nn,tn,B,{})}}function on(t){let e,n;return e=new ln({}),{c(){R(e.$$.fragment)},m(l,o){O(e,l,o),n=!0},p:D,i(l){n||(y(e.$$.fragment,l),n=!0)},o(l){b(e.$$.fragment,l),n=!1},d(l){W(e,l)}}}function rn(t){let e,n;return e=new Ct({props:{levelSettings:t[0]}}),{c(){R(e.$$.fragment)},m(l,o){O(e,l,o),n=!0},p(l,o){const i={};o&1&&(i.levelSettings=l[0]),e.$set(i)},i(l){n||(y(e.$$.fragment,l),n=!0)},o(l){b(e.$$.fragment,l),n=!1},d(l){W(e,l)}}}function sn(t){let e,n,l,o;const i=[rn,on],r=[];function c(u,s){return u[0]?0:1}return n=c(t),l=r[n]=i[n](t),{c(){e=x("main"),l.c()},m(u,s){j(u,e,s),r[n].m(e,null),o=!0},p(u,[s]){let g=n;n=c(u),n===g?r[n].p(u,s):(T(),b(r[g],1,1,()=>{r[g]=null}),P(),l=r[n],l?l.p(u,s):(l=r[n]=i[n](u),l.c()),y(l,1),l.m(e,null))},i(u){o||(y(l),o=!0)},o(u){b(l),o=!1},d(u){u&&A(e),r[n].d()}}}function cn(t,e,n){let l;return $(t,ne,o=>n(0,l=o)),[l]}class un extends N{constructor(e){super(),G(this,e,cn,sn,B,{})}}new un({target:document.getElementById("app")});

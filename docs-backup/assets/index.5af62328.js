(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function l(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=l(s);fetch(s.href,i)}})();function M(){}const ke=t=>t;function ot(t,e){for(const l in e)t[l]=e[l];return t}function Re(t){return t()}function Se(){return Object.create(null)}function Y(t){t.forEach(Re)}function ve(t){return typeof t=="function"}function F(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function ft(t){return Object.keys(t).length===0}function ut(t,...e){if(t==null)return M;const l=t.subscribe(...e);return l.unsubscribe?()=>l.unsubscribe():l}function Fe(t,e,l){t.$$.on_destroy.push(ut(e,l))}function qe(t,e,l,n){if(t){const s=ze(t,e,l,n);return t[0](s)}}function ze(t,e,l,n){return t[1]&&n?ot(l.ctx.slice(),t[1](n(e))):l.ctx}function Ve(t,e,l,n){if(t[2]&&n){const s=t[2](n(l));if(e.dirty===void 0)return s;if(typeof s=="object"){const i=[],u=Math.max(e.dirty.length,s.length);for(let f=0;f<u;f+=1)i[f]=e.dirty[f]|s[f];return i}return e.dirty|s}return e.dirty}function Be(t,e,l,n,s,i){if(s){const u=ze(e,l,n,i);t.p(u,s)}}function We(t){if(t.ctx.length>32){const e=[],l=t.ctx.length/32;for(let n=0;n<l;n++)e[n]=-1;return e}return-1}function Pe(t){return t==null?"":t}const Ke=typeof window<"u";let Ye=Ke?()=>window.performance.now():()=>Date.now(),$e=Ke?t=>requestAnimationFrame(t):M;const X=new Set;function Ze(t){X.forEach(e=>{e.c(t)||(X.delete(e),e.f())}),X.size!==0&&$e(Ze)}function Je(t){let e;return X.size===0&&$e(Ze),{promise:new Promise(l=>{X.add(e={c:t,f:l})}),abort(){X.delete(e)}}}function T(t,e){t.appendChild(e)}function Qe(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function ct(t){const e=y("style");return at(Qe(t),e),e.sheet}function at(t,e){return T(t.head||t,e),e.sheet}function b(t,e,l){t.insertBefore(e,l||null)}function a(t){t.parentNode.removeChild(t)}function y(t){return document.createElement(t)}function S(t){return document.createTextNode(t)}function L(){return S(" ")}function mt(){return S("")}function j(t,e,l,n){return t.addEventListener(e,l,n),()=>t.removeEventListener(e,l,n)}function dt(t){return function(e){return e.preventDefault(),t.call(this,e)}}function _(t,e,l){l==null?t.removeAttribute(e):t.getAttribute(e)!==l&&t.setAttribute(e,l)}function pt(t){return Array.from(t.childNodes)}function Xe(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function fe(t,e){t.value=e==null?"":e}function _t(t,e,l,n){l===null?t.style.removeProperty(e):t.style.setProperty(e,l,n?"important":"")}function ht(t,e,{bubbles:l=!1,cancelable:n=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,l,n,e),s}const me=new Map;let de=0;function bt(t){let e=5381,l=t.length;for(;l--;)e=(e<<5)-e^t.charCodeAt(l);return e>>>0}function yt(t,e){const l={stylesheet:ct(e),rules:{}};return me.set(t,l),l}function et(t,e,l,n,s,i,u,f=0){const r=16.666/n;let c=`{
`;for(let w=0;w<=1;w+=r){const d=e+(l-e)*i(w);c+=w*100+`%{${u(d,1-d)}}
`}const k=c+`100% {${u(l,1-l)}}
}`,p=`__svelte_${bt(k)}_${f}`,h=Qe(t),{stylesheet:v,rules:m}=me.get(h)||yt(h,t);m[p]||(m[p]=!0,v.insertRule(`@keyframes ${p} ${k}`,v.cssRules.length));const g=t.style.animation||"";return t.style.animation=`${g?`${g}, `:""}${p} ${n}ms linear ${s}ms 1 both`,de+=1,p}function ge(t,e){const l=(t.style.animation||"").split(", "),n=l.filter(e?i=>i.indexOf(e)<0:i=>i.indexOf("__svelte")===-1),s=l.length-n.length;s&&(t.style.animation=n.join(", "),de-=s,de||gt())}function gt(){$e(()=>{de||(me.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&a(e)}),me.clear())})}let Te;function ie(t){Te=t}const ne=[],Oe=[],ce=[],De=[],wt=Promise.resolve();let we=!1;function kt(){we||(we=!0,wt.then(tt))}function ee(t){ce.push(t)}const ye=new Set;let ue=0;function tt(){const t=Te;do{for(;ue<ne.length;){const e=ne[ue];ue++,ie(e),vt(e.$$)}for(ie(null),ne.length=0,ue=0;Oe.length;)Oe.pop()();for(let e=0;e<ce.length;e+=1){const l=ce[e];ye.has(l)||(ye.add(l),l())}ce.length=0}while(ne.length);for(;De.length;)De.pop()();we=!1,ye.clear(),ie(t)}function vt(t){if(t.fragment!==null){t.update(),Y(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ee)}}let te;function nt(){return te||(te=Promise.resolve(),te.then(()=>{te=null})),te}function pe(t,e,l){t.dispatchEvent(ht(`${e?"intro":"outro"}${l}`))}const ae=new Set;let K;function le(){K={r:0,c:[],p:K}}function se(){K.r||Y(K.c),K=K.p}function C(t,e){t&&t.i&&(ae.delete(t),t.i(e))}function P(t,e,l,n){if(t&&t.o){if(ae.has(t))return;ae.add(t),K.c.push(()=>{ae.delete(t),n&&(l&&t.d(1),n())}),t.o(e)}else n&&n()}const lt={duration:0};function $t(t,e,l){let n=e(t,l),s=!1,i,u,f=0;function r(){i&&ge(t,i)}function c(){const{delay:p=0,duration:h=300,easing:v=ke,tick:m=M,css:g}=n||lt;g&&(i=et(t,0,1,h,p,v,g,f++)),m(0,1);const w=Ye()+p,d=w+h;u&&u.abort(),s=!0,ee(()=>pe(t,!0,"start")),u=Je(o=>{if(s){if(o>=d)return m(1,0),pe(t,!0,"end"),r(),s=!1;if(o>=w){const $=v((o-w)/h);m($,1-$)}}return s})}let k=!1;return{start(){k||(k=!0,ge(t),ve(n)?(n=n(),nt().then(c)):c())},invalidate(){k=!1},end(){s&&(r(),s=!1)}}}function Tt(t,e,l){let n=e(t,l),s=!0,i;const u=K;u.r+=1;function f(){const{delay:r=0,duration:c=300,easing:k=ke,tick:p=M,css:h}=n||lt;h&&(i=et(t,1,0,c,r,k,h));const v=Ye()+r,m=v+c;ee(()=>pe(t,!1,"start")),Je(g=>{if(s){if(g>=m)return p(0,1),pe(t,!1,"end"),--u.r||Y(u.c),!1;if(g>=v){const w=k((g-v)/c);p(1-w,w)}}return s})}return ve(n)?nt().then(()=>{n=n(),f()}):f(),{end(r){r&&n.tick&&n.tick(1,0),s&&(i&&ge(t,i),s=!1)}}}function Lt(t,e){P(t,1,1,()=>{e.delete(t.key)})}function Ct(t,e,l,n,s,i,u,f,r,c,k,p){let h=t.length,v=i.length,m=h;const g={};for(;m--;)g[t[m].key]=m;const w=[],d=new Map,o=new Map;for(m=v;m--;){const O=p(s,i,m),x=l(O);let U=u.get(x);U?n&&U.p(O,e):(U=c(x,O),U.c()),d.set(x,w[m]=U),x in g&&o.set(x,Math.abs(m-g[x]))}const $=new Set,V=new Set;function W(O){C(O,1),O.m(f,k),u.set(O.key,O),k=O.first,v--}for(;h&&v;){const O=w[v-1],x=t[h-1],U=O.key,Z=x.key;O===x?(k=O.first,h--,v--):d.has(Z)?!u.has(U)||$.has(U)?W(O):V.has(Z)?h--:o.get(U)>o.get(Z)?(V.add(U),W(O)):($.add(Z),h--):(r(x,u),h--)}for(;h--;){const O=t[h];d.has(O.key)||r(O,u)}for(;v;)W(w[v-1]);return w}function R(t){t&&t.c()}function N(t,e,l,n){const{fragment:s,on_mount:i,on_destroy:u,after_update:f}=t.$$;s&&s.m(e,l),n||ee(()=>{const r=i.map(Re).filter(ve);u?u.push(...r):Y(r),t.$$.on_mount=[]}),f.forEach(ee)}function G(t,e){const l=t.$$;l.fragment!==null&&(Y(l.on_destroy),l.fragment&&l.fragment.d(e),l.on_destroy=l.fragment=null,l.ctx=[])}function Mt(t,e){t.$$.dirty[0]===-1&&(ne.push(t),kt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function q(t,e,l,n,s,i,u,f=[-1]){const r=Te;ie(t);const c=t.$$={fragment:null,ctx:null,props:i,update:M,not_equal:s,bound:Se(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(r?r.$$.context:[])),callbacks:Se(),dirty:f,skip_bound:!1,root:e.target||r.$$.root};u&&u(c.root);let k=!1;if(c.ctx=l?l(t,e.props||{},(p,h,...v)=>{const m=v.length?v[0]:h;return c.ctx&&s(c.ctx[p],c.ctx[p]=m)&&(!c.skip_bound&&c.bound[p]&&c.bound[p](m),k&&Mt(t,p)),h}):[],c.update(),k=!0,Y(c.before_update),c.fragment=n?n(c.ctx):!1,e.target){if(e.hydrate){const p=pt(e.target);c.fragment&&c.fragment.l(p),p.forEach(a)}else c.fragment&&c.fragment.c();e.intro&&C(t.$$.fragment),N(t,e.target,e.anchor,e.customElement),tt()}ie(r)}class z{$destroy(){G(this,1),this.$destroy=M}$on(e,l){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(l),()=>{const s=n.indexOf(l);s!==-1&&n.splice(s,1)}}$set(e){this.$$set&&!ft(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function St(t){let e,l,n,s,i,u,f,r,c,k,p,h,v,m,g,w,d;return{c(){e=y("p"),e.innerHTML="<br/><br/>",l=S(`
The games which can be found here might inspire people to inspire their friends to
explore
`),n=y("a"),n.textContent="CULT",s=S(`
and
`),i=y("a"),i.textContent="RVLT",u=S(`.
`),f=y("br"),r=y("br"),c=S(`
It seems fair to give all people the chance to come on board early. `),k=y("br"),p=y("br"),h=S(`



Let us play, learn and earn together in playful creativity to free the world.
`),v=y("br"),m=y("br"),g=S(`

If you do not like playing such games, you might want to let us know what we can
improve by
`),w=y("a"),w.textContent="submitting an issue",d=S("."),_(n,"href","https://rumble.com/v1lf51r-cultdao-in-100-seconds-michael-saylor-talks-about-cult.html"),_(n,"target","_blank"),_(n,"class","svelte-16scy71"),_(i,"href","https://rumble.com/v1lf3yb-revolt-2-earn-in-100-seconds-michael-saylor-talks-about-revolt-2-earn.html"),_(i,"target","_blank"),_(i,"class","svelte-16scy71"),_(w,"href","https://github.com/cultfamily-on-github/cult-education-games-microservice/issues"),_(w,"target","_blank"),_(w,"class","svelte-16scy71")},m(o,$){b(o,e,$),b(o,l,$),b(o,n,$),b(o,s,$),b(o,i,$),b(o,u,$),b(o,f,$),b(o,r,$),b(o,c,$),b(o,k,$),b(o,p,$),b(o,h,$),b(o,v,$),b(o,m,$),b(o,g,$),b(o,w,$),b(o,d,$)},p:M,i:M,o:M,d(o){o&&a(e),o&&a(l),o&&a(n),o&&a(s),o&&a(i),o&&a(u),o&&a(f),o&&a(r),o&&a(c),o&&a(k),o&&a(p),o&&a(h),o&&a(v),o&&a(m),o&&a(g),o&&a(w),o&&a(d)}}}class Pt extends z{constructor(e){super(),q(this,e,null,St,F,{})}}function Ot(t){let e,l,n,s,i,u,f,r,c,k,p,h,v;return{c(){e=y("p"),e.innerHTML="<br/><br/>",l=S(`
To become an Apprentice, please send a dm via
`),n=y("a"),n.textContent="Twitter",s=S(`
or via
`),i=y("a"),i.textContent="Telegram",u=S(`.
`),f=y("p"),f.innerHTML="<br/>",r=S(`

Depending on your track record of supporting the CULTDAO in constructive range
increasing ways, the host of this playground decides if you are ready for the
role as apprentice or even for the role as master.
`),c=y("p"),c.innerHTML="<br/>",k=S(`
If this is too much power in the hands of the playground host from your perspective,
feel free to fork the
`),p=y("a"),p.textContent="Code Repository",h=S(`
and host your own CULT Playground.

`),v=y("p"),v.innerHTML="<br/><br/>",_(n,"href","https://twitter.com/Peer2PeerE"),_(n,"target","_blank"),_(n,"class","svelte-16scy71"),_(i,"href","https://t.me/freedomplayer"),_(i,"target","_blank"),_(i,"class","svelte-16scy71"),_(p,"href","https://github.com/cultfamily-on-github/cult-education-games-microservice"),_(p,"target","_blank"),_(p,"class","svelte-16scy71")},m(m,g){b(m,e,g),b(m,l,g),b(m,n,g),b(m,s,g),b(m,i,g),b(m,u,g),b(m,f,g),b(m,r,g),b(m,c,g),b(m,k,g),b(m,p,g),b(m,h,g),b(m,v,g)},p:M,i:M,o:M,d(m){m&&a(e),m&&a(l),m&&a(n),m&&a(s),m&&a(i),m&&a(u),m&&a(f),m&&a(r),m&&a(c),m&&a(k),m&&a(p),m&&a(h),m&&a(v)}}}class Dt extends z{constructor(e){super(),q(this,e,null,Ot,F,{})}}function Et(t){let e,l,n,s,i,u,f,r,c,k,p,h,v,m,g,w,d;return{c(){e=y("p"),e.innerHTML="<br/>",l=L(),n=y("h2"),n.textContent="Levels",s=L(),i=y("br"),u=S(`
1. Trainee: `),f=y("br"),r=S(`
As a trainee you can start executing the game of the day (see above). `),c=y("p"),c.innerHTML="<br/>",k=S(`

2. Apprentice: `),p=y("br"),h=S(`
You have trainee skills plus you can vote on Game of the Day Proposals.`),v=y("p"),v.innerHTML="<br/>",m=S(`

3. Master of the Game: `),g=y("br"),w=S(`
You have apprentice skills plus you can submit your own Game of the Day Proposals.

`),d=y("p"),d.innerHTML="<br/><br/>"},m(o,$){b(o,e,$),b(o,l,$),b(o,n,$),b(o,s,$),b(o,i,$),b(o,u,$),b(o,f,$),b(o,r,$),b(o,c,$),b(o,k,$),b(o,p,$),b(o,h,$),b(o,v,$),b(o,m,$),b(o,g,$),b(o,w,$),b(o,d,$)},p:M,i:M,o:M,d(o){o&&a(e),o&&a(l),o&&a(n),o&&a(s),o&&a(i),o&&a(u),o&&a(f),o&&a(r),o&&a(c),o&&a(k),o&&a(p),o&&a(h),o&&a(v),o&&a(m),o&&a(g),o&&a(w),o&&a(d)}}}class At extends z{constructor(e){super(),q(this,e,null,Et,F,{})}}const J=[];function st(t,e=M){let l;const n=new Set;function s(f){if(F(t,f)&&(t=f,l)){const r=!J.length;for(const c of n)c[1](),J.push(c,t);if(r){for(let c=0;c<J.length;c+=2)J[c][0](J[c+1]);J.length=0}}}function i(f){s(f(t))}function u(f,r=M){const c=[f,r];return n.add(c),n.size===1&&(l=e(s)||M),f(t),()=>{n.delete(c),n.size===0&&(l(),l=null)}}return{set:s,update:i,subscribe:u}}const Ht=st({id:1,rating:10,text:"Ensure the following hashtags are trending on Twitter today: #StarlinkIsCULT #RumbleIsCULT #CULTDAO. You might want to do so by retweeting: https://twitter.com/Peer2peerE/status/1574787191489941506?s=20&t=wUyNpuR8Sc7DtcPo7lp37A"}),It=st([{id:1,rating:10,text:"Ensure #VitalikLovesCULT is trending on Twitter."},{id:2,rating:9,text:"Follow 20 new people today who might love the CULTDAO to expand our network."},{id:3,rating:9,text:"Invite 10 of your friends who might love the CULTDAO to https://discord.com/invite/wearecultdao to expand our network."},{id:4,rating:9,text:"To all who use facebook: Offer each of your facebook friends 1.000 RVLT if they post a supportive statement regarding the CULTDAO."},{id:5,rating:9,text:"Ensure #ElonMuskLovesCULT is trending on Twitter."},{id:6,rating:8,text:"Ensure #SaylorLovesCULT is trending on Twitter."}]);function xt(t){let e,l;const n=t[1].default,s=qe(n,t,t[0],null);return{c(){e=y("div"),s&&s.c(),_(e,"class","card svelte-1mj4ff7")},m(i,u){b(i,e,u),s&&s.m(e,null),l=!0},p(i,[u]){s&&s.p&&(!l||u&1)&&Be(s,n,i,i[0],l?Ve(n,i[0],u,null):We(i[0]),null)},i(i){l||(C(s,i),l=!0)},o(i){P(s,i),l=!1},d(i){i&&a(e),s&&s.d(i)}}}function Ut(t,e,l){let{$$slots:n={},$$scope:s}=e;return t.$$set=i=>{"$$scope"in i&&l(0,s=i.$$scope)},[s,n]}class it extends z{constructor(e){super(),q(this,e,Ut,xt,F,{})}}function Nt(t){let e,l,n;const s=t[4].default,i=qe(s,t,t[3],null);return{c(){e=y("button"),i&&i.c(),_(e,"type",t[1]),e.disabled=t[2],_(e,"class",l=Pe(t[0])+" svelte-3lb9xd")},m(u,f){b(u,e,f),i&&i.m(e,null),n=!0},p(u,[f]){i&&i.p&&(!n||f&8)&&Be(i,s,u,u[3],n?Ve(s,u[3],f,null):We(u[3]),null),(!n||f&2)&&_(e,"type",u[1]),(!n||f&4)&&(e.disabled=u[2]),(!n||f&1&&l!==(l=Pe(u[0])+" svelte-3lb9xd"))&&_(e,"class",l)},i(u){n||(C(i,u),n=!0)},o(u){P(i,u),n=!1},d(u){u&&a(e),i&&i.d(u)}}}function Gt(t,e,l){let{$$slots:n={},$$scope:s}=e,{style:i="primary"}=e,{type:u="button"}=e,{disabled:f=!1}=e;return t.$$set=r=>{"style"in r&&l(0,i=r.style),"type"in r&&l(1,u=r.type),"disabled"in r&&l(2,f=r.disabled),"$$scope"in r&&l(3,s=r.$$scope)},[i,u,f,s,n]}class jt extends z{constructor(e){super(),q(this,e,Gt,Nt,F,{style:0,type:1,disabled:2})}}function Rt(t){let e;return{c(){e=S("Send")},m(l,n){b(l,e,n)},d(l){l&&a(e)}}}function Ee(t){let e,l;return{c(){e=y("div"),l=S(t[3]),_(e,"class","message svelte-hbldff")},m(n,s){b(n,e,s),T(e,l)},p(n,s){s&8&&Xe(l,n[3])},d(n){n&&a(e)}}}function Ft(t){let e,l,n,s,i,u,f,r,c,k,p,h,v,m,g,w;h=new jt({props:{disabled:t[2],type:"submit",$$slots:{default:[Rt]},$$scope:{ctx:t}}});let d=t[3]&&Ee(t);return{c(){e=y("header"),e.innerHTML='<h2 class="svelte-hbldff">Master Mode</h2>',l=L(),n=y("form"),s=y("div"),i=y("input"),u=L(),f=y("div"),r=y("input"),c=L(),k=y("p"),k.innerHTML="<br/>",p=L(),R(h.$$.fragment),v=L(),d&&d.c(),_(e,"class","svelte-hbldff"),_(i,"type","text"),_(i,"placeholder","Please enter your Masterkey"),_(i,"class","svelte-hbldff"),_(s,"class","input-group svelte-hbldff"),_(r,"type","text"),_(r,"placeholder","Please enter your Challenge of the Day Proposal"),_(r,"class","svelte-hbldff"),_(f,"class","input-group svelte-hbldff")},m(o,$){b(o,e,$),b(o,l,$),b(o,n,$),T(n,s),T(s,i),fe(i,t[1]),T(n,u),T(n,f),T(f,r),fe(r,t[0]),T(n,c),T(n,k),T(n,p),N(h,n,null),T(n,v),d&&d.m(n,null),m=!0,g||(w=[j(i,"input",t[4]),j(i,"input",t[7]),j(r,"input",t[5]),j(r,"input",t[8]),j(n,"submit",dt(t[6]))],g=!0)},p(o,$){$&2&&i.value!==o[1]&&fe(i,o[1]),$&1&&r.value!==o[0]&&fe(r,o[0]);const V={};$&4&&(V.disabled=o[2]),$&4096&&(V.$$scope={dirty:$,ctx:o}),h.$set(V),o[3]?d?d.p(o,$):(d=Ee(o),d.c(),d.m(n,null)):d&&(d.d(1),d=null)},i(o){m||(C(h.$$.fragment,o),m=!0)},o(o){P(h.$$.fragment,o),m=!1},d(o){o&&a(e),o&&a(l),o&&a(n),G(h),d&&d.d(),g=!1,Y(w)}}}function qt(t){let e,l;return e=new it({props:{$$slots:{default:[Ft]},$$scope:{ctx:t}}}),{c(){R(e.$$.fragment)},m(n,s){N(e,n,s),l=!0},p(n,[s]){const i={};s&4111&&(i.$$scope={dirty:s,ctx:n}),e.$set(i)},i(n){l||(C(e.$$.fragment,n),l=!0)},o(n){P(e.$$.fragment,n),l=!1},d(n){G(e,n)}}}let Ae=20;function zt(t,e,l){let n="",s="",i=!0,u;const f=()=>{},r=()=>{n.trim().length<=Ae?(l(3,u=`The Proposal Text must be at least ${Ae} characters`),l(2,i=!0)):(l(3,u=null),l(2,i=!1))},c=()=>{alert("nice try :) you can't be a master here yet because this playground is just getting started.")};function k(){s=this.value,l(1,s)}function p(){n=this.value,l(0,n)}return[n,s,i,u,f,r,c,k,p]}class Vt extends z{constructor(e){super(),q(this,e,zt,qt,F,{})}}function Bt(t){const e=t-1;return e*e*e+1}function Wt(t,{delay:e=0,duration:l=400,easing:n=ke}={}){const s=+getComputedStyle(t).opacity;return{delay:e,duration:l,easing:n,css:i=>`opacity: ${i*s}`}}function Kt(t,{delay:e=0,duration:l=400,easing:n=Bt,start:s=0,opacity:i=0}={}){const u=getComputedStyle(t),f=+u.opacity,r=u.transform==="none"?"":u.transform,c=1-s,k=f*(1-i);return{delay:e,duration:l,easing:n,css:(p,h)=>`
			transform: ${r} scale(${1-c*h});
			opacity: ${f-k*h}
		`}}function Yt(t){let e,l,n;return{c(){e=y("button"),e.textContent="Vote As Apprentice"},m(s,i){b(s,e,i),l||(n=j(e,"click",t[6]),l=!0)},p:M,d(s){s&&a(e),l=!1,n()}}}function Zt(t){let e,l,n;return{c(){e=y("button"),e.textContent="Let's Do It"},m(s,i){b(s,e,i),l||(n=j(e,"click",t[5]),l=!0)},p:M,d(s){s&&a(e),l=!1,n()}}}function He(t){return{c:M,m:M,d:M}}function Jt(t){let e,l=t[1].rating+"",n,s,i,u=t[4](t[1].text)+"",f,r,c,k,p,h;function v(d,o){return d[0]==="cultGameOfTheDay"?Zt:Yt}let m=v(t),g=m(t),w=t[0]==="apprentice"&&He();return{c(){e=y("div"),n=S(l),s=L(),i=y("p"),f=L(),r=y("p"),r.innerHTML="<br/>",c=L(),g.c(),k=L(),w&&w.c(),p=L(),h=y("a"),h.textContent="you might only understand this if you try to delete it :)",_(e,"class","num-display svelte-1hwqke3"),_(i,"class","text-display"),_(h,"href","https://cultmagazine.org"),_(h,"class","linkInText svelte-1hwqke3"),_t(h,"display","none")},m(d,o){b(d,e,o),T(e,n),b(d,s,o),b(d,i,o),i.innerHTML=u,b(d,f,o),b(d,r,o),b(d,c,o),g.m(d,o),b(d,k,o),w&&w.m(d,o),b(d,p,o),b(d,h,o)},p(d,o){o&2&&l!==(l=d[1].rating+"")&&Xe(n,l),o&2&&u!==(u=d[4](d[1].text)+"")&&(i.innerHTML=u),m===(m=v(d))&&g?g.p(d,o):(g.d(1),g=m(d),g&&(g.c(),g.m(k.parentNode,k))),d[0]==="apprentice"?w||(w=He(),w.c(),w.m(p.parentNode,p)):w&&(w.d(1),w=null)},d(d){d&&a(e),d&&a(s),d&&a(i),d&&a(f),d&&a(r),d&&a(c),g.d(d),d&&a(k),w&&w.d(d),d&&a(p),d&&a(h)}}}function Qt(t){let e,l;return e=new it({props:{$$slots:{default:[Jt]},$$scope:{ctx:t}}}),{c(){R(e.$$.fragment)},m(n,s){N(e,n,s),l=!0},p(n,[s]){const i={};s&4099&&(i.$$scope={dirty:s,ctx:n}),e.$set(i)},i(n){l||(C(e.$$.fragment,n),l=!0)},o(n){P(e.$$.fragment,n),l=!1},d(n){G(e,n)}}}function Xt(t,e,l){let{mode:n=""}=e,{item:s}=e;const i=p=>{const h=u(p);p.indexOf("https://")===-1?alert("ok. just do it."):window.open(h,"_blank")},u=p=>{let h="",v=p.indexOf("https://");if(v!==-1){let m=p.substr(v,p.length),g=m.indexOf(" ")-1;g===-2?h=m:h=m.substr(0,g)}return h},f=p=>{alert("nice try :) you can't be an apprentice yet, because this playground is just getting started.")},r=p=>{var h=/(\b(https?|):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi,v=p.replace(h,`<a class="linkInText" href='$1' target="_blank">$1</a>`),m=/(^|[^\/])(www\.[\S]+(\b|$))/gim,g=v.replace(m,'$1<a class="linkInText" target="_blank" href="http://$2">$2</a>');return g},c=()=>i(s.text),k=()=>f(s.id);return t.$$set=p=>{"mode"in p&&l(0,n=p.mode),"item"in p&&l(1,s=p.item)},[n,s,i,f,r,c,k]}class rt extends z{constructor(e){super(),q(this,e,Xt,Qt,F,{mode:0,item:1})}}function Ie(t,e,l){const n=t.slice();return n[1]=e[l],n}function xe(t,e){let l,n,s,i,u,f;return n=new rt({props:{mode:"apprentice",item:e[1]}}),{key:t,first:null,c(){l=y("div"),R(n.$$.fragment),s=L(),this.first=l},m(r,c){b(r,l,c),N(n,l,null),T(l,s),f=!0},p(r,c){e=r;const k={};c&1&&(k.item=e[1]),n.$set(k)},i(r){f||(C(n.$$.fragment,r),ee(()=>{u&&u.end(1),i=$t(l,Kt,{}),i.start()}),f=!0)},o(r){P(n.$$.fragment,r),i&&i.invalidate(),u=Tt(l,Wt,{duration:500}),f=!1},d(r){r&&a(l),G(n),r&&u&&u.end()}}}function en(t){let e=[],l=new Map,n,s,i=t[0];const u=f=>f[1].id;for(let f=0;f<i.length;f+=1){let r=Ie(t,i,f),c=u(r);l.set(c,e[f]=xe(c,r))}return{c(){for(let f=0;f<e.length;f+=1)e[f].c();n=mt()},m(f,r){for(let c=0;c<e.length;c+=1)e[c].m(f,r);b(f,n,r),s=!0},p(f,[r]){r&1&&(i=f[0],le(),e=Ct(e,r,u,1,f,i,l,n.parentNode,Lt,xe,n,Ie),se())},i(f){if(!s){for(let r=0;r<i.length;r+=1)C(e[r]);s=!0}},o(f){for(let r=0;r<e.length;r+=1)P(e[r]);s=!1},d(f){for(let r=0;r<e.length;r+=1)e[r].d(f);f&&a(n)}}}function tn(t,e,l){let n;return Fe(t,It,s=>l(0,n=s)),[n]}class nn extends z{constructor(e){super(),q(this,e,tn,en,F,{})}}function ln(t){let e,l,n,s,i,u,f,r,c,k,p,h,v,m,g;return document.title=e=t[0],{c(){l=y("meta"),n=y("meta"),s=y("meta"),u=y("meta"),f=y("meta"),r=y("meta"),c=y("meta"),k=y("meta"),p=y("meta"),h=y("meta"),v=y("meta"),g=y("meta"),_(l,"name","description"),_(l,"content",t[1]),_(n,"property","og:type"),_(n,"content","website"),_(s,"property","og:title"),_(s,"content",i=`${t[0]} - ${Q}`),_(u,"property","og:site_name"),_(u,"content",Q),_(f,"property","og:description"),_(f,"content",t[1]),_(r,"property","og:image"),_(r,"name","og:image"),_(r,"content",t[2]),_(c,"name","og:url"),_(c,"content",t[3]),_(k,"name","twitter:site"),_(k,"content",t[4]),_(p,"name","twitter:image"),_(p,"content",t[2]),_(h,"name","twitter:card"),_(h,"content","summary_large_image"),_(v,"name","twitter:title"),_(v,"content",m=`${t[0]} - ${Q}`),_(g,"name","twitter:description"),_(g,"content",t[1])},m(w,d){T(document.head,l),T(document.head,n),T(document.head,s),T(document.head,u),T(document.head,f),T(document.head,r),T(document.head,c),T(document.head,k),T(document.head,p),T(document.head,h),T(document.head,v),T(document.head,g)},p(w,[d]){d&1&&e!==(e=w[0])&&(document.title=e),d&2&&_(l,"content",w[1]),d&1&&i!==(i=`${w[0]} - ${Q}`)&&_(s,"content",i),d&2&&_(f,"content",w[1]),d&4&&_(r,"content",w[2]),d&8&&_(c,"content",w[3]),d&16&&_(k,"content",w[4]),d&4&&_(p,"content",w[2]),d&1&&m!==(m=`${w[0]} - ${Q}`)&&_(v,"content",m),d&2&&_(g,"content",w[1])},i:M,o:M,d(w){a(l),a(n),a(s),a(u),a(f),a(r),a(c),a(k),a(p),a(h),a(v),a(g)}}}const Q="CULT Challenge";function sn(t,e,l){let{title:n=Q}=e,{description:s="We are a network of cultdao.io fans promoting freedom, fairness, education and love."}=e,{image:i="https://raw.githubusercontent.com/michael-spengler/fairness/main/diagrams-documents-images/cult-money-1500x500.jpeg"}=e,{url:u="https://cultplayground.org"}=e,{twitterHandle:f="@Peer2PeerE"}=e;return t.$$set=r=>{"title"in r&&l(0,n=r.title),"description"in r&&l(1,s=r.description),"image"in r&&l(2,i=r.image),"url"in r&&l(3,u=r.url),"twitterHandle"in r&&l(4,f=r.twitterHandle)},[n,s,i,u,f]}class rn extends z{constructor(e){super(),q(this,e,sn,ln,F,{title:0,description:1,image:2,url:3,twitterHandle:4})}}function Ue(t){let e,l;return e=new Dt({}),{c(){R(e.$$.fragment)},m(n,s){N(e,n,s),l=!0},i(n){l||(C(e.$$.fragment,n),l=!0)},o(n){P(e.$$.fragment,n),l=!1},d(n){G(e,n)}}}function Ne(t){let e,l;return e=new Pt({}),{c(){R(e.$$.fragment)},m(n,s){N(e,n,s),l=!0},i(n){l||(C(e.$$.fragment,n),l=!0)},o(n){P(e.$$.fragment,n),l=!1},d(n){G(e,n)}}}function Ge(t){let e,l;return e=new Vt({}),{c(){R(e.$$.fragment)},m(n,s){N(e,n,s),l=!0},i(n){l||(C(e.$$.fragment,n),l=!0)},o(n){P(e.$$.fragment,n),l=!1},d(n){G(e,n)}}}function je(t){let e,l;return e=new nn({}),{c(){R(e.$$.fragment)},m(n,s){N(e,n,s),l=!0},i(n){l||(C(e.$$.fragment,n),l=!0)},o(n){P(e.$$.fragment,n),l=!1},d(n){G(e,n)}}}function on(t){let e,l,n,s,i,u,f,r,c,k,p,h,v,m,g,w,d,o,$,V,W,O,x,U,Z,re,Le,_e,he,oe,be,Ce;e=new rn({props:{title:"CULT Challenge Today",description:"We are a network of cultdao.io fans promoting freedom, fairness, education and love."}}),f=new rt({props:{mode:"cultGameOfTheDay",item:t[4]}}),c=new At({});let E=t[0]&&Ue(),A=t[1]&&Ne(),H=t[3]&&Ge(),I=t[2]&&je();return{c(){R(e.$$.fragment),l=L(),n=y("main"),s=y("div"),i=y("h2"),i.textContent="CULT Game Of The Day",u=L(),R(f.$$.fragment),r=L(),R(c.$$.fragment),k=L(),p=y("button"),p.textContent="Show Details",h=L(),E&&E.c(),v=L(),m=y("p"),m.innerHTML="<br/>",g=L(),w=y("button"),w.textContent="Show Philosophy",d=L(),A&&A.c(),o=L(),$=y("p"),$.innerHTML="<br/>",V=L(),W=y("button"),W.textContent="Show Master Mode",O=L(),H&&H.c(),x=L(),U=y("p"),U.innerHTML="<br/>",Z=L(),re=y("button"),re.textContent="Show Challenge Proposals",Le=L(),I&&I.c(),_e=L(),he=y("p"),he.innerHTML="<br/>",_(s,"class","text-center"),_(n,"class","container")},m(D,B){N(e,D,B),b(D,l,B),b(D,n,B),T(n,s),T(s,i),T(s,u),N(f,s,null),T(s,r),N(c,s,null),T(s,k),T(s,p),T(s,h),E&&E.m(s,null),T(s,v),T(s,m),T(s,g),T(s,w),T(s,d),A&&A.m(s,null),T(s,o),T(s,$),T(s,V),T(s,W),T(s,O),H&&H.m(s,null),T(s,x),T(s,U),T(s,Z),T(s,re),T(s,Le),I&&I.m(s,null),T(s,_e),T(s,he),oe=!0,be||(Ce=[j(p,"click",t[9]),j(w,"click",t[10]),j(W,"click",t[11]),j(re,"click",t[12])],be=!0)},p(D,[B]){const Me={};B&16&&(Me.item=D[4]),f.$set(Me),D[0]?E?B&1&&C(E,1):(E=Ue(),E.c(),C(E,1),E.m(s,v)):E&&(le(),P(E,1,1,()=>{E=null}),se()),D[1]?A?B&2&&C(A,1):(A=Ne(),A.c(),C(A,1),A.m(s,o)):A&&(le(),P(A,1,1,()=>{A=null}),se()),D[3]?H?B&8&&C(H,1):(H=Ge(),H.c(),C(H,1),H.m(s,x)):H&&(le(),P(H,1,1,()=>{H=null}),se()),D[2]?I?B&4&&C(I,1):(I=je(),I.c(),C(I,1),I.m(s,_e)):I&&(le(),P(I,1,1,()=>{I=null}),se())},i(D){oe||(C(e.$$.fragment,D),C(f.$$.fragment,D),C(c.$$.fragment,D),C(E),C(A),C(H),C(I),oe=!0)},o(D){P(e.$$.fragment,D),P(f.$$.fragment,D),P(c.$$.fragment,D),P(E),P(A),P(H),P(I),oe=!1},d(D){G(e,D),D&&a(l),D&&a(n),G(f),G(c),E&&E.d(),A&&A.d(),H&&H.d(),I&&I.d(),be=!1,Y(Ce)}}}function fn(t,e,l){let n;Fe(t,Ht,w=>l(4,n=w));let s=!1,i=!1,u=!1,f=!1;const r=()=>{l(0,s=!s),s&&(l(1,i=!1),l(2,u=!1),l(3,f=!1))},c=()=>{l(1,i=!i),i&&(l(0,s=!1),l(2,u=!1),l(3,f=!1))},k=()=>{l(2,u=!u),u&&(l(0,s=!1),l(1,i=!1),l(3,f=!1))},p=()=>{l(3,f=!f),f&&(l(0,s=!1),l(1,i=!1),l(2,u=!1))};return[s,i,u,f,n,r,c,k,p,()=>r(),()=>c(),()=>p(),()=>k()]}class un extends z{constructor(e){super(),q(this,e,fn,on,F,{})}}new un({target:document.getElementById("app")});

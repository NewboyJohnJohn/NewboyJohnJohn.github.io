function b(){}const nt=t=>t;function xt(t,e){for(const n in e)t[n]=e[n];return t}function it(t){return t()}function X(){return Object.create(null)}function N(t){t.forEach(it)}function F(t){return typeof t=="function"}function Kt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let D;function Qt(t,e){return D||(D=document.createElement("a")),D.href=e,t===D.href}function $t(t){return Object.keys(t).length===0}function bt(t,...e){if(t==null)return b;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Ut(t,e,n){t.$$.on_destroy.push(bt(e,n))}function Wt(t,e,n,i){if(t){const s=st(t,e,n,i);return t[0](s)}}function st(t,e,n,i){return t[1]&&i?xt(n.ctx.slice(),t[1](i(e))):n.ctx}function Vt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const c=[],r=Math.max(e.dirty.length,s.length);for(let a=0;a<r;a+=1)c[a]=e.dirty[a]|s[a];return c}return e.dirty|s}return e.dirty}function Xt(t,e,n,i,s,c){if(s){const r=st(e,n,i,c);t.p(r,s)}}function Yt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Zt(t,e,n){return t.set(n),e}const rt=typeof window<"u";let ct=rt?()=>window.performance.now():()=>Date.now(),U=rt?t=>requestAnimationFrame(t):b;const E=new Set;function lt(t){E.forEach(e=>{e.c(t)||(E.delete(e),e.f())}),E.size!==0&&U(lt)}function ot(t){let e;return E.size===0&&U(lt),{promise:new Promise(n=>{E.add(e={c:t,f:n})}),abort(){E.delete(e)}}}let G=!1;function vt(){G=!0}function Et(){G=!1}function Nt(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function kt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let l=0;l<e.length;l++){const f=e[l];f.claim_order!==void 0&&o.push(f)}e=o}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let o=0;o<e.length;o++){const l=e[o].claim_order,f=(s>0&&e[n[s]].claim_order<=l?s+1:Nt(1,s,_=>e[n[_]].claim_order,l))-1;i[o]=n[f]+1;const u=f+1;n[u]=o,s=Math.max(u,s)}const c=[],r=[];let a=e.length-1;for(let o=n[s]+1;o!=0;o=i[o-1]){for(c.push(e[o-1]);a>=o;a--)r.push(e[a]);a--}for(;a>=0;a--)r.push(e[a]);c.reverse(),r.sort((o,l)=>o.claim_order-l.claim_order);for(let o=0,l=0;o<r.length;o++){for(;l<c.length&&r[o].claim_order>=c[l].claim_order;)l++;const f=l<c.length?c[l]:null;t.insertBefore(r[o],f)}}function At(t,e){t.appendChild(e)}function at(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Tt(t){const e=W("style");return St(at(t),e),e.sheet}function St(t,e){return At(t.head||t,e),e.sheet}function Mt(t,e){if(G){for(kt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Ct(t,e,n){t.insertBefore(e,n||null)}function jt(t,e,n){G&&!n?Mt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function C(t){t.parentNode&&t.parentNode.removeChild(t)}function te(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function W(t){return document.createElement(t)}function Ht(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function V(t){return document.createTextNode(t)}function ee(){return V(" ")}function ne(){return V("")}function ie(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function se(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Lt(t){return Array.from(t.childNodes)}function ut(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function ft(t,e,n,i,s=!1){ut(t);const c=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const a=t[r];if(e(a)){const o=n(a);return o===void 0?t.splice(r,1):t[r]=o,s||(t.claim_info.last_index=r),a}}for(let r=t.claim_info.last_index-1;r>=0;r--){const a=t[r];if(e(a)){const o=n(a);return o===void 0?t.splice(r,1):t[r]=o,s?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,a}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function Dt(t,e,n,i){return ft(t,s=>s.nodeName===e,s=>{const c=[];for(let r=0;r<s.attributes.length;r++){const a=s.attributes[r];n[a.name]||c.push(a.name)}c.forEach(r=>s.removeAttribute(r))},()=>i(e))}function re(t,e,n){return Dt(t,e,n,W)}function Ot(t,e){return ft(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>V(e),!0)}function ce(t){return Ot(t," ")}function Y(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return t.length}function le(t,e){const n=Y(t,"HTML_TAG_START",0),i=Y(t,"HTML_TAG_END",n);if(n===i)return new Z(void 0,e);ut(t);const s=t.splice(n,i-n+1);C(s[0]),C(s[s.length-1]);const c=s.slice(1,s.length-1);for(const r of c)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new Z(c,e)}function oe(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ae(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Pt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}class Rt{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=Ht(n.nodeName):this.e=W(n.nodeName),this.t=n,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)Ct(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(C)}}class Z extends Rt{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)jt(this.t,this.n[n],e)}}function ue(t,e){return new t(e)}const q=new Map;let B=0;function qt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Bt(t,e){const n={stylesheet:Tt(e),rules:{}};return q.set(t,n),n}function _t(t,e,n,i,s,c,r,a=0){const o=16.666/i;let l=`{
`;for(let p=0;p<=1;p+=o){const y=e+(n-e)*c(p);l+=p*100+`%{${r(y,1-y)}}
`}const f=l+`100% {${r(n,1-n)}}
}`,u=`__svelte_${qt(f)}_${a}`,_=at(t),{stylesheet:h,rules:d}=q.get(_)||Bt(_,t);d[u]||(d[u]=!0,h.insertRule(`@keyframes ${u} ${f}`,h.cssRules.length));const g=t.style.animation||"";return t.style.animation=`${g?`${g}, `:""}${u} ${i}ms linear ${s}ms 1 both`,B+=1,u}function K(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?c=>c.indexOf(e)<0:c=>c.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),B-=s,B||zt())}function zt(){U(()=>{B||(q.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&C(e)}),q.clear())})}let j;function M(t){j=t}function dt(){if(!j)throw new Error("Function called outside component initialization");return j}function fe(t){dt().$$.on_mount.push(t)}function _e(t){dt().$$.after_update.push(t)}const S=[],tt=[],P=[],et=[],ht=Promise.resolve();let Q=!1;function mt(){Q||(Q=!0,ht.then(pt))}function de(){return mt(),ht}function H(t){P.push(t)}const J=new Set;let O=0;function pt(){const t=j;do{for(;O<S.length;){const e=S[O];O++,M(e),Ft(e.$$)}for(M(null),S.length=0,O=0;tt.length;)tt.pop()();for(let e=0;e<P.length;e+=1){const n=P[e];J.has(n)||(J.add(n),n())}P.length=0}while(S.length);for(;et.length;)et.pop()();Q=!1,J.clear(),M(t)}function Ft(t){if(t.fragment!==null){t.update(),N(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(H)}}let T;function yt(){return T||(T=Promise.resolve(),T.then(()=>{T=null})),T}function z(t,e,n){t.dispatchEvent(Pt(`${e?"intro":"outro"}${n}`))}const R=new Set;let $;function he(){$={r:0,c:[],p:$}}function me(){$.r||N($.c),$=$.p}function gt(t,e){t&&t.i&&(R.delete(t),t.i(e))}function pe(t,e,n,i){if(t&&t.o){if(R.has(t))return;R.add(t),$.c.push(()=>{R.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const wt={duration:0};function ye(t,e,n){const i={direction:"in"};let s=e(t,n,i),c=!1,r,a,o=0;function l(){r&&K(t,r)}function f(){const{delay:_=0,duration:h=300,easing:d=nt,tick:g=b,css:p}=s||wt;p&&(r=_t(t,0,1,h,_,d,p,o++)),g(0,1);const y=ct()+_,k=y+h;a&&a.abort(),c=!0,H(()=>z(t,!0,"start")),a=ot(v=>{if(c){if(v>=k)return g(1,0),z(t,!0,"end"),l(),c=!1;if(v>=y){const A=d((v-y)/h);g(A,1-A)}}return c})}let u=!1;return{start(){u||(u=!0,K(t),F(s)?(s=s(i),yt().then(f)):f())},invalidate(){u=!1},end(){c&&(l(),c=!1)}}}function ge(t,e,n){const i={direction:"out"};let s=e(t,n,i),c=!0,r;const a=$;a.r+=1;function o(){const{delay:l=0,duration:f=300,easing:u=nt,tick:_=b,css:h}=s||wt;h&&(r=_t(t,1,0,f,l,u,h));const d=ct()+l,g=d+f;H(()=>z(t,!1,"start")),ot(p=>{if(c){if(p>=g)return _(0,1),z(t,!1,"end"),--a.r||N(a.c),!1;if(p>=d){const y=u((p-d)/f);_(1-y,y)}}return c})}return F(s)?yt().then(()=>{s=s(i),o()}):o(),{end(l){l&&s.tick&&s.tick(1,0),c&&(r&&K(t,r),c=!1)}}}function we(t,e){t.d(1),e.delete(t.key)}function xe(t,e,n,i,s,c,r,a,o,l,f,u){let _=t.length,h=c.length,d=_;const g={};for(;d--;)g[t[d].key]=d;const p=[],y=new Map,k=new Map;for(d=h;d--;){const m=u(s,c,d),w=n(m);let x=r.get(w);x?i&&x.p(m,e):(x=l(w,m),x.c()),y.set(w,p[d]=x),w in g&&k.set(w,Math.abs(d-g[w]))}const v=new Set,A=new Set;function I(m){gt(m,1),m.m(a,f),r.set(m.key,m),f=m.first,h--}for(;_&&h;){const m=p[h-1],w=t[_-1],x=m.key,L=w.key;m===w?(f=m.first,_--,h--):y.has(L)?!r.has(x)||v.has(x)?I(m):A.has(L)?_--:k.get(x)>k.get(L)?(A.add(x),I(m)):(v.add(L),_--):(o(w,r),_--)}for(;_--;){const m=t[_];y.has(m.key)||o(m,r)}for(;h;)I(p[h-1]);return p}function $e(t){t&&t.c()}function be(t,e){t&&t.l(e)}function Gt(t,e,n,i){const{fragment:s,after_update:c}=t.$$;s&&s.m(e,n),i||H(()=>{const r=t.$$.on_mount.map(it).filter(F);t.$$.on_destroy?t.$$.on_destroy.push(...r):N(r),t.$$.on_mount=[]}),c.forEach(H)}function It(t,e){const n=t.$$;n.fragment!==null&&(N(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Jt(t,e){t.$$.dirty[0]===-1&&(S.push(t),mt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ve(t,e,n,i,s,c,r,a=[-1]){const o=j;M(t);const l=t.$$={fragment:null,ctx:[],props:c,update:b,not_equal:s,bound:X(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:X(),dirty:a,skip_bound:!1,root:e.target||o.$$.root};r&&r(l.root);let f=!1;if(l.ctx=n?n(t,e.props||{},(u,_,...h)=>{const d=h.length?h[0]:_;return l.ctx&&s(l.ctx[u],l.ctx[u]=d)&&(!l.skip_bound&&l.bound[u]&&l.bound[u](d),f&&Jt(t,u)),_}):[],l.update(),f=!0,N(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){vt();const u=Lt(e.target);l.fragment&&l.fragment.l(u),u.forEach(C)}else l.fragment&&l.fragment.c();e.intro&&gt(t.$$.fragment),Gt(t,e.target,e.anchor,e.customElement),Et(),pt()}M(o)}class Ee{$destroy(){It(this,1),this.$destroy=b}$on(e,n){if(!F(n))return b;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!$t(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{de as A,b as B,Wt as C,Xt as D,Yt as E,Vt as F,Mt as G,Ut as H,Qt as I,ie as J,N as K,H as L,ye as M,ge as N,Zt as O,te as P,Z as Q,le as R,Ee as S,xe as T,we as U,ee as a,jt as b,ce as c,me as d,ne as e,gt as f,he as g,C as h,ve as i,_e as j,W as k,re as l,Lt as m,se as n,fe as o,ae as p,V as q,Ot as r,Kt as s,pe as t,oe as u,ue as v,$e as w,be as x,Gt as y,It as z};
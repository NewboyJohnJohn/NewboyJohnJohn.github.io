import{S as lt,i as st,s as ot,k as y,q as V,a as D,l as T,m as w,r as U,h as m,c as A,n as v,b as S,G as a,J as C,T as K,B as Q,u as et,U as X}from"../../../chunks/index-a6bf3c7d.js";function Z(f,e,t){const o=f.slice();return o[8]=e[t],o[10]=t,o}function $(f,e,t){const o=f.slice();return o[8]=e[t],o[10]=t,o}function x(f,e){let t,o=e[8].taskInput+"",i,u,c,k,d,b,p;function h(){return e[5](e[10])}return{key:f,first:null,c(){t=y("div"),i=V(o),u=D(),c=y("button"),k=V("Remove"),d=D(),this.h()},l(r){t=T(r,"DIV",{class:!0});var n=w(t);i=U(n,o),u=A(n),c=T(n,"BUTTON",{class:!0,type:!0});var g=w(c);k=U(g,"Remove"),g.forEach(m),d=A(n),n.forEach(m),this.h()},h(){v(c,"class","removebutton svelte-mtk314"),v(c,"type","button"),v(t,"class","task svelte-mtk314"),this.first=t},m(r,n){S(r,t,n),a(t,i),a(t,u),a(t,c),a(c,k),a(t,d),b||(p=C(c,"click",h),b=!0)},p(r,n){e=r,n&2&&o!==(o=e[8].taskInput+"")&&et(i,o)},d(r){r&&m(t),b=!1,p()}}}function tt(f,e){let t,o=e[8].taskInput+"",i,u,c,k,d,b,p;function h(){return e[6](e[10])}return{key:f,first:null,c(){t=y("div"),i=V(o),u=D(),c=y("button"),k=V("Remove"),d=D(),this.h()},l(r){t=T(r,"DIV",{class:!0});var n=w(t);i=U(n,o),u=A(n),c=T(n,"BUTTON",{class:!0,type:!0});var g=w(c);k=U(g,"Remove"),g.forEach(m),d=A(n),n.forEach(m),this.h()},h(){v(c,"class","removebutton svelte-mtk314"),v(c,"type","button"),v(t,"class","task svelte-mtk314"),this.first=t},m(r,n){S(r,t,n),a(t,i),a(t,u),a(t,c),a(c,k),a(t,d),b||(p=C(c,"click",h),b=!0)},p(r,n){e=r,n&1&&o!==(o=e[8].taskInput+"")&&et(i,o)},d(r){r&&m(t),b=!1,p()}}}function nt(f){let e,t,o,i,u,c,k,d,b,p,h,r,n,g,I=[],G=new Map,M,N,E=[],H=new Map,P,J,R=f[1];const L=l=>l[8].id;for(let l=0;l<R.length;l+=1){let s=$(f,R,l),_=L(s);G.set(_,I[l]=x(_,s))}let O=f[0];const W=l=>l[8].id;for(let l=0;l<O.length;l+=1){let s=Z(f,O,l),_=W(s);H.set(_,E[l]=tt(_,s))}return{c(){e=y("div"),t=y("title"),o=V("Todo App"),i=D(),u=y("h1"),c=V("Todo App"),k=D(),d=y("input"),b=D(),p=y("button"),h=V("Add to list"),r=D(),n=y("div"),g=y("div");for(let l=0;l<I.length;l+=1)I[l].c();M=D(),N=y("div");for(let l=0;l<E.length;l+=1)E[l].c();this.h()},l(l){e=T(l,"DIV",{class:!0});var s=w(e);t=T(s,"TITLE",{});var _=w(t);o=U(_,"Todo App"),_.forEach(m),i=A(s),u=T(s,"H1",{class:!0});var Y=w(u);c=U(Y,"Todo App"),Y.forEach(m),k=A(s),d=T(s,"INPUT",{type:!0,placeholder:!0,id:!0,class:!0}),b=A(s),p=T(s,"BUTTON",{class:!0,type:!0});var j=w(p);h=U(j,"Add to list"),j.forEach(m),r=A(s),n=T(s,"DIV",{class:!0});var q=w(n);g=T(q,"DIV",{});var z=w(g);for(let B=0;B<I.length;B+=1)I[B].l(z);z.forEach(m),M=A(q),N=T(q,"DIV",{});var F=w(N);for(let B=0;B<E.length;B+=1)E[B].l(F);F.forEach(m),q.forEach(m),s.forEach(m),this.h()},h(){v(u,"class","svelte-mtk314"),v(d,"type","text"),v(d,"placeholder","Write about something you want todo"),v(d,"id","newTask"),v(d,"class","svelte-mtk314"),v(p,"class","submitbutton svelte-mtk314"),v(p,"type","button"),v(n,"class","todorows svelte-mtk314"),v(e,"class","background svelte-mtk314")},m(l,s){S(l,e,s),a(e,t),a(t,o),a(e,i),a(e,u),a(u,c),a(e,k),a(e,d),a(e,b),a(e,p),a(p,h),a(e,r),a(e,n),a(n,g);for(let _=0;_<I.length;_+=1)I[_].m(g,null);a(n,M),a(n,N);for(let _=0;_<E.length;_+=1)E[_].m(N,null);P||(J=C(p,"click",f[4]),P=!0)},p(l,[s]){s&6&&(R=l[1],I=K(I,s,L,1,l,R,G,g,X,x,null,$)),s&1&&(O=l[0],E=K(E,s,W,1,l,O,H,N,X,tt,null,Z))},i:Q,o:Q,d(l){l&&m(e);for(let s=0;s<I.length;s+=1)I[s].d();for(let s=0;s<E.length;s+=1)E[s].d();P=!1,J()}}}function at(f,e,t){let o=[],i=[],u=0;function c(h){const r=i.splice(h,1);o.push(r[0]),t(0,o),t(1,i)}function k(){let h=document.getElementById("newTask").value;if(h===""){alert("You must enter something to do first");return}i.push({id:u,taskInput:h}),t(1,i),document.getElementById("newTask").value="",u++}return[o,i,c,k,()=>k(),h=>c(h),h=>{o.splice(h,1),t(0,o)}]}class rt extends lt{constructor(e){super(),st(this,e,at,nt,ot,{})}}export{rt as default};

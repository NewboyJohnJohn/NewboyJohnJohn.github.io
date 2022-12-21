import{S as he,i as ue,s as de,k as o,q as f,a as w,l,m as u,r as b,h as r,c as B,I as ae,n as _,b as V,G as e,J as W,u as X,B as ie,K as pe}from"../../chunks/index-a6bf3c7d.js";function fe(d){let s,i,m,k,y,a,h,v,N,x,P,K,A,n,g,E,Z,U,I,Q,D,C,R,M,j,T,z,O,H,J,q,G,$,L,ee;return{c(){s=o("body"),i=o("h1"),m=o("center"),k=f("China Clicker"),y=w(),a=o("h2"),h=o("center"),v=f(d[2]),N=f(" Chinese people"),x=w(),P=o("style"),K=f(`body{
        background-color: gray;
    }
    h1{
    font-size: 4em;
    color: rgb(115, 9, 9);
}
.cookiePic{
    border: 3px solid black;
    background-color: white;
    border-radius: 30%;
    width: 250px;
    height: 250px;
}`),A=w(),n=o("center"),g=o("button"),E=o("img"),U=w(),I=o("p"),Q=f("Buy rice farmer (x 2 click power)"),D=w(),C=o("button"),R=f("$"),M=f(d[0]),j=w(),T=o("p"),z=f("Buy child labour for "),O=f(d[1]),H=f("(x 2 cps)"),J=w(),q=o("button"),G=o("img"),this.h()},l(t){s=l(t,"BODY",{});var c=u(s);i=l(c,"H1",{});var te=u(i);m=l(te,"CENTER",{});var re=u(m);k=b(re,"China Clicker"),re.forEach(r),te.forEach(r),y=B(c),a=l(c,"H2",{});var ne=u(a);h=l(ne,"CENTER",{});var Y=u(h);v=b(Y,d[2]),N=b(Y," Chinese people"),Y.forEach(r),ne.forEach(r),x=B(c),P=l(c,"STYLE",{});var ce=u(P);K=b(ce,`body{
        background-color: gray;
    }
    h1{
    font-size: 4em;
    color: rgb(115, 9, 9);
}
.cookiePic{
    border: 3px solid black;
    background-color: white;
    border-radius: 30%;
    width: 250px;
    height: 250px;
}`),ce.forEach(r),c.forEach(r),A=B(t),n=l(t,"CENTER",{});var p=u(n);g=l(p,"BUTTON",{class:!0,type:!0});var oe=u(g);E=l(oe,"IMG",{src:!0,width:!0,height:!0,alt:!0}),oe.forEach(r),U=B(p),I=l(p,"P",{});var le=u(I);Q=b(le,"Buy rice farmer (x 2 click power)"),le.forEach(r),D=B(p),C=l(p,"BUTTON",{type:!0});var F=u(C);R=b(F,"$"),M=b(F,d[0]),F.forEach(r),j=B(p),T=l(p,"P",{});var S=u(T);z=b(S,"Buy child labour for "),O=b(S,d[1]),H=b(S,"(x 2 cps)"),S.forEach(r),J=B(p),q=l(p,"BUTTON",{type:!0});var se=u(q);G=l(se,"IMG",{src:!0,alt:!0}),se.forEach(r),p.forEach(r),this.h()},h(){ae(E.src,Z="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCdxrnEaCyptvp4Qh90qVPIhQcxA8MK79CnQ&usqp=CAU")||_(E,"src",Z),_(E,"width","200"),_(E,"height","200"),_(E,"alt","a chinese person"),_(g,"class","cookiePic"),_(g,"type","button"),_(C,"type","button"),ae(G.src,$="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiMMlkxJjji6a3DoFiEwKKKGtf7kpfvhqkvQ&usqp=CAU")||_(G,"src",$),_(G,"alt","chinese children"),_(q,"type","button")},m(t,c){V(t,s,c),e(s,i),e(i,m),e(m,k),e(s,y),e(s,a),e(a,h),e(h,v),e(h,N),e(s,x),e(s,P),e(P,K),V(t,A,c),V(t,n,c),e(n,g),e(g,E),e(n,U),e(n,I),e(I,Q),e(n,D),e(n,C),e(C,R),e(C,M),e(n,j),e(n,T),e(T,z),e(T,O),e(T,H),e(n,J),e(n,q),e(q,G),L||(ee=[W(g,"click",d[6]),W(C,"click",d[7]),W(q,"click",d[8])],L=!0)},p(t,[c]){c&4&&X(v,t[2]),c&1&&X(M,t[0]),c&2&&X(O,t[1])},i:ie,o:ie,d(t){t&&r(s),t&&r(A),t&&r(n),L=!1,pe(ee)}}}function be(d,s,i){let m=1,k=25,y=100,a=0,h=0;function v(){i(2,a+=m)}function N(){a>=k&&(i(2,a-=k),i(0,k+=75*m*3),m*=2)}setInterval(function(){i(2,a+=h)},1e3);function x(){a>=y&&(i(2,a-=y),h!=0?h*=2:h+=1,i(1,y+=100*h*6))}return[k,y,a,v,N,x,()=>v(),()=>N(),()=>x()]}class me extends he{constructor(s){super(),ue(this,s,be,fe,de,{})}}export{me as default};

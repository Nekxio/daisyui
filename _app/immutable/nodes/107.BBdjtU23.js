import{s as B,a as C,e as m,t as O,d as q,c as v,b as _,h as s,f as R,i as o,w as y,j as r,k,l as z}from"../chunks/scheduler.CmJ_ZkIC.js";import{S as G,i as J,c as K,b as L,m as N,t as Q,a as U,d as W}from"../chunks/index.BimWP6M-.js";import{S as X}from"../chunks/SEO.K09oHCdB.js";function Y(n){let d,b,a,l,h,$,w,f,i,u,I=n[0].videos.find(n[4]).snippet.title+"",F,P,E,T,p,S,D=n[0].videos.find(n[5]).snippet.description+"",j,c;return d=new X({props:{title:n[0].videos.find(n[1]).snippet.title,desc:`Tailwind CSS video tutorial: ${n[0].videos.find(n[2]).snippet.title}`}}),{c(){K(d.$$.fragment),b=C(),a=m("div"),l=m("iframe"),w=C(),f=m("div"),i=C(),u=m("h1"),F=O(I),P=C(),E=m("div"),T=C(),p=m("div"),S=m("p"),j=O(D),this.h()},l(e){L(d.$$.fragment,e),b=q(e),a=v(e,"DIV",{class:!0});var t=_(a);l=v(t,"IFRAME",{title:!0,src:!0,frameborder:!0,class:!0});var V=_(l);V.forEach(s),t.forEach(s),w=q(e),f=v(e,"DIV",{class:!0}),_(f).forEach(s),i=q(e),u=v(e,"H1",{class:!0});var A=_(u);F=R(A,I),A.forEach(s),P=q(e),E=v(e,"DIV",{class:!0}),_(E).forEach(s),T=q(e),p=v(e,"DIV",{class:!0});var H=_(p);S=v(H,"P",{class:!0});var M=_(S);j=R(M,D),M.forEach(s),H.forEach(s),this.h()},h(){o(l,"title",h=n[0].videos.find(n[3]).snippet.title),y(l.src,$=`https://www.youtube.com/embed/${n[0].video.id}`)||o(l,"src",$),o(l,"frameborder","0"),l.allowFullscreen=!0,o(l,"class","svelte-19d3ctr"),o(a,"class","embed-container rounded-box svelte-19d3ctr"),o(f,"class","h-10"),o(u,"class","text-3xl font-bold"),o(E,"class","h-10"),o(S,"class","mx-auto max-w-2xl text-sm"),o(p,"class","text-base-content/60 bg-base-200 rounded-box p-6")},m(e,t){N(d,e,t),r(e,b,t),r(e,a,t),k(a,l),r(e,w,t),r(e,f,t),r(e,i,t),r(e,u,t),k(u,F),r(e,P,t),r(e,E,t),r(e,T,t),r(e,p,t),k(p,S),k(S,j),c=!0},p(e,[t]){const V={};t&1&&(V.title=e[0].videos.find(e[1]).snippet.title),t&1&&(V.desc=`Tailwind CSS video tutorial: ${e[0].videos.find(e[2]).snippet.title}`),d.$set(V),(!c||t&1&&h!==(h=e[0].videos.find(e[3]).snippet.title))&&o(l,"title",h),(!c||t&1&&!y(l.src,$=`https://www.youtube.com/embed/${e[0].video.id}`))&&o(l,"src",$),(!c||t&1)&&I!==(I=e[0].videos.find(e[4]).snippet.title+"")&&z(F,I),(!c||t&1)&&D!==(D=e[0].videos.find(e[5]).snippet.description+"")&&z(j,D)},i(e){c||(Q(d.$$.fragment,e),c=!0)},o(e){U(d.$$.fragment,e),c=!1},d(e){e&&(s(b),s(a),s(w),s(f),s(i),s(u),s(P),s(E),s(T),s(p)),W(d,e)}}}function Z(n,d,b){let{data:a}=d;const l=i=>i.id==a.video.id,h=i=>i.id==a.video.id,$=i=>i.id==a.video.id,w=i=>i.id==a.video.id,f=i=>i.id==a.video.id;return n.$$set=i=>{"data"in i&&b(0,a=i.data)},[a,l,h,$,w,f]}class te extends G{constructor(d){super(),J(this,d,Z,Y,B,{data:0})}}export{te as component};

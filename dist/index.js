"use strict";var h=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var N=h(function(Ir,$){
var or=require("debug"),T=require('@stdlib/math-base-special-sincos/dist').assign,H=require('@stdlib/math-base-special-ellipk/dist'),Nr=require('@stdlib/math-base-special-floor/dist'),K=require('@stdlib/math-base-special-sqrt/dist'),J=require('@stdlib/math-base-special-cosh/dist'),M=require('@stdlib/math-base-special-sinh/dist'),U=require('@stdlib/math-base-special-tanh/dist'),V=require('@stdlib/math-base-special-atan/dist'),X=require('@stdlib/math-base-special-asin/dist'),Y=require('@stdlib/math-base-special-sin/dist'),gr=require('@stdlib/math-base-special-cos/dist'),fr=require('@stdlib/math-base-special-abs/dist'),Z=require('@stdlib/constants-float64-sqrt-eps/dist'),hr=require('@stdlib/constants-float64-eps/dist'),dr=require('@stdlib/constants-float64-pi/dist'),xr=or("elilpj:assign"),u=[0,0,0,0],c=[0,0],j=[0,0,0,0,0,0,0,0,0];function W(e,r,x,E,k){var F,G,w,L,g,P,R,O,l,_,z,B,f,y,C,A,S,D,a,i,v,n,I,p,o,Q,s,t,q;if(r<0)C=-r/(1-r),L=K(1-r),W(e*L,C,u,1,0),a=u[0]/u[2]/L,i=u[1]/u[2],v=1/u[2],n=NaN;else if(r>1)I=K(r),W(e*I,1/r,u,1,0),a=u[0]/I,i=u[2],v=u[1],n=NaN;else if(r===0)T(e,c,1,0),a=c[0],i=c[1],v=1,n=e;else if(r===1)a=U(e),i=1/J(e),v=i,n=V(M(e));else if(r<Z)S=4*H(r),D=(e%S+S)%S,T(D,c,1,0),p=c[0],o=c[1],Q=.25*r*(D-p*o),a=p-Q*o,i=o+Q*p,v=1-.5*r*p*p,n=e-.25*r*(e-p*o);else if(r>1-Z)A=H(r)*2,w=e/A+.5,f=A*(w%1-.5),y=w%4,z=y>=1&&y<2,P=M(f),g=1/J(f),R=U(f),B=Nr(w)*dr+V(P),s=.25*(1-r),t=s*(P-f*g),a=R+t*g,i=g-t*R,v=g+s*(P+f*g)*R,n=B+t,z&&(a=-a,i=-i);else{s=1,t=K(1-r),q=-1,G=!1;do{if(q+=1,q>8){G=!0,a=NaN,i=NaN,v=NaN,n=NaN,xr("Warning: Overflow encountered in iteration. Returning NaN for all output values.");break}_=(s+t)*.5,o=(s-t)*.5,t=K(s*t),s=_,j[q]=o/s}while(j[q]>=hr);if(!G){for(l=(1<<q)*(e*s);q>1;)q-=1,l=.5*(l+X(j[q]*Y(l)));O=.5*(l+X(j[0]*Y(l))),n=O,T(n,c,1,0),a=c[0],i=c[1],F=gr(l-O),fr(F)<.1?v=K(1-r*a*a):v=i/F}}return x[k]=a,x[k+E]=i,x[k+E*2]=v,x[k+E*3]=n,x}$.exports=W
});var rr=h(function(Qr,m){
var Kr=N();function br(e,r){return Kr(e,r,[0,0,0,0],1,0)}m.exports=br
});var ir=h(function(Tr,ar){
var kr=N(),er=[0,0,0,0];function wr(e,r){return kr(e,r,er,1,0),er[0]}ar.exports=wr
});var sr=h(function(Wr,nr){
var Pr=N(),vr=[0,0,0,0];function Rr(e,r){return Pr(e,r,vr,1,0),vr[1]}nr.exports=Rr
});var qr=h(function(_r,tr){
var Sr=N(),ur=[0,0,0,0];function jr(e,r){return Sr(e,r,ur,1,0),ur[2]}tr.exports=jr
});var pr=h(function(zr,lr){
var Er=N(),cr=[0,0,0,0];function Fr(e,r){return Er(e,r,cr,1,0),cr[3]}lr.exports=Fr
});var b=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),Gr=N(),d=rr(),Lr=ir(),Or=sr(),yr=qr(),Ar=pr();b(d,"assign",Gr);b(d,"sn",Lr);b(d,"cn",Or);b(d,"dn",yr);b(d,"am",Ar);module.exports=d;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

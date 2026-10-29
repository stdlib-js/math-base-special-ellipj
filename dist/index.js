"use strict";var d=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(l){throw (r=0, l)}};};var g=d(function(Ir,$){
var or=require("debug"),T=require('@stdlib/math-base-special-sincos/dist').assign,H=require('@stdlib/math-base-special-ellipk/dist'),Nr=require('@stdlib/math-base-special-floor/dist'),K=require('@stdlib/math-base-special-sqrt/dist'),J=require('@stdlib/math-base-special-cosh/dist'),M=require('@stdlib/math-base-special-sinh/dist'),U=require('@stdlib/math-base-special-tanh/dist'),V=require('@stdlib/math-base-special-atan/dist'),X=require('@stdlib/math-base-special-asin/dist'),Y=require('@stdlib/math-base-special-sin/dist'),gr=require('@stdlib/math-base-special-cos/dist'),fr=require('@stdlib/math-base-special-abs/dist'),Z=require('@stdlib/constants-float64-sqrt-eps/dist'),hr=require('@stdlib/constants-float64-eps/dist'),dr=require('@stdlib/constants-float64-pi/dist'),xr=or("ellipj:assign"),u=[0,0,0,0],c=[0,0],j=[0,0,0,0,0,0,0,0,0];function W(e,r,l,E,k){var F,G,w,L,f,P,R,O,p,_,z,B,h,y,C,A,S,D,a,i,v,n,I,o,N,Q,s,t,q;if(r<0)C=-r/(1-r),L=K(1-r),W(e*L,C,u,1,0),a=u[0]/u[2]/L,i=u[1]/u[2],v=1/u[2],n=NaN;else if(r>1)I=K(r),W(e*I,1/r,u,1,0),a=u[0]/I,i=u[2],v=u[1],n=NaN;else if(r===0)T(e,c,1,0),a=c[0],i=c[1],v=1,n=e;else if(r===1)a=U(e),i=1/J(e),v=i,n=V(M(e));else if(r<Z)S=4*H(r),D=(e%S+S)%S,T(D,c,1,0),o=c[0],N=c[1],Q=.25*r*(D-o*N),a=o-Q*N,i=N+Q*o,v=1-.5*r*o*o,n=e-.25*r*(e-o*N);else if(r>1-Z)A=H(r)*2,w=e/A+.5,h=A*(w%1-.5),y=w%4,z=y>=1&&y<2,P=M(h),f=1/J(h),R=U(h),B=Nr(w)*dr+V(P),s=.25*(1-r),t=s*(P-h*f),a=R+t*f,i=f-t*R,v=f+s*(P+h*f)*R,n=B+t,z&&(a=-a,i=-i);else{s=1,t=K(1-r),q=-1,G=!1;do{if(q+=1,q>8){G=!0,a=NaN,i=NaN,v=NaN,n=NaN,xr("Warning: Overflow encountered in iteration. Returning NaN for all output values.");break}_=(s+t)*.5,N=(s-t)*.5,t=K(s*t),s=_,j[q]=N/s}while(j[q]>=hr);if(!G){for(p=(1<<q)*(e*s);q>1;)q-=1,p=.5*(p+X(j[q]*Y(p)));O=.5*(p+X(j[0]*Y(p))),n=O,T(n,c,1,0),a=c[0],i=c[1],F=gr(p-O),fr(F)<.1?v=K(1-r*a*a):v=i/F}}return l[k]=a,l[k+E]=i,l[k+E*2]=v,l[k+E*3]=n,l}$.exports=W
});var rr=d(function(Qr,m){
var Kr=g();function br(e,r){return Kr(e,r,[0,0,0,0],1,0)}m.exports=br
});var ir=d(function(Tr,ar){
var kr=g(),er=[0,0,0,0];function wr(e,r){return kr(e,r,er,1,0),er[0]}ar.exports=wr
});var sr=d(function(Wr,nr){
var Pr=g(),vr=[0,0,0,0];function Rr(e,r){return Pr(e,r,vr,1,0),vr[1]}nr.exports=Rr
});var qr=d(function(_r,tr){
var Sr=g(),ur=[0,0,0,0];function jr(e,r){return Sr(e,r,ur,1,0),ur[2]}tr.exports=jr
});var pr=d(function(zr,lr){
var Er=g(),cr=[0,0,0,0];function Fr(e,r){return Er(e,r,cr,1,0),cr[3]}lr.exports=Fr
});var b=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),Gr=g(),x=rr(),Lr=ir(),Or=sr(),yr=qr(),Ar=pr();b(x,"assign",Gr);b(x,"sn",Lr);b(x,"cn",Or);b(x,"dn",yr);b(x,"am",Ar);module.exports=x;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

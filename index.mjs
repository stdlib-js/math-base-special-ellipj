// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import{assign as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sincos@v0.2.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ellipk@v0.1.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@v0.2.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@v0.2.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-cosh@v0.1.0-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sinh@v0.1.0-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-tanh@v0.1.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-atan@v0.2.0-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-asin@v0.2.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sin@v0.2.0-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-cos@v0.2.0-esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.2.0-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-sqrt-eps@v0.2.0-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-eps@v0.2.0-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pi@v0.2.0-esm/index.mjs";function v(e){if(e.__esModule)return e;var s=e.default;if("function"==typeof s){var t=function e(){if(this instanceof e){var t=[null];t.push.apply(t,arguments);var i=Function.bind.apply(s,t);return new i}return s.apply(this,arguments)};t.prototype=s.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(e).forEach((function(s){var i=Object.getOwnPropertyDescriptor(e,s);Object.defineProperty(t,s,i.get?i:{enumerable:!0,get:function(){return e[s]}})})),t}var u=v(Object.freeze({__proto__:null,default:()=>()=>{}}))("elilpj:assign"),b=[0,0,0,0],g=[0,0],x=[0,0,0,0,0,0,0,0,0];function N(e,v,y,_,O){var w,k,P,q,M,z,D,E,F,R,W,A,B,C,G,H,I,J,K,L,Q,S,T,U,V,X,Y,Z;if(v<0)C=-v/(1-v),N(e*(q=n(1-v)),C,b,1,0),J=b[0]/b[2]/q,K=b[1]/b[2],L=1/b[2],Q=NaN;else if(v>1)N(e*(S=n(v)),1/v,b,1,0),J=b[0]/S,K=b[2],L=b[1],Q=NaN;else if(0===v)s(e,g,1,0),J=g[0],K=g[1],L=1,Q=e;else if(1===v)J=l(e),L=K=1/r(e),Q=o(a(e));else if(v<f)H=4*t(v),s(I=(e%H+H)%H,g,1,0),J=(T=g[0])-(V=.25*v*(I-T*(U=g[1])))*U,K=U+V*T,L=1-.5*v*T*T,Q=e-.25*v*(e-T*U);else if(v>1-f)W=(B=(P=e/(G=2*t(v))+.5)%4)>=1&&B<2,z=a(A=G*(P%1-.5)),M=1/r(A),J=(D=l(A))+(Y=(X=.25*(1-v))*(z-A*M))*M,K=M-Y*D,L=M+X*(z+A*M)*D,Q=i(P)*h+o(z)+Y,W&&(J=-J,K=-K);else{X=1,Y=n(1-v),Z=-1,k=!1;do{if((Z+=1)>8){k=!0,J=NaN,K=NaN,L=NaN,Q=NaN,u("Warning: Overflow encountered in iteration. Returning NaN for all output values.");break}R=.5*(X+Y),U=.5*(X-Y),Y=n(X*Y),X=R,x[Z]=U/X}while(x[Z]>=j);if(!k){for(F=e*X*(1<<Z);Z>1;)F=.5*(F+m(x[Z-=1]*d(F)));E=.5*(F+m(x[0]*d(F))),s(Q=E,g,1,0),J=g[0],K=g[1],w=p(F-E),L=c(w)<.1?n(1-v*J*J):K/w}}return y[O]=J,y[O+_]=K,y[O+2*_]=L,y[O+3*_]=Q,y}function y(e,s){return N(e,s,[0,0,0,0],1,0)}var _=[0,0,0,0];function O(e,s){return N(e,s,_,1,0),_[0]}var w=[0,0,0,0];function k(e,s){return N(e,s,w,1,0),w[1]}var P=[0,0,0,0];function q(e,s){return N(e,s,P,1,0),P[2]}var M=[0,0,0,0];function z(e,s){return N(e,s,M,1,0),M[3]}e(y,"assign",N),e(y,"sn",O),e(y,"cn",k),e(y,"dn",q),e(y,"am",z);export{z as am,N as assign,k as cn,y as default,q as dn,O as sn};
//# sourceMappingURL=index.mjs.map

// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function n(r){return"number"==typeof r}function t(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function i(r,e,n){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+t(a):t(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var e,t,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,u=parseInt(t,10),!isFinite(u)){if(!n(t))throw new Error("invalid integer. Value: "+t);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(t=(-u).toString(e),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=u.toString(e),u||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===o.call(r.specifier)?o.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function f(r){return"string"==typeof r}var c=Math.abs,s=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,v=/e-(\d)$/,d=/^(\d+)$/,g=/^(\d+)e/,h=/\.0$/,w=/\.0*e/,b=/(\..*[^0])0*e/;function m(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":c(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=p.call(t,b,"$1e"),t=p.call(t,w,"e"),t=p.call(t,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=p.call(t,y,"e+0$1"),t=p.call(t,v,"e-0$1"),r.alternate&&(t=p.call(t,d,"$1."),t=p.call(t,g,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===l.call(r.specifier)?l.call(t):s.call(t)}function N(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}function _(r,e,n){var t=e-r.length;return t<0?r:r=n?r+N(t):N(t)+r}var A=String.fromCharCode,E=isNaN,j=Array.isArray;function U(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function k(r){var e,n,t,a,o,c,s,l,p;if(!j(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",s=1,l=0;l<r.length;l++)if(f(t=r[l]))c+=t;else{if(e=void 0!==t.precision,!(t=U(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),n=t.flags,p=0;p<n.length;p++)switch(a=n.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,E(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,E(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=u(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!E(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=E(o)?String(t.arg):A(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=m(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=_(t.arg,t.width,t.padRight)),c+=t.arg||"",s+=1}return c}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function S(r){var e,n,t,i;for(n=[],i=0,t=x.exec(r);t;)(e=r.slice(i,x.lastIndex-t[0].length)).length&&n.push(e),n.push(I(t)),i=x.lastIndex,t=x.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function O(r){return"string"==typeof r}function F(r){var e,n,t;if(!O(r))throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=S(r),(n=new Array(arguments.length))[0]=e,t=1;t<n.length;t++)n[t]=arguments[t];return k.apply(null,n)}var T=Object.prototype,V=T.toString,P=T.__defineGetter__,$=T.__defineSetter__,G=T.__lookupGetter__,W=T.__lookupSetter__,H=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===V.call(n))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(G.call(r,e)||W.call(r,e)?(t=r.__proto__,r.__proto__=T,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&P&&P.call(r,e,n.get),o&&$&&$.call(r,e,n.set),r};function M(r,e,n){H(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}function C(r){if(r.__esModule)return r;var e=r.default;if("function"==typeof e){var n=function r(){if(this instanceof r){var n=[null];n.push.apply(n,arguments);var t=Function.bind.apply(e,n);return new t}return e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(r).forEach((function(e){var t=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(n,e,t.get?t:{enumerable:!0,get:function(){return r[e]}})})),n}var L,R=C(Object.freeze({__proto__:null,default:()=>()=>{}})),Z=2147483647,z=2146435072,X="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),Y=Object.prototype.toString,q=Object.prototype.hasOwnProperty,D="function"==typeof Symbol?Symbol:void 0,B="function"==typeof D?D.toStringTag:"",J=X&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,t,i,a;if(null==r)return Y.call(r);n=r[B],a=B,e=null!=(i=r)&&q.call(i,a);try{r[B]=void 0}catch(e){return Y.call(r)}return t=Y.call(r),e?r[B]=n:delete r[B],t}:function(r){return Y.call(r)},K="function"==typeof Uint32Array,Q="function"==typeof Uint32Array?Uint32Array:null,rr="function"==typeof Uint32Array?Uint32Array:void 0;L=function(){var r,e,n;if("function"!=typeof Q)return!1;try{e=new Q(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(K&&n instanceof Uint32Array||"[object Uint32Array]"===J(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?rr:function(){throw new Error("not implemented")};var er,nr=L,tr="function"==typeof Float64Array,ir="function"==typeof Float64Array?Float64Array:null,ar="function"==typeof Float64Array?Float64Array:void 0;er=function(){var r,e,n;if("function"!=typeof ir)return!1;try{e=new ir([1,3.14,-3.14,NaN]),n=e,r=(tr&&n instanceof Float64Array||"[object Float64Array]"===J(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?ar:function(){throw new Error("not implemented")};var or,ur=er,fr="function"==typeof Uint8Array,cr="function"==typeof Uint8Array?Uint8Array:null,sr="function"==typeof Uint8Array?Uint8Array:void 0;or=function(){var r,e,n;if("function"!=typeof cr)return!1;try{e=new cr(e=[1,3.14,-3.14,256,257]),n=e,r=(fr&&n instanceof Uint8Array||"[object Uint8Array]"===J(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?sr:function(){throw new Error("not implemented")};var lr,pr=or,yr="function"==typeof Uint16Array,vr="function"==typeof Uint16Array?Uint16Array:null,dr="function"==typeof Uint16Array?Uint16Array:void 0;lr=function(){var r,e,n;if("function"!=typeof vr)return!1;try{e=new vr(e=[1,3.14,-3.14,65536,65537]),n=e,r=(yr&&n instanceof Uint16Array||"[object Uint16Array]"===J(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?dr:function(){throw new Error("not implemented")};var gr,hr={uint16:lr,uint8:pr};(gr=new hr.uint16(1))[0]=4660;var wr=52===new hr.uint8(gr.buffer)[0],br=!0===wr?1:0,mr=new ur(1),Nr=new nr(mr.buffer);function _r(r){return mr[0]=r,Nr[br]}var Ar,Er,jr=!0===wr?0:1,Ur=new ur(1),kr=new nr(Ur.buffer);!0===wr?(Ar=1,Er=0):(Ar=0,Er=1);var xr={HIGH:Ar,LOW:Er},Ir=new ur(1),Sr=new nr(Ir.buffer),Or=xr.HIGH,Fr=xr.LOW;function Tr(r,e){return Sr[Or]=r,Sr[Fr]=e,Ir[0]}var Vr,Pr,$r=Math.floor,Gr=Number.POSITIVE_INFINITY,Wr=Number.NEGATIVE_INFINITY,Hr=1023;function Mr(r){return r!=r}function Cr(r){return r===Gr||r===Wr}!0===wr?(Vr=1,Pr=0):(Vr=0,Pr=1);var Lr={HIGH:Vr,LOW:Pr},Rr=new ur(1),Zr=new nr(Rr.buffer),zr=Lr.HIGH,Xr=Lr.LOW;function Yr(r,e,n,t){return Rr[0]=r,e[t]=Zr[zr],e[t+n]=Zr[Xr],e}function qr(r){return Yr(r,[0,0],1,0)}M(qr,"assign",Yr);var Dr=[0,0];function Br(r){return Math.abs(r)}function Jr(r,e,n,t){return Mr(r)||Cr(r)?(e[t]=r,e[t+n]=0,e):0!==r&&Br(r)<22250738585072014e-324?(e[t]=4503599627370496*r,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}M((function(r){return Jr(r,[0,0],1,0)}),"assign",Jr);var Kr=[0,0],Qr=[0,0];function re(r,e){var n,t,i,a,o,u;return 0===e||0===r||Mr(r)||Cr(r)?r:(Jr(r,Kr,1,0),e+=Kr[1],e+=function(r){var e=_r(r);return(e=(e&z)>>>20)-Hr|0}(r=Kr[0]),e<-1074?(i=0,a=r,qr.assign(i,Dr,1,0),o=Dr[0],o&=Z,u=_r(a),Tr(o|=u&=2147483648,Dr[1])):e>1023?r<0?Wr:Gr:(e<=-1023?(e+=52,t=2220446049250313e-31):t=1,qr.assign(r,Qr,1,0),n=Qr[0],n&=2148532223,t*Tr(n|=e+Hr<<20,Qr[1])))}function ee(r){return function(r,e){var n,t;for(n=[],t=0;t<e;t++)n.push(r);return n}(0,r)}var ne=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],te=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],ie=16777216,ae=5.960464477539063e-8,oe=ee(20),ue=ee(20),fe=ee(20),ce=ee(20);function se(r,e,n,t,i,a,o,u,f){var c,s,l,p,y,v,d,g,h;for(p=a,h=t[n],g=n,y=0;g>0;y++)s=ae*h|0,ce[y]=h-ie*s|0,h=t[g-1]+s,g-=1;if(h=re(h,i),h-=8*$r(.125*h),h-=d=0|h,l=0,i>0?(d+=y=ce[n-1]>>24-i,ce[n-1]-=y<<24-i,l=ce[n-1]>>23-i):0===i?l=ce[n-1]>>23:h>=.5&&(l=2),l>0){for(d+=1,c=0,y=0;y<n;y++)g=ce[y],0===c?0!==g&&(c=1,ce[y]=16777216-g):ce[y]=16777215-g;if(i>0)switch(i){case 1:ce[n-1]&=8388607;break;case 2:ce[n-1]&=4194303}2===l&&(h=1-h,0!==c&&(h-=re(1,i)))}if(0===h){for(g=0,y=n-1;y>=a;y--)g|=ce[y];if(0===g){for(v=1;0===ce[a-v];v++);for(y=n+1;y<=n+v;y++){for(f[u+y]=ne[o+y],s=0,g=0;g<=u;g++)s+=r[g]*f[u+(y-g)];t[y]=s}return se(r,e,n+=v,t,i,a,o,u,f)}}if(0===h)for(n-=1,i-=24;0===ce[n];)n-=1,i-=24;else(h=re(h,-i))>=ie?(s=ae*h|0,ce[n]=h-ie*s|0,i+=24,ce[n+=1]=s):ce[n]=0|h;for(s=re(1,i),y=n;y>=0;y--)t[y]=s*ce[y],s*=ae;for(y=n;y>=0;y--){for(s=0,v=0;v<=p&&v<=n-y;v++)s+=te[v]*t[y+v];fe[n-y]=s}for(s=0,y=n;y>=0;y--)s+=fe[y];for(e[0]=0===l?s:-s,s=fe[0]-s,y=1;y<=n;y++)s+=fe[y];return e[1]=0===l?s:-s,7&d}function le(r,e,n,t){var i,a,o,u,f,c,s;for((a=(n-3)/24|0)<0&&(a=0),u=n-24*(a+1),c=a-(o=t-1),s=o+4,f=0;f<=s;f++)oe[f]=c<0?0:ne[c],c+=1;for(f=0;f<=4;f++){for(i=0,c=0;c<=o;c++)i+=r[c]*oe[o+(f-c)];ue[f]=i}return se(r,e,4,ue,u,4,a,o,oe)}var pe=Math.round;function ye(r,e,n){var t,i,a,o,u;return a=r-1.5707963267341256*(t=pe(.6366197723675814*r)),o=6077100506506192e-26*t,u=e>>20|0,n[0]=a-o,u-(_r(n[0])>>20&2047)>16&&(o=20222662487959506e-37*t-((i=a)-(a=i-(o=6077100506303966e-26*t))-o),n[0]=a-o,u-(_r(n[0])>>20&2047)>49&&(o=84784276603689e-45*t-((i=a)-(a=i-(o=20222662487111665e-37*t))-o),n[0]=a-o)),n[1]=a-n[0]-o,t}var ve=1.5707963267341256,de=6077100506506192e-26,ge=2*de,he=3*de,we=4*de,be=[0,0,0],me=[0,0];function Ne(r,e){var n,t,i,a,o,u,f;if((i=_r(r)&Z|0)<=1072243195)return e[0]=r,e[1]=0,0;if(i<=1074752122)return 598523==(1048575&i)?ye(r,i,e):i<=1073928572?r>0?(f=r-ve,e[0]=f-de,e[1]=f-e[0]-de,1):(f=r+ve,e[0]=f+de,e[1]=f-e[0]+de,-1):r>0?(f=r-2*ve,e[0]=f-ge,e[1]=f-e[0]-ge,2):(f=r+2*ve,e[0]=f+ge,e[1]=f-e[0]+ge,-2);if(i<=1075594811)return i<=1075183036?1074977148===i?ye(r,i,e):r>0?(f=r-3*ve,e[0]=f-he,e[1]=f-e[0]-he,3):(f=r+3*ve,e[0]=f+he,e[1]=f-e[0]+he,-3):1075388923===i?ye(r,i,e):r>0?(f=r-4*ve,e[0]=f-we,e[1]=f-e[0]-we,4):(f=r+4*ve,e[0]=f+we,e[1]=f-e[0]+we,-4);if(i<1094263291)return ye(r,i,e);if(i>=z)return e[0]=NaN,e[1]=NaN,0;for(n=function(r){return Ur[0]=r,kr[jr]}(r),f=Tr(i-((t=(i>>20)-1046)<<20|0),n),o=0;o<2;o++)be[o]=0|f,f=16777216*(f-be[o]);for(be[2]=f,a=3;0===be[a-1];)a-=1;return u=le(be,me,t,a),r<0?(e[0]=-me[0],e[1]=-me[1],-u):(e[0]=me[0],e[1]=me[1],u)}var _e=-.16666666666666632;function Ae(r,e,n,t,i){var a,o,u,f,c;return o=.00833333333332249+(c=r*r)*(27557313707070068e-22*c-.0001984126982985795)+c*(f=c*c)*(1.58969099521155e-10*c-2.5050760253406863e-8),u=c*r,n[i]=0===e?r+u*(_e+c*o):r-(c*(.5*e-u*o)-e-u*_e),o=c*(.0416666666666666+c*(2480158728947673e-20*c-.001388888888887411)),o+=f*f*(c*(2.087572321298175e-9+-11359647557788195e-27*c)-2.7557314351390663e-7),f=1-(a=.5*c),n[i+t]=f+(1-f-a+(c*o-r*e)),n}var Ee=[0,0];function je(r,e,n,t){var i,a;if(i=_r(r),(i&=Z)<=1072243195)return i<1044381696&&0==(0|r)&&(e[t]=r,e[t+n]=0),Ae(r,0,e,n,t);if(i>=z)return e[t]=NaN,e[t+n]=NaN,e;switch(a=Ne(r,Ee),Ae(Ee[0],Ee[1],e,n,t),3&a){case 1:return i=e[t+n],e[t+n]=-e[t],e[t]=i,e;case 2:return e[t]*=-1,e[t+n]*=-1,e;case 3:return i=-e[t+n],e[t+n]=e[t],e[t]=i,e;default:return e}}M((function(r){return je(r,[0,0],1,0)}),"assign",je);var Ue=Math.sqrt,ke=!0===wr?1:0,xe=new ur(1),Ie=new nr(xe.buffer),Se=.6931471803691238,Oe=1.9082149292705877e-10,Fe=1048575;function Te(r){var e,n,t,i,a,o,u,f,c,s,l,p;return 0===r?Wr:Mr(r)||r<0?NaN:(a=0,(n=_r(r))<1048576&&(a-=54,n=_r(r*=0x40000000000000)),n>=2146435072?r+r:(a+=(n>>20)-Hr|0,a+=(f=614244+(n&=Fe)&1048576|0)>>20|0,u=(r=function(r,e){return xe[0]=r,Ie[ke]=e>>>0,xe[0]}(r,n|1072693248^f))-1,(Fe&2+n)<3?0===u?0===a?0:a*Se+a*Oe:(o=u*u*(.5-.3333333333333333*u),0===a?u-o:a*Se-(o-a*Oe-u)):(f=n-398458|0,c=440401-n|0,i=(l=(p=(s=u/(2+u))*s)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),t=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),o=t+i,(f|=c)>0?(e=.5*u*u,0===a?u-(e-s*(e+o)):a*Se-(e-(s*(e+o)+a*Oe)-u)):0===a?u-s*(u-o):a*Se-(s*(u-o)-a*Oe-u))))}var Ve=1.5707963267948966;function Pe(r){var e,n,t,i,a,o;return o=r,r<0&&(o=r/(r-1),e=!0),0===o?Ve:1===o?Gr:o>1?NaN:(o<.1?a=function(r){return 0===r?1.5910034537907922:1.5910034537907922+r*(.41600074399178694+r*(.24579151426410342+r*(.17948148291490615+r*(.14455605708755515+r*(.12320099331242772+r*(.10893881157429353+r*(.09885340987159291+r*(.09143962920174975+r*(.0858425915954139+.08154111871830322*r)))))))))}(o-.05):o<.2?a=function(r){return 0===r?1.63525673226458:1.63525673226458+r*(.4711906261487323+r*(.3097284108314996+r*(.2522083117731357+r*(.22672562321968465+r*(.21577444672958598+r*(.21310877187734892+r*(.21602912460518828+r*(.2232558316330579+r*(.23418050129420992+r*(.24855768297226408+.26636380989261754*r))))))))))}(o-.15):o<.3?a=function(r){return 0===r?1.685750354812596:1.685750354812596+r*(.5417318486132803+r*(.40152443839069024+r*(.3696424734208891+r*(.37606071535458363+r*(.4052358870851259+r*(.45329438175399905+r*(.5205189476511842+r*(.609426039204995+r*(.7242635222829089+r*(.8710138477098124+1.057652872753547*r))))))))))}(o-.25):o<.4?a=function(r){return 0===r?1.7443505972256133:1.7443505972256133+r*(.6348642753719353+r*(.5398425641644455+r*(.5718927051937874+r*(.6702951362654062+r*(.8325865900109772+r*(1.0738574482479333+r*(1.4220914606754977+r*(1.9203871834023047+r*(2.6325525483316543+r*(3.6521097473190394+r*(5.115867135558866+7.224080007363877*r)))))))))))}(o-.35):o<.5?a=function(r){return 0===r?1.8138839368169826:1.8138839368169826+r*(.7631632457005573+r*(.7619286053215958+r*(.9510746536684279+r*(1.315180671703161+r*(1.9285606934774109+r*(2.9375093425313787+r*(4.594894405442878+r*(7.33007122188172+r*(11.871512597425301+r*(19.45851374822938+r*(32.20638657246427+r*(53.73749198700555+90.27388602941*r))))))))))))}(o-.45):o<.6?a=function(r){return 0===r?1.8989249102715535:1.8989249102715535+r*(.9505217946182445+r*(1.1510775899590158+r*(1.7502391069863006+r*(2.952676812636875+r*(5.285800396121451+r*(9.83248571665998+r*(18.787148683275596+r*(36.61468615273698+r*(72.45292395127771+r*(145.1079577347069+r*(293.4786396308497+r*(598.385181505501+r*(1228.4200130758634+2536.5297553827645*r)))))))))))))}(o-.55):o<.7?a=function(r){return 0===r?2.0075983984243764:2.0075983984243764+r*(1.2484572312123474+r*(1.9262346570764797+r*(3.7512896400875877+r*(8.119944554932045+r*(18.665721308735552+r*(44.603924842914374+r*(109.50920543094983+r*(274.2779548232414+r*(697.5598008606327+r*(1795.7160145002472+r*(4668.38171679039+r*(12235.762468136643+r*(32290.17809718321+r*(85713.07608195965+r*(228672.1890493117+612757.2711915852*r)))))))))))))))}(o-.65):o<.8?a=function(r){return 0===r?2.1565156474996434:2.1565156474996434+r*(1.7918056418494632+r*(3.8267512874657132+r*(10.386724683637972+r*(31.403314054680703+r*(100.92370394986955+r*(337.3268282632273+r*(1158.7079305678278+r*(4060.9907421936323+r*(14454.001840343448+r*(52076.661075994045+r*(189493.65914621568+r*(695184.5762413896+r*(2567994.048255285+r*(9541921.966748387+r*(35634927.44218076+r*(133669298.46120408+r*(503352186.68662846+r*(1901975729.53866+7208915015.330104*r))))))))))))))))))}(o-.75):o<.85?a=function(r){return 0===r?2.3181226217125106:2.3181226217125106+r*(2.6169201502912327+r*(7.897935075731356+r*(30.502397154466724+r*(131.48693655235286+r*(602.9847637356492+r*(2877.024617809973+r*(14110.519919151804+r*(70621.4408815654+r*(358977.266582531+r*(1847238.2637239718+r*(9600515.416049214+r*(50307677.08502367+r*(265444188.6527128+r*(1408862325.0287027+7515687935.373775*r))))))))))))))}(o-.825):o<.9?a=function(r){return 0===r?2.473596173751344:2.473596173751344+r*(3.727624244118099+r*(15.607393035549306+r*(84.12850842805888+r*(506.98181970406137+r*(3252.2770581451236+r*(21713.242419574344+r*(149037.04518909327+r*(1043999.3310899908+r*(7427974.817042039+r*(53503839.67558661+r*(389249886.99487084+r*(2855288351.1008105+r*(21090077038.76684+r*(156699833947.7902+r*(1170222242422.44+r*(8777948323668.9375+r*(66101242752484.95+r*(499488053713388.8+0x86813c6c7adde8*r))))))))))))))))))}(o-.875):(i=function(r){return 0===r?0:0+r*(.0625+r*(.03125+r*(.0205078125+r*(.01513671875+r*(.011934280395507812+r*(.009816169738769531+r*(.008315593004226685+r*(.007199153304100037+r*(.00633745662344154+r*(.00565311038371874+r*(.005097046040418718+r*(.004636680381850056+r*(.004249547423822886+.003919665602267974*r)))))))))))))}(t=1-o),n=function(r){return 0===r?1.5910034537907922:1.5910034537907922+r*(.41600074399178694+r*(.24579151426410342+r*(.17948148291490615+r*(.14455605708755515+r*(.12320099331242772+r*(.10893881157429353+r*(.09885340987159291+r*(.09143962920174975+r*(.0858425915954139+.08154111871830322*r)))))))))}(t-.05),a=-Te(i)*(.3183098861837907*n)),e?a/Ue(1-r):a)}var $e=Math.ceil;function Ge(r){return r<0?$e(r):$r(r)}var We=1.4426950408889634,He=1/(1<<28);function Me(r){var e;return Mr(r)||r===Gr?r:r===Wr?0:r>709.782712893384?Gr:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<He?1+r:function(r,e,n){var t,i,a,o;return re(1-(e-(t=r-e)*(a=t-(i=t*t)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),n)}(r-.6931471803691238*(e=Ge(r<0?We*r-.5:We*r+.5)),1.9082149292705877e-10*e,e)}function Ce(r){return Mr(r)?r:(r<0&&(r=-r),r>21?Me(r)/2:(Me(r)+Me(-r))/2)}function Le(r){var e;return 0===r?r:r>710.4758600739439||r<-709.089565712824?r>0?Gr:Wr:(e=Br(r))>1?e>=709.0895657128241?(e=Me(.5*e),e*=.5*e,r<0&&(e=-e),e):(e=.5*(e=Me(e))-.5/e,r<0&&(e=-e),e):r+r*(e*=e)*function(r){var e,n;return 0===r?.16666666666666666:((r<0?-r:r)<=1?(e=r*(r*(-.789474443963537*r-163.72585752598383)-11561.443576500522)-351754.9648081514,n=r*(36157.827983443196+r*(1*r-277.7110814206028))-2110529.7888489086):(e=(r=1/r)*(r*(-351754.9648081514*r-11561.443576500522)-163.72585752598383)-.789474443963537,n=1+r*(r*(36157.827983443196+-2110529.7888489086*r)-277.7110814206028)),e/n)}(e)}function Re(r){var e,n;if((n=Br(r))>44.014845965556525)return r<0?-1:1;if(n>=.625)n=1-2/((e=Me(2*n))+1),r<0&&(n=-n);else{if(0===r)return r;n=r+r*(e=r*r)*function(r){var e,n;return 0===r?-.3333333333333332:((r<0?-r:r)<=1?(e=r*(r*(0*r-.9643991794250523)-99.28772310019185)-1614.6876844170845,n=4844.063053251255+r*(2235.4883906010045+r*(112.81167849163293+1*r))):(e=0+(r=1/r)*(r*(-1614.6876844170845*r-99.28772310019185)-.9643991794250523),n=1+r*(112.81167849163293+r*(2235.4883906010045+4844.063053251255*r))),e/n)}(e)}return n}var Ze=.7853981633974483,ze=6123233995736766e-32;function Xe(r){var e,n,t,i;return Mr(r)||0===r?r:r===Gr?Ve:r===Wr?-Ve:(r<0&&(n=!0,r=-r),e=0,r>2.414213562373095?(t=Ve,e=1,r=-1/r):r<=.66?t=0:(t=Ze,e=2,r=(r-1)/(r+1)),i=(i=r*r)*function(r){return 0===r?-64.85021904942025:r*(r*(r*(-.8750608600031904*r-16.157537187333652)-75.00855792314705)-122.88666844901361)-64.85021904942025}(i)/function(r){return 0===r?194.5506571482614:194.5506571482614+r*(485.3903996359137+r*(432.88106049129027+r*(165.02700983169885+r*(24.858464901423062+1*r))))}(i),i=r*i+r,2===e?i+=.5*ze:1===e&&(i+=ze),t+=i,n?-t:t)}function Ye(r){var e,n,t,i,a;if(Mr(r))return NaN;if(r>0?t=r:(e=!0,t=-r),t>1)return NaN;if(t>.625)i=(n=1-t)*function(r){var e,n;return 0===r?.08333333333333809:((r<0?-r:r)<=1?(e=28.536655482610616+r*(r*(6.968710824104713+r*(.002967721961301243*r-.5634242780008963))-25.56901049652825),n=342.43986579130785+r*(r*(147.0656354026815+r*(1*r-21.947795316429207))-383.8770957603691)):(e=.002967721961301243+(r=1/r)*(r*(6.968710824104713+r*(28.536655482610616*r-25.56901049652825))-.5634242780008963),n=1+r*(r*(147.0656354026815+r*(342.43986579130785*r-383.8770957603691))-21.947795316429207)),e/n)}(n),n=Ue(n+n),a=Ze-n,a-=n=n*i-6123233995736766e-32,a+=Ze;else{if(t<1e-8)return r;a=(n=t*t)*function(r){var e,n;return 0===r?.16666666666666713:((r<0?-r:r)<=1?(e=r*(19.562619833175948+r*(r*(5.444622390564711+r*(.004253011369004428*r-.6019598008014124))-16.262479672107002))-8.198089802484825,n=r*(139.51056146574857+r*(r*(70.49610280856842+r*(1*r-14.740913729888538))-147.1791292232726))-49.18853881490881):(e=.004253011369004428+(r=1/r)*(r*(5.444622390564711+r*(r*(19.562619833175948+-8.198089802484825*r)-16.262479672107002))-.6019598008014124),n=1+r*(r*(70.49610280856842+r*(r*(139.51056146574857+-49.18853881490881*r)-147.1791292232726))-14.740913729888538)),e/n)}(n),a=t*a+t}return e?-a:a}function qe(r,e){var n,t,i,a;return i=(a=r*r)*a,t=a*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(a),t+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(a),(i=1-(n=.5*a))+(1-i-n+(a*t-r*e))}var De=-.16666666666666632;function Be(r,e){var n,t,i;return n=.00833333333332249+(i=r*r)*(27557313707070068e-22*i-.0001984126982985795)+i*(i*i)*(1.58969099521155e-10*i-2.5050760253406863e-8),t=i*r,0===e?r+t*(De+i*n):r-(i*(.5*e-t*n)-e-t*De)}var Je=[0,0];function Ke(r){var e;if(e=_r(r),(e&=Z)<=1072243195)return e<1045430272?r:Be(r,0);if(e>=z)return NaN;switch(3&Ne(r,Je)){case 0:return Be(Je[0],Je[1]);case 1:return qe(Je[0],Je[1]);case 2:return-Be(Je[0],Je[1]);default:return-qe(Je[0],Je[1])}}var Qe=[0,0],rn=1.4901161193847656e-8,en=R("elilpj:assign"),nn=[0,0,0,0],tn=[0,0],an=[0,0,0,0,0,0,0,0,0];function on(r,e,n,t,i){var a,o,u,f,c,s,l,p,y,v,d,g,h,w,b,m,N,_,A,E,j,U,k,x,I,S,O,F;if(e<0)w=-e/(1-e),on(r*(f=Ue(1-e)),w,nn,1,0),_=nn[0]/nn[2]/f,A=nn[1]/nn[2],E=1/nn[2],j=NaN;else if(e>1)on(r*(U=Ue(e)),1/e,nn,1,0),_=nn[0]/U,A=nn[2],E=nn[1],j=NaN;else if(0===e)je(r,tn,1,0),_=tn[0],A=tn[1],E=1,j=r;else if(1===e)_=Re(r),E=A=1/Ce(r),j=Xe(Le(r));else if(e<rn)je(N=(r%(m=4*Pe(e))+m)%m,tn,1,0),_=(k=tn[0])-(I=.25*e*(N-k*(x=tn[1])))*x,A=x+I*k,E=1-.5*e*k*k,j=r-.25*e*(r-k*x);else if(e>.9999999850988388)d=(h=(u=r/(b=2*Pe(e))+.5)%4)>=1&&h<2,s=Le(g=b*(u%1-.5)),c=1/Ce(g),_=(l=Re(g))+(O=(S=.25*(1-e))*(s-g*c))*c,A=c-O*l,E=c+S*(s+g*c)*l,j=3.141592653589793*$r(u)+Xe(s)+O,d&&(_=-_,A=-A);else{S=1,O=Ue(1-e),F=-1,o=!1;do{if((F+=1)>8){o=!0,_=NaN,A=NaN,E=NaN,j=NaN,en("Warning: Overflow encountered in iteration. Returning NaN for all output values.");break}v=.5*(S+O),x=.5*(S-O),O=Ue(S*O),S=v,an[F]=x/S}while(an[F]>=2220446049250313e-31);if(!o){for(y=r*S*(1<<F);F>1;)y=.5*(y+Ye(an[F-=1]*Ke(y)));je(j=p=.5*(y+Ye(an[0]*Ke(y))),tn,1,0),_=tn[0],A=tn[1],E=Br(a=function(r){var e;if(e=_r(r),(e&=2147483647)<=1072243195)return e<1044381696?1:qe(r,0);if(e>=2146435072)return NaN;switch(3&Ne(r,Qe)){case 0:return qe(Qe[0],Qe[1]);case 1:return-Be(Qe[0],Qe[1]);case 2:return-qe(Qe[0],Qe[1]);default:return Be(Qe[0],Qe[1])}}(y-p))<.1?Ue(1-e*_*_):A/a}}return n[i]=_,n[i+t]=A,n[i+2*t]=E,n[i+3*t]=j,n}function un(r,e){return on(r,e,[0,0,0,0],1,0)}var fn=[0,0,0,0],cn=[0,0,0,0],sn=[0,0,0,0],ln=[0,0,0,0];return M(un,"assign",on),M(un,"sn",(function(r,e){return on(r,e,fn,1,0),fn[0]})),M(un,"cn",(function(r,e){return on(r,e,cn,1,0),cn[1]})),M(un,"dn",(function(r,e){return on(r,e,sn,1,0),sn[2]})),M(un,"am",(function(r,e){return on(r,e,ln,1,0),ln[3]})),un},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).ellipj=e();
//# sourceMappingURL=browser.js.map

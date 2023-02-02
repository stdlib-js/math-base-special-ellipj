// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,t=Object.prototype,e=t.toString,u=t.__defineGetter__,o=t.__defineSetter__,i=t.__lookupGetter__,f=t.__lookupSetter__,a=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,a){var c,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof a||null===a||"[object Array]"===e.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((l="value"in a)&&(i.call(r,n)||f.call(r,n)?(c=r.__proto__,r.__proto__=t,delete r[n],r[n]=a.value,r.__proto__=c):r[n]=a.value),y="get"in a,v="set"in a,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(r,n,a.get),v&&o&&o.call(r,n,a.set),r};function c(r,n,t){a(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function l(r){if(r.__esModule)return r;var n=r.default;if("function"==typeof n){var t=function r(){if(this instanceof r){var t=[null];t.push.apply(t,arguments);var e=Function.bind.apply(n,t);return new e}return n.apply(this,arguments)};t.prototype=n.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach((function(n){var e=Object.getOwnPropertyDescriptor(r,n);Object.defineProperty(t,n,e.get?e:{enumerable:!0,get:function(){return r[n]}})})),t}var y,v=l(Object.freeze({__proto__:null,default:()=>()=>{}})),s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),p=Object.prototype.toString,b=Object.prototype.hasOwnProperty,d="function"==typeof Symbol?Symbol.toStringTag:"",N=s&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,u,o;if(null==r)return p.call(r);t=r[d],o=d,n=null!=(u=r)&&b.call(u,o);try{r[d]=void 0}catch(n){return p.call(r)}return e=p.call(r),n?r[d]=t:delete r[d],e}:function(r){return p.call(r)},w="function"==typeof Uint32Array,_="function"==typeof Uint32Array?Uint32Array:null,h="function"==typeof Uint32Array?Uint32Array:void 0;y=function(){var r,n,t;if("function"!=typeof _)return!1;try{n=new _(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(w&&t instanceof Uint32Array||"[object Uint32Array]"===N(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?h:function(){throw new Error("not implemented")};var A,m=y,g="function"==typeof Float64Array,j="function"==typeof Float64Array?Float64Array:null,U="function"==typeof Float64Array?Float64Array:void 0;A=function(){var r,n,t;if("function"!=typeof j)return!1;try{n=new j([1,3.14,-3.14,NaN]),t=n,r=(g&&t instanceof Float64Array||"[object Float64Array]"===N(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?U:function(){throw new Error("not implemented")};var O,I=A,S="function"==typeof Uint8Array,E="function"==typeof Uint8Array?Uint8Array:null,F="function"==typeof Uint8Array?Uint8Array:void 0;O=function(){var r,n,t;if("function"!=typeof E)return!1;try{n=new E(n=[1,3.14,-3.14,256,257]),t=n,r=(S&&t instanceof Uint8Array||"[object Uint8Array]"===N(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?F:function(){throw new Error("not implemented")};var T,P=O,H="function"==typeof Uint16Array,G="function"==typeof Uint16Array?Uint16Array:null,M="function"==typeof Uint16Array?Uint16Array:void 0;T=function(){var r,n,t;if("function"!=typeof G)return!1;try{n=new G(n=[1,3.14,-3.14,65536,65537]),t=n,r=(H&&t instanceof Uint16Array||"[object Uint16Array]"===N(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?M:function(){throw new Error("not implemented")};var k,x={uint16:T,uint8:P};(k=new x.uint16(1))[0]=4660;var W=52===new x.uint8(k.buffer)[0],L=!0===W?1:0,V=new I(1),Y=new m(V.buffer);function q(r){return V[0]=r,Y[L]}var z,C,D=!0===W?0:1,R=new I(1),B=new m(R.buffer);!0===W?(z=1,C=0):(z=0,C=1);var J={HIGH:z,LOW:C},K=new I(1),Q=new m(K.buffer),X=J.HIGH,Z=J.LOW;function $(r,n){return Q[X]=r,Q[Z]=n,K[0]}var rr,nr,tr=Math.floor,er=Number.POSITIVE_INFINITY,ur=Number.NEGATIVE_INFINITY,or=1023;function ir(r){return r!=r}function fr(r){return r===er||r===ur}!0===W?(rr=1,nr=0):(rr=0,nr=1);var ar={HIGH:rr,LOW:nr},cr=new I(1),lr=new m(cr.buffer),yr=ar.HIGH,vr=ar.LOW;function sr(r,n,t,e){return cr[0]=r,n[e]=lr[yr],n[e+t]=lr[vr],n}function pr(r){return sr(r,[0,0],1,0)}c(pr,"assign",sr);var br=[0,0];function dr(r){return Math.abs(r)}function Nr(r,n,t,e){return ir(r)||fr(r)?(n[e]=r,n[e+t]=0,n):0!==r&&dr(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}c((function(r){return Nr(r,[0,0],1,0)}),"assign",Nr);var wr=[0,0],_r=[0,0];function hr(r,n){var t,e,u,o,i,f;return 0===n||0===r||ir(r)||fr(r)?r:(Nr(r,wr,1,0),n+=wr[1],n+=function(r){var n=q(r);return(n=(2146435072&n)>>>20)-or|0}(r=wr[0]),n<-1074?(u=0,o=r,pr.assign(u,br,1,0),i=br[0],i&=2147483647,f=q(o),$(i|=f&=2147483648,br[1])):n>1023?r<0?ur:er:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,pr.assign(r,_r,1,0),t=_r[0],t&=2148532223,e*$(t|=n+or<<20,_r[1])))}function Ar(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var mr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],gr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],jr=16777216,Ur=5.960464477539063e-8,Or=Ar(20),Ir=Ar(20),Sr=Ar(20),Er=Ar(20);function Fr(r,n,t,e,u,o,i,f,a){var c,l,y,v,s,p,b,d,N;for(v=o,N=e[t],d=t,s=0;d>0;s++)l=Ur*N|0,Er[s]=N-jr*l|0,N=e[d-1]+l,d-=1;if(N=hr(N,u),N-=8*tr(.125*N),N-=b=0|N,y=0,u>0?(b+=s=Er[t-1]>>24-u,Er[t-1]-=s<<24-u,y=Er[t-1]>>23-u):0===u?y=Er[t-1]>>23:N>=.5&&(y=2),y>0){for(b+=1,c=0,s=0;s<t;s++)d=Er[s],0===c?0!==d&&(c=1,Er[s]=16777216-d):Er[s]=16777215-d;if(u>0)switch(u){case 1:Er[t-1]&=8388607;break;case 2:Er[t-1]&=4194303}2===y&&(N=1-N,0!==c&&(N-=hr(1,u)))}if(0===N){for(d=0,s=t-1;s>=o;s--)d|=Er[s];if(0===d){for(p=1;0===Er[o-p];p++);for(s=t+1;s<=t+p;s++){for(a[f+s]=mr[i+s],l=0,d=0;d<=f;d++)l+=r[d]*a[f+(s-d)];e[s]=l}return Fr(r,n,t+=p,e,u,o,i,f,a)}}if(0===N)for(t-=1,u-=24;0===Er[t];)t-=1,u-=24;else(N=hr(N,-u))>=jr?(l=Ur*N|0,Er[t]=N-jr*l|0,u+=24,Er[t+=1]=l):Er[t]=0|N;for(l=hr(1,u),s=t;s>=0;s--)e[s]=l*Er[s],l*=Ur;for(s=t;s>=0;s--){for(l=0,p=0;p<=v&&p<=t-s;p++)l+=gr[p]*e[s+p];Sr[t-s]=l}for(l=0,s=t;s>=0;s--)l+=Sr[s];for(n[0]=0===y?l:-l,l=Sr[0]-l,s=1;s<=t;s++)l+=Sr[s];return n[1]=0===y?l:-l,7&b}function Tr(r,n,t,e){var u,o,i,f,a,c,l;for((o=(t-3)/24|0)<0&&(o=0),f=t-24*(o+1),c=o-(i=e-1),l=i+4,a=0;a<=l;a++)Or[a]=c<0?0:mr[c],c+=1;for(a=0;a<=4;a++){for(u=0,c=0;c<=i;c++)u+=r[c]*Or[i+(a-c)];Ir[a]=u}return Fr(r,n,4,Ir,f,4,o,i,Or)}var Pr=Math.round;function Hr(r,n,t){var e,u,o,i,f;return o=r-1.5707963267341256*(e=Pr(.6366197723675814*r)),i=6077100506506192e-26*e,f=n>>20|0,t[0]=o-i,f-(q(t[0])>>20&2047)>16&&(i=20222662487959506e-37*e-((u=o)-(o=u-(i=6077100506303966e-26*e))-i),t[0]=o-i,f-(q(t[0])>>20&2047)>49&&(i=84784276603689e-45*e-((u=o)-(o=u-(i=20222662487111665e-37*e))-i),t[0]=o-i)),t[1]=o-t[0]-i,e}var Gr=1.5707963267341256,Mr=6077100506506192e-26,kr=2*Mr,xr=3*Mr,Wr=4*Mr,Lr=[0,0,0],Vr=[0,0];function Yr(r,n){var t,e,u,o,i,f,a;if((u=2147483647&q(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(u<=1074752122)return 598523==(1048575&u)?Hr(r,u,n):u<=1073928572?r>0?(a=r-Gr,n[0]=a-Mr,n[1]=a-n[0]-Mr,1):(a=r+Gr,n[0]=a+Mr,n[1]=a-n[0]+Mr,-1):r>0?(a=r-2*Gr,n[0]=a-kr,n[1]=a-n[0]-kr,2):(a=r+2*Gr,n[0]=a+kr,n[1]=a-n[0]+kr,-2);if(u<=1075594811)return u<=1075183036?1074977148===u?Hr(r,u,n):r>0?(a=r-3*Gr,n[0]=a-xr,n[1]=a-n[0]-xr,3):(a=r+3*Gr,n[0]=a+xr,n[1]=a-n[0]+xr,-3):1075388923===u?Hr(r,u,n):r>0?(a=r-4*Gr,n[0]=a-Wr,n[1]=a-n[0]-Wr,4):(a=r+4*Gr,n[0]=a+Wr,n[1]=a-n[0]+Wr,-4);if(u<1094263291)return Hr(r,u,n);if(u>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return R[0]=r,B[D]}(r),a=$(u-((e=(u>>20)-1046)<<20|0),t),i=0;i<2;i++)Lr[i]=0|a,a=16777216*(a-Lr[i]);for(Lr[2]=a,o=3;0===Lr[o-1];)o-=1;return f=Tr(Lr,Vr,e,o),r<0?(n[0]=-Vr[0],n[1]=-Vr[1],-f):(n[0]=Vr[0],n[1]=Vr[1],f)}var qr=-.16666666666666632;function zr(r,n,t,e,u){var o,i,f,a,c;return i=.00833333333332249+(c=r*r)*(27557313707070068e-22*c-.0001984126982985795)+c*(a=c*c)*(1.58969099521155e-10*c-2.5050760253406863e-8),f=c*r,t[u]=0===n?r+f*(qr+c*i):r-(c*(.5*n-f*i)-n-f*qr),i=c*(.0416666666666666+c*(2480158728947673e-20*c-.001388888888887411)),i+=a*a*(c*(2.087572321298175e-9+-11359647557788195e-27*c)-2.7557314351390663e-7),a=1-(o=.5*c),t[u+e]=a+(1-a-o+(c*i-r*n)),t}var Cr=[0,0];function Dr(r,n,t,e){var u,o;if(u=q(r),(u&=2147483647)<=1072243195)return u<1044381696&&0==(0|r)&&(n[e]=r,n[e+t]=0),zr(r,0,n,t,e);if(u>=2146435072)return n[e]=NaN,n[e+t]=NaN,n;switch(o=Yr(r,Cr),zr(Cr[0],Cr[1],n,t,e),3&o){case 1:return u=n[e+t],n[e+t]=-n[e],n[e]=u,n;case 2:return n[e]*=-1,n[e+t]*=-1,n;case 3:return u=-n[e+t],n[e+t]=n[e],n[e]=u,n;default:return n}}c((function(r){return Dr(r,[0,0],1,0)}),"assign",Dr);var Rr=Math.sqrt,Br=!0===W?1:0,Jr=new I(1),Kr=new m(Jr.buffer),Qr=.6931471803691238,Xr=1.9082149292705877e-10,Zr=1048575;function $r(r){var n,t,e,u,o,i,f,a,c,l,y,v;return 0===r?ur:ir(r)||r<0?NaN:(o=0,(t=q(r))<1048576&&(o-=54,t=q(r*=0x40000000000000)),t>=2146435072?r+r:(o+=(t>>20)-or|0,o+=(a=614244+(t&=Zr)&1048576|0)>>20|0,f=(r=function(r,n){return Jr[0]=r,Kr[Br]=n>>>0,Jr[0]}(r,t|1072693248^a))-1,(Zr&2+t)<3?0===f?0===o?0:o*Qr+o*Xr:(i=f*f*(.5-.3333333333333333*f),0===o?f-i:o*Qr-(i-o*Xr-f)):(a=t-398458|0,c=440401-t|0,u=(y=(v=(l=f/(2+f))*l)*v)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(y),e=v*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(y),i=e+u,(a|=c)>0?(n=.5*f*f,0===o?f-(n-l*(n+i)):o*Qr-(n-(l*(n+i)+o*Xr)-f)):0===o?f-l*(f-i):o*Qr-(l*(f-i)-o*Xr-f))))}var rn=1.5707963267948966;function nn(r){var n,t,e,u,o,i;return i=r,r<0&&(i=r/(r-1),n=!0),0===i?rn:1===i?er:i>1?NaN:(i<.1?o=function(r){return 0===r?1.5910034537907922:1.5910034537907922+r*(.41600074399178694+r*(.24579151426410342+r*(.17948148291490615+r*(.14455605708755515+r*(.12320099331242772+r*(.10893881157429353+r*(.09885340987159291+r*(.09143962920174975+r*(.0858425915954139+.08154111871830322*r)))))))))}(i-.05):i<.2?o=function(r){return 0===r?1.63525673226458:1.63525673226458+r*(.4711906261487323+r*(.3097284108314996+r*(.2522083117731357+r*(.22672562321968465+r*(.21577444672958598+r*(.21310877187734892+r*(.21602912460518828+r*(.2232558316330579+r*(.23418050129420992+r*(.24855768297226408+.26636380989261754*r))))))))))}(i-.15):i<.3?o=function(r){return 0===r?1.685750354812596:1.685750354812596+r*(.5417318486132803+r*(.40152443839069024+r*(.3696424734208891+r*(.37606071535458363+r*(.4052358870851259+r*(.45329438175399905+r*(.5205189476511842+r*(.609426039204995+r*(.7242635222829089+r*(.8710138477098124+1.057652872753547*r))))))))))}(i-.25):i<.4?o=function(r){return 0===r?1.7443505972256133:1.7443505972256133+r*(.6348642753719353+r*(.5398425641644455+r*(.5718927051937874+r*(.6702951362654062+r*(.8325865900109772+r*(1.0738574482479333+r*(1.4220914606754977+r*(1.9203871834023047+r*(2.6325525483316543+r*(3.6521097473190394+r*(5.115867135558866+7.224080007363877*r)))))))))))}(i-.35):i<.5?o=function(r){return 0===r?1.8138839368169826:1.8138839368169826+r*(.7631632457005573+r*(.7619286053215958+r*(.9510746536684279+r*(1.315180671703161+r*(1.9285606934774109+r*(2.9375093425313787+r*(4.594894405442878+r*(7.33007122188172+r*(11.871512597425301+r*(19.45851374822938+r*(32.20638657246427+r*(53.73749198700555+90.27388602941*r))))))))))))}(i-.45):i<.6?o=function(r){return 0===r?1.8989249102715535:1.8989249102715535+r*(.9505217946182445+r*(1.1510775899590158+r*(1.7502391069863006+r*(2.952676812636875+r*(5.285800396121451+r*(9.83248571665998+r*(18.787148683275596+r*(36.61468615273698+r*(72.45292395127771+r*(145.1079577347069+r*(293.4786396308497+r*(598.385181505501+r*(1228.4200130758634+2536.5297553827645*r)))))))))))))}(i-.55):i<.7?o=function(r){return 0===r?2.0075983984243764:2.0075983984243764+r*(1.2484572312123474+r*(1.9262346570764797+r*(3.7512896400875877+r*(8.119944554932045+r*(18.665721308735552+r*(44.603924842914374+r*(109.50920543094983+r*(274.2779548232414+r*(697.5598008606327+r*(1795.7160145002472+r*(4668.38171679039+r*(12235.762468136643+r*(32290.17809718321+r*(85713.07608195965+r*(228672.1890493117+612757.2711915852*r)))))))))))))))}(i-.65):i<.8?o=function(r){return 0===r?2.1565156474996434:2.1565156474996434+r*(1.7918056418494632+r*(3.8267512874657132+r*(10.386724683637972+r*(31.403314054680703+r*(100.92370394986955+r*(337.3268282632273+r*(1158.7079305678278+r*(4060.9907421936323+r*(14454.001840343448+r*(52076.661075994045+r*(189493.65914621568+r*(695184.5762413896+r*(2567994.048255285+r*(9541921.966748387+r*(35634927.44218076+r*(133669298.46120408+r*(503352186.68662846+r*(1901975729.53866+7208915015.330104*r))))))))))))))))))}(i-.75):i<.85?o=function(r){return 0===r?2.3181226217125106:2.3181226217125106+r*(2.6169201502912327+r*(7.897935075731356+r*(30.502397154466724+r*(131.48693655235286+r*(602.9847637356492+r*(2877.024617809973+r*(14110.519919151804+r*(70621.4408815654+r*(358977.266582531+r*(1847238.2637239718+r*(9600515.416049214+r*(50307677.08502367+r*(265444188.6527128+r*(1408862325.0287027+7515687935.373775*r))))))))))))))}(i-.825):i<.9?o=function(r){return 0===r?2.473596173751344:2.473596173751344+r*(3.727624244118099+r*(15.607393035549306+r*(84.12850842805888+r*(506.98181970406137+r*(3252.2770581451236+r*(21713.242419574344+r*(149037.04518909327+r*(1043999.3310899908+r*(7427974.817042039+r*(53503839.67558661+r*(389249886.99487084+r*(2855288351.1008105+r*(21090077038.76684+r*(156699833947.7902+r*(1170222242422.44+r*(8777948323668.9375+r*(66101242752484.95+r*(499488053713388.8+0x86813c6c7adde8*r))))))))))))))))))}(i-.875):(u=function(r){return 0===r?0:0+r*(.0625+r*(.03125+r*(.0205078125+r*(.01513671875+r*(.011934280395507812+r*(.009816169738769531+r*(.008315593004226685+r*(.007199153304100037+r*(.00633745662344154+r*(.00565311038371874+r*(.005097046040418718+r*(.004636680381850056+r*(.004249547423822886+.003919665602267974*r)))))))))))))}(e=1-i),t=function(r){return 0===r?1.5910034537907922:1.5910034537907922+r*(.41600074399178694+r*(.24579151426410342+r*(.17948148291490615+r*(.14455605708755515+r*(.12320099331242772+r*(.10893881157429353+r*(.09885340987159291+r*(.09143962920174975+r*(.0858425915954139+.08154111871830322*r)))))))))}(e-.05),o=-$r(u)*(.3183098861837907*t)),n?o/Rr(1-r):o)}var tn=Math.ceil;function en(r){return r<0?tn(r):tr(r)}var un=1.4426950408889634,on=1/(1<<28);function fn(r){var n;return ir(r)||r===er?r:r===ur?0:r>709.782712893384?er:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<on?1+r:function(r,n,t){var e,u,o,i;return hr(1-(n-(e=r-n)*(o=e-(u=e*e)*(0===(i=u)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-o)-r),t)}(r-.6931471803691238*(n=en(r<0?un*r-.5:un*r+.5)),1.9082149292705877e-10*n,n)}function an(r){return ir(r)?r:(r<0&&(r=-r),r>21?fn(r)/2:(fn(r)+fn(-r))/2)}function cn(r){var n;return 0===r?r:(n=dr(r),r>710.4758600739439||r<-709.089565712824?r>0?er:ur:n>1?n>=709.0895657128241?(n=fn(.5*n),n*=.5*n,r<0&&(n=-n),n):(n=.5*(n=fn(n))-.5/n,r<0&&(n=-n),n):r+r*(n*=n)*function(r){var n,t;return 0===r?.16666666666666666:((r<0?-r:r)<=1?(n=r*(r*(-.789474443963537*r-163.72585752598383)-11561.443576500522)-351754.9648081514,t=r*(36157.827983443196+r*(1*r-277.7110814206028))-2110529.7888489086):(n=(r=1/r)*(r*(-351754.9648081514*r-11561.443576500522)-163.72585752598383)-.789474443963537,t=1+r*(r*(36157.827983443196+-2110529.7888489086*r)-277.7110814206028)),n/t)}(n))}function ln(r){var n,t;if((t=dr(r))>44.014845965556525)return r<0?-1:1;if(t>=.625)t=1-2/((n=fn(2*t))+1),r<0&&(t=-t);else{if(0===r)return r;t=r+r*(n=r*r)*function(r){var n,t;return 0===r?-.3333333333333332:((r<0?-r:r)<=1?(n=r*(r*(0*r-.9643991794250523)-99.28772310019185)-1614.6876844170845,t=4844.063053251255+r*(2235.4883906010045+r*(112.81167849163293+1*r))):(n=0+(r=1/r)*(r*(-1614.6876844170845*r-99.28772310019185)-.9643991794250523),t=1+r*(112.81167849163293+r*(2235.4883906010045+4844.063053251255*r))),n/t)}(n)}return t}var yn=.7853981633974483,vn=6123233995736766e-32;function sn(r){var n,t,e,u;return ir(r)||0===r?r:r===er?rn:r===ur?-rn:(r<0&&(t=!0,r=-r),n=0,r>2.414213562373095?(e=rn,n=1,r=-1/r):r<=.66?e=0:(e=yn,n=2,r=(r-1)/(r+1)),u=(u=r*r)*function(r){return 0===r?-64.85021904942025:r*(r*(r*(-.8750608600031904*r-16.157537187333652)-75.00855792314705)-122.88666844901361)-64.85021904942025}(u)/function(r){return 0===r?194.5506571482614:194.5506571482614+r*(485.3903996359137+r*(432.88106049129027+r*(165.02700983169885+r*(24.858464901423062+1*r))))}(u),u=r*u+r,2===n?u+=.5*vn:1===n&&(u+=vn),e+=u,t?-e:e)}function pn(r){var n,t,e,u,o;if(ir(r))return NaN;if(r>0?e=r:(n=!0,e=-r),e>1)return NaN;if(e>.625)u=(t=1-e)*function(r){var n,t;return 0===r?.08333333333333809:((r<0?-r:r)<=1?(n=28.536655482610616+r*(r*(6.968710824104713+r*(.002967721961301243*r-.5634242780008963))-25.56901049652825),t=342.43986579130785+r*(r*(147.0656354026815+r*(1*r-21.947795316429207))-383.8770957603691)):(n=.002967721961301243+(r=1/r)*(r*(6.968710824104713+r*(28.536655482610616*r-25.56901049652825))-.5634242780008963),t=1+r*(r*(147.0656354026815+r*(342.43986579130785*r-383.8770957603691))-21.947795316429207)),n/t)}(t),t=Rr(t+t),o=yn-t,o-=t=t*u-6123233995736766e-32,o+=yn;else{if(e<1e-8)return r;o=(t=e*e)*function(r){var n,t;return 0===r?.16666666666666713:((r<0?-r:r)<=1?(n=r*(19.562619833175948+r*(r*(5.444622390564711+r*(.004253011369004428*r-.6019598008014124))-16.262479672107002))-8.198089802484825,t=r*(139.51056146574857+r*(r*(70.49610280856842+r*(1*r-14.740913729888538))-147.1791292232726))-49.18853881490881):(n=.004253011369004428+(r=1/r)*(r*(5.444622390564711+r*(r*(19.562619833175948+-8.198089802484825*r)-16.262479672107002))-.6019598008014124),t=1+r*(r*(70.49610280856842+r*(r*(139.51056146574857+-49.18853881490881*r)-147.1791292232726))-14.740913729888538)),n/t)}(t),o=e*o+e}return n?-o:o}function bn(r,n){var t,e,u,o;return u=(o=r*r)*o,e=o*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(o),e+=u*u*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(o),(u=1-(t=.5*o))+(1-u-t+(o*e-r*n))}var dn=-.16666666666666632;function Nn(r,n){var t,e,u;return t=.00833333333332249+(u=r*r)*(27557313707070068e-22*u-.0001984126982985795)+u*(u*u)*(1.58969099521155e-10*u-2.5050760253406863e-8),e=u*r,0===n?r+e*(dn+u*t):r-(u*(.5*n-e*t)-n-e*dn)}var wn=[0,0];function _n(r){var n;if(n=q(r),(n&=2147483647)<=1072243195)return n<1045430272?r:Nn(r,0);if(n>=2146435072)return NaN;switch(3&Yr(r,wn)){case 0:return Nn(wn[0],wn[1]);case 1:return bn(wn[0],wn[1]);case 2:return-Nn(wn[0],wn[1]);default:return-bn(wn[0],wn[1])}}var hn=[0,0],An=1.4901161193847656e-8,mn=v("elilpj:assign"),gn=[0,0,0,0],jn=[0,0],Un=[0,0,0,0,0,0,0,0,0];function On(r,n,t,e,u){var o,i,f,a,c,l,y,v,s,p,b,d,N,w,_,h,A,m,g,j,U,O,I,S,E,F,T,P;if(n<0)w=-n/(1-n),On(r*(a=Rr(1-n)),w,gn,1,0),m=gn[0]/gn[2]/a,g=gn[1]/gn[2],j=1/gn[2],U=NaN;else if(n>1)On(r*(O=Rr(n)),1/n,gn,1,0),m=gn[0]/O,g=gn[2],j=gn[1],U=NaN;else if(0===n)Dr(r,jn,1,0),m=jn[0],g=jn[1],j=1,U=r;else if(1===n)m=ln(r),j=g=1/an(r),U=sn(cn(r));else if(n<An)Dr(A=(r%(h=4*nn(n))+h)%h,jn,1,0),m=(I=jn[0])-(E=.25*n*(A-I*(S=jn[1])))*S,g=S+E*I,j=1-.5*n*I*I,U=r-.25*n*(r-I*S);else if(n>.9999999850988388)b=(N=(f=r/(_=2*nn(n))+.5)%4)>=1&&N<2,l=cn(d=_*(f%1-.5)),c=1/an(d),m=(y=ln(d))+(T=(F=.25*(1-n))*(l-d*c))*c,g=c-T*y,j=c+F*(l+d*c)*y,U=3.141592653589793*tr(f)+sn(l)+T,b&&(m=-m,g=-g);else{F=1,T=Rr(1-n),P=-1,i=!1;do{if((P+=1)>8){i=!0,m=NaN,g=NaN,j=NaN,U=NaN,mn("Warning: Overflow encountered in iteration. Returning NaN for all output values.");break}p=.5*(F+T),S=.5*(F-T),T=Rr(F*T),F=p,Un[P]=S/F}while(Un[P]>=2220446049250313e-31);if(!i){for(s=r*F*(1<<P);P>1;)s=.5*(s+pn(Un[P-=1]*_n(s)));Dr(U=v=.5*(s+pn(Un[0]*_n(s))),jn,1,0),m=jn[0],g=jn[1],j=dr(o=function(r){var n;if(n=q(r),(n&=2147483647)<=1072243195)return n<1044381696?1:bn(r,0);if(n>=2146435072)return NaN;switch(3&Yr(r,hn)){case 0:return bn(hn[0],hn[1]);case 1:return-Nn(hn[0],hn[1]);case 2:return-bn(hn[0],hn[1]);default:return Nn(hn[0],hn[1])}}(s-v))<.1?Rr(1-n*m*m):g/o}}return t[u]=m,t[u+e]=g,t[u+2*e]=j,t[u+3*e]=U,t}function In(r,n){return On(r,n,[0,0,0,0],1,0)}var Sn=[0,0,0,0],En=[0,0,0,0],Fn=[0,0,0,0],Tn=[0,0,0,0];return c(In,"assign",On),c(In,"sn",(function(r,n){return On(r,n,Sn,1,0),Sn[0]})),c(In,"cn",(function(r,n){return On(r,n,En,1,0),En[1]})),c(In,"dn",(function(r,n){return On(r,n,Fn,1,0),Fn[2]})),c(In,"am",(function(r,n){return On(r,n,Tn,1,0),Tn[3]})),In},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).ellipj=n();
//# sourceMappingURL=browser.js.map
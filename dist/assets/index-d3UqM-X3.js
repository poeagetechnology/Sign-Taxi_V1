const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Login-D1Sjo1ar.js","assets/Button-BVa8E8uI.js","assets/Input-CAwXL_ww.js","assets/zap-Fst-JlBB.js","assets/mail-D-kUuf5_.js","assets/Register-CeHJ7fnw.js","assets/driverService-CdzvMaa0.js","assets/user-DIImfHO9.js","assets/phone-CT4_PttE.js","assets/Dashboard-DBIwWQMG.js","assets/AppLayout-BfsOWI2Q.js","assets/userService-CP9s9fs3.js","assets/rideService-DBNLPjU6.js","assets/Badge-ClqEi7nd.js","assets/constants-CfnPd8N4.js","assets/dollar-sign-Ch-RPiiB.js","assets/Users-buQowvPB.js","assets/EmptyState-DY7hV7Sj.js","assets/search-B3Ho51lP.js","assets/Drivers-Cy1piFcF.js","assets/Modal-B-K3VtY7.js","assets/circle-check-big-D_3-Sz6I.js","assets/circle-x-CfBsYgNh.js","assets/Rides-IKeRrNo2.js","assets/History-CK2oLZLf.js","assets/arrow-up-a-z-OO7Ha-y_.js","assets/Home-Cyz3GVBo.js","assets/locationService-CUsBSSHz.js","assets/driverStore-DbeN8-cf.js","assets/arrow-right-D5DeVIlz.js","assets/BookRide-DgD3jUs9.js","assets/LocationPickerModal-DwC-FwyA.js","assets/MapView-Bgz86UcD.js","assets/useLocation-Daj3B5Pw.js","assets/dispatchService-a0p-dwW8.js","assets/navigation-D4oQvDPG.js","assets/circle-alert-YIAlqD9W.js","assets/TrackRide-CqGFVmSu.js","assets/Directions-DQV8sMqz.js","assets/History-CRnLJkLr.js","assets/Profile-D74fLKel.js","assets/save-ChZj8xF3.js","assets/Dashboard-Drwotpdq.js","assets/Requests-Zpe8qdPW.js","assets/ActiveRide-DTq1zydW.js","assets/History-Bk7YJ1i1.js","assets/Profile-5lOnOj_g.js","assets/NotFound-_sh4EWns.js"])))=>i.map(i=>d[i]);
function mP(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function yE(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var vE={exports:{}},eh={},wE={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gl=Symbol.for("react.element"),gP=Symbol.for("react.portal"),_P=Symbol.for("react.fragment"),yP=Symbol.for("react.strict_mode"),vP=Symbol.for("react.profiler"),wP=Symbol.for("react.provider"),EP=Symbol.for("react.context"),IP=Symbol.for("react.forward_ref"),TP=Symbol.for("react.suspense"),SP=Symbol.for("react.memo"),AP=Symbol.for("react.lazy"),ty=Symbol.iterator;function RP(t){return t===null||typeof t!="object"?null:(t=ty&&t[ty]||t["@@iterator"],typeof t=="function"?t:null)}var EE={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},IE=Object.assign,TE={};function yo(t,e,n){this.props=t,this.context=e,this.refs=TE,this.updater=n||EE}yo.prototype.isReactComponent={};yo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};yo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function SE(){}SE.prototype=yo.prototype;function Bp(t,e,n){this.props=t,this.context=e,this.refs=TE,this.updater=n||EE}var jp=Bp.prototype=new SE;jp.constructor=Bp;IE(jp,yo.prototype);jp.isPureReactComponent=!0;var ny=Array.isArray,AE=Object.prototype.hasOwnProperty,zp={current:null},RE={key:!0,ref:!0,__self:!0,__source:!0};function PE(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)AE.call(e,r)&&!RE.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:gl,type:t,key:s,ref:o,props:i,_owner:zp.current}}function PP(t,e){return{$$typeof:gl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function $p(t){return typeof t=="object"&&t!==null&&t.$$typeof===gl}function CP(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ry=/\/+/g;function wd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?CP(""+t.key):e.toString(36)}function Vu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case gl:case gP:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+wd(o,0):r,ny(i)?(n="",t!=null&&(n=t.replace(ry,"$&/")+"/"),Vu(i,e,n,"",function(c){return c})):i!=null&&($p(i)&&(i=PP(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(ry,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",ny(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+wd(s,a);o+=Vu(s,e,n,l,i)}else if(l=RP(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+wd(s,a++),o+=Vu(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ou(t,e,n){if(t==null)return t;var r=[],i=0;return Vu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function kP(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Pt={current:null},Ou={transition:null},xP={ReactCurrentDispatcher:Pt,ReactCurrentBatchConfig:Ou,ReactCurrentOwner:zp};function CE(){throw Error("act(...) is not supported in production builds of React.")}re.Children={map:ou,forEach:function(t,e,n){ou(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ou(t,function(){e++}),e},toArray:function(t){return ou(t,function(e){return e})||[]},only:function(t){if(!$p(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};re.Component=yo;re.Fragment=_P;re.Profiler=vP;re.PureComponent=Bp;re.StrictMode=yP;re.Suspense=TP;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xP;re.act=CE;re.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=IE({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=zp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)AE.call(e,l)&&!RE.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:gl,type:t.type,key:i,ref:s,props:r,_owner:o}};re.createContext=function(t){return t={$$typeof:EP,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:wP,_context:t},t.Consumer=t};re.createElement=PE;re.createFactory=function(t){var e=PE.bind(null,t);return e.type=t,e};re.createRef=function(){return{current:null}};re.forwardRef=function(t){return{$$typeof:IP,render:t}};re.isValidElement=$p;re.lazy=function(t){return{$$typeof:AP,_payload:{_status:-1,_result:t},_init:kP}};re.memo=function(t,e){return{$$typeof:SP,type:t,compare:e===void 0?null:e}};re.startTransition=function(t){var e=Ou.transition;Ou.transition={};try{t()}finally{Ou.transition=e}};re.unstable_act=CE;re.useCallback=function(t,e){return Pt.current.useCallback(t,e)};re.useContext=function(t){return Pt.current.useContext(t)};re.useDebugValue=function(){};re.useDeferredValue=function(t){return Pt.current.useDeferredValue(t)};re.useEffect=function(t,e){return Pt.current.useEffect(t,e)};re.useId=function(){return Pt.current.useId()};re.useImperativeHandle=function(t,e,n){return Pt.current.useImperativeHandle(t,e,n)};re.useInsertionEffect=function(t,e){return Pt.current.useInsertionEffect(t,e)};re.useLayoutEffect=function(t,e){return Pt.current.useLayoutEffect(t,e)};re.useMemo=function(t,e){return Pt.current.useMemo(t,e)};re.useReducer=function(t,e,n){return Pt.current.useReducer(t,e,n)};re.useRef=function(t){return Pt.current.useRef(t)};re.useState=function(t){return Pt.current.useState(t)};re.useSyncExternalStore=function(t,e,n){return Pt.current.useSyncExternalStore(t,e,n)};re.useTransition=function(){return Pt.current.useTransition()};re.version="18.3.1";wE.exports=re;var L=wE.exports;const qp=yE(L),bP=mP({__proto__:null,default:qp},[L]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var DP=L,NP=Symbol.for("react.element"),VP=Symbol.for("react.fragment"),OP=Object.prototype.hasOwnProperty,LP=DP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,MP={key:!0,ref:!0,__self:!0,__source:!0};function kE(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)OP.call(e,r)&&!MP.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:NP,type:t,key:s,ref:o,props:i,_owner:LP.current}}eh.Fragment=VP;eh.jsx=kE;eh.jsxs=kE;vE.exports=eh;var G=vE.exports,hf={},xE={exports:{}},qt={},bE={exports:{}},DE={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(K,Z){var te=K.length;K.push(Z);e:for(;0<te;){var Ce=te-1>>>1,pe=K[Ce];if(0<i(pe,Z))K[Ce]=Z,K[te]=pe,te=Ce;else break e}}function n(K){return K.length===0?null:K[0]}function r(K){if(K.length===0)return null;var Z=K[0],te=K.pop();if(te!==Z){K[0]=te;e:for(var Ce=0,pe=K.length,Be=pe>>>1;Ce<Be;){var xn=2*(Ce+1)-1,bn=K[xn],Dn=xn+1,Nn=K[Dn];if(0>i(bn,te))Dn<pe&&0>i(Nn,bn)?(K[Ce]=Nn,K[Dn]=te,Ce=Dn):(K[Ce]=bn,K[xn]=te,Ce=xn);else if(Dn<pe&&0>i(Nn,te))K[Ce]=Nn,K[Dn]=te,Ce=Dn;else break e}}return Z}function i(K,Z){var te=K.sortIndex-Z.sortIndex;return te!==0?te:K.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],h=1,f=null,m=3,_=!1,S=!1,P=!1,C=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(K){for(var Z=n(c);Z!==null;){if(Z.callback===null)r(c);else if(Z.startTime<=K)r(c),Z.sortIndex=Z.expirationTime,e(l,Z);else break;Z=n(c)}}function x(K){if(P=!1,w(K),!S)if(n(l)!==null)S=!0,Lo(M);else{var Z=n(c);Z!==null&&kn(x,Z.startTime-K)}}function M(K,Z){S=!1,P&&(P=!1,E(y),y=-1),_=!0;var te=m;try{for(w(Z),f=n(l);f!==null&&(!(f.expirationTime>Z)||K&&!k());){var Ce=f.callback;if(typeof Ce=="function"){f.callback=null,m=f.priorityLevel;var pe=Ce(f.expirationTime<=Z);Z=t.unstable_now(),typeof pe=="function"?f.callback=pe:f===n(l)&&r(l),w(Z)}else r(l);f=n(l)}if(f!==null)var Be=!0;else{var xn=n(c);xn!==null&&kn(x,xn.startTime-Z),Be=!1}return Be}finally{f=null,m=te,_=!1}}var F=!1,I=null,y=-1,T=5,A=-1;function k(){return!(t.unstable_now()-A<T)}function N(){if(I!==null){var K=t.unstable_now();A=K;var Z=!0;try{Z=I(!0,K)}finally{Z?R():(F=!1,I=null)}}else F=!1}var R;if(typeof v=="function")R=function(){v(N)};else if(typeof MessageChannel<"u"){var Kt=new MessageChannel,hi=Kt.port2;Kt.port1.onmessage=N,R=function(){hi.postMessage(null)}}else R=function(){C(N,0)};function Lo(K){I=K,F||(F=!0,R())}function kn(K,Z){y=C(function(){K(t.unstable_now())},Z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(K){K.callback=null},t.unstable_continueExecution=function(){S||_||(S=!0,Lo(M))},t.unstable_forceFrameRate=function(K){0>K||125<K?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<K?Math.floor(1e3/K):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(K){switch(m){case 1:case 2:case 3:var Z=3;break;default:Z=m}var te=m;m=Z;try{return K()}finally{m=te}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(K,Z){switch(K){case 1:case 2:case 3:case 4:case 5:break;default:K=3}var te=m;m=K;try{return Z()}finally{m=te}},t.unstable_scheduleCallback=function(K,Z,te){var Ce=t.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?Ce+te:Ce):te=Ce,K){case 1:var pe=-1;break;case 2:pe=250;break;case 5:pe=1073741823;break;case 4:pe=1e4;break;default:pe=5e3}return pe=te+pe,K={id:h++,callback:Z,priorityLevel:K,startTime:te,expirationTime:pe,sortIndex:-1},te>Ce?(K.sortIndex=te,e(c,K),n(l)===null&&K===n(c)&&(P?(E(y),y=-1):P=!0,kn(x,te-Ce))):(K.sortIndex=pe,e(l,K),S||_||(S=!0,Lo(M))),K},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(K){var Z=m;return function(){var te=m;m=Z;try{return K.apply(this,arguments)}finally{m=te}}}})(DE);bE.exports=DE;var FP=bE.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var UP=L,zt=FP;function j(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var NE=new Set,La={};function Xi(t,e){qs(t,e),qs(t+"Capture",e)}function qs(t,e){for(La[t]=e,t=0;t<e.length;t++)NE.add(e[t])}var Wn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),df=Object.prototype.hasOwnProperty,BP=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,iy={},sy={};function jP(t){return df.call(sy,t)?!0:df.call(iy,t)?!1:BP.test(t)?sy[t]=!0:(iy[t]=!0,!1)}function zP(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function $P(t,e,n,r){if(e===null||typeof e>"u"||zP(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ct(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ut={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ut[t]=new Ct(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ut[e]=new Ct(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ut[t]=new Ct(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ut[t]=new Ct(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ut[t]=new Ct(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ut[t]=new Ct(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ut[t]=new Ct(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ut[t]=new Ct(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ut[t]=new Ct(t,5,!1,t.toLowerCase(),null,!1,!1)});var Gp=/[\-:]([a-z])/g;function Kp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Gp,Kp);ut[e]=new Ct(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Gp,Kp);ut[e]=new Ct(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Gp,Kp);ut[e]=new Ct(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ut[t]=new Ct(t,1,!1,t.toLowerCase(),null,!1,!1)});ut.xlinkHref=new Ct("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ut[t]=new Ct(t,1,!1,t.toLowerCase(),null,!0,!0)});function Wp(t,e,n,r){var i=ut.hasOwnProperty(e)?ut[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&($P(e,n,i,r)&&(n=null),r||i===null?jP(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var nr=UP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,au=Symbol.for("react.element"),vs=Symbol.for("react.portal"),ws=Symbol.for("react.fragment"),Hp=Symbol.for("react.strict_mode"),ff=Symbol.for("react.profiler"),VE=Symbol.for("react.provider"),OE=Symbol.for("react.context"),Qp=Symbol.for("react.forward_ref"),pf=Symbol.for("react.suspense"),mf=Symbol.for("react.suspense_list"),Jp=Symbol.for("react.memo"),gr=Symbol.for("react.lazy"),LE=Symbol.for("react.offscreen"),oy=Symbol.iterator;function Jo(t){return t===null||typeof t!="object"?null:(t=oy&&t[oy]||t["@@iterator"],typeof t=="function"?t:null)}var Ne=Object.assign,Ed;function ca(t){if(Ed===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ed=e&&e[1]||""}return`
`+Ed+t}var Id=!1;function Td(t,e){if(!t||Id)return"";Id=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Id=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ca(t):""}function qP(t){switch(t.tag){case 5:return ca(t.type);case 16:return ca("Lazy");case 13:return ca("Suspense");case 19:return ca("SuspenseList");case 0:case 2:case 15:return t=Td(t.type,!1),t;case 11:return t=Td(t.type.render,!1),t;case 1:return t=Td(t.type,!0),t;default:return""}}function gf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ws:return"Fragment";case vs:return"Portal";case ff:return"Profiler";case Hp:return"StrictMode";case pf:return"Suspense";case mf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case OE:return(t.displayName||"Context")+".Consumer";case VE:return(t._context.displayName||"Context")+".Provider";case Qp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Jp:return e=t.displayName||null,e!==null?e:gf(t.type)||"Memo";case gr:e=t._payload,t=t._init;try{return gf(t(e))}catch{}}return null}function GP(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return gf(e);case 8:return e===Hp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function qr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ME(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function KP(t){var e=ME(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function lu(t){t._valueTracker||(t._valueTracker=KP(t))}function FE(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=ME(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function oc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function _f(t,e){var n=e.checked;return Ne({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function ay(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=qr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function UE(t,e){e=e.checked,e!=null&&Wp(t,"checked",e,!1)}function yf(t,e){UE(t,e);var n=qr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?vf(t,e.type,n):e.hasOwnProperty("defaultValue")&&vf(t,e.type,qr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ly(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function vf(t,e,n){(e!=="number"||oc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ha=Array.isArray;function Ns(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+qr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function wf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(j(91));return Ne({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function uy(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(j(92));if(ha(n)){if(1<n.length)throw Error(j(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:qr(n)}}function BE(t,e){var n=qr(e.value),r=qr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function cy(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function jE(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ef(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?jE(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var uu,zE=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(uu=uu||document.createElement("div"),uu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=uu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ma(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var wa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},WP=["Webkit","ms","Moz","O"];Object.keys(wa).forEach(function(t){WP.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),wa[e]=wa[t]})});function $E(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||wa.hasOwnProperty(t)&&wa[t]?(""+e).trim():e+"px"}function qE(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=$E(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var HP=Ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function If(t,e){if(e){if(HP[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(j(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(j(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(j(61))}if(e.style!=null&&typeof e.style!="object")throw Error(j(62))}}function Tf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Sf=null;function Yp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Af=null,Vs=null,Os=null;function hy(t){if(t=vl(t)){if(typeof Af!="function")throw Error(j(280));var e=t.stateNode;e&&(e=sh(e),Af(t.stateNode,t.type,e))}}function GE(t){Vs?Os?Os.push(t):Os=[t]:Vs=t}function KE(){if(Vs){var t=Vs,e=Os;if(Os=Vs=null,hy(t),e)for(t=0;t<e.length;t++)hy(e[t])}}function WE(t,e){return t(e)}function HE(){}var Sd=!1;function QE(t,e,n){if(Sd)return t(e,n);Sd=!0;try{return WE(t,e,n)}finally{Sd=!1,(Vs!==null||Os!==null)&&(HE(),KE())}}function Fa(t,e){var n=t.stateNode;if(n===null)return null;var r=sh(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(j(231,e,typeof n));return n}var Rf=!1;if(Wn)try{var Yo={};Object.defineProperty(Yo,"passive",{get:function(){Rf=!0}}),window.addEventListener("test",Yo,Yo),window.removeEventListener("test",Yo,Yo)}catch{Rf=!1}function QP(t,e,n,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var Ea=!1,ac=null,lc=!1,Pf=null,JP={onError:function(t){Ea=!0,ac=t}};function YP(t,e,n,r,i,s,o,a,l){Ea=!1,ac=null,QP.apply(JP,arguments)}function XP(t,e,n,r,i,s,o,a,l){if(YP.apply(this,arguments),Ea){if(Ea){var c=ac;Ea=!1,ac=null}else throw Error(j(198));lc||(lc=!0,Pf=c)}}function Zi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function JE(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function dy(t){if(Zi(t)!==t)throw Error(j(188))}function ZP(t){var e=t.alternate;if(!e){if(e=Zi(t),e===null)throw Error(j(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return dy(i),t;if(s===r)return dy(i),e;s=s.sibling}throw Error(j(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?t:e}function YE(t){return t=ZP(t),t!==null?XE(t):null}function XE(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=XE(t);if(e!==null)return e;t=t.sibling}return null}var ZE=zt.unstable_scheduleCallback,fy=zt.unstable_cancelCallback,eC=zt.unstable_shouldYield,tC=zt.unstable_requestPaint,je=zt.unstable_now,nC=zt.unstable_getCurrentPriorityLevel,Xp=zt.unstable_ImmediatePriority,eI=zt.unstable_UserBlockingPriority,uc=zt.unstable_NormalPriority,rC=zt.unstable_LowPriority,tI=zt.unstable_IdlePriority,th=null,yn=null;function iC(t){if(yn&&typeof yn.onCommitFiberRoot=="function")try{yn.onCommitFiberRoot(th,t,void 0,(t.current.flags&128)===128)}catch{}}var on=Math.clz32?Math.clz32:aC,sC=Math.log,oC=Math.LN2;function aC(t){return t>>>=0,t===0?32:31-(sC(t)/oC|0)|0}var cu=64,hu=4194304;function da(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function cc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=da(a):(s&=o,s!==0&&(r=da(s)))}else o=n&~i,o!==0?r=da(o):s!==0&&(r=da(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-on(e),i=1<<n,r|=t[n],e&=~i;return r}function lC(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function uC(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-on(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=lC(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Cf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function nI(){var t=cu;return cu<<=1,!(cu&4194240)&&(cu=64),t}function Ad(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function _l(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-on(e),t[e]=n}function cC(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-on(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Zp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-on(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var de=0;function rI(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var iI,em,sI,oI,aI,kf=!1,du=[],Nr=null,Vr=null,Or=null,Ua=new Map,Ba=new Map,yr=[],hC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function py(t,e){switch(t){case"focusin":case"focusout":Nr=null;break;case"dragenter":case"dragleave":Vr=null;break;case"mouseover":case"mouseout":Or=null;break;case"pointerover":case"pointerout":Ua.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ba.delete(e.pointerId)}}function Xo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=vl(e),e!==null&&em(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function dC(t,e,n,r,i){switch(e){case"focusin":return Nr=Xo(Nr,t,e,n,r,i),!0;case"dragenter":return Vr=Xo(Vr,t,e,n,r,i),!0;case"mouseover":return Or=Xo(Or,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ua.set(s,Xo(Ua.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ba.set(s,Xo(Ba.get(s)||null,t,e,n,r,i)),!0}return!1}function lI(t){var e=Ai(t.target);if(e!==null){var n=Zi(e);if(n!==null){if(e=n.tag,e===13){if(e=JE(n),e!==null){t.blockedOn=e,aI(t.priority,function(){sI(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Lu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=xf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Sf=r,n.target.dispatchEvent(r),Sf=null}else return e=vl(n),e!==null&&em(e),t.blockedOn=n,!1;e.shift()}return!0}function my(t,e,n){Lu(t)&&n.delete(e)}function fC(){kf=!1,Nr!==null&&Lu(Nr)&&(Nr=null),Vr!==null&&Lu(Vr)&&(Vr=null),Or!==null&&Lu(Or)&&(Or=null),Ua.forEach(my),Ba.forEach(my)}function Zo(t,e){t.blockedOn===e&&(t.blockedOn=null,kf||(kf=!0,zt.unstable_scheduleCallback(zt.unstable_NormalPriority,fC)))}function ja(t){function e(i){return Zo(i,t)}if(0<du.length){Zo(du[0],t);for(var n=1;n<du.length;n++){var r=du[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Nr!==null&&Zo(Nr,t),Vr!==null&&Zo(Vr,t),Or!==null&&Zo(Or,t),Ua.forEach(e),Ba.forEach(e),n=0;n<yr.length;n++)r=yr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<yr.length&&(n=yr[0],n.blockedOn===null);)lI(n),n.blockedOn===null&&yr.shift()}var Ls=nr.ReactCurrentBatchConfig,hc=!0;function pC(t,e,n,r){var i=de,s=Ls.transition;Ls.transition=null;try{de=1,tm(t,e,n,r)}finally{de=i,Ls.transition=s}}function mC(t,e,n,r){var i=de,s=Ls.transition;Ls.transition=null;try{de=4,tm(t,e,n,r)}finally{de=i,Ls.transition=s}}function tm(t,e,n,r){if(hc){var i=xf(t,e,n,r);if(i===null)Od(t,e,r,dc,n),py(t,r);else if(dC(i,t,e,n,r))r.stopPropagation();else if(py(t,r),e&4&&-1<hC.indexOf(t)){for(;i!==null;){var s=vl(i);if(s!==null&&iI(s),s=xf(t,e,n,r),s===null&&Od(t,e,r,dc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Od(t,e,r,null,n)}}var dc=null;function xf(t,e,n,r){if(dc=null,t=Yp(r),t=Ai(t),t!==null)if(e=Zi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=JE(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return dc=t,null}function uI(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(nC()){case Xp:return 1;case eI:return 4;case uc:case rC:return 16;case tI:return 536870912;default:return 16}default:return 16}}var kr=null,nm=null,Mu=null;function cI(){if(Mu)return Mu;var t,e=nm,n=e.length,r,i="value"in kr?kr.value:kr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Mu=i.slice(t,1<r?1-r:void 0)}function Fu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function fu(){return!0}function gy(){return!1}function Gt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?fu:gy,this.isPropagationStopped=gy,this}return Ne(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=fu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=fu)},persist:function(){},isPersistent:fu}),e}var vo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rm=Gt(vo),yl=Ne({},vo,{view:0,detail:0}),gC=Gt(yl),Rd,Pd,ea,nh=Ne({},yl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:im,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ea&&(ea&&t.type==="mousemove"?(Rd=t.screenX-ea.screenX,Pd=t.screenY-ea.screenY):Pd=Rd=0,ea=t),Rd)},movementY:function(t){return"movementY"in t?t.movementY:Pd}}),_y=Gt(nh),_C=Ne({},nh,{dataTransfer:0}),yC=Gt(_C),vC=Ne({},yl,{relatedTarget:0}),Cd=Gt(vC),wC=Ne({},vo,{animationName:0,elapsedTime:0,pseudoElement:0}),EC=Gt(wC),IC=Ne({},vo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),TC=Gt(IC),SC=Ne({},vo,{data:0}),yy=Gt(SC),AC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},RC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},PC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function CC(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=PC[t])?!!e[t]:!1}function im(){return CC}var kC=Ne({},yl,{key:function(t){if(t.key){var e=AC[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Fu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?RC[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:im,charCode:function(t){return t.type==="keypress"?Fu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Fu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),xC=Gt(kC),bC=Ne({},nh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vy=Gt(bC),DC=Ne({},yl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:im}),NC=Gt(DC),VC=Ne({},vo,{propertyName:0,elapsedTime:0,pseudoElement:0}),OC=Gt(VC),LC=Ne({},nh,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),MC=Gt(LC),FC=[9,13,27,32],sm=Wn&&"CompositionEvent"in window,Ia=null;Wn&&"documentMode"in document&&(Ia=document.documentMode);var UC=Wn&&"TextEvent"in window&&!Ia,hI=Wn&&(!sm||Ia&&8<Ia&&11>=Ia),wy=" ",Ey=!1;function dI(t,e){switch(t){case"keyup":return FC.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fI(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Es=!1;function BC(t,e){switch(t){case"compositionend":return fI(e);case"keypress":return e.which!==32?null:(Ey=!0,wy);case"textInput":return t=e.data,t===wy&&Ey?null:t;default:return null}}function jC(t,e){if(Es)return t==="compositionend"||!sm&&dI(t,e)?(t=cI(),Mu=nm=kr=null,Es=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return hI&&e.locale!=="ko"?null:e.data;default:return null}}var zC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Iy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!zC[t.type]:e==="textarea"}function pI(t,e,n,r){GE(r),e=fc(e,"onChange"),0<e.length&&(n=new rm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ta=null,za=null;function $C(t){AI(t,0)}function rh(t){var e=Ss(t);if(FE(e))return t}function qC(t,e){if(t==="change")return e}var mI=!1;if(Wn){var kd;if(Wn){var xd="oninput"in document;if(!xd){var Ty=document.createElement("div");Ty.setAttribute("oninput","return;"),xd=typeof Ty.oninput=="function"}kd=xd}else kd=!1;mI=kd&&(!document.documentMode||9<document.documentMode)}function Sy(){Ta&&(Ta.detachEvent("onpropertychange",gI),za=Ta=null)}function gI(t){if(t.propertyName==="value"&&rh(za)){var e=[];pI(e,za,t,Yp(t)),QE($C,e)}}function GC(t,e,n){t==="focusin"?(Sy(),Ta=e,za=n,Ta.attachEvent("onpropertychange",gI)):t==="focusout"&&Sy()}function KC(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return rh(za)}function WC(t,e){if(t==="click")return rh(e)}function HC(t,e){if(t==="input"||t==="change")return rh(e)}function QC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ln=typeof Object.is=="function"?Object.is:QC;function $a(t,e){if(ln(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!df.call(e,i)||!ln(t[i],e[i]))return!1}return!0}function Ay(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ry(t,e){var n=Ay(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ay(n)}}function _I(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?_I(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function yI(){for(var t=window,e=oc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=oc(t.document)}return e}function om(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function JC(t){var e=yI(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&_I(n.ownerDocument.documentElement,n)){if(r!==null&&om(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Ry(n,s);var o=Ry(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var YC=Wn&&"documentMode"in document&&11>=document.documentMode,Is=null,bf=null,Sa=null,Df=!1;function Py(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Df||Is==null||Is!==oc(r)||(r=Is,"selectionStart"in r&&om(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Sa&&$a(Sa,r)||(Sa=r,r=fc(bf,"onSelect"),0<r.length&&(e=new rm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Is)))}function pu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ts={animationend:pu("Animation","AnimationEnd"),animationiteration:pu("Animation","AnimationIteration"),animationstart:pu("Animation","AnimationStart"),transitionend:pu("Transition","TransitionEnd")},bd={},vI={};Wn&&(vI=document.createElement("div").style,"AnimationEvent"in window||(delete Ts.animationend.animation,delete Ts.animationiteration.animation,delete Ts.animationstart.animation),"TransitionEvent"in window||delete Ts.transitionend.transition);function ih(t){if(bd[t])return bd[t];if(!Ts[t])return t;var e=Ts[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in vI)return bd[t]=e[n];return t}var wI=ih("animationend"),EI=ih("animationiteration"),II=ih("animationstart"),TI=ih("transitionend"),SI=new Map,Cy="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ti(t,e){SI.set(t,e),Xi(e,[t])}for(var Dd=0;Dd<Cy.length;Dd++){var Nd=Cy[Dd],XC=Nd.toLowerCase(),ZC=Nd[0].toUpperCase()+Nd.slice(1);ti(XC,"on"+ZC)}ti(wI,"onAnimationEnd");ti(EI,"onAnimationIteration");ti(II,"onAnimationStart");ti("dblclick","onDoubleClick");ti("focusin","onFocus");ti("focusout","onBlur");ti(TI,"onTransitionEnd");qs("onMouseEnter",["mouseout","mouseover"]);qs("onMouseLeave",["mouseout","mouseover"]);qs("onPointerEnter",["pointerout","pointerover"]);qs("onPointerLeave",["pointerout","pointerover"]);Xi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Xi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Xi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Xi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Xi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Xi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ek=new Set("cancel close invalid load scroll toggle".split(" ").concat(fa));function ky(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,XP(r,e,void 0,t),t.currentTarget=null}function AI(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;ky(i,a,c),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;ky(i,a,c),s=l}}}if(lc)throw t=Pf,lc=!1,Pf=null,t}function we(t,e){var n=e[Mf];n===void 0&&(n=e[Mf]=new Set);var r=t+"__bubble";n.has(r)||(RI(e,t,2,!1),n.add(r))}function Vd(t,e,n){var r=0;e&&(r|=4),RI(n,t,r,e)}var mu="_reactListening"+Math.random().toString(36).slice(2);function qa(t){if(!t[mu]){t[mu]=!0,NE.forEach(function(n){n!=="selectionchange"&&(ek.has(n)||Vd(n,!1,t),Vd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[mu]||(e[mu]=!0,Vd("selectionchange",!1,e))}}function RI(t,e,n,r){switch(uI(e)){case 1:var i=pC;break;case 4:i=mC;break;default:i=tm}n=i.bind(null,e,n,t),i=void 0,!Rf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Od(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Ai(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}QE(function(){var c=s,h=Yp(n),f=[];e:{var m=SI.get(t);if(m!==void 0){var _=rm,S=t;switch(t){case"keypress":if(Fu(n)===0)break e;case"keydown":case"keyup":_=xC;break;case"focusin":S="focus",_=Cd;break;case"focusout":S="blur",_=Cd;break;case"beforeblur":case"afterblur":_=Cd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=_y;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=yC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=NC;break;case wI:case EI:case II:_=EC;break;case TI:_=OC;break;case"scroll":_=gC;break;case"wheel":_=MC;break;case"copy":case"cut":case"paste":_=TC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=vy}var P=(e&4)!==0,C=!P&&t==="scroll",E=P?m!==null?m+"Capture":null:m;P=[];for(var v=c,w;v!==null;){w=v;var x=w.stateNode;if(w.tag===5&&x!==null&&(w=x,E!==null&&(x=Fa(v,E),x!=null&&P.push(Ga(v,x,w)))),C)break;v=v.return}0<P.length&&(m=new _(m,S,null,n,h),f.push({event:m,listeners:P}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",m&&n!==Sf&&(S=n.relatedTarget||n.fromElement)&&(Ai(S)||S[Hn]))break e;if((_||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,_?(S=n.relatedTarget||n.toElement,_=c,S=S?Ai(S):null,S!==null&&(C=Zi(S),S!==C||S.tag!==5&&S.tag!==6)&&(S=null)):(_=null,S=c),_!==S)){if(P=_y,x="onMouseLeave",E="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(P=vy,x="onPointerLeave",E="onPointerEnter",v="pointer"),C=_==null?m:Ss(_),w=S==null?m:Ss(S),m=new P(x,v+"leave",_,n,h),m.target=C,m.relatedTarget=w,x=null,Ai(h)===c&&(P=new P(E,v+"enter",S,n,h),P.target=w,P.relatedTarget=C,x=P),C=x,_&&S)t:{for(P=_,E=S,v=0,w=P;w;w=cs(w))v++;for(w=0,x=E;x;x=cs(x))w++;for(;0<v-w;)P=cs(P),v--;for(;0<w-v;)E=cs(E),w--;for(;v--;){if(P===E||E!==null&&P===E.alternate)break t;P=cs(P),E=cs(E)}P=null}else P=null;_!==null&&xy(f,m,_,P,!1),S!==null&&C!==null&&xy(f,C,S,P,!0)}}e:{if(m=c?Ss(c):window,_=m.nodeName&&m.nodeName.toLowerCase(),_==="select"||_==="input"&&m.type==="file")var M=qC;else if(Iy(m))if(mI)M=HC;else{M=KC;var F=GC}else(_=m.nodeName)&&_.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(M=WC);if(M&&(M=M(t,c))){pI(f,M,n,h);break e}F&&F(t,m,c),t==="focusout"&&(F=m._wrapperState)&&F.controlled&&m.type==="number"&&vf(m,"number",m.value)}switch(F=c?Ss(c):window,t){case"focusin":(Iy(F)||F.contentEditable==="true")&&(Is=F,bf=c,Sa=null);break;case"focusout":Sa=bf=Is=null;break;case"mousedown":Df=!0;break;case"contextmenu":case"mouseup":case"dragend":Df=!1,Py(f,n,h);break;case"selectionchange":if(YC)break;case"keydown":case"keyup":Py(f,n,h)}var I;if(sm)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Es?dI(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(hI&&n.locale!=="ko"&&(Es||y!=="onCompositionStart"?y==="onCompositionEnd"&&Es&&(I=cI()):(kr=h,nm="value"in kr?kr.value:kr.textContent,Es=!0)),F=fc(c,y),0<F.length&&(y=new yy(y,t,null,n,h),f.push({event:y,listeners:F}),I?y.data=I:(I=fI(n),I!==null&&(y.data=I)))),(I=UC?BC(t,n):jC(t,n))&&(c=fc(c,"onBeforeInput"),0<c.length&&(h=new yy("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:c}),h.data=I))}AI(f,e)})}function Ga(t,e,n){return{instance:t,listener:e,currentTarget:n}}function fc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Fa(t,n),s!=null&&r.unshift(Ga(t,s,i)),s=Fa(t,e),s!=null&&r.push(Ga(t,s,i))),t=t.return}return r}function cs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function xy(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=Fa(n,s),l!=null&&o.unshift(Ga(n,l,a))):i||(l=Fa(n,s),l!=null&&o.push(Ga(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var tk=/\r\n?/g,nk=/\u0000|\uFFFD/g;function by(t){return(typeof t=="string"?t:""+t).replace(tk,`
`).replace(nk,"")}function gu(t,e,n){if(e=by(e),by(t)!==e&&n)throw Error(j(425))}function pc(){}var Nf=null,Vf=null;function Of(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Lf=typeof setTimeout=="function"?setTimeout:void 0,rk=typeof clearTimeout=="function"?clearTimeout:void 0,Dy=typeof Promise=="function"?Promise:void 0,ik=typeof queueMicrotask=="function"?queueMicrotask:typeof Dy<"u"?function(t){return Dy.resolve(null).then(t).catch(sk)}:Lf;function sk(t){setTimeout(function(){throw t})}function Ld(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ja(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ja(e)}function Lr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Ny(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var wo=Math.random().toString(36).slice(2),dn="__reactFiber$"+wo,Ka="__reactProps$"+wo,Hn="__reactContainer$"+wo,Mf="__reactEvents$"+wo,ok="__reactListeners$"+wo,ak="__reactHandles$"+wo;function Ai(t){var e=t[dn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Hn]||n[dn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Ny(t);t!==null;){if(n=t[dn])return n;t=Ny(t)}return e}t=n,n=t.parentNode}return null}function vl(t){return t=t[dn]||t[Hn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ss(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(j(33))}function sh(t){return t[Ka]||null}var Ff=[],As=-1;function ni(t){return{current:t}}function Ie(t){0>As||(t.current=Ff[As],Ff[As]=null,As--)}function _e(t,e){As++,Ff[As]=t.current,t.current=e}var Gr={},Et=ni(Gr),Vt=ni(!1),Vi=Gr;function Gs(t,e){var n=t.type.contextTypes;if(!n)return Gr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ot(t){return t=t.childContextTypes,t!=null}function mc(){Ie(Vt),Ie(Et)}function Vy(t,e,n){if(Et.current!==Gr)throw Error(j(168));_e(Et,e),_e(Vt,n)}function PI(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(j(108,GP(t)||"Unknown",i));return Ne({},n,r)}function gc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Gr,Vi=Et.current,_e(Et,t),_e(Vt,Vt.current),!0}function Oy(t,e,n){var r=t.stateNode;if(!r)throw Error(j(169));n?(t=PI(t,e,Vi),r.__reactInternalMemoizedMergedChildContext=t,Ie(Vt),Ie(Et),_e(Et,t)):Ie(Vt),_e(Vt,n)}var Fn=null,oh=!1,Md=!1;function CI(t){Fn===null?Fn=[t]:Fn.push(t)}function lk(t){oh=!0,CI(t)}function ri(){if(!Md&&Fn!==null){Md=!0;var t=0,e=de;try{var n=Fn;for(de=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Fn=null,oh=!1}catch(i){throw Fn!==null&&(Fn=Fn.slice(t+1)),ZE(Xp,ri),i}finally{de=e,Md=!1}}return null}var Rs=[],Ps=0,_c=null,yc=0,Wt=[],Ht=0,Oi=null,Un=1,Bn="";function _i(t,e){Rs[Ps++]=yc,Rs[Ps++]=_c,_c=t,yc=e}function kI(t,e,n){Wt[Ht++]=Un,Wt[Ht++]=Bn,Wt[Ht++]=Oi,Oi=t;var r=Un;t=Bn;var i=32-on(r)-1;r&=~(1<<i),n+=1;var s=32-on(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Un=1<<32-on(e)+i|n<<i|r,Bn=s+t}else Un=1<<s|n<<i|r,Bn=t}function am(t){t.return!==null&&(_i(t,1),kI(t,1,0))}function lm(t){for(;t===_c;)_c=Rs[--Ps],Rs[Ps]=null,yc=Rs[--Ps],Rs[Ps]=null;for(;t===Oi;)Oi=Wt[--Ht],Wt[Ht]=null,Bn=Wt[--Ht],Wt[Ht]=null,Un=Wt[--Ht],Wt[Ht]=null}var jt=null,Ut=null,Ae=!1,sn=null;function xI(t,e){var n=Qt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Ly(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,jt=t,Ut=Lr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,jt=t,Ut=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Oi!==null?{id:Un,overflow:Bn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Qt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,jt=t,Ut=null,!0):!1;default:return!1}}function Uf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Bf(t){if(Ae){var e=Ut;if(e){var n=e;if(!Ly(t,e)){if(Uf(t))throw Error(j(418));e=Lr(n.nextSibling);var r=jt;e&&Ly(t,e)?xI(r,n):(t.flags=t.flags&-4097|2,Ae=!1,jt=t)}}else{if(Uf(t))throw Error(j(418));t.flags=t.flags&-4097|2,Ae=!1,jt=t}}}function My(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;jt=t}function _u(t){if(t!==jt)return!1;if(!Ae)return My(t),Ae=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Of(t.type,t.memoizedProps)),e&&(e=Ut)){if(Uf(t))throw bI(),Error(j(418));for(;e;)xI(t,e),e=Lr(e.nextSibling)}if(My(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(j(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ut=Lr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ut=null}}else Ut=jt?Lr(t.stateNode.nextSibling):null;return!0}function bI(){for(var t=Ut;t;)t=Lr(t.nextSibling)}function Ks(){Ut=jt=null,Ae=!1}function um(t){sn===null?sn=[t]:sn.push(t)}var uk=nr.ReactCurrentBatchConfig;function ta(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,t))}return t}function yu(t,e){throw t=Object.prototype.toString.call(e),Error(j(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Fy(t){var e=t._init;return e(t._payload)}function DI(t){function e(E,v){if(t){var w=E.deletions;w===null?(E.deletions=[v],E.flags|=16):w.push(v)}}function n(E,v){if(!t)return null;for(;v!==null;)e(E,v),v=v.sibling;return null}function r(E,v){for(E=new Map;v!==null;)v.key!==null?E.set(v.key,v):E.set(v.index,v),v=v.sibling;return E}function i(E,v){return E=Br(E,v),E.index=0,E.sibling=null,E}function s(E,v,w){return E.index=w,t?(w=E.alternate,w!==null?(w=w.index,w<v?(E.flags|=2,v):w):(E.flags|=2,v)):(E.flags|=1048576,v)}function o(E){return t&&E.alternate===null&&(E.flags|=2),E}function a(E,v,w,x){return v===null||v.tag!==6?(v=qd(w,E.mode,x),v.return=E,v):(v=i(v,w),v.return=E,v)}function l(E,v,w,x){var M=w.type;return M===ws?h(E,v,w.props.children,x,w.key):v!==null&&(v.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===gr&&Fy(M)===v.type)?(x=i(v,w.props),x.ref=ta(E,v,w),x.return=E,x):(x=Gu(w.type,w.key,w.props,null,E.mode,x),x.ref=ta(E,v,w),x.return=E,x)}function c(E,v,w,x){return v===null||v.tag!==4||v.stateNode.containerInfo!==w.containerInfo||v.stateNode.implementation!==w.implementation?(v=Gd(w,E.mode,x),v.return=E,v):(v=i(v,w.children||[]),v.return=E,v)}function h(E,v,w,x,M){return v===null||v.tag!==7?(v=xi(w,E.mode,x,M),v.return=E,v):(v=i(v,w),v.return=E,v)}function f(E,v,w){if(typeof v=="string"&&v!==""||typeof v=="number")return v=qd(""+v,E.mode,w),v.return=E,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case au:return w=Gu(v.type,v.key,v.props,null,E.mode,w),w.ref=ta(E,null,v),w.return=E,w;case vs:return v=Gd(v,E.mode,w),v.return=E,v;case gr:var x=v._init;return f(E,x(v._payload),w)}if(ha(v)||Jo(v))return v=xi(v,E.mode,w,null),v.return=E,v;yu(E,v)}return null}function m(E,v,w,x){var M=v!==null?v.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return M!==null?null:a(E,v,""+w,x);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case au:return w.key===M?l(E,v,w,x):null;case vs:return w.key===M?c(E,v,w,x):null;case gr:return M=w._init,m(E,v,M(w._payload),x)}if(ha(w)||Jo(w))return M!==null?null:h(E,v,w,x,null);yu(E,w)}return null}function _(E,v,w,x,M){if(typeof x=="string"&&x!==""||typeof x=="number")return E=E.get(w)||null,a(v,E,""+x,M);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case au:return E=E.get(x.key===null?w:x.key)||null,l(v,E,x,M);case vs:return E=E.get(x.key===null?w:x.key)||null,c(v,E,x,M);case gr:var F=x._init;return _(E,v,w,F(x._payload),M)}if(ha(x)||Jo(x))return E=E.get(w)||null,h(v,E,x,M,null);yu(v,x)}return null}function S(E,v,w,x){for(var M=null,F=null,I=v,y=v=0,T=null;I!==null&&y<w.length;y++){I.index>y?(T=I,I=null):T=I.sibling;var A=m(E,I,w[y],x);if(A===null){I===null&&(I=T);break}t&&I&&A.alternate===null&&e(E,I),v=s(A,v,y),F===null?M=A:F.sibling=A,F=A,I=T}if(y===w.length)return n(E,I),Ae&&_i(E,y),M;if(I===null){for(;y<w.length;y++)I=f(E,w[y],x),I!==null&&(v=s(I,v,y),F===null?M=I:F.sibling=I,F=I);return Ae&&_i(E,y),M}for(I=r(E,I);y<w.length;y++)T=_(I,E,y,w[y],x),T!==null&&(t&&T.alternate!==null&&I.delete(T.key===null?y:T.key),v=s(T,v,y),F===null?M=T:F.sibling=T,F=T);return t&&I.forEach(function(k){return e(E,k)}),Ae&&_i(E,y),M}function P(E,v,w,x){var M=Jo(w);if(typeof M!="function")throw Error(j(150));if(w=M.call(w),w==null)throw Error(j(151));for(var F=M=null,I=v,y=v=0,T=null,A=w.next();I!==null&&!A.done;y++,A=w.next()){I.index>y?(T=I,I=null):T=I.sibling;var k=m(E,I,A.value,x);if(k===null){I===null&&(I=T);break}t&&I&&k.alternate===null&&e(E,I),v=s(k,v,y),F===null?M=k:F.sibling=k,F=k,I=T}if(A.done)return n(E,I),Ae&&_i(E,y),M;if(I===null){for(;!A.done;y++,A=w.next())A=f(E,A.value,x),A!==null&&(v=s(A,v,y),F===null?M=A:F.sibling=A,F=A);return Ae&&_i(E,y),M}for(I=r(E,I);!A.done;y++,A=w.next())A=_(I,E,y,A.value,x),A!==null&&(t&&A.alternate!==null&&I.delete(A.key===null?y:A.key),v=s(A,v,y),F===null?M=A:F.sibling=A,F=A);return t&&I.forEach(function(N){return e(E,N)}),Ae&&_i(E,y),M}function C(E,v,w,x){if(typeof w=="object"&&w!==null&&w.type===ws&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case au:e:{for(var M=w.key,F=v;F!==null;){if(F.key===M){if(M=w.type,M===ws){if(F.tag===7){n(E,F.sibling),v=i(F,w.props.children),v.return=E,E=v;break e}}else if(F.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===gr&&Fy(M)===F.type){n(E,F.sibling),v=i(F,w.props),v.ref=ta(E,F,w),v.return=E,E=v;break e}n(E,F);break}else e(E,F);F=F.sibling}w.type===ws?(v=xi(w.props.children,E.mode,x,w.key),v.return=E,E=v):(x=Gu(w.type,w.key,w.props,null,E.mode,x),x.ref=ta(E,v,w),x.return=E,E=x)}return o(E);case vs:e:{for(F=w.key;v!==null;){if(v.key===F)if(v.tag===4&&v.stateNode.containerInfo===w.containerInfo&&v.stateNode.implementation===w.implementation){n(E,v.sibling),v=i(v,w.children||[]),v.return=E,E=v;break e}else{n(E,v);break}else e(E,v);v=v.sibling}v=Gd(w,E.mode,x),v.return=E,E=v}return o(E);case gr:return F=w._init,C(E,v,F(w._payload),x)}if(ha(w))return S(E,v,w,x);if(Jo(w))return P(E,v,w,x);yu(E,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,v!==null&&v.tag===6?(n(E,v.sibling),v=i(v,w),v.return=E,E=v):(n(E,v),v=qd(w,E.mode,x),v.return=E,E=v),o(E)):n(E,v)}return C}var Ws=DI(!0),NI=DI(!1),vc=ni(null),wc=null,Cs=null,cm=null;function hm(){cm=Cs=wc=null}function dm(t){var e=vc.current;Ie(vc),t._currentValue=e}function jf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ms(t,e){wc=t,cm=Cs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(xt=!0),t.firstContext=null)}function Yt(t){var e=t._currentValue;if(cm!==t)if(t={context:t,memoizedValue:e,next:null},Cs===null){if(wc===null)throw Error(j(308));Cs=t,wc.dependencies={lanes:0,firstContext:t}}else Cs=Cs.next=t;return e}var Ri=null;function fm(t){Ri===null?Ri=[t]:Ri.push(t)}function VI(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,fm(e)):(n.next=i.next,i.next=n),e.interleaved=n,Qn(t,r)}function Qn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var _r=!1;function pm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function OI(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Gn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Mr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,le&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Qn(t,n)}return i=r.interleaved,i===null?(e.next=e,fm(r)):(e.next=i.next,i.next=e),r.interleaved=e,Qn(t,n)}function Uu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Zp(t,n)}}function Uy(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ec(t,e,n,r){var i=t.updateQueue;_r=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=l))}if(s!==null){var f=i.baseState;o=0,h=c=l=null,a=s;do{var m=a.lane,_=a.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:_,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var S=t,P=a;switch(m=e,_=n,P.tag){case 1:if(S=P.payload,typeof S=="function"){f=S.call(_,f,m);break e}f=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=P.payload,m=typeof S=="function"?S.call(_,f,m):S,m==null)break e;f=Ne({},f,m);break e;case 2:_r=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else _={eventTime:_,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=_,l=f):h=h.next=_,o|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(h===null&&(l=f),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Mi|=o,t.lanes=o,t.memoizedState=f}}function By(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(j(191,i));i.call(r)}}}var wl={},vn=ni(wl),Wa=ni(wl),Ha=ni(wl);function Pi(t){if(t===wl)throw Error(j(174));return t}function mm(t,e){switch(_e(Ha,e),_e(Wa,t),_e(vn,wl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ef(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ef(e,t)}Ie(vn),_e(vn,e)}function Hs(){Ie(vn),Ie(Wa),Ie(Ha)}function LI(t){Pi(Ha.current);var e=Pi(vn.current),n=Ef(e,t.type);e!==n&&(_e(Wa,t),_e(vn,n))}function gm(t){Wa.current===t&&(Ie(vn),Ie(Wa))}var ke=ni(0);function Ic(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Fd=[];function _m(){for(var t=0;t<Fd.length;t++)Fd[t]._workInProgressVersionPrimary=null;Fd.length=0}var Bu=nr.ReactCurrentDispatcher,Ud=nr.ReactCurrentBatchConfig,Li=0,xe=null,We=null,Ze=null,Tc=!1,Aa=!1,Qa=0,ck=0;function pt(){throw Error(j(321))}function ym(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ln(t[n],e[n]))return!1;return!0}function vm(t,e,n,r,i,s){if(Li=s,xe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Bu.current=t===null||t.memoizedState===null?pk:mk,t=n(r,i),Aa){s=0;do{if(Aa=!1,Qa=0,25<=s)throw Error(j(301));s+=1,Ze=We=null,e.updateQueue=null,Bu.current=gk,t=n(r,i)}while(Aa)}if(Bu.current=Sc,e=We!==null&&We.next!==null,Li=0,Ze=We=xe=null,Tc=!1,e)throw Error(j(300));return t}function wm(){var t=Qa!==0;return Qa=0,t}function hn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ze===null?xe.memoizedState=Ze=t:Ze=Ze.next=t,Ze}function Xt(){if(We===null){var t=xe.alternate;t=t!==null?t.memoizedState:null}else t=We.next;var e=Ze===null?xe.memoizedState:Ze.next;if(e!==null)Ze=e,We=t;else{if(t===null)throw Error(j(310));We=t,t={memoizedState:We.memoizedState,baseState:We.baseState,baseQueue:We.baseQueue,queue:We.queue,next:null},Ze===null?xe.memoizedState=Ze=t:Ze=Ze.next=t}return Ze}function Ja(t,e){return typeof e=="function"?e(t):e}function Bd(t){var e=Xt(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=We,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var h=c.lane;if((Li&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=r):l=l.next=f,xe.lanes|=h,Mi|=h}c=c.next}while(c!==null&&c!==s);l===null?o=r:l.next=a,ln(r,e.memoizedState)||(xt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,xe.lanes|=s,Mi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function jd(t){var e=Xt(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);ln(s,e.memoizedState)||(xt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function MI(){}function FI(t,e){var n=xe,r=Xt(),i=e(),s=!ln(r.memoizedState,i);if(s&&(r.memoizedState=i,xt=!0),r=r.queue,Em(jI.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ze!==null&&Ze.memoizedState.tag&1){if(n.flags|=2048,Ya(9,BI.bind(null,n,r,i,e),void 0,null),tt===null)throw Error(j(349));Li&30||UI(n,e,i)}return i}function UI(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=xe.updateQueue,e===null?(e={lastEffect:null,stores:null},xe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function BI(t,e,n,r){e.value=n,e.getSnapshot=r,zI(e)&&$I(t)}function jI(t,e,n){return n(function(){zI(e)&&$I(t)})}function zI(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ln(t,n)}catch{return!0}}function $I(t){var e=Qn(t,1);e!==null&&an(e,t,1,-1)}function jy(t){var e=hn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ja,lastRenderedState:t},e.queue=t,t=t.dispatch=fk.bind(null,xe,t),[e.memoizedState,t]}function Ya(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=xe.updateQueue,e===null?(e={lastEffect:null,stores:null},xe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function qI(){return Xt().memoizedState}function ju(t,e,n,r){var i=hn();xe.flags|=t,i.memoizedState=Ya(1|e,n,void 0,r===void 0?null:r)}function ah(t,e,n,r){var i=Xt();r=r===void 0?null:r;var s=void 0;if(We!==null){var o=We.memoizedState;if(s=o.destroy,r!==null&&ym(r,o.deps)){i.memoizedState=Ya(e,n,s,r);return}}xe.flags|=t,i.memoizedState=Ya(1|e,n,s,r)}function zy(t,e){return ju(8390656,8,t,e)}function Em(t,e){return ah(2048,8,t,e)}function GI(t,e){return ah(4,2,t,e)}function KI(t,e){return ah(4,4,t,e)}function WI(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function HI(t,e,n){return n=n!=null?n.concat([t]):null,ah(4,4,WI.bind(null,e,t),n)}function Im(){}function QI(t,e){var n=Xt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ym(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function JI(t,e){var n=Xt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ym(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function YI(t,e,n){return Li&21?(ln(n,e)||(n=nI(),xe.lanes|=n,Mi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,xt=!0),t.memoizedState=n)}function hk(t,e){var n=de;de=n!==0&&4>n?n:4,t(!0);var r=Ud.transition;Ud.transition={};try{t(!1),e()}finally{de=n,Ud.transition=r}}function XI(){return Xt().memoizedState}function dk(t,e,n){var r=Ur(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ZI(t))eT(e,n);else if(n=VI(t,e,n,r),n!==null){var i=Rt();an(n,t,r,i),tT(n,e,r)}}function fk(t,e,n){var r=Ur(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ZI(t))eT(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,ln(a,o)){var l=e.interleaved;l===null?(i.next=i,fm(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=VI(t,e,i,r),n!==null&&(i=Rt(),an(n,t,r,i),tT(n,e,r))}}function ZI(t){var e=t.alternate;return t===xe||e!==null&&e===xe}function eT(t,e){Aa=Tc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function tT(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Zp(t,n)}}var Sc={readContext:Yt,useCallback:pt,useContext:pt,useEffect:pt,useImperativeHandle:pt,useInsertionEffect:pt,useLayoutEffect:pt,useMemo:pt,useReducer:pt,useRef:pt,useState:pt,useDebugValue:pt,useDeferredValue:pt,useTransition:pt,useMutableSource:pt,useSyncExternalStore:pt,useId:pt,unstable_isNewReconciler:!1},pk={readContext:Yt,useCallback:function(t,e){return hn().memoizedState=[t,e===void 0?null:e],t},useContext:Yt,useEffect:zy,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ju(4194308,4,WI.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ju(4194308,4,t,e)},useInsertionEffect:function(t,e){return ju(4,2,t,e)},useMemo:function(t,e){var n=hn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=hn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=dk.bind(null,xe,t),[r.memoizedState,t]},useRef:function(t){var e=hn();return t={current:t},e.memoizedState=t},useState:jy,useDebugValue:Im,useDeferredValue:function(t){return hn().memoizedState=t},useTransition:function(){var t=jy(!1),e=t[0];return t=hk.bind(null,t[1]),hn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=xe,i=hn();if(Ae){if(n===void 0)throw Error(j(407));n=n()}else{if(n=e(),tt===null)throw Error(j(349));Li&30||UI(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,zy(jI.bind(null,r,s,t),[t]),r.flags|=2048,Ya(9,BI.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=hn(),e=tt.identifierPrefix;if(Ae){var n=Bn,r=Un;n=(r&~(1<<32-on(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Qa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=ck++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},mk={readContext:Yt,useCallback:QI,useContext:Yt,useEffect:Em,useImperativeHandle:HI,useInsertionEffect:GI,useLayoutEffect:KI,useMemo:JI,useReducer:Bd,useRef:qI,useState:function(){return Bd(Ja)},useDebugValue:Im,useDeferredValue:function(t){var e=Xt();return YI(e,We.memoizedState,t)},useTransition:function(){var t=Bd(Ja)[0],e=Xt().memoizedState;return[t,e]},useMutableSource:MI,useSyncExternalStore:FI,useId:XI,unstable_isNewReconciler:!1},gk={readContext:Yt,useCallback:QI,useContext:Yt,useEffect:Em,useImperativeHandle:HI,useInsertionEffect:GI,useLayoutEffect:KI,useMemo:JI,useReducer:jd,useRef:qI,useState:function(){return jd(Ja)},useDebugValue:Im,useDeferredValue:function(t){var e=Xt();return We===null?e.memoizedState=t:YI(e,We.memoizedState,t)},useTransition:function(){var t=jd(Ja)[0],e=Xt().memoizedState;return[t,e]},useMutableSource:MI,useSyncExternalStore:FI,useId:XI,unstable_isNewReconciler:!1};function nn(t,e){if(t&&t.defaultProps){e=Ne({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function zf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ne({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var lh={isMounted:function(t){return(t=t._reactInternals)?Zi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Rt(),i=Ur(t),s=Gn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Mr(t,s,i),e!==null&&(an(e,t,i,r),Uu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Rt(),i=Ur(t),s=Gn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Mr(t,s,i),e!==null&&(an(e,t,i,r),Uu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Rt(),r=Ur(t),i=Gn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Mr(t,i,r),e!==null&&(an(e,t,r,n),Uu(e,t,r))}};function $y(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!$a(n,r)||!$a(i,s):!0}function nT(t,e,n){var r=!1,i=Gr,s=e.contextType;return typeof s=="object"&&s!==null?s=Yt(s):(i=Ot(e)?Vi:Et.current,r=e.contextTypes,s=(r=r!=null)?Gs(t,i):Gr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=lh,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function qy(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&lh.enqueueReplaceState(e,e.state,null)}function $f(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},pm(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Yt(s):(s=Ot(e)?Vi:Et.current,i.context=Gs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(zf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&lh.enqueueReplaceState(i,i.state,null),Ec(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Qs(t,e){try{var n="",r=e;do n+=qP(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function zd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function qf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var _k=typeof WeakMap=="function"?WeakMap:Map;function rT(t,e,n){n=Gn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Rc||(Rc=!0,ep=r),qf(t,e)},n}function iT(t,e,n){n=Gn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){qf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){qf(t,e),typeof r!="function"&&(Fr===null?Fr=new Set([this]):Fr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Gy(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new _k;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=bk.bind(null,t,e,n),e.then(t,t))}function Ky(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Wy(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Gn(-1,1),e.tag=2,Mr(n,e,1))),n.lanes|=1),t)}var yk=nr.ReactCurrentOwner,xt=!1;function At(t,e,n,r){e.child=t===null?NI(e,null,n,r):Ws(e,t.child,n,r)}function Hy(t,e,n,r,i){n=n.render;var s=e.ref;return Ms(e,i),r=vm(t,e,n,r,s,i),n=wm(),t!==null&&!xt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Jn(t,e,i)):(Ae&&n&&am(e),e.flags|=1,At(t,e,r,i),e.child)}function Qy(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!xm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,sT(t,e,s,r,i)):(t=Gu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:$a,n(o,r)&&t.ref===e.ref)return Jn(t,e,i)}return e.flags|=1,t=Br(s,r),t.ref=e.ref,t.return=e,e.child=t}function sT(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if($a(s,r)&&t.ref===e.ref)if(xt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(xt=!0);else return e.lanes=t.lanes,Jn(t,e,i)}return Gf(t,e,n,r,i)}function oT(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},_e(xs,Ft),Ft|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,_e(xs,Ft),Ft|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,_e(xs,Ft),Ft|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,_e(xs,Ft),Ft|=r;return At(t,e,i,n),e.child}function aT(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Gf(t,e,n,r,i){var s=Ot(n)?Vi:Et.current;return s=Gs(e,s),Ms(e,i),n=vm(t,e,n,r,s,i),r=wm(),t!==null&&!xt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Jn(t,e,i)):(Ae&&r&&am(e),e.flags|=1,At(t,e,n,i),e.child)}function Jy(t,e,n,r,i){if(Ot(n)){var s=!0;gc(e)}else s=!1;if(Ms(e,i),e.stateNode===null)zu(t,e),nT(e,n,r),$f(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Yt(c):(c=Ot(n)?Vi:Et.current,c=Gs(e,c));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&qy(e,o,r,c),_r=!1;var m=e.memoizedState;o.state=m,Ec(e,r,o,i),l=e.memoizedState,a!==r||m!==l||Vt.current||_r?(typeof h=="function"&&(zf(e,n,h,r),l=e.memoizedState),(a=_r||$y(e,n,a,r,m,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,OI(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:nn(e.type,a),o.props=c,f=e.pendingProps,m=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Yt(l):(l=Ot(n)?Vi:Et.current,l=Gs(e,l));var _=n.getDerivedStateFromProps;(h=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||m!==l)&&qy(e,o,r,l),_r=!1,m=e.memoizedState,o.state=m,Ec(e,r,o,i);var S=e.memoizedState;a!==f||m!==S||Vt.current||_r?(typeof _=="function"&&(zf(e,n,_,r),S=e.memoizedState),(c=_r||$y(e,n,c,r,m,S,l)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,S,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,S,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=S),o.props=r,o.state=S,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Kf(t,e,n,r,s,i)}function Kf(t,e,n,r,i,s){aT(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Oy(e,n,!1),Jn(t,e,s);r=e.stateNode,yk.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ws(e,t.child,null,s),e.child=Ws(e,null,a,s)):At(t,e,a,s),e.memoizedState=r.state,i&&Oy(e,n,!0),e.child}function lT(t){var e=t.stateNode;e.pendingContext?Vy(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Vy(t,e.context,!1),mm(t,e.containerInfo)}function Yy(t,e,n,r,i){return Ks(),um(i),e.flags|=256,At(t,e,n,r),e.child}var Wf={dehydrated:null,treeContext:null,retryLane:0};function Hf(t){return{baseLanes:t,cachePool:null,transitions:null}}function uT(t,e,n){var r=e.pendingProps,i=ke.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),_e(ke,i&1),t===null)return Bf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=hh(o,r,0,null),t=xi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Hf(n),e.memoizedState=Wf,t):Tm(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return vk(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Br(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Br(a,s):(s=xi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Hf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Wf,r}return s=t.child,t=s.sibling,r=Br(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Tm(t,e){return e=hh({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function vu(t,e,n,r){return r!==null&&um(r),Ws(e,t.child,null,n),t=Tm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function vk(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=zd(Error(j(422))),vu(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=hh({mode:"visible",children:r.children},i,0,null),s=xi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ws(e,t.child,null,o),e.child.memoizedState=Hf(o),e.memoizedState=Wf,s);if(!(e.mode&1))return vu(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(j(419)),r=zd(s,r,void 0),vu(t,e,o,r)}if(a=(o&t.childLanes)!==0,xt||a){if(r=tt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Qn(t,i),an(r,t,i,-1))}return km(),r=zd(Error(j(421))),vu(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Dk.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ut=Lr(i.nextSibling),jt=e,Ae=!0,sn=null,t!==null&&(Wt[Ht++]=Un,Wt[Ht++]=Bn,Wt[Ht++]=Oi,Un=t.id,Bn=t.overflow,Oi=e),e=Tm(e,r.children),e.flags|=4096,e)}function Xy(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),jf(t.return,e,n)}function $d(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function cT(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(At(t,e,r.children,n),r=ke.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Xy(t,n,e);else if(t.tag===19)Xy(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(_e(ke,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ic(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),$d(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ic(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}$d(e,!0,n,null,s);break;case"together":$d(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function zu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Jn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Mi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(j(153));if(e.child!==null){for(t=e.child,n=Br(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Br(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function wk(t,e,n){switch(e.tag){case 3:lT(e),Ks();break;case 5:LI(e);break;case 1:Ot(e.type)&&gc(e);break;case 4:mm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;_e(vc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(_e(ke,ke.current&1),e.flags|=128,null):n&e.child.childLanes?uT(t,e,n):(_e(ke,ke.current&1),t=Jn(t,e,n),t!==null?t.sibling:null);_e(ke,ke.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return cT(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),_e(ke,ke.current),r)break;return null;case 22:case 23:return e.lanes=0,oT(t,e,n)}return Jn(t,e,n)}var hT,Qf,dT,fT;hT=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Qf=function(){};dT=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Pi(vn.current);var s=null;switch(n){case"input":i=_f(t,i),r=_f(t,r),s=[];break;case"select":i=Ne({},i,{value:void 0}),r=Ne({},r,{value:void 0}),s=[];break;case"textarea":i=wf(t,i),r=wf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=pc)}If(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(La.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(La.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&we("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};fT=function(t,e,n,r){n!==r&&(e.flags|=4)};function na(t,e){if(!Ae)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function mt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Ek(t,e,n){var r=e.pendingProps;switch(lm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mt(e),null;case 1:return Ot(e.type)&&mc(),mt(e),null;case 3:return r=e.stateNode,Hs(),Ie(Vt),Ie(Et),_m(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(_u(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,sn!==null&&(rp(sn),sn=null))),Qf(t,e),mt(e),null;case 5:gm(e);var i=Pi(Ha.current);if(n=e.type,t!==null&&e.stateNode!=null)dT(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(j(166));return mt(e),null}if(t=Pi(vn.current),_u(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[dn]=e,r[Ka]=s,t=(e.mode&1)!==0,n){case"dialog":we("cancel",r),we("close",r);break;case"iframe":case"object":case"embed":we("load",r);break;case"video":case"audio":for(i=0;i<fa.length;i++)we(fa[i],r);break;case"source":we("error",r);break;case"img":case"image":case"link":we("error",r),we("load",r);break;case"details":we("toggle",r);break;case"input":ay(r,s),we("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},we("invalid",r);break;case"textarea":uy(r,s),we("invalid",r)}If(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&gu(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&gu(r.textContent,a,t),i=["children",""+a]):La.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&we("scroll",r)}switch(n){case"input":lu(r),ly(r,s,!0);break;case"textarea":lu(r),cy(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=pc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=jE(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[dn]=e,t[Ka]=r,hT(t,e,!1,!1),e.stateNode=t;e:{switch(o=Tf(n,r),n){case"dialog":we("cancel",t),we("close",t),i=r;break;case"iframe":case"object":case"embed":we("load",t),i=r;break;case"video":case"audio":for(i=0;i<fa.length;i++)we(fa[i],t);i=r;break;case"source":we("error",t),i=r;break;case"img":case"image":case"link":we("error",t),we("load",t),i=r;break;case"details":we("toggle",t),i=r;break;case"input":ay(t,r),i=_f(t,r),we("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ne({},r,{value:void 0}),we("invalid",t);break;case"textarea":uy(t,r),i=wf(t,r),we("invalid",t);break;default:i=r}If(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?qE(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&zE(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ma(t,l):typeof l=="number"&&Ma(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(La.hasOwnProperty(s)?l!=null&&s==="onScroll"&&we("scroll",t):l!=null&&Wp(t,s,l,o))}switch(n){case"input":lu(t),ly(t,r,!1);break;case"textarea":lu(t),cy(t);break;case"option":r.value!=null&&t.setAttribute("value",""+qr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ns(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ns(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=pc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return mt(e),null;case 6:if(t&&e.stateNode!=null)fT(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(j(166));if(n=Pi(Ha.current),Pi(vn.current),_u(e)){if(r=e.stateNode,n=e.memoizedProps,r[dn]=e,(s=r.nodeValue!==n)&&(t=jt,t!==null))switch(t.tag){case 3:gu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&gu(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[dn]=e,e.stateNode=r}return mt(e),null;case 13:if(Ie(ke),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ae&&Ut!==null&&e.mode&1&&!(e.flags&128))bI(),Ks(),e.flags|=98560,s=!1;else if(s=_u(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(j(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(j(317));s[dn]=e}else Ks(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;mt(e),s=!1}else sn!==null&&(rp(sn),sn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ke.current&1?Qe===0&&(Qe=3):km())),e.updateQueue!==null&&(e.flags|=4),mt(e),null);case 4:return Hs(),Qf(t,e),t===null&&qa(e.stateNode.containerInfo),mt(e),null;case 10:return dm(e.type._context),mt(e),null;case 17:return Ot(e.type)&&mc(),mt(e),null;case 19:if(Ie(ke),s=e.memoizedState,s===null)return mt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)na(s,!1);else{if(Qe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ic(t),o!==null){for(e.flags|=128,na(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return _e(ke,ke.current&1|2),e.child}t=t.sibling}s.tail!==null&&je()>Js&&(e.flags|=128,r=!0,na(s,!1),e.lanes=4194304)}else{if(!r)if(t=Ic(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),na(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ae)return mt(e),null}else 2*je()-s.renderingStartTime>Js&&n!==1073741824&&(e.flags|=128,r=!0,na(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=je(),e.sibling=null,n=ke.current,_e(ke,r?n&1|2:n&1),e):(mt(e),null);case 22:case 23:return Cm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ft&1073741824&&(mt(e),e.subtreeFlags&6&&(e.flags|=8192)):mt(e),null;case 24:return null;case 25:return null}throw Error(j(156,e.tag))}function Ik(t,e){switch(lm(e),e.tag){case 1:return Ot(e.type)&&mc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Hs(),Ie(Vt),Ie(Et),_m(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return gm(e),null;case 13:if(Ie(ke),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(j(340));Ks()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ie(ke),null;case 4:return Hs(),null;case 10:return dm(e.type._context),null;case 22:case 23:return Cm(),null;case 24:return null;default:return null}}var wu=!1,yt=!1,Tk=typeof WeakSet=="function"?WeakSet:Set,H=null;function ks(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Le(t,e,r)}else n.current=null}function Jf(t,e,n){try{n()}catch(r){Le(t,e,r)}}var Zy=!1;function Sk(t,e){if(Nf=hc,t=yI(),om(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,h=0,f=t,m=null;t:for(;;){for(var _;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(_=f.firstChild)!==null;)m=f,f=_;for(;;){if(f===t)break t;if(m===n&&++c===i&&(a=o),m===s&&++h===r&&(l=o),(_=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=_}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Vf={focusedElem:t,selectionRange:n},hc=!1,H=e;H!==null;)if(e=H,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,H=t;else for(;H!==null;){e=H;try{var S=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var P=S.memoizedProps,C=S.memoizedState,E=e.stateNode,v=E.getSnapshotBeforeUpdate(e.elementType===e.type?P:nn(e.type,P),C);E.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var w=e.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(x){Le(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,H=t;break}H=e.return}return S=Zy,Zy=!1,S}function Ra(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Jf(e,n,s)}i=i.next}while(i!==r)}}function uh(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Yf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function pT(t){var e=t.alternate;e!==null&&(t.alternate=null,pT(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[dn],delete e[Ka],delete e[Mf],delete e[ok],delete e[ak])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function mT(t){return t.tag===5||t.tag===3||t.tag===4}function ev(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||mT(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Xf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=pc));else if(r!==4&&(t=t.child,t!==null))for(Xf(t,e,n),t=t.sibling;t!==null;)Xf(t,e,n),t=t.sibling}function Zf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Zf(t,e,n),t=t.sibling;t!==null;)Zf(t,e,n),t=t.sibling}var st=null,rn=!1;function dr(t,e,n){for(n=n.child;n!==null;)gT(t,e,n),n=n.sibling}function gT(t,e,n){if(yn&&typeof yn.onCommitFiberUnmount=="function")try{yn.onCommitFiberUnmount(th,n)}catch{}switch(n.tag){case 5:yt||ks(n,e);case 6:var r=st,i=rn;st=null,dr(t,e,n),st=r,rn=i,st!==null&&(rn?(t=st,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):st.removeChild(n.stateNode));break;case 18:st!==null&&(rn?(t=st,n=n.stateNode,t.nodeType===8?Ld(t.parentNode,n):t.nodeType===1&&Ld(t,n),ja(t)):Ld(st,n.stateNode));break;case 4:r=st,i=rn,st=n.stateNode.containerInfo,rn=!0,dr(t,e,n),st=r,rn=i;break;case 0:case 11:case 14:case 15:if(!yt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Jf(n,e,o),i=i.next}while(i!==r)}dr(t,e,n);break;case 1:if(!yt&&(ks(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Le(n,e,a)}dr(t,e,n);break;case 21:dr(t,e,n);break;case 22:n.mode&1?(yt=(r=yt)||n.memoizedState!==null,dr(t,e,n),yt=r):dr(t,e,n);break;default:dr(t,e,n)}}function tv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Tk),e.forEach(function(r){var i=Nk.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function tn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:st=a.stateNode,rn=!1;break e;case 3:st=a.stateNode.containerInfo,rn=!0;break e;case 4:st=a.stateNode.containerInfo,rn=!0;break e}a=a.return}if(st===null)throw Error(j(160));gT(s,o,i),st=null,rn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){Le(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)_T(e,t),e=e.sibling}function _T(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(tn(e,t),cn(t),r&4){try{Ra(3,t,t.return),uh(3,t)}catch(P){Le(t,t.return,P)}try{Ra(5,t,t.return)}catch(P){Le(t,t.return,P)}}break;case 1:tn(e,t),cn(t),r&512&&n!==null&&ks(n,n.return);break;case 5:if(tn(e,t),cn(t),r&512&&n!==null&&ks(n,n.return),t.flags&32){var i=t.stateNode;try{Ma(i,"")}catch(P){Le(t,t.return,P)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&UE(i,s),Tf(a,o);var c=Tf(a,s);for(o=0;o<l.length;o+=2){var h=l[o],f=l[o+1];h==="style"?qE(i,f):h==="dangerouslySetInnerHTML"?zE(i,f):h==="children"?Ma(i,f):Wp(i,h,f,c)}switch(a){case"input":yf(i,s);break;case"textarea":BE(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var _=s.value;_!=null?Ns(i,!!s.multiple,_,!1):m!==!!s.multiple&&(s.defaultValue!=null?Ns(i,!!s.multiple,s.defaultValue,!0):Ns(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ka]=s}catch(P){Le(t,t.return,P)}}break;case 6:if(tn(e,t),cn(t),r&4){if(t.stateNode===null)throw Error(j(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(P){Le(t,t.return,P)}}break;case 3:if(tn(e,t),cn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ja(e.containerInfo)}catch(P){Le(t,t.return,P)}break;case 4:tn(e,t),cn(t);break;case 13:tn(e,t),cn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Rm=je())),r&4&&tv(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(yt=(c=yt)||h,tn(e,t),yt=c):tn(e,t),cn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(H=t,h=t.child;h!==null;){for(f=H=h;H!==null;){switch(m=H,_=m.child,m.tag){case 0:case 11:case 14:case 15:Ra(4,m,m.return);break;case 1:ks(m,m.return);var S=m.stateNode;if(typeof S.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,S.props=e.memoizedProps,S.state=e.memoizedState,S.componentWillUnmount()}catch(P){Le(r,n,P)}}break;case 5:ks(m,m.return);break;case 22:if(m.memoizedState!==null){rv(f);continue}}_!==null?(_.return=m,H=_):rv(f)}h=h.sibling}e:for(h=null,f=t;;){if(f.tag===5){if(h===null){h=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=$E("display",o))}catch(P){Le(t,t.return,P)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(P){Le(t,t.return,P)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:tn(e,t),cn(t),r&4&&tv(t);break;case 21:break;default:tn(e,t),cn(t)}}function cn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(mT(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ma(i,""),r.flags&=-33);var s=ev(t);Zf(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=ev(t);Xf(t,a,o);break;default:throw Error(j(161))}}catch(l){Le(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Ak(t,e,n){H=t,yT(t)}function yT(t,e,n){for(var r=(t.mode&1)!==0;H!==null;){var i=H,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||wu;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||yt;a=wu;var c=yt;if(wu=o,(yt=l)&&!c)for(H=i;H!==null;)o=H,l=o.child,o.tag===22&&o.memoizedState!==null?iv(i):l!==null?(l.return=o,H=l):iv(i);for(;s!==null;)H=s,yT(s),s=s.sibling;H=i,wu=a,yt=c}nv(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,H=s):nv(t)}}function nv(t){for(;H!==null;){var e=H;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:yt||uh(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!yt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:nn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&By(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}By(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&ja(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}yt||e.flags&512&&Yf(e)}catch(m){Le(e,e.return,m)}}if(e===t){H=null;break}if(n=e.sibling,n!==null){n.return=e.return,H=n;break}H=e.return}}function rv(t){for(;H!==null;){var e=H;if(e===t){H=null;break}var n=e.sibling;if(n!==null){n.return=e.return,H=n;break}H=e.return}}function iv(t){for(;H!==null;){var e=H;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{uh(4,e)}catch(l){Le(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Le(e,i,l)}}var s=e.return;try{Yf(e)}catch(l){Le(e,s,l)}break;case 5:var o=e.return;try{Yf(e)}catch(l){Le(e,o,l)}}}catch(l){Le(e,e.return,l)}if(e===t){H=null;break}var a=e.sibling;if(a!==null){a.return=e.return,H=a;break}H=e.return}}var Rk=Math.ceil,Ac=nr.ReactCurrentDispatcher,Sm=nr.ReactCurrentOwner,Jt=nr.ReactCurrentBatchConfig,le=0,tt=null,Ke=null,lt=0,Ft=0,xs=ni(0),Qe=0,Xa=null,Mi=0,ch=0,Am=0,Pa=null,kt=null,Rm=0,Js=1/0,Mn=null,Rc=!1,ep=null,Fr=null,Eu=!1,xr=null,Pc=0,Ca=0,tp=null,$u=-1,qu=0;function Rt(){return le&6?je():$u!==-1?$u:$u=je()}function Ur(t){return t.mode&1?le&2&&lt!==0?lt&-lt:uk.transition!==null?(qu===0&&(qu=nI()),qu):(t=de,t!==0||(t=window.event,t=t===void 0?16:uI(t.type)),t):1}function an(t,e,n,r){if(50<Ca)throw Ca=0,tp=null,Error(j(185));_l(t,n,r),(!(le&2)||t!==tt)&&(t===tt&&(!(le&2)&&(ch|=n),Qe===4&&vr(t,lt)),Lt(t,r),n===1&&le===0&&!(e.mode&1)&&(Js=je()+500,oh&&ri()))}function Lt(t,e){var n=t.callbackNode;uC(t,e);var r=cc(t,t===tt?lt:0);if(r===0)n!==null&&fy(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&fy(n),e===1)t.tag===0?lk(sv.bind(null,t)):CI(sv.bind(null,t)),ik(function(){!(le&6)&&ri()}),n=null;else{switch(rI(r)){case 1:n=Xp;break;case 4:n=eI;break;case 16:n=uc;break;case 536870912:n=tI;break;default:n=uc}n=RT(n,vT.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function vT(t,e){if($u=-1,qu=0,le&6)throw Error(j(327));var n=t.callbackNode;if(Fs()&&t.callbackNode!==n)return null;var r=cc(t,t===tt?lt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Cc(t,r);else{e=r;var i=le;le|=2;var s=ET();(tt!==t||lt!==e)&&(Mn=null,Js=je()+500,ki(t,e));do try{kk();break}catch(a){wT(t,a)}while(!0);hm(),Ac.current=s,le=i,Ke!==null?e=0:(tt=null,lt=0,e=Qe)}if(e!==0){if(e===2&&(i=Cf(t),i!==0&&(r=i,e=np(t,i))),e===1)throw n=Xa,ki(t,0),vr(t,r),Lt(t,je()),n;if(e===6)vr(t,r);else{if(i=t.current.alternate,!(r&30)&&!Pk(i)&&(e=Cc(t,r),e===2&&(s=Cf(t),s!==0&&(r=s,e=np(t,s))),e===1))throw n=Xa,ki(t,0),vr(t,r),Lt(t,je()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(j(345));case 2:yi(t,kt,Mn);break;case 3:if(vr(t,r),(r&130023424)===r&&(e=Rm+500-je(),10<e)){if(cc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Rt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Lf(yi.bind(null,t,kt,Mn),e);break}yi(t,kt,Mn);break;case 4:if(vr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-on(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=je()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Rk(r/1960))-r,10<r){t.timeoutHandle=Lf(yi.bind(null,t,kt,Mn),r);break}yi(t,kt,Mn);break;case 5:yi(t,kt,Mn);break;default:throw Error(j(329))}}}return Lt(t,je()),t.callbackNode===n?vT.bind(null,t):null}function np(t,e){var n=Pa;return t.current.memoizedState.isDehydrated&&(ki(t,e).flags|=256),t=Cc(t,e),t!==2&&(e=kt,kt=n,e!==null&&rp(e)),t}function rp(t){kt===null?kt=t:kt.push.apply(kt,t)}function Pk(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!ln(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function vr(t,e){for(e&=~Am,e&=~ch,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-on(e),r=1<<n;t[n]=-1,e&=~r}}function sv(t){if(le&6)throw Error(j(327));Fs();var e=cc(t,0);if(!(e&1))return Lt(t,je()),null;var n=Cc(t,e);if(t.tag!==0&&n===2){var r=Cf(t);r!==0&&(e=r,n=np(t,r))}if(n===1)throw n=Xa,ki(t,0),vr(t,e),Lt(t,je()),n;if(n===6)throw Error(j(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,yi(t,kt,Mn),Lt(t,je()),null}function Pm(t,e){var n=le;le|=1;try{return t(e)}finally{le=n,le===0&&(Js=je()+500,oh&&ri())}}function Fi(t){xr!==null&&xr.tag===0&&!(le&6)&&Fs();var e=le;le|=1;var n=Jt.transition,r=de;try{if(Jt.transition=null,de=1,t)return t()}finally{de=r,Jt.transition=n,le=e,!(le&6)&&ri()}}function Cm(){Ft=xs.current,Ie(xs)}function ki(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,rk(n)),Ke!==null)for(n=Ke.return;n!==null;){var r=n;switch(lm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&mc();break;case 3:Hs(),Ie(Vt),Ie(Et),_m();break;case 5:gm(r);break;case 4:Hs();break;case 13:Ie(ke);break;case 19:Ie(ke);break;case 10:dm(r.type._context);break;case 22:case 23:Cm()}n=n.return}if(tt=t,Ke=t=Br(t.current,null),lt=Ft=e,Qe=0,Xa=null,Am=ch=Mi=0,kt=Pa=null,Ri!==null){for(e=0;e<Ri.length;e++)if(n=Ri[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Ri=null}return t}function wT(t,e){do{var n=Ke;try{if(hm(),Bu.current=Sc,Tc){for(var r=xe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Tc=!1}if(Li=0,Ze=We=xe=null,Aa=!1,Qa=0,Sm.current=null,n===null||n.return===null){Qe=1,Xa=e,Ke=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=lt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=a,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var _=Ky(o);if(_!==null){_.flags&=-257,Wy(_,o,a,s,e),_.mode&1&&Gy(s,c,e),e=_,l=c;var S=e.updateQueue;if(S===null){var P=new Set;P.add(l),e.updateQueue=P}else S.add(l);break e}else{if(!(e&1)){Gy(s,c,e),km();break e}l=Error(j(426))}}else if(Ae&&a.mode&1){var C=Ky(o);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Wy(C,o,a,s,e),um(Qs(l,a));break e}}s=l=Qs(l,a),Qe!==4&&(Qe=2),Pa===null?Pa=[s]:Pa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var E=rT(s,l,e);Uy(s,E);break e;case 1:a=l;var v=s.type,w=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&(Fr===null||!Fr.has(w)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=iT(s,a,e);Uy(s,x);break e}}s=s.return}while(s!==null)}TT(n)}catch(M){e=M,Ke===n&&n!==null&&(Ke=n=n.return);continue}break}while(!0)}function ET(){var t=Ac.current;return Ac.current=Sc,t===null?Sc:t}function km(){(Qe===0||Qe===3||Qe===2)&&(Qe=4),tt===null||!(Mi&268435455)&&!(ch&268435455)||vr(tt,lt)}function Cc(t,e){var n=le;le|=2;var r=ET();(tt!==t||lt!==e)&&(Mn=null,ki(t,e));do try{Ck();break}catch(i){wT(t,i)}while(!0);if(hm(),le=n,Ac.current=r,Ke!==null)throw Error(j(261));return tt=null,lt=0,Qe}function Ck(){for(;Ke!==null;)IT(Ke)}function kk(){for(;Ke!==null&&!eC();)IT(Ke)}function IT(t){var e=AT(t.alternate,t,Ft);t.memoizedProps=t.pendingProps,e===null?TT(t):Ke=e,Sm.current=null}function TT(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Ik(n,e),n!==null){n.flags&=32767,Ke=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Qe=6,Ke=null;return}}else if(n=Ek(n,e,Ft),n!==null){Ke=n;return}if(e=e.sibling,e!==null){Ke=e;return}Ke=e=t}while(e!==null);Qe===0&&(Qe=5)}function yi(t,e,n){var r=de,i=Jt.transition;try{Jt.transition=null,de=1,xk(t,e,n,r)}finally{Jt.transition=i,de=r}return null}function xk(t,e,n,r){do Fs();while(xr!==null);if(le&6)throw Error(j(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(j(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(cC(t,s),t===tt&&(Ke=tt=null,lt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Eu||(Eu=!0,RT(uc,function(){return Fs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Jt.transition,Jt.transition=null;var o=de;de=1;var a=le;le|=4,Sm.current=null,Sk(t,n),_T(n,t),JC(Vf),hc=!!Nf,Vf=Nf=null,t.current=n,Ak(n),tC(),le=a,de=o,Jt.transition=s}else t.current=n;if(Eu&&(Eu=!1,xr=t,Pc=i),s=t.pendingLanes,s===0&&(Fr=null),iC(n.stateNode),Lt(t,je()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Rc)throw Rc=!1,t=ep,ep=null,t;return Pc&1&&t.tag!==0&&Fs(),s=t.pendingLanes,s&1?t===tp?Ca++:(Ca=0,tp=t):Ca=0,ri(),null}function Fs(){if(xr!==null){var t=rI(Pc),e=Jt.transition,n=de;try{if(Jt.transition=null,de=16>t?16:t,xr===null)var r=!1;else{if(t=xr,xr=null,Pc=0,le&6)throw Error(j(331));var i=le;for(le|=4,H=t.current;H!==null;){var s=H,o=s.child;if(H.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(H=c;H!==null;){var h=H;switch(h.tag){case 0:case 11:case 15:Ra(8,h,s)}var f=h.child;if(f!==null)f.return=h,H=f;else for(;H!==null;){h=H;var m=h.sibling,_=h.return;if(pT(h),h===c){H=null;break}if(m!==null){m.return=_,H=m;break}H=_}}}var S=s.alternate;if(S!==null){var P=S.child;if(P!==null){S.child=null;do{var C=P.sibling;P.sibling=null,P=C}while(P!==null)}}H=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,H=o;else e:for(;H!==null;){if(s=H,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ra(9,s,s.return)}var E=s.sibling;if(E!==null){E.return=s.return,H=E;break e}H=s.return}}var v=t.current;for(H=v;H!==null;){o=H;var w=o.child;if(o.subtreeFlags&2064&&w!==null)w.return=o,H=w;else e:for(o=v;H!==null;){if(a=H,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:uh(9,a)}}catch(M){Le(a,a.return,M)}if(a===o){H=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,H=x;break e}H=a.return}}if(le=i,ri(),yn&&typeof yn.onPostCommitFiberRoot=="function")try{yn.onPostCommitFiberRoot(th,t)}catch{}r=!0}return r}finally{de=n,Jt.transition=e}}return!1}function ov(t,e,n){e=Qs(n,e),e=rT(t,e,1),t=Mr(t,e,1),e=Rt(),t!==null&&(_l(t,1,e),Lt(t,e))}function Le(t,e,n){if(t.tag===3)ov(t,t,n);else for(;e!==null;){if(e.tag===3){ov(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Fr===null||!Fr.has(r))){t=Qs(n,t),t=iT(e,t,1),e=Mr(e,t,1),t=Rt(),e!==null&&(_l(e,1,t),Lt(e,t));break}}e=e.return}}function bk(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Rt(),t.pingedLanes|=t.suspendedLanes&n,tt===t&&(lt&n)===n&&(Qe===4||Qe===3&&(lt&130023424)===lt&&500>je()-Rm?ki(t,0):Am|=n),Lt(t,e)}function ST(t,e){e===0&&(t.mode&1?(e=hu,hu<<=1,!(hu&130023424)&&(hu=4194304)):e=1);var n=Rt();t=Qn(t,e),t!==null&&(_l(t,e,n),Lt(t,n))}function Dk(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),ST(t,n)}function Nk(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(e),ST(t,n)}var AT;AT=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Vt.current)xt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return xt=!1,wk(t,e,n);xt=!!(t.flags&131072)}else xt=!1,Ae&&e.flags&1048576&&kI(e,yc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;zu(t,e),t=e.pendingProps;var i=Gs(e,Et.current);Ms(e,n),i=vm(null,e,r,t,i,n);var s=wm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ot(r)?(s=!0,gc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,pm(e),i.updater=lh,e.stateNode=i,i._reactInternals=e,$f(e,r,t,n),e=Kf(null,e,r,!0,s,n)):(e.tag=0,Ae&&s&&am(e),At(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(zu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Ok(r),t=nn(r,t),i){case 0:e=Gf(null,e,r,t,n);break e;case 1:e=Jy(null,e,r,t,n);break e;case 11:e=Hy(null,e,r,t,n);break e;case 14:e=Qy(null,e,r,nn(r.type,t),n);break e}throw Error(j(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nn(r,i),Gf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nn(r,i),Jy(t,e,r,i,n);case 3:e:{if(lT(e),t===null)throw Error(j(387));r=e.pendingProps,s=e.memoizedState,i=s.element,OI(t,e),Ec(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Qs(Error(j(423)),e),e=Yy(t,e,r,n,i);break e}else if(r!==i){i=Qs(Error(j(424)),e),e=Yy(t,e,r,n,i);break e}else for(Ut=Lr(e.stateNode.containerInfo.firstChild),jt=e,Ae=!0,sn=null,n=NI(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ks(),r===i){e=Jn(t,e,n);break e}At(t,e,r,n)}e=e.child}return e;case 5:return LI(e),t===null&&Bf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Of(r,i)?o=null:s!==null&&Of(r,s)&&(e.flags|=32),aT(t,e),At(t,e,o,n),e.child;case 6:return t===null&&Bf(e),null;case 13:return uT(t,e,n);case 4:return mm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ws(e,null,r,n):At(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nn(r,i),Hy(t,e,r,i,n);case 7:return At(t,e,e.pendingProps,n),e.child;case 8:return At(t,e,e.pendingProps.children,n),e.child;case 12:return At(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,_e(vc,r._currentValue),r._currentValue=o,s!==null)if(ln(s.value,o)){if(s.children===i.children&&!Vt.current){e=Jn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Gn(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),jf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(j(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),jf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}At(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ms(e,n),i=Yt(i),r=r(i),e.flags|=1,At(t,e,r,n),e.child;case 14:return r=e.type,i=nn(r,e.pendingProps),i=nn(r.type,i),Qy(t,e,r,i,n);case 15:return sT(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nn(r,i),zu(t,e),e.tag=1,Ot(r)?(t=!0,gc(e)):t=!1,Ms(e,n),nT(e,r,i),$f(e,r,i,n),Kf(null,e,r,!0,t,n);case 19:return cT(t,e,n);case 22:return oT(t,e,n)}throw Error(j(156,e.tag))};function RT(t,e){return ZE(t,e)}function Vk(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qt(t,e,n,r){return new Vk(t,e,n,r)}function xm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ok(t){if(typeof t=="function")return xm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Qp)return 11;if(t===Jp)return 14}return 2}function Br(t,e){var n=t.alternate;return n===null?(n=Qt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Gu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")xm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ws:return xi(n.children,i,s,e);case Hp:o=8,i|=8;break;case ff:return t=Qt(12,n,e,i|2),t.elementType=ff,t.lanes=s,t;case pf:return t=Qt(13,n,e,i),t.elementType=pf,t.lanes=s,t;case mf:return t=Qt(19,n,e,i),t.elementType=mf,t.lanes=s,t;case LE:return hh(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case VE:o=10;break e;case OE:o=9;break e;case Qp:o=11;break e;case Jp:o=14;break e;case gr:o=16,r=null;break e}throw Error(j(130,t==null?t:typeof t,""))}return e=Qt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function xi(t,e,n,r){return t=Qt(7,t,r,e),t.lanes=n,t}function hh(t,e,n,r){return t=Qt(22,t,r,e),t.elementType=LE,t.lanes=n,t.stateNode={isHidden:!1},t}function qd(t,e,n){return t=Qt(6,t,null,e),t.lanes=n,t}function Gd(t,e,n){return e=Qt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Lk(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ad(0),this.expirationTimes=Ad(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ad(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function bm(t,e,n,r,i,s,o,a,l){return t=new Lk(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Qt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},pm(s),t}function Mk(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:vs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function PT(t){if(!t)return Gr;t=t._reactInternals;e:{if(Zi(t)!==t||t.tag!==1)throw Error(j(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ot(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(j(171))}if(t.tag===1){var n=t.type;if(Ot(n))return PI(t,n,e)}return e}function CT(t,e,n,r,i,s,o,a,l){return t=bm(n,r,!0,t,i,s,o,a,l),t.context=PT(null),n=t.current,r=Rt(),i=Ur(n),s=Gn(r,i),s.callback=e??null,Mr(n,s,i),t.current.lanes=i,_l(t,i,r),Lt(t,r),t}function dh(t,e,n,r){var i=e.current,s=Rt(),o=Ur(i);return n=PT(n),e.context===null?e.context=n:e.pendingContext=n,e=Gn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Mr(i,e,o),t!==null&&(an(t,i,o,s),Uu(t,i,o)),o}function kc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function av(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Dm(t,e){av(t,e),(t=t.alternate)&&av(t,e)}function Fk(){return null}var kT=typeof reportError=="function"?reportError:function(t){console.error(t)};function Nm(t){this._internalRoot=t}fh.prototype.render=Nm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(j(409));dh(t,e,null,null)};fh.prototype.unmount=Nm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Fi(function(){dh(null,t,null,null)}),e[Hn]=null}};function fh(t){this._internalRoot=t}fh.prototype.unstable_scheduleHydration=function(t){if(t){var e=oI();t={blockedOn:null,target:t,priority:e};for(var n=0;n<yr.length&&e!==0&&e<yr[n].priority;n++);yr.splice(n,0,t),n===0&&lI(t)}};function Vm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ph(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function lv(){}function Uk(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=kc(o);s.call(c)}}var o=CT(e,r,t,0,null,!1,!1,"",lv);return t._reactRootContainer=o,t[Hn]=o.current,qa(t.nodeType===8?t.parentNode:t),Fi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=kc(l);a.call(c)}}var l=bm(t,0,!1,null,null,!1,!1,"",lv);return t._reactRootContainer=l,t[Hn]=l.current,qa(t.nodeType===8?t.parentNode:t),Fi(function(){dh(e,l,n,r)}),l}function mh(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=kc(o);a.call(l)}}dh(e,o,t,i)}else o=Uk(n,e,t,i,r);return kc(o)}iI=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=da(e.pendingLanes);n!==0&&(Zp(e,n|1),Lt(e,je()),!(le&6)&&(Js=je()+500,ri()))}break;case 13:Fi(function(){var r=Qn(t,1);if(r!==null){var i=Rt();an(r,t,1,i)}}),Dm(t,1)}};em=function(t){if(t.tag===13){var e=Qn(t,134217728);if(e!==null){var n=Rt();an(e,t,134217728,n)}Dm(t,134217728)}};sI=function(t){if(t.tag===13){var e=Ur(t),n=Qn(t,e);if(n!==null){var r=Rt();an(n,t,e,r)}Dm(t,e)}};oI=function(){return de};aI=function(t,e){var n=de;try{return de=t,e()}finally{de=n}};Af=function(t,e,n){switch(e){case"input":if(yf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=sh(r);if(!i)throw Error(j(90));FE(r),yf(r,i)}}}break;case"textarea":BE(t,n);break;case"select":e=n.value,e!=null&&Ns(t,!!n.multiple,e,!1)}};WE=Pm;HE=Fi;var Bk={usingClientEntryPoint:!1,Events:[vl,Ss,sh,GE,KE,Pm]},ra={findFiberByHostInstance:Ai,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},jk={bundleType:ra.bundleType,version:ra.version,rendererPackageName:ra.rendererPackageName,rendererConfig:ra.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:nr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=YE(t),t===null?null:t.stateNode},findFiberByHostInstance:ra.findFiberByHostInstance||Fk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Iu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Iu.isDisabled&&Iu.supportsFiber)try{th=Iu.inject(jk),yn=Iu}catch{}}qt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Bk;qt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vm(e))throw Error(j(200));return Mk(t,e,null,n)};qt.createRoot=function(t,e){if(!Vm(t))throw Error(j(299));var n=!1,r="",i=kT;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=bm(t,1,!1,null,null,n,!1,r,i),t[Hn]=e.current,qa(t.nodeType===8?t.parentNode:t),new Nm(e)};qt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(j(188)):(t=Object.keys(t).join(","),Error(j(268,t)));return t=YE(e),t=t===null?null:t.stateNode,t};qt.flushSync=function(t){return Fi(t)};qt.hydrate=function(t,e,n){if(!ph(e))throw Error(j(200));return mh(null,t,e,!0,n)};qt.hydrateRoot=function(t,e,n){if(!Vm(t))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=kT;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=CT(e,null,t,1,n??null,i,!1,s,o),t[Hn]=e.current,qa(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new fh(e)};qt.render=function(t,e,n){if(!ph(e))throw Error(j(200));return mh(null,t,e,!1,n)};qt.unmountComponentAtNode=function(t){if(!ph(t))throw Error(j(40));return t._reactRootContainer?(Fi(function(){mh(null,null,t,!1,function(){t._reactRootContainer=null,t[Hn]=null})}),!0):!1};qt.unstable_batchedUpdates=Pm;qt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!ph(n))throw Error(j(200));if(t==null||t._reactInternals===void 0)throw Error(j(38));return mh(t,e,n,!1,r)};qt.version="18.3.1-next-f1338f8080-20240426";function xT(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(xT)}catch(t){console.error(t)}}xT(),xE.exports=qt;var zk=xE.exports,uv=zk;hf.createRoot=uv.createRoot,hf.hydrateRoot=uv.hydrateRoot;let $k={data:""},qk=t=>{if(typeof window=="object"){let e=(t?t.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return e.nonce=window.__nonce__,e.parentNode||(t||document.head).appendChild(e),e.firstChild}return t||$k},Gk=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Kk=/\/\*[^]*?\*\/|  +/g,cv=/\n+/g,wr=(t,e)=>{let n="",r="",i="";for(let s in t){let o=t[s];s[0]=="@"?s[1]=="i"?n=s+" "+o+";":r+=s[1]=="f"?wr(o,s):s+"{"+wr(o,s[1]=="k"?"":e)+"}":typeof o=="object"?r+=wr(o,e?e.replace(/([^,])+/g,a=>s.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,a):a?a+" "+l:l)):s):o!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=wr.p?wr.p(s,o):s+":"+o+";")}return n+(e&&i?e+"{"+i+"}":i)+r},Ln={},bT=t=>{if(typeof t=="object"){let e="";for(let n in t)e+=n+bT(t[n]);return e}return t},Wk=(t,e,n,r,i)=>{let s=bT(t),o=Ln[s]||(Ln[s]=(l=>{let c=0,h=11;for(;c<l.length;)h=101*h+l.charCodeAt(c++)>>>0;return"go"+h})(s));if(!Ln[o]){let l=s!==t?t:(c=>{let h,f,m=[{}];for(;h=Gk.exec(c.replace(Kk,""));)h[4]?m.shift():h[3]?(f=h[3].replace(cv," ").trim(),m.unshift(m[0][f]=m[0][f]||{})):m[0][h[1]]=h[2].replace(cv," ").trim();return m[0]})(t);Ln[o]=wr(i?{["@keyframes "+o]:l}:l,n?"":"."+o)}let a=n&&Ln.g?Ln.g:null;return n&&(Ln.g=Ln[o]),((l,c,h,f)=>{f?c.data=c.data.replace(f,l):c.data.indexOf(l)===-1&&(c.data=h?l+c.data:c.data+l)})(Ln[o],e,r,a),o},Hk=(t,e,n)=>t.reduce((r,i,s)=>{let o=e[s];if(o&&o.call){let a=o(n),l=a&&a.props&&a.props.className||/^go/.test(a)&&a;o=l?"."+l:a&&typeof a=="object"?a.props?"":wr(a,""):a===!1?"":a}return r+i+(o??"")},"");function gh(t){let e=this||{},n=t.call?t(e.p):t;return Wk(n.unshift?n.raw?Hk(n,[].slice.call(arguments,1),e.p):n.reduce((r,i)=>Object.assign(r,i&&i.call?i(e.p):i),{}):n,qk(e.target),e.g,e.o,e.k)}let DT,ip,sp;gh.bind({g:1});let Yn=gh.bind({k:1});function Qk(t,e,n,r){wr.p=e,DT=t,ip=n,sp=r}function ii(t,e){let n=this||{};return function(){let r=arguments;function i(s,o){let a=Object.assign({},s),l=a.className||i.className;n.p=Object.assign({theme:ip&&ip()},a),n.o=/ *go\d+/.test(l),a.className=gh.apply(n,r)+(l?" "+l:"");let c=t;return t[0]&&(c=a.as||t,delete a.as),sp&&c[0]&&sp(a),DT(c,a)}return i}}var Jk=t=>typeof t=="function",xc=(t,e)=>Jk(t)?t(e):t,Yk=(()=>{let t=0;return()=>(++t).toString()})(),NT=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),Xk=20,Om="default",VT=(t,e)=>{let{toastLimit:n}=t.settings;switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,n)};case 1:return{...t,toasts:t.toasts.map(o=>o.id===e.toast.id?{...o,...e.toast}:o)};case 2:let{toast:r}=e;return VT(t,{type:t.toasts.find(o=>o.id===r.id)?1:0,toast:r});case 3:let{toastId:i}=e;return{...t,toasts:t.toasts.map(o=>o.id===i||i===void 0?{...o,dismissed:!0,visible:!1}:o)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(o=>o.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let s=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(o=>({...o,pauseDuration:o.pauseDuration+s}))}}},Ku=[],OT={toasts:[],pausedAt:void 0,settings:{toastLimit:Xk}},fn={},LT=(t,e=Om)=>{fn[e]=VT(fn[e]||OT,t),Ku.forEach(([n,r])=>{n===e&&r(fn[e])})},MT=t=>Object.keys(fn).forEach(e=>LT(t,e)),Zk=t=>Object.keys(fn).find(e=>fn[e].toasts.some(n=>n.id===t)),_h=(t=Om)=>e=>{LT(e,t)},e1={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},t1=(t={},e=Om)=>{let[n,r]=L.useState(fn[e]||OT),i=L.useRef(fn[e]);L.useEffect(()=>(i.current!==fn[e]&&r(fn[e]),Ku.push([e,r]),()=>{let o=Ku.findIndex(([a])=>a===e);o>-1&&Ku.splice(o,1)}),[e]);let s=n.toasts.map(o=>{var a,l,c;return{...t,...t[o.type],...o,removeDelay:o.removeDelay||((a=t[o.type])==null?void 0:a.removeDelay)||(t==null?void 0:t.removeDelay),duration:o.duration||((l=t[o.type])==null?void 0:l.duration)||(t==null?void 0:t.duration)||e1[o.type],style:{...t.style,...(c=t[o.type])==null?void 0:c.style,...o.style}}});return{...n,toasts:s}},n1=(t,e="blank",n)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...n,id:(n==null?void 0:n.id)||Yk()}),El=t=>(e,n)=>{let r=n1(e,t,n);return _h(r.toasterId||Zk(r.id))({type:2,toast:r}),r.id},He=(t,e)=>El("blank")(t,e);He.error=El("error");He.success=El("success");He.loading=El("loading");He.custom=El("custom");He.dismiss=(t,e)=>{let n={type:3,toastId:t};e?_h(e)(n):MT(n)};He.dismissAll=t=>He.dismiss(void 0,t);He.remove=(t,e)=>{let n={type:4,toastId:t};e?_h(e)(n):MT(n)};He.removeAll=t=>He.remove(void 0,t);He.promise=(t,e,n)=>{let r=He.loading(e.loading,{...n,...n==null?void 0:n.loading});return typeof t=="function"&&(t=t()),t.then(i=>{let s=e.success?xc(e.success,i):void 0;return s?He.success(s,{id:r,...n,...n==null?void 0:n.success}):He.dismiss(r),i}).catch(i=>{let s=e.error?xc(e.error,i):void 0;s?He.error(s,{id:r,...n,...n==null?void 0:n.error}):He.dismiss(r)}),t};var r1=1e3,i1=(t,e="default")=>{let{toasts:n,pausedAt:r}=t1(t,e),i=L.useRef(new Map).current,s=L.useCallback((f,m=r1)=>{if(i.has(f))return;let _=setTimeout(()=>{i.delete(f),o({type:4,toastId:f})},m);i.set(f,_)},[]);L.useEffect(()=>{if(r)return;let f=Date.now(),m=n.map(_=>{if(_.duration===1/0)return;let S=(_.duration||0)+_.pauseDuration-(f-_.createdAt);if(S<0){_.visible&&He.dismiss(_.id);return}return setTimeout(()=>He.dismiss(_.id,e),S)});return()=>{m.forEach(_=>_&&clearTimeout(_))}},[n,r,e]);let o=L.useCallback(_h(e),[e]),a=L.useCallback(()=>{o({type:5,time:Date.now()})},[o]),l=L.useCallback((f,m)=>{o({type:1,toast:{id:f,height:m}})},[o]),c=L.useCallback(()=>{r&&o({type:6,time:Date.now()})},[r,o]),h=L.useCallback((f,m)=>{let{reverseOrder:_=!1,gutter:S=8,defaultPosition:P}=m||{},C=n.filter(w=>(w.position||P)===(f.position||P)&&w.height),E=C.findIndex(w=>w.id===f.id),v=C.filter((w,x)=>x<E&&w.visible).length;return C.filter(w=>w.visible).slice(..._?[v+1]:[0,v]).reduce((w,x)=>w+(x.height||0)+S,0)},[n]);return L.useEffect(()=>{n.forEach(f=>{if(f.dismissed)s(f.id,f.removeDelay);else{let m=i.get(f.id);m&&(clearTimeout(m),i.delete(f.id))}})},[n,s]),{toasts:n,handlers:{updateHeight:l,startPause:a,endPause:c,calculateOffset:h}}},s1=Yn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,o1=Yn`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,a1=Yn`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,l1=ii("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${s1} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${o1} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${t=>t.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${a1} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,u1=Yn`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,c1=ii("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${u1} 1s linear infinite;
`,h1=Yn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,d1=Yn`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,f1=ii("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${h1} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${d1} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${t=>t.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,p1=ii("div")`
  position: absolute;
`,m1=ii("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,g1=Yn`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,_1=ii("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${g1} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,y1=({toast:t})=>{let{icon:e,type:n,iconTheme:r}=t;return e!==void 0?typeof e=="string"?L.createElement(_1,null,e):e:n==="blank"?null:L.createElement(m1,null,L.createElement(c1,{...r}),n!=="loading"&&L.createElement(p1,null,n==="error"?L.createElement(l1,{...r}):L.createElement(f1,{...r})))},v1=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,w1=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,E1="0%{opacity:0;} 100%{opacity:1;}",I1="0%{opacity:1;} 100%{opacity:0;}",T1=ii("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,S1=ii("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,A1=(t,e)=>{let n=t.includes("top")?1:-1,[r,i]=NT()?[E1,I1]:[v1(n),w1(n)];return{animation:e?`${Yn(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${Yn(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},R1=L.memo(({toast:t,position:e,style:n,children:r})=>{let i=t.height?A1(t.position||e||"top-center",t.visible):{opacity:0},s=L.createElement(y1,{toast:t}),o=L.createElement(S1,{...t.ariaProps},xc(t.message,t));return L.createElement(T1,{className:t.className,style:{...i,...n,...t.style}},typeof r=="function"?r({icon:s,message:o}):L.createElement(L.Fragment,null,s,o))});Qk(L.createElement);var P1=({id:t,className:e,style:n,onHeightUpdate:r,children:i})=>{let s=L.useCallback(o=>{if(o){let a=()=>{let l=o.getBoundingClientRect().height;r(t,l)};a(),new MutationObserver(a).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[t,r]);return L.createElement("div",{ref:s,className:e,style:n},i)},C1=(t,e)=>{let n=t.includes("top"),r=n?{top:0}:{bottom:0},i=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:NT()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(n?1:-1)}px)`,...r,...i}},k1=gh`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Tu=16,x1=({reverseOrder:t,position:e="top-center",toastOptions:n,gutter:r,children:i,toasterId:s,containerStyle:o,containerClassName:a})=>{let{toasts:l,handlers:c}=i1(n,s);return L.createElement("div",{"data-rht-toaster":s||"",style:{position:"fixed",zIndex:9999,top:Tu,left:Tu,right:Tu,bottom:Tu,pointerEvents:"none",...o},className:a,onMouseEnter:c.startPause,onMouseLeave:c.endPause},l.map(h=>{let f=h.position||e,m=c.calculateOffset(h,{reverseOrder:t,gutter:r,defaultPosition:e}),_=C1(f,m);return L.createElement(P1,{id:h.id,key:h.id,onHeightUpdate:c.updateHeight,className:h.visible?k1:"",style:_},h.type==="custom"?xc(h.message,h):i?i(h):L.createElement(R1,{toast:h,position:f}))}))},yU=He;const b1="modulepreload",D1=function(t){return"/"+t},hv={},rt=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(n.map(l=>{if(l=D1(l),l in hv)return;hv[l]=!0;const c=l.endsWith(".css"),h=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${h}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":b1,c||(f.as="script"),f.crossOrigin="",f.href=l,a&&f.setAttribute("nonce",a),document.head.appendChild(f),c)return new Promise((m,_)=>{f.addEventListener("load",m),f.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Za(){return Za=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Za.apply(this,arguments)}var br;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(br||(br={}));const dv="popstate";function N1(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return op("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:bc(i)}return O1(e,n,null,t)}function be(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Lm(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function V1(){return Math.random().toString(36).substr(2,8)}function fv(t,e){return{usr:t.state,key:t.key,idx:e}}function op(t,e,n,r){return n===void 0&&(n=null),Za({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Eo(e):e,{state:n,key:e&&e.key||r||V1()})}function bc(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Eo(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function O1(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=br.Pop,l=null,c=h();c==null&&(c=0,o.replaceState(Za({},o.state,{idx:c}),""));function h(){return(o.state||{idx:null}).idx}function f(){a=br.Pop;let C=h(),E=C==null?null:C-c;c=C,l&&l({action:a,location:P.location,delta:E})}function m(C,E){a=br.Push;let v=op(P.location,C,E);c=h()+1;let w=fv(v,c),x=P.createHref(v);try{o.pushState(w,"",x)}catch(M){if(M instanceof DOMException&&M.name==="DataCloneError")throw M;i.location.assign(x)}s&&l&&l({action:a,location:P.location,delta:1})}function _(C,E){a=br.Replace;let v=op(P.location,C,E);c=h();let w=fv(v,c),x=P.createHref(v);o.replaceState(w,"",x),s&&l&&l({action:a,location:P.location,delta:0})}function S(C){let E=i.location.origin!=="null"?i.location.origin:i.location.href,v=typeof C=="string"?C:bc(C);return v=v.replace(/ $/,"%20"),be(E,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,E)}let P={get action(){return a},get location(){return t(i,o)},listen(C){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(dv,f),l=C,()=>{i.removeEventListener(dv,f),l=null}},createHref(C){return e(i,C)},createURL:S,encodeLocation(C){let E=S(C);return{pathname:E.pathname,search:E.search,hash:E.hash}},push:m,replace:_,go(C){return o.go(C)}};return P}var pv;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(pv||(pv={}));function L1(t,e,n){return n===void 0&&(n="/"),M1(t,e,n)}function M1(t,e,n,r){let i=typeof e=="string"?Eo(e):e,s=Ys(i.pathname||"/",n);if(s==null)return null;let o=FT(t);F1(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let c=Q1(s);a=W1(o[l],c)}return a}function FT(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(be(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=jr([r,l.relativePath]),h=n.concat(l);s.children&&s.children.length>0&&(be(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),FT(s.children,e,h,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:G1(c,s.index),routesMeta:h})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of UT(s.path))i(s,o,l)}),e}function UT(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=UT(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function F1(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:K1(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const U1=/^:[\w-]+$/,B1=3,j1=2,z1=1,$1=10,q1=-2,mv=t=>t==="*";function G1(t,e){let n=t.split("/"),r=n.length;return n.some(mv)&&(r+=q1),e&&(r+=j1),n.filter(i=>!mv(i)).reduce((i,s)=>i+(U1.test(s)?B1:s===""?z1:$1),r)}function K1(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function W1(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],c=a===r.length-1,h=s==="/"?e:e.slice(s.length)||"/",f=ap({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},h),m=l.route;if(!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:jr([s,f.pathname]),pathnameBase:ex(jr([s,f.pathnameBase])),route:m}),f.pathnameBase!=="/"&&(s=jr([s,f.pathnameBase]))}return o}function ap(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=H1(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,h,f)=>{let{paramName:m,isOptional:_}=h;if(m==="*"){let P=a[f]||"";o=s.slice(0,s.length-P.length).replace(/(.)\/+$/,"$1")}const S=a[f];return _&&!S?c[m]=void 0:c[m]=(S||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function H1(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Lm(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function Q1(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Lm(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Ys(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const J1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Y1=t=>J1.test(t);function X1(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Eo(t):t,s;if(n)if(Y1(n))s=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),Lm(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=gv(n.substring(1),"/"):s=gv(n,e)}else s=e;return{pathname:s,search:tx(r),hash:nx(i)}}function gv(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Kd(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Z1(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Mm(t,e){let n=Z1(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Fm(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Eo(t):(i=Za({},t),be(!i.pathname||!i.pathname.includes("?"),Kd("?","pathname","search",i)),be(!i.pathname||!i.pathname.includes("#"),Kd("#","pathname","hash",i)),be(!i.search||!i.search.includes("#"),Kd("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),f-=1;i.pathname=m.join("/")}a=f>=0?e[f]:"/"}let l=X1(i,a),c=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||h)&&(l.pathname+="/"),l}const jr=t=>t.join("/").replace(/\/\/+/g,"/"),ex=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),tx=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,nx=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function rx(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const BT=["post","put","patch","delete"];new Set(BT);const ix=["get",...BT];new Set(ix);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function el(){return el=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},el.apply(this,arguments)}const yh=L.createContext(null),jT=L.createContext(null),rr=L.createContext(null),vh=L.createContext(null),Pn=L.createContext({outlet:null,matches:[],isDataRoute:!1}),zT=L.createContext(null);function sx(t,e){let{relative:n}=e===void 0?{}:e;Io()||be(!1);let{basename:r,navigator:i}=L.useContext(rr),{hash:s,pathname:o,search:a}=wh(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:jr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Io(){return L.useContext(vh)!=null}function To(){return Io()||be(!1),L.useContext(vh).location}function $T(t){L.useContext(rr).static||L.useLayoutEffect(t)}function qT(){let{isDataRoute:t}=L.useContext(Pn);return t?wx():ox()}function ox(){Io()||be(!1);let t=L.useContext(yh),{basename:e,future:n,navigator:r}=L.useContext(rr),{matches:i}=L.useContext(Pn),{pathname:s}=To(),o=JSON.stringify(Mm(i,n.v7_relativeSplatPath)),a=L.useRef(!1);return $T(()=>{a.current=!0}),L.useCallback(function(c,h){if(h===void 0&&(h={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let f=Fm(c,JSON.parse(o),s,h.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:jr([e,f.pathname])),(h.replace?r.replace:r.push)(f,h.state,h)},[e,r,o,s,t])}const ax=L.createContext(null);function lx(t){let e=L.useContext(Pn).outlet;return e&&L.createElement(ax.Provider,{value:t},e)}function vU(){let{matches:t}=L.useContext(Pn),e=t[t.length-1];return e?e.params:{}}function wh(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=L.useContext(rr),{matches:i}=L.useContext(Pn),{pathname:s}=To(),o=JSON.stringify(Mm(i,r.v7_relativeSplatPath));return L.useMemo(()=>Fm(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function ux(t,e){return cx(t,e)}function cx(t,e,n,r){Io()||be(!1);let{navigator:i}=L.useContext(rr),{matches:s}=L.useContext(Pn),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let c=To(),h;if(e){var f;let C=typeof e=="string"?Eo(e):e;l==="/"||(f=C.pathname)!=null&&f.startsWith(l)||be(!1),h=C}else h=c;let m=h.pathname||"/",_=m;if(l!=="/"){let C=l.replace(/^\//,"").split("/");_="/"+m.replace(/^\//,"").split("/").slice(C.length).join("/")}let S=L1(t,{pathname:_}),P=mx(S&&S.map(C=>Object.assign({},C,{params:Object.assign({},a,C.params),pathname:jr([l,i.encodeLocation?i.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?l:jr([l,i.encodeLocation?i.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),s,n,r);return e&&P?L.createElement(vh.Provider,{value:{location:el({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:br.Pop}},P):P}function hx(){let t=vx(),e=rx(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return L.createElement(L.Fragment,null,L.createElement("h2",null,"Unexpected Application Error!"),L.createElement("h3",{style:{fontStyle:"italic"}},e),n?L.createElement("pre",{style:i},n):null,null)}const dx=L.createElement(hx,null);class fx extends L.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?L.createElement(Pn.Provider,{value:this.props.routeContext},L.createElement(zT.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function px(t){let{routeContext:e,match:n,children:r}=t,i=L.useContext(yh);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),L.createElement(Pn.Provider,{value:e},r)}function mx(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let h=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);h>=0||be(!1),o=o.slice(0,Math.min(o.length,h+1))}let l=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<o.length;h++){let f=o[h];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=h),f.route.id){let{loaderData:m,errors:_}=n,S=f.route.loader&&m[f.route.id]===void 0&&(!_||_[f.route.id]===void 0);if(f.route.lazy||S){l=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((h,f,m)=>{let _,S=!1,P=null,C=null;n&&(_=a&&f.route.id?a[f.route.id]:void 0,P=f.route.errorElement||dx,l&&(c<0&&m===0?(Ex("route-fallback"),S=!0,C=null):c===m&&(S=!0,C=f.route.hydrateFallbackElement||null)));let E=e.concat(o.slice(0,m+1)),v=()=>{let w;return _?w=P:S?w=C:f.route.Component?w=L.createElement(f.route.Component,null):f.route.element?w=f.route.element:w=h,L.createElement(px,{match:f,routeContext:{outlet:h,matches:E,isDataRoute:n!=null},children:w})};return n&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?L.createElement(fx,{location:n.location,revalidation:n.revalidation,component:P,error:_,children:v(),routeContext:{outlet:null,matches:E,isDataRoute:!0}}):v()},null)}var GT=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(GT||{}),KT=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(KT||{});function gx(t){let e=L.useContext(yh);return e||be(!1),e}function _x(t){let e=L.useContext(jT);return e||be(!1),e}function yx(t){let e=L.useContext(Pn);return e||be(!1),e}function WT(t){let e=yx(),n=e.matches[e.matches.length-1];return n.route.id||be(!1),n.route.id}function vx(){var t;let e=L.useContext(zT),n=_x(),r=WT();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function wx(){let{router:t}=gx(GT.UseNavigateStable),e=WT(KT.UseNavigateStable),n=L.useRef(!1);return $T(()=>{n.current=!0}),L.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,el({fromRouteId:e},s)))},[t,e])}const _v={};function Ex(t,e,n){_v[t]||(_v[t]=!0)}function Ix(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function bs(t){let{to:e,replace:n,state:r,relative:i}=t;Io()||be(!1);let{future:s,static:o}=L.useContext(rr),{matches:a}=L.useContext(Pn),{pathname:l}=To(),c=qT(),h=Fm(e,Mm(a,s.v7_relativeSplatPath),l,i==="path"),f=JSON.stringify(h);return L.useEffect(()=>c(JSON.parse(f),{replace:n,state:r,relative:i}),[c,f,i,n,r]),null}function HT(t){return lx(t.context)}function Te(t){be(!1)}function Tx(t){let{basename:e="/",children:n=null,location:r,navigationType:i=br.Pop,navigator:s,static:o=!1,future:a}=t;Io()&&be(!1);let l=e.replace(/^\/*/,"/"),c=L.useMemo(()=>({basename:l,navigator:s,static:o,future:el({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=Eo(r));let{pathname:h="/",search:f="",hash:m="",state:_=null,key:S="default"}=r,P=L.useMemo(()=>{let C=Ys(h,l);return C==null?null:{location:{pathname:C,search:f,hash:m,state:_,key:S},navigationType:i}},[l,h,f,m,_,S,i]);return P==null?null:L.createElement(rr.Provider,{value:c},L.createElement(vh.Provider,{children:n,value:P}))}function Sx(t){let{children:e,location:n}=t;return ux(lp(e),n)}new Promise(()=>{});function lp(t,e){e===void 0&&(e=[]);let n=[];return L.Children.forEach(t,(r,i)=>{if(!L.isValidElement(r))return;let s=[...e,i];if(r.type===L.Fragment){n.push.apply(n,lp(r.props.children,s));return}r.type!==Te&&be(!1),!r.props.index||!r.props.children||be(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=lp(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Dc(){return Dc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Dc.apply(this,arguments)}function QT(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Ax(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Rx(t,e){return t.button===0&&(!e||e==="_self")&&!Ax(t)}const Px=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Cx=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],kx="6";try{window.__reactRouterVersion=kx}catch{}const xx=L.createContext({isTransitioning:!1}),bx="startTransition",yv=bP[bx];function Dx(t){let{basename:e,children:n,future:r,window:i}=t,s=L.useRef();s.current==null&&(s.current=N1({window:i,v5Compat:!0}));let o=s.current,[a,l]=L.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},h=L.useCallback(f=>{c&&yv?yv(()=>l(f)):l(f)},[l,c]);return L.useLayoutEffect(()=>o.listen(h),[o,h]),L.useEffect(()=>Ix(r),[r]),L.createElement(Tx,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const Nx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Vx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ox=L.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:c,preventScrollReset:h,viewTransition:f}=e,m=QT(e,Px),{basename:_}=L.useContext(rr),S,P=!1;if(typeof c=="string"&&Vx.test(c)&&(S=c,Nx))try{let w=new URL(window.location.href),x=c.startsWith("//")?new URL(w.protocol+c):new URL(c),M=Ys(x.pathname,_);x.origin===w.origin&&M!=null?c=M+x.search+x.hash:P=!0}catch{}let C=sx(c,{relative:i}),E=Mx(c,{replace:o,state:a,target:l,preventScrollReset:h,relative:i,viewTransition:f});function v(w){r&&r(w),w.defaultPrevented||E(w)}return L.createElement("a",Dc({},m,{href:S||C,onClick:P||s?r:v,ref:n,target:l}))}),wU=L.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,viewTransition:c,children:h}=e,f=QT(e,Cx),m=wh(l,{relative:f.relative}),_=To(),S=L.useContext(jT),{navigator:P,basename:C}=L.useContext(rr),E=S!=null&&Fx(m)&&c===!0,v=P.encodeLocation?P.encodeLocation(m).pathname:m.pathname,w=_.pathname,x=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;i||(w=w.toLowerCase(),x=x?x.toLowerCase():null,v=v.toLowerCase()),x&&C&&(x=Ys(x,C)||x);const M=v!=="/"&&v.endsWith("/")?v.length-1:v.length;let F=w===v||!o&&w.startsWith(v)&&w.charAt(M)==="/",I=x!=null&&(x===v||!o&&x.startsWith(v)&&x.charAt(v.length)==="/"),y={isActive:F,isPending:I,isTransitioning:E},T=F?r:void 0,A;typeof s=="function"?A=s(y):A=[s,F?"active":null,I?"pending":null,E?"transitioning":null].filter(Boolean).join(" ");let k=typeof a=="function"?a(y):a;return L.createElement(Ox,Dc({},f,{"aria-current":T,className:A,ref:n,style:k,to:l,viewTransition:c}),typeof h=="function"?h(y):h)});var up;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(up||(up={}));var vv;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(vv||(vv={}));function Lx(t){let e=L.useContext(yh);return e||be(!1),e}function Mx(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:a}=e===void 0?{}:e,l=qT(),c=To(),h=wh(t,{relative:o});return L.useCallback(f=>{if(Rx(f,n)){f.preventDefault();let m=r!==void 0?r:bc(c)===bc(h);l(t,{replace:m,state:i,preventScrollReset:s,relative:o,viewTransition:a})}},[c,l,h,r,i,n,t,s,o,a])}function Fx(t,e){e===void 0&&(e={});let n=L.useContext(xx);n==null&&be(!1);let{basename:r}=Lx(up.useViewTransitionState),i=wh(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=Ys(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Ys(n.nextLocation.pathname,r)||n.nextLocation.pathname;return ap(i.pathname,o)!=null||ap(i.pathname,s)!=null}const Ux={},wv=t=>{let e;const n=new Set,r=(h,f)=>{const m=typeof h=="function"?h(e):h;if(!Object.is(m,e)){const _=e;e=f??(typeof m!="object"||m===null)?m:Object.assign({},e,m),n.forEach(S=>S(e,_))}},i=()=>e,l={setState:r,getState:i,getInitialState:()=>c,subscribe:h=>(n.add(h),()=>n.delete(h)),destroy:()=>{(Ux?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},c=e=t(r,i,l);return l},Bx=t=>t?wv(t):wv;var JT={exports:{}},YT={},XT={exports:{}},ZT={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xs=L;function jx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var zx=typeof Object.is=="function"?Object.is:jx,$x=Xs.useState,qx=Xs.useEffect,Gx=Xs.useLayoutEffect,Kx=Xs.useDebugValue;function Wx(t,e){var n=e(),r=$x({inst:{value:n,getSnapshot:e}}),i=r[0].inst,s=r[1];return Gx(function(){i.value=n,i.getSnapshot=e,Wd(i)&&s({inst:i})},[t,n,e]),qx(function(){return Wd(i)&&s({inst:i}),t(function(){Wd(i)&&s({inst:i})})},[t]),Kx(n),n}function Wd(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!zx(t,n)}catch{return!0}}function Hx(t,e){return e()}var Qx=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?Hx:Wx;ZT.useSyncExternalStore=Xs.useSyncExternalStore!==void 0?Xs.useSyncExternalStore:Qx;XT.exports=ZT;var Jx=XT.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Eh=L,Yx=Jx;function Xx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Zx=typeof Object.is=="function"?Object.is:Xx,eb=Yx.useSyncExternalStore,tb=Eh.useRef,nb=Eh.useEffect,rb=Eh.useMemo,ib=Eh.useDebugValue;YT.useSyncExternalStoreWithSelector=function(t,e,n,r,i){var s=tb(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=rb(function(){function l(_){if(!c){if(c=!0,h=_,_=r(_),i!==void 0&&o.hasValue){var S=o.value;if(i(S,_))return f=S}return f=_}if(S=f,Zx(h,_))return S;var P=r(_);return i!==void 0&&i(S,P)?(h=_,S):(h=_,f=P)}var c=!1,h,f,m=n===void 0?null:n;return[function(){return l(e())},m===null?void 0:function(){return l(m())}]},[e,n,r,i]);var a=eb(t,s[0],s[1]);return nb(function(){o.hasValue=!0,o.value=a},[a]),ib(a),a};JT.exports=YT;var sb=JT.exports;const ob=yE(sb),e0={},{useDebugValue:ab}=qp,{useSyncExternalStoreWithSelector:lb}=ob;let Ev=!1;const ub=t=>t;function cb(t,e=ub,n){(e0?"production":void 0)!=="production"&&n&&!Ev&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),Ev=!0);const r=lb(t.subscribe,t.getState,t.getServerState||t.getInitialState,e,n);return ab(r),r}const Iv=t=>{(e0?"production":void 0)!=="production"&&typeof t!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const e=typeof t=="function"?Bx(t):t,n=(r,i)=>cb(e,r,i);return Object.assign(n,e),n},hb=t=>t?Iv(t):Iv;var Tv={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},db=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},n0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,h=s>>2,f=(s&3)<<4|a>>4;let m=(a&15)<<2|c>>6,_=c&63;l||(_=64,o||(m=64)),r.push(n[h],n[f],n[m],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(t0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):db(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||f==null)throw new fb;const m=s<<2|a>>4;if(r.push(m),c!==64){const _=a<<4&240|c>>2;if(r.push(_),f!==64){const S=c<<6&192|f;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class fb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const pb=function(t){const e=t0(t);return n0.encodeByteArray(e,!0)},Nc=function(t){return pb(t).replace(/\./g,"")},r0=function(t){try{return n0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gb=()=>mb().__FIREBASE_DEFAULTS__,_b=()=>{if(typeof process>"u"||typeof Tv>"u")return;const t=Tv.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},yb=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&r0(t[1]);return e&&JSON.parse(e)},Ih=()=>{try{return gb()||_b()||yb()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},i0=t=>{var e,n;return(n=(e=Ih())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},s0=t=>{const e=i0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},o0=()=>{var t;return(t=Ih())===null||t===void 0?void 0:t.config},a0=t=>{var e;return(e=Ih())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vb{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Nc(JSON.stringify(n)),Nc(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function wb(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Je())}function Eb(){var t;const e=(t=Ih())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Ib(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Tb(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Sb(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ab(){const t=Je();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function u0(){return!Eb()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function c0(){try{return typeof indexedDB=="object"}catch{return!1}}function Rb(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pb="FirebaseError";class Cn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Pb,Object.setPrototypeOf(this,Cn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Il.prototype.create)}}class Il{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Cb(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Cn(i,a,r)}}function Cb(t,e){return t.replace(kb,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const kb=/\{\$([^}]+)}/g;function xb(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Kr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Sv(s)&&Sv(o)){if(!Kr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Sv(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tl(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function pa(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ma(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function bb(t,e){const n=new Db(t,e);return n.subscribe.bind(n)}class Db{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Nb(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Hd),i.error===void 0&&(i.error=Hd),i.complete===void 0&&(i.complete=Hd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Nb(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Hd(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(t){return t&&t._delegate?t._delegate:t}class Wr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vb{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new vb;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Lb(e))try{this.getOrInitializeService({instanceIdentifier:vi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=vi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=vi){return this.instances.has(e)}getOptions(e=vi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ob(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=vi){return this.component?this.component.multipleInstances?e:vi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ob(t){return t===vi?void 0:t}function Lb(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Vb(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const Fb={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},Ub=ie.INFO,Bb={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},jb=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Bb[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Um{constructor(e){this.name=e,this._logLevel=Ub,this._logHandler=jb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Fb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}const zb=(t,e)=>e.some(n=>t instanceof n);let Av,Rv;function $b(){return Av||(Av=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function qb(){return Rv||(Rv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h0=new WeakMap,cp=new WeakMap,d0=new WeakMap,Qd=new WeakMap,Bm=new WeakMap;function Gb(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(zr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&h0.set(n,t)}).catch(()=>{}),Bm.set(e,t),e}function Kb(t){if(cp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});cp.set(t,e)}let hp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return cp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||d0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return zr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Wb(t){hp=t(hp)}function Hb(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Jd(this),e,...n);return d0.set(r,e.sort?e.sort():[e]),zr(r)}:qb().includes(t)?function(...e){return t.apply(Jd(this),e),zr(h0.get(this))}:function(...e){return zr(t.apply(Jd(this),e))}}function Qb(t){return typeof t=="function"?Hb(t):(t instanceof IDBTransaction&&Kb(t),zb(t,$b())?new Proxy(t,hp):t)}function zr(t){if(t instanceof IDBRequest)return Gb(t);if(Qd.has(t))return Qd.get(t);const e=Qb(t);return e!==t&&(Qd.set(t,e),Bm.set(e,t)),e}const Jd=t=>Bm.get(t);function Jb(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=zr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(zr(o.result),l.oldVersion,l.newVersion,zr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Yb=["get","getKey","getAll","getAllKeys","count"],Xb=["put","add","delete","clear"],Yd=new Map;function Pv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Yd.get(e))return Yd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Xb.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Yb.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Yd.set(e,s),s}Wb(t=>({...t,get:(e,n,r)=>Pv(e,n)||t.get(e,n,r),has:(e,n)=>!!Pv(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(eD(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function eD(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const dp="@firebase/app",Cv="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xn=new Um("@firebase/app"),tD="@firebase/app-compat",nD="@firebase/analytics-compat",rD="@firebase/analytics",iD="@firebase/app-check-compat",sD="@firebase/app-check",oD="@firebase/auth",aD="@firebase/auth-compat",lD="@firebase/database",uD="@firebase/data-connect",cD="@firebase/database-compat",hD="@firebase/functions",dD="@firebase/functions-compat",fD="@firebase/installations",pD="@firebase/installations-compat",mD="@firebase/messaging",gD="@firebase/messaging-compat",_D="@firebase/performance",yD="@firebase/performance-compat",vD="@firebase/remote-config",wD="@firebase/remote-config-compat",ED="@firebase/storage",ID="@firebase/storage-compat",TD="@firebase/firestore",SD="@firebase/vertexai-preview",AD="@firebase/firestore-compat",RD="firebase",PD="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vc="[DEFAULT]",CD={[dp]:"fire-core",[tD]:"fire-core-compat",[rD]:"fire-analytics",[nD]:"fire-analytics-compat",[sD]:"fire-app-check",[iD]:"fire-app-check-compat",[oD]:"fire-auth",[aD]:"fire-auth-compat",[lD]:"fire-rtdb",[uD]:"fire-data-connect",[cD]:"fire-rtdb-compat",[hD]:"fire-fn",[dD]:"fire-fn-compat",[fD]:"fire-iid",[pD]:"fire-iid-compat",[mD]:"fire-fcm",[gD]:"fire-fcm-compat",[_D]:"fire-perf",[yD]:"fire-perf-compat",[vD]:"fire-rc",[wD]:"fire-rc-compat",[ED]:"fire-gcs",[ID]:"fire-gcs-compat",[TD]:"fire-fst",[AD]:"fire-fst-compat",[SD]:"fire-vertex","fire-js":"fire-js",[RD]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oc=new Map,kD=new Map,fp=new Map;function kv(t,e){try{t.container.addComponent(e)}catch(n){Xn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ui(t){const e=t.name;if(fp.has(e))return Xn.debug(`There were multiple attempts to register component ${e}.`),!1;fp.set(e,t);for(const n of Oc.values())kv(n,t);for(const n of kD.values())kv(n,t);return!0}function So(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function xD(t,e,n=Vc){So(t,e).clearInstance(n)}function pn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bD={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},$r=new Il("app","Firebase",bD);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DD{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Wr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw $r.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es=PD;function f0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Vc,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw $r.create("bad-app-name",{appName:String(i)});if(n||(n=o0()),!n)throw $r.create("no-options");const s=Oc.get(i);if(s){if(Kr(n,s.options)&&Kr(r,s.config))return s;throw $r.create("duplicate-app",{appName:i})}const o=new Mb(i);for(const l of fp.values())o.addComponent(l);const a=new DD(n,r,o);return Oc.set(i,a),a}function jm(t=Vc){const e=Oc.get(t);if(!e&&t===Vc&&o0())return f0();if(!e)throw $r.create("no-app",{appName:t});return e}function wn(t,e,n){var r;let i=(r=CD[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Xn.warn(a.join(" "));return}Ui(new Wr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ND="firebase-heartbeat-database",VD=1,tl="firebase-heartbeat-store";let Xd=null;function p0(){return Xd||(Xd=Jb(ND,VD,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(tl)}catch(n){console.warn(n)}}}}).catch(t=>{throw $r.create("idb-open",{originalErrorMessage:t.message})})),Xd}async function OD(t){try{const n=(await p0()).transaction(tl),r=await n.objectStore(tl).get(m0(t));return await n.done,r}catch(e){if(e instanceof Cn)Xn.warn(e.message);else{const n=$r.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Xn.warn(n.message)}}}async function xv(t,e){try{const r=(await p0()).transaction(tl,"readwrite");await r.objectStore(tl).put(e,m0(t)),await r.done}catch(n){if(n instanceof Cn)Xn.warn(n.message);else{const r=$r.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Xn.warn(r.message)}}}function m0(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LD=1024,MD=30*24*60*60*1e3;class FD{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new BD(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=bv();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=MD}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Xn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=bv(),{heartbeatsToSend:r,unsentEntries:i}=UD(this._heartbeatsCache.heartbeats),s=Nc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Xn.warn(n),""}}}function bv(){return new Date().toISOString().substring(0,10)}function UD(t,e=LD){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Dv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Dv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class BD{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return c0()?Rb().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await OD(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return xv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return xv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Dv(t){return Nc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jD(t){Ui(new Wr("platform-logger",e=>new Zb(e),"PRIVATE")),Ui(new Wr("heartbeat",e=>new FD(e),"PRIVATE")),wn(dp,Cv,t),wn(dp,Cv,"esm2017"),wn("fire-js","")}jD("");function zm(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function g0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const zD=g0,_0=new Il("auth","Firebase",g0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lc=new Um("@firebase/auth");function $D(t,...e){Lc.logLevel<=ie.WARN&&Lc.warn(`Auth (${es}): ${t}`,...e)}function Wu(t,...e){Lc.logLevel<=ie.ERROR&&Lc.error(`Auth (${es}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function un(t,...e){throw $m(t,...e)}function En(t,...e){return $m(t,...e)}function y0(t,e,n){const r=Object.assign(Object.assign({},zD()),{[e]:n});return new Il("auth","Firebase",r).create(e,{appName:t.name})}function Kn(t){return y0(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function $m(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return _0.create(t,...e)}function Y(t,e,...n){if(!t)throw $m(e,...n)}function jn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Wu(e),new Error(e)}function Zn(t,e){t||jn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function qD(){return Nv()==="http:"||Nv()==="https:"}function Nv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GD(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(qD()||Tb()||"connection"in navigator)?navigator.onLine:!0}function KD(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(e,n){this.shortDelay=e,this.longDelay=n,Zn(n>e,"Short delay should be less than long delay!"),this.isMobile=wb()||Sb()}get(){return GD()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qm(t,e){Zn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;jn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;jn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;jn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WD={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HD=new Sl(3e4,6e4);function si(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ir(t,e,n,r,i={}){return w0(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Tl(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:l},s);return Ib()||(c.referrerPolicy="no-referrer"),v0.fetch()(E0(t,t.config.apiHost,n,a),c)})}async function w0(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},WD),e);try{const i=new JD(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Su(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Su(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Su(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Su(t,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw y0(t,h,c);un(t,h)}}catch(i){if(i instanceof Cn)throw i;un(t,"network-request-failed",{message:String(i)})}}async function Al(t,e,n,r,i={}){const s=await ir(t,e,n,r,i);return"mfaPendingCredential"in s&&un(t,"multi-factor-auth-required",{_serverResponse:s}),s}function E0(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?qm(t.config,i):`${t.config.apiScheme}://${i}`}function QD(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class JD{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(En(this.auth,"network-request-failed")),HD.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Su(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=En(t,e,r);return i.customData._tokenResponse=n,i}function Vv(t){return t!==void 0&&t.enterprise!==void 0}class YD{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return QD(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function XD(t,e){return ir(t,"GET","/v2/recaptchaConfig",si(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZD(t,e){return ir(t,"POST","/v1/accounts:delete",e)}async function I0(t,e){return ir(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ka(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function eN(t,e=!1){const n=ce(t),r=await n.getIdToken(e),i=Gm(r);Y(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ka(Zd(i.auth_time)),issuedAtTime:ka(Zd(i.iat)),expirationTime:ka(Zd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Zd(t){return Number(t)*1e3}function Gm(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Wu("JWT malformed, contained fewer than 3 sections"),null;try{const i=r0(n);return i?JSON.parse(i):(Wu("Failed to decode base64 JWT payload"),null)}catch(i){return Wu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Ov(t){const e=Gm(t);return Y(e,"internal-error"),Y(typeof e.exp<"u","internal-error"),Y(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Cn&&tN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function tN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ka(this.lastLoginAt),this.creationTime=ka(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Zs(t,I0(n,{idToken:r}));Y(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?T0(s.providerUserInfo):[],a=iN(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),h=l?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new mp(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function rN(t){const e=ce(t);await Mc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function iN(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function T0(t){return t.map(e=>{var{providerId:n}=e,r=zm(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sN(t,e){const n=await w0(t,{},async()=>{const r=Tl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=E0(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",v0.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function oN(t,e){return ir(t,"POST","/v2/accounts:revokeToken",si(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Y(e.idToken,"internal-error"),Y(typeof e.idToken<"u","internal-error"),Y(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ov(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Y(e.length!==0,"internal-error");const n=Ov(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Y(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await sN(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Us;return r&&(Y(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Y(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Y(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Us,this.toJSON())}_performRefresh(){return jn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fr(t,e){Y(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class zn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=zm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new nN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new mp(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Zs(this,this.stsTokenManager.getToken(this.auth,e));return Y(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return eN(this,e)}reload(){return rN(this)}_assign(e){this!==e&&(Y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new zn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Mc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(pn(this.auth.app))return Promise.reject(Kn(this.auth));const e=await this.getIdToken();return await Zs(this,ZD(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,c,h;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,_=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,S=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(a=n.tenantId)!==null&&a!==void 0?a:void 0,C=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,E=(c=n.createdAt)!==null&&c!==void 0?c:void 0,v=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:w,emailVerified:x,isAnonymous:M,providerData:F,stsTokenManager:I}=n;Y(w&&I,e,"internal-error");const y=Us.fromJSON(this.name,I);Y(typeof w=="string",e,"internal-error"),fr(f,e.name),fr(m,e.name),Y(typeof x=="boolean",e,"internal-error"),Y(typeof M=="boolean",e,"internal-error"),fr(_,e.name),fr(S,e.name),fr(P,e.name),fr(C,e.name),fr(E,e.name),fr(v,e.name);const T=new zn({uid:w,auth:e,email:m,emailVerified:x,displayName:f,isAnonymous:M,photoURL:S,phoneNumber:_,tenantId:P,stsTokenManager:y,createdAt:E,lastLoginAt:v});return F&&Array.isArray(F)&&(T.providerData=F.map(A=>Object.assign({},A))),C&&(T._redirectEventId=C),T}static async _fromIdTokenResponse(e,n,r=!1){const i=new Us;i.updateFromServerResponse(n);const s=new zn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Mc(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];Y(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?T0(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Us;a.updateFromIdToken(r);const l=new zn({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new mp(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lv=new Map;function $n(t){Zn(t instanceof Function,"Expected a class definition");let e=Lv.get(t);return e?(Zn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Lv.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}S0.type="NONE";const Mv=S0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hu(t,e,n){return`firebase:${t}:${e}:${n}`}class Bs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Hu(this.userKey,i.apiKey,s),this.fullPersistenceKey=Hu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?zn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Bs($n(Mv),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||$n(Mv);const o=Hu(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const h=await c._get(o);if(h){const f=zn._fromJSON(e,h);c!==s&&(a=f),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Bs(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Bs(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(C0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(A0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(x0(e))return"Blackberry";if(b0(e))return"Webos";if(R0(e))return"Safari";if((e.includes("chrome/")||P0(e))&&!e.includes("edge/"))return"Chrome";if(k0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function A0(t=Je()){return/firefox\//i.test(t)}function R0(t=Je()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function P0(t=Je()){return/crios\//i.test(t)}function C0(t=Je()){return/iemobile/i.test(t)}function k0(t=Je()){return/android/i.test(t)}function x0(t=Je()){return/blackberry/i.test(t)}function b0(t=Je()){return/webos/i.test(t)}function Km(t=Je()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function aN(t=Je()){var e;return Km(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function lN(){return Ab()&&document.documentMode===10}function D0(t=Je()){return Km(t)||k0(t)||b0(t)||x0(t)||/windows phone/i.test(t)||C0(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N0(t,e=[]){let n;switch(t){case"Browser":n=Fv(Je());break;case"Worker":n=`${Fv(Je())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${es}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cN(t,e={}){return ir(t,"GET","/v2/passwordPolicy",si(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hN=6;class dN{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:hN,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fN{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Uv(this),this.idTokenSubscription=new Uv(this),this.beforeStateQueue=new uN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=_0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=$n(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Bs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await I0(this,{idToken:e}),r=await zn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(pn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Mc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=KD()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(pn(this.app))return Promise.reject(Kn(this));const n=e?ce(e):null;return n&&Y(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return pn(this.app)?Promise.reject(Kn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return pn(this.app)?Promise.reject(Kn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence($n(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await cN(this),n=new dN(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Il("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await oN(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&$n(e)||this._popupRedirectResolver;Y(n,this,"argument-error"),this.redirectPersistenceManager=await Bs.create(this,[$n(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Y(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=N0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&$D(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ts(t){return ce(t)}class Uv{constructor(e){this.auth=e,this.observer=null,this.addObserver=bb(n=>this.observer=n)}get next(){return Y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Th={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function pN(t){Th=t}function V0(t){return Th.loadJS(t)}function mN(){return Th.recaptchaEnterpriseScript}function gN(){return Th.gapiScript}function _N(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const yN="recaptcha-enterprise",vN="NO_RECAPTCHA";class wN{constructor(e){this.type=yN,this.auth=ts(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{XD(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new YD(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Vv(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(vN)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Vv(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=mN();l.length!==0&&(l+=a),V0(l).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Bv(t,e,n,r=!1){const i=new wN(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function gp(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Bv(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Bv(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EN(t,e){const n=So(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Kr(s,e??{}))return i;un(i,"already-initialized")}return n.initialize({options:e})}function IN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map($n);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function TN(t,e,n){const r=ts(t);Y(r._canInitEmulator,r,"emulator-config-failed"),Y(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=O0(e),{host:o,port:a}=SN(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),AN()}function O0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function SN(t){const e=O0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:jv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:jv(o)}}}function jv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function AN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return jn("not implemented")}_getIdTokenResponse(e){return jn("not implemented")}_linkToIdToken(e,n){return jn("not implemented")}_getReauthenticationResolver(e){return jn("not implemented")}}async function RN(t,e){return ir(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PN(t,e){return Al(t,"POST","/v1/accounts:signInWithPassword",si(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CN(t,e){return Al(t,"POST","/v1/accounts:signInWithEmailLink",si(t,e))}async function kN(t,e){return Al(t,"POST","/v1/accounts:signInWithEmailLink",si(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl extends Wm{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new nl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new nl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return gp(e,n,"signInWithPassword",PN);case"emailLink":return CN(e,{email:this._email,oobCode:this._password});default:un(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return gp(e,r,"signUpPassword",RN);case"emailLink":return kN(e,{idToken:n,email:this._email,oobCode:this._password});default:un(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function js(t,e){return Al(t,"POST","/v1/accounts:signInWithIdp",si(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xN="http://localhost";class Bi extends Wm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Bi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):un("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=zm(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Bi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return js(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,js(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,js(e,n)}buildRequest(){const e={requestUri:xN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Tl(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bN(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function DN(t){const e=pa(ma(t)).link,n=e?pa(ma(e)).deep_link_id:null,r=pa(ma(t)).deep_link_id;return(r?pa(ma(r)).link:null)||r||n||e||t}class Hm{constructor(e){var n,r,i,s,o,a;const l=pa(ma(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,h=(r=l.oobCode)!==null&&r!==void 0?r:null,f=bN((i=l.mode)!==null&&i!==void 0?i:null);Y(c&&h&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=h,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=DN(e);try{return new Hm(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(){this.providerId=Ao.PROVIDER_ID}static credential(e,n){return nl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Hm.parseLink(n);return Y(r,"argument-error"),nl._fromEmailAndCode(e,r.code,r.tenantId)}}Ao.PROVIDER_ID="password";Ao.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ao.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl extends L0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er extends Rl{constructor(){super("facebook.com")}static credential(e){return Bi._fromParams({providerId:Er.PROVIDER_ID,signInMethod:Er.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Er.credentialFromTaggedObject(e)}static credentialFromError(e){return Er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Er.credential(e.oauthAccessToken)}catch{return null}}}Er.FACEBOOK_SIGN_IN_METHOD="facebook.com";Er.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir extends Rl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Bi._fromParams({providerId:Ir.PROVIDER_ID,signInMethod:Ir.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ir.credentialFromTaggedObject(e)}static credentialFromError(e){return Ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Ir.credential(n,r)}catch{return null}}}Ir.GOOGLE_SIGN_IN_METHOD="google.com";Ir.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr extends Rl{constructor(){super("github.com")}static credential(e){return Bi._fromParams({providerId:Tr.PROVIDER_ID,signInMethod:Tr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tr.credentialFromTaggedObject(e)}static credentialFromError(e){return Tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Tr.credential(e.oauthAccessToken)}catch{return null}}}Tr.GITHUB_SIGN_IN_METHOD="github.com";Tr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr extends Rl{constructor(){super("twitter.com")}static credential(e,n){return Bi._fromParams({providerId:Sr.PROVIDER_ID,signInMethod:Sr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Sr.credentialFromTaggedObject(e)}static credentialFromError(e){return Sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Sr.credential(n,r)}catch{return null}}}Sr.TWITTER_SIGN_IN_METHOD="twitter.com";Sr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NN(t,e){return Al(t,"POST","/v1/accounts:signUp",si(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await zn._fromIdTokenResponse(e,r,i),o=zv(r);return new ji({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=zv(r);return new ji({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function zv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc extends Cn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Fc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Fc(e,n,r,i)}}function M0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Fc._fromErrorAndOperation(t,s,e,r):s})}async function VN(t,e,n=!1){const r=await Zs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ji._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ON(t,e,n=!1){const{auth:r}=t;if(pn(r.app))return Promise.reject(Kn(r));const i="reauthenticate";try{const s=await Zs(t,M0(r,i,e,t),n);Y(s.idToken,r,"internal-error");const o=Gm(s.idToken);Y(o,r,"internal-error");const{sub:a}=o;return Y(t.uid===a,r,"user-mismatch"),ji._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&un(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F0(t,e,n=!1){if(pn(t.app))return Promise.reject(Kn(t));const r="signIn",i=await M0(t,r,e),s=await ji._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function LN(t,e){return F0(ts(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U0(t){const e=ts(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function MN(t,e,n){if(pn(t.app))return Promise.reject(Kn(t));const r=ts(t),o=await gp(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",NN).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&U0(t),l}),a=await ji._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function FN(t,e,n){return pn(t.app)?Promise.reject(Kn(t)):LN(ce(t),Ao.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&U0(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UN(t,e){return ir(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BN(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=ce(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Zs(r,UN(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function jN(t,e,n,r){return ce(t).onIdTokenChanged(e,n,r)}function zN(t,e,n){return ce(t).beforeAuthStateChanged(e,n)}function $N(t,e,n,r){return ce(t).onAuthStateChanged(e,n,r)}function B0(t){return ce(t).signOut()}const Uc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Uc,"1"),this.storage.removeItem(Uc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qN=1e3,GN=10;class z0 extends j0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=D0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);lN()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,GN):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},qN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}z0.type="LOCAL";const KN=z0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $0 extends j0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}$0.type="SESSION";const q0=$0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WN(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Sh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await WN(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Sh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qm(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=Qm("",20);i.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const m=f;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(h),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function In(){return window}function QN(t){In().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G0(){return typeof In().WorkerGlobalScope<"u"&&typeof In().importScripts=="function"}async function JN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function YN(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function XN(){return G0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K0="firebaseLocalStorageDb",ZN=1,Bc="firebaseLocalStorage",W0="fbase_key";class Pl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ah(t,e){return t.transaction([Bc],e?"readwrite":"readonly").objectStore(Bc)}function eV(){const t=indexedDB.deleteDatabase(K0);return new Pl(t).toPromise()}function _p(){const t=indexedDB.open(K0,ZN);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Bc,{keyPath:W0})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Bc)?e(r):(r.close(),await eV(),e(await _p()))})})}async function $v(t,e,n){const r=Ah(t,!0).put({[W0]:e,value:n});return new Pl(r).toPromise()}async function tV(t,e){const n=Ah(t,!1).get(e),r=await new Pl(n).toPromise();return r===void 0?null:r.value}function qv(t,e){const n=Ah(t,!0).delete(e);return new Pl(n).toPromise()}const nV=800,rV=3;class H0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await _p(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>rV)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return G0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Sh._getInstance(XN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await JN(),!this.activeServiceWorker)return;this.sender=new HN(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||YN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await _p();return await $v(e,Uc,"1"),await qv(e,Uc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>$v(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>tV(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>qv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ah(i,!1).getAll();return new Pl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),nV)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}H0.type="LOCAL";const iV=H0;new Sl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sV(t,e){return e?$n(e):(Y(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm extends Wm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return js(e,this._buildIdpRequest())}_linkToIdToken(e,n){return js(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return js(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function oV(t){return F0(t.auth,new Jm(t),t.bypassAuthState)}function aV(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),ON(n,new Jm(t),t.bypassAuthState)}async function lV(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),VN(n,new Jm(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q0{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return oV;case"linkViaPopup":case"linkViaRedirect":return lV;case"reauthViaPopup":case"reauthViaRedirect":return aV;default:un(this.auth,"internal-error")}}resolve(e){Zn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Zn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uV=new Sl(2e3,1e4);class Ds extends Q0{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ds.currentPopupAction&&Ds.currentPopupAction.cancel(),Ds.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Y(e,this.auth,"internal-error"),e}async onExecution(){Zn(this.filter.length===1,"Popup operations only handle one event");const e=Qm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(En(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(En(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ds.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(En(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,uV.get())};e()}}Ds.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cV="pendingRedirect",Qu=new Map;class hV extends Q0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Qu.get(this.auth._key());if(!e){try{const r=await dV(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Qu.set(this.auth._key(),e)}return this.bypassAuthState||Qu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function dV(t,e){const n=mV(e),r=pV(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function fV(t,e){Qu.set(t._key(),e)}function pV(t){return $n(t._redirectPersistence)}function mV(t){return Hu(cV,t.config.apiKey,t.name)}async function gV(t,e,n=!1){if(pn(t.app))return Promise.reject(Kn(t));const r=ts(t),i=sV(r,e),o=await new hV(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _V=10*60*1e3;class yV{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!vV(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!J0(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(En(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=_V&&this.cachedEventUids.clear(),this.cachedEventUids.has(Gv(e))}saveEventToCache(e){this.cachedEventUids.add(Gv(e)),this.lastProcessedEventTime=Date.now()}}function Gv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function J0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function vV(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return J0(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wV(t,e={}){return ir(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EV=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,IV=/^https?/;async function TV(t){if(t.config.emulator)return;const{authorizedDomains:e}=await wV(t);for(const n of e)try{if(SV(n))return}catch{}un(t,"unauthorized-domain")}function SV(t){const e=pp(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!IV.test(n))return!1;if(EV.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AV=new Sl(3e4,6e4);function Kv(){const t=In().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function RV(t){return new Promise((e,n)=>{var r,i,s;function o(){Kv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Kv(),n(En(t,"network-request-failed"))},timeout:AV.get()})}if(!((i=(r=In().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=In().gapi)===null||s===void 0)&&s.load)o();else{const a=_N("iframefcb");return In()[a]=()=>{gapi.load?o():n(En(t,"network-request-failed"))},V0(`${gN()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ju=null,e})}let Ju=null;function PV(t){return Ju=Ju||RV(t),Ju}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CV=new Sl(5e3,15e3),kV="__/auth/iframe",xV="emulator/auth/iframe",bV={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},DV=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function NV(t){const e=t.config;Y(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?qm(e,xV):`https://${t.config.authDomain}/${kV}`,r={apiKey:e.apiKey,appName:t.name,v:es},i=DV.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Tl(r).slice(1)}`}async function VV(t){const e=await PV(t),n=In().gapi;return Y(n,t,"internal-error"),e.open({where:document.body,url:NV(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:bV,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=En(t,"network-request-failed"),a=In().setTimeout(()=>{s(o)},CV.get());function l(){In().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OV={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},LV=500,MV=600,FV="_blank",UV="http://localhost";class Wv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function BV(t,e,n,r=LV,i=MV){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},OV),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Je().toLowerCase();n&&(a=P0(c)?FV:n),A0(c)&&(e=e||UV,l.scrollbars="yes");const h=Object.entries(l).reduce((m,[_,S])=>`${m}${_}=${S},`,"");if(aN(c)&&a!=="_self")return jV(e||"",a),new Wv(null);const f=window.open(e||"",a,h);Y(f,t,"popup-blocked");try{f.focus()}catch{}return new Wv(f)}function jV(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zV="__/auth/handler",$V="emulator/auth/handler",qV=encodeURIComponent("fac");async function Hv(t,e,n,r,i,s){Y(t.config.authDomain,t,"auth-domain-config-required"),Y(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:es,eventId:i};if(e instanceof L0){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",xb(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries({}))o[h]=f}if(e instanceof Rl){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await t._getAppCheckToken(),c=l?`#${qV}=${encodeURIComponent(l)}`:"";return`${GV(t)}?${Tl(a).slice(1)}${c}`}function GV({config:t}){return t.emulator?qm(t,$V):`https://${t.authDomain}/${zV}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ef="webStorageSupport";class KV{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=q0,this._completeRedirectFn=gV,this._overrideRedirectResult=fV}async _openPopup(e,n,r,i){var s;Zn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Hv(e,n,r,pp(),i);return BV(e,o,Qm())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Hv(e,n,r,pp(),i);return QN(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Zn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await VV(e),r=new yV(e);return n.register("authEvent",i=>(Y(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ef,{type:ef},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[ef];o!==void 0&&n(!!o),un(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=TV(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return D0()||R0()||Km()}}const WV=KV;var Qv="@firebase/auth",Jv="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HV{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QV(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function JV(t){Ui(new Wr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;Y(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:N0(t)},c=new fN(r,i,s,l);return IN(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ui(new Wr("auth-internal",e=>{const n=ts(e.getProvider("auth").getImmediate());return(r=>new HV(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),wn(Qv,Jv,QV(t)),wn(Qv,Jv,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YV=5*60,XV=a0("authIdTokenMaxAge")||YV;let Yv=null;const ZV=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>XV)return;const i=n==null?void 0:n.token;Yv!==i&&(Yv=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function eO(t=jm()){const e=So(t,"auth");if(e.isInitialized())return e.getImmediate();const n=EN(t,{popupRedirectResolver:WV,persistence:[iV,KN,q0]}),r=a0("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=ZV(s.toString());zN(n,o,()=>o(n.currentUser)),jN(n,a=>o(a))}}const i=i0("auth");return i&&TN(n,`http://${i}`),n}function tO(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}pN({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=En("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",tO().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});JV("Browser");var Xv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var bi,Y0;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,y){function T(){}T.prototype=y.prototype,I.D=y.prototype,I.prototype=new T,I.prototype.constructor=I,I.C=function(A,k,N){for(var R=Array(arguments.length-2),Kt=2;Kt<arguments.length;Kt++)R[Kt-2]=arguments[Kt];return y.prototype[k].apply(A,R)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(I,y,T){T||(T=0);var A=Array(16);if(typeof y=="string")for(var k=0;16>k;++k)A[k]=y.charCodeAt(T++)|y.charCodeAt(T++)<<8|y.charCodeAt(T++)<<16|y.charCodeAt(T++)<<24;else for(k=0;16>k;++k)A[k]=y[T++]|y[T++]<<8|y[T++]<<16|y[T++]<<24;y=I.g[0],T=I.g[1],k=I.g[2];var N=I.g[3],R=y+(N^T&(k^N))+A[0]+3614090360&4294967295;y=T+(R<<7&4294967295|R>>>25),R=N+(k^y&(T^k))+A[1]+3905402710&4294967295,N=y+(R<<12&4294967295|R>>>20),R=k+(T^N&(y^T))+A[2]+606105819&4294967295,k=N+(R<<17&4294967295|R>>>15),R=T+(y^k&(N^y))+A[3]+3250441966&4294967295,T=k+(R<<22&4294967295|R>>>10),R=y+(N^T&(k^N))+A[4]+4118548399&4294967295,y=T+(R<<7&4294967295|R>>>25),R=N+(k^y&(T^k))+A[5]+1200080426&4294967295,N=y+(R<<12&4294967295|R>>>20),R=k+(T^N&(y^T))+A[6]+2821735955&4294967295,k=N+(R<<17&4294967295|R>>>15),R=T+(y^k&(N^y))+A[7]+4249261313&4294967295,T=k+(R<<22&4294967295|R>>>10),R=y+(N^T&(k^N))+A[8]+1770035416&4294967295,y=T+(R<<7&4294967295|R>>>25),R=N+(k^y&(T^k))+A[9]+2336552879&4294967295,N=y+(R<<12&4294967295|R>>>20),R=k+(T^N&(y^T))+A[10]+4294925233&4294967295,k=N+(R<<17&4294967295|R>>>15),R=T+(y^k&(N^y))+A[11]+2304563134&4294967295,T=k+(R<<22&4294967295|R>>>10),R=y+(N^T&(k^N))+A[12]+1804603682&4294967295,y=T+(R<<7&4294967295|R>>>25),R=N+(k^y&(T^k))+A[13]+4254626195&4294967295,N=y+(R<<12&4294967295|R>>>20),R=k+(T^N&(y^T))+A[14]+2792965006&4294967295,k=N+(R<<17&4294967295|R>>>15),R=T+(y^k&(N^y))+A[15]+1236535329&4294967295,T=k+(R<<22&4294967295|R>>>10),R=y+(k^N&(T^k))+A[1]+4129170786&4294967295,y=T+(R<<5&4294967295|R>>>27),R=N+(T^k&(y^T))+A[6]+3225465664&4294967295,N=y+(R<<9&4294967295|R>>>23),R=k+(y^T&(N^y))+A[11]+643717713&4294967295,k=N+(R<<14&4294967295|R>>>18),R=T+(N^y&(k^N))+A[0]+3921069994&4294967295,T=k+(R<<20&4294967295|R>>>12),R=y+(k^N&(T^k))+A[5]+3593408605&4294967295,y=T+(R<<5&4294967295|R>>>27),R=N+(T^k&(y^T))+A[10]+38016083&4294967295,N=y+(R<<9&4294967295|R>>>23),R=k+(y^T&(N^y))+A[15]+3634488961&4294967295,k=N+(R<<14&4294967295|R>>>18),R=T+(N^y&(k^N))+A[4]+3889429448&4294967295,T=k+(R<<20&4294967295|R>>>12),R=y+(k^N&(T^k))+A[9]+568446438&4294967295,y=T+(R<<5&4294967295|R>>>27),R=N+(T^k&(y^T))+A[14]+3275163606&4294967295,N=y+(R<<9&4294967295|R>>>23),R=k+(y^T&(N^y))+A[3]+4107603335&4294967295,k=N+(R<<14&4294967295|R>>>18),R=T+(N^y&(k^N))+A[8]+1163531501&4294967295,T=k+(R<<20&4294967295|R>>>12),R=y+(k^N&(T^k))+A[13]+2850285829&4294967295,y=T+(R<<5&4294967295|R>>>27),R=N+(T^k&(y^T))+A[2]+4243563512&4294967295,N=y+(R<<9&4294967295|R>>>23),R=k+(y^T&(N^y))+A[7]+1735328473&4294967295,k=N+(R<<14&4294967295|R>>>18),R=T+(N^y&(k^N))+A[12]+2368359562&4294967295,T=k+(R<<20&4294967295|R>>>12),R=y+(T^k^N)+A[5]+4294588738&4294967295,y=T+(R<<4&4294967295|R>>>28),R=N+(y^T^k)+A[8]+2272392833&4294967295,N=y+(R<<11&4294967295|R>>>21),R=k+(N^y^T)+A[11]+1839030562&4294967295,k=N+(R<<16&4294967295|R>>>16),R=T+(k^N^y)+A[14]+4259657740&4294967295,T=k+(R<<23&4294967295|R>>>9),R=y+(T^k^N)+A[1]+2763975236&4294967295,y=T+(R<<4&4294967295|R>>>28),R=N+(y^T^k)+A[4]+1272893353&4294967295,N=y+(R<<11&4294967295|R>>>21),R=k+(N^y^T)+A[7]+4139469664&4294967295,k=N+(R<<16&4294967295|R>>>16),R=T+(k^N^y)+A[10]+3200236656&4294967295,T=k+(R<<23&4294967295|R>>>9),R=y+(T^k^N)+A[13]+681279174&4294967295,y=T+(R<<4&4294967295|R>>>28),R=N+(y^T^k)+A[0]+3936430074&4294967295,N=y+(R<<11&4294967295|R>>>21),R=k+(N^y^T)+A[3]+3572445317&4294967295,k=N+(R<<16&4294967295|R>>>16),R=T+(k^N^y)+A[6]+76029189&4294967295,T=k+(R<<23&4294967295|R>>>9),R=y+(T^k^N)+A[9]+3654602809&4294967295,y=T+(R<<4&4294967295|R>>>28),R=N+(y^T^k)+A[12]+3873151461&4294967295,N=y+(R<<11&4294967295|R>>>21),R=k+(N^y^T)+A[15]+530742520&4294967295,k=N+(R<<16&4294967295|R>>>16),R=T+(k^N^y)+A[2]+3299628645&4294967295,T=k+(R<<23&4294967295|R>>>9),R=y+(k^(T|~N))+A[0]+4096336452&4294967295,y=T+(R<<6&4294967295|R>>>26),R=N+(T^(y|~k))+A[7]+1126891415&4294967295,N=y+(R<<10&4294967295|R>>>22),R=k+(y^(N|~T))+A[14]+2878612391&4294967295,k=N+(R<<15&4294967295|R>>>17),R=T+(N^(k|~y))+A[5]+4237533241&4294967295,T=k+(R<<21&4294967295|R>>>11),R=y+(k^(T|~N))+A[12]+1700485571&4294967295,y=T+(R<<6&4294967295|R>>>26),R=N+(T^(y|~k))+A[3]+2399980690&4294967295,N=y+(R<<10&4294967295|R>>>22),R=k+(y^(N|~T))+A[10]+4293915773&4294967295,k=N+(R<<15&4294967295|R>>>17),R=T+(N^(k|~y))+A[1]+2240044497&4294967295,T=k+(R<<21&4294967295|R>>>11),R=y+(k^(T|~N))+A[8]+1873313359&4294967295,y=T+(R<<6&4294967295|R>>>26),R=N+(T^(y|~k))+A[15]+4264355552&4294967295,N=y+(R<<10&4294967295|R>>>22),R=k+(y^(N|~T))+A[6]+2734768916&4294967295,k=N+(R<<15&4294967295|R>>>17),R=T+(N^(k|~y))+A[13]+1309151649&4294967295,T=k+(R<<21&4294967295|R>>>11),R=y+(k^(T|~N))+A[4]+4149444226&4294967295,y=T+(R<<6&4294967295|R>>>26),R=N+(T^(y|~k))+A[11]+3174756917&4294967295,N=y+(R<<10&4294967295|R>>>22),R=k+(y^(N|~T))+A[2]+718787259&4294967295,k=N+(R<<15&4294967295|R>>>17),R=T+(N^(k|~y))+A[9]+3951481745&4294967295,I.g[0]=I.g[0]+y&4294967295,I.g[1]=I.g[1]+(k+(R<<21&4294967295|R>>>11))&4294967295,I.g[2]=I.g[2]+k&4294967295,I.g[3]=I.g[3]+N&4294967295}r.prototype.u=function(I,y){y===void 0&&(y=I.length);for(var T=y-this.blockSize,A=this.B,k=this.h,N=0;N<y;){if(k==0)for(;N<=T;)i(this,I,N),N+=this.blockSize;if(typeof I=="string"){for(;N<y;)if(A[k++]=I.charCodeAt(N++),k==this.blockSize){i(this,A),k=0;break}}else for(;N<y;)if(A[k++]=I[N++],k==this.blockSize){i(this,A),k=0;break}}this.h=k,this.o+=y},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var y=1;y<I.length-8;++y)I[y]=0;var T=8*this.o;for(y=I.length-8;y<I.length;++y)I[y]=T&255,T/=256;for(this.u(I),I=Array(16),y=T=0;4>y;++y)for(var A=0;32>A;A+=8)I[T++]=this.g[y]>>>A&255;return I};function s(I,y){var T=a;return Object.prototype.hasOwnProperty.call(T,I)?T[I]:T[I]=y(I)}function o(I,y){this.h=y;for(var T=[],A=!0,k=I.length-1;0<=k;k--){var N=I[k]|0;A&&N==y||(T[k]=N,A=!1)}this.g=T}var a={};function l(I){return-128<=I&&128>I?s(I,function(y){return new o([y|0],0>y?-1:0)}):new o([I|0],0>I?-1:0)}function c(I){if(isNaN(I)||!isFinite(I))return f;if(0>I)return C(c(-I));for(var y=[],T=1,A=0;I>=T;A++)y[A]=I/T|0,T*=4294967296;return new o(y,0)}function h(I,y){if(I.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(I.charAt(0)=="-")return C(h(I.substring(1),y));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=c(Math.pow(y,8)),A=f,k=0;k<I.length;k+=8){var N=Math.min(8,I.length-k),R=parseInt(I.substring(k,k+N),y);8>N?(N=c(Math.pow(y,N)),A=A.j(N).add(c(R))):(A=A.j(T),A=A.add(c(R)))}return A}var f=l(0),m=l(1),_=l(16777216);t=o.prototype,t.m=function(){if(P(this))return-C(this).m();for(var I=0,y=1,T=0;T<this.g.length;T++){var A=this.i(T);I+=(0<=A?A:4294967296+A)*y,y*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(S(this))return"0";if(P(this))return"-"+C(this).toString(I);for(var y=c(Math.pow(I,6)),T=this,A="";;){var k=x(T,y).g;T=E(T,k.j(y));var N=((0<T.g.length?T.g[0]:T.h)>>>0).toString(I);if(T=k,S(T))return N+A;for(;6>N.length;)N="0"+N;A=N+A}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function S(I){if(I.h!=0)return!1;for(var y=0;y<I.g.length;y++)if(I.g[y]!=0)return!1;return!0}function P(I){return I.h==-1}t.l=function(I){return I=E(this,I),P(I)?-1:S(I)?0:1};function C(I){for(var y=I.g.length,T=[],A=0;A<y;A++)T[A]=~I.g[A];return new o(T,~I.h).add(m)}t.abs=function(){return P(this)?C(this):this},t.add=function(I){for(var y=Math.max(this.g.length,I.g.length),T=[],A=0,k=0;k<=y;k++){var N=A+(this.i(k)&65535)+(I.i(k)&65535),R=(N>>>16)+(this.i(k)>>>16)+(I.i(k)>>>16);A=R>>>16,N&=65535,R&=65535,T[k]=R<<16|N}return new o(T,T[T.length-1]&-2147483648?-1:0)};function E(I,y){return I.add(C(y))}t.j=function(I){if(S(this)||S(I))return f;if(P(this))return P(I)?C(this).j(C(I)):C(C(this).j(I));if(P(I))return C(this.j(C(I)));if(0>this.l(_)&&0>I.l(_))return c(this.m()*I.m());for(var y=this.g.length+I.g.length,T=[],A=0;A<2*y;A++)T[A]=0;for(A=0;A<this.g.length;A++)for(var k=0;k<I.g.length;k++){var N=this.i(A)>>>16,R=this.i(A)&65535,Kt=I.i(k)>>>16,hi=I.i(k)&65535;T[2*A+2*k]+=R*hi,v(T,2*A+2*k),T[2*A+2*k+1]+=N*hi,v(T,2*A+2*k+1),T[2*A+2*k+1]+=R*Kt,v(T,2*A+2*k+1),T[2*A+2*k+2]+=N*Kt,v(T,2*A+2*k+2)}for(A=0;A<y;A++)T[A]=T[2*A+1]<<16|T[2*A];for(A=y;A<2*y;A++)T[A]=0;return new o(T,0)};function v(I,y){for(;(I[y]&65535)!=I[y];)I[y+1]+=I[y]>>>16,I[y]&=65535,y++}function w(I,y){this.g=I,this.h=y}function x(I,y){if(S(y))throw Error("division by zero");if(S(I))return new w(f,f);if(P(I))return y=x(C(I),y),new w(C(y.g),C(y.h));if(P(y))return y=x(I,C(y)),new w(C(y.g),y.h);if(30<I.g.length){if(P(I)||P(y))throw Error("slowDivide_ only works with positive integers.");for(var T=m,A=y;0>=A.l(I);)T=M(T),A=M(A);var k=F(T,1),N=F(A,1);for(A=F(A,2),T=F(T,2);!S(A);){var R=N.add(A);0>=R.l(I)&&(k=k.add(T),N=R),A=F(A,1),T=F(T,1)}return y=E(I,k.j(y)),new w(k,y)}for(k=f;0<=I.l(y);){for(T=Math.max(1,Math.floor(I.m()/y.m())),A=Math.ceil(Math.log(T)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),N=c(T),R=N.j(y);P(R)||0<R.l(I);)T-=A,N=c(T),R=N.j(y);S(N)&&(N=m),k=k.add(N),I=E(I,R)}return new w(k,I)}t.A=function(I){return x(this,I).h},t.and=function(I){for(var y=Math.max(this.g.length,I.g.length),T=[],A=0;A<y;A++)T[A]=this.i(A)&I.i(A);return new o(T,this.h&I.h)},t.or=function(I){for(var y=Math.max(this.g.length,I.g.length),T=[],A=0;A<y;A++)T[A]=this.i(A)|I.i(A);return new o(T,this.h|I.h)},t.xor=function(I){for(var y=Math.max(this.g.length,I.g.length),T=[],A=0;A<y;A++)T[A]=this.i(A)^I.i(A);return new o(T,this.h^I.h)};function M(I){for(var y=I.g.length+1,T=[],A=0;A<y;A++)T[A]=I.i(A)<<1|I.i(A-1)>>>31;return new o(T,I.h)}function F(I,y){var T=y>>5;y%=32;for(var A=I.g.length-T,k=[],N=0;N<A;N++)k[N]=0<y?I.i(N+T)>>>y|I.i(N+T+1)<<32-y:I.i(N+T);return new o(k,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Y0=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=h,bi=o}).apply(typeof Xv<"u"?Xv:typeof self<"u"?self:typeof window<"u"?window:{});var Au=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var X0,ga,Z0,Yu,yp,eS,tS,nS;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,d,p){return u==Array.prototype||u==Object.prototype||(u[d]=p.value),u};function n(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Au=="object"&&Au];for(var d=0;d<u.length;++d){var p=u[d];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function i(u,d){if(d)e:{var p=r;u=u.split(".");for(var g=0;g<u.length-1;g++){var D=u[g];if(!(D in p))break e;p=p[D]}u=u[u.length-1],g=p[u],d=d(g),d!=g&&d!=null&&e(p,u,{configurable:!0,writable:!0,value:d})}}function s(u,d){u instanceof String&&(u+="");var p=0,g=!1,D={next:function(){if(!g&&p<u.length){var O=p++;return{value:d(O,u[O]),done:!1}}return g=!0,{done:!0,value:void 0}}};return D[Symbol.iterator]=function(){return D},D}i("Array.prototype.values",function(u){return u||function(){return s(this,function(d,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(u){var d=typeof u;return d=d!="object"?d:u?Array.isArray(u)?"array":d:"null",d=="array"||d=="object"&&typeof u.length=="number"}function c(u){var d=typeof u;return d=="object"&&u!=null||d=="function"}function h(u,d,p){return u.call.apply(u.bind,arguments)}function f(u,d,p){if(!u)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var D=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(D,g),u.apply(d,D)}}return function(){return u.apply(d,arguments)}}function m(u,d,p){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:f,m.apply(null,arguments)}function _(u,d){var p=Array.prototype.slice.call(arguments,1);return function(){var g=p.slice();return g.push.apply(g,arguments),u.apply(this,g)}}function S(u,d){function p(){}p.prototype=d.prototype,u.aa=d.prototype,u.prototype=new p,u.prototype.constructor=u,u.Qb=function(g,D,O){for(var $=Array(arguments.length-2),me=2;me<arguments.length;me++)$[me-2]=arguments[me];return d.prototype[D].apply(g,$)}}function P(u){const d=u.length;if(0<d){const p=Array(d);for(let g=0;g<d;g++)p[g]=u[g];return p}return[]}function C(u,d){for(let p=1;p<arguments.length;p++){const g=arguments[p];if(l(g)){const D=u.length||0,O=g.length||0;u.length=D+O;for(let $=0;$<O;$++)u[D+$]=g[$]}else u.push(g)}}class E{constructor(d,p){this.i=d,this.j=p,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function v(u){return/^[\s\xa0]*$/.test(u)}function w(){var u=a.navigator;return u&&(u=u.userAgent)?u:""}function x(u){return x[" "](u),u}x[" "]=function(){};var M=w().indexOf("Gecko")!=-1&&!(w().toLowerCase().indexOf("webkit")!=-1&&w().indexOf("Edge")==-1)&&!(w().indexOf("Trident")!=-1||w().indexOf("MSIE")!=-1)&&w().indexOf("Edge")==-1;function F(u,d,p){for(const g in u)d.call(p,u[g],g,u)}function I(u,d){for(const p in u)d.call(void 0,u[p],p,u)}function y(u){const d={};for(const p in u)d[p]=u[p];return d}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(u,d){let p,g;for(let D=1;D<arguments.length;D++){g=arguments[D];for(p in g)u[p]=g[p];for(let O=0;O<T.length;O++)p=T[O],Object.prototype.hasOwnProperty.call(g,p)&&(u[p]=g[p])}}function k(u){var d=1;u=u.split(":");const p=[];for(;0<d&&u.length;)p.push(u.shift()),d--;return u.length&&p.push(u.join(":")),p}function N(u){a.setTimeout(()=>{throw u},0)}function R(){var u=Z;let d=null;return u.g&&(d=u.g,u.g=u.g.next,u.g||(u.h=null),d.next=null),d}class Kt{constructor(){this.h=this.g=null}add(d,p){const g=hi.get();g.set(d,p),this.h?this.h.next=g:this.g=g,this.h=g}}var hi=new E(()=>new Lo,u=>u.reset());class Lo{constructor(){this.next=this.g=this.h=null}set(d,p){this.h=d,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let kn,K=!1,Z=new Kt,te=()=>{const u=a.Promise.resolve(void 0);kn=()=>{u.then(Ce)}};var Ce=()=>{for(var u;u=R();){try{u.h.call(u.g)}catch(p){N(p)}var d=hi;d.j(u),100>d.h&&(d.h++,u.next=d.g,d.g=u)}K=!1};function pe(){this.s=this.s,this.C=this.C}pe.prototype.s=!1,pe.prototype.ma=function(){this.s||(this.s=!0,this.N())},pe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Be(u,d){this.type=u,this.g=this.target=d,this.defaultPrevented=!1}Be.prototype.h=function(){this.defaultPrevented=!0};var xn=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var u=!1,d=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const p=()=>{};a.addEventListener("test",p,d),a.removeEventListener("test",p,d)}catch{}return u}();function bn(u,d){if(Be.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var p=this.type=u.type,g=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=d,d=u.relatedTarget){if(M){e:{try{x(d.nodeName);var D=!0;break e}catch{}D=!1}D||(d=null)}}else p=="mouseover"?d=u.fromElement:p=="mouseout"&&(d=u.toElement);this.relatedTarget=d,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:Dn[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&bn.aa.h.call(this)}}S(bn,Be);var Dn={2:"touch",3:"pen",4:"mouse"};bn.prototype.h=function(){bn.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Nn="closure_listenable_"+(1e6*Math.random()|0),FR=0;function UR(u,d,p,g,D){this.listener=u,this.proxy=null,this.src=d,this.type=p,this.capture=!!g,this.ha=D,this.key=++FR,this.da=this.fa=!1}function zl(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function $l(u){this.src=u,this.g={},this.h=0}$l.prototype.add=function(u,d,p,g,D){var O=u.toString();u=this.g[O],u||(u=this.g[O]=[],this.h++);var $=Xh(u,d,g,D);return-1<$?(d=u[$],p||(d.fa=!1)):(d=new UR(d,this.src,O,!!g,D),d.fa=p,u.push(d)),d};function Yh(u,d){var p=d.type;if(p in u.g){var g=u.g[p],D=Array.prototype.indexOf.call(g,d,void 0),O;(O=0<=D)&&Array.prototype.splice.call(g,D,1),O&&(zl(d),u.g[p].length==0&&(delete u.g[p],u.h--))}}function Xh(u,d,p,g){for(var D=0;D<u.length;++D){var O=u[D];if(!O.da&&O.listener==d&&O.capture==!!p&&O.ha==g)return D}return-1}var Zh="closure_lm_"+(1e6*Math.random()|0),ed={};function n_(u,d,p,g,D){if(Array.isArray(d)){for(var O=0;O<d.length;O++)n_(u,d[O],p,g,D);return null}return p=s_(p),u&&u[Nn]?u.K(d,p,c(g)?!!g.capture:!1,D):BR(u,d,p,!1,g,D)}function BR(u,d,p,g,D,O){if(!d)throw Error("Invalid event type");var $=c(D)?!!D.capture:!!D,me=nd(u);if(me||(u[Zh]=me=new $l(u)),p=me.add(d,p,g,$,O),p.proxy)return p;if(g=jR(),p.proxy=g,g.src=u,g.listener=p,u.addEventListener)xn||(D=$),D===void 0&&(D=!1),u.addEventListener(d.toString(),g,D);else if(u.attachEvent)u.attachEvent(i_(d.toString()),g);else if(u.addListener&&u.removeListener)u.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return p}function jR(){function u(p){return d.call(u.src,u.listener,p)}const d=zR;return u}function r_(u,d,p,g,D){if(Array.isArray(d))for(var O=0;O<d.length;O++)r_(u,d[O],p,g,D);else g=c(g)?!!g.capture:!!g,p=s_(p),u&&u[Nn]?(u=u.i,d=String(d).toString(),d in u.g&&(O=u.g[d],p=Xh(O,p,g,D),-1<p&&(zl(O[p]),Array.prototype.splice.call(O,p,1),O.length==0&&(delete u.g[d],u.h--)))):u&&(u=nd(u))&&(d=u.g[d.toString()],u=-1,d&&(u=Xh(d,p,g,D)),(p=-1<u?d[u]:null)&&td(p))}function td(u){if(typeof u!="number"&&u&&!u.da){var d=u.src;if(d&&d[Nn])Yh(d.i,u);else{var p=u.type,g=u.proxy;d.removeEventListener?d.removeEventListener(p,g,u.capture):d.detachEvent?d.detachEvent(i_(p),g):d.addListener&&d.removeListener&&d.removeListener(g),(p=nd(d))?(Yh(p,u),p.h==0&&(p.src=null,d[Zh]=null)):zl(u)}}}function i_(u){return u in ed?ed[u]:ed[u]="on"+u}function zR(u,d){if(u.da)u=!0;else{d=new bn(d,this);var p=u.listener,g=u.ha||u.src;u.fa&&td(u),u=p.call(g,d)}return u}function nd(u){return u=u[Zh],u instanceof $l?u:null}var rd="__closure_events_fn_"+(1e9*Math.random()>>>0);function s_(u){return typeof u=="function"?u:(u[rd]||(u[rd]=function(d){return u.handleEvent(d)}),u[rd])}function ht(){pe.call(this),this.i=new $l(this),this.M=this,this.F=null}S(ht,pe),ht.prototype[Nn]=!0,ht.prototype.removeEventListener=function(u,d,p,g){r_(this,u,d,p,g)};function It(u,d){var p,g=u.F;if(g)for(p=[];g;g=g.F)p.push(g);if(u=u.M,g=d.type||d,typeof d=="string")d=new Be(d,u);else if(d instanceof Be)d.target=d.target||u;else{var D=d;d=new Be(g,u),A(d,D)}if(D=!0,p)for(var O=p.length-1;0<=O;O--){var $=d.g=p[O];D=ql($,g,!0,d)&&D}if($=d.g=u,D=ql($,g,!0,d)&&D,D=ql($,g,!1,d)&&D,p)for(O=0;O<p.length;O++)$=d.g=p[O],D=ql($,g,!1,d)&&D}ht.prototype.N=function(){if(ht.aa.N.call(this),this.i){var u=this.i,d;for(d in u.g){for(var p=u.g[d],g=0;g<p.length;g++)zl(p[g]);delete u.g[d],u.h--}}this.F=null},ht.prototype.K=function(u,d,p,g){return this.i.add(String(u),d,!1,p,g)},ht.prototype.L=function(u,d,p,g){return this.i.add(String(u),d,!0,p,g)};function ql(u,d,p,g){if(d=u.i.g[String(d)],!d)return!0;d=d.concat();for(var D=!0,O=0;O<d.length;++O){var $=d[O];if($&&!$.da&&$.capture==p){var me=$.listener,it=$.ha||$.src;$.fa&&Yh(u.i,$),D=me.call(it,g)!==!1&&D}}return D&&!g.defaultPrevented}function o_(u,d,p){if(typeof u=="function")p&&(u=m(u,p));else if(u&&typeof u.handleEvent=="function")u=m(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:a.setTimeout(u,d||0)}function a_(u){u.g=o_(()=>{u.g=null,u.i&&(u.i=!1,a_(u))},u.l);const d=u.h;u.h=null,u.m.apply(null,d)}class $R extends pe{constructor(d,p){super(),this.m=d,this.l=p,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:a_(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Mo(u){pe.call(this),this.h=u,this.g={}}S(Mo,pe);var l_=[];function u_(u){F(u.g,function(d,p){this.g.hasOwnProperty(p)&&td(d)},u),u.g={}}Mo.prototype.N=function(){Mo.aa.N.call(this),u_(this)},Mo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var id=a.JSON.stringify,qR=a.JSON.parse,GR=class{stringify(u){return a.JSON.stringify(u,void 0)}parse(u){return a.JSON.parse(u,void 0)}};function sd(){}sd.prototype.h=null;function c_(u){return u.h||(u.h=u.i())}function h_(){}var Fo={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function od(){Be.call(this,"d")}S(od,Be);function ad(){Be.call(this,"c")}S(ad,Be);var di={},d_=null;function Gl(){return d_=d_||new ht}di.La="serverreachability";function f_(u){Be.call(this,di.La,u)}S(f_,Be);function Uo(u){const d=Gl();It(d,new f_(d))}di.STAT_EVENT="statevent";function p_(u,d){Be.call(this,di.STAT_EVENT,u),this.stat=d}S(p_,Be);function Tt(u){const d=Gl();It(d,new p_(d,u))}di.Ma="timingevent";function m_(u,d){Be.call(this,di.Ma,u),this.size=d}S(m_,Be);function Bo(u,d){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){u()},d)}function jo(){this.g=!0}jo.prototype.xa=function(){this.g=!1};function KR(u,d,p,g,D,O){u.info(function(){if(u.g)if(O)for(var $="",me=O.split("&"),it=0;it<me.length;it++){var ue=me[it].split("=");if(1<ue.length){var dt=ue[0];ue=ue[1];var ft=dt.split("_");$=2<=ft.length&&ft[1]=="type"?$+(dt+"="+ue+"&"):$+(dt+"=redacted&")}}else $=null;else $=O;return"XMLHTTP REQ ("+g+") [attempt "+D+"]: "+d+`
`+p+`
`+$})}function WR(u,d,p,g,D,O,$){u.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+D+"]: "+d+`
`+p+`
`+O+" "+$})}function os(u,d,p,g){u.info(function(){return"XMLHTTP TEXT ("+d+"): "+QR(u,p)+(g?" "+g:"")})}function HR(u,d){u.info(function(){return"TIMEOUT: "+d})}jo.prototype.info=function(){};function QR(u,d){if(!u.g)return d;if(!d)return null;try{var p=JSON.parse(d);if(p){for(u=0;u<p.length;u++)if(Array.isArray(p[u])){var g=p[u];if(!(2>g.length)){var D=g[1];if(Array.isArray(D)&&!(1>D.length)){var O=D[0];if(O!="noop"&&O!="stop"&&O!="close")for(var $=1;$<D.length;$++)D[$]=""}}}}return id(p)}catch{return d}}var Kl={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},g_={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ld;function Wl(){}S(Wl,sd),Wl.prototype.g=function(){return new XMLHttpRequest},Wl.prototype.i=function(){return{}},ld=new Wl;function ur(u,d,p,g){this.j=u,this.i=d,this.l=p,this.R=g||1,this.U=new Mo(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new __}function __(){this.i=null,this.g="",this.h=!1}var y_={},ud={};function cd(u,d,p){u.L=1,u.v=Yl(Vn(d)),u.m=p,u.P=!0,v_(u,null)}function v_(u,d){u.F=Date.now(),Hl(u),u.A=Vn(u.v);var p=u.A,g=u.R;Array.isArray(g)||(g=[String(g)]),N_(p.i,"t",g),u.C=0,p=u.j.J,u.h=new __,u.g=Y_(u.j,p?d:null,!u.m),0<u.O&&(u.M=new $R(m(u.Y,u,u.g),u.O)),d=u.U,p=u.g,g=u.ca;var D="readystatechange";Array.isArray(D)||(D&&(l_[0]=D.toString()),D=l_);for(var O=0;O<D.length;O++){var $=n_(p,D[O],g||d.handleEvent,!1,d.h||d);if(!$)break;d.g[$.key]=$}d=u.H?y(u.H):{},u.m?(u.u||(u.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,d)):(u.u="GET",u.g.ea(u.A,u.u,null,d)),Uo(),KR(u.i,u.u,u.A,u.l,u.R,u.m)}ur.prototype.ca=function(u){u=u.target;const d=this.M;d&&On(u)==3?d.j():this.Y(u)},ur.prototype.Y=function(u){try{if(u==this.g)e:{const ft=On(this.g);var d=this.g.Ba();const us=this.g.Z();if(!(3>ft)&&(ft!=3||this.g&&(this.h.h||this.g.oa()||B_(this.g)))){this.J||ft!=4||d==7||(d==8||0>=us?Uo(3):Uo(2)),hd(this);var p=this.g.Z();this.X=p;t:if(w_(this)){var g=B_(this.g);u="";var D=g.length,O=On(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){fi(this),zo(this);var $="";break t}this.h.i=new a.TextDecoder}for(d=0;d<D;d++)this.h.h=!0,u+=this.h.i.decode(g[d],{stream:!(O&&d==D-1)});g.length=0,this.h.g+=u,this.C=0,$=this.h.g}else $=this.g.oa();if(this.o=p==200,WR(this.i,this.u,this.A,this.l,this.R,ft,p),this.o){if(this.T&&!this.K){t:{if(this.g){var me,it=this.g;if((me=it.g?it.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(me)){var ue=me;break t}}ue=null}if(p=ue)os(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,dd(this,p);else{this.o=!1,this.s=3,Tt(12),fi(this),zo(this);break e}}if(this.P){p=!0;let en;for(;!this.J&&this.C<$.length;)if(en=JR(this,$),en==ud){ft==4&&(this.s=4,Tt(14),p=!1),os(this.i,this.l,null,"[Incomplete Response]");break}else if(en==y_){this.s=4,Tt(15),os(this.i,this.l,$,"[Invalid Chunk]"),p=!1;break}else os(this.i,this.l,en,null),dd(this,en);if(w_(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ft!=4||$.length!=0||this.h.h||(this.s=1,Tt(16),p=!1),this.o=this.o&&p,!p)os(this.i,this.l,$,"[Invalid Chunked Response]"),fi(this),zo(this);else if(0<$.length&&!this.W){this.W=!0;var dt=this.j;dt.g==this&&dt.ba&&!dt.M&&(dt.j.info("Great, no buffering proxy detected. Bytes received: "+$.length),yd(dt),dt.M=!0,Tt(11))}}else os(this.i,this.l,$,null),dd(this,$);ft==4&&fi(this),this.o&&!this.J&&(ft==4?W_(this.j,this):(this.o=!1,Hl(this)))}else fP(this.g),p==400&&0<$.indexOf("Unknown SID")?(this.s=3,Tt(12)):(this.s=0,Tt(13)),fi(this),zo(this)}}}catch{}finally{}};function w_(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function JR(u,d){var p=u.C,g=d.indexOf(`
`,p);return g==-1?ud:(p=Number(d.substring(p,g)),isNaN(p)?y_:(g+=1,g+p>d.length?ud:(d=d.slice(g,g+p),u.C=g+p,d)))}ur.prototype.cancel=function(){this.J=!0,fi(this)};function Hl(u){u.S=Date.now()+u.I,E_(u,u.I)}function E_(u,d){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Bo(m(u.ba,u),d)}function hd(u){u.B&&(a.clearTimeout(u.B),u.B=null)}ur.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(HR(this.i,this.A),this.L!=2&&(Uo(),Tt(17)),fi(this),this.s=2,zo(this)):E_(this,this.S-u)};function zo(u){u.j.G==0||u.J||W_(u.j,u)}function fi(u){hd(u);var d=u.M;d&&typeof d.ma=="function"&&d.ma(),u.M=null,u_(u.U),u.g&&(d=u.g,u.g=null,d.abort(),d.ma())}function dd(u,d){try{var p=u.j;if(p.G!=0&&(p.g==u||fd(p.h,u))){if(!u.K&&fd(p.h,u)&&p.G==3){try{var g=p.Da.g.parse(d)}catch{g=null}if(Array.isArray(g)&&g.length==3){var D=g;if(D[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<u.F)ru(p),tu(p);else break e;_d(p),Tt(18)}}else p.za=D[1],0<p.za-p.T&&37500>D[2]&&p.F&&p.v==0&&!p.C&&(p.C=Bo(m(p.Za,p),6e3));if(1>=S_(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else mi(p,11)}else if((u.K||p.g==u)&&ru(p),!v(d))for(D=p.Da.g.parse(d),d=0;d<D.length;d++){let ue=D[d];if(p.T=ue[0],ue=ue[1],p.G==2)if(ue[0]=="c"){p.K=ue[1],p.ia=ue[2];const dt=ue[3];dt!=null&&(p.la=dt,p.j.info("VER="+p.la));const ft=ue[4];ft!=null&&(p.Aa=ft,p.j.info("SVER="+p.Aa));const us=ue[5];us!=null&&typeof us=="number"&&0<us&&(g=1.5*us,p.L=g,p.j.info("backChannelRequestTimeoutMs_="+g)),g=p;const en=u.g;if(en){const su=en.g?en.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(su){var O=g.h;O.g||su.indexOf("spdy")==-1&&su.indexOf("quic")==-1&&su.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(pd(O,O.h),O.h=null))}if(g.D){const vd=en.g?en.g.getResponseHeader("X-HTTP-Session-Id"):null;vd&&(g.ya=vd,ve(g.I,g.D,vd))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-u.F,p.j.info("Handshake RTT: "+p.R+"ms")),g=p;var $=u;if(g.qa=J_(g,g.J?g.ia:null,g.W),$.K){A_(g.h,$);var me=$,it=g.L;it&&(me.I=it),me.B&&(hd(me),Hl(me)),g.g=$}else G_(g);0<p.i.length&&nu(p)}else ue[0]!="stop"&&ue[0]!="close"||mi(p,7);else p.G==3&&(ue[0]=="stop"||ue[0]=="close"?ue[0]=="stop"?mi(p,7):gd(p):ue[0]!="noop"&&p.l&&p.l.ta(ue),p.v=0)}}Uo(4)}catch{}}var YR=class{constructor(u,d){this.g=u,this.map=d}};function I_(u){this.l=u||10,a.PerformanceNavigationTiming?(u=a.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function T_(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function S_(u){return u.h?1:u.g?u.g.size:0}function fd(u,d){return u.h?u.h==d:u.g?u.g.has(d):!1}function pd(u,d){u.g?u.g.add(d):u.h=d}function A_(u,d){u.h&&u.h==d?u.h=null:u.g&&u.g.has(d)&&u.g.delete(d)}I_.prototype.cancel=function(){if(this.i=R_(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function R_(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let d=u.i;for(const p of u.g.values())d=d.concat(p.D);return d}return P(u.i)}function XR(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(l(u)){for(var d=[],p=u.length,g=0;g<p;g++)d.push(u[g]);return d}d=[],p=0;for(g in u)d[p++]=u[g];return d}function ZR(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(l(u)||typeof u=="string"){var d=[];u=u.length;for(var p=0;p<u;p++)d.push(p);return d}d=[],p=0;for(const g in u)d[p++]=g;return d}}}function P_(u,d){if(u.forEach&&typeof u.forEach=="function")u.forEach(d,void 0);else if(l(u)||typeof u=="string")Array.prototype.forEach.call(u,d,void 0);else for(var p=ZR(u),g=XR(u),D=g.length,O=0;O<D;O++)d.call(void 0,g[O],p&&p[O],u)}var C_=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function eP(u,d){if(u){u=u.split("&");for(var p=0;p<u.length;p++){var g=u[p].indexOf("="),D=null;if(0<=g){var O=u[p].substring(0,g);D=u[p].substring(g+1)}else O=u[p];d(O,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function pi(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof pi){this.h=u.h,Ql(this,u.j),this.o=u.o,this.g=u.g,Jl(this,u.s),this.l=u.l;var d=u.i,p=new Go;p.i=d.i,d.g&&(p.g=new Map(d.g),p.h=d.h),k_(this,p),this.m=u.m}else u&&(d=String(u).match(C_))?(this.h=!1,Ql(this,d[1]||"",!0),this.o=$o(d[2]||""),this.g=$o(d[3]||"",!0),Jl(this,d[4]),this.l=$o(d[5]||"",!0),k_(this,d[6]||"",!0),this.m=$o(d[7]||"")):(this.h=!1,this.i=new Go(null,this.h))}pi.prototype.toString=function(){var u=[],d=this.j;d&&u.push(qo(d,x_,!0),":");var p=this.g;return(p||d=="file")&&(u.push("//"),(d=this.o)&&u.push(qo(d,x_,!0),"@"),u.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&u.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&u.push("/"),u.push(qo(p,p.charAt(0)=="/"?rP:nP,!0))),(p=this.i.toString())&&u.push("?",p),(p=this.m)&&u.push("#",qo(p,sP)),u.join("")};function Vn(u){return new pi(u)}function Ql(u,d,p){u.j=p?$o(d,!0):d,u.j&&(u.j=u.j.replace(/:$/,""))}function Jl(u,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);u.s=d}else u.s=null}function k_(u,d,p){d instanceof Go?(u.i=d,oP(u.i,u.h)):(p||(d=qo(d,iP)),u.i=new Go(d,u.h))}function ve(u,d,p){u.i.set(d,p)}function Yl(u){return ve(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function $o(u,d){return u?d?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function qo(u,d,p){return typeof u=="string"?(u=encodeURI(u).replace(d,tP),p&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function tP(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var x_=/[#\/\?@]/g,nP=/[#\?:]/g,rP=/[#\?]/g,iP=/[#\?@]/g,sP=/#/g;function Go(u,d){this.h=this.g=null,this.i=u||null,this.j=!!d}function cr(u){u.g||(u.g=new Map,u.h=0,u.i&&eP(u.i,function(d,p){u.add(decodeURIComponent(d.replace(/\+/g," ")),p)}))}t=Go.prototype,t.add=function(u,d){cr(this),this.i=null,u=as(this,u);var p=this.g.get(u);return p||this.g.set(u,p=[]),p.push(d),this.h+=1,this};function b_(u,d){cr(u),d=as(u,d),u.g.has(d)&&(u.i=null,u.h-=u.g.get(d).length,u.g.delete(d))}function D_(u,d){return cr(u),d=as(u,d),u.g.has(d)}t.forEach=function(u,d){cr(this),this.g.forEach(function(p,g){p.forEach(function(D){u.call(d,D,g,this)},this)},this)},t.na=function(){cr(this);const u=Array.from(this.g.values()),d=Array.from(this.g.keys()),p=[];for(let g=0;g<d.length;g++){const D=u[g];for(let O=0;O<D.length;O++)p.push(d[g])}return p},t.V=function(u){cr(this);let d=[];if(typeof u=="string")D_(this,u)&&(d=d.concat(this.g.get(as(this,u))));else{u=Array.from(this.g.values());for(let p=0;p<u.length;p++)d=d.concat(u[p])}return d},t.set=function(u,d){return cr(this),this.i=null,u=as(this,u),D_(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[d]),this.h+=1,this},t.get=function(u,d){return u?(u=this.V(u),0<u.length?String(u[0]):d):d};function N_(u,d,p){b_(u,d),0<p.length&&(u.i=null,u.g.set(as(u,d),P(p)),u.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],d=Array.from(this.g.keys());for(var p=0;p<d.length;p++){var g=d[p];const O=encodeURIComponent(String(g)),$=this.V(g);for(g=0;g<$.length;g++){var D=O;$[g]!==""&&(D+="="+encodeURIComponent(String($[g]))),u.push(D)}}return this.i=u.join("&")};function as(u,d){return d=String(d),u.j&&(d=d.toLowerCase()),d}function oP(u,d){d&&!u.j&&(cr(u),u.i=null,u.g.forEach(function(p,g){var D=g.toLowerCase();g!=D&&(b_(this,g),N_(this,D,p))},u)),u.j=d}function aP(u,d){const p=new jo;if(a.Image){const g=new Image;g.onload=_(hr,p,"TestLoadImage: loaded",!0,d,g),g.onerror=_(hr,p,"TestLoadImage: error",!1,d,g),g.onabort=_(hr,p,"TestLoadImage: abort",!1,d,g),g.ontimeout=_(hr,p,"TestLoadImage: timeout",!1,d,g),a.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=u}else d(!1)}function lP(u,d){const p=new jo,g=new AbortController,D=setTimeout(()=>{g.abort(),hr(p,"TestPingServer: timeout",!1,d)},1e4);fetch(u,{signal:g.signal}).then(O=>{clearTimeout(D),O.ok?hr(p,"TestPingServer: ok",!0,d):hr(p,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(D),hr(p,"TestPingServer: error",!1,d)})}function hr(u,d,p,g,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),g(p)}catch{}}function uP(){this.g=new GR}function cP(u,d,p){const g=p||"";try{P_(u,function(D,O){let $=D;c(D)&&($=id(D)),d.push(g+O+"="+encodeURIComponent($))})}catch(D){throw d.push(g+"type="+encodeURIComponent("_badmap")),D}}function Xl(u){this.l=u.Ub||null,this.j=u.eb||!1}S(Xl,sd),Xl.prototype.g=function(){return new Zl(this.l,this.j)},Xl.prototype.i=function(u){return function(){return u}}({});function Zl(u,d){ht.call(this),this.D=u,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(Zl,ht),t=Zl.prototype,t.open=function(u,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=d,this.readyState=1,Wo(this)},t.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(d.body=u),(this.D||a).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ko(this)),this.readyState=0},t.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Wo(this)),this.g&&(this.readyState=3,Wo(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;V_(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function V_(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}t.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var d=u.value?u.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!u.done}))&&(this.response=this.responseText+=d)}u.done?Ko(this):Wo(this),this.readyState==3&&V_(this)}},t.Ra=function(u){this.g&&(this.response=this.responseText=u,Ko(this))},t.Qa=function(u){this.g&&(this.response=u,Ko(this))},t.ga=function(){this.g&&Ko(this)};function Ko(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Wo(u)}t.setRequestHeader=function(u,d){this.u.append(u,d)},t.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],d=this.h.entries();for(var p=d.next();!p.done;)p=p.value,u.push(p[0]+": "+p[1]),p=d.next();return u.join(`\r
`)};function Wo(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Zl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function O_(u){let d="";return F(u,function(p,g){d+=g,d+=":",d+=p,d+=`\r
`}),d}function md(u,d,p){e:{for(g in p){var g=!1;break e}g=!0}g||(p=O_(p),typeof u=="string"?p!=null&&encodeURIComponent(String(p)):ve(u,d,p))}function Oe(u){ht.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(Oe,ht);var hP=/^https?$/i,dP=["POST","PUT"];t=Oe.prototype,t.Ha=function(u){this.J=u},t.ea=function(u,d,p,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);d=d?d.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ld.g(),this.v=this.o?c_(this.o):c_(ld),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(d,String(u),!0),this.B=!1}catch(O){L_(this,O);return}if(u=p||"",p=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var D in g)p.set(D,g[D]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const O of g.keys())p.set(O,g.get(O));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(p.keys()).find(O=>O.toLowerCase()=="content-type"),D=a.FormData&&u instanceof a.FormData,!(0<=Array.prototype.indexOf.call(dP,d,void 0))||g||D||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,$]of p)this.g.setRequestHeader(O,$);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{U_(this),this.u=!0,this.g.send(u),this.u=!1}catch(O){L_(this,O)}};function L_(u,d){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=d,u.m=5,M_(u),eu(u)}function M_(u){u.A||(u.A=!0,It(u,"complete"),It(u,"error"))}t.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,It(this,"complete"),It(this,"abort"),eu(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),eu(this,!0)),Oe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?F_(this):this.bb())},t.bb=function(){F_(this)};function F_(u){if(u.h&&typeof o<"u"&&(!u.v[1]||On(u)!=4||u.Z()!=2)){if(u.u&&On(u)==4)o_(u.Ea,0,u);else if(It(u,"readystatechange"),On(u)==4){u.h=!1;try{const $=u.Z();e:switch($){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var p;if(!(p=d)){var g;if(g=$===0){var D=String(u.D).match(C_)[1]||null;!D&&a.self&&a.self.location&&(D=a.self.location.protocol.slice(0,-1)),g=!hP.test(D?D.toLowerCase():"")}p=g}if(p)It(u,"complete"),It(u,"success");else{u.m=6;try{var O=2<On(u)?u.g.statusText:""}catch{O=""}u.l=O+" ["+u.Z()+"]",M_(u)}}finally{eu(u)}}}}function eu(u,d){if(u.g){U_(u);const p=u.g,g=u.v[0]?()=>{}:null;u.g=null,u.v=null,d||It(u,"ready");try{p.onreadystatechange=g}catch{}}}function U_(u){u.I&&(a.clearTimeout(u.I),u.I=null)}t.isActive=function(){return!!this.g};function On(u){return u.g?u.g.readyState:0}t.Z=function(){try{return 2<On(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(u){if(this.g){var d=this.g.responseText;return u&&d.indexOf(u)==0&&(d=d.substring(u.length)),qR(d)}};function B_(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function fP(u){const d={};u=(u.g&&2<=On(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<u.length;g++){if(v(u[g]))continue;var p=k(u[g]);const D=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const O=d[D]||[];d[D]=O,O.push(p)}I(d,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ho(u,d,p){return p&&p.internalChannelParams&&p.internalChannelParams[u]||d}function j_(u){this.Aa=0,this.i=[],this.j=new jo,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ho("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ho("baseRetryDelayMs",5e3,u),this.cb=Ho("retryDelaySeedMs",1e4,u),this.Wa=Ho("forwardChannelMaxRetries",2,u),this.wa=Ho("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new I_(u&&u.concurrentRequestLimit),this.Da=new uP,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=j_.prototype,t.la=8,t.G=1,t.connect=function(u,d,p,g){Tt(0),this.W=u,this.H=d||{},p&&g!==void 0&&(this.H.OSID=p,this.H.OAID=g),this.F=this.X,this.I=J_(this,null,this.W),nu(this)};function gd(u){if(z_(u),u.G==3){var d=u.U++,p=Vn(u.I);if(ve(p,"SID",u.K),ve(p,"RID",d),ve(p,"TYPE","terminate"),Qo(u,p),d=new ur(u,u.j,d),d.L=2,d.v=Yl(Vn(p)),p=!1,a.navigator&&a.navigator.sendBeacon)try{p=a.navigator.sendBeacon(d.v.toString(),"")}catch{}!p&&a.Image&&(new Image().src=d.v,p=!0),p||(d.g=Y_(d.j,null),d.g.ea(d.v)),d.F=Date.now(),Hl(d)}Q_(u)}function tu(u){u.g&&(yd(u),u.g.cancel(),u.g=null)}function z_(u){tu(u),u.u&&(a.clearTimeout(u.u),u.u=null),ru(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&a.clearTimeout(u.s),u.s=null)}function nu(u){if(!T_(u.h)&&!u.s){u.s=!0;var d=u.Ga;kn||te(),K||(kn(),K=!0),Z.add(d,u),u.B=0}}function pP(u,d){return S_(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=d.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Bo(m(u.Ga,u,d),H_(u,u.B)),u.B++,!0)}t.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const D=new ur(this,this.j,u);let O=this.o;if(this.S&&(O?(O=y(O),A(O,this.S)):O=this.S),this.m!==null||this.O||(D.H=O,O=null),this.P)e:{for(var d=0,p=0;p<this.i.length;p++){t:{var g=this.i[p];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(d+=g,4096<d){d=p;break e}if(d===4096||p===this.i.length-1){d=p+1;break e}}d=1e3}else d=1e3;d=q_(this,D,d),p=Vn(this.I),ve(p,"RID",u),ve(p,"CVER",22),this.D&&ve(p,"X-HTTP-Session-Id",this.D),Qo(this,p),O&&(this.O?d="headers="+encodeURIComponent(String(O_(O)))+"&"+d:this.m&&md(p,this.m,O)),pd(this.h,D),this.Ua&&ve(p,"TYPE","init"),this.P?(ve(p,"$req",d),ve(p,"SID","null"),D.T=!0,cd(D,p,null)):cd(D,p,d),this.G=2}}else this.G==3&&(u?$_(this,u):this.i.length==0||T_(this.h)||$_(this))};function $_(u,d){var p;d?p=d.l:p=u.U++;const g=Vn(u.I);ve(g,"SID",u.K),ve(g,"RID",p),ve(g,"AID",u.T),Qo(u,g),u.m&&u.o&&md(g,u.m,u.o),p=new ur(u,u.j,p,u.B+1),u.m===null&&(p.H=u.o),d&&(u.i=d.D.concat(u.i)),d=q_(u,p,1e3),p.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),pd(u.h,p),cd(p,g,d)}function Qo(u,d){u.H&&F(u.H,function(p,g){ve(d,g,p)}),u.l&&P_({},function(p,g){ve(d,g,p)})}function q_(u,d,p){p=Math.min(u.i.length,p);var g=u.l?m(u.l.Na,u.l,u):null;e:{var D=u.i;let O=-1;for(;;){const $=["count="+p];O==-1?0<p?(O=D[0].g,$.push("ofs="+O)):O=0:$.push("ofs="+O);let me=!0;for(let it=0;it<p;it++){let ue=D[it].g;const dt=D[it].map;if(ue-=O,0>ue)O=Math.max(0,D[it].g-100),me=!1;else try{cP(dt,$,"req"+ue+"_")}catch{g&&g(dt)}}if(me){g=$.join("&");break e}}}return u=u.i.splice(0,p),d.D=u,g}function G_(u){if(!u.g&&!u.u){u.Y=1;var d=u.Fa;kn||te(),K||(kn(),K=!0),Z.add(d,u),u.v=0}}function _d(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Bo(m(u.Fa,u),H_(u,u.v)),u.v++,!0)}t.Fa=function(){if(this.u=null,K_(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Bo(m(this.ab,this),u)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Tt(10),tu(this),K_(this))};function yd(u){u.A!=null&&(a.clearTimeout(u.A),u.A=null)}function K_(u){u.g=new ur(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var d=Vn(u.qa);ve(d,"RID","rpc"),ve(d,"SID",u.K),ve(d,"AID",u.T),ve(d,"CI",u.F?"0":"1"),!u.F&&u.ja&&ve(d,"TO",u.ja),ve(d,"TYPE","xmlhttp"),Qo(u,d),u.m&&u.o&&md(d,u.m,u.o),u.L&&(u.g.I=u.L);var p=u.g;u=u.ia,p.L=1,p.v=Yl(Vn(d)),p.m=null,p.P=!0,v_(p,u)}t.Za=function(){this.C!=null&&(this.C=null,tu(this),_d(this),Tt(19))};function ru(u){u.C!=null&&(a.clearTimeout(u.C),u.C=null)}function W_(u,d){var p=null;if(u.g==d){ru(u),yd(u),u.g=null;var g=2}else if(fd(u.h,d))p=d.D,A_(u.h,d),g=1;else return;if(u.G!=0){if(d.o)if(g==1){p=d.m?d.m.length:0,d=Date.now()-d.F;var D=u.B;g=Gl(),It(g,new m_(g,p)),nu(u)}else G_(u);else if(D=d.s,D==3||D==0&&0<d.X||!(g==1&&pP(u,d)||g==2&&_d(u)))switch(p&&0<p.length&&(d=u.h,d.i=d.i.concat(p)),D){case 1:mi(u,5);break;case 4:mi(u,10);break;case 3:mi(u,6);break;default:mi(u,2)}}}function H_(u,d){let p=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(p*=2),p*d}function mi(u,d){if(u.j.info("Error code "+d),d==2){var p=m(u.fb,u),g=u.Xa;const D=!g;g=new pi(g||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Ql(g,"https"),Yl(g),D?aP(g.toString(),p):lP(g.toString(),p)}else Tt(2);u.G=0,u.l&&u.l.sa(d),Q_(u),z_(u)}t.fb=function(u){u?(this.j.info("Successfully pinged google.com"),Tt(2)):(this.j.info("Failed to ping google.com"),Tt(1))};function Q_(u){if(u.G=0,u.ka=[],u.l){const d=R_(u.h);(d.length!=0||u.i.length!=0)&&(C(u.ka,d),C(u.ka,u.i),u.h.i.length=0,P(u.i),u.i.length=0),u.l.ra()}}function J_(u,d,p){var g=p instanceof pi?Vn(p):new pi(p);if(g.g!="")d&&(g.g=d+"."+g.g),Jl(g,g.s);else{var D=a.location;g=D.protocol,d=d?d+"."+D.hostname:D.hostname,D=+D.port;var O=new pi(null);g&&Ql(O,g),d&&(O.g=d),D&&Jl(O,D),p&&(O.l=p),g=O}return p=u.D,d=u.ya,p&&d&&ve(g,p,d),ve(g,"VER",u.la),Qo(u,g),g}function Y_(u,d,p){if(d&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=u.Ca&&!u.pa?new Oe(new Xl({eb:p})):new Oe(u.pa),d.Ha(u.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function X_(){}t=X_.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function iu(){}iu.prototype.g=function(u,d){return new Mt(u,d)};function Mt(u,d){ht.call(this),this.g=new j_(d),this.l=u,this.h=d&&d.messageUrlParams||null,u=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(u?u["X-WebChannel-Content-Type"]=d.messageContentType:u={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(u?u["X-WebChannel-Client-Profile"]=d.va:u={"X-WebChannel-Client-Profile":d.va}),this.g.S=u,(u=d&&d.Sb)&&!v(u)&&(this.g.m=u),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!v(d)&&(this.g.D=d,u=this.h,u!==null&&d in u&&(u=this.h,d in u&&delete u[d])),this.j=new ls(this)}S(Mt,ht),Mt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Mt.prototype.close=function(){gd(this.g)},Mt.prototype.o=function(u){var d=this.g;if(typeof u=="string"){var p={};p.__data__=u,u=p}else this.u&&(p={},p.__data__=id(u),u=p);d.i.push(new YR(d.Ya++,u)),d.G==3&&nu(d)},Mt.prototype.N=function(){this.g.l=null,delete this.j,gd(this.g),delete this.g,Mt.aa.N.call(this)};function Z_(u){od.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var d=u.__sm__;if(d){e:{for(const p in d){u=p;break e}u=void 0}(this.i=u)&&(u=this.i,d=d!==null&&u in d?d[u]:void 0),this.data=d}else this.data=u}S(Z_,od);function ey(){ad.call(this),this.status=1}S(ey,ad);function ls(u){this.g=u}S(ls,X_),ls.prototype.ua=function(){It(this.g,"a")},ls.prototype.ta=function(u){It(this.g,new Z_(u))},ls.prototype.sa=function(u){It(this.g,new ey)},ls.prototype.ra=function(){It(this.g,"b")},iu.prototype.createWebChannel=iu.prototype.g,Mt.prototype.send=Mt.prototype.o,Mt.prototype.open=Mt.prototype.m,Mt.prototype.close=Mt.prototype.close,nS=function(){return new iu},tS=function(){return Gl()},eS=di,yp={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Kl.NO_ERROR=0,Kl.TIMEOUT=8,Kl.HTTP_ERROR=6,Yu=Kl,g_.COMPLETE="complete",Z0=g_,h_.EventType=Fo,Fo.OPEN="a",Fo.CLOSE="b",Fo.ERROR="c",Fo.MESSAGE="d",ht.prototype.listen=ht.prototype.K,ga=h_,Oe.prototype.listenOnce=Oe.prototype.L,Oe.prototype.getLastError=Oe.prototype.Ka,Oe.prototype.getLastErrorCode=Oe.prototype.Ba,Oe.prototype.getStatus=Oe.prototype.Z,Oe.prototype.getResponseJson=Oe.prototype.Oa,Oe.prototype.getResponseText=Oe.prototype.oa,Oe.prototype.send=Oe.prototype.ea,Oe.prototype.setWithCredentials=Oe.prototype.Ha,X0=Oe}).apply(typeof Au<"u"?Au:typeof self<"u"?self:typeof window<"u"?window:{});const Zv="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}et.UNAUTHENTICATED=new et(null),et.GOOGLE_CREDENTIALS=new et("google-credentials-uid"),et.FIRST_PARTY=new et("first-party-uid"),et.MOCK_USER=new et("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ro="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hr=new Um("@firebase/firestore");function ms(){return Hr.logLevel}function EU(t){Hr.setLogLevel(t)}function U(t,...e){if(Hr.logLevel<=ie.DEBUG){const n=e.map(Ym);Hr.debug(`Firestore (${Ro}): ${t}`,...n)}}function ze(t,...e){if(Hr.logLevel<=ie.ERROR){const n=e.map(Ym);Hr.error(`Firestore (${Ro}): ${t}`,...n)}}function Zt(t,...e){if(Hr.logLevel<=ie.WARN){const n=e.map(Ym);Hr.warn(`Firestore (${Ro}): ${t}`,...n)}}function Ym(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W(t="Unexpected state"){const e=`FIRESTORE (${Ro}) INTERNAL ASSERTION FAILED: `+t;throw ze(e),new Error(e)}function Q(t,e){t||W()}function IU(t,e){t||W()}function z(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends Cn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class nO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(et.UNAUTHENTICATED))}shutdown(){}}class rO{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class iO{constructor(e){this.t=e,this.currentUser=et.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Q(this.o===void 0);let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new nt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new nt,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new nt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Q(typeof r.accessToken=="string"),new rS(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Q(e===null||typeof e=="string"),new et(e)}}class sO{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=et.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class oO{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new sO(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(et.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class iS{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class aO{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Q(this.o===void 0);const r=s=>{s.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,U("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Q(typeof n.token=="string"),this.R=n.token,new iS(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}class TU{getToken(){return Promise.resolve(new iS(""))}invalidateToken(){}start(e,n){}shutdown(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lO(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=lO(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function X(t,e){return t<e?-1:t>e?1:0}function eo(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function oS(t){return t+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new B(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new B(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new B(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return De.fromMillis(Date.now())}static fromDate(e){return De.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new De(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?X(this.nanoseconds,e.nanoseconds):X(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.timestamp=e}static fromTimestamp(e){return new J(e)}static min(){return new J(new De(0,0))}static max(){return new J(new De(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(e,n,r){n===void 0?n=0:n>e.length&&W(),r===void 0?r=e.length-n:r>e.length-n&&W(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return rl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof rl?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class se extends rl{construct(e,n,r){return new se(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new B(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new se(n)}static emptyPath(){return new se([])}}const uO=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Re extends rl{construct(e,n,r){return new Re(e,n,r)}static isValidIdentifier(e){return uO.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Re.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Re(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new B(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new B(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new B(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new B(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Re(n)}static emptyPath(){return new Re([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(se.fromString(e))}static fromName(e){return new q(se.fromString(e).popFirst(5))}static empty(){return new q(se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return se.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new se(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e,n,r,i){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=i}}function vp(t){return t.fields.find(e=>e.kind===2)}function wi(t){return t.fields.filter(e=>e.kind!==2)}function cO(t,e){let n=X(t.collectionGroup,e.collectionGroup);if(n!==0)return n;for(let r=0;r<Math.min(t.fields.length,e.fields.length);++r)if(n=hO(t.fields[r],e.fields[r]),n!==0)return n;return X(t.fields.length,e.fields.length)}to.UNKNOWN_ID=-1;class Di{constructor(e,n){this.fieldPath=e,this.kind=n}}function hO(t,e){const n=Re.comparator(t.fieldPath,e.fieldPath);return n!==0?n:X(t.kind,e.kind)}class no{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new no(0,$t.min())}}function aS(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=J.fromTimestamp(r===1e9?new De(n+1,0):new De(n,r));return new $t(i,q.empty(),e)}function lS(t){return new $t(t.readTime,t.key,-1)}class $t{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new $t(J.min(),q.empty(),-1)}static max(){return new $t(J.max(),q.empty(),-1)}}function Xm(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=q.comparator(t.documentKey,e.documentKey),n!==0?n:X(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class cS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oi(t){if(t.code!==V.FAILED_PRECONDITION||t.message!==uS)throw t;U("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&W(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new b((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof b?n:b.resolve(n)}catch(n){return b.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):b.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):b.reject(n)}static resolve(e){return new b((n,r)=>{n(e)})}static reject(e){return new b((n,r)=>{r(e)})}static waitFor(e){return new b((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=b.resolve(!1);for(const r of e)n=n.next(i=>i?b.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new b((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const c=l;n(e[c]).next(h=>{o[c]=h,++a,a===s&&r(o)},h=>i(h))}})}static doWhile(e,n){return new b((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.V=new nt,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new xa(e,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=Zm(r.target.error);this.V.reject(new xa(e,i))}}static open(e,n,r,i){try{return new Rh(n,e.transaction(i,r))}catch(s){throw new xa(n,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(U("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new fO(n)}}class Tn{constructor(e,n,r){this.name=e,this.version=n,this.p=r,Tn.S(Je())===12.2&&ze("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return U("SimpleDb","Removing database:",e),Ei(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!c0())return!1;if(Tn.v())return!0;const e=Je(),n=Tn.S(e),r=0<n&&n<10,i=hS(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static v(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.C)==="YES"}static F(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}async M(e){return this.db||(U("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new xa(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new B(V.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new B(V.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new xa(e,o))},i.onupgradeneeded=s=>{U("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.O(o,i.transaction,s.oldVersion,this.version).next(()=>{U("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=n=>this.N(n)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.M(e);const a=Rh.open(this.db,e,s?"readonly":"readwrite",r),l=i(a).next(c=>(a.g(),c)).catch(c=>(a.abort(c),b.reject(c))).toPromise();return l.catch(()=>{}),await a.m,l}catch(a){const l=a,c=l.name!=="FirebaseError"&&o<3;if(U("SimpleDb","Transaction failed with error:",l.message,"Retrying:",c),this.close(),!c)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}function hS(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}class dO{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return Ei(this.B.delete())}}class xa extends B{constructor(e,n){super(V.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function ai(t){return t.name==="IndexedDbTransactionError"}class fO{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(U("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(U("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Ei(r)}add(e){return U("SimpleDb","ADD",this.store.name,e,e),Ei(this.store.add(e))}get(e){return Ei(this.store.get(e)).next(n=>(n===void 0&&(n=null),U("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return U("SimpleDb","DELETE",this.store.name,e),Ei(this.store.delete(e))}count(){return U("SimpleDb","COUNT",this.store.name),Ei(this.store.count())}U(e,n){const r=this.options(e,n),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new b((o,a)=>{s.onerror=l=>{a(l.target.error)},s.onsuccess=l=>{o(l.target.result)}})}{const s=this.cursor(r),o=[];return this.W(s,(a,l)=>{o.push(l)}).next(()=>o)}}G(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new b((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}j(e,n){U("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.H=!1;const i=this.cursor(r);return this.W(i,(s,o,a)=>a.delete())}J(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.W(i,n)}Y(e){const n=this.cursor({});return new b((r,i)=>{n.onerror=s=>{const o=Zm(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}W(e,n){const r=[];return new b((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const l=new dO(a),c=n(a.primaryKey,a.value,l);if(c instanceof b){const h=c.catch(f=>(l.done(),b.reject(f)));r.push(h)}l.isDone?i():l.K===null?a.continue():a.continue(l.K)}}).next(()=>b.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.H?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function Ei(t){return new b((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=Zm(r.target.error);n(i)}})}let ew=!1;function Zm(t){const e=Tn.S(Je());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new B("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return ew||(ew=!0,setTimeout(()=>{throw r},0)),r}}return t}class pO{constructor(e,n){this.asyncQueue=e,this.Z=n,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){U("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{U("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(n){ai(n)?U("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",n):await oi(n)}await this.X(6e4)})}}class mO{constructor(e,n){this.localStore=e,this.persistence=n}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.te(n,e))}te(e,n){const r=new Set;let i=n,s=!0;return b.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return U("IndexBackfiller",`Processing collection: ${o}`),this.ne(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>n-i)}ne(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(i=>this.localStore.localDocuments.getNextDocuments(e,n,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.re(i,s)).next(a=>(U("IndexBackfiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}re(e,n){let r=e;return n.changes.forEach((i,s)=>{const o=lS(s);Xm(o,r)>0&&(r=o)}),new $t(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}bt.oe=-1;function Cl(t){return t==null}function il(t){return t===0&&1/t==-1/0}function dS(t){return typeof t=="number"&&Number.isInteger(t)&&!il(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=tw(e)),e=gO(t.get(n),e);return tw(e)}function gO(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function tw(t){return t+""}function mn(t){const e=t.length;if(Q(e>=2),e===2)return Q(t.charAt(0)===""&&t.charAt(1)===""),se.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&W(),t.charAt(o+1)){case"":const a=t.substring(s,o);let l;i.length===0?l=a:(i+=a,l=i,i=""),r.push(l);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:W()}s=o+2}return new se(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nw=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xu(t,e){return[t,vt(e)]}function fS(t,e,n){return[t,vt(e),n]}const _O={},yO=["prefixPath","collectionGroup","readTime","documentId"],vO=["prefixPath","collectionGroup","documentId"],wO=["collectionGroup","readTime","prefixPath","documentId"],EO=["canonicalId","targetId"],IO=["targetId","path"],TO=["path","targetId"],SO=["collectionId","parent"],AO=["indexId","uid"],RO=["uid","sequenceNumber"],PO=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],CO=["indexId","uid","orderedDocumentKey"],kO=["userId","collectionPath","documentId"],xO=["userId","collectionPath","largestBatchId"],bO=["userId","collectionGroup","largestBatchId"],pS=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],DO=[...pS,"documentOverlays"],mS=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],gS=mS,eg=[...gS,"indexConfiguration","indexState","indexEntries"],NO=eg,VO=[...eg,"globals"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wp extends cS{constructor(e,n){super(),this._e=e,this.currentSequenceNumber=n}}function Ye(t,e){const n=z(t);return Tn.F(n._e,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rw(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function li(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function _S(t,e){const n=[];for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.push(e(t[r],r,t));return n}function yS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e,n){this.comparator=e,this.root=n||ot.EMPTY}insert(e,n){return new ye(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ot.BLACK,null,null))}remove(e){return new ye(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ot.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ru(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ru(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ru(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ru(this.root,e,this.comparator,!0)}}class Ru{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ot{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??ot.RED,this.left=i??ot.EMPTY,this.right=s??ot.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new ot(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ot.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return ot.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ot.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ot.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw W();const e=this.left.check();if(e!==this.right.check())throw W();return e+(this.isRed()?0:1)}}ot.EMPTY=null,ot.RED=!0,ot.BLACK=!1;ot.EMPTY=new class{constructor(){this.size=0}get key(){throw W()}get value(){throw W()}get color(){throw W()}get left(){throw W()}get right(){throw W()}copy(e,n,r,i,s){return this}insert(e,n,r){return new ot(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e){this.comparator=e,this.data=new ye(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new iw(this.data.getIterator())}getIteratorFrom(e){return new iw(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof fe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new fe(this.comparator);return n.data=e,n}}class iw{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function hs(t){return t.hasNext()?t.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.fields=e,e.sort(Re.comparator)}static empty(){return new Dt([])}unionWith(e){let n=new fe(Re.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Dt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return eo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vS extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AU(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new vS("Invalid base64 string: "+s):s}}(e);return new Me(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Me(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return X(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Me.EMPTY_BYTE_STRING=new Me("");const OO=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function er(t){if(Q(!!t),typeof t=="string"){let e=0;const n=OO.exec(t);if(Q(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Se(t.seconds),nanos:Se(t.nanos)}}function Se(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function tr(t){return typeof t=="string"?Me.fromBase64String(t):Me.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ph(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Ch(t){const e=t.mapValue.fields.__previous_value__;return Ph(e)?Ch(e):e}function sl(t){const e=er(t.mapValue.fields.__local_write_time__.timestampValue);return new De(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LO{constructor(e,n,r,i,s,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class zi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new zi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof zi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Zu={nullValue:"NULL_VALUE"};function Qr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ph(t)?4:wS(t)?9007199254740991:kh(t)?10:11:W()}function Rn(t,e){if(t===e)return!0;const n=Qr(t);if(n!==Qr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return sl(t).isEqual(sl(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=er(i.timestampValue),a=er(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return tr(i.bytesValue).isEqual(tr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Se(i.geoPointValue.latitude)===Se(s.geoPointValue.latitude)&&Se(i.geoPointValue.longitude)===Se(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Se(i.integerValue)===Se(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Se(i.doubleValue),a=Se(s.doubleValue);return o===a?il(o)===il(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return eo(t.arrayValue.values||[],e.arrayValue.values||[],Rn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(rw(o)!==rw(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Rn(o[l],a[l])))return!1;return!0}(t,e);default:return W()}}function ol(t,e){return(t.values||[]).find(n=>Rn(n,e))!==void 0}function Jr(t,e){if(t===e)return 0;const n=Qr(t),r=Qr(e);if(n!==r)return X(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return X(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Se(s.integerValue||s.doubleValue),l=Se(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return sw(t.timestampValue,e.timestampValue);case 4:return sw(sl(t),sl(e));case 5:return X(t.stringValue,e.stringValue);case 6:return function(s,o){const a=tr(s),l=tr(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const h=X(a[c],l[c]);if(h!==0)return h}return X(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=X(Se(s.latitude),Se(o.latitude));return a!==0?a:X(Se(s.longitude),Se(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return ow(t.arrayValue,e.arrayValue);case 10:return function(s,o){var a,l,c,h;const f=s.fields||{},m=o.fields||{},_=(a=f.value)===null||a===void 0?void 0:a.arrayValue,S=(l=m.value)===null||l===void 0?void 0:l.arrayValue,P=X(((c=_==null?void 0:_.values)===null||c===void 0?void 0:c.length)||0,((h=S==null?void 0:S.values)===null||h===void 0?void 0:h.length)||0);return P!==0?P:ow(_,S)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Dr.mapValue&&o===Dr.mapValue)return 0;if(s===Dr.mapValue)return 1;if(o===Dr.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),c=o.fields||{},h=Object.keys(c);l.sort(),h.sort();for(let f=0;f<l.length&&f<h.length;++f){const m=X(l[f],h[f]);if(m!==0)return m;const _=Jr(a[l[f]],c[h[f]]);if(_!==0)return _}return X(l.length,h.length)}(t.mapValue,e.mapValue);default:throw W()}}function sw(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return X(t,e);const n=er(t),r=er(e),i=X(n.seconds,r.seconds);return i!==0?i:X(n.nanos,r.nanos)}function ow(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Jr(n[i],r[i]);if(s)return s}return X(n.length,r.length)}function ro(t){return Ep(t)}function Ep(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=er(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return tr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Ep(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Ep(n.fields[o])}`;return i+"}"}(t.mapValue):W()}function ec(t){switch(Qr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ch(t);return e?16+ec(e):16;case 5:return 2*t.stringValue.length;case 6:return tr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+ec(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return li(r.fields,(s,o)=>{i+=s.length+ec(o)}),i}(t.mapValue);default:throw W()}}function $i(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Ip(t){return!!t&&"integerValue"in t}function al(t){return!!t&&"arrayValue"in t}function aw(t){return!!t&&"nullValue"in t}function lw(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function tc(t){return!!t&&"mapValue"in t}function kh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function ba(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return li(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ba(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ba(t.arrayValue.values[n]);return e}return Object.assign({},t)}function wS(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}const ES={mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{}}}}};function MO(t){return"nullValue"in t?Zu:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?$i(zi.empty(),q.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?kh(t)?ES:{mapValue:{}}:W()}function FO(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?$i(zi.empty(),q.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?ES:"mapValue"in t?kh(t)?{mapValue:{}}:Dr:W()}function uw(t,e){const n=Jr(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function cw(t,e){const n=Jr(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.value=e}static empty(){return new at({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!tc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ba(n)}setAll(e){let n=Re.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=ba(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());tc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Rn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];tc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){li(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new at(ba(this.value))}}function IS(t){const e=[];return li(t.fields,(n,r)=>{const i=new Re([n]);if(tc(r)){const s=IS(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Dt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ee(e,0,J.min(),J.min(),J.min(),at.empty(),0)}static newFoundDocument(e,n,r,i){return new Ee(e,1,n,J.min(),r,i,0)}static newNoDocument(e,n){return new Ee(e,2,n,J.min(),J.min(),at.empty(),0)}static newUnknownDocument(e,n){return new Ee(e,3,n,J.min(),J.min(),at.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=at.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=at.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ee&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ee(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e,n){this.position=e,this.inclusive=n}}function hw(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=q.comparator(q.fromName(o.referenceValue),n.key):r=Jr(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function dw(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Rn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(e,n="asc"){this.field=e,this.dir=n}}function UO(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TS{}class oe extends TS{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new BO(e,n,r):n==="array-contains"?new $O(e,r):n==="in"?new kS(e,r):n==="not-in"?new qO(e,r):n==="array-contains-any"?new GO(e,r):new oe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new jO(e,r):new zO(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Jr(n,this.value)):n!==null&&Qr(this.value)===Qr(n)&&this.matchesComparison(Jr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return W()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class he extends TS{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new he(e,n)}matches(e){return io(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function io(t){return t.op==="and"}function Tp(t){return t.op==="or"}function tg(t){return SS(t)&&io(t)}function SS(t){for(const e of t.filters)if(e instanceof he)return!1;return!0}function Sp(t){if(t instanceof oe)return t.field.canonicalString()+t.op.toString()+ro(t.value);if(tg(t))return t.filters.map(e=>Sp(e)).join(",");{const e=t.filters.map(n=>Sp(n)).join(",");return`${t.op}(${e})`}}function AS(t,e){return t instanceof oe?function(r,i){return i instanceof oe&&r.op===i.op&&r.field.isEqual(i.field)&&Rn(r.value,i.value)}(t,e):t instanceof he?function(r,i){return i instanceof he&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&AS(o,i.filters[a]),!0):!1}(t,e):void W()}function RS(t,e){const n=t.filters.concat(e);return he.create(n,t.op)}function PS(t){return t instanceof oe?function(n){return`${n.field.canonicalString()} ${n.op} ${ro(n.value)}`}(t):t instanceof he?function(n){return n.op.toString()+" {"+n.getFilters().map(PS).join(" ,")+"}"}(t):"Filter"}class BO extends oe{constructor(e,n,r){super(e,n,r),this.key=q.fromName(r.referenceValue)}matches(e){const n=q.comparator(e.key,this.key);return this.matchesComparison(n)}}class jO extends oe{constructor(e,n){super(e,"in",n),this.keys=CS("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class zO extends oe{constructor(e,n){super(e,"not-in",n),this.keys=CS("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function CS(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>q.fromName(r.referenceValue))}class $O extends oe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return al(n)&&ol(n.arrayValue,this.value)}}class kS extends oe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ol(this.value.arrayValue,n)}}class qO extends oe{constructor(e,n){super(e,"not-in",n)}matches(e){if(ol(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ol(this.value.arrayValue,n)}}class GO extends oe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!al(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ol(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KO{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function Ap(t,e=null,n=[],r=[],i=null,s=null,o=null){return new KO(t,e,n,r,i,s,o)}function qi(t){const e=z(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Sp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Cl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ro(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ro(r)).join(",")),e.ue=n}return e.ue}function kl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!UO(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!AS(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!dw(t.startAt,e.startAt)&&dw(t.endAt,e.endAt)}function jc(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function zc(t,e){return t.filters.filter(n=>n instanceof oe&&n.field.isEqual(e))}function fw(t,e,n){let r=Zu,i=!0;for(const s of zc(t,e)){let o=Zu,a=!0;switch(s.op){case"<":case"<=":o=MO(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=Zu}uw({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];uw({value:r,inclusive:i},{value:o,inclusive:n.inclusive})<0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}function pw(t,e,n){let r=Dr,i=!0;for(const s of zc(t,e)){let o=Dr,a=!0;switch(s.op){case">=":case">":o=FO(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=Dr}cw({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];cw({value:r,inclusive:i},{value:o,inclusive:n.inclusive})>0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function xS(t,e,n,r,i,s,o,a){return new sr(t,e,n,r,i,s,o,a)}function Po(t){return new sr(t)}function mw(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function ng(t){return t.collectionGroup!==null}function zs(t){const e=z(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new fe(Re.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new ll(s,r))}),n.has(Re.keyField().canonicalString())||e.ce.push(new ll(Re.keyField(),r))}return e.ce}function wt(t){const e=z(t);return e.le||(e.le=DS(e,zs(t))),e.le}function bS(t){const e=z(t);return e.he||(e.he=DS(e,t.explicitOrderBy)),e.he}function DS(t,e){if(t.limitType==="F")return Ap(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new ll(i.field,s)});const n=t.endAt?new Yr(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Yr(t.startAt.position,t.startAt.inclusive):null;return Ap(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Rp(t,e){const n=t.filters.concat([e]);return new sr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function $c(t,e,n){return new sr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function xl(t,e){return kl(wt(t),wt(e))&&t.limitType===e.limitType}function NS(t){return`${qi(wt(t))}|lt:${t.limitType}`}function gs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>PS(i)).join(", ")}]`),Cl(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>ro(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>ro(i)).join(",")),`Target(${r})`}(wt(t))}; limitType=${t.limitType})`}function bl(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):q.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of zs(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const c=hw(o,a,l);return o.inclusive?c<=0:c<0}(r.startAt,zs(r),i)||r.endAt&&!function(o,a,l){const c=hw(o,a,l);return o.inclusive?c>=0:c>0}(r.endAt,zs(r),i))}(t,e)}function VS(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function OS(t){return(e,n)=>{let r=!1;for(const i of zs(t)){const s=WO(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function WO(t,e,n){const r=t.field.isKeyField()?q.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),c=a.data.field(s);return l!==null&&c!==null?Jr(l,c):W()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return W()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){li(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return yS(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HO=new ye(q.comparator);function Nt(){return HO}const LS=new ye(q.comparator);function _a(...t){let e=LS;for(const n of t)e=e.insert(n.key,n);return e}function MS(t){let e=LS;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function gn(){return Da()}function FS(){return Da()}function Da(){return new or(t=>t.toString(),(t,e)=>t.isEqual(e))}const QO=new ye(q.comparator),JO=new fe(q.comparator);function ee(...t){let e=JO;for(const n of t)e=e.add(n);return e}const YO=new fe(X);function rg(){return YO}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ig(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:il(e)?"-0":e}}function US(t){return{integerValue:""+t}}function BS(t,e){return dS(e)?US(e):ig(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(){this._=void 0}}function XO(t,e,n){return t instanceof so?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Ph(s)&&(s=Ch(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Gi?zS(t,e):t instanceof Ki?$S(t,e):function(i,s){const o=jS(i,s),a=gw(o)+gw(i.Pe);return Ip(o)&&Ip(i.Pe)?US(a):ig(i.serializer,a)}(t,e)}function ZO(t,e,n){return t instanceof Gi?zS(t,e):t instanceof Ki?$S(t,e):n}function jS(t,e){return t instanceof oo?function(r){return Ip(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class so extends xh{}class Gi extends xh{constructor(e){super(),this.elements=e}}function zS(t,e){const n=qS(e);for(const r of t.elements)n.some(i=>Rn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ki extends xh{constructor(e){super(),this.elements=e}}function $S(t,e){let n=qS(e);for(const r of t.elements)n=n.filter(i=>!Rn(i,r));return{arrayValue:{values:n}}}class oo extends xh{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function gw(t){return Se(t.integerValue||t.doubleValue)}function qS(t){return al(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(e,n){this.field=e,this.transform=n}}function eL(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Gi&&i instanceof Gi||r instanceof Ki&&i instanceof Ki?eo(r.elements,i.elements,Rn):r instanceof oo&&i instanceof oo?Rn(r.Pe,i.Pe):r instanceof so&&i instanceof so}(t.transform,e.transform)}class tL{constructor(e,n){this.version=e,this.transformResults=n}}class Pe{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Pe}static exists(e){return new Pe(void 0,e)}static updateTime(e){return new Pe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function nc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class bh{}function GS(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ko(t.key,Pe.none()):new Co(t.key,t.data,Pe.none());{const n=t.data,r=at.empty();let i=new fe(Re.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ar(t.key,r,new Dt(i.toArray()),Pe.none())}}function nL(t,e,n){t instanceof Co?function(i,s,o){const a=i.value.clone(),l=yw(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof ar?function(i,s,o){if(!nc(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=yw(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(KS(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Na(t,e,n,r){return t instanceof Co?function(s,o,a,l){if(!nc(s.precondition,o))return a;const c=s.value.clone(),h=vw(s.fieldTransforms,l,o);return c.setAll(h),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof ar?function(s,o,a,l){if(!nc(s.precondition,o))return a;const c=vw(s.fieldTransforms,l,o),h=o.data;return h.setAll(KS(s)),h.setAll(c),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,a){return nc(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function rL(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=jS(r.transform,i||null);s!=null&&(n===null&&(n=at.empty()),n.set(r.field,s))}return n||null}function _w(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&eo(r,i,(s,o)=>eL(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Co extends bh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ar extends bh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function KS(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function yw(t,e,n){const r=new Map;Q(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,ZO(o,a,n[i]))}return r}function vw(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,XO(s,o,e))}return r}class ko extends bh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class sg extends bh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&nL(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Na(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Na(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=FS();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=GS(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ee())}isEqual(e){return this.batchId===e.batchId&&eo(this.mutations,e.mutations,(n,r)=>_w(n,r))&&eo(this.baseMutations,e.baseMutations,(n,r)=>_w(n,r))}}class ag{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Q(e.mutations.length===r.length);let i=function(){return QO}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new ag(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WS{constructor(e,n,r){this.alias=e,this.aggregateType=n,this.fieldPath=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iL{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ge,ae;function HS(t){switch(t){default:return W();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0}}function QS(t){if(t===void 0)return ze("GRPC error has no .code"),V.UNKNOWN;switch(t){case Ge.OK:return V.OK;case Ge.CANCELLED:return V.CANCELLED;case Ge.UNKNOWN:return V.UNKNOWN;case Ge.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case Ge.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case Ge.INTERNAL:return V.INTERNAL;case Ge.UNAVAILABLE:return V.UNAVAILABLE;case Ge.UNAUTHENTICATED:return V.UNAUTHENTICATED;case Ge.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case Ge.NOT_FOUND:return V.NOT_FOUND;case Ge.ALREADY_EXISTS:return V.ALREADY_EXISTS;case Ge.PERMISSION_DENIED:return V.PERMISSION_DENIED;case Ge.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case Ge.ABORTED:return V.ABORTED;case Ge.OUT_OF_RANGE:return V.OUT_OF_RANGE;case Ge.UNIMPLEMENTED:return V.UNIMPLEMENTED;case Ge.DATA_LOSS:return V.DATA_LOSS;default:return W()}}(ae=Ge||(Ge={}))[ae.OK=0]="OK",ae[ae.CANCELLED=1]="CANCELLED",ae[ae.UNKNOWN=2]="UNKNOWN",ae[ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ae[ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ae[ae.NOT_FOUND=5]="NOT_FOUND",ae[ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",ae[ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",ae[ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",ae[ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ae[ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ae[ae.ABORTED=10]="ABORTED",ae[ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",ae[ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",ae[ae.INTERNAL=13]="INTERNAL",ae[ae.UNAVAILABLE=14]="UNAVAILABLE",ae[ae.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qc=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JS(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sL=new bi([4294967295,4294967295],0);function ww(t){const e=JS().encode(t),n=new Y0;return n.update(e),new Uint8Array(n.digest())}function Ew(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new bi([n,r],0),new bi([i,s],0)]}class ug{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ya(`Invalid padding: ${n}`);if(r<0)throw new ya(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ya(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ya(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=bi.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(bi.fromNumber(r)));return i.compare(sL)===1&&(i=new bi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=ww(e),[r,i]=Ew(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new ug(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=ww(e),[r,i]=Ew(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ya extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Vl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Nl(J.min(),i,new ye(X),Nt(),ee())}}class Vl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Vl(r,n,ee(),ee(),ee())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class YS{constructor(e,n){this.targetId=e,this.me=n}}class XS{constructor(e,n,r=Me.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Iw{constructor(){this.fe=0,this.ge=Sw(),this.pe=Me.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ee(),n=ee(),r=ee();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:W()}}),new Vl(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Sw()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Q(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class oL{constructor(e){this.Le=e,this.Be=new Map,this.ke=Nt(),this.qe=Tw(),this.Qe=new ye(X)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:W()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(jc(s))if(r===0){const o=new q(s.path);this.Ue(n,o,Ee.newNoDocument(o,J.min()))}else Q(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),l=a?this.Xe(a,e,o):1;if(l!==0){this.je(n);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}qc==null||qc.et(function(h,f,m,_,S){var P,C,E,v,w,x;const M={localCacheCount:h,existenceFilterCount:f.count,databaseId:m.database,projectId:m.projectId},F=f.unchangedNames;return F&&(M.bloomFilter={applied:S===0,hashCount:(P=F==null?void 0:F.hashCount)!==null&&P!==void 0?P:0,bitmapLength:(v=(E=(C=F==null?void 0:F.bits)===null||C===void 0?void 0:C.bitmap)===null||E===void 0?void 0:E.length)!==null&&v!==void 0?v:0,padding:(x=(w=F==null?void 0:F.bits)===null||w===void 0?void 0:w.padding)!==null&&x!==void 0?x:0,mightContain:I=>{var y;return(y=_==null?void 0:_.mightContain(I))!==null&&y!==void 0&&y}}),M}(o,e.me,this.Le.tt(),a,l))}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=tr(r).toUint8Array()}catch(l){if(l instanceof vS)return Zt("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new ug(o,i,s)}catch(l){return Zt(l instanceof ya?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&jc(a.target)){const l=new q(a.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,Ee.newNoDocument(l,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=ee();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Je(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Nl(e,n,this.Qe,this.ke,r);return this.ke=Nt(),this.qe=Tw(),this.Qe=new ye(X),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Iw,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new fe(X),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||U("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Iw),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Tw(){return new ye(q.comparator)}function Sw(){return new ye(q.comparator)}const aL={asc:"ASCENDING",desc:"DESCENDING"},lL={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},uL={and:"AND",or:"OR"};class cL{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Pp(t,e){return t.useProto3Json||Cl(e)?e:{value:e}}function ao(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ZS(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function hL(t,e){return ao(t,e.toTimestamp())}function $e(t){return Q(!!t),J.fromTimestamp(function(n){const r=er(n);return new De(r.seconds,r.nanos)}(t))}function cg(t,e){return Cp(t,e).canonicalString()}function Cp(t,e){const n=function(i){return new se(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function eA(t){const e=se.fromString(t);return Q(cA(e)),e}function ul(t,e){return cg(t.databaseId,e.path)}function Sn(t,e){const n=eA(e);if(n.get(1)!==t.databaseId.projectId)throw new B(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new B(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new q(rA(n))}function tA(t,e){return cg(t.databaseId,e)}function nA(t){const e=eA(t);return e.length===4?se.emptyPath():rA(e)}function kp(t){return new se(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function rA(t){return Q(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Aw(t,e,n){return{name:ul(t,e),fields:n.value.mapValue.fields}}function iA(t,e,n){const r=Sn(t,e.name),i=$e(e.updateTime),s=e.createTime?$e(e.createTime):J.min(),o=new at({mapValue:{fields:e.fields}}),a=Ee.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function dL(t,e){return"found"in e?function(r,i){Q(!!i.found),i.found.name,i.found.updateTime;const s=Sn(r,i.found.name),o=$e(i.found.updateTime),a=i.found.createTime?$e(i.found.createTime):J.min(),l=new at({mapValue:{fields:i.found.fields}});return Ee.newFoundDocument(s,o,a,l)}(t,e):"missing"in e?function(r,i){Q(!!i.missing),Q(!!i.readTime);const s=Sn(r,i.missing),o=$e(i.readTime);return Ee.newNoDocument(s,o)}(t,e):W()}function fL(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:W()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,h){return c.useProto3Json?(Q(h===void 0||typeof h=="string"),Me.fromBase64String(h||"")):(Q(h===void 0||h instanceof Buffer||h instanceof Uint8Array),Me.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const h=c.code===void 0?V.UNKNOWN:QS(c.code);return new B(h,c.message||"")}(o);n=new XS(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Sn(t,r.document.name),s=$e(r.document.updateTime),o=r.document.createTime?$e(r.document.createTime):J.min(),a=new at({mapValue:{fields:r.document.fields}}),l=Ee.newFoundDocument(i,s,o,a),c=r.targetIds||[],h=r.removedTargetIds||[];n=new rc(c,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Sn(t,r.document),s=r.readTime?$e(r.readTime):J.min(),o=Ee.newNoDocument(i,s),a=r.removedTargetIds||[];n=new rc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Sn(t,r.document),s=r.removedTargetIds||[];n=new rc([],s,i,null)}else{if(!("filter"in e))return W();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new iL(i,s),a=r.targetId;n=new YS(a,o)}}return n}function cl(t,e){let n;if(e instanceof Co)n={update:Aw(t,e.key,e.value)};else if(e instanceof ko)n={delete:ul(t,e.key)};else if(e instanceof ar)n={update:Aw(t,e.key,e.data),updateMask:vL(e.fieldMask)};else{if(!(e instanceof sg))return W();n={verify:ul(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof so)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Gi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Ki)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof oo)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw W()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:hL(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:W()}(t,e.precondition)),n}function xp(t,e){const n=e.currentDocument?function(s){return s.updateTime!==void 0?Pe.updateTime($e(s.updateTime)):s.exists!==void 0?Pe.exists(s.exists):Pe.none()}(e.currentDocument):Pe.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(o,a){let l=null;if("setToServerValue"in a)Q(a.setToServerValue==="REQUEST_TIME"),l=new so;else if("appendMissingElements"in a){const h=a.appendMissingElements.values||[];l=new Gi(h)}else if("removeAllFromArray"in a){const h=a.removeAllFromArray.values||[];l=new Ki(h)}else"increment"in a?l=new oo(o,a.increment):W();const c=Re.fromServerFormat(a.fieldPath);return new Dl(c,l)}(t,i)):[];if(e.update){e.update.name;const i=Sn(t,e.update.name),s=new at({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(l){const c=l.fieldPaths||[];return new Dt(c.map(h=>Re.fromServerFormat(h)))}(e.updateMask);return new ar(i,s,o,n,r)}return new Co(i,s,n,r)}if(e.delete){const i=Sn(t,e.delete);return new ko(i,n)}if(e.verify){const i=Sn(t,e.verify);return new sg(i,n)}return W()}function pL(t,e){return t&&t.length>0?(Q(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?$e(i.updateTime):$e(s);return o.isEqual(J.min())&&(o=$e(s)),new tL(o,i.transformResults||[])}(n,e))):[]}function sA(t,e){return{documents:[tA(t,e.path)]}}function Dh(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=tA(t,i);const s=function(c){if(c.length!==0)return uA(he.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(h=>function(m){return{field:Ar(m.field),direction:gL(m.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Pp(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function oA(t,e,n,r){const{_t:i,parent:s}=Dh(t,e),o={},a=[];let l=0;return n.forEach(c=>{const h=r?c.alias:"aggregate_"+l++;o[h]=c.alias,c.aggregateType==="count"?a.push({alias:h,count:{}}):c.aggregateType==="avg"?a.push({alias:h,avg:{field:Ar(c.fieldPath)}}):c.aggregateType==="sum"&&a.push({alias:h,sum:{field:Ar(c.fieldPath)}})}),{request:{structuredAggregationQuery:{aggregations:a,structuredQuery:i.structuredQuery},parent:i.parent},ut:o,parent:s}}function aA(t){let e=nA(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Q(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];n.where&&(s=function(f){const m=lA(f);return m instanceof he&&tg(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(m=>function(S){return new ll(_s(S.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(m))}(n.orderBy));let a=null;n.limit&&(a=function(f){let m;return m=typeof f=="object"?f.value:f,Cl(m)?null:m}(n.limit));let l=null;n.startAt&&(l=function(f){const m=!!f.before,_=f.values||[];return new Yr(_,m)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const m=!f.before,_=f.values||[];return new Yr(_,m)}(n.endAt)),xS(e,i,o,s,a,"F",l,c)}function mL(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return W()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function lA(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=_s(n.unaryFilter.field);return oe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=_s(n.unaryFilter.field);return oe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=_s(n.unaryFilter.field);return oe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=_s(n.unaryFilter.field);return oe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return W()}}(t):t.fieldFilter!==void 0?function(n){return oe.create(_s(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return W()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return he.create(n.compositeFilter.filters.map(r=>lA(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return W()}}(n.compositeFilter.op))}(t):W()}function gL(t){return aL[t]}function _L(t){return lL[t]}function yL(t){return uL[t]}function Ar(t){return{fieldPath:t.canonicalString()}}function _s(t){return Re.fromServerFormat(t.fieldPath)}function uA(t){return t instanceof oe?function(n){if(n.op==="=="){if(lw(n.value))return{unaryFilter:{field:Ar(n.field),op:"IS_NAN"}};if(aw(n.value))return{unaryFilter:{field:Ar(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(lw(n.value))return{unaryFilter:{field:Ar(n.field),op:"IS_NOT_NAN"}};if(aw(n.value))return{unaryFilter:{field:Ar(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ar(n.field),op:_L(n.op),value:n.value}}}(t):t instanceof he?function(n){const r=n.getFilters().map(i=>uA(i));return r.length===1?r[0]:{compositeFilter:{op:yL(n.op),filters:r}}}(t):W()}function vL(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function cA(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e,n,r,i,s=J.min(),o=J.min(),a=Me.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new qn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new qn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new qn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new qn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hA{constructor(e){this.ct=e}}function wL(t,e){let n;if(e.document)n=iA(t.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=q.fromSegments(e.noDocument.path),i=Hi(e.noDocument.readTime);n=Ee.newNoDocument(r,i),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return W();{const r=q.fromSegments(e.unknownDocument.path),i=Hi(e.unknownDocument.version);n=Ee.newUnknownDocument(r,i)}}return e.readTime&&n.setReadTime(function(i){const s=new De(i[0],i[1]);return J.fromTimestamp(s)}(e.readTime)),n}function Rw(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:Gc(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,o){return{name:ul(s,o.key),fields:o.data.value.mapValue.fields,updateTime:ao(s,o.version.toTimestamp()),createTime:ao(s,o.createTime.toTimestamp())}}(t.ct,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:Wi(e.version)};else{if(!e.isUnknownDocument())return W();r.unknownDocument={path:n.path.toArray(),version:Wi(e.version)}}return r}function Gc(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function Wi(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Hi(t){const e=new De(t.seconds,t.nanoseconds);return J.fromTimestamp(e)}function Ii(t,e){const n=(e.baseMutations||[]).map(s=>xp(t.ct,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>xp(t.ct,s)),i=De.fromMillis(e.localWriteTimeMs);return new og(e.batchId,i,n,r)}function va(t){const e=Hi(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?Hi(t.lastLimboFreeSnapshotVersion):J.min();let r;return r=function(s){return s.documents!==void 0}(t.query)?function(s){return Q(s.documents.length===1),wt(Po(nA(s.documents[0])))}(t.query):function(s){return wt(aA(s))}(t.query),new qn(r,t.targetId,"TargetPurposeListen",t.lastListenSequenceNumber,e,n,Me.fromBase64String(t.resumeToken))}function dA(t,e){const n=Wi(e.snapshotVersion),r=Wi(e.lastLimboFreeSnapshotVersion);let i;i=jc(e.target)?sA(t.ct,e.target):Dh(t.ct,e.target)._t;const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:qi(e.target),readTime:n,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function hg(t){const e=aA({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?$c(e,e.limit,"L"):e}function tf(t,e){return new lg(e.largestBatchId,xp(t.ct,e.overlayMutation))}function Pw(t,e){const n=e.path.lastSegment();return[t,vt(e.path.popLast()),n]}function Cw(t,e,n,r){return{indexId:t,uid:e,sequenceNumber:n,readTime:Wi(r.readTime),documentKey:vt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EL{getBundleMetadata(e,n){return kw(e).get(n).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:Hi(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,n){return kw(e).put(function(i){return{bundleId:i.id,createTime:Wi($e(i.createTime)),version:i.version}}(n))}getNamedQuery(e,n){return xw(e).get(n).next(r=>{if(r)return function(s){return{name:s.name,query:hg(s.bundledQuery),readTime:Hi(s.readTime)}}(r)})}saveNamedQuery(e,n){return xw(e).put(function(i){return{name:i.name,readTime:Wi($e(i.readTime)),bundledQuery:i.bundledQuery}}(n))}}function kw(t){return Ye(t,"bundles")}function xw(t){return Ye(t,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(e,n){this.serializer=e,this.userId=n}static lt(e,n){const r=n.uid||"";return new Nh(e,r)}getOverlay(e,n){return ia(e).get(Pw(this.userId,n)).next(r=>r?tf(this.serializer,r):null)}getOverlays(e,n){const r=gn();return b.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){const i=[];return r.forEach((s,o)=>{const a=new lg(n,o);i.push(this.ht(e,a))}),b.waitFor(i)}removeOverlaysForBatchId(e,n,r){const i=new Set;n.forEach(o=>i.add(vt(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(ia(e).j("collectionPathOverlayIndex",a))}),b.waitFor(s)}getOverlaysForCollection(e,n,r){const i=gn(),s=vt(n),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return ia(e).U("collectionPathOverlayIndex",o).next(a=>{for(const l of a){const c=tf(this.serializer,l);i.set(c.getKey(),c)}return i})}getOverlaysForCollectionGroup(e,n,r,i){const s=gn();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return ia(e).J({index:"collectionGroupOverlayIndex",range:a},(l,c,h)=>{const f=tf(this.serializer,c);s.size()<i||f.largestBatchId===o?(s.set(f.getKey(),f),o=f.largestBatchId):h.done()}).next(()=>s)}ht(e,n){return ia(e).put(function(i,s,o){const[a,l,c]=Pw(s,o.mutation.key);return{userId:s,collectionPath:l,documentId:c,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:cl(i.ct,o.mutation)}}(this.serializer,this.userId,n))}}function ia(t){return Ye(t,"documentOverlays")}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IL{Pt(e){return Ye(e,"globals")}getSessionToken(e){return this.Pt(e).get("sessionToken").next(n=>{const r=n==null?void 0:n.value;return r?Me.fromUint8Array(r):Me.EMPTY_BYTE_STRING})}setSessionToken(e,n){return this.Pt(e).put({name:"sessionToken",value:n.toUint8Array()})}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(){}It(e,n){this.Tt(e,n),n.Et()}Tt(e,n){if("nullValue"in e)this.dt(n,5);else if("booleanValue"in e)this.dt(n,10),n.At(e.booleanValue?1:0);else if("integerValue"in e)this.dt(n,15),n.At(Se(e.integerValue));else if("doubleValue"in e){const r=Se(e.doubleValue);isNaN(r)?this.dt(n,13):(this.dt(n,15),il(r)?n.At(0):n.At(r))}else if("timestampValue"in e){let r=e.timestampValue;this.dt(n,20),typeof r=="string"&&(r=er(r)),n.Rt(`${r.seconds||""}`),n.At(r.nanos||0)}else if("stringValue"in e)this.Vt(e.stringValue,n),this.ft(n);else if("bytesValue"in e)this.dt(n,30),n.gt(tr(e.bytesValue)),this.ft(n);else if("referenceValue"in e)this.yt(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.dt(n,45),n.At(r.latitude||0),n.At(r.longitude||0)}else"mapValue"in e?wS(e)?this.dt(n,Number.MAX_SAFE_INTEGER):kh(e)?this.wt(e.mapValue,n):(this.St(e.mapValue,n),this.ft(n)):"arrayValue"in e?(this.bt(e.arrayValue,n),this.ft(n)):W()}Vt(e,n){this.dt(n,25),this.Dt(e,n)}Dt(e,n){n.Rt(e)}St(e,n){const r=e.fields||{};this.dt(n,55);for(const i of Object.keys(r))this.Vt(i,n),this.Tt(r[i],n)}wt(e,n){var r,i;const s=e.fields||{};this.dt(n,53);const o="value",a=((i=(r=s[o].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.length)||0;this.dt(n,15),n.At(Se(a)),this.Vt(o,n),this.Tt(s[o],n)}bt(e,n){const r=e.values||[];this.dt(n,50);for(const i of r)this.Tt(i,n)}yt(e,n){this.dt(n,37),q.fromName(e).path.forEach(r=>{this.dt(n,60),this.Dt(r,n)})}dt(e,n){e.At(n)}ft(e){e.At(2)}}Ti.vt=new Ti;function TL(t){if(t===0)return 8;let e=0;return!(t>>4)&&(e+=4,t<<=4),!(t>>6)&&(e+=2,t<<=2),!(t>>7)&&(e+=1),e}function bw(t){const e=64-function(r){let i=0;for(let s=0;s<8;++s){const o=TL(255&r[s]);if(i+=o,o!==8)break}return i}(t);return Math.ceil(e/8)}class SL{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ct(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ft(r.value),r=n.next();this.Mt()}xt(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ot(r.value),r=n.next();this.Nt()}Lt(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ft(r);else if(r<2048)this.Ft(960|r>>>6),this.Ft(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ft(480|r>>>12),this.Ft(128|63&r>>>6),this.Ft(128|63&r);else{const i=n.codePointAt(0);this.Ft(240|i>>>18),this.Ft(128|63&i>>>12),this.Ft(128|63&i>>>6),this.Ft(128|63&i)}}this.Mt()}Bt(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ot(r);else if(r<2048)this.Ot(960|r>>>6),this.Ot(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ot(480|r>>>12),this.Ot(128|63&r>>>6),this.Ot(128|63&r);else{const i=n.codePointAt(0);this.Ot(240|i>>>18),this.Ot(128|63&i>>>12),this.Ot(128|63&i>>>6),this.Ot(128|63&i)}}this.Nt()}kt(e){const n=this.qt(e),r=bw(n);this.Qt(1+r),this.buffer[this.position++]=255&r;for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=255&n[i]}Kt(e){const n=this.qt(e),r=bw(n);this.Qt(1+r),this.buffer[this.position++]=~(255&r);for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=~(255&n[i])}$t(){this.Ut(255),this.Ut(255)}Wt(){this.Gt(255),this.Gt(255)}reset(){this.position=0}seed(e){this.Qt(e.length),this.buffer.set(e,this.position),this.position+=e.length}zt(){return this.buffer.slice(0,this.position)}qt(e){const n=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let i=1;i<n.length;++i)n[i]^=r?255:0;return n}Ft(e){const n=255&e;n===0?(this.Ut(0),this.Ut(255)):n===255?(this.Ut(255),this.Ut(0)):this.Ut(n)}Ot(e){const n=255&e;n===0?(this.Gt(0),this.Gt(255)):n===255?(this.Gt(255),this.Gt(0)):this.Gt(e)}Mt(){this.Ut(0),this.Ut(1)}Nt(){this.Gt(0),this.Gt(1)}Ut(e){this.Qt(1),this.buffer[this.position++]=e}Gt(e){this.Qt(1),this.buffer[this.position++]=~e}Qt(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class AL{constructor(e){this.jt=e}gt(e){this.jt.Ct(e)}Rt(e){this.jt.Lt(e)}At(e){this.jt.kt(e)}Et(){this.jt.$t()}}class RL{constructor(e){this.jt=e}gt(e){this.jt.xt(e)}Rt(e){this.jt.Bt(e)}At(e){this.jt.Kt(e)}Et(){this.jt.Wt()}}class sa{constructor(){this.jt=new SL,this.Ht=new AL(this.jt),this.Jt=new RL(this.jt)}seed(e){this.jt.seed(e)}Yt(e){return e===0?this.Ht:this.Jt}zt(){return this.jt.zt()}reset(){this.jt.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e,n,r,i){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=i}Zt(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new Si(this.indexId,this.documentKey,this.arrayValue,r)}}function pr(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=Dw(t.arrayValue,e.arrayValue),n!==0?n:(n=Dw(t.directionalValue,e.directionalValue),n!==0?n:q.comparator(t.documentKey,e.documentKey)))}function Dw(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nw{constructor(e){this.Xt=new fe((n,r)=>Re.comparator(n.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.en=e.orderBy,this.tn=[];for(const n of e.filters){const r=n;r.isInequality()?this.Xt=this.Xt.add(r):this.tn.push(r)}}get nn(){return this.Xt.size>1}rn(e){if(Q(e.collectionGroup===this.collectionId),this.nn)return!1;const n=vp(e);if(n!==void 0&&!this.sn(n))return!1;const r=wi(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.sn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Xt.size>0){const a=this.Xt.getIterator().getNext();if(!i.has(a.field.canonicalString())){const l=r[s];if(!this.on(a,l)||!this._n(this.en[o++],l))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.en.length||!this._n(this.en[o++],a))return!1}return!0}an(){if(this.nn)return null;let e=new fe(Re.comparator);const n=[];for(const r of this.tn)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")n.push(new Di(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),n.push(new Di(r.field,0))}for(const r of this.en)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),n.push(new Di(r.field,r.dir==="asc"?0:1)));return new to(to.UNKNOWN_ID,this.collectionId,n,no.empty())}sn(e){for(const n of this.tn)if(this.on(n,e))return!0;return!1}on(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}_n(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fA(t){var e,n;if(Q(t instanceof oe||t instanceof he),t instanceof oe){if(t instanceof kS){const i=((n=(e=t.value.arrayValue)===null||e===void 0?void 0:e.values)===null||n===void 0?void 0:n.map(s=>oe.create(t.field,"==",s)))||[];return he.create(i,"or")}return t}const r=t.filters.map(i=>fA(i));return he.create(r,t.op)}function PL(t){if(t.getFilters().length===0)return[];const e=Np(fA(t));return Q(pA(e)),bp(e)||Dp(e)?[e]:e.getFilters()}function bp(t){return t instanceof oe}function Dp(t){return t instanceof he&&tg(t)}function pA(t){return bp(t)||Dp(t)||function(n){if(n instanceof he&&Tp(n)){for(const r of n.getFilters())if(!bp(r)&&!Dp(r))return!1;return!0}return!1}(t)}function Np(t){if(Q(t instanceof oe||t instanceof he),t instanceof oe)return t;if(t.filters.length===1)return Np(t.filters[0]);const e=t.filters.map(r=>Np(r));let n=he.create(e,t.op);return n=Kc(n),pA(n)?n:(Q(n instanceof he),Q(io(n)),Q(n.filters.length>1),n.filters.reduce((r,i)=>dg(r,i)))}function dg(t,e){let n;return Q(t instanceof oe||t instanceof he),Q(e instanceof oe||e instanceof he),n=t instanceof oe?e instanceof oe?function(i,s){return he.create([i,s],"and")}(t,e):Vw(t,e):e instanceof oe?Vw(e,t):function(i,s){if(Q(i.filters.length>0&&s.filters.length>0),io(i)&&io(s))return RS(i,s.getFilters());const o=Tp(i)?i:s,a=Tp(i)?s:i,l=o.filters.map(c=>dg(c,a));return he.create(l,"or")}(t,e),Kc(n)}function Vw(t,e){if(io(e))return RS(e,t.getFilters());{const n=e.filters.map(r=>dg(t,r));return he.create(n,"or")}}function Kc(t){if(Q(t instanceof oe||t instanceof he),t instanceof oe)return t;const e=t.getFilters();if(e.length===1)return Kc(e[0]);if(SS(t))return t;const n=e.map(i=>Kc(i)),r=[];return n.forEach(i=>{i instanceof oe?r.push(i):i instanceof he&&(i.op===t.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:he.create(r,t.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CL{constructor(){this.un=new fg}addToCollectionParentIndex(e,n){return this.un.add(n),b.resolve()}getCollectionParents(e,n){return b.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return b.resolve()}deleteFieldIndex(e,n){return b.resolve()}deleteAllFieldIndexes(e){return b.resolve()}createTargetIndexes(e,n){return b.resolve()}getDocumentsMatchingTarget(e,n){return b.resolve(null)}getIndexType(e,n){return b.resolve(0)}getFieldIndexes(e,n){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,n){return b.resolve($t.min())}getMinOffsetFromCollectionGroup(e,n){return b.resolve($t.min())}updateCollectionGroup(e,n,r){return b.resolve()}updateIndexEntries(e,n){return b.resolve()}}class fg{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new fe(se.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new fe(se.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pu=new Uint8Array(0);class kL{constructor(e,n){this.databaseId=n,this.cn=new fg,this.ln=new or(r=>qi(r),(r,i)=>kl(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.cn.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.cn.add(n)});const s={collectionId:r,parent:vt(i)};return Ow(e).put(s)}return b.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[oS(n),""],!1,!0);return Ow(e).U(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(mn(o.parent))}return r})}addFieldIndex(e,n){const r=oa(e),i=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(l=>[l.fieldPath.canonicalString(),l.kind])}}(n);delete i.indexId;const s=r.add(i);if(n.indexState){const o=fs(e);return s.next(a=>{o.put(Cw(a,this.uid,n.indexState.sequenceNumber,n.indexState.offset))})}return s.next()}deleteFieldIndex(e,n){const r=oa(e),i=fs(e),s=ds(e);return r.delete(n.indexId).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const n=oa(e),r=ds(e),i=fs(e);return n.j().next(()=>r.j()).next(()=>i.j())}createTargetIndexes(e,n){return b.forEach(this.hn(n),r=>this.getIndexType(e,r).next(i=>{if(i===0||i===1){const s=new Nw(r).an();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,n){const r=ds(e);let i=!0;const s=new Map;return b.forEach(this.hn(n),o=>this.Pn(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=ee();const a=[];return b.forEach(s,(l,c)=>{U("IndexedDbIndexManager",`Using index ${function(w){return`id=${w.indexId}|cg=${w.collectionGroup}|f=${w.fields.map(x=>`${x.fieldPath}:${x.kind}`).join(",")}`}(l)} to execute ${qi(n)}`);const h=function(w,x){const M=vp(x);if(M===void 0)return null;for(const F of zc(w,M.fieldPath))switch(F.op){case"array-contains-any":return F.value.arrayValue.values||[];case"array-contains":return[F.value]}return null}(c,l),f=function(w,x){const M=new Map;for(const F of wi(x))for(const I of zc(w,F.fieldPath))switch(I.op){case"==":case"in":M.set(F.fieldPath.canonicalString(),I.value);break;case"not-in":case"!=":return M.set(F.fieldPath.canonicalString(),I.value),Array.from(M.values())}return null}(c,l),m=function(w,x){const M=[];let F=!0;for(const I of wi(x)){const y=I.kind===0?fw(w,I.fieldPath,w.startAt):pw(w,I.fieldPath,w.startAt);M.push(y.value),F&&(F=y.inclusive)}return new Yr(M,F)}(c,l),_=function(w,x){const M=[];let F=!0;for(const I of wi(x)){const y=I.kind===0?pw(w,I.fieldPath,w.endAt):fw(w,I.fieldPath,w.endAt);M.push(y.value),F&&(F=y.inclusive)}return new Yr(M,F)}(c,l),S=this.In(l,c,m),P=this.In(l,c,_),C=this.Tn(l,c,f),E=this.En(l.indexId,h,S,m.inclusive,P,_.inclusive,C);return b.forEach(E,v=>r.G(v,n.limit).next(w=>{w.forEach(x=>{const M=q.fromSegments(x.documentKey);o.has(M)||(o=o.add(M),a.push(M))})}))}).next(()=>a)}return b.resolve(null)})}hn(e){let n=this.ln.get(e);return n||(e.filters.length===0?n=[e]:n=PL(he.create(e.filters,"and")).map(r=>Ap(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.ln.set(e,n),n)}En(e,n,r,i,s,o,a){const l=(n!=null?n.length:1)*Math.max(r.length,s.length),c=l/(n!=null?n.length:1),h=[];for(let f=0;f<l;++f){const m=n?this.dn(n[f/c]):Pu,_=this.An(e,m,r[f%c],i),S=this.Rn(e,m,s[f%c],o),P=a.map(C=>this.An(e,m,C,!0));h.push(...this.createRange(_,S,P))}return h}An(e,n,r,i){const s=new Si(e,q.empty(),n,r);return i?s:s.Zt()}Rn(e,n,r,i){const s=new Si(e,q.empty(),n,r);return i?s.Zt():s}Pn(e,n){const r=new Nw(n),i=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.rn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let r=2;const i=this.hn(n);return b.forEach(i,s=>this.Pn(e,s).next(o=>{o?r!==0&&o.fields.length<function(l){let c=new fe(Re.comparator),h=!1;for(const f of l.filters)for(const m of f.getFlattenedFilters())m.field.isKeyField()||(m.op==="array-contains"||m.op==="array-contains-any"?h=!0:c=c.add(m.field));for(const f of l.orderBy)f.field.isKeyField()||(c=c.add(f.field));return c.size+(h?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(n)&&i.length>1&&r===2?1:r)}Vn(e,n){const r=new sa;for(const i of wi(e)){const s=n.data.field(i.fieldPath);if(s==null)return null;const o=r.Yt(i.kind);Ti.vt.It(s,o)}return r.zt()}dn(e){const n=new sa;return Ti.vt.It(e,n.Yt(0)),n.zt()}mn(e,n){const r=new sa;return Ti.vt.It($i(this.databaseId,n),r.Yt(function(s){const o=wi(s);return o.length===0?0:o[o.length-1].kind}(e))),r.zt()}Tn(e,n,r){if(r===null)return[];let i=[];i.push(new sa);let s=0;for(const o of wi(e)){const a=r[s++];for(const l of i)if(this.fn(n,o.fieldPath)&&al(a))i=this.gn(i,o,a);else{const c=l.Yt(o.kind);Ti.vt.It(a,c)}}return this.pn(i)}In(e,n,r){return this.Tn(e,n,r.position)}pn(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].zt();return n}gn(e,n,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const l=new sa;l.seed(a.zt()),Ti.vt.It(o,l.Yt(n.kind)),s.push(l)}return s}fn(e,n){return!!e.filters.find(r=>r instanceof oe&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=oa(e),i=fs(e);return(n?r.U("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.U()).next(s=>{const o=[];return b.forEach(s,a=>i.get([a.indexId,this.uid]).next(l=>{o.push(function(h,f){const m=f?new no(f.sequenceNumber,new $t(Hi(f.readTime),new q(mn(f.documentKey)),f.largestBatchId)):no.empty(),_=h.fields.map(([S,P])=>new Di(Re.fromServerFormat(S),P));return new to(h.indexId,h.collectionGroup,_,m)}(a,l))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:X(r.collectionGroup,i.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const i=oa(e),s=fs(e);return this.yn(e).next(o=>i.U("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>b.forEach(a,l=>s.put(Cw(l.indexId,this.uid,o,r)))))}updateIndexEntries(e,n){const r=new Map;return b.forEach(n,(i,s)=>{const o=r.get(i.collectionGroup);return(o?b.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),b.forEach(a,l=>this.wn(e,i,l).next(c=>{const h=this.Sn(s,l);return c.isEqual(h)?b.resolve():this.bn(e,s,l,c,h)}))))})}Dn(e,n,r,i){return ds(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.mn(r,n.key),documentKey:n.key.path.toArray()})}vn(e,n,r,i){return ds(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.mn(r,n.key),n.key.path.toArray()])}wn(e,n,r){const i=ds(e);let s=new fe(pr);return i.J({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.mn(r,n)])},(o,a)=>{s=s.add(new Si(r.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>s)}Sn(e,n){let r=new fe(pr);const i=this.Vn(n,e);if(i==null)return r;const s=vp(n);if(s!=null){const o=e.data.field(s.fieldPath);if(al(o))for(const a of o.arrayValue.values||[])r=r.add(new Si(n.indexId,e.key,this.dn(a),i))}else r=r.add(new Si(n.indexId,e.key,Pu,i));return r}bn(e,n,r,i,s){U("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(l,c,h,f,m){const _=l.getIterator(),S=c.getIterator();let P=hs(_),C=hs(S);for(;P||C;){let E=!1,v=!1;if(P&&C){const w=h(P,C);w<0?v=!0:w>0&&(E=!0)}else P!=null?v=!0:E=!0;E?(f(C),C=hs(S)):v?(m(P),P=hs(_)):(P=hs(_),C=hs(S))}}(i,s,pr,a=>{o.push(this.Dn(e,n,r,a))},a=>{o.push(this.vn(e,n,r,a))}),b.waitFor(o)}yn(e){let n=1;return fs(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),n=i.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>pr(o,a)).filter((o,a,l)=>!a||pr(o,l[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=pr(o,e),l=pr(o,n);if(a===0)i[0]=e.Zt();else if(a>0&&l<0)i.push(o),i.push(o.Zt());else if(l>0)break}i.push(n);const s=[];for(let o=0;o<i.length;o+=2){if(this.Cn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,Pu,[]],l=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,Pu,[]];s.push(IDBKeyRange.bound(a,l))}return s}Cn(e,n){return pr(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(Lw)}getMinOffset(e,n){return b.mapArray(this.hn(n),r=>this.Pn(e,r).next(i=>i||W())).next(Lw)}}function Ow(t){return Ye(t,"collectionParents")}function ds(t){return Ye(t,"indexEntries")}function oa(t){return Ye(t,"indexConfiguration")}function fs(t){return Ye(t,"indexState")}function Lw(t){Q(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const i=t[r].indexState.offset;Xm(i,e)<0&&(e=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new $t(e.readTime,e.documentKey,n)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mw={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class _t{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new _t(e,_t.DEFAULT_COLLECTION_PERCENTILE,_t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mA(t,e,n){const r=t.store("mutations"),i=t.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const l=r.J({range:o},(h,f,m)=>(a++,m.delete()));s.push(l.next(()=>{Q(a===1)}));const c=[];for(const h of n.mutations){const f=fS(e,h.key.path,n.batchId);s.push(i.delete(f)),c.push(h.key)}return b.waitFor(s).next(()=>c)}function Wc(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw W();e=t.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_t.DEFAULT_COLLECTION_PERCENTILE=10,_t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,_t.DEFAULT=new _t(41943040,_t.DEFAULT_COLLECTION_PERCENTILE,_t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),_t.DISABLED=new _t(-1,0,0);class Vh{constructor(e,n,r,i){this.userId=e,this.serializer=n,this.indexManager=r,this.referenceDelegate=i,this.Fn={}}static lt(e,n,r,i){Q(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new Vh(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return mr(e).J({index:"userMutationsIndex",range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=ys(e),o=mr(e);return o.add({}).next(a=>{Q(typeof a=="number");const l=new og(a,n,r,i),c=function(_,S,P){const C=P.baseMutations.map(v=>cl(_.ct,v)),E=P.mutations.map(v=>cl(_.ct,v));return{userId:S,batchId:P.batchId,localWriteTimeMs:P.localWriteTime.toMillis(),baseMutations:C,mutations:E}}(this.serializer,this.userId,l),h=[];let f=new fe((m,_)=>X(m.canonicalString(),_.canonicalString()));for(const m of i){const _=fS(this.userId,m.key.path,a);f=f.add(m.key.path.popLast()),h.push(o.put(c)),h.push(s.put(_,_O))}return f.forEach(m=>{h.push(this.indexManager.addToCollectionParentIndex(e,m))}),e.addOnCommittedListener(()=>{this.Fn[a]=l.keys()}),b.waitFor(h).next(()=>l)})}lookupMutationBatch(e,n){return mr(e).get(n).next(r=>r?(Q(r.userId===this.userId),Ii(this.serializer,r)):null)}Mn(e,n){return this.Fn[n]?b.resolve(this.Fn[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.Fn[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return mr(e).J({index:"userMutationsIndex",range:i},(o,a,l)=>{a.userId===this.userId&&(Q(a.batchId>=r),s=Ii(this.serializer,a)),l.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return mr(e).J({index:"userMutationsIndex",range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return mr(e).U("userMutationsIndex",n).next(r=>r.map(i=>Ii(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=Xu(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return ys(e).J({range:i},(o,a,l)=>{const[c,h,f]=o,m=mn(h);if(c===this.userId&&n.path.isEqual(m))return mr(e).get(f).next(_=>{if(!_)throw W();Q(_.userId===this.userId),s.push(Ii(this.serializer,_))});l.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new fe(X);const i=[];return n.forEach(s=>{const o=Xu(this.userId,s.path),a=IDBKeyRange.lowerBound(o),l=ys(e).J({range:a},(c,h,f)=>{const[m,_,S]=c,P=mn(_);m===this.userId&&s.path.isEqual(P)?r=r.add(S):f.done()});i.push(l)}),b.waitFor(i).next(()=>this.xn(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=Xu(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new fe(X);return ys(e).J({range:o},(l,c,h)=>{const[f,m,_]=l,S=mn(m);f===this.userId&&r.isPrefixOf(S)?S.length===i&&(a=a.add(_)):h.done()}).next(()=>this.xn(e,a))}xn(e,n){const r=[],i=[];return n.forEach(s=>{i.push(mr(e).get(s).next(o=>{if(o===null)throw W();Q(o.userId===this.userId),r.push(Ii(this.serializer,o))}))}),b.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return mA(e._e,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.On(n.batchId)}),b.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}On(e){delete this.Fn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return b.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return ys(e).J({range:r},(s,o,a)=>{if(s[0]===this.userId){const l=mn(s[1]);i.push(l)}else a.done()}).next(()=>{Q(i.length===0)})})}containsKey(e,n){return gA(e,this.userId,n)}Nn(e){return _A(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function gA(t,e,n){const r=Xu(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return ys(t).J({range:s,H:!0},(a,l,c)=>{const[h,f,m]=a;h===e&&f===i&&(o=!0),c.done()}).next(()=>o)}function mr(t){return Ye(t,"mutations")}function ys(t){return Ye(t,"documentMutations")}function _A(t){return Ye(t,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Qi(0)}static kn(){return new Qi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xL{constructor(e,n){this.referenceDelegate=e,this.serializer=n}allocateTargetId(e){return this.qn(e).next(n=>{const r=new Qi(n.highestTargetId);return n.highestTargetId=r.next(),this.Qn(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.qn(e).next(n=>J.fromTimestamp(new De(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.qn(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.qn(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.Qn(e,i)))}addTargetData(e,n){return this.Kn(e,n).next(()=>this.qn(e).next(r=>(r.targetCount+=1,this.$n(n,r),this.Qn(e,r))))}updateTargetData(e,n){return this.Kn(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>ps(e).delete(n.targetId)).next(()=>this.qn(e)).next(r=>(Q(r.targetCount>0),r.targetCount-=1,this.Qn(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return ps(e).J((o,a)=>{const l=va(a);l.sequenceNumber<=n&&r.get(l.targetId)===null&&(i++,s.push(this.removeTargetData(e,l)))}).next(()=>b.waitFor(s)).next(()=>i)}forEachTarget(e,n){return ps(e).J((r,i)=>{const s=va(i);n(s)})}qn(e){return Fw(e).get("targetGlobalKey").next(n=>(Q(n!==null),n))}Qn(e,n){return Fw(e).put("targetGlobalKey",n)}Kn(e,n){return ps(e).put(dA(this.serializer,n))}$n(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.qn(e).next(n=>n.targetCount)}getTargetData(e,n){const r=qi(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return ps(e).J({range:i,index:"queryTargetsIndex"},(o,a,l)=>{const c=va(a);kl(n,c.target)&&(s=c,l.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=Rr(e);return n.forEach(o=>{const a=vt(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),b.waitFor(i)}removeMatchingKeys(e,n,r){const i=Rr(e);return b.forEach(n,s=>{const o=vt(s.path);return b.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=Rr(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=Rr(e);let s=ee();return i.J({range:r,H:!0},(o,a,l)=>{const c=mn(o[1]),h=new q(c);s=s.add(h)}).next(()=>s)}containsKey(e,n){const r=vt(n.path),i=IDBKeyRange.bound([r],[oS(r)],!1,!0);let s=0;return Rr(e).J({index:"documentTargetsIndex",H:!0,range:i},([o,a],l,c)=>{o!==0&&(s++,c.done())}).next(()=>s>0)}ot(e,n){return ps(e).get(n).next(r=>r?va(r):null)}}function ps(t){return Ye(t,"targets")}function Fw(t){return Ye(t,"targetGlobal")}function Rr(t){return Ye(t,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uw([t,e],[n,r]){const i=X(t,n);return i===0?X(e,r):i}class bL{constructor(e){this.Un=e,this.buffer=new fe(Uw),this.Wn=0}Gn(){return++this.Wn}zn(e){const n=[e,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Uw(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class yA{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return this.jn!==null}Hn(e){U("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ai(n)?U("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await oi(n)}await this.Hn(3e5)})}}class DL{constructor(e,n){this.Jn=e,this.params=n}calculateTargetCount(e,n){return this.Jn.Yn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return b.resolve(bt.oe);const r=new bL(n);return this.Jn.forEachTarget(e,i=>r.zn(i.sequenceNumber)).next(()=>this.Jn.Zn(e,i=>r.zn(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Jn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Jn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(U("LruGarbageCollector","Garbage collection skipped; disabled"),b.resolve(Mw)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(U("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Mw):this.Xn(e,n))}getCacheSize(e){return this.Jn.getCacheSize(e)}Xn(e,n){let r,i,s,o,a,l,c;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(U("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),i=this.params.maximumSequenceNumbersToCollect):i=f,o=Date.now(),this.nthSequenceNumber(e,i))).next(f=>(r=f,a=Date.now(),this.removeTargets(e,r,n))).next(f=>(s=f,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(f=>(c=Date.now(),ms()<=ie.DEBUG&&U("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(l-a)+`ms
	Removed ${f} documents in `+(c-l)+`ms
Total Duration: ${c-h}ms`),b.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:f})))}}function vA(t,e){return new DL(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NL{constructor(e,n){this.db=e,this.garbageCollector=vA(this,n)}Yn(e){const n=this.er(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}er(e){let n=0;return this.Zn(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}Zn(e,n){return this.tr(e,(r,i)=>n(i))}addReference(e,n,r){return Cu(e,r)}removeReference(e,n,r){return Cu(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return Cu(e,n)}nr(e,n){return function(i,s){let o=!1;return _A(i).Y(a=>gA(i,a,s).next(l=>(l&&(o=!0),b.resolve(!l)))).next(()=>o)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.tr(e,(o,a)=>{if(a<=n){const l=this.nr(e,o).next(c=>{if(!c)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,J.min()),Rr(e).delete(function(f){return[0,vt(f.path)]}(o))))});i.push(l)}}).next(()=>b.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return Cu(e,n)}tr(e,n){const r=Rr(e);let i,s=bt.oe;return r.J({index:"documentTargetsIndex"},([o,a],{path:l,sequenceNumber:c})=>{o===0?(s!==bt.oe&&n(new q(mn(i)),s),s=c,i=l):s=bt.oe}).next(()=>{s!==bt.oe&&n(new q(mn(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Cu(t,e){return Rr(t).put(function(r,i){return{targetId:0,path:vt(r.path),sequenceNumber:i}}(e,t.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wA{constructor(){this.changes=new or(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ee.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?b.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VL{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return gi(e).put(r)}removeEntry(e,n,r){return gi(e).delete(function(s,o){const a=s.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],Gc(o),a[a.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.rr(e,r)))}getEntry(e,n){let r=Ee.newInvalidDocument(n);return gi(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(aa(n))},(i,s)=>{r=this.ir(n,s)}).next(()=>r)}sr(e,n){let r={size:0,document:Ee.newInvalidDocument(n)};return gi(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(aa(n))},(i,s)=>{r={document:this.ir(n,s),size:Wc(s)}}).next(()=>r)}getEntries(e,n){let r=Nt();return this._r(e,n,(i,s)=>{const o=this.ir(i,s);r=r.insert(i,o)}).next(()=>r)}ar(e,n){let r=Nt(),i=new ye(q.comparator);return this._r(e,n,(s,o)=>{const a=this.ir(s,o);r=r.insert(s,a),i=i.insert(s,Wc(o))}).next(()=>({documents:r,ur:i}))}_r(e,n,r){if(n.isEmpty())return b.resolve();let i=new fe(zw);n.forEach(l=>i=i.add(l));const s=IDBKeyRange.bound(aa(i.first()),aa(i.last())),o=i.getIterator();let a=o.getNext();return gi(e).J({index:"documentKeyIndex",range:s},(l,c,h)=>{const f=q.fromSegments([...c.prefixPath,c.collectionGroup,c.documentId]);for(;a&&zw(a,f)<0;)r(a,null),a=o.getNext();a&&a.isEqual(f)&&(r(a,c),a=o.hasNext()?o.getNext():null),a?h.$(aa(a)):h.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,n,r,i,s){const o=n.path,a=[o.popLast().toArray(),o.lastSegment(),Gc(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],l=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return gi(e).U(IDBKeyRange.bound(a,l,!0)).next(c=>{s==null||s.incrementDocumentReadCount(c.length);let h=Nt();for(const f of c){const m=this.ir(q.fromSegments(f.prefixPath.concat(f.collectionGroup,f.documentId)),f);m.isFoundDocument()&&(bl(n,m)||i.has(m.key))&&(h=h.insert(m.key,m))}return h})}getAllFromCollectionGroup(e,n,r,i){let s=Nt();const o=jw(n,r),a=jw(n,$t.max());return gi(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(l,c,h)=>{const f=this.ir(q.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);s=s.insert(f.key,f),s.size===i&&h.done()}).next(()=>s)}newChangeBuffer(e){return new OL(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return Bw(e).get("remoteDocumentGlobalKey").next(n=>(Q(!!n),n))}rr(e,n){return Bw(e).put("remoteDocumentGlobalKey",n)}ir(e,n){if(n){const r=wL(this.serializer,n);if(!(r.isNoDocument()&&r.version.isEqual(J.min())))return r}return Ee.newInvalidDocument(e)}}function EA(t){return new VL(t)}class OL extends wA{constructor(e,n){super(),this.cr=e,this.trackRemovals=n,this.lr=new or(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new fe((s,o)=>X(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.lr.get(s);if(n.push(this.cr.removeEntry(e,s,a.readTime)),o.isValidDocument()){const l=Rw(this.cr.serializer,o);i=i.add(s.path.popLast());const c=Wc(l);r+=c-a.size,n.push(this.cr.addEntry(e,s,l))}else if(r-=a.size,this.trackRemovals){const l=Rw(this.cr.serializer,o.convertToNoDocument(J.min()));n.push(this.cr.addEntry(e,s,l))}}),i.forEach(s=>{n.push(this.cr.indexManager.addToCollectionParentIndex(e,s))}),n.push(this.cr.updateMetadata(e,r)),b.waitFor(n)}getFromCache(e,n){return this.cr.sr(e,n).next(r=>(this.lr.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.cr.ar(e,n).next(({documents:r,ur:i})=>(i.forEach((s,o)=>{this.lr.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function Bw(t){return Ye(t,"remoteDocumentGlobal")}function gi(t){return Ye(t,"remoteDocumentsV14")}function aa(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function jw(t,e){const n=e.documentKey.path.toArray();return[t,Gc(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function zw(t,e){const n=t.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=X(n[s],r[s]),i)return i;return i=X(n.length,r.length),i||(i=X(n[n.length-2],r[r.length-2]),i||X(n[n.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LL{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IA{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Na(r.mutation,i,Dt.empty(),De.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ee()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ee()){const i=gn();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=_a();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=gn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ee()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Nt();const o=Da(),a=function(){return Da()}();return n.forEach((l,c)=>{const h=r.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof ar)?s=s.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),Na(h.mutation,c,h.mutation.getFieldMask(),De.now())):o.set(c.key,Dt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>{var f;return a.set(c,new LL(h,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Da();let i=new ye((o,a)=>o-a),s=ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let h=r.get(l)||Dt.empty();h=a.applyToLocalView(c,h),r.set(l,h);const f=(i.get(a.batchId)||ee()).add(l);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,h=l.value,f=FS();h.forEach(m=>{if(!s.has(m)){const _=GS(n.get(m),r.get(m));_!==null&&f.set(m,_),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return b.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):ng(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):b.resolve(gn());let a=-1,l=s;return o.next(c=>b.forEach(c,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(h)?b.resolve():this.remoteDocumentCache.getEntry(e,h).next(m=>{l=l.insert(h,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,l,c,ee())).next(h=>({batchId:a,changes:MS(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new q(n)).next(r=>{let i=_a();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=_a();return this.indexManager.getCollectionParents(e,s).next(a=>b.forEach(a,l=>{const c=function(f,m){return new sr(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(h=>{h.forEach((f,m)=>{o=o.insert(f,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,c)=>{const h=c.getKey();o.get(h)===null&&(o=o.insert(h,Ee.newInvalidDocument(h)))});let a=_a();return o.forEach((l,c)=>{const h=s.get(l);h!==void 0&&Na(h.mutation,c,Dt.empty(),De.now()),bl(n,c)&&(a=a.insert(l,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ML{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return b.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:$e(i.createTime)}}(n)),b.resolve()}getNamedQuery(e,n){return b.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:hg(i.bundledQuery),readTime:$e(i.readTime)}}(n)),b.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FL{constructor(){this.overlays=new ye(q.comparator),this.Ir=new Map}getOverlay(e,n){return b.resolve(this.overlays.get(n))}getOverlays(e,n){const r=gn();return b.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),b.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),b.resolve()}getOverlaysForCollection(e,n,r){const i=gn(),s=n.length+1,o=new q(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return b.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ye((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let h=s.get(c.largestBatchId);h===null&&(h=gn(),s=s.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=gn(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=i)););return b.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new lg(n,r));let s=this.Ir.get(n);s===void 0&&(s=ee(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UL{constructor(){this.sessionToken=Me.EMPTY_BYTE_STRING}getSessionToken(e){return b.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,b.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg{constructor(){this.Tr=new fe(Xe.Er),this.dr=new fe(Xe.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Xe(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Xe(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new q(new se([])),r=new Xe(n,e),i=new Xe(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new q(new se([])),r=new Xe(n,e),i=new Xe(n,e+1);let s=ee();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Xe(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Xe{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return q.comparator(e.key,n.key)||X(e.wr,n.wr)}static Ar(e,n){return X(e.wr,n.wr)||q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BL{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new fe(Xe.Er)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new og(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.br=this.br.add(new Xe(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return b.resolve(o)}lookupMutationBatch(e,n){return b.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return b.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Xe(n,0),i=new Xe(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const a=this.Dr(o.wr);s.push(a)}),b.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new fe(X);return n.forEach(i=>{const s=new Xe(i,0),o=new Xe(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],a=>{r=r.add(a.wr)})}),b.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;q.isDocumentKey(s)||(s=s.child(""));const o=new Xe(new q(s),0);let a=new fe(X);return this.br.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.wr)),!0)},o),b.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Q(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return b.forEach(n.mutations,i=>{const s=new Xe(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Xe(n,0),i=this.br.firstAfterOrEqual(r);return b.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jL{constructor(e){this.Mr=e,this.docs=function(){return new ye(q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return b.resolve(r?r.document.mutableCopy():Ee.newInvalidDocument(n))}getEntries(e,n){let r=Nt();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ee.newInvalidDocument(i))}),b.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Nt();const o=n.path,a=new q(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:h}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||Xm(lS(h),r)<=0||(i.has(h.key)||bl(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return b.resolve(s)}getAllFromCollectionGroup(e,n,r,i){W()}Or(e,n){return b.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new zL(this)}getSize(e){return b.resolve(this.size)}}class zL extends wA{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),b.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $L{constructor(e){this.persistence=e,this.Nr=new or(n=>qi(n),kl),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.Lr=0,this.Br=new pg,this.targetCount=0,this.kr=Qi.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),b.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Qi(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,b.resolve()}updateTargetData(e,n){return this.Kn(n),b.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),b.waitFor(s).next(()=>i)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return b.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),b.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),b.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),b.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return b.resolve(r)}containsKey(e,n){return b.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(e,n){this.qr={},this.overlays={},this.Qr=new bt(0),this.Kr=!1,this.Kr=!0,this.$r=new UL,this.referenceDelegate=e(this),this.Ur=new $L(this),this.indexManager=new CL,this.remoteDocumentCache=function(i){return new jL(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new hA(n),this.Gr=new ML(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new FL,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new BL(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){U("MemoryPersistence","Starting transaction:",e);const i=new qL(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return b.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class qL extends cS{constructor(e){super(),this.currentSequenceNumber=e}}class Oh{constructor(e){this.persistence=e,this.Jr=new pg,this.Yr=null}static Zr(e){return new Oh(e)}get Xr(){if(this.Yr)return this.Yr;throw W()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),b.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),b.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),b.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.Xr,r=>{const i=q.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,J.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return b.or([()=>b.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}class Hc{constructor(e,n){this.persistence=e,this.ti=new or(r=>vt(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=vA(this,n)}static Zr(e,n){return new Hc(e,n)}zr(){}jr(e){return b.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}Yn(e){const n=this.er(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}er(e){let n=0;return this.Zn(e,r=>{n++}).next(()=>n)}Zn(e,n){return b.forEach(this.ti,(r,i)=>this.nr(e,r,i).next(s=>s?b.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.Or(e,o=>this.nr(e,o,n).next(a=>{a||(r++,s.removeEntry(o,J.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.ti.set(n,e.currentSequenceNumber),b.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.ti.set(r,e.currentSequenceNumber),b.resolve()}removeReference(e,n,r){return this.ti.set(r,e.currentSequenceNumber),b.resolve()}updateLimboDocument(e,n){return this.ti.set(n,e.currentSequenceNumber),b.resolve()}Wr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=ec(e.data.value)),n}nr(e,n,r){return b.or([()=>this.persistence.Hr(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.ti.get(n);return b.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GL{constructor(e){this.serializer=e}O(e,n,r,i){const s=new Rh("createOrUpgrade",n);r<1&&i>=1&&(function(l){l.createObjectStore("owner")}(e),function(l){l.createObjectStore("mutationQueues",{keyPath:"userId"}),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",nw,{unique:!0}),l.createObjectStore("documentMutations")}(e),$w(e),function(l){l.createObjectStore("remoteDocuments")}(e));let o=b.resolve();return r<3&&i>=3&&(r!==0&&(function(l){l.deleteObjectStore("targetDocuments"),l.deleteObjectStore("targets"),l.deleteObjectStore("targetGlobal")}(e),$w(e)),o=o.next(()=>function(l){const c=l.store("targetGlobal"),h={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:J.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",h)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(l,c){return c.store("mutations").U().next(h=>{l.deleteObjectStore("mutations"),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",nw,{unique:!0});const f=c.store("mutations"),m=h.map(_=>f.put(_));return b.waitFor(m)})}(e,s))),o=o.next(()=>{(function(l){l.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.ni(s))),r<6&&i>=6&&(o=o.next(()=>(function(l){l.createObjectStore("remoteDocumentGlobal")}(e),this.ri(s)))),r<7&&i>=7&&(o=o.next(()=>this.ii(s))),r<8&&i>=8&&(o=o.next(()=>this.si(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.oi(s))),r<11&&i>=11&&(o=o.next(()=>{(function(l){l.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(l){l.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(l){const c=l.createObjectStore("documentOverlays",{keyPath:kO});c.createIndex("collectionPathOverlayIndex",xO,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",bO,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(l){const c=l.createObjectStore("remoteDocumentsV14",{keyPath:yO});c.createIndex("documentKeyIndex",vO),c.createIndex("collectionGroupIndex",wO)}(e)).next(()=>this._i(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.ai(e,s))),r<15&&i>=15&&(o=o.next(()=>function(l){l.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),l.createObjectStore("indexState",{keyPath:AO}).createIndex("sequenceNumberIndex",RO,{unique:!1}),l.createObjectStore("indexEntries",{keyPath:PO}).createIndex("documentKeyIndex",CO,{unique:!1})}(e))),r<16&&i>=16&&(o=o.next(()=>{n.objectStore("indexState").clear()}).next(()=>{n.objectStore("indexEntries").clear()})),r<17&&i>=17&&(o=o.next(()=>{(function(l){l.createObjectStore("globals",{keyPath:"name"})})(e)})),o}ri(e){let n=0;return e.store("remoteDocuments").J((r,i)=>{n+=Wc(i)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}ni(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.U().next(i=>b.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.U("userMutationsIndex",o).next(a=>b.forEach(a,l=>{Q(l.userId===s.userId);const c=Ii(this.serializer,l);return mA(e,s.userId,c).next(()=>{})}))}))}ii(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.J((o,a)=>{const l=new se(o),c=function(f){return[0,vt(f)]}(l);s.push(n.get(c).next(h=>h?b.resolve():(f=>n.put({targetId:0,path:vt(f),sequenceNumber:i.highestListenSequenceNumber}))(l)))}).next(()=>b.waitFor(s))})}si(e,n){e.createObjectStore("collectionParents",{keyPath:SO});const r=n.store("collectionParents"),i=new fg,s=o=>{if(i.add(o)){const a=o.lastSegment(),l=o.popLast();return r.put({collectionId:a,parent:vt(l)})}};return n.store("remoteDocuments").J({H:!0},(o,a)=>{const l=new se(o);return s(l.popLast())}).next(()=>n.store("documentMutations").J({H:!0},([o,a,l],c)=>{const h=mn(a);return s(h.popLast())}))}oi(e){const n=e.store("targets");return n.J((r,i)=>{const s=va(i),o=dA(this.serializer,s);return n.put(o)})}_i(e,n){const r=n.store("remoteDocuments"),i=[];return r.J((s,o)=>{const a=n.store("remoteDocumentsV14"),l=function(f){return f.document?new q(se.fromString(f.document.name).popFirst(5)):f.noDocument?q.fromSegments(f.noDocument.path):f.unknownDocument?q.fromSegments(f.unknownDocument.path):W()}(o).path.toArray(),c={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(c))}).next(()=>b.waitFor(i))}ai(e,n){const r=n.store("mutations"),i=EA(this.serializer),s=new mg(Oh.Zr,this.serializer.ct);return r.U().next(o=>{const a=new Map;return o.forEach(l=>{var c;let h=(c=a.get(l.userId))!==null&&c!==void 0?c:ee();Ii(this.serializer,l).keys().forEach(f=>h=h.add(f)),a.set(l.userId,h)}),b.forEach(a,(l,c)=>{const h=new et(c),f=Nh.lt(this.serializer,h),m=s.getIndexManager(h),_=Vh.lt(h,this.serializer,m,s.referenceDelegate);return new IA(i,_,f,m).recalculateAndSaveOverlaysForDocumentKeys(new wp(n,bt.oe),l).next()})})}}function $w(t){t.createObjectStore("targetDocuments",{keyPath:IO}).createIndex("documentTargetsIndex",TO,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",EO,{unique:!0}),t.createObjectStore("targetGlobal")}const nf="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class gg{constructor(e,n,r,i,s,o,a,l,c,h,f=17){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.ui=s,this.window=o,this.document=a,this.ci=c,this.li=h,this.hi=f,this.Qr=null,this.Kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Pi=null,this.inForeground=!1,this.Ii=null,this.Ti=null,this.Ei=Number.NEGATIVE_INFINITY,this.di=m=>Promise.resolve(),!gg.D())throw new B(V.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new NL(this,i),this.Ai=n+"main",this.serializer=new hA(l),this.Ri=new Tn(this.Ai,this.hi,new GL(this.serializer)),this.$r=new IL,this.Ur=new xL(this.referenceDelegate,this.serializer),this.remoteDocumentCache=EA(this.serializer),this.Gr=new EL,this.window&&this.window.localStorage?this.Vi=this.window.localStorage:(this.Vi=null,h===!1&&ze("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new B(V.FAILED_PRECONDITION,nf);return this.fi(),this.gi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Ur.getHighestSequenceNumber(e))}).then(e=>{this.Qr=new bt(e,this.ci)}).then(()=>{this.Kr=!0}).catch(e=>(this.Ri&&this.Ri.close(),Promise.reject(e)))}yi(e){return this.di=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ri.L(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ui.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>ku(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.wi(e).next(n=>{n||(this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)))})}).next(()=>this.Si(e)).next(n=>this.isPrimary&&!n?this.bi(e).next(()=>!1):!!n&&this.Di(e).next(()=>!0))).catch(e=>{if(ai(e))return U("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return U("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ui.enqueueRetryable(()=>this.di(e)),this.isPrimary=e})}wi(e){return la(e).get("owner").next(n=>b.resolve(this.vi(n)))}Ci(e){return ku(e).delete(this.clientId)}async Fi(){if(this.isPrimary&&!this.Mi(this.Ei,18e5)){this.Ei=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=Ye(n,"clientMetadata");return r.U().next(i=>{const s=this.xi(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return b.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Vi)for(const n of e)this.Vi.removeItem(this.Oi(n.clientId))}}pi(){this.Ti=this.ui.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.Fi()).then(()=>this.pi()))}vi(e){return!!e&&e.ownerId===this.clientId}Si(e){return this.li?b.resolve(!0):la(e).get("owner").next(n=>{if(n!==null&&this.Mi(n.leaseTimestampMs,5e3)&&!this.Ni(n.ownerId)){if(this.vi(n)&&this.networkEnabled)return!0;if(!this.vi(n)){if(!n.allowTabSynchronization)throw new B(V.FAILED_PRECONDITION,nf);return!1}}return!(!this.networkEnabled||!this.inForeground)||ku(e).U().next(r=>this.xi(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&U("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.Kr=!1,this.Li(),this.Ti&&(this.Ti.cancel(),this.Ti=null),this.Bi(),this.ki(),await this.Ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new wp(e,bt.oe);return this.bi(n).next(()=>this.Ci(n))}),this.Ri.close(),this.qi()}xi(e,n){return e.filter(r=>this.Mi(r.updateTimeMs,n)&&!this.Ni(r.clientId))}Qi(){return this.runTransaction("getActiveClients","readonly",e=>ku(e).U().next(n=>this.xi(n,18e5).map(r=>r.clientId)))}get started(){return this.Kr}getGlobalsCache(){return this.$r}getMutationQueue(e,n){return Vh.lt(e,this.serializer,n,this.referenceDelegate)}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new kL(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return Nh.lt(this.serializer,e)}getBundleCache(){return this.Gr}runTransaction(e,n,r){U("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite",s=function(l){return l===17?VO:l===16?NO:l===15?eg:l===14?gS:l===13?mS:l===12?DO:l===11?pS:void W()}(this.hi);let o;return this.Ri.runTransaction(e,i,s,a=>(o=new wp(a,this.Qr?this.Qr.next():bt.oe),n==="readwrite-primary"?this.wi(o).next(l=>!!l||this.Si(o)).next(l=>{if(!l)throw ze(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)),new B(V.FAILED_PRECONDITION,uS);return r(o)}).next(l=>this.Di(o).next(()=>l)):this.Ki(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}Ki(e){return la(e).get("owner").next(n=>{if(n!==null&&this.Mi(n.leaseTimestampMs,5e3)&&!this.Ni(n.ownerId)&&!this.vi(n)&&!(this.li||this.allowTabSynchronization&&n.allowTabSynchronization))throw new B(V.FAILED_PRECONDITION,nf)})}Di(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return la(e).put("owner",n)}static D(){return Tn.D()}bi(e){const n=la(e);return n.get("owner").next(r=>this.vi(r)?(U("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):b.resolve())}Mi(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(ze(`Detected an update time that is in the future: ${e} > ${r}`),!1))}fi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ii=()=>{this.ui.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.mi()))},this.document.addEventListener("visibilitychange",this.Ii),this.inForeground=this.document.visibilityState==="visible")}Bi(){this.Ii&&(this.document.removeEventListener("visibilitychange",this.Ii),this.Ii=null)}gi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Pi=()=>{this.Li();const n=/(?:Version|Mobile)\/1[456]/;u0()&&(navigator.appVersion.match(n)||navigator.userAgent.match(n))&&this.ui.enterRestrictedMode(!0),this.ui.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Pi))}ki(){this.Pi&&(this.window.removeEventListener("pagehide",this.Pi),this.Pi=null)}Ni(e){var n;try{const r=((n=this.Vi)===null||n===void 0?void 0:n.getItem(this.Oi(e)))!==null;return U("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return ze("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Li(){if(this.Vi)try{this.Vi.setItem(this.Oi(this.clientId),String(Date.now()))}catch(e){ze("Failed to set zombie client id.",e)}}qi(){if(this.Vi)try{this.Vi.removeItem(this.Oi(this.clientId))}catch{}}Oi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function la(t){return Ye(t,"owner")}function ku(t){return Ye(t,"clientMetadata")}function _g(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=ee(),i=ee();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new yg(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KL{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TA{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return u0()?8:hS(Je())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new KL;return this.Xi(e,n,o).next(a=>{if(s.result=a,this.zi)return this.es(e,n,o,a.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(ms()<=ie.DEBUG&&U("QueryEngine","SDK will not create cache indexes for query:",gs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),b.resolve()):(ms()<=ie.DEBUG&&U("QueryEngine","Query:",gs(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(ms()<=ie.DEBUG&&U("QueryEngine","The SDK decides to create cache indexes for query:",gs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,wt(n))):b.resolve())}Yi(e,n){if(mw(n))return b.resolve(null);let r=wt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=$c(n,null,"F"),r=wt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ee(...s);return this.Ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.ts(n,a);return this.ns(n,c,o,l.readTime)?this.Yi(e,$c(n,null,"F")):this.rs(e,c,n,l)}))})))}Zi(e,n,r,i){return mw(n)||i.isEqual(J.min())?b.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?b.resolve(null):(ms()<=ie.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),gs(n)),this.rs(e,o,n,aS(i,-1)).next(a=>a))})}ts(e,n){let r=new fe(OS(e));return n.forEach((i,s)=>{bl(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return ms()<=ie.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",gs(n)),this.Ji.getDocumentsMatchingQuery(e,n,$t.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WL{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new ye(X),this._s=new or(s=>qi(s),kl),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new IA(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function SA(t,e,n,r){return new WL(t,e,n,r)}async function AA(t,e){const n=z(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=ee();for(const c of i){o.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}for(const c of s){a.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(r,l).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:a}))})})}function HL(t,e){const n=z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(a,l,c,h){const f=c.batch,m=f.keys();let _=b.resolve();return m.forEach(S=>{_=_.next(()=>h.getEntry(l,S)).next(P=>{const C=c.docVersions.get(S);Q(C!==null),P.version.compareTo(C)<0&&(f.applyToRemoteDocument(P,c),P.isValidDocument()&&(P.setReadTime(c.commitVersion),h.addEntry(P)))})}),_.next(()=>a.mutationQueue.removeMutationBatch(l,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=ee();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function RA(t){const e=z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function QL(t,e){const n=z(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const a=[];e.targetChanges.forEach((h,f)=>{const m=i.get(f);if(!m)return;a.push(n.Ur.removeMatchingKeys(s,h.removedDocuments,f).next(()=>n.Ur.addMatchingKeys(s,h.addedDocuments,f)));let _=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?_=_.withResumeToken(Me.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):h.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(h.resumeToken,r)),i=i.insert(f,_),function(P,C,E){return P.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(m,_,h)&&a.push(n.Ur.updateTargetData(s,_))});let l=Nt(),c=ee();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push(PA(s,o,e.documentUpdates).next(h=>{l=h.Ps,c=h.Is})),!r.isEqual(J.min())){const h=n.Ur.getLastRemoteSnapshotVersion(s).next(f=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(h)}return b.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,c)).next(()=>l)}).then(s=>(n.os=i,s))}function PA(t,e,n){let r=ee(),i=ee();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Nt();return n.forEach((a,l)=>{const c=s.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(J.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):U("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{Ps:o,Is:i}})}function JL(t,e){const n=z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function lo(t,e){const n=z(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,b.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new qn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function uo(t,e,n){const r=z(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ai(o))throw o;U("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function Qc(t,e,n){const r=z(t);let i=J.min(),s=ee();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,h){const f=z(l),m=f._s.get(h);return m!==void 0?b.resolve(f.os.get(m)):f.Ur.getTargetData(c,h)}(r,o,wt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:J.min(),n?s:ee())).next(a=>(xA(r,VS(e),a),{documents:a,Ts:s})))}function CA(t,e){const n=z(t),r=z(n.Ur),i=n.os.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",s=>r.ot(s,e).next(o=>o?o.target:null))}function kA(t,e){const n=z(t),r=n.us.get(e)||J.min();return n.persistence.runTransaction("Get new document changes","readonly",i=>n.cs.getAllFromCollectionGroup(i,e,aS(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(xA(n,e,i),i))}function xA(t,e,n){let r=t.us.get(e)||J.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}async function YL(t,e,n,r){const i=z(t);let s=ee(),o=Nt();for(const c of n){const h=e.Es(c.metadata.name);c.document&&(s=s.add(h));const f=e.ds(c);f.setReadTime(e.As(c.metadata.readTime)),o=o.insert(h,f)}const a=i.cs.newChangeBuffer({trackRemovals:!0}),l=await lo(i,function(h){return wt(Po(se.fromString(`__bundle__/docs/${h}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",c=>PA(c,a,o).next(h=>(a.apply(c),h)).next(h=>i.Ur.removeMatchingKeysForTargetId(c,l.targetId).next(()=>i.Ur.addMatchingKeys(c,s,l.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(c,h.Ps,h.Is)).next(()=>h.Ps)))}async function XL(t,e,n=ee()){const r=await lo(t,wt(hg(e.bundledQuery))),i=z(t);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=$e(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.Gr.saveNamedQuery(s,e);const a=r.withResumeToken(Me.EMPTY_BYTE_STRING,o);return i.os=i.os.insert(a.targetId,a),i.Ur.updateTargetData(s,a).next(()=>i.Ur.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.Ur.addMatchingKeys(s,n,r.targetId)).next(()=>i.Gr.saveNamedQuery(s,e))})}function qw(t,e){return`firestore_clients_${t}_${e}`}function Gw(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function rf(t,e){return`firestore_targets_${t}_${e}`}class Jc{constructor(e,n,r,i){this.user=e,this.batchId=n,this.state=r,this.error=i}static Rs(e,n,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new B(i.error.code,i.error.message))),o?new Jc(e,n,i.state,s):(ze("SharedClientState",`Failed to parse mutation state for ID '${n}': ${r}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Va{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static Rs(e,n){const r=JSON.parse(n);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new B(r.error.code,r.error.message))),s?new Va(e,r.state,i):(ze("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Yc{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static Rs(e,n){const r=JSON.parse(n);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=rg();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=dS(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new Yc(e,s):(ze("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class vg{constructor(e,n){this.clientId=e,this.onlineState=n}static Rs(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new vg(n.clientId,n.onlineState):(ze("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Vp{constructor(){this.activeTargetIds=rg()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class sf{constructor(e,n,r,i,s){this.window=e,this.ui=n,this.persistenceKey=r,this.ps=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ys=this.ws.bind(this),this.Ss=new ye(X),this.started=!1,this.bs=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.Ds=qw(this.persistenceKey,this.ps),this.vs=function(l){return`firestore_sequence_number_${l}`}(this.persistenceKey),this.Ss=this.Ss.insert(this.ps,new Vp),this.Cs=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Fs=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Ms=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.xs=function(l){return`firestore_online_state_${l}`}(this.persistenceKey),this.Os=function(l){return`firestore_bundle_loaded_v2_${l}`}(this.persistenceKey),this.window.addEventListener("storage",this.ys)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Qi();for(const r of e){if(r===this.ps)continue;const i=this.getItem(qw(this.persistenceKey,r));if(i){const s=Yc.Rs(r,i);s&&(this.Ss=this.Ss.insert(s.clientId,s))}}this.Ns();const n=this.storage.getItem(this.xs);if(n){const r=this.Ls(n);r&&this.Bs(r)}for(const r of this.bs)this.ws(r);this.bs=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.vs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.ks(this.Ss)}isActiveQueryTarget(e){let n=!1;return this.Ss.forEach((r,i)=>{i.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.qs(e,"pending")}updateMutationState(e,n,r){this.qs(e,n,r),this.Qs(e)}addLocalQueryTarget(e,n=!0){let r="not-current";if(this.isActiveQueryTarget(e)){const i=this.storage.getItem(rf(this.persistenceKey,e));if(i){const s=Va.Rs(e,i);s&&(r=s.state)}}return n&&this.Ks.fs(e),this.Ns(),r}removeLocalQueryTarget(e){this.Ks.gs(e),this.Ns()}isLocalQueryTarget(e){return this.Ks.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(rf(this.persistenceKey,e))}updateQueryState(e,n,r){this.$s(e,n,r)}handleUserChange(e,n,r){n.forEach(i=>{this.Qs(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Us(e)}notifyBundleLoaded(e){this.Ws(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ys),this.removeItem(this.Ds),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return U("SharedClientState","READ",e,n),n}setItem(e,n){U("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){U("SharedClientState","REMOVE",e),this.storage.removeItem(e)}ws(e){const n=e;if(n.storageArea===this.storage){if(U("SharedClientState","EVENT",n.key,n.newValue),n.key===this.Ds)return void ze("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ui.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.Cs.test(n.key)){if(n.newValue==null){const r=this.Gs(n.key);return this.zs(r,null)}{const r=this.js(n.key,n.newValue);if(r)return this.zs(r.clientId,r)}}else if(this.Fs.test(n.key)){if(n.newValue!==null){const r=this.Hs(n.key,n.newValue);if(r)return this.Js(r)}}else if(this.Ms.test(n.key)){if(n.newValue!==null){const r=this.Ys(n.key,n.newValue);if(r)return this.Zs(r)}}else if(n.key===this.xs){if(n.newValue!==null){const r=this.Ls(n.newValue);if(r)return this.Bs(r)}}else if(n.key===this.vs){const r=function(s){let o=bt.oe;if(s!=null)try{const a=JSON.parse(s);Q(typeof a=="number"),o=a}catch(a){ze("SharedClientState","Failed to read sequence number from WebStorage",a)}return o}(n.newValue);r!==bt.oe&&this.sequenceNumberHandler(r)}else if(n.key===this.Os){const r=this.Xs(n.newValue);await Promise.all(r.map(i=>this.syncEngine.eo(i)))}}}else this.bs.push(n)})}}get Ks(){return this.Ss.get(this.ps)}Ns(){this.setItem(this.Ds,this.Ks.Vs())}qs(e,n,r){const i=new Jc(this.currentUser,e,n,r),s=Gw(this.persistenceKey,this.currentUser,e);this.setItem(s,i.Vs())}Qs(e){const n=Gw(this.persistenceKey,this.currentUser,e);this.removeItem(n)}Us(e){const n={clientId:this.ps,onlineState:e};this.storage.setItem(this.xs,JSON.stringify(n))}$s(e,n,r){const i=rf(this.persistenceKey,e),s=new Va(e,n,r);this.setItem(i,s.Vs())}Ws(e){const n=JSON.stringify(Array.from(e));this.setItem(this.Os,n)}Gs(e){const n=this.Cs.exec(e);return n?n[1]:null}js(e,n){const r=this.Gs(e);return Yc.Rs(r,n)}Hs(e,n){const r=this.Fs.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return Jc.Rs(new et(s),i,n)}Ys(e,n){const r=this.Ms.exec(e),i=Number(r[1]);return Va.Rs(i,n)}Ls(e){return vg.Rs(e)}Xs(e){return JSON.parse(e)}async Js(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.no(e.batchId,e.state,e.error);U("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Zs(e){return this.syncEngine.ro(e.targetId,e.state,e.error)}zs(e,n){const r=n?this.Ss.insert(e,n):this.Ss.remove(e),i=this.ks(this.Ss),s=this.ks(r),o=[],a=[];return s.forEach(l=>{i.has(l)||o.push(l)}),i.forEach(l=>{s.has(l)||a.push(l)}),this.syncEngine.io(o,a).then(()=>{this.Ss=r})}Bs(e){this.Ss.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}ks(e){let n=rg();return e.forEach((r,i)=>{n=n.unionWith(i.activeTargetIds)}),n}}class bA{constructor(){this.so=new Vp,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Vp,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZL{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kw{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){U("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){U("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xu=null;function of(){return xu===null?xu=function(){return 268435456+Math.round(2147483648*Math.random())}():xu++,"0x"+xu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t2{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gt="WebChannelConnection";class n2 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const a=of(),l=this.xo(n,r.toUriEncodedString());U("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(n,l,c,i).then(h=>(U("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw Zt("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",l,"request:",i),h})}Lo(n,r,i,s,o,a){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ro}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=e2[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=of();return new Promise((o,a)=>{const l=new X0;l.setWithCredentials(!0),l.listenOnce(Z0.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Yu.NO_ERROR:const h=l.getResponseJson();U(gt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(h)),o(h);break;case Yu.TIMEOUT:U(gt,`RPC '${e}' ${s} timed out`),a(new B(V.DEADLINE_EXCEEDED,"Request time out"));break;case Yu.HTTP_ERROR:const f=l.getStatus();if(U(gt,`RPC '${e}' ${s} failed with status:`,f,"response text:",l.getResponseText()),f>0){let m=l.getResponseJson();Array.isArray(m)&&(m=m[0]);const _=m==null?void 0:m.error;if(_&&_.status&&_.message){const S=function(C){const E=C.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(E)>=0?E:V.UNKNOWN}(_.status);a(new B(S,_.message))}else a(new B(V.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new B(V.UNAVAILABLE,"Connection failed."));break;default:W()}}finally{U(gt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);U(gt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=of(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=nS(),a=tS(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Oo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const h=s.join("");U(gt,`Creating RPC '${e}' stream ${i}: ${h}`,l);const f=o.createWebChannel(h,l);let m=!1,_=!1;const S=new t2({Io:C=>{_?U(gt,`Not sending because RPC '${e}' stream ${i} is closed:`,C):(m||(U(gt,`Opening RPC '${e}' stream ${i} transport.`),f.open(),m=!0),U(gt,`RPC '${e}' stream ${i} sending:`,C),f.send(C))},To:()=>f.close()}),P=(C,E,v)=>{C.listen(E,w=>{try{v(w)}catch(x){setTimeout(()=>{throw x},0)}})};return P(f,ga.EventType.OPEN,()=>{_||(U(gt,`RPC '${e}' stream ${i} transport opened.`),S.yo())}),P(f,ga.EventType.CLOSE,()=>{_||(_=!0,U(gt,`RPC '${e}' stream ${i} transport closed`),S.So())}),P(f,ga.EventType.ERROR,C=>{_||(_=!0,Zt(gt,`RPC '${e}' stream ${i} transport errored:`,C),S.So(new B(V.UNAVAILABLE,"The operation could not be completed")))}),P(f,ga.EventType.MESSAGE,C=>{var E;if(!_){const v=C.data[0];Q(!!v);const w=v,x=w.error||((E=w[0])===null||E===void 0?void 0:E.error);if(x){U(gt,`RPC '${e}' stream ${i} received error:`,x);const M=x.status;let F=function(T){const A=Ge[T];if(A!==void 0)return QS(A)}(M),I=x.message;F===void 0&&(F=V.INTERNAL,I="Unknown error status: "+M+" with message "+x.message),_=!0,S.So(new B(F,I)),f.close()}else U(gt,`RPC '${e}' stream ${i} received:`,v),S.bo(v)}}),P(a,eS.STAT_EVENT,C=>{C.stat===yp.PROXY?U(gt,`RPC '${e}' stream ${i} detected buffering proxy`):C.stat===yp.NOPROXY&&U(gt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{S.wo()},0),S}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DA(){return typeof window<"u"?window:null}function ic(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ol(t){return new cL(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&U("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NA{constructor(e,n,r,i,s,o,a,l){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new wg(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===V.RESOURCE_EXHAUSTED?(ze(n.toString()),ze("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new B(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return U("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(U("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class r2 extends NA{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=fL(this.serializer,e),r=function(s){if(!("targetChange"in s))return J.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?J.min():o.readTime?$e(o.readTime):J.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=kp(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=jc(l)?{documents:sA(s,l)}:{query:Dh(s,l)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=ZS(s,o.resumeToken);const c=Pp(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(J.min())>0){a.readTime=ao(s,o.snapshotVersion.toTimestamp());const c=Pp(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=mL(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=kp(this.serializer),n.removeTarget=e,this.a_(n)}}class i2 extends NA{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Q(!!e.streamToken),this.lastStreamToken=e.streamToken,Q(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Q(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=pL(e.writeResults,e.commitTime),r=$e(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=kp(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>cl(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s2 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new B(V.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Cp(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new B(V.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(e,Cp(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new B(V.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class o2{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(ze(n),this.D_=!1):U("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a2{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{ui(this)&&(U("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=z(l);c.L_.add(4),await xo(c),c.q_.set("Unknown"),c.L_.delete(4),await Ll(c)}(this))})}),this.q_=new o2(r,i)}}async function Ll(t){if(ui(t))for(const e of t.B_)await e(!0)}async function xo(t){for(const e of t.B_)await e(!1)}function Lh(t,e){const n=z(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Tg(n)?Ig(n):Do(n).r_()&&Eg(n,e))}function co(t,e){const n=z(t),r=Do(n);n.N_.delete(e),r.r_()&&VA(n,e),n.N_.size===0&&(r.r_()?r.o_():ui(n)&&n.q_.set("Unknown"))}function Eg(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(J.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Do(t).A_(e)}function VA(t,e){t.Q_.xe(e),Do(t).R_(e)}function Ig(t){t.Q_=new oL({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Do(t).start(),t.q_.v_()}function Tg(t){return ui(t)&&!Do(t).n_()&&t.N_.size>0}function ui(t){return z(t).L_.size===0}function OA(t){t.Q_=void 0}async function l2(t){t.q_.set("Online")}async function u2(t){t.N_.forEach((e,n)=>{Eg(t,e)})}async function c2(t,e){OA(t),Tg(t)?(t.q_.M_(e),Ig(t)):t.q_.set("Unknown")}async function h2(t,e,n){if(t.q_.set("Online"),e instanceof XS&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.N_.delete(a),i.Q_.removeTarget(a))}(t,e)}catch(r){U("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Xc(t,r)}else if(e instanceof rc?t.Q_.Ke(e):e instanceof YS?t.Q_.He(e):t.Q_.We(e),!n.isEqual(J.min()))try{const r=await RA(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.Q_.rt(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const h=s.N_.get(c);h&&s.N_.set(c,h.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const h=s.N_.get(l);if(!h)return;s.N_.set(l,h.withResumeToken(Me.EMPTY_BYTE_STRING,h.snapshotVersion)),VA(s,l);const f=new qn(h.target,l,c,h.sequenceNumber);Eg(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){U("RemoteStore","Failed to raise snapshot:",r),await Xc(t,r)}}async function Xc(t,e,n){if(!ai(e))throw e;t.L_.add(1),await xo(t),t.q_.set("Offline"),n||(n=()=>RA(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{U("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Ll(t)})}function LA(t,e){return e().catch(n=>Xc(t,n,e))}async function bo(t){const e=z(t),n=Xr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;d2(e);)try{const i=await JL(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,f2(e,i)}catch(i){await Xc(e,i)}MA(e)&&FA(e)}function d2(t){return ui(t)&&t.O_.length<10}function f2(t,e){t.O_.push(e);const n=Xr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function MA(t){return ui(t)&&!Xr(t).n_()&&t.O_.length>0}function FA(t){Xr(t).start()}async function p2(t){Xr(t).p_()}async function m2(t){const e=Xr(t);for(const n of t.O_)e.m_(n.mutations)}async function g2(t,e,n){const r=t.O_.shift(),i=ag.from(r,e,n);await LA(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await bo(t)}async function _2(t,e){e&&Xr(t).V_&&await async function(r,i){if(function(o){return HS(o)&&o!==V.ABORTED}(i.code)){const s=r.O_.shift();Xr(r).s_(),await LA(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await bo(r)}}(t,e),MA(t)&&FA(t)}async function Ww(t,e){const n=z(t);n.asyncQueue.verifyOperationInProgress(),U("RemoteStore","RemoteStore received new credentials");const r=ui(n);n.L_.add(3),await xo(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Ll(n)}async function Op(t,e){const n=z(t);e?(n.L_.delete(2),await Ll(n)):e||(n.L_.add(2),await xo(n),n.q_.set("Unknown"))}function Do(t){return t.K_||(t.K_=function(n,r,i){const s=z(n);return s.w_(),new r2(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:l2.bind(null,t),Ro:u2.bind(null,t),mo:c2.bind(null,t),d_:h2.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Tg(t)?Ig(t):t.q_.set("Unknown")):(await t.K_.stop(),OA(t))})),t.K_}function Xr(t){return t.U_||(t.U_=function(n,r,i){const s=z(n);return s.w_(),new i2(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:p2.bind(null,t),mo:_2.bind(null,t),f_:m2.bind(null,t),g_:g2.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await bo(t)):(await t.U_.stop(),t.O_.length>0&&(U("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new nt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Sg(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function No(t,e){if(ze("AsyncQueue",`${e}: ${t}`),ai(t))return new B(V.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e){this.comparator=e?(n,r)=>e(n,r)||q.comparator(n.key,r.key):(n,r)=>q.comparator(n.key,r.key),this.keyedMap=_a(),this.sortedSet=new ye(this.comparator)}static emptySet(e){return new $s(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof $s)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new $s;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hw{constructor(){this.W_=new ye(q.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):W():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ho{constructor(e,n,r,i,s,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ho(e,n,$s.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&xl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y2{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class v2{constructor(){this.queries=Qw(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=z(n),s=i.queries;i.queries=Qw(),s.forEach((o,a)=>{for(const l of a.j_)l.onError(r)})})(this,new B(V.ABORTED,"Firestore shutting down"))}}function Qw(){return new or(t=>NS(t),xl)}async function Ag(t,e){const n=z(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new y2,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=No(o,`Initialization of query '${gs(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&Pg(n)}async function Rg(t,e){const n=z(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function w2(t,e){const n=z(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.j_)a.X_(i)&&(r=!0);o.z_=i}}r&&Pg(n)}function E2(t,e,n){const r=z(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function Pg(t){t.Y_.forEach(e=>{e.next()})}var Lp,Jw;(Jw=Lp||(Lp={})).ea="default",Jw.Cache="cache";class Cg{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ho(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=ho.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Lp.Cache}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I2{constructor(e,n){this.aa=e,this.byteLength=n}ua(){return"metadata"in this.aa}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yw{constructor(e){this.serializer=e}Es(e){return Sn(this.serializer,e)}ds(e){return e.metadata.exists?iA(this.serializer,e.document,!1):Ee.newNoDocument(this.Es(e.metadata.name),this.As(e.metadata.readTime))}As(e){return $e(e)}}class T2{constructor(e,n,r){this.ca=e,this.localStore=n,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=UA(e)}la(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;if(e.aa.namedQuery)this.queries.push(e.aa.namedQuery);else if(e.aa.documentMetadata){this.documents.push({metadata:e.aa.documentMetadata}),e.aa.documentMetadata.exists||++n;const r=se.fromString(e.aa.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.aa.document&&(this.documents[this.documents.length-1].document=e.aa.document,++n);return n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}ha(e){const n=new Map,r=new Yw(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.Es(i.metadata.name);for(const o of i.metadata.queries){const a=(n.get(o)||ee()).add(s);n.set(o,a)}}return n}async complete(){const e=await YL(this.localStore,new Yw(this.serializer),this.documents,this.ca.id),n=this.ha(this.documents);for(const r of this.queries)await XL(this.localStore,r,n.get(r.name));return this.progress.taskState="Success",{progress:this.progress,Pa:this.collectionGroups,Ia:e}}}function UA(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BA{constructor(e){this.key=e}}class jA{constructor(e){this.key=e}}class zA{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ee(),this.mutatedKeys=ee(),this.Aa=OS(e),this.Ra=new $s(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Hw,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,f)=>{const m=i.get(h),_=bl(this.query,f)?f:null,S=!!m&&this.mutatedKeys.has(m.key),P=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let C=!1;m&&_?m.data.isEqual(_.data)?S!==P&&(r.track({type:3,doc:_}),C=!0):this.ga(m,_)||(r.track({type:2,doc:_}),C=!0,(l&&this.Aa(_,l)>0||c&&this.Aa(_,c)<0)&&(a=!0)):!m&&_?(r.track({type:0,doc:_}),C=!0):m&&!_&&(r.track({type:1,doc:m}),C=!0,(l||c)&&(a=!0)),C&&(_?(o=o.add(_),s=P?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{Ra:o,fa:r,ns:a,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((h,f)=>function(_,S){const P=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return W()}};return P(_)-P(S)}(h.type,f.type)||this.Aa(h.doc,f.doc)),this.pa(r),i=i!=null&&i;const a=n&&!i?this.ya():[],l=this.da.size===0&&this.current&&!i?1:0,c=l!==this.Ea;return this.Ea=l,o.length!==0||c?{snapshot:new ho(this.query,e.Ra,s,o,e.mutatedKeys,l===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Hw,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ee(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new jA(r))}),this.da.forEach(r=>{e.has(r)||n.push(new BA(r))}),n}ba(e){this.Ta=e.Ts,this.da=ee();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return ho.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class S2{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class A2{constructor(e){this.key=e,this.va=!1}}class R2{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new or(a=>NS(a),xl),this.Ma=new Map,this.xa=new Set,this.Oa=new ye(q.comparator),this.Na=new Map,this.La=new pg,this.Ba={},this.ka=new Map,this.qa=Qi.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function P2(t,e,n=!0){const r=Mh(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await $A(r,e,n,!0),i}async function C2(t,e){const n=Mh(t);await $A(n,e,!0,!1)}async function $A(t,e,n,r){const i=await lo(t.localStore,wt(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await kg(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&Lh(t.remoteStore,i),a}async function kg(t,e,n,r,i){t.Ka=(f,m,_)=>async function(P,C,E,v){let w=C.view.ma(E);w.ns&&(w=await Qc(P.localStore,C.query,!1).then(({documents:I})=>C.view.ma(I,w)));const x=v&&v.targetChanges.get(C.targetId),M=v&&v.targetMismatches.get(C.targetId)!=null,F=C.view.applyChanges(w,P.isPrimaryClient,x,M);return Mp(P,C.targetId,F.wa),F.snapshot}(t,f,m,_);const s=await Qc(t.localStore,e,!0),o=new zA(e,s.Ts),a=o.ma(s.documents),l=Vl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);Mp(t,n,c.wa);const h=new S2(e,n,o);return t.Fa.set(e,h),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function k2(t,e,n){const r=z(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!xl(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await uo(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&co(r.remoteStore,i.targetId),fo(r,i.targetId)}).catch(oi)):(fo(r,i.targetId),await uo(r.localStore,i.targetId,!0))}async function x2(t,e){const n=z(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),co(n.remoteStore,r.targetId))}async function b2(t,e,n){const r=Ng(t);try{const i=await function(o,a){const l=z(o),c=De.now(),h=a.reduce((_,S)=>_.add(S.key),ee());let f,m;return l.persistence.runTransaction("Locally write mutations","readwrite",_=>{let S=Nt(),P=ee();return l.cs.getEntries(_,h).next(C=>{S=C,S.forEach((E,v)=>{v.isValidDocument()||(P=P.add(E))})}).next(()=>l.localDocuments.getOverlayedDocuments(_,S)).next(C=>{f=C;const E=[];for(const v of a){const w=rL(v,f.get(v.key).overlayedDocument);w!=null&&E.push(new ar(v.key,w,IS(w.value.mapValue),Pe.exists(!0)))}return l.mutationQueue.addMutationBatch(_,c,E,a)}).next(C=>{m=C;const E=C.applyToLocalDocumentSet(f,P);return l.documentOverlayCache.saveOverlays(_,C.batchId,E)})}).then(()=>({batchId:m.batchId,changes:MS(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let c=o.Ba[o.currentUser.toKey()];c||(c=new ye(X)),c=c.insert(a,l),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,n),await lr(r,i.changes),await bo(r.remoteStore)}catch(i){const s=No(i,"Failed to persist write");n.reject(s)}}async function qA(t,e){const n=z(t);try{const r=await QL(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(Q(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?Q(o.va):i.removedDocuments.size>0&&(Q(o.va),o.va=!1))}),await lr(n,r,e)}catch(r){await oi(r)}}function Xw(t,e,n){const r=z(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const a=o.view.Z_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=z(o);l.onlineState=a;let c=!1;l.queries.forEach((h,f)=>{for(const m of f.j_)m.Z_(a)&&(c=!0)}),c&&Pg(l)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function D2(t,e,n){const r=z(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new ye(q.comparator);o=o.insert(s,Ee.newNoDocument(s,J.min()));const a=ee().add(s),l=new Nl(J.min(),new Map,new ye(X),o,a);await qA(r,l),r.Oa=r.Oa.remove(s),r.Na.delete(e),Dg(r)}else await uo(r.localStore,e,!1).then(()=>fo(r,e,n)).catch(oi)}async function N2(t,e){const n=z(t),r=e.batch.batchId;try{const i=await HL(n.localStore,e);bg(n,r,null),xg(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await lr(n,i)}catch(i){await oi(i)}}async function V2(t,e,n){const r=z(t);try{const i=await function(o,a){const l=z(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return l.mutationQueue.lookupMutationBatch(c,a).next(f=>(Q(f!==null),h=f.keys(),l.mutationQueue.removeMutationBatch(c,f))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,h,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>l.localDocuments.getDocuments(c,h))})}(r.localStore,e);bg(r,e,n),xg(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await lr(r,i)}catch(i){await oi(i)}}async function O2(t,e){const n=z(t);ui(n.remoteStore)||U("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(o){const a=z(o);return a.persistence.runTransaction("Get highest unacknowledged batch id","readonly",l=>a.mutationQueue.getHighestUnacknowledgedBatchId(l))}(n.localStore);if(r===-1)return void e.resolve();const i=n.ka.get(r)||[];i.push(e),n.ka.set(r,i)}catch(r){const i=No(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function xg(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function bg(t,e,n){const r=z(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function fo(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||GA(t,r)})}function GA(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(co(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Dg(t))}function Mp(t,e,n){for(const r of n)r instanceof BA?(t.La.addReference(r.key,e),L2(t,r)):r instanceof jA?(U("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||GA(t,r.key)):W()}function L2(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(U("SyncEngine","New document in limbo: "+n),t.xa.add(r),Dg(t))}function Dg(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new q(se.fromString(e)),r=t.qa.next();t.Na.set(r,new A2(n)),t.Oa=t.Oa.insert(n,r),Lh(t.remoteStore,new qn(wt(Po(n.path)),r,"TargetPurposeLimboResolution",bt.oe))}}async function lr(t,e,n){const r=z(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((a,l)=>{o.push(r.Ka(l,e,n).then(c=>{var h;if((c||n)&&r.isPrimaryClient){const f=c?!c.fromCache:(h=n==null?void 0:n.targetChanges.get(l.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(l.targetId,f?"current":"not-current")}if(c){i.push(c);const f=yg.Wi(l.targetId,c);s.push(f)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(l,c){const h=z(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>b.forEach(c,m=>b.forEach(m.$i,_=>h.persistence.referenceDelegate.addReference(f,m.targetId,_)).next(()=>b.forEach(m.Ui,_=>h.persistence.referenceDelegate.removeReference(f,m.targetId,_)))))}catch(f){if(!ai(f))throw f;U("LocalStore","Failed to update sequence numbers: "+f)}for(const f of c){const m=f.targetId;if(!f.fromCache){const _=h.os.get(m),S=_.snapshotVersion,P=_.withLastLimboFreeSnapshotVersion(S);h.os=h.os.insert(m,P)}}}(r.localStore,s))}async function M2(t,e){const n=z(t);if(!n.currentUser.isEqual(e)){U("SyncEngine","User change. New user:",e.toKey());const r=await AA(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(a=>{a.forEach(l=>{l.reject(new B(V.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await lr(n,r.hs)}}function F2(t,e){const n=z(t),r=n.Na.get(e);if(r&&r.va)return ee().add(r.key);{let i=ee();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const a=n.Fa.get(o);i=i.unionWith(a.view.Va)}return i}}async function U2(t,e){const n=z(t),r=await Qc(n.localStore,e.query,!0),i=e.view.ba(r);return n.isPrimaryClient&&Mp(n,e.targetId,i.wa),i}async function B2(t,e){const n=z(t);return kA(n.localStore,e).then(r=>lr(n,r))}async function j2(t,e,n,r){const i=z(t),s=await function(a,l){const c=z(a),h=z(c.mutationQueue);return c.persistence.runTransaction("Lookup mutation documents","readonly",f=>h.Mn(f,l).next(m=>m?c.localDocuments.getDocuments(f,m):b.resolve(null)))}(i.localStore,e);s!==null?(n==="pending"?await bo(i.remoteStore):n==="acknowledged"||n==="rejected"?(bg(i,e,r||null),xg(i,e),function(a,l){z(z(a).mutationQueue).On(l)}(i.localStore,e)):W(),await lr(i,s)):U("SyncEngine","Cannot apply mutation batch with id: "+e)}async function z2(t,e){const n=z(t);if(Mh(n),Ng(n),e===!0&&n.Qa!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),i=await Zw(n,r.toArray());n.Qa=!0,await Op(n.remoteStore,!0);for(const s of i)Lh(n.remoteStore,s)}else if(e===!1&&n.Qa!==!1){const r=[];let i=Promise.resolve();n.Ma.forEach((s,o)=>{n.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(fo(n,o),uo(n.localStore,o,!0))),co(n.remoteStore,o)}),await i,await Zw(n,r),function(o){const a=z(o);a.Na.forEach((l,c)=>{co(a.remoteStore,c)}),a.La.pr(),a.Na=new Map,a.Oa=new ye(q.comparator)}(n),n.Qa=!1,await Op(n.remoteStore,!1)}}async function Zw(t,e,n){const r=z(t),i=[],s=[];for(const o of e){let a;const l=r.Ma.get(o);if(l&&l.length!==0){a=await lo(r.localStore,wt(l[0]));for(const c of l){const h=r.Fa.get(c),f=await U2(r,h);f.snapshot&&s.push(f.snapshot)}}else{const c=await CA(r.localStore,o);a=await lo(r.localStore,c),await kg(r,KA(c),o,!1,a.resumeToken)}i.push(a)}return r.Ca.d_(s),i}function KA(t){return xS(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function $2(t){return function(n){return z(z(n).persistence).Qi()}(z(t).localStore)}async function q2(t,e,n,r){const i=z(t);if(i.Qa)return void U("SyncEngine","Ignoring unexpected query state notification.");const s=i.Ma.get(e);if(s&&s.length>0)switch(n){case"current":case"not-current":{const o=await kA(i.localStore,VS(s[0])),a=Nl.createSynthesizedRemoteEventForCurrentChange(e,n==="current",Me.EMPTY_BYTE_STRING);await lr(i,o,a);break}case"rejected":await uo(i.localStore,e,!0),fo(i,e,r);break;default:W()}}async function G2(t,e,n){const r=Mh(t);if(r.Qa){for(const i of e){if(r.Ma.has(i)&&r.sharedClientState.isActiveQueryTarget(i)){U("SyncEngine","Adding an already active target "+i);continue}const s=await CA(r.localStore,i),o=await lo(r.localStore,s);await kg(r,KA(s),o.targetId,!1,o.resumeToken),Lh(r.remoteStore,o)}for(const i of n)r.Ma.has(i)&&await uo(r.localStore,i,!1).then(()=>{co(r.remoteStore,i),fo(r,i)}).catch(oi)}}function Mh(t){const e=z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=qA.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=F2.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=D2.bind(null,e),e.Ca.d_=w2.bind(null,e.eventManager),e.Ca.$a=E2.bind(null,e.eventManager),e}function Ng(t){const e=z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=N2.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=V2.bind(null,e),e}function K2(t,e,n){const r=z(t);(async function(s,o,a){try{const l=await o.getMetadata();if(await function(_,S){const P=z(_),C=$e(S.createTime);return P.persistence.runTransaction("hasNewerBundle","readonly",E=>P.Gr.getBundleMetadata(E,S.id)).then(E=>!!E&&E.createTime.compareTo(C)>=0)}(s.localStore,l))return await o.close(),a._completeWith(function(_){return{taskState:"Success",documentsLoaded:_.totalDocuments,bytesLoaded:_.totalBytes,totalDocuments:_.totalDocuments,totalBytes:_.totalBytes}}(l)),Promise.resolve(new Set);a._updateProgress(UA(l));const c=new T2(l,s.localStore,o.serializer);let h=await o.Ua();for(;h;){const m=await c.la(h);m&&a._updateProgress(m),h=await o.Ua()}const f=await c.complete();return await lr(s,f.Ia,void 0),await function(_,S){const P=z(_);return P.persistence.runTransaction("Save bundle","readwrite",C=>P.Gr.saveBundleMetadata(C,S))}(s.localStore,l),a._completeWith(f.progress),Promise.resolve(f.Pa)}catch(l){return Zt("SyncEngine",`Loading bundle failed with ${l}`),a._failWith(l),Promise.resolve(new Set)}})(r,e,n).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class Zr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ol(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return SA(this.persistence,new TA,e.initialUser,this.serializer)}Ga(e){return new mg(Oh.Zr,this.serializer)}Wa(e){return new bA}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Zr.provider={build:()=>new Zr};class W2 extends Zr{constructor(e){super(),this.cacheSizeBytes=e}ja(e,n){Q(this.persistence.referenceDelegate instanceof Hc);const r=this.persistence.referenceDelegate.garbageCollector;return new yA(r,e.asyncQueue,n)}Ga(e){const n=this.cacheSizeBytes!==void 0?_t.withCacheSize(this.cacheSizeBytes):_t.DEFAULT;return new mg(r=>Hc.Zr(r,n),this.serializer)}}class Vg extends Zr{constructor(e,n,r){super(),this.Ja=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ja.initialize(this,e),await Ng(this.Ja.syncEngine),await bo(this.Ja.remoteStore),await this.persistence.yi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}za(e){return SA(this.persistence,new TA,e.initialUser,this.serializer)}ja(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new yA(r,e.asyncQueue,n)}Ha(e,n){const r=new mO(n,this.persistence);return new pO(e.asyncQueue,r)}Ga(e){const n=_g(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?_t.withCacheSize(this.cacheSizeBytes):_t.DEFAULT;return new gg(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,DA(),ic(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Wa(e){return new bA}}class WA extends Vg{constructor(e,n){super(e,n,!1),this.Ja=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.Ja.syncEngine;this.sharedClientState instanceof sf&&(this.sharedClientState.syncEngine={no:j2.bind(null,n),ro:q2.bind(null,n),io:G2.bind(null,n),Qi:$2.bind(null,n),eo:B2.bind(null,n)},await this.sharedClientState.start()),await this.persistence.yi(async r=>{await z2(this.Ja.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}Wa(e){const n=DA();if(!sf.D(n))throw new B(V.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=_g(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new sf(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class ei{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Xw(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=M2.bind(null,this.syncEngine),await Op(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new v2}()}createDatastore(e){const n=Ol(e.databaseInfo.databaseId),r=function(s){return new n2(s)}(e.databaseInfo);return function(s,o,a,l){return new s2(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new a2(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Xw(this.syncEngine,n,0),function(){return Kw.D()?new Kw:new ZL}())}createSyncEngine(e,n){return function(i,s,o,a,l,c,h){const f=new R2(i,s,o,a,l,c);return h&&(f.Qa=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=z(i);U("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await xo(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}ei.provider={build:()=>new ei};function eE(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):ze("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H2{constructor(e,n){this.Xa=e,this.serializer=n,this.metadata=new nt,this.buffer=new Uint8Array,this.eu=function(){return new TextDecoder("utf-8")}(),this.tu().then(r=>{r&&r.ua()?this.metadata.resolve(r.aa.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.aa)}`))},r=>this.metadata.reject(r))}close(){return this.Xa.cancel()}async getMetadata(){return this.metadata.promise}async Ua(){return await this.getMetadata(),this.tu()}async tu(){const e=await this.nu();if(e===null)return null;const n=this.eu.decode(e),r=Number(n);isNaN(r)&&this.ru(`length string (${n}) is not valid number`);const i=await this.iu(r);return new I2(JSON.parse(i),e.length+r)}su(){return this.buffer.findIndex(e=>e===123)}async nu(){for(;this.su()<0&&!await this.ou(););if(this.buffer.length===0)return null;const e=this.su();e<0&&this.ru("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async iu(e){for(;this.buffer.length<e;)await this.ou()&&this.ru("Reached the end of bundle when more is expected.");const n=this.eu.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}ru(e){throw this.Xa.cancel(),new Error(`Invalid bundle format: ${e}`)}async ou(){const e=await this.Xa.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q2{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new B(V.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const n=await async function(i,s){const o=z(i),a={documents:s.map(f=>ul(o.serializer,f))},l=await o.Lo("BatchGetDocuments",o.serializer.databaseId,se.emptyPath(),a,s.length),c=new Map;l.forEach(f=>{const m=dL(o.serializer,f);c.set(m.key.toString(),m)});const h=[];return s.forEach(f=>{const m=c.get(f.toString());Q(!!m),h.push(m)}),h}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new ko(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=q.fromPath(r);this.mutations.push(new sg(i,this.precondition(i)))}),await async function(r,i){const s=z(r),o={writes:i.map(a=>cl(s.serializer,a))};await s.Mo("Commit",s.serializer.databaseId,se.emptyPath(),o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw W();n=J.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new B(V.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(J.min())?Pe.exists(!1):Pe.updateTime(n):Pe.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(J.min()))throw new B(V.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Pe.updateTime(n)}return Pe.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J2{constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this._u=r.maxAttempts,this.t_=new wg(this.asyncQueue,"transaction_retry")}au(){this._u-=1,this.uu()}uu(){this.t_.Go(async()=>{const e=new Q2(this.datastore),n=this.cu(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.lu(i)}))}).catch(r=>{this.lu(r)})})}cu(e){try{const n=this.updateFunction(e);return!Cl(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}lu(e){this._u>0&&this.hu(e)?(this._u-=1,this.asyncQueue.enqueueAndForget(()=>(this.uu(),Promise.resolve()))):this.deferred.reject(e)}hu(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!HS(n)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y2{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=et.UNAUTHENTICATED,this.clientId=sS.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{U("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(U("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new nt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=No(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function af(t,e){t.asyncQueue.verifyOperationInProgress(),U("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await AA(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function tE(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Og(t);U("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Ww(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Ww(e.remoteStore,i)),t._onlineComponents=e}async function Og(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){U("FirestoreClient","Using user provided OfflineComponentProvider");try{await af(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===V.FAILED_PRECONDITION||i.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Zt("Error using user provided cache. Falling back to memory cache: "+n),await af(t,new Zr)}}else U("FirestoreClient","Using default OfflineComponentProvider"),await af(t,new Zr);return t._offlineComponents}async function Uh(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(U("FirestoreClient","Using user provided OnlineComponentProvider"),await tE(t,t._uninitializedComponentsProvider._online)):(U("FirestoreClient","Using default OnlineComponentProvider"),await tE(t,new ei))),t._onlineComponents}function HA(t){return Og(t).then(e=>e.persistence)}function Vo(t){return Og(t).then(e=>e.localStore)}function QA(t){return Uh(t).then(e=>e.remoteStore)}function Lg(t){return Uh(t).then(e=>e.syncEngine)}function JA(t){return Uh(t).then(e=>e.datastore)}async function po(t){const e=await Uh(t),n=e.eventManager;return n.onListen=P2.bind(null,e.syncEngine),n.onUnlisten=k2.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=C2.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=x2.bind(null,e.syncEngine),n}function X2(t){return t.asyncQueue.enqueue(async()=>{const e=await HA(t),n=await QA(t);return e.setNetworkEnabled(!0),function(i){const s=z(i);return s.L_.delete(0),Ll(s)}(n)})}function Z2(t){return t.asyncQueue.enqueue(async()=>{const e=await HA(t),n=await QA(t);return e.setNetworkEnabled(!1),async function(i){const s=z(i);s.L_.add(0),await xo(s),s.q_.set("Offline")}(n)})}function eM(t,e){const n=new nt;return t.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await function(c,h){const f=z(c);return f.persistence.runTransaction("read document","readonly",m=>f.localDocuments.getDocument(m,h))}(i,s);a.isFoundDocument()?o.resolve(a):a.isNoDocument()?o.resolve(null):o.reject(new B(V.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(a){const l=No(a,`Failed to get document '${s} from cache`);o.reject(l)}}(await Vo(t),e,n)),n.promise}function YA(t,e,n={}){const r=new nt;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,c){const h=new Fh({next:m=>{h.Za(),o.enqueueAndForget(()=>Rg(s,f));const _=m.docs.has(a);!_&&m.fromCache?c.reject(new B(V.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&m.fromCache&&l&&l.source==="server"?c.reject(new B(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new Cg(Po(a.path),h,{includeMetadataChanges:!0,_a:!0});return Ag(s,f)}(await po(t),t.asyncQueue,e,n,r)),r.promise}function tM(t,e){const n=new nt;return t.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await Qc(i,s,!0),l=new zA(s,a.Ts),c=l.ma(a.documents),h=l.applyChanges(c,!1);o.resolve(h.snapshot)}catch(a){const l=No(a,`Failed to execute query '${s} against cache`);o.reject(l)}}(await Vo(t),e,n)),n.promise}function XA(t,e,n={}){const r=new nt;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,c){const h=new Fh({next:m=>{h.Za(),o.enqueueAndForget(()=>Rg(s,f)),m.fromCache&&l.source==="server"?c.reject(new B(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new Cg(a,h,{includeMetadataChanges:!0,_a:!0});return Ag(s,f)}(await po(t),t.asyncQueue,e,n,r)),r.promise}function nM(t,e,n){const r=new nt;return t.asyncQueue.enqueueAndForget(async()=>{try{const i=await JA(t);r.resolve(async function(o,a,l){var c;const h=z(o),{request:f,ut:m,parent:_}=oA(h.serializer,bS(a),l);h.connection.Fo||delete f.parent;const S=(await h.Lo("RunAggregationQuery",h.serializer.databaseId,_,f,1)).filter(C=>!!C.result);Q(S.length===1);const P=(c=S[0].result)===null||c===void 0?void 0:c.aggregateFields;return Object.keys(P).reduce((C,E)=>(C[m[E]]=P[E],C),{})}(i,e,n))}catch(i){r.reject(i)}}),r.promise}function rM(t,e){const n=new Fh(e);return t.asyncQueue.enqueueAndForget(async()=>function(i,s){z(i).Y_.add(s),s.next()}(await po(t),n)),()=>{n.Za(),t.asyncQueue.enqueueAndForget(async()=>function(i,s){z(i).Y_.delete(s)}(await po(t),n))}}function iM(t,e,n,r){const i=function(o,a){let l;return l=typeof o=="string"?JS().encode(o):o,function(h,f){return new H2(h,f)}(function(h,f){if(h instanceof Uint8Array)return eE(h,f);if(h instanceof ArrayBuffer)return eE(new Uint8Array(h),f);if(h instanceof ReadableStream)return h.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(l),a)}(n,Ol(e));t.asyncQueue.enqueueAndForget(async()=>{K2(await Lg(t),i,r)})}function sM(t,e){return t.asyncQueue.enqueue(async()=>function(r,i){const s=z(r);return s.persistence.runTransaction("Get named query","readonly",o=>s.Gr.getNamedQuery(o,i))}(await Vo(t),e))}function oM(t,e){return t.asyncQueue.enqueue(async()=>async function(r,i){const s=z(r),o=s.indexManager,a=[];return s.persistence.runTransaction("Configure indexes","readwrite",l=>o.getFieldIndexes(l).next(c=>function(f,m,_,S,P){f=[...f],m=[...m],f.sort(_),m.sort(_);const C=f.length,E=m.length;let v=0,w=0;for(;v<E&&w<C;){const x=_(f[w],m[v]);x<0?P(f[w++]):x>0?S(m[v++]):(v++,w++)}for(;v<E;)S(m[v++]);for(;w<C;)P(f[w++])}(c,i,cO,h=>{a.push(o.addFieldIndex(l,h))},h=>{a.push(o.deleteFieldIndex(l,h))})).next(()=>b.waitFor(a)))}(await Vo(t),e))}function aM(t,e){return t.asyncQueue.enqueue(async()=>function(r,i){z(r).ss.zi=i}(await Vo(t),e))}function lM(t){return t.asyncQueue.enqueue(async()=>function(n){const r=z(n),i=r.indexManager;return r.persistence.runTransaction("Delete All Indexes","readwrite",s=>i.deleteAllFieldIndexes(s))}(await Vo(t)))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZA(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nE=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mg(t,e,n){if(!n)throw new B(V.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function uM(t,e,n,r){if(e===!0&&r===!0)throw new B(V.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function rE(t){if(!q.isDocumentKey(t))throw new B(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function iE(t){if(q.isDocumentKey(t))throw new B(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Bh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":W()}function ne(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new B(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Bh(t);throw new B(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function eR(t,e){if(e<=0)throw new B(V.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new B(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new B(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}uM("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ZA((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new B(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new B(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new B(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ml{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new sE({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new B(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new B(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new sE(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new nO;switch(r.type){case"firstParty":return new oO(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new B(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=nE.get(n);r&&(U("ComponentProvider","Removing Datastore"),nE.delete(n),r.terminate())}(this),Promise.resolve()}}function cM(t,e,n,r={}){var i;const s=(t=ne(t,Ml))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Zt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=et.MOCK_USER;else{a=l0(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new B(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new et(c)}t._authCredentials=new rO(new rS(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ct(this.firestore,e,this._query)}}class qe{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new An(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new qe(this.firestore,e,this._key)}}class An extends ct{constructor(e,n,r){super(e,n,Po(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new qe(this.firestore,null,new q(e))}withConverter(e){return new An(this.firestore,e,this._path)}}function CU(t,e,...n){if(t=ce(t),Mg("collection","path",e),t instanceof Ml){const r=se.fromString(e,...n);return iE(r),new An(t,null,r)}{if(!(t instanceof qe||t instanceof An))throw new B(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(se.fromString(e,...n));return iE(r),new An(t.firestore,null,r)}}function kU(t,e){if(t=ne(t,Ml),Mg("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new B(V.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new ct(t,null,function(r){return new sr(se.emptyPath(),r)}(e))}function hl(t,e,...n){if(t=ce(t),arguments.length===1&&(e=sS.newId()),Mg("doc","path",e),t instanceof Ml){const r=se.fromString(e,...n);return rE(r),new qe(t,null,new q(r))}{if(!(t instanceof qe||t instanceof An))throw new B(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(se.fromString(e,...n));return rE(r),new qe(t.firestore,t instanceof An?t.converter:null,new q(r))}}function xU(t,e){return t=ce(t),e=ce(e),(t instanceof qe||t instanceof An)&&(e instanceof qe||e instanceof An)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function tR(t,e){return t=ce(t),e=ce(e),t instanceof ct&&e instanceof ct&&t.firestore===e.firestore&&xl(t._query,e._query)&&t.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new wg(this,"async_queue_retry"),this.Vu=()=>{const r=ic();r&&U("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=ic();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=ic();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new nt;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!ai(e))throw e;U("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw ze("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=Sg.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&W()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function Fp(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class hM{constructor(){this._progressObserver={},this._taskCompletionResolver=new nt,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bU=-1;class ge extends Ml{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new oE,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new oE(e),this._firestoreClient=void 0,await e}}}function DU(t,e,n){n||(n="(default)");const r=So(t,"firestore");if(r.isInitialized(n)){const i=r.getImmediate({identifier:n}),s=r.getOptions(n);if(Kr(s,e))return i;throw new B(V.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new B(V.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new B(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return r.initialize({options:e,instanceIdentifier:n})}function dM(t,e){const n=typeof t=="object"?t:jm(),r=typeof t=="string"?t:e||"(default)",i=So(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=s0("firestore");s&&cM(i,...s)}return i}function Ve(t){if(t._terminated)throw new B(V.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||nR(t),t._firestoreClient}function nR(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,c,h){return new LO(a,l,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,ZA(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new Y2(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(a){const l=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(l),_online:l}}(t._componentsProvider))}function NU(t,e){Zt("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=t._freezeSettings();return rR(t,ei.provider,{build:r=>new Vg(r,n.cacheSizeBytes,e==null?void 0:e.forceOwnership)}),Promise.resolve()}async function VU(t){Zt("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const e=t._freezeSettings();rR(t,ei.provider,{build:n=>new WA(n,e.cacheSizeBytes)})}function rR(t,e,n){if((t=ne(t,ge))._firestoreClient||t._terminated)throw new B(V.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(t._componentsProvider||t._getSettings().localCache)throw new B(V.FAILED_PRECONDITION,"SDK cache is already specified.");t._componentsProvider={_online:e,_offline:n},nR(t)}function OU(t){if(t._initialized&&!t._terminated)throw new B(V.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new nt;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!Tn.D())return Promise.resolve();const i=r+"main";await Tn.delete(i)}(_g(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function LU(t){return function(n){const r=new nt;return n.asyncQueue.enqueueAndForget(async()=>O2(await Lg(n),r)),r.promise}(Ve(t=ne(t,ge)))}function MU(t){return X2(Ve(t=ne(t,ge)))}function FU(t){return Z2(Ve(t=ne(t,ge)))}function UU(t){return xD(t.app,"firestore",t._databaseId.database),t._delete()}function BU(t,e){const n=Ve(t=ne(t,ge)),r=new hM;return iM(n,t._databaseId,e,r),r}function jU(t,e){return sM(Ve(t=ne(t,ge)),e).then(n=>n?new ct(t,null,n.query):null)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(e="count",n){this._internalFieldPath=n,this.type="AggregateField",this.aggregateType=e}}class fM{constructor(e,n,r){this._userDataWriter=n,this._data=r,this.type="AggregateQuerySnapshot",this.query=e}data(){return this._userDataWriter.convertObjectMap(this._data)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ji(Me.fromBase64String(e))}catch(n){throw new B(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ji(Me.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new B(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Re(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function zU(){return new ns("__name__")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new B(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new B(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return X(this._lat,e._lat)||X(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pM=/^__.*__$/;class mM{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ar(e,this.data,this.fieldMask,n,this.fieldTransforms):new Co(e,this.data,n,this.fieldTransforms)}}class iR{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ar(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function sR(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw W()}}class zh{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new zh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Zc(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(sR(this.Cu)&&pM.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class gM{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ol(e)}Qu(e,n,r,i=!1){return new zh({Cu:e,methodName:n,qu:r,path:Re.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function is(t){const e=t._freezeSettings(),n=Ol(t._databaseId);return new gM(t._databaseId,!!e.ignoreUndefinedProperties,n)}function $h(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);Gg("Data must be an object, but it was:",o,r);const a=lR(r,o);let l,c;if(s.merge)l=new Dt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const f of s.mergeFields){const m=fl(e,f,n);if(!o.contains(m))throw new B(V.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);cR(h,m)||h.push(m)}l=new Dt(h),c=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,c=o.fieldTransforms;return new mM(new at(a),l,c)}class Fl extends rs{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Fl}}function oR(t,e,n){return new zh({Cu:3,qu:e.settings.qu,methodName:t._methodName,xu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Ug extends rs{_toFieldTransform(e){return new Dl(e.path,new so)}isEqual(e){return e instanceof Ug}}class Bg extends rs{constructor(e,n){super(e),this.Ku=n}_toFieldTransform(e){const n=oR(this,e,!0),r=this.Ku.map(s=>ss(s,n)),i=new Gi(r);return new Dl(e.path,i)}isEqual(e){return e instanceof Bg&&Kr(this.Ku,e.Ku)}}class jg extends rs{constructor(e,n){super(e),this.Ku=n}_toFieldTransform(e){const n=oR(this,e,!0),r=this.Ku.map(s=>ss(s,n)),i=new Ki(r);return new Dl(e.path,i)}isEqual(e){return e instanceof jg&&Kr(this.Ku,e.Ku)}}class zg extends rs{constructor(e,n){super(e),this.$u=n}_toFieldTransform(e){const n=new oo(e.serializer,BS(e.serializer,this.$u));return new Dl(e.path,n)}isEqual(e){return e instanceof zg&&this.$u===e.$u}}function $g(t,e,n,r){const i=t.Qu(1,e,n);Gg("Data must be an object, but it was:",i,r);const s=[],o=at.empty();li(r,(l,c)=>{const h=qh(e,l,n);c=ce(c);const f=i.Nu(h);if(c instanceof Fl)s.push(h);else{const m=ss(c,f);m!=null&&(s.push(h),o.set(h,m))}});const a=new Dt(s);return new iR(o,a,i.fieldTransforms)}function qg(t,e,n,r,i,s){const o=t.Qu(1,e,n),a=[fl(e,r,n)],l=[i];if(s.length%2!=0)throw new B(V.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)a.push(fl(e,s[m])),l.push(s[m+1]);const c=[],h=at.empty();for(let m=a.length-1;m>=0;--m)if(!cR(c,a[m])){const _=a[m];let S=l[m];S=ce(S);const P=o.Nu(_);if(S instanceof Fl)c.push(_);else{const C=ss(S,P);C!=null&&(c.push(_),h.set(_,C))}}const f=new Dt(c);return new iR(h,f,o.fieldTransforms)}function aR(t,e,n,r=!1){return ss(n,t.Qu(r?4:3,e))}function ss(t,e){if(uR(t=ce(t)))return Gg("Unsupported field value:",e,t),lR(t,e);if(t instanceof rs)return function(r,i){if(!sR(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=ss(a,i.Lu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=ce(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return BS(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=De.fromDate(r);return{timestampValue:ao(i.serializer,s)}}if(r instanceof De){const s=new De(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ao(i.serializer,s)}}if(r instanceof Fg)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ji)return{bytesValue:ZS(i.serializer,r._byteString)};if(r instanceof qe){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:cg(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof jh)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw a.Bu("VectorValues must only contain numeric values.");return ig(a.serializer,l)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Bh(r)}`)}(t,e)}function lR(t,e){const n={};return yS(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):li(t,(r,i)=>{const s=ss(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function uR(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof De||t instanceof Fg||t instanceof Ji||t instanceof qe||t instanceof rs||t instanceof jh)}function Gg(t,e,n){if(!uR(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Bh(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function fl(t,e,n){if((e=ce(e))instanceof ns)return e._internalPath;if(typeof e=="string")return qh(t,e);throw Zc("Field path arguments must be of type string or ",t,!1,void 0,n)}const _M=new RegExp("[~\\*/\\[\\]]");function qh(t,e,n){if(e.search(_M)>=0)throw Zc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ns(...e.split("."))._internalPath}catch{throw Zc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Zc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new B(V.INVALID_ARGUMENT,a+t+l)}function cR(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new qe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new yM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Gh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class yM extends pl{data(){return super.data()}}function Gh(t,e){return typeof e=="string"?qh(t,e):e instanceof ns?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hR(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new B(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Kg{}class Ul extends Kg{}function $U(t,e,...n){let r=[];e instanceof Kg&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof Oo).length,a=s.filter(l=>l instanceof Bl).length;if(o>1||o>0&&a>0)throw new B(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Bl extends Ul{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Bl(e,n,r)}_apply(e){const n=this._parse(e);return fR(e._query,n),new ct(e.firestore,e.converter,Rp(e._query,n))}_parse(e){const n=is(e.firestore);return function(s,o,a,l,c,h,f){let m;if(c.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new B(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){lE(f,h);const _=[];for(const S of f)_.push(aE(l,s,S));m={arrayValue:{values:_}}}else m=aE(l,s,f)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||lE(f,h),m=aR(a,o,f,h==="in"||h==="not-in");return oe.create(c,h,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function qU(t,e,n){const r=e,i=Gh("where",t);return Bl._create(i,r,n)}class Oo extends Kg{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Oo(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:he.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)fR(o,l),o=Rp(o,l)}(e._query,n),new ct(e.firestore,e.converter,Rp(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function GU(...t){return t.forEach(e=>pR("or",e)),Oo._create("or",t)}function KU(...t){return t.forEach(e=>pR("and",e)),Oo._create("and",t)}class Wg extends Ul{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Wg(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new B(V.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new B(V.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ll(s,o)}(e._query,this._field,this._direction);return new ct(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new sr(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function WU(t,e="asc"){const n=e,r=Gh("orderBy",t);return Wg._create(r,n)}class Kh extends Ul{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Kh(e,n,r)}_apply(e){return new ct(e.firestore,e.converter,$c(e._query,this._limit,this._limitType))}}function HU(t){return eR("limit",t),Kh._create("limit",t,"F")}function QU(t){return eR("limitToLast",t),Kh._create("limitToLast",t,"L")}class Wh extends Ul{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Wh(e,n,r)}_apply(e){const n=dR(e,this.type,this._docOrFields,this._inclusive);return new ct(e.firestore,e.converter,function(i,s){return new sr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,n))}}function JU(...t){return Wh._create("startAt",t,!0)}function YU(...t){return Wh._create("startAfter",t,!1)}class Hh extends Ul{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Hh(e,n,r)}_apply(e){const n=dR(e,this.type,this._docOrFields,this._inclusive);return new ct(e.firestore,e.converter,function(i,s){return new sr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,s)}(e._query,n))}}function XU(...t){return Hh._create("endBefore",t,!1)}function ZU(...t){return Hh._create("endAt",t,!0)}function dR(t,e,n,r){if(n[0]=ce(n[0]),n[0]instanceof pl)return function(s,o,a,l,c){if(!l)throw new B(V.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const h=[];for(const f of zs(s))if(f.field.isKeyField())h.push($i(o,l.key));else{const m=l.data.field(f.field);if(Ph(m))throw new B(V.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+f.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(m===null){const _=f.field.canonicalString();throw new B(V.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${_}' (used as the orderBy) does not exist.`)}h.push(m)}return new Yr(h,c)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=is(t.firestore);return function(o,a,l,c,h,f){const m=o.explicitOrderBy;if(h.length>m.length)throw new B(V.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const _=[];for(let S=0;S<h.length;S++){const P=h[S];if(m[S].field.isKeyField()){if(typeof P!="string")throw new B(V.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof P}`);if(!ng(o)&&P.indexOf("/")!==-1)throw new B(V.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${P}' contains a slash.`);const C=o.path.child(se.fromString(P));if(!q.isDocumentKey(C))throw new B(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${C}' is not because it contains an odd number of segments.`);const E=new q(C);_.push($i(a,E))}else{const C=aR(l,c,P);_.push(C)}}return new Yr(_,f)}(t._query,t.firestore._databaseId,i,e,n,r)}}function aE(t,e,n){if(typeof(n=ce(n))=="string"){if(n==="")throw new B(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ng(e)&&n.indexOf("/")!==-1)throw new B(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(se.fromString(n));if(!q.isDocumentKey(r))throw new B(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return $i(t,new q(r))}if(n instanceof qe)return $i(t,n._key);throw new B(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Bh(n)}.`)}function lE(t,e){if(!Array.isArray(t)||t.length===0)throw new B(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function fR(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new B(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new B(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function pR(t,e){if(!(e instanceof Bl||e instanceof Oo))throw new B(V.INVALID_ARGUMENT,`Function ${t}() requires AppliableConstraints created with a call to 'where(...)', 'or(...)', or 'and(...)'.`)}class mR{convertValue(e,n="none"){switch(Qr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Se(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(tr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw W()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return li(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Se(o.doubleValue));return new jh(s)}convertGeoPoint(e){return new Fg(Se(e.latitude),Se(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Ch(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(sl(e));default:return null}}convertTimestamp(e){const n=er(e);return new De(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=se.fromString(e);Q(cA(r));const i=new zi(r.get(1),r.get(3)),s=new q(r.popFirst(5));return i.isEqual(n)||ze(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qh(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class vM extends mR{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ji(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new qe(this.firestore,null,n)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e4(t){return new dl("sum",fl("sum",t))}function t4(t){return new dl("avg",fl("average",t))}function wM(){return new dl("count")}function n4(t,e){var n,r;return t instanceof dl&&e instanceof dl&&t.aggregateType===e.aggregateType&&((n=t._internalFieldPath)===null||n===void 0?void 0:n.canonicalString())===((r=e._internalFieldPath)===null||r===void 0?void 0:r.canonicalString())}function r4(t,e){return tR(t.query,e.query)&&Kr(t.data(),e.data())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class mo extends pl{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new sc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Gh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class sc extends mo{data(e={}){return super.data(e)}}class go{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ci(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new sc(this._firestore,this._userDataWriter,r.key,r,new Ci(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new B(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new sc(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Ci(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new sc(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Ci(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,h=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:EM(a.type),doc:l,oldIndex:c,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function EM(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return W()}}function i4(t,e){return t instanceof mo&&e instanceof mo?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof go&&e instanceof go&&t._firestore===e._firestore&&tR(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gR(t){t=ne(t,qe);const e=ne(t.firestore,ge);return YA(Ve(e),t._key).then(n=>Hg(e,t,n))}class ci extends mR{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ji(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new qe(this.firestore,null,n)}}function s4(t){t=ne(t,qe);const e=ne(t.firestore,ge),n=Ve(e),r=new ci(e);return eM(n,t._key).then(i=>new mo(e,r,t._key,i,new Ci(i!==null&&i.hasLocalMutations,!0),t.converter))}function o4(t){t=ne(t,qe);const e=ne(t.firestore,ge);return YA(Ve(e),t._key,{source:"server"}).then(n=>Hg(e,t,n))}function a4(t){t=ne(t,ct);const e=ne(t.firestore,ge),n=Ve(e),r=new ci(e);return hR(t._query),XA(n,t._query).then(i=>new go(e,r,t,i))}function l4(t){t=ne(t,ct);const e=ne(t.firestore,ge),n=Ve(e),r=new ci(e);return tM(n,t._query).then(i=>new go(e,r,t,i))}function u4(t){t=ne(t,ct);const e=ne(t.firestore,ge),n=Ve(e),r=new ci(e);return XA(n,t._query,{source:"server"}).then(i=>new go(e,r,t,i))}function _R(t,e,n){t=ne(t,qe);const r=ne(t.firestore,ge),i=Qh(t.converter,e,n);return jl(r,[$h(is(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Pe.none())])}function c4(t,e,n,...r){t=ne(t,qe);const i=ne(t.firestore,ge),s=is(i);let o;return o=typeof(e=ce(e))=="string"||e instanceof ns?qg(s,"updateDoc",t._key,e,n,r):$g(s,"updateDoc",t._key,e),jl(i,[o.toMutation(t._key,Pe.exists(!0))])}function h4(t){return jl(ne(t.firestore,ge),[new ko(t._key,Pe.none())])}function d4(t,e){const n=ne(t.firestore,ge),r=hl(t),i=Qh(t.converter,e);return jl(n,[$h(is(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Pe.exists(!1))]).then(()=>r)}function f4(t,...e){var n,r,i;t=ce(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Fp(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(Fp(e[o])){const f=e[o];e[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[o+1]=(r=f.error)===null||r===void 0?void 0:r.bind(f),e[o+2]=(i=f.complete)===null||i===void 0?void 0:i.bind(f)}let l,c,h;if(t instanceof qe)c=ne(t.firestore,ge),h=Po(t._key.path),l={next:f=>{e[o]&&e[o](Hg(c,t,f))},error:e[o+1],complete:e[o+2]};else{const f=ne(t,ct);c=ne(f.firestore,ge),h=f._query;const m=new ci(c);l={next:_=>{e[o]&&e[o](new go(c,m,f,_))},error:e[o+1],complete:e[o+2]},hR(t._query)}return function(m,_,S,P){const C=new Fh(P),E=new Cg(_,C,S);return m.asyncQueue.enqueueAndForget(async()=>Ag(await po(m),E)),()=>{C.Za(),m.asyncQueue.enqueueAndForget(async()=>Rg(await po(m),E))}}(Ve(c),h,a,l)}function p4(t,e){return rM(Ve(t=ne(t,ge)),Fp(e)?e:{next:e})}function jl(t,e){return function(r,i){const s=new nt;return r.asyncQueue.enqueueAndForget(async()=>b2(await Lg(r),i,s)),s.promise}(Ve(t),e)}function Hg(t,e,n){const r=n.docs.get(e._key),i=new ci(t);return new mo(t,i,e._key,r,new Ci(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m4(t){return IM(t,{count:wM()})}function IM(t,e){const n=ne(t.firestore,ge),r=Ve(n),i=_S(e,(s,o)=>new WS(o,s.aggregateType,s._internalFieldPath));return nM(r,t._query,i).then(s=>function(a,l,c){const h=new ci(a);return new fM(l,h,c)}(n,t,s))}class TM{constructor(e){this.kind="memory",this._onlineComponentProvider=ei.provider,e!=null&&e.garbageCollector?this._offlineComponentProvider=e.garbageCollector._offlineComponentProvider:this._offlineComponentProvider=Zr.provider}toJSON(){return{kind:this.kind}}}class SM{constructor(e){let n;this.kind="persistent",e!=null&&e.tabManager?(e.tabManager._initialize(e),n=e.tabManager):(n=kM(void 0),n._initialize(e)),this._onlineComponentProvider=n._onlineComponentProvider,this._offlineComponentProvider=n._offlineComponentProvider}toJSON(){return{kind:this.kind}}}class AM{constructor(){this.kind="memoryEager",this._offlineComponentProvider=Zr.provider}toJSON(){return{kind:this.kind}}}class RM{constructor(e){this.kind="memoryLru",this._offlineComponentProvider={build:()=>new W2(e)}}toJSON(){return{kind:this.kind}}}function g4(){return new AM}function _4(t){return new RM(t==null?void 0:t.cacheSizeBytes)}function y4(t){return new TM(t)}function v4(t){return new SM(t)}class PM{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=ei.provider,this._offlineComponentProvider={build:n=>new Vg(n,e==null?void 0:e.cacheSizeBytes,this.forceOwnership)}}}class CM{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=ei.provider,this._offlineComponentProvider={build:n=>new WA(n,e==null?void 0:e.cacheSizeBytes)}}}function kM(t){return new PM(t==null?void 0:t.forceOwnership)}function w4(){return new CM}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xM={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bM{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=is(e)}set(e,n,r){this._verifyNotCommitted();const i=Pr(e,this._firestore),s=Qh(i.converter,n,r),o=$h(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,Pe.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=Pr(e,this._firestore);let o;return o=typeof(n=ce(n))=="string"||n instanceof ns?qg(this._dataReader,"WriteBatch.update",s._key,n,r,i):$g(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,Pe.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Pr(e,this._firestore);return this._mutations=this._mutations.concat(new ko(n._key,Pe.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new B(V.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Pr(t,e){if((t=ce(t)).firestore!==e)throw new B(V.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DM extends class{constructor(n,r){this._firestore=n,this._transaction=r,this._dataReader=is(n)}get(n){const r=Pr(n,this._firestore),i=new vM(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return W();const o=s[0];if(o.isFoundDocument())return new pl(this._firestore,i,o.key,o,r.converter);if(o.isNoDocument())return new pl(this._firestore,i,r._key,null,r.converter);throw W()})}set(n,r,i){const s=Pr(n,this._firestore),o=Qh(s.converter,r,i),a=$h(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,i);return this._transaction.set(s._key,a),this}update(n,r,i,...s){const o=Pr(n,this._firestore);let a;return a=typeof(r=ce(r))=="string"||r instanceof ns?qg(this._dataReader,"Transaction.update",o._key,r,i,s):$g(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(n){const r=Pr(n,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=Pr(e,this._firestore),r=new ci(this._firestore);return super.get(e).then(i=>new mo(this._firestore,r,n._key,i._document,new Ci(!1,!1),n.converter))}}function I4(t,e,n){t=ne(t,ge);const r=Object.assign(Object.assign({},xM),n);return function(s){if(s.maxAttempts<1)throw new B(V.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,a){const l=new nt;return s.asyncQueue.enqueueAndForget(async()=>{const c=await JA(s);new J2(s.asyncQueue,c,a,o,l).au()}),l.promise}(Ve(t),i=>e(new DM(t,i)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T4(){return new Fl("deleteField")}function yR(){return new Ug("serverTimestamp")}function S4(...t){return new Bg("arrayUnion",t)}function A4(...t){return new jg("arrayRemove",t)}function R4(t){return new zg("increment",t)}function P4(t){return new jh(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C4(t){return Ve(t=ne(t,ge)),new bM(t,e=>jl(t,e))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k4(t,e){const n=Ve(t=ne(t,ge));if(!n._uninitializedComponentsProvider||n._uninitializedComponentsProvider._offline.kind==="memory")return Zt("Cannot enable indexes when persistence is disabled"),Promise.resolve();const r=function(s){const o=typeof s=="string"?function(c){try{return JSON.parse(c)}catch(h){throw new B(V.INVALID_ARGUMENT,"Failed to parse JSON: "+(h==null?void 0:h.message))}}(s):s,a=[];if(Array.isArray(o.indexes))for(const l of o.indexes){const c=uE(l,"collectionGroup"),h=[];if(Array.isArray(l.fields))for(const f of l.fields){const m=qh("setIndexConfiguration",uE(f,"fieldPath"));f.arrayConfig==="CONTAINS"?h.push(new Di(m,2)):f.order==="ASCENDING"?h.push(new Di(m,0)):f.order==="DESCENDING"&&h.push(new Di(m,1))}a.push(new to(to.UNKNOWN_ID,c,h,no.empty()))}return a}(e);return oM(n,r)}function uE(t,e){if(typeof t[e]!="string")throw new B(V.INVALID_ARGUMENT,"Missing string value for: "+e);return t[e]}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NM{constructor(e){this._firestore=e,this.type="PersistentCacheIndexManager"}}function x4(t){var e;t=ne(t,ge);const n=cE.get(t);if(n)return n;if(((e=Ve(t)._uninitializedComponentsProvider)===null||e===void 0?void 0:e._offline.kind)!=="persistent")return null;const r=new NM(t);return cE.set(t,r),r}function b4(t){vR(t,!0)}function D4(t){vR(t,!1)}function N4(t){lM(Ve(t._firestore)).then(e=>U("deleting all persistent cache indexes succeeded")).catch(e=>Zt("deleting all persistent cache indexes failed",e))}function vR(t,e){aM(Ve(t._firestore),e).then(n=>U(`setting persistent cache index auto creation isEnabled=${e} succeeded`)).catch(n=>Zt(`setting persistent cache index auto creation isEnabled=${e} failed`,n))}const cE=new WeakMap;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V4(t){var e;const n=(e=Ve(ne(t.firestore,ge))._onlineComponents)===null||e===void 0?void 0:e.datastore.serializer;return n===void 0?null:Dh(n,wt(t._query))._t}function O4(t,e){var n;const r=_S(e,(s,o)=>new WS(o,s.aggregateType,s._internalFieldPath)),i=(n=Ve(ne(t.firestore,ge))._onlineComponents)===null||n===void 0?void 0:n.datastore.serializer;return i===void 0?null:oA(i,bS(t._query),r,!0).request}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L4{constructor(){throw new Error("instances of this class should not be created")}static onExistenceFilterMismatch(e){return Qg.instance.onExistenceFilterMismatch(e)}}class Qg{constructor(){this.Uu=new Map}static get instance(){return bu||(bu=new Qg,function(n){if(qc)throw new Error("a TestingHooksSpi instance is already set");qc=n}(bu)),bu}et(e){this.Uu.forEach(n=>n(e))}onExistenceFilterMismatch(e){const n=Symbol(),r=this.Uu;return r.set(n,e),()=>r.delete(n)}}let bu=null;(function(e,n=!0){(function(i){Ro=i})(es),Ui(new Wr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new ge(new iO(r.getProvider("auth-internal")),new aO(r.getProvider("app-check-internal")),function(c,h){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new B(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new zi(c.options.projectId,h)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),wn(Zv,"4.7.3",e),wn(Zv,"4.7.3","esm2017")})();var VM="firebase",OM="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */wn(VM,OM,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wR="firebasestorage.googleapis.com",ER="storageBucket",LM=2*60*1e3,MM=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue extends Cn{constructor(e,n,r=0){super(lf(e),`Firebase Storage: ${n} (${lf(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ue.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return lf(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Fe;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Fe||(Fe={}));function lf(t){return"storage/"+t}function Jg(){const t="An unknown error occurred, please check the error payload for server response.";return new Ue(Fe.UNKNOWN,t)}function FM(t){return new Ue(Fe.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function UM(t){return new Ue(Fe.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function BM(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ue(Fe.UNAUTHENTICATED,t)}function jM(){return new Ue(Fe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function zM(t){return new Ue(Fe.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function $M(){return new Ue(Fe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function qM(){return new Ue(Fe.CANCELED,"User canceled the upload/download.")}function GM(t){return new Ue(Fe.INVALID_URL,"Invalid URL '"+t+"'.")}function KM(t){return new Ue(Fe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function WM(){return new Ue(Fe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+ER+"' property when initializing the app?")}function HM(){return new Ue(Fe.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function QM(){return new Ue(Fe.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function JM(t){return new Ue(Fe.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Up(t){return new Ue(Fe.INVALID_ARGUMENT,t)}function IR(){return new Ue(Fe.APP_DELETED,"The Firebase app was deleted.")}function YM(t){return new Ue(Fe.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Oa(t,e){return new Ue(Fe.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function ua(t){throw new Ue(Fe.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Bt.makeFromUrl(e,n)}catch{return new Bt(e,"")}if(r.path==="")return r;throw KM(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(x){x.path.charAt(x.path.length-1)==="/"&&(x.path_=x.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(x){x.path_=decodeURIComponent(x.path)}const h="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",_=new RegExp(`^https?://${f}/${h}/b/${i}/o${m}`,"i"),S={bucket:1,path:3},P=n===wR?"(?:storage.googleapis.com|storage.cloud.google.com)":n,C="([^?#]*)",E=new RegExp(`^https?://${P}/${i}/${C}`,"i"),w=[{regex:a,indices:l,postModify:s},{regex:_,indices:S,postModify:c},{regex:E,indices:{bucket:1,path:2},postModify:c}];for(let x=0;x<w.length;x++){const M=w[x],F=M.regex.exec(e);if(F){const I=F[M.indices.bucket];let y=F[M.indices.path];y||(y=""),r=new Bt(I,y),M.postModify(r);break}}if(r==null)throw GM(e);return r}}class XM{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZM(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let c=!1;function h(...C){c||(c=!0,e.apply(null,C))}function f(C){i=setTimeout(()=>{i=null,t(_,l())},C)}function m(){s&&clearTimeout(s)}function _(C,...E){if(c){m();return}if(C){m(),h.call(null,C,...E);return}if(l()||o){m(),h.call(null,C,...E);return}r<64&&(r*=2);let w;a===1?(a=2,w=0):w=(r+Math.random())*1e3,f(w)}let S=!1;function P(C){S||(S=!0,m(),!c&&(i!==null?(C||(a=2),clearTimeout(i),f(0)):C||(a=1)))}return f(0),s=setTimeout(()=>{o=!0,P(!0)},n),P}function eF(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tF(t){return t!==void 0}function nF(t){return typeof t=="object"&&!Array.isArray(t)}function Yg(t){return typeof t=="string"||t instanceof String}function hE(t){return Xg()&&t instanceof Blob}function Xg(){return typeof Blob<"u"}function dE(t,e,n,r){if(r<e)throw Up(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Up(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zg(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function TR(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var Ni;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Ni||(Ni={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rF(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iF{constructor(e,n,r,i,s,o,a,l,c,h,f,m=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=h,this.connectionFactory_=f,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((_,S)=>{this.resolve_=_,this.reject_=S,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Du(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Ni.NO_ERROR,l=s.getStatus();if(!a||rF(l,this.additionalRetryCodes_)&&this.retry){const h=s.getErrorCode()===Ni.ABORT;r(!1,new Du(!1,null,h));return}const c=this.successCodes_.indexOf(l)!==-1;r(!0,new Du(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());tF(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=Jg();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?IR():qM();o(l)}else{const l=$M();o(l)}};this.canceled_?n(!1,new Du(!1,null,!0)):this.backoffId_=ZM(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&eF(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Du{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function sF(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function oF(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function aF(t,e){e&&(t["X-Firebase-GMPID"]=e)}function lF(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function uF(t,e,n,r,i,s,o=!0){const a=TR(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return aF(c,e),sF(c,n),oF(c,s),lF(c,r),new iF(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cF(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function hF(...t){const e=cF();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Xg())return new Blob(t);throw new Ue(Fe.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function dF(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fF(t){if(typeof atob>"u")throw JM("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _n={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class uf{constructor(e,n){this.data=e,this.contentType=n||null}}function pF(t,e){switch(t){case _n.RAW:return new uf(SR(e));case _n.BASE64:case _n.BASE64URL:return new uf(AR(t,e));case _n.DATA_URL:return new uf(gF(e),_F(e))}throw Jg()}function SR(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function mF(t){let e;try{e=decodeURIComponent(t)}catch{throw Oa(_n.DATA_URL,"Malformed data URL.")}return SR(e)}function AR(t,e){switch(t){case _n.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Oa(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case _n.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Oa(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=fF(e)}catch(i){throw i.message.includes("polyfill")?i:Oa(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class RR{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Oa(_n.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=yF(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function gF(t){const e=new RR(t);return e.base64?AR(_n.BASE64,e.rest):mF(e.rest)}function _F(t){return new RR(t).contentType}function yF(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e,n){let r=0,i="";hE(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(hE(this.data_)){const r=this.data_,i=dF(r,e,n);return i===null?null:new Cr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Cr(r,!0)}}static getBlob(...e){if(Xg()){const n=e.map(r=>r instanceof Cr?r.data_:r);return new Cr(hF.apply(null,n))}else{const n=e.map(o=>Yg(o)?pF(_n.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Cr(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PR(t){let e;try{e=JSON.parse(t)}catch{return null}return nF(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vF(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function wF(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function CR(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EF(t,e){return e}class St{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||EF}}let Nu=null;function IF(t){return!Yg(t)||t.length<2?t:CR(t)}function kR(){if(Nu)return Nu;const t=[];t.push(new St("bucket")),t.push(new St("generation")),t.push(new St("metageneration")),t.push(new St("name","fullPath",!0));function e(s,o){return IF(o)}const n=new St("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new St("size");return i.xform=r,t.push(i),t.push(new St("timeCreated")),t.push(new St("updated")),t.push(new St("md5Hash",null,!0)),t.push(new St("cacheControl",null,!0)),t.push(new St("contentDisposition",null,!0)),t.push(new St("contentEncoding",null,!0)),t.push(new St("contentLanguage",null,!0)),t.push(new St("contentType",null,!0)),t.push(new St("metadata","customMetadata",!0)),Nu=t,Nu}function TF(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Bt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function SF(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return TF(r,t),r}function xR(t,e,n){const r=PR(e);return r===null?null:SF(t,r,n)}function AF(t,e,n,r){const i=PR(e);if(i===null||!Yg(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const h=t.bucket,f=t.fullPath,m="/b/"+o(h)+"/o/"+o(f),_=Zg(m,n,r),S=TR({alt:"media",token:c});return _+S})[0]}function RF(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class bR{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DR(t){if(!t)throw Jg()}function PF(t,e){function n(r,i){const s=xR(t,i,e);return DR(s!==null),s}return n}function CF(t,e){function n(r,i){const s=xR(t,i,e);return DR(s!==null),AF(s,i,t.host,t._protocol)}return n}function NR(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=jM():i=BM():n.getStatus()===402?i=UM(t.bucket):n.getStatus()===403?i=zM(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function kF(t){const e=NR(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=FM(t.path)),s.serverResponse=i.serverResponse,s}return n}function xF(t,e,n){const r=e.fullServerUrl(),i=Zg(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new bR(i,s,CF(t,n),o);return a.errorHandler=kF(e),a}function bF(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function DF(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=bF(null,e)),r}function NF(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let w="";for(let x=0;x<2;x++)w=w+Math.random().toString().slice(2);return w}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=DF(e,r,i),h=RF(c,n),f="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,m=`\r
--`+l+"--",_=Cr.getBlob(f,r,m);if(_===null)throw HM();const S={name:c.fullPath},P=Zg(s,t.host,t._protocol),C="POST",E=t.maxUploadRetryTime,v=new bR(P,C,PF(t,n),E);return v.urlParams=S,v.headers=o,v.body=_.uploadData(),v.errorHandler=NR(e),v}class VF{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Ni.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Ni.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Ni.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw ua("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ua("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ua("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ua("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ua("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class OF extends VF{initXhr(){this.xhr_.responseType="text"}}function VR(){return new OF}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e,n){this._service=e,n instanceof Bt?this._location=n:this._location=Bt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Yi(e,n)}get root(){const e=new Bt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return CR(this._location.path)}get storage(){return this._service}get parent(){const e=vF(this._location.path);if(e===null)return null;const n=new Bt(this._location.bucket,e);return new Yi(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw YM(e)}}function LF(t,e,n){t._throwIfRoot("uploadBytes");const r=NF(t.storage,t._location,kR(),new Cr(e,!0),n);return t.storage.makeRequestWithTokens(r,VR).then(i=>({metadata:i,ref:t}))}function MF(t){t._throwIfRoot("getDownloadURL");const e=xF(t.storage,t._location,kR());return t.storage.makeRequestWithTokens(e,VR).then(n=>{if(n===null)throw QM();return n})}function FF(t,e){const n=wF(t._location.path,e),r=new Bt(t._location.bucket,n);return new Yi(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UF(t){return/^[A-Za-z]+:\/\//.test(t)}function BF(t,e){return new Yi(t,e)}function OR(t,e){if(t instanceof e_){const n=t;if(n._bucket==null)throw WM();const r=new Yi(n,n._bucket);return e!=null?OR(r,e):r}else return e!==void 0?FF(t,e):t}function jF(t,e){if(e&&UF(e)){if(t instanceof e_)return BF(t,e);throw Up("To use ref(service, url), the first argument must be a Storage instance.")}else return OR(t,e)}function fE(t,e){const n=e==null?void 0:e[ER];return n==null?null:Bt.makeFromBucketSpec(n,t)}function zF(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:l0(i,t.app.options.projectId))}class e_{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=wR,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=LM,this._maxUploadRetryTime=MM,this._requests=new Set,i!=null?this._bucket=Bt.makeFromBucketSpec(i,this._host):this._bucket=fE(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Bt.makeFromBucketSpec(this._url,e):this._bucket=fE(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){dE("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){dE("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Yi(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new XM(IR());{const o=uF(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const pE="@firebase/storage",mE="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LR="storage";function M4(t,e,n){return t=ce(t),LF(t,e,n)}function F4(t){return t=ce(t),MF(t)}function U4(t,e){return t=ce(t),jF(t,e)}function $F(t=jm(),e){t=ce(t);const r=So(t,LR).getImmediate({identifier:e}),i=s0("storage");return i&&qF(r,...i),r}function qF(t,e,n,r={}){zF(t,e,n,r)}function GF(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new e_(n,r,i,e,es)}function KF(){Ui(new Wr(LR,GF,"PUBLIC").setMultipleInstances(!0)),wn(pE,mE,""),wn(pE,mE,"esm2017")}KF();const WF={apiKey:"AIzaSyA1B0D1rU2QenicFIfgD0DMr89dnf6FUSw",authDomain:"sign-taxi.firebaseapp.com",projectId:"sign-taxi",storageBucket:"sign-taxi.firebasestorage.app",messagingSenderId:"392139443843",appId:"1:392139443843:web:c353c9b766cbe5b62755b6"},Jh=f0(WF),_o=eO(Jh),ml=dM(Jh),HF=$F(Jh),B4=Object.freeze(Object.defineProperty({__proto__:null,auth:_o,db:ml,default:Jh,storage:HF},Symbol.toStringTag,{value:"Module"})),j4=async({email:t,password:e,name:n,role:r="user"})=>{const s=(await MN(_o,t,e)).user;await BN(s,{displayName:n});const o={id:s.uid,name:n,email:t,phone:"",photoURL:"",role:r,status:"active",createdAt:yR()};return await _R(hl(ml,"users",s.uid),o),{user:s,userData:o}},z4=async({email:t,password:e})=>{const r=(await FN(_o,t,e)).user;let i;try{i=await gR(hl(ml,"users",r.uid))}catch(o){throw o.code==="permission-denied"?new Error(`Missing or insufficient permissions (${o.code}). Check Firestore security rules and the user profile document for UID ${r.uid}.`):o}if(!i.exists()){const o={id:r.uid,name:r.displayName||"",email:r.email||"",phone:"",photoURL:r.photoURL||"",role:"user",status:"active",createdAt:yR()};return await _R(hl(ml,"users",r.uid),o),{user:r,userData:o}}const s=i.data();if(s.status==="blocked")throw await B0(_o),new Error("Your account has been blocked. Please contact support.");return{user:r,userData:s}},QF=async()=>{await B0(_o)},gE=async t=>{const e=await gR(hl(ml,"users",t));return e.exists()?e.data():null},JF=t=>$N(_o,t),t_=hb((t,e)=>({user:null,userData:null,loading:!0,initialized:!1,setUser:n=>t({user:n}),setUserData:n=>t({userData:n}),setLoading:n=>t({loading:n}),initialize:()=>JF(async r=>{if(r)try{const i=await gE(r.uid);t({user:r,userData:i,loading:!1,initialized:!0})}catch(i){console.error("Error loading user data:",i),t({user:null,userData:null,loading:!1,initialized:!0})}else t({user:null,userData:null,loading:!1,initialized:!0})}),logout:async()=>{await QF(),t({user:null,userData:null})},refreshUserData:async()=>{const{user:n}=e();if(n){const r=await gE(n.uid);t({userData:r})}}})),YF=()=>{const{user:t,initialized:e}=t_();return e?t?G.jsx(HT,{}):G.jsx(bs,{to:"/login",replace:!0}):null},cf=({allowedRoles:t})=>{const{userData:e}=t_();return e?t.includes(e.role)?G.jsx(HT,{}):e.role==="admin"?G.jsx(bs,{to:"/admin/dashboard",replace:!0}):e.role==="driver"?G.jsx(bs,{to:"/driver/dashboard",replace:!0}):G.jsx(bs,{to:"/user/home",replace:!0}):G.jsx(bs,{to:"/login",replace:!0})},_E={sm:"w-4 h-4 border-2",md:"w-6 h-6 border-2",lg:"w-10 h-10 border-3",xl:"w-14 h-14 border-4"},MR=({size:t="md",color:e="amber",className:n=""})=>{const r=_E[t]||_E.md,i=e==="white"?"border-white border-t-transparent":"border-amber-200 border-t-amber-500";return G.jsx("div",{className:`${r} ${i} rounded-full animate-spin ${n}`,role:"status","aria-label":"Loading"})},XF=L.lazy(()=>rt(()=>import("./Login-D1Sjo1ar.js"),__vite__mapDeps([0,1,2,3,4]))),ZF=L.lazy(()=>rt(()=>import("./Register-CeHJ7fnw.js"),__vite__mapDeps([5,6,1,2,3,7,4,8]))),eU=L.lazy(()=>rt(()=>import("./Dashboard-DBIwWQMG.js"),__vite__mapDeps([9,10,3,7,11,6,12,13,14,15]))),tU=L.lazy(()=>rt(()=>import("./Users-buQowvPB.js"),__vite__mapDeps([16,10,3,7,13,14,1,17,11,18]))),nU=L.lazy(()=>rt(()=>import("./Drivers-Cy1piFcF.js"),__vite__mapDeps([19,10,3,7,13,14,1,20,17,6,18,21,22]))),rU=L.lazy(()=>rt(()=>import("./Rides-IKeRrNo2.js"),__vite__mapDeps([23,10,3,7,1,17,13,14,12,18,22]))),iU=L.lazy(()=>rt(()=>import("./History-CK2oLZLf.js"),__vite__mapDeps([24,10,3,7,17,13,14,12,18,25]))),sU=L.lazy(()=>rt(()=>import("./Home-Cyz3GVBo.js"),__vite__mapDeps([26,10,3,7,1,13,14,27,28,12,29]))),oU=L.lazy(()=>rt(()=>import("./BookRide-DgD3jUs9.js"),__vite__mapDeps([30,10,3,7,31,32,14,20,1,2,27,18,33,12,34,35,29,21,36]))),aU=L.lazy(()=>rt(()=>import("./TrackRide-CqGFVmSu.js"),__vite__mapDeps([37,10,3,7,32,14,38,1,13,12,27,11,8,35]))),lU=L.lazy(()=>rt(()=>import("./History-CRnLJkLr.js"),__vite__mapDeps([39,10,3,7,17,13,14,12,18,25]))),uU=L.lazy(()=>rt(()=>import("./Profile-D74fLKel.js"),__vite__mapDeps([40,10,3,7,1,2,11,41]))),cU=L.lazy(()=>rt(()=>import("./Dashboard-Drwotpdq.js"),__vite__mapDeps([42,10,3,7,1,28,6,12,31,32,14,20,2,27,18,33,15,29]))),hU=L.lazy(()=>rt(()=>import("./Requests-Zpe8qdPW.js"),__vite__mapDeps([43,10,3,7,17,1,28,34,33,27,6,35,15]))),dU=L.lazy(()=>rt(()=>import("./ActiveRide-DTq1zydW.js"),__vite__mapDeps([44,10,3,7,32,14,38,1,13,12,27,11,21,8,35]))),fU=L.lazy(()=>rt(()=>import("./History-Bk7YJ1i1.js"),__vite__mapDeps([45,10,3,7,17,13,14,12]))),pU=L.lazy(()=>rt(()=>import("./Profile-5lOnOj_g.js"),__vite__mapDeps([46,10,3,7,1,2,13,14,28,6,11,21,36,41]))),mU=L.lazy(()=>rt(()=>import("./NotFound-_sh4EWns.js"),__vite__mapDeps([47,1,3]))),gU=()=>{const{initialized:t,loading:e,userData:n,initialize:r}=t_();if(L.useEffect(()=>{const s=r();return()=>{typeof s=="function"&&s()}},[]),!t||e)return G.jsx("div",{className:"flex items-center justify-center min-h-screen bg-slate-50",children:G.jsxs("div",{className:"flex flex-col items-center gap-3",children:[G.jsx("div",{className:"w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center shadow-md",children:G.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"white",children:G.jsx("path",{d:"M13 3L4 14h7l-2 7 9-11h-7l2-7z"})})}),G.jsx(MR,{size:"md"}),G.jsx("p",{className:"text-sm text-slate-400",children:"Loading SignTaxi…"})]})});const i=()=>n?n.role==="admin"?"/admin/dashboard":n.role==="driver"?"/driver/dashboard":"/user/home":"/login";return G.jsx(Dx,{children:G.jsxs(Sx,{children:[G.jsx(Te,{path:"/",element:G.jsx(bs,{to:i(),replace:!0})}),G.jsx(Te,{path:"/login",element:G.jsx(XF,{})}),G.jsx(Te,{path:"/register",element:G.jsx(ZF,{})}),G.jsxs(Te,{element:G.jsx(YF,{}),children:[G.jsxs(Te,{element:G.jsx(cf,{allowedRoles:["admin"]}),children:[G.jsx(Te,{path:"/admin/dashboard",element:G.jsx(eU,{})}),G.jsx(Te,{path:"/admin/users",element:G.jsx(tU,{})}),G.jsx(Te,{path:"/admin/drivers",element:G.jsx(nU,{})}),G.jsx(Te,{path:"/admin/rides",element:G.jsx(rU,{})}),G.jsx(Te,{path:"/admin/history",element:G.jsx(iU,{})})]}),G.jsxs(Te,{element:G.jsx(cf,{allowedRoles:["user"]}),children:[G.jsx(Te,{path:"/user/home",element:G.jsx(sU,{})}),G.jsx(Te,{path:"/user/book",element:G.jsx(oU,{})}),G.jsx(Te,{path:"/user/track/:rideId",element:G.jsx(aU,{})}),G.jsx(Te,{path:"/user/history",element:G.jsx(lU,{})}),G.jsx(Te,{path:"/user/profile",element:G.jsx(uU,{})})]}),G.jsxs(Te,{element:G.jsx(cf,{allowedRoles:["driver"]}),children:[G.jsx(Te,{path:"/driver/dashboard",element:G.jsx(cU,{})}),G.jsx(Te,{path:"/driver/requests",element:G.jsx(hU,{})}),G.jsx(Te,{path:"/driver/active",element:G.jsx(dU,{})}),G.jsx(Te,{path:"/driver/history",element:G.jsx(fU,{})}),G.jsx(Te,{path:"/driver/profile",element:G.jsx(pU,{})})]})]}),G.jsx(Te,{path:"*",element:G.jsx(mU,{})})]})})};function _U(){return G.jsxs(G.Fragment,{children:[G.jsx(L.Suspense,{fallback:G.jsx("div",{className:"flex items-center justify-center min-h-screen bg-slate-50",children:G.jsx(MR,{size:"lg"})}),children:G.jsx(gU,{})}),G.jsx(x1,{position:"top-right",toastOptions:{style:{background:"#ffffff",color:"#0f172a",border:"1px solid #e2e8f0",borderRadius:"12px",boxShadow:"0 4px 20px rgba(0,0,0,0.08)",fontSize:"14px",fontFamily:"Inter, sans-serif"},success:{iconTheme:{primary:"#10b981",secondary:"#ffffff"}},error:{iconTheme:{primary:"#ef4444",secondary:"#ffffff"}}}})]})}hf.createRoot(document.getElementById("root")).render(G.jsx(qp.StrictMode,{children:G.jsx(_U,{})}));export{Wg as $,zk as A,mR as B,dl as C,fM as D,Ji as E,bU as F,An as G,qe as H,mo as I,ns as J,rs as K,Ox as L,ge as M,wU as N,B as O,Fg as P,hM as Q,NM as R,MR as S,ct as T,Oo as U,Ul as V,sc as W,Hh as X,Bl as Y,Kh as Z,rt as _,t_ as a,p4 as a$,go as a0,Wh as a1,Ci as a2,De as a3,DM as a4,jh as a5,bM as a6,sS as a7,Me as a8,zi as a9,D4 as aA,zU as aB,NU as aC,VU as aD,MU as aE,b4 as aF,ZU as aG,XU as aH,Ve as aI,jl as aJ,IM as aK,m4 as aL,s4 as aM,o4 as aN,l4 as aO,u4 as aP,dM as aQ,x4 as aR,R4 as aS,DU as aT,HU as aU,QU as aV,BU as aW,g4 as aX,y4 as aY,_4 as aZ,jU as a_,q as aa,TU as ab,nO as ac,Re as ad,L4 as ae,ne as af,IU as ag,O4 as ah,V4 as ai,AU as aj,Zt as ak,uM as al,n4 as am,r4 as an,KU as ao,A4 as ap,S4 as aq,t4 as ar,OU as as,kU as at,cM as au,wM as av,N4 as aw,h4 as ax,T4 as ay,FU as az,j4 as b,GU as b0,v4 as b1,w4 as b2,kM as b3,tR as b4,xU as b5,I4 as b6,k4 as b7,EU as b8,i4 as b9,YU as ba,JU as bb,e4 as bc,UU as bd,P4 as be,LU as bf,C4 as bg,B4 as bh,vU as c,hl as d,CU as e,ml as f,yR as g,WU as h,a4 as i,G as j,c4 as k,z4 as l,d4 as m,gR as n,f4 as o,U4 as p,$U as q,L as r,_R as s,M4 as t,qT as u,F4 as v,qU as w,HF as x,hb as y,yU as z};

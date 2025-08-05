(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))a(c);new MutationObserver(c=>{for(const f of c)if(f.type==="childList")for(const d of f.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function s(c){const f={};return c.integrity&&(f.integrity=c.integrity),c.referrerPolicy&&(f.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?f.credentials="include":c.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function a(c){if(c.ep)return;c.ep=!0;const f=s(c);fetch(c.href,f)}})();function nm(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Ul={exports:{}},Ii={},Wl={exports:{}},ge={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mh;function c1(){if(mh)return ge;mh=1;var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),f=Symbol.for("react.provider"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),v=Symbol.iterator;function w(E){return E===null||typeof E!="object"?null:(E=v&&E[v]||E["@@iterator"],typeof E=="function"?E:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,P={};function A(E,_,fe){this.props=E,this.context=_,this.refs=P,this.updater=fe||C}A.prototype.isReactComponent={},A.prototype.setState=function(E,_){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,_,"setState")},A.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function M(){}M.prototype=A.prototype;function D(E,_,fe){this.props=E,this.context=_,this.refs=P,this.updater=fe||C}var I=D.prototype=new M;I.constructor=D,S(I,A.prototype),I.isPureReactComponent=!0;var K=Array.isArray,U=Object.prototype.hasOwnProperty,G={current:null},$={key:!0,ref:!0,__self:!0,__source:!0};function O(E,_,fe){var pe,me={},xe=null,Se=null;if(_!=null)for(pe in _.ref!==void 0&&(Se=_.ref),_.key!==void 0&&(xe=""+_.key),_)U.call(_,pe)&&!$.hasOwnProperty(pe)&&(me[pe]=_[pe]);var ve=arguments.length-2;if(ve===1)me.children=fe;else if(1<ve){for(var Te=Array(ve),ot=0;ot<ve;ot++)Te[ot]=arguments[ot+2];me.children=Te}if(E&&E.defaultProps)for(pe in ve=E.defaultProps,ve)me[pe]===void 0&&(me[pe]=ve[pe]);return{$$typeof:n,type:E,key:xe,ref:Se,props:me,_owner:G.current}}function H(E,_){return{$$typeof:n,type:E.type,key:_,ref:E.ref,props:E.props,_owner:E._owner}}function se(E){return typeof E=="object"&&E!==null&&E.$$typeof===n}function be(E){var _={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(fe){return _[fe]})}var je=/\/+/g;function Y(E,_){return typeof E=="object"&&E!==null&&E.key!=null?be(""+E.key):_.toString(36)}function he(E,_,fe,pe,me){var xe=typeof E;(xe==="undefined"||xe==="boolean")&&(E=null);var Se=!1;if(E===null)Se=!0;else switch(xe){case"string":case"number":Se=!0;break;case"object":switch(E.$$typeof){case n:case r:Se=!0}}if(Se)return Se=E,me=me(Se),E=pe===""?"."+Y(Se,0):pe,K(me)?(fe="",E!=null&&(fe=E.replace(je,"$&/")+"/"),he(me,_,fe,"",function(ot){return ot})):me!=null&&(se(me)&&(me=H(me,fe+(!me.key||Se&&Se.key===me.key?"":(""+me.key).replace(je,"$&/")+"/")+E)),_.push(me)),1;if(Se=0,pe=pe===""?".":pe+":",K(E))for(var ve=0;ve<E.length;ve++){xe=E[ve];var Te=pe+Y(xe,ve);Se+=he(xe,_,fe,Te,me)}else if(Te=w(E),typeof Te=="function")for(E=Te.call(E),ve=0;!(xe=E.next()).done;)xe=xe.value,Te=pe+Y(xe,ve++),Se+=he(xe,_,fe,Te,me);else if(xe==="object")throw _=String(E),Error("Objects are not valid as a React child (found: "+(_==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":_)+"). If you meant to render a collection of children, use an array instead.");return Se}function Pe(E,_,fe){if(E==null)return E;var pe=[],me=0;return he(E,pe,"","",function(xe){return _.call(fe,xe,me++)}),pe}function de(E){if(E._status===-1){var _=E._result;_=_(),_.then(function(fe){(E._status===0||E._status===-1)&&(E._status=1,E._result=fe)},function(fe){(E._status===0||E._status===-1)&&(E._status=2,E._result=fe)}),E._status===-1&&(E._status=0,E._result=_)}if(E._status===1)return E._result.default;throw E._result}var re={current:null},W={transition:null},ie={ReactCurrentDispatcher:re,ReactCurrentBatchConfig:W,ReactCurrentOwner:G};function X(){throw Error("act(...) is not supported in production builds of React.")}return ge.Children={map:Pe,forEach:function(E,_,fe){Pe(E,function(){_.apply(this,arguments)},fe)},count:function(E){var _=0;return Pe(E,function(){_++}),_},toArray:function(E){return Pe(E,function(_){return _})||[]},only:function(E){if(!se(E))throw Error("React.Children.only expected to receive a single React element child.");return E}},ge.Component=A,ge.Fragment=s,ge.Profiler=c,ge.PureComponent=D,ge.StrictMode=a,ge.Suspense=m,ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ie,ge.act=X,ge.cloneElement=function(E,_,fe){if(E==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+E+".");var pe=S({},E.props),me=E.key,xe=E.ref,Se=E._owner;if(_!=null){if(_.ref!==void 0&&(xe=_.ref,Se=G.current),_.key!==void 0&&(me=""+_.key),E.type&&E.type.defaultProps)var ve=E.type.defaultProps;for(Te in _)U.call(_,Te)&&!$.hasOwnProperty(Te)&&(pe[Te]=_[Te]===void 0&&ve!==void 0?ve[Te]:_[Te])}var Te=arguments.length-2;if(Te===1)pe.children=fe;else if(1<Te){ve=Array(Te);for(var ot=0;ot<Te;ot++)ve[ot]=arguments[ot+2];pe.children=ve}return{$$typeof:n,type:E.type,key:me,ref:xe,props:pe,_owner:Se}},ge.createContext=function(E){return E={$$typeof:d,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},E.Provider={$$typeof:f,_context:E},E.Consumer=E},ge.createElement=O,ge.createFactory=function(E){var _=O.bind(null,E);return _.type=E,_},ge.createRef=function(){return{current:null}},ge.forwardRef=function(E){return{$$typeof:p,render:E}},ge.isValidElement=se,ge.lazy=function(E){return{$$typeof:y,_payload:{_status:-1,_result:E},_init:de}},ge.memo=function(E,_){return{$$typeof:g,type:E,compare:_===void 0?null:_}},ge.startTransition=function(E){var _=W.transition;W.transition={};try{E()}finally{W.transition=_}},ge.unstable_act=X,ge.useCallback=function(E,_){return re.current.useCallback(E,_)},ge.useContext=function(E){return re.current.useContext(E)},ge.useDebugValue=function(){},ge.useDeferredValue=function(E){return re.current.useDeferredValue(E)},ge.useEffect=function(E,_){return re.current.useEffect(E,_)},ge.useId=function(){return re.current.useId()},ge.useImperativeHandle=function(E,_,fe){return re.current.useImperativeHandle(E,_,fe)},ge.useInsertionEffect=function(E,_){return re.current.useInsertionEffect(E,_)},ge.useLayoutEffect=function(E,_){return re.current.useLayoutEffect(E,_)},ge.useMemo=function(E,_){return re.current.useMemo(E,_)},ge.useReducer=function(E,_,fe){return re.current.useReducer(E,_,fe)},ge.useRef=function(E){return re.current.useRef(E)},ge.useState=function(E){return re.current.useState(E)},ge.useSyncExternalStore=function(E,_,fe){return re.current.useSyncExternalStore(E,_,fe)},ge.useTransition=function(){return re.current.useTransition()},ge.version="18.3.1",ge}var gh;function Oc(){return gh||(gh=1,Wl.exports=c1()),Wl.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yh;function u1(){if(yh)return Ii;yh=1;var n=Oc(),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f={key:!0,ref:!0,__self:!0,__source:!0};function d(p,m,g){var y,v={},w=null,C=null;g!==void 0&&(w=""+g),m.key!==void 0&&(w=""+m.key),m.ref!==void 0&&(C=m.ref);for(y in m)a.call(m,y)&&!f.hasOwnProperty(y)&&(v[y]=m[y]);if(p&&p.defaultProps)for(y in m=p.defaultProps,m)v[y]===void 0&&(v[y]=m[y]);return{$$typeof:r,type:p,key:w,ref:C,props:v,_owner:c.current}}return Ii.Fragment=s,Ii.jsx=d,Ii.jsxs=d,Ii}var xh;function d1(){return xh||(xh=1,Ul.exports=u1()),Ul.exports}var l=d1(),b=Oc();const Mt=nm(b);var ko={},Hl={exports:{}},gt={},Kl={exports:{}},Yl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vh;function f1(){return vh||(vh=1,function(n){function r(W,ie){var X=W.length;W.push(ie);e:for(;0<X;){var E=X-1>>>1,_=W[E];if(0<c(_,ie))W[E]=ie,W[X]=_,X=E;else break e}}function s(W){return W.length===0?null:W[0]}function a(W){if(W.length===0)return null;var ie=W[0],X=W.pop();if(X!==ie){W[0]=X;e:for(var E=0,_=W.length,fe=_>>>1;E<fe;){var pe=2*(E+1)-1,me=W[pe],xe=pe+1,Se=W[xe];if(0>c(me,X))xe<_&&0>c(Se,me)?(W[E]=Se,W[xe]=X,E=xe):(W[E]=me,W[pe]=X,E=pe);else if(xe<_&&0>c(Se,X))W[E]=Se,W[xe]=X,E=xe;else break e}}return ie}function c(W,ie){var X=W.sortIndex-ie.sortIndex;return X!==0?X:W.id-ie.id}if(typeof performance=="object"&&typeof performance.now=="function"){var f=performance;n.unstable_now=function(){return f.now()}}else{var d=Date,p=d.now();n.unstable_now=function(){return d.now()-p}}var m=[],g=[],y=1,v=null,w=3,C=!1,S=!1,P=!1,A=typeof setTimeout=="function"?setTimeout:null,M=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(W){for(var ie=s(g);ie!==null;){if(ie.callback===null)a(g);else if(ie.startTime<=W)a(g),ie.sortIndex=ie.expirationTime,r(m,ie);else break;ie=s(g)}}function K(W){if(P=!1,I(W),!S)if(s(m)!==null)S=!0,de(U);else{var ie=s(g);ie!==null&&re(K,ie.startTime-W)}}function U(W,ie){S=!1,P&&(P=!1,M(O),O=-1),C=!0;var X=w;try{for(I(ie),v=s(m);v!==null&&(!(v.expirationTime>ie)||W&&!be());){var E=v.callback;if(typeof E=="function"){v.callback=null,w=v.priorityLevel;var _=E(v.expirationTime<=ie);ie=n.unstable_now(),typeof _=="function"?v.callback=_:v===s(m)&&a(m),I(ie)}else a(m);v=s(m)}if(v!==null)var fe=!0;else{var pe=s(g);pe!==null&&re(K,pe.startTime-ie),fe=!1}return fe}finally{v=null,w=X,C=!1}}var G=!1,$=null,O=-1,H=5,se=-1;function be(){return!(n.unstable_now()-se<H)}function je(){if($!==null){var W=n.unstable_now();se=W;var ie=!0;try{ie=$(!0,W)}finally{ie?Y():(G=!1,$=null)}}else G=!1}var Y;if(typeof D=="function")Y=function(){D(je)};else if(typeof MessageChannel<"u"){var he=new MessageChannel,Pe=he.port2;he.port1.onmessage=je,Y=function(){Pe.postMessage(null)}}else Y=function(){A(je,0)};function de(W){$=W,G||(G=!0,Y())}function re(W,ie){O=A(function(){W(n.unstable_now())},ie)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(W){W.callback=null},n.unstable_continueExecution=function(){S||C||(S=!0,de(U))},n.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<W?Math.floor(1e3/W):5},n.unstable_getCurrentPriorityLevel=function(){return w},n.unstable_getFirstCallbackNode=function(){return s(m)},n.unstable_next=function(W){switch(w){case 1:case 2:case 3:var ie=3;break;default:ie=w}var X=w;w=ie;try{return W()}finally{w=X}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(W,ie){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var X=w;w=W;try{return ie()}finally{w=X}},n.unstable_scheduleCallback=function(W,ie,X){var E=n.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?E+X:E):X=E,W){case 1:var _=-1;break;case 2:_=250;break;case 5:_=1073741823;break;case 4:_=1e4;break;default:_=5e3}return _=X+_,W={id:y++,callback:ie,priorityLevel:W,startTime:X,expirationTime:_,sortIndex:-1},X>E?(W.sortIndex=X,r(g,W),s(m)===null&&W===s(g)&&(P?(M(O),O=-1):P=!0,re(K,X-E))):(W.sortIndex=_,r(m,W),S||C||(S=!0,de(U))),W},n.unstable_shouldYield=be,n.unstable_wrapCallback=function(W){var ie=w;return function(){var X=w;w=ie;try{return W.apply(this,arguments)}finally{w=X}}}}(Yl)),Yl}var wh;function h1(){return wh||(wh=1,Kl.exports=f1()),Kl.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bh;function p1(){if(bh)return gt;bh=1;var n=Oc(),r=h1();function s(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,i=1;i<arguments.length;i++)t+="&args[]="+encodeURIComponent(arguments[i]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a=new Set,c={};function f(e,t){d(e,t),d(e+"Capture",t)}function d(e,t){for(c[e]=t,e=0;e<t.length;e++)a.add(t[e])}var p=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},v={};function w(e){return m.call(v,e)?!0:m.call(y,e)?!1:g.test(e)?v[e]=!0:(y[e]=!0,!1)}function C(e,t,i,o){if(i!==null&&i.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return o?!1:i!==null?!i.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function S(e,t,i,o){if(t===null||typeof t>"u"||C(e,t,i,o))return!0;if(o)return!1;if(i!==null)switch(i.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function P(e,t,i,o,u,h,x){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=o,this.attributeNamespace=u,this.mustUseProperty=i,this.propertyName=e,this.type=t,this.sanitizeURL=h,this.removeEmptyString=x}var A={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){A[e]=new P(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];A[t]=new P(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){A[e]=new P(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){A[e]=new P(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){A[e]=new P(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){A[e]=new P(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){A[e]=new P(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){A[e]=new P(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){A[e]=new P(e,5,!1,e.toLowerCase(),null,!1,!1)});var M=/[\-:]([a-z])/g;function D(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(M,D);A[t]=new P(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(M,D);A[t]=new P(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(M,D);A[t]=new P(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){A[e]=new P(e,1,!1,e.toLowerCase(),null,!1,!1)}),A.xlinkHref=new P("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){A[e]=new P(e,1,!1,e.toLowerCase(),null,!0,!0)});function I(e,t,i,o){var u=A.hasOwnProperty(t)?A[t]:null;(u!==null?u.type!==0:o||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(S(t,i,u,o)&&(i=null),o||u===null?w(t)&&(i===null?e.removeAttribute(t):e.setAttribute(t,""+i)):u.mustUseProperty?e[u.propertyName]=i===null?u.type===3?!1:"":i:(t=u.attributeName,o=u.attributeNamespace,i===null?e.removeAttribute(t):(u=u.type,i=u===3||u===4&&i===!0?"":""+i,o?e.setAttributeNS(o,t,i):e.setAttribute(t,i))))}var K=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,U=Symbol.for("react.element"),G=Symbol.for("react.portal"),$=Symbol.for("react.fragment"),O=Symbol.for("react.strict_mode"),H=Symbol.for("react.profiler"),se=Symbol.for("react.provider"),be=Symbol.for("react.context"),je=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),he=Symbol.for("react.suspense_list"),Pe=Symbol.for("react.memo"),de=Symbol.for("react.lazy"),re=Symbol.for("react.offscreen"),W=Symbol.iterator;function ie(e){return e===null||typeof e!="object"?null:(e=W&&e[W]||e["@@iterator"],typeof e=="function"?e:null)}var X=Object.assign,E;function _(e){if(E===void 0)try{throw Error()}catch(i){var t=i.stack.trim().match(/\n( *(at )?)/);E=t&&t[1]||""}return`
`+E+e}var fe=!1;function pe(e,t){if(!e||fe)return"";fe=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(L){var o=L}Reflect.construct(e,[],t)}else{try{t.call()}catch(L){o=L}e.call(t.prototype)}else{try{throw Error()}catch(L){o=L}e()}}catch(L){if(L&&o&&typeof L.stack=="string"){for(var u=L.stack.split(`
`),h=o.stack.split(`
`),x=u.length-1,k=h.length-1;1<=x&&0<=k&&u[x]!==h[k];)k--;for(;1<=x&&0<=k;x--,k--)if(u[x]!==h[k]){if(x!==1||k!==1)do if(x--,k--,0>k||u[x]!==h[k]){var j=`
`+u[x].replace(" at new "," at ");return e.displayName&&j.includes("<anonymous>")&&(j=j.replace("<anonymous>",e.displayName)),j}while(1<=x&&0<=k);break}}}finally{fe=!1,Error.prepareStackTrace=i}return(e=e?e.displayName||e.name:"")?_(e):""}function me(e){switch(e.tag){case 5:return _(e.type);case 16:return _("Lazy");case 13:return _("Suspense");case 19:return _("SuspenseList");case 0:case 2:case 15:return e=pe(e.type,!1),e;case 11:return e=pe(e.type.render,!1),e;case 1:return e=pe(e.type,!0),e;default:return""}}function xe(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case $:return"Fragment";case G:return"Portal";case H:return"Profiler";case O:return"StrictMode";case Y:return"Suspense";case he:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case be:return(e.displayName||"Context")+".Consumer";case se:return(e._context.displayName||"Context")+".Provider";case je:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Pe:return t=e.displayName||null,t!==null?t:xe(e.type)||"Memo";case de:t=e._payload,e=e._init;try{return xe(e(t))}catch{}}return null}function Se(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xe(t);case 8:return t===O?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ve(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Te(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ot(e){var t=Te(e)?"checked":"value",i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var u=i.get,h=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return u.call(this)},set:function(x){o=""+x,h.call(this,x)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return o},setValue:function(x){o=""+x},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function On(e){e._valueTracker||(e._valueTracker=ot(e))}function Gr(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var i=t.getValue(),o="";return e&&(o=Te(e)?e.checked?"true":"false":e.value),e=o,e!==i?(t.setValue(e),!0):!1}function cr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ur(e,t){var i=t.checked;return X({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:i??e._wrapperState.initialChecked})}function ls(e,t){var i=t.defaultValue==null?"":t.defaultValue,o=t.checked!=null?t.checked:t.defaultChecked;i=ve(t.value!=null?t.value:i),e._wrapperState={initialChecked:o,initialValue:i,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function cs(e,t){t=t.checked,t!=null&&I(e,"checked",t,!1)}function Bn(e,t){cs(e,t);var i=ve(t.value),o=t.type;if(i!=null)o==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+i):e.value!==""+i&&(e.value=""+i);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Xr(e,t.type,i):t.hasOwnProperty("defaultValue")&&Xr(e,t.type,ve(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function us(e,t,i){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type;if(!(o!=="submit"&&o!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,i||t===e.value||(e.value=t),e.defaultValue=t}i=e.name,i!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,i!==""&&(e.name=i)}function Xr(e,t,i){(t!=="number"||cr(e.ownerDocument)!==e)&&(i==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+i&&(e.defaultValue=""+i))}var $n=Array.isArray;function pn(e,t,i,o){if(e=e.options,t){t={};for(var u=0;u<i.length;u++)t["$"+i[u]]=!0;for(i=0;i<e.length;i++)u=t.hasOwnProperty("$"+e[i].value),e[i].selected!==u&&(e[i].selected=u),u&&o&&(e[i].defaultSelected=!0)}else{for(i=""+ve(i),t=null,u=0;u<e.length;u++){if(e[u].value===i){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}t!==null||e[u].disabled||(t=e[u])}t!==null&&(t.selected=!0)}}function Qr(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(s(91));return X({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ds(e,t){var i=t.value;if(i==null){if(i=t.children,t=t.defaultValue,i!=null){if(t!=null)throw Error(s(92));if($n(i)){if(1<i.length)throw Error(s(93));i=i[0]}t=i}t==null&&(t=""),i=t}e._wrapperState={initialValue:ve(i)}}function fs(e,t){var i=ve(t.value),o=ve(t.defaultValue);i!=null&&(i=""+i,i!==e.value&&(e.value=i),t.defaultValue==null&&e.defaultValue!==i&&(e.defaultValue=i)),o!=null&&(e.defaultValue=""+o)}function Zr(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function qr(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ee(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?qr(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var oe,Ee=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,i,o,u){MSApp.execUnsafeLocalFunction(function(){return e(t,i,o,u)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(oe=oe||document.createElement("div"),oe.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=oe.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ge(e,t){if(t){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=t;return}}e.textContent=t}var ut={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qt=["Webkit","ms","Moz","O"];Object.keys(ut).forEach(function(e){qt.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ut[t]=ut[e]})});function mn(e,t,i){return t==null||typeof t=="boolean"||t===""?"":i||typeof t!="number"||t===0||ut.hasOwnProperty(e)&&ut[e]?(""+t).trim():t+"px"}function hs(e,t){e=e.style;for(var i in t)if(t.hasOwnProperty(i)){var o=i.indexOf("--")===0,u=mn(i,t[i],o);i==="float"&&(i="cssFloat"),o?e.setProperty(i,u):e[i]=u}}var pg=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ta(e,t){if(t){if(pg[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(s(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(s(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(s(61))}if(t.style!=null&&typeof t.style!="object")throw Error(s(62))}}function na(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ra=null;function ia(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var sa=null,dr=null,fr=null;function Mu(e){if(e=wi(e)){if(typeof sa!="function")throw Error(s(280));var t=e.stateNode;t&&(t=zs(t),sa(e.stateNode,e.type,t))}}function Lu(e){dr?fr?fr.push(e):fr=[e]:dr=e}function Au(){if(dr){var e=dr,t=fr;if(fr=dr=null,Mu(e),t)for(e=0;e<t.length;e++)Mu(t[e])}}function Du(e,t){return e(t)}function Iu(){}var oa=!1;function zu(e,t,i){if(oa)return e(t,i);oa=!0;try{return Du(e,t,i)}finally{oa=!1,(dr!==null||fr!==null)&&(Iu(),Au())}}function Jr(e,t){var i=e.stateNode;if(i===null)return null;var o=zs(i);if(o===null)return null;i=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(s(231,t,typeof i));return i}var aa=!1;if(p)try{var ei={};Object.defineProperty(ei,"passive",{get:function(){aa=!0}}),window.addEventListener("test",ei,ei),window.removeEventListener("test",ei,ei)}catch{aa=!1}function mg(e,t,i,o,u,h,x,k,j){var L=Array.prototype.slice.call(arguments,3);try{t.apply(i,L)}catch(F){this.onError(F)}}var ti=!1,ps=null,ms=!1,la=null,gg={onError:function(e){ti=!0,ps=e}};function yg(e,t,i,o,u,h,x,k,j){ti=!1,ps=null,mg.apply(gg,arguments)}function xg(e,t,i,o,u,h,x,k,j){if(yg.apply(this,arguments),ti){if(ti){var L=ps;ti=!1,ps=null}else throw Error(s(198));ms||(ms=!0,la=L)}}function Un(e){var t=e,i=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(i=t.return),e=t.return;while(e)}return t.tag===3?i:null}function _u(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Fu(e){if(Un(e)!==e)throw Error(s(188))}function vg(e){var t=e.alternate;if(!t){if(t=Un(e),t===null)throw Error(s(188));return t!==e?null:e}for(var i=e,o=t;;){var u=i.return;if(u===null)break;var h=u.alternate;if(h===null){if(o=u.return,o!==null){i=o;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===i)return Fu(u),e;if(h===o)return Fu(u),t;h=h.sibling}throw Error(s(188))}if(i.return!==o.return)i=u,o=h;else{for(var x=!1,k=u.child;k;){if(k===i){x=!0,i=u,o=h;break}if(k===o){x=!0,o=u,i=h;break}k=k.sibling}if(!x){for(k=h.child;k;){if(k===i){x=!0,i=h,o=u;break}if(k===o){x=!0,o=h,i=u;break}k=k.sibling}if(!x)throw Error(s(189))}}if(i.alternate!==o)throw Error(s(190))}if(i.tag!==3)throw Error(s(188));return i.stateNode.current===i?e:t}function Vu(e){return e=vg(e),e!==null?Ou(e):null}function Ou(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ou(e);if(t!==null)return t;e=e.sibling}return null}var Bu=r.unstable_scheduleCallback,$u=r.unstable_cancelCallback,wg=r.unstable_shouldYield,bg=r.unstable_requestPaint,Be=r.unstable_now,kg=r.unstable_getCurrentPriorityLevel,ca=r.unstable_ImmediatePriority,Uu=r.unstable_UserBlockingPriority,gs=r.unstable_NormalPriority,jg=r.unstable_LowPriority,Wu=r.unstable_IdlePriority,ys=null,Bt=null;function Sg(e){if(Bt&&typeof Bt.onCommitFiberRoot=="function")try{Bt.onCommitFiberRoot(ys,e,void 0,(e.current.flags&128)===128)}catch{}}var At=Math.clz32?Math.clz32:Pg,Ng=Math.log,Cg=Math.LN2;function Pg(e){return e>>>=0,e===0?32:31-(Ng(e)/Cg|0)|0}var xs=64,vs=4194304;function ni(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ws(e,t){var i=e.pendingLanes;if(i===0)return 0;var o=0,u=e.suspendedLanes,h=e.pingedLanes,x=i&268435455;if(x!==0){var k=x&~u;k!==0?o=ni(k):(h&=x,h!==0&&(o=ni(h)))}else x=i&~u,x!==0?o=ni(x):h!==0&&(o=ni(h));if(o===0)return 0;if(t!==0&&t!==o&&(t&u)===0&&(u=o&-o,h=t&-t,u>=h||u===16&&(h&4194240)!==0))return t;if((o&4)!==0&&(o|=i&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=o;0<t;)i=31-At(t),u=1<<i,o|=e[i],t&=~u;return o}function Eg(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Tg(e,t){for(var i=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,h=e.pendingLanes;0<h;){var x=31-At(h),k=1<<x,j=u[x];j===-1?((k&i)===0||(k&o)!==0)&&(u[x]=Eg(k,t)):j<=t&&(e.expiredLanes|=k),h&=~k}}function ua(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Hu(){var e=xs;return xs<<=1,(xs&4194240)===0&&(xs=64),e}function da(e){for(var t=[],i=0;31>i;i++)t.push(e);return t}function ri(e,t,i){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-At(t),e[t]=i}function Rg(e,t){var i=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<i;){var u=31-At(i),h=1<<u;t[u]=0,o[u]=-1,e[u]=-1,i&=~h}}function fa(e,t){var i=e.entangledLanes|=t;for(e=e.entanglements;i;){var o=31-At(i),u=1<<o;u&t|e[o]&t&&(e[o]|=t),i&=~u}}var Ne=0;function Ku(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Yu,ha,Gu,Xu,Qu,pa=!1,bs=[],gn=null,yn=null,xn=null,ii=new Map,si=new Map,vn=[],Mg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Zu(e,t){switch(e){case"focusin":case"focusout":gn=null;break;case"dragenter":case"dragleave":yn=null;break;case"mouseover":case"mouseout":xn=null;break;case"pointerover":case"pointerout":ii.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":si.delete(t.pointerId)}}function oi(e,t,i,o,u,h){return e===null||e.nativeEvent!==h?(e={blockedOn:t,domEventName:i,eventSystemFlags:o,nativeEvent:h,targetContainers:[u]},t!==null&&(t=wi(t),t!==null&&ha(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,u!==null&&t.indexOf(u)===-1&&t.push(u),e)}function Lg(e,t,i,o,u){switch(t){case"focusin":return gn=oi(gn,e,t,i,o,u),!0;case"dragenter":return yn=oi(yn,e,t,i,o,u),!0;case"mouseover":return xn=oi(xn,e,t,i,o,u),!0;case"pointerover":var h=u.pointerId;return ii.set(h,oi(ii.get(h)||null,e,t,i,o,u)),!0;case"gotpointercapture":return h=u.pointerId,si.set(h,oi(si.get(h)||null,e,t,i,o,u)),!0}return!1}function qu(e){var t=Wn(e.target);if(t!==null){var i=Un(t);if(i!==null){if(t=i.tag,t===13){if(t=_u(i),t!==null){e.blockedOn=t,Qu(e.priority,function(){Gu(i)});return}}else if(t===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ks(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var i=ga(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(i===null){i=e.nativeEvent;var o=new i.constructor(i.type,i);ra=o,i.target.dispatchEvent(o),ra=null}else return t=wi(i),t!==null&&ha(t),e.blockedOn=i,!1;t.shift()}return!0}function Ju(e,t,i){ks(e)&&i.delete(t)}function Ag(){pa=!1,gn!==null&&ks(gn)&&(gn=null),yn!==null&&ks(yn)&&(yn=null),xn!==null&&ks(xn)&&(xn=null),ii.forEach(Ju),si.forEach(Ju)}function ai(e,t){e.blockedOn===t&&(e.blockedOn=null,pa||(pa=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Ag)))}function li(e){function t(u){return ai(u,e)}if(0<bs.length){ai(bs[0],e);for(var i=1;i<bs.length;i++){var o=bs[i];o.blockedOn===e&&(o.blockedOn=null)}}for(gn!==null&&ai(gn,e),yn!==null&&ai(yn,e),xn!==null&&ai(xn,e),ii.forEach(t),si.forEach(t),i=0;i<vn.length;i++)o=vn[i],o.blockedOn===e&&(o.blockedOn=null);for(;0<vn.length&&(i=vn[0],i.blockedOn===null);)qu(i),i.blockedOn===null&&vn.shift()}var hr=K.ReactCurrentBatchConfig,js=!0;function Dg(e,t,i,o){var u=Ne,h=hr.transition;hr.transition=null;try{Ne=1,ma(e,t,i,o)}finally{Ne=u,hr.transition=h}}function Ig(e,t,i,o){var u=Ne,h=hr.transition;hr.transition=null;try{Ne=4,ma(e,t,i,o)}finally{Ne=u,hr.transition=h}}function ma(e,t,i,o){if(js){var u=ga(e,t,i,o);if(u===null)Aa(e,t,o,Ss,i),Zu(e,o);else if(Lg(u,e,t,i,o))o.stopPropagation();else if(Zu(e,o),t&4&&-1<Mg.indexOf(e)){for(;u!==null;){var h=wi(u);if(h!==null&&Yu(h),h=ga(e,t,i,o),h===null&&Aa(e,t,o,Ss,i),h===u)break;u=h}u!==null&&o.stopPropagation()}else Aa(e,t,o,null,i)}}var Ss=null;function ga(e,t,i,o){if(Ss=null,e=ia(o),e=Wn(e),e!==null)if(t=Un(e),t===null)e=null;else if(i=t.tag,i===13){if(e=_u(t),e!==null)return e;e=null}else if(i===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ss=e,null}function ed(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(kg()){case ca:return 1;case Uu:return 4;case gs:case jg:return 16;case Wu:return 536870912;default:return 16}default:return 16}}var wn=null,ya=null,Ns=null;function td(){if(Ns)return Ns;var e,t=ya,i=t.length,o,u="value"in wn?wn.value:wn.textContent,h=u.length;for(e=0;e<i&&t[e]===u[e];e++);var x=i-e;for(o=1;o<=x&&t[i-o]===u[h-o];o++);return Ns=u.slice(e,1<o?1-o:void 0)}function Cs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ps(){return!0}function nd(){return!1}function xt(e){function t(i,o,u,h,x){this._reactName=i,this._targetInst=u,this.type=o,this.nativeEvent=h,this.target=x,this.currentTarget=null;for(var k in e)e.hasOwnProperty(k)&&(i=e[k],this[k]=i?i(h):h[k]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Ps:nd,this.isPropagationStopped=nd,this}return X(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=Ps)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=Ps)},persist:function(){},isPersistent:Ps}),t}var pr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xa=xt(pr),ci=X({},pr,{view:0,detail:0}),zg=xt(ci),va,wa,ui,Es=X({},ci,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ka,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ui&&(ui&&e.type==="mousemove"?(va=e.screenX-ui.screenX,wa=e.screenY-ui.screenY):wa=va=0,ui=e),va)},movementY:function(e){return"movementY"in e?e.movementY:wa}}),rd=xt(Es),_g=X({},Es,{dataTransfer:0}),Fg=xt(_g),Vg=X({},ci,{relatedTarget:0}),ba=xt(Vg),Og=X({},pr,{animationName:0,elapsedTime:0,pseudoElement:0}),Bg=xt(Og),$g=X({},pr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ug=xt($g),Wg=X({},pr,{data:0}),id=xt(Wg),Hg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Kg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Yg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Yg[e])?!!t[e]:!1}function ka(){return Gg}var Xg=X({},ci,{key:function(e){if(e.key){var t=Hg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Cs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Kg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ka,charCode:function(e){return e.type==="keypress"?Cs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Cs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Qg=xt(Xg),Zg=X({},Es,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sd=xt(Zg),qg=X({},ci,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ka}),Jg=xt(qg),ey=X({},pr,{propertyName:0,elapsedTime:0,pseudoElement:0}),ty=xt(ey),ny=X({},Es,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ry=xt(ny),iy=[9,13,27,32],ja=p&&"CompositionEvent"in window,di=null;p&&"documentMode"in document&&(di=document.documentMode);var sy=p&&"TextEvent"in window&&!di,od=p&&(!ja||di&&8<di&&11>=di),ad=" ",ld=!1;function cd(e,t){switch(e){case"keyup":return iy.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ud(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var mr=!1;function oy(e,t){switch(e){case"compositionend":return ud(t);case"keypress":return t.which!==32?null:(ld=!0,ad);case"textInput":return e=t.data,e===ad&&ld?null:e;default:return null}}function ay(e,t){if(mr)return e==="compositionend"||!ja&&cd(e,t)?(e=td(),Ns=ya=wn=null,mr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return od&&t.locale!=="ko"?null:t.data;default:return null}}var ly={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ly[e.type]:t==="textarea"}function fd(e,t,i,o){Lu(o),t=As(t,"onChange"),0<t.length&&(i=new xa("onChange","change",null,i,o),e.push({event:i,listeners:t}))}var fi=null,hi=null;function cy(e){Rd(e,0)}function Ts(e){var t=wr(e);if(Gr(t))return e}function uy(e,t){if(e==="change")return t}var hd=!1;if(p){var Sa;if(p){var Na="oninput"in document;if(!Na){var pd=document.createElement("div");pd.setAttribute("oninput","return;"),Na=typeof pd.oninput=="function"}Sa=Na}else Sa=!1;hd=Sa&&(!document.documentMode||9<document.documentMode)}function md(){fi&&(fi.detachEvent("onpropertychange",gd),hi=fi=null)}function gd(e){if(e.propertyName==="value"&&Ts(hi)){var t=[];fd(t,hi,e,ia(e)),zu(cy,t)}}function dy(e,t,i){e==="focusin"?(md(),fi=t,hi=i,fi.attachEvent("onpropertychange",gd)):e==="focusout"&&md()}function fy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ts(hi)}function hy(e,t){if(e==="click")return Ts(t)}function py(e,t){if(e==="input"||e==="change")return Ts(t)}function my(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Dt=typeof Object.is=="function"?Object.is:my;function pi(e,t){if(Dt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var i=Object.keys(e),o=Object.keys(t);if(i.length!==o.length)return!1;for(o=0;o<i.length;o++){var u=i[o];if(!m.call(t,u)||!Dt(e[u],t[u]))return!1}return!0}function yd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function xd(e,t){var i=yd(e);e=0;for(var o;i;){if(i.nodeType===3){if(o=e+i.textContent.length,e<=t&&o>=t)return{node:i,offset:t-e};e=o}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=yd(i)}}function vd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?vd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function wd(){for(var e=window,t=cr();t instanceof e.HTMLIFrameElement;){try{var i=typeof t.contentWindow.location.href=="string"}catch{i=!1}if(i)e=t.contentWindow;else break;t=cr(e.document)}return t}function Ca(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function gy(e){var t=wd(),i=e.focusedElem,o=e.selectionRange;if(t!==i&&i&&i.ownerDocument&&vd(i.ownerDocument.documentElement,i)){if(o!==null&&Ca(i)){if(t=o.start,e=o.end,e===void 0&&(e=t),"selectionStart"in i)i.selectionStart=t,i.selectionEnd=Math.min(e,i.value.length);else if(e=(t=i.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var u=i.textContent.length,h=Math.min(o.start,u);o=o.end===void 0?h:Math.min(o.end,u),!e.extend&&h>o&&(u=o,o=h,h=u),u=xd(i,h);var x=xd(i,o);u&&x&&(e.rangeCount!==1||e.anchorNode!==u.node||e.anchorOffset!==u.offset||e.focusNode!==x.node||e.focusOffset!==x.offset)&&(t=t.createRange(),t.setStart(u.node,u.offset),e.removeAllRanges(),h>o?(e.addRange(t),e.extend(x.node,x.offset)):(t.setEnd(x.node,x.offset),e.addRange(t)))}}for(t=[],e=i;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<t.length;i++)e=t[i],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var yy=p&&"documentMode"in document&&11>=document.documentMode,gr=null,Pa=null,mi=null,Ea=!1;function bd(e,t,i){var o=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;Ea||gr==null||gr!==cr(o)||(o=gr,"selectionStart"in o&&Ca(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),mi&&pi(mi,o)||(mi=o,o=As(Pa,"onSelect"),0<o.length&&(t=new xa("onSelect","select",null,t,i),e.push({event:t,listeners:o}),t.target=gr)))}function Rs(e,t){var i={};return i[e.toLowerCase()]=t.toLowerCase(),i["Webkit"+e]="webkit"+t,i["Moz"+e]="moz"+t,i}var yr={animationend:Rs("Animation","AnimationEnd"),animationiteration:Rs("Animation","AnimationIteration"),animationstart:Rs("Animation","AnimationStart"),transitionend:Rs("Transition","TransitionEnd")},Ta={},kd={};p&&(kd=document.createElement("div").style,"AnimationEvent"in window||(delete yr.animationend.animation,delete yr.animationiteration.animation,delete yr.animationstart.animation),"TransitionEvent"in window||delete yr.transitionend.transition);function Ms(e){if(Ta[e])return Ta[e];if(!yr[e])return e;var t=yr[e],i;for(i in t)if(t.hasOwnProperty(i)&&i in kd)return Ta[e]=t[i];return e}var jd=Ms("animationend"),Sd=Ms("animationiteration"),Nd=Ms("animationstart"),Cd=Ms("transitionend"),Pd=new Map,Ed="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function bn(e,t){Pd.set(e,t),f(t,[e])}for(var Ra=0;Ra<Ed.length;Ra++){var Ma=Ed[Ra],xy=Ma.toLowerCase(),vy=Ma[0].toUpperCase()+Ma.slice(1);bn(xy,"on"+vy)}bn(jd,"onAnimationEnd"),bn(Sd,"onAnimationIteration"),bn(Nd,"onAnimationStart"),bn("dblclick","onDoubleClick"),bn("focusin","onFocus"),bn("focusout","onBlur"),bn(Cd,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),f("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),f("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),f("onBeforeInput",["compositionend","keypress","textInput","paste"]),f("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var gi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wy=new Set("cancel close invalid load scroll toggle".split(" ").concat(gi));function Td(e,t,i){var o=e.type||"unknown-event";e.currentTarget=i,xg(o,t,void 0,e),e.currentTarget=null}function Rd(e,t){t=(t&4)!==0;for(var i=0;i<e.length;i++){var o=e[i],u=o.event;o=o.listeners;e:{var h=void 0;if(t)for(var x=o.length-1;0<=x;x--){var k=o[x],j=k.instance,L=k.currentTarget;if(k=k.listener,j!==h&&u.isPropagationStopped())break e;Td(u,k,L),h=j}else for(x=0;x<o.length;x++){if(k=o[x],j=k.instance,L=k.currentTarget,k=k.listener,j!==h&&u.isPropagationStopped())break e;Td(u,k,L),h=j}}}if(ms)throw e=la,ms=!1,la=null,e}function Me(e,t){var i=t[Va];i===void 0&&(i=t[Va]=new Set);var o=e+"__bubble";i.has(o)||(Md(t,e,2,!1),i.add(o))}function La(e,t,i){var o=0;t&&(o|=4),Md(i,e,o,t)}var Ls="_reactListening"+Math.random().toString(36).slice(2);function yi(e){if(!e[Ls]){e[Ls]=!0,a.forEach(function(i){i!=="selectionchange"&&(wy.has(i)||La(i,!1,e),La(i,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ls]||(t[Ls]=!0,La("selectionchange",!1,t))}}function Md(e,t,i,o){switch(ed(t)){case 1:var u=Dg;break;case 4:u=Ig;break;default:u=ma}i=u.bind(null,t,i,e),u=void 0,!aa||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(t,i,{capture:!0,passive:u}):e.addEventListener(t,i,!0):u!==void 0?e.addEventListener(t,i,{passive:u}):e.addEventListener(t,i,!1)}function Aa(e,t,i,o,u){var h=o;if((t&1)===0&&(t&2)===0&&o!==null)e:for(;;){if(o===null)return;var x=o.tag;if(x===3||x===4){var k=o.stateNode.containerInfo;if(k===u||k.nodeType===8&&k.parentNode===u)break;if(x===4)for(x=o.return;x!==null;){var j=x.tag;if((j===3||j===4)&&(j=x.stateNode.containerInfo,j===u||j.nodeType===8&&j.parentNode===u))return;x=x.return}for(;k!==null;){if(x=Wn(k),x===null)return;if(j=x.tag,j===5||j===6){o=h=x;continue e}k=k.parentNode}}o=o.return}zu(function(){var L=h,F=ia(i),V=[];e:{var z=Pd.get(e);if(z!==void 0){var Z=xa,J=e;switch(e){case"keypress":if(Cs(i)===0)break e;case"keydown":case"keyup":Z=Qg;break;case"focusin":J="focus",Z=ba;break;case"focusout":J="blur",Z=ba;break;case"beforeblur":case"afterblur":Z=ba;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Z=rd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Z=Fg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Z=Jg;break;case jd:case Sd:case Nd:Z=Bg;break;case Cd:Z=ty;break;case"scroll":Z=zg;break;case"wheel":Z=ry;break;case"copy":case"cut":case"paste":Z=Ug;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Z=sd}var te=(t&4)!==0,$e=!te&&e==="scroll",T=te?z!==null?z+"Capture":null:z;te=[];for(var N=L,R;N!==null;){R=N;var B=R.stateNode;if(R.tag===5&&B!==null&&(R=B,T!==null&&(B=Jr(N,T),B!=null&&te.push(xi(N,B,R)))),$e)break;N=N.return}0<te.length&&(z=new Z(z,J,null,i,F),V.push({event:z,listeners:te}))}}if((t&7)===0){e:{if(z=e==="mouseover"||e==="pointerover",Z=e==="mouseout"||e==="pointerout",z&&i!==ra&&(J=i.relatedTarget||i.fromElement)&&(Wn(J)||J[Jt]))break e;if((Z||z)&&(z=F.window===F?F:(z=F.ownerDocument)?z.defaultView||z.parentWindow:window,Z?(J=i.relatedTarget||i.toElement,Z=L,J=J?Wn(J):null,J!==null&&($e=Un(J),J!==$e||J.tag!==5&&J.tag!==6)&&(J=null)):(Z=null,J=L),Z!==J)){if(te=rd,B="onMouseLeave",T="onMouseEnter",N="mouse",(e==="pointerout"||e==="pointerover")&&(te=sd,B="onPointerLeave",T="onPointerEnter",N="pointer"),$e=Z==null?z:wr(Z),R=J==null?z:wr(J),z=new te(B,N+"leave",Z,i,F),z.target=$e,z.relatedTarget=R,B=null,Wn(F)===L&&(te=new te(T,N+"enter",J,i,F),te.target=R,te.relatedTarget=$e,B=te),$e=B,Z&&J)t:{for(te=Z,T=J,N=0,R=te;R;R=xr(R))N++;for(R=0,B=T;B;B=xr(B))R++;for(;0<N-R;)te=xr(te),N--;for(;0<R-N;)T=xr(T),R--;for(;N--;){if(te===T||T!==null&&te===T.alternate)break t;te=xr(te),T=xr(T)}te=null}else te=null;Z!==null&&Ld(V,z,Z,te,!1),J!==null&&$e!==null&&Ld(V,$e,J,te,!0)}}e:{if(z=L?wr(L):window,Z=z.nodeName&&z.nodeName.toLowerCase(),Z==="select"||Z==="input"&&z.type==="file")var ne=uy;else if(dd(z))if(hd)ne=py;else{ne=fy;var ae=dy}else(Z=z.nodeName)&&Z.toLowerCase()==="input"&&(z.type==="checkbox"||z.type==="radio")&&(ne=hy);if(ne&&(ne=ne(e,L))){fd(V,ne,i,F);break e}ae&&ae(e,z,L),e==="focusout"&&(ae=z._wrapperState)&&ae.controlled&&z.type==="number"&&Xr(z,"number",z.value)}switch(ae=L?wr(L):window,e){case"focusin":(dd(ae)||ae.contentEditable==="true")&&(gr=ae,Pa=L,mi=null);break;case"focusout":mi=Pa=gr=null;break;case"mousedown":Ea=!0;break;case"contextmenu":case"mouseup":case"dragend":Ea=!1,bd(V,i,F);break;case"selectionchange":if(yy)break;case"keydown":case"keyup":bd(V,i,F)}var le;if(ja)e:{switch(e){case"compositionstart":var ue="onCompositionStart";break e;case"compositionend":ue="onCompositionEnd";break e;case"compositionupdate":ue="onCompositionUpdate";break e}ue=void 0}else mr?cd(e,i)&&(ue="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(ue="onCompositionStart");ue&&(od&&i.locale!=="ko"&&(mr||ue!=="onCompositionStart"?ue==="onCompositionEnd"&&mr&&(le=td()):(wn=F,ya="value"in wn?wn.value:wn.textContent,mr=!0)),ae=As(L,ue),0<ae.length&&(ue=new id(ue,e,null,i,F),V.push({event:ue,listeners:ae}),le?ue.data=le:(le=ud(i),le!==null&&(ue.data=le)))),(le=sy?oy(e,i):ay(e,i))&&(L=As(L,"onBeforeInput"),0<L.length&&(F=new id("onBeforeInput","beforeinput",null,i,F),V.push({event:F,listeners:L}),F.data=le))}Rd(V,t)})}function xi(e,t,i){return{instance:e,listener:t,currentTarget:i}}function As(e,t){for(var i=t+"Capture",o=[];e!==null;){var u=e,h=u.stateNode;u.tag===5&&h!==null&&(u=h,h=Jr(e,i),h!=null&&o.unshift(xi(e,h,u)),h=Jr(e,t),h!=null&&o.push(xi(e,h,u))),e=e.return}return o}function xr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ld(e,t,i,o,u){for(var h=t._reactName,x=[];i!==null&&i!==o;){var k=i,j=k.alternate,L=k.stateNode;if(j!==null&&j===o)break;k.tag===5&&L!==null&&(k=L,u?(j=Jr(i,h),j!=null&&x.unshift(xi(i,j,k))):u||(j=Jr(i,h),j!=null&&x.push(xi(i,j,k)))),i=i.return}x.length!==0&&e.push({event:t,listeners:x})}var by=/\r\n?/g,ky=/\u0000|\uFFFD/g;function Ad(e){return(typeof e=="string"?e:""+e).replace(by,`
`).replace(ky,"")}function Ds(e,t,i){if(t=Ad(t),Ad(e)!==t&&i)throw Error(s(425))}function Is(){}var Da=null,Ia=null;function za(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var _a=typeof setTimeout=="function"?setTimeout:void 0,jy=typeof clearTimeout=="function"?clearTimeout:void 0,Dd=typeof Promise=="function"?Promise:void 0,Sy=typeof queueMicrotask=="function"?queueMicrotask:typeof Dd<"u"?function(e){return Dd.resolve(null).then(e).catch(Ny)}:_a;function Ny(e){setTimeout(function(){throw e})}function Fa(e,t){var i=t,o=0;do{var u=i.nextSibling;if(e.removeChild(i),u&&u.nodeType===8)if(i=u.data,i==="/$"){if(o===0){e.removeChild(u),li(t);return}o--}else i!=="$"&&i!=="$?"&&i!=="$!"||o++;i=u}while(i);li(t)}function kn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Id(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"){if(t===0)return e;t--}else i==="/$"&&t++}e=e.previousSibling}return null}var vr=Math.random().toString(36).slice(2),$t="__reactFiber$"+vr,vi="__reactProps$"+vr,Jt="__reactContainer$"+vr,Va="__reactEvents$"+vr,Cy="__reactListeners$"+vr,Py="__reactHandles$"+vr;function Wn(e){var t=e[$t];if(t)return t;for(var i=e.parentNode;i;){if(t=i[Jt]||i[$t]){if(i=t.alternate,t.child!==null||i!==null&&i.child!==null)for(e=Id(e);e!==null;){if(i=e[$t])return i;e=Id(e)}return t}e=i,i=e.parentNode}return null}function wi(e){return e=e[$t]||e[Jt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function wr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(s(33))}function zs(e){return e[vi]||null}var Oa=[],br=-1;function jn(e){return{current:e}}function Le(e){0>br||(e.current=Oa[br],Oa[br]=null,br--)}function Re(e,t){br++,Oa[br]=e.current,e.current=t}var Sn={},tt=jn(Sn),dt=jn(!1),Hn=Sn;function kr(e,t){var i=e.type.contextTypes;if(!i)return Sn;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var u={},h;for(h in i)u[h]=t[h];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=u),u}function ft(e){return e=e.childContextTypes,e!=null}function _s(){Le(dt),Le(tt)}function zd(e,t,i){if(tt.current!==Sn)throw Error(s(168));Re(tt,t),Re(dt,i)}function _d(e,t,i){var o=e.stateNode;if(t=t.childContextTypes,typeof o.getChildContext!="function")return i;o=o.getChildContext();for(var u in o)if(!(u in t))throw Error(s(108,Se(e)||"Unknown",u));return X({},i,o)}function Fs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Sn,Hn=tt.current,Re(tt,e),Re(dt,dt.current),!0}function Fd(e,t,i){var o=e.stateNode;if(!o)throw Error(s(169));i?(e=_d(e,t,Hn),o.__reactInternalMemoizedMergedChildContext=e,Le(dt),Le(tt),Re(tt,e)):Le(dt),Re(dt,i)}var en=null,Vs=!1,Ba=!1;function Vd(e){en===null?en=[e]:en.push(e)}function Ey(e){Vs=!0,Vd(e)}function Nn(){if(!Ba&&en!==null){Ba=!0;var e=0,t=Ne;try{var i=en;for(Ne=1;e<i.length;e++){var o=i[e];do o=o(!0);while(o!==null)}en=null,Vs=!1}catch(u){throw en!==null&&(en=en.slice(e+1)),Bu(ca,Nn),u}finally{Ne=t,Ba=!1}}return null}var jr=[],Sr=0,Os=null,Bs=0,jt=[],St=0,Kn=null,tn=1,nn="";function Yn(e,t){jr[Sr++]=Bs,jr[Sr++]=Os,Os=e,Bs=t}function Od(e,t,i){jt[St++]=tn,jt[St++]=nn,jt[St++]=Kn,Kn=e;var o=tn;e=nn;var u=32-At(o)-1;o&=~(1<<u),i+=1;var h=32-At(t)+u;if(30<h){var x=u-u%5;h=(o&(1<<x)-1).toString(32),o>>=x,u-=x,tn=1<<32-At(t)+u|i<<u|o,nn=h+e}else tn=1<<h|i<<u|o,nn=e}function $a(e){e.return!==null&&(Yn(e,1),Od(e,1,0))}function Ua(e){for(;e===Os;)Os=jr[--Sr],jr[Sr]=null,Bs=jr[--Sr],jr[Sr]=null;for(;e===Kn;)Kn=jt[--St],jt[St]=null,nn=jt[--St],jt[St]=null,tn=jt[--St],jt[St]=null}var vt=null,wt=null,Ae=!1,It=null;function Bd(e,t){var i=Et(5,null,null,0);i.elementType="DELETED",i.stateNode=t,i.return=e,t=e.deletions,t===null?(e.deletions=[i],e.flags|=16):t.push(i)}function $d(e,t){switch(e.tag){case 5:var i=e.type;return t=t.nodeType!==1||i.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,vt=e,wt=kn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,vt=e,wt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(i=Kn!==null?{id:tn,overflow:nn}:null,e.memoizedState={dehydrated:t,treeContext:i,retryLane:1073741824},i=Et(18,null,null,0),i.stateNode=t,i.return=e,e.child=i,vt=e,wt=null,!0):!1;default:return!1}}function Wa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ha(e){if(Ae){var t=wt;if(t){var i=t;if(!$d(e,t)){if(Wa(e))throw Error(s(418));t=kn(i.nextSibling);var o=vt;t&&$d(e,t)?Bd(o,i):(e.flags=e.flags&-4097|2,Ae=!1,vt=e)}}else{if(Wa(e))throw Error(s(418));e.flags=e.flags&-4097|2,Ae=!1,vt=e}}}function Ud(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;vt=e}function $s(e){if(e!==vt)return!1;if(!Ae)return Ud(e),Ae=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!za(e.type,e.memoizedProps)),t&&(t=wt)){if(Wa(e))throw Wd(),Error(s(418));for(;t;)Bd(e,t),t=kn(t.nextSibling)}if(Ud(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"){if(t===0){wt=kn(e.nextSibling);break e}t--}else i!=="$"&&i!=="$!"&&i!=="$?"||t++}e=e.nextSibling}wt=null}}else wt=vt?kn(e.stateNode.nextSibling):null;return!0}function Wd(){for(var e=wt;e;)e=kn(e.nextSibling)}function Nr(){wt=vt=null,Ae=!1}function Ka(e){It===null?It=[e]:It.push(e)}var Ty=K.ReactCurrentBatchConfig;function bi(e,t,i){if(e=i.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(i._owner){if(i=i._owner,i){if(i.tag!==1)throw Error(s(309));var o=i.stateNode}if(!o)throw Error(s(147,e));var u=o,h=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===h?t.ref:(t=function(x){var k=u.refs;x===null?delete k[h]:k[h]=x},t._stringRef=h,t)}if(typeof e!="string")throw Error(s(284));if(!i._owner)throw Error(s(290,e))}return e}function Us(e,t){throw e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Hd(e){var t=e._init;return t(e._payload)}function Kd(e){function t(T,N){if(e){var R=T.deletions;R===null?(T.deletions=[N],T.flags|=16):R.push(N)}}function i(T,N){if(!e)return null;for(;N!==null;)t(T,N),N=N.sibling;return null}function o(T,N){for(T=new Map;N!==null;)N.key!==null?T.set(N.key,N):T.set(N.index,N),N=N.sibling;return T}function u(T,N){return T=An(T,N),T.index=0,T.sibling=null,T}function h(T,N,R){return T.index=R,e?(R=T.alternate,R!==null?(R=R.index,R<N?(T.flags|=2,N):R):(T.flags|=2,N)):(T.flags|=1048576,N)}function x(T){return e&&T.alternate===null&&(T.flags|=2),T}function k(T,N,R,B){return N===null||N.tag!==6?(N=_l(R,T.mode,B),N.return=T,N):(N=u(N,R),N.return=T,N)}function j(T,N,R,B){var ne=R.type;return ne===$?F(T,N,R.props.children,B,R.key):N!==null&&(N.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===de&&Hd(ne)===N.type)?(B=u(N,R.props),B.ref=bi(T,N,R),B.return=T,B):(B=po(R.type,R.key,R.props,null,T.mode,B),B.ref=bi(T,N,R),B.return=T,B)}function L(T,N,R,B){return N===null||N.tag!==4||N.stateNode.containerInfo!==R.containerInfo||N.stateNode.implementation!==R.implementation?(N=Fl(R,T.mode,B),N.return=T,N):(N=u(N,R.children||[]),N.return=T,N)}function F(T,N,R,B,ne){return N===null||N.tag!==7?(N=tr(R,T.mode,B,ne),N.return=T,N):(N=u(N,R),N.return=T,N)}function V(T,N,R){if(typeof N=="string"&&N!==""||typeof N=="number")return N=_l(""+N,T.mode,R),N.return=T,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case U:return R=po(N.type,N.key,N.props,null,T.mode,R),R.ref=bi(T,null,N),R.return=T,R;case G:return N=Fl(N,T.mode,R),N.return=T,N;case de:var B=N._init;return V(T,B(N._payload),R)}if($n(N)||ie(N))return N=tr(N,T.mode,R,null),N.return=T,N;Us(T,N)}return null}function z(T,N,R,B){var ne=N!==null?N.key:null;if(typeof R=="string"&&R!==""||typeof R=="number")return ne!==null?null:k(T,N,""+R,B);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case U:return R.key===ne?j(T,N,R,B):null;case G:return R.key===ne?L(T,N,R,B):null;case de:return ne=R._init,z(T,N,ne(R._payload),B)}if($n(R)||ie(R))return ne!==null?null:F(T,N,R,B,null);Us(T,R)}return null}function Z(T,N,R,B,ne){if(typeof B=="string"&&B!==""||typeof B=="number")return T=T.get(R)||null,k(N,T,""+B,ne);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case U:return T=T.get(B.key===null?R:B.key)||null,j(N,T,B,ne);case G:return T=T.get(B.key===null?R:B.key)||null,L(N,T,B,ne);case de:var ae=B._init;return Z(T,N,R,ae(B._payload),ne)}if($n(B)||ie(B))return T=T.get(R)||null,F(N,T,B,ne,null);Us(N,B)}return null}function J(T,N,R,B){for(var ne=null,ae=null,le=N,ue=N=0,Ze=null;le!==null&&ue<R.length;ue++){le.index>ue?(Ze=le,le=null):Ze=le.sibling;var ke=z(T,le,R[ue],B);if(ke===null){le===null&&(le=Ze);break}e&&le&&ke.alternate===null&&t(T,le),N=h(ke,N,ue),ae===null?ne=ke:ae.sibling=ke,ae=ke,le=Ze}if(ue===R.length)return i(T,le),Ae&&Yn(T,ue),ne;if(le===null){for(;ue<R.length;ue++)le=V(T,R[ue],B),le!==null&&(N=h(le,N,ue),ae===null?ne=le:ae.sibling=le,ae=le);return Ae&&Yn(T,ue),ne}for(le=o(T,le);ue<R.length;ue++)Ze=Z(le,T,ue,R[ue],B),Ze!==null&&(e&&Ze.alternate!==null&&le.delete(Ze.key===null?ue:Ze.key),N=h(Ze,N,ue),ae===null?ne=Ze:ae.sibling=Ze,ae=Ze);return e&&le.forEach(function(Dn){return t(T,Dn)}),Ae&&Yn(T,ue),ne}function te(T,N,R,B){var ne=ie(R);if(typeof ne!="function")throw Error(s(150));if(R=ne.call(R),R==null)throw Error(s(151));for(var ae=ne=null,le=N,ue=N=0,Ze=null,ke=R.next();le!==null&&!ke.done;ue++,ke=R.next()){le.index>ue?(Ze=le,le=null):Ze=le.sibling;var Dn=z(T,le,ke.value,B);if(Dn===null){le===null&&(le=Ze);break}e&&le&&Dn.alternate===null&&t(T,le),N=h(Dn,N,ue),ae===null?ne=Dn:ae.sibling=Dn,ae=Dn,le=Ze}if(ke.done)return i(T,le),Ae&&Yn(T,ue),ne;if(le===null){for(;!ke.done;ue++,ke=R.next())ke=V(T,ke.value,B),ke!==null&&(N=h(ke,N,ue),ae===null?ne=ke:ae.sibling=ke,ae=ke);return Ae&&Yn(T,ue),ne}for(le=o(T,le);!ke.done;ue++,ke=R.next())ke=Z(le,T,ue,ke.value,B),ke!==null&&(e&&ke.alternate!==null&&le.delete(ke.key===null?ue:ke.key),N=h(ke,N,ue),ae===null?ne=ke:ae.sibling=ke,ae=ke);return e&&le.forEach(function(l1){return t(T,l1)}),Ae&&Yn(T,ue),ne}function $e(T,N,R,B){if(typeof R=="object"&&R!==null&&R.type===$&&R.key===null&&(R=R.props.children),typeof R=="object"&&R!==null){switch(R.$$typeof){case U:e:{for(var ne=R.key,ae=N;ae!==null;){if(ae.key===ne){if(ne=R.type,ne===$){if(ae.tag===7){i(T,ae.sibling),N=u(ae,R.props.children),N.return=T,T=N;break e}}else if(ae.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===de&&Hd(ne)===ae.type){i(T,ae.sibling),N=u(ae,R.props),N.ref=bi(T,ae,R),N.return=T,T=N;break e}i(T,ae);break}else t(T,ae);ae=ae.sibling}R.type===$?(N=tr(R.props.children,T.mode,B,R.key),N.return=T,T=N):(B=po(R.type,R.key,R.props,null,T.mode,B),B.ref=bi(T,N,R),B.return=T,T=B)}return x(T);case G:e:{for(ae=R.key;N!==null;){if(N.key===ae)if(N.tag===4&&N.stateNode.containerInfo===R.containerInfo&&N.stateNode.implementation===R.implementation){i(T,N.sibling),N=u(N,R.children||[]),N.return=T,T=N;break e}else{i(T,N);break}else t(T,N);N=N.sibling}N=Fl(R,T.mode,B),N.return=T,T=N}return x(T);case de:return ae=R._init,$e(T,N,ae(R._payload),B)}if($n(R))return J(T,N,R,B);if(ie(R))return te(T,N,R,B);Us(T,R)}return typeof R=="string"&&R!==""||typeof R=="number"?(R=""+R,N!==null&&N.tag===6?(i(T,N.sibling),N=u(N,R),N.return=T,T=N):(i(T,N),N=_l(R,T.mode,B),N.return=T,T=N),x(T)):i(T,N)}return $e}var Cr=Kd(!0),Yd=Kd(!1),Ws=jn(null),Hs=null,Pr=null,Ya=null;function Ga(){Ya=Pr=Hs=null}function Xa(e){var t=Ws.current;Le(Ws),e._currentValue=t}function Qa(e,t,i){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===i)break;e=e.return}}function Er(e,t){Hs=e,Ya=Pr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(ht=!0),e.firstContext=null)}function Nt(e){var t=e._currentValue;if(Ya!==e)if(e={context:e,memoizedValue:t,next:null},Pr===null){if(Hs===null)throw Error(s(308));Pr=e,Hs.dependencies={lanes:0,firstContext:e}}else Pr=Pr.next=e;return t}var Gn=null;function Za(e){Gn===null?Gn=[e]:Gn.push(e)}function Gd(e,t,i,o){var u=t.interleaved;return u===null?(i.next=i,Za(t)):(i.next=u.next,u.next=i),t.interleaved=i,rn(e,o)}function rn(e,t){e.lanes|=t;var i=e.alternate;for(i!==null&&(i.lanes|=t),i=e,e=e.return;e!==null;)e.childLanes|=t,i=e.alternate,i!==null&&(i.childLanes|=t),i=e,e=e.return;return i.tag===3?i.stateNode:null}var Cn=!1;function qa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Xd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function sn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Pn(e,t,i){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(we&2)!==0){var u=o.pending;return u===null?t.next=t:(t.next=u.next,u.next=t),o.pending=t,rn(e,i)}return u=o.interleaved,u===null?(t.next=t,Za(o)):(t.next=u.next,u.next=t),o.interleaved=t,rn(e,i)}function Ks(e,t,i){if(t=t.updateQueue,t!==null&&(t=t.shared,(i&4194240)!==0)){var o=t.lanes;o&=e.pendingLanes,i|=o,t.lanes=i,fa(e,i)}}function Qd(e,t){var i=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,i===o)){var u=null,h=null;if(i=i.firstBaseUpdate,i!==null){do{var x={eventTime:i.eventTime,lane:i.lane,tag:i.tag,payload:i.payload,callback:i.callback,next:null};h===null?u=h=x:h=h.next=x,i=i.next}while(i!==null);h===null?u=h=t:h=h.next=t}else u=h=t;i={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:o.shared,effects:o.effects},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=t:e.next=t,i.lastBaseUpdate=t}function Ys(e,t,i,o){var u=e.updateQueue;Cn=!1;var h=u.firstBaseUpdate,x=u.lastBaseUpdate,k=u.shared.pending;if(k!==null){u.shared.pending=null;var j=k,L=j.next;j.next=null,x===null?h=L:x.next=L,x=j;var F=e.alternate;F!==null&&(F=F.updateQueue,k=F.lastBaseUpdate,k!==x&&(k===null?F.firstBaseUpdate=L:k.next=L,F.lastBaseUpdate=j))}if(h!==null){var V=u.baseState;x=0,F=L=j=null,k=h;do{var z=k.lane,Z=k.eventTime;if((o&z)===z){F!==null&&(F=F.next={eventTime:Z,lane:0,tag:k.tag,payload:k.payload,callback:k.callback,next:null});e:{var J=e,te=k;switch(z=t,Z=i,te.tag){case 1:if(J=te.payload,typeof J=="function"){V=J.call(Z,V,z);break e}V=J;break e;case 3:J.flags=J.flags&-65537|128;case 0:if(J=te.payload,z=typeof J=="function"?J.call(Z,V,z):J,z==null)break e;V=X({},V,z);break e;case 2:Cn=!0}}k.callback!==null&&k.lane!==0&&(e.flags|=64,z=u.effects,z===null?u.effects=[k]:z.push(k))}else Z={eventTime:Z,lane:z,tag:k.tag,payload:k.payload,callback:k.callback,next:null},F===null?(L=F=Z,j=V):F=F.next=Z,x|=z;if(k=k.next,k===null){if(k=u.shared.pending,k===null)break;z=k,k=z.next,z.next=null,u.lastBaseUpdate=z,u.shared.pending=null}}while(!0);if(F===null&&(j=V),u.baseState=j,u.firstBaseUpdate=L,u.lastBaseUpdate=F,t=u.shared.interleaved,t!==null){u=t;do x|=u.lane,u=u.next;while(u!==t)}else h===null&&(u.shared.lanes=0);Zn|=x,e.lanes=x,e.memoizedState=V}}function Zd(e,t,i){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var o=e[t],u=o.callback;if(u!==null){if(o.callback=null,o=i,typeof u!="function")throw Error(s(191,u));u.call(o)}}}var ki={},Ut=jn(ki),ji=jn(ki),Si=jn(ki);function Xn(e){if(e===ki)throw Error(s(174));return e}function Ja(e,t){switch(Re(Si,t),Re(ji,e),Re(Ut,ki),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ee(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ee(t,e)}Le(Ut),Re(Ut,t)}function Tr(){Le(Ut),Le(ji),Le(Si)}function qd(e){Xn(Si.current);var t=Xn(Ut.current),i=ee(t,e.type);t!==i&&(Re(ji,e),Re(Ut,i))}function el(e){ji.current===e&&(Le(Ut),Le(ji))}var Ie=jn(0);function Gs(e){for(var t=e;t!==null;){if(t.tag===13){var i=t.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||i.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var tl=[];function nl(){for(var e=0;e<tl.length;e++)tl[e]._workInProgressVersionPrimary=null;tl.length=0}var Xs=K.ReactCurrentDispatcher,rl=K.ReactCurrentBatchConfig,Qn=0,ze=null,Ke=null,Xe=null,Qs=!1,Ni=!1,Ci=0,Ry=0;function nt(){throw Error(s(321))}function il(e,t){if(t===null)return!1;for(var i=0;i<t.length&&i<e.length;i++)if(!Dt(e[i],t[i]))return!1;return!0}function sl(e,t,i,o,u,h){if(Qn=h,ze=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Xs.current=e===null||e.memoizedState===null?Dy:Iy,e=i(o,u),Ni){h=0;do{if(Ni=!1,Ci=0,25<=h)throw Error(s(301));h+=1,Xe=Ke=null,t.updateQueue=null,Xs.current=zy,e=i(o,u)}while(Ni)}if(Xs.current=Js,t=Ke!==null&&Ke.next!==null,Qn=0,Xe=Ke=ze=null,Qs=!1,t)throw Error(s(300));return e}function ol(){var e=Ci!==0;return Ci=0,e}function Wt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xe===null?ze.memoizedState=Xe=e:Xe=Xe.next=e,Xe}function Ct(){if(Ke===null){var e=ze.alternate;e=e!==null?e.memoizedState:null}else e=Ke.next;var t=Xe===null?ze.memoizedState:Xe.next;if(t!==null)Xe=t,Ke=e;else{if(e===null)throw Error(s(310));Ke=e,e={memoizedState:Ke.memoizedState,baseState:Ke.baseState,baseQueue:Ke.baseQueue,queue:Ke.queue,next:null},Xe===null?ze.memoizedState=Xe=e:Xe=Xe.next=e}return Xe}function Pi(e,t){return typeof t=="function"?t(e):t}function al(e){var t=Ct(),i=t.queue;if(i===null)throw Error(s(311));i.lastRenderedReducer=e;var o=Ke,u=o.baseQueue,h=i.pending;if(h!==null){if(u!==null){var x=u.next;u.next=h.next,h.next=x}o.baseQueue=u=h,i.pending=null}if(u!==null){h=u.next,o=o.baseState;var k=x=null,j=null,L=h;do{var F=L.lane;if((Qn&F)===F)j!==null&&(j=j.next={lane:0,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null}),o=L.hasEagerState?L.eagerState:e(o,L.action);else{var V={lane:F,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null};j===null?(k=j=V,x=o):j=j.next=V,ze.lanes|=F,Zn|=F}L=L.next}while(L!==null&&L!==h);j===null?x=o:j.next=k,Dt(o,t.memoizedState)||(ht=!0),t.memoizedState=o,t.baseState=x,t.baseQueue=j,i.lastRenderedState=o}if(e=i.interleaved,e!==null){u=e;do h=u.lane,ze.lanes|=h,Zn|=h,u=u.next;while(u!==e)}else u===null&&(i.lanes=0);return[t.memoizedState,i.dispatch]}function ll(e){var t=Ct(),i=t.queue;if(i===null)throw Error(s(311));i.lastRenderedReducer=e;var o=i.dispatch,u=i.pending,h=t.memoizedState;if(u!==null){i.pending=null;var x=u=u.next;do h=e(h,x.action),x=x.next;while(x!==u);Dt(h,t.memoizedState)||(ht=!0),t.memoizedState=h,t.baseQueue===null&&(t.baseState=h),i.lastRenderedState=h}return[h,o]}function Jd(){}function ef(e,t){var i=ze,o=Ct(),u=t(),h=!Dt(o.memoizedState,u);if(h&&(o.memoizedState=u,ht=!0),o=o.queue,cl(rf.bind(null,i,o,e),[e]),o.getSnapshot!==t||h||Xe!==null&&Xe.memoizedState.tag&1){if(i.flags|=2048,Ei(9,nf.bind(null,i,o,u,t),void 0,null),Qe===null)throw Error(s(349));(Qn&30)!==0||tf(i,t,u)}return u}function tf(e,t,i){e.flags|=16384,e={getSnapshot:t,value:i},t=ze.updateQueue,t===null?(t={lastEffect:null,stores:null},ze.updateQueue=t,t.stores=[e]):(i=t.stores,i===null?t.stores=[e]:i.push(e))}function nf(e,t,i,o){t.value=i,t.getSnapshot=o,sf(t)&&of(e)}function rf(e,t,i){return i(function(){sf(t)&&of(e)})}function sf(e){var t=e.getSnapshot;e=e.value;try{var i=t();return!Dt(e,i)}catch{return!0}}function of(e){var t=rn(e,1);t!==null&&Vt(t,e,1,-1)}function af(e){var t=Wt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Pi,lastRenderedState:e},t.queue=e,e=e.dispatch=Ay.bind(null,ze,e),[t.memoizedState,e]}function Ei(e,t,i,o){return e={tag:e,create:t,destroy:i,deps:o,next:null},t=ze.updateQueue,t===null?(t={lastEffect:null,stores:null},ze.updateQueue=t,t.lastEffect=e.next=e):(i=t.lastEffect,i===null?t.lastEffect=e.next=e:(o=i.next,i.next=e,e.next=o,t.lastEffect=e)),e}function lf(){return Ct().memoizedState}function Zs(e,t,i,o){var u=Wt();ze.flags|=e,u.memoizedState=Ei(1|t,i,void 0,o===void 0?null:o)}function qs(e,t,i,o){var u=Ct();o=o===void 0?null:o;var h=void 0;if(Ke!==null){var x=Ke.memoizedState;if(h=x.destroy,o!==null&&il(o,x.deps)){u.memoizedState=Ei(t,i,h,o);return}}ze.flags|=e,u.memoizedState=Ei(1|t,i,h,o)}function cf(e,t){return Zs(8390656,8,e,t)}function cl(e,t){return qs(2048,8,e,t)}function uf(e,t){return qs(4,2,e,t)}function df(e,t){return qs(4,4,e,t)}function ff(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function hf(e,t,i){return i=i!=null?i.concat([e]):null,qs(4,4,ff.bind(null,t,e),i)}function ul(){}function pf(e,t){var i=Ct();t=t===void 0?null:t;var o=i.memoizedState;return o!==null&&t!==null&&il(t,o[1])?o[0]:(i.memoizedState=[e,t],e)}function mf(e,t){var i=Ct();t=t===void 0?null:t;var o=i.memoizedState;return o!==null&&t!==null&&il(t,o[1])?o[0]:(e=e(),i.memoizedState=[e,t],e)}function gf(e,t,i){return(Qn&21)===0?(e.baseState&&(e.baseState=!1,ht=!0),e.memoizedState=i):(Dt(i,t)||(i=Hu(),ze.lanes|=i,Zn|=i,e.baseState=!0),t)}function My(e,t){var i=Ne;Ne=i!==0&&4>i?i:4,e(!0);var o=rl.transition;rl.transition={};try{e(!1),t()}finally{Ne=i,rl.transition=o}}function yf(){return Ct().memoizedState}function Ly(e,t,i){var o=Mn(e);if(i={lane:o,action:i,hasEagerState:!1,eagerState:null,next:null},xf(e))vf(t,i);else if(i=Gd(e,t,i,o),i!==null){var u=lt();Vt(i,e,o,u),wf(i,t,o)}}function Ay(e,t,i){var o=Mn(e),u={lane:o,action:i,hasEagerState:!1,eagerState:null,next:null};if(xf(e))vf(t,u);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=t.lastRenderedReducer,h!==null))try{var x=t.lastRenderedState,k=h(x,i);if(u.hasEagerState=!0,u.eagerState=k,Dt(k,x)){var j=t.interleaved;j===null?(u.next=u,Za(t)):(u.next=j.next,j.next=u),t.interleaved=u;return}}catch{}finally{}i=Gd(e,t,u,o),i!==null&&(u=lt(),Vt(i,e,o,u),wf(i,t,o))}}function xf(e){var t=e.alternate;return e===ze||t!==null&&t===ze}function vf(e,t){Ni=Qs=!0;var i=e.pending;i===null?t.next=t:(t.next=i.next,i.next=t),e.pending=t}function wf(e,t,i){if((i&4194240)!==0){var o=t.lanes;o&=e.pendingLanes,i|=o,t.lanes=i,fa(e,i)}}var Js={readContext:Nt,useCallback:nt,useContext:nt,useEffect:nt,useImperativeHandle:nt,useInsertionEffect:nt,useLayoutEffect:nt,useMemo:nt,useReducer:nt,useRef:nt,useState:nt,useDebugValue:nt,useDeferredValue:nt,useTransition:nt,useMutableSource:nt,useSyncExternalStore:nt,useId:nt,unstable_isNewReconciler:!1},Dy={readContext:Nt,useCallback:function(e,t){return Wt().memoizedState=[e,t===void 0?null:t],e},useContext:Nt,useEffect:cf,useImperativeHandle:function(e,t,i){return i=i!=null?i.concat([e]):null,Zs(4194308,4,ff.bind(null,t,e),i)},useLayoutEffect:function(e,t){return Zs(4194308,4,e,t)},useInsertionEffect:function(e,t){return Zs(4,2,e,t)},useMemo:function(e,t){var i=Wt();return t=t===void 0?null:t,e=e(),i.memoizedState=[e,t],e},useReducer:function(e,t,i){var o=Wt();return t=i!==void 0?i(t):t,o.memoizedState=o.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},o.queue=e,e=e.dispatch=Ly.bind(null,ze,e),[o.memoizedState,e]},useRef:function(e){var t=Wt();return e={current:e},t.memoizedState=e},useState:af,useDebugValue:ul,useDeferredValue:function(e){return Wt().memoizedState=e},useTransition:function(){var e=af(!1),t=e[0];return e=My.bind(null,e[1]),Wt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,i){var o=ze,u=Wt();if(Ae){if(i===void 0)throw Error(s(407));i=i()}else{if(i=t(),Qe===null)throw Error(s(349));(Qn&30)!==0||tf(o,t,i)}u.memoizedState=i;var h={value:i,getSnapshot:t};return u.queue=h,cf(rf.bind(null,o,h,e),[e]),o.flags|=2048,Ei(9,nf.bind(null,o,h,i,t),void 0,null),i},useId:function(){var e=Wt(),t=Qe.identifierPrefix;if(Ae){var i=nn,o=tn;i=(o&~(1<<32-At(o)-1)).toString(32)+i,t=":"+t+"R"+i,i=Ci++,0<i&&(t+="H"+i.toString(32)),t+=":"}else i=Ry++,t=":"+t+"r"+i.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Iy={readContext:Nt,useCallback:pf,useContext:Nt,useEffect:cl,useImperativeHandle:hf,useInsertionEffect:uf,useLayoutEffect:df,useMemo:mf,useReducer:al,useRef:lf,useState:function(){return al(Pi)},useDebugValue:ul,useDeferredValue:function(e){var t=Ct();return gf(t,Ke.memoizedState,e)},useTransition:function(){var e=al(Pi)[0],t=Ct().memoizedState;return[e,t]},useMutableSource:Jd,useSyncExternalStore:ef,useId:yf,unstable_isNewReconciler:!1},zy={readContext:Nt,useCallback:pf,useContext:Nt,useEffect:cl,useImperativeHandle:hf,useInsertionEffect:uf,useLayoutEffect:df,useMemo:mf,useReducer:ll,useRef:lf,useState:function(){return ll(Pi)},useDebugValue:ul,useDeferredValue:function(e){var t=Ct();return Ke===null?t.memoizedState=e:gf(t,Ke.memoizedState,e)},useTransition:function(){var e=ll(Pi)[0],t=Ct().memoizedState;return[e,t]},useMutableSource:Jd,useSyncExternalStore:ef,useId:yf,unstable_isNewReconciler:!1};function zt(e,t){if(e&&e.defaultProps){t=X({},t),e=e.defaultProps;for(var i in e)t[i]===void 0&&(t[i]=e[i]);return t}return t}function dl(e,t,i,o){t=e.memoizedState,i=i(o,t),i=i==null?t:X({},t,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var eo={isMounted:function(e){return(e=e._reactInternals)?Un(e)===e:!1},enqueueSetState:function(e,t,i){e=e._reactInternals;var o=lt(),u=Mn(e),h=sn(o,u);h.payload=t,i!=null&&(h.callback=i),t=Pn(e,h,u),t!==null&&(Vt(t,e,u,o),Ks(t,e,u))},enqueueReplaceState:function(e,t,i){e=e._reactInternals;var o=lt(),u=Mn(e),h=sn(o,u);h.tag=1,h.payload=t,i!=null&&(h.callback=i),t=Pn(e,h,u),t!==null&&(Vt(t,e,u,o),Ks(t,e,u))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var i=lt(),o=Mn(e),u=sn(i,o);u.tag=2,t!=null&&(u.callback=t),t=Pn(e,u,o),t!==null&&(Vt(t,e,o,i),Ks(t,e,o))}};function bf(e,t,i,o,u,h,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,h,x):t.prototype&&t.prototype.isPureReactComponent?!pi(i,o)||!pi(u,h):!0}function kf(e,t,i){var o=!1,u=Sn,h=t.contextType;return typeof h=="object"&&h!==null?h=Nt(h):(u=ft(t)?Hn:tt.current,o=t.contextTypes,h=(o=o!=null)?kr(e,u):Sn),t=new t(i,h),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=eo,e.stateNode=t,t._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=u,e.__reactInternalMemoizedMaskedChildContext=h),t}function jf(e,t,i,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(i,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(i,o),t.state!==e&&eo.enqueueReplaceState(t,t.state,null)}function fl(e,t,i,o){var u=e.stateNode;u.props=i,u.state=e.memoizedState,u.refs={},qa(e);var h=t.contextType;typeof h=="object"&&h!==null?u.context=Nt(h):(h=ft(t)?Hn:tt.current,u.context=kr(e,h)),u.state=e.memoizedState,h=t.getDerivedStateFromProps,typeof h=="function"&&(dl(e,t,h,i),u.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(t=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),t!==u.state&&eo.enqueueReplaceState(u,u.state,null),Ys(e,i,u,o),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308)}function Rr(e,t){try{var i="",o=t;do i+=me(o),o=o.return;while(o);var u=i}catch(h){u=`
Error generating stack: `+h.message+`
`+h.stack}return{value:e,source:t,stack:u,digest:null}}function hl(e,t,i){return{value:e,source:null,stack:i??null,digest:t??null}}function pl(e,t){try{console.error(t.value)}catch(i){setTimeout(function(){throw i})}}var _y=typeof WeakMap=="function"?WeakMap:Map;function Sf(e,t,i){i=sn(-1,i),i.tag=3,i.payload={element:null};var o=t.value;return i.callback=function(){ao||(ao=!0,Tl=o),pl(e,t)},i}function Nf(e,t,i){i=sn(-1,i),i.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var u=t.value;i.payload=function(){return o(u)},i.callback=function(){pl(e,t)}}var h=e.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(i.callback=function(){pl(e,t),typeof o!="function"&&(Tn===null?Tn=new Set([this]):Tn.add(this));var x=t.stack;this.componentDidCatch(t.value,{componentStack:x!==null?x:""})}),i}function Cf(e,t,i){var o=e.pingCache;if(o===null){o=e.pingCache=new _y;var u=new Set;o.set(t,u)}else u=o.get(t),u===void 0&&(u=new Set,o.set(t,u));u.has(i)||(u.add(i),e=Zy.bind(null,e,t,i),t.then(e,e))}function Pf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ef(e,t,i,o,u){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,i.flags|=131072,i.flags&=-52805,i.tag===1&&(i.alternate===null?i.tag=17:(t=sn(-1,1),t.tag=2,Pn(i,t,1))),i.lanes|=1),e):(e.flags|=65536,e.lanes=u,e)}var Fy=K.ReactCurrentOwner,ht=!1;function at(e,t,i,o){t.child=e===null?Yd(t,null,i,o):Cr(t,e.child,i,o)}function Tf(e,t,i,o,u){i=i.render;var h=t.ref;return Er(t,u),o=sl(e,t,i,o,h,u),i=ol(),e!==null&&!ht?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~u,on(e,t,u)):(Ae&&i&&$a(t),t.flags|=1,at(e,t,o,u),t.child)}function Rf(e,t,i,o,u){if(e===null){var h=i.type;return typeof h=="function"&&!zl(h)&&h.defaultProps===void 0&&i.compare===null&&i.defaultProps===void 0?(t.tag=15,t.type=h,Mf(e,t,h,o,u)):(e=po(i.type,null,o,t,t.mode,u),e.ref=t.ref,e.return=t,t.child=e)}if(h=e.child,(e.lanes&u)===0){var x=h.memoizedProps;if(i=i.compare,i=i!==null?i:pi,i(x,o)&&e.ref===t.ref)return on(e,t,u)}return t.flags|=1,e=An(h,o),e.ref=t.ref,e.return=t,t.child=e}function Mf(e,t,i,o,u){if(e!==null){var h=e.memoizedProps;if(pi(h,o)&&e.ref===t.ref)if(ht=!1,t.pendingProps=o=h,(e.lanes&u)!==0)(e.flags&131072)!==0&&(ht=!0);else return t.lanes=e.lanes,on(e,t,u)}return ml(e,t,i,o,u)}function Lf(e,t,i){var o=t.pendingProps,u=o.children,h=e!==null?e.memoizedState:null;if(o.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Re(Lr,bt),bt|=i;else{if((i&1073741824)===0)return e=h!==null?h.baseLanes|i:i,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Re(Lr,bt),bt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=h!==null?h.baseLanes:i,Re(Lr,bt),bt|=o}else h!==null?(o=h.baseLanes|i,t.memoizedState=null):o=i,Re(Lr,bt),bt|=o;return at(e,t,u,i),t.child}function Af(e,t){var i=t.ref;(e===null&&i!==null||e!==null&&e.ref!==i)&&(t.flags|=512,t.flags|=2097152)}function ml(e,t,i,o,u){var h=ft(i)?Hn:tt.current;return h=kr(t,h),Er(t,u),i=sl(e,t,i,o,h,u),o=ol(),e!==null&&!ht?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~u,on(e,t,u)):(Ae&&o&&$a(t),t.flags|=1,at(e,t,i,u),t.child)}function Df(e,t,i,o,u){if(ft(i)){var h=!0;Fs(t)}else h=!1;if(Er(t,u),t.stateNode===null)no(e,t),kf(t,i,o),fl(t,i,o,u),o=!0;else if(e===null){var x=t.stateNode,k=t.memoizedProps;x.props=k;var j=x.context,L=i.contextType;typeof L=="object"&&L!==null?L=Nt(L):(L=ft(i)?Hn:tt.current,L=kr(t,L));var F=i.getDerivedStateFromProps,V=typeof F=="function"||typeof x.getSnapshotBeforeUpdate=="function";V||typeof x.UNSAFE_componentWillReceiveProps!="function"&&typeof x.componentWillReceiveProps!="function"||(k!==o||j!==L)&&jf(t,x,o,L),Cn=!1;var z=t.memoizedState;x.state=z,Ys(t,o,x,u),j=t.memoizedState,k!==o||z!==j||dt.current||Cn?(typeof F=="function"&&(dl(t,i,F,o),j=t.memoizedState),(k=Cn||bf(t,i,k,o,z,j,L))?(V||typeof x.UNSAFE_componentWillMount!="function"&&typeof x.componentWillMount!="function"||(typeof x.componentWillMount=="function"&&x.componentWillMount(),typeof x.UNSAFE_componentWillMount=="function"&&x.UNSAFE_componentWillMount()),typeof x.componentDidMount=="function"&&(t.flags|=4194308)):(typeof x.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=j),x.props=o,x.state=j,x.context=L,o=k):(typeof x.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{x=t.stateNode,Xd(e,t),k=t.memoizedProps,L=t.type===t.elementType?k:zt(t.type,k),x.props=L,V=t.pendingProps,z=x.context,j=i.contextType,typeof j=="object"&&j!==null?j=Nt(j):(j=ft(i)?Hn:tt.current,j=kr(t,j));var Z=i.getDerivedStateFromProps;(F=typeof Z=="function"||typeof x.getSnapshotBeforeUpdate=="function")||typeof x.UNSAFE_componentWillReceiveProps!="function"&&typeof x.componentWillReceiveProps!="function"||(k!==V||z!==j)&&jf(t,x,o,j),Cn=!1,z=t.memoizedState,x.state=z,Ys(t,o,x,u);var J=t.memoizedState;k!==V||z!==J||dt.current||Cn?(typeof Z=="function"&&(dl(t,i,Z,o),J=t.memoizedState),(L=Cn||bf(t,i,L,o,z,J,j)||!1)?(F||typeof x.UNSAFE_componentWillUpdate!="function"&&typeof x.componentWillUpdate!="function"||(typeof x.componentWillUpdate=="function"&&x.componentWillUpdate(o,J,j),typeof x.UNSAFE_componentWillUpdate=="function"&&x.UNSAFE_componentWillUpdate(o,J,j)),typeof x.componentDidUpdate=="function"&&(t.flags|=4),typeof x.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof x.componentDidUpdate!="function"||k===e.memoizedProps&&z===e.memoizedState||(t.flags|=4),typeof x.getSnapshotBeforeUpdate!="function"||k===e.memoizedProps&&z===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=J),x.props=o,x.state=J,x.context=j,o=L):(typeof x.componentDidUpdate!="function"||k===e.memoizedProps&&z===e.memoizedState||(t.flags|=4),typeof x.getSnapshotBeforeUpdate!="function"||k===e.memoizedProps&&z===e.memoizedState||(t.flags|=1024),o=!1)}return gl(e,t,i,o,h,u)}function gl(e,t,i,o,u,h){Af(e,t);var x=(t.flags&128)!==0;if(!o&&!x)return u&&Fd(t,i,!1),on(e,t,h);o=t.stateNode,Fy.current=t;var k=x&&typeof i.getDerivedStateFromError!="function"?null:o.render();return t.flags|=1,e!==null&&x?(t.child=Cr(t,e.child,null,h),t.child=Cr(t,null,k,h)):at(e,t,k,h),t.memoizedState=o.state,u&&Fd(t,i,!0),t.child}function If(e){var t=e.stateNode;t.pendingContext?zd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&zd(e,t.context,!1),Ja(e,t.containerInfo)}function zf(e,t,i,o,u){return Nr(),Ka(u),t.flags|=256,at(e,t,i,o),t.child}var yl={dehydrated:null,treeContext:null,retryLane:0};function xl(e){return{baseLanes:e,cachePool:null,transitions:null}}function _f(e,t,i){var o=t.pendingProps,u=Ie.current,h=!1,x=(t.flags&128)!==0,k;if((k=x)||(k=e!==null&&e.memoizedState===null?!1:(u&2)!==0),k?(h=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(u|=1),Re(Ie,u&1),e===null)return Ha(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(x=o.children,e=o.fallback,h?(o=t.mode,h=t.child,x={mode:"hidden",children:x},(o&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=x):h=mo(x,o,0,null),e=tr(e,o,i,null),h.return=t,e.return=t,h.sibling=e,t.child=h,t.child.memoizedState=xl(i),t.memoizedState=yl,e):vl(t,x));if(u=e.memoizedState,u!==null&&(k=u.dehydrated,k!==null))return Vy(e,t,x,o,k,u,i);if(h){h=o.fallback,x=t.mode,u=e.child,k=u.sibling;var j={mode:"hidden",children:o.children};return(x&1)===0&&t.child!==u?(o=t.child,o.childLanes=0,o.pendingProps=j,t.deletions=null):(o=An(u,j),o.subtreeFlags=u.subtreeFlags&14680064),k!==null?h=An(k,h):(h=tr(h,x,i,null),h.flags|=2),h.return=t,o.return=t,o.sibling=h,t.child=o,o=h,h=t.child,x=e.child.memoizedState,x=x===null?xl(i):{baseLanes:x.baseLanes|i,cachePool:null,transitions:x.transitions},h.memoizedState=x,h.childLanes=e.childLanes&~i,t.memoizedState=yl,o}return h=e.child,e=h.sibling,o=An(h,{mode:"visible",children:o.children}),(t.mode&1)===0&&(o.lanes=i),o.return=t,o.sibling=null,e!==null&&(i=t.deletions,i===null?(t.deletions=[e],t.flags|=16):i.push(e)),t.child=o,t.memoizedState=null,o}function vl(e,t){return t=mo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function to(e,t,i,o){return o!==null&&Ka(o),Cr(t,e.child,null,i),e=vl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Vy(e,t,i,o,u,h,x){if(i)return t.flags&256?(t.flags&=-257,o=hl(Error(s(422))),to(e,t,x,o)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(h=o.fallback,u=t.mode,o=mo({mode:"visible",children:o.children},u,0,null),h=tr(h,u,x,null),h.flags|=2,o.return=t,h.return=t,o.sibling=h,t.child=o,(t.mode&1)!==0&&Cr(t,e.child,null,x),t.child.memoizedState=xl(x),t.memoizedState=yl,h);if((t.mode&1)===0)return to(e,t,x,null);if(u.data==="$!"){if(o=u.nextSibling&&u.nextSibling.dataset,o)var k=o.dgst;return o=k,h=Error(s(419)),o=hl(h,o,void 0),to(e,t,x,o)}if(k=(x&e.childLanes)!==0,ht||k){if(o=Qe,o!==null){switch(x&-x){case 4:u=2;break;case 16:u=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:u=32;break;case 536870912:u=268435456;break;default:u=0}u=(u&(o.suspendedLanes|x))!==0?0:u,u!==0&&u!==h.retryLane&&(h.retryLane=u,rn(e,u),Vt(o,e,u,-1))}return Il(),o=hl(Error(s(421))),to(e,t,x,o)}return u.data==="$?"?(t.flags|=128,t.child=e.child,t=qy.bind(null,e),u._reactRetry=t,null):(e=h.treeContext,wt=kn(u.nextSibling),vt=t,Ae=!0,It=null,e!==null&&(jt[St++]=tn,jt[St++]=nn,jt[St++]=Kn,tn=e.id,nn=e.overflow,Kn=t),t=vl(t,o.children),t.flags|=4096,t)}function Ff(e,t,i){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),Qa(e.return,t,i)}function wl(e,t,i,o,u){var h=e.memoizedState;h===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:i,tailMode:u}:(h.isBackwards=t,h.rendering=null,h.renderingStartTime=0,h.last=o,h.tail=i,h.tailMode=u)}function Vf(e,t,i){var o=t.pendingProps,u=o.revealOrder,h=o.tail;if(at(e,t,o.children,i),o=Ie.current,(o&2)!==0)o=o&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ff(e,i,t);else if(e.tag===19)Ff(e,i,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(Re(Ie,o),(t.mode&1)===0)t.memoizedState=null;else switch(u){case"forwards":for(i=t.child,u=null;i!==null;)e=i.alternate,e!==null&&Gs(e)===null&&(u=i),i=i.sibling;i=u,i===null?(u=t.child,t.child=null):(u=i.sibling,i.sibling=null),wl(t,!1,u,i,h);break;case"backwards":for(i=null,u=t.child,t.child=null;u!==null;){if(e=u.alternate,e!==null&&Gs(e)===null){t.child=u;break}e=u.sibling,u.sibling=i,i=u,u=e}wl(t,!0,i,null,h);break;case"together":wl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function no(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function on(e,t,i){if(e!==null&&(t.dependencies=e.dependencies),Zn|=t.lanes,(i&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,i=An(e,e.pendingProps),t.child=i,i.return=t;e.sibling!==null;)e=e.sibling,i=i.sibling=An(e,e.pendingProps),i.return=t;i.sibling=null}return t.child}function Oy(e,t,i){switch(t.tag){case 3:If(t),Nr();break;case 5:qd(t);break;case 1:ft(t.type)&&Fs(t);break;case 4:Ja(t,t.stateNode.containerInfo);break;case 10:var o=t.type._context,u=t.memoizedProps.value;Re(Ws,o._currentValue),o._currentValue=u;break;case 13:if(o=t.memoizedState,o!==null)return o.dehydrated!==null?(Re(Ie,Ie.current&1),t.flags|=128,null):(i&t.child.childLanes)!==0?_f(e,t,i):(Re(Ie,Ie.current&1),e=on(e,t,i),e!==null?e.sibling:null);Re(Ie,Ie.current&1);break;case 19:if(o=(i&t.childLanes)!==0,(e.flags&128)!==0){if(o)return Vf(e,t,i);t.flags|=128}if(u=t.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Re(Ie,Ie.current),o)break;return null;case 22:case 23:return t.lanes=0,Lf(e,t,i)}return on(e,t,i)}var Of,bl,Bf,$f;Of=function(e,t){for(var i=t.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return;i=i.return}i.sibling.return=i.return,i=i.sibling}},bl=function(){},Bf=function(e,t,i,o){var u=e.memoizedProps;if(u!==o){e=t.stateNode,Xn(Ut.current);var h=null;switch(i){case"input":u=ur(e,u),o=ur(e,o),h=[];break;case"select":u=X({},u,{value:void 0}),o=X({},o,{value:void 0}),h=[];break;case"textarea":u=Qr(e,u),o=Qr(e,o),h=[];break;default:typeof u.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=Is)}ta(i,o);var x;i=null;for(L in u)if(!o.hasOwnProperty(L)&&u.hasOwnProperty(L)&&u[L]!=null)if(L==="style"){var k=u[L];for(x in k)k.hasOwnProperty(x)&&(i||(i={}),i[x]="")}else L!=="dangerouslySetInnerHTML"&&L!=="children"&&L!=="suppressContentEditableWarning"&&L!=="suppressHydrationWarning"&&L!=="autoFocus"&&(c.hasOwnProperty(L)?h||(h=[]):(h=h||[]).push(L,null));for(L in o){var j=o[L];if(k=u!=null?u[L]:void 0,o.hasOwnProperty(L)&&j!==k&&(j!=null||k!=null))if(L==="style")if(k){for(x in k)!k.hasOwnProperty(x)||j&&j.hasOwnProperty(x)||(i||(i={}),i[x]="");for(x in j)j.hasOwnProperty(x)&&k[x]!==j[x]&&(i||(i={}),i[x]=j[x])}else i||(h||(h=[]),h.push(L,i)),i=j;else L==="dangerouslySetInnerHTML"?(j=j?j.__html:void 0,k=k?k.__html:void 0,j!=null&&k!==j&&(h=h||[]).push(L,j)):L==="children"?typeof j!="string"&&typeof j!="number"||(h=h||[]).push(L,""+j):L!=="suppressContentEditableWarning"&&L!=="suppressHydrationWarning"&&(c.hasOwnProperty(L)?(j!=null&&L==="onScroll"&&Me("scroll",e),h||k===j||(h=[])):(h=h||[]).push(L,j))}i&&(h=h||[]).push("style",i);var L=h;(t.updateQueue=L)&&(t.flags|=4)}},$f=function(e,t,i,o){i!==o&&(t.flags|=4)};function Ti(e,t){if(!Ae)switch(e.tailMode){case"hidden":t=e.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function rt(e){var t=e.alternate!==null&&e.alternate.child===e.child,i=0,o=0;if(t)for(var u=e.child;u!==null;)i|=u.lanes|u.childLanes,o|=u.subtreeFlags&14680064,o|=u.flags&14680064,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)i|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=i,t}function By(e,t,i){var o=t.pendingProps;switch(Ua(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rt(t),null;case 1:return ft(t.type)&&_s(),rt(t),null;case 3:return o=t.stateNode,Tr(),Le(dt),Le(tt),nl(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&($s(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,It!==null&&(Ll(It),It=null))),bl(e,t),rt(t),null;case 5:el(t);var u=Xn(Si.current);if(i=t.type,e!==null&&t.stateNode!=null)Bf(e,t,i,o,u),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!o){if(t.stateNode===null)throw Error(s(166));return rt(t),null}if(e=Xn(Ut.current),$s(t)){o=t.stateNode,i=t.type;var h=t.memoizedProps;switch(o[$t]=t,o[vi]=h,e=(t.mode&1)!==0,i){case"dialog":Me("cancel",o),Me("close",o);break;case"iframe":case"object":case"embed":Me("load",o);break;case"video":case"audio":for(u=0;u<gi.length;u++)Me(gi[u],o);break;case"source":Me("error",o);break;case"img":case"image":case"link":Me("error",o),Me("load",o);break;case"details":Me("toggle",o);break;case"input":ls(o,h),Me("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!h.multiple},Me("invalid",o);break;case"textarea":ds(o,h),Me("invalid",o)}ta(i,h),u=null;for(var x in h)if(h.hasOwnProperty(x)){var k=h[x];x==="children"?typeof k=="string"?o.textContent!==k&&(h.suppressHydrationWarning!==!0&&Ds(o.textContent,k,e),u=["children",k]):typeof k=="number"&&o.textContent!==""+k&&(h.suppressHydrationWarning!==!0&&Ds(o.textContent,k,e),u=["children",""+k]):c.hasOwnProperty(x)&&k!=null&&x==="onScroll"&&Me("scroll",o)}switch(i){case"input":On(o),us(o,h,!0);break;case"textarea":On(o),Zr(o);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(o.onclick=Is)}o=u,t.updateQueue=o,o!==null&&(t.flags|=4)}else{x=u.nodeType===9?u:u.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=qr(i)),e==="http://www.w3.org/1999/xhtml"?i==="script"?(e=x.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=x.createElement(i,{is:o.is}):(e=x.createElement(i),i==="select"&&(x=e,o.multiple?x.multiple=!0:o.size&&(x.size=o.size))):e=x.createElementNS(e,i),e[$t]=t,e[vi]=o,Of(e,t,!1,!1),t.stateNode=e;e:{switch(x=na(i,o),i){case"dialog":Me("cancel",e),Me("close",e),u=o;break;case"iframe":case"object":case"embed":Me("load",e),u=o;break;case"video":case"audio":for(u=0;u<gi.length;u++)Me(gi[u],e);u=o;break;case"source":Me("error",e),u=o;break;case"img":case"image":case"link":Me("error",e),Me("load",e),u=o;break;case"details":Me("toggle",e),u=o;break;case"input":ls(e,o),u=ur(e,o),Me("invalid",e);break;case"option":u=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},u=X({},o,{value:void 0}),Me("invalid",e);break;case"textarea":ds(e,o),u=Qr(e,o),Me("invalid",e);break;default:u=o}ta(i,u),k=u;for(h in k)if(k.hasOwnProperty(h)){var j=k[h];h==="style"?hs(e,j):h==="dangerouslySetInnerHTML"?(j=j?j.__html:void 0,j!=null&&Ee(e,j)):h==="children"?typeof j=="string"?(i!=="textarea"||j!=="")&&Ge(e,j):typeof j=="number"&&Ge(e,""+j):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(c.hasOwnProperty(h)?j!=null&&h==="onScroll"&&Me("scroll",e):j!=null&&I(e,h,j,x))}switch(i){case"input":On(e),us(e,o,!1);break;case"textarea":On(e),Zr(e);break;case"option":o.value!=null&&e.setAttribute("value",""+ve(o.value));break;case"select":e.multiple=!!o.multiple,h=o.value,h!=null?pn(e,!!o.multiple,h,!1):o.defaultValue!=null&&pn(e,!!o.multiple,o.defaultValue,!0);break;default:typeof u.onClick=="function"&&(e.onclick=Is)}switch(i){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return rt(t),null;case 6:if(e&&t.stateNode!=null)$f(e,t,e.memoizedProps,o);else{if(typeof o!="string"&&t.stateNode===null)throw Error(s(166));if(i=Xn(Si.current),Xn(Ut.current),$s(t)){if(o=t.stateNode,i=t.memoizedProps,o[$t]=t,(h=o.nodeValue!==i)&&(e=vt,e!==null))switch(e.tag){case 3:Ds(o.nodeValue,i,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ds(o.nodeValue,i,(e.mode&1)!==0)}h&&(t.flags|=4)}else o=(i.nodeType===9?i:i.ownerDocument).createTextNode(o),o[$t]=t,t.stateNode=o}return rt(t),null;case 13:if(Le(Ie),o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ae&&wt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Wd(),Nr(),t.flags|=98560,h=!1;else if(h=$s(t),o!==null&&o.dehydrated!==null){if(e===null){if(!h)throw Error(s(318));if(h=t.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(s(317));h[$t]=t}else Nr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;rt(t),h=!1}else It!==null&&(Ll(It),It=null),h=!0;if(!h)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=i,t):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Ie.current&1)!==0?Ye===0&&(Ye=3):Il())),t.updateQueue!==null&&(t.flags|=4),rt(t),null);case 4:return Tr(),bl(e,t),e===null&&yi(t.stateNode.containerInfo),rt(t),null;case 10:return Xa(t.type._context),rt(t),null;case 17:return ft(t.type)&&_s(),rt(t),null;case 19:if(Le(Ie),h=t.memoizedState,h===null)return rt(t),null;if(o=(t.flags&128)!==0,x=h.rendering,x===null)if(o)Ti(h,!1);else{if(Ye!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(x=Gs(e),x!==null){for(t.flags|=128,Ti(h,!1),o=x.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),t.subtreeFlags=0,o=i,i=t.child;i!==null;)h=i,e=o,h.flags&=14680066,x=h.alternate,x===null?(h.childLanes=0,h.lanes=e,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=x.childLanes,h.lanes=x.lanes,h.child=x.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=x.memoizedProps,h.memoizedState=x.memoizedState,h.updateQueue=x.updateQueue,h.type=x.type,e=x.dependencies,h.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),i=i.sibling;return Re(Ie,Ie.current&1|2),t.child}e=e.sibling}h.tail!==null&&Be()>Ar&&(t.flags|=128,o=!0,Ti(h,!1),t.lanes=4194304)}else{if(!o)if(e=Gs(x),e!==null){if(t.flags|=128,o=!0,i=e.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),Ti(h,!0),h.tail===null&&h.tailMode==="hidden"&&!x.alternate&&!Ae)return rt(t),null}else 2*Be()-h.renderingStartTime>Ar&&i!==1073741824&&(t.flags|=128,o=!0,Ti(h,!1),t.lanes=4194304);h.isBackwards?(x.sibling=t.child,t.child=x):(i=h.last,i!==null?i.sibling=x:t.child=x,h.last=x)}return h.tail!==null?(t=h.tail,h.rendering=t,h.tail=t.sibling,h.renderingStartTime=Be(),t.sibling=null,i=Ie.current,Re(Ie,o?i&1|2:i&1),t):(rt(t),null);case 22:case 23:return Dl(),o=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(t.flags|=8192),o&&(t.mode&1)!==0?(bt&1073741824)!==0&&(rt(t),t.subtreeFlags&6&&(t.flags|=8192)):rt(t),null;case 24:return null;case 25:return null}throw Error(s(156,t.tag))}function $y(e,t){switch(Ua(t),t.tag){case 1:return ft(t.type)&&_s(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Tr(),Le(dt),Le(tt),nl(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return el(t),null;case 13:if(Le(Ie),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));Nr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Le(Ie),null;case 4:return Tr(),null;case 10:return Xa(t.type._context),null;case 22:case 23:return Dl(),null;case 24:return null;default:return null}}var ro=!1,it=!1,Uy=typeof WeakSet=="function"?WeakSet:Set,q=null;function Mr(e,t){var i=e.ref;if(i!==null)if(typeof i=="function")try{i(null)}catch(o){Ve(e,t,o)}else i.current=null}function kl(e,t,i){try{i()}catch(o){Ve(e,t,o)}}var Uf=!1;function Wy(e,t){if(Da=js,e=wd(),Ca(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var o=i.getSelection&&i.getSelection();if(o&&o.rangeCount!==0){i=o.anchorNode;var u=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{i.nodeType,h.nodeType}catch{i=null;break e}var x=0,k=-1,j=-1,L=0,F=0,V=e,z=null;t:for(;;){for(var Z;V!==i||u!==0&&V.nodeType!==3||(k=x+u),V!==h||o!==0&&V.nodeType!==3||(j=x+o),V.nodeType===3&&(x+=V.nodeValue.length),(Z=V.firstChild)!==null;)z=V,V=Z;for(;;){if(V===e)break t;if(z===i&&++L===u&&(k=x),z===h&&++F===o&&(j=x),(Z=V.nextSibling)!==null)break;V=z,z=V.parentNode}V=Z}i=k===-1||j===-1?null:{start:k,end:j}}else i=null}i=i||{start:0,end:0}}else i=null;for(Ia={focusedElem:e,selectionRange:i},js=!1,q=t;q!==null;)if(t=q,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,q=e;else for(;q!==null;){t=q;try{var J=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(J!==null){var te=J.memoizedProps,$e=J.memoizedState,T=t.stateNode,N=T.getSnapshotBeforeUpdate(t.elementType===t.type?te:zt(t.type,te),$e);T.__reactInternalSnapshotBeforeUpdate=N}break;case 3:var R=t.stateNode.containerInfo;R.nodeType===1?R.textContent="":R.nodeType===9&&R.documentElement&&R.removeChild(R.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(s(163))}}catch(B){Ve(t,t.return,B)}if(e=t.sibling,e!==null){e.return=t.return,q=e;break}q=t.return}return J=Uf,Uf=!1,J}function Ri(e,t,i){var o=t.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var u=o=o.next;do{if((u.tag&e)===e){var h=u.destroy;u.destroy=void 0,h!==void 0&&kl(t,i,h)}u=u.next}while(u!==o)}}function io(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var i=t=t.next;do{if((i.tag&e)===e){var o=i.create;i.destroy=o()}i=i.next}while(i!==t)}}function jl(e){var t=e.ref;if(t!==null){var i=e.stateNode;switch(e.tag){case 5:e=i;break;default:e=i}typeof t=="function"?t(e):t.current=e}}function Wf(e){var t=e.alternate;t!==null&&(e.alternate=null,Wf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[$t],delete t[vi],delete t[Va],delete t[Cy],delete t[Py])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Hf(e){return e.tag===5||e.tag===3||e.tag===4}function Kf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Hf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Sl(e,t,i){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?i.nodeType===8?i.parentNode.insertBefore(e,t):i.insertBefore(e,t):(i.nodeType===8?(t=i.parentNode,t.insertBefore(e,i)):(t=i,t.appendChild(e)),i=i._reactRootContainer,i!=null||t.onclick!==null||(t.onclick=Is));else if(o!==4&&(e=e.child,e!==null))for(Sl(e,t,i),e=e.sibling;e!==null;)Sl(e,t,i),e=e.sibling}function Nl(e,t,i){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?i.insertBefore(e,t):i.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(Nl(e,t,i),e=e.sibling;e!==null;)Nl(e,t,i),e=e.sibling}var qe=null,_t=!1;function En(e,t,i){for(i=i.child;i!==null;)Yf(e,t,i),i=i.sibling}function Yf(e,t,i){if(Bt&&typeof Bt.onCommitFiberUnmount=="function")try{Bt.onCommitFiberUnmount(ys,i)}catch{}switch(i.tag){case 5:it||Mr(i,t);case 6:var o=qe,u=_t;qe=null,En(e,t,i),qe=o,_t=u,qe!==null&&(_t?(e=qe,i=i.stateNode,e.nodeType===8?e.parentNode.removeChild(i):e.removeChild(i)):qe.removeChild(i.stateNode));break;case 18:qe!==null&&(_t?(e=qe,i=i.stateNode,e.nodeType===8?Fa(e.parentNode,i):e.nodeType===1&&Fa(e,i),li(e)):Fa(qe,i.stateNode));break;case 4:o=qe,u=_t,qe=i.stateNode.containerInfo,_t=!0,En(e,t,i),qe=o,_t=u;break;case 0:case 11:case 14:case 15:if(!it&&(o=i.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){u=o=o.next;do{var h=u,x=h.destroy;h=h.tag,x!==void 0&&((h&2)!==0||(h&4)!==0)&&kl(i,t,x),u=u.next}while(u!==o)}En(e,t,i);break;case 1:if(!it&&(Mr(i,t),o=i.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=i.memoizedProps,o.state=i.memoizedState,o.componentWillUnmount()}catch(k){Ve(i,t,k)}En(e,t,i);break;case 21:En(e,t,i);break;case 22:i.mode&1?(it=(o=it)||i.memoizedState!==null,En(e,t,i),it=o):En(e,t,i);break;default:En(e,t,i)}}function Gf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var i=e.stateNode;i===null&&(i=e.stateNode=new Uy),t.forEach(function(o){var u=Jy.bind(null,e,o);i.has(o)||(i.add(o),o.then(u,u))})}}function Ft(e,t){var i=t.deletions;if(i!==null)for(var o=0;o<i.length;o++){var u=i[o];try{var h=e,x=t,k=x;e:for(;k!==null;){switch(k.tag){case 5:qe=k.stateNode,_t=!1;break e;case 3:qe=k.stateNode.containerInfo,_t=!0;break e;case 4:qe=k.stateNode.containerInfo,_t=!0;break e}k=k.return}if(qe===null)throw Error(s(160));Yf(h,x,u),qe=null,_t=!1;var j=u.alternate;j!==null&&(j.return=null),u.return=null}catch(L){Ve(u,t,L)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Xf(t,e),t=t.sibling}function Xf(e,t){var i=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ft(t,e),Ht(e),o&4){try{Ri(3,e,e.return),io(3,e)}catch(te){Ve(e,e.return,te)}try{Ri(5,e,e.return)}catch(te){Ve(e,e.return,te)}}break;case 1:Ft(t,e),Ht(e),o&512&&i!==null&&Mr(i,i.return);break;case 5:if(Ft(t,e),Ht(e),o&512&&i!==null&&Mr(i,i.return),e.flags&32){var u=e.stateNode;try{Ge(u,"")}catch(te){Ve(e,e.return,te)}}if(o&4&&(u=e.stateNode,u!=null)){var h=e.memoizedProps,x=i!==null?i.memoizedProps:h,k=e.type,j=e.updateQueue;if(e.updateQueue=null,j!==null)try{k==="input"&&h.type==="radio"&&h.name!=null&&cs(u,h),na(k,x);var L=na(k,h);for(x=0;x<j.length;x+=2){var F=j[x],V=j[x+1];F==="style"?hs(u,V):F==="dangerouslySetInnerHTML"?Ee(u,V):F==="children"?Ge(u,V):I(u,F,V,L)}switch(k){case"input":Bn(u,h);break;case"textarea":fs(u,h);break;case"select":var z=u._wrapperState.wasMultiple;u._wrapperState.wasMultiple=!!h.multiple;var Z=h.value;Z!=null?pn(u,!!h.multiple,Z,!1):z!==!!h.multiple&&(h.defaultValue!=null?pn(u,!!h.multiple,h.defaultValue,!0):pn(u,!!h.multiple,h.multiple?[]:"",!1))}u[vi]=h}catch(te){Ve(e,e.return,te)}}break;case 6:if(Ft(t,e),Ht(e),o&4){if(e.stateNode===null)throw Error(s(162));u=e.stateNode,h=e.memoizedProps;try{u.nodeValue=h}catch(te){Ve(e,e.return,te)}}break;case 3:if(Ft(t,e),Ht(e),o&4&&i!==null&&i.memoizedState.isDehydrated)try{li(t.containerInfo)}catch(te){Ve(e,e.return,te)}break;case 4:Ft(t,e),Ht(e);break;case 13:Ft(t,e),Ht(e),u=e.child,u.flags&8192&&(h=u.memoizedState!==null,u.stateNode.isHidden=h,!h||u.alternate!==null&&u.alternate.memoizedState!==null||(El=Be())),o&4&&Gf(e);break;case 22:if(F=i!==null&&i.memoizedState!==null,e.mode&1?(it=(L=it)||F,Ft(t,e),it=L):Ft(t,e),Ht(e),o&8192){if(L=e.memoizedState!==null,(e.stateNode.isHidden=L)&&!F&&(e.mode&1)!==0)for(q=e,F=e.child;F!==null;){for(V=q=F;q!==null;){switch(z=q,Z=z.child,z.tag){case 0:case 11:case 14:case 15:Ri(4,z,z.return);break;case 1:Mr(z,z.return);var J=z.stateNode;if(typeof J.componentWillUnmount=="function"){o=z,i=z.return;try{t=o,J.props=t.memoizedProps,J.state=t.memoizedState,J.componentWillUnmount()}catch(te){Ve(o,i,te)}}break;case 5:Mr(z,z.return);break;case 22:if(z.memoizedState!==null){qf(V);continue}}Z!==null?(Z.return=z,q=Z):qf(V)}F=F.sibling}e:for(F=null,V=e;;){if(V.tag===5){if(F===null){F=V;try{u=V.stateNode,L?(h=u.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(k=V.stateNode,j=V.memoizedProps.style,x=j!=null&&j.hasOwnProperty("display")?j.display:null,k.style.display=mn("display",x))}catch(te){Ve(e,e.return,te)}}}else if(V.tag===6){if(F===null)try{V.stateNode.nodeValue=L?"":V.memoizedProps}catch(te){Ve(e,e.return,te)}}else if((V.tag!==22&&V.tag!==23||V.memoizedState===null||V===e)&&V.child!==null){V.child.return=V,V=V.child;continue}if(V===e)break e;for(;V.sibling===null;){if(V.return===null||V.return===e)break e;F===V&&(F=null),V=V.return}F===V&&(F=null),V.sibling.return=V.return,V=V.sibling}}break;case 19:Ft(t,e),Ht(e),o&4&&Gf(e);break;case 21:break;default:Ft(t,e),Ht(e)}}function Ht(e){var t=e.flags;if(t&2){try{e:{for(var i=e.return;i!==null;){if(Hf(i)){var o=i;break e}i=i.return}throw Error(s(160))}switch(o.tag){case 5:var u=o.stateNode;o.flags&32&&(Ge(u,""),o.flags&=-33);var h=Kf(e);Nl(e,h,u);break;case 3:case 4:var x=o.stateNode.containerInfo,k=Kf(e);Sl(e,k,x);break;default:throw Error(s(161))}}catch(j){Ve(e,e.return,j)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Hy(e,t,i){q=e,Qf(e)}function Qf(e,t,i){for(var o=(e.mode&1)!==0;q!==null;){var u=q,h=u.child;if(u.tag===22&&o){var x=u.memoizedState!==null||ro;if(!x){var k=u.alternate,j=k!==null&&k.memoizedState!==null||it;k=ro;var L=it;if(ro=x,(it=j)&&!L)for(q=u;q!==null;)x=q,j=x.child,x.tag===22&&x.memoizedState!==null?Jf(u):j!==null?(j.return=x,q=j):Jf(u);for(;h!==null;)q=h,Qf(h),h=h.sibling;q=u,ro=k,it=L}Zf(e)}else(u.subtreeFlags&8772)!==0&&h!==null?(h.return=u,q=h):Zf(e)}}function Zf(e){for(;q!==null;){var t=q;if((t.flags&8772)!==0){var i=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:it||io(5,t);break;case 1:var o=t.stateNode;if(t.flags&4&&!it)if(i===null)o.componentDidMount();else{var u=t.elementType===t.type?i.memoizedProps:zt(t.type,i.memoizedProps);o.componentDidUpdate(u,i.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var h=t.updateQueue;h!==null&&Zd(t,h,o);break;case 3:var x=t.updateQueue;if(x!==null){if(i=null,t.child!==null)switch(t.child.tag){case 5:i=t.child.stateNode;break;case 1:i=t.child.stateNode}Zd(t,x,i)}break;case 5:var k=t.stateNode;if(i===null&&t.flags&4){i=k;var j=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":j.autoFocus&&i.focus();break;case"img":j.src&&(i.src=j.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var L=t.alternate;if(L!==null){var F=L.memoizedState;if(F!==null){var V=F.dehydrated;V!==null&&li(V)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(s(163))}it||t.flags&512&&jl(t)}catch(z){Ve(t,t.return,z)}}if(t===e){q=null;break}if(i=t.sibling,i!==null){i.return=t.return,q=i;break}q=t.return}}function qf(e){for(;q!==null;){var t=q;if(t===e){q=null;break}var i=t.sibling;if(i!==null){i.return=t.return,q=i;break}q=t.return}}function Jf(e){for(;q!==null;){var t=q;try{switch(t.tag){case 0:case 11:case 15:var i=t.return;try{io(4,t)}catch(j){Ve(t,i,j)}break;case 1:var o=t.stateNode;if(typeof o.componentDidMount=="function"){var u=t.return;try{o.componentDidMount()}catch(j){Ve(t,u,j)}}var h=t.return;try{jl(t)}catch(j){Ve(t,h,j)}break;case 5:var x=t.return;try{jl(t)}catch(j){Ve(t,x,j)}}}catch(j){Ve(t,t.return,j)}if(t===e){q=null;break}var k=t.sibling;if(k!==null){k.return=t.return,q=k;break}q=t.return}}var Ky=Math.ceil,so=K.ReactCurrentDispatcher,Cl=K.ReactCurrentOwner,Pt=K.ReactCurrentBatchConfig,we=0,Qe=null,We=null,Je=0,bt=0,Lr=jn(0),Ye=0,Mi=null,Zn=0,oo=0,Pl=0,Li=null,pt=null,El=0,Ar=1/0,an=null,ao=!1,Tl=null,Tn=null,lo=!1,Rn=null,co=0,Ai=0,Rl=null,uo=-1,fo=0;function lt(){return(we&6)!==0?Be():uo!==-1?uo:uo=Be()}function Mn(e){return(e.mode&1)===0?1:(we&2)!==0&&Je!==0?Je&-Je:Ty.transition!==null?(fo===0&&(fo=Hu()),fo):(e=Ne,e!==0||(e=window.event,e=e===void 0?16:ed(e.type)),e)}function Vt(e,t,i,o){if(50<Ai)throw Ai=0,Rl=null,Error(s(185));ri(e,i,o),((we&2)===0||e!==Qe)&&(e===Qe&&((we&2)===0&&(oo|=i),Ye===4&&Ln(e,Je)),mt(e,o),i===1&&we===0&&(t.mode&1)===0&&(Ar=Be()+500,Vs&&Nn()))}function mt(e,t){var i=e.callbackNode;Tg(e,t);var o=ws(e,e===Qe?Je:0);if(o===0)i!==null&&$u(i),e.callbackNode=null,e.callbackPriority=0;else if(t=o&-o,e.callbackPriority!==t){if(i!=null&&$u(i),t===1)e.tag===0?Ey(th.bind(null,e)):Vd(th.bind(null,e)),Sy(function(){(we&6)===0&&Nn()}),i=null;else{switch(Ku(o)){case 1:i=ca;break;case 4:i=Uu;break;case 16:i=gs;break;case 536870912:i=Wu;break;default:i=gs}i=ch(i,eh.bind(null,e))}e.callbackPriority=t,e.callbackNode=i}}function eh(e,t){if(uo=-1,fo=0,(we&6)!==0)throw Error(s(327));var i=e.callbackNode;if(Dr()&&e.callbackNode!==i)return null;var o=ws(e,e===Qe?Je:0);if(o===0)return null;if((o&30)!==0||(o&e.expiredLanes)!==0||t)t=ho(e,o);else{t=o;var u=we;we|=2;var h=rh();(Qe!==e||Je!==t)&&(an=null,Ar=Be()+500,Jn(e,t));do try{Xy();break}catch(k){nh(e,k)}while(!0);Ga(),so.current=h,we=u,We!==null?t=0:(Qe=null,Je=0,t=Ye)}if(t!==0){if(t===2&&(u=ua(e),u!==0&&(o=u,t=Ml(e,u))),t===1)throw i=Mi,Jn(e,0),Ln(e,o),mt(e,Be()),i;if(t===6)Ln(e,o);else{if(u=e.current.alternate,(o&30)===0&&!Yy(u)&&(t=ho(e,o),t===2&&(h=ua(e),h!==0&&(o=h,t=Ml(e,h))),t===1))throw i=Mi,Jn(e,0),Ln(e,o),mt(e,Be()),i;switch(e.finishedWork=u,e.finishedLanes=o,t){case 0:case 1:throw Error(s(345));case 2:er(e,pt,an);break;case 3:if(Ln(e,o),(o&130023424)===o&&(t=El+500-Be(),10<t)){if(ws(e,0)!==0)break;if(u=e.suspendedLanes,(u&o)!==o){lt(),e.pingedLanes|=e.suspendedLanes&u;break}e.timeoutHandle=_a(er.bind(null,e,pt,an),t);break}er(e,pt,an);break;case 4:if(Ln(e,o),(o&4194240)===o)break;for(t=e.eventTimes,u=-1;0<o;){var x=31-At(o);h=1<<x,x=t[x],x>u&&(u=x),o&=~h}if(o=u,o=Be()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*Ky(o/1960))-o,10<o){e.timeoutHandle=_a(er.bind(null,e,pt,an),o);break}er(e,pt,an);break;case 5:er(e,pt,an);break;default:throw Error(s(329))}}}return mt(e,Be()),e.callbackNode===i?eh.bind(null,e):null}function Ml(e,t){var i=Li;return e.current.memoizedState.isDehydrated&&(Jn(e,t).flags|=256),e=ho(e,t),e!==2&&(t=pt,pt=i,t!==null&&Ll(t)),e}function Ll(e){pt===null?pt=e:pt.push.apply(pt,e)}function Yy(e){for(var t=e;;){if(t.flags&16384){var i=t.updateQueue;if(i!==null&&(i=i.stores,i!==null))for(var o=0;o<i.length;o++){var u=i[o],h=u.getSnapshot;u=u.value;try{if(!Dt(h(),u))return!1}catch{return!1}}}if(i=t.child,t.subtreeFlags&16384&&i!==null)i.return=t,t=i;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ln(e,t){for(t&=~Pl,t&=~oo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var i=31-At(t),o=1<<i;e[i]=-1,t&=~o}}function th(e){if((we&6)!==0)throw Error(s(327));Dr();var t=ws(e,0);if((t&1)===0)return mt(e,Be()),null;var i=ho(e,t);if(e.tag!==0&&i===2){var o=ua(e);o!==0&&(t=o,i=Ml(e,o))}if(i===1)throw i=Mi,Jn(e,0),Ln(e,t),mt(e,Be()),i;if(i===6)throw Error(s(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,er(e,pt,an),mt(e,Be()),null}function Al(e,t){var i=we;we|=1;try{return e(t)}finally{we=i,we===0&&(Ar=Be()+500,Vs&&Nn())}}function qn(e){Rn!==null&&Rn.tag===0&&(we&6)===0&&Dr();var t=we;we|=1;var i=Pt.transition,o=Ne;try{if(Pt.transition=null,Ne=1,e)return e()}finally{Ne=o,Pt.transition=i,we=t,(we&6)===0&&Nn()}}function Dl(){bt=Lr.current,Le(Lr)}function Jn(e,t){e.finishedWork=null,e.finishedLanes=0;var i=e.timeoutHandle;if(i!==-1&&(e.timeoutHandle=-1,jy(i)),We!==null)for(i=We.return;i!==null;){var o=i;switch(Ua(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&_s();break;case 3:Tr(),Le(dt),Le(tt),nl();break;case 5:el(o);break;case 4:Tr();break;case 13:Le(Ie);break;case 19:Le(Ie);break;case 10:Xa(o.type._context);break;case 22:case 23:Dl()}i=i.return}if(Qe=e,We=e=An(e.current,null),Je=bt=t,Ye=0,Mi=null,Pl=oo=Zn=0,pt=Li=null,Gn!==null){for(t=0;t<Gn.length;t++)if(i=Gn[t],o=i.interleaved,o!==null){i.interleaved=null;var u=o.next,h=i.pending;if(h!==null){var x=h.next;h.next=u,o.next=x}i.pending=o}Gn=null}return e}function nh(e,t){do{var i=We;try{if(Ga(),Xs.current=Js,Qs){for(var o=ze.memoizedState;o!==null;){var u=o.queue;u!==null&&(u.pending=null),o=o.next}Qs=!1}if(Qn=0,Xe=Ke=ze=null,Ni=!1,Ci=0,Cl.current=null,i===null||i.return===null){Ye=1,Mi=t,We=null;break}e:{var h=e,x=i.return,k=i,j=t;if(t=Je,k.flags|=32768,j!==null&&typeof j=="object"&&typeof j.then=="function"){var L=j,F=k,V=F.tag;if((F.mode&1)===0&&(V===0||V===11||V===15)){var z=F.alternate;z?(F.updateQueue=z.updateQueue,F.memoizedState=z.memoizedState,F.lanes=z.lanes):(F.updateQueue=null,F.memoizedState=null)}var Z=Pf(x);if(Z!==null){Z.flags&=-257,Ef(Z,x,k,h,t),Z.mode&1&&Cf(h,L,t),t=Z,j=L;var J=t.updateQueue;if(J===null){var te=new Set;te.add(j),t.updateQueue=te}else J.add(j);break e}else{if((t&1)===0){Cf(h,L,t),Il();break e}j=Error(s(426))}}else if(Ae&&k.mode&1){var $e=Pf(x);if($e!==null){($e.flags&65536)===0&&($e.flags|=256),Ef($e,x,k,h,t),Ka(Rr(j,k));break e}}h=j=Rr(j,k),Ye!==4&&(Ye=2),Li===null?Li=[h]:Li.push(h),h=x;do{switch(h.tag){case 3:h.flags|=65536,t&=-t,h.lanes|=t;var T=Sf(h,j,t);Qd(h,T);break e;case 1:k=j;var N=h.type,R=h.stateNode;if((h.flags&128)===0&&(typeof N.getDerivedStateFromError=="function"||R!==null&&typeof R.componentDidCatch=="function"&&(Tn===null||!Tn.has(R)))){h.flags|=65536,t&=-t,h.lanes|=t;var B=Nf(h,k,t);Qd(h,B);break e}}h=h.return}while(h!==null)}sh(i)}catch(ne){t=ne,We===i&&i!==null&&(We=i=i.return);continue}break}while(!0)}function rh(){var e=so.current;return so.current=Js,e===null?Js:e}function Il(){(Ye===0||Ye===3||Ye===2)&&(Ye=4),Qe===null||(Zn&268435455)===0&&(oo&268435455)===0||Ln(Qe,Je)}function ho(e,t){var i=we;we|=2;var o=rh();(Qe!==e||Je!==t)&&(an=null,Jn(e,t));do try{Gy();break}catch(u){nh(e,u)}while(!0);if(Ga(),we=i,so.current=o,We!==null)throw Error(s(261));return Qe=null,Je=0,Ye}function Gy(){for(;We!==null;)ih(We)}function Xy(){for(;We!==null&&!wg();)ih(We)}function ih(e){var t=lh(e.alternate,e,bt);e.memoizedProps=e.pendingProps,t===null?sh(e):We=t,Cl.current=null}function sh(e){var t=e;do{var i=t.alternate;if(e=t.return,(t.flags&32768)===0){if(i=By(i,t,bt),i!==null){We=i;return}}else{if(i=$y(i,t),i!==null){i.flags&=32767,We=i;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ye=6,We=null;return}}if(t=t.sibling,t!==null){We=t;return}We=t=e}while(t!==null);Ye===0&&(Ye=5)}function er(e,t,i){var o=Ne,u=Pt.transition;try{Pt.transition=null,Ne=1,Qy(e,t,i,o)}finally{Pt.transition=u,Ne=o}return null}function Qy(e,t,i,o){do Dr();while(Rn!==null);if((we&6)!==0)throw Error(s(327));i=e.finishedWork;var u=e.finishedLanes;if(i===null)return null;if(e.finishedWork=null,e.finishedLanes=0,i===e.current)throw Error(s(177));e.callbackNode=null,e.callbackPriority=0;var h=i.lanes|i.childLanes;if(Rg(e,h),e===Qe&&(We=Qe=null,Je=0),(i.subtreeFlags&2064)===0&&(i.flags&2064)===0||lo||(lo=!0,ch(gs,function(){return Dr(),null})),h=(i.flags&15990)!==0,(i.subtreeFlags&15990)!==0||h){h=Pt.transition,Pt.transition=null;var x=Ne;Ne=1;var k=we;we|=4,Cl.current=null,Wy(e,i),Xf(i,e),gy(Ia),js=!!Da,Ia=Da=null,e.current=i,Hy(i),bg(),we=k,Ne=x,Pt.transition=h}else e.current=i;if(lo&&(lo=!1,Rn=e,co=u),h=e.pendingLanes,h===0&&(Tn=null),Sg(i.stateNode),mt(e,Be()),t!==null)for(o=e.onRecoverableError,i=0;i<t.length;i++)u=t[i],o(u.value,{componentStack:u.stack,digest:u.digest});if(ao)throw ao=!1,e=Tl,Tl=null,e;return(co&1)!==0&&e.tag!==0&&Dr(),h=e.pendingLanes,(h&1)!==0?e===Rl?Ai++:(Ai=0,Rl=e):Ai=0,Nn(),null}function Dr(){if(Rn!==null){var e=Ku(co),t=Pt.transition,i=Ne;try{if(Pt.transition=null,Ne=16>e?16:e,Rn===null)var o=!1;else{if(e=Rn,Rn=null,co=0,(we&6)!==0)throw Error(s(331));var u=we;for(we|=4,q=e.current;q!==null;){var h=q,x=h.child;if((q.flags&16)!==0){var k=h.deletions;if(k!==null){for(var j=0;j<k.length;j++){var L=k[j];for(q=L;q!==null;){var F=q;switch(F.tag){case 0:case 11:case 15:Ri(8,F,h)}var V=F.child;if(V!==null)V.return=F,q=V;else for(;q!==null;){F=q;var z=F.sibling,Z=F.return;if(Wf(F),F===L){q=null;break}if(z!==null){z.return=Z,q=z;break}q=Z}}}var J=h.alternate;if(J!==null){var te=J.child;if(te!==null){J.child=null;do{var $e=te.sibling;te.sibling=null,te=$e}while(te!==null)}}q=h}}if((h.subtreeFlags&2064)!==0&&x!==null)x.return=h,q=x;else e:for(;q!==null;){if(h=q,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:Ri(9,h,h.return)}var T=h.sibling;if(T!==null){T.return=h.return,q=T;break e}q=h.return}}var N=e.current;for(q=N;q!==null;){x=q;var R=x.child;if((x.subtreeFlags&2064)!==0&&R!==null)R.return=x,q=R;else e:for(x=N;q!==null;){if(k=q,(k.flags&2048)!==0)try{switch(k.tag){case 0:case 11:case 15:io(9,k)}}catch(ne){Ve(k,k.return,ne)}if(k===x){q=null;break e}var B=k.sibling;if(B!==null){B.return=k.return,q=B;break e}q=k.return}}if(we=u,Nn(),Bt&&typeof Bt.onPostCommitFiberRoot=="function")try{Bt.onPostCommitFiberRoot(ys,e)}catch{}o=!0}return o}finally{Ne=i,Pt.transition=t}}return!1}function oh(e,t,i){t=Rr(i,t),t=Sf(e,t,1),e=Pn(e,t,1),t=lt(),e!==null&&(ri(e,1,t),mt(e,t))}function Ve(e,t,i){if(e.tag===3)oh(e,e,i);else for(;t!==null;){if(t.tag===3){oh(t,e,i);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Tn===null||!Tn.has(o))){e=Rr(i,e),e=Nf(t,e,1),t=Pn(t,e,1),e=lt(),t!==null&&(ri(t,1,e),mt(t,e));break}}t=t.return}}function Zy(e,t,i){var o=e.pingCache;o!==null&&o.delete(t),t=lt(),e.pingedLanes|=e.suspendedLanes&i,Qe===e&&(Je&i)===i&&(Ye===4||Ye===3&&(Je&130023424)===Je&&500>Be()-El?Jn(e,0):Pl|=i),mt(e,t)}function ah(e,t){t===0&&((e.mode&1)===0?t=1:(t=vs,vs<<=1,(vs&130023424)===0&&(vs=4194304)));var i=lt();e=rn(e,t),e!==null&&(ri(e,t,i),mt(e,i))}function qy(e){var t=e.memoizedState,i=0;t!==null&&(i=t.retryLane),ah(e,i)}function Jy(e,t){var i=0;switch(e.tag){case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(i=u.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(s(314))}o!==null&&o.delete(t),ah(e,i)}var lh;lh=function(e,t,i){if(e!==null)if(e.memoizedProps!==t.pendingProps||dt.current)ht=!0;else{if((e.lanes&i)===0&&(t.flags&128)===0)return ht=!1,Oy(e,t,i);ht=(e.flags&131072)!==0}else ht=!1,Ae&&(t.flags&1048576)!==0&&Od(t,Bs,t.index);switch(t.lanes=0,t.tag){case 2:var o=t.type;no(e,t),e=t.pendingProps;var u=kr(t,tt.current);Er(t,i),u=sl(null,t,o,e,u,i);var h=ol();return t.flags|=1,typeof u=="object"&&u!==null&&typeof u.render=="function"&&u.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ft(o)?(h=!0,Fs(t)):h=!1,t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,qa(t),u.updater=eo,t.stateNode=u,u._reactInternals=t,fl(t,o,e,i),t=gl(null,t,o,!0,h,i)):(t.tag=0,Ae&&h&&$a(t),at(null,t,u,i),t=t.child),t;case 16:o=t.elementType;e:{switch(no(e,t),e=t.pendingProps,u=o._init,o=u(o._payload),t.type=o,u=t.tag=t1(o),e=zt(o,e),u){case 0:t=ml(null,t,o,e,i);break e;case 1:t=Df(null,t,o,e,i);break e;case 11:t=Tf(null,t,o,e,i);break e;case 14:t=Rf(null,t,o,zt(o.type,e),i);break e}throw Error(s(306,o,""))}return t;case 0:return o=t.type,u=t.pendingProps,u=t.elementType===o?u:zt(o,u),ml(e,t,o,u,i);case 1:return o=t.type,u=t.pendingProps,u=t.elementType===o?u:zt(o,u),Df(e,t,o,u,i);case 3:e:{if(If(t),e===null)throw Error(s(387));o=t.pendingProps,h=t.memoizedState,u=h.element,Xd(e,t),Ys(t,o,null,i);var x=t.memoizedState;if(o=x.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:x.cache,pendingSuspenseBoundaries:x.pendingSuspenseBoundaries,transitions:x.transitions},t.updateQueue.baseState=h,t.memoizedState=h,t.flags&256){u=Rr(Error(s(423)),t),t=zf(e,t,o,i,u);break e}else if(o!==u){u=Rr(Error(s(424)),t),t=zf(e,t,o,i,u);break e}else for(wt=kn(t.stateNode.containerInfo.firstChild),vt=t,Ae=!0,It=null,i=Yd(t,null,o,i),t.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(Nr(),o===u){t=on(e,t,i);break e}at(e,t,o,i)}t=t.child}return t;case 5:return qd(t),e===null&&Ha(t),o=t.type,u=t.pendingProps,h=e!==null?e.memoizedProps:null,x=u.children,za(o,u)?x=null:h!==null&&za(o,h)&&(t.flags|=32),Af(e,t),at(e,t,x,i),t.child;case 6:return e===null&&Ha(t),null;case 13:return _f(e,t,i);case 4:return Ja(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=Cr(t,null,o,i):at(e,t,o,i),t.child;case 11:return o=t.type,u=t.pendingProps,u=t.elementType===o?u:zt(o,u),Tf(e,t,o,u,i);case 7:return at(e,t,t.pendingProps,i),t.child;case 8:return at(e,t,t.pendingProps.children,i),t.child;case 12:return at(e,t,t.pendingProps.children,i),t.child;case 10:e:{if(o=t.type._context,u=t.pendingProps,h=t.memoizedProps,x=u.value,Re(Ws,o._currentValue),o._currentValue=x,h!==null)if(Dt(h.value,x)){if(h.children===u.children&&!dt.current){t=on(e,t,i);break e}}else for(h=t.child,h!==null&&(h.return=t);h!==null;){var k=h.dependencies;if(k!==null){x=h.child;for(var j=k.firstContext;j!==null;){if(j.context===o){if(h.tag===1){j=sn(-1,i&-i),j.tag=2;var L=h.updateQueue;if(L!==null){L=L.shared;var F=L.pending;F===null?j.next=j:(j.next=F.next,F.next=j),L.pending=j}}h.lanes|=i,j=h.alternate,j!==null&&(j.lanes|=i),Qa(h.return,i,t),k.lanes|=i;break}j=j.next}}else if(h.tag===10)x=h.type===t.type?null:h.child;else if(h.tag===18){if(x=h.return,x===null)throw Error(s(341));x.lanes|=i,k=x.alternate,k!==null&&(k.lanes|=i),Qa(x,i,t),x=h.sibling}else x=h.child;if(x!==null)x.return=h;else for(x=h;x!==null;){if(x===t){x=null;break}if(h=x.sibling,h!==null){h.return=x.return,x=h;break}x=x.return}h=x}at(e,t,u.children,i),t=t.child}return t;case 9:return u=t.type,o=t.pendingProps.children,Er(t,i),u=Nt(u),o=o(u),t.flags|=1,at(e,t,o,i),t.child;case 14:return o=t.type,u=zt(o,t.pendingProps),u=zt(o.type,u),Rf(e,t,o,u,i);case 15:return Mf(e,t,t.type,t.pendingProps,i);case 17:return o=t.type,u=t.pendingProps,u=t.elementType===o?u:zt(o,u),no(e,t),t.tag=1,ft(o)?(e=!0,Fs(t)):e=!1,Er(t,i),kf(t,o,u),fl(t,o,u,i),gl(null,t,o,!0,e,i);case 19:return Vf(e,t,i);case 22:return Lf(e,t,i)}throw Error(s(156,t.tag))};function ch(e,t){return Bu(e,t)}function e1(e,t,i,o){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Et(e,t,i,o){return new e1(e,t,i,o)}function zl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function t1(e){if(typeof e=="function")return zl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===je)return 11;if(e===Pe)return 14}return 2}function An(e,t){var i=e.alternate;return i===null?(i=Et(e.tag,t,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=t,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&14680064,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,t=e.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i}function po(e,t,i,o,u,h){var x=2;if(o=e,typeof e=="function")zl(e)&&(x=1);else if(typeof e=="string")x=5;else e:switch(e){case $:return tr(i.children,u,h,t);case O:x=8,u|=8;break;case H:return e=Et(12,i,t,u|2),e.elementType=H,e.lanes=h,e;case Y:return e=Et(13,i,t,u),e.elementType=Y,e.lanes=h,e;case he:return e=Et(19,i,t,u),e.elementType=he,e.lanes=h,e;case re:return mo(i,u,h,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case se:x=10;break e;case be:x=9;break e;case je:x=11;break e;case Pe:x=14;break e;case de:x=16,o=null;break e}throw Error(s(130,e==null?e:typeof e,""))}return t=Et(x,i,t,u),t.elementType=e,t.type=o,t.lanes=h,t}function tr(e,t,i,o){return e=Et(7,e,o,t),e.lanes=i,e}function mo(e,t,i,o){return e=Et(22,e,o,t),e.elementType=re,e.lanes=i,e.stateNode={isHidden:!1},e}function _l(e,t,i){return e=Et(6,e,null,t),e.lanes=i,e}function Fl(e,t,i){return t=Et(4,e.children!==null?e.children:[],e.key,t),t.lanes=i,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function n1(e,t,i,o,u){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=da(0),this.expirationTimes=da(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=da(0),this.identifierPrefix=o,this.onRecoverableError=u,this.mutableSourceEagerHydrationData=null}function Vl(e,t,i,o,u,h,x,k,j){return e=new n1(e,t,i,k,j),t===1?(t=1,h===!0&&(t|=8)):t=0,h=Et(3,null,null,t),e.current=h,h.stateNode=e,h.memoizedState={element:o,isDehydrated:i,cache:null,transitions:null,pendingSuspenseBoundaries:null},qa(h),e}function r1(e,t,i){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:G,key:o==null?null:""+o,children:e,containerInfo:t,implementation:i}}function uh(e){if(!e)return Sn;e=e._reactInternals;e:{if(Un(e)!==e||e.tag!==1)throw Error(s(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ft(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(s(171))}if(e.tag===1){var i=e.type;if(ft(i))return _d(e,i,t)}return t}function dh(e,t,i,o,u,h,x,k,j){return e=Vl(i,o,!0,e,u,h,x,k,j),e.context=uh(null),i=e.current,o=lt(),u=Mn(i),h=sn(o,u),h.callback=t??null,Pn(i,h,u),e.current.lanes=u,ri(e,u,o),mt(e,o),e}function go(e,t,i,o){var u=t.current,h=lt(),x=Mn(u);return i=uh(i),t.context===null?t.context=i:t.pendingContext=i,t=sn(h,x),t.payload={element:e},o=o===void 0?null:o,o!==null&&(t.callback=o),e=Pn(u,t,x),e!==null&&(Vt(e,u,x,h),Ks(e,u,x)),x}function yo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function fh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<t?i:t}}function Ol(e,t){fh(e,t),(e=e.alternate)&&fh(e,t)}function i1(){return null}var hh=typeof reportError=="function"?reportError:function(e){console.error(e)};function Bl(e){this._internalRoot=e}xo.prototype.render=Bl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));go(e,t,null,null)},xo.prototype.unmount=Bl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;qn(function(){go(null,e,null,null)}),t[Jt]=null}};function xo(e){this._internalRoot=e}xo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Xu();e={blockedOn:null,target:e,priority:t};for(var i=0;i<vn.length&&t!==0&&t<vn[i].priority;i++);vn.splice(i,0,e),i===0&&qu(e)}};function $l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function vo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ph(){}function s1(e,t,i,o,u){if(u){if(typeof o=="function"){var h=o;o=function(){var L=yo(x);h.call(L)}}var x=dh(t,o,e,0,null,!1,!1,"",ph);return e._reactRootContainer=x,e[Jt]=x.current,yi(e.nodeType===8?e.parentNode:e),qn(),x}for(;u=e.lastChild;)e.removeChild(u);if(typeof o=="function"){var k=o;o=function(){var L=yo(j);k.call(L)}}var j=Vl(e,0,!1,null,null,!1,!1,"",ph);return e._reactRootContainer=j,e[Jt]=j.current,yi(e.nodeType===8?e.parentNode:e),qn(function(){go(t,j,i,o)}),j}function wo(e,t,i,o,u){var h=i._reactRootContainer;if(h){var x=h;if(typeof u=="function"){var k=u;u=function(){var j=yo(x);k.call(j)}}go(t,x,e,u)}else x=s1(i,t,e,u,o);return yo(x)}Yu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var i=ni(t.pendingLanes);i!==0&&(fa(t,i|1),mt(t,Be()),(we&6)===0&&(Ar=Be()+500,Nn()))}break;case 13:qn(function(){var o=rn(e,1);if(o!==null){var u=lt();Vt(o,e,1,u)}}),Ol(e,1)}},ha=function(e){if(e.tag===13){var t=rn(e,134217728);if(t!==null){var i=lt();Vt(t,e,134217728,i)}Ol(e,134217728)}},Gu=function(e){if(e.tag===13){var t=Mn(e),i=rn(e,t);if(i!==null){var o=lt();Vt(i,e,t,o)}Ol(e,t)}},Xu=function(){return Ne},Qu=function(e,t){var i=Ne;try{return Ne=e,t()}finally{Ne=i}},sa=function(e,t,i){switch(t){case"input":if(Bn(e,i),t=i.name,i.type==="radio"&&t!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<i.length;t++){var o=i[t];if(o!==e&&o.form===e.form){var u=zs(o);if(!u)throw Error(s(90));Gr(o),Bn(o,u)}}}break;case"textarea":fs(e,i);break;case"select":t=i.value,t!=null&&pn(e,!!i.multiple,t,!1)}},Du=Al,Iu=qn;var o1={usingClientEntryPoint:!1,Events:[wi,wr,zs,Lu,Au,Al]},Di={findFiberByHostInstance:Wn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},a1={bundleType:Di.bundleType,version:Di.version,rendererPackageName:Di.rendererPackageName,rendererConfig:Di.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:K.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Vu(e),e===null?null:e.stateNode},findFiberByHostInstance:Di.findFiberByHostInstance||i1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bo.isDisabled&&bo.supportsFiber)try{ys=bo.inject(a1),Bt=bo}catch{}}return gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=o1,gt.createPortal=function(e,t){var i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!$l(t))throw Error(s(200));return r1(e,t,null,i)},gt.createRoot=function(e,t){if(!$l(e))throw Error(s(299));var i=!1,o="",u=hh;return t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(u=t.onRecoverableError)),t=Vl(e,1,!1,null,null,i,!1,o,u),e[Jt]=t.current,yi(e.nodeType===8?e.parentNode:e),new Bl(t)},gt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=Vu(t),e=e===null?null:e.stateNode,e},gt.flushSync=function(e){return qn(e)},gt.hydrate=function(e,t,i){if(!vo(t))throw Error(s(200));return wo(null,e,t,!0,i)},gt.hydrateRoot=function(e,t,i){if(!$l(e))throw Error(s(405));var o=i!=null&&i.hydratedSources||null,u=!1,h="",x=hh;if(i!=null&&(i.unstable_strictMode===!0&&(u=!0),i.identifierPrefix!==void 0&&(h=i.identifierPrefix),i.onRecoverableError!==void 0&&(x=i.onRecoverableError)),t=dh(t,null,e,1,i??null,u,!1,h,x),e[Jt]=t.current,yi(e),o)for(e=0;e<o.length;e++)i=o[e],u=i._getVersion,u=u(i._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[i,u]:t.mutableSourceEagerHydrationData.push(i,u);return new xo(t)},gt.render=function(e,t,i){if(!vo(t))throw Error(s(200));return wo(null,e,t,!1,i)},gt.unmountComponentAtNode=function(e){if(!vo(e))throw Error(s(40));return e._reactRootContainer?(qn(function(){wo(null,null,e,!1,function(){e._reactRootContainer=null,e[Jt]=null})}),!0):!1},gt.unstable_batchedUpdates=Al,gt.unstable_renderSubtreeIntoContainer=function(e,t,i,o){if(!vo(i))throw Error(s(200));if(e==null||e._reactInternals===void 0)throw Error(s(38));return wo(e,t,i,!1,o)},gt.version="18.3.1-next-f1338f8080-20240426",gt}var kh;function m1(){if(kh)return Hl.exports;kh=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(r){console.error(r)}}return n(),Hl.exports=p1(),Hl.exports}var jh;function g1(){if(jh)return ko;jh=1;var n=m1();return ko.createRoot=n.createRoot,ko.hydrateRoot=n.hydrateRoot,ko}var y1=g1();const x1=nm(y1);/**
 * react-router v7.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Sh="popstate";function v1(n={}){function r(a,c){let{pathname:f,search:d,hash:p}=a.location;return pc("",{pathname:f,search:d,hash:p},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function s(a,c){return typeof c=="string"?c:Ki(c)}return b1(r,s,null,n)}function Fe(n,r){if(n===!1||n===null||typeof n>"u")throw new Error(r)}function Qt(n,r){if(!n){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function w1(){return Math.random().toString(36).substring(2,10)}function Nh(n,r){return{usr:n.state,key:n.key,idx:r}}function pc(n,r,s=null,a){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof r=="string"?Ur(r):r,state:s,key:r&&r.key||a||w1()}}function Ki({pathname:n="/",search:r="",hash:s=""}){return r&&r!=="?"&&(n+=r.charAt(0)==="?"?r:"?"+r),s&&s!=="#"&&(n+=s.charAt(0)==="#"?s:"#"+s),n}function Ur(n){let r={};if(n){let s=n.indexOf("#");s>=0&&(r.hash=n.substring(s),n=n.substring(0,s));let a=n.indexOf("?");a>=0&&(r.search=n.substring(a),n=n.substring(0,a)),n&&(r.pathname=n)}return r}function b1(n,r,s,a={}){let{window:c=document.defaultView,v5Compat:f=!1}=a,d=c.history,p="POP",m=null,g=y();g==null&&(g=0,d.replaceState({...d.state,idx:g},""));function y(){return(d.state||{idx:null}).idx}function v(){p="POP";let A=y(),M=A==null?null:A-g;g=A,m&&m({action:p,location:P.location,delta:M})}function w(A,M){p="PUSH";let D=pc(P.location,A,M);g=y()+1;let I=Nh(D,g),K=P.createHref(D);try{d.pushState(I,"",K)}catch(U){if(U instanceof DOMException&&U.name==="DataCloneError")throw U;c.location.assign(K)}f&&m&&m({action:p,location:P.location,delta:1})}function C(A,M){p="REPLACE";let D=pc(P.location,A,M);g=y();let I=Nh(D,g),K=P.createHref(D);d.replaceState(I,"",K),f&&m&&m({action:p,location:P.location,delta:0})}function S(A){return k1(A)}let P={get action(){return p},get location(){return n(c,d)},listen(A){if(m)throw new Error("A history only accepts one active listener");return c.addEventListener(Sh,v),m=A,()=>{c.removeEventListener(Sh,v),m=null}},createHref(A){return r(c,A)},createURL:S,encodeLocation(A){let M=S(A);return{pathname:M.pathname,search:M.search,hash:M.hash}},push:w,replace:C,go(A){return d.go(A)}};return P}function k1(n,r=!1){let s="http://localhost";typeof window<"u"&&(s=window.location.origin!=="null"?window.location.origin:window.location.href),Fe(s,"No window.location.(origin|href) available to create URL");let a=typeof n=="string"?n:Ki(n);return a=a.replace(/ $/,"%20"),!r&&a.startsWith("//")&&(a=s+a),new URL(a,s)}function rm(n,r,s="/"){return j1(n,r,s,!1)}function j1(n,r,s,a){let c=typeof r=="string"?Ur(r):r,f=un(c.pathname||"/",s);if(f==null)return null;let d=im(n);S1(d);let p=null;for(let m=0;p==null&&m<d.length;++m){let g=I1(f);p=A1(d[m],g,a)}return p}function im(n,r=[],s=[],a=""){let c=(f,d,p)=>{let m={relativePath:p===void 0?f.path||"":p,caseSensitive:f.caseSensitive===!0,childrenIndex:d,route:f};m.relativePath.startsWith("/")&&(Fe(m.relativePath.startsWith(a),`Absolute route path "${m.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(a.length));let g=cn([a,m.relativePath]),y=s.concat(m);f.children&&f.children.length>0&&(Fe(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),im(f.children,r,y,g)),!(f.path==null&&!f.index)&&r.push({path:g,score:M1(g,f.index),routesMeta:y})};return n.forEach((f,d)=>{var p;if(f.path===""||!((p=f.path)!=null&&p.includes("?")))c(f,d);else for(let m of sm(f.path))c(f,d,m)}),r}function sm(n){let r=n.split("/");if(r.length===0)return[];let[s,...a]=r,c=s.endsWith("?"),f=s.replace(/\?$/,"");if(a.length===0)return c?[f,""]:[f];let d=sm(a.join("/")),p=[];return p.push(...d.map(m=>m===""?f:[f,m].join("/"))),c&&p.push(...d),p.map(m=>n.startsWith("/")&&m===""?"/":m)}function S1(n){n.sort((r,s)=>r.score!==s.score?s.score-r.score:L1(r.routesMeta.map(a=>a.childrenIndex),s.routesMeta.map(a=>a.childrenIndex)))}var N1=/^:[\w-]+$/,C1=3,P1=2,E1=1,T1=10,R1=-2,Ch=n=>n==="*";function M1(n,r){let s=n.split("/"),a=s.length;return s.some(Ch)&&(a+=R1),r&&(a+=P1),s.filter(c=>!Ch(c)).reduce((c,f)=>c+(N1.test(f)?C1:f===""?E1:T1),a)}function L1(n,r){return n.length===r.length&&n.slice(0,-1).every((a,c)=>a===r[c])?n[n.length-1]-r[r.length-1]:0}function A1(n,r,s=!1){let{routesMeta:a}=n,c={},f="/",d=[];for(let p=0;p<a.length;++p){let m=a[p],g=p===a.length-1,y=f==="/"?r:r.slice(f.length)||"/",v=Fo({path:m.relativePath,caseSensitive:m.caseSensitive,end:g},y),w=m.route;if(!v&&g&&s&&!a[a.length-1].route.index&&(v=Fo({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},y)),!v)return null;Object.assign(c,v.params),d.push({params:c,pathname:cn([f,v.pathname]),pathnameBase:V1(cn([f,v.pathnameBase])),route:w}),v.pathnameBase!=="/"&&(f=cn([f,v.pathnameBase]))}return d}function Fo(n,r){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[s,a]=D1(n.path,n.caseSensitive,n.end),c=r.match(s);if(!c)return null;let f=c[0],d=f.replace(/(.)\/+$/,"$1"),p=c.slice(1);return{params:a.reduce((g,{paramName:y,isOptional:v},w)=>{if(y==="*"){let S=p[w]||"";d=f.slice(0,f.length-S.length).replace(/(.)\/+$/,"$1")}const C=p[w];return v&&!C?g[y]=void 0:g[y]=(C||"").replace(/%2F/g,"/"),g},{}),pathname:f,pathnameBase:d,pattern:n}}function D1(n,r=!1,s=!0){Qt(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let a=[],c="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,p,m)=>(a.push({paramName:p,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(a.push({paramName:"*"}),c+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):s?c+="\\/*$":n!==""&&n!=="/"&&(c+="(?:(?=\\/|$))"),[new RegExp(c,r?void 0:"i"),a]}function I1(n){try{return n.split("/").map(r=>decodeURIComponent(r).replace(/\//g,"%2F")).join("/")}catch(r){return Qt(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`),n}}function un(n,r){if(r==="/")return n;if(!n.toLowerCase().startsWith(r.toLowerCase()))return null;let s=r.endsWith("/")?r.length-1:r.length,a=n.charAt(s);return a&&a!=="/"?null:n.slice(s)||"/"}function z1(n,r="/"){let{pathname:s,search:a="",hash:c=""}=typeof n=="string"?Ur(n):n;return{pathname:s?s.startsWith("/")?s:_1(s,r):r,search:O1(a),hash:B1(c)}}function _1(n,r){let s=r.replace(/\/+$/,"").split("/");return n.split("/").forEach(c=>{c===".."?s.length>1&&s.pop():c!=="."&&s.push(c)}),s.length>1?s.join("/"):"/"}function Gl(n,r,s,a){return`Cannot include a '${n}' character in a manually specified \`to.${r}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function F1(n){return n.filter((r,s)=>s===0||r.route.path&&r.route.path.length>0)}function om(n){let r=F1(n);return r.map((s,a)=>a===r.length-1?s.pathname:s.pathnameBase)}function am(n,r,s,a=!1){let c;typeof n=="string"?c=Ur(n):(c={...n},Fe(!c.pathname||!c.pathname.includes("?"),Gl("?","pathname","search",c)),Fe(!c.pathname||!c.pathname.includes("#"),Gl("#","pathname","hash",c)),Fe(!c.search||!c.search.includes("#"),Gl("#","search","hash",c)));let f=n===""||c.pathname==="",d=f?"/":c.pathname,p;if(d==null)p=s;else{let v=r.length-1;if(!a&&d.startsWith("..")){let w=d.split("/");for(;w[0]==="..";)w.shift(),v-=1;c.pathname=w.join("/")}p=v>=0?r[v]:"/"}let m=z1(c,p),g=d&&d!=="/"&&d.endsWith("/"),y=(f||d===".")&&s.endsWith("/");return!m.pathname.endsWith("/")&&(g||y)&&(m.pathname+="/"),m}var cn=n=>n.join("/").replace(/\/\/+/g,"/"),V1=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),O1=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,B1=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function $1(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var lm=["POST","PUT","PATCH","DELETE"];new Set(lm);var U1=["GET",...lm];new Set(U1);var Wr=b.createContext(null);Wr.displayName="DataRouter";var Yo=b.createContext(null);Yo.displayName="DataRouterState";b.createContext(!1);var cm=b.createContext({isTransitioning:!1});cm.displayName="ViewTransition";var W1=b.createContext(new Map);W1.displayName="Fetchers";var H1=b.createContext(null);H1.displayName="Await";var Zt=b.createContext(null);Zt.displayName="Navigation";var es=b.createContext(null);es.displayName="Location";var hn=b.createContext({outlet:null,matches:[],isDataRoute:!1});hn.displayName="Route";var Bc=b.createContext(null);Bc.displayName="RouteError";function K1(n,{relative:r}={}){Fe(ts(),"useHref() may be used only in the context of a <Router> component.");let{basename:s,navigator:a}=b.useContext(Zt),{hash:c,pathname:f,search:d}=ns(n,{relative:r}),p=f;return s!=="/"&&(p=f==="/"?s:cn([s,f])),a.createHref({pathname:p,search:d,hash:c})}function ts(){return b.useContext(es)!=null}function Fn(){return Fe(ts(),"useLocation() may be used only in the context of a <Router> component."),b.useContext(es).location}var um="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function dm(n){b.useContext(Zt).static||b.useLayoutEffect(n)}function Y1(){let{isDataRoute:n}=b.useContext(hn);return n?ox():G1()}function G1(){Fe(ts(),"useNavigate() may be used only in the context of a <Router> component.");let n=b.useContext(Wr),{basename:r,navigator:s}=b.useContext(Zt),{matches:a}=b.useContext(hn),{pathname:c}=Fn(),f=JSON.stringify(om(a)),d=b.useRef(!1);return dm(()=>{d.current=!0}),b.useCallback((m,g={})=>{if(Qt(d.current,um),!d.current)return;if(typeof m=="number"){s.go(m);return}let y=am(m,JSON.parse(f),c,g.relative==="path");n==null&&r!=="/"&&(y.pathname=y.pathname==="/"?r:cn([r,y.pathname])),(g.replace?s.replace:s.push)(y,g.state,g)},[r,s,f,c,n])}b.createContext(null);function ns(n,{relative:r}={}){let{matches:s}=b.useContext(hn),{pathname:a}=Fn(),c=JSON.stringify(om(s));return b.useMemo(()=>am(n,JSON.parse(c),a,r==="path"),[n,c,a,r])}function X1(n,r){return fm(n,r)}function fm(n,r,s,a){var M;Fe(ts(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=b.useContext(Zt),{matches:f}=b.useContext(hn),d=f[f.length-1],p=d?d.params:{},m=d?d.pathname:"/",g=d?d.pathnameBase:"/",y=d&&d.route;{let D=y&&y.path||"";hm(m,!y||D.endsWith("*")||D.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${D}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${D}"> to <Route path="${D==="/"?"*":`${D}/*`}">.`)}let v=Fn(),w;if(r){let D=typeof r=="string"?Ur(r):r;Fe(g==="/"||((M=D.pathname)==null?void 0:M.startsWith(g)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${D.pathname}" was given in the \`location\` prop.`),w=D}else w=v;let C=w.pathname||"/",S=C;if(g!=="/"){let D=g.replace(/^\//,"").split("/");S="/"+C.replace(/^\//,"").split("/").slice(D.length).join("/")}let P=rm(n,{pathname:S});Qt(y||P!=null,`No routes matched location "${w.pathname}${w.search}${w.hash}" `),Qt(P==null||P[P.length-1].route.element!==void 0||P[P.length-1].route.Component!==void 0||P[P.length-1].route.lazy!==void 0,`Matched leaf route at location "${w.pathname}${w.search}${w.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let A=ex(P&&P.map(D=>Object.assign({},D,{params:Object.assign({},p,D.params),pathname:cn([g,c.encodeLocation?c.encodeLocation(D.pathname).pathname:D.pathname]),pathnameBase:D.pathnameBase==="/"?g:cn([g,c.encodeLocation?c.encodeLocation(D.pathnameBase).pathname:D.pathnameBase])})),f,s,a);return r&&A?b.createElement(es.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...w},navigationType:"POP"}},A):A}function Q1(){let n=sx(),r=$1(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),s=n instanceof Error?n.stack:null,a="rgba(200,200,200, 0.5)",c={padding:"0.5rem",backgroundColor:a},f={padding:"2px 4px",backgroundColor:a},d=null;return console.error("Error handled by React Router default ErrorBoundary:",n),d=b.createElement(b.Fragment,null,b.createElement("p",null,"💿 Hey developer 👋"),b.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",b.createElement("code",{style:f},"ErrorBoundary")," or"," ",b.createElement("code",{style:f},"errorElement")," prop on your route.")),b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},r),s?b.createElement("pre",{style:c},s):null,d)}var Z1=b.createElement(Q1,null),q1=class extends b.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,r){return r.location!==n.location||r.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:r.error,location:r.location,revalidation:n.revalidation||r.revalidation}}componentDidCatch(n,r){console.error("React Router caught the following error during render",n,r)}render(){return this.state.error!==void 0?b.createElement(hn.Provider,{value:this.props.routeContext},b.createElement(Bc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function J1({routeContext:n,match:r,children:s}){let a=b.useContext(Wr);return a&&a.static&&a.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=r.route.id),b.createElement(hn.Provider,{value:n},s)}function ex(n,r=[],s=null,a=null){if(n==null){if(!s)return null;if(s.errors)n=s.matches;else if(r.length===0&&!s.initialized&&s.matches.length>0)n=s.matches;else return null}let c=n,f=s==null?void 0:s.errors;if(f!=null){let m=c.findIndex(g=>g.route.id&&(f==null?void 0:f[g.route.id])!==void 0);Fe(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),c=c.slice(0,Math.min(c.length,m+1))}let d=!1,p=-1;if(s)for(let m=0;m<c.length;m++){let g=c[m];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(p=m),g.route.id){let{loaderData:y,errors:v}=s,w=g.route.loader&&!y.hasOwnProperty(g.route.id)&&(!v||v[g.route.id]===void 0);if(g.route.lazy||w){d=!0,p>=0?c=c.slice(0,p+1):c=[c[0]];break}}}return c.reduceRight((m,g,y)=>{let v,w=!1,C=null,S=null;s&&(v=f&&g.route.id?f[g.route.id]:void 0,C=g.route.errorElement||Z1,d&&(p<0&&y===0?(hm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),w=!0,S=null):p===y&&(w=!0,S=g.route.hydrateFallbackElement||null)));let P=r.concat(c.slice(0,y+1)),A=()=>{let M;return v?M=C:w?M=S:g.route.Component?M=b.createElement(g.route.Component,null):g.route.element?M=g.route.element:M=m,b.createElement(J1,{match:g,routeContext:{outlet:m,matches:P,isDataRoute:s!=null},children:M})};return s&&(g.route.ErrorBoundary||g.route.errorElement||y===0)?b.createElement(q1,{location:s.location,revalidation:s.revalidation,component:C,error:v,children:A(),routeContext:{outlet:null,matches:P,isDataRoute:!0}}):A()},null)}function $c(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function tx(n){let r=b.useContext(Wr);return Fe(r,$c(n)),r}function nx(n){let r=b.useContext(Yo);return Fe(r,$c(n)),r}function rx(n){let r=b.useContext(hn);return Fe(r,$c(n)),r}function Uc(n){let r=rx(n),s=r.matches[r.matches.length-1];return Fe(s.route.id,`${n} can only be used on routes that contain a unique "id"`),s.route.id}function ix(){return Uc("useRouteId")}function sx(){var a;let n=b.useContext(Bc),r=nx("useRouteError"),s=Uc("useRouteError");return n!==void 0?n:(a=r.errors)==null?void 0:a[s]}function ox(){let{router:n}=tx("useNavigate"),r=Uc("useNavigate"),s=b.useRef(!1);return dm(()=>{s.current=!0}),b.useCallback(async(c,f={})=>{Qt(s.current,um),s.current&&(typeof c=="number"?n.navigate(c):await n.navigate(c,{fromRouteId:r,...f}))},[n,r])}var Ph={};function hm(n,r,s){!r&&!Ph[n]&&(Ph[n]=!0,Qt(!1,s))}b.memo(ax);function ax({routes:n,future:r,state:s}){return fm(n,void 0,s,r)}function Vi(n){Fe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function lx({basename:n="/",children:r=null,location:s,navigationType:a="POP",navigator:c,static:f=!1}){Fe(!ts(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=n.replace(/^\/*/,"/"),p=b.useMemo(()=>({basename:d,navigator:c,static:f,future:{}}),[d,c,f]);typeof s=="string"&&(s=Ur(s));let{pathname:m="/",search:g="",hash:y="",state:v=null,key:w="default"}=s,C=b.useMemo(()=>{let S=un(m,d);return S==null?null:{location:{pathname:S,search:g,hash:y,state:v,key:w},navigationType:a}},[d,m,g,y,v,w,a]);return Qt(C!=null,`<Router basename="${d}"> is not able to match the URL "${m}${g}${y}" because it does not start with the basename, so the <Router> won't render anything.`),C==null?null:b.createElement(Zt.Provider,{value:p},b.createElement(es.Provider,{children:r,value:C}))}function cx({children:n,location:r}){return X1(mc(n),r)}function mc(n,r=[]){let s=[];return b.Children.forEach(n,(a,c)=>{if(!b.isValidElement(a))return;let f=[...r,c];if(a.type===b.Fragment){s.push.apply(s,mc(a.props.children,f));return}Fe(a.type===Vi,`[${typeof a.type=="string"?a.type:a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Fe(!a.props.index||!a.props.children,"An index route cannot have child routes.");let d={id:a.props.id||f.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,hydrateFallbackElement:a.props.hydrateFallbackElement,HydrateFallback:a.props.HydrateFallback,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.hasErrorBoundary===!0||a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(d.children=mc(a.props.children,f)),s.push(d)}),s}var Lo="get",Ao="application/x-www-form-urlencoded";function Go(n){return n!=null&&typeof n.tagName=="string"}function ux(n){return Go(n)&&n.tagName.toLowerCase()==="button"}function dx(n){return Go(n)&&n.tagName.toLowerCase()==="form"}function fx(n){return Go(n)&&n.tagName.toLowerCase()==="input"}function hx(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function px(n,r){return n.button===0&&(!r||r==="_self")&&!hx(n)}var jo=null;function mx(){if(jo===null)try{new FormData(document.createElement("form"),0),jo=!1}catch{jo=!0}return jo}var gx=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Xl(n){return n!=null&&!gx.has(n)?(Qt(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ao}"`),null):n}function yx(n,r){let s,a,c,f,d;if(dx(n)){let p=n.getAttribute("action");a=p?un(p,r):null,s=n.getAttribute("method")||Lo,c=Xl(n.getAttribute("enctype"))||Ao,f=new FormData(n)}else if(ux(n)||fx(n)&&(n.type==="submit"||n.type==="image")){let p=n.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=n.getAttribute("formaction")||p.getAttribute("action");if(a=m?un(m,r):null,s=n.getAttribute("formmethod")||p.getAttribute("method")||Lo,c=Xl(n.getAttribute("formenctype"))||Xl(p.getAttribute("enctype"))||Ao,f=new FormData(p,n),!mx()){let{name:g,type:y,value:v}=n;if(y==="image"){let w=g?`${g}.`:"";f.append(`${w}x`,"0"),f.append(`${w}y`,"0")}else g&&f.append(g,v)}}else{if(Go(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');s=Lo,a=null,c=Ao,d=n}return f&&c==="text/plain"&&(d=f,f=void 0),{action:a,method:s.toLowerCase(),encType:c,formData:f,body:d}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Wc(n,r){if(n===!1||n===null||typeof n>"u")throw new Error(r)}function xx(n,r,s){let a=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return a.pathname==="/"?a.pathname=`_root.${s}`:r&&un(a.pathname,r)==="/"?a.pathname=`${r.replace(/\/$/,"")}/_root.${s}`:a.pathname=`${a.pathname.replace(/\/$/,"")}.${s}`,a}async function vx(n,r){if(n.id in r)return r[n.id];try{let s=await import(n.module);return r[n.id]=s,s}catch(s){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(s),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function wx(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function bx(n,r,s){let a=await Promise.all(n.map(async c=>{let f=r.routes[c.route.id];if(f){let d=await vx(f,s);return d.links?d.links():[]}return[]}));return Nx(a.flat(1).filter(wx).filter(c=>c.rel==="stylesheet"||c.rel==="preload").map(c=>c.rel==="stylesheet"?{...c,rel:"prefetch",as:"style"}:{...c,rel:"prefetch"}))}function Eh(n,r,s,a,c,f){let d=(m,g)=>s[g]?m.route.id!==s[g].route.id:!0,p=(m,g)=>{var y;return s[g].pathname!==m.pathname||((y=s[g].route.path)==null?void 0:y.endsWith("*"))&&s[g].params["*"]!==m.params["*"]};return f==="assets"?r.filter((m,g)=>d(m,g)||p(m,g)):f==="data"?r.filter((m,g)=>{var v;let y=a.routes[m.route.id];if(!y||!y.hasLoader)return!1;if(d(m,g)||p(m,g))return!0;if(m.route.shouldRevalidate){let w=m.route.shouldRevalidate({currentUrl:new URL(c.pathname+c.search+c.hash,window.origin),currentParams:((v=s[0])==null?void 0:v.params)||{},nextUrl:new URL(n,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function kx(n,r,{includeHydrateFallback:s}={}){return jx(n.map(a=>{let c=r.routes[a.route.id];if(!c)return[];let f=[c.module];return c.clientActionModule&&(f=f.concat(c.clientActionModule)),c.clientLoaderModule&&(f=f.concat(c.clientLoaderModule)),s&&c.hydrateFallbackModule&&(f=f.concat(c.hydrateFallbackModule)),c.imports&&(f=f.concat(c.imports)),f}).flat(1))}function jx(n){return[...new Set(n)]}function Sx(n){let r={},s=Object.keys(n).sort();for(let a of s)r[a]=n[a];return r}function Nx(n,r){let s=new Set;return new Set(r),n.reduce((a,c)=>{let f=JSON.stringify(Sx(c));return s.has(f)||(s.add(f),a.push({key:f,link:c})),a},[])}function pm(){let n=b.useContext(Wr);return Wc(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function Cx(){let n=b.useContext(Yo);return Wc(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var Hc=b.createContext(void 0);Hc.displayName="FrameworkContext";function mm(){let n=b.useContext(Hc);return Wc(n,"You must render this element inside a <HydratedRouter> element"),n}function Px(n,r){let s=b.useContext(Hc),[a,c]=b.useState(!1),[f,d]=b.useState(!1),{onFocus:p,onBlur:m,onMouseEnter:g,onMouseLeave:y,onTouchStart:v}=r,w=b.useRef(null);b.useEffect(()=>{if(n==="render"&&d(!0),n==="viewport"){let P=M=>{M.forEach(D=>{d(D.isIntersecting)})},A=new IntersectionObserver(P,{threshold:.5});return w.current&&A.observe(w.current),()=>{A.disconnect()}}},[n]),b.useEffect(()=>{if(a){let P=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout(P)}}},[a]);let C=()=>{c(!0)},S=()=>{c(!1),d(!1)};return s?n!=="intent"?[f,w,{}]:[f,w,{onFocus:zi(p,C),onBlur:zi(m,S),onMouseEnter:zi(g,C),onMouseLeave:zi(y,S),onTouchStart:zi(v,C)}]:[!1,w,{}]}function zi(n,r){return s=>{n&&n(s),s.defaultPrevented||r(s)}}function Ex({page:n,...r}){let{router:s}=pm(),a=b.useMemo(()=>rm(s.routes,n,s.basename),[s.routes,n,s.basename]);return a?b.createElement(Rx,{page:n,matches:a,...r}):null}function Tx(n){let{manifest:r,routeModules:s}=mm(),[a,c]=b.useState([]);return b.useEffect(()=>{let f=!1;return bx(n,r,s).then(d=>{f||c(d)}),()=>{f=!0}},[n,r,s]),a}function Rx({page:n,matches:r,...s}){let a=Fn(),{manifest:c,routeModules:f}=mm(),{basename:d}=pm(),{loaderData:p,matches:m}=Cx(),g=b.useMemo(()=>Eh(n,r,m,c,a,"data"),[n,r,m,c,a]),y=b.useMemo(()=>Eh(n,r,m,c,a,"assets"),[n,r,m,c,a]),v=b.useMemo(()=>{if(n===a.pathname+a.search+a.hash)return[];let S=new Set,P=!1;if(r.forEach(M=>{var I;let D=c.routes[M.route.id];!D||!D.hasLoader||(!g.some(K=>K.route.id===M.route.id)&&M.route.id in p&&((I=f[M.route.id])!=null&&I.shouldRevalidate)||D.hasClientLoader?P=!0:S.add(M.route.id))}),S.size===0)return[];let A=xx(n,d,"data");return P&&S.size>0&&A.searchParams.set("_routes",r.filter(M=>S.has(M.route.id)).map(M=>M.route.id).join(",")),[A.pathname+A.search]},[d,p,a,c,g,r,n,f]),w=b.useMemo(()=>kx(y,c),[y,c]),C=Tx(y);return b.createElement(b.Fragment,null,v.map(S=>b.createElement("link",{key:S,rel:"prefetch",as:"fetch",href:S,...s})),w.map(S=>b.createElement("link",{key:S,rel:"modulepreload",href:S,...s})),C.map(({key:S,link:P})=>b.createElement("link",{key:S,...P})))}function Mx(...n){return r=>{n.forEach(s=>{typeof s=="function"?s(r):s!=null&&(s.current=r)})}}var gm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{gm&&(window.__reactRouterVersion="7.7.1")}catch{}function Lx({basename:n,children:r,window:s}){let a=b.useRef();a.current==null&&(a.current=v1({window:s,v5Compat:!0}));let c=a.current,[f,d]=b.useState({action:c.action,location:c.location}),p=b.useCallback(m=>{b.startTransition(()=>d(m))},[d]);return b.useLayoutEffect(()=>c.listen(p),[c,p]),b.createElement(lx,{basename:n,children:r,location:f.location,navigationType:f.action,navigator:c})}var ym=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ir=b.forwardRef(function({onClick:r,discover:s="render",prefetch:a="none",relative:c,reloadDocument:f,replace:d,state:p,target:m,to:g,preventScrollReset:y,viewTransition:v,...w},C){let{basename:S}=b.useContext(Zt),P=typeof g=="string"&&ym.test(g),A,M=!1;if(typeof g=="string"&&P&&(A=g,gm))try{let H=new URL(window.location.href),se=g.startsWith("//")?new URL(H.protocol+g):new URL(g),be=un(se.pathname,S);se.origin===H.origin&&be!=null?g=be+se.search+se.hash:M=!0}catch{Qt(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let D=K1(g,{relative:c}),[I,K,U]=Px(a,w),G=zx(g,{replace:d,state:p,target:m,preventScrollReset:y,relative:c,viewTransition:v});function $(H){r&&r(H),H.defaultPrevented||G(H)}let O=b.createElement("a",{...w,...U,href:A||D,onClick:M||f?r:$,ref:Mx(C,K),target:m,"data-discover":!P&&s==="render"?"true":void 0});return I&&!P?b.createElement(b.Fragment,null,O,b.createElement(Ex,{page:D})):O});ir.displayName="Link";var Ax=b.forwardRef(function({"aria-current":r="page",caseSensitive:s=!1,className:a="",end:c=!1,style:f,to:d,viewTransition:p,children:m,...g},y){let v=ns(d,{relative:g.relative}),w=Fn(),C=b.useContext(Yo),{navigator:S,basename:P}=b.useContext(Zt),A=C!=null&&Bx(v)&&p===!0,M=S.encodeLocation?S.encodeLocation(v).pathname:v.pathname,D=w.pathname,I=C&&C.navigation&&C.navigation.location?C.navigation.location.pathname:null;s||(D=D.toLowerCase(),I=I?I.toLowerCase():null,M=M.toLowerCase()),I&&P&&(I=un(I,P)||I);const K=M!=="/"&&M.endsWith("/")?M.length-1:M.length;let U=D===M||!c&&D.startsWith(M)&&D.charAt(K)==="/",G=I!=null&&(I===M||!c&&I.startsWith(M)&&I.charAt(M.length)==="/"),$={isActive:U,isPending:G,isTransitioning:A},O=U?r:void 0,H;typeof a=="function"?H=a($):H=[a,U?"active":null,G?"pending":null,A?"transitioning":null].filter(Boolean).join(" ");let se=typeof f=="function"?f($):f;return b.createElement(ir,{...g,"aria-current":O,className:H,ref:y,style:se,to:d,viewTransition:p},typeof m=="function"?m($):m)});Ax.displayName="NavLink";var Dx=b.forwardRef(({discover:n="render",fetcherKey:r,navigate:s,reloadDocument:a,replace:c,state:f,method:d=Lo,action:p,onSubmit:m,relative:g,preventScrollReset:y,viewTransition:v,...w},C)=>{let S=Vx(),P=Ox(p,{relative:g}),A=d.toLowerCase()==="get"?"get":"post",M=typeof p=="string"&&ym.test(p),D=I=>{if(m&&m(I),I.defaultPrevented)return;I.preventDefault();let K=I.nativeEvent.submitter,U=(K==null?void 0:K.getAttribute("formmethod"))||d;S(K||I.currentTarget,{fetcherKey:r,method:U,navigate:s,replace:c,state:f,relative:g,preventScrollReset:y,viewTransition:v})};return b.createElement("form",{ref:C,method:A,action:P,onSubmit:a?m:D,...w,"data-discover":!M&&n==="render"?"true":void 0})});Dx.displayName="Form";function Ix(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function xm(n){let r=b.useContext(Wr);return Fe(r,Ix(n)),r}function zx(n,{target:r,replace:s,state:a,preventScrollReset:c,relative:f,viewTransition:d}={}){let p=Y1(),m=Fn(),g=ns(n,{relative:f});return b.useCallback(y=>{if(px(y,r)){y.preventDefault();let v=s!==void 0?s:Ki(m)===Ki(g);p(n,{replace:v,state:a,preventScrollReset:c,relative:f,viewTransition:d})}},[m,p,g,s,a,r,n,c,f,d])}var _x=0,Fx=()=>`__${String(++_x)}__`;function Vx(){let{router:n}=xm("useSubmit"),{basename:r}=b.useContext(Zt),s=ix();return b.useCallback(async(a,c={})=>{let{action:f,method:d,encType:p,formData:m,body:g}=yx(a,r);if(c.navigate===!1){let y=c.fetcherKey||Fx();await n.fetch(y,s,c.action||f,{preventScrollReset:c.preventScrollReset,formData:m,body:g,formMethod:c.method||d,formEncType:c.encType||p,flushSync:c.flushSync})}else await n.navigate(c.action||f,{preventScrollReset:c.preventScrollReset,formData:m,body:g,formMethod:c.method||d,formEncType:c.encType||p,replace:c.replace,state:c.state,fromRouteId:s,flushSync:c.flushSync,viewTransition:c.viewTransition})},[n,r,s])}function Ox(n,{relative:r}={}){let{basename:s}=b.useContext(Zt),a=b.useContext(hn);Fe(a,"useFormAction must be used inside a RouteContext");let[c]=a.matches.slice(-1),f={...ns(n||".",{relative:r})},d=Fn();if(n==null){f.search=d.search;let p=new URLSearchParams(f.search),m=p.getAll("index");if(m.some(y=>y==="")){p.delete("index"),m.filter(v=>v).forEach(v=>p.append("index",v));let y=p.toString();f.search=y?`?${y}`:""}}return(!n||n===".")&&c.route.index&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),s!=="/"&&(f.pathname=f.pathname==="/"?s:cn([s,f.pathname])),Ki(f)}function Bx(n,{relative:r}={}){let s=b.useContext(cm);Fe(s!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=xm("useViewTransitionState"),c=ns(n,{relative:r});if(!s.isTransitioning)return!1;let f=un(s.currentLocation.pathname,a)||s.currentLocation.pathname,d=un(s.nextLocation.pathname,a)||s.nextLocation.pathname;return Fo(c.pathname,d)!=null||Fo(c.pathname,f)!=null}const Kt=Mt.forwardRef(({to:n,children:r,className:s,...a},c)=>l.jsx("a",{href:n,className:s,ref:c,...a,children:r})),kt={div:Mt.forwardRef(({children:n,className:r,initial:s,animate:a,transition:c,whileInView:f,whileHover:d,whileTap:p,style:m,...g},y)=>l.jsx("div",{className:r,style:m,ref:y,...g,children:n})),h2:Mt.forwardRef(({children:n,className:r,initial:s,whileInView:a,transition:c,...f},d)=>l.jsx("h2",{className:r,ref:d,...f,children:n}))},Kc=n=>[Mt.useRef(),!0],$x=({className:n,size:r})=>l.jsx("span",{className:`${n} futuristic-icon`,children:"🔧"}),Ux=({className:n,size:r})=>l.jsx("span",{className:`${n} futuristic-icon`,children:"📍"}),Wx=({className:n,size:r})=>l.jsx("span",{className:`${n} futuristic-icon`,children:"📄"}),Th=({className:n,size:r})=>l.jsx("span",{className:`${n} futuristic-icon`,children:"✅"}),Hx=({className:n,size:r})=>l.jsx("span",{className:`${n} futuristic-icon`,children:"⏱️"}),Kx=({className:n,size:r})=>l.jsx("span",{className:`${n} futuristic-icon`,children:"👥"}),Rh=({className:n,size:r})=>l.jsx("span",{className:`${n} futuristic-icon`,children:"📷"}),Yx=({className:n,size:r})=>l.jsx("span",{className:`${n} futuristic-icon`,children:"⭐"}),Gx=({className:n,size:r})=>l.jsx("span",{className:`${n} futuristic-icon`,children:"✉️"}),Xx=({className:n,size:r})=>l.jsx("span",{className:`${n} futuristic-icon`,children:"🐦"}),Qx=({className:n,size:r})=>l.jsx("span",{className:`${n} futuristic-icon`,children:"📘"}),Zx=({className:n,size:r})=>l.jsx("span",{className:`${n} futuristic-icon`,children:"📸"}),qx=({className:n,size:r})=>l.jsx("span",{className:`${n} futuristic-icon`,children:"💼"}),Jx=({className:n,size:r})=>l.jsx("span",{className:`${n} futuristic-icon`,children:"⚡"}),ev=({className:n,size:r})=>l.jsx("span",{className:`${n} futuristic-icon`,children:"🖥️"}),tv=({className:n,size:r})=>l.jsx("span",{className:`${n} futuristic-icon`,children:"🗂️"}),nv=({className:n,size:r})=>l.jsx("span",{className:`${n} futuristic-icon`,children:"📈"});function rv({icon:n,title:r,description:s,delay:a}){const[c,f]=Kc();return l.jsx(kt.div,{ref:c,className:"feature-card-container",style:{opacity:f?1:0,transform:f?"translateY(0)":"translateY(20px)",transition:`all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${a*.2}s`},children:l.jsxs("div",{className:"feature-card",children:[l.jsxs("div",{className:"feature-icon-wrapper",children:[l.jsx("div",{className:"feature-icon-bg"}),l.jsx("div",{className:"feature-icon",children:n})]}),l.jsx("h5",{className:"feature-title",children:r}),l.jsx("p",{className:"feature-description",children:s}),l.jsx("div",{className:"feature-card-glow"})]})})}function Ql({icon:n,number:r,label:s,suffix:a="",delay:c}){const[f,d]=Kc(),[p,m]=b.useState(0);return b.useEffect(()=>{if(d){const g=parseInt(r.replace(/\D/g,"")),y=g/50,v=setInterval(()=>{m(w=>w<g?Math.ceil(w+y):(clearInterval(v),g))},30);return()=>clearInterval(v)}},[d,r]),l.jsxs(kt.div,{ref:f,className:"stat-card",style:{opacity:d?1:0,transform:d?"translateY(0)":"translateY(20px)",transition:`all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${c*.2}s`},children:[l.jsxs("div",{className:"stat-icon-wrapper",children:[l.jsx("div",{className:"stat-icon-bg"}),l.jsx("div",{className:"stat-icon",children:n})]}),l.jsxs("h3",{className:"stat-number",children:[p,a]}),l.jsx("p",{className:"stat-label",children:s}),l.jsx("div",{className:"stat-card-glow"})]})}function iv({name:n,role:r,content:s,avatar:a,rating:c,delay:f}){const[d,p]=Kc();return l.jsxs(kt.div,{ref:d,className:"testimonial-card",style:{opacity:p?1:0,transform:p?"translateY(0)":"translateY(20px)",transition:`all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${f*.2}s`},children:[l.jsxs("div",{className:"testimonial-content",children:[l.jsx("div",{className:"testimonial-rating",children:[...Array(5)].map((m,g)=>l.jsx(Yx,{className:g<c?"filled":""},g))}),l.jsxs("p",{className:"testimonial-text",children:['"',s,'"']}),l.jsxs("div",{className:"testimonial-author",children:[l.jsx("div",{className:"testimonial-avatar",children:a}),l.jsxs("div",{children:[l.jsx("h4",{className:"testimonial-name",children:n}),l.jsx("p",{className:"testimonial-role",children:r})]})]})]}),l.jsx("div",{className:"testimonial-card-glow"})]})}function sv(){const[n,r]=b.useState(""),[s,a]=b.useState(!1),[c,f]=b.useState(!1),d=p=>{p.preventDefault(),f(!0),setTimeout(()=>{f(!1),a(!0),r(""),setTimeout(()=>a(!1),3e3)},1e3)};return l.jsxs("section",{className:"newsletter-section",children:[l.jsx("div",{className:"container",children:l.jsxs("div",{className:"newsletter-content",children:[l.jsxs("div",{className:"newsletter-info",children:[l.jsx("div",{className:"newsletter-badge",children:"STAY UPDATED"}),l.jsx("h2",{className:"newsletter-title",children:"Join Our Community"}),l.jsx("p",{className:"newsletter-subtitle",children:"Subscribe to our newsletter for the latest updates on SnapFix AI features and community impact stories."})]}),l.jsxs("form",{className:"newsletter-form",onSubmit:d,children:[l.jsxs("div",{className:"input-group",children:[l.jsx("input",{type:"email",value:n,onChange:p=>r(p.target.value),placeholder:"Enter your email address",required:!0,className:"newsletter-input"}),l.jsx("button",{type:"submit",className:"newsletter-button",disabled:c||s,children:c?"Subscribing...":s?"Subscribed!":"Subscribe"})]}),l.jsx("p",{className:"newsletter-privacy",children:"We respect your privacy. Unsubscribe at any time."})]})]})}),l.jsx("div",{className:"newsletter-particles"})]})}function ov(){const[n,r]=b.useState(0),[s,a]=b.useState(!1),[c,f]=b.useState(!1),[d,p]=b.useState(0),m=b.useRef(null);b.useEffect(()=>{const S=()=>{r(window.scrollY),f(window.scrollY>500)};window.addEventListener("scroll",S,{passive:!0});const P=setTimeout(()=>{a(!0)},500),A=setInterval(()=>{p(M=>(M+1)%4)},5e3);return()=>{window.removeEventListener("scroll",S),clearTimeout(P),clearInterval(A)}},[]);const g=()=>{window.scrollTo({top:0,behavior:"smooth"})},y=b.useMemo(()=>[...Array(20)].map((S,P)=>({left:Math.random()*100,top:Math.random()*100,width:10+Math.random()*30,height:10+Math.random()*30,opacity:.05+Math.random()*.15,animationDelay:Math.random()*5,animationDuration:8+Math.random()*6,blur:Math.random()>.5?"blur(1px)":"none",shape:Math.random()>.5?"circle":"square",rotation:Math.random()*360})),[]),v=b.useMemo(()=>[...Array(50)].map((S,P)=>({left:Math.random()*100,top:Math.random()*100,size:1+Math.random()*3,opacity:.2+Math.random()*.6,animationDelay:Math.random()*5,animationDuration:10+Math.random()*20,speed:.5+Math.random()*2})),[]),w=[{name:"Sarah Johnson",role:"City Council Member",content:"SnapFix AI has revolutionized how we handle citizen reports. The AI classification saves us countless hours of manual sorting.",avatar:"👩‍💼",rating:5},{name:"Michael Chen",role:"Small Business Owner",content:"When my storefront was damaged, SnapFix AI helped me report it instantly. The issue was resolved within 24 hours!",avatar:"👨‍💼",rating:5},{name:"Emma Rodriguez",role:"Community Volunteer",content:"I love how easy it is to report issues in my neighborhood. SnapFix AI makes community engagement effortless.",avatar:"👩‍🦱",rating:4},{name:"David Wilson",role:"Public Works Director",content:"The automated routing system has reduced our response time by 60%. SnapFix AI is a game-changer for municipal services.",avatar:"👨‍💼",rating:5}],C=[{icon:l.jsx(ev,{className:"feature-icon-element",size:32}),title:"Neural Network Analysis",description:"Our advanced neural networks instantly classify issues with 95% accuracy using deep learning algorithms."},{icon:l.jsx(Ux,{className:"feature-icon-element",size:32}),title:"Precision Location",description:"GPS and visual data pinpoint exact locations for faster response times with satellite precision."},{icon:l.jsx(Wx,{className:"feature-icon-element",size:32}),title:"Automated Reporting",description:"Generate professional reports automatically sent to the appropriate authorities in real-time."},{icon:l.jsx(Rh,{className:"feature-icon-element",size:32}),title:"Visual Recognition",description:"Advanced computer vision identifies issues from photos with remarkable accuracy using CNN models."},{icon:l.jsx(nv,{className:"feature-icon-element",size:32}),title:"Predictive Analytics",description:"Our AI predicts potential issues before they escalate, enabling proactive community management."},{icon:l.jsx(tv,{className:"feature-icon-element",size:32}),title:"Multi-Layer Security",description:"Your reports are protected with end-to-end encryption and blockchain verification."}];return l.jsxs("div",{className:`home-page ${s?"loaded":""}`,children:[l.jsxs(Kt,{to:"/report",className:"fab",children:[l.jsx("div",{className:"fab-pulse"}),l.jsx($x,{className:"fab-icon"})]}),c&&l.jsx("button",{className:"scroll-top",onClick:g,children:"↑"}),l.jsx("section",{className:"hero-section",ref:m,children:l.jsxs("div",{className:"hero-bg",style:{transform:`translateY(${n*.4}px)`,background:"linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)",minHeight:"100vh",position:"relative",display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden"},children:[l.jsx("div",{className:"floating-elements",children:y.map((S,P)=>l.jsx("div",{className:`floating-element ${S.shape}`,style:{position:"absolute",left:`${S.left}%`,top:`${S.top}%`,width:`${S.width}px`,height:`${S.height}px`,backgroundColor:"rgba(99, 102, 241, 0.1)",borderRadius:S.shape==="circle"?"50%":"4px",filter:S.blur,animation:`float ${S.animationDuration}s ease-in-out infinite`,animationDelay:`${S.animationDelay}s`,transform:`rotate(${S.rotation}deg)`,pointerEvents:"none"}},P))}),l.jsx("div",{className:"particles",children:v.map((S,P)=>l.jsx("div",{className:"particle",style:{position:"absolute",left:`${S.left}%`,top:`${S.top}%`,width:`${S.size}px`,height:`${S.size}px`,backgroundColor:"rgba(165, 180, 252, 0.7)",borderRadius:"50%",animation:`float-particle ${S.animationDuration}s linear infinite`,animationDelay:`${S.animationDelay}s`,pointerEvents:"none",opacity:S.opacity}},P))}),l.jsx("div",{className:"grid-overlay"}),l.jsxs("div",{className:"holographic-elements",children:[l.jsx("div",{className:"holographic-circle"}),l.jsx("div",{className:"holographic-ring"}),l.jsx("div",{className:"holographic-triangle"})]}),l.jsx("div",{className:"neural-network",children:[...Array(15)].map((S,P)=>l.jsx("div",{className:"neural-node"},P))}),l.jsx("div",{className:"hero-content",children:l.jsxs(kt.div,{className:"hero-text",style:{textAlign:"center",color:"white",zIndex:10,position:"relative",maxWidth:"900px",padding:"0 20px"},children:[l.jsx("div",{className:"hero-badge",children:"AI-POWERED SOLUTION"}),l.jsxs("h1",{className:"hero-title",children:[l.jsx("span",{className:"brand-name",children:"SnapFix"})," AI"]}),l.jsx("p",{className:"hero-subtitle",children:"Transform your community with intelligent issue reporting. Our AI analyzes and categorizes problems in real-time for faster resolution."}),l.jsxs("div",{className:"hero-cta",children:[l.jsxs(Kt,{to:"/report",className:"cta-button primary",children:["Report an Issue ",l.jsx("span",{children:"→"})]}),l.jsx(Kt,{to:"/demo",className:"cta-button secondary",children:"Watch Demo"})]})]})}),l.jsx("div",{className:"scroll-indicator",children:l.jsx("div",{className:"scroll-dot"})})]})}),l.jsx("section",{className:"features-section",children:l.jsxs("div",{className:"container",children:[l.jsxs("div",{className:"section-header",children:[l.jsx(kt.div,{className:"section-badge",children:"CORE FEATURES"}),l.jsxs(kt.h2,{className:"section-title",children:["Why ",l.jsx("span",{className:"brand-highlight",children:"SnapFix AI"})," Stands Apart"]}),l.jsx("p",{className:"section-subtitle",children:"Our advanced AI technology streamlines the entire issue resolution process"})]}),l.jsx("div",{className:"features-grid",children:C.map((S,P)=>l.jsx(rv,{icon:S.icon,title:S.title,description:S.description,delay:P},P))})]})}),l.jsx("section",{className:"stats-section",children:l.jsxs("div",{className:"container",children:[l.jsxs("div",{className:"section-header light",children:[l.jsx(kt.div,{className:"section-badge",children:"IMPACT METRICS"}),l.jsxs(kt.h2,{className:"section-title",children:["Making a ",l.jsx("span",{className:"brand-highlight",children:"Measurable Difference"})]})]}),l.jsxs("div",{className:"stats-grid",children:[l.jsx(Ql,{icon:l.jsx(Th,{className:"stat-icon-element",size:28}),number:"12K+",label:"Issues Resolved",delay:0}),l.jsx(Ql,{icon:l.jsx(Hx,{className:"stat-icon-element",size:28}),number:"18",label:"Avg. Resolution (hours)",delay:1}),l.jsx(Ql,{icon:l.jsx(Kx,{className:"stat-icon-element",size:28}),number:"95%",label:"User Satisfaction",suffix:"%",delay:2})]})]})}),l.jsx("section",{className:"how-it-works-section",children:l.jsxs("div",{className:"container",children:[l.jsxs("div",{className:"section-header",children:[l.jsx(kt.div,{className:"section-badge",children:"HOW IT WORKS"}),l.jsxs(kt.h2,{className:"section-title",children:["Simple ",l.jsx("span",{className:"brand-highlight",children:"3-Step Process"})]}),l.jsx("p",{className:"section-subtitle",children:"Report issues in seconds with our intuitive AI-powered system"})]}),l.jsxs("div",{className:"process-steps",children:[l.jsxs("div",{className:"process-step",children:[l.jsx("div",{className:"step-number",children:"1"}),l.jsx("div",{className:"step-icon",children:l.jsx(Rh,{className:"step-icon-element",size:32})}),l.jsx("h3",{className:"step-title",children:"Snap a Photo"}),l.jsx("p",{className:"step-description",children:"Take a picture of the issue with your smartphone"})]}),l.jsxs("div",{className:"process-step",children:[l.jsx("div",{className:"step-number",children:"2"}),l.jsx("div",{className:"step-icon",children:l.jsx(Jx,{className:"step-icon-element",size:32})}),l.jsx("h3",{className:"step-title",children:"AI Analysis"}),l.jsx("p",{className:"step-description",children:"Our AI analyzes and categorizes the issue automatically"})]}),l.jsxs("div",{className:"process-step",children:[l.jsx("div",{className:"step-number",children:"3"}),l.jsx("div",{className:"step-icon",children:l.jsx(Th,{className:"step-icon-element",size:32})}),l.jsx("h3",{className:"step-title",children:"Get Resolution"}),l.jsx("p",{className:"step-description",children:"The issue is routed to the appropriate team for resolution"})]})]})]})}),l.jsx("section",{className:"testimonials-section",children:l.jsxs("div",{className:"container",children:[l.jsxs("div",{className:"section-header",children:[l.jsx(kt.div,{className:"section-badge",children:"SUCCESS STORIES"}),l.jsxs(kt.h2,{className:"section-title",children:["What Our ",l.jsx("span",{className:"brand-highlight",children:"Users Say"})]})]}),l.jsxs("div",{className:"testimonials-container",children:[l.jsx("div",{className:"testimonials-grid",children:w.map((S,P)=>l.jsx(iv,{name:S.name,role:S.role,content:S.content,avatar:S.avatar,rating:S.rating,delay:P},P))}),l.jsx("div",{className:"testimonial-indicators",children:w.map((S,P)=>l.jsx("button",{className:`indicator ${P===d?"active":""}`,onClick:()=>p(P)},P))})]})]})}),l.jsx(sv,{}),l.jsx("section",{className:"cta-section",children:l.jsx("div",{className:"container",children:l.jsxs(kt.div,{className:"cta-content",children:[l.jsx("div",{className:"cta-badge",children:"JOIN THE MOVEMENT"}),l.jsx("h2",{className:"cta-title",children:"Ready to Improve Your Community?"}),l.jsx("p",{className:"cta-subtitle",children:"Join thousands of users making a difference with AI-powered issue reporting"}),l.jsxs("div",{className:"cta-buttons",children:[l.jsx(Kt,{to:"/report",className:"cta-button primary",children:"Get Started Now"}),l.jsx(Kt,{to:"/features",className:"cta-button secondary",children:"Learn More"})]})]})})}),l.jsx("footer",{className:"footer",children:l.jsx("div",{className:"container",children:l.jsxs("div",{className:"footer-content",children:[l.jsxs("div",{className:"footer-logo",children:[l.jsx("span",{className:"brand-name",children:"SnapFix"})," AI"]}),l.jsxs("div",{className:"footer-links",children:[l.jsx(Kt,{to:"/about",children:"About"}),l.jsx(Kt,{to:"/features",children:"Features"}),l.jsx(Kt,{to:"/contact",children:"Contact"}),l.jsx(Kt,{to:"/privacy",children:"Privacy"}),l.jsx(Kt,{to:"/terms",children:"Terms"})]}),l.jsxs("div",{className:"footer-social",children:[l.jsx("a",{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer",children:l.jsx(Xx,{className:"social-icon"})}),l.jsx("a",{href:"https://facebook.com",target:"_blank",rel:"noopener noreferrer",children:l.jsx(Qx,{className:"social-icon"})}),l.jsx("a",{href:"https://instagram.com",target:"_blank",rel:"noopener noreferrer",children:l.jsx(Zx,{className:"social-icon"})}),l.jsx("a",{href:"https://linkedin.com",target:"_blank",rel:"noopener noreferrer",children:l.jsx(qx,{className:"social-icon"})})]}),l.jsxs("div",{className:"footer-newsletter",children:[l.jsx("p",{children:"Subscribe to our newsletter for updates"}),l.jsxs("form",{className:"footer-newsletter-form",children:[l.jsx("input",{type:"email",placeholder:"Your email",className:"footer-newsletter-input"}),l.jsx("button",{type:"submit",className:"footer-newsletter-button",children:l.jsx(Gx,{})})]})]}),l.jsxs("div",{className:"footer-copyright",children:["© ",new Date().getFullYear()," SnapFix AI. All rights reserved."]})]})})}),l.jsx("style",{children:`
        .home-page {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
          opacity: 0;
          transition: opacity 0.5s ease;
          background: #0f172a;
          color: #e2e8f0;
          overflow-x: hidden;
        }
        
        .home-page.loaded {
          opacity: 1;
        }
        
        /* Futuristic Icon Styling */
        .futuristic-icon {
          filter: drop-shadow(0 0 8px rgba(99, 102, 241, 0.6));
          transition: all 0.3s ease;
        }
        
        .futuristic-icon:hover {
          filter: drop-shadow(0 0 12px rgba(99, 102, 241, 0.8));
          transform: scale(1.1);
        }
        
        /* Floating Action Button */
        .fab {
          position: fixed;
          bottom: 30px;
          right: 30px;
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background: linear-gradient(135deg, #6366f1, #4f46e5);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 20px rgba(99, 102, 241, 0.4);
          z-index: 1000;
          text-decoration: none;
          transition: all 0.3s ease;
          overflow: hidden;
        }
        
        .fab-pulse {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(99, 102, 241, 0.3);
          border-radius: 50%;
          animation: pulse 2s infinite;
        }
        
        .fab:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 25px rgba(99, 102, 241, 0.6);
        }
        
        .fab-icon {
          font-size: 28px;
          position: relative;
          z-index: 1;
        }
        
        /* Scroll to Top Button */
        .scroll-top {
          position: fixed;
          bottom: 30px;
          right: 110px;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: rgba(30, 41, 59, 0.8);
          backdrop-filter: blur(10px);
          color: #a5b4fc;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          font-weight: bold;
          border: 1px solid rgba(165, 180, 252, 0.3);
          z-index: 1000;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .scroll-top:hover {
          background: rgba(99, 102, 241, 0.2);
          border-color: rgba(165, 180, 252, 0.5);
        }
        
        /* Hero Section */
        .hero-section {
          position: relative;
          overflow: hidden;
        }
        
        .hero-badge {
          display: inline-block;
          background: rgba(99, 102, 241, 0.15);
          backdrop-filter: blur(10px);
          color: #a5b4fc;
          padding: 8px 20px;
          border-radius: 30px;
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 1px;
          margin-bottom: 1.5rem;
          border: 1px solid rgba(165, 180, 252, 0.2);
          box-shadow: 0 4px 15px rgba(99, 102, 241, 0.2);
        }
        
        .hero-title {
          font-size: clamp(3.5rem, 10vw, 7rem);
          font-weight: 800;
          margin-bottom: 1.5rem;
          line-height: 1.1;
          text-shadow: 0 4px 12px rgba(0,0,0,0.3);
          letter-spacing: -1px;
          background: linear-gradient(90deg, #ffffff, #e2e8f0, #cbd5e1);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        
        .brand-name {
          position: relative;
          display: inline-block;
        }
        
        .brand-name::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 12px;
          background: rgba(99, 102, 241, 0.3);
          border-radius: 6px;
          z-index: -1;
          filter: blur(8px);
        }
        
        .hero-subtitle {
          font-size: clamp(1.3rem, 3vw, 1.8rem);
          margin-bottom: 2.5rem;
          opacity: 0.9;
          line-height: 1.6;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
          font-weight: 300;
          color: #cbd5e1;
        }
        
        .hero-cta {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          flex-wrap: wrap;
        }
        
        .cta-button {
          display: inline-flex;
          align-items: center;
          padding: 1.2rem 2.5rem;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          font-size: 1.1rem;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }
        
        .cta-button.primary {
          background: linear-gradient(135deg, #6366f1, #4f46e5);
          color: white;
          box-shadow: 0 10px 25px rgba(99, 102, 241, 0.4);
        }
        
        .cta-button.primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(99, 102, 241, 0.6);
        }
        
        .cta-button.secondary {
          background: rgba(30, 41, 59, 0.6);
          backdrop-filter: blur(10px);
          color: #a5b4fc;
          border: 1px solid rgba(165, 180, 252, 0.3);
        }
        
        .cta-button.secondary:hover {
          background: rgba(99, 102, 241, 0.2);
          border-color: rgba(165, 180, 252, 0.5);
          transform: translateY(-3px);
        }
        
        .cta-button span {
          margin-left: 8px;
          transition: transform 0.3s ease;
        }
        
        .cta-button:hover span {
          transform: translateX(3px);
        }
        
        /* Grid Overlay */
        .grid-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            linear-gradient(rgba(99, 102, 241, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.05) 1px, transparent 1px);
          background-size: 40px 40px;
          z-index: 1;
        }
        
        /* Particles */
        .particles {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1;
        }
        
        .particle {
          position: absolute;
          background: #a5b4fc;
          border-radius: 50%;
        }
        
        /* Holographic Elements */
        .holographic-elements {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1;
          pointer-events: none;
        }
        
        .holographic-circle {
          position: absolute;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          border: 2px solid rgba(99, 102, 241, 0.3);
          top: 20%;
          left: 10%;
          animation: rotate 20s linear infinite;
        }
        
        .holographic-ring {
          position: absolute;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          border: 2px solid rgba(165, 180, 252, 0.4);
          top: 60%;
          right: 15%;
          animation: rotate 15s linear infinite reverse;
        }
        
        .holographic-triangle {
          position: absolute;
          width: 0;
          height: 0;
          border-left: 100px solid transparent;
          border-right: 100px solid transparent;
          border-bottom: 173px solid rgba(99, 102, 241, 0.2);
          top: 30%;
          right: 20%;
          animation: float 8s ease-in-out infinite;
        }
        
        /* Neural Network */
        .neural-network {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1;
          pointer-events: none;
        }
        
        .neural-node {
          position: absolute;
          width: 8px;
          height: 8px;
          background: rgba(165, 180, 252, 0.6);
          border-radius: 50%;
          box-shadow: 0 0 10px rgba(165, 180, 252, 0.8);
        }
        
        /* Scroll Indicator */
        .scroll-indicator {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
        }
        
        .scroll-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(165, 180, 252, 0.7);
          animation: pulse 2s infinite;
        }
        
        /* Features Section */
        .features-section {
          padding: 8rem 0;
          background: linear-gradient(135deg, #1e293b, #0f172a);
          position: relative;
        }
        
        .section-header {
          text-align: center;
          margin-bottom: 5rem;
        }
        
        .section-badge {
          display: inline-block;
          background: linear-gradient(135deg, #6366f1, #4f46e5);
          color: white;
          padding: 8px 20px;
          border-radius: 30px;
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 1px;
          margin-bottom: 1rem;
          box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
        }
        
        .section-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 700;
          margin-bottom: 1rem;
          color: #f1f5f9;
        }
        
        .section-subtitle {
          font-size: 1.3rem;
          color: #94a3b8;
          max-width: 700px;
          margin: 0 auto;
        }
        
        .brand-highlight {
          color: #a5b4fc;
          position: relative;
        }
        
        .brand-highlight::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 8px;
          background: rgba(99, 102, 241, 0.3);
          border-radius: 4px;
          z-index: -1;
          filter: blur(6px);
        }
        
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 3rem;
          margin-top: 3rem;
        }
        
        .feature-card {
          background: rgba(30, 41, 59, 0.6);
          backdrop-filter: blur(10px);
          padding: 2.5rem;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2), 0 1px 8px rgba(0, 0, 0, 0.1);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          text-align: center;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(99, 102, 241, 0.1);
        }
        
        .feature-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 5px;
          background: linear-gradient(90deg, #6366f1, #4f46e5);
        }
        
        .feature-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(99, 102, 241, 0.2), 0 1px 10px rgba(0, 0, 0, 0.1);
          border-color: rgba(99, 102, 241, 0.3);
        }
        
        .feature-icon-wrapper {
          position: relative;
          margin-bottom: 1.8rem;
        }
        
        .feature-icon-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(79, 70, 229, 0.1));
          border-radius: 20px;
          filter: blur(20px);
          z-index: -1;
        }
        
        .feature-icon {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100px;
          height: 100px;
          background: rgba(30, 41, 59, 0.8);
          border-radius: 20px;
          margin: 0 auto;
          color: #a5b4fc;
          font-size: 2.5rem;
          position: relative;
          z-index: 1;
          border: 1px solid rgba(99, 102, 241, 0.2);
        }
        
        .feature-icon-element {
          color: #a5b4fc;
          font-size: 2.5rem;
        }
        
        .feature-title {
          font-size: 1.6rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: #f1f5f9;
        }
        
        .feature-description {
          color: #94a3b8;
          line-height: 1.7;
          margin: 0;
          font-size: 1.1rem;
        }
        
        .feature-card-glow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at center, rgba(99, 102, 241, 0.1) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }
        
        .feature-card:hover .feature-card-glow {
          opacity: 1;
        }
        
        /* Stats Section */
        .stats-section {
          padding: 8rem 0;
          background: linear-gradient(135deg, #1e293b, #0f172a);
          color: white;
          position: relative;
          overflow: hidden;
        }
        
        .stats-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSg5OSwgMTAyLCAyNDEsIDAuMDMpIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm4pIi8+PC9zdmc+');
          opacity: 0.4;
          z-index: 0;
        }
        
        .section-header.light .section-badge {
          background: rgba(99, 102, 241, 0.2);
          backdrop-filter: blur(10px);
        }
        
        .section-header.light .section-title {
          color: white;
        }
        
        .section-header.light .brand-highlight::after {
          background: rgba(165, 180, 252, 0.3);
        }
        
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 3rem;
          position: relative;
          z-index: 1;
        }
        
        .stat-card {
          text-align: center;
          transition: transform 0.3s ease;
          background: rgba(30, 41, 59, 0.6);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 2.5rem;
          border: 1px solid rgba(99, 102, 241, 0.1);
        }
        
        .stat-card:hover {
          transform: translateY(-10px);
        }
        
        .stat-icon-wrapper {
          position: relative;
          margin: 0 auto 1.5rem;
          width: 80px;
          height: 80px;
        }
        
        .stat-icon-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(79, 70, 229, 0.1));
          border-radius: 50%;
          filter: blur(15px);
          z-index: -1;
        }
        
        .stat-icon {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
          background: rgba(30, 41, 59, 0.8);
          border-radius: 50%;
          color: #a5b4fc;
          font-size: 2rem;
          position: relative;
          z-index: 1;
          border: 1px solid rgba(99, 102, 241, 0.2);
        }
        
        .stat-number {
          font-size: clamp(3.5rem, 6vw, 5rem);
          font-weight: 800;
          margin-bottom: 0.5rem;
          line-height: 1;
          background: linear-gradient(90deg, #ffffff, #e2e8f0);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        
        .stat-label {
          font-size: 1.3rem;
          opacity: 0.9;
          margin: 0;
          font-weight: 300;
          color: #cbd5e1;
        }
        
        .stat-card-glow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at center, rgba(99, 102, 241, 0.1) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
          border-radius: 20px;
        }
        
        .stat-card:hover .stat-card-glow {
          opacity: 1;
        }
        
        /* How It Works Section */
        .how-it-works-section {
          padding: 8rem 0;
          background: linear-gradient(135deg, #1e293b, #0f172a);
        }
        
        .process-steps {
          display: flex;
          justify-content: space-between;
          margin-top: 5rem;
          position: relative;
        }
        
        .process-steps::before {
          content: '';
          position: absolute;
          top: 50px;
          left: 100px;
          right: 100px;
          height: 4px;
          background: linear-gradient(90deg, #6366f1, #4f46e5);
          z-index: 0;
        }
        
        .process-step {
          position: relative;
          z-index: 1;
          text-align: center;
          width: 30%;
        }
        
        .step-number {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background: linear-gradient(135deg, #6366f1, #4f46e5);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          font-weight: 700;
          margin: 0 auto 1.5rem;
          box-shadow: 0 10px 25px rgba(99, 102, 241, 0.3);
        }
        
        .step-icon {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          background: rgba(30, 41, 59, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(99, 102, 241, 0.2);
        }
        
        .step-icon-element {
          color: #a5b4fc;
          font-size: 2.5rem;
        }
        
        .step-title {
          font-size: 1.6rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: #f1f5f9;
        }
        
        .step-description {
          color: #94a3b8;
          line-height: 1.6;
          font-size: 1.1rem;
        }
        
        /* Testimonials Section */
        .testimonials-section {
          padding: 8rem 0;
          background: linear-gradient(135deg, #1e293b, #0f172a);
        }
        
        .testimonials-container {
          position: relative;
        }
        
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2.5rem;
        }
        
        .testimonial-card {
          background: rgba(30, 41, 59, 0.6);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2), 0 1px 8px rgba(0, 0, 0, 0.1);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          height: 100%;
          overflow: hidden;
          border: 1px solid rgba(99, 102, 241, 0.1);
        }
        
        .testimonial-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(99, 102, 241, 0.2), 0 1px 10px rgba(0, 0, 0, 0.1);
          border-color: rgba(99, 102, 241, 0.3);
        }
        
        .testimonial-content {
          padding: 2.5rem;
        }
        
        .testimonial-rating {
          display: flex;
          margin-bottom: 1.5rem;
        }
        
        .testimonial-rating .fi-star {
          color: #fbbf24;
          margin-right: 0.25rem;
        }
        
        .testimonial-text {
          font-size: 1.2rem;
          line-height: 1.7;
          color: #e2e8f0;
          margin-bottom: 2rem;
          font-style: italic;
        }
        
        .testimonial-author {
          display: flex;
          align-items: center;
        }
        
        .testimonial-avatar {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.8rem;
          background: linear-gradient(135deg, #6366f1, #4f46e5);
          color: white;
          margin-right: 1.2rem;
        }
        
        .testimonial-name {
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 0.3rem;
          color: #f1f5f9;
        }
        
        .testimonial-role {
          font-size: 1rem;
          color: #94a3b8;
          margin: 0;
        }
        
        .testimonial-card-glow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at center, rgba(99, 102, 241, 0.1) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
          border-radius: 20px;
        }
        
        .testimonial-card:hover .testimonial-card-glow {
          opacity: 1;
        }
        
        .testimonial-indicators {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 2rem;
        }
        
        .indicator {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(165, 180, 252, 0.3);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .indicator.active {
          background: #a5b4fc;
          transform: scale(1.2);
        }
        
        /* Newsletter Section */
        .newsletter-section {
          padding: 7rem 0;
          background: linear-gradient(135deg, #1e293b, #0f172a);
          position: relative;
          overflow: hidden;
        }
        
        .newsletter-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 80% 20%, rgba(99, 102, 241, 0.2), transparent 50%);
          z-index: 0;
        }
        
        .newsletter-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1000px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        
        .newsletter-info {
          flex: 1;
          padding-right: 2rem;
        }
        
        .newsletter-badge {
          display: inline-block;
          background: rgba(99, 102, 241, 0.2);
          color: #a5b4fc;
          padding: 8px 20px;
          border-radius: 30px;
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 1px;
          margin-bottom: 1rem;
        }
        
        .newsletter-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: white;
        }
        
        .newsletter-subtitle {
          font-size: 1.2rem;
          color: #cbd5e1;
          line-height: 1.6;
        }
        
        .newsletter-form {
          flex: 1;
          max-width: 500px;
        }
        
        .input-group {
          display: flex;
          background: rgba(30, 41, 59, 0.8);
          border-radius: 50px;
          overflow: hidden;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(99, 102, 241, 0.2);
        }
        
        .newsletter-input {
          flex: 1;
          border: none;
          padding: 1.2rem 1.5rem;
          font-size: 1.1rem;
          outline: none;
          background: transparent;
          color: #e2e8f0;
        }
        
        .newsletter-input::placeholder {
          color: #94a3b8;
        }
        
        .newsletter-button {
          background: linear-gradient(135deg, #6366f1, #4f46e5);
          color: white;
          border: none;
          padding: 1.2rem 1.5rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .newsletter-button:hover {
          background: linear-gradient(135deg, #4f46e5, #4338ca);
        }
        
        .newsletter-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        
        .newsletter-privacy {
          font-size: 0.9rem;
          color: #94a3b8;
          margin-top: 0.8rem;
        }
        
        .newsletter-particles {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 0;
          pointer-events: none;
        }
        
        .newsletter-particles::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSg5OSwgMTAyLCAyNDEsIDAuMDMpIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm4pIi8+PC9zdmc+');
          opacity: 0.4;
        }
        
        /* CTA Section */
        .cta-section {
          padding: 8rem 0;
          background: linear-gradient(135deg, #1e293b, #0f172a);
          position: relative;
          overflow: hidden;
        }
        
        .cta-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 80% 20%, rgba(99, 102, 241, 0.2), transparent 50%);
          z-index: 0;
        }
        
        .cta-content {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        
        .cta-badge {
          display: inline-block;
          background: rgba(99, 102, 241, 0.2);
          color: #a5b4fc;
          padding: 8px 20px;
          border-radius: 30px;
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 1px;
          margin-bottom: 1rem;
        }
        
        .cta-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 700;
          margin-bottom: 1.5rem;
          color: white;
        }
        
        .cta-subtitle {
          font-size: 1.3rem;
          color: #cbd5e1;
          margin-bottom: 3rem;
          line-height: 1.6;
        }
        
        .cta-buttons {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          flex-wrap: wrap;
        }
        
        .cta-button.secondary {
          background: rgba(30, 41, 59, 0.6);
          color: #a5b4fc;
          border: 1px solid rgba(165, 180, 252, 0.3);
          backdrop-filter: blur(10px);
        }
        
        .cta-button.secondary:hover {
          background: rgba(99, 102, 241, 0.2);
          border-color: rgba(165, 180, 252, 0.5);
        }
        
        /* Footer */
        .footer {
          padding: 4rem 0;
          background: #0f172a;
          color: #94a3b8;
          position: relative;
        }
        
        .footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.3), transparent);
        }
        
        .footer-content {
          display: grid;
          grid-template-columns: 1fr 2fr 1fr;
          gap: 2rem;
          align-items: center;
        }
        
        .footer-logo {
          font-size: 2rem;
          font-weight: 800;
          margin-bottom: 1rem;
          background: linear-gradient(90deg, #a5b4fc, #818cf8);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        
        .footer-links {
          display: flex;
          gap: 1.8rem;
          justify-content: center;
          flex-wrap: wrap;
        }
        
        .footer-links a {
          color: #94a3b8;
          text-decoration: none;
          transition: all 0.3s ease;
          font-size: 1rem;
        }
        
        .footer-links a:hover {
          color: #a5b4fc;
          transform: translateY(-2px);
        }
        
        .footer-social {
          display: flex;
          gap: 1.2rem;
          justify-content: flex-end;
        }
        
        .social-icon {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          background: rgba(30, 41, 59, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #94a3b8;
          transition: all 0.3s ease;
          border: 1px solid rgba(99, 102, 241, 0.1);
        }
        
        .social-icon:hover {
          background: rgba(99, 102, 241, 0.2);
          color: #a5b4fc;
          transform: translateY(-3px);
          border-color: rgba(99, 102, 241, 0.3);
        }
        
        .footer-newsletter {
          grid-column: span 3;
          margin-top: 2.5rem;
          padding-top: 2.5rem;
          border-top: 1px solid rgba(99, 102, 241, 0.1);
          text-align: center;
        }
        
        .footer-newsletter p {
          margin-bottom: 1.2rem;
          font-size: 1.1rem;
        }
        
        .footer-newsletter-form {
          display: flex;
          max-width: 400px;
          margin: 0 auto;
          background: rgba(30, 41, 59, 0.6);
          border-radius: 50px;
          overflow: hidden;
          border: 1px solid rgba(99, 102, 241, 0.2);
        }
        
        .footer-newsletter-input {
          flex: 1;
          border: none;
          background: transparent;
          color: #e2e8f0;
          padding: 0.9rem 1.2rem;
          outline: none;
        }
        
        .footer-newsletter-input::placeholder {
          color: #94a3b8;
        }
        
        .footer-newsletter-button {
          background: linear-gradient(135deg, #6366f1, #4f46e5);
          color: white;
          border: none;
          padding: 0.9rem 1.2rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .footer-newsletter-button:hover {
          background: linear-gradient(135deg, #4f46e5, #4338ca);
        }
        
        .footer-copyright {
          grid-column: span 3;
          margin-top: 2.5rem;
          padding-top: 2.5rem;
          border-top: 1px solid rgba(99, 102, 241, 0.1);
          text-align: center;
          font-size: 1rem;
          opacity: 0.7;
        }
        
        /* Animations */
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        
        @keyframes float-particle {
          0% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(0) translateX(20px);
          }
          75% {
            transform: translateY(20px) translateX(10px);
          }
          100% {
            transform: translateY(0) translateX(0);
          }
        }
        
        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.7;
          }
          50% {
            transform: scale(1.5);
            opacity: 0.3;
          }
        }
        
        .floating-element {
          animation: float 8s ease-in-out infinite;
        }
        
        /* Responsive Design */
        @media (max-width: 1024px) {
          .features-grid {
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
          }
          
          .stats-grid {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
          }
          
          .testimonials-grid {
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          }
          
          .hero-content {
            padding: 2rem 1rem;
          }
          
          .container {
            padding: 0 1.5rem;
          }
          
          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }
          
          .cta-button {
            width: 100%;
            max-width: 300px;
          }
          
          .process-steps {
            flex-direction: column;
            align-items: center;
            gap: 3rem;
          }
          
          .process-steps::before {
            display: none;
          }
          
          .process-step {
            width: 100%;
          }
          
          .newsletter-content {
            flex-direction: column;
            text-align: center;
          }
          
          .newsletter-info {
            padding-right: 0;
            margin-bottom: 2rem;
          }
          
          .footer-content {
            grid-template-columns: 1fr;
            gap: 2rem;
            text-align: center;
          }
          
          .footer-social {
            justify-content: center;
          }
          
          .footer-newsletter {
            grid-column: span 1;
          }
        }
        
        @media (max-width: 768px) {
          .hero-title {
            font-size: 3rem;
          }
          
          .hero-subtitle {
            font-size: 1.2rem;
          }
          
          .cta-button, .cta-button-secondary {
            padding: 1rem 1.8rem;
            font-size: 1rem;
          }
          
          .section-title {
            font-size: 2rem;
          }
          
          .features-grid, .stats-grid, .testimonials-grid {
            grid-template-columns: 1fr;
          }
          
          .footer-links {
            flex-direction: column;
            gap: 0.8rem;
          }
          
          .scroll-top {
            right: 20px;
          }
        }
        
        @media (max-width: 480px) {
          .feature-card {
            padding: 1.8rem;
          }
          
          .hero-title {
            font-size: 2.5rem;
          }
          
          .cta-button, .cta-button-secondary {
            padding: 0.9rem 1.5rem;
            font-size: 0.95rem;
          }
          
          .fab {
            width: 60px;
            height: 60px;
            bottom: 20px;
            right: 20px;
          }
          
          .fab-icon {
            font-size: 24px;
          }
        }
      `})]})}const Yc=b.createContext({});function Xo(n){const r=b.useRef(null);return r.current===null&&(r.current=n()),r.current}const Gc=typeof window<"u",Xc=Gc?b.useLayoutEffect:b.useEffect,Qo=b.createContext(null);function Qc(n,r){n.indexOf(r)===-1&&n.push(r)}function Zc(n,r){const s=n.indexOf(r);s>-1&&n.splice(s,1)}const dn=(n,r,s)=>s>r?r:s<n?n:s;let qc=()=>{};const fn={},vm=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n);function wm(n){return typeof n=="object"&&n!==null}const bm=n=>/^0[^.\s]+$/u.test(n);function Jc(n){let r;return()=>(r===void 0&&(r=n()),r)}const Lt=n=>n,av=(n,r)=>s=>r(n(s)),rs=(...n)=>n.reduce(av),Yi=(n,r,s)=>{const a=r-n;return a===0?1:(s-n)/a};class eu{constructor(){this.subscriptions=[]}add(r){return Qc(this.subscriptions,r),()=>Zc(this.subscriptions,r)}notify(r,s,a){const c=this.subscriptions.length;if(c)if(c===1)this.subscriptions[0](r,s,a);else for(let f=0;f<c;f++){const d=this.subscriptions[f];d&&d(r,s,a)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Yt=n=>n*1e3,Gt=n=>n/1e3;function km(n,r){return r?n*(1e3/r):0}const jm=(n,r,s)=>(((1-3*s+3*r)*n+(3*s-6*r))*n+3*r)*n,lv=1e-7,cv=12;function uv(n,r,s,a,c){let f,d,p=0;do d=r+(s-r)/2,f=jm(d,a,c)-n,f>0?s=d:r=d;while(Math.abs(f)>lv&&++p<cv);return d}function is(n,r,s,a){if(n===r&&s===a)return Lt;const c=f=>uv(f,0,1,n,s);return f=>f===0||f===1?f:jm(c(f),r,a)}const Sm=n=>r=>r<=.5?n(2*r)/2:(2-n(2*(1-r)))/2,Nm=n=>r=>1-n(1-r),Cm=is(.33,1.53,.69,.99),tu=Nm(Cm),Pm=Sm(tu),Em=n=>(n*=2)<1?.5*tu(n):.5*(2-Math.pow(2,-10*(n-1))),nu=n=>1-Math.sin(Math.acos(n)),Tm=Nm(nu),Rm=Sm(nu),dv=is(.42,0,1,1),fv=is(0,0,.58,1),Mm=is(.42,0,.58,1),hv=n=>Array.isArray(n)&&typeof n[0]!="number",Lm=n=>Array.isArray(n)&&typeof n[0]=="number",pv={linear:Lt,easeIn:dv,easeInOut:Mm,easeOut:fv,circIn:nu,circInOut:Rm,circOut:Tm,backIn:tu,backInOut:Pm,backOut:Cm,anticipate:Em},mv=n=>typeof n=="string",Mh=n=>{if(Lm(n)){qc(n.length===4);const[r,s,a,c]=n;return is(r,s,a,c)}else if(mv(n))return pv[n];return n},So=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function gv(n,r){let s=new Set,a=new Set,c=!1,f=!1;const d=new WeakSet;let p={delta:0,timestamp:0,isProcessing:!1};function m(y){d.has(y)&&(g.schedule(y),n()),y(p)}const g={schedule:(y,v=!1,w=!1)=>{const S=w&&c?s:a;return v&&d.add(y),S.has(y)||S.add(y),y},cancel:y=>{a.delete(y),d.delete(y)},process:y=>{if(p=y,c){f=!0;return}c=!0,[s,a]=[a,s],s.forEach(m),s.clear(),c=!1,f&&(f=!1,g.process(y))}};return g}const yv=40;function Am(n,r){let s=!1,a=!0;const c={delta:0,timestamp:0,isProcessing:!1},f=()=>s=!0,d=So.reduce((I,K)=>(I[K]=gv(f),I),{}),{setup:p,read:m,resolveKeyframes:g,preUpdate:y,update:v,preRender:w,render:C,postRender:S}=d,P=()=>{const I=fn.useManualTiming?c.timestamp:performance.now();s=!1,fn.useManualTiming||(c.delta=a?1e3/60:Math.max(Math.min(I-c.timestamp,yv),1)),c.timestamp=I,c.isProcessing=!0,p.process(c),m.process(c),g.process(c),y.process(c),v.process(c),w.process(c),C.process(c),S.process(c),c.isProcessing=!1,s&&r&&(a=!1,n(P))},A=()=>{s=!0,a=!0,c.isProcessing||n(P)};return{schedule:So.reduce((I,K)=>{const U=d[K];return I[K]=(G,$=!1,O=!1)=>(s||A(),U.schedule(G,$,O)),I},{}),cancel:I=>{for(let K=0;K<So.length;K++)d[So[K]].cancel(I)},state:c,steps:d}}const{schedule:De,cancel:zn,state:et,steps:Zl}=Am(typeof requestAnimationFrame<"u"?requestAnimationFrame:Lt,!0);let Do;function xv(){Do=void 0}const yt={now:()=>(Do===void 0&&yt.set(et.isProcessing||fn.useManualTiming?et.timestamp:performance.now()),Do),set:n=>{Do=n,queueMicrotask(xv)}},Dm=n=>r=>typeof r=="string"&&r.startsWith(n),ru=Dm("--"),vv=Dm("var(--"),iu=n=>vv(n)?wv.test(n.split("/*")[0].trim()):!1,wv=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Hr={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},Gi={...Hr,transform:n=>dn(0,1,n)},No={...Hr,default:1},Bi=n=>Math.round(n*1e5)/1e5,su=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function bv(n){return n==null}const kv=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,ou=(n,r)=>s=>!!(typeof s=="string"&&kv.test(s)&&s.startsWith(n)||r&&!bv(s)&&Object.prototype.hasOwnProperty.call(s,r)),Im=(n,r,s)=>a=>{if(typeof a!="string")return a;const[c,f,d,p]=a.match(su);return{[n]:parseFloat(c),[r]:parseFloat(f),[s]:parseFloat(d),alpha:p!==void 0?parseFloat(p):1}},jv=n=>dn(0,255,n),ql={...Hr,transform:n=>Math.round(jv(n))},sr={test:ou("rgb","red"),parse:Im("red","green","blue"),transform:({red:n,green:r,blue:s,alpha:a=1})=>"rgba("+ql.transform(n)+", "+ql.transform(r)+", "+ql.transform(s)+", "+Bi(Gi.transform(a))+")"};function Sv(n){let r="",s="",a="",c="";return n.length>5?(r=n.substring(1,3),s=n.substring(3,5),a=n.substring(5,7),c=n.substring(7,9)):(r=n.substring(1,2),s=n.substring(2,3),a=n.substring(3,4),c=n.substring(4,5),r+=r,s+=s,a+=a,c+=c),{red:parseInt(r,16),green:parseInt(s,16),blue:parseInt(a,16),alpha:c?parseInt(c,16)/255:1}}const gc={test:ou("#"),parse:Sv,transform:sr.transform},ss=n=>({test:r=>typeof r=="string"&&r.endsWith(n)&&r.split(" ").length===1,parse:parseFloat,transform:r=>`${r}${n}`}),In=ss("deg"),Xt=ss("%"),ce=ss("px"),Nv=ss("vh"),Cv=ss("vw"),Lh={...Xt,parse:n=>Xt.parse(n)/100,transform:n=>Xt.transform(n*100)},Ir={test:ou("hsl","hue"),parse:Im("hue","saturation","lightness"),transform:({hue:n,saturation:r,lightness:s,alpha:a=1})=>"hsla("+Math.round(n)+", "+Xt.transform(Bi(r))+", "+Xt.transform(Bi(s))+", "+Bi(Gi.transform(a))+")"},He={test:n=>sr.test(n)||gc.test(n)||Ir.test(n),parse:n=>sr.test(n)?sr.parse(n):Ir.test(n)?Ir.parse(n):gc.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?sr.transform(n):Ir.transform(n),getAnimatableNone:n=>{const r=He.parse(n);return r.alpha=0,He.transform(r)}},Pv=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function Ev(n){var r,s;return isNaN(n)&&typeof n=="string"&&(((r=n.match(su))==null?void 0:r.length)||0)+(((s=n.match(Pv))==null?void 0:s.length)||0)>0}const zm="number",_m="color",Tv="var",Rv="var(",Ah="${}",Mv=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Xi(n){const r=n.toString(),s=[],a={color:[],number:[],var:[]},c=[];let f=0;const p=r.replace(Mv,m=>(He.test(m)?(a.color.push(f),c.push(_m),s.push(He.parse(m))):m.startsWith(Rv)?(a.var.push(f),c.push(Tv),s.push(m)):(a.number.push(f),c.push(zm),s.push(parseFloat(m))),++f,Ah)).split(Ah);return{values:s,split:p,indexes:a,types:c}}function Fm(n){return Xi(n).values}function Vm(n){const{split:r,types:s}=Xi(n),a=r.length;return c=>{let f="";for(let d=0;d<a;d++)if(f+=r[d],c[d]!==void 0){const p=s[d];p===zm?f+=Bi(c[d]):p===_m?f+=He.transform(c[d]):f+=c[d]}return f}}const Lv=n=>typeof n=="number"?0:He.test(n)?He.getAnimatableNone(n):n;function Av(n){const r=Fm(n);return Vm(n)(r.map(Lv))}const _n={test:Ev,parse:Fm,createTransformer:Vm,getAnimatableNone:Av};function Jl(n,r,s){return s<0&&(s+=1),s>1&&(s-=1),s<1/6?n+(r-n)*6*s:s<1/2?r:s<2/3?n+(r-n)*(2/3-s)*6:n}function Dv({hue:n,saturation:r,lightness:s,alpha:a}){n/=360,r/=100,s/=100;let c=0,f=0,d=0;if(!r)c=f=d=s;else{const p=s<.5?s*(1+r):s+r-s*r,m=2*s-p;c=Jl(m,p,n+1/3),f=Jl(m,p,n),d=Jl(m,p,n-1/3)}return{red:Math.round(c*255),green:Math.round(f*255),blue:Math.round(d*255),alpha:a}}function Vo(n,r){return s=>s>0?r:n}const _e=(n,r,s)=>n+(r-n)*s,ec=(n,r,s)=>{const a=n*n,c=s*(r*r-a)+a;return c<0?0:Math.sqrt(c)},Iv=[gc,sr,Ir],zv=n=>Iv.find(r=>r.test(n));function Dh(n){const r=zv(n);if(!r)return!1;let s=r.parse(n);return r===Ir&&(s=Dv(s)),s}const Ih=(n,r)=>{const s=Dh(n),a=Dh(r);if(!s||!a)return Vo(n,r);const c={...s};return f=>(c.red=ec(s.red,a.red,f),c.green=ec(s.green,a.green,f),c.blue=ec(s.blue,a.blue,f),c.alpha=_e(s.alpha,a.alpha,f),sr.transform(c))},yc=new Set(["none","hidden"]);function _v(n,r){return yc.has(n)?s=>s<=0?n:r:s=>s>=1?r:n}function Fv(n,r){return s=>_e(n,r,s)}function au(n){return typeof n=="number"?Fv:typeof n=="string"?iu(n)?Vo:He.test(n)?Ih:Bv:Array.isArray(n)?Om:typeof n=="object"?He.test(n)?Ih:Vv:Vo}function Om(n,r){const s=[...n],a=s.length,c=n.map((f,d)=>au(f)(f,r[d]));return f=>{for(let d=0;d<a;d++)s[d]=c[d](f);return s}}function Vv(n,r){const s={...n,...r},a={};for(const c in s)n[c]!==void 0&&r[c]!==void 0&&(a[c]=au(n[c])(n[c],r[c]));return c=>{for(const f in a)s[f]=a[f](c);return s}}function Ov(n,r){const s=[],a={color:0,var:0,number:0};for(let c=0;c<r.values.length;c++){const f=r.types[c],d=n.indexes[f][a[f]],p=n.values[d]??0;s[c]=p,a[f]++}return s}const Bv=(n,r)=>{const s=_n.createTransformer(r),a=Xi(n),c=Xi(r);return a.indexes.var.length===c.indexes.var.length&&a.indexes.color.length===c.indexes.color.length&&a.indexes.number.length>=c.indexes.number.length?yc.has(n)&&!c.values.length||yc.has(r)&&!a.values.length?_v(n,r):rs(Om(Ov(a,c),c.values),s):Vo(n,r)};function Bm(n,r,s){return typeof n=="number"&&typeof r=="number"&&typeof s=="number"?_e(n,r,s):au(n)(n,r)}const $v=n=>{const r=({timestamp:s})=>n(s);return{start:(s=!0)=>De.update(r,s),stop:()=>zn(r),now:()=>et.isProcessing?et.timestamp:yt.now()}},$m=(n,r,s=10)=>{let a="";const c=Math.max(Math.round(r/s),2);for(let f=0;f<c;f++)a+=Math.round(n(f/(c-1))*1e4)/1e4+", ";return`linear(${a.substring(0,a.length-2)})`},Oo=2e4;function lu(n){let r=0;const s=50;let a=n.next(r);for(;!a.done&&r<Oo;)r+=s,a=n.next(r);return r>=Oo?1/0:r}function Uv(n,r=100,s){const a=s({...n,keyframes:[0,r]}),c=Math.min(lu(a),Oo);return{type:"keyframes",ease:f=>a.next(c*f).value/r,duration:Gt(c)}}const Wv=5;function Um(n,r,s){const a=Math.max(r-Wv,0);return km(s-n(a),r-a)}const Oe={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},tc=.001;function Hv({duration:n=Oe.duration,bounce:r=Oe.bounce,velocity:s=Oe.velocity,mass:a=Oe.mass}){let c,f,d=1-r;d=dn(Oe.minDamping,Oe.maxDamping,d),n=dn(Oe.minDuration,Oe.maxDuration,Gt(n)),d<1?(c=g=>{const y=g*d,v=y*n,w=y-s,C=xc(g,d),S=Math.exp(-v);return tc-w/C*S},f=g=>{const v=g*d*n,w=v*s+s,C=Math.pow(d,2)*Math.pow(g,2)*n,S=Math.exp(-v),P=xc(Math.pow(g,2),d);return(-c(g)+tc>0?-1:1)*((w-C)*S)/P}):(c=g=>{const y=Math.exp(-g*n),v=(g-s)*n+1;return-tc+y*v},f=g=>{const y=Math.exp(-g*n),v=(s-g)*(n*n);return y*v});const p=5/n,m=Yv(c,f,p);if(n=Yt(n),isNaN(m))return{stiffness:Oe.stiffness,damping:Oe.damping,duration:n};{const g=Math.pow(m,2)*a;return{stiffness:g,damping:d*2*Math.sqrt(a*g),duration:n}}}const Kv=12;function Yv(n,r,s){let a=s;for(let c=1;c<Kv;c++)a=a-n(a)/r(a);return a}function xc(n,r){return n*Math.sqrt(1-r*r)}const Gv=["duration","bounce"],Xv=["stiffness","damping","mass"];function zh(n,r){return r.some(s=>n[s]!==void 0)}function Qv(n){let r={velocity:Oe.velocity,stiffness:Oe.stiffness,damping:Oe.damping,mass:Oe.mass,isResolvedFromDuration:!1,...n};if(!zh(n,Xv)&&zh(n,Gv))if(n.visualDuration){const s=n.visualDuration,a=2*Math.PI/(s*1.2),c=a*a,f=2*dn(.05,1,1-(n.bounce||0))*Math.sqrt(c);r={...r,mass:Oe.mass,stiffness:c,damping:f}}else{const s=Hv(n);r={...r,...s,mass:Oe.mass},r.isResolvedFromDuration=!0}return r}function Bo(n=Oe.visualDuration,r=Oe.bounce){const s=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:r}:n;let{restSpeed:a,restDelta:c}=s;const f=s.keyframes[0],d=s.keyframes[s.keyframes.length-1],p={done:!1,value:f},{stiffness:m,damping:g,mass:y,duration:v,velocity:w,isResolvedFromDuration:C}=Qv({...s,velocity:-Gt(s.velocity||0)}),S=w||0,P=g/(2*Math.sqrt(m*y)),A=d-f,M=Gt(Math.sqrt(m/y)),D=Math.abs(A)<5;a||(a=D?Oe.restSpeed.granular:Oe.restSpeed.default),c||(c=D?Oe.restDelta.granular:Oe.restDelta.default);let I;if(P<1){const U=xc(M,P);I=G=>{const $=Math.exp(-P*M*G);return d-$*((S+P*M*A)/U*Math.sin(U*G)+A*Math.cos(U*G))}}else if(P===1)I=U=>d-Math.exp(-M*U)*(A+(S+M*A)*U);else{const U=M*Math.sqrt(P*P-1);I=G=>{const $=Math.exp(-P*M*G),O=Math.min(U*G,300);return d-$*((S+P*M*A)*Math.sinh(O)+U*A*Math.cosh(O))/U}}const K={calculatedDuration:C&&v||null,next:U=>{const G=I(U);if(C)p.done=U>=v;else{let $=U===0?S:0;P<1&&($=U===0?Yt(S):Um(I,U,G));const O=Math.abs($)<=a,H=Math.abs(d-G)<=c;p.done=O&&H}return p.value=p.done?d:G,p},toString:()=>{const U=Math.min(lu(K),Oo),G=$m($=>K.next(U*$).value,U,30);return U+"ms "+G},toTransition:()=>{}};return K}Bo.applyToOptions=n=>{const r=Uv(n,100,Bo);return n.ease=r.ease,n.duration=Yt(r.duration),n.type="keyframes",n};function vc({keyframes:n,velocity:r=0,power:s=.8,timeConstant:a=325,bounceDamping:c=10,bounceStiffness:f=500,modifyTarget:d,min:p,max:m,restDelta:g=.5,restSpeed:y}){const v=n[0],w={done:!1,value:v},C=O=>p!==void 0&&O<p||m!==void 0&&O>m,S=O=>p===void 0?m:m===void 0||Math.abs(p-O)<Math.abs(m-O)?p:m;let P=s*r;const A=v+P,M=d===void 0?A:d(A);M!==A&&(P=M-v);const D=O=>-P*Math.exp(-O/a),I=O=>M+D(O),K=O=>{const H=D(O),se=I(O);w.done=Math.abs(H)<=g,w.value=w.done?M:se};let U,G;const $=O=>{C(w.value)&&(U=O,G=Bo({keyframes:[w.value,S(w.value)],velocity:Um(I,O,w.value),damping:c,stiffness:f,restDelta:g,restSpeed:y}))};return $(0),{calculatedDuration:null,next:O=>{let H=!1;return!G&&U===void 0&&(H=!0,K(O),$(O)),U!==void 0&&O>=U?G.next(O-U):(!H&&K(O),w)}}}function Zv(n,r,s){const a=[],c=s||fn.mix||Bm,f=n.length-1;for(let d=0;d<f;d++){let p=c(n[d],n[d+1]);if(r){const m=Array.isArray(r)?r[d]||Lt:r;p=rs(m,p)}a.push(p)}return a}function qv(n,r,{clamp:s=!0,ease:a,mixer:c}={}){const f=n.length;if(qc(f===r.length),f===1)return()=>r[0];if(f===2&&r[0]===r[1])return()=>r[1];const d=n[0]===n[1];n[0]>n[f-1]&&(n=[...n].reverse(),r=[...r].reverse());const p=Zv(r,a,c),m=p.length,g=y=>{if(d&&y<n[0])return r[0];let v=0;if(m>1)for(;v<n.length-2&&!(y<n[v+1]);v++);const w=Yi(n[v],n[v+1],y);return p[v](w)};return s?y=>g(dn(n[0],n[f-1],y)):g}function Jv(n,r){const s=n[n.length-1];for(let a=1;a<=r;a++){const c=Yi(0,r,a);n.push(_e(s,1,c))}}function e2(n){const r=[0];return Jv(r,n.length-1),r}function t2(n,r){return n.map(s=>s*r)}function n2(n,r){return n.map(()=>r||Mm).splice(0,n.length-1)}function $i({duration:n=300,keyframes:r,times:s,ease:a="easeInOut"}){const c=hv(a)?a.map(Mh):Mh(a),f={done:!1,value:r[0]},d=t2(s&&s.length===r.length?s:e2(r),n),p=qv(d,r,{ease:Array.isArray(c)?c:n2(r,c)});return{calculatedDuration:n,next:m=>(f.value=p(m),f.done=m>=n,f)}}const r2=n=>n!==null;function cu(n,{repeat:r,repeatType:s="loop"},a,c=1){const f=n.filter(r2),p=c<0||r&&s!=="loop"&&r%2===1?0:f.length-1;return!p||a===void 0?f[p]:a}const i2={decay:vc,inertia:vc,tween:$i,keyframes:$i,spring:Bo};function Wm(n){typeof n.type=="string"&&(n.type=i2[n.type])}class uu{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(r=>{this.resolve=r})}notifyFinished(){this.resolve()}then(r,s){return this.finished.then(r,s)}}const s2=n=>n/100;class du extends uu{constructor(r){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{var a,c;const{motionValue:s}=this.options;s&&s.updatedAt!==yt.now()&&this.tick(yt.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(c=(a=this.options).onStop)==null||c.call(a))},this.options=r,this.initAnimation(),this.play(),r.autoplay===!1&&this.pause()}initAnimation(){const{options:r}=this;Wm(r);const{type:s=$i,repeat:a=0,repeatDelay:c=0,repeatType:f,velocity:d=0}=r;let{keyframes:p}=r;const m=s||$i;m!==$i&&typeof p[0]!="number"&&(this.mixKeyframes=rs(s2,Bm(p[0],p[1])),p=[0,100]);const g=m({...r,keyframes:p});f==="mirror"&&(this.mirroredGenerator=m({...r,keyframes:[...p].reverse(),velocity:-d})),g.calculatedDuration===null&&(g.calculatedDuration=lu(g));const{calculatedDuration:y}=g;this.calculatedDuration=y,this.resolvedDuration=y+c,this.totalDuration=this.resolvedDuration*(a+1)-c,this.generator=g}updateTime(r){const s=Math.round(r-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=s}tick(r,s=!1){const{generator:a,totalDuration:c,mixKeyframes:f,mirroredGenerator:d,resolvedDuration:p,calculatedDuration:m}=this;if(this.startTime===null)return a.next(0);const{delay:g=0,keyframes:y,repeat:v,repeatType:w,repeatDelay:C,type:S,onUpdate:P,finalKeyframe:A}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,r):this.speed<0&&(this.startTime=Math.min(r-c/this.speed,this.startTime)),s?this.currentTime=r:this.updateTime(r);const M=this.currentTime-g*(this.playbackSpeed>=0?1:-1),D=this.playbackSpeed>=0?M<0:M>c;this.currentTime=Math.max(M,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let I=this.currentTime,K=a;if(v){const O=Math.min(this.currentTime,c)/p;let H=Math.floor(O),se=O%1;!se&&O>=1&&(se=1),se===1&&H--,H=Math.min(H,v+1),!!(H%2)&&(w==="reverse"?(se=1-se,C&&(se-=C/p)):w==="mirror"&&(K=d)),I=dn(0,1,se)*p}const U=D?{done:!1,value:y[0]}:K.next(I);f&&(U.value=f(U.value));let{done:G}=U;!D&&m!==null&&(G=this.playbackSpeed>=0?this.currentTime>=c:this.currentTime<=0);const $=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&G);return $&&S!==vc&&(U.value=cu(y,this.options,A,this.speed)),P&&P(U.value),$&&this.finish(),U}then(r,s){return this.finished.then(r,s)}get duration(){return Gt(this.calculatedDuration)}get time(){return Gt(this.currentTime)}set time(r){var s;r=Yt(r),this.currentTime=r,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=r:this.driver&&(this.startTime=this.driver.now()-r/this.playbackSpeed),(s=this.driver)==null||s.start(!1)}get speed(){return this.playbackSpeed}set speed(r){this.updateTime(yt.now());const s=this.playbackSpeed!==r;this.playbackSpeed=r,s&&(this.time=Gt(this.currentTime))}play(){var c,f;if(this.isStopped)return;const{driver:r=$v,startTime:s}=this.options;this.driver||(this.driver=r(d=>this.tick(d))),(f=(c=this.options).onPlay)==null||f.call(c);const a=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=a):this.holdTime!==null?this.startTime=a-this.holdTime:this.startTime||(this.startTime=s??a),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(yt.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var r,s;this.notifyFinished(),this.teardown(),this.state="finished",(s=(r=this.options).onComplete)==null||s.call(r)}cancel(){var r,s;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(s=(r=this.options).onCancel)==null||s.call(r)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(r){return this.startTime=0,this.tick(r,!0)}attachTimeline(r){var s;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(s=this.driver)==null||s.stop(),r.observe(this)}}function o2(n){for(let r=1;r<n.length;r++)n[r]??(n[r]=n[r-1])}const or=n=>n*180/Math.PI,wc=n=>{const r=or(Math.atan2(n[1],n[0]));return bc(r)},a2={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:n=>(Math.abs(n[0])+Math.abs(n[3]))/2,rotate:wc,rotateZ:wc,skewX:n=>or(Math.atan(n[1])),skewY:n=>or(Math.atan(n[2])),skew:n=>(Math.abs(n[1])+Math.abs(n[2]))/2},bc=n=>(n=n%360,n<0&&(n+=360),n),_h=wc,Fh=n=>Math.sqrt(n[0]*n[0]+n[1]*n[1]),Vh=n=>Math.sqrt(n[4]*n[4]+n[5]*n[5]),l2={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Fh,scaleY:Vh,scale:n=>(Fh(n)+Vh(n))/2,rotateX:n=>bc(or(Math.atan2(n[6],n[5]))),rotateY:n=>bc(or(Math.atan2(-n[2],n[0]))),rotateZ:_h,rotate:_h,skewX:n=>or(Math.atan(n[4])),skewY:n=>or(Math.atan(n[1])),skew:n=>(Math.abs(n[1])+Math.abs(n[4]))/2};function kc(n){return n.includes("scale")?1:0}function jc(n,r){if(!n||n==="none")return kc(r);const s=n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let a,c;if(s)a=l2,c=s;else{const p=n.match(/^matrix\(([-\d.e\s,]+)\)$/u);a=a2,c=p}if(!c)return kc(r);const f=a[r],d=c[1].split(",").map(u2);return typeof f=="function"?f(d):d[f]}const c2=(n,r)=>{const{transform:s="none"}=getComputedStyle(n);return jc(s,r)};function u2(n){return parseFloat(n.trim())}const Kr=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Yr=new Set(Kr),Oh=n=>n===Hr||n===ce,d2=new Set(["x","y","z"]),f2=Kr.filter(n=>!d2.has(n));function h2(n){const r=[];return f2.forEach(s=>{const a=n.getValue(s);a!==void 0&&(r.push([s,a.get()]),a.set(s.startsWith("scale")?1:0))}),r}const ar={width:({x:n},{paddingLeft:r="0",paddingRight:s="0"})=>n.max-n.min-parseFloat(r)-parseFloat(s),height:({y:n},{paddingTop:r="0",paddingBottom:s="0"})=>n.max-n.min-parseFloat(r)-parseFloat(s),top:(n,{top:r})=>parseFloat(r),left:(n,{left:r})=>parseFloat(r),bottom:({y:n},{top:r})=>parseFloat(r)+(n.max-n.min),right:({x:n},{left:r})=>parseFloat(r)+(n.max-n.min),x:(n,{transform:r})=>jc(r,"x"),y:(n,{transform:r})=>jc(r,"y")};ar.translateX=ar.x;ar.translateY=ar.y;const lr=new Set;let Sc=!1,Nc=!1,Cc=!1;function Hm(){if(Nc){const n=Array.from(lr).filter(a=>a.needsMeasurement),r=new Set(n.map(a=>a.element)),s=new Map;r.forEach(a=>{const c=h2(a);c.length&&(s.set(a,c),a.render())}),n.forEach(a=>a.measureInitialState()),r.forEach(a=>{a.render();const c=s.get(a);c&&c.forEach(([f,d])=>{var p;(p=a.getValue(f))==null||p.set(d)})}),n.forEach(a=>a.measureEndState()),n.forEach(a=>{a.suspendedScrollY!==void 0&&window.scrollTo(0,a.suspendedScrollY)})}Nc=!1,Sc=!1,lr.forEach(n=>n.complete(Cc)),lr.clear()}function Km(){lr.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(Nc=!0)})}function p2(){Cc=!0,Km(),Hm(),Cc=!1}class fu{constructor(r,s,a,c,f,d=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...r],this.onComplete=s,this.name=a,this.motionValue=c,this.element=f,this.isAsync=d}scheduleResolve(){this.state="scheduled",this.isAsync?(lr.add(this),Sc||(Sc=!0,De.read(Km),De.resolveKeyframes(Hm))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:r,name:s,element:a,motionValue:c}=this;if(r[0]===null){const f=c==null?void 0:c.get(),d=r[r.length-1];if(f!==void 0)r[0]=f;else if(a&&s){const p=a.readValue(s,d);p!=null&&(r[0]=p)}r[0]===void 0&&(r[0]=d),c&&f===void 0&&c.set(r[0])}o2(r)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(r=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,r),lr.delete(this)}cancel(){this.state==="scheduled"&&(lr.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const m2=n=>n.startsWith("--");function g2(n,r,s){m2(r)?n.style.setProperty(r,s):n.style[r]=s}const y2=Jc(()=>window.ScrollTimeline!==void 0),x2={};function v2(n,r){const s=Jc(n);return()=>x2[r]??s()}const Ym=v2(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Oi=([n,r,s,a])=>`cubic-bezier(${n}, ${r}, ${s}, ${a})`,Bh={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Oi([0,.65,.55,1]),circOut:Oi([.55,0,1,.45]),backIn:Oi([.31,.01,.66,-.59]),backOut:Oi([.33,1.53,.69,.99])};function Gm(n,r){if(n)return typeof n=="function"?Ym()?$m(n,r):"ease-out":Lm(n)?Oi(n):Array.isArray(n)?n.map(s=>Gm(s,r)||Bh.easeOut):Bh[n]}function w2(n,r,s,{delay:a=0,duration:c=300,repeat:f=0,repeatType:d="loop",ease:p="easeOut",times:m}={},g=void 0){const y={[r]:s};m&&(y.offset=m);const v=Gm(p,c);Array.isArray(v)&&(y.easing=v);const w={delay:a,duration:c,easing:Array.isArray(v)?"linear":v,fill:"both",iterations:f+1,direction:d==="reverse"?"alternate":"normal"};return g&&(w.pseudoElement=g),n.animate(y,w)}function Xm(n){return typeof n=="function"&&"applyToOptions"in n}function b2({type:n,...r}){return Xm(n)&&Ym()?n.applyToOptions(r):(r.duration??(r.duration=300),r.ease??(r.ease="easeOut"),r)}class k2 extends uu{constructor(r){if(super(),this.finishedTime=null,this.isStopped=!1,!r)return;const{element:s,name:a,keyframes:c,pseudoElement:f,allowFlatten:d=!1,finalKeyframe:p,onComplete:m}=r;this.isPseudoElement=!!f,this.allowFlatten=d,this.options=r,qc(typeof r.type!="string");const g=b2(r);this.animation=w2(s,a,c,g,f),g.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!f){const y=cu(c,this.options,p,this.speed);this.updateMotionValue?this.updateMotionValue(y):g2(s,a,y),this.animation.cancel()}m==null||m(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var r,s;(s=(r=this.animation).finish)==null||s.call(r)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:r}=this;r==="idle"||r==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var r,s;this.isPseudoElement||(s=(r=this.animation).commitStyles)==null||s.call(r)}get duration(){var s,a;const r=((a=(s=this.animation.effect)==null?void 0:s.getComputedTiming)==null?void 0:a.call(s).duration)||0;return Gt(Number(r))}get time(){return Gt(Number(this.animation.currentTime)||0)}set time(r){this.finishedTime=null,this.animation.currentTime=Yt(r)}get speed(){return this.animation.playbackRate}set speed(r){r<0&&(this.finishedTime=null),this.animation.playbackRate=r}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(r){this.animation.startTime=r}attachTimeline({timeline:r,observe:s}){var a;return this.allowFlatten&&((a=this.animation.effect)==null||a.updateTiming({easing:"linear"})),this.animation.onfinish=null,r&&y2()?(this.animation.timeline=r,Lt):s(this)}}const Qm={anticipate:Em,backInOut:Pm,circInOut:Rm};function j2(n){return n in Qm}function S2(n){typeof n.ease=="string"&&j2(n.ease)&&(n.ease=Qm[n.ease])}const $h=10;class N2 extends k2{constructor(r){S2(r),Wm(r),super(r),r.startTime&&(this.startTime=r.startTime),this.options=r}updateMotionValue(r){const{motionValue:s,onUpdate:a,onComplete:c,element:f,...d}=this.options;if(!s)return;if(r!==void 0){s.set(r);return}const p=new du({...d,autoplay:!1}),m=Yt(this.finishedTime??this.time);s.setWithVelocity(p.sample(m-$h).value,p.sample(m).value,$h),p.stop()}}const Uh=(n,r)=>r==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(_n.test(n)||n==="0")&&!n.startsWith("url("));function C2(n){const r=n[0];if(n.length===1)return!0;for(let s=0;s<n.length;s++)if(n[s]!==r)return!0}function P2(n,r,s,a){const c=n[0];if(c===null)return!1;if(r==="display"||r==="visibility")return!0;const f=n[n.length-1],d=Uh(c,r),p=Uh(f,r);return!d||!p?!1:C2(n)||(s==="spring"||Xm(s))&&a}function Pc(n){n.duration=0,n.type}const E2=new Set(["opacity","clipPath","filter","transform"]),T2=Jc(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function R2(n){var y;const{motionValue:r,name:s,repeatDelay:a,repeatType:c,damping:f,type:d}=n;if(!(((y=r==null?void 0:r.owner)==null?void 0:y.current)instanceof HTMLElement))return!1;const{onUpdate:m,transformTemplate:g}=r.owner.getProps();return T2()&&s&&E2.has(s)&&(s!=="transform"||!g)&&!m&&!a&&c!=="mirror"&&f!==0&&d!=="inertia"}const M2=40;class L2 extends uu{constructor({autoplay:r=!0,delay:s=0,type:a="keyframes",repeat:c=0,repeatDelay:f=0,repeatType:d="loop",keyframes:p,name:m,motionValue:g,element:y,...v}){var S;super(),this.stop=()=>{var P,A;this._animation&&(this._animation.stop(),(P=this.stopTimeline)==null||P.call(this)),(A=this.keyframeResolver)==null||A.cancel()},this.createdAt=yt.now();const w={autoplay:r,delay:s,type:a,repeat:c,repeatDelay:f,repeatType:d,name:m,motionValue:g,element:y,...v},C=(y==null?void 0:y.KeyframeResolver)||fu;this.keyframeResolver=new C(p,(P,A,M)=>this.onKeyframesResolved(P,A,w,!M),m,g,y),(S=this.keyframeResolver)==null||S.scheduleResolve()}onKeyframesResolved(r,s,a,c){this.keyframeResolver=void 0;const{name:f,type:d,velocity:p,delay:m,isHandoff:g,onUpdate:y}=a;this.resolvedAt=yt.now(),P2(r,f,d,p)||((fn.instantAnimations||!m)&&(y==null||y(cu(r,a,s))),r[0]=r[r.length-1],Pc(a),a.repeat=0);const w={startTime:c?this.resolvedAt?this.resolvedAt-this.createdAt>M2?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:s,...a,keyframes:r},C=!g&&R2(w)?new N2({...w,element:w.motionValue.owner.current}):new du(w);C.finished.then(()=>this.notifyFinished()).catch(Lt),this.pendingTimeline&&(this.stopTimeline=C.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=C}get finished(){return this._animation?this.animation.finished:this._finished}then(r,s){return this.finished.finally(r).then(()=>{})}get animation(){var r;return this._animation||((r=this.keyframeResolver)==null||r.resume(),p2()),this._animation}get duration(){return this.animation.duration}get time(){return this.animation.time}set time(r){this.animation.time=r}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(r){this.animation.speed=r}get startTime(){return this.animation.startTime}attachTimeline(r){return this._animation?this.stopTimeline=this.animation.attachTimeline(r):this.pendingTimeline=r,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var r;this._animation&&this.animation.cancel(),(r=this.keyframeResolver)==null||r.cancel()}}const A2=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function D2(n){const r=A2.exec(n);if(!r)return[,];const[,s,a,c]=r;return[`--${s??a}`,c]}function Zm(n,r,s=1){const[a,c]=D2(n);if(!a)return;const f=window.getComputedStyle(r).getPropertyValue(a);if(f){const d=f.trim();return vm(d)?parseFloat(d):d}return iu(c)?Zm(c,r,s+1):c}function hu(n,r){return(n==null?void 0:n[r])??(n==null?void 0:n.default)??n}const qm=new Set(["width","height","top","left","right","bottom",...Kr]),I2={test:n=>n==="auto",parse:n=>n},Jm=n=>r=>r.test(n),e0=[Hr,ce,Xt,In,Cv,Nv,I2],Wh=n=>e0.find(Jm(n));function z2(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||bm(n):!0}const _2=new Set(["brightness","contrast","saturate","opacity"]);function F2(n){const[r,s]=n.slice(0,-1).split("(");if(r==="drop-shadow")return n;const[a]=s.match(su)||[];if(!a)return n;const c=s.replace(a,"");let f=_2.has(r)?1:0;return a!==s&&(f*=100),r+"("+f+c+")"}const V2=/\b([a-z-]*)\(.*?\)/gu,Ec={..._n,getAnimatableNone:n=>{const r=n.match(V2);return r?r.map(F2).join(" "):n}},Hh={...Hr,transform:Math.round},O2={rotate:In,rotateX:In,rotateY:In,rotateZ:In,scale:No,scaleX:No,scaleY:No,scaleZ:No,skew:In,skewX:In,skewY:In,distance:ce,translateX:ce,translateY:ce,translateZ:ce,x:ce,y:ce,z:ce,perspective:ce,transformPerspective:ce,opacity:Gi,originX:Lh,originY:Lh,originZ:ce},pu={borderWidth:ce,borderTopWidth:ce,borderRightWidth:ce,borderBottomWidth:ce,borderLeftWidth:ce,borderRadius:ce,radius:ce,borderTopLeftRadius:ce,borderTopRightRadius:ce,borderBottomRightRadius:ce,borderBottomLeftRadius:ce,width:ce,maxWidth:ce,height:ce,maxHeight:ce,top:ce,right:ce,bottom:ce,left:ce,padding:ce,paddingTop:ce,paddingRight:ce,paddingBottom:ce,paddingLeft:ce,margin:ce,marginTop:ce,marginRight:ce,marginBottom:ce,marginLeft:ce,backgroundPositionX:ce,backgroundPositionY:ce,...O2,zIndex:Hh,fillOpacity:Gi,strokeOpacity:Gi,numOctaves:Hh},B2={...pu,color:He,backgroundColor:He,outlineColor:He,fill:He,stroke:He,borderColor:He,borderTopColor:He,borderRightColor:He,borderBottomColor:He,borderLeftColor:He,filter:Ec,WebkitFilter:Ec},t0=n=>B2[n];function n0(n,r){let s=t0(n);return s!==Ec&&(s=_n),s.getAnimatableNone?s.getAnimatableNone(r):void 0}const $2=new Set(["auto","none","0"]);function U2(n,r,s){let a=0,c;for(;a<n.length&&!c;){const f=n[a];typeof f=="string"&&!$2.has(f)&&Xi(f).values.length&&(c=n[a]),a++}if(c&&s)for(const f of r)n[f]=n0(s,c)}class W2 extends fu{constructor(r,s,a,c,f){super(r,s,a,c,f,!0)}readKeyframes(){const{unresolvedKeyframes:r,element:s,name:a}=this;if(!s||!s.current)return;super.readKeyframes();for(let m=0;m<r.length;m++){let g=r[m];if(typeof g=="string"&&(g=g.trim(),iu(g))){const y=Zm(g,s.current);y!==void 0&&(r[m]=y),m===r.length-1&&(this.finalKeyframe=g)}}if(this.resolveNoneKeyframes(),!qm.has(a)||r.length!==2)return;const[c,f]=r,d=Wh(c),p=Wh(f);if(d!==p)if(Oh(d)&&Oh(p))for(let m=0;m<r.length;m++){const g=r[m];typeof g=="string"&&(r[m]=parseFloat(g))}else ar[a]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:r,name:s}=this,a=[];for(let c=0;c<r.length;c++)(r[c]===null||z2(r[c]))&&a.push(c);a.length&&U2(r,a,s)}measureInitialState(){const{element:r,unresolvedKeyframes:s,name:a}=this;if(!r||!r.current)return;a==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=ar[a](r.measureViewportBox(),window.getComputedStyle(r.current)),s[0]=this.measuredOrigin;const c=s[s.length-1];c!==void 0&&r.getValue(a,c).jump(c,!1)}measureEndState(){var p;const{element:r,name:s,unresolvedKeyframes:a}=this;if(!r||!r.current)return;const c=r.getValue(s);c&&c.jump(this.measuredOrigin,!1);const f=a.length-1,d=a[f];a[f]=ar[s](r.measureViewportBox(),window.getComputedStyle(r.current)),d!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=d),(p=this.removedTransforms)!=null&&p.length&&this.removedTransforms.forEach(([m,g])=>{r.getValue(m).set(g)}),this.resolveNoneKeyframes()}}function r0(n,r,s){if(n instanceof EventTarget)return[n];if(typeof n=="string"){const c=document.querySelectorAll(n);return c?Array.from(c):[]}return Array.from(n)}const i0=(n,r)=>r&&typeof n=="number"?r.transform(n):n;function s0(n){return wm(n)&&"offsetHeight"in n}const Kh=30,H2=n=>!isNaN(parseFloat(n));class K2{constructor(r,s={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=a=>{var f;const c=yt.now();if(this.updatedAt!==c&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(a),this.current!==this.prev&&((f=this.events.change)==null||f.notify(this.current),this.dependents))for(const d of this.dependents)d.dirty()},this.hasAnimated=!1,this.setCurrent(r),this.owner=s.owner}setCurrent(r){this.current=r,this.updatedAt=yt.now(),this.canTrackVelocity===null&&r!==void 0&&(this.canTrackVelocity=H2(this.current))}setPrevFrameValue(r=this.current){this.prevFrameValue=r,this.prevUpdatedAt=this.updatedAt}onChange(r){return this.on("change",r)}on(r,s){this.events[r]||(this.events[r]=new eu);const a=this.events[r].add(s);return r==="change"?()=>{a(),De.read(()=>{this.events.change.getSize()||this.stop()})}:a}clearListeners(){for(const r in this.events)this.events[r].clear()}attach(r,s){this.passiveEffect=r,this.stopPassiveEffect=s}set(r){this.passiveEffect?this.passiveEffect(r,this.updateAndNotify):this.updateAndNotify(r)}setWithVelocity(r,s,a){this.set(s),this.prev=void 0,this.prevFrameValue=r,this.prevUpdatedAt=this.updatedAt-a}jump(r,s=!0){this.updateAndNotify(r),this.prev=r,this.prevUpdatedAt=this.prevFrameValue=void 0,s&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var r;(r=this.events.change)==null||r.notify(this.current)}addDependent(r){this.dependents||(this.dependents=new Set),this.dependents.add(r)}removeDependent(r){this.dependents&&this.dependents.delete(r)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const r=yt.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||r-this.updatedAt>Kh)return 0;const s=Math.min(this.updatedAt-this.prevUpdatedAt,Kh);return km(parseFloat(this.current)-parseFloat(this.prevFrameValue),s)}start(r){return this.stop(),new Promise(s=>{this.hasAnimated=!0,this.animation=r(s),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var r,s;(r=this.dependents)==null||r.clear(),(s=this.events.destroy)==null||s.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Br(n,r){return new K2(n,r)}const{schedule:mu}=Am(queueMicrotask,!1),Ot={x:!1,y:!1};function o0(){return Ot.x||Ot.y}function Y2(n){return n==="x"||n==="y"?Ot[n]?null:(Ot[n]=!0,()=>{Ot[n]=!1}):Ot.x||Ot.y?null:(Ot.x=Ot.y=!0,()=>{Ot.x=Ot.y=!1})}function a0(n,r){const s=r0(n),a=new AbortController,c={passive:!0,...r,signal:a.signal};return[s,c,()=>a.abort()]}function Yh(n){return!(n.pointerType==="touch"||o0())}function G2(n,r,s={}){const[a,c,f]=a0(n,s),d=p=>{if(!Yh(p))return;const{target:m}=p,g=r(m,p);if(typeof g!="function"||!m)return;const y=v=>{Yh(v)&&(g(v),m.removeEventListener("pointerleave",y))};m.addEventListener("pointerleave",y,c)};return a.forEach(p=>{p.addEventListener("pointerenter",d,c)}),f}const l0=(n,r)=>r?n===r?!0:l0(n,r.parentElement):!1,gu=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,X2=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function Q2(n){return X2.has(n.tagName)||n.tabIndex!==-1}const Io=new WeakSet;function Gh(n){return r=>{r.key==="Enter"&&n(r)}}function nc(n,r){n.dispatchEvent(new PointerEvent("pointer"+r,{isPrimary:!0,bubbles:!0}))}const Z2=(n,r)=>{const s=n.currentTarget;if(!s)return;const a=Gh(()=>{if(Io.has(s))return;nc(s,"down");const c=Gh(()=>{nc(s,"up")}),f=()=>nc(s,"cancel");s.addEventListener("keyup",c,r),s.addEventListener("blur",f,r)});s.addEventListener("keydown",a,r),s.addEventListener("blur",()=>s.removeEventListener("keydown",a),r)};function Xh(n){return gu(n)&&!o0()}function q2(n,r,s={}){const[a,c,f]=a0(n,s),d=p=>{const m=p.currentTarget;if(!Xh(p))return;Io.add(m);const g=r(m,p),y=(C,S)=>{window.removeEventListener("pointerup",v),window.removeEventListener("pointercancel",w),Io.has(m)&&Io.delete(m),Xh(C)&&typeof g=="function"&&g(C,{success:S})},v=C=>{y(C,m===window||m===document||s.useGlobalTarget||l0(m,C.target))},w=C=>{y(C,!1)};window.addEventListener("pointerup",v,c),window.addEventListener("pointercancel",w,c)};return a.forEach(p=>{(s.useGlobalTarget?window:p).addEventListener("pointerdown",d,c),s0(p)&&(p.addEventListener("focus",g=>Z2(g,c)),!Q2(p)&&!p.hasAttribute("tabindex")&&(p.tabIndex=0))}),f}function c0(n){return wm(n)&&"ownerSVGElement"in n}function J2(n){return c0(n)&&n.tagName==="svg"}const st=n=>!!(n&&n.getVelocity),ew=[...e0,He,_n],tw=n=>ew.find(Jm(n)),yu=b.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});class nw extends b.Component{getSnapshotBeforeUpdate(r){const s=this.props.childRef.current;if(s&&r.isPresent&&!this.props.isPresent){const a=s.offsetParent,c=s0(a)&&a.offsetWidth||0,f=this.props.sizeRef.current;f.height=s.offsetHeight||0,f.width=s.offsetWidth||0,f.top=s.offsetTop,f.left=s.offsetLeft,f.right=c-f.width-f.left}return null}componentDidUpdate(){}render(){return this.props.children}}function rw({children:n,isPresent:r,anchorX:s,root:a}){const c=b.useId(),f=b.useRef(null),d=b.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:p}=b.useContext(yu);return b.useInsertionEffect(()=>{const{width:m,height:g,top:y,left:v,right:w}=d.current;if(r||!f.current||!m||!g)return;const C=s==="left"?`left: ${v}`:`right: ${w}`;f.current.dataset.motionPopId=c;const S=document.createElement("style");p&&(S.nonce=p);const P=a??document.head;return P.appendChild(S),S.sheet&&S.sheet.insertRule(`
          [data-motion-pop-id="${c}"] {
            position: absolute !important;
            width: ${m}px !important;
            height: ${g}px !important;
            ${C}px !important;
            top: ${y}px !important;
          }
        `),()=>{P.contains(S)&&P.removeChild(S)}},[r]),l.jsx(nw,{isPresent:r,childRef:f,sizeRef:d,children:b.cloneElement(n,{ref:f})})}const iw=({children:n,initial:r,isPresent:s,onExitComplete:a,custom:c,presenceAffectsLayout:f,mode:d,anchorX:p,root:m})=>{const g=Xo(sw),y=b.useId();let v=!0,w=b.useMemo(()=>(v=!1,{id:y,initial:r,isPresent:s,custom:c,onExitComplete:C=>{g.set(C,!0);for(const S of g.values())if(!S)return;a&&a()},register:C=>(g.set(C,!1),()=>g.delete(C))}),[s,g,a]);return f&&v&&(w={...w}),b.useMemo(()=>{g.forEach((C,S)=>g.set(S,!1))},[s]),b.useEffect(()=>{!s&&!g.size&&a&&a()},[s]),d==="popLayout"&&(n=l.jsx(rw,{isPresent:s,anchorX:p,root:m,children:n})),l.jsx(Qo.Provider,{value:w,children:n})};function sw(){return new Map}function u0(n=!0){const r=b.useContext(Qo);if(r===null)return[!0,null];const{isPresent:s,onExitComplete:a,register:c}=r,f=b.useId();b.useEffect(()=>{if(n)return c(f)},[n]);const d=b.useCallback(()=>n&&a&&a(f),[f,a,n]);return!s&&a?[!1,d]:[!0]}const Co=n=>n.key||"";function Qh(n){const r=[];return b.Children.forEach(n,s=>{b.isValidElement(s)&&r.push(s)}),r}const ln=({children:n,custom:r,initial:s=!0,onExitComplete:a,presenceAffectsLayout:c=!0,mode:f="sync",propagate:d=!1,anchorX:p="left",root:m})=>{const[g,y]=u0(d),v=b.useMemo(()=>Qh(n),[n]),w=d&&!g?[]:v.map(Co),C=b.useRef(!0),S=b.useRef(v),P=Xo(()=>new Map),[A,M]=b.useState(v),[D,I]=b.useState(v);Xc(()=>{C.current=!1,S.current=v;for(let G=0;G<D.length;G++){const $=Co(D[G]);w.includes($)?P.delete($):P.get($)!==!0&&P.set($,!1)}},[D,w.length,w.join("-")]);const K=[];if(v!==A){let G=[...v];for(let $=0;$<D.length;$++){const O=D[$],H=Co(O);w.includes(H)||(G.splice($,0,O),K.push(O))}return f==="wait"&&K.length&&(G=K),I(Qh(G)),M(v),null}const{forceRender:U}=b.useContext(Yc);return l.jsx(l.Fragment,{children:D.map(G=>{const $=Co(G),O=d&&!g?!1:v===D||w.includes($),H=()=>{if(P.has($))P.set($,!0);else return;let se=!0;P.forEach(be=>{be||(se=!1)}),se&&(U==null||U(),I(S.current),d&&(y==null||y()),a&&a())};return l.jsx(iw,{isPresent:O,initial:!C.current||s?void 0:!1,custom:r,presenceAffectsLayout:c,mode:f,root:m,onExitComplete:O?void 0:H,anchorX:p,children:G},$)})})},d0=b.createContext({strict:!1}),Zh={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},$r={};for(const n in Zh)$r[n]={isEnabled:r=>Zh[n].some(s=>!!r[s])};function ow(n){for(const r in n)$r[r]={...$r[r],...n[r]}}const aw=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function $o(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||aw.has(n)}let f0=n=>!$o(n);function lw(n){typeof n=="function"&&(f0=r=>r.startsWith("on")?!$o(r):n(r))}try{lw(require("@emotion/is-prop-valid").default)}catch{}function cw(n,r,s){const a={};for(const c in n)c==="values"&&typeof n.values=="object"||(f0(c)||s===!0&&$o(c)||!r&&!$o(c)||n.draggable&&c.startsWith("onDrag"))&&(a[c]=n[c]);return a}const Zo=b.createContext({});function qo(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}function Qi(n){return typeof n=="string"||Array.isArray(n)}const xu=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],vu=["initial",...xu];function Jo(n){return qo(n.animate)||vu.some(r=>Qi(n[r]))}function h0(n){return!!(Jo(n)||n.variants)}function uw(n,r){if(Jo(n)){const{initial:s,animate:a}=n;return{initial:s===!1||Qi(s)?s:void 0,animate:Qi(a)?a:void 0}}return n.inherit!==!1?r:{}}function dw(n){const{initial:r,animate:s}=uw(n,b.useContext(Zo));return b.useMemo(()=>({initial:r,animate:s}),[qh(r),qh(s)])}function qh(n){return Array.isArray(n)?n.join(" "):n}const Zi={};function fw(n){for(const r in n)Zi[r]=n[r],ru(r)&&(Zi[r].isCSSVariable=!0)}function p0(n,{layout:r,layoutId:s}){return Yr.has(n)||n.startsWith("origin")||(r||s!==void 0)&&(!!Zi[n]||n==="opacity")}const hw={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},pw=Kr.length;function mw(n,r,s){let a="",c=!0;for(let f=0;f<pw;f++){const d=Kr[f],p=n[d];if(p===void 0)continue;let m=!0;if(typeof p=="number"?m=p===(d.startsWith("scale")?1:0):m=parseFloat(p)===0,!m||s){const g=i0(p,pu[d]);if(!m){c=!1;const y=hw[d]||d;a+=`${y}(${g}) `}s&&(r[d]=g)}}return a=a.trim(),s?a=s(r,c?"":a):c&&(a="none"),a}function wu(n,r,s){const{style:a,vars:c,transformOrigin:f}=n;let d=!1,p=!1;for(const m in r){const g=r[m];if(Yr.has(m)){d=!0;continue}else if(ru(m)){c[m]=g;continue}else{const y=i0(g,pu[m]);m.startsWith("origin")?(p=!0,f[m]=y):a[m]=y}}if(r.transform||(d||s?a.transform=mw(r,n.transform,s):a.transform&&(a.transform="none")),p){const{originX:m="50%",originY:g="50%",originZ:y=0}=f;a.transformOrigin=`${m} ${g} ${y}`}}const bu=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function m0(n,r,s){for(const a in r)!st(r[a])&&!p0(a,s)&&(n[a]=r[a])}function gw({transformTemplate:n},r){return b.useMemo(()=>{const s=bu();return wu(s,r,n),Object.assign({},s.vars,s.style)},[r])}function yw(n,r){const s=n.style||{},a={};return m0(a,s,n),Object.assign(a,gw(n,r)),a}function xw(n,r){const s={},a=yw(n,r);return n.drag&&n.dragListener!==!1&&(s.draggable=!1,a.userSelect=a.WebkitUserSelect=a.WebkitTouchCallout="none",a.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(s.tabIndex=0),s.style=a,s}const vw={offset:"stroke-dashoffset",array:"stroke-dasharray"},ww={offset:"strokeDashoffset",array:"strokeDasharray"};function bw(n,r,s=1,a=0,c=!0){n.pathLength=1;const f=c?vw:ww;n[f.offset]=ce.transform(-a);const d=ce.transform(r),p=ce.transform(s);n[f.array]=`${d} ${p}`}function g0(n,{attrX:r,attrY:s,attrScale:a,pathLength:c,pathSpacing:f=1,pathOffset:d=0,...p},m,g,y){if(wu(n,p,g),m){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:v,style:w}=n;v.transform&&(w.transform=v.transform,delete v.transform),(w.transform||v.transformOrigin)&&(w.transformOrigin=v.transformOrigin??"50% 50%",delete v.transformOrigin),w.transform&&(w.transformBox=(y==null?void 0:y.transformBox)??"fill-box",delete v.transformBox),r!==void 0&&(v.x=r),s!==void 0&&(v.y=s),a!==void 0&&(v.scale=a),c!==void 0&&bw(v,c,f,d,!1)}const y0=()=>({...bu(),attrs:{}}),x0=n=>typeof n=="string"&&n.toLowerCase()==="svg";function kw(n,r,s,a){const c=b.useMemo(()=>{const f=y0();return g0(f,r,x0(a),n.transformTemplate,n.style),{...f.attrs,style:{...f.style}}},[r]);if(n.style){const f={};m0(f,n.style,n),c.style={...f,...c.style}}return c}const jw=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function ku(n){return typeof n!="string"||n.includes("-")?!1:!!(jw.indexOf(n)>-1||/[A-Z]/u.test(n))}function Sw(n,r,s,{latestValues:a},c,f=!1){const p=(ku(n)?kw:xw)(r,a,c,n),m=cw(r,typeof n=="string",f),g=n!==b.Fragment?{...m,...p,ref:s}:{},{children:y}=r,v=b.useMemo(()=>st(y)?y.get():y,[y]);return b.createElement(n,{...g,children:v})}function Jh(n){const r=[{},{}];return n==null||n.values.forEach((s,a)=>{r[0][a]=s.get(),r[1][a]=s.getVelocity()}),r}function ju(n,r,s,a){if(typeof r=="function"){const[c,f]=Jh(a);r=r(s!==void 0?s:n.custom,c,f)}if(typeof r=="string"&&(r=n.variants&&n.variants[r]),typeof r=="function"){const[c,f]=Jh(a);r=r(s!==void 0?s:n.custom,c,f)}return r}function zo(n){return st(n)?n.get():n}function Nw({scrapeMotionValuesFromProps:n,createRenderState:r},s,a,c){return{latestValues:Cw(s,a,c,n),renderState:r()}}function Cw(n,r,s,a){const c={},f=a(n,{});for(const w in f)c[w]=zo(f[w]);let{initial:d,animate:p}=n;const m=Jo(n),g=h0(n);r&&g&&!m&&n.inherit!==!1&&(d===void 0&&(d=r.initial),p===void 0&&(p=r.animate));let y=s?s.initial===!1:!1;y=y||d===!1;const v=y?p:d;if(v&&typeof v!="boolean"&&!qo(v)){const w=Array.isArray(v)?v:[v];for(let C=0;C<w.length;C++){const S=ju(n,w[C]);if(S){const{transitionEnd:P,transition:A,...M}=S;for(const D in M){let I=M[D];if(Array.isArray(I)){const K=y?I.length-1:0;I=I[K]}I!==null&&(c[D]=I)}for(const D in P)c[D]=P[D]}}}return c}const v0=n=>(r,s)=>{const a=b.useContext(Zo),c=b.useContext(Qo),f=()=>Nw(n,r,a,c);return s?f():Xo(f)};function Su(n,r,s){var f;const{style:a}=n,c={};for(const d in a)(st(a[d])||r.style&&st(r.style[d])||p0(d,n)||((f=s==null?void 0:s.getValue(d))==null?void 0:f.liveStyle)!==void 0)&&(c[d]=a[d]);return c}const Pw=v0({scrapeMotionValuesFromProps:Su,createRenderState:bu});function w0(n,r,s){const a=Su(n,r,s);for(const c in n)if(st(n[c])||st(r[c])){const f=Kr.indexOf(c)!==-1?"attr"+c.charAt(0).toUpperCase()+c.substring(1):c;a[f]=n[c]}return a}const Ew=v0({scrapeMotionValuesFromProps:w0,createRenderState:y0}),Tw=Symbol.for("motionComponentSymbol");function zr(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function Rw(n,r,s){return b.useCallback(a=>{a&&n.onMount&&n.onMount(a),r&&(a?r.mount(a):r.unmount()),s&&(typeof s=="function"?s(a):zr(s)&&(s.current=a))},[r])}const Nu=n=>n.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),Mw="framerAppearId",b0="data-"+Nu(Mw),k0=b.createContext({});function Lw(n,r,s,a,c){var P,A;const{visualElement:f}=b.useContext(Zo),d=b.useContext(d0),p=b.useContext(Qo),m=b.useContext(yu).reducedMotion,g=b.useRef(null);a=a||d.renderer,!g.current&&a&&(g.current=a(n,{visualState:r,parent:f,props:s,presenceContext:p,blockInitialAnimation:p?p.initial===!1:!1,reducedMotionConfig:m}));const y=g.current,v=b.useContext(k0);y&&!y.projection&&c&&(y.type==="html"||y.type==="svg")&&Aw(g.current,s,c,v);const w=b.useRef(!1);b.useInsertionEffect(()=>{y&&w.current&&y.update(s,p)});const C=s[b0],S=b.useRef(!!C&&!((P=window.MotionHandoffIsComplete)!=null&&P.call(window,C))&&((A=window.MotionHasOptimisedAnimation)==null?void 0:A.call(window,C)));return Xc(()=>{y&&(w.current=!0,window.MotionIsMounted=!0,y.updateFeatures(),y.scheduleRenderMicrotask(),S.current&&y.animationState&&y.animationState.animateChanges())}),b.useEffect(()=>{y&&(!S.current&&y.animationState&&y.animationState.animateChanges(),S.current&&(queueMicrotask(()=>{var M;(M=window.MotionHandoffMarkAsComplete)==null||M.call(window,C)}),S.current=!1),y.enteringChildren=void 0)}),y}function Aw(n,r,s,a){const{layoutId:c,layout:f,drag:d,dragConstraints:p,layoutScroll:m,layoutRoot:g,layoutCrossfade:y}=r;n.projection=new s(n.latestValues,r["data-framer-portal-id"]?void 0:j0(n.parent)),n.projection.setOptions({layoutId:c,layout:f,alwaysMeasureLayout:!!d||p&&zr(p),visualElement:n,animationType:typeof f=="string"?f:"both",initialPromotionConfig:a,crossfade:y,layoutScroll:m,layoutRoot:g})}function j0(n){if(n)return n.options.allowProjection!==!1?n.projection:j0(n.parent)}function rc(n,{forwardMotionProps:r=!1}={},s,a){s&&ow(s);const c=ku(n)?Ew:Pw;function f(p,m){let g;const y={...b.useContext(yu),...p,layoutId:Dw(p)},{isStatic:v}=y,w=dw(p),C=c(p,v);if(!v&&Gc){Iw();const S=zw(y);g=S.MeasureLayout,w.visualElement=Lw(n,C,y,a,S.ProjectionNode)}return l.jsxs(Zo.Provider,{value:w,children:[g&&w.visualElement?l.jsx(g,{visualElement:w.visualElement,...y}):null,Sw(n,p,Rw(C,w.visualElement,m),C,v,r)]})}f.displayName=`motion.${typeof n=="string"?n:`create(${n.displayName??n.name??""})`}`;const d=b.forwardRef(f);return d[Tw]=n,d}function Dw({layoutId:n}){const r=b.useContext(Yc).id;return r&&n!==void 0?r+"-"+n:n}function Iw(n,r){b.useContext(d0).strict}function zw(n){const{drag:r,layout:s}=$r;if(!r&&!s)return{};const a={...r,...s};return{MeasureLayout:r!=null&&r.isEnabled(n)||s!=null&&s.isEnabled(n)?a.MeasureLayout:void 0,ProjectionNode:a.ProjectionNode}}function _w(n,r){if(typeof Proxy>"u")return rc;const s=new Map,a=(f,d)=>rc(f,d,n,r),c=(f,d)=>a(f,d);return new Proxy(c,{get:(f,d)=>d==="create"?a:(s.has(d)||s.set(d,rc(d,void 0,n,r)),s.get(d))})}function S0({top:n,left:r,right:s,bottom:a}){return{x:{min:r,max:s},y:{min:n,max:a}}}function Fw({x:n,y:r}){return{top:r.min,right:n.max,bottom:r.max,left:n.min}}function Vw(n,r){if(!r)return n;const s=r({x:n.left,y:n.top}),a=r({x:n.right,y:n.bottom});return{top:s.y,left:s.x,bottom:a.y,right:a.x}}function ic(n){return n===void 0||n===1}function Tc({scale:n,scaleX:r,scaleY:s}){return!ic(n)||!ic(r)||!ic(s)}function rr(n){return Tc(n)||N0(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function N0(n){return ep(n.x)||ep(n.y)}function ep(n){return n&&n!=="0%"}function Uo(n,r,s){const a=n-s,c=r*a;return s+c}function tp(n,r,s,a,c){return c!==void 0&&(n=Uo(n,c,a)),Uo(n,s,a)+r}function Rc(n,r=0,s=1,a,c){n.min=tp(n.min,r,s,a,c),n.max=tp(n.max,r,s,a,c)}function C0(n,{x:r,y:s}){Rc(n.x,r.translate,r.scale,r.originPoint),Rc(n.y,s.translate,s.scale,s.originPoint)}const np=.999999999999,rp=1.0000000000001;function Ow(n,r,s,a=!1){const c=s.length;if(!c)return;r.x=r.y=1;let f,d;for(let p=0;p<c;p++){f=s[p],d=f.projectionDelta;const{visualElement:m}=f.options;m&&m.props.style&&m.props.style.display==="contents"||(a&&f.options.layoutScroll&&f.scroll&&f!==f.root&&Fr(n,{x:-f.scroll.offset.x,y:-f.scroll.offset.y}),d&&(r.x*=d.x.scale,r.y*=d.y.scale,C0(n,d)),a&&rr(f.latestValues)&&Fr(n,f.latestValues))}r.x<rp&&r.x>np&&(r.x=1),r.y<rp&&r.y>np&&(r.y=1)}function _r(n,r){n.min=n.min+r,n.max=n.max+r}function ip(n,r,s,a,c=.5){const f=_e(n.min,n.max,c);Rc(n,r,s,f,a)}function Fr(n,r){ip(n.x,r.x,r.scaleX,r.scale,r.originX),ip(n.y,r.y,r.scaleY,r.scale,r.originY)}function P0(n,r){return S0(Vw(n.getBoundingClientRect(),r))}function Bw(n,r,s){const a=P0(n,s),{scroll:c}=r;return c&&(_r(a.x,c.offset.x),_r(a.y,c.offset.y)),a}const sp=()=>({translate:0,scale:1,origin:0,originPoint:0}),Vr=()=>({x:sp(),y:sp()}),op=()=>({min:0,max:0}),Ue=()=>({x:op(),y:op()}),Mc={current:null},E0={current:!1};function $w(){if(E0.current=!0,!!Gc)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),r=()=>Mc.current=n.matches;n.addEventListener("change",r),r()}else Mc.current=!1}const Uw=new WeakMap;function Ww(n,r,s){for(const a in r){const c=r[a],f=s[a];if(st(c))n.addValue(a,c);else if(st(f))n.addValue(a,Br(c,{owner:n}));else if(f!==c)if(n.hasValue(a)){const d=n.getValue(a);d.liveStyle===!0?d.jump(c):d.hasAnimated||d.set(c)}else{const d=n.getStaticValue(a);n.addValue(a,Br(d!==void 0?d:c,{owner:n}))}}for(const a in s)r[a]===void 0&&n.removeValue(a);return r}const ap=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class Hw{scrapeMotionValuesFromProps(r,s,a){return{}}constructor({parent:r,props:s,presenceContext:a,reducedMotionConfig:c,blockInitialAnimation:f,visualState:d},p={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=fu,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const w=yt.now();this.renderScheduledAt<w&&(this.renderScheduledAt=w,De.render(this.render,!1,!0))};const{latestValues:m,renderState:g}=d;this.latestValues=m,this.baseTarget={...m},this.initialValues=s.initial?{...m}:{},this.renderState=g,this.parent=r,this.props=s,this.presenceContext=a,this.depth=r?r.depth+1:0,this.reducedMotionConfig=c,this.options=p,this.blockInitialAnimation=!!f,this.isControllingVariants=Jo(s),this.isVariantNode=h0(s),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(r&&r.current);const{willChange:y,...v}=this.scrapeMotionValuesFromProps(s,{},this);for(const w in v){const C=v[w];m[w]!==void 0&&st(C)&&C.set(m[w])}}mount(r){var s;this.current=r,Uw.set(r,this),this.projection&&!this.projection.instance&&this.projection.mount(r),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((a,c)=>this.bindToMotionValue(c,a)),E0.current||$w(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Mc.current,(s=this.parent)==null||s.addChild(this),this.update(this.props,this.presenceContext)}unmount(){var r;this.projection&&this.projection.unmount(),zn(this.notifyUpdate),zn(this.render),this.valueSubscriptions.forEach(s=>s()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(r=this.parent)==null||r.removeChild(this);for(const s in this.events)this.events[s].clear();for(const s in this.features){const a=this.features[s];a&&(a.unmount(),a.isMounted=!1)}this.current=null}addChild(r){this.children.add(r),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(r)}removeChild(r){this.children.delete(r),this.enteringChildren&&this.enteringChildren.delete(r)}bindToMotionValue(r,s){this.valueSubscriptions.has(r)&&this.valueSubscriptions.get(r)();const a=Yr.has(r);a&&this.onBindTransform&&this.onBindTransform();const c=s.on("change",d=>{this.latestValues[r]=d,this.props.onUpdate&&De.preRender(this.notifyUpdate),a&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let f;window.MotionCheckAppearSync&&(f=window.MotionCheckAppearSync(this,r,s)),this.valueSubscriptions.set(r,()=>{c(),f&&f(),s.owner&&s.stop()})}sortNodePosition(r){return!this.current||!this.sortInstanceNodePosition||this.type!==r.type?0:this.sortInstanceNodePosition(this.current,r.current)}updateFeatures(){let r="animation";for(r in $r){const s=$r[r];if(!s)continue;const{isEnabled:a,Feature:c}=s;if(!this.features[r]&&c&&a(this.props)&&(this.features[r]=new c(this)),this.features[r]){const f=this.features[r];f.isMounted?f.update():(f.mount(),f.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Ue()}getStaticValue(r){return this.latestValues[r]}setStaticValue(r,s){this.latestValues[r]=s}update(r,s){(r.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=r,this.prevPresenceContext=this.presenceContext,this.presenceContext=s;for(let a=0;a<ap.length;a++){const c=ap[a];this.propEventSubscriptions[c]&&(this.propEventSubscriptions[c](),delete this.propEventSubscriptions[c]);const f="on"+c,d=r[f];d&&(this.propEventSubscriptions[c]=this.on(c,d))}this.prevMotionValues=Ww(this,this.scrapeMotionValuesFromProps(r,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(r){return this.props.variants?this.props.variants[r]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(r){const s=this.getClosestVariantNode();if(s)return s.variantChildren&&s.variantChildren.add(r),()=>s.variantChildren.delete(r)}addValue(r,s){const a=this.values.get(r);s!==a&&(a&&this.removeValue(r),this.bindToMotionValue(r,s),this.values.set(r,s),this.latestValues[r]=s.get())}removeValue(r){this.values.delete(r);const s=this.valueSubscriptions.get(r);s&&(s(),this.valueSubscriptions.delete(r)),delete this.latestValues[r],this.removeValueFromRenderState(r,this.renderState)}hasValue(r){return this.values.has(r)}getValue(r,s){if(this.props.values&&this.props.values[r])return this.props.values[r];let a=this.values.get(r);return a===void 0&&s!==void 0&&(a=Br(s===null?void 0:s,{owner:this}),this.addValue(r,a)),a}readValue(r,s){let a=this.latestValues[r]!==void 0||!this.current?this.latestValues[r]:this.getBaseTargetFromProps(this.props,r)??this.readValueFromInstance(this.current,r,this.options);return a!=null&&(typeof a=="string"&&(vm(a)||bm(a))?a=parseFloat(a):!tw(a)&&_n.test(s)&&(a=n0(r,s)),this.setBaseTarget(r,st(a)?a.get():a)),st(a)?a.get():a}setBaseTarget(r,s){this.baseTarget[r]=s}getBaseTarget(r){var f;const{initial:s}=this.props;let a;if(typeof s=="string"||typeof s=="object"){const d=ju(this.props,s,(f=this.presenceContext)==null?void 0:f.custom);d&&(a=d[r])}if(s&&a!==void 0)return a;const c=this.getBaseTargetFromProps(this.props,r);return c!==void 0&&!st(c)?c:this.initialValues[r]!==void 0&&a===void 0?void 0:this.baseTarget[r]}on(r,s){return this.events[r]||(this.events[r]=new eu),this.events[r].add(s)}notify(r,...s){this.events[r]&&this.events[r].notify(...s)}scheduleRenderMicrotask(){mu.render(this.render)}}class T0 extends Hw{constructor(){super(...arguments),this.KeyframeResolver=W2}sortInstanceNodePosition(r,s){return r.compareDocumentPosition(s)&2?1:-1}getBaseTargetFromProps(r,s){return r.style?r.style[s]:void 0}removeValueFromRenderState(r,{vars:s,style:a}){delete s[r],delete a[r]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:r}=this.props;st(r)&&(this.childSubscription=r.on("change",s=>{this.current&&(this.current.textContent=`${s}`)}))}}function R0(n,{style:r,vars:s},a,c){const f=n.style;let d;for(d in r)f[d]=r[d];c==null||c.applyProjectionStyles(f,a);for(d in s)f.setProperty(d,s[d])}function Kw(n){return window.getComputedStyle(n)}class Yw extends T0{constructor(){super(...arguments),this.type="html",this.renderInstance=R0}readValueFromInstance(r,s){var a;if(Yr.has(s))return(a=this.projection)!=null&&a.isProjecting?kc(s):c2(r,s);{const c=Kw(r),f=(ru(s)?c.getPropertyValue(s):c[s])||0;return typeof f=="string"?f.trim():f}}measureInstanceViewportBox(r,{transformPagePoint:s}){return P0(r,s)}build(r,s,a){wu(r,s,a.transformTemplate)}scrapeMotionValuesFromProps(r,s,a){return Su(r,s,a)}}const M0=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Gw(n,r,s,a){R0(n,r,void 0,a);for(const c in r.attrs)n.setAttribute(M0.has(c)?c:Nu(c),r.attrs[c])}class Xw extends T0{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Ue}getBaseTargetFromProps(r,s){return r[s]}readValueFromInstance(r,s){if(Yr.has(s)){const a=t0(s);return a&&a.default||0}return s=M0.has(s)?s:Nu(s),r.getAttribute(s)}scrapeMotionValuesFromProps(r,s,a){return w0(r,s,a)}build(r,s,a){g0(r,s,this.isSVGTag,a.transformTemplate,a.style)}renderInstance(r,s,a,c){Gw(r,s,a,c)}mount(r){this.isSVGTag=x0(r.tagName),super.mount(r)}}const Qw=(n,r)=>ku(n)?new Xw(r):new Yw(r,{allowProjection:n!==b.Fragment});function Or(n,r,s){const a=n.getProps();return ju(a,r,s!==void 0?s:a.custom,n)}const Lc=n=>Array.isArray(n);function Zw(n,r,s){n.hasValue(r)?n.getValue(r).set(s):n.addValue(r,Br(s))}function qw(n){return Lc(n)?n[n.length-1]||0:n}function Cu(n,r){const s=Or(n,r);let{transitionEnd:a={},transition:c={},...f}=s||{};f={...f,...a};for(const d in f){const p=qw(f[d]);Zw(n,d,p)}}function Jw(n){return!!(st(n)&&n.add)}function Ac(n,r){const s=n.getValue("willChange");if(Jw(s))return s.add(r);if(!s&&fn.WillChange){const a=new fn.WillChange("auto");n.addValue("willChange",a),a.add(r)}}function L0(n){return n.props[b0]}const eb=n=>n!==null;function tb(n,{repeat:r,repeatType:s="loop"},a){const c=n.filter(eb),f=r&&s!=="loop"&&r%2===1?0:c.length-1;return c[f]}const nb={type:"spring",stiffness:500,damping:25,restSpeed:10},rb=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),ib={type:"keyframes",duration:.8},sb={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},ob=(n,{keyframes:r})=>r.length>2?ib:Yr.has(n)?n.startsWith("scale")?rb(r[1]):nb:sb;function ab({when:n,delay:r,delayChildren:s,staggerChildren:a,staggerDirection:c,repeat:f,repeatType:d,repeatDelay:p,from:m,elapsed:g,...y}){return!!Object.keys(y).length}const Pu=(n,r,s,a={},c,f)=>d=>{const p=hu(a,n)||{},m=p.delay||a.delay||0;let{elapsed:g=0}=a;g=g-Yt(m);const y={keyframes:Array.isArray(s)?s:[null,s],ease:"easeOut",velocity:r.getVelocity(),...p,delay:-g,onUpdate:w=>{r.set(w),p.onUpdate&&p.onUpdate(w)},onComplete:()=>{d(),p.onComplete&&p.onComplete()},name:n,motionValue:r,element:f?void 0:c};ab(p)||Object.assign(y,ob(n,y)),y.duration&&(y.duration=Yt(y.duration)),y.repeatDelay&&(y.repeatDelay=Yt(y.repeatDelay)),y.from!==void 0&&(y.keyframes[0]=y.from);let v=!1;if((y.type===!1||y.duration===0&&!y.repeatDelay)&&(Pc(y),y.delay===0&&(v=!0)),(fn.instantAnimations||fn.skipAnimations)&&(v=!0,Pc(y),y.delay=0),y.allowFlatten=!p.type&&!p.ease,v&&!f&&r.get()!==void 0){const w=tb(y.keyframes,p);if(w!==void 0){De.update(()=>{y.onUpdate(w),y.onComplete()});return}}return p.isSync?new du(y):new L2(y)};function lb({protectedKeys:n,needsAnimating:r},s){const a=n.hasOwnProperty(s)&&r[s]!==!0;return r[s]=!1,a}function A0(n,r,{delay:s=0,transitionOverride:a,type:c}={}){let{transition:f=n.getDefaultTransition(),transitionEnd:d,...p}=r;a&&(f=a);const m=[],g=c&&n.animationState&&n.animationState.getState()[c];for(const y in p){const v=n.getValue(y,n.latestValues[y]??null),w=p[y];if(w===void 0||g&&lb(g,y))continue;const C={delay:s,...hu(f||{},y)},S=v.get();if(S!==void 0&&!v.isAnimating&&!Array.isArray(w)&&w===S&&!C.velocity)continue;let P=!1;if(window.MotionHandoffAnimation){const M=L0(n);if(M){const D=window.MotionHandoffAnimation(M,y,De);D!==null&&(C.startTime=D,P=!0)}}Ac(n,y),v.start(Pu(y,v,w,n.shouldReduceMotion&&qm.has(y)?{type:!1}:C,n,P));const A=v.animation;A&&m.push(A)}return d&&Promise.all(m).then(()=>{De.update(()=>{d&&Cu(n,d)})}),m}function D0(n,r,s,a=0,c=1){const f=Array.from(n).sort((g,y)=>g.sortNodePosition(y)).indexOf(r),d=n.size,p=(d-1)*a;return typeof s=="function"?s(f,d):c===1?f*a:p-f*a}function Dc(n,r,s={}){var m;const a=Or(n,r,s.type==="exit"?(m=n.presenceContext)==null?void 0:m.custom:void 0);let{transition:c=n.getDefaultTransition()||{}}=a||{};s.transitionOverride&&(c=s.transitionOverride);const f=a?()=>Promise.all(A0(n,a,s)):()=>Promise.resolve(),d=n.variantChildren&&n.variantChildren.size?(g=0)=>{const{delayChildren:y=0,staggerChildren:v,staggerDirection:w}=c;return cb(n,r,g,y,v,w,s)}:()=>Promise.resolve(),{when:p}=c;if(p){const[g,y]=p==="beforeChildren"?[f,d]:[d,f];return g().then(()=>y())}else return Promise.all([f(),d(s.delay)])}function cb(n,r,s=0,a=0,c=0,f=1,d){const p=[];for(const m of n.variantChildren)m.notify("AnimationStart",r),p.push(Dc(m,r,{...d,delay:s+(typeof a=="function"?0:a)+D0(n.variantChildren,m,a,c,f)}).then(()=>m.notify("AnimationComplete",r)));return Promise.all(p)}function I0(n,r,s={}){n.notify("AnimationStart",r);let a;if(Array.isArray(r)){const c=r.map(f=>Dc(n,f,s));a=Promise.all(c)}else if(typeof r=="string")a=Dc(n,r,s);else{const c=typeof r=="function"?Or(n,r,s.custom):r;a=Promise.all(A0(n,c,s))}return a.then(()=>{n.notify("AnimationComplete",r)})}function z0(n,r){if(!Array.isArray(r))return!1;const s=r.length;if(s!==n.length)return!1;for(let a=0;a<s;a++)if(r[a]!==n[a])return!1;return!0}const ub=vu.length;function _0(n){if(!n)return;if(!n.isControllingVariants){const s=n.parent?_0(n.parent)||{}:{};return n.props.initial!==void 0&&(s.initial=n.props.initial),s}const r={};for(let s=0;s<ub;s++){const a=vu[s],c=n.props[a];(Qi(c)||c===!1)&&(r[a]=c)}return r}const db=[...xu].reverse(),fb=xu.length;function hb(n){return r=>Promise.all(r.map(({animation:s,options:a})=>I0(n,s,a)))}function pb(n){let r=hb(n),s=lp(),a=!0;const c=m=>(g,y)=>{var w;const v=Or(n,y,m==="exit"?(w=n.presenceContext)==null?void 0:w.custom:void 0);if(v){const{transition:C,transitionEnd:S,...P}=v;g={...g,...P,...S}}return g};function f(m){r=m(n)}function d(m){const{props:g}=n,y=_0(n.parent)||{},v=[],w=new Set;let C={},S=1/0;for(let A=0;A<fb;A++){const M=db[A],D=s[M],I=g[M]!==void 0?g[M]:y[M],K=Qi(I),U=M===m?D.isActive:null;U===!1&&(S=A);let G=I===y[M]&&I!==g[M]&&K;if(G&&a&&n.manuallyAnimateOnMount&&(G=!1),D.protectedKeys={...C},!D.isActive&&U===null||!I&&!D.prevProp||qo(I)||typeof I=="boolean")continue;const $=mb(D.prevProp,I);let O=$||M===m&&D.isActive&&!G&&K||A>S&&K,H=!1;const se=Array.isArray(I)?I:[I];let be=se.reduce(c(M),{});U===!1&&(be={});const{prevResolvedValues:je={}}=D,Y={...je,...be},he=re=>{O=!0,w.has(re)&&(H=!0,w.delete(re)),D.needsAnimating[re]=!0;const W=n.getValue(re);W&&(W.liveStyle=!1)};for(const re in Y){const W=be[re],ie=je[re];if(C.hasOwnProperty(re))continue;let X=!1;Lc(W)&&Lc(ie)?X=!z0(W,ie):X=W!==ie,X?W!=null?he(re):w.add(re):W!==void 0&&w.has(re)?he(re):D.protectedKeys[re]=!0}D.prevProp=I,D.prevResolvedValues=be,D.isActive&&(C={...C,...be}),a&&n.blockInitialAnimation&&(O=!1);const Pe=G&&$;O&&(!Pe||H)&&v.push(...se.map(re=>{const W={type:M};if(typeof re=="string"&&a&&!Pe&&n.manuallyAnimateOnMount&&n.parent){const{parent:ie}=n,X=Or(ie,re);if(ie.enteringChildren&&X){const{delayChildren:E}=X.transition||{};W.delay=D0(ie.enteringChildren,n,E)}}return{animation:re,options:W}}))}if(w.size){const A={};if(typeof g.initial!="boolean"){const M=Or(n,Array.isArray(g.initial)?g.initial[0]:g.initial);M&&M.transition&&(A.transition=M.transition)}w.forEach(M=>{const D=n.getBaseTarget(M),I=n.getValue(M);I&&(I.liveStyle=!0),A[M]=D??null}),v.push({animation:A})}let P=!!v.length;return a&&(g.initial===!1||g.initial===g.animate)&&!n.manuallyAnimateOnMount&&(P=!1),a=!1,P?r(v):Promise.resolve()}function p(m,g){var v;if(s[m].isActive===g)return Promise.resolve();(v=n.variantChildren)==null||v.forEach(w=>{var C;return(C=w.animationState)==null?void 0:C.setActive(m,g)}),s[m].isActive=g;const y=d(m);for(const w in s)s[w].protectedKeys={};return y}return{animateChanges:d,setActive:p,setAnimateFunction:f,getState:()=>s,reset:()=>{s=lp(),a=!0}}}function mb(n,r){return typeof r=="string"?r!==n:Array.isArray(r)?!z0(r,n):!1}function nr(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function lp(){return{animate:nr(!0),whileInView:nr(),whileHover:nr(),whileTap:nr(),whileDrag:nr(),whileFocus:nr(),exit:nr()}}class Vn{constructor(r){this.isMounted=!1,this.node=r}update(){}}class gb extends Vn{constructor(r){super(r),r.animationState||(r.animationState=pb(r))}updateAnimationControlsSubscription(){const{animate:r}=this.node.getProps();qo(r)&&(this.unmountControls=r.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:r}=this.node.getProps(),{animate:s}=this.node.prevProps||{};r!==s&&this.updateAnimationControlsSubscription()}unmount(){var r;this.node.animationState.reset(),(r=this.unmountControls)==null||r.call(this)}}let yb=0;class xb extends Vn{constructor(){super(...arguments),this.id=yb++}update(){if(!this.node.presenceContext)return;const{isPresent:r,onExitComplete:s}=this.node.presenceContext,{isPresent:a}=this.node.prevPresenceContext||{};if(!this.node.animationState||r===a)return;const c=this.node.animationState.setActive("exit",!r);s&&!r&&c.then(()=>{s(this.id)})}mount(){const{register:r,onExitComplete:s}=this.node.presenceContext||{};s&&s(this.id),r&&(this.unmount=r(this.id))}unmount(){}}const vb={animation:{Feature:gb},exit:{Feature:xb}};function qi(n,r,s,a={passive:!0}){return n.addEventListener(r,s,a),()=>n.removeEventListener(r,s)}function os(n){return{point:{x:n.pageX,y:n.pageY}}}const wb=n=>r=>gu(r)&&n(r,os(r));function Ui(n,r,s,a){return qi(n,r,wb(s),a)}const F0=1e-4,bb=1-F0,kb=1+F0,V0=.01,jb=0-V0,Sb=0+V0;function ct(n){return n.max-n.min}function Nb(n,r,s){return Math.abs(n-r)<=s}function cp(n,r,s,a=.5){n.origin=a,n.originPoint=_e(r.min,r.max,n.origin),n.scale=ct(s)/ct(r),n.translate=_e(s.min,s.max,n.origin)-n.originPoint,(n.scale>=bb&&n.scale<=kb||isNaN(n.scale))&&(n.scale=1),(n.translate>=jb&&n.translate<=Sb||isNaN(n.translate))&&(n.translate=0)}function Wi(n,r,s,a){cp(n.x,r.x,s.x,a?a.originX:void 0),cp(n.y,r.y,s.y,a?a.originY:void 0)}function up(n,r,s){n.min=s.min+r.min,n.max=n.min+ct(r)}function Cb(n,r,s){up(n.x,r.x,s.x),up(n.y,r.y,s.y)}function dp(n,r,s){n.min=r.min-s.min,n.max=n.min+ct(r)}function Hi(n,r,s){dp(n.x,r.x,s.x),dp(n.y,r.y,s.y)}function Rt(n){return[n("x"),n("y")]}const O0=({current:n})=>n?n.ownerDocument.defaultView:null,fp=(n,r)=>Math.abs(n-r);function Pb(n,r){const s=fp(n.x,r.x),a=fp(n.y,r.y);return Math.sqrt(s**2+a**2)}class B0{constructor(r,s,{transformPagePoint:a,contextWindow:c=window,dragSnapToOrigin:f=!1,distanceThreshold:d=3}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const w=oc(this.lastMoveEventInfo,this.history),C=this.startEvent!==null,S=Pb(w.offset,{x:0,y:0})>=this.distanceThreshold;if(!C&&!S)return;const{point:P}=w,{timestamp:A}=et;this.history.push({...P,timestamp:A});const{onStart:M,onMove:D}=this.handlers;C||(M&&M(this.lastMoveEvent,w),this.startEvent=this.lastMoveEvent),D&&D(this.lastMoveEvent,w)},this.handlePointerMove=(w,C)=>{this.lastMoveEvent=w,this.lastMoveEventInfo=sc(C,this.transformPagePoint),De.update(this.updatePoint,!0)},this.handlePointerUp=(w,C)=>{this.end();const{onEnd:S,onSessionEnd:P,resumeAnimation:A}=this.handlers;if(this.dragSnapToOrigin&&A&&A(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const M=oc(w.type==="pointercancel"?this.lastMoveEventInfo:sc(C,this.transformPagePoint),this.history);this.startEvent&&S&&S(w,M),P&&P(w,M)},!gu(r))return;this.dragSnapToOrigin=f,this.handlers=s,this.transformPagePoint=a,this.distanceThreshold=d,this.contextWindow=c||window;const p=os(r),m=sc(p,this.transformPagePoint),{point:g}=m,{timestamp:y}=et;this.history=[{...g,timestamp:y}];const{onSessionStart:v}=s;v&&v(r,oc(m,this.history)),this.removeListeners=rs(Ui(this.contextWindow,"pointermove",this.handlePointerMove),Ui(this.contextWindow,"pointerup",this.handlePointerUp),Ui(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(r){this.handlers=r}end(){this.removeListeners&&this.removeListeners(),zn(this.updatePoint)}}function sc(n,r){return r?{point:r(n.point)}:n}function hp(n,r){return{x:n.x-r.x,y:n.y-r.y}}function oc({point:n},r){return{point:n,delta:hp(n,$0(r)),offset:hp(n,Eb(r)),velocity:Tb(r,.1)}}function Eb(n){return n[0]}function $0(n){return n[n.length-1]}function Tb(n,r){if(n.length<2)return{x:0,y:0};let s=n.length-1,a=null;const c=$0(n);for(;s>=0&&(a=n[s],!(c.timestamp-a.timestamp>Yt(r)));)s--;if(!a)return{x:0,y:0};const f=Gt(c.timestamp-a.timestamp);if(f===0)return{x:0,y:0};const d={x:(c.x-a.x)/f,y:(c.y-a.y)/f};return d.x===1/0&&(d.x=0),d.y===1/0&&(d.y=0),d}function Rb(n,{min:r,max:s},a){return r!==void 0&&n<r?n=a?_e(r,n,a.min):Math.max(n,r):s!==void 0&&n>s&&(n=a?_e(s,n,a.max):Math.min(n,s)),n}function pp(n,r,s){return{min:r!==void 0?n.min+r:void 0,max:s!==void 0?n.max+s-(n.max-n.min):void 0}}function Mb(n,{top:r,left:s,bottom:a,right:c}){return{x:pp(n.x,s,c),y:pp(n.y,r,a)}}function mp(n,r){let s=r.min-n.min,a=r.max-n.max;return r.max-r.min<n.max-n.min&&([s,a]=[a,s]),{min:s,max:a}}function Lb(n,r){return{x:mp(n.x,r.x),y:mp(n.y,r.y)}}function Ab(n,r){let s=.5;const a=ct(n),c=ct(r);return c>a?s=Yi(r.min,r.max-a,n.min):a>c&&(s=Yi(n.min,n.max-c,r.min)),dn(0,1,s)}function Db(n,r){const s={};return r.min!==void 0&&(s.min=r.min-n.min),r.max!==void 0&&(s.max=r.max-n.min),s}const Ic=.35;function Ib(n=Ic){return n===!1?n=0:n===!0&&(n=Ic),{x:gp(n,"left","right"),y:gp(n,"top","bottom")}}function gp(n,r,s){return{min:yp(n,r),max:yp(n,s)}}function yp(n,r){return typeof n=="number"?n:n[r]||0}const zb=new WeakMap;class _b{constructor(r){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Ue(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=r}start(r,{snapToCursor:s=!1,distanceThreshold:a}={}){const{presenceContext:c}=this.visualElement;if(c&&c.isPresent===!1)return;const f=v=>{const{dragSnapToOrigin:w}=this.getProps();w?this.pauseAnimation():this.stopAnimation(),s&&this.snapToCursor(os(v).point)},d=(v,w)=>{const{drag:C,dragPropagation:S,onDragStart:P}=this.getProps();if(C&&!S&&(this.openDragLock&&this.openDragLock(),this.openDragLock=Y2(C),!this.openDragLock))return;this.latestPointerEvent=v,this.latestPanInfo=w,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Rt(M=>{let D=this.getAxisMotionValue(M).get()||0;if(Xt.test(D)){const{projection:I}=this.visualElement;if(I&&I.layout){const K=I.layout.layoutBox[M];K&&(D=ct(K)*(parseFloat(D)/100))}}this.originPoint[M]=D}),P&&De.postRender(()=>P(v,w)),Ac(this.visualElement,"transform");const{animationState:A}=this.visualElement;A&&A.setActive("whileDrag",!0)},p=(v,w)=>{this.latestPointerEvent=v,this.latestPanInfo=w;const{dragPropagation:C,dragDirectionLock:S,onDirectionLock:P,onDrag:A}=this.getProps();if(!C&&!this.openDragLock)return;const{offset:M}=w;if(S&&this.currentDirection===null){this.currentDirection=Fb(M),this.currentDirection!==null&&P&&P(this.currentDirection);return}this.updateAxis("x",w.point,M),this.updateAxis("y",w.point,M),this.visualElement.render(),A&&A(v,w)},m=(v,w)=>{this.latestPointerEvent=v,this.latestPanInfo=w,this.stop(v,w),this.latestPointerEvent=null,this.latestPanInfo=null},g=()=>Rt(v=>{var w;return this.getAnimationState(v)==="paused"&&((w=this.getAxisMotionValue(v).animation)==null?void 0:w.play())}),{dragSnapToOrigin:y}=this.getProps();this.panSession=new B0(r,{onSessionStart:f,onStart:d,onMove:p,onSessionEnd:m,resumeAnimation:g},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:y,distanceThreshold:a,contextWindow:O0(this.visualElement)})}stop(r,s){const a=r||this.latestPointerEvent,c=s||this.latestPanInfo,f=this.isDragging;if(this.cancel(),!f||!c||!a)return;const{velocity:d}=c;this.startAnimation(d);const{onDragEnd:p}=this.getProps();p&&De.postRender(()=>p(a,c))}cancel(){this.isDragging=!1;const{projection:r,animationState:s}=this.visualElement;r&&(r.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:a}=this.getProps();!a&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),s&&s.setActive("whileDrag",!1)}updateAxis(r,s,a){const{drag:c}=this.getProps();if(!a||!Po(r,c,this.currentDirection))return;const f=this.getAxisMotionValue(r);let d=this.originPoint[r]+a[r];this.constraints&&this.constraints[r]&&(d=Rb(d,this.constraints[r],this.elastic[r])),f.set(d)}resolveConstraints(){var f;const{dragConstraints:r,dragElastic:s}=this.getProps(),a=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(f=this.visualElement.projection)==null?void 0:f.layout,c=this.constraints;r&&zr(r)?this.constraints||(this.constraints=this.resolveRefConstraints()):r&&a?this.constraints=Mb(a.layoutBox,r):this.constraints=!1,this.elastic=Ib(s),c!==this.constraints&&a&&this.constraints&&!this.hasMutatedConstraints&&Rt(d=>{this.constraints!==!1&&this.getAxisMotionValue(d)&&(this.constraints[d]=Db(a.layoutBox[d],this.constraints[d]))})}resolveRefConstraints(){const{dragConstraints:r,onMeasureDragConstraints:s}=this.getProps();if(!r||!zr(r))return!1;const a=r.current,{projection:c}=this.visualElement;if(!c||!c.layout)return!1;const f=Bw(a,c.root,this.visualElement.getTransformPagePoint());let d=Lb(c.layout.layoutBox,f);if(s){const p=s(Fw(d));this.hasMutatedConstraints=!!p,p&&(d=S0(p))}return d}startAnimation(r){const{drag:s,dragMomentum:a,dragElastic:c,dragTransition:f,dragSnapToOrigin:d,onDragTransitionEnd:p}=this.getProps(),m=this.constraints||{},g=Rt(y=>{if(!Po(y,s,this.currentDirection))return;let v=m&&m[y]||{};d&&(v={min:0,max:0});const w=c?200:1e6,C=c?40:1e7,S={type:"inertia",velocity:a?r[y]:0,bounceStiffness:w,bounceDamping:C,timeConstant:750,restDelta:1,restSpeed:10,...f,...v};return this.startAxisValueAnimation(y,S)});return Promise.all(g).then(p)}startAxisValueAnimation(r,s){const a=this.getAxisMotionValue(r);return Ac(this.visualElement,r),a.start(Pu(r,a,0,s,this.visualElement,!1))}stopAnimation(){Rt(r=>this.getAxisMotionValue(r).stop())}pauseAnimation(){Rt(r=>{var s;return(s=this.getAxisMotionValue(r).animation)==null?void 0:s.pause()})}getAnimationState(r){var s;return(s=this.getAxisMotionValue(r).animation)==null?void 0:s.state}getAxisMotionValue(r){const s=`_drag${r.toUpperCase()}`,a=this.visualElement.getProps(),c=a[s];return c||this.visualElement.getValue(r,(a.initial?a.initial[r]:void 0)||0)}snapToCursor(r){Rt(s=>{const{drag:a}=this.getProps();if(!Po(s,a,this.currentDirection))return;const{projection:c}=this.visualElement,f=this.getAxisMotionValue(s);if(c&&c.layout){const{min:d,max:p}=c.layout.layoutBox[s];f.set(r[s]-_e(d,p,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:r,dragConstraints:s}=this.getProps(),{projection:a}=this.visualElement;if(!zr(s)||!a||!this.constraints)return;this.stopAnimation();const c={x:0,y:0};Rt(d=>{const p=this.getAxisMotionValue(d);if(p&&this.constraints!==!1){const m=p.get();c[d]=Ab({min:m,max:m},this.constraints[d])}});const{transformTemplate:f}=this.visualElement.getProps();this.visualElement.current.style.transform=f?f({},""):"none",a.root&&a.root.updateScroll(),a.updateLayout(),this.resolveConstraints(),Rt(d=>{if(!Po(d,r,null))return;const p=this.getAxisMotionValue(d),{min:m,max:g}=this.constraints[d];p.set(_e(m,g,c[d]))})}addListeners(){if(!this.visualElement.current)return;zb.set(this.visualElement,this);const r=this.visualElement.current,s=Ui(r,"pointerdown",m=>{const{drag:g,dragListener:y=!0}=this.getProps();g&&y&&this.start(m)}),a=()=>{const{dragConstraints:m}=this.getProps();zr(m)&&m.current&&(this.constraints=this.resolveRefConstraints())},{projection:c}=this.visualElement,f=c.addEventListener("measure",a);c&&!c.layout&&(c.root&&c.root.updateScroll(),c.updateLayout()),De.read(a);const d=qi(window,"resize",()=>this.scalePositionWithinConstraints()),p=c.addEventListener("didUpdate",({delta:m,hasLayoutChanged:g})=>{this.isDragging&&g&&(Rt(y=>{const v=this.getAxisMotionValue(y);v&&(this.originPoint[y]+=m[y].translate,v.set(v.get()+m[y].translate))}),this.visualElement.render())});return()=>{d(),s(),f(),p&&p()}}getProps(){const r=this.visualElement.getProps(),{drag:s=!1,dragDirectionLock:a=!1,dragPropagation:c=!1,dragConstraints:f=!1,dragElastic:d=Ic,dragMomentum:p=!0}=r;return{...r,drag:s,dragDirectionLock:a,dragPropagation:c,dragConstraints:f,dragElastic:d,dragMomentum:p}}}function Po(n,r,s){return(r===!0||r===n)&&(s===null||s===n)}function Fb(n,r=10){let s=null;return Math.abs(n.y)>r?s="y":Math.abs(n.x)>r&&(s="x"),s}class Vb extends Vn{constructor(r){super(r),this.removeGroupControls=Lt,this.removeListeners=Lt,this.controls=new _b(r)}mount(){const{dragControls:r}=this.node.getProps();r&&(this.removeGroupControls=r.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Lt}unmount(){this.removeGroupControls(),this.removeListeners()}}const xp=n=>(r,s)=>{n&&De.postRender(()=>n(r,s))};class Ob extends Vn{constructor(){super(...arguments),this.removePointerDownListener=Lt}onPointerDown(r){this.session=new B0(r,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:O0(this.node)})}createPanHandlers(){const{onPanSessionStart:r,onPanStart:s,onPan:a,onPanEnd:c}=this.node.getProps();return{onSessionStart:xp(r),onStart:xp(s),onMove:a,onEnd:(f,d)=>{delete this.session,c&&De.postRender(()=>c(f,d))}}}mount(){this.removePointerDownListener=Ui(this.node.current,"pointerdown",r=>this.onPointerDown(r))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const _o={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function vp(n,r){return r.max===r.min?0:n/(r.max-r.min)*100}const _i={correct:(n,r)=>{if(!r.target)return n;if(typeof n=="string")if(ce.test(n))n=parseFloat(n);else return n;const s=vp(n,r.target.x),a=vp(n,r.target.y);return`${s}% ${a}%`}},Bb={correct:(n,{treeScale:r,projectionDelta:s})=>{const a=n,c=_n.parse(n);if(c.length>5)return a;const f=_n.createTransformer(n),d=typeof c[0]!="number"?1:0,p=s.x.scale*r.x,m=s.y.scale*r.y;c[0+d]/=p,c[1+d]/=m;const g=_e(p,m,.5);return typeof c[2+d]=="number"&&(c[2+d]/=g),typeof c[3+d]=="number"&&(c[3+d]/=g),f(c)}};let ac=!1;class $b extends b.Component{componentDidMount(){const{visualElement:r,layoutGroup:s,switchLayoutGroup:a,layoutId:c}=this.props,{projection:f}=r;fw(Ub),f&&(s.group&&s.group.add(f),a&&a.register&&c&&a.register(f),ac&&f.root.didUpdate(),f.addEventListener("animationComplete",()=>{this.safeToRemove()}),f.setOptions({...f.options,onExitComplete:()=>this.safeToRemove()})),_o.hasEverUpdated=!0}getSnapshotBeforeUpdate(r){const{layoutDependency:s,visualElement:a,drag:c,isPresent:f}=this.props,{projection:d}=a;return d&&(d.isPresent=f,ac=!0,c||r.layoutDependency!==s||s===void 0||r.isPresent!==f?d.willUpdate():this.safeToRemove(),r.isPresent!==f&&(f?d.promote():d.relegate()||De.postRender(()=>{const p=d.getStack();(!p||!p.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:r}=this.props.visualElement;r&&(r.root.didUpdate(),mu.postRender(()=>{!r.currentAnimation&&r.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:r,layoutGroup:s,switchLayoutGroup:a}=this.props,{projection:c}=r;ac=!0,c&&(c.scheduleCheckAfterUnmount(),s&&s.group&&s.group.remove(c),a&&a.deregister&&a.deregister(c))}safeToRemove(){const{safeToRemove:r}=this.props;r&&r()}render(){return null}}function U0(n){const[r,s]=u0(),a=b.useContext(Yc);return l.jsx($b,{...n,layoutGroup:a,switchLayoutGroup:b.useContext(k0),isPresent:r,safeToRemove:s})}const Ub={borderRadius:{..._i,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:_i,borderTopRightRadius:_i,borderBottomLeftRadius:_i,borderBottomRightRadius:_i,boxShadow:Bb};function Wb(n,r,s){const a=st(n)?n:Br(n);return a.start(Pu("",a,r,s)),a.animation}const Hb=(n,r)=>n.depth-r.depth;class Kb{constructor(){this.children=[],this.isDirty=!1}add(r){Qc(this.children,r),this.isDirty=!0}remove(r){Zc(this.children,r),this.isDirty=!0}forEach(r){this.isDirty&&this.children.sort(Hb),this.isDirty=!1,this.children.forEach(r)}}function Yb(n,r){const s=yt.now(),a=({timestamp:c})=>{const f=c-s;f>=r&&(zn(a),n(f-r))};return De.setup(a,!0),()=>zn(a)}const W0=["TopLeft","TopRight","BottomLeft","BottomRight"],Gb=W0.length,wp=n=>typeof n=="string"?parseFloat(n):n,bp=n=>typeof n=="number"||ce.test(n);function Xb(n,r,s,a,c,f){c?(n.opacity=_e(0,s.opacity??1,Qb(a)),n.opacityExit=_e(r.opacity??1,0,Zb(a))):f&&(n.opacity=_e(r.opacity??1,s.opacity??1,a));for(let d=0;d<Gb;d++){const p=`border${W0[d]}Radius`;let m=kp(r,p),g=kp(s,p);if(m===void 0&&g===void 0)continue;m||(m=0),g||(g=0),m===0||g===0||bp(m)===bp(g)?(n[p]=Math.max(_e(wp(m),wp(g),a),0),(Xt.test(g)||Xt.test(m))&&(n[p]+="%")):n[p]=g}(r.rotate||s.rotate)&&(n.rotate=_e(r.rotate||0,s.rotate||0,a))}function kp(n,r){return n[r]!==void 0?n[r]:n.borderRadius}const Qb=H0(0,.5,Tm),Zb=H0(.5,.95,Lt);function H0(n,r,s){return a=>a<n?0:a>r?1:s(Yi(n,r,a))}function jp(n,r){n.min=r.min,n.max=r.max}function Tt(n,r){jp(n.x,r.x),jp(n.y,r.y)}function Sp(n,r){n.translate=r.translate,n.scale=r.scale,n.originPoint=r.originPoint,n.origin=r.origin}function Np(n,r,s,a,c){return n-=r,n=Uo(n,1/s,a),c!==void 0&&(n=Uo(n,1/c,a)),n}function qb(n,r=0,s=1,a=.5,c,f=n,d=n){if(Xt.test(r)&&(r=parseFloat(r),r=_e(d.min,d.max,r/100)-d.min),typeof r!="number")return;let p=_e(f.min,f.max,a);n===f&&(p-=r),n.min=Np(n.min,r,s,p,c),n.max=Np(n.max,r,s,p,c)}function Cp(n,r,[s,a,c],f,d){qb(n,r[s],r[a],r[c],r.scale,f,d)}const Jb=["x","scaleX","originX"],e5=["y","scaleY","originY"];function Pp(n,r,s,a){Cp(n.x,r,Jb,s?s.x:void 0,a?a.x:void 0),Cp(n.y,r,e5,s?s.y:void 0,a?a.y:void 0)}function Ep(n){return n.translate===0&&n.scale===1}function K0(n){return Ep(n.x)&&Ep(n.y)}function Tp(n,r){return n.min===r.min&&n.max===r.max}function t5(n,r){return Tp(n.x,r.x)&&Tp(n.y,r.y)}function Rp(n,r){return Math.round(n.min)===Math.round(r.min)&&Math.round(n.max)===Math.round(r.max)}function Y0(n,r){return Rp(n.x,r.x)&&Rp(n.y,r.y)}function Mp(n){return ct(n.x)/ct(n.y)}function Lp(n,r){return n.translate===r.translate&&n.scale===r.scale&&n.originPoint===r.originPoint}class n5{constructor(){this.members=[]}add(r){Qc(this.members,r),r.scheduleRender()}remove(r){if(Zc(this.members,r),r===this.prevLead&&(this.prevLead=void 0),r===this.lead){const s=this.members[this.members.length-1];s&&this.promote(s)}}relegate(r){const s=this.members.findIndex(c=>r===c);if(s===0)return!1;let a;for(let c=s;c>=0;c--){const f=this.members[c];if(f.isPresent!==!1){a=f;break}}return a?(this.promote(a),!0):!1}promote(r,s){const a=this.lead;if(r!==a&&(this.prevLead=a,this.lead=r,r.show(),a)){a.instance&&a.scheduleRender(),r.scheduleRender(),r.resumeFrom=a,s&&(r.resumeFrom.preserveOpacity=!0),a.snapshot&&(r.snapshot=a.snapshot,r.snapshot.latestValues=a.animationValues||a.latestValues),r.root&&r.root.isUpdating&&(r.isLayoutDirty=!0);const{crossfade:c}=r.options;c===!1&&a.hide()}}exitAnimationComplete(){this.members.forEach(r=>{const{options:s,resumingFrom:a}=r;s.onExitComplete&&s.onExitComplete(),a&&a.options.onExitComplete&&a.options.onExitComplete()})}scheduleRender(){this.members.forEach(r=>{r.instance&&r.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function r5(n,r,s){let a="";const c=n.x.translate/r.x,f=n.y.translate/r.y,d=(s==null?void 0:s.z)||0;if((c||f||d)&&(a=`translate3d(${c}px, ${f}px, ${d}px) `),(r.x!==1||r.y!==1)&&(a+=`scale(${1/r.x}, ${1/r.y}) `),s){const{transformPerspective:g,rotate:y,rotateX:v,rotateY:w,skewX:C,skewY:S}=s;g&&(a=`perspective(${g}px) ${a}`),y&&(a+=`rotate(${y}deg) `),v&&(a+=`rotateX(${v}deg) `),w&&(a+=`rotateY(${w}deg) `),C&&(a+=`skewX(${C}deg) `),S&&(a+=`skewY(${S}deg) `)}const p=n.x.scale*r.x,m=n.y.scale*r.y;return(p!==1||m!==1)&&(a+=`scale(${p}, ${m})`),a||"none"}const lc=["","X","Y","Z"],i5=1e3;let s5=0;function cc(n,r,s,a){const{latestValues:c}=r;c[n]&&(s[n]=c[n],r.setStaticValue(n,0),a&&(a[n]=0))}function G0(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:r}=n.options;if(!r)return;const s=L0(r);if(window.MotionHasOptimisedAnimation(s,"transform")){const{layout:c,layoutId:f}=n.options;window.MotionCancelOptimisedAnimation(s,"transform",De,!(c||f))}const{parent:a}=n;a&&!a.hasCheckedOptimisedAppear&&G0(a)}function X0({attachResizeListener:n,defaultParent:r,measureScroll:s,checkIsScrollRoot:a,resetTransform:c}){return class{constructor(d={},p=r==null?void 0:r()){this.id=s5++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(l5),this.nodes.forEach(f5),this.nodes.forEach(h5),this.nodes.forEach(c5)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=d,this.root=p?p.root||p:this,this.path=p?[...p.path,p]:[],this.parent=p,this.depth=p?p.depth+1:0;for(let m=0;m<this.path.length;m++)this.path[m].shouldResetTransform=!0;this.root===this&&(this.nodes=new Kb)}addEventListener(d,p){return this.eventHandlers.has(d)||this.eventHandlers.set(d,new eu),this.eventHandlers.get(d).add(p)}notifyListeners(d,...p){const m=this.eventHandlers.get(d);m&&m.notify(...p)}hasListeners(d){return this.eventHandlers.has(d)}mount(d){if(this.instance)return;this.isSVG=c0(d)&&!J2(d),this.instance=d;const{layoutId:p,layout:m,visualElement:g}=this.options;if(g&&!g.current&&g.mount(d),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(m||p)&&(this.isLayoutDirty=!0),n){let y,v=0;const w=()=>this.root.updateBlockedByResize=!1;De.read(()=>{v=window.innerWidth}),n(d,()=>{const C=window.innerWidth;C!==v&&(v=C,this.root.updateBlockedByResize=!0,y&&y(),y=Yb(w,250),_o.hasAnimatedSinceResize&&(_o.hasAnimatedSinceResize=!1,this.nodes.forEach(Ip)))})}p&&this.root.registerSharedNode(p,this),this.options.animate!==!1&&g&&(p||m)&&this.addEventListener("didUpdate",({delta:y,hasLayoutChanged:v,hasRelativeLayoutChanged:w,layout:C})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const S=this.options.transition||g.getDefaultTransition()||x5,{onLayoutAnimationStart:P,onLayoutAnimationComplete:A}=g.getProps(),M=!this.targetLayout||!Y0(this.targetLayout,C),D=!v&&w;if(this.options.layoutRoot||this.resumeFrom||D||v&&(M||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const I={...hu(S,"layout"),onPlay:P,onComplete:A};(g.shouldReduceMotion||this.options.layoutRoot)&&(I.delay=0,I.type=!1),this.startAnimation(I),this.setAnimationOrigin(y,D)}else v||Ip(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=C})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const d=this.getStack();d&&d.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),zn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(p5),this.animationId++)}getTransformTemplate(){const{visualElement:d}=this.options;return d&&d.getProps().transformTemplate}willUpdate(d=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&G0(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let y=0;y<this.path.length;y++){const v=this.path[y];v.shouldResetTransform=!0,v.updateScroll("snapshot"),v.options.layoutRoot&&v.willUpdate(!1)}const{layoutId:p,layout:m}=this.options;if(p===void 0&&!m)return;const g=this.getTransformTemplate();this.prevTransformTemplateValue=g?g(this.latestValues,""):void 0,this.updateSnapshot(),d&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Ap);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Dp);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(d5),this.nodes.forEach(o5),this.nodes.forEach(a5)):this.nodes.forEach(Dp),this.clearAllSnapshots();const p=yt.now();et.delta=dn(0,1e3/60,p-et.timestamp),et.timestamp=p,et.isProcessing=!0,Zl.update.process(et),Zl.preRender.process(et),Zl.render.process(et),et.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,mu.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(u5),this.sharedNodes.forEach(m5)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,De.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){De.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!ct(this.snapshot.measuredBox.x)&&!ct(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let m=0;m<this.path.length;m++)this.path[m].updateScroll();const d=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Ue(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:p}=this.options;p&&p.notify("LayoutMeasure",this.layout.layoutBox,d?d.layoutBox:void 0)}updateScroll(d="measure"){let p=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===d&&(p=!1),p&&this.instance){const m=a(this.instance);this.scroll={animationId:this.root.animationId,phase:d,isRoot:m,offset:s(this.instance),wasRoot:this.scroll?this.scroll.isRoot:m}}}resetTransform(){if(!c)return;const d=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,p=this.projectionDelta&&!K0(this.projectionDelta),m=this.getTransformTemplate(),g=m?m(this.latestValues,""):void 0,y=g!==this.prevTransformTemplateValue;d&&this.instance&&(p||rr(this.latestValues)||y)&&(c(this.instance,g),this.shouldResetTransform=!1,this.scheduleRender())}measure(d=!0){const p=this.measurePageBox();let m=this.removeElementScroll(p);return d&&(m=this.removeTransform(m)),v5(m),{animationId:this.root.animationId,measuredBox:p,layoutBox:m,latestValues:{},source:this.id}}measurePageBox(){var g;const{visualElement:d}=this.options;if(!d)return Ue();const p=d.measureViewportBox();if(!(((g=this.scroll)==null?void 0:g.wasRoot)||this.path.some(w5))){const{scroll:y}=this.root;y&&(_r(p.x,y.offset.x),_r(p.y,y.offset.y))}return p}removeElementScroll(d){var m;const p=Ue();if(Tt(p,d),(m=this.scroll)!=null&&m.wasRoot)return p;for(let g=0;g<this.path.length;g++){const y=this.path[g],{scroll:v,options:w}=y;y!==this.root&&v&&w.layoutScroll&&(v.wasRoot&&Tt(p,d),_r(p.x,v.offset.x),_r(p.y,v.offset.y))}return p}applyTransform(d,p=!1){const m=Ue();Tt(m,d);for(let g=0;g<this.path.length;g++){const y=this.path[g];!p&&y.options.layoutScroll&&y.scroll&&y!==y.root&&Fr(m,{x:-y.scroll.offset.x,y:-y.scroll.offset.y}),rr(y.latestValues)&&Fr(m,y.latestValues)}return rr(this.latestValues)&&Fr(m,this.latestValues),m}removeTransform(d){const p=Ue();Tt(p,d);for(let m=0;m<this.path.length;m++){const g=this.path[m];if(!g.instance||!rr(g.latestValues))continue;Tc(g.latestValues)&&g.updateSnapshot();const y=Ue(),v=g.measurePageBox();Tt(y,v),Pp(p,g.latestValues,g.snapshot?g.snapshot.layoutBox:void 0,y)}return rr(this.latestValues)&&Pp(p,this.latestValues),p}setTargetDelta(d){this.targetDelta=d,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(d){this.options={...this.options,...d,crossfade:d.crossfade!==void 0?d.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==et.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(d=!1){var w;const p=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=p.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=p.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=p.isSharedProjectionDirty);const m=!!this.resumingFrom||this!==p;if(!(d||m&&this.isSharedProjectionDirty||this.isProjectionDirty||(w=this.parent)!=null&&w.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:y,layoutId:v}=this.options;if(!(!this.layout||!(y||v))){if(this.resolvedRelativeTargetAt=et.timestamp,!this.targetDelta&&!this.relativeTarget){const C=this.getClosestProjectingParent();C&&C.layout&&this.animationProgress!==1?(this.relativeParent=C,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Ue(),this.relativeTargetOrigin=Ue(),Hi(this.relativeTargetOrigin,this.layout.layoutBox,C.layout.layoutBox),Tt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Ue(),this.targetWithTransforms=Ue()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Cb(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Tt(this.target,this.layout.layoutBox),C0(this.target,this.targetDelta)):Tt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const C=this.getClosestProjectingParent();C&&!!C.resumingFrom==!!this.resumingFrom&&!C.options.layoutScroll&&C.target&&this.animationProgress!==1?(this.relativeParent=C,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Ue(),this.relativeTargetOrigin=Ue(),Hi(this.relativeTargetOrigin,this.target,C.target),Tt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||Tc(this.parent.latestValues)||N0(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var S;const d=this.getLead(),p=!!this.resumingFrom||this!==d;let m=!0;if((this.isProjectionDirty||(S=this.parent)!=null&&S.isProjectionDirty)&&(m=!1),p&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(m=!1),this.resolvedRelativeTargetAt===et.timestamp&&(m=!1),m)return;const{layout:g,layoutId:y}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(g||y))return;Tt(this.layoutCorrected,this.layout.layoutBox);const v=this.treeScale.x,w=this.treeScale.y;Ow(this.layoutCorrected,this.treeScale,this.path,p),d.layout&&!d.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(d.target=d.layout.layoutBox,d.targetWithTransforms=Ue());const{target:C}=d;if(!C){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Sp(this.prevProjectionDelta.x,this.projectionDelta.x),Sp(this.prevProjectionDelta.y,this.projectionDelta.y)),Wi(this.projectionDelta,this.layoutCorrected,C,this.latestValues),(this.treeScale.x!==v||this.treeScale.y!==w||!Lp(this.projectionDelta.x,this.prevProjectionDelta.x)||!Lp(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",C))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(d=!0){var p;if((p=this.options.visualElement)==null||p.scheduleRender(),d){const m=this.getStack();m&&m.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Vr(),this.projectionDelta=Vr(),this.projectionDeltaWithTransform=Vr()}setAnimationOrigin(d,p=!1){const m=this.snapshot,g=m?m.latestValues:{},y={...this.latestValues},v=Vr();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!p;const w=Ue(),C=m?m.source:void 0,S=this.layout?this.layout.source:void 0,P=C!==S,A=this.getStack(),M=!A||A.members.length<=1,D=!!(P&&!M&&this.options.crossfade===!0&&!this.path.some(y5));this.animationProgress=0;let I;this.mixTargetDelta=K=>{const U=K/1e3;zp(v.x,d.x,U),zp(v.y,d.y,U),this.setTargetDelta(v),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Hi(w,this.layout.layoutBox,this.relativeParent.layout.layoutBox),g5(this.relativeTarget,this.relativeTargetOrigin,w,U),I&&t5(this.relativeTarget,I)&&(this.isProjectionDirty=!1),I||(I=Ue()),Tt(I,this.relativeTarget)),P&&(this.animationValues=y,Xb(y,g,this.latestValues,U,D,M)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=U},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(d){var p,m,g;this.notifyListeners("animationStart"),(p=this.currentAnimation)==null||p.stop(),(g=(m=this.resumingFrom)==null?void 0:m.currentAnimation)==null||g.stop(),this.pendingAnimation&&(zn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=De.update(()=>{_o.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Br(0)),this.currentAnimation=Wb(this.motionValue,[0,1e3],{...d,velocity:0,isSync:!0,onUpdate:y=>{this.mixTargetDelta(y),d.onUpdate&&d.onUpdate(y)},onStop:()=>{},onComplete:()=>{d.onComplete&&d.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const d=this.getStack();d&&d.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(i5),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const d=this.getLead();let{targetWithTransforms:p,target:m,layout:g,latestValues:y}=d;if(!(!p||!m||!g)){if(this!==d&&this.layout&&g&&Q0(this.options.animationType,this.layout.layoutBox,g.layoutBox)){m=this.target||Ue();const v=ct(this.layout.layoutBox.x);m.x.min=d.target.x.min,m.x.max=m.x.min+v;const w=ct(this.layout.layoutBox.y);m.y.min=d.target.y.min,m.y.max=m.y.min+w}Tt(p,m),Fr(p,y),Wi(this.projectionDeltaWithTransform,this.layoutCorrected,p,y)}}registerSharedNode(d,p){this.sharedNodes.has(d)||this.sharedNodes.set(d,new n5),this.sharedNodes.get(d).add(p);const g=p.options.initialPromotionConfig;p.promote({transition:g?g.transition:void 0,preserveFollowOpacity:g&&g.shouldPreserveFollowOpacity?g.shouldPreserveFollowOpacity(p):void 0})}isLead(){const d=this.getStack();return d?d.lead===this:!0}getLead(){var p;const{layoutId:d}=this.options;return d?((p=this.getStack())==null?void 0:p.lead)||this:this}getPrevLead(){var p;const{layoutId:d}=this.options;return d?(p=this.getStack())==null?void 0:p.prevLead:void 0}getStack(){const{layoutId:d}=this.options;if(d)return this.root.sharedNodes.get(d)}promote({needsReset:d,transition:p,preserveFollowOpacity:m}={}){const g=this.getStack();g&&g.promote(this,m),d&&(this.projectionDelta=void 0,this.needsReset=!0),p&&this.setOptions({transition:p})}relegate(){const d=this.getStack();return d?d.relegate(this):!1}resetSkewAndRotation(){const{visualElement:d}=this.options;if(!d)return;let p=!1;const{latestValues:m}=d;if((m.z||m.rotate||m.rotateX||m.rotateY||m.rotateZ||m.skewX||m.skewY)&&(p=!0),!p)return;const g={};m.z&&cc("z",d,g,this.animationValues);for(let y=0;y<lc.length;y++)cc(`rotate${lc[y]}`,d,g,this.animationValues),cc(`skew${lc[y]}`,d,g,this.animationValues);d.render();for(const y in g)d.setStaticValue(y,g[y]),this.animationValues&&(this.animationValues[y]=g[y]);d.scheduleRender()}applyProjectionStyles(d,p){if(!this.instance||this.isSVG)return;if(!this.isVisible){d.visibility="hidden";return}const m=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,d.visibility="",d.opacity="",d.pointerEvents=zo(p==null?void 0:p.pointerEvents)||"",d.transform=m?m(this.latestValues,""):"none";return}const g=this.getLead();if(!this.projectionDelta||!this.layout||!g.target){this.options.layoutId&&(d.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,d.pointerEvents=zo(p==null?void 0:p.pointerEvents)||""),this.hasProjected&&!rr(this.latestValues)&&(d.transform=m?m({},""):"none",this.hasProjected=!1);return}d.visibility="";const y=g.animationValues||g.latestValues;this.applyTransformsToTarget();let v=r5(this.projectionDeltaWithTransform,this.treeScale,y);m&&(v=m(y,v)),d.transform=v;const{x:w,y:C}=this.projectionDelta;d.transformOrigin=`${w.origin*100}% ${C.origin*100}% 0`,g.animationValues?d.opacity=g===this?y.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:y.opacityExit:d.opacity=g===this?y.opacity!==void 0?y.opacity:"":y.opacityExit!==void 0?y.opacityExit:0;for(const S in Zi){if(y[S]===void 0)continue;const{correct:P,applyTo:A,isCSSVariable:M}=Zi[S],D=v==="none"?y[S]:P(y[S],g);if(A){const I=A.length;for(let K=0;K<I;K++)d[A[K]]=D}else M?this.options.visualElement.renderState.vars[S]=D:d[S]=D}this.options.layoutId&&(d.pointerEvents=g===this?zo(p==null?void 0:p.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(d=>{var p;return(p=d.currentAnimation)==null?void 0:p.stop()}),this.root.nodes.forEach(Ap),this.root.sharedNodes.clear()}}}function o5(n){n.updateLayout()}function a5(n){var s;const r=((s=n.resumeFrom)==null?void 0:s.snapshot)||n.snapshot;if(n.isLead()&&n.layout&&r&&n.hasListeners("didUpdate")){const{layoutBox:a,measuredBox:c}=n.layout,{animationType:f}=n.options,d=r.source!==n.layout.source;f==="size"?Rt(v=>{const w=d?r.measuredBox[v]:r.layoutBox[v],C=ct(w);w.min=a[v].min,w.max=w.min+C}):Q0(f,r.layoutBox,a)&&Rt(v=>{const w=d?r.measuredBox[v]:r.layoutBox[v],C=ct(a[v]);w.max=w.min+C,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[v].max=n.relativeTarget[v].min+C)});const p=Vr();Wi(p,a,r.layoutBox);const m=Vr();d?Wi(m,n.applyTransform(c,!0),r.measuredBox):Wi(m,a,r.layoutBox);const g=!K0(p);let y=!1;if(!n.resumeFrom){const v=n.getClosestProjectingParent();if(v&&!v.resumeFrom){const{snapshot:w,layout:C}=v;if(w&&C){const S=Ue();Hi(S,r.layoutBox,w.layoutBox);const P=Ue();Hi(P,a,C.layoutBox),Y0(S,P)||(y=!0),v.options.layoutRoot&&(n.relativeTarget=P,n.relativeTargetOrigin=S,n.relativeParent=v)}}}n.notifyListeners("didUpdate",{layout:a,snapshot:r,delta:m,layoutDelta:p,hasLayoutChanged:g,hasRelativeLayoutChanged:y})}else if(n.isLead()){const{onExitComplete:a}=n.options;a&&a()}n.options.transition=void 0}function l5(n){n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function c5(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function u5(n){n.clearSnapshot()}function Ap(n){n.clearMeasurements()}function Dp(n){n.isLayoutDirty=!1}function d5(n){const{visualElement:r}=n.options;r&&r.getProps().onBeforeLayoutMeasure&&r.notify("BeforeLayoutMeasure"),n.resetTransform()}function Ip(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function f5(n){n.resolveTargetDelta()}function h5(n){n.calcProjection()}function p5(n){n.resetSkewAndRotation()}function m5(n){n.removeLeadSnapshot()}function zp(n,r,s){n.translate=_e(r.translate,0,s),n.scale=_e(r.scale,1,s),n.origin=r.origin,n.originPoint=r.originPoint}function _p(n,r,s,a){n.min=_e(r.min,s.min,a),n.max=_e(r.max,s.max,a)}function g5(n,r,s,a){_p(n.x,r.x,s.x,a),_p(n.y,r.y,s.y,a)}function y5(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const x5={duration:.45,ease:[.4,0,.1,1]},Fp=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),Vp=Fp("applewebkit/")&&!Fp("chrome/")?Math.round:Lt;function Op(n){n.min=Vp(n.min),n.max=Vp(n.max)}function v5(n){Op(n.x),Op(n.y)}function Q0(n,r,s){return n==="position"||n==="preserve-aspect"&&!Nb(Mp(r),Mp(s),.2)}function w5(n){var r;return n!==n.root&&((r=n.scroll)==null?void 0:r.wasRoot)}const b5=X0({attachResizeListener:(n,r)=>qi(n,"resize",r),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),uc={current:void 0},Z0=X0({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!uc.current){const n=new b5({});n.mount(window),n.setOptions({layoutScroll:!0}),uc.current=n}return uc.current},resetTransform:(n,r)=>{n.style.transform=r!==void 0?r:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),k5={pan:{Feature:Ob},drag:{Feature:Vb,ProjectionNode:Z0,MeasureLayout:U0}};function Bp(n,r,s){const{props:a}=n;n.animationState&&a.whileHover&&n.animationState.setActive("whileHover",s==="Start");const c="onHover"+s,f=a[c];f&&De.postRender(()=>f(r,os(r)))}class j5 extends Vn{mount(){const{current:r}=this.node;r&&(this.unmount=G2(r,(s,a)=>(Bp(this.node,a,"Start"),c=>Bp(this.node,c,"End"))))}unmount(){}}class S5 extends Vn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let r=!1;try{r=this.node.current.matches(":focus-visible")}catch{r=!0}!r||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=rs(qi(this.node.current,"focus",()=>this.onFocus()),qi(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function $p(n,r,s){const{props:a}=n;if(n.current instanceof HTMLButtonElement&&n.current.disabled)return;n.animationState&&a.whileTap&&n.animationState.setActive("whileTap",s==="Start");const c="onTap"+(s==="End"?"":s),f=a[c];f&&De.postRender(()=>f(r,os(r)))}class N5 extends Vn{mount(){const{current:r}=this.node;r&&(this.unmount=q2(r,(s,a)=>($p(this.node,a,"Start"),(c,{success:f})=>$p(this.node,c,f?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const zc=new WeakMap,dc=new WeakMap,C5=n=>{const r=zc.get(n.target);r&&r(n)},P5=n=>{n.forEach(C5)};function E5({root:n,...r}){const s=n||document;dc.has(s)||dc.set(s,{});const a=dc.get(s),c=JSON.stringify(r);return a[c]||(a[c]=new IntersectionObserver(P5,{root:n,...r})),a[c]}function T5(n,r,s){const a=E5(r);return zc.set(n,s),a.observe(n),()=>{zc.delete(n),a.unobserve(n)}}const R5={some:0,all:1};class M5 extends Vn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:r={}}=this.node.getProps(),{root:s,margin:a,amount:c="some",once:f}=r,d={root:s?s.current:void 0,rootMargin:a,threshold:typeof c=="number"?c:R5[c]},p=m=>{const{isIntersecting:g}=m;if(this.isInView===g||(this.isInView=g,f&&!g&&this.hasEnteredView))return;g&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",g);const{onViewportEnter:y,onViewportLeave:v}=this.node.getProps(),w=g?y:v;w&&w(m)};return T5(this.node.current,d,p)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:r,prevProps:s}=this.node;["amount","margin","root"].some(L5(r,s))&&this.startObserver()}unmount(){}}function L5({viewport:n={}},{viewport:r={}}={}){return s=>n[s]!==r[s]}const A5={inView:{Feature:M5},tap:{Feature:N5},focus:{Feature:S5},hover:{Feature:j5}},D5={layout:{ProjectionNode:Z0,MeasureLayout:U0}},I5={...vb,...A5,...k5,...D5},Q=_w(I5,Qw);function z5(n){n.values.forEach(r=>r.stop())}function _c(n,r){[...r].reverse().forEach(a=>{const c=n.getVariant(a);c&&Cu(n,c),n.variantChildren&&n.variantChildren.forEach(f=>{_c(f,r)})})}function _5(n,r){if(Array.isArray(r))return _c(n,r);if(typeof r=="string")return _c(n,[r]);Cu(n,r)}function F5(){const n=new Set,r={subscribe(s){return n.add(s),()=>void n.delete(s)},start(s,a){const c=[];return n.forEach(f=>{c.push(I0(f,s,{transitionOverride:a}))}),Promise.all(c)},set(s){return n.forEach(a=>{_5(a,s)})},stop(){n.forEach(s=>{z5(s)})},mount(){return()=>{r.stop()}}};return r}function V5(){const n=Xo(F5);return Xc(n.mount,[]),n}const Eu=V5,O5={some:0,all:1};function B5(n,r,{root:s,margin:a,amount:c="some"}={}){const f=r0(n),d=new WeakMap,p=g=>{g.forEach(y=>{const v=d.get(y.target);if(y.isIntersecting!==!!v)if(y.isIntersecting){const w=r(y.target,y);typeof w=="function"?d.set(y.target,w):m.unobserve(y.target)}else typeof v=="function"&&(v(y),d.delete(y.target))})},m=new IntersectionObserver(p,{root:s,rootMargin:a,threshold:typeof c=="number"?c:O5[c]});return f.forEach(g=>m.observe(g)),()=>m.disconnect()}function q0(n,{root:r,margin:s,amount:a,once:c=!1,initial:f=!1}={}){const[d,p]=b.useState(f);return b.useEffect(()=>{if(!n.current||c&&d)return;const m=()=>(p(!0),c?void 0:()=>p(!1)),g={root:r&&r.current||void 0,margin:s,amount:a};return B5(n.current,m,g)},[r,n,s,c,a]),d}var J0={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Up=Mt.createContext&&Mt.createContext(J0),$5=["attr","size","title"];function U5(n,r){if(n==null)return{};var s=W5(n,r),a,c;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(n);for(c=0;c<f.length;c++)a=f[c],!(r.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(n,a)&&(s[a]=n[a])}return s}function W5(n,r){if(n==null)return{};var s={};for(var a in n)if(Object.prototype.hasOwnProperty.call(n,a)){if(r.indexOf(a)>=0)continue;s[a]=n[a]}return s}function Wo(){return Wo=Object.assign?Object.assign.bind():function(n){for(var r=1;r<arguments.length;r++){var s=arguments[r];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(n[a]=s[a])}return n},Wo.apply(this,arguments)}function Wp(n,r){var s=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);r&&(a=a.filter(function(c){return Object.getOwnPropertyDescriptor(n,c).enumerable})),s.push.apply(s,a)}return s}function Ho(n){for(var r=1;r<arguments.length;r++){var s=arguments[r]!=null?arguments[r]:{};r%2?Wp(Object(s),!0).forEach(function(a){H5(n,a,s[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(s)):Wp(Object(s)).forEach(function(a){Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(s,a))})}return n}function H5(n,r,s){return r=K5(r),r in n?Object.defineProperty(n,r,{value:s,enumerable:!0,configurable:!0,writable:!0}):n[r]=s,n}function K5(n){var r=Y5(n,"string");return typeof r=="symbol"?r:r+""}function Y5(n,r){if(typeof n!="object"||!n)return n;var s=n[Symbol.toPrimitive];if(s!==void 0){var a=s.call(n,r);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(n)}function eg(n){return n&&n.map((r,s)=>Mt.createElement(r.tag,Ho({key:s},r.attr),eg(r.child)))}function ye(n){return r=>Mt.createElement(G5,Wo({attr:Ho({},n.attr)},r),eg(n.child))}function G5(n){var r=s=>{var{attr:a,size:c,title:f}=n,d=U5(n,$5),p=c||s.size||"1em",m;return s.className&&(m=s.className),n.className&&(m=(m?m+" ":"")+n.className),Mt.createElement("svg",Wo({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},s.attr,a,d,{className:m,style:Ho(Ho({color:n.color||s.color},s.style),n.style),height:p,width:p,xmlns:"http://www.w3.org/2000/svg"}),f&&Mt.createElement("title",null,f),n.children)};return Up!==void 0?Mt.createElement(Up.Consumer,null,s=>r(s)):r(J0)}function X5(n){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"22 12 18 12 15 21 9 3 6 12 2 12"},child:[]}]})(n)}function as(n){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"16",x2:"12.01",y2:"16"},child:[]}]})(n)}function tg(n){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"},child:[]},{tag:"path",attr:{d:"M13.73 21a2 2 0 0 1-3.46 0"},child:[]}]})(n)}function Hp(n){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 19.5A2.5 2.5 0 0 1 6.5 17H20"},child:[]},{tag:"path",attr:{d:"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"},child:[]}]})(n)}function ng(n){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"16",y1:"2",x2:"16",y2:"6"},child:[]},{tag:"line",attr:{x1:"8",y1:"2",x2:"8",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"10",x2:"21",y2:"10"},child:[]}]})(n)}function ea(n){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"},child:[]},{tag:"polyline",attr:{points:"22 4 12 14.01 9 11.01"},child:[]}]})(n)}function rg(n){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"},child:[]}]})(n)}function ig(n){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"18 15 12 9 6 15"},child:[]}]})(n)}function Ji(n){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"polyline",attr:{points:"12 6 12 12 16 14"},child:[]}]})(n)}function Q5(n){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 18 22 12 16 6"},child:[]},{tag:"polyline",attr:{points:"8 6 2 12 8 18"},child:[]}]})(n)}function Kp(n){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"4",y:"4",width:"16",height:"16",rx:"2",ry:"2"},child:[]},{tag:"rect",attr:{x:"9",y:"9",width:"6",height:"6"},child:[]},{tag:"line",attr:{x1:"9",y1:"1",x2:"9",y2:"4"},child:[]},{tag:"line",attr:{x1:"15",y1:"1",x2:"15",y2:"4"},child:[]},{tag:"line",attr:{x1:"9",y1:"20",x2:"9",y2:"23"},child:[]},{tag:"line",attr:{x1:"15",y1:"20",x2:"15",y2:"23"},child:[]},{tag:"line",attr:{x1:"20",y1:"9",x2:"23",y2:"9"},child:[]},{tag:"line",attr:{x1:"20",y1:"14",x2:"23",y2:"14"},child:[]},{tag:"line",attr:{x1:"1",y1:"9",x2:"4",y2:"9"},child:[]},{tag:"line",attr:{x1:"1",y1:"14",x2:"4",y2:"14"},child:[]}]})(n)}function Z5(n){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"},child:[]},{tag:"polyline",attr:{points:"7 10 12 15 17 10"},child:[]},{tag:"line",attr:{x1:"12",y1:"15",x2:"12",y2:"3"},child:[]}]})(n)}function Tu(n){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"},child:[]},{tag:"path",attr:{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"},child:[]}]})(n)}function Ru(n){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"3"},child:[]}]})(n)}function sg(n){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"},child:[]}]})(n)}function q5(n){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"2",y1:"12",x2:"22",y2:"12"},child:[]},{tag:"path",attr:{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"},child:[]}]})(n)}function J5(n){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"14",y:"3",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"14",y:"14",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"3",y:"14",width:"7",height:"7"},child:[]}]})(n)}function ek(n){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"},child:[]},{tag:"polyline",attr:{points:"9 22 9 12 15 12 15 22"},child:[]}]})(n)}function og(n){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"12",y1:"16",x2:"12",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12.01",y2:"8"},child:[]}]})(n)}function ag(n){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"8",y1:"6",x2:"21",y2:"6"},child:[]},{tag:"line",attr:{x1:"8",y1:"12",x2:"21",y2:"12"},child:[]},{tag:"line",attr:{x1:"8",y1:"18",x2:"21",y2:"18"},child:[]},{tag:"line",attr:{x1:"3",y1:"6",x2:"3.01",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"12",x2:"3.01",y2:"12"},child:[]},{tag:"line",attr:{x1:"3",y1:"18",x2:"3.01",y2:"18"},child:[]}]})(n)}function lg(n){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"2",x2:"12",y2:"6"},child:[]},{tag:"line",attr:{x1:"12",y1:"18",x2:"12",y2:"22"},child:[]},{tag:"line",attr:{x1:"4.93",y1:"4.93",x2:"7.76",y2:"7.76"},child:[]},{tag:"line",attr:{x1:"16.24",y1:"16.24",x2:"19.07",y2:"19.07"},child:[]},{tag:"line",attr:{x1:"2",y1:"12",x2:"6",y2:"12"},child:[]},{tag:"line",attr:{x1:"18",y1:"12",x2:"22",y2:"12"},child:[]},{tag:"line",attr:{x1:"4.93",y1:"19.07",x2:"7.76",y2:"16.24"},child:[]},{tag:"line",attr:{x1:"16.24",y1:"7.76",x2:"19.07",y2:"4.93"},child:[]}]})(n)}function tk(n){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"},child:[]},{tag:"polyline",attr:{points:"16 17 21 12 16 7"},child:[]},{tag:"line",attr:{x1:"21",y1:"12",x2:"9",y2:"12"},child:[]}]})(n)}function cg(n){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"},child:[]},{tag:"circle",attr:{cx:"12",cy:"10",r:"3"},child:[]}]})(n)}function nk(n){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"},child:[]}]})(n)}function rk(n){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"5",x2:"12",y2:"19"},child:[]},{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"},child:[]}]})(n)}function Fc(n){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"23 4 23 10 17 10"},child:[]},{tag:"polyline",attr:{points:"1 20 1 14 7 14"},child:[]},{tag:"path",attr:{d:"M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"},child:[]}]})(n)}function Ko(n){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"},child:[]},{tag:"line",attr:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"},child:[]}]})(n)}function ug(n){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"3"},child:[]},{tag:"path",attr:{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"},child:[]}]})(n)}function ik(n){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"},child:[]}]})(n)}function sk(n){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"5"},child:[]},{tag:"line",attr:{x1:"12",y1:"1",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"23"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"},child:[]},{tag:"line",attr:{x1:"1",y1:"12",x2:"3",y2:"12"},child:[]},{tag:"line",attr:{x1:"21",y1:"12",x2:"23",y2:"12"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"},child:[]}]})(n)}function ok(n){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"},child:[]},{tag:"line",attr:{x1:"7",y1:"7",x2:"7.01",y2:"7"},child:[]}]})(n)}function ak(n){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"23 6 13.5 15.5 8.5 10.5 1 18"},child:[]},{tag:"polyline",attr:{points:"17 6 23 6 23 12"},child:[]}]})(n)}function lk(n){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 16 12 12 8 16"},child:[]},{tag:"line",attr:{x1:"12",y1:"12",x2:"12",y2:"21"},child:[]},{tag:"path",attr:{d:"M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"},child:[]},{tag:"polyline",attr:{points:"16 16 12 12 8 16"},child:[]}]})(n)}function dg(n){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"12",cy:"7",r:"4"},child:[]}]})(n)}function ck(n){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"1",y1:"1",x2:"23",y2:"23"},child:[]},{tag:"path",attr:{d:"M16.72 11.06A10.94 10.94 0 0 1 19 12.55"},child:[]},{tag:"path",attr:{d:"M5 12.55a10.94 10.94 0 0 1 5.17-2.39"},child:[]},{tag:"path",attr:{d:"M10.71 5.05A16 16 0 0 1 22.58 9"},child:[]},{tag:"path",attr:{d:"M1.42 9a15.91 15.91 0 0 1 4.7-2.88"},child:[]},{tag:"path",attr:{d:"M8.53 16.11a6 6 0 0 1 6.95 0"},child:[]},{tag:"line",attr:{x1:"12",y1:"20",x2:"12.01",y2:"20"},child:[]}]})(n)}function uk(n){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5 12.55a11 11 0 0 1 14.08 0"},child:[]},{tag:"path",attr:{d:"M1.42 9a16 16 0 0 1 21.16 0"},child:[]},{tag:"path",attr:{d:"M8.53 16.11a6 6 0 0 1 6.95 0"},child:[]},{tag:"line",attr:{x1:"12",y1:"20",x2:"12.01",y2:"20"},child:[]}]})(n)}function fg(n){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"6",x2:"6",y2:"18"},child:[]},{tag:"line",attr:{x1:"6",y1:"6",x2:"18",y2:"18"},child:[]}]})(n)}function dk(n){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"},child:[]}]})(n)}/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fk=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),hk=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(r,s,a)=>a?a.toUpperCase():s.toLowerCase()),Yp=n=>{const r=hk(n);return r.charAt(0).toUpperCase()+r.slice(1)},hg=(...n)=>n.filter((r,s,a)=>!!r&&r.trim()!==""&&a.indexOf(r)===s).join(" ").trim(),pk=n=>{for(const r in n)if(r.startsWith("aria-")||r==="role"||r==="title")return!0};/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var mk={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gk=b.forwardRef(({color:n="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:a,className:c="",children:f,iconNode:d,...p},m)=>b.createElement("svg",{ref:m,...mk,width:r,height:r,stroke:n,strokeWidth:a?Number(s)*24/Number(r):s,className:hg("lucide",c),...!f&&!pk(p)&&{"aria-hidden":"true"},...p},[...d.map(([g,y])=>b.createElement(g,y)),...Array.isArray(f)?f:[f]]));/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ce=(n,r)=>{const s=b.forwardRef(({className:a,...c},f)=>b.createElement(gk,{ref:f,iconNode:r,className:hg(`lucide-${fk(Yp(n))}`,`lucide-${n}`,a),...c}));return s.displayName=Yp(n),s};/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yk=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],xk=Ce("arrow-left",yk);/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vk=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["path",{d:"M9 22v-4h6v4",key:"r93iot"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}]],wk=Ce("building",vk);/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bk=[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],fc=Ce("camera",bk);/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kk=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Fi=Ce("check",kk);/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jk=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Sk=Ce("chevron-left",jk);/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nk=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Ck=Ce("chevron-right",Nk);/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pk=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Eo=Ce("circle-alert",Pk);/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ek=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Tk=Ce("clock",Ek);/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rk=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Gp=Ce("file-text",Rk);/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mk=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]],Lk=Ce("house",Mk);/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ak=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],To=Ce("image",Ak);/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dk=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],Xp=Ce("info",Dk);/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ik=[["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m16.2 7.8 2.9-2.9",key:"r700ao"}],["path",{d:"M18 12h4",key:"wj9ykh"}],["path",{d:"m16.2 16.2 2.9 2.9",key:"1bxg5t"}],["path",{d:"M12 18v4",key:"jadmvz"}],["path",{d:"m4.9 19.1 2.9-2.9",key:"bwix9q"}],["path",{d:"M2 12h4",key:"j09sii"}],["path",{d:"m4.9 4.9 2.9 2.9",key:"giyufr"}]],Ro=Ce("loader",Ik);/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zk=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],hc=Ce("map-pin",zk);/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _k=[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]],Qp=Ce("map",_k);/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fk=[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]],Vk=Ce("navigation",Fk);/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ok=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],Bk=Ce("rotate-ccw",Ok);/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $k=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],Uk=Ce("save",$k);/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wk=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Hk=Ce("search",Wk);/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kk=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],Zp=Ce("send",Kk);/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yk=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],Gk=Ce("shield",Yk);/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xk=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],qp=Ce("square-pen",Xk);/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qk=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],Zk=Ce("star",Qk);/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qk=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],Jp=Ce("target",qk);/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jk=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],em=Ce("upload",Jk);/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ej=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],tj=Ce("users",ej);/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nj=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],tm=Ce("x",nj);/**
 * @license lucide-react v0.536.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rj=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],ij=Ce("zap",rj),Mo="https://snapfix-ai.onrender.com/api";function sj({setStatus:n,fetchIssues:r}){var Zr,qr;const[s,a]=b.useState(null),[c,f]=b.useState(null),[d,p]=b.useState(""),[m,g]=b.useState(""),[y,v]=b.useState(null),[w,C]=b.useState(!1),[S,P]=b.useState(null),[A,M]=b.useState(null),[D,I]=b.useState(""),[K,U]=b.useState(!1),[G,$]=b.useState(!1),[O,H]=b.useState(null),[se,be]=b.useState(""),[je,Y]=b.useState(0),[he,Pe]=b.useState(!1),[de,re]=b.useState({}),[W,ie]=b.useState(!1),[X,E]=b.useState({}),[_,fe]=b.useState([]),pe=b.useRef(null),me=b.useRef(null),xe=b.useRef(null),Se=[{value:"low",label:"Low",color:"bg-green-500",icon:l.jsx(Zk,{className:"w-4 h-4"})},{value:"medium",label:"Medium",color:"bg-yellow-500",icon:l.jsx(Tk,{className:"w-4 h-4"})},{value:"high",label:"High",color:"bg-orange-500",icon:l.jsx(Eo,{className:"w-4 h-4"})},{value:"critical",label:"Critical",color:"bg-red-500",icon:l.jsx(ij,{className:"w-4 h-4"})}],ve=[{title:"Visual Evidence",icon:l.jsx(To,{className:"w-5 h-5"})},{title:"Location",icon:l.jsx(hc,{className:"w-5 h-5"})},{title:"Review",icon:l.jsx(Gp,{className:"w-5 h-5"})}];b.useEffect(()=>{S&&console.log("Report Preview:",S)},[S]),b.useEffect(()=>{O&&O.location&&O.location.zip_code&&Te(O.location.zip_code)},[O]);const Te=async ee=>{try{const oe=await fetch(`${Mo}/authorities/${ee}`);if(!oe.ok)throw new Error("Failed to fetch authorities");const Ee=await oe.json();E(Ee),O&&O.responsible_authorities_or_parties&&fe(O.responsible_authorities_or_parties)}catch(oe){console.error("Error fetching authorities:",oe),n("Error fetching authorities. Using default list.")}},ot=ee=>{const oe=ee.target.files[0];if(oe){if(oe.size>5*1024*1024){n("Image size exceeds 5MB limit"),re({...de,image:"Image size exceeds 5MB limit"});return}a(oe),re({...de,image:null});const Ee=new FileReader;Ee.onloadend=()=>{f(Ee.result),Y(1)},Ee.readAsDataURL(oe)}},On=()=>{pe.current.click()},Gr=async()=>{try{const ee=await navigator.mediaDevices.getUserMedia({video:!0});me.current.srcObject=ee,me.current.play(),Pe(!0),n('Camera started. Click "Capture Photo" to take a picture.')}catch(ee){n("Error accessing camera: "+ee.message)}},cr=()=>{const ee=me.current,oe=xe.current;oe.width=ee.videoWidth,oe.height=ee.videoHeight,oe.getContext("2d").drawImage(ee,0,0);const Ee=oe.toDataURL("image/jpeg");oe.toBlob(Ge=>{const ut=new File([Ge],"captured-image.jpg",{type:"image/jpeg"});if(ut.size>5*1024*1024){n("Captured image size exceeds 5MB limit"),re({...de,image:"Captured image size exceeds 5MB limit"});return}a(ut),re({...de,image:null}),f(Ee),Pe(!1),ee.srcObject.getTracks().forEach(mn=>mn.stop()),n("Photo captured successfully!"),Y(1)},"image/jpeg")},ur=()=>{me.current&&me.current.srcObject&&(me.current.srcObject.getTracks().forEach(oe=>oe.stop()),Pe(!1))},ls=()=>{C(!0),n("Getting your location..."),navigator.geolocation?navigator.geolocation.getCurrentPosition(ee=>{v({latitude:ee.coords.latitude,longitude:ee.coords.longitude}),n("Location captured successfully"),C(!1),re({...de,location:null})},ee=>{n(`Error: ${ee.message}`),C(!1),re({...de,location:ee.message})},{enableHighAccuracy:!0,timeout:1e4}):(n("Geolocation is not supported by your browser"),C(!1),re({...de,location:"Geolocation is not supported by your browser"}))},cs=async ee=>{ee.preventDefault();const oe={};if(s||(oe.image="Please upload or capture an image"),!d&&!y&&!m&&(oe.location="Please provide an address, zip code, or use current location"),Object.keys(oe).length>0){re(oe);return}C(!0),n("Generating report...");const Ee=new FormData;Ee.append("image",s),Ee.append("address",d),Ee.append("zip_code",m),y&&(Ee.append("latitude",y.latitude),Ee.append("longitude",y.longitude));try{const Ge=await fetch(`${Mo}/issues`,{method:"POST",body:Ee,headers:{Accept:"application/json"}});if(!Ge.ok){const qt=await Ge.text();let mn;try{mn=JSON.parse(qt).detail||"Failed to generate report"}catch{mn=qt||"Failed to generate report"}throw new Error(mn)}const ut=await Ge.json();n("Report generated! Please review."),P(ut.report),H(ut.report.report),M(ut.id),a(null),f(null),p(""),g(""),v(null),Y(2)}catch(Ge){console.error("Submit error:",Ge),n(`Submit error: ${Ge.message}`),re({...de,submit:Ge.message})}finally{C(!1)}},Bn=(ee,oe,Ee,Ge=null)=>{H(ut=>{const qt={...ut};return ee?qt[ee][oe]=Ee:Ge!==null&&(qt[oe][Ge]=Ee),qt})},us=()=>{$(!G),n(G?"Report preview updated.":"Editing report...")},Xr=async()=>{C(!0),n("Submitting report...");try{const ee=await fetch(`${Mo}/issues/${A}/accept`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({edited_report:O})}),oe=await ee.json();ee.ok?(be("Thank you for using SnapFix!"),n(`Issue submitted successfully! ID: ${oe.id}`),r(),P(null),H(null),M(null),U(!1),I(""),$(!1),Y(0)):(n(`Error: ${oe.detail||"Failed to submit issue"}`),re({...de,accept:oe.detail||"Failed to submit issue"}))}catch(ee){n("Network error. Please try again."),console.error("Accept error:",ee),re({...de,accept:"Network error. Please try again"})}finally{C(!1)}},$n=()=>{U(!0),n("Please provide a reason for rejecting the report.")},pn=async ee=>{if(ee.preventDefault(),!D){n("Please provide a decline reason."),re({...de,decline:"Please provide a decline reason"});return}C(!0),n("Generating updated report...");try{const oe=await fetch(`${Mo}/issues/${A}/decline`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({decline_reason:D,edited_report:O})}),Ee=await oe.json();oe.ok?(n("Updated report generated! Please review."),P(Ee.report),H(Ee.report.report),U(!1),I(""),re({...de,decline:null})):(n(`Error: ${Ee.detail||"Failed to generate updated report"}`),re({...de,decline:Ee.detail||"Failed to generate updated report"}))}catch(oe){n("Network error. Please try again."),console.error("Decline error:",oe),re({...de,decline:"Network error. Please try again"})}finally{C(!1)}},Qr=()=>{je<ve.length-1&&Y(je+1)},ds=()=>{je>0&&Y(je-1)},fs=()=>{a(null),f(null),p(""),g(""),v(null),P(null),M(null),I(""),U(!1),$(!1),H(null),be(""),Y(0),re({}),ur()};return l.jsxs(Q.div,{className:"upload-form-container",initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},children:[l.jsxs("div",{className:"form-header",children:[l.jsx(Q.div,{className:"header-icon-container",initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},transition:{delay:.2,type:"spring",stiffness:300},children:l.jsx("div",{className:"header-icon-bg",children:l.jsx(fc,{className:"header-icon"})})}),l.jsxs("div",{children:[l.jsx("h3",{className:"form-title",children:"Report an Issue"}),l.jsx("p",{className:"form-subtitle",children:"Help improve your community by reporting issues"})]})]}),l.jsx("div",{className:"steps-container",children:ve.map((ee,oe)=>l.jsxs(Q.div,{className:`step ${oe<=je?"active":""}`,initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:oe*.1},children:[l.jsx("div",{className:"step-number",children:oe<je?l.jsx(Fi,{className:"w-4 h-4"}):oe+1}),l.jsxs("div",{className:"step-info",children:[l.jsx("div",{className:"step-icon",children:ee.icon}),l.jsx("span",{className:"step-title",children:ee.title})]}),oe<ve.length-1&&l.jsx("div",{className:"step-line"})]},oe))}),S?l.jsxs(Q.div,{className:"report-preview-container",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[l.jsxs("div",{className:"preview-header",children:[l.jsxs("div",{className:"header-left",children:[l.jsx("div",{className:"header-icon-bg",children:l.jsx(Gp,{className:"header-icon"})}),l.jsxs("div",{children:[l.jsx("h3",{className:"preview-title",children:"Review Generated Report"}),l.jsxs("p",{className:"preview-subtitle",children:["Issue #",A]})]})]}),l.jsx(Q.button,{className:"edit-btn",onClick:us,disabled:w,whileHover:{scale:1.05},whileTap:{scale:.95},children:G?l.jsxs(l.Fragment,{children:[l.jsx(Uk,{className:"w-4 h-4"})," Save Draft"]}):l.jsxs(l.Fragment,{children:[l.jsx(qp,{className:"w-4 h-4"})," Edit Report"]})})]}),l.jsxs("div",{className:"report-content",children:[l.jsxs("div",{className:"report-section",children:[l.jsxs("h4",{className:"section-title",children:[l.jsx(Jp,{className:"section-icon"})," Issue Overview"]}),l.jsxs("div",{className:"report-grid",children:[l.jsxs("div",{className:"report-item",children:[l.jsx("label",{className:"report-label",children:"Type"}),l.jsx("p",{className:"report-value",children:O.issue_overview.issue_type})]}),l.jsxs("div",{className:"report-item",children:[l.jsx("label",{className:"report-label",children:"Severity"}),G?l.jsx("select",{value:O.issue_overview.severity,onChange:ee=>Bn("issue_overview","severity",ee.target.value),className:"edit-select",children:Se.map(ee=>l.jsx("option",{value:ee.value,children:ee.label},ee.value))}):l.jsxs("div",{className:"severity-display",children:[(Zr=Se.find(ee=>ee.value===O.issue_overview.severity))==null?void 0:Zr.icon,l.jsx("span",{children:(qr=Se.find(ee=>ee.value===O.issue_overview.severity))==null?void 0:qr.label})]})]}),l.jsxs("div",{className:"report-item",children:[l.jsx("label",{className:"report-label",children:"Confidence"}),l.jsxs("div",{className:"confidence-bar",children:[l.jsx("div",{className:"confidence-track",children:l.jsx(Q.div,{className:"confidence-fill",initial:{width:0},animate:{width:`${O.issue_overview.confidence}%`},transition:{duration:1,delay:.2}})}),l.jsxs("span",{children:[O.issue_overview.confidence,"%"]})]})]}),l.jsxs("div",{className:"report-item",children:[l.jsx("label",{className:"report-label",children:"Category"}),l.jsx("p",{className:"report-value",children:O.issue_overview.category})]})]}),l.jsxs("div",{className:"report-item full-width",children:[l.jsx("label",{className:"report-label",children:"Summary"}),G?l.jsx("textarea",{value:O.issue_overview.summary_explanation,onChange:ee=>Bn("issue_overview","summary_explanation",ee.target.value),className:"edit-textarea",rows:"4",maxLength:200}):l.jsx("p",{className:"report-value",children:O.issue_overview.summary_explanation})]})]}),l.jsxs("div",{className:"report-section",children:[l.jsxs("h4",{className:"section-title",children:[l.jsx(hc,{className:"section-icon"})," Location Details"]}),l.jsxs("div",{className:"report-grid",children:[l.jsxs("div",{className:"report-item",children:[l.jsx("label",{className:"report-label",children:"Address"}),l.jsx("p",{className:"report-value",children:S.report.template_fields.address||"Not specified"})]}),l.jsxs("div",{className:"report-item",children:[l.jsx("label",{className:"report-label",children:"Zip Code"}),l.jsx("p",{className:"report-value",children:S.report.template_fields.zip_code||"Not specified"})]}),l.jsxs("div",{className:"report-item full-width",children:[l.jsx("label",{className:"report-label",children:"Map Link"}),l.jsxs("a",{href:S.report.template_fields.map_link,target:"_blank",rel:"noopener noreferrer",className:"map-link",children:[l.jsx(Qp,{className:"w-4 h-4"})," View on Map"]})]})]})]}),l.jsxs("div",{className:"report-section",children:[l.jsxs("h4",{className:"section-title",children:[l.jsx(To,{className:"section-icon"})," Photo Evidence"]}),S.image_content?l.jsxs(Q.div,{className:"image-container",whileHover:{scale:1.02},whileTap:{scale:.98},children:[l.jsx("img",{src:`data:image/jpeg;base64,${S.image_content}`,alt:"Issue",className:"report-image"}),l.jsx("div",{className:"image-info",children:l.jsx("p",{children:S.report.template_fields.image_filename||"Not specified"})})]}):l.jsxs("div",{className:"no-image",children:[l.jsx(To,{className:"no-image-icon"}),l.jsx("p",{children:"No image available"})]})]}),l.jsxs("div",{className:"report-section",children:[l.jsxs("h4",{className:"section-title",children:[l.jsx(Jp,{className:"section-icon"})," Recommended Actions"]}),G?l.jsx("div",{className:"actions-list",children:O.recommended_actions.map((ee,oe)=>l.jsx("div",{className:"action-item",children:l.jsx("input",{type:"text",value:ee,onChange:Ee=>Bn(null,"recommended_actions",Ee.target.value,oe),className:"edit-input"})},oe))}):l.jsx("ul",{className:"actions-list",children:O.recommended_actions.map((ee,oe)=>l.jsxs(Q.li,{className:"action-item",initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:oe*.1},children:[l.jsx(Fi,{className:"action-icon"}),ee]},oe))})]}),l.jsxs("div",{className:"report-section",children:[l.jsxs("h4",{className:"section-title",children:[l.jsx(Gk,{className:"section-icon"})," AI Analysis"]}),l.jsxs("div",{className:"analysis-grid",children:[l.jsxs("div",{className:"analysis-item",children:[l.jsx("label",{className:"analysis-label",children:"Potential Impact"}),l.jsx("p",{className:"analysis-value",children:O.detailed_analysis.potential_consequences_if_ignored})]}),l.jsxs("div",{className:"analysis-item",children:[l.jsx("label",{className:"analysis-label",children:"Urgency Reason"}),l.jsx("p",{className:"analysis-value",children:O.detailed_analysis.public_safety_risk})]})]})]}),l.jsxs("div",{className:"report-section",children:[l.jsxs("h4",{className:"section-title",children:[l.jsx(tj,{className:"section-icon"})," Responsible Authorities",G&&l.jsxs("button",{type:"button",className:"edit-authorities-btn",onClick:()=>ie(!0),children:[l.jsx(qp,{className:"w-4 h-4"})," Edit Authorities"]})]}),l.jsx("div",{className:"authorities-grid",children:O.responsible_authorities_or_parties.map((ee,oe)=>l.jsxs(Q.div,{className:"authority-card",initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:oe*.1},whileHover:{y:-5},children:[l.jsx("div",{className:"authority-icon",children:l.jsx(wk,{className:"w-5 h-5"})}),l.jsxs("div",{className:"authority-info",children:[l.jsx("h5",{className:"authority-name",children:ee.name}),l.jsx("p",{className:"authority-type",children:ee.type})]})]},oe))})]})]}),K?l.jsxs(Q.form,{onSubmit:pn,className:"decline-form",initial:{opacity:0,y:20},animate:{opacity:1,y:0},children:[l.jsxs("div",{className:"form-section",children:[l.jsx("label",{className:"section-label",children:"Reason for Declining"}),l.jsx("textarea",{className:"form-textarea",rows:"4",value:D,onChange:ee=>I(ee.target.value),placeholder:"Please explain why you are declining this report...",required:!0}),de.decline&&l.jsxs(Q.div,{className:"error-message",initial:{opacity:0,y:10},animate:{opacity:1,y:0},children:[l.jsx(Eo,{className:"error-icon"}),de.decline]})]}),l.jsxs("div",{className:"form-actions",children:[l.jsx(Q.button,{type:"button",className:"action-btn secondary",onClick:()=>U(!1),whileHover:{scale:1.05},whileTap:{scale:.95},children:"Cancel"}),l.jsx(Q.button,{type:"submit",className:`action-btn submit ${w?"loading":""}`,disabled:w||!D,whileHover:{scale:1.05},whileTap:{scale:.95},children:w?l.jsxs(l.Fragment,{children:[l.jsx(Ro,{className:"w-4 h-4 animate-spin"})," Submitting..."]}):l.jsxs(l.Fragment,{children:[l.jsx(Zp,{className:"w-4 h-4"})," Submit Feedback"]})})]})]}):l.jsxs("div",{className:"report-actions",children:[l.jsx(Q.button,{className:"action-btn accept",onClick:Xr,disabled:w,whileHover:{scale:1.05},whileTap:{scale:.95},children:w?l.jsxs(l.Fragment,{children:[l.jsx(Ro,{className:"w-4 h-4 animate-spin"})," Accepting..."]}):l.jsxs(l.Fragment,{children:[l.jsx(Fi,{className:"w-4 h-4"})," Accept Report"]})}),l.jsxs(Q.button,{className:"action-btn decline",onClick:$n,disabled:w,whileHover:{scale:1.05},whileTap:{scale:.95},children:[l.jsx(tm,{className:"w-4 h-4"})," Decline Report"]}),l.jsxs(Q.button,{className:"action-btn secondary",onClick:fs,whileHover:{scale:1.05},whileTap:{scale:.95},children:[l.jsx(Bk,{className:"w-4 h-4"})," New Report"]})]}),l.jsx(ln,{children:se&&l.jsxs(Q.div,{className:"success-message",initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},children:[l.jsx("div",{className:"success-icon-bg",children:l.jsx(Fi,{className:"success-icon"})}),l.jsx("p",{children:se})]})})]}):l.jsxs(Q.form,{onSubmit:cs,className:"issue-form",initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.3},children:[l.jsx(ln,{children:je===0&&l.jsxs(Q.div,{className:"form-step",initial:{opacity:0,x:20},animate:{opacity:1,x:0},exit:{opacity:0,x:-20},transition:{duration:.3},children:[l.jsxs("div",{className:"form-section",children:[l.jsxs("div",{className:"section-header",children:[l.jsx("label",{className:"section-label",children:"Visual Evidence"}),l.jsxs("div",{className:"section-tooltip",children:[l.jsx(Xp,{className:"tooltip-icon"}),l.jsx("span",{className:"tooltip-text",children:"Upload a clear photo of the issue you're reporting"})]})]}),l.jsxs("div",{className:`image-upload-area ${c?"has-image":""} ${de.image?"has-error":""}`,children:[c?l.jsxs("div",{className:"image-preview-container",children:[l.jsx(Q.img,{src:c,alt:"Preview",className:"image-preview",initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},transition:{duration:.5}}),l.jsxs("div",{className:"image-buttons",children:[l.jsxs(Q.button,{type:"button",className:"change-image-btn",onClick:On,whileHover:{scale:1.05},whileTap:{scale:.95},children:[l.jsx(em,{className:"w-4 h-4"})," Change Image"]}),l.jsxs(Q.button,{type:"button",className:"capture-image-btn",onClick:Gr,whileHover:{scale:1.05},whileTap:{scale:.95},children:[l.jsx(fc,{className:"w-4 h-4"})," Capture New Photo"]})]})]}):l.jsxs("div",{className:"upload-placeholder",children:[l.jsx(Q.div,{className:"upload-icon-container",animate:{y:[0,-10,0],rotate:[0,5,0,-5,0]},transition:{duration:4,repeat:1/0,ease:"easeInOut"},children:l.jsx(To,{className:"upload-icon"})}),l.jsx("p",{children:"Click to upload or capture an image"}),l.jsx("p",{className:"hint",children:"Max 5MB • JPEG, PNG"}),l.jsxs("div",{className:"image-buttons",children:[l.jsxs(Q.button,{type:"button",className:"upload-btn",onClick:On,whileHover:{scale:1.05},whileTap:{scale:.95},children:[l.jsx(em,{className:"w-4 h-4"})," Upload Image"]}),l.jsxs(Q.button,{type:"button",className:"capture-btn",onClick:Gr,whileHover:{scale:1.05},whileTap:{scale:.95},children:[l.jsx(fc,{className:"w-4 h-4"})," Capture Photo"]})]})]}),l.jsx("input",{type:"file",ref:pe,className:"file-input",accept:"image/*",onChange:ot}),l.jsx(ln,{children:he&&l.jsxs(Q.div,{className:"camera-container",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[l.jsx("video",{ref:me,className:"camera-stream"}),l.jsx("canvas",{ref:xe,style:{display:"none"}}),l.jsxs("div",{className:"camera-controls",children:[l.jsx(Q.button,{type:"button",className:"capture-btn",onClick:cr,whileHover:{scale:1.1},whileTap:{scale:.9},children:l.jsx("div",{className:"capture-circle"})}),l.jsx(Q.button,{type:"button",className:"cancel-btn",onClick:ur,whileHover:{scale:1.1},whileTap:{scale:.9},children:l.jsx(tm,{className:"w-6 h-6"})})]})]})})]}),de.image&&l.jsxs(Q.div,{className:"error-message",initial:{opacity:0,y:10},animate:{opacity:1,y:0},children:[l.jsx(Eo,{className:"error-icon"}),de.image]})]}),l.jsx("div",{className:"form-navigation",children:l.jsxs(Q.button,{type:"button",className:"nav-btn next",onClick:Qr,disabled:!c,whileHover:{scale:1.05},whileTap:{scale:.95},children:["Next ",l.jsx(Ck,{className:"w-4 h-4"})]})})]})}),l.jsx(ln,{children:je===1&&l.jsxs(Q.div,{className:"form-step",initial:{opacity:0,x:20},animate:{opacity:1,x:0},exit:{opacity:0,x:-20},transition:{duration:.3},children:[l.jsxs("div",{className:"form-section",children:[l.jsxs("div",{className:"section-header",children:[l.jsx("label",{className:"section-label",children:"Location"}),l.jsxs("div",{className:"section-tooltip",children:[l.jsx(Xp,{className:"tooltip-icon"}),l.jsx("span",{className:"tooltip-text",children:"Provide the location where the issue occurred"})]})]}),l.jsxs("div",{className:"location-inputs",children:[l.jsxs("div",{className:"input-group",children:[l.jsx("label",{className:"input-label",children:"Street Address"}),l.jsxs("div",{className:"input-container",children:[l.jsx(hc,{className:"input-icon"}),l.jsx("input",{type:"text",className:"form-input",value:d,onChange:ee=>p(ee.target.value),placeholder:"Street address or landmark"})]})]}),l.jsxs("div",{className:"input-group",children:[l.jsx("label",{className:"input-label",children:"Zip Code"}),l.jsxs("div",{className:"input-container",children:[l.jsx(Qp,{className:"input-icon"}),l.jsx("input",{type:"text",className:"form-input",value:m,onChange:ee=>g(ee.target.value),placeholder:"Zip code (e.g., 12345)",maxLength:5,pattern:"\\d{5}"})]})]}),l.jsxs("div",{className:"location-divider",children:[l.jsx("div",{className:"divider-line"}),l.jsx("span",{className:"divider-text",children:"OR"}),l.jsx("div",{className:"divider-line"})]}),l.jsxs("div",{className:"gps-section",children:[l.jsx("div",{className:`coordinates-display ${y?"has-coordinates":""} ${de.location?"has-error":""}`,children:y?l.jsxs(l.Fragment,{children:[l.jsx(Fi,{className:"success-icon"}),l.jsx("span",{children:"Location captured"})]}):l.jsx("span",{className:"no-coordinates",children:"No GPS coordinates available"})}),l.jsx(Q.button,{type:"button",className:`gps-btn ${w?"loading":""}`,onClick:ls,disabled:w,whileHover:{scale:1.05},whileTap:{scale:.95},children:w?l.jsxs(l.Fragment,{children:[l.jsx(Ro,{className:"w-4 h-4 animate-spin"})," Locating..."]}):l.jsxs(l.Fragment,{children:[l.jsx(Vk,{className:"w-4 h-4"})," Use Current Location"]})})]})]}),de.location&&l.jsxs(Q.div,{className:"error-message",initial:{opacity:0,y:10},animate:{opacity:1,y:0},children:[l.jsx(Eo,{className:"error-icon"}),de.location]})]}),l.jsxs("div",{className:"form-navigation",children:[l.jsxs(Q.button,{type:"button",className:"nav-btn prev",onClick:ds,whileHover:{scale:1.05},whileTap:{scale:.95},children:[l.jsx(Sk,{className:"w-4 h-4"})," Previous"]}),l.jsx(Q.button,{type:"submit",className:`nav-btn submit ${w?"loading":""}`,disabled:w||!s||!d&&!y&&!m,whileHover:{scale:1.05},whileTap:{scale:.95},children:w?l.jsxs(l.Fragment,{children:[l.jsx(Ro,{className:"w-4 h-4 animate-spin"})," Generating..."]}):l.jsxs(l.Fragment,{children:[l.jsx(Zp,{className:"w-4 h-4"})," Generate Report"]})})]})]})})]})]})}const oj=({status:n})=>{const[r,s]=b.useState(!0),a=Eu();b.useEffect(()=>{if(n){if(s(!0),a.start("animate"),!n.includes("Loading")){const p=setTimeout(()=>{a.start("exit").then(()=>s(!1))},5e3);return()=>clearTimeout(p)}}else a.start("exit").then(()=>s(!1))},[n,a]);const c={initial:{opacity:0,y:-20,scale:.95},animate:{opacity:1,y:0,scale:1,transition:{type:"spring",stiffness:300,damping:20}},exit:{opacity:0,y:20,scale:.95,transition:{duration:.2}}},f=()=>n.includes("Error")?l.jsx(as,{className:"me-2"}):n.includes("Loading")?l.jsx(lg,{className:"me-2 animate-spin"}):l.jsx(ea,{className:"me-2"}),d=()=>n.includes("Error")?"🚨":n.includes("Loading")?"⏳":n.includes("Success")?"🎉":"ℹ️";return l.jsx(ln,{children:r&&l.jsxs(Q.div,{variants:c,initial:"initial",animate:a,exit:"exit",className:`status-message ${n.includes("Error")?"status-error":n.includes("Loading")?"status-loading":"status-success"}`,role:"alert",onClick:()=>a.start("exit").then(()=>s(!1)),whileHover:{scale:1.02},whileTap:{scale:.98},children:[l.jsx("span",{className:"status-emoji",children:d()}),l.jsxs("div",{className:"status-content",children:[f(),l.jsx("span",{children:n})]})]})})},aj=({issue:n,index:r,expanded:s,toggleExpand:a})=>{const c={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{delay:r*.1,type:"spring",stiffness:100,damping:10}}},f=n.id||`issue-${r}`,d=()=>{var m;switch((m=n.status)==null?void 0:m.toLowerCase()){case"resolved":return"status-resolved";case"in-progress":return"status-in-progress";case"rejected":return"status-rejected";default:return"status-pending"}},p=()=>{var m;switch((m=n.severity)==null?void 0:m.toLowerCase()){case"critical":return"severity-critical";case"high":return"severity-high";case"medium":return"severity-medium";case"low":return"severity-low";default:return"severity-unknown"}};return l.jsxs(Q.div,{variants:c,initial:"hidden",animate:"visible",className:`issue-card ${s?"expanded":""}`,onClick:a,whileHover:{y:-5},whileTap:{scale:.99},children:[l.jsxs("div",{className:"issue-header",children:[l.jsx("div",{className:"issue-number",children:l.jsx("span",{className:"number",children:r+1})}),l.jsxs("div",{className:"issue-title-container",children:[l.jsx("h5",{className:"issue-title",children:n.title||"Untitled Issue"}),l.jsxs("div",{className:"issue-meta",children:[l.jsx("span",{className:`status-badge ${d()}`,children:n.status||"Pending"}),l.jsx("span",{className:`severity-badge ${p()}`,children:n.severity||"Unknown"})]})]}),l.jsx("div",{className:"expand-icon",children:s?l.jsx(ig,{}):l.jsx(rg,{})})]}),l.jsx(ln,{children:s&&l.jsxs(Q.div,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.3},className:"issue-details",children:[l.jsxs("div",{className:"detail-row",children:[l.jsxs("div",{className:"detail-item",children:[l.jsx(cg,{className:"detail-icon"}),l.jsx("span",{children:n.location||"No location provided"})]}),l.jsxs("div",{className:"detail-item",children:[l.jsx(ng,{className:"detail-icon"}),l.jsx("span",{children:n.date?new Date(n.date).toLocaleDateString():"No date provided"})]})]}),l.jsxs("div",{className:"detail-row",children:[l.jsxs("div",{className:"detail-item",children:[l.jsx(dg,{className:"detail-icon"}),l.jsxs("span",{children:["Reported by: ",n.reporter||"Anonymous"]})]}),l.jsxs("div",{className:"detail-item",children:[l.jsx(Ji,{className:"detail-icon"}),l.jsx("span",{children:n.timestamp?new Date(n.timestamp).toLocaleString():"No timestamp"})]})]}),l.jsx("div",{className:"detail-row",children:l.jsxs("div",{className:"detail-item full-width",children:[l.jsx(og,{className:"detail-icon"}),l.jsx("p",{children:n.description||"No description provided"})]})}),n.category&&l.jsx("div",{className:"detail-row",children:l.jsxs("div",{className:"detail-item",children:[l.jsx(ok,{className:"detail-icon"}),l.jsxs("span",{children:["Category: ",n.category]})]})}),n.image&&l.jsx(Q.div,{className:"issue-image-container",initial:{opacity:0},animate:{opacity:1},transition:{delay:.2},children:l.jsx("img",{src:n.image,alt:"Issue",className:"issue-image"})}),l.jsxs("div",{className:"issue-actions",children:[l.jsxs("button",{className:"action-btn view-btn",children:[l.jsx(Ru,{}),l.jsx("span",{children:"View Details"})]}),l.jsxs("button",{className:"action-btn edit-btn",children:[l.jsx(Tu,{}),l.jsx("span",{children:"Edit"})]})]})]})})]},f)};function lj(){const[n,r]=b.useState(""),[s,a]=b.useState([]),[c,f]=b.useState(!1),[d,p]=b.useState(null),[m,g]=b.useState(""),[y,v]=b.useState("all"),[w,C]=b.useState(!1),S=Eu(),P=b.useRef(null),A=q0(P,{once:!1,amount:.1});b.useEffect(()=>{A&&S.start("visible")},[A,S]);const M=async()=>{f(!0),r("🔍 Loading issues... Please wait");try{await new Promise(se=>setTimeout(se,800));const H=(await(await fetch("http://localhost:8000/api/issues")).json()).map((se,be)=>({...se,id:se.id||`issue-${be}`,title:se.title||`Issue #${be+1}`,location:se.location||"Unknown location",date:se.date||new Date().toISOString(),description:se.description||"No description provided",reporter:se.reporter||"Anonymous",timestamp:se.timestamp||new Date().toISOString(),status:se.status||"pending",severity:se.severity||"medium",category:se.category||"general"}));a(H),r("✅ Successfully loaded issues!")}catch($){r("🚨 Error fetching issues. Please try again later."),console.error("Error:",$)}finally{f(!1)}},D=$=>{p(d===$?null:$)},I=s.filter($=>{var se,be,je;const O=m===""||((se=$.title)==null?void 0:se.toLowerCase().includes(m.toLowerCase()))||((be=$.description)==null?void 0:be.toLowerCase().includes(m.toLowerCase()))||((je=$.location)==null?void 0:je.toLowerCase().includes(m.toLowerCase())),H=y==="all"||$.status===y;return O&&H}),K={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,when:"beforeChildren"}}},U={hidden:{y:20,opacity:0},visible:{y:0,opacity:1,transition:{type:"spring",stiffness:100,damping:10}}},G=[{value:"all",label:"All Statuses"},{value:"pending",label:"Pending"},{value:"in-progress",label:"In Progress"},{value:"resolved",label:"Resolved"},{value:"rejected",label:"Rejected"}];return l.jsxs(Q.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},className:"report-issue-container",ref:P,children:[l.jsx("div",{className:"container",children:l.jsx("div",{className:"row justify-content-center",children:l.jsx("div",{className:"col-lg-10",children:l.jsxs(Q.div,{className:"main-card",initial:{y:50,opacity:0},animate:{y:0,opacity:1},transition:{type:"spring",stiffness:100,damping:15},whileHover:{y:-5},children:[l.jsx("div",{className:"card-header",children:l.jsxs(Q.h2,{className:"card-title",initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:.1},children:[l.jsx(lk,{className:"title-icon"}),"Report a Community Issue 🏘️"]})}),l.jsxs("div",{className:"card-body",children:[l.jsxs(Q.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.3},children:[l.jsx(Q.p,{className:"lead-text",animate:{color:["#333","#333","#333"]},transition:{duration:8,repeat:1/0},children:"Snap a photo 📸 of the problem and our AI will analyze it automatically!"}),l.jsx(sj,{setStatus:r,fetchIssues:M}),l.jsx(oj,{status:n})]}),s.length>0&&l.jsxs(Q.div,{className:"issues-section",variants:K,initial:"hidden",animate:S,children:[l.jsxs(Q.div,{className:"section-header",variants:U,children:[l.jsxs("h3",{className:"section-title",children:[l.jsx(Fc,{className:"section-icon"}),"📋 Recent Community Issues"]}),l.jsxs("div",{className:"section-controls",children:[l.jsxs("div",{className:"search-container",children:[l.jsx(Ko,{className:"search-icon"}),l.jsx("input",{type:"text",placeholder:"Search issues...",value:m,onChange:$=>g($.target.value),className:"search-input"})]}),l.jsxs("button",{className:"filter-toggle",onClick:()=>C(!w),children:[l.jsx(sg,{}),l.jsx("span",{children:"Filters"})]})]})]}),l.jsx(ln,{children:w&&l.jsx(Q.div,{className:"filters-panel",initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.3},children:l.jsxs("div",{className:"filter-options",children:[l.jsx("span",{className:"filter-label",children:"Filter by status:"}),l.jsx("div",{className:"status-filters",children:G.map($=>l.jsx("button",{className:`status-filter ${y===$.value?"active":""}`,onClick:()=>v($.value),children:$.label},$.value))})]})})}),I.length===0?l.jsxs(Q.div,{className:"no-issues",initial:{opacity:0},animate:{opacity:1},children:[l.jsx("div",{className:"no-issues-icon",children:l.jsx(Ko,{})}),l.jsx("h4",{children:"No issues found"}),l.jsx("p",{children:"Try adjusting your search or filter criteria"})]}):l.jsx(Q.div,{className:"issues-list",variants:K,children:I.slice(0,5).map(($,O)=>l.jsx(aj,{issue:$,index:O,expanded:d===$.id,toggleExpand:()=>D($.id)},$.id))})]})]}),l.jsx("div",{className:"card-footer",children:l.jsx(Q.button,{onClick:M,disabled:c,whileTap:{scale:.95},whileHover:{scale:1.05},className:"refresh-btn",initial:{opacity:0},animate:{opacity:1},transition:{delay:.4},children:c?l.jsxs(l.Fragment,{children:[l.jsx(lg,{className:"animate-spin"}),l.jsx("span",{children:"Refreshing... ♻️"})]}):l.jsxs(l.Fragment,{children:[l.jsx(Fc,{}),l.jsx("span",{children:"Refresh Issues 🔄"})]})})})]})})})}),l.jsx("style",{children:`
        .report-issue-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%);
          padding: 2rem 0;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
        
        .main-card {
          background: white;
          border-radius: 20px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          transition: all 0.3s ease;
        }
        
        .card-header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 2rem;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        
        .card-header::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 70%);
          transform: rotate(45deg);
        }
        
        .card-title {
          color: white;
          font-size: 1.75rem;
          font-weight: 700;
          margin: 0;
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }
        
        .title-icon {
          font-size: 1.5rem;
        }
        
        .card-body {
          padding: 2rem;
        }
        
        .lead-text {
          color: #4a5568;
          font-size: 1.125rem;
          text-align: center;
          margin-bottom: 2rem;
          font-weight: 500;
        }
        
        .status-message {
          display: flex;
          align-items: center;
          padding: 1rem 1.5rem;
          border-radius: 50px;
          margin-top: 1.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        
        .status-emoji {
          font-size: 1.5rem;
          margin-right: 0.75rem;
        }
        
        .status-content {
          display: flex;
          align-items: center;
          font-weight: 500;
        }
        
        .status-error {
          background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
          color: #c53030;
        }
        
        .status-loading {
          background: linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%);
          color: #2b6cb0;
        }
        
        .status-success {
          background: linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%);
          color: #2f855a;
        }
        
        .issues-section {
          margin-top: 3rem;
        }
        
        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
          gap: 1rem;
        }
        
        .section-title {
          color: #2d3748;
          font-size: 1.25rem;
          font-weight: 600;
          margin: 0;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .section-icon {
          color: #667eea;
        }
        
        .section-controls {
          display: flex;
          gap: 1rem;
          align-items: center;
        }
        
        .search-container {
          position: relative;
          width: 250px;
        }
        
        .search-icon {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          color: #a0aec0;
        }
        
        .search-input {
          width: 100%;
          padding: 0.5rem 0.5rem 0.5rem 2.5rem;
          border: 1px solid #e2e8f0;
          border-radius: 50px;
          font-size: 0.875rem;
          transition: all 0.3s ease;
        }
        
        .search-input:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }
        
        .filter-toggle {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: #f7fafc;
          border: 1px solid #e2e8f0;
          border-radius: 50px;
          font-size: 0.875rem;
          color: #4a5568;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .filter-toggle:hover {
          background: #edf2f7;
        }
        
        .filters-panel {
          margin-bottom: 1.5rem;
          padding: 1rem;
          background: #f7fafc;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
        }
        
        .filter-options {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        
        .filter-label {
          font-weight: 500;
          color: #4a5568;
          white-space: nowrap;
        }
        
        .status-filters {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        
        .status-filter {
          padding: 0.25rem 0.75rem;
          border-radius: 50px;
          font-size: 0.75rem;
          font-weight: 500;
          background: white;
          border: 1px solid #e2e8f0;
          color: #4a5568;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .status-filter.active {
          background: #667eea;
          color: white;
          border-color: #667eea;
        }
        
        .issues-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .issue-card {
          background: white;
          border-radius: 16px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          padding: 1.25rem;
          cursor: pointer;
          transition: all 0.3s ease;
          border: 1px solid #e2e8f0;
        }
        
        .issue-card:hover {
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
          transform: translateY(-2px);
        }
        
        .issue-card.expanded {
          border-color: #667eea;
        }
        
        .issue-header {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        
        .issue-number {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          flex-shrink: 0;
        }
        
        .number {
          font-size: 1.125rem;
        }
        
        .issue-title-container {
          flex: 1;
        }
        
        .issue-title {
          margin: 0;
          font-size: 1.125rem;
          font-weight: 600;
          color: #2d3748;
        }
        
        .issue-meta {
          display: flex;
          gap: 0.5rem;
          margin-top: 0.5rem;
          flex-wrap: wrap;
        }
        
        .status-badge, .severity-badge {
          padding: 0.25rem 0.5rem;
          border-radius: 50px;
          font-size: 0.75rem;
          font-weight: 500;
        }
        
        .status-resolved {
          background: #c6f6d5;
          color: #276749;
        }
        
        .status-in-progress {
          background: #bee3f8;
          color: #2c5282;
        }
        
        .status-rejected {
          background: #fed7d7;
          color: #9b2c2c;
        }
        
        .status-pending {
          background: #faf089;
          color: #744210;
        }
        
        .severity-critical {
          background: #fed7d7;
          color: #9b2c2c;
        }
        
        .severity-high {
          background: #feebc8;
          color: #9c4221;
        }
        
        .severity-medium {
          background: #faf089;
          color: #744210;
        }
        
        .severity-low {
          background: #c6f6d5;
          color: #276749;
        }
        
        .severity-unknown {
          background: #e2e8f0;
          color: #4a5568;
        }
        
        .expand-icon {
          color: #a0aec0;
          flex-shrink: 0;
        }
        
        .issue-details {
          margin-top: 1.25rem;
          padding-top: 1.25rem;
          border-top: 1px solid #e2e8f0;
        }
        
        .detail-row {
          display: flex;
          margin-bottom: 1rem;
          gap: 1rem;
        }
        
        .detail-item {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          color: #4a5568;
          font-size: 0.875rem;
        }
        
        .detail-item.full-width {
          width: 100%;
        }
        
        .detail-icon {
          color: #667eea;
          margin-top: 0.125rem;
          flex-shrink: 0;
        }
        
        .issue-image-container {
          margin-top: 1rem;
          border-radius: 12px;
          overflow: hidden;
        }
        
        .issue-image {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 8px;
        }
        
        .issue-actions {
          display: flex;
          gap: 1rem;
          margin-top: 1.25rem;
        }
        
        .action-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
        }
        
        .view-btn {
          background: #edf2f7;
          color: #4a5568;
        }
        
        .view-btn:hover {
          background: #e2e8f0;
        }
        
        .edit-btn {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }
        
        .edit-btn:hover {
          opacity: 0.9;
        }
        
        .card-footer {
          background: #f7fafc;
          padding: 1.5rem;
          text-align: center;
          border-top: 1px solid #e2e8f0;
        }
        
        .refresh-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          border-radius: 50px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
        }
        
        .refresh-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(102, 126, 234, 0.4);
        }
        
        .refresh-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        
        .no-issues {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 3rem;
          text-align: center;
          color: #a0aec0;
        }
        
        .no-issues-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
          opacity: 0.5;
        }
        
        .no-issues h4 {
          margin: 0 0 0.5rem;
          color: #4a5568;
        }
        
        .no-issues p {
          margin: 0;
        }
        
        @media (max-width: 768px) {
          .report-issue-container {
            padding: 1rem 0;
          }
          
          .card-header {
            padding: 1.5rem;
          }
          
          .card-title {
            font-size: 1.5rem;
          }
          
          .card-body {
            padding: 1.5rem;
          }
          
          .section-header {
            flex-direction: column;
            align-items: flex-start;
          }
          
          .search-container {
            width: 100%;
          }
          
          .filter-options {
            flex-direction: column;
            align-items: flex-start;
          }
          
          .issue-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.75rem;
          }
          
          .detail-row {
            flex-direction: column;
            gap: 0.75rem;
          }
          
          .issue-actions {
            flex-direction: column;
          }
        }
      `})]})}const cj=({issue:n,index:r,expanded:s,toggleExpand:a})=>{const c=p=>{switch(p==null?void 0:p.toLowerCase()){case"resolved":return"bg-green-100 text-green-800 border-green-200";case"in-progress":return"bg-blue-100 text-blue-800 border-blue-200";case"rejected":return"bg-red-100 text-red-800 border-red-200";default:return"bg-yellow-100 text-yellow-800 border-yellow-200"}},f=p=>{switch(p==null?void 0:p.toLowerCase()){case"high":return"bg-red-100 text-red-800 border-red-200";case"medium":return"bg-orange-100 text-orange-800 border-orange-200";case"low":return"bg-green-100 text-green-800 border-green-200";default:return"bg-gray-100 text-gray-800 border-gray-200"}},d=p=>{switch(p==null?void 0:p.toLowerCase()){case"resolved":return l.jsx(ea,{className:"text-green-500"});case"in-progress":return l.jsx(Ji,{className:"text-blue-500"});case"rejected":return l.jsx(fg,{className:"text-red-500"});default:return l.jsx(as,{className:"text-yellow-500"})}};return l.jsxs(Q.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:r*.1,type:"spring",stiffness:100},className:`issue-card ${s?"expanded":""}`,onClick:a,whileHover:{y:-3},whileTap:{scale:.98},children:[l.jsxs("div",{className:"issue-header",children:[l.jsxs("div",{className:"issue-meta",children:[l.jsx("span",{className:`priority-badge ${f(n.priority)}`,children:n.priority}),l.jsx("h5",{className:"issue-title",children:n.title})]}),l.jsx("div",{className:"expand-icon",children:s?l.jsx(ig,{}):l.jsx(rg,{})})]}),l.jsxs("div",{className:"issue-info",children:[l.jsxs("div",{className:"info-item",children:[l.jsx(cg,{className:"info-icon"}),l.jsx("span",{children:n.location})]}),l.jsxs("div",{className:"info-item",children:[l.jsx(ng,{className:"info-icon"}),l.jsx("span",{children:new Date(n.date).toLocaleDateString()})]})]}),l.jsx(ln,{children:s&&l.jsxs(Q.div,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.3},className:"issue-details",children:[l.jsxs("div",{className:"detail-section",children:[l.jsxs("div",{className:"detail-header",children:[l.jsx("h6",{children:"Description"}),l.jsxs("span",{className:`status-badge ${c(n.status)}`,children:[d(n.status),n.status]})]}),l.jsx("p",{children:n.description})]}),n.image&&l.jsxs("div",{className:"detail-section",children:[l.jsx("h6",{children:"Image"}),l.jsx("img",{src:n.image,alt:"Issue",className:"issue-image"})]}),l.jsxs("div",{className:"detail-footer",children:[l.jsxs("span",{className:"reported-time",children:[l.jsx(Ji,{className:"me-1"})," Reported ",Vc(n.date)]}),l.jsxs("div",{className:"issue-actions",children:[l.jsxs("button",{className:"action-btn",children:[l.jsx(Ru,{}),l.jsx("span",{children:"View"})]}),l.jsxs("button",{className:"action-btn",children:[l.jsx(Tu,{}),l.jsx("span",{children:"Edit"})]})]})]})]})})]})};function uj(){const[n,r]=b.useState([]),[s,a]=b.useState([]),[c,f]=b.useState(!0),[d,p]=b.useState(!0),[m,g]=b.useState(""),[y,v]=b.useState({status:"all",priority:"all",sort:"newest"}),[w,C]=b.useState("cards"),[S,P]=b.useState(null),[A,M]=b.useState(0),[D,I]=b.useState(new Date),K=Eu(),U=b.useRef(null),G=q0(U,{once:!1,amount:.1});b.useRef(null),b.useEffect(()=>{if(d)try{const Y=setInterval(()=>{$(!1)},1e4);return()=>clearInterval(Y)}catch(Y){console.error("WebSocket connection failed:",Y),p(!1)}},[d]),b.useEffect(()=>{G&&K.start("visible")},[G,K]);const $=async(Y=!0)=>{Y&&f(!0);try{await new Promise(de=>setTimeout(de,800));const Pe=await(await fetch("http://localhost:8000/api/issues")).json();if(n.length>0&&Pe.length>n.length){const de=Pe.length-n.length;M(re=>re+de)}r(Pe),a(Pe),I(new Date)}catch(he){console.error("Error fetching issues:",he)}finally{Y&&f(!1)}};b.useEffect(()=>{$()},[]),b.useEffect(()=>{let Y=[...n];if(m&&(Y=Y.filter(he=>he.title.toLowerCase().includes(m.toLowerCase())||he.description.toLowerCase().includes(m.toLowerCase())||he.location.toLowerCase().includes(m.toLowerCase()))),y.status!=="all"&&(Y=Y.filter(he=>he.status===y.status)),y.priority!=="all"&&(Y=Y.filter(he=>he.priority===y.priority)),y.sort==="newest")Y.sort((he,Pe)=>new Date(Pe.date)-new Date(he.date));else if(y.sort==="oldest")Y.sort((he,Pe)=>new Date(he.date)-new Date(he.date));else if(y.sort==="priority"){const he={high:3,medium:2,low:1};Y.sort((Pe,de)=>he[de.priority]-he[Pe.priority])}a(Y)},[n,m,y]);const O=Y=>{P(S===Y?null:Y)},H=()=>{p(!d),d||M(0)},se=()=>{M(0)},be={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,when:"beforeChildren"}}},je={hidden:{y:20,opacity:0},visible:{y:0,opacity:1,transition:{type:"spring",stiffness:100,damping:10}}};return l.jsxs(Q.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"view-issues-container",ref:U,children:[l.jsx("div",{className:"container",children:l.jsxs(Q.div,{className:"dashboard-header",variants:be,initial:"hidden",animate:K,children:[l.jsxs("div",{className:"header-content",children:[l.jsxs("div",{className:"header-title",children:[l.jsx("h1",{children:"Community Issues Dashboard"}),l.jsx("p",{children:"Track and manage all reported community issues in real-time"})]}),l.jsxs("div",{className:"header-actions",children:[l.jsxs("div",{className:"real-time-indicator",children:[l.jsxs("button",{className:`real-time-toggle ${d?"active":""}`,onClick:H,children:[d?l.jsx(uk,{}):l.jsx(ck,{}),l.jsxs("span",{children:["Real-time ",d?"On":"Off"]})]}),d&&l.jsxs("div",{className:"last-updated",children:[l.jsx(Ji,{}),l.jsxs("span",{children:["Updated: ",Vc(D)]})]})]}),l.jsx("div",{className:"notification-container",children:l.jsxs("button",{className:"notification-btn",onClick:se,children:[l.jsx(tg,{}),A>0&&l.jsx("span",{className:"notification-badge",children:A})]})}),l.jsx("button",{className:"refresh-btn",onClick:()=>$(),children:l.jsx(Fc,{className:c?"spin":""})}),l.jsx("button",{className:"settings-btn",children:l.jsx(ug,{})})]})]}),l.jsxs(Q.div,{className:"stats-grid",variants:be,children:[l.jsxs(Q.div,{className:"stat-card",variants:je,children:[l.jsx("div",{className:"stat-icon danger",children:l.jsx(as,{})}),l.jsxs("div",{className:"stat-content",children:[l.jsx("h3",{children:n.filter(Y=>Y.status==="open").length}),l.jsx("p",{children:"Open Issues"})]})]}),l.jsxs(Q.div,{className:"stat-card",variants:je,children:[l.jsx("div",{className:"stat-icon success",children:l.jsx(ea,{})}),l.jsxs("div",{className:"stat-content",children:[l.jsx("h3",{children:n.filter(Y=>Y.status==="resolved").length}),l.jsx("p",{children:"Resolved"})]})]}),l.jsxs(Q.div,{className:"stat-card",variants:je,children:[l.jsx("div",{className:"stat-icon warning",children:l.jsx(ak,{})}),l.jsxs("div",{className:"stat-content",children:[l.jsx("h3",{children:n.filter(Y=>Y.priority==="high").length}),l.jsx("p",{children:"High Priority"})]})]}),l.jsxs(Q.div,{className:"stat-card",variants:je,children:[l.jsx("div",{className:"stat-icon info",children:l.jsx(X5,{})}),l.jsxs("div",{className:"stat-content",children:[l.jsx("h3",{children:n.length>0?Vc(n.reduce((Y,he)=>new Date(Y.date)>new Date(he.date)?Y:he).date):"N/A"}),l.jsx("p",{children:"Last Reported"})]})]})]}),l.jsxs(Q.div,{className:"filters-section",variants:je,children:[l.jsxs("div",{className:"filters-header",children:[l.jsx("h3",{children:"Filters & Search"}),l.jsxs("div",{className:"view-mode-toggle",children:[l.jsx("button",{className:`view-mode-btn ${w==="cards"?"active":""}`,onClick:()=>C("cards"),children:l.jsx(J5,{})}),l.jsx("button",{className:`view-mode-btn ${w==="table"?"active":""}`,onClick:()=>C("table"),children:l.jsx(ag,{})})]})]}),l.jsxs("div",{className:"filters-content",children:[l.jsxs("div",{className:"search-container",children:[l.jsx(Ko,{className:"search-icon"}),l.jsx("input",{type:"text",placeholder:"Search issues by title, description, or location...",value:m,onChange:Y=>g(Y.target.value),className:"search-input"})]}),l.jsxs("div",{className:"filter-options",children:[l.jsxs("select",{className:"filter-select",value:y.status,onChange:Y=>v({...y,status:Y.target.value}),children:[l.jsx("option",{value:"all",children:"All Statuses"}),l.jsx("option",{value:"open",children:"Open"}),l.jsx("option",{value:"in-progress",children:"In Progress"}),l.jsx("option",{value:"resolved",children:"Resolved"})]}),l.jsxs("select",{className:"filter-select",value:y.priority,onChange:Y=>v({...y,priority:Y.target.value}),children:[l.jsx("option",{value:"all",children:"All Priorities"}),l.jsx("option",{value:"high",children:"High"}),l.jsx("option",{value:"medium",children:"Medium"}),l.jsx("option",{value:"low",children:"Low"})]}),l.jsxs("select",{className:"filter-select",value:y.sort,onChange:Y=>v({...y,sort:Y.target.value}),children:[l.jsx("option",{value:"newest",children:"Newest First"}),l.jsx("option",{value:"oldest",children:"Oldest First"}),l.jsx("option",{value:"priority",children:"By Priority"})]}),l.jsxs("button",{className:"export-btn",children:[l.jsx(Z5,{}),l.jsx("span",{children:"Export"})]})]})]})]}),l.jsx(ln,{children:c&&l.jsxs(Q.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"loading-container",children:[l.jsx("div",{className:"loading-spinner"}),l.jsx("p",{children:"Loading community issues..."})]})}),!c&&l.jsxs(Q.div,{variants:be,initial:"hidden",animate:K,children:[l.jsxs("div",{className:"issues-header",children:[l.jsxs("div",{className:"issues-count",children:[l.jsx("h3",{children:"Community Issues"}),l.jsxs("p",{children:["Showing ",s.length," of ",n.length," issues"]})]}),l.jsxs("button",{className:"add-issue-btn",children:[l.jsx(rk,{}),l.jsx("span",{children:"Add New Issue"})]})]}),s.length>0?w==="cards"?l.jsx("div",{className:"issues-grid",children:s.map((Y,he)=>l.jsx(cj,{issue:Y,index:he,expanded:S===Y.id,toggleExpand:()=>O(Y.id)},Y.id))}):l.jsx("div",{className:"issues-table",children:l.jsxs("table",{children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx("th",{children:"ID"}),l.jsx("th",{children:"Title"}),l.jsx("th",{children:"Priority"}),l.jsx("th",{children:"Status"}),l.jsx("th",{children:"Location"}),l.jsx("th",{children:"Date"}),l.jsx("th",{children:"Actions"})]})}),l.jsx("tbody",{children:s.map(Y=>l.jsxs("tr",{children:[l.jsxs("td",{children:["#",Y.id]}),l.jsx("td",{children:Y.title}),l.jsx("td",{children:l.jsx("span",{className:`priority-badge ${dj(Y.priority)}`,children:Y.priority})}),l.jsx("td",{children:l.jsxs("span",{className:`status-badge ${fj(Y.status)}`,children:[hj(Y.status),Y.status]})}),l.jsx("td",{children:Y.location}),l.jsx("td",{children:new Date(Y.date).toLocaleDateString()}),l.jsx("td",{children:l.jsxs("div",{className:"table-actions",children:[l.jsx("button",{className:"action-btn-icon",children:l.jsx(Ru,{})}),l.jsx("button",{className:"action-btn-icon",children:l.jsx(Tu,{})})]})})]},Y.id))})]})}):l.jsxs(Q.div,{initial:{opacity:0},animate:{opacity:1},className:"empty-state",children:[l.jsx("div",{className:"empty-icon",children:l.jsx(sg,{})}),l.jsx("h5",{children:"No issues found"}),l.jsx("p",{children:"Try adjusting your search or filters"}),l.jsx("button",{onClick:()=>{g(""),v({status:"all",priority:"all",sort:"newest"})},className:"reset-filters-btn",children:"Reset Filters"})]})]})]})}),l.jsx("style",{children:`
        .view-issues-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%);
          padding: 2rem 0;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
        
        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        
        .dashboard-header {
          margin-bottom: 2rem;
        }
        
        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 2rem;
        }
        
        .header-title h1 {
          font-size: 2rem;
          font-weight: 700;
          color: #1a202c;
          margin: 0 0 0.5rem;
        }
        
        .header-title p {
          color: #718096;
          margin: 0;
        }
        
        .header-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        
        .real-time-indicator {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }
        
        .real-time-toggle {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 50px;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .real-time-toggle.active {
          background: #e6fffa;
          border-color: #81e6d9;
          color: #234e52;
        }
        
        .last-updated {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.75rem;
          color: #718096;
          margin-top: 0.25rem;
        }
        
        .notification-container {
          position: relative;
        }
        
        .notification-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: white;
          border: 1px solid #e2e8f0;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .notification-btn:hover {
          background: #f7fafc;
        }
        
        .notification-badge {
          position: absolute;
          top: -5px;
          right: -5px;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #e53e3e;
          color: white;
          font-size: 0.75rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .refresh-btn, .settings-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: white;
          border: 1px solid #e2e8f0;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .refresh-btn:hover, .settings-btn:hover {
          background: #f7fafc;
        }
        
        .refresh-btn.spin svg {
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2rem;
        }
        
        .stat-card {
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          padding: 1.5rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          transition: all 0.3s ease;
        }
        
        .stat-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
        }
        
        .stat-icon {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
        }
        
        .stat-icon.danger {
          background: #fed7d7;
          color: #e53e3e;
        }
        
        .stat-icon.success {
          background: #c6f6d5;
          color: #38a169;
        }
        
        .stat-icon.warning {
          background: #feebc8;
          color: #dd6b20;
        }
        
        .stat-icon.info {
          background: #bee3f8;
          color: #3182ce;
        }
        
        .stat-content h3 {
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0;
        }
        
        .stat-content p {
          color: #718096;
          margin: 0;
        }
        
        .filters-section {
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          padding: 1.5rem;
          margin-bottom: 2rem;
        }
        
        .filters-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }
        
        .filters-header h3 {
          margin: 0;
          font-size: 1.125rem;
          font-weight: 600;
          color: #2d3748;
        }
        
        .view-mode-toggle {
          display: flex;
          background: #f7fafc;
          border-radius: 8px;
          padding: 4px;
        }
        
        .view-mode-btn {
          width: 36px;
          height: 36px;
          border-radius: 6px;
          background: none;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #718096;
          transition: all 0.3s ease;
        }
        
        .view-mode-btn.active {
          background: white;
          color: #4a5568;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }
        
        .filters-content {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }
        
        .search-container {
          position: relative;
          flex: 1;
          min-width: 300px;
        }
        
        .search-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: #a0aec0;
        }
        
        .search-input {
          width: 100%;
          padding: 0.75rem 1rem 0.75rem 2.5rem;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          font-size: 0.875rem;
          transition: all 0.3s ease;
        }
        
        .search-input:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }
        
        .filter-options {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }
        
        .filter-select {
          padding: 0.75rem 1rem;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          font-size: 0.875rem;
          background: white;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .filter-select:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }
        
        .export-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1rem;
          background: #667eea;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .export-btn:hover {
          background: #5a67d8;
        }
        
        .loading-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 3rem;
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
        }
        
        .loading-spinner {
          width: 50px;
          height: 50px;
          border: 5px solid #f3f4f6;
          border-top: 5px solid #667eea;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-bottom: 1rem;
        }
        
        .issues-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }
        
        .issues-count h3 {
          margin: 0;
          font-size: 1.25rem;
          font-weight: 600;
          color: #2d3748;
        }
        
        .issues-count p {
          margin: 0;
          color: #718096;
        }
        
        .add-issue-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background: #667eea;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .add-issue-btn:hover {
          background: #5a67d8;
        }
        
        .issues-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 1.5rem;
        }
        
        .issue-card {
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          overflow: hidden;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .issue-card:hover {
          box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
        }
        
        .issue-card.expanded {
          border: 1px solid #667eea;
        }
        
        .issue-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding: 1.25rem;
        }
        
        .issue-meta {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        
        .priority-badge {
          align-self: flex-start;
          padding: 0.25rem 0.75rem;
          border-radius: 50px;
          font-size: 0.75rem;
          font-weight: 500;
        }
        
        .issue-title {
          margin: 0;
          font-size: 1.125rem;
          font-weight: 600;
          color: #2d3748;
        }
        
        .expand-icon {
          color: #a0aec0;
        }
        
        .issue-info {
          display: flex;
          gap: 1rem;
          padding: 0 1.25rem 1.25rem;
        }
        
        .info-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #4a5568;
          font-size: 0.875rem;
        }
        
        .info-icon {
          color: #667eea;
        }
        
        .issue-details {
          padding: 0 1.25rem 1.25rem;
          border-top: 1px solid #e2e8f0;
        }
        
        .detail-section {
          margin-bottom: 1rem;
        }
        
        .detail-section:last-child {
          margin-bottom: 0;
        }
        
        .detail-section h6 {
          margin: 0 0 0.5rem;
          font-size: 0.875rem;
          font-weight: 600;
          color: #4a5568;
        }
        
        .detail-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }
        
        .status-badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.25rem 0.75rem;
          border-radius: 50px;
          font-size: 0.75rem;
          font-weight: 500;
        }
        
        .detail-section p {
          margin: 0;
          color: #4a5568;
          line-height: 1.5;
        }
        
        .issue-image {
          width: 100%;
          height: auto;
          border-radius: 8px;
          margin-top: 0.5rem;
        }
        
        .detail-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 1rem;
        }
        
        .reported-time {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #718096;
          font-size: 0.75rem;
        }
        
        .issue-actions {
          display: flex;
          gap: 0.5rem;
        }
        
        .action-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: #f7fafc;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          font-size: 0.75rem;
          font-weight: 500;
          color: #4a5568;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .action-btn:hover {
          background: #edf2f7;
        }
        
        .issues-table {
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          overflow: hidden;
        }
        
        .issues-table table {
          width: 100%;
          border-collapse: collapse;
        }
        
        .issues-table th {
          padding: 1rem;
          text-align: left;
          font-weight: 600;
          color: #4a5568;
          border-bottom: 1px solid #e2e8f0;
        }
        
        .issues-table td {
          padding: 1rem;
          border-bottom: 1px solid #e2e8f0;
        }
        
        .issues-table tr:last-child td {
          border-bottom: none;
        }
        
        .table-actions {
          display: flex;
          gap: 0.5rem;
        }
        
        .action-btn-icon {
          width: 32px;
          height: 32px;
          border-radius: 6px;
          background: #f7fafc;
          border: 1px solid #e2e8f0;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .action-btn-icon:hover {
          background: #edf2f7;
        }
        
        .empty-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 3rem;
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          text-align: center;
        }
        
        .empty-icon {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: #edf2f7;
          color: #a0aec0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }
        
        .empty-state h5 {
          margin: 0 0 0.5rem;
          font-size: 1.125rem;
          font-weight: 600;
          color: #2d3748;
        }
        
        .empty-state p {
          margin: 0 0 1.5rem;
          color: #718096;
        }
        
        .reset-filters-btn {
          padding: 0.75rem 1.5rem;
          background: #667eea;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .reset-filters-btn:hover {
          background: #5a67d8;
        }
        
        @media (max-width: 768px) {
          .header-content {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
          
          .stats-grid {
            grid-template-columns: 1fr;
          }
          
          .filters-content {
            flex-direction: column;
          }
          
          .search-container {
            min-width: 100%;
          }
          
          .filter-options {
            width: 100%;
          }
          
          .issues-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
          
          .issues-grid {
            grid-template-columns: 1fr;
          }
          
          .issues-table {
            overflow-x: auto;
          }
        }
      `})]})}function dj(n){switch(n==null?void 0:n.toLowerCase()){case"high":return"bg-red-100 text-red-800 border-red-200";case"medium":return"bg-orange-100 text-orange-800 border-orange-200";case"low":return"bg-green-100 text-green-800 border-green-200";default:return"bg-gray-100 text-gray-800 border-gray-200"}}function fj(n){switch(n==null?void 0:n.toLowerCase()){case"resolved":return"bg-green-100 text-green-800 border-green-200";case"in-progress":return"bg-blue-100 text-blue-800 border-blue-200";case"rejected":return"bg-red-100 text-red-800 border-red-200";default:return"bg-yellow-100 text-yellow-800 border-yellow-200"}}function hj(n){switch(n==null?void 0:n.toLowerCase()){case"resolved":return l.jsx(ea,{className:"text-green-500"});case"in-progress":return l.jsx(Ji,{className:"text-blue-500"});case"rejected":return l.jsx(fg,{className:"text-red-500"});default:return l.jsx(as,{className:"text-yellow-500"})}}function Vc(n){const r=new Date(n),a=Math.floor((new Date-r)/1e3);return a<60?"just now":a<3600?`${Math.floor(a/60)} minutes ago`:a<86400?`${Math.floor(a/3600)} hours ago`:`${Math.floor(a/86400)} days ago`}function pj(){return l.jsxs("div",{className:"not-found-container",children:[l.jsxs(Q.div,{className:"not-found-content",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8},children:[l.jsxs(Q.div,{className:"error-code",initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},transition:{duration:.5,delay:.2},children:["4",l.jsx(Q.span,{animate:{rotate:[0,10,0,-10,0],scale:[1,1.1,1]},transition:{duration:2,repeat:1/0,repeatDelay:1},children:"0"}),"4"]}),l.jsxs(Q.div,{className:"error-illustration",initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.7,delay:.4},children:[l.jsxs("div",{className:"astronaut",children:[l.jsxs("div",{className:"astronaut-body",children:[l.jsx("div",{className:"helmet",children:l.jsx("div",{className:"helmet-glass"})}),l.jsx("div",{className:"astronaut-backpack"})]}),l.jsx("div",{className:"astronaut-arm left-arm"}),l.jsx("div",{className:"astronaut-arm right-arm"}),l.jsx("div",{className:"astronaut-leg left-leg"}),l.jsx("div",{className:"astronaut-leg right-leg"})]}),l.jsx("div",{className:"planet"}),l.jsx("div",{className:"stars",children:[...Array(20)].map((n,r)=>l.jsx("div",{className:"star",style:{top:`${Math.random()*100}%`,left:`${Math.random()*100}%`,animationDelay:`${Math.random()*2}s`}},r))}),l.jsx("div",{className:"meteors",children:[...Array(3)].map((n,r)=>l.jsx("div",{className:"meteor",style:{top:`${Math.random()*100}%`,left:`${Math.random()*100}%`,animationDelay:`${r*.5}s`}},r))})]}),l.jsx(Q.h1,{className:"error-title",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.6},children:"Oops! Page Not Found"}),l.jsx(Q.p,{className:"error-message",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.7},children:"The page you are looking for might have been removed, had its name changed, or is temporarily unavailable."}),l.jsxs(Q.div,{className:"error-actions",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.8},children:[l.jsxs(ir,{to:"/",className:"btn primary-btn",children:[l.jsx(Lk,{className:"btn-icon"}),"Back to Home"]}),l.jsxs("button",{className:"btn secondary-btn",onClick:()=>window.history.back(),children:[l.jsx(xk,{className:"btn-icon"}),"Go Back"]})]}),l.jsxs(Q.div,{className:"search-suggestion",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.9},children:[l.jsx("p",{children:"Or try searching for what you need:"}),l.jsxs("div",{className:"search-box",children:[l.jsx(Hk,{className:"search-icon"}),l.jsx("input",{type:"text",placeholder:"Search our site...",className:"search-input"})]})]})]}),l.jsx("style",{children:`
        .not-found-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #1a1c3d 0%, #2d3561 50%, #3a4175 100%);
          padding: 2rem;
          position: relative;
          overflow: hidden;
        }
        
        .not-found-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.1) 0%, rgba(120, 119, 198, 0) 50%),
                      radial-gradient(circle at 80% 80%, rgba(255, 119, 198, 0.1) 0%, rgba(255, 119, 198, 0) 50%),
                      radial-gradient(circle at 40% 20%, rgba(255, 219, 112, 0.1) 0%, rgba(255, 219, 112, 0) 50%);
          z-index: 1;
        }
        
        .not-found-content {
          max-width: 800px;
          text-align: center;
          z-index: 2;
          position: relative;
        }
        
        .error-code {
          font-size: 12rem;
          font-weight: 900;
          line-height: 1;
          color: rgba(255, 255, 255, 0.1);
          margin-bottom: 1rem;
          letter-spacing: -0.05em;
          user-select: none;
        }
        
        .error-illustration {
          position: relative;
          height: 300px;
          margin: 2rem 0;
        }
        
        .astronaut {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 3;
        }
        
        .astronaut-body {
          width: 100px;
          height: 120px;
          background: linear-gradient(135deg, #e6e6e6, #ffffff);
          border-radius: 50px 50px 30px 30px;
          position: relative;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }
        
        .helmet {
          position: absolute;
          top: -30px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #e6e6e6, #ffffff);
          border-radius: 50%;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
          overflow: hidden;
        }
        
        .helmet-glass {
          position: absolute;
          top: 10px;
          left: 10px;
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, rgba(100, 200, 255, 0.3), rgba(150, 220, 255, 0.1));
          border-radius: 50%;
          border: 2px solid rgba(255, 255, 255, 0.5);
        }
        
        .astronaut-backpack {
          position: absolute;
          top: 20px;
          right: -20px;
          width: 40px;
          height: 60px;
          background: linear-gradient(135deg, #d0d0d0, #f0f0f0);
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }
        
        .astronaut-arm {
          position: absolute;
          width: 25px;
          height: 70px;
          background: linear-gradient(135deg, #e6e6e6, #ffffff);
          border-radius: 12px;
          top: 30px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }
        
        .left-arm {
          left: -20px;
          transform: rotate(-20deg);
          transform-origin: top center;
        }
        
        .right-arm {
          right: -20px;
          transform: rotate(20deg);
          transform-origin: top center;
        }
        
        .astronaut-leg {
          position: absolute;
          width: 30px;
          height: 60px;
          background: linear-gradient(135deg, #e6e6e6, #ffffff);
          border-radius: 15px;
          bottom: -50px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }
        
        .left-leg {
          left: 20px;
          transform: rotate(-10deg);
          transform-origin: top center;
        }
        
        .right-leg {
          right: 20px;
          transform: rotate(10deg);
          transform-origin: top center;
        }
        
        .planet {
          position: absolute;
          bottom: 20px;
          right: 100px;
          width: 150px;
          height: 150px;
          background: linear-gradient(135deg, #ff6b6b, #ff8e8e);
          border-radius: 50%;
          box-shadow: 0 0 30px rgba(255, 107, 107, 0.5);
          z-index: 2;
        }
        
        .stars {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1;
        }
        
        .star {
          position: absolute;
          width: 2px;
          height: 2px;
          background: white;
          border-radius: 50%;
          animation: twinkle 3s infinite;
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
        
        .meteors {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1;
        }
        
        .meteor {
          position: absolute;
          width: 100px;
          height: 2px;
          background: linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.8));
          transform: rotate(-45deg);
          animation: meteor 3s infinite;
        }
        
        @keyframes meteor {
          0% { 
            transform: translateX(-100px) translateY(-100px) rotate(-45deg);
            opacity: 0;
          }
          10% { opacity: 1; }
          20%, 100% { 
            transform: translateX(300px) translateY(300px) rotate(-45deg);
            opacity: 0;
          }
        }
        
        .error-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: white;
          margin-bottom: 1rem;
        }
        
        .error-message {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.7);
          max-width: 600px;
          margin: 0 auto 2rem;
          line-height: 1.6;
        }
        
        .error-actions {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }
        
        .btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          border-radius: 50px;
          font-size: 1rem;
          font-weight: 600;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
        }
        
        .primary-btn {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
        }
        
        .primary-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
        }
        
        .secondary-btn {
          background: rgba(255, 255, 255, 0.1);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .secondary-btn:hover {
          background: rgba(255, 255, 255, 0.2);
        }
        
        .btn-icon {
          width: 20px;
          height: 20px;
        }
        
        .search-suggestion {
          max-width: 500px;
          margin: 0 auto;
        }
        
        .search-suggestion p {
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 1rem;
        }
        
        .search-box {
          position: relative;
          display: flex;
          align-items: center;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50px;
          padding: 0.5rem 1rem;
          backdrop-filter: blur(10px);
        }
        
        .search-icon {
          color: rgba(255, 255, 255, 0.7);
          margin-right: 0.5rem;
        }
        
        .search-input {
          background: none;
          border: none;
          color: white;
          font-size: 1rem;
          width: 100%;
          outline: none;
        }
        
        .search-input::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }
        
        @media (max-width: 768px) {
          .error-code {
            font-size: 8rem;
          }
          
          .error-title {
            font-size: 2rem;
          }
          
          .error-message {
            font-size: 1rem;
          }
          
          .error-actions {
            flex-direction: column;
            align-items: center;
          }
          
          .btn {
            width: 200px;
            justify-content: center;
          }
          
          .planet {
            width: 100px;
            height: 100px;
            right: 50px;
          }
        }
      `})]})}function mj(){const n=Fn(),[r,s]=b.useState(!1),[a,c]=b.useState(!1),[f,d]=b.useState(null),[p,m]=b.useState(!1),[g,y]=b.useState(""),[v,w]=b.useState(3),[C,S]=b.useState(!1),[P,A]=b.useState(null),M=b.useRef(null);b.useEffect(()=>{const H=()=>{s(window.scrollY>10)};return window.addEventListener("scroll",H),()=>window.removeEventListener("scroll",H)},[]),b.useEffect(()=>{const H=se=>{M.current&&!M.current.contains(se.target)&&d(null)};return document.addEventListener("mousedown",H),()=>document.removeEventListener("mousedown",H)},[]),b.useEffect(()=>{p?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[p]);const D=()=>{c(!a),a&&d(null)},I=H=>{d(f===H?null:H)},K=()=>{m(!p)},U=H=>{H.preventDefault(),console.log("Searching for:",g),y("")},G=[{path:"/",label:"Dashboard",icon:l.jsx(ek,{className:"nav-icon"})},{path:"/report",label:"Report Issue",icon:l.jsx(as,{className:"nav-icon"}),highlight:!0},{path:"/view",label:"View Issues",icon:l.jsx(ag,{className:"nav-icon"})},{path:"/analytics",label:"Analytics",icon:l.jsx(dk,{className:"nav-icon"})},{path:"/about",label:"About",icon:l.jsx(og,{className:"nav-icon"})}],$=[{path:"/help",label:"AI Assistant",icon:l.jsx(Kp,{className:"dropdown-icon"})},{path:"/api",label:"API Docs",icon:l.jsx(Q5,{className:"dropdown-icon"})},{path:"/blog",label:"Blog",icon:l.jsx(Hp,{className:"dropdown-icon"})},{path:"/tutorials",label:"Tutorials",icon:l.jsx(ik,{className:"dropdown-icon"})}],O=[{path:"/profile",label:"My Profile",icon:l.jsx(dg,{})},{path:"/settings",label:"Settings",icon:l.jsx(ug,{})},{path:"/billing",label:"Billing"},{path:"/logout",label:"Logout",icon:l.jsx(tk,{})}];return l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"mobile-toggle",onClick:D,children:l.jsxs("div",{className:`hamburger ${a?"active":""}`,children:[l.jsx("span",{}),l.jsx("span",{}),l.jsx("span",{})]})}),l.jsx("div",{className:`overlay ${a?"active":""}`,onClick:D}),l.jsx("nav",{className:`navbar ${a?"mobile-active":""} ${r?"scrolled":""}`,children:l.jsxs("div",{className:"navbar-container",children:[l.jsx(ir,{to:"/",className:"navbar-logo",children:l.jsxs("div",{className:"logo-container",children:[l.jsxs("div",{className:"logo-icon",children:[l.jsx("div",{className:"logo-circle"}),l.jsx("div",{className:"logo-square"}),l.jsx("div",{className:"logo-glow"})]}),l.jsxs("div",{className:"logo-text",children:[l.jsx("span",{className:"logo-main",children:"SNAPFIX"}),l.jsx("span",{className:"logo-sub",children:"AI"})]})]})}),l.jsx("div",{className:"search-container",children:l.jsx("form",{onSubmit:U,className:"search-form",children:l.jsxs("div",{className:"search-input-wrapper",children:[l.jsx(Ko,{className:"search-icon"}),l.jsx("input",{type:"text",placeholder:"Search issues, reports...",value:g,onChange:H=>y(H.target.value),className:"search-input"})]})})}),l.jsx("div",{className:"navbar-menu",children:l.jsxs("ul",{className:"navbar-nav",children:[G.map(H=>l.jsx("li",{className:"nav-item",children:l.jsxs(ir,{to:H.path,className:`nav-link ${n.pathname===H.path?"active":""} ${H.highlight?"highlight":""}`,onClick:()=>c(!1),onMouseEnter:()=>A(H.path),onMouseLeave:()=>A(null),children:[H.icon,l.jsx("span",{children:H.label}),H.highlight&&l.jsx("span",{className:"nav-badge",children:"NEW"}),P===H.path&&l.jsx("div",{className:"nav-link-glow"})]})},H.path)),l.jsxs("li",{className:"nav-item dropdown",ref:M,children:[l.jsxs("button",{className:"nav-link dropdown-toggle",onClick:()=>I("resources"),children:[l.jsx(Hp,{className:"nav-icon"}),l.jsx("span",{children:"Resources"}),l.jsx("span",{className:"dropdown-arrow"})]}),l.jsx("div",{className:`dropdown-menu ${f==="resources"?"show":""}`,children:$.map(H=>l.jsxs(ir,{to:H.path,className:"dropdown-item",onClick:()=>c(!1),children:[H.icon,l.jsx("span",{children:H.label})]},H.path))})]})]})}),l.jsx("div",{className:"ai-assistant-container",children:l.jsxs("button",{className:`ai-assistant-btn ${C?"active":""}`,onClick:()=>S(!C),children:[l.jsxs("div",{className:"ai-icon-container",children:[l.jsx(Kp,{className:"ai-icon"}),l.jsx("div",{className:"ai-pulse"})]}),l.jsx("span",{children:"AI Assistant"})]})}),l.jsxs("div",{className:"navbar-actions",children:[l.jsxs("div",{className:"action-item",children:[l.jsxs("button",{className:"icon-button",onClick:()=>I("notifications"),children:[l.jsx(tg,{className:"action-icon"}),v>0&&l.jsx("span",{className:"notification-badge",children:v})]}),f==="notifications"&&l.jsxs("div",{className:"dropdown-panel",children:[l.jsxs("div",{className:"dropdown-header",children:[l.jsx("h3",{children:"Notifications"}),l.jsx("button",{className:"mark-read",children:"Mark all as read"})]}),l.jsxs("div",{className:"notification-list",children:[l.jsx("div",{className:"notification-item unread",children:l.jsxs("div",{className:"notification-content",children:[l.jsx("p",{children:"Your issue #123 has been resolved"}),l.jsx("span",{className:"notification-time",children:"2 hours ago"})]})}),l.jsx("div",{className:"notification-item unread",children:l.jsxs("div",{className:"notification-content",children:[l.jsx("p",{children:"New comment on your report"}),l.jsx("span",{className:"notification-time",children:"1 day ago"})]})}),l.jsx("div",{className:"notification-item",children:l.jsxs("div",{className:"notification-content",children:[l.jsx("p",{children:"System maintenance scheduled"}),l.jsx("span",{className:"notification-time",children:"3 days ago"})]})})]})]})]}),l.jsx("div",{className:"action-item",children:l.jsx("button",{className:"icon-button",onClick:K,children:p?l.jsx(sk,{className:"action-icon"}):l.jsx(nk,{className:"action-icon"})})}),l.jsxs("div",{className:"action-item",children:[l.jsx("button",{className:"icon-button",onClick:()=>I("language"),children:l.jsx(q5,{className:"action-icon"})}),f==="language"&&l.jsx("div",{className:"dropdown-panel language-panel",children:l.jsxs("div",{className:"language-list",children:[l.jsx("button",{className:"language-option active",children:"English"}),l.jsx("button",{className:"language-option",children:"Spanish"}),l.jsx("button",{className:"language-option",children:"French"}),l.jsx("button",{className:"language-option",children:"German"}),l.jsx("button",{className:"language-option",children:"Chinese"})]})})]}),l.jsxs("div",{className:"action-item",children:[l.jsx("button",{className:"icon-button user-button",onClick:()=>I("user"),children:l.jsxs("div",{className:"user-avatar",children:[l.jsx("span",{children:"U"}),l.jsx("div",{className:"user-avatar-glow"})]})}),f==="user"&&l.jsxs("div",{className:"dropdown-panel user-panel",children:[l.jsxs("div",{className:"user-info",children:[l.jsxs("div",{className:"user-avatar large",children:[l.jsx("span",{children:"U"}),l.jsx("div",{className:"user-avatar-glow"})]}),l.jsxs("div",{className:"user-details",children:[l.jsx("h4",{children:"User Name"}),l.jsx("p",{children:"user@example.com"})]})]}),l.jsx("div",{className:"user-menu",children:O.map(H=>l.jsxs(ir,{to:H.path,className:"user-menu-item",onClick:()=>c(!1),children:[H.icon&&l.jsx("span",{className:"menu-item-icon",children:H.icon}),H.label]},H.path))})]})]})]})]})}),l.jsx("style",{jsx:!0,children:`
        :root {
          --primary-color: #6366f1;
          --primary-dark: #4f46e5;
          --primary-light: #818cf8;
          --secondary-color: #8b5cf6;
          --accent-color: #ec4899;
          --text-primary: #f8fafc;
          --text-secondary: #cbd5e1;
          --bg-primary: #0f172a;
          --bg-secondary: #1e293b;
          --bg-tertiary: #334155;
          --border-color: #334155;
          --shadow-glow: 0 0 15px rgba(99, 102, 241, 0.5);
          --shadow-lg: 0 10px 30px rgba(0, 0, 0, 0.3);
        }
        
        /* Mobile Toggle Button */
        .mobile-toggle {
          position: fixed;
          top: 1rem;
          left: 1rem;
          z-index: 1002;
          cursor: pointer;
          background: rgba(15, 23, 42, 0.9);
          padding: 0.75rem;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(10px);
          display: none;
          transition: all 0.3s ease;
          border: 1px solid rgba(99, 102, 241, 0.3);
        }
        
        .mobile-toggle:hover {
          transform: scale(1.05);
          box-shadow: 0 0 20px rgba(99, 102, 241, 0.4);
        }
        
        .hamburger {
          width: 24px;
          height: 18px;
          position: relative;
        }
        
        .hamburger span {
          display: block;
          position: absolute;
          height: 2px;
          width: 100%;
          background: var(--text-primary);
          border-radius: 1px;
          opacity: 1;
          left: 0;
          transform: rotate(0deg);
          transition: all 0.3s ease;
        }
        
        .hamburger span:nth-child(1) {
          top: 0px;
        }
        
        .hamburger span:nth-child(2) {
          top: 8px;
        }
        
        .hamburger span:nth-child(3) {
          top: 16px;
        }
        
        .hamburger.active span:nth-child(1) {
          top: 8px;
          transform: rotate(135deg);
        }
        
        .hamburger.active span:nth-child(2) {
          opacity: 0;
          left: -60px;
        }
        
        .hamburger.active span:nth-child(3) {
          top: 8px;
          transform: rotate(-135deg);
        }
        
        /* Overlay */
        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.7);
          z-index: 999;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          backdrop-filter: blur(4px);
        }
        
        .overlay.active {
          opacity: 1;
          visibility: visible;
        }
        
        /* Vertical Sidebar Navigation */
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 300px;
          height: 100vh;
          background: linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
          backdrop-filter: blur(20px);
          border-right: 1px solid var(--border-color);
          z-index: 1000;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          overflow-y: auto;
          box-shadow: var(--shadow-lg);
        }
        
        .navbar.scrolled {
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
        }
        
        .navbar-container {
          display: flex;
          flex-direction: column;
          height: 100%;
          padding: 2rem 1.5rem;
        }
        
        /* Logo Section */
        .navbar-logo {
          display: flex;
          align-items: center;
          text-decoration: none;
          margin-bottom: 2rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid var(--border-color);
          transition: transform 0.3s ease;
        }
        
        .navbar-logo:hover {
          transform: scale(1.02);
        }
        
        .logo-container {
          display: flex;
          align-items: center;
        }
        
        .logo-icon {
          position: relative;
          width: 48px;
          height: 48px;
          margin-right: 1rem;
          flex-shrink: 0;
        }
        
        .logo-circle {
          position: absolute;
          top: 4px;
          left: 4px;
          width: 20px;
          height: 20px;
          background: var(--primary-color);
          border-radius: 50%;
          box-shadow: 0 0 10px rgba(99, 102, 241, 0.7);
        }
        
        .logo-square {
          position: absolute;
          bottom: 4px;
          right: 4px;
          width: 20px;
          height: 20px;
          background: var(--secondary-color);
          border-radius: 4px;
          box-shadow: 0 0 10px rgba(139, 92, 246, 0.7);
        }
        
        .logo-glow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, transparent 70%);
          border-radius: 50%;
          animation: logoGlow 3s infinite alternate;
        }
        
        @keyframes logoGlow {
          0% { transform: scale(1); opacity: 0.5; }
          100% { transform: scale(1.2); opacity: 0.8; }
        }
        
        .logo-text {
          display: flex;
          flex-direction: column;
          line-height: 1;
        }
        
        .logo-main {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
          letter-spacing: 1px;
          text-shadow: 0 0 10px rgba(99, 102, 241, 0.5);
        }
        
        .logo-sub {
          font-size: 0.9rem;
          font-weight: 400;
          color: var(--primary-light);
          letter-spacing: 2px;
          margin-top: 3px;
        }
        
        /* Search Bar */
        .search-container {
          margin-bottom: 2rem;
        }
        
        .search-form {
          width: 100%;
        }
        
        .search-input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }
        
        .search-icon {
          position: absolute;
          left: 14px;
          color: var(--text-secondary);
          z-index: 1;
        }
        
        .search-input {
          width: 100%;
          padding: 0.85rem 1rem 0.85rem 2.75rem;
          background: rgba(51, 65, 85, 0.5);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          color: var(--text-primary);
          font-size: 0.9rem;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }
        
        .search-input:focus {
          outline: none;
          border-color: var(--primary-color);
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2), var(--shadow-glow);
        }
        
        /* Navigation Menu */
        .navbar-menu {
          flex: 1;
          display: flex;
          flex-direction: column;
          margin-bottom: 1.5rem;
        }
        
        .navbar-nav {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        
        .nav-item {
          position: relative;
          width: 100%;
        }
        
        .nav-link {
          display: flex;
          align-items: center;
          padding: 0.9rem 1.2rem;
          color: var(--text-secondary);
          text-decoration: none;
          font-weight: 500;
          font-size: 0.95rem;
          border-radius: 12px;
          transition: all 0.3s ease;
          position: relative;
          letter-spacing: 0.3px;
          width: 100%;
          box-sizing: border-box;
          overflow: hidden;
        }
        
        .nav-icon {
          margin-right: 0.85rem;
          font-size: 1.2rem;
        }
        
        .nav-link:hover {
          background: rgba(99, 102, 241, 0.1);
          color: var(--text-primary);
          transform: translateX(5px);
        }
        
        .nav-link.active {
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(139, 92, 246, 0.1));
          color: var(--primary-light);
          font-weight: 600;
          box-shadow: 0 0 15px rgba(99, 102, 241, 0.3);
        }
        
        .nav-link.active::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 4px;
          height: 70%;
          background: var(--primary-color);
          border-radius: 0 2px 2px 0;
          box-shadow: 0 0 10px rgba(99, 102, 241, 0.7);
        }
        
        .nav-link.highlight {
          background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
          color: white;
          font-weight: 600;
          margin: 0.5rem 0;
          box-shadow: 0 4px 20px rgba(99, 102, 241, 0.4);
        }
        
        .nav-link.highlight:hover {
          background: linear-gradient(135deg, var(--primary-dark), #7c3aed);
          transform: translateX(5px);
          box-shadow: 0 6px 25px rgba(99, 102, 241, 0.5);
          color: white;
        }
        
        .nav-badge {
          background: var(--accent-color);
          color: white;
          font-size: 0.65rem;
          font-weight: 600;
          padding: 2px 6px;
          border-radius: 10px;
          margin-left: auto;
          box-shadow: 0 0 10px rgba(236, 72, 153, 0.5);
        }
        
        .nav-link-glow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at center, rgba(99, 102, 241, 0.3) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .nav-link:hover .nav-link-glow {
          opacity: 1;
        }
        
        /* Dropdown */
        .dropdown-toggle {
          background: none;
          border: none;
          cursor: pointer;
          width: 100%;
          text-align: left;
          font-size: 0.95rem;
          justify-content: space-between;
          display: flex;
          align-items: center;
        }
        
        .dropdown-arrow {
          width: 0;
          height: 0;
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          border-top: 5px solid var(--text-secondary);
          transition: transform 0.2s ease;
          margin-left: auto;
        }
        
        .dropdown-toggle.active .dropdown-arrow {
          transform: rotate(180deg);
          border-top-color: var(--primary-light);
        }
        
        .dropdown-menu {
          background: rgba(51, 65, 85, 0.5);
          backdrop-filter: blur(10px);
          border-radius: 12px;
          padding: 0.5rem 0;
          margin: 0.5rem 0 0 1rem;
          opacity: 0;
          visibility: hidden;
          max-height: 0;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          border: 1px solid var(--border-color);
        }
        
        .dropdown-menu.show {
          opacity: 1;
          visibility: visible;
          max-height: 400px;
        }
        
        .dropdown-item {
          display: flex;
          align-items: center;
          padding: 0.85rem 1.2rem;
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 0.9rem;
          transition: all 0.3s ease;
          letter-spacing: 0.2px;
          border-radius: 8px;
          margin: 0.2rem 0.5rem;
        }
        
        .dropdown-icon {
          margin-right: 0.85rem;
          font-size: 1.1rem;
        }
        
        .dropdown-item:hover {
          background: rgba(99, 102, 241, 0.1);
          color: var(--primary-light);
          transform: translateX(5px);
        }
        
        /* AI Assistant */
        .ai-assistant-container {
          margin-bottom: 1.5rem;
        }
        
        .ai-assistant-btn {
          display: flex;
          align-items: center;
          padding: 1rem;
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1));
          border: 1px solid rgba(99, 102, 241, 0.3);
          border-radius: 12px;
          color: var(--text-primary);
          font-weight: 500;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.3s ease;
          width: 100%;
          box-shadow: 0 4px 15px rgba(99, 102, 241, 0.2);
        }
        
        .ai-assistant-btn:hover {
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(139, 92, 246, 0.2));
          box-shadow: 0 6px 20px rgba(99, 102, 241, 0.3);
          transform: translateY(-2px);
        }
        
        .ai-assistant-btn.active {
          background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
          box-shadow: 0 0 20px rgba(99, 102, 241, 0.5);
        }
        
        .ai-icon-container {
          position: relative;
          margin-right: 1rem;
        }
        
        .ai-icon {
          font-size: 1.4rem;
          color: var(--primary-light);
        }
        
        .ai-pulse {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: rgba(99, 102, 241, 0.3);
          animation: aiPulse 2s infinite;
        }
        
        @keyframes aiPulse {
          0% { transform: scale(0.8); opacity: 0.8; }
          70% { transform: scale(1.5); opacity: 0; }
          100% { transform: scale(0.8); opacity: 0; }
        }
        
        /* Bottom Actions */
        .navbar-actions {
          margin-top: auto;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border-color);
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        
        .action-item {
          position: relative;
        }
        
        .icon-button {
          background: rgba(51, 65, 85, 0.5);
          border: 1px solid var(--border-color);
          cursor: pointer;
          padding: 0.85rem;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          width: 100%;
          backdrop-filter: blur(10px);
        }
        
        .icon-button:hover {
          background: rgba(99, 102, 241, 0.1);
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(99, 102, 241, 0.2);
        }
        
        .action-icon {
          font-size: 1.3rem;
          color: var(--text-secondary);
        }
        
        .user-button {
          padding: 0.6rem;
        }
        
        .user-avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 600;
          font-size: 1rem;
          position: relative;
          overflow: hidden;
        }
        
        .user-avatar-glow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%);
          animation: avatarGlow 3s infinite alternate;
        }
        
        @keyframes avatarGlow {
          0% { transform: scale(1); opacity: 0.3; }
          100% { transform: scale(1.2); opacity: 0.6; }
        }
        
        .user-avatar.large {
          width: 52px;
          height: 52px;
          font-size: 1.3rem;
        }
        
        .notification-badge {
          position: absolute;
          top: 8px;
          right: 8px;
          background: var(--accent-color);
          color: white;
          font-size: 0.7rem;
          font-weight: 600;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 10px rgba(236, 72, 153, 0.5);
        }
        
        /* Dropdown Panels */
        .dropdown-panel {
          position: absolute;
          bottom: 100%;
          left: 0;
          width: 320px;
          background: linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%);
          backdrop-filter: blur(20px);
          border-radius: 16px;
          box-shadow: var(--shadow-lg);
          border: 1px solid var(--border-color);
          z-index: 1001;
          margin-bottom: 1rem;
          overflow: hidden;
        }
        
        .dropdown-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.2rem;
          border-bottom: 1px solid var(--border-color);
        }
        
        .dropdown-header h3 {
          margin: 0;
          font-size: 1.1rem;
          color: var(--text-primary);
          font-weight: 600;
        }
        
        .mark-read {
          background: none;
          border: none;
          color: var(--primary-light);
          font-size: 0.85rem;
          cursor: pointer;
          font-weight: 500;
          transition: all 0.2s ease;
        }
        
        .mark-read:hover {
          color: var(--primary-color);
          text-decoration: underline;
        }
        
        .notification-list {
          max-height: 300px;
          overflow-y: auto;
        }
        
        .notification-item {
          padding: 1.2rem;
          border-bottom: 1px solid var(--border-color);
          transition: background 0.2s ease;
        }
        
        .notification-item:last-child {
          border-bottom: none;
        }
        
        .notification-item.unread {
          background: rgba(99, 102, 241, 0.1);
        }
        
        .notification-item:hover {
          background: rgba(51, 65, 85, 0.5);
        }
        
        .notification-content p {
          margin: 0 0 0.5rem;
          color: var(--text-primary);
          font-size: 0.95rem;
        }
        
        .notification-time {
          font-size: 0.8rem;
          color: var(--text-secondary);
        }
        
        .language-panel {
          padding: 0.75rem;
        }
        
        .language-list {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        
        .language-option {
          background: none;
          border: none;
          padding: 0.85rem 1.2rem;
          text-align: left;
          border-radius: 10px;
          color: var(--text-secondary);
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .language-option:hover {
          background: rgba(99, 102, 241, 0.1);
          color: var(--text-primary);
        }
        
        .language-option.active {
          background: rgba(99, 102, 241, 0.2);
          color: var(--primary-light);
          font-weight: 500;
        }
        
        .user-panel {
          padding: 1.2rem;
        }
        
        .user-info {
          display: flex;
          align-items: center;
          margin-bottom: 1.2rem;
          padding-bottom: 1.2rem;
          border-bottom: 1px solid var(--border-color);
        }
        
        .user-details {
          margin-left: 1.2rem;
        }
        
        .user-details h4 {
          margin: 0 0 0.25rem;
          font-size: 1.1rem;
          color: var(--text-primary);
          font-weight: 600;
        }
        
        .user-details p {
          margin: 0;
          font-size: 0.9rem;
          color: var(--text-secondary);
        }
        
        .user-menu {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        
        .user-menu-item {
          padding: 0.85rem 1.2rem;
          border-radius: 10px;
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 0.95rem;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
        }
        
        .user-menu-item:hover {
          background: rgba(99, 102, 241, 0.1);
          color: var(--text-primary);
        }
        
        .menu-item-icon {
          margin-right: 0.85rem;
          font-size: 1.1rem;
        }
        
        /* Content Area Margin */
        body {
          margin-left: 300px;
          background: var(--bg-primary);
          color: var(--text-primary);
        }
        
        /* Mobile Responsive */
        @media (max-width: 992px) {
          .mobile-toggle {
            display: block;
          }
          
          .navbar {
            transform: translateX(-100%);
          }
          
          .navbar.mobile-active {
            transform: translateX(0);
          }
          
          body {
            margin-left: 0;
          }
        }
        
        @media (max-width: 576px) {
          .navbar {
            width: 100%;
          }
          
          .navbar-container {
            padding: 1.5rem 1rem;
          }
          
          .logo-main {
            font-size: 1.3rem;
          }
          
          .logo-sub {
            font-size: 0.8rem;
          }
          
          .dropdown-panel {
            width: 100%;
            left: 0;
            right: 0;
            border-radius: 16px 16px 0 0;
            bottom: 0;
            margin-bottom: 0;
          }
        }
      `})]})}function gj(){return l.jsxs(l.Fragment,{children:[l.jsx(mj,{}),l.jsxs(cx,{children:[l.jsx(Vi,{path:"/",element:l.jsx(ov,{})}),l.jsx(Vi,{path:"/report",element:l.jsx(lj,{})}),l.jsx(Vi,{path:"/view",element:l.jsx(uj,{})}),l.jsx(Vi,{path:"*",element:l.jsx(pj,{})})]})]})}x1.createRoot(document.getElementById("root")).render(l.jsx(Mt.StrictMode,{children:l.jsx(Lx,{children:l.jsx(gj,{})})}));
//# sourceMappingURL=index-BaHyc_D3.js.map

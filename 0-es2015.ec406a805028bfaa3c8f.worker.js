!function(n){var r={};function e(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return n[t].call(a.exports,a,a.exports,e),a.l=!0,a.exports}e.m=n,e.c=r,e.d=function(n,r,t){e.o(n,r)||Object.defineProperty(n,r,{enumerable:!0,get:t})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,r){if(1&r&&(n=e(n)),8&r)return n;if(4&r&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(e.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&r&&"string"!=typeof n)for(var a in n)e.d(t,a,(function(r){return n[r]}).bind(null,a));return t},e.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(r,"a",r),r},e.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},e.p="",e(e.s="I6VW")}({I6VW:function(n,r,e){"use strict";e.r(r);var t=e("Mygq"),a=e.n(t);addEventListener("message",({data:n})=>{a()({locateFile:n=>`native/${n}`}).then(r=>{postMessage(r.simplex(n.a,n.b,n.c))})})},Mygq:function(n,r,e){var t,a=(t="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0,function(n){var r;n=n||{},r||(r=void 0!==n?n:{});var e,a={};for(e in r)r.hasOwnProperty(e)&&(a[e]=r[e]);var i,o="./this.program",u="";u=self.location.href,t&&(u=t),u=0!==u.indexOf("blob:")?u.substr(0,u.lastIndexOf("/")+1):"",i=function(n){var r=new XMLHttpRequest;return r.open("GET",n,!1),r.responseType="arraybuffer",r.send(null),new Uint8Array(r.response)};var f,l=r.print||console.log.bind(console),c=r.printErr||console.warn.bind(console);for(e in a)a.hasOwnProperty(e)&&(r[e]=a[e]);a=null,r.thisProgram&&(o=r.thisProgram),r.wasmBinary&&(f=r.wasmBinary),"object"!=typeof WebAssembly&&c("no native wasm support detected");var s,p=new WebAssembly.Table({initial:44,maximum:44,element:"anyfunc"}),d=!1,v="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function y(n,r,e){var t=r+e;for(e=r;n[e]&&!(e>=t);)++e;if(16<e-r&&n.subarray&&v)return v.decode(n.subarray(r,e));for(t="";r<e;){var a=n[r++];if(128&a){var i=63&n[r++];if(192==(224&a))t+=String.fromCharCode((31&a)<<6|i);else{var o=63&n[r++];65536>(a=224==(240&a)?(15&a)<<12|i<<6|o:(7&a)<<18|i<<12|o<<6|63&n[r++])?t+=String.fromCharCode(a):(a-=65536,t+=String.fromCharCode(55296|a>>10,56320|1023&a))}}else t+=String.fromCharCode(a)}return t}var h="undefined"!=typeof TextDecoder?new TextDecoder("utf-16le"):void 0;function m(n){var r;for(r=n>>1;W[r];)++r;if(32<(r<<=1)-n&&h)return h.decode(P.subarray(n,r));r=0;for(var e="";;){var t=W[n+2*r>>1];if(0==t)return e;++r,e+=String.fromCharCode(t)}}function g(n,r,e){if(void 0===e&&(e=2147483647),2>e)return 0;var t=r;e=(e-=2)<2*n.length?e/2:n.length;for(var a=0;a<e;++a)W[r>>1]=n.charCodeAt(a),r+=2;return W[r>>1]=0,r-t}function w(n){return 2*n.length}function _(n){for(var r=0,e="";;){var t=k[n+4*r>>2];if(0==t)return e;++r,65536<=t?(t-=65536,e+=String.fromCharCode(55296|t>>10,56320|1023&t)):e+=String.fromCharCode(t)}}function b(n,r,e){if(void 0===e&&(e=2147483647),4>e)return 0;var t=r;e=t+e-4;for(var a=0;a<n.length;++a){var i=n.charCodeAt(a);if(55296<=i&&57343>=i&&(i=65536+((1023&i)<<10)|1023&n.charCodeAt(++a)),k[r>>2]=i,(r+=4)+4>e)break}return k[r>>2]=0,r-t}function C(n){for(var r=0,e=0;e<n.length;++e){var t=n.charCodeAt(e);55296<=t&&57343>=t&&++e,r+=4}return r}var A,T,P,W,E,k,S,O,F,I=r.INITIAL_MEMORY||16777216;(s=r.wasmMemory?r.wasmMemory:new WebAssembly.Memory({initial:I/65536,maximum:I/65536}))&&(A=s.buffer),I=A.byteLength;var R=A;function j(n){for(;0<n.length;){var e=n.shift();if("function"==typeof e)e();else{var t=e.ha;"number"==typeof t?void 0===e.ba?r.dynCall_v(t):r.dynCall_vi(t,e.ba):t(void 0===e.ba?null:e.ba)}}}A=R,r.HEAP8=T=new Int8Array(R),r.HEAP16=W=new Int16Array(R),r.HEAP32=k=new Int32Array(R),r.HEAPU8=P=new Uint8Array(R),r.HEAPU16=E=new Uint16Array(R),r.HEAPU32=S=new Uint32Array(R),r.HEAPF32=O=new Float32Array(R),r.HEAPF64=F=new Float64Array(R),k[1924]=5250736;var x=[],U=[],M=[],$=[];function V(){var n=r.preRun.shift();x.unshift(n)}var D=0,H=null,B=null;function z(n){throw r.onAbort&&r.onAbort(n),l(n),c(n),d=!0,new WebAssembly.RuntimeError("abort("+n+"). Build with -s ASSERTIONS=1 for more info.")}function N(){var n=q;return String.prototype.startsWith?n.startsWith("data:application/octet-stream;base64,"):0===n.indexOf("data:application/octet-stream;base64,")}r.preloadedImages={},r.preloadedAudios={};var q="simplex.wasm";if(!N()){var L=q;q=r.locateFile?r.locateFile(L,u):u+L}function G(){try{if(f)return new Uint8Array(f);if(i)return i(q);throw"both async and sync fetching of the wasm failed"}catch(n){z(n)}}function J(){return 0<J.da}U.push({ha:function(){$n()}});var X={};function Y(n){for(;n.length;){var r=n.pop();n.pop()(r)}}function Z(n){return this.fromWireType(S[n>>2])}var K={},Q={},nn={};function rn(n){if(void 0===n)return"_unknown";var r=(n=n.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return 48<=r&&57>=r?"_"+n:n}function en(n,r){return n=rn(n),new Function("body","return function "+n+'() {\n    "use strict";    return body.apply(this, arguments);\n};\n')(r)}function tn(n){var r=Error,e=en(n,(function(r){this.name=n,this.message=r,void 0!==(r=Error(r).stack)&&(this.stack=this.toString()+"\n"+r.replace(/^Error(:[^\n]*)?\n/,""))}));return e.prototype=Object.create(r.prototype),e.prototype.constructor=e,e.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message},e}var an=void 0;function on(n,r,e){function t(r){if((r=e(r)).length!==n.length)throw new an("Mismatched type converter count");for(var t=0;t<n.length;++t)pn(n[t],r[t])}n.forEach((function(n){nn[n]=r}));var a=Array(r.length),i=[],o=0;r.forEach((function(n,r){Q.hasOwnProperty(n)?a[r]=Q[n]:(i.push(n),K.hasOwnProperty(n)||(K[n]=[]),K[n].push((function(){a[r]=Q[n],++o===i.length&&t(a)})))})),0===i.length&&t(a)}function un(n){switch(n){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+n)}}var fn=void 0;function ln(n){for(var r="";P[n];)r+=fn[P[n++]];return r}var cn=void 0;function sn(n){throw new cn(n)}function pn(n,r,e){if(e=e||{},!("argPackAdvance"in r))throw new TypeError("registerType registeredInstance requires argPackAdvance");var t=r.name;if(n||sn('type "'+t+'" must have a positive integer typeid pointer'),Q.hasOwnProperty(n)){if(e.la)return;sn("Cannot register type '"+t+"' twice")}Q[n]=r,delete nn[n],K.hasOwnProperty(n)&&(r=K[n],delete K[n],r.forEach((function(n){n()})))}var dn=[],vn=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function yn(n){4<n&&0==--vn[n].ca&&(vn[n]=void 0,dn.push(n))}function hn(n){switch(n){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:var r=dn.length?dn.pop():vn.length;return vn[r]={ca:1,value:n},r}}function mn(n){if(null===n)return"null";var r=typeof n;return"object"===r||"array"===r||"function"===r?n.toString():""+n}function gn(n,r){switch(r){case 2:return function(n){return this.fromWireType(O[n>>2])};case 3:return function(n){return this.fromWireType(F[n>>3])};default:throw new TypeError("Unknown float type: "+n)}}function wn(n){var r=Function;if(!(r instanceof Function))throw new TypeError("new_ called with constructor type "+typeof r+" which is not a function");var e=en(r.name||"unknownFunctionName",(function(){}));return e.prototype=r.prototype,e=new e,(n=r.apply(e,n))instanceof Object?n:e}function _n(n,e){n=ln(n);for(var t=r["dynCall_"+n],a=[],i=1;i<n.length;++i)a.push("a"+i);return i="return function dynCall_"+n+"_"+e+"("+a.join(", ")+") {\n",i+="    return dynCall(rawFunction"+(a.length?", ":"")+a.join(", ")+");\n","function"!=typeof(t=new Function("dynCall","rawFunction",i+"};\n")(t,e))&&sn("unknown function pointer with signature "+n+": "+e),t}var bn=void 0;function Cn(n){var r=ln(n=Hn(n));return Dn(n),r}function An(n,r,e){switch(r){case 0:return e?function(n){return T[n]}:function(n){return P[n]};case 1:return e?function(n){return W[n>>1]}:function(n){return E[n>>1]};case 2:return e?function(n){return k[n>>2]}:function(n){return S[n>>2]};default:throw new TypeError("Unknown integer type: "+n)}}function Tn(n){return n||sn("Cannot use deleted val. handle = "+n),vn[n].value}function Pn(n,r){var e=Q[n];return void 0===e&&sn(r+" has unknown type "+Cn(n)),e}var Wn={};function En(n){var r=Wn[n];return void 0===r?ln(n):r}var kn=[],Sn={};function On(){if(!Fn){var n,r={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"==typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:o||"./this.program"};for(n in Sn)r[n]=Sn[n];var e=[];for(n in r)e.push(n+"="+r[n]);Fn=e}return Fn}var Fn,In=[null,[],[]];an=r.InternalError=tn("InternalError");for(var Rn=Array(256),jn=0;256>jn;++jn)Rn[jn]=String.fromCharCode(jn);fn=Rn,cn=r.BindingError=tn("BindingError"),r.count_emval_handles=function(){for(var n=0,r=5;r<vn.length;++r)void 0!==vn[r]&&++n;return n},r.get_first_emval=function(){for(var n=5;n<vn.length;++n)if(void 0!==vn[n])return vn[n];return null},bn=r.UnboundTypeError=tn("UnboundTypeError");var xn={e:function(n){return Vn(n)},g:function(n){throw"uncaught_exception"in J?J.da++:J.da=1,n},G:function(n){var r=X[n];delete X[n];var e=r.na,t=r.oa,a=r.ea;on([n],a.map((function(n){return n.ka})).concat(a.map((function(n){return n.qa}))),(function(n){var i={};return a.forEach((function(r,e){var t=n[e],o=r.ia,u=r.ja,f=n[e+a.length],l=r.pa,c=r.ra;i[r.ga]={read:function(n){return t.fromWireType(o(u,n))},write:function(n,r){var e=[];l(c,n,f.toWireType(e,r)),Y(e)}}})),[{name:r.name,fromWireType:function(n){var r,e={};for(r in i)e[r]=i[r].read(n);return t(n),e},toWireType:function(n,r){for(var a in i)if(!(a in r))throw new TypeError("Missing field");var o=e();for(a in i)i[a].write(o,r[a]);return null!==n&&n.push(t,o),o},argPackAdvance:8,readValueFromPointer:Z,aa:t}]}))},B:function(n,r,e,t,a){var i=un(e);pn(n,{name:r=ln(r),fromWireType:function(n){return!!n},toWireType:function(n,r){return r?t:a},argPackAdvance:8,readValueFromPointer:function(n){if(1===e)var t=T;else if(2===e)t=W;else{if(4!==e)throw new TypeError("Unknown boolean type size: "+r);t=k}return this.fromWireType(t[n>>i])},aa:null})},A:function(n,r){pn(n,{name:r=ln(r),fromWireType:function(n){var r=vn[n].value;return yn(n),r},toWireType:function(n,r){return hn(r)},argPackAdvance:8,readValueFromPointer:Z,aa:null})},r:function(n,r,e){e=un(e),pn(n,{name:r=ln(r),fromWireType:function(n){return n},toWireType:function(n,r){if("number"!=typeof r&&"boolean"!=typeof r)throw new TypeError('Cannot convert "'+mn(r)+'" to '+this.name);return r},argPackAdvance:8,readValueFromPointer:gn(r,e),aa:null})},I:function(n,e,t,a,i,o){var u=function(n,r){for(var e=[],t=0;t<n;t++)e.push(k[(r>>2)+t]);return e}(e,t);n=ln(n),i=_n(a,i),function(n,e,t){r.hasOwnProperty(n)?((void 0===t||void 0!==r[n].$&&void 0!==r[n].$[t])&&sn("Cannot register public name '"+n+"' twice"),function(n,e){var t=r;if(void 0===t[n].$){var a=t[n];t[n]=function(){return t[n].$.hasOwnProperty(arguments.length)||sn("Function '"+e+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+t[n].$+")!"),t[n].$[arguments.length].apply(this,arguments)},t[n].$=[],t[n].$[a.fa]=a}}(n,n),r.hasOwnProperty(t)&&sn("Cannot register multiple overloads of a function with the same number of arguments ("+t+")!"),r[n].$[t]=e):(r[n]=e,void 0!==t&&(r[n].sa=t))}(n,(function(){!function(n,r){var e=[],t={};throw r.forEach((function n(r){t[r]||Q[r]||(nn[r]?nn[r].forEach(n):(e.push(r),t[r]=!0))})),new bn(n+": "+e.map(Cn).join([", "]))}("Cannot call "+n+" due to unbound types",u)}),e-1),on([],u,(function(t){var a=n,u=n;t=[t[0],null].concat(t.slice(1));var f=i,l=t.length;2>l&&sn("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var c=null!==t[1]&&!1,s=!1,p=1;p<t.length;++p)if(null!==t[p]&&void 0===t[p].aa){s=!0;break}var d="void"!==t[0].name,v="",y="";for(p=0;p<l-2;++p)v+=(0!==p?", ":"")+"arg"+p,y+=(0!==p?", ":"")+"arg"+p+"Wired";u="return function "+rn(u)+"("+v+") {\nif (arguments.length !== "+(l-2)+") {\nthrowBindingError('function "+u+" called with ' + arguments.length + ' arguments, expected "+(l-2)+" args!');\n}\n",s&&(u+="var destructors = [];\n");var h=s?"destructors":"null";for(v="throwBindingError invoker fn runDestructors retType classParam".split(" "),f=[sn,f,o,Y,t[0],t[1]],c&&(u+="var thisWired = classParam.toWireType("+h+", this);\n"),p=0;p<l-2;++p)u+="var arg"+p+"Wired = argType"+p+".toWireType("+h+", arg"+p+"); // "+t[p+2].name+"\n",v.push("argType"+p),f.push(t[p+2]);if(c&&(y="thisWired"+(0<y.length?", ":"")+y),u+=(d?"var rv = ":"")+"invoker(fn"+(0<y.length?", ":"")+y+");\n",s)u+="runDestructors(destructors);\n";else for(p=c?1:2;p<t.length;++p)l=1===p?"thisWired":"arg"+(p-2)+"Wired",null!==t[p].aa&&(u+=l+"_dtor("+l+"); // "+t[p].name+"\n",v.push(l+"_dtor"),f.push(t[p].aa));if(d&&(u+="var ret = retType.fromWireType(rv);\nreturn ret;\n"),v.push(u+"}\n"),t=wn(v).apply(null,f),p=e-1,!r.hasOwnProperty(a))throw new an("Replacing nonexistant public symbol");return void 0!==r[a].$&&void 0!==p?r[a].$[p]=t:(r[a]=t,r[a].fa=p),[]}))},j:function(n,r,e,t,a){function i(n){return n}r=ln(r),-1===a&&(a=4294967295);var o=un(e);if(0===t){var u=32-8*e;i=function(n){return n<<u>>>u}}var f=-1!=r.indexOf("unsigned");pn(n,{name:r,fromWireType:i,toWireType:function(n,e){if("number"!=typeof e&&"boolean"!=typeof e)throw new TypeError('Cannot convert "'+mn(e)+'" to '+this.name);if(e<t||e>a)throw new TypeError('Passing a number "'+mn(e)+'" from JS side to C/C++ side to an argument of type "'+r+'", which is outside the valid range ['+t+", "+a+"]!");return f?e>>>0:0|e},argPackAdvance:8,readValueFromPointer:An(r,o,0!==t),aa:null})},f:function(n,r,e){function t(n){return new a(A,S[1+(n>>=2)],S[n])}var a=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][r];pn(n,{name:e=ln(e),fromWireType:t,argPackAdvance:8,readValueFromPointer:t},{la:!0})},s:function(n,r){var e="std::string"===(r=ln(r));pn(n,{name:r,fromWireType:function(n){var r=S[n>>2];if(e){var t=P[n+4+r],a=0;0!=t&&(a=t,P[n+4+r]=0);var i=n+4;for(t=0;t<=r;++t){var o=n+4+t;if(0==P[o]){if(i=i?y(P,i,void 0):"",void 0===u)var u=i;else u+=String.fromCharCode(0),u+=i;i=o+1}}0!=a&&(P[n+4+r]=a)}else{for(u=Array(r),t=0;t<r;++t)u[t]=String.fromCharCode(P[n+4+t]);u=u.join("")}return Dn(n),u},toWireType:function(n,r){r instanceof ArrayBuffer&&(r=new Uint8Array(r));var t="string"==typeof r;t||r instanceof Uint8Array||r instanceof Uint8ClampedArray||r instanceof Int8Array||sn("Cannot pass non-string to std::string");var a=(e&&t?function(){for(var n=0,e=0;e<r.length;++e){var t=r.charCodeAt(e);55296<=t&&57343>=t&&(t=65536+((1023&t)<<10)|1023&r.charCodeAt(++e)),127>=t?++n:n=2047>=t?n+2:65535>=t?n+3:n+4}return n}:function(){return r.length})(),i=Vn(4+a+1);if(S[i>>2]=a,e&&t)!function(n,r,e){var t=P;if(0<e){e=r+e-1;for(var a=0;a<n.length;++a){var i=n.charCodeAt(a);if(55296<=i&&57343>=i&&(i=65536+((1023&i)<<10)|1023&n.charCodeAt(++a)),127>=i){if(r>=e)break;t[r++]=i}else{if(2047>=i){if(r+1>=e)break;t[r++]=192|i>>6}else{if(65535>=i){if(r+2>=e)break;t[r++]=224|i>>12}else{if(r+3>=e)break;t[r++]=240|i>>18,t[r++]=128|i>>12&63}t[r++]=128|i>>6&63}t[r++]=128|63&i}}t[r]=0}}(r,i+4,a+1);else if(t)for(t=0;t<a;++t){var o=r.charCodeAt(t);255<o&&(Dn(i),sn("String has UTF-16 code units that do not fit in 8 bits")),P[i+4+t]=o}else for(t=0;t<a;++t)P[i+4+t]=r[t];return null!==n&&n.push(Dn,i),i},argPackAdvance:8,readValueFromPointer:Z,aa:function(n){Dn(n)}})},q:function(n,r,e){if(e=ln(e),2===r)var t=m,a=g,i=w,o=function(){return E},u=1;else 4===r&&(t=_,a=b,i=C,o=function(){return S},u=2);pn(n,{name:e,fromWireType:function(n){var e=S[n>>2],a=o(),i=a[n+4+e*r>>u],f=0;0!=i&&(f=i,a[n+4+e*r>>u]=0);var l=n+4;for(i=0;i<=e;++i){var c=n+4+i*r;if(0==a[c>>u]){if(l=t(l),void 0===s)var s=l;else s+=String.fromCharCode(0),s+=l;l=c+r}}return 0!=f&&(a[n+4+e*r>>u]=f),Dn(n),s},toWireType:function(n,t){"string"!=typeof t&&sn("Cannot pass non-string to C++ string type "+e);var o=i(t),f=Vn(4+o+r);return S[f>>2]=o>>u,a(t,f+4,o+r),null!==n&&n.push(Dn,f),f},argPackAdvance:8,readValueFromPointer:Z,aa:function(n){Dn(n)}})},H:function(n,r,e,t,a,i){X[n]={name:ln(r),na:_n(e,t),oa:_n(a,i),ea:[]}},v:function(n,r,e,t,a,i,o,u,f,l){X[n].ea.push({ga:ln(r),ka:e,ia:_n(t,a),ja:i,qa:o,pa:_n(u,f),ra:l})},C:function(n,r){pn(n,{ma:!0,name:r=ln(r),argPackAdvance:0,fromWireType:function(){},toWireType:function(){}})},p:function(n,r,e){n=Tn(n),r=Pn(r,"emval::as");var t=[],a=hn(t);return k[e>>2]=a,r.toWireType(t,n)},h:function(n,r,e,t){(n=kn[n])(r=Tn(r),e=En(e),null,t)},a:yn,i:function(n,r){for(var e=(r=function(n,r){for(var e=Array(n),t=0;t<n;++t)e[t]=Pn(k[(r>>2)+t],"parameter "+t);return e}(n,r))[0],t=e.name+"_$"+r.slice(1).map((function(n){return n.name})).join("_")+"$",a=["retType"],i=[e],o="",u=0;u<n-1;++u)o+=(0!==u?", ":"")+"arg"+u,a.push("argType"+u),i.push(r[1+u]);t="return function "+rn("methodCaller_"+t)+"(handle, name, destructors, args) {\n";var f=0;for(u=0;u<n-1;++u)t+="    var arg"+u+" = argType"+u+".readValueFromPointer(args"+(f?"+"+f:"")+");\n",f+=r[u+1].argPackAdvance;for(t+="    var rv = handle[name]("+o+");\n",u=0;u<n-1;++u)r[u+1].deleteObject&&(t+="    argType"+u+".deleteObject(arg"+u+");\n");return e.ma||(t+="    return retType.toWireType(destructors, rv);\n"),a.push(t+"};\n"),function(n){var r=kn.length;return kn.push(n),r}(n=wn(a).apply(null,i))},m:function(n,r){return hn((n=Tn(n))[r=Tn(r)])},d:function(n){4<n&&(vn[n].ca+=1)},n:function(){return hn([])},b:function(n){return hn(En(n))},l:function(){return hn({})},o:function(n){Y(vn[n].value),yn(n)},c:function(n,r,e){n=Tn(n),r=Tn(r),e=Tn(e),n[r]=e},k:function(n,r){return hn(n=(n=Pn(n,"_emval_take_value")).readValueFromPointer(r))},u:function(){z()},y:function(n,r,e){P.copyWithin(n,r,r+e)},z:function(){z("OOM")},D:function(n,r){var e=0;return On().forEach((function(t,a){var i=r+e;for(a=k[n+4*a>>2]=i,i=0;i<t.length;++i)T[a++>>0]=t.charCodeAt(i);T[a>>0]=0,e+=t.length+1})),0},E:function(n,r){var e=On();k[n>>2]=e.length;var t=0;return e.forEach((function(n){t+=n.length+1})),k[r>>2]=t,0},F:function(){return 0},w:function(){},t:function(n,r,e,t){for(var a=0,i=0;i<e;i++){for(var o=k[r+8*i>>2],u=k[r+(8*i+4)>>2],f=0;f<u;f++){var s=P[o+f],p=In[n];0===s||10===s?((1===n?l:c)(y(p,0)),p.length=0):p.push(s)}a+=u}return k[t>>2]=a,0},memory:s,x:function(){},table:p},Un=function(){function n(n){r.asm=n.exports,D--,r.monitorRunDependencies&&r.monitorRunDependencies(D),0==D&&(null!==H&&(clearInterval(H),H=null),B&&(n=B,B=null,n()))}function e(r){n(r.instance)}function t(n){return(f||"function"!=typeof fetch?new Promise((function(n){n(G())})):fetch(q,{credentials:"same-origin"}).then((function(n){if(!n.ok)throw"failed to load wasm binary file at '"+q+"'";return n.arrayBuffer()})).catch((function(){return G()}))).then((function(n){return WebAssembly.instantiate(n,a)})).then(n,(function(n){c("failed to asynchronously prepare wasm: "+n),z(n)}))}var a={a:xn};if(D++,r.monitorRunDependencies&&r.monitorRunDependencies(D),r.instantiateWasm)try{return r.instantiateWasm(a,n)}catch(i){return c("Module.instantiateWasm callback failed with error: "+i),!1}return function(){if(f||"function"!=typeof WebAssembly.instantiateStreaming||N()||"function"!=typeof fetch)return t(e);fetch(q,{credentials:"same-origin"}).then((function(n){return WebAssembly.instantiateStreaming(n,a).then(e,(function(n){c("wasm streaming compile failed: "+n),c("falling back to ArrayBuffer instantiation"),t(e)}))}))}(),{}}();r.asm=Un;var Mn,$n=r.___wasm_call_ctors=function(){return($n=r.___wasm_call_ctors=r.asm.J).apply(null,arguments)},Vn=r._malloc=function(){return(Vn=r._malloc=r.asm.K).apply(null,arguments)},Dn=r._free=function(){return(Dn=r._free=r.asm.L).apply(null,arguments)},Hn=r.___getTypeName=function(){return(Hn=r.___getTypeName=r.asm.M).apply(null,arguments)};function Bn(){function n(){if(!Mn&&(Mn=!0,r.calledRun=!0,!d)){if(j(U),j(M),r.onRuntimeInitialized&&r.onRuntimeInitialized(),r.postRun)for("function"==typeof r.postRun&&(r.postRun=[r.postRun]);r.postRun.length;){var n=r.postRun.shift();$.unshift(n)}j($)}}if(!(0<D)){if(r.preRun)for("function"==typeof r.preRun&&(r.preRun=[r.preRun]);r.preRun.length;)V();j(x),0<D||(r.setStatus?(r.setStatus("Running..."),setTimeout((function(){setTimeout((function(){r.setStatus("")}),1),n()}),1)):n())}}if(r.___embind_register_native_and_builtin_types=function(){return(r.___embind_register_native_and_builtin_types=r.asm.N).apply(null,arguments)},r.dynCall_iiiii=function(){return(r.dynCall_iiiii=r.asm.O).apply(null,arguments)},r.dynCall_viiii=function(){return(r.dynCall_viiii=r.asm.P).apply(null,arguments)},r.dynCall_i=function(){return(r.dynCall_i=r.asm.Q).apply(null,arguments)},r.dynCall_vi=function(){return(r.dynCall_vi=r.asm.R).apply(null,arguments)},r.dynCall_vii=function(){return(r.dynCall_vii=r.asm.S).apply(null,arguments)},r.dynCall_iii=function(){return(r.dynCall_iii=r.asm.T).apply(null,arguments)},r.dynCall_viii=function(){return(r.dynCall_viii=r.asm.U).apply(null,arguments)},r.dynCall_ii=function(){return(r.dynCall_ii=r.asm.V).apply(null,arguments)},r.dynCall_iiii=function(){return(r.dynCall_iiii=r.asm.W).apply(null,arguments)},r.dynCall_viiiiii=function(){return(r.dynCall_viiiiii=r.asm.X).apply(null,arguments)},r.dynCall_viiiii=function(){return(r.dynCall_viiiii=r.asm.Y).apply(null,arguments)},r.dynCall_jiji=function(){return(r.dynCall_jiji=r.asm.Z).apply(null,arguments)},r.dynCall_iidiiii=function(){return(r.dynCall_iidiiii=r.asm._).apply(null,arguments)},r.asm=Un,r.then=function(n){if(Mn)n(r);else{var e=r.onRuntimeInitialized;r.onRuntimeInitialized=function(){e&&e(),n(r)}}return r},B=function n(){Mn||Bn(),Mn||(B=n)},r.run=Bn,r.preInit)for("function"==typeof r.preInit&&(r.preInit=[r.preInit]);0<r.preInit.length;)r.preInit.pop()();return Bn(),n});n.exports=a}});
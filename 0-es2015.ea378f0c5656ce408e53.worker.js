!function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}__webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{enumerable:!0,get:getter})},__webpack_require__.r=function(exports){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.t=function(value,mode){if(1&mode&&(value=__webpack_require__(value)),8&mode)return value;if(4&mode&&"object"==typeof value&&value&&value.__esModule)return value;var ns=Object.create(null);if(__webpack_require__.r(ns),Object.defineProperty(ns,"default",{enumerable:!0,value:value}),2&mode&&"string"!=typeof value)for(var key in value)__webpack_require__.d(ns,key,(function(key){return value[key]}).bind(null,key));return ns},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s="I6VW")}({I6VW:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var simplex=__webpack_require__("Mygq"),simplex_default=__webpack_require__.n(simplex);addEventListener("message",({data:data})=>{simplex_default()({locateFile:path=>`native/${path}`}).then(mod=>{postMessage(mod.simplex(data.a,data.b,data.c))})})},Mygq:function(module,exports,__webpack_require__){var _scriptDir,Module=(_scriptDir="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0,function(Module){var e;Module=Module||{},e||(e=void 0!==Module?Module:{});var r,q={};for(r in e)e.hasOwnProperty(r)&&(q[r]=e[r]);var ca,t="";t=self.location.href,_scriptDir&&(t=_scriptDir),t=0!==t.indexOf("blob:")?t.substr(0,t.lastIndexOf("/")+1):"",ca=function(a){var b=new XMLHttpRequest;return b.open("GET",a,!1),b.responseType="arraybuffer",b.send(null),new Uint8Array(b.response)};var da=e.print||console.log.bind(console),u=e.printErr||console.warn.bind(console);for(r in q)q.hasOwnProperty(r)&&(e[r]=q[r]);q=null;var v,ea={"f64-rem":function(a,b){return a%b},debugger:function(){}};e.wasmBinary&&(v=e.wasmBinary),"object"!=typeof WebAssembly&&u("no native wasm support detected");var w,fa=new WebAssembly.Table({initial:62,maximum:62,element:"anyfunc"}),ha=!1,ia="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function ja(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.subarray&&ia)return ia.decode(a.subarray(b,c));for(d="";b<c;){var f=a[b++];if(128&f){var h=63&a[b++];if(192==(224&f))d+=String.fromCharCode((31&f)<<6|h);else{var k=63&a[b++];65536>(f=224==(240&f)?(15&f)<<12|h<<6|k:(7&f)<<18|h<<12|k<<6|63&a[b++])?d+=String.fromCharCode(f):(f-=65536,d+=String.fromCharCode(55296|f>>10,56320|1023&f))}}else d+=String.fromCharCode(f)}return d}"undefined"!=typeof TextDecoder&&new TextDecoder("utf-16le");var z,A,y,la,ma,B,C,na,oa,pa=e.TOTAL_MEMORY||16777216;(w=e.wasmMemory?e.wasmMemory:new WebAssembly.Memory({initial:pa/65536,maximum:pa/65536}))&&(z=w.buffer),pa=z.byteLength;var D=z;function E(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b();else{var c=b.ha;"number"==typeof c?void 0===b.ba?e.dynCall_v(c):e.dynCall_vi(c,b.ba):c(void 0===b.ba?null:b.ba)}}}z=D,e.HEAP8=A=new Int8Array(D),e.HEAP16=la=new Int16Array(D),e.HEAP32=B=new Int32Array(D),e.HEAPU8=y=new Uint8Array(D),e.HEAPU16=ma=new Uint16Array(D),e.HEAPU32=C=new Uint32Array(D),e.HEAPF32=na=new Float32Array(D),e.HEAPF64=oa=new Float64Array(D),B[1908]=5250720;var qa=[],ra=[],sa=[],ta=[];function ua(){var a=e.preRun.shift();qa.unshift(a)}var F=0,wa=null,G=null;function H(a){throw e.onAbort&&e.onAbort(a),da(a),u(a),ha=!0,"abort("+a+"). Build with -s ASSERTIONS=1 for more info."}function xa(){var a=I;return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}e.preloadedImages={},e.preloadedAudios={};var I="simplex.wasm";if(!xa()){var ya=I;I=e.locateFile?e.locateFile(ya,t):t+ya}function za(){try{if(v)return new Uint8Array(v);if(ca)return ca(I);throw"both async and sync fetching of the wasm failed"}catch(a){H(a)}}e.asm=function(){function a(a){e.asm=a.exports,F--,e.monitorRunDependencies&&e.monitorRunDependencies(F),0==F&&(null!==wa&&(clearInterval(wa),wa=null),G&&(a=G,G=null,a()))}function b(b){a(b.instance)}function c(a){return(v||"function"!=typeof fetch?new Promise((function(a){a(za())})):fetch(I,{credentials:"same-origin"}).then((function(a){if(!a.ok)throw"failed to load wasm binary file at '"+I+"'";return a.arrayBuffer()})).catch((function(){return za()}))).then((function(a){return WebAssembly.instantiate(a,d)})).then(a,(function(a){u("failed to asynchronously prepare wasm: "+a),H(a)}))}var d={env:Ba,wasi_unstable:Ba,global:{NaN:NaN,Infinity:1/0},"global.Math":Math,asm2wasm:ea};if(F++,e.monitorRunDependencies&&e.monitorRunDependencies(F),e.instantiateWasm)try{return e.instantiateWasm(d,a)}catch(f){return u("Module.instantiateWasm callback failed with error: "+f),!1}return function(){if(v||"function"!=typeof WebAssembly.instantiateStreaming||xa()||"function"!=typeof fetch)return c(b);fetch(I,{credentials:"same-origin"}).then((function(a){return WebAssembly.instantiateStreaming(a,d).then(b,(function(a){u("wasm streaming compile failed: "+a),u("falling back to ArrayBuffer instantiation"),c(b)}))}))}(),{}},ra.push({ha:function(){Ca()}});var Da=[null,[],[]];function Ea(){return 0}function Fa(){return 0}function Ga(a,b,c,d){try{for(var f=0,h=0;h<c;h++){for(var k=B[b+8*h>>2],g=B[b+(8*h+4)>>2],m=0;m<g;m++){var n=y[k+m],x=Da[a];0===n||10===n?((1===a?da:u)(ja(x,0)),x.length=0):x.push(n)}f+=g}return B[d>>2]=f,0}catch(p){return H(p),p.sa}}var K={};function Ha(a){for(;a.length;){var b=a.pop();a.pop()(b)}}function L(a){return this.fromWireType(C[a>>2])}var N={},O={},P={};function Ia(a){if(void 0===a)return"_unknown";var b=(a=a.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return 48<=b&&57>=b?"_"+a:a}function Ja(a,b){return a=Ia(a),new Function("body","return function "+a+'() {\n    "use strict";    return body.apply(this, arguments);\n};\n')(b)}function Ka(a){var b=Error,c=Ja(a,(function(b){this.name=a,this.message=b,void 0!==(b=Error(b).stack)&&(this.stack=this.toString()+"\n"+b.replace(/^Error(:[^\n]*)?\n/,""))}));return c.prototype=Object.create(b.prototype),c.prototype.constructor=c,c.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message},c}var La=void 0;function Ma(a,b,c){function d(b){if((b=c(b)).length!==a.length)throw new La("Mismatched type converter count");for(var d=0;d<a.length;++d)Q(a[d],b[d])}a.forEach((function(a){P[a]=b}));var f=Array(b.length),h=[],k=0;b.forEach((function(a,b){O.hasOwnProperty(a)?f[b]=O[a]:(h.push(a),N.hasOwnProperty(a)||(N[a]=[]),N[a].push((function(){f[b]=O[a],++k===h.length&&d(f)})))})),0===h.length&&d(f)}function Na(a){switch(a){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+a)}}var Oa=void 0;function R(a){for(var b="";y[a];)b+=Oa[y[a++]];return b}var Pa=void 0;function S(a){throw new Pa(a)}function Q(a,b,c){if(c=c||{},!("argPackAdvance"in b))throw new TypeError("registerType registeredInstance requires argPackAdvance");var d=b.name;if(a||S('type "'+d+'" must have a positive integer typeid pointer'),O.hasOwnProperty(a)){if(c.la)return;S("Cannot register type '"+d+"' twice")}O[a]=b,delete P[a],N.hasOwnProperty(a)&&(b=N[a],delete N[a],b.forEach((function(a){a()})))}var Qa=[],T=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function Ra(a){4<a&&0==--T[a].ca&&(T[a]=void 0,Qa.push(a))}function U(a){switch(a){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:var b=Qa.length?Qa.pop():T.length;return T[b]={ca:1,value:a},b}}function Ta(a){if(null===a)return"null";var b=typeof a;return"object"===b||"array"===b||"function"===b?a.toString():""+a}function Ua(a,b){switch(b){case 2:return function(a){return this.fromWireType(na[a>>2])};case 3:return function(a){return this.fromWireType(oa[a>>3])};default:throw new TypeError("Unknown float type: "+a)}}function Va(a){var b=Function;if(!(b instanceof Function))throw new TypeError("new_ called with constructor type "+typeof b+" which is not a function");var c=Ja(b.name||"unknownFunctionName",(function(){}));return c.prototype=b.prototype,c=new c,(a=b.apply(c,a))instanceof Object?a:c}function V(a,b){if(a=R(a),void 0!==e["FUNCTION_TABLE_"+a])var c=e["FUNCTION_TABLE_"+a][b];else if("undefined"!=typeof FUNCTION_TABLE)c=FUNCTION_TABLE[b];else{void 0===(c=e["dynCall_"+a])&&void 0===(c=e["dynCall_"+a.replace(/f/g,"d")])&&S("No dynCall invoker for signature: "+a);for(var d=[],f=1;f<a.length;++f)d.push("a"+f);f="return function dynCall_"+a+"_"+b+"("+d.join(", ")+") {\n",f+="    return dynCall(rawFunction"+(d.length?", ":"")+d.join(", ")+");\n",c=new Function("dynCall","rawFunction",f+"};\n")(c,b)}return"function"!=typeof c&&S("unknown function pointer with signature "+a+": "+b),c}var Za=void 0;function $a(a){var b=R(a=ab(a));return W(a),b}function cb(a,b,c){switch(b){case 0:return c?function(a){return A[a]}:function(a){return y[a]};case 1:return c?function(a){return la[a>>1]}:function(a){return ma[a>>1]};case 2:return c?function(a){return B[a>>2]}:function(a){return C[a>>2]};default:throw new TypeError("Unknown integer type: "+a)}}function X(a){return a||S("Cannot use deleted val. handle = "+a),T[a].value}function db(a,b){var c=O[a];return void 0===c&&S(b+" has unknown type "+$a(a)),c}var eb={};function fb(a){var b=eb[a];return void 0===b?R(a):b}var gb=[];La=e.InternalError=Ka("InternalError");for(var jb=Array(256),Y=0;256>Y;++Y)jb[Y]=String.fromCharCode(Y);Oa=jb,Pa=e.BindingError=Ka("BindingError"),e.count_emval_handles=function(){for(var a=0,b=5;b<T.length;++b)void 0!==T[b]&&++a;return a},e.get_first_emval=function(){for(var a=5;a<T.length;++a)if(void 0!==T[a])return T[a];return null},Za=e.UnboundTypeError=Ka("UnboundTypeError");var Ba={e:function(a){return kb(a)},f:function(a){throw"uncaught_exception"in lb?lb.ea++:lb.ea=1,a},F:function(){return Ea.apply(null,arguments)},C:function(){return Fa.apply(null,arguments)},B:function(){return Ga.apply(null,arguments)},A:function(a){var b=K[a];delete K[a];var c=b.na,d=b.oa,f=b.da;Ma([a],f.map((function(a){return a.ka})).concat(f.map((function(a){return a.qa}))),(function(a){var h={};return f.forEach((function(b,c){var d=a[c],g=b.ia,n=b.ja,k=a[c+f.length],m=b.pa,ba=b.ra;h[b.ga]={read:function(a){return d.fromWireType(g(n,a))},write:function(a,b){var c=[];m(ba,a,k.toWireType(c,b)),Ha(c)}}})),[{name:b.name,fromWireType:function(a){var c,b={};for(c in h)b[c]=h[c].read(a);return d(a),b},toWireType:function(a,b){for(var f in h)if(!(f in b))throw new TypeError("Missing field");var g=c();for(f in h)h[f].write(g,b[f]);return null!==a&&a.push(d,g),g},argPackAdvance:8,readValueFromPointer:L,aa:d}]}))},z:function(a,b,c,d,f){var h=Na(c);Q(a,{name:b=R(b),fromWireType:function(a){return!!a},toWireType:function(a,b){return b?d:f},argPackAdvance:8,readValueFromPointer:function(a){if(1===c)var d=A;else if(2===c)d=la;else{if(4!==c)throw new TypeError("Unknown boolean type size: "+b);d=B}return this.fromWireType(d[a>>h])},aa:null})},y:function(a,b){Q(a,{name:b=R(b),fromWireType:function(a){var b=T[a].value;return Ra(a),b},toWireType:function(a,b){return U(b)},argPackAdvance:8,readValueFromPointer:L,aa:null})},u:function(a,b,c){c=Na(c),Q(a,{name:b=R(b),fromWireType:function(a){return a},toWireType:function(a,b){if("number"!=typeof b&&"boolean"!=typeof b)throw new TypeError('Cannot convert "'+Ta(b)+'" to '+this.name);return b},argPackAdvance:8,readValueFromPointer:Ua(b,c),aa:null})},x:function(a,b,c,d,f,h){var k=function(a,b){for(var c=[],d=0;d<a;d++)c.push(B[(b>>2)+d]);return c}(b,c);a=R(a),f=V(d,f),function(a,b,c){e.hasOwnProperty(a)?((void 0===c||void 0!==e[a].$&&void 0!==e[a].$[c])&&S("Cannot register public name '"+a+"' twice"),function(a,b){var c=e;if(void 0===c[a].$){var d=c[a];c[a]=function(){return c[a].$.hasOwnProperty(arguments.length)||S("Function '"+b+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+c[a].$+")!"),c[a].$[arguments.length].apply(this,arguments)},c[a].$=[],c[a].$[d.fa]=d}}(a,a),e.hasOwnProperty(c)&&S("Cannot register multiple overloads of a function with the same number of arguments ("+c+")!"),e[a].$[c]=b):(e[a]=b,void 0!==c&&(e[a].ta=c))}(a,(function(){!function(a,b){var d=[],f={};throw b.forEach((function c(a){f[a]||O[a]||(P[a]?P[a].forEach(c):(d.push(a),f[a]=!0))})),new Za(a+": "+d.map($a).join([", "]))}("Cannot call "+a+" due to unbound types",k)}),b-1),Ma([],k,(function(c){var d=a,g=a;c=[c[0],null].concat(c.slice(1));var k=f,p=c.length;2>p&&S("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var va=null!==c[1]&&!1,aa=!1,l=1;l<c.length;++l)if(null!==c[l]&&void 0===c[l].aa){aa=!0;break}var ba="void"!==c[0].name,J="",M="";for(l=0;l<p-2;++l)J+=(0!==l?", ":"")+"arg"+l,M+=(0!==l?", ":"")+"arg"+l+"Wired";g="return function "+Ia(g)+"("+J+") {\nif (arguments.length !== "+(p-2)+") {\nthrowBindingError('function "+g+" called with ' + arguments.length + ' arguments, expected "+(p-2)+" args!');\n}\n",aa&&(g+="var destructors = [];\n");var Sa=aa?"destructors":"null";for(J="throwBindingError invoker fn runDestructors retType classParam".split(" "),k=[S,k,h,Ha,c[0],c[1]],va&&(g+="var thisWired = classParam.toWireType("+Sa+", this);\n"),l=0;l<p-2;++l)g+="var arg"+l+"Wired = argType"+l+".toWireType("+Sa+", arg"+l+"); // "+c[l+2].name+"\n",J.push("argType"+l),k.push(c[l+2]);if(va&&(M="thisWired"+(0<M.length?", ":"")+M),g+=(ba?"var rv = ":"")+"invoker(fn"+(0<M.length?", ":"")+M+");\n",aa)g+="runDestructors(destructors);\n";else for(l=va?1:2;l<c.length;++l)p=1===l?"thisWired":"arg"+(l-2)+"Wired",null!==c[l].aa&&(g+=p+"_dtor("+p+"); // "+c[l].name+"\n",J.push(p+"_dtor"),k.push(c[l].aa));if(ba&&(g+="var ret = retType.fromWireType(rv);\nreturn ret;\n"),J.push(g+"}\n"),c=Va(J).apply(null,k),l=b-1,!e.hasOwnProperty(d))throw new La("Replacing nonexistant public symbol");return void 0!==e[d].$&&void 0!==l?e[d].$[l]=c:(e[d]=c,e[d].fa=l),[]}))},l:function(a,b,c,d,f){function h(a){return a}b=R(b),-1===f&&(f=4294967295);var k=Na(c);if(0===d){var g=32-8*c;h=function(a){return a<<g>>>g}}var m=-1!=b.indexOf("unsigned");Q(a,{name:b,fromWireType:h,toWireType:function(a,c){if("number"!=typeof c&&"boolean"!=typeof c)throw new TypeError('Cannot convert "'+Ta(c)+'" to '+this.name);if(c<d||c>f)throw new TypeError('Passing a number "'+Ta(c)+'" from JS side to C/C++ side to an argument of type "'+b+'", which is outside the valid range ['+d+", "+f+"]!");return m?c>>>0:0|c},argPackAdvance:8,readValueFromPointer:cb(b,k,0!==d),aa:null})},h:function(a,b,c){function d(a){return new f(C.buffer,C[1+(a>>=2)],C[a])}var f=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][b];Q(a,{name:c=R(c),fromWireType:d,argPackAdvance:8,readValueFromPointer:d},{la:!0})},w:function(a,b){var c="std::string"===(b=R(b));Q(a,{name:b,fromWireType:function(a){var b=C[a>>2];if(c){var d=y[a+4+b],k=0;0!=d&&(k=d,y[a+4+b]=0);var g=a+4;for(d=0;d<=b;++d){var m=a+4+d;if(0==y[m]){if(g=g?ja(y,g,void 0):"",void 0===n)var n=g;else n+=String.fromCharCode(0),n+=g;g=m+1}}0!=k&&(y[a+4+b]=k)}else{for(n=Array(b),d=0;d<b;++d)n[d]=String.fromCharCode(y[a+4+d]);n=n.join("")}return W(a),n},toWireType:function(a,b){b instanceof ArrayBuffer&&(b=new Uint8Array(b));var d="string"==typeof b;d||b instanceof Uint8Array||b instanceof Uint8ClampedArray||b instanceof Int8Array||S("Cannot pass non-string to std::string");var f=(c&&d?function(){for(var a=0,c=0;c<b.length;++c){var d=b.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((1023&d)<<10)|1023&b.charCodeAt(++c)),127>=d?++a:a=2047>=d?a+2:65535>=d?a+3:a+4}return a}:function(){return b.length})(),g=kb(4+f+1);if(C[g>>2]=f,c&&d)!function(a,b,c){var d=y;if(0<c){c=b+c-1;for(var f=0;f<a.length;++f){var h=a.charCodeAt(f);if(55296<=h&&57343>=h&&(h=65536+((1023&h)<<10)|1023&a.charCodeAt(++f)),127>=h){if(b>=c)break;d[b++]=h}else{if(2047>=h){if(b+1>=c)break;d[b++]=192|h>>6}else{if(65535>=h){if(b+2>=c)break;d[b++]=224|h>>12}else{if(b+3>=c)break;d[b++]=240|h>>18,d[b++]=128|h>>12&63}d[b++]=128|h>>6&63}d[b++]=128|63&h}}d[b]=0}}(b,g+4,f+1);else if(d)for(d=0;d<f;++d){var m=b.charCodeAt(d);255<m&&(W(g),S("String has UTF-16 code units that do not fit in 8 bits")),y[g+4+d]=m}else for(d=0;d<f;++d)y[g+4+d]=b[d];return null!==a&&a.push(W,g),g},argPackAdvance:8,readValueFromPointer:L,aa:function(a){W(a)}})},I:function(a,b,c){if(c=R(c),2===b)var d=function(){return ma},f=1;else 4===b&&(d=function(){return C},f=2);Q(a,{name:c,fromWireType:function(a){for(var b=d(),c=C[a>>2],h=Array(c),n=a+4>>f,x=0;x<c;++x)h[x]=String.fromCharCode(b[n+x]);return W(a),h.join("")},toWireType:function(a,c){var g=c.length,h=kb(4+g*b),k=d();C[h>>2]=g;for(var x=h+4>>f,p=0;p<g;++p)k[x+p]=c.charCodeAt(p);return null!==a&&a.push(W,h),h},argPackAdvance:8,readValueFromPointer:L,aa:function(a){W(a)}})},H:function(a,b,c,d,f,h){K[a]={name:R(b),na:V(c,d),oa:V(f,h),da:[]}},v:function(a,b,c,d,f,h,k,g,m,n){K[a].da.push({ga:R(b),ka:c,ia:V(d,f),ja:h,qa:k,pa:V(g,m),ra:n})},G:function(a,b){Q(a,{ma:!0,name:b=R(b),argPackAdvance:0,fromWireType:function(){},toWireType:function(){}})},t:function(a,b,c){a=X(a),b=db(b,"emval::as");var d=[],f=U(d);return B[c>>2]=f,b.toWireType(d,a)},k:function(a,b,c,d){(a=gb[a])(b=X(b),c=fb(c),null,d)},a:Ra,j:function(a,b){for(var c=(b=function(a,b){for(var c=Array(a),d=0;d<a;++d)c[d]=db(B[(b>>2)+d],"parameter "+d);return c}(a,b))[0],d=c.name+"_$"+b.slice(1).map((function(a){return a.name})).join("_")+"$",f=["retType"],h=[c],k="",g=0;g<a-1;++g)k+=(0!==g?", ":"")+"arg"+g,f.push("argType"+g),h.push(b[1+g]);d="return function "+Ia("methodCaller_"+d)+"(handle, name, destructors, args) {\n";var m=0;for(g=0;g<a-1;++g)d+="    var arg"+g+" = argType"+g+".readValueFromPointer(args"+(m?"+"+m:"")+");\n",m+=b[g+1].argPackAdvance;for(d+="    var rv = handle[name]("+k+");\n",g=0;g<a-1;++g)b[g+1].deleteObject&&(d+="    argType"+g+".deleteObject(arg"+g+");\n");return c.ma||(d+="    return retType.toWireType(destructors, rv);\n"),f.push(d+"};\n"),function(a){var b=gb.length;return gb.push(a),b}(a=Va(f).apply(null,h))},q:function(a,b){return U((a=X(a))[b=X(b)])},g:function(a){4<a&&(T[a].ca+=1)},s:function(){return U([])},c:function(a){return U(fb(a))},p:function(){return U({})},r:function(a){Ha(T[a].value),Ra(a)},d:function(a,b,c){a=X(a),b=X(b),c=X(c),a[b]=c},o:function(a,b){return U(a=(a=db(a,"_emval_take_value")).readValueFromPointer(b))},__memory_base:1024,__table_base:0,b:function(){H()},n:function(){return A.length},E:function(a,b,c){y.set(y.subarray(b,b+c),a)},m:function(){H("OOM")},i:H,memory:w,D:function(){},table:fa},mb=e.asm({},Ba,z);e.asm=mb;var lb=e.__ZSt18uncaught_exceptionv=function(){return e.asm.J.apply(null,arguments)};e.___embind_register_native_and_builtin_types=function(){return e.asm.K.apply(null,arguments)};var Z,ab=e.___getTypeName=function(){return e.asm.L.apply(null,arguments)},W=e._free=function(){return e.asm.M.apply(null,arguments)},kb=e._malloc=function(){return e.asm.N.apply(null,arguments)},Ca=e.globalCtors=function(){return e.asm._.apply(null,arguments)};function ob(){function a(){if(!Z&&(Z=!0,!ha)){if(E(ra),E(sa),e.onRuntimeInitialized&&e.onRuntimeInitialized(),e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;){var a=e.postRun.shift();ta.unshift(a)}E(ta)}}if(!(0<F)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)ua();E(qa),0<F||(e.setStatus?(e.setStatus("Running..."),setTimeout((function(){setTimeout((function(){e.setStatus("")}),1),a()}),1)):a())}}if(e.dynCall_i=function(){return e.asm.O.apply(null,arguments)},e.dynCall_ii=function(){return e.asm.P.apply(null,arguments)},e.dynCall_iii=function(){return e.asm.Q.apply(null,arguments)},e.dynCall_iiii=function(){return e.asm.R.apply(null,arguments)},e.dynCall_iiiii=function(){return e.asm.S.apply(null,arguments)},e.dynCall_jiji=function(){return e.asm.T.apply(null,arguments)},e.dynCall_vi=function(){return e.asm.U.apply(null,arguments)},e.dynCall_vii=function(){return e.asm.V.apply(null,arguments)},e.dynCall_viii=function(){return e.asm.W.apply(null,arguments)},e.dynCall_viiii=function(){return e.asm.X.apply(null,arguments)},e.dynCall_viiiii=function(){return e.asm.Y.apply(null,arguments)},e.dynCall_viiiiii=function(){return e.asm.Z.apply(null,arguments)},e.asm=mb,e.then=function(a){if(Z)a(e);else{var b=e.onRuntimeInitialized;e.onRuntimeInitialized=function(){b&&b(),a(e)}}return e},G=function nb(){Z||ob(),Z||(G=nb)},e.run=ob,e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();return ob(),Module});module.exports=Module}});
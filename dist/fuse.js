/*!
 * Fuse.js v4.0.0-beta - Lightweight fuzzy-search (http://fusejs.io)
 * 
 * Copyright (c) 2012-2017 Kirollos Risk (http://kiro.me)
 * All Rights Reserved. Apache Software License 2.0
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("Fuse",[],e):"object"==typeof exports?exports.Fuse=e():t.Fuse=e()}(this,function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=1)}([function(t,e,r){function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var o=r(2),i=r(3),a=r(6),s=function(){function t(e,r){var n=r.location,o=void 0===n?0:n,i=r.distance,s=void 0===i?100:i,c=r.threshold,u=void 0===c?.6:c,h=r.maxPatternLength,l=void 0===h?32:h,f=r.isCaseSensitive,v=void 0!==f&&f,d=r.tokenSeparator,p=void 0===d?/ +/g:d,y=r.findAllMatches,g=void 0!==y&&y,m=r.minMatchCharLength,b=void 0===m?1:m,x=r.includeMatches,M=void 0!==x&&x;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.options={location:o,distance:s,threshold:u,maxPatternLength:l,isCaseSensitive:v,tokenSeparator:p,findAllMatches:g,includeMatches:M,minMatchCharLength:b},this.pattern=v?e:e.toLowerCase(),this.pattern.length<=l&&(this.patternAlphabet=a(this.pattern))}var e,r,s;return e=t,(r=[{key:"search",value:function(t){var e=this.options,r=e.isCaseSensitive,n=e.includeMatches;if(r||(t=t.toLowerCase()),this.pattern===t){var a={isMatch:!0,score:0};return n&&(a.matchedIndices=[[0,t.length-1]]),a}var s=this.options,c=s.maxPatternLength,u=s.tokenSeparator;if(this.pattern.length>c)return o(t,this.pattern,u);var h=this.options,l=h.location,f=h.distance,v=h.threshold,d=h.findAllMatches,p=h.minMatchCharLength;return i(t,this.pattern,this.patternAlphabet,{location:l,distance:f,threshold:v,findAllMatches:d,minMatchCharLength:p,includeMatches:n})}}])&&n(e.prototype,r),s&&n(e,s),t}();t.exports=s},function(t,e,r){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var i=r(0),a=r(7),s=r(14),c=s.get,u=s.isArray,h=function(){function t(e,r){var n=r.location,o=void 0===n?0:n,i=r.distance,a=void 0===i?100:i,s=r.threshold,u=void 0===s?.6:s,h=r.maxPatternLength,l=void 0===h?32:h,f=r.caseSensitive,v=void 0!==f&&f,d=r.tokenSeparator,p=void 0===d?/ +/g:d,y=r.findAllMatches,g=void 0!==y&&y,m=r.minMatchCharLength,b=void 0===m?1:m,x=r.id,M=void 0===x?null:x,k=r.keys,_=void 0===k?[]:k,S=r.shouldSort,w=void 0===S||S,A=r.getFn,L=void 0===A?c:A,P=r.sortFn,C=void 0===P?function(t,e){return t.score-e.score}:P,O=r.matchAllTokens,F=void 0!==O&&O,j=r.includeMatches,z=void 0!==j&&j,I=r.includeScore,E=void 0!==I&&I,N=r.useExtendedSearch,T=void 0!==N&&N,W=r.verbose,$=void 0!==W&&W;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.options={location:o,distance:a,threshold:u,maxPatternLength:l,isCaseSensitive:v,tokenSeparator:p,findAllMatches:g,minMatchCharLength:b,id:M,keys:_,includeMatches:z,includeScore:E,shouldSort:w,getFn:L,sortFn:C,verbose:$,matchAllTokens:F,useExtendedSearch:T},this.setCollection(e),this._processKeys(_)}var e,r,s;return e=t,(r=[{key:"setCollection",value:function(t){return this.list=t,t}},{key:"_processKeys",value:function(t){if(this._keyWeights={},this._keyNames=[],t.length&&"string"==typeof t[0])for(var e=0,r=t.length;e<r;e+=1){var n=t[e];this._keyWeights[n]=1,this._keyNames.push(n)}else{for(var o=0,i=0,a=t.length;i<a;i+=1){var s=t[i];if(!s.hasOwnProperty("name"))throw new Error('Missing "name" property in key object');var c=s.name;if(this._keyNames.push(c),!s.hasOwnProperty("weight"))throw new Error('Missing "weight" property in key object');var u=s.weight;if(this._keyWeights[c]=u,u<0||u>1)throw new Error('"weight" property in key must bein the range of [0, 1)');o+=u}if(o>1)throw new Error("Total of weights cannot exceed 1")}}},{key:"search",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{limit:!1};this._log('---------\nSearch pattern: "'.concat(t,'"'));var r=this.options,n=null;n=this.options.useExtendedSearch?new a(t,r):new i(t,r);var o=this._search(n);return this._computeScore(o),this.options.shouldSort&&this._sort(o),e.limit&&"number"==typeof e.limit&&(o=o.slice(0,e.limit)),this._format(o)}},{key:"_search",value:function(t){var e=this.list,r={},n=[];if("string"==typeof e[0]){for(var o=0,i=e.length;o<i;o+=1)this._analyze({key:"",value:e[o],record:o,index:o},{resultMap:r,results:n,searcher:t});return n}for(var a=0,s=e.length;a<s;a+=1)for(var c=e[a],u=0,h=this._keyNames.length;u<h;u+=1){var l=this._keyNames[u];this._analyze({key:l,value:this.options.getFn(c,l),record:c,index:a},{resultMap:r,results:n,searcher:t})}return n}},{key:"_analyze",value:function(t,e){var r=this,n=t.key,o=t.arrayIndex,i=void 0===o?-1:o,a=t.value,s=t.record,c=t.index,h=e.searcher,l=e.resultMap,f=void 0===l?{}:l,v=e.results,d=void 0===v?[]:v;!function t(e,o,i,a){if(null!=o)if("string"==typeof o){r._log("\nKey: ".concat(""===n?"--":n));var s=h.search(o);r._log('Full text: "'.concat(o,'", score: ').concat(s.score));var c=s.score;if(r._log("Score average:",c),s.isMatch){var l={key:n,arrayIndex:e,value:o,score:c};r.options.includeMatches&&(l.matchedIndices=s.matchedIndices);var v=f[a];v?v.output.push(l):(f[a]={item:i,output:[l]},d.push(f[a]))}}else if(u(o))for(var p=0,y=o.length;p<y;p+=1)t(p,o[p],i,a)}(i,a,s,c)}},{key:"_computeScore",value:function(t){this._log("\n\nComputing score:\n");for(var e=this._keyWeights,r=!!Object.keys(e).length,n=0,o=t.length;n<o;n+=1){for(var i=t[n],a=i.output,s=a.length,c=1,u=-1,h=0;h<s;h+=1){var l=a[h],f=l.key,v=r?e[f]:1,d=0===l.score&&e&&e[f]>0?Number.EPSILON:l.score;u=-1==u?l.score:Math.min(u,l.score),c*=Math.pow(d,v)}i.score=c,i.$score=u,this._log(i)}}},{key:"_sort",value:function(t){this._log("\n\nSorting...."),t.sort(this.options.sortFn)}},{key:"_format",value:function(t){var e=[];if(this.options.verbose){var r=[];this._log("\n\nOutput:\n\n",JSON.stringify(t,function(t,e){if("object"===n(e)&&null!==e){if(-1!==r.indexOf(e))return;r.push(e)}return e},2)),r=null}var o=[];this.options.includeMatches&&o.push(function(t,e){var r=t.output;e.matches=[];for(var n=0,o=r.length;n<o;n+=1){var i=r[n];if(0!==i.matchedIndices.length){var a={indices:i.matchedIndices,value:i.value};i.key&&(a.key=i.key),i.hasOwnProperty("arrayIndex")&&i.arrayIndex>-1&&(a.arrayIndex=i.arrayIndex),e.matches.push(a)}}}),this.options.includeScore&&o.push(function(t,e){e.score=t.score});for(var i=0,a=t.length;i<a;i+=1){var s=t[i];if(this.options.id&&(s.item=this.options.getFn(s.item,this.options.id)[0]),o.length){for(var c={item:s.item},u=0,h=o.length;u<h;u+=1)o[u](s,c);e.push(c)}else e.push(s.item)}return e}},{key:"_log",value:function(){var t;this.options.verbose&&(t=console).log.apply(t,arguments)}}])&&o(e.prototype,r),s&&o(e,s),t}();t.exports=h},function(t,e){var r=/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;t.exports=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:/ +/g,o=new RegExp(e.replace(r,"\\$&").replace(n,"|")),i=t.match(o),a=!!i,s=[];if(a)for(var c=0,u=i.length;c<u;c+=1){var h=i[c];s.push([t.indexOf(h),h.length-1])}return{score:a?.5:1,isMatch:a,matchedIndices:s}}},function(t,e,r){var n=r(4),o=r(5);t.exports=function(t,e,r,i){for(var a=i.location,s=void 0===a?0:a,c=i.distance,u=void 0===c?100:c,h=i.threshold,l=void 0===h?.6:h,f=i.findAllMatches,v=void 0!==f&&f,d=i.minMatchCharLength,p=void 0===d?1:d,y=i.includeMatches,g=void 0!==y&&y,m=s,b=t.length,x=l,M=t.indexOf(e,m),k=e.length,_=[],S=0;S<b;S+=1)_[S]=0;if(-1!==M){var w=n(e,{errors:0,currentLocation:M,expectedLocation:m,distance:u});if(x=Math.min(w,x),-1!==(M=t.lastIndexOf(e,m+k))){var A=n(e,{errors:0,currentLocation:M,expectedLocation:m,distance:u});x=Math.min(A,x)}}M=-1;for(var L=[],P=1,C=k+b,O=1<<(k<=31?k-1:30),F=0;F<k;F+=1){for(var j=0,z=C;j<z;){n(e,{errors:F,currentLocation:m+z,expectedLocation:m,distance:u})<=x?j=z:C=z,z=Math.floor((C-j)/2+j)}C=z;var I=Math.max(1,m-z+1),E=v?b:Math.min(m+z,b)+k,N=Array(E+2);N[E+1]=(1<<F)-1;for(var T=E;T>=I;T-=1){var W=T-1,$=r[t.charAt(W)];if($&&(_[W]=1),N[T]=(N[T+1]<<1|1)&$,0!==F&&(N[T]|=(L[T+1]|L[T])<<1|1|L[T+1]),N[T]&O&&(P=n(e,{errors:F,currentLocation:W,expectedLocation:m,distance:u}))<=x){if(x=P,(M=W)<=m)break;I=Math.max(1,2*m-M)}}if(n(e,{errors:F+1,currentLocation:m,expectedLocation:m,distance:u})>x)break;L=N}var K={isMatch:M>=0,score:0===P?.001:P};return g&&(K.matchedIndices=o(_,p)),K}},function(t,e){t.exports=function(t,e){var r=e.errors,n=void 0===r?0:r,o=e.currentLocation,i=void 0===o?0:o,a=e.expectedLocation,s=void 0===a?0:a,c=e.distance,u=void 0===c?100:c,h=n/t.length,l=Math.abs(s-i);return u?h+l/u:l?1:h}},function(t,e){t.exports=function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=[],n=-1,o=-1,i=0,a=t.length;i<a;i+=1){var s=t[i];s&&-1===n?n=i:s||-1===n||((o=i-1)-n+1>=e&&r.push([n,o]),n=-1)}return t[i-1]&&i-n>=e&&r.push([n,i-1]),r}},function(t,e){t.exports=function(t){for(var e={},r=t.length,n=0;n<r;n+=1)e[t.charAt(n)]=0;for(var o=0;o<r;o+=1)e[t.charAt(o)]|=1<<r-o-1;return e}},function(t,e,r){function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var o=r(8),i=r(9),a=r(10),s=r(11),c=r(12),u=r(13),h=r(0),l=function(t){return t.split("|").map(function(t){return t.trim().split(/ +/g)})},f=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var n=r.isCaseSensitive;this.options=r,this.pattern=n?e:e.toLowerCase(),this.query=l(this.pattern),this._fuzzyCache={}}var e,r,f;return e=t,(r=[{key:"search",value:function(t){var e=this.query;t=this.options.isCaseSensitive?t:t.toLowerCase();for(var r=!1,n=0,o=e.length;n<o;n+=1){var i=e[n],a=null;r=!0;for(var s=0,c=i.length;s<c;s+=1){var u=i[s];if(!(a=this._search(u,t)).isMatch){r=!1;break}}if(r)return a}return{isMatch:!1,score:1}}},{key:"_search",value:function(t,e){if(o.isForPattern(t))return o.match(t,e);if(a.isForPattern(t))return a.match(t,e);if(s.isForPattern(t))return s.match(t,e);if(u.isForPattern(t))return u.match(t,e);if(c.isForPattern(t))return c.match(t,e);if(i.isForPattern(t))return i.match(t,e);var r=this._fuzzyCache[t];return r||(r=new h(t,this.options),this._fuzzyCache[t]=r),r.search(e)}}])&&n(e.prototype,r),f&&n(e,f),t}();t.exports=f},function(t,e){var r=function(t){return t.substr(1)};t.exports={isForPattern:function(t){return"'"==t.charAt(0)},sanitize:r,match:function(t,e){var n=r(t);return{isMatch:e.indexOf(n)>-1,score:0}}}},function(t,e){var r=function(t){return t.substr(1)};t.exports={isForPattern:function(t){return"!"==t.charAt(0)},sanitize:r,match:function(t,e){var n=r(t);return{isMatch:-1===e.indexOf(n),score:0}}}},function(t,e){var r=function(t){return t.substr(1)};t.exports={isForPattern:function(t){return"^"==t.charAt(0)},sanitize:r,match:function(t,e){var n=r(t);return{isMatch:e.startsWith(n),score:0}}}},function(t,e){var r=function(t){return t.substr(2)};t.exports={isForPattern:function(t){return"!"==t.charAt(0)&&"^"==t.charAt(1)},sanitize:r,match:function(t,e){var n=r(t);return{isMatch:!e.startsWith(n),score:0}}}},function(t,e){var r=function(t){return t.substr(0,t.length-1)};t.exports={isForPattern:function(t){return"$"==t.charAt(t.length-1)},sanitize:r,match:function(t,e){var n=r(t);return{isMatch:e.endsWith(n),score:0}}}},function(t,e){var r=function(t){return t.substring(1,t.length-1)};t.exports={isForPattern:function(t){return"!"==t.charAt(0)&&"$"==t.charAt(t.length-1)},sanitize:r,match:function(t,e){var n=r(t);return{isMatch:!e.endsWith(n),score:0}}}},function(t,e){var r=function(t){return Array.isArray?Array.isArray(t):"[object Array]"===Object.prototype.toString.call(t)},n=function(t){return null==t?"":function(t){if("string"==typeof t)return t;var e=t+"";return"0"==e&&1/t==-1/0?"-0":e}(t)},o=function(t){return"string"==typeof t},i=function(t){return"number"==typeof t};t.exports={get:function(t,e){var a=[];return function t(e,s){if(s){var c=s.indexOf("."),u=s,h=null;-1!==c&&(u=s.slice(0,c),h=s.slice(c+1));var l=e[u];if(null!=l)if(h||!o(l)&&!i(l))if(r(l))for(var f=0,v=l.length;f<v;f+=1)t(l[f],h);else h&&t(l,h);else a.push(n(l))}else a.push(e)}(t,e),a},isArray:r,isString:o,isNum:i,toString:n}}])});
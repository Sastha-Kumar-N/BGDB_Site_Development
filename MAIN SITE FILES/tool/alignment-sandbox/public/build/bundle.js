var app=function(){"use strict";function t(){}function n(t){return t()}function l(){return Object.create(null)}function e(t){t.forEach(n)}function a(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function s(t,n){t.appendChild(n)}function i(t,n,l){t.insertBefore(n,l||null)}function o(t){t.parentNode.removeChild(t)}function m(t){return document.createElement(t)}function u(t){return document.createTextNode(t)}function r(){return u(" ")}function b(t,n,l,e){return t.addEventListener(n,l,e),()=>t.removeEventListener(n,l,e)}function p(t,n,l){null==l?t.removeAttribute(n):t.getAttribute(n)!==l&&t.setAttribute(n,l)}function h(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function Z(t,n){t.value=null==n?"":n}function G(t,n,l,e){null===l?t.style.removeProperty(n):t.style.setProperty(n,l,e?"important":"")}let y;function g(t){y=t}function W(){if(!y)throw new Error("Function called outside component initialization");return y}function f(){const t=W();return(n,l,{cancelable:e=!1}={})=>{const a=t.$$.callbacks[n];if(a){const c=function(t,n,{bubbles:l=!1,cancelable:e=!1}={}){const a=document.createEvent("CustomEvent");return a.initCustomEvent(t,l,e,n),a}(n,l,{cancelable:e});return a.slice().forEach((n=>{n.call(t,c)})),!c.defaultPrevented}return!0}}const X=[],L=[],v=[],Y=[],R=Promise.resolve();let S=!1;function x(t){v.push(t)}function H(t){Y.push(t)}const k=new Set;let V=0;function C(){const t=y;do{for(;V<X.length;){const t=X[V];V++,g(t),I(t.$$)}for(g(null),X.length=0,V=0;L.length;)L.pop()();for(let t=0;t<v.length;t+=1){const n=v[t];k.has(n)||(k.add(n),n())}v.length=0}while(X.length);for(;Y.length;)Y.pop()();S=!1,k.clear(),g(t)}function I(t){if(null!==t.fragment){t.update(),e(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(x)}}const K=new Set;function w(t,n){t&&t.i&&(K.delete(t),t.i(n))}function N(t,n,l,e){if(t&&t.o){if(K.has(t))return;K.add(t),undefined.c.push((()=>{K.delete(t),e&&(l&&t.d(1),e())})),t.o(n)}else e&&e()}function J(t,n,l){const e=t.$$.props[n];void 0!==e&&(t.$$.bound[e]=l,l(t.$$.ctx[e]))}function U(t){t&&t.c()}function z(t,l,c,s){const{fragment:i,on_mount:o,on_destroy:m,after_update:u}=t.$$;i&&i.m(l,c),s||x((()=>{const l=o.map(n).filter(a);m?m.push(...l):e(l),t.$$.on_mount=[]})),u.forEach(x)}function T(t,n){const l=t.$$;null!==l.fragment&&(e(l.on_destroy),l.fragment&&l.fragment.d(n),l.on_destroy=l.fragment=null,l.ctx=[])}function F(t,n){-1===t.$$.dirty[0]&&(X.push(t),S||(S=!0,R.then(C)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function $(n,a,c,s,i,m,u,d=[-1]){const r=y;g(n);const b=n.$$={fragment:null,ctx:null,props:m,update:t,not_equal:i,bound:l(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(a.context||(r?r.$$.context:[])),callbacks:l(),dirty:d,skip_bound:!1,root:a.target||r.$$.root};u&&u(b.root);let p=!1;if(b.ctx=c?c(n,a.props||{},((t,l,...e)=>{const a=e.length?e[0]:l;return b.ctx&&i(b.ctx[t],b.ctx[t]=a)&&(!b.skip_bound&&b.bound[t]&&b.bound[t](a),p&&F(n,t)),l})):[],b.update(),p=!0,e(b.before_update),b.fragment=!!s&&s(b.ctx),a.target){if(a.hydrate){const t=function(t){return Array.from(t.childNodes)}(a.target);b.fragment&&b.fragment.l(t),t.forEach(o)}else b.fragment&&b.fragment.c();a.intro&&w(n.$$.fragment),z(n,a.target,a.anchor,a.customElement),C()}g(r)}class j{$destroy(){T(this,1),this.$destroy=t}$on(t,n){const l=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return l.push(n),()=>{const t=l.indexOf(n);-1!==t&&l.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const B=Symbol("Comlink.proxy"),Q=Symbol("Comlink.endpoint"),M=Symbol("Comlink.releaseProxy"),P=Symbol("Comlink.thrown"),E=t=>"object"==typeof t&&null!==t||"function"==typeof t,O=new Map([["proxy",{canHandle:t=>E(t)&&t[B],serialize(t){const{port1:n,port2:l}=new MessageChannel;return A(t,n),[l,[l]]},deserialize:t=>(t.start(),_(t))}],["throw",{canHandle:t=>E(t)&&P in t,serialize({value:t}){let n;return n=t instanceof Error?{isError:!0,value:{message:t.message,name:t.name,stack:t.stack}}:{isError:!1,value:t},[n,[]]},deserialize(t){throw t.isError?Object.assign(new Error(t.value.message),t.value):t.value}}]]);function A(t,n=self){n.addEventListener("message",(function l(e){if(!e||!e.data)return;const{id:a,type:c,path:s}=Object.assign({path:[]},e.data),i=(e.data.argumentList||[]).map(ct);let o;try{const n=s.slice(0,-1).reduce(((t,n)=>t[n]),t),l=s.reduce(((t,n)=>t[n]),t);switch(c){case"GET":o=l;break;case"SET":n[s.slice(-1)[0]]=ct(e.data.value),o=!0;break;case"APPLY":o=l.apply(n,i);break;case"CONSTRUCT":o=function(t){return Object.assign(t,{[B]:!0})}(new l(...i));break;case"ENDPOINT":{const{port1:n,port2:l}=new MessageChannel;A(t,l),o=function(t,n){return et.set(t,n),t}(n,[n])}break;case"RELEASE":o=void 0;break;default:return}}catch(t){o={value:t,[P]:0}}Promise.resolve(o).catch((t=>({value:t,[P]:0}))).then((t=>{const[e,s]=at(t);n.postMessage(Object.assign(Object.assign({},e),{id:a}),s),"RELEASE"===c&&(n.removeEventListener("message",l),D(n))}))})),n.start&&n.start()}function D(t){(function(t){return"MessagePort"===t.constructor.name})(t)&&t.close()}function _(t,n){return tt(t,[],n)}function q(t){if(t)throw new Error("Proxy has been released and is not useable")}function tt(t,n=[],l=function(){}){let e=!1;const a=new Proxy(l,{get(l,c){if(q(e),c===M)return()=>st(t,{type:"RELEASE",path:n.map((t=>t.toString()))}).then((()=>{D(t),e=!0}));if("then"===c){if(0===n.length)return{then:()=>a};const l=st(t,{type:"GET",path:n.map((t=>t.toString()))}).then(ct);return l.then.bind(l)}return tt(t,[...n,c])},set(l,a,c){q(e);const[s,i]=at(c);return st(t,{type:"SET",path:[...n,a].map((t=>t.toString())),value:s},i).then(ct)},apply(l,a,c){q(e);const s=n[n.length-1];if(s===Q)return st(t,{type:"ENDPOINT"}).then(ct);if("bind"===s)return tt(t,n.slice(0,-1));const[i,o]=lt(c);return st(t,{type:"APPLY",path:n.map((t=>t.toString())),argumentList:i},o).then(ct)},construct(l,a){q(e);const[c,s]=lt(a);return st(t,{type:"CONSTRUCT",path:n.map((t=>t.toString())),argumentList:c},s).then(ct)}});return a}function nt(t){return Array.prototype.concat.apply([],t)}function lt(t){const n=t.map(at);return[n.map((t=>t[0])),nt(n.map((t=>t[1])))]}const et=new WeakMap;function at(t){for(const[n,l]of O)if(l.canHandle(t)){const[e,a]=l.serialize(t);return[{type:"HANDLER",name:n,value:e},a]}return[{type:"RAW",value:t},et.get(t)||[]]}function ct(t){switch(t.type){case"HANDLER":return O.get(t.name).deserialize(t.value);case"RAW":return t.value}}function st(t,n,l){return new Promise((e=>{const a=new Array(4).fill(0).map((()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16))).join("-");t.addEventListener("message",(function n(l){!l.data||!l.data.id||l.data.id!==a||(t.removeEventListener("message",n),e(l.data))})),t.start&&t.start(),t.postMessage(Object.assign({id:a},n),l)}))}const it="KGZ1bmN0aW9uKCl7InVzZSBzdHJpY3QiO2NvbnN0ICQ9U3ltYm9sKCJDb21saW5rLnByb3h5IiksQT1TeW1ib2woIkNvbWxpbmsuZW5kcG9pbnQiKSxSPVN5bWJvbCgiQ29tbGluay5yZWxlYXNlUHJveHkiKSx5PVN5bWJvbCgiQ29tbGluay50aHJvd24iKSxfPWU9PnR5cGVvZiBlPT0ib2JqZWN0IiYmZSE9PW51bGx8fHR5cGVvZiBlPT0iZnVuY3Rpb24iLEw9e2NhbkhhbmRsZTplPT5fKGUpJiZlWyRdLHNlcmlhbGl6ZShlKXtjb25zdHtwb3J0MTpyLHBvcnQyOml9PW5ldyBNZXNzYWdlQ2hhbm5lbDtyZXR1cm4gYihlLHIpLFtpLFtpXV19LGRlc2VyaWFsaXplKGUpe3JldHVybiBlLnN0YXJ0KCksQyhlKX19LE89e2NhbkhhbmRsZTplPT5fKGUpJiZ5IGluIGUsc2VyaWFsaXplKHt2YWx1ZTplfSl7bGV0IHI7cmV0dXJuIGUgaW5zdGFuY2VvZiBFcnJvcj9yPXtpc0Vycm9yOiEwLHZhbHVlOnttZXNzYWdlOmUubWVzc2FnZSxuYW1lOmUubmFtZSxzdGFjazplLnN0YWNrfX06cj17aXNFcnJvcjohMSx2YWx1ZTplfSxbcixbXV19LGRlc2VyaWFsaXplKGUpe3Rocm93IGUuaXNFcnJvcj9PYmplY3QuYXNzaWduKG5ldyBFcnJvcihlLnZhbHVlLm1lc3NhZ2UpLGUudmFsdWUpOmUudmFsdWV9fSxFPW5ldyBNYXAoW1sicHJveHkiLExdLFsidGhyb3ciLE9dXSk7ZnVuY3Rpb24gYihlLHI9c2VsZil7ci5hZGRFdmVudExpc3RlbmVyKCJtZXNzYWdlIixmdW5jdGlvbiBpKHMpe2lmKCFzfHwhcy5kYXRhKXJldHVybjtjb25zdHtpZDpvLHR5cGU6YSxwYXRoOm59PU9iamVjdC5hc3NpZ24oe3BhdGg6W119LHMuZGF0YSksdT0ocy5kYXRhLmFyZ3VtZW50TGlzdHx8W10pLm1hcChtKTtsZXQgbDt0cnl7Y29uc3QgYz1uLnNsaWNlKDAsLTEpLnJlZHVjZSgoZCxoKT0+ZFtoXSxlKSxmPW4ucmVkdWNlKChkLGgpPT5kW2hdLGUpO3N3aXRjaChhKXtjYXNlIkdFVCI6bD1mO2JyZWFrO2Nhc2UiU0VUIjpjW24uc2xpY2UoLTEpWzBdXT1tKHMuZGF0YS52YWx1ZSksbD0hMDticmVhaztjYXNlIkFQUExZIjpsPWYuYXBwbHkoYyx1KTticmVhaztjYXNlIkNPTlNUUlVDVCI6e2NvbnN0IGQ9bmV3IGYoLi4udSk7bD16KGQpfWJyZWFrO2Nhc2UiRU5EUE9JTlQiOntjb25zdHtwb3J0MTpkLHBvcnQyOmh9PW5ldyBNZXNzYWdlQ2hhbm5lbDtiKGUsaCksbD1OKGQsW2RdKX1icmVhaztjYXNlIlJFTEVBU0UiOmw9dm9pZCAwO2JyZWFrO2RlZmF1bHQ6cmV0dXJufX1jYXRjaChjKXtsPXt2YWx1ZTpjLFt5XTowfX1Qcm9taXNlLnJlc29sdmUobCkuY2F0Y2goYz0+KHt2YWx1ZTpjLFt5XTowfSkpLnRoZW4oYz0+e2NvbnN0W2YsZF09UyhjKTtyLnBvc3RNZXNzYWdlKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSxmKSx7aWQ6b30pLGQpLGE9PT0iUkVMRUFTRSImJihyLnJlbW92ZUV2ZW50TGlzdGVuZXIoIm1lc3NhZ2UiLGkpLE0ocikpfSl9KSxyLnN0YXJ0JiZyLnN0YXJ0KCl9ZnVuY3Rpb24gVChlKXtyZXR1cm4gZS5jb25zdHJ1Y3Rvci5uYW1lPT09Ik1lc3NhZ2VQb3J0In1mdW5jdGlvbiBNKGUpe1QoZSkmJmUuY2xvc2UoKX1mdW5jdGlvbiBDKGUscil7cmV0dXJuIHcoZSxbXSxyKX1mdW5jdGlvbiBwKGUpe2lmKGUpdGhyb3cgbmV3IEVycm9yKCJQcm94eSBoYXMgYmVlbiByZWxlYXNlZCBhbmQgaXMgbm90IHVzZWFibGUiKX1mdW5jdGlvbiB3KGUscj1bXSxpPWZ1bmN0aW9uKCl7fSl7bGV0IHM9ITE7Y29uc3Qgbz1uZXcgUHJveHkoaSx7Z2V0KGEsbil7aWYocChzKSxuPT09UilyZXR1cm4oKT0+ZyhlLHt0eXBlOiJSRUxFQVNFIixwYXRoOnIubWFwKHU9PnUudG9TdHJpbmcoKSl9KS50aGVuKCgpPT57TShlKSxzPSEwfSk7aWYobj09PSJ0aGVuIil7aWYoci5sZW5ndGg9PT0wKXJldHVybnt0aGVuOigpPT5vfTtjb25zdCB1PWcoZSx7dHlwZToiR0VUIixwYXRoOnIubWFwKGw9PmwudG9TdHJpbmcoKSl9KS50aGVuKG0pO3JldHVybiB1LnRoZW4uYmluZCh1KX1yZXR1cm4gdyhlLFsuLi5yLG5dKX0sc2V0KGEsbix1KXtwKHMpO2NvbnN0W2wsY109Uyh1KTtyZXR1cm4gZyhlLHt0eXBlOiJTRVQiLHBhdGg6Wy4uLnIsbl0ubWFwKGY9PmYudG9TdHJpbmcoKSksdmFsdWU6bH0sYykudGhlbihtKX0sYXBwbHkoYSxuLHUpe3Aocyk7Y29uc3QgbD1yW3IubGVuZ3RoLTFdO2lmKGw9PT1BKXJldHVybiBnKGUse3R5cGU6IkVORFBPSU5UIn0pLnRoZW4obSk7aWYobD09PSJiaW5kIilyZXR1cm4gdyhlLHIuc2xpY2UoMCwtMSkpO2NvbnN0W2MsZl09UCh1KTtyZXR1cm4gZyhlLHt0eXBlOiJBUFBMWSIscGF0aDpyLm1hcChkPT5kLnRvU3RyaW5nKCkpLGFyZ3VtZW50TGlzdDpjfSxmKS50aGVuKG0pfSxjb25zdHJ1Y3QoYSxuKXtwKHMpO2NvbnN0W3UsbF09UChuKTtyZXR1cm4gZyhlLHt0eXBlOiJDT05TVFJVQ1QiLHBhdGg6ci5tYXAoYz0+Yy50b1N0cmluZygpKSxhcmd1bWVudExpc3Q6dX0sbCkudGhlbihtKX19KTtyZXR1cm4gb31mdW5jdGlvbiBEKGUpe3JldHVybiBBcnJheS5wcm90b3R5cGUuY29uY2F0LmFwcGx5KFtdLGUpfWZ1bmN0aW9uIFAoZSl7Y29uc3Qgcj1lLm1hcChTKTtyZXR1cm5bci5tYXAoaT0+aVswXSksRChyLm1hcChpPT5pWzFdKSldfWNvbnN0IEY9bmV3IFdlYWtNYXA7ZnVuY3Rpb24gTihlLHIpe3JldHVybiBGLnNldChlLHIpLGV9ZnVuY3Rpb24geihlKXtyZXR1cm4gT2JqZWN0LmFzc2lnbihlLHtbJF06ITB9KX1mdW5jdGlvbiBTKGUpe2Zvcihjb25zdFtyLGldb2YgRSlpZihpLmNhbkhhbmRsZShlKSl7Y29uc3RbcyxvXT1pLnNlcmlhbGl6ZShlKTtyZXR1cm5be3R5cGU6IkhBTkRMRVIiLG5hbWU6cix2YWx1ZTpzfSxvXX1yZXR1cm5be3R5cGU6IlJBVyIsdmFsdWU6ZX0sRi5nZXQoZSl8fFtdXX1mdW5jdGlvbiBtKGUpe3N3aXRjaChlLnR5cGUpe2Nhc2UiSEFORExFUiI6cmV0dXJuIEUuZ2V0KGUubmFtZSkuZGVzZXJpYWxpemUoZS52YWx1ZSk7Y2FzZSJSQVciOnJldHVybiBlLnZhbHVlfX1mdW5jdGlvbiBnKGUscixpKXtyZXR1cm4gbmV3IFByb21pc2Uocz0+e2NvbnN0IG89VygpO2UuYWRkRXZlbnRMaXN0ZW5lcigibWVzc2FnZSIsZnVuY3Rpb24gYShuKXshbi5kYXRhfHwhbi5kYXRhLmlkfHxuLmRhdGEuaWQhPT1vfHwoZS5yZW1vdmVFdmVudExpc3RlbmVyKCJtZXNzYWdlIixhKSxzKG4uZGF0YSkpfSksZS5zdGFydCYmZS5zdGFydCgpLGUucG9zdE1lc3NhZ2UoT2JqZWN0LmFzc2lnbih7aWQ6b30sciksaSl9KX1mdW5jdGlvbiBXKCl7cmV0dXJuIG5ldyBBcnJheSg0KS5maWxsKDApLm1hcCgoKT0+TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKk51bWJlci5NQVhfU0FGRV9JTlRFR0VSKS50b1N0cmluZygxNikpLmpvaW4oIi0iKX1jb25zdCBqPWFzeW5jKCk9PldlYkFzc2VtYmx5LnZhbGlkYXRlKG5ldyBVaW50OEFycmF5KFswLDk3LDExNSwxMDksMSwwLDAsMCwxLDUsMSw5NiwwLDEsMTIzLDMsMiwxLDAsMTAsMTAsMSw4LDAsNjUsMCwyNTMsMTUsMjUzLDk4LDExXSkpLHg9ImVhZ2VyIixrPSJsYXp5IixJPXtzc3c6WyJzaW1kIl0sbWluaW1hcDI6WyJzaW1kIl19LHQ9e3Rvb2xzOltdLGNvbmZpZzp7fSxmaWxlczpbXSxiYXNlOnt9LGZzOnt9LGFzeW5jIGluaXQoKXtpZih0LnRvb2xzLmxlbmd0aD09PTApdGhyb3ciRXhwZWN0aW5nIGF0IGxlYXN0IDEgdG9vbC4iO2lmKHQuYmFzZT10LnRvb2xzLmZpbmQoZT0+ZS5yZWluaXQhPT0hMCksIXQuYmFzZSl0aHJvdyJDb3VsZCBub3QgZmluZCBhIHRvb2wgd2l0aCBgcmVpbml0OiBmYWxzZWAgdG8gdXNlIGFzIHRoZSBiYXNlIG1vZHVsZS4gVG8gZml4IHRoaXMgaXNzdWUsIGluY2x1ZGUgdGhlIHRvb2wgYGJhc2UvMS4wLjBgIHdoZW4gaW5pdGlhbGl6aW5nIEFpb2xpLiI7cmV0dXJuIHQuYmFzZS5pc0Jhc2VNb2R1bGU9ITAsYXdhaXQgdGhpcy5fc2V0dXAodC5iYXNlKSxhd2FpdCB0aGlzLl9pbml0TW9kdWxlcygpLHQuX2xvZygiUmVhZHkiKSwhMH0sYXN5bmMgX2luaXRNb2R1bGVzKCl7YXdhaXQgUHJvbWlzZS5hbGwodC50b29scy5tYXAodGhpcy5fc2V0dXApKSxhd2FpdCB0aGlzLl9zZXR1cEZTKCl9LG1vdW50KGU9W10pe2NvbnN0IHI9YCR7dC5jb25maWcuZGlyU2hhcmVkfSR7dC5jb25maWcuZGlyRGF0YX1gLGk9YCR7dC5jb25maWcuZGlyU2hhcmVkfSR7dC5jb25maWcuZGlyTW91bnRlZH1gO2xldCBzPVtdLG89W10sYT1bXTshQXJyYXkuaXNBcnJheShlKSYmIShlIGluc3RhbmNlb2YgRmlsZUxpc3QpJiYoZT1bZV0pLHQuX2xvZyhgTW91bnRpbmcgJHtlLmxlbmd0aH0gZmlsZXNgKTtmb3IobGV0IG4gb2YgZSl7aWYobiBpbnN0YW5jZW9mIEZpbGV8fChuPT1udWxsP3ZvaWQgMDpuLmRhdGEpaW5zdGFuY2VvZiBCbG9iJiZuLm5hbWV8fHR5cGVvZihuPT1udWxsP3ZvaWQgMDpuLmRhdGEpPT0ic3RyaW5nIiYmbi5uYW1lKXR5cGVvZihuPT1udWxsP3ZvaWQgMDpuLmRhdGEpPT0ic3RyaW5nIiYmKG4uZGF0YT1uZXcgQmxvYihbbi5kYXRhXSx7dHlwZToidGV4dC9wbGFpbiJ9KSkscy5wdXNoKG4pLGEucHVzaChuLm5hbWUpO2Vsc2UgaWYobi5uYW1lJiZuLnVybClvLnB1c2gobik7ZWxzZSBpZih0eXBlb2Ygbj09InN0cmluZyImJm4uc3RhcnRzV2l0aCgiaHR0cCIpKW49e3VybDpuLG5hbWU6bi5zcGxpdCgiLy8iKS5wb3AoKS5yZXBsYWNlKC9cLy9nLCItIil9LG8ucHVzaChuKTtlbHNlIHRocm93J0Nhbm5vdCBtb3VudCBmaWxlKHMpIHNwZWNpZmllZC4gTXVzdCBiZSBhIEZpbGUsIEJsb2IsIGEgVVJMIHN0cmluZywgb3IgeyBuYW1lOiAiZmlsZS50eHQiLCBkYXRhOiAic3RyaW5nIiB9Lic7YS5wdXNoKG4ubmFtZSl9dHJ5e3QuZnMudW5tb3VudChpKX1jYXRjaHt9Zm9yKGxldCBuIG9mIG8pdC5mcy5jcmVhdGVMYXp5RmlsZShyLG4ubmFtZSxuLnVybCwhMCwhMCk7cmV0dXJuIHQuZmlsZXM9dC5maWxlcy5jb25jYXQocyksdC5iYXNlLm1vZHVsZS5GUy5tb3VudCh0LmJhc2UubW9kdWxlLldPUktFUkZTLHtmaWxlczp0LmZpbGVzLmZpbHRlcihuPT5uIGluc3RhbmNlb2YgRmlsZSksYmxvYnM6dC5maWxlcy5maWx0ZXIobj0+KG49PW51bGw/dm9pZCAwOm4uZGF0YSlpbnN0YW5jZW9mIEJsb2IpfSxpKSxzLm1hcChuPT57Y29uc3QgdT1gJHtpfS8ke24ubmFtZX1gLGw9YCR7cn0vJHtuLm5hbWV9YDt0cnl7dC5mcy51bmxpbmsobCl9Y2F0Y2h7fXQuX2xvZyhgQ3JlYXRpbmcgc3ltbGluazogJHtsfSAtLT4gJHt1fWApLHQuZnMuc3ltbGluayh1LGwpfSksYS5tYXAobj0+YCR7cn0vJHtufWApfSxhc3luYyBleGVjKGUscj1udWxsKXtpZih0Ll9sb2coYEV4ZWN1dGluZyAlYyR7ZX0lYyBhcmdzPSR7cn1gLCJjb2xvcjpkYXJrYmx1ZTsgZm9udC13ZWlnaHQ6Ym9sZCIsIiIpLCFlKXRocm93IkV4cGVjdGluZyBhIGNvbW1hbmQiO2xldCBpPWU7cj09bnVsbCYmKHI9ZS5zcGxpdCgiICIpLGk9ci5zaGlmdCgpKTtjb25zdCBzPXQudG9vbHMuZmluZChhPT57dmFyIHU7bGV0IG49aTtyZXR1cm4oKHU9YT09bnVsbD92b2lkIDA6YS5mZWF0dXJlcyk9PW51bGw/dm9pZCAwOnUuc2ltZCk9PT0hMCYmKG49YCR7bn0tc2ltZGApLGEucHJvZ3JhbT09bn0pO2lmKHM9PW51bGwpdGhyb3dgUHJvZ3JhbSAke2l9IG5vdCBmb3VuZC5gO3Muc3Rkb3V0PSIiLHMuc3RkZXJyPSIiLHMubG9hZGluZz09ayYmKHMubG9hZGluZz14LGF3YWl0IHRoaXMuX2luaXRNb2R1bGVzKCkpO3RyeXtzLm1vZHVsZS5jYWxsTWFpbihyKX1jYXRjaChhKXtjb25zb2xlLmVycm9yKGEpfXRyeXtzLm1vZHVsZS5GUy5jbG9zZShzLm1vZHVsZS5GUy5zdHJlYW1zWzFdKSxzLm1vZHVsZS5GUy5jbG9zZShzLm1vZHVsZS5GUy5zdHJlYW1zWzJdKX1jYXRjaHt9cy5tb2R1bGUuRlMuc3RyZWFtc1sxXT1zLm1vZHVsZS5GUy5vcGVuKCIvZGV2L3N0ZG91dCIsInciKSxzLm1vZHVsZS5GUy5zdHJlYW1zWzJdPXMubW9kdWxlLkZTLm9wZW4oIi9kZXYvc3RkZXJyIiwidyIpO2xldCBvPXtzdGRvdXQ6cy5zdGRvdXQsc3RkZXJyOnMuc3RkZXJyfTtpZih0LmNvbmZpZy5wcmludEludGVybGVhdmVkJiYobz1zLnN0ZG91dCkscy5yZWluaXQ9PT0hMCl7Y29uc3QgYT10LmJhc2UubW9kdWxlLkZTLmN3ZCgpO09iamVjdC5hc3NpZ24ocyxzLmNvbmZpZykscy5yZWFkeT0hMSxhd2FpdCB0aGlzLmluaXQoKSxzLmlzQmFzZU1vZHVsZSYmdGhpcy5tb3VudCgpLHRoaXMuY2QoYSl9cmV0dXJuIG99LGNhdChlKXtyZXR1cm4gdC5fZmlsZW9wKCJjYXQiLGUpfSxscyhlKXtyZXR1cm4gdC5fZmlsZW9wKCJscyIsZSl9LGRvd25sb2FkKGUpe3JldHVybiB0Ll9maWxlb3AoImRvd25sb2FkIixlKX0scHdkKCl7cmV0dXJuIHQuZnMuY3dkKCl9LGNkKGUpe2ZvcihsZXQgciBvZiB0LnRvb2xzKSFyLm1vZHVsZXx8ci5tb2R1bGUuRlMuY2hkaXIoZSl9LG1rZGlyKGUpe3JldHVybiB0LmZzLm1rZGlyKGUpLCEwfSxfc3RkaW5UeHQ6IiIsX3N0ZGluUHRyOjAsZ2V0IHN0ZGluKCl7cmV0dXJuIHQuX3N0ZGluVHh0fSxzZXQgc3RkaW4oZT0iIil7dC5fbG9nKGBTZXR0aW5nIHN0ZGluIHRvICVjJHtlfSVjYCwiY29sb3I6ZGFya2JsdWUiLCIiKSx0Ll9zdGRpblR4dD1lLHQuX3N0ZGluUHRyPTB9LGFzeW5jIF9zZXR1cChlKXtpZihlLnJlYWR5KXJldHVybjtpZih0Ll9sb2coYFNldHRpbmcgdXAgJHtlLnRvb2x9IChiYXNlID0gJHtlLmlzQmFzZU1vZHVsZT09PSEwfSkuLi5gKSxlLmNvbmZpZz1PYmplY3QuYXNzaWduKHt9LGUpLGUudXJsUHJlZml4fHwoZS51cmxQcmVmaXg9YCR7dC5jb25maWcudXJsQ0ROfS8ke2UudG9vbH0vJHtlLnZlcnNpb259YCksZS5wcm9ncmFtfHwoZS5wcm9ncmFtPWUudG9vbCksZS5mZWF0dXJlc3x8KGUuZmVhdHVyZXM9e30sKElbZS5wcm9ncmFtXXx8W10pLmluY2x1ZGVzKCJzaW1kIikmJihhd2FpdCBqKCk/KGUucHJvZ3JhbSs9Ii1zaW1kIixlLmZlYXR1cmVzLnNpbWQ9ITApOnQuX2xvZyhgV2ViQXNzZW1ibHkgU0lNRCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3Nlcjsgd2lsbCBsb2FkIG5vbi1TSU1EIHZlcnNpb24gb2YgJHtlLnByb2dyYW19LmApKSksZS5pc0Jhc2VNb2R1bGUmJihlLmxvYWRpbmc9eCksZS5sb2FkaW5nPT09ayl7dC5fbG9nKGBXaWxsIGxhenktbG9hZCAke2UudG9vbH07IHNraXBwaW5nIGluaXRpYWxpemF0aW9uLmApO3JldHVybn1zZWxmLmltcG9ydFNjcmlwdHMoYCR7ZS51cmxQcmVmaXh9LyR7ZS5wcm9ncmFtfS5qc2ApLGUubW9kdWxlPWF3YWl0IE1vZHVsZSh7dGhpc1Byb2dyYW06ZS5wcm9ncmFtLGxvY2F0ZUZpbGU6KGkscyk9PmAke2UudXJsUHJlZml4fS8ke2l9YCxzdGRpbjooKT0+dC5fc3RkaW5QdHI8dC5zdGRpbi5sZW5ndGg/dC5zdGRpbi5jaGFyQ29kZUF0KHQuX3N0ZGluUHRyKyspOih0LnN0ZGluPSIiLG51bGwpLHByaW50Omk9PmUuc3Rkb3V0Kz1gJHtpfQpgLHByaW50RXJyOnQuY29uZmlnLnByaW50SW50ZXJsZWF2ZWQ/aT0+ZS5zdGRvdXQrPWAke2l9CmA6aT0+ZS5zdGRlcnIrPWAke2l9CmB9KTtjb25zdCByPWUubW9kdWxlLkZTO2UuaXNCYXNlTW9kdWxlPyh0Ll9sb2coYFNldHRpbmcgdXAgJHtlLnRvb2x9IHdpdGggYmFzZSBtb2R1bGUgZmlsZXN5c3RlbS4uLmApLHIubWtkaXIodC5jb25maWcuZGlyU2hhcmVkLDUxMSksci5ta2RpcihgJHt0LmNvbmZpZy5kaXJTaGFyZWR9LyR7dC5jb25maWcuZGlyRGF0YX1gLDUxMSksci5ta2RpcihgJHt0LmNvbmZpZy5kaXJTaGFyZWR9LyR7dC5jb25maWcuZGlyTW91bnRlZH1gLDUxMSksci5jaGRpcihgJHt0LmNvbmZpZy5kaXJTaGFyZWR9LyR7dC5jb25maWcuZGlyRGF0YX1gKSx0LmZzPXIpOih0Ll9sb2coYFNldHRpbmcgdXAgJHtlLnRvb2x9IHdpdGggZmlsZXN5c3RlbS4uLmApLHIubWtkaXIodC5jb25maWcuZGlyU2hhcmVkKSxyLm1vdW50KGUubW9kdWxlLlBST1hZRlMse3Jvb3Q6dC5jb25maWcuZGlyU2hhcmVkLGZzOnQuZnN9LHQuY29uZmlnLmRpclNoYXJlZCksci5jaGRpcih0LmZzLmN3ZCgpKSksZS5zdGRvdXQ9IiIsZS5zdGRlcnI9IiIsZS5yZWFkeT0hMH0sYXN5bmMgX3NldHVwRlMoKXtjb25zdCBlPXQuZnM7Zm9yKGxldCByIG9mIHQudG9vbHMpe2lmKCFyLnJlYWR5KWNvbnRpbnVlO2NvbnN0IGk9ci5tb2R1bGUuRlMscz1gLyR7ci50b29sfWAsbz1gJHt0LmNvbmZpZy5kaXJTaGFyZWR9JHtzfWA7IWkuYW5hbHl6ZVBhdGgocykuZXhpc3RzfHxlLmFuYWx5emVQYXRoKG8pLmV4aXN0c3x8KHQuX2xvZyhgTW91bnRpbmcgJHtzfSBvbnRvICR7dC5iYXNlLnRvb2x9IGZpbGVzeXN0ZW0gYXQgJHtvfWApLGUubWtkaXIobyksZS5tb3VudCh0LmJhc2UubW9kdWxlLlBST1hZRlMse3Jvb3Q6cyxmczppfSxvKSl9fSxfZmlsZW9wKGUscil7dC5fbG9nKGBSdW5uaW5nICR7ZX0gJHtyfWApO2NvbnN0IGk9dC5mcy5hbmFseXplUGF0aChyKTtpZighaS5leGlzdHMpcmV0dXJuIHQuX2xvZyhgRmlsZSAke3J9IG5vdCBmb3VuZC5gKSwhMTtzd2l0Y2goZSl7Y2FzZSJjYXQiOnJldHVybiB0LmZzLnJlYWRGaWxlKHIse2VuY29kaW5nOiJ1dGY4In0pO2Nhc2UibHMiOnJldHVybiB0LmZzLmlzRmlsZShpLm9iamVjdC5tb2RlKT90LmZzLnN0YXQocik6dC5mcy5yZWFkZGlyKHIpO2Nhc2UiZG93bmxvYWQiOmNvbnN0IHM9bmV3IEJsb2IoW3RoaXMuY2F0KHIpXSk7cmV0dXJuIFVSTC5jcmVhdGVPYmplY3RVUkwocyl9cmV0dXJuITF9LF9sb2coZSl7aWYoIXQuY29uZmlnLmRlYnVnKXJldHVybjtsZXQgcj1bLi4uYXJndW1lbnRzXTtyLnNoaWZ0KCksY29uc29sZS5sb2coYCVjW1dlYldvcmtlcl0lYyAke2V9YCwiZm9udC13ZWlnaHQ6Ym9sZCIsIiIsLi4ucil9fTtiKHQpfSkoKTsK",ot=typeof window<"u"&&window.Blob&&new Blob([atob(it)],{type:"text/javascript;charset=utf-8"});function mt(){const t=ot&&(window.URL||window.webkitURL).createObjectURL(ot);try{return t?new Worker(t):new Worker("data:application/javascript;base64,"+it)}finally{t&&(window.URL||window.webkitURL).revokeObjectURL(t)}}const ut={urlCDN:"https://biowasm.com/cdn/v3",urlCDNStg:"https://stg.biowasm.com/cdn/v3",dirShared:"/shared",dirMounted:"/mnt",dirData:"/data",printInterleaved:!0,callback:null,debug:!1,env:"prd"};class dt{constructor(t,n={}){if(null==t)throw"Expecting array of tools as input to Aioli constructor.";return Array.isArray(t)||(t=[t]),n=Object.assign({},ut,n),t=t.map(this._parseTool),"stg"===n.env&&(n.urlCDN=n.urlCDNStg),this.tools=t,this.config=n,null!=this.config.callback&&(this.callback=this.config.callback),delete this.config.callback,this.init()}async init(){const t=new mt;this.callback&&(t.onmessage=t=>{"biowasm"===t.data.type&&this.callback(t.data.value)});const n=_(t);return n.tools=this.tools,n.config=this.config,await n.init(),n}_parseTool(t){if("string"!=typeof t)return t;const n=t.split("/");if(2!=n.length&&3!=n.length)throw"Expecting '<tool>/<version>' or '<tool>/<program>/<version>'";return{tool:n[0],program:3==n.length?n[1]:n[0],version:n[n.length-1]}}}function rt(t){let n,l,a,c;return{c(){n=m("div"),l=m("input"),p(l,"id",t[6]),p(l,"type","text"),p(l,"class","form-control"),p(l,"placeholder",t[3]),l.disabled=t[2],G(l,"font-family","monospace"),p(n,"class","col-12")},m(e,o){i(e,n,o),s(n,l),Z(l,t[0]),a||(c=[b(l,"keydown",t[7]),b(l,"input",t[9])],a=!0)},p(t,n){8&n&&p(l,"placeholder",t[3]),4&n&&(l.disabled=t[2]),1&n&&l.value!==t[0]&&Z(l,t[0])},d(t){t&&o(n),a=!1,e(c)}}}function bt(t){let n,l,a,c,d,G,y,g,W,f,X,L=""!=t[4]&&pt(t);return{c(){n=m("label"),l=u(t[1]),c=r(),d=m("div"),G=m("div"),y=m("input"),g=r(),W=m("div"),L&&L.c(),p(n,"class",a="col-"+t[5]+" col-form-label"),p(n,"for",t[6]),p(y,"id",t[6]),p(y,"type","text"),p(y,"class","form-control form-control-sm"),p(y,"placeholder",t[3]),y.disabled=t[2],p(G,"class","input-group input-group-sm"),p(d,"class","col-3 p-0"),p(W,"class","col-1 p-0 pl-1")},m(e,a){i(e,n,a),s(n,l),i(e,c,a),i(e,d,a),s(d,G),s(G,y),Z(y,t[0]),i(e,g,a),i(e,W,a),L&&L.m(W,null),f||(X=[b(y,"keydown",t[7]),b(y,"input",t[8])],f=!0)},p(t,e){2&e&&h(l,t[1]),32&e&&a!==(a="col-"+t[5]+" col-form-label")&&p(n,"class",a),8&e&&p(y,"placeholder",t[3]),4&e&&(y.disabled=t[2]),1&e&&y.value!==t[0]&&Z(y,t[0]),""!=t[4]?L?L.p(t,e):(L=pt(t),L.c(),L.m(W,null)):L&&(L.d(1),L=null)},d(t){t&&o(n),t&&o(c),t&&o(d),t&&o(g),t&&o(W),L&&L.d(),f=!1,e(X)}}}function pt(t){let n,l;return{c(){n=m("button"),l=u("?"),p(n,"type","button"),p(n,"class","btn btn-sm btn-outline-primary"),p(n,"data-toggle","popover"),p(n,"data-trigger","hover"),p(n,"data-content",t[4]),p(n,"data-html","true")},m(t,e){i(t,n,e),s(n,l)},p(t,l){16&l&&p(n,"data-content",t[4])},d(t){t&&o(n)}}}function ht(n){let l;function e(t,n){return"0"!=t[5]?bt:rt}let a=e(n),c=a(n);return{c(){l=m("div"),c.c(),p(l,"class","form-group row mb-2")},m(t,n){i(t,l,n),c.m(l,null)},p(t,[n]){a===(a=e(t))&&c?c.p(t,n):(c.d(1),c=a(t),c&&(c.c(),c.m(l,null)))},i:t,o:t,d(t){t&&o(l),c.d()}}}function Zt(t,n,l){let{label:e=""}=n,{value:a=""}=n,{disabled:c=!1}=n,{placeholder:s=""}=n,{help:i=""}=n,{col:o=6}=n,m=`param-${e}`,u=f();return t.$$set=t=>{"label"in t&&l(1,e=t.label),"value"in t&&l(0,a=t.value),"disabled"in t&&l(2,c=t.disabled),"placeholder"in t&&l(3,s=t.placeholder),"help"in t&&l(4,i=t.help),"col"in t&&l(5,o=t.col)},[a,e,c,s,i,o,m,function(t){"Enter"==t.key&&u("launch")},function(){a=this.value,l(0,a)},function(){a=this.value,l(0,a)}]}class Gt extends j{constructor(t){super(),$(this,t,Zt,ht,c,{label:1,value:0,disabled:2,placeholder:3,help:4,col:5})}}function yt(n){let l,e;return{c(){l=m("div"),p(l,"class","heatmap svelte-cuar8w"),p(l,"id",e="heatmap-"+n[0])},m(t,n){i(t,l,n)},p(t,[n]){1&n&&e!==(e="heatmap-"+t[0])&&p(l,"id",e)},i:t,o:t,d(t){t&&o(l)}}}function gt(t){let n=1,l=t.split("").map((t=>`${t}<sub>${n++}</sub>`));return[""].concat(l)}function Wt(t,n,l){let{algorithm:e=null}=n,{seq1:a=""}=n,{seq2:c=""}=n,{matrix:s=[]}=n,{pointers:i=[]}=n;function o(){let t=0,n=[],l=function(){let t=-1,n=-1;if("nw"==e)t=s.length-1,n=s[0].length-1;else if("sw"==e){let l=Math.max(...s.map((t=>Math.max(...t))));for(;-1==n;)n=s[++t].indexOf(l)}let l=[];for(;t>=0&&n>=0&&(l.push(s[0].length*t+n),"sw"!=e||0!=s[t][n]);){let l=i[t][n];0==l?(t-=1,n-=1):1==l?t-=1:2==l&&(n-=1)}return l}();for(let e in s)for(let a in s[e]){let c=!1;l.includes(t)&&(c="white"),n.push({x:a,y:e,text:s[e][a],showarrow:!1,bordercolor:c,borderwidth:3,borderpad:5}),t+=1}Plotly.react(`heatmap-${e}`,[{x:gt(a),y:gt(c),z:s,type:"heatmap",showscale:!1,hoverinfo:"skip",hovertemplate:"%{x}, %{y}<extra> %{z}</extra>"}],{margin:{t:30,l:30,r:20,b:5},annotations:n,xaxis:{side:"top"},yaxis:{autorange:"reversed"}},{displayModeBar:!1})}return t.$$set=t=>{"algorithm"in t&&l(0,e=t.algorithm),"seq1"in t&&l(1,a=t.seq1),"seq2"in t&&l(2,c=t.seq2),"matrix"in t&&l(3,s=t.matrix),"pointers"in t&&l(4,i=t.pointers)},t.$$.update=()=>{8&t.$$.dirty&&s.length>0&&o()},[e,a,c,s,i]}class ft extends j{constructor(t){super(),$(this,t,Wt,yt,c,{algorithm:0,seq1:1,seq2:2,matrix:3,pointers:4})}}function Xt(t){let n,l,a,c,d,Z,y,g,W,f,X,v,Y,R,S,x,k,V,C,I,K,F,$,j,B,Q,M,P,E,O,A,D,_,q,tt,nt,lt,et,at,ct,st,it,ot,mt,ut,dt,rt,bt,pt,ht,Zt,yt,gt,Wt,Xt,Lt,vt,Yt,Rt,St,xt=t[4].sw+"",Ht=t[4].nw+"";function kt(n){t[9](n)}let Vt={col:"0",disabled:!t[3]};function Ct(n){t[10](n)}void 0!==t[1]&&(Vt.value=t[1]),f=new Gt({props:Vt}),L.push((()=>J(f,"value",kt))),f.$on("launch",t[7]);let It={col:"0",disabled:!t[3]};function Kt(n){t[11](n)}void 0!==t[2]&&(It.value=t[2]),Y=new Gt({props:It}),L.push((()=>J(Y,"value",Ct))),Y.$on("launch",t[7]);let wt={label:"Match",disabled:!t[3],help:"Score given to matching bases"};function Nt(n){t[12](n)}void 0!==t[0].match&&(wt.value=t[0].match),C=new Gt({props:wt}),L.push((()=>J(C,"value",Kt))),C.$on("launch",t[7]);let Jt={label:"Mismatch",disabled:!t[3],help:"Penalty for mismatches"};function Ut(n){t[13](n)}void 0!==t[0].mismatch&&(Jt.value=t[0].mismatch),F=new Gt({props:Jt}),L.push((()=>J(F,"value",Nt))),F.$on("launch",t[7]);let zt={label:"Open",disabled:!t[3],help:"Penalty for starting a gap. Set to 0 to disable affine gap penalties."};function Tt(n){t[14](n)}void 0!==t[0].gapopen&&(zt.value=t[0].gapopen),P=new Gt({props:zt}),L.push((()=>J(P,"value",Ut))),P.$on("launch",t[7]);let Ft={label:"Extend",disabled:!t[3],help:"Penalty for each base that extends an open gap."};return void 0!==t[0].gapextend&&(Ft.value=t[0].gapextend),A=new Gt({props:Ft}),L.push((()=>J(A,"value",Tt))),A.$on("launch",t[7]),pt=new ft({props:{algorithm:"sw",seq1:t[1],seq2:t[2],matrix:t[5].sw,pointers:t[6].sw}}),vt=new ft({props:{algorithm:"nw",seq1:t[1],seq2:t[2],matrix:t[5].nw,pointers:t[6].nw}}),{c(){n=m("nav"),n.innerHTML='<a class="navbar-brand" href="/">Alignment Sandbox</a> \n\t<div class="collapse navbar-collapse"><ul class="navbar-nav mr-auto"></ul> \n\t\t<ul class="navbar-nav"><li class="nav-item active"><a class="nav-link" href="https://github.com/robertaboukhalil/alignment-sandbox">Code</a></li></ul></div>',l=r(),a=m("main"),c=m("div"),d=m("div"),Z=m("div"),y=m("div"),g=m("p"),g.innerHTML="<strong>Sequences to align:</strong>",W=r(),U(f.$$.fragment),v=r(),U(Y.$$.fragment),S=r(),x=m("div"),k=m("p"),k.innerHTML="<strong>Match Scores:</strong>",V=r(),U(C.$$.fragment),K=r(),U(F.$$.fragment),j=r(),B=m("div"),Q=m("p"),Q.innerHTML="<strong>Gap Penalties:</strong>",M=r(),U(P.$$.fragment),O=r(),U(A.$$.fragment),_=r(),q=m("div"),tt=m("p"),tt.textContent=" ",nt=r(),lt=m("button"),et=u("Align"),ct=r(),st=m("div"),it=m("div"),ot=m("div"),mt=m("h4"),mt.textContent="Smith-Waterman",ut=r(),dt=m("pre"),rt=u(xt),bt=r(),U(pt.$$.fragment),ht=r(),Zt=m("div"),yt=m("h4"),yt.textContent="Needleman-Wunsch",gt=r(),Wt=m("pre"),Xt=u(Ht),Lt=r(),U(vt.$$.fragment),p(n,"class","navbar navbar-expand-md navbar-dark fixed-top bg-dark"),p(y,"class","col-12 col-sm-6 mt-2 mt-sm-0 border-right"),p(x,"class","col-12 col-sm-6 col-md-2 mt-2 mt-sm-0 border-right"),p(B,"class","col-12 col-sm-6 col-md-2 mt-2 mt-sm-0 border-right"),p(tt,"class","d-none d-sm-block"),G(lt,"width","100%"),lt.disabled=at=!t[3],p(lt,"class","btn btn-primary btn-lg pt-4 pb-4"),p(q,"class","col-12 col-sm-6 col-md-2 mt-2 mt-sm-0 mb-2 mb-sm-0"),p(Z,"class","row mt-4 mt-sm-0"),p(d,"class","container"),p(c,"class","jumbotron mb-3 pb-2"),p(mt,"class","mb-3"),p(dt,"class","svelte-1pqw5m1"),p(ot,"class","col-md-6 mb-2"),p(yt,"class","mb-3"),p(Wt,"class","svelte-1pqw5m1"),p(Zt,"class","col-md-6 mb-2"),p(it,"class","row"),p(st,"class","container")},m(e,o){i(e,n,o),i(e,l,o),i(e,a,o),s(a,c),s(c,d),s(d,Z),s(Z,y),s(y,g),s(y,W),z(f,y,null),s(y,v),z(Y,y,null),s(Z,S),s(Z,x),s(x,k),s(x,V),z(C,x,null),s(x,K),z(F,x,null),s(Z,j),s(Z,B),s(B,Q),s(B,M),z(P,B,null),s(B,O),z(A,B,null),s(Z,_),s(Z,q),s(q,tt),s(q,nt),s(q,lt),s(lt,et),s(a,ct),s(a,st),s(st,it),s(it,ot),s(ot,mt),s(ot,ut),s(ot,dt),s(dt,rt),s(ot,bt),z(pt,ot,null),s(it,ht),s(it,Zt),s(Zt,yt),s(Zt,gt),s(Zt,Wt),s(Wt,Xt),s(Zt,Lt),z(vt,Zt,null),Yt=!0,Rt||(St=[b(lt,"click",t[7]),b(lt,"launch",t[7])],Rt=!0)},p(t,[n]){const l={};8&n&&(l.disabled=!t[3]),!X&&2&n&&(X=!0,l.value=t[1],H((()=>X=!1))),f.$set(l);const e={};8&n&&(e.disabled=!t[3]),!R&&4&n&&(R=!0,e.value=t[2],H((()=>R=!1))),Y.$set(e);const a={};8&n&&(a.disabled=!t[3]),!I&&1&n&&(I=!0,a.value=t[0].match,H((()=>I=!1))),C.$set(a);const c={};8&n&&(c.disabled=!t[3]),!$&&1&n&&($=!0,c.value=t[0].mismatch,H((()=>$=!1))),F.$set(c);const s={};8&n&&(s.disabled=!t[3]),!E&&1&n&&(E=!0,s.value=t[0].gapopen,H((()=>E=!1))),P.$set(s);const i={};8&n&&(i.disabled=!t[3]),!D&&1&n&&(D=!0,i.value=t[0].gapextend,H((()=>D=!1))),A.$set(i),(!Yt||8&n&&at!==(at=!t[3]))&&(lt.disabled=at),(!Yt||16&n)&&xt!==(xt=t[4].sw+"")&&h(rt,xt);const o={};2&n&&(o.seq1=t[1]),4&n&&(o.seq2=t[2]),32&n&&(o.matrix=t[5].sw),64&n&&(o.pointers=t[6].sw),pt.$set(o),(!Yt||16&n)&&Ht!==(Ht=t[4].nw+"")&&h(Xt,Ht);const m={};2&n&&(m.seq1=t[1]),4&n&&(m.seq2=t[2]),32&n&&(m.matrix=t[5].nw),64&n&&(m.pointers=t[6].nw),vt.$set(m)},i(t){Yt||(w(f.$$.fragment,t),w(Y.$$.fragment,t),w(C.$$.fragment,t),w(F.$$.fragment,t),w(P.$$.fragment,t),w(A.$$.fragment,t),w(pt.$$.fragment,t),w(vt.$$.fragment,t),Yt=!0)},o(t){N(f.$$.fragment,t),N(Y.$$.fragment,t),N(C.$$.fragment,t),N(F.$$.fragment,t),N(P.$$.fragment,t),N(A.$$.fragment,t),N(pt.$$.fragment,t),N(vt.$$.fragment,t),Yt=!1},d(t){t&&o(n),t&&o(l),t&&o(a),T(f),T(Y),T(C),T(F),T(P),T(A),T(pt),T(vt),Rt=!1,e(St)}}}function Lt(t,n,l){let e,a="GGTTGACTA",c="TGTTCGG",s=[],i={match:3,mismatch:-3,gapopen:0,gapextend:-2},o=!1,m={sw:"Loading...",nw:"Loading..."},u={sw:[],nw:[]},r={sw:[],nw:[]};var b;async function p(){l(3,o=!1),await e.exec(`smith_waterman --printmatrices ${s} ${a} ${c}`).then((t=>h(t,"sw"))),await e.exec(`needleman_wunsch --printmatrices --printscores ${s} ${a} ${c}`).then((t=>h(t,"nw"))),l(3,o=!0)}function h(t,n){if(""!=t.stderr)return void l(4,m[n]=d.stderr,m);let e="",a=null,c={},s=[],i=[],o=t.stdout.split("\n");for(let t of o)if("match_scores:"==t)a="match";else if("gap_a_scores:"==t)a="gap_a";else if("gap_b_scores:"==t)a="gap_b";else if(t.startsWith("match: "))a=null;else if(null!=a){a in c||(c[a]=[]);let n=t.split(":").pop().trim().split(/\s+/).map((t=>+t));c[a].push(n)}else""==t.trim()||t.startsWith("==")||t.startsWith("seq_a:")||t.startsWith("seq_b:")||(e+=`${t}\n`);l(4,m[n]=e,m);for(let t in c.match){s[t]=[],i[t]=[];for(let n in c.match[t])s[t][n]=Math.max(c.match[t][n],c.gap_a[t][n],c.gap_b[t][n]),i[t][n]=[c.match[t][n],c.gap_a[t][n],c.gap_b[t][n]].indexOf(s[t][n])}l(5,u[n]=s,u),l(6,r[n]=i,r)}return b=async()=>{e=await new dt(["seq-align/smith_waterman/2017.10.18","seq-align/needleman_wunsch/2017.10.18"],{printInterleaved:!1}),p(),jQuery("[data-toggle='popover']").popover()},W().$$.on_mount.push(b),t.$$.update=()=>{1&t.$$.dirty&&l(8,s=Object.keys(i).map((t=>{let n=i[t];return null===n?"":"boolean"==typeof n?!0===n?`--${t}`:"":`--${t} ${n}`})).filter((t=>""!=t)).join(" ").trim()),256&t.$$.dirty&&console.log(`Parameters: ${s}`)},[i,a,c,o,m,u,r,p,s,function(t){a=t,l(1,a)},function(t){c=t,l(2,c)},function(n){t.$$.not_equal(i.match,n)&&(i.match=n,l(0,i))},function(n){t.$$.not_equal(i.mismatch,n)&&(i.mismatch=n,l(0,i))},function(n){t.$$.not_equal(i.gapopen,n)&&(i.gapopen=n,l(0,i))},function(n){t.$$.not_equal(i.gapextend,n)&&(i.gapextend=n,l(0,i))}]}return new class extends j{constructor(t){super(),$(this,t,Lt,Xt,c,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
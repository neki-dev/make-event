(()=>{"use strict";var e,n={};e=n,Object.defineProperty(e,"__esModule",{value:!0}),e.Events=void 0,e.Events=class{static make(){const e=new Set,n=function(t){return e.add(t),function(){n.unsubscribe(t)}};return n.unsubscribe=function(n){e.delete(n)},n.invoke=function(n){e.forEach((e=>{e(n)}))},n.clear=function(){e.clear()},n}},module.exports=n})();
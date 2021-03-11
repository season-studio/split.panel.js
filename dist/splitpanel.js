!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).SplitPanel=t()}(this,(function(){"use strict";function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){if(e)return e;throw t}function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return(e=String(e).replace(/\D+$/,""))&&Number(e)||t}function o(e,t){for(var n=0,r=0;t;)n+=t.offsetLeft-t.scrollLeft+t.clientLeft,r+=t.offsetTop-t.scrollTop+t.clientTop,t=t.offsetParent;return{x:n=e.pageX-n,y:r=e.pageY-r}}function i(e){e instanceof Array&&(e=e[0]),"vertical"===e||(e="horizontal");var t={s:e,toString:function(){return e}};return Object.defineProperties(t,{isHorizontal:{value:"horizontal"===e,writable:!1},isVertical:{value:"horizontal"!==e,writable:!1},minSize:{value:"horizontal"===e?"minWidth":"minHeight",writable:!1},maxSize:{value:"horizontal"===e?"maxWidth":"maxHeight",writable:!1},clientSize:{value:"horizontal"===e?"clientWidth":"clientHeight",writable:!1},size:{value:"horizontal"===e?"width":"height",writable:!1},start:{value:"horizontal"===e?"offsetLeft":"offsetTop",writable:!1},setStart:{value:"horizontal"===e?"left":"top",writable:!1},beginMargin:{value:"horizontal"===e?"marginLeft":"marginTop",writable:!1},endMargin:{value:"horizontal"===e?"marginRight":"marginBottom",writable:!1},eventPos:{value:"horizontal"===e?"x":"y",writable:!1}}),t}function a(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,l=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){l=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(l)throw i}}}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var l=Symbol("split.panel.js");function u(e,t){var n=this;if(0!==e){for(var o=this[l].type,i=[],a=0,s=e>0?{indexStep:1,expandIndex:t-1,expandRecFn:Array.prototype.unshift}:(e=-e,{indexStep:-1,expandIndex:t--,expandRecFn:Array.prototype.push}),u=s.indexStep,c=s.expandIndex,p=s.expandRecFn,f=this.querySelector(':scope>[d-split-panel="'.concat(t,'"]'));f&&e>0;f=this.querySelector(':scope>[d-split-panel="'.concat(t+=u,'"]'))){var d=getComputedStyle(f),v=r(d[o.minSize]);v<0&&(v=0);var m=r(d[o.size],v),y=m-v;y>e&&(y=e),y>0?(i.push({panel:f,index:t,size:m-y}),e-=y,a+=y):i.push({panel:f,index:t,size:void 0})}var b=this.querySelector(':scope>[d-split-panel="'.concat(c,'"]'));return b&&a>0&&p.call(i,{panel:b,index:c,size:r(getComputedStyle(b)[o.size])+a}),i.forEach((function(e){var t=e.panel,r=e.index,i=e.size;void 0!==i&&(t.style[o.size]="".concat(i,"px"));var a=n.querySelector(':scope>[d-split-bar="'.concat(r,'"]'));a&&(a.style[o.setStart]="".concat(t[o.start],"px"))})),a>0}}var c={onAutoSwap:function(e){var t;if("dblclick"===e.type)t=e.target?r(e.target.getAttribute("d-split-bar"),-1):-1;else{var n,o=a(e.composedPath());try{for(o.s();!(n=o.n()).done;){var i=n.value;if((t=i instanceof HTMLElement?r(i.getAttribute("d-split-panel"),-1):-1)>=0)break}}catch(e){o.e(e)}finally{o.f()}}if(t>=0){var s=this[l],c=s.opt||{};if("dblclick"!==e.type||c.autoswap){var p=this.querySelector(':scope>*[d-split-panel="'.concat(t,'"]'));if(p){var f,d=s.type,v=getComputedStyle(p),m=r(v[d.minSize]),y=r(v[d.size]);m<y?(f=y-m,p.setAttribute("d-split-autoswap",y)):f=m-(r(p.getAttribute("d-split-autoswap"))||m+(Number(c.swapsize)||26)),0===t&&(t=1,f=-f),u.call(this,f,t)}}e.stopPropagation(),e.preventDefault()}},onMouseUp:function(e){var t=this[l];t&&(t.currentIndex=void 0,window.removeEventListener("mousemove",t.onMouseMove))},onMouseMove:function(e){var t=this[l];if(t){var n=t.type,r=o(e,this)[n.eventPos],i=this[n.clientSize];r<0?r=0:r>=i&&(r=i-1),u.call(this,r-t.lastPos,t.currentIndex)&&(t.lastPos=r)}},onMouseDown:function(e){var t=this[l],n=e.target?r(e.target.getAttribute("d-split-bar")):0;t&&n>0&&(t.currentIndex=n,t.lastPos=o(e,this)[t.type.eventPos],window.addEventListener("mousemove",t.onMouseMove),window.addEventListener("mouseup",t.onMouseUp,{once:!0}),e.stopPropagation(),e.preventDefault())},onResize:function(){p(this,this[l])}};function p(e,n){var o=n.type,i=[],a=0;t(e.querySelectorAll(":scope>*:not(.-split-bar)")).forEach((function(e,t){e.classList.add("-split-panel"),e.setAttribute("d-split-panel",t);var n=getComputedStyle(e),s=r(n[o.minSize]);s<0&&(s=0);var l=r(n[o.maxSize]);l<0&&(l=0);var u=r(n[o.size],s);i.push({element:e,minSize:s,maxSize:l,size:u,index:t,margin:a+r(n[o.beginMargin]),auto:Boolean(e.getAttribute("d-split-auto"))}),a=r(n[o.endMargin])}));var s=e[o.clientSize]-i.reduce((function(e,t){return(Number(e)||e.margin)+t.margin})),l=0,u=0,c=0;i.forEach((function(e){e.minSize,e.auto?(u++,c+=e.minSize):l+=e.size}));var p=s-l;if(p<c){var f=c-p;i.forEach((function(e){if(f>0&&!e.auto){var t=e.size-e.minSize;t>0&&(t>=f&&(t=f),e.size-=t,f-=t)}})),p=c}var d=u>0?p/u:(i[0].element.setAttribute("d-split-auto","true"),i[0].auto=!0,p),v=[null].concat(t(e.querySelectorAll(":scope>.-split-bar")));i.forEach((function(e){var t=e.element,n=e.index,r=e.auto,i=e.size;t.style[o.size]="".concat(r?d:i,"px");var a=v[n];a&&(a.setAttribute("d-split-bar",n),a.style[o.setStart]="".concat(t[o.start],"px"))}))}function f(e){n(e instanceof HTMLElement,"the container element must be an instance of HTMLElement");var r=n(e[l],"the container referenced not been initialized");t(e.querySelectorAll(":scope>.-split-bar")).forEach((function(e){return e.remove()}));var o=e.children.length;if(o>1){var i=t((e||document.body).querySelectorAll("*")).reduce((function(e,t){return Math.max(e,Number(window.getComputedStyle(t).zIndex)||0)}),0)+1;e.insertAdjacentHTML("beforeend",'<div class="-split-bar" style="z-index:'.concat(i,';" d-split-bar="0"></div>').repeat(o-1))}p(e,r)}return{init:function(e,t){n(e instanceof HTMLElement,"the container element must be an instance of HTMLElement");var r="string"==typeof t?{type:t,opt:{}}:{type:void 0,opt:t||{}},o=r.type,a=r.opt;void 0===a.autoswap&&(a.autoswap=!0);var s=e[l]={type:i(o),opt:a};for(var u in c)s[u]=c[u].bind(e);e.style.padding="0px !important",e.classList.add("-split-container","-split-container-".concat(s.type)),e.addEventListener("mousedown",s.onMouseDown),e.addEventListener("dblclick",s.onAutoSwap),e.addEventListener("splitautoswap",s.onAutoSwap),new ResizeObserver(s.onResize).observe(e),f(e)},dispose:function(e){if(e[l]&&e instanceof HTMLElement){var n=e[l];e.removeEventListener("mousedown",n.onMouseDown),window.removeEventListener("mouseup",n.onMouseUp),window.removeEventListener("mousemove",n.onMouseMove),e.removeEventListener("dblclick",n.onAutoSwap),e.removeEventListener("splitautoswap",n.onAutoSwap),t(e.querySelectorAll(":scope>.-split-bar")).forEach((function(e){return e.remove()})),t(e.querySelectorAll(":scope>.-split-panel")).forEach((function(e){e.classList.remove("-split-panel"),e.removeAttribute("d-split-panel"),e.removeAttribute("d-split-autoswap")})),e.classList.remove("-split-container","-split-container-".concat(n.type)),e[l]=void 0,delete e[l]}},resetView:f,swap:function(e){n(e instanceof HTMLElement,"the parameter must be an instance of HTMLElement");var t=new CustomEvent("splitautoswap",{bubbles:!0});e.dispatchEvent(t)},$version:"1.0.0",$stamp:1615426556135}}));
//# sourceMappingURL=splitpanel.js.map

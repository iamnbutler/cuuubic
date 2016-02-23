!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):"undefined"!=typeof module&&module.exports?module.exports=t(require("jquery")):t(jQuery)}(function($){"use strict";function t(t){return!t.nodeName||-1!==$.inArray(t.nodeName.toLowerCase(),["iframe","#document","html","body"])}function e(t){return $.isFunction(t)||$.isPlainObject(t)?t:{top:t,left:t}}var i=$.scrollTo=function(t,e,i){return $(window).scrollTo(t,e,i)};return i.defaults={axis:"xy",duration:0,limit:!0},$.fn.scrollTo=function(o,n,r){"object"==typeof n&&(r=n,n=0),"function"==typeof r&&(r={onAfter:r}),"max"===o&&(o=9e9),r=$.extend({},i.defaults,r),n=n||r.duration;var s=r.queue&&1<r.axis.length;return s&&(n/=2),r.offset=e(r.offset),r.over=e(r.over),this.each(function(){function a(t){var e=$.extend({},r,{queue:!0,duration:n,complete:t&&function(){t.call(h,f,r)}});u.animate(c,e)}if(null!==o){var l=t(this),h=l?this.contentWindow||window:this,u=$(h),f=o,c={},d;switch(typeof f){case"number":case"string":if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(f)){f=e(f);break}f=l?$(f):$(f,h);case"object":if(0===f.length)return;(f.is||f.style)&&(d=(f=$(f)).offset())}var p=$.isFunction(r.offset)&&r.offset(h,f)||r.offset;$.each(r.axis.split(""),function(t,e){var o="x"===e?"Left":"Top",n=o.toLowerCase(),w="scroll"+o,y=u[w](),g=i.max(h,e);d?(c[w]=d[n]+(l?0:y-u.offset()[n]),r.margin&&(c[w]-=parseInt(f.css("margin"+o),10)||0,c[w]-=parseInt(f.css("border"+o+"Width"),10)||0),c[w]+=p[n]||0,r.over[n]&&(c[w]+=f["x"===e?"width":"height"]()*r.over[n])):(o=f[n],c[w]=o.slice&&"%"===o.slice(-1)?parseFloat(o)/100*g:o),r.limit&&/^\d+$/.test(c[w])&&(c[w]=0>=c[w]?0:Math.min(c[w],g)),!t&&1<r.axis.length&&(y===c[w]?c={}:s&&(a(r.onAfterFirst),c={}))}),a(r.onAfter)}})},i.max=function(e,i){var o="x"===i?"Width":"Height",n="scroll"+o;if(!t(e))return e[n]-$(e)[o.toLowerCase()]();var o="client"+o,r=e.ownerDocument||e.document,s=r.documentElement,r=r.body;return Math.max(s[n],r[n])-Math.min(s[o],r[o])},$.Tween.propHooks.scrollLeft=$.Tween.propHooks.scrollTop={get:function(t){return $(t.elem)[t.prop]()},set:function(t){var e=this.get(t);if(t.options.interrupt&&t._last&&t._last!==e)return $(t.elem).stop();var i=Math.round(t.now);e!==i&&($(t.elem)[t.prop](i),t._last=this.get(t))}},i}),function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function($){function t(t,e,i){var o=e.hash.slice(1),n=document.getElementById(o)||document.getElementsByName(o)[0];if(n){t&&t.preventDefault();var r=$(i.target);if(!(i.lock&&r.is(":animated")||i.onBefore&&i.onBefore(t,n,r)===!1)){if(i.stop&&r.stop(!0),i.hash){var s=n.id===o?"id":"name",a=$("<a> </a>").attr(s,o).css({position:"absolute",top:$(window).scrollTop(),left:$(window).scrollLeft()});n[s]="",$("body").prepend(a),location.hash=e.hash,a.remove(),n[s]=o}r.scrollTo(n,i).trigger("notify.serialScroll",[n])}}}var e=location.href.replace(/#.*/,""),i=$.localScroll=function(t){$("body").localScroll(t)};return i.defaults={duration:1e3,axis:"y",event:"click",stop:!0,target:window},$.fn.localScroll=function(o){function n(){return!!this.href&&!!this.hash&&this.href.replace(this.hash,"")===e&&(!o.filter||$(this).is(o.filter))}return o=$.extend({},i.defaults,o),o.hash&&location.hash&&(o.target&&window.scrollTo(0,0),t(0,location,o)),o.lazy?this.on(o.event,"a,area",function(e){n.call(this)&&t(e,this,o)}):this.find("a,area").filter(n).bind(o.event,function(e){t(e,this,o)}).end().end()},i.hash=function(){},i}),!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof exports?module.exports=t:t(jQuery)}(function(t){function e(e){var s=e||window.event,a=l.call(arguments,1),h=0,f=0,c=0,d=0,p=0,w=0;if(e=t.event.fix(s),e.type="mousewheel","detail"in s&&(c=-1*s.detail),"wheelDelta"in s&&(c=s.wheelDelta),"wheelDeltaY"in s&&(c=s.wheelDeltaY),"wheelDeltaX"in s&&(f=-1*s.wheelDeltaX),"axis"in s&&s.axis===s.HORIZONTAL_AXIS&&(f=-1*c,c=0),h=0===c?f:c,"deltaY"in s&&(c=-1*s.deltaY,h=c),"deltaX"in s&&(f=s.deltaX,0===c&&(h=-1*f)),0!==c||0!==f){if(1===s.deltaMode){var y=t.data(this,"mousewheel-line-height");h*=y,c*=y,f*=y}else if(2===s.deltaMode){var g=t.data(this,"mousewheel-page-height");h*=g,c*=g,f*=g}if(d=Math.max(Math.abs(c),Math.abs(f)),(!r||r>d)&&(r=d,o(s,d)&&(r/=40)),o(s,d)&&(h/=40,f/=40,c/=40),h=Math[h>=1?"floor":"ceil"](h/r),f=Math[f>=1?"floor":"ceil"](f/r),c=Math[c>=1?"floor":"ceil"](c/r),u.settings.normalizeOffset&&this.getBoundingClientRect){var m=this.getBoundingClientRect();p=e.clientX-m.left,w=e.clientY-m.top}return e.deltaX=f,e.deltaY=c,e.deltaFactor=r,e.offsetX=p,e.offsetY=w,e.deltaMode=0,a.unshift(e,h,f,c),n&&clearTimeout(n),n=setTimeout(i,200),(t.event.dispatch||t.event.handle).apply(this,a)}}function i(){r=null}function o(t,e){return u.settings.adjustOldDeltas&&"mousewheel"===t.type&&e%120===0}var n,r,s=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],a="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],l=Array.prototype.slice;if(t.event.fixHooks)for(var h=s.length;h;)t.event.fixHooks[s[--h]]=t.event.mouseHooks;var u=t.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var i=a.length;i;)this.addEventListener(a[--i],e,!1);else this.onmousewheel=e;t.data(this,"mousewheel-line-height",u.getLineHeight(this)),t.data(this,"mousewheel-page-height",u.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var i=a.length;i;)this.removeEventListener(a[--i],e,!1);else this.onmousewheel=null;t.removeData(this,"mousewheel-line-height"),t.removeData(this,"mousewheel-page-height")},getLineHeight:function(e){var i=t(e),o=i["offsetParent"in t.fn?"offsetParent":"parent"]();return o.length||(o=t("body")),parseInt(o.css("fontSize"),10)||parseInt(i.css("fontSize"),10)||16},getPageHeight:function(e){return t(e).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};t.fn.extend({mousewheel:function(t){return t?this.bind("mousewheel",t):this.trigger("mousewheel")},unmousewheel:function(t){return this.unbind("mousewheel",t)}})}),!function(){"use strict";function t(o){if(!o)throw new Error("No options passed to Waypoint constructor");if(!o.element)throw new Error("No element option passed to Waypoint constructor");if(!o.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+e,this.options=t.Adapter.extend({},t.defaults,o),this.element=this.options.element,this.adapter=new t.Adapter(this.element),this.callback=o.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=t.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=t.Context.findOrCreateByElement(this.options.context),t.offsetAliases[this.options.offset]&&(this.options.offset=t.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),i[this.key]=this,e+=1}var e=0,i={};t.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},t.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},t.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete i[this.key]},t.prototype.disable=function(){return this.enabled=!1,this},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},t.prototype.next=function(){return this.group.next(this)},t.prototype.previous=function(){return this.group.previous(this)},t.invokeAll=function(t){var e=[];for(var o in i)e.push(i[o]);for(var n=0,r=e.length;r>n;n++)e[n][t]()},t.destroyAll=function(){t.invokeAll("destroy")},t.disableAll=function(){t.invokeAll("disable")},t.enableAll=function(){t.invokeAll("enable")},t.refreshAll=function(){t.Context.refreshAll()},t.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},t.viewportWidth=function(){return document.documentElement.clientWidth},t.adapters=[],t.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},t.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=t}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}function e(t){this.element=t,this.Adapter=n.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+i,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,o[t.waypointContextKey]=this,i+=1,this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var i=0,o={},n=window.Waypoint,r=window.onload;e.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},e.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical);t&&e&&(this.adapter.off(".waypoints"),delete o[this.key])},e.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on("resize.waypoints",function(){e.didResize||(e.didResize=!0,n.requestAnimationFrame(t))})},e.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on("scroll.waypoints",function(){(!e.didScroll||n.isTouch)&&(e.didScroll=!0,n.requestAnimationFrame(t))})},e.prototype.handleResize=function(){n.Context.refreshAll()},e.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var i in e){var o=e[i],n=o.newScroll>o.oldScroll,r=n?o.forward:o.backward;for(var s in this.waypoints[i]){var a=this.waypoints[i][s],l=o.oldScroll<a.triggerPoint,h=o.newScroll>=a.triggerPoint,u=l&&h,f=!l&&!h;(u||f)&&(a.queueTrigger(r),t[a.group.id]=a.group)}}for(var c in t)t[c].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},e.prototype.innerHeight=function(){return this.element==this.element.window?n.viewportHeight():this.adapter.innerHeight()},e.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},e.prototype.innerWidth=function(){return this.element==this.element.window?n.viewportWidth():this.adapter.innerWidth()},e.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var i in this.waypoints[e])t.push(this.waypoints[e][i]);for(var o=0,n=t.length;n>o;o++)t[o].destroy()},e.prototype.refresh=function(){var t,e=this.element==this.element.window,i=e?void 0:this.adapter.offset(),o={};this.handleScroll(),t={horizontal:{contextOffset:e?0:i.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:i.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var r in t){var s=t[r];for(var a in this.waypoints[r]){var l,h,u,f,c,d=this.waypoints[r][a],p=d.options.offset,w=d.triggerPoint,y=0,g=null==w;d.element!==d.element.window&&(y=d.adapter.offset()[s.offsetProp]),"function"==typeof p?p=p.apply(d):"string"==typeof p&&(p=parseFloat(p),d.options.offset.indexOf("%")>-1&&(p=Math.ceil(s.contextDimension*p/100))),l=s.contextScroll-s.contextOffset,d.triggerPoint=y+l-p,h=w<s.oldScroll,u=d.triggerPoint>=s.oldScroll,f=h&&u,c=!h&&!u,!g&&f?(d.queueTrigger(s.backward),o[d.group.id]=d.group):!g&&c?(d.queueTrigger(s.forward),o[d.group.id]=d.group):g&&s.oldScroll>=d.triggerPoint&&(d.queueTrigger(s.forward),o[d.group.id]=d.group)}}return n.requestAnimationFrame(function(){for(var t in o)o[t].flushTriggers()}),this},e.findOrCreateByElement=function(t){return e.findByElement(t)||new e(t)},e.refreshAll=function(){for(var t in o)o[t].refresh()},e.findByElement=function(t){return o[t.waypointContextKey]},window.onload=function(){r&&r(),e.refreshAll()},n.requestAnimationFrame=function(e){var i=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t;i.call(window,e)},n.Context=e}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}function i(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),o[this.axis][this.name]=this}var o={vertical:{},horizontal:{}},n=window.Waypoint;i.prototype.add=function(t){this.waypoints.push(t)},i.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},i.prototype.flushTriggers=function(){for(var i in this.triggerQueues){var o=this.triggerQueues[i],n="up"===i||"left"===i;o.sort(n?e:t);for(var r=0,s=o.length;s>r;r+=1){var a=o[r];(a.options.continuous||r===o.length-1)&&a.trigger([i])}}this.clearTriggerQueues()},i.prototype.next=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints),o=i===this.waypoints.length-1;return o?null:this.waypoints[i+1]},i.prototype.previous=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints);return i?this.waypoints[i-1]:null},i.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},i.prototype.remove=function(t){var e=n.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},i.prototype.first=function(){return this.waypoints[0]},i.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},i.findOrCreate=function(t){return o[t.axis][t.name]||new i(t)},n.Group=i}(),function(){"use strict";function t(t){this.$element=e(t)}var e=window.jQuery,i=window.Waypoint;e.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(e,i){t.prototype[i]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[i].apply(this.$element,t)}}),e.each(["extend","inArray","isEmptyObject"],function(i,o){t[o]=e[o]}),i.adapters.push({name:"jquery",Adapter:t}),i.Adapter=t}(),function(){"use strict";function t(t){return function(){var i=[],o=arguments[0];return t.isFunction(arguments[0])&&(o=t.extend({},arguments[1]),o.handler=arguments[0]),this.each(function(){var n=t.extend({},o,{element:this});"string"==typeof n.context&&(n.context=t(this).closest(n.context)[0]),i.push(new e(n))}),i}}var e=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=t(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=t(window.Zepto))}(),!function(){"use strict";function t(){}function e(t){this.options=i.Adapter.extend({},e.defaults,t),this.axis=this.options.horizontal?"horizontal":"vertical",this.waypoints=[],this.element=this.options.element,this.createWaypoints()}var i=window.Waypoint;e.prototype.createWaypoints=function(){for(var t={vertical:[{down:"enter",up:"exited",offset:"100%"},{down:"entered",up:"exit",offset:"bottom-in-view"},{down:"exit",up:"entered",offset:0},{down:"exited",up:"enter",offset:function(){return-this.adapter.outerHeight()}}],horizontal:[{right:"enter",left:"exited",offset:"100%"},{right:"entered",left:"exit",offset:"right-in-view"},{right:"exit",left:"entered",offset:0},{right:"exited",left:"enter",offset:function(){return-this.adapter.outerWidth()}}]},e=0,i=t[this.axis].length;i>e;e++){var o=t[this.axis][e];this.createWaypoint(o)}},e.prototype.createWaypoint=function(t){var e=this;this.waypoints.push(new i({context:this.options.context,element:this.options.element,enabled:this.options.enabled,handler:function(t){return function(i){e.options[t[i]].call(e,i)}}(t),offset:t.offset,horizontal:this.options.horizontal}))},e.prototype.destroy=function(){for(var t=0,e=this.waypoints.length;e>t;t++)this.waypoints[t].destroy();this.waypoints=[]},e.prototype.disable=function(){for(var t=0,e=this.waypoints.length;e>t;t++)this.waypoints[t].disable()},e.prototype.enable=function(){for(var t=0,e=this.waypoints.length;e>t;t++)this.waypoints[t].enable()},e.defaults={context:window,enabled:!0,enter:t,entered:t,exit:t,exited:t},i.Inview=e}();
!function t(e,n,o){function i(l,s){if(!n[l]){if(!e[l]){var c="function"==typeof require&&require;if(!s&&c)return c(l,!0);if(r)return r(l,!0);var u=new Error("Cannot find module '"+l+"'");throw u.code="MODULE_NOT_FOUND",u}var a=n[l]={exports:{}};e[l][0].call(a.exports,function(t){var n=e[l][1][t];return i(n||t)},a,a.exports,t,e,n,o)}return n[l].exports}for(var r="function"==typeof require&&require,l=0;l<o.length;l++)i(o[l]);return i}({1:[function(t,e,n){$(function(){t("./modules/svg4everybody")(),t("./modules/counter")(),t("./modules/preloader")(),t("./modules/menu")(),t("./modules/ticker")(),t("./modules/waypoints")(),t("./modules/animateCss")(),t("./modules/fancybox")()})},{"./modules/animateCss":2,"./modules/counter":3,"./modules/fancybox":4,"./modules/menu":5,"./modules/preloader":6,"./modules/svg4everybody":7,"./modules/ticker":8,"./modules/waypoints":9}],2:[function(t,e,n){e.exports=function(){var t;(t=jQuery).fn.animated=function(e){t(this).css("opacity","0").addClass("animated").waypoint(function(n){"down"===n&&t(this).addClass(e).css("opacity","1")},{offset:"100%"})}}},{}],3:[function(t,e,n){e.exports=function(){$(".spincrement").spincrement({duration:5e3})}},{}],4:[function(t,e,n){e.exports=function(){$("[data-fancybox]").fancybox({protect:!0})}},{}],5:[function(t,e,n){e.exports=function(){$(".burger input").on("click",function(){$(".aside-wrap").toggleClass("active")}),$(".aside-menu a").on("click",function(){$(".aside-wrap").toggleClass("active")})}},{}],6:[function(t,e,n){e.exports=function(){$(window).on("load",function(){$("#preloader-overlay").delay(1e3).fadeOut("slow")})}},{}],7:[function(t,e,n){e.exports=function(){$(function(){svg4everybody()})}},{}],8:[function(t,e,n){e.exports=function(){var t=$('[data-ticker="list"]'),e='[data-ticker="item"]';function n(){t.animate({marginLeft:-viewportWidth},1e5,"linear",function(){t.css("margin-left","0"),n()})}itemCount=$(e).length,viewportWidth=0,function(){for(t.find(e).clone().prependTo('[data-ticker="list"]'),i=0;i<itemCount;i++){var n=$(e).eq(i).outerWidth();viewportWidth+=n}t.css("width",viewportWidth)}(),n(),t.on("mouseenter",function(){$(this).stop(!0)}).on("mouseout",function(){n()})}},{}],9:[function(t,e,n){e.exports=function(){(function(){var t,e,n=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++)if(e in this&&this[e]===t)return e;return-1},o=[].slice;t=window,e=function(t,e){var i,r,l,s,c,u,a,f,h,d,p,y,v,m,w,g;return i=t(e),f=n.call(e,"ontouchstart")>=0,s={horizontal:{},vertical:{}},c=1,a={},u="waypoints-context-id",p="resize.waypoints",y="scroll.waypoints",v=1,m="waypoints-waypoint-ids",w="waypoint",g="waypoints",r=function(){function n(n){var o=this;this.$element=n,this.element=n[0],this.didResize=!1,this.didScroll=!1,this.id="context"+c++,this.oldScroll={x:n.scrollLeft(),y:n.scrollTop()},this.waypoints={horizontal:{},vertical:{}},this.element[u]=this.id,a[this.id]=this,n.bind(y,function(){var n;if(!o.didScroll&&!f)return o.didScroll=!0,n=function(){return o.doScroll(),o.didScroll=!1},e.setTimeout(n,t[g].settings.scrollThrottle)}),n.bind(p,function(){var n;if(!o.didResize)return o.didResize=!0,n=function(){return t[g]("refresh"),o.didResize=!1},e.setTimeout(n,t[g].settings.resizeThrottle)})}return n.prototype.doScroll=function(){var e,n=this;return e={horizontal:{newScroll:this.$element.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.$element.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}},!f||e.vertical.oldScroll&&e.vertical.newScroll||t[g]("refresh"),t.each(e,function(e,o){var i,r,l;return l=[],r=o.newScroll>o.oldScroll,i=r?o.forward:o.backward,t.each(n.waypoints[e],function(t,e){var n,i;return o.oldScroll<(n=e.offset)&&n<=o.newScroll?l.push(e):o.newScroll<(i=e.offset)&&i<=o.oldScroll?l.push(e):void 0}),l.sort(function(t,e){return t.offset-e.offset}),r||l.reverse(),t.each(l,function(t,e){if(e.options.continuous||t===l.length-1)return e.trigger([i])})}),this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},n.prototype.refresh=function(){var e,n,o,i=this;return o=t.isWindow(this.element),n=this.$element.offset(),this.doScroll(),e={horizontal:{contextOffset:o?0:n.left,contextScroll:o?0:this.oldScroll.x,contextDimension:this.$element.width(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:o?0:n.top,contextScroll:o?0:this.oldScroll.y,contextDimension:o?t[g]("viewportHeight"):this.$element.height(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}},t.each(e,function(e,n){return t.each(i.waypoints[e],function(e,o){var i,r,l,s,c;if(i=o.options.offset,l=o.offset,r=t.isWindow(o.element)?0:o.$element.offset()[n.offsetProp],t.isFunction(i)?i=i.apply(o.element):"string"==typeof i&&(i=parseFloat(i),o.options.offset.indexOf("%")>-1&&(i=Math.ceil(n.contextDimension*i/100))),o.offset=r-n.contextOffset+n.contextScroll-i,(!o.options.onlyOnScroll||null==l)&&o.enabled)return null!==l&&l<(s=n.oldScroll)&&s<=o.offset?o.trigger([n.backward]):null!==l&&l>(c=n.oldScroll)&&c>=o.offset?o.trigger([n.forward]):null===l&&n.oldScroll>=o.offset?o.trigger([n.forward]):void 0})})},n.prototype.checkEmpty=function(){if(t.isEmptyObject(this.waypoints.horizontal)&&t.isEmptyObject(this.waypoints.vertical))return this.$element.unbind([p,y].join(" ")),delete a[this.id]},n}(),l=function(){function e(e,n,o){var i,r;"bottom-in-view"===o.offset&&(o.offset=function(){var e;return e=t[g]("viewportHeight"),t.isWindow(n.element)||(e=n.$element.height()),e-t(this).outerHeight()}),this.$element=e,this.element=e[0],this.axis=o.horizontal?"horizontal":"vertical",this.callback=o.handler,this.context=n,this.enabled=o.enabled,this.id="waypoints"+v++,this.offset=null,this.options=o,n.waypoints[this.axis][this.id]=this,s[this.axis][this.id]=this,(i=null!=(r=this.element[m])?r:[]).push(this.id),this.element[m]=i}return e.prototype.trigger=function(t){if(this.enabled)return null!=this.callback&&this.callback.apply(this.element,t),this.options.triggerOnce?this.destroy():void 0},e.prototype.disable=function(){return this.enabled=!1},e.prototype.enable=function(){return this.context.refresh(),this.enabled=!0},e.prototype.destroy=function(){return delete s[this.axis][this.id],delete this.context.waypoints[this.axis][this.id],this.context.checkEmpty()},e.getWaypointsByElement=function(e){var n,o;return(o=e[m])?(n=t.extend({},s.horizontal,s.vertical),t.map(o,function(t){return n[t]})):[]},e}(),d={init:function(e,n){return null==(n=t.extend({},t.fn[w].defaults,n)).handler&&(n.handler=e),this.each(function(){var e,o,i,s;return e=t(this),i=null!=(s=n.context)?s:t.fn[w].defaults.context,t.isWindow(i)||(i=e.closest(i)),i=t(i),(o=a[i[0][u]])||(o=new r(i)),new l(e,o,n)}),t[g]("refresh"),this},disable:function(){return d._invoke.call(this,"disable")},enable:function(){return d._invoke.call(this,"enable")},destroy:function(){return d._invoke.call(this,"destroy")},prev:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e>0)return t.push(n[e-1])})},next:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e<n.length-1)return t.push(n[e+1])})},_traverse:function(n,o,i){var r,l;return null==n&&(n="vertical"),null==o&&(o=e),l=h.aggregate(o),r=[],this.each(function(){var e;return e=t.inArray(this,l[n]),i(r,e,l[n])}),this.pushStack(r)},_invoke:function(e){return this.each(function(){var n;return n=l.getWaypointsByElement(this),t.each(n,function(t,n){return n[e](),!0})}),this}},t.fn[w]=function(){var e,n;return n=arguments[0],e=2<=arguments.length?o.call(arguments,1):[],d[n]?d[n].apply(this,e):t.isFunction(n)?d.init.apply(this,arguments):t.isPlainObject(n)?d.init.apply(this,[null,n]):n?t.error("The "+n+" method does not exist in jQuery Waypoints."):t.error("jQuery Waypoints needs a callback function or handler option.")},t.fn[w].defaults={context:e,continuous:!0,enabled:!0,horizontal:!1,offset:0,triggerOnce:!1},h={refresh:function(){return t.each(a,function(t,e){return e.refresh()})},viewportHeight:function(){var t;return null!=(t=e.innerHeight)?t:i.height()},aggregate:function(e){var n,o,i;return n=s,e&&(n=null!=(i=a[t(e)[0][u]])?i.waypoints:void 0),n?(o={horizontal:[],vertical:[]},t.each(o,function(e,i){return t.each(n[e],function(t,e){return i.push(e)}),i.sort(function(t,e){return t.offset-e.offset}),o[e]=t.map(i,function(t){return t.element}),o[e]=t.unique(o[e])}),o):[]},above:function(t){return null==t&&(t=e),h._filter(t,"vertical",function(t,e){return e.offset<=t.oldScroll.y})},below:function(t){return null==t&&(t=e),h._filter(t,"vertical",function(t,e){return e.offset>t.oldScroll.y})},left:function(t){return null==t&&(t=e),h._filter(t,"horizontal",function(t,e){return e.offset<=t.oldScroll.x})},right:function(t){return null==t&&(t=e),h._filter(t,"horizontal",function(t,e){return e.offset>t.oldScroll.x})},enable:function(){return h._invoke("enable")},disable:function(){return h._invoke("disable")},destroy:function(){return h._invoke("destroy")},extendFn:function(t,e){return d[t]=e},_invoke:function(e){var n;return n=t.extend({},s.vertical,s.horizontal),t.each(n,function(t,n){return n[e](),!0})},_filter:function(e,n,o){var i,r;return(i=a[t(e)[0][u]])?(r=[],t.each(i.waypoints[n],function(t,e){if(o(i,e))return r.push(e)}),r.sort(function(t,e){return t.offset-e.offset}),t.map(r,function(t){return t.element})):[]}},t[g]=function(){var t,e;return e=arguments[0],t=2<=arguments.length?o.call(arguments,1):[],h[e]?h[e].apply(null,t):h.aggregate.call(null,e)},t[g].settings={resizeThrottle:100,scrollThrottle:30},i.on("load.waypoints",function(){return t[g]("refresh")})},"function"==typeof define&&define.amd?define("waypoints",["jquery"],function(n){return e(n,t)}):e(t.jQuery,t)}).call(this)}},{}]},{},[1]);
/*!
 * jQuery UI Core 1.10.4
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */
(function(e,t){e.fn.zIndex=t;e.fn.enableSelection=t;e.fn.disableSelection=t;e.expr.pseudos.focusable=t;var n=0,i=/^ui-id-\d+$/;e.ui=e.ui||{};e.extend(e.ui,{version:"1.10.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}});e.fn.extend({focus:function(t){return function(n,i){return typeof n==="number"?this.each(function(){var t=this;setTimeout(function(){e(t).trigger("focus");if(i){i.call(t)}},n)}):t.apply(this,arguments)}}(e.fn.focus),scrollParent:function(){var t;if(e.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))){t=this.parents().filter(function(){return/(relative|absolute|fixed)/.test(e.css(this,"position"))&&/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0)}else{t=this.parents().filter(function(){return/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0)}return/fixed/.test(this.css("position"))||!t.length?e(document):t},zIndex:function(n){if(n!==t){return this.css("zIndex",n)}if(this.length){var i=e(this[0]),r,s;while(i.length&&i[0]!==document){r=i.css("position");if(r==="absolute"||r==="relative"||r==="fixed"){s=parseInt(i.css("zIndex"),10);if(!isNaN(s)&&s!==0){return s}}i=i.parent()}}return 0},uniqueId:function(){return this.each(function(){if(!this.id){this.id="ui-id-"+ ++n}})},removeUniqueId:function(){return this.each(function(){if(i.test(this.id)){e(this).removeAttr("id")}})}});function r(t,n){var i,r,o,u=t.nodeName.toLowerCase();if("area"===u){i=t.parentNode;r=i.name;if(!t.href||!r||i.nodeName.toLowerCase()!=="map"){return false}o=e("img[usemap='#"+r+"']")[0];return!!o&&s(o)}return(/input|select|textarea|button|object/.test(u)?!t.disabled:"a"===u?t.href||n:n)&&s(t)}function s(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return e.css(this,"visibility")==="hidden"}).length}e.extend(e.expr.pseudos,{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(n){return!!e.data(n,t)}}):function(t,n,i){return!!e.data(t,i[3])},focusable:function(t){return r(t,!isNaN(e.attr(t,"tabindex")))},tabbable:function(t){var n=e.attr(t,"tabindex"),i=isNaN(n);return(i||n>=0)&&r(t,!i)}});if(!e("<a>").outerWidth(1).jquery){e.each(["Width","Height"],function(n,i){var r=i==="Width"?["Left","Right"]:["Top","Bottom"],s=i.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};function u(t,n,i,s){e.each(r,function(){n-=parseFloat(e.css(t,"padding"+this))||0;if(i){n-=parseFloat(e.css(t,"border"+this+"Width"))||0}if(s){n-=parseFloat(e.css(t,"margin"+this))||0}});return n}e.fn["inner"+i]=function(n){if(n===t){return o["inner"+i].call(this)}return this.each(function(){e(this).css(s,u(this,n)+"px")})};e.fn["outer"+i]=function(t,n){if(typeof t!=="number"){return o["outer"+i].call(this,t)}return this.each(function(){e(this).css(s,u(this,t,true,n)+"px")})}})}if(!e.fn.addBack){e.fn.addBack=function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}}if(e("<a>").data("a-b","a").removeData("a-b").data("a-b")){e.fn.removeData=function(t){return function(n){if(arguments.length){return t.call(this,e.camelCase(n))}else{return t.call(this)}}}(e.fn.removeData)}e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());e.support.selectstart="onselectstart"in document.createElement("div");e.fn.extend({disableSelection:function(){return this.on((e.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(e){e.preventDefault()})},enableSelection:function(){return this.off(".ui-disableSelection")}});e.extend(e.ui,{plugin:{add:function(t,n,i){var r,s=e.ui[t].prototype;for(r in i){s.plugins[r]=s.plugins[r]||[];s.plugins[r].push([n,i[r]])}},call:function(e,t,n){var i,r=e.plugins[t];if(!r||!e.element[0].parentNode||e.element[0].parentNode.nodeType===11){return}for(i=0;i<r.length;i++){if(e.options[r[i][0]]){r[i][1].apply(e.element,n)}}}},hasScroll:function(t,n){if(e(t).css("overflow")==="hidden"){return false}var i=n&&n==="left"?"scrollLeft":"scrollTop",r=false;if(t[i]>0){return true}t[i]=1;r=t[i]>0;t[i]=0;return r}})})(jQuery);
//# sourceMappingURL=jquery-ui-core.js.map
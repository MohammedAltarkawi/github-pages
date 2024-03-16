/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
if(typeof window.sap!=="object"&&typeof window.sap!=="function"){window.sap={}}if(typeof window.sap.ui!=="object"){window.sap.ui={}}(function(){"use strict";if(typeof window.sap.ui.Device==="object"||typeof window.sap.ui.Device==="function"){var e="1.121.1";window.sap.ui.Device._checkAPIVersion(e);return}var n={};var t=0,i=1,r=2,a=3,o=4,s=5;var u=function(){function e(e,n){return("000"+String(e)).slice(-n)}this.defaultComponent="DEVICE";this.sWindowName=window.top==window?"":"["+window.location.pathname.split("/").slice(-1)[0]+"] ";this.log=function(n,u,d){d=d||this.defaultComponent||"";var l=new Date,f={time:e(l.getHours(),2)+":"+e(l.getMinutes(),2)+":"+e(l.getSeconds(),2),date:e(l.getFullYear(),4)+"-"+e(l.getMonth()+1,2)+"-"+e(l.getDate(),2),timestamp:l.getTime(),level:n,message:u||"",component:d||""};if(window.console){var c=f.date+" "+f.time+" "+this.sWindowName+f.message+" - "+f.component;switch(n){case t:case i:console.error(c);break;case r:console.warn(c);break;case a:console.info?console.info(c):console.log(c);break;case o:console.debug(c);break;case s:console.trace(c);break}}return f}};var d=new u;d.log(a,"Device API logging initialized");n._checkAPIVersion=function(e){var n="1.121.1";if(n!=e){d.log(r,"Device API version differs: "+n+" <-> "+e)}};var l={};function f(e,n,t){if(!l[e]){l[e]=[]}l[e].push({oListener:t,fFunction:n})}function c(e,n,t){var i=l[e];if(!i){return this}for(var r=0,a=i.length;r<a;r++){if(i[r].fFunction===n&&i[r].oListener===t){i.splice(r,1);break}}if(i.length==0){delete l[e]}}function m(e,n){var t=l[e];var i;if(t){t=t.slice();for(var r=0,a=t.length;r<a;r++){i=t[r];i.fFunction.call(i.oListener||window,n)}}}var v;var p=function(){v={userAgent:window.navigator.userAgent,platform:window.navigator.platform};if(window.navigator.hasOwnProperty("standalone")){v.standalone=window.navigator.standalone}};p();var w={WINDOWS:"win",MACINTOSH:"mac",LINUX:"linux",IOS:"iOS",ANDROID:"Android"};function S(){var e=v.userAgent;var n,t;function i(){var n=v.platform;if(n.indexOf("Win")!=-1){var t=/Windows NT (\d+).(\d)/i;var i=e.match(t);var r="";if(i){if(i[1]=="6"){if(i[2]==1){r="7"}else if(i[2]>1){r="8"}}else{r=i[1]}}return{name:w.WINDOWS,versionStr:r}}else if(n.indexOf("Mac")!=-1){return{name:w.MACINTOSH,versionStr:""}}else if(n.indexOf("Linux")!=-1){return{name:w.LINUX,versionStr:""}}d.log(a,"OS detection returned no result");return null}n=/\(([a-zA-Z ]+);\s(?:[U]?[;]?)([\D]+)((?:[\d._]*))(?:.*[\)][^\d]*)([\d.]*)\s/;t=e.match(n);if(t){var r=/iPhone|iPad|iPod/;if(t[0].match(r)){t[3]=t[3].replace(/_/g,".");return{name:w.IOS,versionStr:t[3]}}else if(t[2].match(/Android/)){t[2]=t[2].replace(/\s/g,"");return{name:w.ANDROID,versionStr:t[3]}}}n=/\((Android)[\s]?([\d][.\d]*)?;.*Firefox\/[\d][.\d]*/;t=e.match(n);if(t){return{name:w.ANDROID,versionStr:t.length==3?t[2]:""}}return i()}function h(){n.os=S()||{};n.os.OS=w;n.os.version=n.os.versionStr?parseFloat(n.os.versionStr):-1;if(n.os.name){for(var e in w){if(w[e]===n.os.name){n.os[e.toLowerCase()]=true}}}}h();var g={FIREFOX:"ff",CHROME:"cr",SAFARI:"sf",ANDROID:"an"};function E(){var e=v.userAgent,n=e.toLowerCase();
/*!
		 * Taken from jQuery JavaScript Library v1.7.1
		 * http://jquery.com/
		 *
		 * Copyright 2011, John Resig
		 * Dual licensed under the MIT or GPL Version 2 licenses.
		 * http://jquery.org/license
		 *
		 * Includes Sizzle.js
		 * http://sizzlejs.com/
		 * Copyright 2011, The Dojo Foundation
		 * Released under the MIT, BSD, and GPL Licenses.
		 *
		 * Date: Mon Nov 21 21:11:03 2011 -0500
		 */function t(){var e=/(webkit)[ \/]([\w.]+)/;var t=/(mozilla)(?:.*? rv:([\w.]+))?/;var i=e.exec(n)||n.indexOf("compatible")<0&&t.exec(n)||[];var r={browser:i[1]||"",version:i[2]||"0"};r[r.browser]=true;return r}var i=t();var r;var a;var o;if(i.mozilla){r=/Mobile/;if(e.match(/Firefox\/(\d+\.\d+)/)){o=parseFloat(RegExp.$1);a={name:g.FIREFOX,versionStr:""+o,version:o,mozilla:true,mobile:r.test(e)}}else{a={mobile:r.test(e),mozilla:true,version:-1}}}else if(i.webkit){var s=n.match(/webkit[\/]([\d.]+)/);var u;if(s){u=s[1]}r=/Mobile/;var d=e.match(/(Chrome|CriOS)\/(\d+\.\d+).\d+/);var l=e.match(/FxiOS\/(\d+\.\d+)/);var f=e.match(/Android .+ Version\/(\d+\.\d+)/);if(d||l||f){var c,m,p;if(d){c=g.CHROME;p=r.test(e);m=parseFloat(d[2])}else if(l){c=g.FIREFOX;p=true;m=parseFloat(l[1])}else if(f){c=g.ANDROID;p=r.test(e);m=parseFloat(f[1])}a={name:c,mobile:p,versionStr:""+m,version:m,webkit:true,webkitVersion:u}}else{var w=/Version\/(\d+\.\d+).*Safari/;if(w.test(e)||/iPhone|iPad|iPod/.test(e)){var S=v.standalone;a={name:g.SAFARI,fullscreen:S===undefined?false:S,webview:/SAPFioriClient/.test(e),mobile:r.test(e),webkit:true,webkitVersion:u};var h=w.exec(e);if(h){o=parseFloat(h[1]);a.versionStr=""+o;a.version=o}else{a.version=-1}}else{a={mobile:r.test(e),webkit:true,webkitVersion:u,version:-1}}}}else{a={name:"",versionStr:"",version:-1,mobile:false}}if((i.chrome||window.Intl&&window.Intl.v8BreakIterator)&&"CSS"in window){a.blink=true}return a}function A(){n.browser=E();n.browser.BROWSER=g;if(n.browser.name){for(var e in g){if(g[e]===n.browser.name){n.browser[e.toLowerCase()]=true}}}}A();n.support={};var D=function(){return!!("ontouchstart"in window||window.navigator.maxTouchPoints>0||window.DocumentTouch&&document instanceof window.DocumentTouch||window.TouchEvent&&n.browser.firefox)};n.support.touch=D();n.support.pointer=!!window.PointerEvent;n.support.matchmedia=true;n.support.matchmedialistener=true;n.support.orientation=!!("orientation"in window&&"onorientationchange"in window);n.support.retina=window.retina||window.devicePixelRatio>=2;n.support.websocket="WebSocket"in window;n.support.input={};n.support.input.placeholder="placeholder"in document.createElement("input");n.media={};var b={SAP_3STEPS:"3Step",SAP_4STEPS:"4Step",SAP_6STEPS:"6Step",SAP_STANDARD:"Std",SAP_STANDARD_EXTENDED:"StdExt"};n.media.RANGESETS=b;n.media._predefinedRangeSets={};n.media._predefinedRangeSets[b.SAP_3STEPS]={points:[520,960],unit:"px",name:b.SAP_3STEPS,names:["S","M","L"]};n.media._predefinedRangeSets[b.SAP_4STEPS]={points:[520,760,960],unit:"px",name:b.SAP_4STEPS,names:["S","M","L","XL"]};n.media._predefinedRangeSets[b.SAP_6STEPS]={points:[241,400,541,768,960],unit:"px",name:b.SAP_6STEPS,names:["XS","S","M","L","XL","XXL"]};n.media._predefinedRangeSets[b.SAP_STANDARD]={points:[600,1024],unit:"px",name:b.SAP_STANDARD,names:["Phone","Tablet","Desktop"]};n.media._predefinedRangeSets[b.SAP_STANDARD_EXTENDED]={points:[600,1024,1440],unit:"px",name:b.SAP_STANDARD_EXTENDED,names:["Phone","Tablet","Desktop","LargeDesktop"]};var T=b.SAP_STANDARD;var P=n.support.matchmedialistener?0:100;var R={};var _=null;function N(e,n,t){t=t||"px";var i="all";if(e>0){i=i+" and (min-width:"+e+t+")"}if(n>0){i=i+" and (max-width:"+n+t+")"}return i}function I(e){if(!n.support.matchmedialistener&&_==L()[0]){return}if(R[e].timer){clearTimeout(R[e].timer);R[e].timer=null}R[e].timer=setTimeout(function(){var n=O(e,false);if(n){m("media_"+e,n)}},P)}function O(e,t,i){function a(e,n){var t=R[e].queries[n];var i={from:t.from,unit:R[e].unit};if(t.to>=0){i.to=t.to}if(R[e].names){i.name=R[e].names[n]}return i}i=i||n.media.matches;if(R[e]){var o=R[e].queries;var s=null;for(var u=0,l=o.length;u<l;u++){var f=o[u];if((f!=R[e].currentquery||t)&&i(f.from,f.to,R[e].unit)){if(!t){R[e].currentquery=f}if(!R[e].noClasses&&R[e].names&&!t){x(e,R[e].names[u])}s=a(e,u)}}return s}d.log(r,"No queryset with name "+e+" found","DEVICE.MEDIA");return null}function x(e,n,t){var i="sapUiMedia-"+e+"-";k(i+n,t,i)}function k(e,n,t){var i=document.documentElement;if(i.className.length==0){if(!n){i.className=e}}else{var r=i.className.split(" ");var a="";for(var o=0;o<r.length;o++){if(t&&r[o].indexOf(t)!=0||!t&&r[o]!=e){a=a+r[o]+" "}}if(!n){a=a+e}i.className=a}}function L(){return[window.innerWidth,window.innerHeight]}function C(e,n,t,i){function r(e,n){if(n==="em"||n==="rem"){var t=window.getComputedStyle||function(e){return e.currentStyle};var i=t(document.documentElement).fontSize;var r=i&&i.indexOf("px")>=0?parseFloat(i,10):16;return e*r}return e}e=r(e,t);n=r(n,t);var a=i[0];var o=e<0||e<=a;var s=n<0||a<=n;return o&&s}function y(e,n,t){return C(e,n,t,L())}function F(e,n,t){var i=N(e,n,t);var r=window.matchMedia(i);return r&&r.matches}n.media.matches=n.support.matchmedia?F:y;n.media.attachHandler=function(e,n,t){var i=t||T;f("media_"+i,e,n)};n.media.detachHandler=function(e,n,t){var i=t||T;c("media_"+i,e,n)};n.media.initRangeSet=function(e,t,i,r,o){var s;if(!e){s=n.media._predefinedRangeSets[T]}else if(e&&n.media._predefinedRangeSets[e]){s=n.media._predefinedRangeSets[e]}else{s={name:e,unit:(i||"px").toLowerCase(),points:t||[],names:r,noClasses:!!o}}if(n.media.hasRangeSet(s.name)){d.log(a,"Range set "+s.name+" has already been initialized","DEVICE.MEDIA");return}e=s.name;s.queries=[];s.timer=null;s.currentquery=null;s.listener=function(){return I(e)};var u,l,f;var c=s.points;for(var m=0,v=c.length;m<=v;m++){u=m==0?0:c[m-1];l=m==c.length?-1:c[m];f=N(u,l,s.unit);s.queries.push({query:f,from:u,to:l})}if(s.names&&s.names.length!=s.queries.length){s.names=null}R[s.name]=s;s.queries.forEach(function(e){e.media=window.matchMedia(e.query);if(e.media.addEventListener){e.media.addEventListener("change",s.listener)}else{e.media.addListener(s.listener)}});s.listener()};n.media.getCurrentRange=function(e,t){if(!n.media.hasRangeSet(e)){return null}return O(e,true,isNaN(t)?null:function(e,n,i){return C(e,n,i,[t,0])})};n.media.hasRangeSet=function(e){return e&&!!R[e]};n.media.removeRangeSet=function(e){if(!n.media.hasRangeSet(e)){d.log(a,"RangeSet "+e+" not found, thus could not be removed.","DEVICE.MEDIA");return}for(var t in b){if(e===b[t]){d.log(r,"Cannot remove default rangeset - no action taken.","DEVICE.MEDIA");return}}var i=R[e];var o=i.queries;for(var s=0;s<o.length;s++){if(o[s].media.removeEventListener){o[s].media.removeEventListener("change",i.listener)}else{o[s].media.removeListener(i.listener)}}x(e,"",true);delete l["media_"+e];delete R[e]};var M={TABLET:"tablet",PHONE:"phone",DESKTOP:"desktop",COMBI:"combi"};n.system={};function z(e){var t=!!X(e);var i={};i.tablet=t;i.phone=n.support.touch&&!t;i.desktop=!!(!i.tablet&&!i.phone||n.os.windows||n.os.linux||n.os.macintosh);i.combi=i.desktop&&i.tablet;i.SYSTEMTYPE=M;for(var r in M){k("sap-"+M[r],!i[M[r]])}return i}function X(){var e=v.userAgent;if(n.os.ios){return/ipad/i.test(e)}else if(n.os.windows||n.os.macintosh||n.os.linux){return n.support.touch}else{if(n.support.touch){return n.browser.chrome&&n.os.android&&!/Mobile Safari\/[.0-9]+/.test(e)}else{var t=/(?=android)(?=.*mobile)/i.test(e);return n.os.android&&!t}}}function q(){n.system=z();if(n.system.tablet||n.system.phone){n.browser.mobile=true}}q();n.orientation={};n.resize={};n.orientation.attachHandler=function(e,n){f("orientation",e,n)};n.resize.attachHandler=function(e,n){f("resize",e,n)};n.orientation.detachHandler=function(e,n){c("orientation",e,n)};n.resize.detachHandler=function(e,n){c("resize",e,n)};function H(e){e.landscape=re(true);e.portrait=!e.landscape}function V(){H(n.orientation);m("orientation",{landscape:n.orientation.landscape})}var W=n.resize._update=function(){U(n.resize);m("resize",{height:n.resize.height,width:n.resize.width})};function U(e){e.width=L()[0];e.height=L()[1]}function j(){var e=n.orientation.landscape;var t=re();if(e!=t){V()}if(!Z){Z=window.setTimeout(B,150)}}function B(){W();Z=null}var Y=false;var G=false;var K;var Z;var $;var J=L()[1];var Q=L()[0];var ee=false;var ne;var te=/INPUT|TEXTAREA|SELECT/;var ie=n.os.ios&&n.browser.name==="sf"&&(n.system.phone&&n.os.version>=7&&n.os.version<7.1||n.system.tablet&&n.os.version>=7);function re(e){if(n.support.touch&&n.support.orientation&&n.os.android){if(ee&&e){return!n.orientation.landscape}if(ee){return n.orientation.landscape}}else if(n.support.matchmedia&&n.support.orientation){return!!window.matchMedia("(orientation: landscape)").matches}var t=L();return t[0]>t[1]}function ae(e){if(e.type=="resize"){if(ie&&te.test(document.activeElement.tagName)&&!Y){return}var n=L()[1];var t=L()[0];var i=(new Date).getTime();if(n===J&&t===Q){return}G=true;if(J!=n&&Q==t){if(!ne||i-ne>300){ee=n<J}W()}else{Q=t}ne=i;J=n;if($){window.clearTimeout($);$=null}$=window.setTimeout(se,1200)}else if(e.type=="orientationchange"){Y=true}if(K){clearTimeout(K);K=null}K=window.setTimeout(oe,50)}function oe(){if(G&&(Y||n.system.tablet&&n.os.ios&&n.os.version>=9)){V();W();Y=false;G=false;if($){window.clearTimeout($);$=null}}K=null}function se(){Y=false;G=false;$=null}U(n.resize);H(n.orientation);window.sap.ui.Device=n;if(n.support.touch&&n.support.orientation){window.addEventListener("resize",ae,false);window.addEventListener("orientationchange",ae,false)}else{window.addEventListener("resize",j,false)}n.media.initRangeSet();n.media.initRangeSet(b["SAP_STANDARD_EXTENDED"]);n._setCustomNavigator=function(e,t){if(!e){n.support.touch=D();p()}else{n.support.touch=t;v=Object.assign(v,e)}h();A();q()};if(sap.ui.define){sap.ui.define("sap/ui/Device",[],function(){return n})}})();
//# sourceMappingURL=Device.js.map
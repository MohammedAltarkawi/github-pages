/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./library","./Button","./ScrollContainer","sap/base/i18n/Localization","sap/ui/core/Core","sap/ui/core/Control","sap/ui/core/Element","sap/ui/Device","sap/m/HeaderContainerItemNavigator","sap/ui/core/delegate/ItemNavigation","sap/ui/core/library","sap/ui/core/IntervalTrigger","sap/ui/core/Icon","./HeaderContainerRenderer","sap/base/Log","sap/ui/events/KeyCodes","sap/ui/events/PseudoEvents","sap/ui/thirdparty/jquery","sap/ui/core/Lib","sap/ui/dom/jquery/scrollLeftRTL","sap/ui/dom/jquery/scrollRightRTL","sap/ui/dom/jquery/Selectors"],function(t,e,i,r,o,s,a,n,l,h,c,g,p,d,f,u,v,jQuery,_){"use strict";var m=c.Orientation;var S=t.ScreenSizes;var b=s.extend("sap.m.HeaderContainerItemContainer",{metadata:{defaultAggregation:"item",properties:{position:{type:"int",defaultValue:null},setSize:{type:"int",defaultValue:null},ariaLabelledBy:{type:"string",defaultValue:null}},aggregations:{item:{type:"sap.ui.core.Control",multiple:false}}},renderer:{apiVersion:2,render:function(t,e){var i=e.getAggregation("item");if(!i||!i.getVisible()){return}t.openStart("div",e);t.class("sapMHdrCntrItemCntr");t.class("sapMHrdrCntrInner");t.attr("aria-setsize",e.getSetSize());t.attr("aria-posinset",e.getPosition());t.attr("role","listitem");if(e.getAriaLabelledBy()){t.attr("aria-labelledby",e.getAriaLabelledBy())}t.openEnd();t.renderControl(i);t.close("div")}}});var C=s.extend("sap.m.HeaderContainer",{metadata:{interfaces:["sap.m.ObjectHeaderContainer"],library:"sap.m",properties:{scrollStep:{type:"int",defaultValue:300,group:"Behavior"},scrollStepByItem:{type:"int",defaultValue:1,group:"Behavior"},scrollTime:{type:"int",defaultValue:500,group:"Behavior"},showOverflowItem:{type:"boolean",defaultValue:true,group:"Behavior"},showDividers:{type:"boolean",defaultValue:true,group:"Appearance"},orientation:{type:"sap.ui.core.Orientation",defaultValue:m.Horizontal,group:"Appearance"},backgroundDesign:{type:"sap.m.BackgroundDesign",defaultValue:t.BackgroundDesign.Transparent,group:"Appearance"},width:{type:"sap.ui.core.CSSSize",group:"Appearance"},height:{type:"sap.ui.core.CSSSize",group:"Appearance"},gridLayout:{type:"boolean",defaultValue:false}},defaultAggregation:"content",aggregations:{content:{type:"sap.ui.core.Control",multiple:true},_scrollContainer:{type:"sap.m.ScrollContainer",multiple:false,visibility:"hidden"},_prevButton:{type:"sap.ui.core.Control",multiple:false,visibility:"hidden"},_nextButton:{type:"sap.ui.core.Control",multiple:false,visibility:"hidden"}},associations:{ariaLabelledBy:{type:"sap.ui.core.Control",multiple:true,singularName:"ariaLabelledBy"}},events:{scroll:{}}},renderer:d});C.prototype.init=function(){this._aItemEnd=[];this._bRtl=r.getRTL();this._oRb=_.getResourceBundleFor("sap.m");this._oScrollCntr=new i(this.getId()+"-scrl-cntnr",{width:"100%",height:"100%",horizontal:!n.system.desktop});this.setAggregation("_scrollContainer",this._oScrollCntr,true);if(n.system.desktop){this._oArrowPrev=new e({id:this.getId()+"-scrl-prev-button",type:t.ButtonType.Transparent,tooltip:this._oRb.getText("HEADERCONTAINER_BUTTON_PREV_SECTION"),press:function(t){t.cancelBubble();this._scroll(this._getScrollValue(false),this.getScrollTime())}.bind(this)}).addStyleClass("sapMHdrCntrBtn").addStyleClass("sapMHdrCntrLeft");this._oArrowPrev._bExcludeFromTabChain=true;this.setAggregation("_prevButton",this._oArrowPrev,true);this._oArrowNext=new e({id:this.getId()+"-scrl-next-button",type:t.ButtonType.Transparent,tooltip:this._oRb.getText("HEADERCONTAINER_BUTTON_NEXT_SECTION"),press:function(t){t.cancelBubble();this._scroll(this._getScrollValue(true),this.getScrollTime())}.bind(this)}).addStyleClass("sapMHdrCntrBtn").addStyleClass("sapMHdrCntrRight");this._oArrowNext._bExcludeFromTabChain=true;this.setAggregation("_nextButton",this._oArrowNext,true)}else if(n.system.phone||n.system.tablet){if(!this._isMobileView()){this._oArrowPrev=new p({id:this.getId()+"-scrl-prev-button"}).addStyleClass("sapMHdrCntrBtn").addStyleClass("sapMHdrCntrLeft").addStyleClass("sapMHdrCntrBtnIcon");this.setAggregation("_prevButton",this._oArrowPrev,true);this._oArrowNext=new p({id:this.getId()+"-scrl-next-button"}).addStyleClass("sapMHdrCntrBtn").addStyleClass("sapMHdrCntrRight").addStyleClass("sapMHdrCntrBtnIcon");this.setAggregation("_nextButton",this._oArrowNext,true)}}this._oScrollCntr.addDelegate({onAfterRendering:function(){if(n.system.desktop){var t=this._oScrollCntr.getDomRef("scroll");var e=this._oScrollCntr.$("scroll");var i=e.find(".sapMHrdrCntrInner").attr("tabindex","0");t.setAttribute("role","list");if(!this._oItemNavigation){this._oItemNavigation=new l;this.addDelegate(this._oItemNavigation);this._oItemNavigation.attachEvent(h.Events.BorderReached,this._handleBorderReached,this);this._oItemNavigation.attachEvent(h.Events.AfterFocus,this._handleAfterFocus,this);this._oItemNavigation.attachEvent(h.Events.BeforeFocus,this._handleBeforeFocus,this)}this._oItemNavigation.setRootDomRef(t);this._oItemNavigation.setItemDomRefs(i);this._oItemNavigation.setTabIndex0();this._oItemNavigation.setCycling(false);this._oItemNavigation.setDisabledModifiers({sapnext:["alt","meta"],sapprevious:["alt","meta"]});this._handleMobileScrolling()}if(this._isMobileView()){this._oScrollCntr.attachBrowserEvent("scrollstart",function(t){var e=this._filterVisibleItems();this.aItemSize=[];this.aItemScrollValue=[0];var i=function(t){if(t.getDomRef()&&t.getDomRef().parentElement){return t.getDomRef().parentElement.offsetWidth+parseFloat(getComputedStyle(t.getDomRef().parentElement).marginLeft)+parseFloat(getComputedStyle(t.getDomRef().parentElement).marginRight)}};for(var r=0;r<e.length;r++){this.aItemSize.push(i(e[r]));this.aItemScrollValue.push(this.aItemScrollValue[r]?this.aItemScrollValue[r]+this.aItemSize[r]:this.aItemSize[r])}this.triggerScrollStop=false}.bind(this));this._oScrollCntr.attachBrowserEvent("scrollstop",function(t){if(!this.triggerScrollStop){var e=this._filterVisibleItems();this.triggerScrollStop=true;var i=0,r=15;var o=e[e.length-1];var s=this._oScrollCntr.getDomRef();if(s&&o){var a=o.getParent().getDomRef();var n=o.getDomRef();var l=s.scrollLeft;var h=l+s.clientWidth;var c=a.offsetLeft;var g=c+n.clientWidth;var p=g<=h&&c>=l;var d=this._bRtl?Math.abs(t.currentTarget.scrollLeft):t.currentTarget.scrollLeft;if(p){i=this.aItemScrollValue[e.length-1]-r-d;this.triggerScrollStop=false}else{var f=this.aItemScrollValue.reduce(function(t,e){var i=Math.abs(t-d);var r=Math.abs(e-d);if(i==r){return t>e?t:e}else{return r<i?e:t}});if(d==0){i=0;this.triggerScrollStop=false}else{i=f-r-d}}this._scroll(i,this.getScrollTime())}}}.bind(this))}}.bind(this)});g.addListener(this._checkOverflow,this)};C.prototype.onBeforeRendering=function(){var t=this.getOrientation()===m.Horizontal,e=t?"sap-icon://slim-arrow-left":"sap-icon://slim-arrow-up",i=t?"sap-icon://slim-arrow-right":"sap-icon://slim-arrow-down";if(!this.getHeight()){f.warning("No height provided",this)}if(!this.getWidth()){f.warning("No width provided",this)}if(n.system.desktop){this._oArrowPrev.setIcon(e);this._oArrowNext.setIcon(i)}else if(n.system.phone||n.system.tablet){this._oArrowPrev.setSrc(e);this._oArrowNext.setSrc(i)}this.getContent()};C.prototype.onAfterRendering=function(){this._bRtl=r.getRTL();this._checkOverflow()};C.prototype.exit=function(){if(this._oItemNavigation){this.removeDelegate(this._oItemNavigation);this._oItemNavigation.destroy();this._oItemNavigation=null}g.removeListener(this._checkOverflow,this)};C.prototype.onsaptabnext=function(t){var e=this.$().find(":focusable");var i=e.index(t.target);var r=e.eq(i+1).get(0);var o=this._getParentCell(t.target);var s;if(r){s=this._getParentCell(r)}if(o&&s&&o.id!==s.id||r&&r.id===this.getId()+"-after"||r&&r.id===this.getId()+"-scrl-prev-button"||r&&r.id===this.getId()+"-scrl-next-button"){var a=e.last().get(0);if(a){this._bIgnoreFocusIn=true;a.focus()}}};C.prototype.onsaptabprevious=function(t){this.$().find(".sapMHdrCntrItemCntr").css("border-color","");var e=this.$().find(":focusable");var i=e.index(t.target);var r=e.eq(i-1).get(0);var o=this._getParentCell(t.target);var s;if(r){s=this._getParentCell(r)}if(!s||o&&o.id!==s.id){var a=this.$().attr("tabindex");this.$().attr("tabindex","0");this.$().trigger("focus");if(!a){this.$().removeAttr("tabindex")}else{this.$().attr("tabindex",a)}}};C.prototype.setOrientation=function(t){this.setProperty("orientation",t);if(t===m.Horizontal&&!n.system.desktop){this._oScrollCntr.setHorizontal(true);this._oScrollCntr.setVertical(false)}else if(!n.system.desktop){this._oScrollCntr.setHorizontal(false);this._oScrollCntr.setVertical(true)}return this};C.prototype.validateAggregation=function(t,e,i){return this._callSuperMethod("validateAggregation",t,e,i)};C.prototype.getAggregation=function(t,e,i){return this._callSuperMethod("getAggregation",t,e,i)};C.prototype.setAggregation=function(t,e,i){return this._callSuperMethod("setAggregation",t,e,i)};C.prototype.indexOfAggregation=function(t,e){return this._callSuperMethod("indexOfAggregation",t,e)};C.prototype.insertAggregation=function(t,e,i,r){return this._callSuperMethod("insertAggregation",t,e,i,r)};C.prototype.addAggregation=function(t,e,i){return this._callSuperMethod("addAggregation",t,e,i)};C.prototype.removeAggregation=function(t,e,i){return this._callSuperMethod("removeAggregation",t,e,i)};C.prototype.removeAllAggregation=function(t,e){return this._callSuperMethod("removeAllAggregation",t,e)};C.prototype.destroyAggregation=function(t,e){return this._callSuperMethod("destroyAggregation",t,e)};C.prototype.onkeydown=function(t){var e=this.getOrientation()===m.Horizontal,i=this.$("prev-button-container"),r=this.$("next-button-container"),o,s=0,a=this._filterVisibleItems();if(t.which===u.ARROW_RIGHT&&e){o=a[t.srcControl.mProperties.position-1].$().parent().outerWidth(true);if(o<this._getSize(i.is(":visible"))){this._scroll(o-s,this.getScrollTime())}}else if(t.which===u.ARROW_LEFT&&e){o=a[t.srcControl.mProperties.position-1].$().parent().outerWidth(true);if(o<this._getSize(r.is(":visible"))){if(!r.is(":visible")){var n=10;if(o+n<this._getSize(true)){s=r.width()+n}else{s=r.width()}}this._scroll(-(o-s),this.getScrollTime())}}if(t.which===u.ARROW_DOWN&&!e){o=a[t.srcControl.mProperties.position-1].$().parent().outerHeight(true);if(o<this._getSize(i.is(":visible"))){this._scroll(o-s,this.getScrollTime())}}else if(t.which===u.ARROW_UP&&!e){o=a[t.srcControl.mProperties.position-1].$().parent().outerHeight(true);if(o<this._getSize(r.is(":visible"))){if(!r.is(":visible")){var n=10;if(o+n<this._getSize(true)){s=r.height()+n}else{s=r.wheightidth()}}this._scroll(-(o-s),this.getScrollTime())}}};C.prototype._setScrollInProcess=function(t){this.bScrollInProcess=t};C.prototype._scroll=function(t,e){this._setScrollInProcess(true);this.fireScroll();setTimeout(this._setScrollInProcess.bind(this,false),e+300);if(this.getOrientation()===m.Horizontal){this._hScroll(t,e)}else{this._vScroll(t,e)}};C.prototype._vScroll=function(t,e){var i=this._oScrollCntr.getDomRef(),r=i.scrollTop,o=i.scrollHeight,s=r+t,a=i.clientHeight,n=parseFloat(this.$("scroll-area").css("padding-top")),l;if(s<=0){l=this._calculateRemainingScrolling(t,e,r);this.$("scroll-area").css("transition","padding "+l+"s");this.$().removeClass("sapMHrdrTopPadding")}else if(s+a+n>=o){l=this._calculateRemainingScrolling(t,e,o-a-r);this.$("scroll-area").css("transition","padding "+l+"s");if(a+t>o&&a!==o){this.$().removeClass("sapMHrdrBottomPadding");this.$().addClass("sapMHrdrTopPadding")}else{this.$().removeClass("sapMHrdrBottomPadding")}}else{this.$("scroll-area").css("transition","padding "+e/1e3+"s")}this._oScrollCntr.scrollTo(0,s,e)};C.prototype._hScroll=function(t,e){var i=this._oScrollCntr.getDomRef();var r,o,s,a,n,l;if(!this._bRtl){o=i.scrollLeft;a=i.scrollWidth;s=i.clientWidth;r=o+t;n=parseFloat(this.$("scroll-area").css("padding-left"));if(r<=0){l=this._calculateRemainingScrolling(t,e,o);this.$("scroll-area").css("transition","padding "+l+"s");this.$().removeClass("sapMHrdrLeftPadding")}else if(r+i.clientWidth+n>=a){l=this._calculateRemainingScrolling(t,e,a-s-o);this.$("scroll-area").css("transition","padding "+l+"s");if(s+t>a&&s!==a){this.$().removeClass("sapMHrdrRightPadding");this.$().addClass("sapMHrdrLeftPadding")}else{this.$().removeClass("sapMHrdrRightPadding")}}else{this.$("scroll-area").css("transition","padding "+e/1e3+"s")}this._oScrollCntr.scrollTo(r,0,e)}else{r=jQuery(i).scrollRightRTL()+t;this._oScrollCntr.scrollTo(r>0?r:0,0,e)}};C.prototype._collectItemSize=function(){var t=0,e=this._filterVisibleItems(),i=this.getOrientation()===m.Horizontal?"outerWidth":"outerHeight";this._aItemEnd=[];e.forEach(function(e,r){t+=e.$().parent()[i](true);this._aItemEnd[r]=t},this)};C.prototype._getScrollValue=function(t){if(!this._oScrollCntr){return 0}var e=this.getOrientation()===m.Horizontal,i=this._oScrollCntr.$(),r=this.$("prev-button-container"),o=this.$("next-button-container"),s=e?i[0].scrollLeft:i[0].scrollTop,a=0,n=0,l,h=this._filterVisibleItems();var c=function(t){var i=0,s=0;var a=10;if(this._bRtl&&e){if(!r.is(":visible")){s=r.width()}if(!o.is(":visible")){s=o.width()}}for(var n=0;n<h.length&&n<t;n++){i+=g(h[n])}return i!==0?i+a-s:0}.bind(this);var g=function(t){return e?t.$().parent().outerWidth(true):t.$().parent().outerHeight(true)};var p=function(){var t=this._getSize(true),e,i=0;for(var r=a;r<h.length;r++){if(!h[r].$().is(":visible")){e=g(h[r])+c(r)-t-s;for(var o=a;o<h.length&&o<r;o++){if(l+i>e){break}a++;i+=g(h[o])}l+=i;break}}}.bind(this);if(this.getScrollStepByItem()>0){s=e&&this._bRtl?i.scrollRightRTL():s;for(var d=0;d<h.length;d++){n+=g(h[d]);if(n>=s){a=d;break}}a=(t?1:-1)*this.getScrollStepByItem()+a;if(a<0){a=0}if(a>=h.length){a=h.length-1}l=c(a)-s;if(t&&!this.getShowOverflowItem()){p()}return l}return t?this.getScrollStep():-this.getScrollStep()};C.prototype._calculateRemainingScrolling=function(t,e,i){return Math.abs(i*e/(1e3*t))};C.prototype._checkOverflow=function(){if(this.getOrientation()===m.Horizontal){this._checkHOverflow()}else{this._checkVOverflow()}};C.prototype._filterVisibleItems=function(){return this.getContent().filter(function(t){return t.getVisible()})};C.prototype._getFirstItemOffset=function(t){var e=this._filterVisibleItems()[0],i=e&&e.$(),r=i&&i.parent(),o=r&&r[0]&&r[0][t];return o||0};C.prototype._checkVOverflow=function(){var t=this._oScrollCntr.getDomRef(),e,i;if(t){var r=this._getFirstItemOffset("offsetTop");var o=Math.ceil(t.scrollTop);var s=false;var a=false;var n=t.scrollHeight;var l=t.offsetHeight;if(Math.abs(n-l)===1){n=l}if(o>r){s=true}if(n>l&&o+l<n){a=true}a=this._checkForOverflowItem(a);i=this.$("prev-button-container");e=i.is(":visible");if(e&&!s){i.hide();this.$().removeClass("sapMHrdrTopPadding")}if(!e&&s){i.show();this.$().addClass("sapMHrdrTopPadding")}i=this.$("next-button-container");var h=i.is(":visible");if(h&&!a){i.hide();this.$().removeClass("sapMHrdrBottomPadding")}if(!h&&a){i.show();this.$().addClass("sapMHrdrBottomPadding")}}};C.prototype._handleMobileScrolling=function(){if(n.browser.mobile){var t=this.$("scrl-cntnr-scroll"),e=this.getOrientation()===m.Horizontal,i=e?"clientX":"clientY",r=0,o=this,s=false;t.on("touchstart",function(t){s=true;r=t.targetTouches[0][i]});t.on("touchmove",function(t){if(s){var a=t.targetTouches[0][i],n=r-a,l=o._oScrollCntr.getDomRef();e?l.scrollLeft+=n:l.scrollTop+=n;r=a;t.preventDefault()}});t.on("touchend",function(){s=false})}};C.prototype._checkHOverflow=function(){var t=this._oScrollCntr.getDomRef(),e;if(t){var i=this._getFirstItemOffset("offsetLeft");var r=Math.ceil(t.scrollLeft);var o=false;var s=false;var a=t.scrollWidth;var n=t.offsetWidth;if(Math.abs(a-n)===1){a=n}if(this._bRtl){var l=jQuery(t).scrollLeftRTL();if(l>0){s=true}}else if(r>i){o=true}if(a-5>n){if(this._bRtl){if(jQuery(t).scrollRightRTL()>1){o=true}}else if(r+n<a){s=true}}e=this.$("prev-button-container");s=this._checkForOverflowItem(s);var h=e.is(":visible");if(h&&!o&&!this._isMobileView()){e.hide();this.$().removeClass("sapMHrdrLeftPadding")}if(!h&&o&&!this._isMobileView()){e.show();this.$().addClass("sapMHrdrLeftPadding")}e=this.$("next-button-container");var c=e.is(":visible");if(c&&!s&&!this._isMobileView()){e.hide();this.$().removeClass("sapMHrdrRightPadding")}if(!c&&s&&!this._isMobileView()){e.show();this.$().addClass("sapMHrdrRightPadding")}}};C.prototype._getSize=function(t){var e=this._oScrollCntr.$(),i=this.getOrientation()===m.Horizontal,r=this.$("next-button-container"),o=!r.is(":visible")&&t,s=i?"width":"height";return e[s]()-(o?r[s]():0)};C.prototype._checkForOverflowItem=function(t){if(this._oScrollCntr&&!this.getShowOverflowItem()){var e=this._oScrollCntr.$(),i=this.getOrientation()===m.Horizontal,r=!i?e[0].scrollTop:this._bRtl?e.scrollRightRTL():e[0].scrollLeft,o=i?"width":"height",s=this._getSize(t),a=this._filterVisibleItems();this._collectItemSize();this._aItemEnd.forEach(function(e,i){var n=a[i].$(),l=n.parent(),h=n.is(":visible");if(t&&e>r+s){if(i===0||this._aItemEnd[i-1]<=r){l.css(o,"auto");n.show()}else if(h){l[o](l[o]());n.hide();t=true}}else{if(!h){l.css(o,"auto");n.show()}}},this)}return t};C.prototype._handleBorderReached=function(t){var e=t.getParameter("index");if(e===0){this._scroll(this._getScrollValue(false),this.getScrollTime())}else if(e===this._filterVisibleItems().length-1){this._scroll(this._getScrollValue(true),this.getScrollTime())}};C.prototype._handleAfterFocus=function(t){var e=t.getParameter("index");if(e===0){this._scroll(this._getScrollValue(false),this.getScrollTime())}else if(e===this._filterVisibleItems().length-1){this._scroll(this._getScrollValue(true),this.getScrollTime())}};C.prototype._handleFocusAgain=function(t){t.getParameter("event").preventDefault()};C.prototype._handleBeforeFocus=function(t){var e=t.getParameter("event");if(jQuery(e.target).hasClass("sapMHdrCntrItemCntr")||jQuery(e.target).hasClass("sapMScrollContScroll")||v.events.sapprevious.fnCheck(e)||v.events.sapnext.fnCheck(e)){this.$().find(".sapMHdrCntrItemCntr").css("border-color","")}else{this.$().find(".sapMHdrCntrItemCntr").css("border-color","transparent")}};C.prototype._isMobileView=function(){return this.getGridLayout()&&this.getOrientation()===m.Horizontal&&n.resize.width>=S.xsmall&&n.resize.width<S.tablet};C.prototype._unWrapHeaderContainerItemContainer=function(t){if(t instanceof b){t=t.getItem()}else if(Array.isArray(t)){for(var e=0;e<t.length;e++){if(t[e]instanceof b){t[e]=t[e].getItem()}}}return t};C._AGGREGATION_FUNCTIONS=["validateAggregation","getAggregation","setAggregation","indexOfAggregation","removeAggregation"];C._AGGREGATION_FUNCTIONS_FOR_INSERT=["insertAggregation","addAggregation"];C.prototype._callSuperMethod=function(t,e){var i=Array.prototype.slice.call(arguments);if(e==="content"){var r=i[2];i[1]="content";if(r instanceof s){if(C._AGGREGATION_FUNCTIONS.indexOf(t)>-1&&r.getParent()instanceof b){i[2]=r.getParent()}else if(C._AGGREGATION_FUNCTIONS_FOR_INSERT.indexOf(t)>-1){i[2]=new b({item:r})}}var o=[];this._oScrollCntr.getContent().forEach(function(t,e){if(!t.getItem()){o.push(e)}});for(var a=0;a<o.length;a++){this._oScrollCntr.removeContent(o[a])}var n=this._oScrollCntr[t].apply(this._oScrollCntr,i.slice(1));if(t!=="removeAllAggregation"){var l=this._oScrollCntr.getContent();var h=this.getAriaLabelledBy();var c=1;var g=l.filter(function(t){return t.getItem().getVisible()}).length;for(var a=0;a<l.length;a++){var p=l[a];if(p.getItem().getVisible()){p.setVisible(true);p.setPosition(c);p.setSetSize(g);p.setAriaLabelledBy(h[a]);c++}else{p.setVisible(false)}}}return this._unWrapHeaderContainerItemContainer(n)}else{return s.prototype[t].apply(this,i.slice(1))}};C.prototype._callMethodInManagedObject=function(){throw new TypeError("Method no longer exists: HeaderContainer.prototype._callMethodInManagedObject")};C.prototype._getParentCell=function(t){return jQuery(t).parents(".sapMHrdrCntrInner").andSelf(".sapMHrdrCntrInner").get(0)};C.prototype.onfocusin=function(t){if(this._bIgnoreFocusIn){this._bIgnoreFocusIn=false;return}if(t.target.id===this.getId()+"-after"){this._restoreLastFocused()}};C.prototype._restoreLastFocused=function(){if(!this._oItemNavigation){return}var t=this._oItemNavigation.getItemDomRefs();var e=this._oItemNavigation.getFocusedIndex();var i=jQuery(t[e]);var r=a.closestTo(i[0])||{};var o=r.getTabbables?r.getTabbables():i.find(":sapTabbable");o.eq(-1).add(i).eq(-1).trigger("focus")};return C});
//# sourceMappingURL=HeaderContainer.js.map
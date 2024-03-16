/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./library","sap/base/i18n/Localization","sap/ui/core/Control","sap/ui/core/IconPool","sap/ui/core/Lib","sap/ui/core/library","sap/ui/core/RenderManager","sap/ui/core/util/ResponsivePaddingsEnablement","sap/ui/Device","sap/m/Text","sap/ui/events/KeyCodes","./ObjectHeaderRenderer","./ObjectMarker","./ObjectNumber","sap/ui/thirdparty/jquery","sap/m/ImageHelper"],function(e,t,i,r,s,n,o,a,l,u,p,g,d,h,jQuery,c){"use strict";var f=e.BackgroundDesign;var m=n.TextAlign;var y=e.ObjectMarkerType;var v=n.TitleLevel;var b=n.TextDirection;var _=n.ValueState;var I=e.ObjectHeaderPictureShape;var A=i.extend("sap.m.ObjectHeader",{metadata:{library:"sap.m",designtime:"sap/m/designtime/ObjectHeader.designtime",properties:{title:{type:"string",group:"Misc",defaultValue:null},number:{type:"string",group:"Misc",defaultValue:null},numberUnit:{type:"string",group:"Misc",defaultValue:null},intro:{type:"string",group:"Misc",defaultValue:null},introActive:{type:"boolean",group:"Misc",defaultValue:null},titleActive:{type:"boolean",group:"Misc",defaultValue:null},icon:{type:"sap.ui.core.URI",group:"Misc",defaultValue:null},iconActive:{type:"boolean",group:"Misc",defaultValue:null},iconAlt:{type:"string",group:"Accessibility",defaultValue:null},iconTooltip:{type:"string",group:"Accessibility",defaultValue:null},iconDensityAware:{type:"boolean",group:"Misc",defaultValue:true},imageShape:{type:"sap.m.ObjectHeaderPictureShape",group:"Appearance",defaultValue:I.Square},markFavorite:{type:"boolean",group:"Misc",defaultValue:false,deprecated:true},markFlagged:{type:"boolean",group:"Misc",defaultValue:false,deprecated:true},showMarkers:{type:"boolean",group:"Misc",defaultValue:false,deprecated:true},showTitleSelector:{type:"boolean",group:"Misc",defaultValue:false},numberState:{type:"sap.ui.core.ValueState",group:"Misc",defaultValue:_.None},condensed:{type:"boolean",group:"Appearance",defaultValue:false},backgroundDesign:{type:"sap.m.BackgroundDesign",group:"Appearance"},responsive:{type:"boolean",group:"Behavior",defaultValue:false},fullScreenOptimized:{type:"boolean",group:"Appearance",defaultValue:false},titleHref:{type:"sap.ui.core.URI",group:"Data",defaultValue:null},titleTarget:{type:"string",group:"Behavior",defaultValue:null},introHref:{type:"sap.ui.core.URI",group:"Data",defaultValue:null},introTarget:{type:"string",group:"Behavior",defaultValue:null},titleTextDirection:{type:"sap.ui.core.TextDirection",group:"Appearance",defaultValue:b.Inherit},introTextDirection:{type:"sap.ui.core.TextDirection",group:"Appearance",defaultValue:b.Inherit},numberTextDirection:{type:"sap.ui.core.TextDirection",group:"Appearance",defaultValue:b.Inherit},titleSelectorTooltip:{type:"string",group:"Misc",defaultValue:"Options"},titleLevel:{type:"sap.ui.core.TitleLevel",group:"Appearance",defaultValue:v.H1}},defaultAggregation:"attributes",aggregations:{attributes:{type:"sap.m.ObjectAttribute",multiple:true,singularName:"attribute"},firstStatus:{type:"sap.m.ObjectStatus",multiple:false,deprecated:true},secondStatus:{type:"sap.m.ObjectStatus",multiple:false,deprecated:true},statuses:{type:"sap.ui.core.Control",multiple:true,singularName:"status"},_objectNumber:{type:"sap.m.ObjectNumber",multiple:false,visibility:"hidden"},additionalNumbers:{type:"sap.m.ObjectNumber",multiple:true,singularName:"additionalNumber"},headerContainer:{type:"sap.m.ObjectHeaderContainer",multiple:false},markers:{type:"sap.m.ObjectMarker",multiple:true,singularName:"marker"}},associations:{ariaDescribedBy:{type:"sap.ui.core.Control",multiple:true,singularName:"ariaDescribedBy"},ariaLabelledBy:{type:"sap.ui.core.Control",multiple:true,singularName:"ariaLabelledBy"}},events:{titlePress:{parameters:{domRef:{type:"object"}}},introPress:{parameters:{domRef:{type:"object"}}},iconPress:{parameters:{domRef:{type:"object"}}},titleSelectorPress:{parameters:{domRef:{type:"object"}}}},dnd:{draggable:false,droppable:true}},renderer:g});A._getResourceBundle=function(){return s.getResourceBundleFor("sap.m")};a.call(A.prototype,{header:{selector:".sapMOH, .sapMOHR"}});A.prototype.init=function(){this._oTitleArrowIcon=r.createControlByURI({id:this.getId()+"-titleArrow",src:r.getIconURI("arrow-down"),decorative:false,visible:false,tooltip:A._getResourceBundle().getText("OH_SELECT_ARROW_TOOLTIP"),size:"1.375rem",press:function(e){}});this._fNumberWidth=undefined;this._titleText=new u(this.getId()+"-titleText");this._titleText.setMaxLines(3);this._initResponsivePaddingsEnablement()};A.prototype.insertAttribute=function(e,t){var i=this.insertAggregation("attributes",e,t);this._registerControlListener(e);return i};A.prototype.addAttribute=function(e){var t=this.addAggregation("attributes",e);this._registerControlListener(e);return t};A.prototype.removeAttribute=function(e){var t=this.removeAggregation("attributes",e);this._deregisterControlListener(t);return t};A.prototype.removeAllAttributes=function(){var e=this.removeAllAggregation("attributes");e.forEach(this._deregisterControlListener,this);return e};A.prototype.destroyAttributes=function(){var e=this.getAggregation("attributes");if(e!==null){e.forEach(this._deregisterControlListener,this)}return this.destroyAggregation("attributes")};A.prototype.insertStatus=function(e,t){var i=this.insertAggregation("statuses",e,t);this._registerControlListener(e);return i};A.prototype.addStatus=function(e){var t=this.addAggregation("statuses",e);this._registerControlListener(e);return t};A.prototype.removeStatus=function(e){var t=this.removeAggregation("statuses",e);this._deregisterControlListener(t);return t};A.prototype.removeAllStatuses=function(){var e=this.removeAllAggregation("statuses");e.forEach(this._deregisterControlListener,this);return e};A.prototype.destroyStatuses=function(){var e=this.getAggregation("statuses");if(e!==null){e.forEach(this._deregisterControlListener,this)}return this.destroyAggregation("statuses")};A.prototype._registerControlListener=function(e){if(e){e.attachEvent("_change",this.invalidate,this)}};A.prototype._deregisterControlListener=function(e){if(e){e.detachEvent("_change",this.invalidate,this)}};A.prototype.setCondensed=function(e){this.setProperty("condensed",e);if(this.getCondensed()){this._oTitleArrowIcon.setSize("1rem")}else{this._oTitleArrowIcon.setSize("1.375rem")}return this};A.prototype.setNumber=function(e){this.setProperty("number",e);this._getObjectNumber().setNumber(e);return this};A.prototype.setNumberUnit=function(e){this.setProperty("numberUnit",e);this._getObjectNumber().setUnit(e);return this};A.prototype.setNumberState=function(e){this.setProperty("numberState",e);this._getObjectNumber().setState(e);return this};A.prototype.setTitleSelectorTooltip=function(e){this.setProperty("titleSelectorTooltip",e);this._oTitleArrowIcon.setTooltip(e);return this};A.prototype.setMarkFavorite=function(e){return this._setOldMarkers(y.Favorite,e)};A.prototype.setMarkFlagged=function(e){return this._setOldMarkers(y.Flagged,e)};A.prototype.setShowMarkers=function(e){var t,i=this.getMarkers(),r;this.setProperty("showMarkers",e);for(r=0;r<i.length;r++){t=i[r].getType();if(t===y.Flagged&&this.getMarkFlagged()||t===y.Favorite&&this.getMarkFavorite()){i[r].setVisible(e)}}return this};A.prototype.setIconAlt=function(e){this.setProperty("iconAlt",e);this.invalidate();return this};A.prototype._setOldMarkers=function(e,t){var i=this.getMarkers(),r=false,s,n={Flagged:"-flag",Favorite:"-favorite"};this.setProperty("mark"+e,t,false);if(!this.getShowMarkers()){t=false}for(s=0;s<i.length;s++){if(i[s].getType()===e){r=true;i[s].setVisible(t);break}}if(!r){this.insertAggregation("markers",new d({id:this.getId()+n[e],type:e,visible:t}))}return this};A.prototype._getVisibleMarkers=function(){var e=this.getMarkers(),t=[],i;for(i=0;i<e.length;i++){if(e[i].getVisible()){t.push(e[i])}}return t};A.prototype._getObjectNumber=function(){var e=this.getAggregation("_objectNumber");if(!e){e=new h(this.getId()+"-number",{emphasized:false});this.setAggregation("_objectNumber",e,true)}return e};A.prototype.getFocusDomRef=function(){if(this.getResponsive()){return this.$("txt")[0]}else{return this.$("title")[0]}};A.prototype.ontap=function(e){var t=e.target.id;if(this.getIntroActive()&&t===this.getId()+"-intro"){if(!this.getIntroHref()){this.fireIntroPress({domRef:window.document.getElementById(t)})}}else if(!this.getResponsive()&&this.getTitleActive()&&(t===this.getId()+"-title"||jQuery(e.target).parent().attr("id")===this.getId()+"-title"||t===this.getId()+"-titleText-inner")){if(!this.getTitleHref()){e.preventDefault();t=this.getId()+"-title";this.fireTitlePress({domRef:window.document.getElementById(t)})}}else if(this.getResponsive()&&this.getTitleActive()&&(t===this.getId()+"-txt"||jQuery(e.target).parent().attr("id")===this.getId()+"-txt")){if(!this.getTitleHref()){e.preventDefault();t=this.getId()+"-txt";this.fireTitlePress({domRef:window.document.getElementById(t)})}}else if(e.target.classList.contains("sapUiIconTitle")){this.fireTitleSelectorPress({domRef:e.target.parentElement})}else if(t.indexOf(this.getId())!==-1){e.setMarked();e.preventDefault()}};A.prototype._handleSpaceOrEnter=function(e){var t=e.target.id;e.setMarked();if(!this.getResponsive()&&this.getTitleActive()&&(t===this.getId()+"-title"||jQuery(e.target).parent().attr("id")===this.getId()+"-title"||t===this.getId()+"-titleText-inner")){t=this.getId()+"-title";if(!this.getTitleHref()){e.preventDefault();this.fireTitlePress({domRef:t?window.document.getElementById(t):null})}else{if(e.type==="sapspace"){this._linkClick(e,t)}}}else if(this.getResponsive()&&this.getTitleActive()&&(t===this.getId()+"-txt"||jQuery(e.target).parent().attr("id")===this.getId()+"-txt")){t=this.getId()+"-txt";if(!this.getTitleHref()){e.preventDefault();this.fireTitlePress({domRef:t?window.document.getElementById(t):null})}else{if(e.type==="sapspace"){this._linkClick(e,t)}}}else if(this.getIntroActive()&&t===this.getId()+"-intro"){if(!this.getIntroHref()){this.fireIntroPress({domRef:t?window.document.getElementById(t):null})}}else if(t===this.getId()+"-titleArrow"){this.fireTitleSelectorPress({domRef:t?window.document.getElementById(t):null})}};A.prototype.onkeyup=function(e){if(e.which===p.SPACE){this._handleSpaceOrEnter(e)}};A.prototype.onsapenter=A.prototype._handleSpaceOrEnter;A.prototype._linkClick=function(e,t){e.setMarked();var i=document.createEvent("MouseEvents");i.initEvent("click",false,true);(t?window.document.getElementById(t):null).dispatchEvent(i)};A.prototype._onOrientationChange=function(){var e=this.getId();if(l.system.tablet&&this.getFullScreenOptimized()&&(this._hasAttributes()||this._hasStatus())){this._rerenderStates()}if(l.system.phone){if(l.orientation.portrait){if(this.getTitle().length>50){this._rerenderTitle(50)}if(this.getIcon()){jQuery(document.getElementById(e+"-titlediv")).removeClass("sapMOHRTitleIcon");jQuery(document.getElementById(e+"-titleIcon")).addClass("sapMOHRHideIcon")}}else{if(l.orientation.landscape){if(this.getTitle().length>80){this._rerenderTitle(80)}if(this.getIcon()){jQuery(document.getElementById(e+"-titlediv")).addClass("sapMOHRTitleIcon");jQuery(document.getElementById(e+"-titleIcon")).removeClass("sapMOHRHideIcon")}}}this._adjustNumberDiv()}this._adjustIntroDiv()};A.prototype._rerenderTitle=function(e){var t=(new o).getInterface();this.getRenderer()._rerenderTitle(t,this,e);t.destroy()};A.prototype._rerenderStates=function(){var e=(new o).getInterface();this.getRenderer()._rerenderResponsiveStates(e,this);e.destroy()};A.prototype.exit=function(){if(!l.system.phone){this._detachMediaContainerWidthChange(this._rerenderOHR,this,l.media.RANGESETS.SAP_STANDARD)}if(l.system.tablet||l.system.phone){l.orientation.detachHandler(this._onOrientationChange,this)}if(this._oImageControl){this._oImageControl.destroy();this._oImageControl=undefined}if(this._oTitleArrowIcon){this._oTitleArrowIcon.destroy();this._oTitleArrowIcon=undefined}if(this._titleText){this._titleText.destroy();this._titleText=undefined}if(this._introText){this._introText.destroy();this._introText=undefined}};A.prototype._getImageControl=function(){var e=this.getId()+"-img";var t="2.5rem";var i=jQuery.extend({src:this.getIcon(),tooltip:this.getIconTooltip(),alt:this.isPropertyInitial("iconAlt")?A._getResourceBundle().getText("OH_ARIA_ICON"):this.getIconAlt(),useIconTooltip:false,densityAware:this.getIconDensityAware(),decorative:false},r.isIconURI(this.getIcon())?{size:t}:{});if(this.getIconActive()){i.press=function(e){this.fireIconPress({domRef:e.getSource().getDomRef()})}.bind(this);i.decorative=false}this._oImageControl=c.getImageControl(e,this._oImageControl,this,i);return this._oImageControl};A.prototype.onBeforeRendering=function(){if(l.system.tablet||l.system.phone){l.orientation.detachHandler(this._onOrientationChange,this)}if(!l.system.phone){this._detachMediaContainerWidthChange(this._rerenderOHR,this,l.media.RANGESETS.SAP_STANDARD)}if(this._introText){this._introText.destroy();this._introText=undefined}};A.prototype.onAfterRendering=function(){var e=this.getAggregation("_objectNumber");var i=t.getRTL();var r=this.$("titleArrow");r.attr("role","button");if(this.getResponsive()){this._adjustIntroDiv();if(e&&e.getNumber()){if(l.system.desktop&&jQuery("html").hasClass("sapUiMedia-Std-Desktop")&&this.getFullScreenOptimized()&&this._iCountVisAttrStat>=1&&this._iCountVisAttrStat<=3){e.setTextAlign(i?m.Right:m.Left)}else{e.setTextAlign(i?m.Left:m.Right)}}this._adjustNumberDiv();if(l.system.tablet||l.system.phone){l.orientation.attachHandler(this._onOrientationChange,this)}if(!l.system.phone){this._attachMediaContainerWidthChange(this._rerenderOHR,this,l.media.RANGESETS.SAP_STANDARD)}}else{var s=i?m.Left:m.Right;if(e&&e.getNumber()){e.setTextAlign(s)}if(this.getAdditionalNumbers()){this._setTextAlignANum(s)}}};A.prototype._rerenderOHR=function(){this.invalidate()};A.prototype._adjustNumberDiv=function(){var e=this.getId();var i=this.getAggregation("_objectNumber");var r=t.getRTL();if(i&&i.getNumber()){var s=jQuery(document.getElementById(e+"-number"));var n=jQuery(document.getElementById(e+"-titlediv"));if(this._isMediaSize("Phone")){if(s.hasClass("sapMObjectNumberBelowTitle")){i.setTextAlign(r?m.Left:m.Right);s.removeClass("sapMObjectNumberBelowTitle");n.removeClass("sapMOHRTitleDivFull")}var o=s.parent().width()*.4;if(s.outerWidth()>o){i.setTextAlign(r?m.Right:m.Left);s.addClass("sapMObjectNumberBelowTitle");n.addClass("sapMOHRTitleDivFull")}}}};A.prototype._adjustIntroDiv=function(){var e=this.getId();var t=jQuery(document.getElementById(e+"-txt"));var i=jQuery(document.getElementById(e+"-titleArrow"));var r=jQuery(document.getElementById(e+"-intro"));if(r.parent().hasClass("sapMOHRIntroMargin")){r.parent().removeClass("sapMOHRIntroMargin")}if(i.height()!==null&&t.height()<i.height()){r.parent().addClass("sapMOHRIntroMargin")}};A._escapeId=function(e){return e?"#"+e.replace(/(:|\.)/g,"\\$1"):""};A.prototype._hasBottomContent=function(){return this._hasAttributes()||this._hasStatus()||this._hasMarkers()};A.prototype._hasIcon=function(){return!!this.getIcon().trim()};A.prototype._hasAttributes=function(){var e=this.getAttributes();if(e&&e.length>0){for(var t=0;t<e.length;t++){if(!e[t]._isEmpty()){return true}}}return false};A.prototype._hasStatus=function(){var e=false;e=this.getFirstStatus()&&!this.getFirstStatus()._isEmpty()||this.getSecondStatus()&&!this.getSecondStatus()._isEmpty();if(!e&&this.getStatuses()&&this.getStatuses().length>0){var t=this.getStatuses();for(var i=0;i<t.length;i++){if(t[i]&&t[i].isA("sap.m.ObjectStatus")&&!t[i]._isEmpty()){e=true;break}else if(t[i]&&t[i].isA("sap.m.ProgressIndicator")){e=true;break}}}return e};A.prototype._hasMarkers=function(){var e=this.getMarkers(),t=false,i=e&&e.length;t=this.getShowMarkers()&&(this.getMarkFavorite()||this.getMarkFlagged());return t||i};A.prototype._getDefaultBackgroundDesign=function(){if(this.getCondensed()){return f.Solid}else{if(this.getResponsive()){return f.Translucent}else{return f.Transparent}}};A.prototype._getBackground=function(){if(this.getBackgroundDesign()===undefined){return this._getDefaultBackgroundDesign()}else{return this.getBackgroundDesign()}};A.prototype._setTextAlignANum=function(e){var t=this.getAdditionalNumbers();for(var i=0;i<t.length;i++){t[i].setTextAlign(e)}};A.prototype._isMediaSize=function(e){return this._getCurrentMediaContainerRange(l.media.RANGESETS.SAP_STANDARD).name===e};return A});
//# sourceMappingURL=ObjectHeader.js.map
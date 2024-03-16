/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/LayoutData","./library","sap/base/Log"],function(e,t,n){"use strict";var a=e.extend("sap.ui.layout.GridData",{metadata:{library:"sap.ui.layout",properties:{span:{type:"sap.ui.layout.GridSpan",group:"Behavior",defaultValue:null},spanXL:{type:"int",group:"Behavior",defaultValue:null},spanL:{type:"int",group:"Behavior",defaultValue:null},spanM:{type:"int",group:"Behavior",defaultValue:null},spanS:{type:"int",group:"Behavior",defaultValue:null},indent:{type:"sap.ui.layout.GridIndent",group:"Behavior",defaultValue:null},indentXL:{type:"int",group:"Behavior",defaultValue:null},indentL:{type:"int",group:"Behavior",defaultValue:null},indentM:{type:"int",group:"Behavior",defaultValue:null},indentS:{type:"int",group:"Behavior",defaultValue:null},visibleXL:{type:"boolean",group:"Behavior",defaultValue:true},visibleL:{type:"boolean",group:"Behavior",defaultValue:true},visibleM:{type:"boolean",group:"Behavior",defaultValue:true},visibleS:{type:"boolean",group:"Behavior",defaultValue:true},moveBackwards:{type:"sap.ui.layout.GridIndent",group:"Misc",defaultValue:null},moveForward:{type:"sap.ui.layout.GridIndent",group:"Misc",defaultValue:null},linebreak:{type:"boolean",group:"Misc",defaultValue:false},linebreakXL:{type:"boolean",group:"Misc",defaultValue:false},linebreakL:{type:"boolean",group:"Misc",defaultValue:false},linebreakM:{type:"boolean",group:"Misc",defaultValue:false},linebreakS:{type:"boolean",group:"Misc",defaultValue:false},spanLarge:{type:"int",group:"Behavior",defaultValue:null,deprecated:true},spanMedium:{type:"int",group:"Behavior",defaultValue:null,deprecated:true},spanSmall:{type:"int",group:"Behavior",defaultValue:null,deprecated:true},indentLarge:{type:"int",group:"Behavior",defaultValue:null,deprecated:true},indentMedium:{type:"int",group:"Behavior",defaultValue:null,deprecated:true},indentSmall:{type:"int",group:"Behavior",defaultValue:null,deprecated:true},visibleOnLarge:{type:"boolean",group:"Behavior",defaultValue:true,deprecated:true},visibleOnMedium:{type:"boolean",group:"Behavior",defaultValue:true,deprecated:true},visibleOnSmall:{type:"boolean",group:"Behavior",defaultValue:true,deprecated:true}}}});(function(){a.prototype._setStylesInternal=function(e){if(e&&e.length>0){this._sStylesInternal=e}else{this._sStylesInternal=undefined}};a.prototype._getEffectiveSpanXLarge=function(){var e=this.getSpanXL();if(e&&e>0&&e<13){return e}var t=/XL([1-9]|1[0-2])(?:\s|$)/i;var n=t.exec(this.getSpan());if(n){var a=n[0];if(a){a=a.toUpperCase();if(a.substr(0,2)==="XL"){return parseInt(a.substr(2))}}}return undefined};a.prototype._getEffectiveSpanLarge=function(){var e=this.getSpanL();if(e&&e>0&&e<13){return e}var t=/\bL([1-9]|1[0-2])(?:\s|$)/i;var n=t.exec(this.getSpan());if(n){var a=n[0];if(a){a=a.toUpperCase();if(a.substr(0,1)==="L"){return parseInt(a.substr(1))}}}return undefined};a.prototype._getEffectiveSpanMedium=function(){var e=this.getSpanM();if(e&&e>0&&e<13){return e}var t=/M([1-9]|1[0-2])(?:\s|$)/i;var n=t.exec(this.getSpan());if(n){var a=n[0];if(a){a=a.toUpperCase();if(a.substr(0,1)==="M"){return parseInt(a.substr(1))}}}return undefined};a.prototype._getEffectiveSpanSmall=function(){var e=this.getSpanS();if(e&&e>0&&e<13){return e}var t=/S([1-9]|1[0-2])(?:\s|$)/i;var n=t.exec(this.getSpan());if(n){var a=n[0];if(a){a=a.toUpperCase();if(a.substr(0,1)==="S"){return parseInt(a.substr(1))}}}return undefined};a.prototype.init=function(){this._bLinebreakXLChanged=false};a.prototype.setLinebreakXL=function(e){this.setProperty("linebreakXL",e);this._bLinebreakXLChanged=true;return this};a.prototype._getLinebreakXLChanged=function(){return this._bLinebreakXLChanged};a.prototype.setSpanLarge=function(e){this.setSpanL(e);n.warning("Deprecated property spanLarge is used, please use spanL instead.");return this};a.prototype.setSpanMedium=function(e){n.warning("Deprecated property spanMedium is used, please use spanM instead.");return this.setSpanM(e)};a.prototype.setSpanSmall=function(e){n.warning("Deprecated property spanSmall is used, please use spanS instead.");return this.setSpanS(e)};a.prototype.setIndentLarge=function(e){n.warning("Deprecated property indentLarge is used, please use indentL instead.");return this.setIndentL(e)};a.prototype.setIndentMedium=function(e){n.warning("Deprecated property indentMedium is used, please use indentM instead.");return this.setIndentM(e)};a.prototype.setIndentSmall=function(e){n.warning("Deprecated property indentSmall is used, please use indentS instead.");return this.setIndentS(e)};a.prototype.setVisibleOnLarge=function(e){n.warning("Deprecated property visibleOnLarge is used, please use visibleL instead.");return this.setVisibleL(e)};a.prototype.setVisibleOnMedium=function(e){n.warning("Deprecated property visibleOnMedium is used, please use visibleM instead.");return this.setVisibleM(e)};a.prototype.setVisibleOnSmall=function(e){n.warning("Deprecated property visibleOnSmall is used, please use visibleS instead.");return this.setVisibleS(e)};a.prototype.getSpanLarge=function(){n.warning("Deprecated property spanLarge is used, please use spanL instead.");return this.getSpanL()};a.prototype.getSpanMedium=function(){n.warning("Deprecated property spanMedium is used, please use spanM instead.");return this.getSpanM()};a.prototype.getSpanSmall=function(){n.warning("Deprecated property spanSmall is used, please use spanS instead.");return this.getSpanS()};a.prototype.getIndentLarge=function(){n.warning("Deprecated property indentLarge is used, please use indentL instead.");return this.getIndentL()};a.prototype.getIndentMedium=function(){n.warning("Deprecated property indentMedium is used, please use indentM instead.");return this.getIndentM()};a.prototype.getIndentSmall=function(){n.warning("Deprecated property indentSmall is used, please use indentS instead.");return this.getIndentS()};a.prototype.getVisibleOnLarge=function(){n.warning("Deprecated property visibleOnLarge is used, please use visibleL instead.");return this.getVisibleL()};a.prototype.getVisibleOnMedium=function(){n.warning("Deprecated property visibleOnMedium is used, please use visibleM instead.");return this.getVisibleM()};a.prototype.getVisibleOnSmall=function(){n.warning("Deprecated property visibleOnSmall is used, please use visibleS instead.");return this.getVisibleS()}})();return a});
//# sourceMappingURL=GridData.js.map
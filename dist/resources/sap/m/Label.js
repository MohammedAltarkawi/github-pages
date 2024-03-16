/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./library","sap/ui/core/Control","sap/ui/core/Element","sap/ui/core/LabelEnablement","sap/m/HyphenationSupport","sap/ui/core/library","./LabelRenderer"],function(e,t,a,r,n,o,i){"use strict";var p=o.TextDirection;var l=o.TextAlign;var s=e.LabelDesign;var u=o.VerticalAlign;var g=e.WrappingType;var c=t.extend("sap.m.Label",{metadata:{interfaces:["sap.ui.core.Label","sap.ui.core.IShrinkable","sap.m.IOverflowToolbarContent","sap.m.IToolbarInteractiveControl","sap.m.IHyphenation","sap.ui.core.IAccessKeySupport"],library:"sap.m",properties:{design:{type:"sap.m.LabelDesign",group:"Appearance",defaultValue:s.Standard},text:{type:"string",group:"Misc",defaultValue:null},textAlign:{type:"sap.ui.core.TextAlign",group:"Appearance",defaultValue:l.Begin},textDirection:{type:"sap.ui.core.TextDirection",group:"Appearance",defaultValue:p.Inherit},width:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:""},required:{type:"boolean",group:"Misc",defaultValue:false},displayOnly:{type:"boolean",group:"Appearance",defaultValue:false},wrapping:{type:"boolean",group:"Appearance",defaultValue:false},wrappingType:{type:"sap.m.WrappingType",group:"Appearance",defaultValue:g.Normal},vAlign:{type:"sap.ui.core.VerticalAlign",group:"Appearance",defaultValue:u.Inherit},showColon:{type:"boolean",group:"Appearance",defaultValue:false},highlightAccKeysRef:{type:"boolean",defaultValue:false,visibility:"hidden"}},associations:{labelFor:{type:"sap.ui.core.Control",multiple:false}},designtime:"sap/m/designtime/Label.designtime"},renderer:i});c.prototype.getAccessibilityInfo=function(){var e=this.getText();return{description:e,required:this.isRequired()}};c.prototype.onBeforeRendering=function(){this._handleAccessKeysHighlighting()};c.prototype._handleAccessKeysHighlighting=function(){var e=this.getLabelFor();var t=this.getText();if(!e||!t){return}var r=a.getElementById(e);if(r&&r.isA("sap.m.Input")&&r.getProperty("highlightAccKeysRef")){a.getElementById(e).setProperty("accesskey",t[0].toLowerCase())}};c.prototype.getOverflowToolbarConfig=function(){var e={canOverflow:true,propsUnrelatedToSize:["design","required","displayOnly"]};function t(e){var t=e&&e.getLayoutData();if(f(t,"sap/m/OverflowToolbarLayoutData")){return t.getGroup()}}e.onBeforeEnterOverflow=function(e){var r=false,n,o,i,p,l;n=e.getParent();if(!f(n,"sap/m/OverflowToolbar")){return}o=e.getLabelFor();i=o&&a.getElementById(o);if(!i||n.indexOfContent(i)<0){return}p=t(e);l=t(i);r=p&&p===l;e.toggleStyleClass("sapMLabelMediumMarginTop",r,true)};e.onAfterExitOverflow=function(e){e.toggleStyleClass("sapMLabelMediumMarginTop",false,true)};return e};c.prototype.getTextsToBeHyphenated=function(){return{main:this.getText()}};c.prototype.getDomRefsForHyphenatedTexts=function(){return{main:this.$("bdi")[0]}};c.prototype.setIsInColumnHeaderContext=function(e){this._isInColumnHeaderContext=!!e};c.prototype._getToolbarInteractive=function(){return false};r.enrich(c.prototype);n.mixInto(c.prototype);function f(e,t){if(e&&t){var a=sap.ui.require(t);return typeof a==="function"&&e instanceof a}}return c});
//# sourceMappingURL=Label.js.map
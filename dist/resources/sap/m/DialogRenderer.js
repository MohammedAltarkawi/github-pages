/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/library","sap/ui/Device","sap/ui/core/library","sap/ui/core/Lib","sap/ui/core/IconPool"],function(e,a,o,s){"use strict";var t=e.DialogType;var i=e.DialogRoleType;var l=o.ValueState;var r={apiVersion:2};r._mStateClasses={};r._mStateClasses[l.None]="";r._mStateClasses[l.Success]="sapMDialogSuccess";r._mStateClasses[l.Warning]="sapMDialogWarning";r._mStateClasses[l.Error]="sapMDialogError";r._mStateClasses[l.Information]="sapMDialogInformation";r.render=function(o,n){var p=n.getId(),g=n._getAnyHeader(),c=n.getSubHeader(),d=n.getBeginButton(),D=n.getEndButton(),S=n.getState(),f=n.getStretch(),b=n.getAggregation("_valueState"),C=n.getFooter();o.openStart("div",n).style("width",n.getContentWidth()).style("height",n.getContentHeight()).class("sapMDialog").class("sapMDialog-CTX").class("sapMPopup-CTX");if(n.isOpen()){o.class("sapMDialogOpen")}if(window.devicePixelRatio>1){o.class("sapMDialogHighPixelDensity")}if(n._bDisableRepositioning){o.class("sapMDialogTouched")}if(f){o.class("sapMDialogStretched")}if(!f&&n.getStretchOnPhone()&&a.system.phone){o.class("sapMDialogStretched")}o.class(r._mStateClasses[S]);var M=!n._oToolbar&&!d&&!D;var u=n._oToolbar&&n._isToolbarEmpty()&&!d&&!D;var _=n._oToolbar&&!n._oToolbar.getVisible();var v=!M&&!u&&!_||C;if(!v){o.class("sapMDialog-NoFooter")}if(!g){o.class("sapMDialog-NoHeader")}var h=n.getProperty("role");if(S===l.Error||S===l.Warning){h=i.AlertDialog}o.accessibilityState(n,{role:h,modal:true});if(c&&c.getVisible()){o.class("sapMDialogWithSubHeader");if(c.getDesign()==e.ToolbarDesign.Info){o.class("sapMDialogSubHeaderInfoBar")}}if(n.getType()===t.Message){o.class("sapMMessageDialog")}if(!n.getVerticalScrolling()){o.class("sapMDialogVerScrollDisabled")}if(!n.getHorizontalScrolling()){o.class("sapMDialogHorScrollDisabled")}if(a.system.phone){o.class("sapMDialogPhone")}if(n.getDraggable()&&!f){o.class("sapMDialogDraggable")}if(e._bSizeCompact){o.class("sapUiSizeCompact")}var y=n.getTooltip_AsString();if(y){o.attr("title",y)}o.attr("tabindex","-1");o.openEnd();if(a.system.desktop){if(n.getResizable()&&!f){o.icon("sap-icon://resize-corner",["sapMDialogResizeHandler"],{title:"","aria-label":""})}o.openStart("span",p+"-firstfe").class("sapMDialogFirstFE").attr("role","none").attr("tabindex","0").openEnd().close("span")}if(g||c){o.openStart("header").openEnd();if(g){g._applyContextClassFor("header");o.openStart("div").class("sapMDialogTitleGroup");if(n._isDraggableOrResizable()){o.attr("tabindex",0).accessibilityState(g,{role:"group",roledescription:s.getResourceBundleFor("sap.m").getText("DIALOG_HEADER_ARIA_ROLE_DESCRIPTION"),describedby:{value:n.getId()+"-ariaDescribedbyText",append:true}})}o.openEnd().renderControl(g).renderControl(n._oAriaDescribedbyText).close("div")}if(c&&c.getVisible()){c._applyContextClassFor("subheader");o.openStart("div").class("sapMDialogSubHeader").openEnd().renderControl(c).close("div")}o.close("header")}if(b){o.renderControl(b)}o.openStart("section",p+"-cont").class("sapMDialogSection").openEnd();o.openStart("div",p+"-scroll").class("sapMDialogScroll").openEnd();o.openStart("div",p+"-scrollCont").class("sapMDialogScrollCont");if(n.getStretch()||n.getContentHeight()){o.class("sapMDialogStretchContent")}o.openEnd();n.getContent().forEach(o.renderControl,o);o.close("div").close("div").close("section");if(v){o.openStart("footer").class("sapMDialogFooter").openEnd();if(C){C._applyContextClassFor("footer");o.renderControl(C)}else{n._oToolbar._applyContextClassFor("footer");o.renderControl(n._oToolbar)}o.close("footer")}if(a.system.desktop){o.openStart("span",p+"-lastfe").class("sapMDialogLastFE").attr("role","none").attr("tabindex","0").openEnd().close("span")}o.close("div")};return r},true);
//# sourceMappingURL=DialogRenderer.js.map
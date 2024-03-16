/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Lib","sap/ui/core/RenderManager","sap/ui/unified/calendar/CalendarUtils","sap/ui/unified/calendar/CalendarDate","sap/ui/unified/calendar/Month","sap/ui/unified/library","./DatesRowRenderer","sap/ui/thirdparty/jquery","sap/ui/core/format/DateFormat","sap/ui/core/Locale","sap/ui/core/date/UI5Date","sap/ui/core/InvisibleText"],function(e,t,a,i,r,s,n,jQuery,o,p,h,l){"use strict";var u=r.extend("sap.ui.unified.calendar.DatesRow",{metadata:{library:"sap.ui.unified",properties:{startDate:{type:"object",group:"Data"},days:{type:"int",group:"Appearance",defaultValue:7},showDayNamesLine:{type:"boolean",group:"Appearance",defaultValue:true},calendarWeekNumbering:{type:"sap.ui.core.date.CalendarWeekNumbering",group:"Appearance",defaultValue:null}}},renderer:n});u.prototype.init=function(){r.prototype.init.apply(this,arguments);this._iColumns=1;this._aWeekNumbers=[];this._bAlwaysShowSpecialDates=true};u.prototype.exit=function(){r.prototype.exit(this,arguments);if(this._invisibleDayHint){this._invisibleDayHint.destroy();this._invisibleDayHint=null}};u.prototype._setAriaRole=function(e){this._ariaRole=e;return this};u.prototype._getAriaRole=function(){return this._ariaRole?this._ariaRole:"gridcell"};u.prototype._getDayDescription=function(){return this._fnInvisibleHintFactory().getId()};u.prototype._fnInvisibleHintFactory=function(){if(!this._invisibleDayHint){this._invisibleDayHint=new l({text:e.getResourceBundleFor("sap.m").getText("SLIDETILE_ACTIVATE")}).toStatic()}return this._invisibleDayHint};u.prototype.setStartDate=function(e){a._checkJSDateObject(e);var t=e.getFullYear();a._checkYearInValidRange(t);this.setProperty("startDate",e);this._oStartDate=i.fromLocalJSDate(e,this.getPrimaryCalendarType());if(this.getDomRef()){var r=this._getDate().toLocalJSDate();this._bNoRangeCheck=true;this.displayDate(e);this._bNoRangeCheck=false;if(r&&this.checkDateFocusable(r)){this.displayDate(r)}}return this};u.prototype._getStartDate=function(){if(!this._oStartDate){this._oStartDate=i.fromLocalJSDate(h.getInstance(),this.getPrimaryCalendarType())}return this._oStartDate};u.prototype.setDate=function(e){if(!this._bNoRangeCheck&&!this.checkDateFocusable(e)){throw new Error("Date must be in visible date range; "+this)}r.prototype.setDate.apply(this,arguments);return this};u.prototype.displayDate=function(e){if(!this._bNoRangeCheck&&!this.checkDateFocusable(e)){throw new Error("Date must be in visible date range; "+this)}r.prototype.displayDate.apply(this,arguments);return this};u.prototype._setTopPosition=function(e){this._iTopPosition=e};u.prototype.setPrimaryCalendarType=function(e){r.prototype.setPrimaryCalendarType.apply(this,arguments);if(this._oStartDate){this._oStartDate=new i(this._oStartDate,e)}return this};u.setSecondaryCalendarType=function(e){this._bSecondaryCalendarTypeSet=true;r.prototype.setSecondaryCalendarType.apply(this,arguments);return this};u.prototype._handleBorderReached=function(e){var t=e.getParameter("event");var a=this._getRelativeInfo?this.getDays()*this._getRelativeInfo().iIntervalSize:this.getDays();var r=this._getRelativeInfo?this._getRelativeInfo().iIntervalSize:1;var s=this._getDate();var n=new i(s,this.getPrimaryCalendarType());if(t.type){switch(t.type){case"sapnext":case"sapnextmodifiers":n.setDate(n.getDate()+r);break;case"sapprevious":case"sappreviousmodifiers":n.setDate(n.getDate()-r);break;case"sappagedown":n.setDate(n.getDate()+a);break;case"sappageup":n.setDate(n.getDate()-a);break;default:break}this.fireFocus({date:n.toLocalJSDate(),otherMonth:true,_outsideBorder:true})}};u.prototype.checkDateFocusable=function(e){a._checkJSDateObject(e);if(this._bNoRangeCheck){return false}var t=this._getStartDate();var r=new i(t,this.getPrimaryCalendarType());var s=this.getDays();if(this._getRelativeInfo&&this._getRelativeInfo().bIsRelative){s=this.getDays()*this._getRelativeInfo().iIntervalSize}r.setDate(r.getDate()+s);var n=i.fromLocalJSDate(e,this.getPrimaryCalendarType());return n.isSameOrAfter(t)&&n.isBefore(r)};u.prototype._renderHeader=function(){var e=this._getStartDate();var a=e.getDay();var i=this._getLocaleData();var r=this.$("Names").children();var s=[];if(this._bLongWeekDays||!this._bNamesLengthChecked){s=i.getDaysStandAlone("abbreviated")}else{s=i.getDaysStandAlone("narrow")}var n=i.getDaysStandAlone("wide");var o=0;for(o=0;o<r.length;o++){var p=jQuery(r[o]);p.text(s[(o+a)%7]);p.attr("aria-label",n[(o+a)%7])}if(this._getShowHeader()){var h=this.$("Head");if(h.length>0){var l=(new t).getInterface();this.getRenderer().renderHeaderLine(l,this,i,e);l.flush(h[0]);l.destroy()}}};u.prototype._getFirstWeekDay=function(){return this._getStartDate().getDay()};u.prototype.getWeekNumbers=function(){var e=this.getDays(),t=this._getLocale(),a=this.getPrimaryCalendarType(),r=this._getStartDate(),s=new i(r,a),n=new i(r,a).setDate(s.getDate()+e),h=[];while(s.isBefore(n)){h.push(new i(s,a));s.setDate(s.getDate()+1)}this._aWeekNumbers=h.reduce(function(e,a){var i=o.getInstance({pattern:"w",calendarType:this.getPrimaryCalendarType(),calendarWeekNumbering:this.getCalendarWeekNumbering()},new p(t));var r=Number(i.format(a.toUTCJSDate(),true));if(!e.length||e[e.length-1].number!==r){e.push({len:0,number:r})}e[e.length-1].len++;return e}.bind(this),[]);return this._aWeekNumbers};u.prototype._getCachedWeekNumbers=function(){return this._aWeekNumbers};return u});
//# sourceMappingURL=DatesRow.js.map
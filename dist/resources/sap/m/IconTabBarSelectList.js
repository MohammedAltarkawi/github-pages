/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./library","./IconTabBarDragAndDropUtil","./IconTabBarSelectListRenderer","sap/ui/core/Control","sap/ui/core/delegate/ItemNavigation","sap/ui/core/theming/Parameters","sap/ui/core/library","sap/ui/events/KeyCodes"],function(e,t,i,o,n,a,r,s){"use strict";var g=r.dnd.DropPosition;var l=o.extend("sap.m.IconTabBarSelectList",{metadata:{library:"sap.m",aggregations:{items:{type:"sap.m.IconTab",multiple:true,singularName:"item",dnd:true}},events:{selectionChange:{parameters:{selectedItem:{type:"sap.m.IconTabFilter"}}}}},renderer:i});l.prototype.init=function(){this._oItemNavigation=new n;this._oItemNavigation.setCycling(false);this.addEventDelegate(this._oItemNavigation);this._oItemNavigation.setPageSize(10);this._oIconTabHeader=null;this._oTabFilter=null};l.prototype.exit=function(){this._oItemNavigation.destroy();this._oItemNavigation=null;this._oIconTabHeader=null;this._oTabFilter=null};l.prototype.onBeforeRendering=function(){if(!this._oIconTabHeader){return}this.destroyDragDropConfig();this._setsDragAndConfiguration()};l.prototype.onAfterRendering=function(){this._initItemNavigation();this.getItems().forEach(function(e){if(e._onAfterParentRendering){e._onAfterParentRendering()}})};l.prototype._setsDragAndConfiguration=function(){if(this._oIconTabHeader.getEnableTabReordering()&&!this.getDragDropConfig().length){t.setDragDropAggregations(this,"Vertical",this._oIconTabHeader._getDropPosition())}};l.prototype._initItemNavigation=function(){var e=this.getItems(),t=[],i=this._oIconTabHeader.oSelectedItem,o=-1,n,a;for(a=0;a<e.length;a++){n=e[a];if(n.isA("sap.m.IconTabFilter")){var r=n._getAllSubFiltersDomRefs();t=t.concat(n.getDomRef(),r)}if(i&&this.getSelectedItem()&&this.getSelectedItem()._getRealTab()===i){o=a}}if(i&&t.indexOf(i.getDomRef())!==-1){o=t.indexOf(i.getDomRef())}this._oItemNavigation.setRootDomRef(this.getDomRef()).setItemDomRefs(t).setSelectedIndex(o)};l.prototype.getVisibleItems=function(){return this.getItems().filter(function(e){return e.getVisible()})};l.prototype.getVisibleTabFilters=function(){return this.getVisibleItems().filter(function(e){return e.isA("sap.m.IconTabFilter")})};l.prototype.setSelectedItem=function(e){this._selectedItem=e};l.prototype.getSelectedItem=function(){return this._selectedItem};l.prototype._getIconTabHeader=function(){return this._oIconTabHeader};l.prototype._getParams=function(){var e=Object.assign({_sap_m_IconTabBar_SelectListItem_PaddingLeft:"0.5rem",_sap_m_IconTabBar_SelectListItem_PaddingLeftAdditional:"0"},a.get({name:["_sap_m_IconTabBar_SelectListItem_PaddingLeft","_sap_m_IconTabBar_SelectListItem_PaddingLeftAdditional"],callback:this.invalidate.bind(this)}));return{fNestedItemPaddingLeft:Number.parseFloat(e["_sap_m_IconTabBar_SelectListItem_PaddingLeft"]),fAdditionalPadding:Number.parseFloat(e["_sap_m_IconTabBar_SelectListItem_PaddingLeftAdditional"])}};l.prototype._checkTextOnly=function(){return this.getItems().every(function(e){return e.isA("sap.m.IconTabSeparator")||!e.getIcon()})};l.prototype.onkeydown=function(e){switch(e.which){case s.ENTER:this._selectItem(e);e.preventDefault();break;case s.SPACE:e.preventDefault();break}};l.prototype.onkeyup=function(e){if(e.which===s.SPACE){this._selectItem(e)}};l.prototype.ontap=function(e){this._selectItem(e)};l.prototype._selectItem=function(e){var t=e.srcControl;if(!t){return}if(!t.isA("sap.m.IconTabFilter")){return}if(!this._oIconTabHeader._isSelectable(t)){return}e.preventDefault();if(t!==this.getSelectedItem()){this.fireSelectionChange({selectedItem:t})}};l.prototype.checkIconOnly=function(){this._bIconOnly=this.getVisibleTabFilters().every(function(e){return!e.getText()&&!e.getCount()});return this._bIconOnly};l.prototype._handleDragAndDrop=function(e){var i=e.getParameter("dropPosition"),o=e.getParameter("draggedControl"),n=e.getParameter("droppedControl"),a=n._getRealTab().getParent(),r=this._oIconTabHeader.getMaxNestingLevel();if(this._oTabFilter._isOverflow()){a=this._oIconTabHeader}if(i===g.On){a=n._getRealTab()}t.handleDrop(a,i,o._getRealTab(),n._getRealTab(),true,r);this._oIconTabHeader._setItemsForStrip();this._oIconTabHeader._initItemNavigation();this._oTabFilter._setSelectListItems();this._initItemNavigation();n._getRealTab().getParent().$().trigger("focus")};l.prototype.ondragrearranging=function(e){if(!this._oIconTabHeader.getEnableTabReordering()){return}var i=e.srcControl,o=e.keyCode,n=this.indexOfItem(i),a=this;t.moveItem.call(a,i,o,a.getItems().length-1);this._initItemNavigation();i.$().trigger("focus");if(n===this.indexOfItem(i)){return}a=i._getRealTab().getParent();if(this._oTabFilter._isOverflow()&&i._getRealTab()._getNestedLevel()===1){this._oIconTabHeader._moveTab(i._getRealTab(),o,this._oIconTabHeader.getItems().length-1)}else{t.moveItem.call(a,i._getRealTab(),o,a.getItems().length-1)}};l.prototype.onsaphomemodifiers=l.prototype.ondragrearranging;l.prototype.onsapendmodifiers=l.prototype.ondragrearranging;l.prototype.onsapincreasemodifiers=l.prototype.ondragrearranging;l.prototype.onsapdecreasemodifiers=l.prototype.ondragrearranging;return l});
//# sourceMappingURL=IconTabBarSelectList.js.map
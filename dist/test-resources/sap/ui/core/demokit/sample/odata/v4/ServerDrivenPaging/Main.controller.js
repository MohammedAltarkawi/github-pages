/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define([
	"sap/m/ColumnListItem",
	"sap/m/Text",
	"sap/ui/core/sample/common/Controller",
	"sap/ui/test/TestUtils"
], function (ColumnListItem, Text, Controller, TestUtils) {
	"use strict";

	return Controller.extend("sap.ui.core.sample.odata.v4.ServerDrivenPaging.Main", {
		onInit : function () {
			var oTemplate = new ColumnListItem();

			this.bCount = new URLSearchParams(window.location.search).get("$count") === "true"
				|| TestUtils.retrieveData("sap.ui.core.sample.odata.v4.ServerDrivenPaging.$count");
			oTemplate.addCell(new Text("index", {
				text : {
					path : "BusinessPartnerID",
					formatter : function () {
						return this.getBindingContext().getIndex();
					}
				}
			}));
			oTemplate.addCell(new Text({text : "{BusinessPartnerID}"}));
			oTemplate.addCell(new Text({text : "{CompanyName}"}));

			this.byId("businessPartnerList").bindItems({
				path : "/BusinessPartnerList",
				parameters : {
					$count : this.bCount,
					// ensure list has 30 entries for generated test data
					$filter : "BusinessPartnerID lt '0100000030'"
				},
				template : oTemplate
			});

			this.byId("businessPartnerListTitle").setBindingContext(
				this.byId("businessPartnerList").getBinding("items").getHeaderContext());
		},

		onTabSelect : function (oEvent) {
			if (oEvent.getParameter("key").endsWith("table") && !this.isTableBound) {
				this.byId("index::table").bindText({
					path : "BusinessPartnerID",
					formatter : function () {
						return this.getBindingContext() && this.getBindingContext().getIndex();
					}
				});
				this.byId("businessPartnerTable").bindRows({
					path : "/BusinessPartnerList",
					parameters : {
						$count : this.bCount,
						// ensure list has 50 entries for generated test data
						$filter : "BusinessPartnerID lt '0100000050'"
					}
				});
				this.byId("businessPartnerTable").setBindingContext(
					this.byId("businessPartnerTable").getBinding("rows").getHeaderContext());
				this.isTableBound = true;
			}
		}
	});
});

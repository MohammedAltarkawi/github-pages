/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define(
	[
		"sap/m/upload/p13n/handlers/ChangeHandler",
		"sap/m/upload/p13n/handlers/ColumnsStateChangeHandler",
		"sap/m/upload/p13n/handlers/SortStateChangeHandler",
		"sap/m/upload/p13n/handlers/GroupStateChangeHandler",
		"sap/m/upload/p13n/handlers/FilterStateChangeHandler"
	],
	function (
		ChangeHandler,
		ColumnsStateChangeHandler,
		SortStateChangeHandler,
		GroupStateChangeHandler,
		FilterStateChangeHandler
	) {
		"use strict";

		return {
			uploadSetTableColumnsStateChange: ChangeHandler.create(ColumnsStateChangeHandler),
			uploadSetTableSortStateChange: ChangeHandler.create(SortStateChangeHandler),
			uploadSetTableGroupStateChange: ChangeHandler.create(GroupStateChangeHandler),
			uploadSetTableFilterStateChange: ChangeHandler.create(FilterStateChangeHandler)
		};
	},
	/* bExport= */ true
);

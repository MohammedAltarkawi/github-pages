/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
/**
 *
 *
 * State Change Handler for the grouping related data based on flexibility
 *
 * @internal
 * @private
 *
 */

sap.ui.define([], function () {
	"use strict";

	const GroupStateChangeHandler = {};

	GroupStateChangeHandler.createRevertData = function (oContent) {
		const oRevertData = { targetAggregation: oContent.targetAggregation };
		if (oContent.deleted) {
			oRevertData.inserted = oContent.deleted.map((oEntry) => {
				return { key: oEntry.key, index: oEntry.prevIndex };
			});
		}
		if (oContent.moved) {
			oRevertData.moved = oContent.moved.map((oEntry) => {
				return {
					key: oEntry.key,
					index: oEntry.prevIndex,
					prevIndex: oEntry.index
				};
			});
		}
		if (oContent.inserted) {
			oRevertData.deleted = oContent.inserted.map((oEntry) => {
				return { key: oEntry.key, prevIndex: oEntry.index };
			});
		}
		return oRevertData;
	};

	return GroupStateChangeHandler;
});

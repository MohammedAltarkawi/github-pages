sap.ui.predefine("testlibs/scenario15/lib7/library",[
	"sap/ui/core/Lib",
	"sap/ui/core/library"
], function(Library) {
	"use strict";
	return Library.init({
		name: "testlibs.scenario15.lib7",
		dependencies: [
		],
		noLibraryCSS: true
	});
});
sap.ui.require.preload({
	"testlibs/scenario15/lib7/manifest.json":"{\n\t\"sap.ui5\": {\n\t\t\"dependencies\": {\n\t\t\t\"libs\": {}\n\t\t}\n\t}\n}"
});
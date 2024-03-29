/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define([
	"sap/m/Button",
	"sap/ui/core/UIComponent"
], function(Button, UIComponent) {
	"use strict";

	// new Component
	var Component = UIComponent.extend("samples.components.button.Component", {

		metadata : {
			properties : {
				text: "string"
			}
		}
	});


	Component.prototype.createContent = function() {
		this.oButton = new Button(this.createId("mybutn"));
		// Use value of manifest if given
		if (this.getManifestEntry("sap.app").text){
			this.oButton.setText(this.getManifestEntry("sap.app").text);
		}
		return this.oButton;
	};


	//=============================================================================
	//OVERRIDE OF SETTERS
	//=============================================================================

	/*
	* Overrides <code>setText</code> method of the component to set this text in the button
	*/
	Component.prototype.setText = function(sText) {
		this.oButton.setText(sText);
		this.setProperty("text", sText);
		return this;
	};


	return Component;

});

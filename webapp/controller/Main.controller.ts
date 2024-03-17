/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import MessageBox from "sap/m/MessageBox";
import BaseController from "./BaseController";
import Theming from "sap/ui/core/Theming";
import Event from "sap/ui/base/Event";
import Switch from "sap/m/Switch";

/**
 * @namespace mst.githubpage.controller
 */
export default class Main extends BaseController {

	private _sLightTheme = "sap_horizon";
	private _sDarkTheme = "sap_horizon_dark";
	//@ts-expect-error
	private webclient = window.sap.cai.webclient ;

	public sayHello(): void {
		MessageBox.show("Hello World!");
	}


	/**
	 * @returns {void}
	 */
	public toggleTheme(oEvent: Event): void {
		const oSwitch = oEvent.getSource() as Switch;
		const sState = oSwitch.getState();
		if (sState) {
			Theming.setTheme(this._sDarkTheme);
			this.webclient.setTheme(this._sDarkTheme);
		} else {
			Theming.setTheme(this._sLightTheme);
			this.webclient.setTheme(this._sLightTheme);
		}
	}

	public handlePopoverPress(){
		this.webclient.toggle();
	}
}

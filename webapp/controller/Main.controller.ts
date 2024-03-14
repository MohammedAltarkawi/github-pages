import MessageBox from "sap/m/MessageBox";
import BaseController from "./BaseController";
import Theming from "sap/ui/core/Theming";

/**
 * @namespace mst.githubpage.controller
 */
export default class Main extends BaseController {

	private _sLightTheme = "sap_horizon";
	private _sDarkTheme = "sap_horizon_dark";

	public sayHello(): void {
		MessageBox.show("Hello World!");
	}


	/**
	 * @returns {void}
	 */
	public toggleTheme(): void {
		
		if (Theming.getTheme() === this._sLightTheme) {
			Theming.setTheme(this._sDarkTheme);
		} else {
			Theming.setTheme(this._sLightTheme);
		}
	}
}

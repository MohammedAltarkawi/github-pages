import MessageBox from "sap/m/MessageBox";
import BaseController from "./BaseController";
import Theming from "sap/ui/core/Theming";
import Event from "sap/ui/base/Event";
import Switch from "sap/m/Switch";
import Button from "sap/m/Button";
import Fragment from "sap/ui/core/Fragment";
import Popover from "sap/m/Popover";

/**
 * @namespace mst.githubpage.controller
 */
export default class Main extends BaseController {

	private _sLightTheme = "sap_horizon";
	private _sDarkTheme = "sap_horizon_dark";
	private dialogPromise: Popover;

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
		} else {
			Theming.setTheme(this._sLightTheme);
		}
	}


	/* onOpenDialog(oEvent: Event): void {
		const oButton = oEvent.getSource() as Button
		// create dialog lazily
			if (!this.dialogPromise) {
				this.dialogPromise = <Promise<Popover>> this.loadFragment({
					name: 'mst.githubpage.fragments.InfoPopover'
				});
			} 
			this.dialogPromise.then(function(oDialog) {
				debugger
				oDialog.openBy(oButton)
			});
		}   
 */
	public async handlePopoverPress(oEvent: Event){
		const oButton = oEvent.getSource() as Button,
		oView = this.getView();
		if (!this.dialogPromise) {
		this.dialogPromise = (await Fragment.load({
            id: oView.getId(),
            name: 'mst.githubpage.fragments.InfoPopover',
            controller: this
        })) as Popover;
	}

		oView.addDependent(this.dialogPromise)
		this.dialogPromise.openBy(oButton)
	}

	private _getInfoPopover(){
		
	}
}

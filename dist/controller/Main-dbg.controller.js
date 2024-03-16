"use strict";

sap.ui.define(["sap/m/MessageBox", "./BaseController", "sap/ui/core/Theming", "sap/ui/core/Fragment"], function (MessageBox, __BaseController, Theming, Fragment) {
  "use strict";

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule && typeof obj.default !== "undefined" ? obj.default : obj;
  }
  const BaseController = _interopRequireDefault(__BaseController);
  /**
   * @namespace mst.githubpage.controller
   */
  const Main = BaseController.extend("mst.githubpage.controller.Main", {
    constructor: function constructor() {
      BaseController.prototype.constructor.apply(this, arguments);
      this._sLightTheme = "sap_horizon";
      this._sDarkTheme = "sap_horizon_dark";
    },
    sayHello: function _sayHello() {
      MessageBox.show("Hello World!");
    },
    /**
     * @returns {void}
     */
    toggleTheme: function _toggleTheme(oEvent) {
      const oSwitch = oEvent.getSource();
      const sState = oSwitch.getState();
      if (sState) {
        Theming.setTheme(this._sDarkTheme);
      } else {
        Theming.setTheme(this._sLightTheme);
      }
    },
    onOpenDialog: function _onOpenDialog(oEvent) {
      const oButton = oEvent.getSource();
      // create dialog lazily
      if (!this.dialogPromise) {
        this.dialogPromise = this.loadFragment({
          name: 'mst.githubpage.fragments.InfoPopover'
        });
      }
      this.dialogPromise.then(function (oDialog) {
        debugger;
        oDialog.openBy(oButton);
      });
    },
    handlePopoverPress: async function _handlePopoverPress(oEvent) {
      const oButton = oEvent.getSource(),
        oView = this.getView();
      const oPopover = await Fragment.load({
        id: oView.getId(),
        name: 'mst.github.view.fragments.InfoPopover',
        controller: this
      });
      oView.addDependent(oPopover);
      oPopover.openBy(oButton);
    },
    _getInfoPopover: function _getInfoPopover() {}
  });
  return Main;
});
//# sourceMappingURL=Main-dbg.controller.js.map

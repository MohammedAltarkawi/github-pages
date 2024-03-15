"use strict";

sap.ui.define(["sap/m/MessageBox", "./BaseController", "sap/ui/core/Theming"], function (MessageBox, __BaseController, Theming) {
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
    }
  });
  return Main;
});
//# sourceMappingURL=Main-dbg.controller.js.map

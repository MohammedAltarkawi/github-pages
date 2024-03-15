//@ui5-bundle mst/githubpage/Component-preload.js
sap.ui.require.preload({
	"mst/githubpage/Component.js":function(){
"use strict";sap.ui.define(["sap/ui/core/UIComponent","./model/models","sap/ui/Device"],function(t,e,s){"use strict";function i(t){return t&&t.__esModule&&typeof t.default!=="undefined"?t.default:t}const n=i(e);const o=t.extend("mst.githubpage.Component",{metadata:{manifest:"json"},init:function e(){t.prototype.init.call(this);this.setModel(n.createDeviceModel(),"device");this.getRouter().initialize()},getContentDensityClass:function t(){if(this.contentDensityClass===undefined){if(document.body.classList.contains("sapUiSizeCozy")||document.body.classList.contains("sapUiSizeCompact")){this.contentDensityClass=""}else if(!s.support.touch){this.contentDensityClass="sapUiSizeCompact"}else{this.contentDensityClass="sapUiSizeCozy"}}return this.contentDensityClass}});return o});
},
	"mst/githubpage/controller/App.controller.js":function(){
"use strict";sap.ui.define(["./BaseController"],function(t){"use strict";function e(t){return t&&t.__esModule&&typeof t.default!=="undefined"?t.default:t}const n=e(t);const s=n.extend("mst.githubpage.controller.App",{onInit:function t(){this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass())}});return s});
},
	"mst/githubpage/controller/BaseController.js":function(){
"use strict";sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/core/UIComponent","sap/ui/core/routing/History"],function(e,t,n){"use strict";const o=e.extend("mst.githubpage.controller.BaseController",{getOwnerComponent:function t(){return e.prototype.getOwnerComponent.call(this)},getRouter:function e(){return t.getRouterFor(this)},getResourceBundle:function e(){const t=this.getOwnerComponent().getModel("i18n");return t.getResourceBundle()},getModel:function e(t){return this.getView().getModel(t)},setModel:function e(t,n){this.getView().setModel(t,n);return this},navTo:function e(t,n,o){this.getRouter().navTo(t,n,undefined,o)},onNavBack:function e(){const t=n.getInstance().getPreviousHash();if(t!==undefined){window.history.go(-1)}else{this.getRouter().navTo("main",{},undefined,true)}}});return o});
},
	"mst/githubpage/controller/Main.controller.js":function(){
"use strict";sap.ui.define(["sap/m/MessageBox","./BaseController","sap/ui/core/Theming"],function(e,t,s){"use strict";function o(e){return e&&e.__esModule&&typeof e.default!=="undefined"?e.default:e}const n=o(t);const i=n.extend("mst.githubpage.controller.Main",{constructor:function e(){n.prototype.constructor.apply(this,arguments);this._sLightTheme="sap_horizon";this._sDarkTheme="sap_horizon_dark"},sayHello:function t(){e.show("Hello World!")},toggleTheme:function e(t){const o=t.getSource();const n=o.getState();if(n){s.setTheme(this._sDarkTheme)}else{s.setTheme(this._sLightTheme)}}});return i});
},
	"mst/githubpage/i18n/i18n.properties":'appTitle=mst.githubpage\r\nappDescription=UI5 Application mst.githubpage\r\nbtnText=Say Hello\r\n',
	"mst/githubpage/i18n/i18n_de.properties":'appTitle=mst.githubpage\r\nappDescription=UI5 Application mst.githubpage\r\nbtnText=Sag Hallo\r\n',
	"mst/githubpage/i18n/i18n_en.properties":'appTitle=mst.githubpage\r\nappDescription=UI5 Application mst.githubpage\r\nbtnText=Say Hello\r\n',
	"mst/githubpage/manifest.json":'{"_version":"1.12.0","sap.app":{"id":"mst.githubpage","type":"application","i18n":"i18n/i18n.properties","title":"{{appTitle}}","description":"{{appDescription}}","applicationVersion":{"version":"1.0.0"}},"sap.ui":{"technology":"UI5","icons":{},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"rootView":{"viewName":"mst.githubpage.view.App","type":"XML","async":true,"id":"app"},"dependencies":{"minUI5Version":"1.121.1","libs":{"sap.ui.core":{},"sap.m":{}}},"handleValidation":true,"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"mst.githubpage.i18n.i18n"}}},"routing":{"config":{"routerClass":"sap.m.routing.Router","viewType":"XML","viewPath":"mst.githubpage.view","controlId":"app","controlAggregation":"pages","async":true},"routes":[{"pattern":"","name":"main","target":"main"}],"targets":{"main":{"viewId":"main","viewName":"Main"}}}}}',
	"mst/githubpage/model/formatter.js":function(){
"use strict";sap.ui.define([],function(){"use strict";var e={formatValue:e=>e?.toUpperCase()};return e});
},
	"mst/githubpage/model/models.js":function(){
"use strict";sap.ui.define(["sap/ui/model/json/JSONModel","sap/ui/model/BindingMode","sap/ui/Device"],function(e,i,n){"use strict";var s={createDeviceModel:()=>{const s=new e(n);s.setDefaultBindingMode(i.OneWay);return s}};return s});
},
	"mst/githubpage/view/App.view.xml":'<mvc:View\n\tcontrollerName="mst.githubpage.controller.App"\n\tdisplayBlock="true"\n\txmlns="sap.m"\n\txmlns:mvc="sap.ui.core.mvc"><App id="app" /></mvc:View>\n',
	"mst/githubpage/view/Main.view.xml":'<mvc:View\n\tcontrollerName="mst.githubpage.controller.Main"\n\tdisplayBlock="true"\n\txmlns="sap.m"\n\txmlns:mvc="sap.ui.core.mvc"\n\txmlns:core="sap.ui.core"\n\txmlns:l="sap.ui.layout"\n\txmlns:tnt="sap.tnt"\n\tcore:require="{\n\t\tformatter: \'mst/githubpage/model/formatter\'\n\t}"><Page showHeader="true"><headerContent><Switch  change=".toggleTheme"/></headerContent><content></content></Page></mvc:View>\n'
});
//# sourceMappingURL=Component-preload.js.map

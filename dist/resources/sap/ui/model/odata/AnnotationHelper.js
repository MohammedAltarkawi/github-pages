/*!
 * OpenUI5
 * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./_AnnotationHelperBasics","./_AnnotationHelperExpression","sap/base/Log","sap/ui/base/BindingParser"],function(t,e,n,r){"use strict";function o(t,e){return function(){return t.call(this,e.apply(this,arguments))}}var i={createPropertySetting:function(t,e,n){var i=false,a;t=t.slice();t.forEach(function(e,o){switch(typeof e){case"boolean":case"number":case"undefined":i=true;break;case"string":a=r.complexParser(e,n,true,true,false,true);if(a!==undefined){if(a.functionsNotFound){throw new Error("Function name(s) "+a.functionsNotFound.join(", ")+" not found")}t[o]=e=a}case"object":if(!e||typeof e!=="object"||!("path"in e)){i=true}break;default:throw new Error("Unsupported part: "+e)}});a={formatter:e,parts:t};if(i){r.mergeParts(a)}e=a.formatter;if(a.parts.length===0){a=e&&e();if(typeof a==="string"){a=r.complexParser.escape(a)}}else if(a.parts.length===1){if(e&&!e.textFragments&&a.parts[0].formatter){a.formatter=o(e,a.parts[0].formatter);a.parts[0]=Object.assign({},a.parts[0]);delete a.parts[0].formatter}}return a},format:function(t,n){if(arguments.length===1){n=t.getObject("")}return e.getExpression(t,n,true)},getNavigationPath:function(e,n){if(arguments.length===1){n=e.getObject("")}var r=t.followPath(e,n);return r?"{"+r.navigationProperties.join("/")+"}":""},gotoEntitySet:function(e){var r,o,i=e.getObject(),a;if(typeof i==="string"){r=i}else{a=t.followPath(e,i);r=a&&a.associationSetEnd&&a.associationSetEnd.entitySet}if(r){o=e.getModel().getODataEntitySet(r,true)}if(!o){n.warning(e.getPath()+": found '"+r+"' which is not a name of an entity set",undefined,"sap.ui.model.odata.AnnotationHelper")}return o},gotoEntityType:function(t){var e=t.getProperty(""),r=t.getModel().getODataEntityType(e,true);if(!r){n.warning(t.getPath()+": found '"+e+"' which is not a name of an entity type",undefined,"sap.ui.model.odata.AnnotationHelper")}return r},gotoFunctionImport:function(t){var e=t.getProperty("String"),r=t.getModel().getODataFunctionImport(e,true);if(!r){n.warning(t.getPath()+": found '"+e+"' which is not a name of a function import",undefined,"sap.ui.model.odata.AnnotationHelper")}return r},isMultiple:function(e,n){if(arguments.length===1){n=e.getObject("")}var r=t.followPath(e,n);if(r){if(r.navigationAfterMultiple){throw new Error('Association end with multiplicity "*" is not the last one: '+n.AnnotationPath)}return String(r.isMultiple)}return""},resolvePath:function(e){var r=t.followPath(e,e.getObject());if(!r){n.warning(e.getPath()+": Path could not be resolved ",undefined,"sap.ui.model.odata.AnnotationHelper")}return r?r.resolvedPath:undefined},simplePath:function(t,n){if(arguments.length===1){n=t.getObject("")}return e.getExpression(t,n,false)}};i.format.requiresIContext=true;i.getNavigationPath.requiresIContext=true;i.isMultiple.requiresIContext=true;i.simplePath.requiresIContext=true;return i},true);
//# sourceMappingURL=AnnotationHelper.js.map
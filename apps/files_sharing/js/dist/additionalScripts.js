!function(e){function n(n){for(var t,r,a=n[0],o=n[1],s=0,h=[];s<a.length;s++)r=a[s],i[r]&&h.push(i[r][0]),i[r]=0;for(t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t]);for(l&&l(n);h.length;)h.shift()()}var t={},i={0:0,1:0};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.e=function(e){var n=[],t=i[e];if(0!==t)if(t)n.push(t[2]);else{var a=new Promise(function(n,r){t=i[e]=[n,r]});n.push(t[2]=a);var o,s=document.createElement("script");s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.src=function(e){return r.p+"files_sharing."+e+".js"}(e);var l=new Error;o=function(n){s.onerror=s.onload=null,clearTimeout(h);var t=i[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,t[1](l)}i[e]=void 0}};var h=setTimeout(function(){o({type:"timeout",target:s})},12e4);s.onerror=s.onload=o,document.head.appendChild(s)}return Promise.all(n)},r.m=e,r.c=t,r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)r.d(t,i,function(n){return e[n]}.bind(null,i));return t},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="/js/",r.oe=function(e){throw console.error(e),e};var a=window.webpackJsonp=window.webpackJsonp||[],o=a.push.bind(a);a.push=n,a=a.slice();for(var s=0;s<a.length;s++)n(a[s]);var l=o;r(r.s=3)}([function(e,n,i){i.p=OC.linkTo("files_sharing","js/dist/"),i.nc=btoa(OC.requestToken),window.OCP.Collaboration.registerType("file",{action:function(){return new Promise(function(e,n){OC.dialogs.filepicker(t("files_sharing","Link to a file"),function(t){OC.Files.getClient().getFileInfo(t).then(function(n,t){e(t.id)},function(){n()})},!1)})},typeString:t("files_sharing","Link to a file"),typeIconClass:"icon-files-dark"})},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map(function(n){var t=function(e,n){var t=e[1]||"",i=e[3];if(!i)return t;if(n&&"function"==typeof btoa){var r=(o=i,s=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(l," */")),a=i.sources.map(function(e){return"/*# sourceURL=".concat(i.sourceRoot).concat(e," */")});return[t].concat(a).concat([r]).join("\n")}var o,s,l;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2],"{").concat(t,"}"):t}).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},r=0;r<this.length;r++){var a=this[r][0];null!=a&&(i[a]=!0)}for(var o=0;o<e.length;o++){var s=e[o];null!=s[0]&&i[s[0]]||(t&&!s[2]?s[2]=t:t&&(s[2]="(".concat(s[2],") and (").concat(t,")")),n.push(s))}},n}},function(e,n,t){var i,r,a={},o=(i=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=i.apply(this,arguments)),r}),s=function(e){var n={};return function(e,t){if("function"==typeof e)return e();if(void 0===n[e]){var i=function(e,n){return n?n.querySelector(e):document.querySelector(e)}.call(this,e,t);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(e){i=null}n[e]=i}return n[e]}}(),l=null,h=0,p=[],c=t(9);function d(e,n){for(var t=0;t<e.length;t++){var i=e[t],r=a[i.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](i.parts[o]);for(;o<i.parts.length;o++)r.parts.push(v(i.parts[o],n))}else{var s=[];for(o=0;o<i.parts.length;o++)s.push(v(i.parts[o],n));a[i.id]={id:i.id,refs:1,parts:s}}}}function u(e,n){for(var t=[],i={},r=0;r<e.length;r++){var a=e[r],o=n.base?a[0]+n.base:a[0],s={css:a[1],media:a[2],sourceMap:a[3]};i[o]?i[o].parts.push(s):t.push(i[o]={id:o,parts:[s]})}return t}function f(e,n){var t=s(e.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var i=p[p.length-1];if("top"===e.insertAt)i?i.nextSibling?t.insertBefore(n,i.nextSibling):t.appendChild(n):t.insertBefore(n,t.firstChild),p.push(n);else if("bottom"===e.insertAt)t.appendChild(n);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=s(e.insertAt.before,t);t.insertBefore(n,r)}}function m(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var n=p.indexOf(e);n>=0&&p.splice(n,1)}function g(e){var n=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var i=function(){0;return t.nc}();i&&(e.attrs.nonce=i)}return b(n,e.attrs),f(e,n),n}function b(e,n){Object.keys(n).forEach(function(t){e.setAttribute(t,n[t])})}function v(e,n){var t,i,r,a;if(n.transform&&e.css){if(!(a="function"==typeof n.transform?n.transform(e.css):n.transform.default(e.css)))return function(){};e.css=a}if(n.singleton){var o=h++;t=l||(l=g(n)),i=y.bind(null,t,o,!1),r=y.bind(null,t,o,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(e){var n=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",b(n,e.attrs),f(e,n),n}(n),i=function(e,n,t){var i=t.css,r=t.sourceMap,a=void 0===n.convertToAbsoluteUrls&&r;(n.convertToAbsoluteUrls||a)&&(i=c(i));r&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var o=new Blob([i],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(o),s&&URL.revokeObjectURL(s)}.bind(null,t,n),r=function(){m(t),t.href&&URL.revokeObjectURL(t.href)}):(t=g(n),i=function(e,n){var t=n.css,i=n.media;i&&e.setAttribute("media",i);if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}.bind(null,t),r=function(){m(t)});return i(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;i(e=n)}else r()}}e.exports=function(e,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(n=n||{}).attrs="object"==typeof n.attrs?n.attrs:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=o()),n.insertInto||(n.insertInto="head"),n.insertAt||(n.insertAt="bottom");var t=u(e,n);return d(t,n),function(e){for(var i=[],r=0;r<t.length;r++){var o=t[r];(s=a[o.id]).refs--,i.push(s)}e&&d(u(e,n),n);for(r=0;r<i.length;r++){var s;if(0===(s=i[r]).refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete a[s.id]}}}};var w,O=(w=[],function(e,n){return w[e]=n,w.filter(Boolean).join("\n")});function y(e,n,t,i){var r=t?"":i.css;if(e.styleSheet)e.styleSheet.cssText=O(n,r);else{var a=document.createTextNode(r),o=e.childNodes;o[n]&&e.removeChild(o[n]),o.length?e.insertBefore(a,o[n]):e.appendChild(a)}}},function(e,n,t){"use strict";t.r(n);t(4),t(5),t(6),t(7),t(10),t(0);t.p=OC.linkTo("files_sharing","js/dist/"),t.nc=btoa(OC.requestToken),window.OCA.Sharing=OCA.Sharing},function(e,n){_.extend(OC.Files.Client,{PROPERTY_SHARE_TYPES:"{"+OC.Files.Client.NS_OWNCLOUD+"}share-types",PROPERTY_OWNER_ID:"{"+OC.Files.Client.NS_OWNCLOUD+"}owner-id",PROPERTY_OWNER_DISPLAY_NAME:"{"+OC.Files.Client.NS_OWNCLOUD+"}owner-display-name"}),OCA.Sharing||(OCA.Sharing={}),OCA.Sharing.Util={attach:function(e){if(OC.Share&&"trashbin"!==e.id&&"files.public"!==e.id){var n=e.fileActions,i=e._createRow;e._createRow=function(e){var t=i.apply(this,arguments),r=OCA.Sharing.Util.getSharePermissions(e);return 0===e.permissions&&(delete n.actions.all.Comment,delete n.actions.all.Details,delete n.actions.all.Goto),t.attr("data-share-permissions",r),e.shareOwner&&(t.attr("data-share-owner",e.shareOwner),t.attr("data-share-owner-id",e.shareOwnerId),"shared-root"===e.mountType&&t.attr("data-permissions",e.permissions|OC.PERMISSION_UPDATE)),e.recipientData&&!_.isEmpty(e.recipientData)&&t.attr("data-share-recipient-data",JSON.stringify(e.recipientData)),e.shareTypes&&t.attr("data-share-types",e.shareTypes.join(",")),t};var r=e.elementToFile;e.elementToFile=function(e){var n=r.apply(this,arguments);if(n.sharePermissions=e.attr("data-share-permissions")||void 0,n.shareOwner=e.attr("data-share-owner")||void 0,n.shareOwnerId=e.attr("data-share-owner-id")||void 0,e.attr("data-share-types")&&(n.shareTypes=e.attr("data-share-types").split(",")),e.attr("data-expiration")){var t=parseInt(e.attr("data-expiration"));n.shares=[],n.shares.push({expiration:t})}return n};var a=e._getWebdavProperties;e._getWebdavProperties=function(){var e=a.apply(this,arguments);return e.push(OC.Files.Client.PROPERTY_OWNER_ID),e.push(OC.Files.Client.PROPERTY_OWNER_DISPLAY_NAME),e.push(OC.Files.Client.PROPERTY_SHARE_TYPES),e},e.filesClient.addFileInfoParser(function(e){var n={},t=e.propStat[0].properties,i=t[OC.Files.Client.PROPERTY_PERMISSIONS];i&&i.indexOf("S")>=0&&(n.shareOwner=t[OC.Files.Client.PROPERTY_OWNER_DISPLAY_NAME],n.shareOwnerId=t[OC.Files.Client.PROPERTY_OWNER_ID]);var r=t[OC.Files.Client.PROPERTY_SHARE_TYPES];return r&&(n.shareTypes=_.chain(r).filter(function(e){return e.namespaceURI===OC.Files.Client.NS_OWNCLOUD&&"share-type"===e.nodeName.split(":")[1]}).map(function(e){return parseInt(e.textContent||e.text,10)}).value()),n}),e.$el.on("fileActionsReady",function(e){var n=e.$files;_.each(n,function(e){var n=$(e),t=n.attr("data-share-types")||"",i=n.attr("data-share-owner");if(t||i){var r=!1,a=!1;_.each(t.split(",")||[],function(e){(e=parseInt(e,10))===OC.Share.SHARE_TYPE_LINK?r=!0:e===OC.Share.SHARE_TYPE_EMAIL?r=!0:e===OC.Share.SHARE_TYPE_USER?a=!0:e===OC.Share.SHARE_TYPE_GROUP?a=!0:e===OC.Share.SHARE_TYPE_REMOTE?a=!0:e===OC.Share.SHARE_TYPE_CIRCLE?a=!0:e===OC.Share.SHARE_TYPE_ROOM&&(a=!0)}),OCA.Sharing.Util._updateFileActionIcon(n,a,r)}})}),e.$el.on("changeDirectory",function(){OCA.Sharing.sharesLoaded=!1}),n.registerAction({name:"Share",displayName:function(e){if(e&&e.$file){var n=parseInt(e.$file.data("share-types"),10),i=e.$file.data("share-owner-id");if(n>=0||i)return t("core","Shared")}return t("core","Share")},altText:t("core","Share"),mime:"all",order:-150,permissions:OC.PERMISSION_ALL,iconClass:function(e,n){var t=parseInt(n.$file.data("share-types"),10);return t===OC.Share.SHARE_TYPE_EMAIL||t===OC.Share.SHARE_TYPE_LINK?"icon-public":"icon-shared"},icon:function(e,n){var t=n.$file.data("share-owner-id");if(t)return OC.generateUrl("/avatar/".concat(t,"/32"))},type:OCA.Files.FileActions.TYPE_INLINE,actionHandler:function(n,t){var i=parseInt(t.$file.data("share-permissions"),10);(isNaN(i)||i>0)&&e.showDetailsView(n,"shareTabView")},render:function(e,t,i){return 0!=(parseInt(i.$file.data("permissions"),10)&OC.PERMISSION_SHARE)||i.$file.attr("data-share-owner")?n._defaultRenderAction.call(n,e,t,i):null}});var o=new OCA.Sharing.ShareTabView("shareTabView",{order:-20});o.on("sharesChanged",function(n){var t=n.fileInfoModel,i=e.findFileEl(t.get("name")),r=n.hasLinkShares();n.get("shares").forEach(function(e){e.share_type===OC.Share.SHARE_TYPE_EMAIL&&(r=!0)}),OCA.Sharing.Util._updateFileListDataAttributes(e,i,n),OCA.Sharing.Util._updateFileActionIcon(i,n.hasUserShares(),r)||OC.Share.markFileAsShared(i,!1,!1),t.set({shareTypes:n.getShareTypes(),icon:i.attr("data-icon")})}),e.registerTabView(o);var s=new OCA.Sharing.ShareBreadCrumbView({shareTab:o});e.registerBreadCrumbDetailView(s)}},_updateFileListDataAttributes:function(e,n,t){if("files"!==e.id)if(_.pluck(t.get("shares"),"share_with_displayname").length){var i=_.mapObject(t.get("shares"),function(e){return{shareWith:e.share_with,shareWithDisplayName:e.share_with_displayname}});n.attr("data-share-recipient-data",JSON.stringify(i))}else n.removeAttr("data-share-recipient-data")},_updateFileActionIcon:function(e,n,t){return!!(n||t||e.attr("data-share-recipient-data")||e.attr("data-share-owner"))&&(OC.Share.markFileAsShared(e,!0,t),!0)},getSharePermissions:function(e){return e.sharePermissions}},OC.Plugins.register("OCA.Files.FileList",OCA.Sharing.Util)},function(e,n,i){var r;r=OCA.Files.DetailTabView.extend({id:"shareTabView",className:"tab shareTabView",initialize:function(e,n){OCA.Files.DetailTabView.prototype.initialize.call(this,e,n),OC.Plugins.attach("OCA.Sharing.ShareTabView",this)},template:function(e){return'<div><div class="dialogContainer"></div><div id="collaborationResources"></div></div>'},getLabel:function(){return t("files_sharing","Sharing")},getIcon:function(){return"icon-shared"},render:function(){var e=this,n=this;if(this._dialog&&(this._dialog.model.off(),this._dialog.remove(),this._dialog=null),this.model){this.$el.html(this.template()),_.isUndefined(this.model.get("sharePermissions"))&&this.model.set("sharePermissions",OCA.Sharing.Util.getSharePermissions(this.model.attributes));var t={itemType:this.model.isDirectory()?"folder":"file",itemSource:this.model.get("id"),possiblePermissions:this.model.get("sharePermissions")},r=new OC.Share.ShareConfigModel,a=new OC.Share.ShareItemModel(t,{configModel:r,fileInfoModel:this.model});this._dialog=new OC.Share.ShareDialogView({configModel:r,model:a}),this.$el.find(".dialogContainer").append(this._dialog.$el),this._dialog.render(),this._dialog.model.fetch(),this._dialog.model.on("change",function(){n.trigger("sharesChanged",a)}),Promise.all([i.e(3),i.e(4)]).then(i.bind(null,15)).then(function(n){var t=new n.Vue({el:"#collaborationResources",render:function(e){return e(n.View)},data:{model:e.model.toJSON()}});e.model.on("change",function(){t.data=e.model.toJSON()})})}else this.$el.empty();this.trigger("rendered")}}),OCA.Sharing.ShareTabView=r},function(e,n){
/**
 * @copyright 2016 Christoph Wurst <christoph@winzerhof-wurst.at>
 *
 * @author 2016 Christoph Wurst <christoph@winzerhof-wurst.at>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */
!function(){"use strict";var e=OC.Backbone.View.extend({tagName:"span",events:{click:"_onClick"},_dirInfo:void 0,_shareTab:void 0,initialize:function(e){this._shareTab=e.shareTab},render:function(e){if(this._dirInfo=e.dirInfo||null,null===this._dirInfo||"/"===this._dirInfo.path&&""===this._dirInfo.name)this.$el.removeClass("shared icon-public icon-shared"),this.$el.hide();else{var n=e.dirInfo&&e.dirInfo.shareTypes&&e.dirInfo.shareTypes.length>0;this.$el.removeClass("shared icon-public icon-shared"),n?(this.$el.addClass("shared"),-1!==e.dirInfo.shareTypes.indexOf(OC.Share.SHARE_TYPE_LINK)?this.$el.addClass("icon-public"):this.$el.addClass("icon-shared")):this.$el.addClass("icon-shared"),this.$el.show(),this.delegateEvents()}return this},_onClick:function(e){e.preventDefault();var n=new OCA.Files.FileInfoModel(this._dirInfo),t=this;n.on("change",function(){t.render({dirInfo:t._dirInfo})}),this._shareTab.on("sharesChanged",function(e){for(var n=[],i=e.getSharesWithCurrentItem(),r=0;r<i.length;r++)-1===n.indexOf(i[r].share_type)&&n.push(i[r].share_type);e.hasLinkShares()&&n.push(OC.Share.SHARE_TYPE_LINK),t._dirInfo.shareTypes=n,t.render({dirInfo:t._dirInfo})}),OCA.Files.App.fileList.showDetailsView(n,"shareTabView")}});OCA.Sharing.ShareBreadCrumbView=e}()},function(e,n,t){var i=t(8);"string"==typeof i&&(i=[[e.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(2)(i,r);i.locals&&(e.exports=i.locals)},function(e,n,t){(e.exports=t(1)(!1)).push([e.i,".app-files .shareTabView {\n  min-height: 100px; }\n\n.share-autocomplete-item {\n  display: flex; }\n  .share-autocomplete-item.merged {\n    margin-left: 32px; }\n  .share-autocomplete-item .autocomplete-item-text {\n    margin-left: 10px;\n    margin-right: 10px;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    line-height: 32px;\n    vertical-align: middle;\n    flex-grow: 1; }\n    .share-autocomplete-item .autocomplete-item-text .ui-state-highlight {\n      border: none;\n      margin: 0; }\n  .share-autocomplete-item.with-description .autocomplete-item-text {\n    line-height: 100%; }\n  .share-autocomplete-item .autocomplete-item-details {\n    display: block;\n    line-height: 130%;\n    font-size: 90%;\n    opacity: 0.7; }\n  .share-autocomplete-item .icon {\n    opacity: .7;\n    margin-right: 7px; }\n  .share-autocomplete-item .icon.search-globally {\n    width: 32px;\n    height: 32px;\n    margin-right: 0; }\n\n.shareTabView .oneline {\n  white-space: nowrap;\n  position: relative; }\n\n.shareTabView .shareWithLoading {\n  padding-left: 10px;\n  right: 35px;\n  top: 3px; }\n\n.shareTabView .shareWithConfirm {\n  position: absolute;\n  right: 2px;\n  top: 6px;\n  padding: 14px;\n  opacity: 0.5; }\n\n.shareTabView .shareWithField:focus ~ .shareWithConfirm {\n  opacity: 1; }\n\n.shareTabView .linkMore {\n  position: absolute;\n  right: -7px;\n  top: -4px;\n  padding: 14px; }\n\n.shareTabView .popovermenu {\n  /* Border above last entry '+ Add another share' to separate it from current link settings */ }\n  .shareTabView .popovermenu .linkPassMenu input.error {\n    border-color: var(--color-error) !important; }\n    .shareTabView .popovermenu .linkPassMenu input.error[type=\"submit\"] {\n      border-left: none; }\n  .shareTabView .popovermenu .linkPassMenu .share-pass-submit {\n    width: auto !important; }\n  .shareTabView .popovermenu .linkPassMenu .icon-loading-small {\n    background-color: var(--color-main-background);\n    position: absolute;\n    right: 8px;\n    margin: 3px;\n    padding: 10px;\n    width: 32px;\n    height: 32px;\n    z-index: 10; }\n  .shareTabView .popovermenu .datepicker {\n    margin-left: 35px; }\n  .shareTabView .popovermenu .share-add input.share-note-delete {\n    border: none;\n    background-color: transparent;\n    width: 44px !important;\n    padding: 0;\n    flex: 0 0 44px;\n    margin-left: auto; }\n    .shareTabView .popovermenu .share-add input.share-note-delete.hidden {\n      display: none; }\n  .shareTabView .popovermenu .share-note-form span.icon-note {\n    position: relative; }\n  .shareTabView .popovermenu .share-note-form textarea.share-note {\n    margin: 0;\n    width: 200px;\n    min-height: 70px;\n    resize: none; }\n    .shareTabView .popovermenu .share-note-form textarea.share-note + input.share-note-submit {\n      position: absolute;\n      width: 44px !important;\n      height: 44px;\n      bottom: 0px;\n      right: 10px;\n      margin: 0;\n      background-color: transparent;\n      border: none;\n      opacity: .7; }\n      .shareTabView .popovermenu .share-note-form textarea.share-note + input.share-note-submit:hover, .shareTabView .popovermenu .share-note-form textarea.share-note + input.share-note-submit:focus, .shareTabView .popovermenu .share-note-form textarea.share-note + input.share-note-submit:active {\n        opacity: 1; }\n  .shareTabView .popovermenu .share-note-form.share-note-link {\n    margin-bottom: 10px; }\n  .shareTabView .popovermenu .new-share {\n    border-top: 1px solid var(--color-border); }\n\n.shareTabView .linkPass .icon-loading-small {\n  margin-right: 0px; }\n\n.shareTabView .icon {\n  background-size: 16px 16px; }\n\n.shareTabView .shareWithList .icon-loading-small:not(.hidden) + span,\n.shareTabView .linkShareView .icon-loading-small:not(.hidden) + input + label:before {\n  /* Hide if loader is visible */\n  display: none !important; }\n\n.shareTabView input[type='checkbox'] {\n  margin: 0 3px 0 8px;\n  vertical-align: middle; }\n\n.shareTabView input[type='text'].shareWithField, .shareTabView input[type='text'].emailField {\n  width: 100%;\n  box-sizing: border-box;\n  padding-right: 32px;\n  text-overflow: ellipsis; }\n\n.shareTabView input[type='text'].linkText .shareTabView input[type='password'].linkPassText, .shareTabView input[type='password'].passwordField {\n  width: 180px !important; }\n\n.shareTabView form {\n  font-size: 100%;\n  margin-left: 0;\n  margin-right: 0; }\n\n.shareTabView .share-note {\n  border-radius: var(--border-radius);\n  margin-bottom: 10px;\n  margin-left: 37px; }\n\n.shareWithList {\n  list-style-type: none;\n  display: flex;\n  flex-direction: column; }\n  .shareWithList > li {\n    height: 44px;\n    white-space: normal;\n    display: inline-flex;\n    align-items: center;\n    position: relative; }\n    .shareWithList > li .avatar {\n      width: 32px;\n      height: 32px;\n      background-color: var(--color-primary); }\n  .shareWithList .unshare img {\n    vertical-align: text-bottom;\n    /* properly align icons */ }\n  .shareWithList .sharingOptionsGroup {\n    margin-left: auto;\n    display: flex;\n    align-items: center;\n    white-space: nowrap; }\n    .shareWithList .sharingOptionsGroup > .icon:not(.hidden),\n    .shareWithList .sharingOptionsGroup .share-menu > .icon:not(.hidden) {\n      padding: 14px;\n      height: 44px;\n      width: 44px;\n      opacity: .5;\n      display: block;\n      cursor: pointer; }\n      .shareWithList .sharingOptionsGroup > .icon:not(.hidden):hover, .shareWithList .sharingOptionsGroup > .icon:not(.hidden):focus, .shareWithList .sharingOptionsGroup > .icon:not(.hidden):active,\n      .shareWithList .sharingOptionsGroup .share-menu > .icon:not(.hidden):hover,\n      .shareWithList .sharingOptionsGroup .share-menu > .icon:not(.hidden):focus,\n      .shareWithList .sharingOptionsGroup .share-menu > .icon:not(.hidden):active {\n        opacity: .7; }\n    .shareWithList .sharingOptionsGroup > .share-menu {\n      position: relative;\n      display: block; }\n  .shareWithList .username {\n    padding: 0 8px;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis; }\n\n.ui-autocomplete {\n  /* limit dropdown height to 6 1/2 entries */\n  max-height: calc(36px * 6.5);\n  overflow-y: auto;\n  overflow-x: hidden;\n  z-index: 1550 !important; }\n\n.notCreatable {\n  padding-left: 12px;\n  padding-top: 12px;\n  color: var(--color-text-lighter); }\n\n.contactsmenu-popover {\n  left: -6px;\n  right: auto;\n  padding: 3px 6px;\n  top: 100%;\n  margin-top: 0; }\n  .contactsmenu-popover li.hidden {\n    display: none !important; }\n  .contactsmenu-popover:after {\n    left: 8px;\n    right: auto; }\n\n.reshare,\n#link label,\n#expiration label {\n  display: inline-flex;\n  align-items: center; }\n  .reshare .avatar,\n  #link label .avatar,\n  #expiration label .avatar {\n    margin-right: 5px; }\n\n.resharerInfoView.subView {\n  position: relative; }\n",""])},function(e,n){e.exports=function(e){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var t=n.protocol+"//"+n.host,i=t+n.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,n){var r,a=n.trim().replace(/^"(.*)"$/,function(e,n){return n}).replace(/^'(.*)'$/,function(e,n){return n});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a)?e:(r=0===a.indexOf("//")?a:0===a.indexOf("/")?t+a:i+a.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},function(e,n,t){var i=t(11);"string"==typeof i&&(i=[[e.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(2)(i,r);i.locals&&(e.exports=i.locals)},function(e,n,t){(e.exports=t(1)(!1)).push([e.i,"/**\n * @copyright 2016 Christoph Wurst <christoph@winzerhof-wurst.at>\n *\n * @author 2016 Christoph Wurst <christoph@winzerhof-wurst.at>\n *\n * @license GNU AGPL version 3 or any later version\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU Affero General Public License as\n * published by the Free Software Foundation, either version 3 of the\n * License, or (at your option) any later version.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU Affero General Public License for more details.\n *\n * You should have received a copy of the GNU Affero General Public License\n * along with this program.  If not, see <http://www.gnu.org/licenses/>.\n *\n */\ndiv.crumb span.icon-shared,\ndiv.crumb span.icon-public {\n  display: inline-block;\n  cursor: pointer;\n  opacity: 0.2;\n  margin-right: 6px; }\n\ndiv.crumb span.icon-shared.shared,\ndiv.crumb span.icon-public.shared {\n  opacity: 0.7; }\n",""])}]);
//# sourceMappingURL=additionalScripts.js.map
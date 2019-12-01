!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("lit-element/lit-element.js"),require("@lrnwebcomponents/schema-behaviors/schema-behaviors.js")):"function"==typeof define&&define.amd?define(["exports","lit-element/lit-element.js","@lrnwebcomponents/schema-behaviors/schema-behaviors.js"],t):t((e=e||self).CodeEditor={},e.litElement_js,e.schemaBehaviors_js)}(this,function(e,t,n){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t,n){return(d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=c(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(n):r.value}})(e,t,n||e)}function s(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function f(){var e=s(['\n      <label for="codeeditor" ?hidden="','">','</label>\n      <monaco-element\n        id="codeeditor"\n        ?autofocus="','"\n        ?hide-line-numbers="','"\n        lib-path="','"\n        language="','"\n        theme="','"\n        @value-changed="','"\n        font-size="','"\n        ?read-only="','"\n        @code-editor-focus="','"\n        @code-editor-blur="','"\n      >\n      </monaco-element>\n      <div class="code-pen-container" ?hidden="','">\n        <span>Check it out on code pen: </span\n        ><code-pen-button .data="','"></code-pen-button>\n      </div>\n    ']);return f=function(){return e},e}function h(){var e=s(["\n        :host {\n          display: block;\n          padding: 16px;\n          font-family: unset;\n        }\n        :host([hidden]) {\n          display: none !important;\n        }\n        .code-pen-container:not([hidden]) {\n          width: 100%;\n          display: flex;\n          background-color: var(--code-pen-button-color, #222222);\n          color: white;\n          height: 40px;\n          justify-content: flex-end;\n          align-items: center;\n        }\n        .code-pen-container span {\n          display: inline-flex;\n          line-height: 16px;\n          font-size: 16px;\n          padding: 12px;\n        }\n        code-pen-button {\n          float: right;\n          height: 40px;\n        }\n        label {\n          color: var(--code-editor-label-color, #888);\n          transition: all 0.5s;\n        }\n\n        :host([focused]) label {\n          color: var(\n            --code-editor-float-label-active-color,\n            var(--code-editor-label-color, #000)\n          );\n        }\n\n        #codeeditor {\n          height: 100%;\n          display: flex;\n          border: var(--code-editor-code-border);\n          border-radius: var(--code-editor-code-border-radius);\n        }\n\n        :host([focused]) #codeeditor {\n          border: var(--code-editor-focus-code-border);\n        }\n      "]);return h=function(){return e},e}var p=function(e){function r(){var e,t,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),t=this,n=c(r).call(this),(e=!n||"object"!=typeof n&&"function"!=typeof n?u(t):n).showCodePen=!1,e.readOnly=!1,e.theme="vs-dark",e.language="javascript",e.fontSize=16,e.autofocus=!1,e.hideLineNumbers=!1,e.focused=!1,e.__libPath=decodeURIComponent("undefined"!=typeof document?document.currentScript&&document.currentScript.src||document.baseURI:new("undefined"!=typeof URL?URL:require("url").URL)("file:"+__filename).href)+"/../../../monaco-editor/min/vs",import("@lrnwebcomponents/code-editor/lib/monaco-element/monaco-element.js"),import("@lrnwebcomponents/code-editor/lib/code-pen-button.js"),setTimeout(function(){e.addEventListener("monaco-element-ready",e.editorReady.bind(u(e)))},0),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(r,n.SchemaBehaviors(t.LitElement)),i(r,null,[{key:"styles",get:function(){return[t.css(h())]}}]),i(r,[{key:"render",value:function(){return t.html(f(),!this.title,this.title,this.autofocus,this.hideLineNumbers,this.__libPath,this.language,this.theme,this._editorDataChanged,this.fontSize,this.readOnly,this._handleFocus,this._handleBlur,!this.showCodePen,this.codePenData)}},{key:"updated",value:function(e){var t=this;e.forEach(function(e,n){"editorValue"==n&&t._editorValueChanged(t[n],e),"mode"==n&&t._modeChanged(t[n],e),"showCodePen"===n&&t.dispatchEvent(new CustomEvent("show-code-pen-changed",{detail:{value:t[n]}})),"value"===n&&t.dispatchEvent(new CustomEvent("value-changed",{detail:{value:t[n]}})),["title","value"].includes(n)&&(t.codePenData=t._computeCodePenData(t.title,t.value))})}},{key:"_computeCodePenData",value:function(e,t){return{title:e,html:t}}},{key:"_handleFocus",value:function(e){this.focused=!0}},{key:"_handleBlur",value:function(e){this.focused=!1}},{key:"_modeChanged",value:function(e){this.language=this.mode}},{key:"_editorDataChanged",value:function(e){this.value=e.detail}},{key:"updateEditorValue",value:function(e){if(e){var t="",n=e;if("TEMPLATE"!==e.tagName){if(console.warn("code-editor works best with a template tag provided in light dom"),(n=this.childNodes).length>0)for(var r=0,i=n.length;r<i;r++)"undefined"!==o(n[r].tagName)?t+=n[r].outerHTML:t+=n[r].textContent}else t=n.innerHTML;t&&(this.shadowRoot.querySelector("#codeeditor").value=t.trim())}}},{key:"_editorValueChanged",value:function(e){e&&(this.shadowRoot.querySelector("#codeeditor").value=e)}},{key:"preProcessHaxNodeToContent",value:function(e){return e.editorValue=null,e.codePenData=null,e.value=null,e.removeAttribute("value"),e.removeAttribute("code-pen-data"),e}},{key:"connectedCallback",value:function(){var e=this;d(c(r.prototype),"connectedCallback",this).call(this),this._observer=new MutationObserver(function(t){t.forEach(function(t){t.addedNodes.length>0&&t.addedNodes.forEach(function(t){t.tagName&&e.updateEditorValue(t)}),t.removedNodes.length>0&&t.removedNodes.forEach(function(t){t.tagName&&e.updateEditorValue(t)})})}),this._observer.observe(this,{childList:!0})}},{key:"disconnectedCallback",value:function(){this._observer&&(this._observer.disconnect(),this._observer=null),d(c(r.prototype),"disconnectedCallback",this).call(this)}},{key:"editorReady",value:function(e){this.editorValue&&(this.shadowRoot.querySelector("#codeeditor").value=this.editorValue)}}],[{key:"tag",get:function(){return"code-editor"}},{key:"properties",get:function(){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){a(e,t,n[t])})}return e}({},d(c(r),"properties",this),{title:{type:String},showCodePen:{type:Boolean,reflect:!0,attribute:"show-code-pen"},readOnly:{type:Boolean,reflect:!0,attribute:"read-only"},codePenData:{type:Object},editorValue:{type:String},value:{type:String},theme:{type:String},mode:{type:String},language:{type:String},fontSize:{type:Number,attribute:"font-size"},autofocus:{type:Boolean,reflect:!0},hideLineNumbers:{type:Boolean,attribute:"hide-line-numbers"},focused:{type:Boolean,reflect:!0}})}}]),r}();window.customElements.define(p.tag,p),e.CodeEditor=p,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=code-editor.umd.js.map

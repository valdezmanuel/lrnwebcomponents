!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("lit-element/lit-element.js"),require("@lrnwebcomponents/simple-colors/simple-colors.js"),require("@lrnwebcomponents/schema-behaviors/schema-behaviors.js")):"function"==typeof define&&define.amd?define(["exports","lit-element/lit-element.js","@lrnwebcomponents/simple-colors/simple-colors.js","@lrnwebcomponents/schema-behaviors/schema-behaviors.js"],n):n((e=e||self).SelfCheck={},e.litElement_js,e.simpleColors_js,e.schemaBehaviors_js)}(this,function(e,n,t,o){"use strict";function r(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,o)}return t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,n){return(s=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function a(e,n){return!n||"object"!=typeof n&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function p(e,n,t){return(p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,n,t){var o=function(e,n){for(;!Object.prototype.hasOwnProperty.call(e,n)&&null!==(e=c(e)););return e}(e,n);if(o){var r=Object.getOwnPropertyDescriptor(o,n);return r.get?r.get.call(t):r.value}})(e,n,t||e)}function f(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function u(e){return function(e){if(Array.isArray(e)){for(var n=0,t=new Array(e.length);n<e.length;n++)t[n]=e[n];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function d(){var e=f(["\n        :host {\n          display: block;\n          margin: 15px 0;\n        }\n        :host([hidden]),\n        *[hidden] {\n          display: none !important;\n        }\n\n        paper-card {\n          width: 100%;\n          color: var(\n            --self-check-question-text,\n            var(--simple-colors-default-theme-grey-12, #000)\n          );\n          background-color: var(\n            --self-check-question-color,\n            var(--simple-colors-default-theme-grey-1, #fff)\n          );\n          overflow: hidden;\n        }\n\n        paper-icon-button#checkbtn {\n          width: 50px;\n          height: 50px;\n          position: relative;\n          left: 16px;\n          bottom: -10px;\n        }\n\n        .check_button {\n          display: flex;\n          justify-content: flex-end;\n        }\n\n        paper-icon-button#closeBtn {\n          width: 50px;\n          height: 50px;\n          position: relative;\n          left: 16px;\n          bottom: -16px;\n        }\n\n        .close_button {\n          display: flex;\n          justify-content: flex-end;\n        }\n\n        iron-icon#questionmark {\n          width: 35px;\n          height: 35px;\n          padding: 5px;\n          color: var(\n            --self-check-heading-text,\n            var(--simple-colors-default-theme-grey-1, #fff)\n          );\n        }\n\n        .heading {\n          text-transform: uppercase;\n          font-size: 22px;\n          margin: 10px;\n          color: var(\n            --self-check-heading-text,\n            var(--simple-colors-default-theme-grey-1, #fff)\n          );\n        }\n\n        #header_wrap {\n          color: var(\n            --self-check-heading-text,\n            var(--simple-colors-default-theme-grey-1, #fff)\n          );\n          background-color: var(\n            --self-check-heading-color,\n            var(--simple-colors-default-theme-accent-8, #444)\n          );\n          display: inline-flex;\n          width: 100%;\n          margin: -20px 0 0;\n        }\n\n        #question_wrap {\n          color: var(\n            --self-check-question-text,\n            var(--simple-colors-default-theme-grey-12, #000)\n          );\n          background-color: var(\n            --self-check-question-color,\n            var(--simple-colors-default-theme-grey-1, #fff)\n          );\n          position: relative;\n        }\n\n        .question {\n          font-size: 16px;\n          padding: 15px 15px;\n        }\n\n        :host([correct]) .question {\n          display: none;\n        }\n\n        #answer_wrap {\n          visibility: hidden;\n          opacity: 0;\n          color: var(\n            --self-check-answer-text,\n            var(--simple-colors-default-theme-grey-1, #fff)\n          );\n          background-color: var(\n            --self-check-answer-color,\n            var(--simple-colors-default-theme-light-green-8, #00762e)\n          );\n          border-top: 2px solid\n            var(\n              --self-check-answer-text,\n              var(--simple-colors-default-theme-grey-1, #fff)\n            );\n          width: 100%;\n          top: 0;\n          transition: all 0.2s ease;\n          left: calc(100%);\n          position: absolute;\n        }\n\n        :host([correct]) #answer_wrap {\n          visibility: visible;\n          opacity: 1;\n          position: relative;\n          left: 0;\n        }\n\n        .answer {\n          font-size: 16px;\n          padding: 15px;\n          line-height: 19.2px;\n        }\n\n        #quote_start {\n          display: inline-flex;\n          transform: rotateY(180deg);\n        }\n\n        #quote_end {\n          display: inline-flex;\n        }\n\n        .triangle {\n          width: 0;\n          height: 0;\n          border-left: 20px solid transparent;\n          border-right: 20px solid transparent;\n          border-bottom: 20px solid\n            var(\n              --self-check-heading-color,\n              var(--simple-colors-default-theme-accent-8, #444)\n            );\n          position: relative;\n          top: -20px;\n          left: -1px;\n        }\n\n        .more_info {\n          display: inline;\n        }\n\n        .more_info a {\n          color: var(\n            --self-check-answer-text,\n            var(--simple-colors-default-theme-grey-1, #fff)\n          );\n        }\n\n        .more_info a:hover {\n          text-decoration: none;\n        }\n      "]);return d=function(){return e},e}function h(){var e=f(['\n                    <div class="more_info">\n                      <user-action track="click" every\n                        ><a href="','" target="_blank"\n                          >More info...</a\n                        ></user-action\n                      >\n                    </div>\n                  ']);return h=function(){return e},e}function m(){var e=f(['\n      <paper-card image="','" alt="','">\n        <div class="triangle"></div>\n        <div id="header_wrap">\n          <iron-icon id="questionmark" icon="icons:help"></iron-icon>\n          <div class="heading">','</div>\n        </div>\n        <div id="question_wrap">\n          <div class="question" aria-hidden="','">\n            <slot name="question"></slot>\n            <div class="check_button">\n              <paper-icon-button\n                controls="answer_wrap"\n                aria-label="Reveal Answer"\n                id="checkBtn"\n                icon="icons:check-circle"\n                noink\n                @click="','"\n              ></paper-icon-button>\n              <simple-tooltip aria-hidden="true" for="checkBtn" position="left">\n                Reveal Answer\n              </simple-tooltip>\n            </div>\n          </div>\n          <div\n            id="answer_wrap"\n            aria-hidden="','"\n            aria-live="polite"\n          >\n            <div class="answer">\n              <user-action track="visibility">\n                <slot></slot>\n              </user-action>\n              ','\n              <div class="close_button">\n                <paper-icon-button\n                  aria-label="Close"\n                  id="closeBtn"\n                  icon="icons:close"\n                  @click="','"\n                  noink\n                >\n                </paper-icon-button>\n                <simple-tooltip\n                  aria-hidden="true"\n                  for="closeBtn"\n                  position="left"\n                >\n                  Close\n                </simple-tooltip>\n              </div>\n            </div>\n          </div>\n        </div>\n      </paper-card>\n    ']);return m=function(){return e},e}var y=function(e){function f(){var e;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,f),(e=a(this,c(f).call(this))).correct=!1,e.alt="",e.image="",e.question="",e.title="Self-Check",import("@lrnwebcomponents/user-action/user-action.js"),import("@polymer/paper-card/paper-card.js"),import("@polymer/paper-icon-button/paper-icon-button.js"),import("@polymer/iron-icons/editor-icons.js"),import("@polymer/iron-icons/iron-icons.js"),import("@lrnwebcomponents/simple-tooltip/simple-tooltip.js"),e}var y,v,b;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&s(e,n)}(f,o.SchemaBehaviors(t.SimpleColors)),y=f,b=[{key:"styles",get:function(){return[].concat(u(p(c(f),"styles",this)),[n.css(d())])}},{key:"tag",get:function(){return"self-check"}},{key:"properties",get:function(){return function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach(function(n){i(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}({},p(c(f),"properties",this),{title:{type:String},question:{type:String},image:{type:String,reflect:!0},alt:{type:String,reflect:!0},link:{type:String,reflect:!0},correct:{type:Boolean,reflect:!0}})}},{key:"haxProperties",get:function(){return{canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Self-Check",description:"The user will be able to complete a self-check.",icon:"icons:check-circle",color:"orange",groups:["Image","Assessment"],handles:[{type:"image",source:"image",title:"question",description:"answer"}],meta:{author:"ELMS:LN"}},settings:{quick:[{property:"title",title:"Title",description:"The title of the element",inputMethod:"textfield",icon:"editor:title"},{property:"image",title:"Image",description:"The image of the element",inputMethod:"textfield",icon:"editor:insert-photo"},{property:"link",title:"More link",description:"Link to additional information",inputMethod:"textfield",validationType:"url",icon:"icons:link"}],configure:[{property:"title",title:"Title",description:"The title of the element",inputMethod:"textfield"},{property:"accentColor",title:"Accent Color",description:"The accent color of the self-check",inputMethod:"colorpicker",icon:"editor:format-color-fill"},{property:"dark",title:"Dark Theme",description:"Enable Dark Theme",inputMethod:"boolean",icon:"icons:invert-colors"},{property:"image",title:"Image",description:"The image of the element",inputMethod:"haxupload",validationType:"url"},{property:"link",title:"More link",description:"Link to additional information",inputMethod:"haxupload",validationType:"url"},{property:"alt",title:"Alt Text",description:"Add alt text to the image",inputMethod:"alt"},{slot:"question",title:"Question to ask",description:"This is where you enter a question for the self-check.",inputMethod:"code-editor",required:!0},{slot:"",title:"Answer",description:"This is where you enter a question for the self-check.",inputMethod:"code-editor",required:!0}],advanced:[]},saveOptions:{unsetAttributes:["colors"]}}}}],(v=[{key:"render",value:function(){return n.html(m(),this.image,this.alt,this.title,this.correct,this.openAnswer,this.correct?"false":"true",this.link?n.html(h(),this.link):"",this.openAnswer)}},{key:"openAnswer",value:function(e){this.correct=!this.correct}}])&&r(y.prototype,v),b&&r(y,b),f}();window.customElements.define(y.tag,y),e.SelfCheck=y,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=self-check.umd.js.map

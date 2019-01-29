!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("@polymer/polymer/polymer-legacy.js"),require("@polymer/iron-icon/iron-icon.js"),require("@lrnwebcomponents/simple-colors/simple-colors.js"),require("@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"),require("@lrnwebcomponents/a11y-behaviors/a11y-behaviors.js"),require("@lrnwebcomponents/lrn-icons/lrn-icons.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-legacy.js","@polymer/iron-icon/iron-icon.js","@lrnwebcomponents/simple-colors/simple-colors.js","@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js","@lrnwebcomponents/a11y-behaviors/a11y-behaviors.js","@lrnwebcomponents/lrn-icons/lrn-icons.js"],n):n((e=e||self).LrndesignPaperstack={},e.polymerLegacy_js,null,e.simpleColors_js)}(this,function(e,n,r,t){"use strict";function o(){var e,n,r=(e=['\n    <style include="simple-colors">\n      :host {\n        display: block;\n        font-size: 14px;\n        --lrndesign-paperstack-bg: var(--simple-colors-default-theme-grey-1);\n        --lrndesign-paperstack-faded-bg: var(\n          --simple-colors-default-theme-grey-2\n        );\n        --lrndesign-paperstack-border: var(\n          --simple-colors-default-theme-grey-4\n        );\n        --lrndesign-paperstack-shadow: var(\n          --simple-colors-default-theme-grey-12\n        );\n        --lrndesign-paperstack-accent: var(\n          --simple-colors-default-theme-accent-8\n        );\n        --lrndesign-paperstack-text: var(--simple-colors-default-theme-grey-12);\n        --lrndesign-paperstack-heading-font: cursive;\n      }\n      :host([dark]) {\n        --lrndesign-paperstack-bg: var(--simple-colors-default-theme-accent-4);\n        --lrndesign-paperstack-faded-bg: var(\n          --simple-colors-default-theme-accent-3\n        );\n        --lrndesign-paperstack-border: var(\n          --simple-colors-default-theme-accent-1\n        );\n        --lrndesign-paperstack-shadow: var(\n          --simple-colors-default-theme-grey-1\n        );\n        --lrndesign-paperstack-accent: var(\n          --simple-colors-default-theme-grey-12\n        );\n        --lrndesign-paperstack-text: var(--simple-colors-default-theme-grey-12);\n      }\n      .stack {\n        width: 100%;\n        position: relative;\n        display: flex;\n        flex-direction: column;\n        align-items: stretch;\n      }\n      .paper {\n        min-height: 160px;\n        width: 80%;\n        padding: 12px 24px;\n        position: absolute;\n        flex: 1 1 auto;\n        left: 0;\n        top: 0;\n        box-shadow: 0 0 1px var(--lrndesign-paperstack-shadow);\n        border: 1px solid var(--lrndesign-paperstack-border);\n      }\n      .paper:first-of-type {\n        left: -0.32px;\n        top: 0.32px;\n        transform: rotate(-2.5deg);\n        background-color: var(--lrndesign-paperstack-faded-bg);\n      }\n      .paper:nth-of-type(2) {\n        right: -0.32px;\n        top: 1.6px;\n        transform: rotate(1.4deg);\n        background-color: var(--lrndesign-paperstack-faded-bg);\n      }\n      .front {\n        flex: 0 0 100%;\n        position: relative;\n        margin-bottom: 48px;\n        background-color: var(--lrndesign-paperstack-bg);\n        color: var(--lrndesign-paperstack-text);\n      }\n\n      iron-icon {\n        width: 90%;\n        height: 90%;\n        flex: 1 1 auto;\n        color: var(--lrndesign-paperstack-bg);\n      }\n      .heading {\n        display: flex;\n        align-items: center;\n      }\n      .icon-container {\n        width: 48px;\n        height: 48px;\n        border-radius: 50%;\n        background-color: var(--lrndesign-paperstack-accent);\n        margin-right: 8px;\n        display: flex;\n        align-items: center;\n      }\n      .title {\n        font-size: 16px;\n        color: var(--lrndesign-paperstack-accent);\n        font-family: var(--lrndesign-paperstack-heading-font);\n      }\n    </style>\n    <div class="stack">\n      <div class="paper"></div>\n      <div class="paper"></div>\n      <div class="front paper">\n        <div class="heading">\n          <div class="icon-container circle">\n            <iron-icon icon="[[icon]]"></iron-icon>\n          </div>\n          <span class="title">[[title]]</span>\n        </div>\n        <p><slot></slot></p>\n      </div>\n    </div>\n  '],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return o=function(){return r},r}var i=n.Polymer({_template:n.html(o()),is:"lrndesign-paperstack",behaviors:[HAXBehaviors.PropertiesBehaviors,A11yBehaviors.A11y,t.SimpleColors],properties:{title:{type:String,value:"Title"},icon:{type:String,value:"lrn:assignment"}},attached:function(){this.setHaxProperties({canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Paper stack",description:"A stack of papers",icon:"icons:content-copy",color:"grey",groups:["Video","Media"],handles:[],meta:{author:"LRNWebComponents"}},settings:{quick:[{property:"title",title:"Title",description:"Title of the cards",inputMethod:"textfield",icon:"editor:title"},{property:"accent-color",title:"Accent color",description:"Select the accent color use",inputMethod:"colorpicker",icon:"editor:format-color-fill"},{property:"dark",title:"Dark",description:"Use dark theme",inputMethod:"toggle",icon:"invert-colors"}],configure:[{property:"title",title:"Title",description:"Title of the cards",inputMethod:"boolean"},{property:"accent-color",title:"Accent color",description:"Select the accent color use",inputMethod:"colorpicker",icon:"editor:format-color-fill"},{property:"dark",title:"Dark",description:"Use dark theme",inputMethod:"toggle",icon:"invert-colors"},{property:"icon",title:"Icon",description:"Icon for the card",inputMethod:"iconpicker"},{slot:"",title:"Contents",description:"card contents",inputMethod:"code-editor"}],advanced:[]}})}});e.LrndesignPaperstack=i,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=lrndesign-paperstack.umd.js.map

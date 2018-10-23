define([
  "exports",
  "./node_modules/@polymer/polymer/polymer-element.js",
  "./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"
], function(_exports, _polymerElement, _HAXWiring) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.MediaImage = void 0;
  function _templateObject_6f597ba0d6ff11e8b017f1c6b5be0c76() {
    var data = babelHelpers.taggedTemplateLiteral([
      "\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n</style>\n<slot></slot>"
    ]);
    _templateObject_6f597ba0d6ff11e8b017f1c6b5be0c76 = function() {
      return data;
    };
    return data;
  }
  var MediaImage = (function(_PolymerElement) {
    babelHelpers.inherits(MediaImage, _PolymerElement);
    function MediaImage() {
      babelHelpers.classCallCheck(this, MediaImage);
      return babelHelpers.possibleConstructorReturn(
        this,
        (MediaImage.__proto__ || Object.getPrototypeOf(MediaImage)).apply(
          this,
          arguments
        )
      );
    }
    babelHelpers.createClass(
      MediaImage,
      [
        {
          key: "connectedCallback",
          value: function connectedCallback() {
            babelHelpers
              .get(
                MediaImage.prototype.__proto__ ||
                  Object.getPrototypeOf(MediaImage.prototype),
                "connectedCallback",
                this
              )
              .call(this);
            this.HAXWiring = new _HAXWiring.HAXWiring();
            this.HAXWiring.setHaxProperties(
              MediaImage.haxProperties,
              MediaImage.tag,
              this
            );
          }
        }
      ],
      [
        {
          key: "template",
          get: function get() {
            return (0, _polymerElement.html)(
              _templateObject_6f597ba0d6ff11e8b017f1c6b5be0c76()
            );
          }
        },
        {
          key: "haxProperties",
          get: function get() {
            return {
              canScale: !0,
              canPosition: !0,
              canEditSource: !1,
              gizmo: {
                title: "Media image",
                description: "Automated conversion of media-image/",
                icon: "icons:android",
                color: "green",
                groups: ["Image"],
                handles: [{ type: "todo:read-the-docs-for-usage" }],
                meta: {
                  author: "btopro",
                  owner: "The Pennsylvania State University"
                }
              },
              settings: { quick: [], configure: [], advanced: [] }
            };
          }
        },
        {
          key: "properties",
          get: function get() {
            return {};
          }
        },
        {
          key: "tag",
          get: function get() {
            return "media-image";
          }
        }
      ]
    );
    return MediaImage;
  })(_polymerElement.PolymerElement);
  _exports.MediaImage = MediaImage;
  window.customElements.define(MediaImage.tag, MediaImage);
});

/**
 * Copyright 2019 Penn State University
 * @license Apache-2.0, see License.md for full text.
 */
import { LitElement, html, css } from "lit-element/lit-element.js";
import { RichTextEditorButtonBehaviors } from "./rich-text-editor-button.js";
import "@valdezmanuel/rich-text-editor/lib/singletons/rich-text-editor-selection.js";
import "@valdezmanuel/rich-text-editor/lib/singletons/rich-text-editor-prompt.js";

const RichTextEditorPromptButtonBehaviors = function (SuperClass) {
  return class extends RichTextEditorButtonBehaviors(SuperClass) {
    /**
     * Store tag name to make it easier to obtain directly.
     */
    static get tag() {
      return "rich-text-editor-prompt-button";
    }

    // render function for template
    render() {
      return super.render();
    }

    // properties available to custom element for data binding
    static get properties() {
      return {
        ...super.properties,
        /**
         * fields for prompt popover.
         */
        fields: {
          type: Array,
        },
        /**
         * is element a custom inline widget element?
         */
        inlineWidget: {
          name: "inlineWidget",
          type: Boolean,
        },
        /**
         * is element a custom inline widget element?
         */
        id: {
          name: "id",
          type: String,
          reflect: true,
          attribute: "id",
        },
        /**
         * tag that will wrap selected range
         */
        tag: {
          name: "tag",
          type: String,
        },
        /**
         * prefilled value of prompt
         */
        value: {
          type: Object,
        },
        /**
         * prompt that pops up when button is pressed
         */
        prompt: {
          name: "prompt",
          type: Object,
        },
        /**
         * contents node inside selected range
         */
        __wrap: {
          name: "__wrap",
          type: Object,
        },
        /**
         * contents node inside selected range
         */
        __oldValue: {
          name: "__oldValue",
          type: Object,
        },
      };
    }
    constructor() {
      super();
      this.editableSelection = false;
      this.inlineWidget = false;
      this.fields = [
        {
          property: "innerHTML",
          title: "Text",
          inputMethod: "textfield",
        },
      ];
      this.tag = "span";
      this.value = { innerHTML: undefined };
      this.prompt = window.RichTextEditorPrompt.requestAvailability();
    }

    /**
     * determines which command based on values passed from prompt
     * (can be overriden for custom prompt  commands)
     *
     * @readonly
     */
    get promptCommand() {
      return this.toggledCommand && !this.toggled
        ? this.toggledCommand
        : this.command;
    }

    /**
     * determaines commandVal based on values passed from prompt
     * (can be overriden for custom prompt command values)
     */
    get promptCommandVal() {
      return this.commandVal;
    }
    /**
     * determaines if prompt also sets innerHTML of range
     * (can be overriden for custom prompts)
     */
    get setsInnerHTML() {
      let innerHTML = (this.fields || []).filter(
        (field) => field.property === "innerHTML"
      );
      return innerHTML && innerHTML.length > 0;
    }

    /**
     * override to add function to cancelled prompt
     */
    cancel() {}

    /**
     * updates insertion based on fields
     */
    confirm(val) {
      this.value = val;
      this.update();
      this.setToggled();
      this.promptCommandVal;
      this.updateSelection();
    }
    /**
     * expands selection to include this.tag
     *
     */
    expandSelection() {
      let element = this.rangeQuery();
      if (element) this.highlightNode(element);
    }
    /**
     * if selection is a node, gets node innerHTML
     *
     * @returns {string}
     */
    getInnerHTML() {
      let target =
          this.range && this.range.cloneContents
            ? this.range.cloneContents()
            : undefined,
        root = this.rangeElement() ? this.rangeElement() : undefined,
        temp,
        html;

      if (this.rangeIsElement()) {
        html = root ? root.innerHTML : undefined;
      } else {
        temp = document.createElement("span");
        if (target) temp.appendChild(target);
        html = temp.innerHTML;
        temp.remove();
      }
      return html;
    }

    /**
     * gets a field value (and trims it if it's a string)
     *
     * @param {string} prop field name
     * @returns {*}
     * @memberof RichTextEditorPrompt
     */
    getPropValue(prop) {
      let val = !!this.value ? this.value : false,
        rawVal =
          !val || !val[prop]
            ? false
            : val[prop].trim
            ? val[prop].trim()
            : val[prop];
      return rawVal && rawVal !== "" ? rawVal : false;
    }

    /**
     * gets value for prompt based on current selection
     * (can be overriden for custom prompt field values)
     */
    getValue() {
      return { innerHTML: this.getInnerHTML() || "" };
    }

    /**
     * Handles selecting text and opening prompt
     */
    open() {
      this.expandSelection();
      this.value = this.getValue();
      this.prompt.fields = [...this.fields];
      this.prompt.value = { ...this.value };
      this.dispatchEvent(
        new CustomEvent("rich-text-editor-prompt-open", {
          bubbles: true,
          cancelable: true,
          composed: true,
          detail: this,
        })
      );
    }
    /**
     * sets inner HTML of selection
     *
     * @param {string} html
     */
    setInnerHTML(html) {
      let target = this.rangeElement();
      if (target && this.rangeIsElement()) {
        target.innerHTML = html;
      } else if (this.range) {
        this.sendCommand("insertHtml", html);
      }
    }
    /**
     * updates toggled based on values passed from prompt
     * (can be overriden for custom toggled state)
     */
    setToggled() {
      this.toggled = !this.value;
    }
    /**
     * updates selection based on values passed from prompt
     */
    updateSelection() {
      let range = this.range.cloneRange();
      this.sendCommand(this.promptCommand, this.promptCommandVal);
      this.selectRange(range);
      if (this.setsInnerHTML) this.setInnerHTML(this.getPropValue("innerHTML"));
    }

    /**
     * Handles button tap
     * @param {event} e button tap event
     */
    _buttonTap(e) {
      e.preventDefault();
      this.open();
    }

    /**
     * Handles range change
     * @param {event} e button tap event
     */
    _rangeChanged(newVal, oldVal) {
      this.value = this.getValue();
      this.setToggled();
    }
  };
};
/**
 * `rich-text-editor-prompt-button`
 * a button that prompts for more information for rich text editor (custom buttons can extend this)
 *
 * @element rich-text-editor-prompt-button
 * @demo ./demo/buttons.html
 */
class RichTextEditorPromptButton extends RichTextEditorPromptButtonBehaviors(
  LitElement
) {}
window.customElements.define(
  RichTextEditorPromptButton.tag,
  RichTextEditorPromptButton
);
export { RichTextEditorPromptButton, RichTextEditorPromptButtonBehaviors };

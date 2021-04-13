/**
 * Copyright 2018 Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
import { LitElement, html, css } from "lit-element/lit-element.js";
import { RichTextEditorStyles } from "../rich-text-editor-styles.js";
import { RichTextEditorButtonStyles } from "../buttons/rich-text-editor-button-styles.js";
import "@lrnwebcomponents/simple-popover/simple-popover.js";
import "@lrnwebcomponents/simple-fields/simple-fields.js";
import "./rich-text-editor-selection.js";
/**
 * `rich-text-editor-prompt`
 * `A utility that manages state of multiple rich-text-prompts on one page.`
 *
 * @element rich-text-editor-prompt
 */
class RichTextEditorPrompt extends RichTextEditorButtonStyles(
  RichTextEditorStyles(LitElement)
) {
  static get styles() {
    return [
      ...super.styles,
      css`
        :host {
          --simple-fields-color: var(--rich-text-editor-focus-color, #000);
          --simple-fields-invalid-color: var(
            --rich-text-editor-error-color,
            #800
          );
        }

        .wrapper {
          width: 100%;
          height: 100%;
          inset: 0px;
          margin: auto;
          z-index: 400;
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          background-color: rgba(0,0,0,0.3);        
        }
        .wrapper[hidden] {
          display: none !important;
        }
        #prompt {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 300px;
          max-width: 300px;
          --simple-popover-padding: 0px;
          z-index: 400;
          position: relative !important;
          top: 0 !important;
          left: 0 !important;
        }
        #prompt[hidden] {
          display: none;
        }
        #prompt #form {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          z-index: 2;
        }
        #formfields {
          width: calc(100% - 20px);
          padding: 10px 10px 0;
          overflow: visible;
        }
        #prompt simple-fields-field {
          padding: 0;
        }
        #confirm,
        #cancel {
          min-width: unset;
        }
        #cancel {
          color: var(--rich-text-editor-button-color);
          background-color: var(--rich-text-editor-button-bg);
        }
        #cancel:focus,
        #cancel:hover {
          color: var(--rich-text-editor-button-hover-color);
          background-color: var(--rich-text-editor-button-hover-bg);
        }
        #confirm {
          color: var(--rich-text-editor-button-color);
          background-color: var(--rich-text-editor-button-bg);
        }
        #confirm:focus,
        #confirm:hover {
          color: var(--rich-text-editor-button-hover-color);
          background-color: var(--rich-text-editor-button-hover-bg);
        }
        .actions {
          width: 100%;
          padding-bottom: 3px;
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }
        .confirm-or-cancel {
          min-width: 40px;
        }
      `,
    ];
  }
  render() {
    return html`
      <div class="wrapper" ?hidden=${!this.for}>
      <simple-popover id="prompt" auto for="${this.for}" ?hidden="${!this.for}">
        <form id="form">
          <simple-fields
            id="formfields"
            autofocus
            hide-line-numbers
            .fields="${this.fields}"
            .value="${this.value}"
          ></simple-fields>
          <div class="actions">
            <button
              id="cancel"
              class="rtebutton"
              controls="${this.for}"
              @click="${this._cancel}"
              tabindex="0"
            >
              <simple-icon-lite id="icon" aria-hidden="true" icon="clear">
              </simple-icon-lite>
              <span id="label" class="offscreen">Cancel</span>
            </button>
            <simple-tooltip id="tooltip" for="cancel">Cancel</simple-tooltip>
            <button
              id="confirm"
              class="rtebutton"
              controls="${this.for}"
              @click="${this._confirm}"
              tabindex="0"
            >
              <simple-icon-lite id="icon" aria-hidden="true" icon="check">
              </simple-icon-lite>
              <span id="label" class="offscreen">OK</span>
            </button>
            <simple-tooltip id="tooltip" for="confirm">OK</simple-tooltip>
          </div>
        </form>
      </simple-popover>
    </div>
    `;
  }

  /**
   * Store tag name to make it easier to obtain directly.
   */
  static get tag() {
    return "rich-text-editor-prompt";
  }

  // properties available to custom element for data binding
  static get properties() {
    return {
      /**
       * fields for prompt popover.
       */
      fields: {
        type: Array,
      },
      /**
       * Is  target id.
       */
      for: {
        type: String,
      },
      /**
       * selected text.
       */
      range: {
        type: Object,
      },
      /**
       * selected node withing range
       * /
      selectedNode: {
        type: Object
      },
      /**
       * prefilled value of prompt
       */
      value: {
        type: Object,
      },
    };
  }

  /**
   * Makes sure there is a utility ready and listening for elements.
   */
  constructor() {
    super();
    this.__selection = window.RichTextEditorSelection.requestAvailability();
    window.addEventListener(
      "rich-text-editor-prompt-open",
      this.open.bind(this)
    );

    // sets instance to current instance
    if (!window.RichTextEditorPrompt.instance) {
      window.RichTextEditorPrompt.instance = this;
      return this;
    }
  }

  /**
   * life cycle, element is afixed to DOM
   * Makes sure there is a utility ready and listening for elements.
   */
  connectedCallback() {
    super.connectedCallback();
  }
  open(e) {
    if (e) {
      this.for = this.__selection.id;
      this.button = e.detail;
      this.editor = this.button.editor;
      this.fields = [...e.detail.fields];
      this.value = { ...e.detail.value };
    }
  }
  close() {
    this.for = undefined;
    this.button = undefined;
    this.editor = undefined;
    this.fields = [];
    this.value = {};
  }

  /**
   * Handles cancel button
   * @param {event} e event
   * @returns {void}
   */
  _cancel(e) {
    e.preventDefault();
    this.button.cancel();
    this.close();
  }
  /**
   * Handles confirm button
   * @param {event} e event
   * @returns {void}
   */
  _confirm(e) {
    e.preventDefault();
    this.button.confirm(this.value);
    this.close();
  }
}
window.customElements.define(RichTextEditorPrompt.tag, RichTextEditorPrompt);
export { RichTextEditorPrompt };

// register globally so we can make sure there is only one
window.RichTextEditorPrompt = window.RichTextEditorPrompt || {};
// request if this exists. This helps invoke element existing in dom
// as well as that there is only one of them. That way we can ensure everything
// is rendered through same modal
window.RichTextEditorPrompt.requestAvailability = () => {
  if (!window.RichTextEditorPrompt.instance) {
    window.RichTextEditorPrompt.instance = document.createElement(
      "rich-text-editor-prompt"
    );
    document.body.appendChild(window.RichTextEditorPrompt.instance);
  }
  return window.RichTextEditorPrompt.instance;
};

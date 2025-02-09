/**
 * Copyright 2019 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
import { UABroker } from "./lib/UserActionBroker.js";
/**
  * `user-action`
  * @element user-action
  * `track user actions and allow them to talk to xAPI stores easily`
  *
  * @microcopy - language worth noting:
  *  -
  *
 
  * @demo demo/index.html
  */
class UserAction extends HTMLElement {
  /**
   * Store the tag name to make it easier to obtain directly.
   */
  static get tag() {
    return "user-action";
  }
  /**
   * life cycle
   */
  constructor() {
    super();
    this.fired = false;
    this.track = "visibility";
    this.eventname = "user-engagement";
    this.every = false;
    this.visiblelimit = 0.5;
  }
  get every() {
    return this.getAttribute("every");
  }
  set every(val) {
    this.setAttribute("every", val);
  }
  /**
   * life cycle, element is afixed to the DOM
   */
  connectedCallback() {
    this.__ready = true;
  }

  static get observedAttributes() {
    return ["track", "eventname", "every"];
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    if (attr === "track" && newValue) {
      switch (newValue) {
        // visibility isn't a real event and needs a complex solution
        case "visibility":
          // set an interaction observer
          this.observer = new IntersectionObserver(
            this.handleIntersectionCallback.bind(this),
            {
              root: document.rootElement,
              rootMargin: "0px",
              threshold: [0.0, 0.25, 0.5, 0.75, 1.0],
            }
          );
          this.observer.observe(this);
          break;
        default:
          this.addEventListener(newValue, this.userActionEvent.bind(this));
          break;
      }
    }
  }
  /**
   * Handle this being visible
   */
  handleIntersectionCallback(entries) {
    for (let entry of entries) {
      if (Number(entry.intersectionRatio).toFixed(2) >= this.visiblelimit) {
        if (this.__ready) {
          this.userActionEvent({ detail: "visible" });
        }
      }
    }
  }
  /**
   * Redirect event we were monitoring into a trackable event
   */
  userActionEvent(e) {
    if (
      !this._haxstate &&
      (!this.fired || this.every) &&
      UABroker.valid(this.track)
    ) {
      UABroker.fire(this.eventname, this.track, e, this);
      this.fired = true;
    } else if (!UABroker.valid(this.track)) {
      console.warn(this.track + " was not valid");
    }
  }
  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return (
      decodeURIComponent(import.meta.url) +
      `/../lib/${this.tag}.haxProperties.json`
    );
  }
  /**
   * Implements haxHooks to tie into life-cycle if hax exists.
   */
  haxHooks() {
    return {
      editModeChanged: "haxeditModeChanged",
      activeElementChanged: "haxactiveElementChanged",
      gizmoRegistration: "haxgizmoRegistration",
    };
  }
  /**
   * Supply translations for the UI elements of HAX in meme-maker
   */
  haxgizmoRegistration(store) {
    window.dispatchEvent(
      new CustomEvent("i18n-manager-register-element", {
        detail: {
          namespace: `${this.tag}.haxProperties`,
          localesPath: `${decodeURIComponent(import.meta.url)}/../locales`,
          locales: ["es"],
        },
      })
    );
  }
  /**
   * double-check that we are set to inactivate click handlers
   * this is for when activated in a duplicate / adding new content state
   */
  haxactiveElementChanged(el, val) {
    if (val) {
      this._haxstate = val;
    }
  }
  /**
   * Set a flag to test if we should block link clicking on the entire card
   * otherwise when editing in hax you can't actually edit it bc its all clickable.
   * if editMode goes off this helps ensure we also become clickable again
   */
  haxeditModeChanged(val) {
    this._haxstate = val;
  }
}
customElements.define(UserAction.tag, UserAction);
export { UserAction };

/**
 * Copyright 2019 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
import { LitElement, html, css } from "lit-element/lit-element.js";

/**
 * `git-corner`
 * @customElement git-corner
 * `display a quick link with styling to a repo to help with contributions`
 *
 * @microcopy - language worth noting:
 *  -
 *

 * @lit-element
 * @demo demo/index.html
 */
class GitCorner extends LitElement {
  
  //styles function
  static get styles() {
    return  [
      
      css`
:host {
  display: block;
}
      `
    ];
  }
  // render function
  render() {
    return html`

<a .title="${this.alt}" .href="${this.source}" target="_blank" rel="noopener noreferrer" class="github-corner">
    <svg viewBox="0 0 250 250">
        <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
        <path
            d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
            fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path>
        <path
            d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
            fill="currentColor" class="octo-body"></path>
    </svg>
</a>`;
  }

  // properties available to the custom element for data binding
  static get properties() {
    return {
  
  ...super.properties,
  
  /**
   * source to point to
   */
  "source": {
    "name": "source",
    "type": String
  },
  /**
   * alt text
   */
  "alt": {
    "name": "alt",
    "type": String
  },
  /**
   * Whether or not to be rendered in the top corner, common on tech sites
   */
  "corner": {
    "name": "corner",
    "type": Boolean,
    "reflect": true
  },
  /**
   * basic size adjustment
   */
  "size": {
    "name": "size",
    "type": String,
    "reflect": true
  }
}
;
  }

  /**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */
  static get tag() {
    return "git-corner";
  }
  /**
   * Register CSS styles
   */
  static get styles() {
    return [
      css`
        :host {
          display: block;
        }
        :host([corner]) svg {
          z-index: var(--github-corner-z-index, 1);
          position: absolute;
          top: 0;
          border: 0;
          right: 0;
        }
        :host([circle]) svg {
          border-radius: 100px;
          transform: rotate(-45deg);
        }
        :host([size="micro"]) {
          --github-corner-size: 28px;
        }
        :host([size="small"]) {
          --github-corner-size: 50px;
        }
        :host([size="large"]) {
          --github-corner-size: 100px;
        }
        svg {
          fill: var(--github-corner-background, #24292e);
          color: var(--github-corner-color, #ffffff);
          width: var(--github-corner-size, 80px);
          height: var(--github-corner-size, 80px);
        }
        a {
          display: table;
          outline-color: var(--github-corner-background, #24292e);
          outline-width: 2px;
        }

        .github-corner:focus .octo-arm,
        .github-corner:hover .octo-arm {
          animation: octocat-wave 560ms ease-in-out;
        }

        @keyframes octocat-wave {
          0%,
          100% {
            transform: rotate(0);
          }
          20%,
          60% {
            transform: rotate(-25deg);
          }
          40%,
          80% {
            transform: rotate(10deg);
          }
        }
        @media (max-width: 500px) {
          .github-corner:hover .octo-arm {
            animation: none;
          }
          .github-corner .octo-arm {
            animation: octocat-wave 560ms ease-in-out;
          }
        }
      `
    ];
  }
  /**
   * runs on first go
   */
  firstUpdated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {});
  }
  /**
   * updated / notice property changes
   */
  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {});
  }
}
customElements.define(GitCorner.tag, GitCorner);
export { GitCorner };

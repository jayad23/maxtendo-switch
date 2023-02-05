class Right extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return `
    :host{
    }

    .container {
    }
  `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
    <style>${Right.styles}</style>
    </div>
    <div class="container">
    <span>Right</span>
    </div>
  `;
  }
}

customElements.define("right-controller-buttons", Right);

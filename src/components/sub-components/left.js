class Left extends HTMLElement {
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
    <style>${Left.styles}</style>
    </div>
    <div class="container">
    <span>Left</span>
    </div>
  `;
  }
}

customElements.define("left-controller-buttons", Left);

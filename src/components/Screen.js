class Screen extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return `
    :host{
      --screen-width: 400px;
    }

    .container {
      width: var(--screen-width);
      height: 100%;
      background: #001219;
      display: flex;
      justify-content: center;
    }
  `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
    <style>${Screen.styles}</style>
    <div class="container">
    </div>
  `;
  }
}

customElements.define("switch-screen", Screen);

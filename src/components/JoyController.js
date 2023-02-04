class JoyController extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return `
    :host{
      --joy-width: 100px;
    }

    .container {
      width: var(--joy-width);
      height: 100%;
      background: #219ebc;
    }

    :host(.left) .container {
      border-radius: var(--outter-radius) 0 4px var(--outter-radius);
    }

    :host(.right) .container {
      background:  #e63946;
      border-radius: 0 var(--outter-radius) var(--outter-radius) 4px;
    }
  `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
    <style>${JoyController.styles}</style>
    <div class="container">
    </div>
  `;
  }
}

customElements.define("joy-controller", JoyController);

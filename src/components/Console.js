import "./JoyController";
import "./Screen";
class Console extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return `
      :host{
        --width: 625px;
        --height: 275px;
        --outter-radius: 50px;
      }

      .container {
        width: var(--width);
        height: var(--height);
        background: #333;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        border-radius: var(--outter-radius);
      }

      .joy-container{
        width: 100%;
        display: flex;
        justify-content: space-between;
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>${Console.styles}</style>
      <div class="container">
      <joy-controller class="left"></joy-controller>
      <switch-screen></switch-screen>
      <joy-controller class="right"></joy-controller>
      </div>
    `;
  }
}

customElements.define("switch-console", Console);

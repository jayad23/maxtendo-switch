import "./JoyController";
import "./sub-components/trigger";
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
        --controller-width: 100px;
        --edge-radius: 4px;
      }

      .container {
        width: var(--width);
        height: var(--height);
        margin: 0 auto;
        display: grid;
        grid-template-columns: 
          var(--controller-width) 
          1fr 
          var(--controller-width)
        ;
        filter: drop-shadow(6px 6px 8px #0006);

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
      <joy-controller class="left">
      </joy-controller>
      <switch-screen></switch-screen>
      <joy-controller class="right">
      <controller-trigger></controller-trigger></joy-controller>
      </div>
    `;
  }
}

customElements.define("switch-console", Console);

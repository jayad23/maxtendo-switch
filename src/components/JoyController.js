import "./sub-components/trigger";
import "./sub-components/left";
import "./sub-components/right";
class JoyController extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return `
    :host{
      --joy-width: 100px;
      --outter-radius: 50px;
      position: relative;
      --buttons-container-width: 70%;
      --symbol-width: 17px;
      --symbol-height: 6px;
    }

    .container { 
      height: 100%;
      background: #219ebc;
    }

    :host(.left) .container {
      border-radius: 
        var(--outter-radius) 
        0 
        var(--edge-radius) 
        var(--outter-radius)
      ;
      box-shadow: 
        4px -6px 6px #0005 inset,
        0 5px 2px #fff4 inset;
      ;
    }

    :host(.right) .container {
      background:  #e63946;
      border-radius: 
        0 
        var(--outter-radius) 
        var(--outter-radius) 
        var(--edge-radius)
      ;
      box-shadow: 
        -4px -6px 6px #0005 inset,
        0 5px 2px #fff4 inset;
      ;
    }
  `;
  }

  connectedCallback() {
    this.render();
    this.addContent();
  }

  addContent() {
    const container = this.shadowRoot.querySelector(".container");
    const isLeft = this.classList.contains("left");
    const classis = isLeft ? "left" : "right";
    const trigger = `<controller-trigger class=${classis}></controller-trigger>`;
    const buttonComponent = `<${classis}-controller-buttons></${classis}-controller-buttons>`;
    container.insertAdjacentHTML("afterbegin", trigger);
    container.insertAdjacentHTML("afterbegin", buttonComponent);
  }

  render() {
    this.shadowRoot.innerHTML = `
    <style>${JoyController.styles}</style>
    </div>
    <div class="container">
    </div>
  `;
  }
}

customElements.define("joy-controller", JoyController);

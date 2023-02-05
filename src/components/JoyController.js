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

    .trigger{
      background: #333;
      width: 90%;
      height: 20%;
      position: absolute;
      z-index: -1;
      cursor: pointer;
    }

    :host(.right) .trigger{
      border-radius: 
        2px
        var(--outter-radius) 
        2px 
        0
      ;
      right: -2px;
      top: -3.5px;
      transition: transform .7s;
    }

    :host(.left) .trigger{
      border-radius: 
        var(--outter-radius) 
        2px 
        0
        2px
      ;
      left: -3px;
      top: -3.5px;
    }

    :host(.right) .trigger:active{
      top: -1px;
    }

    :host(.left) .trigger:active{
      top: -1px;
    }
  `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
    <style>${JoyController.styles}</style>
    </div>
    <div class="trigger">
    </div>
    <div class="container">
    </div>
  `;
  }
}

customElements.define("joy-controller", JoyController);

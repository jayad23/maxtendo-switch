class Right extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return `
    :host{
      --light-color: #878794;
      --dark-color: #150b0a;
      --base-color: #3d4144;
    }

    .container {
      width: var(--buttons-container-width);
      margin-left: 0.25em;
      display: grid;
      grid-template-rows: 25px 70px 70px 30px;
      position: absolute;
      transform: translate(0, 1.3em);
    }

    .orientation{
      filter: drop-shadow(0px 1px 1px #000);
    }

    .orientation-symbol-hor{
      cursor: pointer;
      width: var(--symbol-width);
      height: var(--symbol-height);
      background: var(--basic);
    }

    .orientation-symbol-ver{
      cursor: pointer;
      width: var(--symbol-width);
      height: var(--symbol-height);
      background: var(--basic);
      transform: 
        rotate(90deg)
        translate(-5.7px, 0px)
      ;
    }

    .actions{
      display: flex;
      flex-wrap: wrap;
      width: 73px;
    }

    .action-btn{
      cursor: pointer;
      width: 24px;
      height: 24px;
      background: 
        radial-gradient(var(--base-color) 55%, transparent 60%),
        linear-gradient(130deg, var(--light-color), var(--dark-color) 90%)
      ;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align:center;
      color: #eee;
      font-family: 'Roboto', sans-serif;
      font-size: 13px;
      font-weight: 900;
      box-shadow:  
        0px 1px 1px #fff5 inset,
        0px -1px 1px #000c inset
      ;
    }

    .empty{
      visibility: hidden;
    }

    .analog{
      background: white;
      margin-top: 0.5em;
    }

    .home{
      background: gray;
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
      <div class="orientation">
        <div class="orientation-symbol-hor"></div>
        <div class="orientation-symbol-ver"></div>
      </div>
      <div class="actions">
        <div class="action-btn empty"></div>
        <div class="action-btn">X</div>
        <div class="action-btn empty"></div>
        <div class="action-btn">Y</div>
        <div class="action-btn empty"></div>
        <div class="action-btn">A</div>
        <div class="action-btn empty"></div>
        <div class="action-btn">B</div>
        <div class="action-btn empty"></div>
      </div>
      <div class="analog"></div>
      <div class="home"></div>
    </div>
  `;
  }
}

customElements.define("right-controller-buttons", Right);

class Screen extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.imageUrl = "https://media.tenor.com/CINm_xhrVEIAAAAC/nintendo-rgb.gif";
  }

  static get styles() {
    return `
    :host{
      --screen-frame-width: 400px;
      --screen-radius: 10px;
    }

    .container {
      background: linear-gradient(
        to top, 
        #272828 2%, 
        #333436 3% 97%, 
        #555555 99%
      );
      height: 100%;
      border-radius: var(--edge-radius);
      -webkit-mask-image:
        radial-gradient(
          ellipse 50% 100% at 0 0,
          transparent 5%,
          #000 5.5% 100%
        ),
        radial-gradient(
          ellipse 50% 100% at 100% 0,
          transparent 5%,
          #000 5.5% 100%
        )
      ;
      -webkit-mask-composite: source-in; 
    }

    .center {
      display: grid;
      place-items: center;
    }

    .crystal {
      width: var(--screen-frame-width);
      height: 93%;
      background: #001219;
      border-radius: var(--screen-radius);
      //border: 2px solid rgba( 255, 255, 255, 0.18 );
      border: 1px solid #444;
    }

    .screen {
      width: 90%;
      height: 90%;
      background: #eee;
      border-radius: calc(var(--screen-radius) - 8px);
    }

    .screen-on{
      width: 100%;
      height: 100%;
      object-fit: contained;
    }

    .volume-container {
      width: 50px;
      height: 15px;
      border-botton: 2px solid #555;
      position: absolute;
      transform: translate(50px, -4px);
      z-index: -1;
      display: flex;
      justify-content: space-between;
    }

    :is(.volumen-down, .volumen-up){
      background: #555;
      width: 35%;
      border-radius: 1.4px;
      cursor: pointer;
    }

    :is(.volumen-down, .volumen-up):active{
      transform: translate(0, 2px);
    }

    .volumen-gap{
      background: #eee;
      width: 30%;
      border-bottom: 1px dotted #555;
      height: 3px;
    }
  `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
    <style>${Screen.styles}</style>
    <div class="power btn"></div>
    <div class="volume-container btn">
      <div class="volumen-down">
      </div>
      <div class="volumen-gap"></div>
      <div class="volumen-up">
      </div>
    </div>
    <div class="container center">
      <div class="crystal center">
        <div class="screen">
          <img
            class="screen-on" 
            src=${this.imageUrl} 
            alt="maxtendo_on" 
          />
        </div>
      </div>
    </div>
  `;
  }
}

customElements.define("switch-screen", Screen);

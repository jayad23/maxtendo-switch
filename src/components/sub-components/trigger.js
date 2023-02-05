class Trigger extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return `
    :host{
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
    <style>${Trigger.styles}</style>
    <div class="trigger">
    </div>
  `;
  }
}

customElements.define("controller-trigger", Trigger);

import LoadingStyled from './LoadingStyled.js';
class LoadingIndicator extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._isVisible = false;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
      ${LoadingStyled}
      </style>
      <div class="loading-container">
        <div class="loading-spinner"></div>
      </div>
    `;
  }

  show() {
    const container = this.shadowRoot.querySelector('.loading-container');
    if (container) {
      container.classList.add('visible');
      this._isVisible = true;
    }
  }

  hide() {
    const container = this.shadowRoot.querySelector('.loading-container');
    if (container) {
      container.classList.remove('visible');
      this._isVisible = false;
    }
  }

  isVisible() {
    return this._isVisible;
  }
}

customElements.define('loading-indicator', LoadingIndicator);

export default LoadingIndicator;

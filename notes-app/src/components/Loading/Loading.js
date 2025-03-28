// src/components/Loading/Loading.js
class LoadingIndicator extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._isVisible = false;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        .loading-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.3);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
          visibility: hidden;
          opacity: 0;
          transition: visibility 0.3s, opacity 0.3s;
        }
  
        .loading-container.visible {
          visibility: visible;
          opacity: 1;
        }
  
        .loading-spinner {
          width: 50px;
          height: 50px;
          border: 5px solid #f3f3f3;
          border-top: 5px solid #3498db;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
  
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
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

customElements.define("loading-indicator", LoadingIndicator);

export default LoadingIndicator;
import NavbarStyled from './NavabrStyled.js';
class Navbar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
    this.startClock();

    const searchElement = this.shadowRoot.querySelector('note-search');
    searchElement.addEventListener('search-note', (event) => {
      document.dispatchEvent(
        new CustomEvent('search-note', { detail: event.detail })
      );
    });
  }

  startClock() {
    const clockElement = this.shadowRoot.querySelector('#clock');
    setInterval(() => {
      const now = new Date();
      const formattedTime = now.toLocaleTimeString();
      const formattedDate = now.toLocaleDateString();
      clockElement.textContent = `${formattedDate} ${formattedTime}`;
    }, 1000);
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        ${NavbarStyled}
      </style>
      <header>
        <section class="left-section">
        <img src="https://logomy.s3.ap-southeast-1.amazonaws.com/logo.png" alt="Logo" />
          <h1>Notes App</h1>
          <section class="search-section">
            <note-search placeholder-text="Search"></note-search>
          </section>
        </section>
        <div id="clock"></div>
      </header>
    `;
  }
}

customElements.define('nav-bar', Navbar);

export default Navbar;

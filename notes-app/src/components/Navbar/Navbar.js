class Navbar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
    this.startClock();

    const searchElement = this.shadowRoot.querySelector("note-search");
    searchElement.addEventListener("search-note", (event) => {
      document.dispatchEvent(
        new CustomEvent("search-note", { detail: event.detail })
      );
    });
  }

  startClock() {
    const clockElement = this.shadowRoot.querySelector("#clock");
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
        header {
          color: black;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          padding: 0 1rem;
        }
        header .left-section {
          display: flex;
          align-items: center;
        }
        header .search-section {
          margin-left: 1.5rem;
        }
        header img {
          width: 40px;
          height: 40px;
          margin-right: 0.5rem;
        }
        h1 {
          margin: 0;
          font-size: 1.5rem;
        }
        #clock {
          font-size: 1rem;
        }

        @media (max-width: 768px) {
          header {
            flex-direction: column;
            align-items: center;
            gap : 1rem;
          }
          
          h1 {
            font-size: 0.9rem;
            text-align: center;
          }
        }
      </style>
      <header>
        <section class="left-section">
          <img src="./public/logo.png" alt="Logo" />
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

customElements.define("nav-bar", Navbar);

export default Navbar;

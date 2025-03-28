class NoteSearch extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();

    const searchInput = this.shadowRoot.querySelector("#quickSearch");
    const clearButton = this.shadowRoot.querySelector(".search-clear");

    searchInput.addEventListener("input", (event) => {
      const query = event.target.value;
      clearButton.style.display = query ? "block" : "none";

      const searchEvent = new CustomEvent("search-note", {
        detail: query,
        bubbles: true,
        composed: true
      });
      this.dispatchEvent(searchEvent);
    });

    clearButton.addEventListener("click", () => {
      searchInput.value = "";
      clearButton.style.display = "none";

      const searchEvent = new CustomEvent("search-note", {
        detail: "",
        bubbles: true,
        composed: true
      });
      this.dispatchEvent(searchEvent);
    });
  }

  render() {
    const placeholderText = this.getAttribute("placeholder-text") || "Search";

    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
      <style>
        .navbar-search {
          width: 300px;
        }

        .search-wrapper {
          display: flex;
          align-items: center;
          background-color: var(--secondary-emphasis);
          border-radius: 8px;
          padding: 0.5rem;
          transition: background-color 0.2s, box-shadow 0.2s;
        }

        .search-wrapper:hover,
        .search-wrapper:focus-within {
          background-color: var(--white);
          box-shadow: 0 1px 3px 0 var(--shadow-color);
        }

        .search-wrapper i {
          color: var(--secondary);
          font-size: 1.2rem;
          margin-right: 0.5rem;
          cursor: pointer;
        }

        .search-wrapper .search-clear {
          margin-left: auto;
          display: none;
          cursor: pointer;
        }

        .search-wrapper #quickSearch {
          flex-grow: 1;
          border: none;
          background: transparent;
          font-size: 1rem;
          color: var(--dark);
          outline: none;
        }

        .search-wrapper input::placeholder {
          color: var(--secondary);
        }

        @media (max-width: 780px) {
          .navbar-search {
            width: 100%;
          }
        }
      </style>

      <div class="navbar-search">
        <div class="search-wrapper">
          <i class="bi bi-search"></i>
          <input type="text" id="quickSearch" placeholder="${placeholderText}" />
          <i class="bi bi-x search-clear"></i>
        </div>
      </div>
    `;
  }
}

customElements.define("note-search", NoteSearch);

export default NoteSearch;
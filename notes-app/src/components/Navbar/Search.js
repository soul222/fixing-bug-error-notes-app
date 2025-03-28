import SearchStyled from './SearchStyled.js';
class NoteSearch extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();

    const searchInput = this.shadowRoot.querySelector('#quickSearch');
    const clearButton = this.shadowRoot.querySelector('.search-clear');

    searchInput.addEventListener('input', (event) => {
      const query = event.target.value;
      clearButton.style.display = query ? 'block' : 'none';

      const searchEvent = new CustomEvent('search-note', {
        detail: query,
        bubbles: true,
        composed: true,
      });
      this.dispatchEvent(searchEvent);
    });

    clearButton.addEventListener('click', () => {
      searchInput.value = '';
      clearButton.style.display = 'none';

      const searchEvent = new CustomEvent('search-note', {
        detail: '',
        bubbles: true,
        composed: true,
      });
      this.dispatchEvent(searchEvent);
    });
  }

  render() {
    const placeholderText = this.getAttribute('placeholder-text') || 'Search';

    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
      <style>
        ${SearchStyled}
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

customElements.define('note-search', NoteSearch);

export default NoteSearch;

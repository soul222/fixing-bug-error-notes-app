// src/components/NoteList/List.js
import NoteStorage from '../../utils/Storage.js';
import ListStyled from './ListStyled.js';

class NoteList extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.notesData = [];
    this.loadingIndicator = document.createElement('loading-indicator');
  }

  connectedCallback() {
    this.render();
    this.loadNotes();
    
    document.addEventListener("notes-updated", () => this.loadNotes());
    document.addEventListener("search-note", (event) => this.handleSearch(event));
  }

  async loadNotes() {
    try {
      this.loadingIndicator.show();
      this.notesData = await NoteStorage.getNotes();
      this.render();
    } catch (error) {
      console.error('Error loading notes:', error);
    } finally {
      this.loadingIndicator.hide();
    }
  }

  async handleSearch(event) {
    const query = event.detail.toLowerCase();
    
    try {
      this.loadingIndicator.show();
      const allNotes = await NoteStorage.getNotes();

      this.notesData = allNotes.filter(
        (note) =>
          note.title.toLowerCase().includes(query) ||
          note.body.toLowerCase().includes(query)
      );

      this.render();
    } catch (error) {
      console.error('Error searching notes:', error);
    } finally {
      this.loadingIndicator.hide();
    }
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>${ListStyled}</style>
      <div class="note-list">
        ${
          this.notesData.length > 0
            ? this.notesData
                .map(
                  (note) => `
              <note-item id="${note.id}"></note-item>
            `
                )
                .join("")
            : `
            <div class="empty-state">
              <p>No notes found. Create your first note!</p>
            </div>
          `
        }
      </div>
    `;

    this.notesData.forEach((note) => {
      const noteElement = this.shadowRoot.querySelector(`#${note.id}`);
      if (noteElement) {
        noteElement.note = note;
      }
    });
  }
}

customElements.define("note-list", NoteList);

export default NoteList;
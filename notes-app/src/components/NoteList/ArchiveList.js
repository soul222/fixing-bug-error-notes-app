// src/components/NoteList/ArchiveList.js
import NoteStorage from "../../utils/Storage.js";
import ListStyled from "./ListStyled.js";

class NoteArchiveList extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.notesData = [];
    this.loadingIndicator = document.createElement("loading-indicator");
  }

  connectedCallback() {
    this.render();
    this.loadArchivedNotes();
    document.addEventListener("notes-updated", () => this.loadArchivedNotes());
  }

  async loadArchivedNotes() {
    try {
      this.loadingIndicator.show();
      this.notesData = await NoteStorage.getNotes(true);
      this.render();
    } catch (error) {
      console.error("Error loading archived notes:", error);
    } finally {
      this.loadingIndicator.hide();
    }
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>${ListStyled}</style>
      <div class="archive-list">
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
              <p>No archived notes.</p>
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

customElements.define("note-archive-list", NoteArchiveList);

export default NoteArchiveList;

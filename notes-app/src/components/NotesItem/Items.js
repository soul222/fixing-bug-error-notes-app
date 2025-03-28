// src/components/NotesItem/Items.js
import NoteStorage from '../../utils/Storage.js';
import ItemsStyled from './ItemsStyled.js';

class NoteItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  set note(note) {
    this.noteData = note;
    this.render();
  }

  render() {
    const note = this.noteData;
    const createdAt = new Date(note.createdAt).toLocaleString();

    const style = document.createElement('style');
    style.textContent = ItemsStyled;
    
    const wrapper = document.createElement('div');
    wrapper.classList.add('note-card');
    wrapper.innerHTML = `
      <h3>${note.title}</h3>
      <p>${note.body}</p>
      <span class="created-at">Created on: ${createdAt}</span>
      <div class="note-actions">
        <button class="archive-btn" title="${note.archived ? 'Unarchive Note' : 'Archive Note'}">
          <i class="bi ${note.archived ? 'bi-archive-fill' : 'bi-archive'}"></i>
        </button>
        <button class="delete-btn" title="Delete Note">
          <i class="bi bi-trash"></i>
        </button>
      </div>
    `;

    this.shadowRoot.innerHTML = '';
    this.shadowRoot.appendChild(style);
    this.shadowRoot.appendChild(wrapper);

    this.shadowRoot
      .querySelector(".archive-btn")
      .addEventListener("click", async () => {
        const loadingIndicator = document.createElement('loading-indicator');
        try {
          loadingIndicator.show();
          if (note.archived) {
            await NoteStorage.unarchiveNote(note.id);
          } else {
            await NoteStorage.archiveNote(note.id);
          }
          document.dispatchEvent(new CustomEvent("notes-updated"));
        } catch (error) {
          console.error('Error archiving/unarchiving note:', error);
        } finally {
          loadingIndicator.hide();
        }
      });

    this.shadowRoot
      .querySelector(".delete-btn")
      .addEventListener("click", () => {
        Swal.fire({
          title: "Are you sure?",
          text: "This note will be permanently deleted!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "var(--success)",
          cancelButtonColor: "var(--danger)",
          confirmButtonText: "Yes, delete!",
        }).then(async (result) => {
          if (result.isConfirmed) {
            const loadingIndicator = document.createElement('loading-indicator');
            try {
              loadingIndicator.show();
              await NoteStorage.deleteNote(note.id);
              document.dispatchEvent(new CustomEvent("notes-updated"));
            } catch (error) {
              console.error('Error deleting note:', error);
            } finally {
              loadingIndicator.hide();
            }
          }
        });
      });
  }
}

customElements.define("note-item", NoteItem);
export default NoteItem;
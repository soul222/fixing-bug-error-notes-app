    import NoteStorage from '../../utils/Storage.js';
    import FormValidation from '../../handlers/FormValidation.js';
    import FormStyled from './FormStyled.js';
     
    class NoteForm extends HTMLElement {
      constructor() {
        super();
        this.attachShadow({ mode: 'open' });
      }
     
      connectedCallback() {
        this.render();
        this.setupEventListeners();
      }
     
      setupEventListeners() {
        const form = this.shadowRoot.querySelector('form');
        const titleInput = this.shadowRoot.querySelector('#title');
        const bodyInput = this.shadowRoot.querySelector('#body');
        const titleErrorElement = this.shadowRoot.querySelector('#title-error');
        const bodyErrorElement = this.shadowRoot.querySelector('#body-error');
        const inputs = [
          { input: titleInput, error: titleErrorElement },
          { input: bodyInput, error: bodyErrorElement },
        ];
     
        inputs.forEach(({ input, error }) => {
          input.addEventListener('input', () => {
            FormValidation.validateInput(input, error);
          });
        });
     
        form.addEventListener('submit', async (event) => {
          event.preventDefault();
     
          const isValid = inputs.every(({ input, error }) =>
            FormValidation.validateInput(input, error)
          );
          if (isValid) {
            const loadingIndicator = document.createElement('loading-indicator'); // Ini Komentar Review Senior: Dengan menggunakan cara ini indikator loading tidak akan muncul ketika proses menambahkan catatan, alih-alih membuat kembali element loading-indicator, kamu dapat memanfaatkan element yang telah ada pada struktur html milikmu dengan memanfaatkan method querySelector.
        
            try {
              loadingIndicator.show();
              const note = {
                title: titleInput.value.trim(),
                body: bodyInput.value.trim(),
              };
     
              await NoteStorage.addNote(note);
              document.dispatchEvent(new CustomEvent('notes-updated'));
              form.reset();
            } catch (error) {
              console.error('Error creating note:', error);
            } finally {
              loadingIndicator.hide();
            }
          }
        });
     
        const textarea = this.shadowRoot.querySelector('textarea');
        const maxHeight = 200;
        textarea.addEventListener('input', () => {
          textarea.style.height = 'auto';
          const newHeight = textarea.scrollHeight;
          textarea.style.height = `${Math.min(newHeight, maxHeight)}px`;
        });
      }
     
      render() {
        const formType = this.getAttribute('data-form-type') || 'Add Note';
        this.shadowRoot.innerHTML = `
          <style>${FormStyled}</style>
          <form>
            <input type="text" id="title" placeholder="Title" required />
            <div id="title-error" class="error-message"></div>
     
            <textarea
              id="body"
              rows="4"
              cols="50"
              placeholder="Note Content"
              required
            ></textarea>
            <div id="body-error" class="error-message"></div>
     
            <button type="submit">${formType}</button>
          </form>
        `;
      }
    }
     
    customElements.define('note-form', NoteForm);
     
    export default NoteForm;

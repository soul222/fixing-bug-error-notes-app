import './components/Navbar/Navbar.js';
import './components/Navbar/Search.js';
import './components/NoteForm/Form.js';
import './components/NotesItem/Items.js';
import './components/NoteList/List.js';
import './components/NoteList/ArchiveList.js';
import './components/Loading/Loading.js';
import './app.css';

const loadingIndicator = document.createElement('loading-indicator');
document.body.appendChild(loadingIndicator);

document.addEventListener('DOMContentLoaded', () => {
  document.dispatchEvent(new CustomEvent('notes-updated'));
});

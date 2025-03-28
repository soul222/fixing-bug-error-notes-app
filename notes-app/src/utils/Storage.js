// src/utils/Storage.js
import NotesAPI from './ApiService.js';

class NoteStorage {
  static async getNotes(archived = false) {
    try {
      return await NotesAPI.getNotes(archived);
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to load notes. Please try again.'
      });
      return [];
    }
  }
  
  static async addNote(note) {
    try {
      const createdNote = await NotesAPI.createNote(note);
      return createdNote;
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to create note. Please try again.'
      });
    }
  }
  
  static async archiveNote(noteId) {
    try {
      await NotesAPI.archiveNote(noteId);
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to archive note. Please try again.'
      });
    }
  }
  
  static async deleteNote(noteId) {
    try {
      await NotesAPI.deleteNote(noteId);
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to delete note. Please try again.'
      });
    }
  }
}

export default NoteStorage;
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
      Swal.fire({
        icon: 'success',
        title: 'Note Created',
        text: 'Your note has been successfully added.'
      });
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
      Swal.fire({
        icon: 'success',
        title: 'Note Archived',
        text: 'Your note has been archived successfully.'
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to archive note. Please try again.'
      });
    }
  }

  static async unarchiveNote(noteId) {
    try {
      await NotesAPI.unarchiveNote(noteId);
      Swal.fire({
        icon: 'success',
        title: 'Note Unarchived',
        text: 'Your note has been unarchived successfully.'
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to unarchive note. Please try again.'
      });
    }
  }
  
  static async deleteNote(noteId) {
    try {
      await NotesAPI.deleteNote(noteId);
      Swal.fire({
        icon: 'success',
        title: 'Note Deleted',
        text: 'Your note has been deleted successfully.'
      });
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
// src/utils/api.js
class NotesAPI {
    static BASE_URL = 'https://notes-api.dicoding.dev/v2';
  
    static async getNotes(archived = false) {
      try {
        const response = await fetch(`${this.BASE_URL}/notes${archived ? '/archived' : ''}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch notes');
        }
        
        const result = await response.json();
        return result.data;
      } catch (error) {
        console.error('Error fetching notes:', error);
        throw error;
      }
    }
  
    static async createNote(noteData) {
      try {
        const response = await fetch(`${this.BASE_URL}/notes`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            title: noteData.title,
            body: noteData.body
          })
        });
  
        if (!response.ok) {
          throw new Error('Failed to create note');
        }
  
        const result = await response.json();
        return result.data;
      } catch (error) {
        console.error('Error creating note:', error);
        throw error;
      }
    }
  
    static async archiveNote(noteId) {
      try {
        const response = await fetch(`${this.BASE_URL}/notes/${noteId}/archive`, {
          method: 'POST'
        });
  
        if (!response.ok) {
          throw new Error('Failed to archive note');
        }
  
        return true;
      } catch (error) {
        console.error('Error archiving note:', error);
        throw error;
      }
    }
  
    static async unarchiveNote(noteId) {
      try {
        const response = await fetch(`${this.BASE_URL}/notes/${noteId}/unarchive`, {
          method: 'POST'
        });
  
        if (!response.ok) {
          throw new Error('Failed to unarchive note');
        }
  
        return true;
      } catch (error) {
        console.error('Error unarchiving note:', error);
        throw error;
      }
    }
  
    static async deleteNote(noteId) {
      try {
        const response = await fetch(`${this.BASE_URL}/notes/${noteId}`, {
          method: 'DELETE'
        });
  
        if (!response.ok) {
          throw new Error('Failed to delete note');
        }
  
        return true;
      } catch (error) {
        console.error('Error deleting note:', error);
        throw error;
      }
    }
  }
  
  export default NotesAPI;
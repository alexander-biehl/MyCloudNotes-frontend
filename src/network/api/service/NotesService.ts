import { request } from '../../axios'
import type { ApiContract } from '../../axios'
import type { Note } from '../../../types'

enum APIs {
  NOTES = '/notes',
  NOTE_BY_ID = '/notes/:id',
}

class NotesService {
  private readonly api: ApiContract

  constructor(request: ApiContract) {
    this.api = request
  }

  async getNotes(): Promise<Note[]> {
    return await this.api.get<Note[]>(APIs.NOTES)
  }

  async getNoteById(id: string): Promise<Note> {
    return await this.api.get<Note>(APIs.NOTE_BY_ID.replace(':id', id))
  }

  async createNote(note: Note): Promise<Note> {
    return await this.api.post<Note>(APIs.NOTES, note)
  }

  async updateNote(note: Note): Promise<Note> {
    return await this.api.put<Note>(APIs.NOTE_BY_ID.replace(':id', `${note.id}`), note)
  }

  async deleteNote(id: string): Promise<boolean> {
    return await this.api.delete<boolean>(APIs.NOTE_BY_ID.replace(':id', id))
  }
}

const notesService = new NotesService(request)
export default notesService

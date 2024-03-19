import type { Note } from '../../types'

export interface NotesResponse {
  notes: Array<Note>
}

export interface NoteResponse {
  note: Note
}

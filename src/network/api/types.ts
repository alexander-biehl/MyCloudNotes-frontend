import type { Note, User } from '../../types'

export interface NotesResponse {
  notes: Array<Note>
}

export interface NoteResponse {
  note: Note
}

export interface UserResponse {
  user: User
}

import { request } from '../../axios'
import type { ApiContract } from '../../axios'
import type { Note } from '../../../types'

enum APIs {
  GET_NOTES = '/notes',
}

class NotesService {
  private readonly api: ApiContract

  constructor(request: ApiContract) {
    this.api = request
  }

  async getNotes(): Promise<Note[]> {
    return await this.api.get<Note[]>(APIs.GET_NOTES)
  }
}

const notesService = new NotesService(request)
export default notesService

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
    let notes: Note[]
    try {
      notes = await this.api.get<Note[]>(APIs.GET_NOTES)
    } catch (ex) {
      console.log(`ERROR: issue calling getNotes: ${ex}`)
      notes = []
    }
    return notes
  }
}

const notesService = new NotesService(request)
export default notesService

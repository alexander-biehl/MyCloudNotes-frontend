import { LoaderFunction } from 'react-router-dom'
import { Note } from '../../../types'
import notesService from '../../../network/api/service/NotesService'
import { LoaderArgs } from '../../../types'

const loader: LoaderFunction = async ({ params }: LoaderArgs) => {
  const id = params.noteId ? params.noteId : ''
  const note: Note = await notesService.getNoteById(id)
  return { note }
}
export default loader

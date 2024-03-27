import { LoaderFunction } from 'react-router-dom'
import { Note } from '../../../types'
import notesService from '../../../network/api/service/NotesService'
import { LoaderArgs } from '../../../types'

const loader: LoaderFunction = async ({ params }: LoaderArgs) => {
  // unwrap the noteId
  const id = params.noteId ? params.noteId : ''
  // get the note from the backend with the provided id
  const note: Note = await notesService.getNoteById(id)
  // return the note
  return { note }
}
export default loader

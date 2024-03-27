import { ActionFunction, redirect } from 'react-router-dom'
import notesService from '../../../network/api/service/NotesService'
import { ActionParams } from '../../../types'

const destroyNoteAction: ActionFunction = async ({ params }: ActionParams) => {
  // unwrap noteId
  const id = params.noteId ? params.noteId : ''
  // call on noteService to delete the note, no expected return other than error
  await notesService.deleteNote(id)
  // redirect
  return redirect('/')
}
export default destroyNoteAction

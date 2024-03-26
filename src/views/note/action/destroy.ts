import { ActionFunction, redirect } from 'react-router-dom'
import notesService from '../../../network/api/service/NotesService'
import { ActionParams } from '../../../types'

const deleteAction: ActionFunction = async ({ params }: ActionParams) => {
  const id = params.noteId ? params.noteId : ''
  await notesService.deleteNote(id)
  return redirect('/')
}
export default deleteAction

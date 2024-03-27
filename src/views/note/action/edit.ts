import { ActionFunction, redirect } from 'react-router-dom'
import notesService from '../../../network/api/service/NotesService'
import { Note } from '../../../types'

const editNoteAction: ActionFunction = async ({ request }: { request: Request }) => {
  const formData: FormData = await request.formData()
  // the {} as Note is necessary to empty-init all the fields
  const note: Note = {} as Note
  formData.forEach((value: FormDataEntryValue, key) => {
    // key as keyof note is to prevent error 'expressions of type string cannot be used to index
    // object Note
    note[key as keyof Note] = value as string
  })

  // call on notesService to update and return the updated note
  const updatedNote = await notesService.updateNote(note)
  // redirect to the note detail page
  return redirect(`/notes/${updatedNote.id}`)
}
export default editNoteAction

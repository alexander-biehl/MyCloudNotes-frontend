import { redirect } from 'react-router-dom'
import notesService from '../../../network/api/service/NotesService'
import { Note } from '../../../types'

const editAction = async ({ request }: { request: Request }) => {
  const formData: FormData = await request.formData()
  // the {} as Note is necessary to empty-init all the fields
  const note: Note = {} as Note
  formData.forEach((value: FormDataEntryValue, key) => {
    // key as keyof note is to prevent error 'expressions of type string cannot be used to index
    // object Note
    note[key as keyof Note] = value as string
  })

  const updatedNote = await notesService.updateNote(note)
  return redirect(`/notes/${updatedNote.id}`)
}
export default editAction

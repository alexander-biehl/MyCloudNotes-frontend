import { redirect } from 'react-router-dom'
import notesService from '../../../network/api/service/NotesService'
import { Note } from '../../../types'
import type { ActionFunction } from 'react-router-dom'

const createNoteAction: ActionFunction = async ({ request }: { request: Request }) => {
  const formData: FormData = await request.formData()
  const toCreate: Note = {} as Note
  formData.forEach((value: FormDataEntryValue, key: string) => {
    toCreate[key as keyof Note] = value as string
  })
  const created: Note = await notesService.createNote(toCreate)
  if (!created.id) {
    throw new Response('', {
      status: 500,
      statusText: 'An error occurred while creating the Note',
    })
  }
  return redirect(`/notes/${created.id}`)
}
export default createNoteAction

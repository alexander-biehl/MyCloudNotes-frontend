import { redirect } from 'react-router-dom'
import notesService from '../../../network/api/service/NotesService'
import { Note } from '../../../types'
import type { ActionFunction } from 'react-router-dom'

const createNoteAction: ActionFunction = async ({ request }: { request: Request }) => {
  // get the key:value formdata from the request
  const formData: FormData = await request.formData()

  const toCreate: Note = {} as Note
  // populate note object form the form data pairs
  formData.forEach((value: FormDataEntryValue, key: string) => {
    toCreate[key as keyof Note] = value as string
  })
  // call notesService to create the note, returning the id
  const created: Note = await notesService.createNote(toCreate)
  // if no id or now failure response, throw error because something must have gone wrong
  if (!created.id) {
    throw new Response('', {
      status: 500,
      statusText: 'An error occurred while creating the Note',
    })
  }
  // otherwise redirect to the newly created note
  return redirect(`/notes/${created.id}`)
}
export default createNoteAction

import notesService from '../../network/api/service/NotesService'
import { LoaderFunction, useLoaderData } from 'react-router-dom'
import type { LoaderArgs, Note } from '../../types'
import type { NoteResponse } from '../../network/api/types'

export const loader: LoaderFunction = async ({ params }: LoaderArgs) => {
  const id = params.noteId ? params.noteId : ''
  const note: Note = await notesService.getNoteById(id)
  return { note }
}

export default function Note() {
  const { note } = useLoaderData() as NoteResponse

  return (
    <>
      <div id="note">
        <div>Hello Noto!</div>
        <h2>{note.title}</h2>
        <p>{note.content ? note.content : 'No Content'}</p>
      </div>
    </>
  )
}

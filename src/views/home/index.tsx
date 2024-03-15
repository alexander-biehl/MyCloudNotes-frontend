import { useLoaderData } from 'react-router-dom'
import notesService from '../../network/api/service/NotesService'
import { Note } from '../../types'
import { NotesResponse } from '../../network/api/types'

export async function loader() {
  const notes = notesService.getNotes()
  return { notes }
}

export default function Home() {
  const { notes } = useLoaderData() as NotesResponse

  return (
    <>
      <div>Hello, World!</div>
      <ul>
        {notes.map((note: Note) => {
          return <li key={note.id}>{note.content}</li>
        })}
      </ul>
    </>
  )
}

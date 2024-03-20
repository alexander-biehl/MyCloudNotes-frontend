import { NavLink, useLoaderData } from 'react-router-dom'
import type { Note } from '../../types'
import type { NotesResponse } from '../../network/api/types'
import Paths from '../../router/paths'

export default function Home() {
  const { notes } = useLoaderData() as NotesResponse

  return (
    <>
      <div>Hello, World!</div>
      <ul>
        {notes.map((note: Note) => {
          return (
            <li key={note.id}>
              <NavLink to={Paths.noteDetail.replace(':noteId', `${note.id}`)}>{note.title}</NavLink>
            </li>
          )
        })}
      </ul>
    </>
  )
}

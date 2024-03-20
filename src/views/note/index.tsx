import { useLoaderData } from 'react-router-dom'
import type { Note } from '../../types'
import type { NoteResponse } from '../../network/api/types'

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

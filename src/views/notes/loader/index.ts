import { LoaderFunction } from 'react-router-dom'
import notesService from '../../../network/api/service/NotesService'

const loader: LoaderFunction = async () => {
  // calls the notesService to get the list of notes
  const notes = await notesService.getNotes()
  // simply returns them
  return { notes }
}
export default loader

import { LoaderFunction } from 'react-router-dom'
import notesService from '../../../network/api/service/NotesService'

const loader: LoaderFunction = async () => {
  const notes = await notesService.getNotes()
  return { notes }
}
export default loader

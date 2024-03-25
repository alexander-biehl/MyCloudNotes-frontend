import { LoaderFunction, createBrowserRouter } from 'react-router-dom'

import Home from '../views/home'
import Note from '../views/note'
import noteLoader from '../views/note/loader'
import NotesList from '../views/notes'
import notesListLoader from '../views/notes/loader'
import ErrorPage from '../views/error'
import Root from '../views/root'
import Paths from './paths'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: Paths.noteList,
            element: <NotesList />,
            loader: notesListLoader as LoaderFunction,
          },
          {
            path: Paths.noteDetail,
            element: <Note />,
            loader: noteLoader as LoaderFunction,
          },
        ],
      },
    ],
  },
])
export default router

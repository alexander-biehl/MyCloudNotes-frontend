import { ActionFunction, LoaderFunction, createBrowserRouter } from 'react-router-dom'

import Home from '../views/home'
import Note from '../views/note'
import createNoteAction from '../views/note/action/create'
import noteLoader from '../views/note/loader'
import NotesList from '../views/notes'
import notesListLoader from '../views/notes/loader'
import ErrorPage from '../views/error'
import Root from '../views/root'
import Paths from './paths'
import destroyNoteAction from '../views/note/action/destroy'
import EditNote from '../views/note/edit'
import editNoteAction from '../views/note/action/edit'

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
          {
            path: Paths.noteEdit,
            element: <EditNote />,
            loader: noteLoader as LoaderFunction,
            action: editNoteAction as ActionFunction,
          },
          {
            path: Paths.noteCreate,
            action: createNoteAction as ActionFunction,
          },
          {
            path: Paths.noteDestroy,
            action: destroyNoteAction as ActionFunction,
          },
        ],
      },
    ],
  },
])
export default router

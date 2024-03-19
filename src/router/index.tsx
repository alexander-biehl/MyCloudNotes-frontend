import { LoaderFunction, createBrowserRouter } from 'react-router-dom'

import Home, { loader as notesListLoader } from '../views/home'
import Note, { loader as noteLoader } from '../views/note'
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
            loader: notesListLoader as LoaderFunction,
            element: <Home />,
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

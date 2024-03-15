import { createBrowserRouter } from 'react-router-dom'

import Home, { loader as notesListLoader } from '../views/home'
import ErrorPage from '../views/error'
import Root from '../views/root'

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
            loader: notesListLoader,
            element: <Home />,
          },
        ],
      },
    ],
  },
]);
export default router;
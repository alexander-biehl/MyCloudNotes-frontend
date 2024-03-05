import { useRoutes } from 'react-router-dom'

import Home from '../views/home'
import ErrorPage from '../views/error'

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <Home />,
      errorElement: <ErrorPage />,
    },
  ])
}

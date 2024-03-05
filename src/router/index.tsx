import { useRoutes } from 'react-router-dom'

import Home from '../views/home'
import ErrorPage from '../views/error'
import Root from '../views/root'

export default function Route() {
  return useRoutes([
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
          ],
        },
      ],
    },
  ])
}

import { useRoutes } from 'react-router-dom'

import Home from '../views/home';


export default function Router() {
    return useRoutes([
        {
            path: "/",
            element: <Home />,
        }
    ]);
}
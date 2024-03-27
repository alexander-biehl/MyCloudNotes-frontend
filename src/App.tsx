import { RouterProvider } from 'react-router-dom'
// import './App.css'
import router from './router'

function App() {
  return (
    <div>
      {/* just a bunch of routes to components */}
      <RouterProvider router={router} />
    </div>
  )
}

export default App

import './App.css'
import Editor from './components/Editor'
import AllNotes from './components/AllNotes'
import Home from './components/Home'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/:id',
    element:<Home/>
  },
  {
    path:"/new", 
    element:<Home />
  }
])


function App() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App


import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Data from './Pages/Data'
import LayoutOne from './Layouts/LayoutOne'

function App() {
  const mainroute = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element = {<LayoutOne/>}>
        <Route index element = {<Home/>}/>
        <Route path='/data' element = {<Data/>}/>

      </Route>
        </Route>
    )
  )

  return (
    <>
    <RouterProvider router={mainroute}/>

    </>
  )
}

export default App

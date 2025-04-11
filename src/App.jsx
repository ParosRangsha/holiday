import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Shop from './pages/Shop'
import Productdetails from './pages/Productdetails'

function App() {
  let multipage = createBrowserRouter(createRoutesFromElements(
    <Route element={<Layout/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/shop/:id' element={<Productdetails/>}/>
      <Route path='/home/:id' element={<Productdetails/>}/>
    </Route>
  ))
  
  return (
    <>
      <RouterProvider router={multipage}/>
    </>
  )
}

export default App

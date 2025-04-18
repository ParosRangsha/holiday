import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Shop from './pages/Shop'
import Productdetails from './pages/Productdetails'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Errorpage from './pages/Errorpage'
import Cart from './pages/Cart'

function App() {
  let multipage = createBrowserRouter(createRoutesFromElements(
    <>
      <Route element={<Layout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/shop/:id' element={<Productdetails/>}/>
        <Route path='/home/:id' element={<Productdetails/>}/>
        <Route path='/search/:id' element={<Productdetails/>}/>
      </Route>
      <Route path='*' element={<Errorpage/>}/>
    </>
  ))
  
  return (
    <>
      <RouterProvider router={multipage}/>
    </>
  )
}

export default App

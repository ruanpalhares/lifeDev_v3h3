import './App.css'
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Register from './Pages/Register/Register'
import Login from './Pages/Login/Login'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

import './App.css'
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import About from './pages/about/About'
import Home from './pages/home/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

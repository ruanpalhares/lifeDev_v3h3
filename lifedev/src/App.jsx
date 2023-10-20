import './App.css'
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import About from './pages/about/About'
import Home from './pages/home/Home'

function App() {

  return (
    <>
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navigation/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import News from './pages/News';
import Resources from './components/Resources/Resources'
import About from './components/About/About'

function App() {

  return (
    <div>
      <BrowserRouter>

        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/news' element={ <News /> } />
          <Route path='/resources' element={ <Resources /> } />
          <Route path='/about' element={ <About /> } />
        {/*  <Route path='/contact' element={ <Contact /> } /> */}
        </Routes>

        <Navbar />
        <Footer />
      </BrowserRouter>
      
    </div>
  )
}

export default App

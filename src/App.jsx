import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
// import Navbar from './components/Navigation/Navbar'
// import Home from './pages/Home'
import Footer from './components/Footer'
import News from './pages/News';
import Donate from './pages/Donate';
import Resources from './components/Resources/Resources'
import Banner from './components/Banner'
import Homepage from './components/Homepage'

function App() {

  return (
    <div >
      <BrowserRouter>
  <Homepage />
        <Routes>
          <Route path='/' element={ <Banner/> } />
          <Route path='donate' element={<Donate />} />
          <Route path='/news' element={ <News /> } />
          <Route path='/resources' element={ <Resources /> } />
        {/*  <Route path='/about' element={ <About /> } />
          <Route path='/contact' element={ <Contact /> } /> */}
        </Routes>        

        
        <Footer />
      </BrowserRouter>
      
    </div>
  )
}

export default App

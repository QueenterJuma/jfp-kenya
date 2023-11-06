import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navigation/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Home />
        <Footer />
      </BrowserRouter>
      
    </div>
  )
}

export default App

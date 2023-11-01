import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navigation/Navbar'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
      
    </div>
  )
}

export default App

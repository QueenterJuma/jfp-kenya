import './App.css';
import Navigation from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home/> } />
        <Route path='/about' element={<About/> } />
        <Route path='/contact' element={<Contact/> } />
      </Routes>
    </div>
  );
}

export default App;

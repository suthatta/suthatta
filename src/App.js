import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Projects from '../src/components/Projects';
import Contact from '../src/components/Contact';
import About from '../src/components/About';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/"  element={<Home />}></Route> 
        <Route path="/projects"  element={<Projects />} > </Route>
        <Route path="/contact"  element={<Contact />} > </Route>
        <Route path="/about"  element={<About />}> </Route>
      </Routes>
    </Router>

    
  )

}

export default App;

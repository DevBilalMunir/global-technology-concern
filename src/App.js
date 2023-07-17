// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Slider from './Components/Slider';
import Main from './Components/Main';
import Headers from './Components/Header';
import Projects from './Components/Projects';
import Clients from './Components/Clients';
import Contact from './Components/Contact';
import About from './Components/About';
import Services from './Components/Services';
import Home from './Components/Home';


function App() {

  return (
    <div>
       
    <Router>
       <Headers/>
         <Routes>
            <Route exact path="/global-technology-concern" element={<Home />} />
            <Route exact path="/projects" element={<Projects/>} />
            <Route exact path="/clients" element={<Clients/>} />
            <Route exact path="/Contact Us" element={<Contact/>} />
            <Route exact path="/about" element={<About/>} />
            <Route exact path="/services" element={<Services/>} />
      </Routes>
        </Router>
      
        
        
     </div>

  );
}

export default App;

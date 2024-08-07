import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavbarComp from './components/navbarComp';
import Home from './components/home'
import About from "./components/about";
import Contact from "./components/contact";
import Atractions from "./components/atractions";
import Gallery from "./components/gallery";
import Footer from './components/footer';


function App() {
  return (
    <div className="App">
      <Router basename="/dwnawigator">
        <NavbarComp/>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/o-nas" element={<About/>} />
              <Route path="/galeria" element={<Gallery/>}/>
              <Route path="/kontakt" element={<Contact/>}/>
              <Route path="/atrakcje" element={<Atractions/>}/>
          </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;

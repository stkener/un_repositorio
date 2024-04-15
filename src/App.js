import './App.css';
import { HashRouter as Router, Route, Switch, Link, Routes } from 'react-router-dom';

import Home from './component/Home';
import About from "./component/About";
import Proyectos from "./component/Proyectos";


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Proyectos" element={<Proyectos />} />
          
        </Routes>
      </div>
    </Router> 
  );
}

export default App;
/*



import Experiencia from "./component/Experiencia";
import Educacion from "./component/Educacion";


          
          
          <Route path="/Experiencia" element={<Experiencia />} />
          <Route path="/Educacion" element={<Educacion />} />

*/
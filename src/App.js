import React from 'react';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route
} from "react-router-dom";
import CharacterCards from './components/CharacterCards';
import Footer from './components/Footer';
import Homersapien from './components/Homersapien';
import Navbar from './components/Navbar';
import Blog from './components/Blog';
import Contacto from './components/Contacto';
import NotFound from './components/NotFound';

function App() {
  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route path="/blog" element={<Blog/>} ></Route>
          <Route path="/contacto" element={<Contacto/>} ></Route>
          <Route path="/template-simple-react" element={<><Homersapien /><CharacterCards /></>} ></Route>
          <Route path="/" element={<><Homersapien /><CharacterCards /></>} ></Route>
          <Route path="*" element={<NotFound/>} ></Route>
        </Routes>
      </Router>   
      <Footer />
    </>
  );
}

export default App;
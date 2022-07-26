import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home';
import Reserva from './components/Reserva/Reserva'
import Galeria from './components/Galeria/Galeria'
import Historia from './components/Historia/Historia'
import Contacto from './components/Contacto/Contacto'
import NavBar from './components/NavBar/NavBar'
import NotFound from './components/NotFound/NotFound'
import TurismoNaturaleza from './components/TurismoNaturaleza/TurismoNaturaleza';
import TurismoBienestar from './components/TurismoBienestar/TurismoBienestar';
import ArteNaturaleza from './components/ArteNaturaleza/ArteNaturaleza';
import Agroecologia from './components/Agroecologia/Agroecologia';
import Gastronomia from './components/Gastronomia/Gastronomia';
import Footer from './components/Footer/Footer'
import Planes from './components/Planes/Planes';

function App() {
  return (
    <div>
      <BrowserRouter>
        <header>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/reservoir' element={<Reserva/>}/>
                <Route path='/galery' element={<Galeria/>}/>
                <Route path='/history' element={<Historia/>}/>
                <Route path='/contact' element={<Contacto/>}/>
                <Route path='*' element={<NotFound/>}/>
                <Route path='/turismo-naturaleza' element={<TurismoNaturaleza/>}/>
                <Route path='/planes' element={<Planes/>}/>
                <Route path='/turismo-bienestar' element={<TurismoBienestar/>}/>
                <Route path='/arte-naturaleza' element={<ArteNaturaleza/>}/>
                <Route path='/agroecologia' element={<Agroecologia/>}/>
                <Route path='/gastronomia' element={<Gastronomia/>}/>
            </Routes>
            <NavBar/>
            <Footer/>
        </header>
      </BrowserRouter>
    </div>
  );
}

export default App;

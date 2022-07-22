import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home';
import Reserva from './components/Reserva/Reserva'
import Servicios from './components/Servicios/Servicios'
import Galeria from './components/Galeria/Galeria'
import Historia from './components/Historia/Historia'
import Contacto from './components/Contacto/Contacto'
import NavBar from './components/NavBar/NavBar'
import NotFound from './components/NotFound/NotFound'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className='bg-std my-auto'>
      <BrowserRouter>
        <header>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/reservoir' element={<Reserva/>}/>
                <Route path='/services' element={<Servicios/>}/>
                <Route path='/galery' element={<Galeria/>}/>
                <Route path='/history' element={<Historia/>}/>
                <Route path='/contact' element={<Contacto/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
            <NavBar/>
            <Footer/>
        </header>
      </BrowserRouter>
    </div>
  );
}

export default App;

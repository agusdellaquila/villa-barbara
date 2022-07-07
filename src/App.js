import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound'
import NavBar from './components/NavBar/NavBar'

function App() {
  return (
    <div>
      <BrowserRouter>
        <header>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
            <NavBar/>
        </header>
      </BrowserRouter>

    </div>
  );
}

export default App;

//import './assets/style.css';
import './assets/style.css';
//import { Routes, Route } from 'react-router-dom';
import {Routes, Route } from 'react-router-dom';
// TODO 1  Import Komponen Layout (Header, SideBar, Footer)
import Header from './components/Header.jsx';
import SideBar from './components/SideBar.jsx';
import Footer from './components/Footer.jsx';

// lakukan commit "selesai TODO 1" dan push 

// TODO 2  komponen Pages (Beranda, Profil, dll)
import Beranda from './Pages/Beranda.jsx'
import Profil from './Pages/Profil.jsx'
import LainLain from './Pages/LainLain.jsx'
import Mahasiswa from './Pages/Mahasiswa.jsx'
import Pendidikan from './Pages/Pendidikan.jsx'
import Riset from './Pages/Riset.jsx'
import NotFound from './Pages/NotFound.jsx'
import Berita from './Pages/Berita.jsx'
// lakukan commit "selesai TODO 2" dan push 

function App() {
  return (
    
    <div className="container">
      <Header />
      <div className="main-wrapper">
        <main className="content-area">
          {/* TODO 6 Routes 
          <Routes>
            <Route path="/" element={<Beranda />} />
          </Routes>
          */}
        </main>
         {/* TODO 4 SideBar */}
      </div>
      {/* TODO 5 Footer */}
      
    </div>
  );
}

export default App;

// TODO 7 lakukan commit dengan nama "selesai TODO 7" dan push 
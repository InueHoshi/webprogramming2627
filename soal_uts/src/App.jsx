//import './assets/style.css';
import './assets/style.css';
//import { Routes, Route } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
// TODO 1  Import Komponen Layout (Header, SideBar, Footer)
import Header from './components/layout/Header.jsx';
import SideBar from './components/layout/SideBar.jsx';
import Footer from './components/layout/Footer.jsx';

// lakukan commit "selesai TODO 1" dan push 

// TODO 2  komponen Pages (Beranda, Profil, dll)
import Beranda from './Pages/Beranda.jsx';
import Profil from './Pages/Profil.jsx';
import LainLain from './Pages/LainLain.jsx';
import Mahasiswa from './Pages/Mahasiswa.jsx';
import Pendidikan from './Pages/Pendidikan.jsx';
import Riset from './Pages/Riset.jsx';
import NotFound from './Pages/NotFound.jsx';
import Berita from './Pages/Berita.jsx';
// lakukan commit "selesai TODO 2" dan push 

function App() {
  return (
    
    <div className="container">
      <Header />
      <div className="main-wrapper">
        <main className="content-area">
        
          <Routes>
            <Route path="/" element={<Beranda />} />
            <Route path="/" element={<Berita />} />
            <Route path="/" element={<LainLain />} />
            <Route path="/" element={<Mahasiswa />} />
            <Route path="/" element={<NotFound />} />
            <Route path="/" element={<Pendidikan />} />
            <Route path="/" element={<Profil />} />
            <Route path="/" element={<Riset />} />
          </Routes>
          
        </main>
         <SideBar />
      </div>
      <Footer />
      
    </div>
  );
}

export default App;

// TODO 7 lakukan commit dengan nama "selesai TODO 7" dan push 
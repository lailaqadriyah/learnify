import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Dashboard from './pages/User/Dashboard';
import Header from './components/Header';
import DetailKursus from './pages/User/DetailKursus';
import Pembayaran from './pages/User/Pembayaran';
import Profile from './pages/User/Profile';
import Modul from './pages/User/Modul';
import TambahKursus from './pages/Pengajar/TambahKursus';

function App() {


  return (
     <Router>
    <>
    <Header />  
    <main>
      <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/detail-kursus/:id" element={<DetailKursus />} />
          <Route path="/bayar-kursus/:id" element={<Pembayaran />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/modul/:id" element={<Modul />} />
          <Route path="/tambah-kursus" element={<TambahKursus />} />

      </Routes>
    </main>
    </>
     </Router>
  )
}

export default App

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';
import DetailKursus from './pages/DetailKursus';
import Pembayaran from './pages/Pembayaran';
import Profile from './pages/Profile';
import Modul from './pages/Modul';

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

      </Routes>
    </main>
    </>
     </Router>
  )
}

export default App

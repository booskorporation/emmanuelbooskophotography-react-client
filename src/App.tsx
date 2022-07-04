import React from 'react';
import { HomePage } from './components/pages/HomePage';
import { AlbumsPage } from './components/pages/AlbumsPage';
import { Routes, Route } from 'react-router-dom';
import { AgendaPage } from './components/pages/AgendaPage';
import { AboutPage } from './components/pages/AboutPage';
import { ContactPage } from './components/pages/ContactPage';
import { NotFoundPage } from './components/pages/NotFoundPage';

function App() {
  return (
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/albums' element={<AlbumsPage />} />
        <Route path='/agenda' element={<AgendaPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
  );
}

export default App;

import { Routes, Route } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
import { AlbumsPage } from './pages/AlbumsPage';
import { AgendaPage } from './pages/AgendaPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

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

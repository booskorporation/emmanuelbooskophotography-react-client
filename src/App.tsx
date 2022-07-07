import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { HomePage, AlbumsPage, AgendaPage, AboutPage, ContactPage, NotFoundPage } from "./pages"

const App = (): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/albums' element={<AlbumsPage />} />
      <Route path='/agenda' element={<AgendaPage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/contact' element={<ContactPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;

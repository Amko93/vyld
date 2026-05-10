import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import BellaFleur from './pages/portfolio/BellaFleur';
import StudioArchi from './pages/portfolio/StudioArchi';
import NutriCoach from './pages/portfolio/NutriCoach';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/portfolio/bella-fleur" element={<BellaFleur />} />
        <Route path="/portfolio/studio-archi" element={<StudioArchi />} />
        <Route path="/portfolio/nutricoach" element={<NutriCoach />} />
      </Routes>
    </BrowserRouter>
  );
}

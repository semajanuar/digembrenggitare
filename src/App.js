import './App.css';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./Home'));
const Navbar = lazy(() => import('./komponen/Navbar'));
const Tutorial = lazy(() => import('./Tutorial'));
const MainMenu = lazy(() => import('./MainMenu'));
const TutorialPro = lazy(() => import('./TutorialPro'));
const Chord = lazy(() => import('./Chord'));
const Mangu = lazy(() => import('./Mangu'));
const Tulus = lazy(() => import('./Tulus'));
const Akutenang = lazy(() => import('./Akutenang'));
const Comingsoon = lazy(() => import('./Comingsoon'));
const Api = lazy(() => import('./Api'));


const App = () => (
<Router>
  <Suspense fallback={<div>Loading..</div>}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Gebreng Gitar Chord" element={<Home />} />
      <Route path="/Navbar" element={<Navbar />} />
      <Route path="/Tutorial" element={<Tutorial />} />
      <Route path="/MainMenu" element={<MainMenu />} />
      <Route path="/TutorialPro" element={<TutorialPro />} />
      <Route path="/Chord" element={<Chord />} />
      <Route path="/Mangu" element={<Mangu />} />
      <Route path="/Tulus" element={<Tulus />} />
      <Route path="/Akutenang" element={<Akutenang />} />
      <Route path="/Comingsoon" element={<Comingsoon />} />
      <Route path="/Api" element={<Api />} />

      
      </Routes>
  </Suspense>
</Router>
);

export default App;

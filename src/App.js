import './App.css';

import { Routes, Route} from 'react-router-dom';

import {GlobalStyle} from './theme/globalStyles';

import Blog from './routes/Blog';
import SettlingIn from './routes/SettlingIn';
import FoodAndLifestyle from './routes/FoodAndLifestyle';
import Legalities from './routes/Legalities';
import Community from './routes/Community';
import Resources from './routes/Resources';
import About from './routes/About';
import Contact from './routes/Contact';
import PrivacyPolicy from './routes/PrivacyPolicy';

import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/settling-in" element={<SettlingIn />} />
        <Route path="/food-and-lifestyle" element={<FoodAndLifestyle />} />
        <Route path="/legalities" element={<Legalities />} />
        <Route path="/community" element={<Community />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </>
  );
}

export default App;

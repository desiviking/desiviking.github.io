import logo from './logo.svg';
import './App.css';

import { Routes, Route} from "react-router-dom";

import Home from "./routes/Home";
import Blog from "./routes/Blog";
import About from "./routes/About";
import Contact from "./routes/Contact";
import PrivacyPolicy from "./routes/PrivacyPolicy";

import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </>
  );
}

export default App;

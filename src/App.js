
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Navbar from './Components/Navbar/Navbar';
import Blog from './Pages/Blog/Blog';
import Conatact from './Pages/Contact/Contact';
import Contact from './Pages/Contact/Contact';

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
        <Route path="portfolio" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;


import './App.css';
import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Navbar from './Components/Navbar/Navbar';
import Blog from './Pages/Blog/Blog';
import Contact from './Pages/Contact/Contact';
import Portfolio from './Pages/Portfolio/Portfolio';
import Website from './Pages/Portfolio/Website/Website';
import NotFound from './Pages/notFound/NotFound';
import Graphic from './Pages/Portfolio/Graphic/Graphic';

function App() {
  return (
    <div className="fonts bg-[#22252c]">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
        <Route path="portfolio" element={<Portfolio/>} />
        <Route path="website" element={<Website/>} />
        <Route path="graphic" element={<Graphic/>} />
        <Route path="contact" element={<Contact/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

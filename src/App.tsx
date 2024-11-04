import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; 
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Education from './pages/Education';
import Photography from './pages/Photography';  
import Photographyblog from './pages/Photographyblog';  
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Gallery from './pages/Gallery';
import Experience from './pages/Experience';

function App() {
  return (
    <Router>
      <header className="header">
        <nav className="navbar">
          <div className="logo-container">
            {/* Add your logo here if you have one */}
            <img src="/ULlogo.png" alt="Logo" className="w-28 h-22" />
          </div>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>

            {/* Profile with Dropdown */}
            <li className="dropdown">
              <a href="/profile" className="dropdown-toggle" data-bs-toggle="dropdown">Profile</a>
              <ul className="dropdown-menu">
                <li><a href="/profile/AboutMe">About Me</a></li>
                <li><a href="/profile/education">Education</a></li>
                <li><a href="/profile/Experience">Experience</a></li>
              </ul>
            </li>

            <li><a href="/photography">Photography</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/Contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/Contact" element={<Contact />} />
          {/* Add routes for Profile sub-pages */}
          <Route path="profile/AboutMe" element={<AboutMe />} />
          <Route path="profile/Education" element={<Education />} />
          <Route path="profile/Experience" element={<Experience />} />
          <Route path="/Photographyblog/" element={<Photographyblog />} />  {/* Blog route */}
          <Route path="/blog/:id" element={<Photographyblog />} />
        </Routes>
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Bintul Huda. All Rights Reserved.</p>
      </footer>
    </Router>
  );
}

export default App;

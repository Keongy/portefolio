import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";
import Projects from "./pages/Projects";
import { ThemeContext } from './context/ThemeContext';
import { useContext } from 'react';

function App() {

  const { theme } = useContext(ThemeContext)


  return (
    <div className={theme ? 'app theme-bg-dark' : 'app theme-bg-light'}>
      <div className="container-fluid p-0">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
export default App;

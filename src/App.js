import { Route, Routes } from "react-router";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";
import Projects from "./pages/Projects";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/education" element={<Education />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
}

export default App;

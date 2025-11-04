import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Awards from "./pages/Awards";
import CV from "./pages/CV";

export default function App() {
  return (
    <Router basename="/">
      <div className="flex flex-col md:flex-row min-h-screen">
        <Sidebar />
        <main className="flex-1 p-6 md:ml-24 flex flex-col justify-between">
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/education" element={<Education />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/awards" element={<Awards />} />
              <Route path="/cv" element={<CV />} />
            </Routes>
          </div>
          <Footer />
        </main>
      </div>
    </Router>
  );
}

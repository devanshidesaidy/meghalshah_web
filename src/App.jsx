import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import Contact from "./components/Contact";
import MSACAPage from "./pages/business/MSACA";
import CredorbitPage from "./pages/business/Credorbit";

function App() {
  return (
    <Router>
      <div className="font-default bg-black text-white min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/business/msaca" element={<MSACAPage />} />
          <Route path="/business/credorbit" element={<CredorbitPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import News from "./components/News";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-default bg-black text-white min-h-screen">
      <Header />

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Testimonials />
        <News />
        <Pricing />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;

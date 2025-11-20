// src/App.jsx
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Features from './components/Features';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      
      <main>
        {/* الهيكل يستخدم فئات CSS للتباعد والهوية */}
        <section id="home" className="section-padding section-hero">
          <Hero />
        </section>
        
        <section id="about" className="section-padding section-white">
          <About />
        </section>
        
        <section id="services" className="section-padding">
          <Services />
        </section>
        
        <section id="features" className="section-padding section-white">
          <Features />
        </section>
        
        <section id="portfolio" className="section-padding">
          <Portfolio />
        </section>
        
        <section id="testimonials" className="section-padding section-white">
          <Testimonials />
        </section>
        
        <section id="contact" className="section-padding section-contact">
          <ContactForm />
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
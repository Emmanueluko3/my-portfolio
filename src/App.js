import './App.css';
import About from './Components/about';
import ContactMe from './Components/contactMe';
import Footer from './Components/footer';
import Hero from './Components/hero';
import NavBar from './Components/navbar';
import Projects from './Components/projects';
import Services from './Components/services';
import './index.css';

function App() {
  return (
    <div className="">
      <NavBar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;

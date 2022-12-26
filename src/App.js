import './App.css';
import About from './Components/about';
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
    </div>
  );
}

export default App;

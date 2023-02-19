import './App.css';
import Navbar from './Component/Navbar';
import HomePage from './Component/HomePage';
import About from './Component/About';
import Skills from './Component/Skills';
import Project from './Component/Projects';
import Github from './Component/GitHub';
import Contact from './Component/Contact';

function App() {
  document.title="Neerav Khatri";
  return (
    <div className="App" style={{backgroundColor: "#5CDB95", fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif", color: "#05386B"}}>
      <Navbar />
      <HomePage />
      <About />
      <Skills />
      <Project />
      <Github />
      <Contact />
    </div>
  );
}

export default App;

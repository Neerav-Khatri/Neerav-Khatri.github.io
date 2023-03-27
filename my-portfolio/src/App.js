import './App.css';
import Navbar from './Component/Navbar';
import HomePage from './Component/HomePage';
import About from './Component/About';
import Project from './Component/Projects';
import Github from './Component/GitHub';
import Contact from './Component/Contact';
import Skill from './Component/Skill';

function App() {
  return (
    <div className="App" style={{backgroundColor: "#222629", fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif", color: "white"}}>
      <Navbar />
      <HomePage />
      <About />
      <Skill />
      <Project />
      <Github />
      <Contact />
    </div>
  );
}

export default App;

import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Profile/>
        <Skills/>
        <Projects/>
        <AboutMe/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;

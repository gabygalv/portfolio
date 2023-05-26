import Home from './components/home';

import './App.css';
import { Route, Routes } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import Navbar from './components/Navbar';
import Resume from './components/resume';
import Projects from './components/projects';
import Contact from './components/contact';
import LinkedIn from './assets/Linkedin.png'
import Dev from './assets/Dev.png'
import Github from './assets/Github.png'
import Email from './assets/email.png'
import Myspace from './assets/myspace.png'

function App() {
  
  const navigate = useNavigate();
  
  return (
    <div>
      <div className="row">
        <Navbar/>
      </div>
      <div className="row">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <div className='footer segment'>
      <a className='icons' href='https://www.linkedin.com/in/gaby-galvan/'><img src={LinkedIn} alt='linkedin'/></a>
      <a className='icons' href='https://dev.to/gabygalv/'><img src={Dev} alt='dev'/></a>
      <a className='icons' href='https://github.com/gabygalv/'><img src={Github} alt='github'/></a>
      <a className='icons' href='mailto:gabygalv.codes@gmail.com'><img src={Email} alt='email'/></a>
      <a className='icons' href='https://gabygalv.github.io/my-website/'><img src={Myspace} alt='myspace'/></a>
      </div>
    </div>
  );
}

export default App;

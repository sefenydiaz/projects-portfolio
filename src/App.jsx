import './App.css';
// import ProjectsPortfolio from './components/ProjectsPortfolio';
// import Contact from './components/pages/Contact'
// import Project from './components/Project';
import Footer from './components/Footer';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Portfolio from './components/pages/Portfolio';
import Resume from './components/pages/Resume';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
    <div className="projects-portfolio">
      <Header />
      <Navigation />
      <Routes>
        <Route path = "/" element = {<About/>}/>
        <Route path = "/contact" element = {<Contact/>}/>
        <Route path = "/portfolio" element = {<Portfolio/>}/>
        <Route path = "/resume" element = {<Resume/>}/>
      </Routes>
      {/* <ProjectsPortfolio /> */}
      {/* <Project /> */}
      {/* <Contact /> */}
      <Footer />
      {/* <Outlet /> */}
    </div>
    </Router>
  );
}

export default App;

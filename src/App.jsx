import './App.css';
import ProjectsPortfolio from './components/ProjectsPortfolio';
// import Contact from './components/pages/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
function App() {
  return (
    <div className="projects-portfolio">
      <Header />
      <ProjectsPortfolio />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;

// Nav titles need links to sections - About Me, Portfolio, Contact, Resume
// links need to highlight when hovered over - css
// section titles need to be highlighted when jumped to - css
import { Link, useLocation } from 'react-router-dom';


function Navigation() {
  const location = useLocation();

  const currentPage = location.pathname.substring(1); 
  
    return (
      <navbar id="navbar">
      <ul className="nav nav-tabs">
        <li className="nav-item ">
          
          <Link
            to="/"
           //About Me is default section for first page load
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          >
            About Me
            </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/resume"
            
            // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
          >
            Resume
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/portfolio"
            
            // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
          >
            Portfolio
         </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/contact"
            
            // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </Link>
        </li>
      </ul>
      </navbar>
    );
  }
  
  export default Navigation;
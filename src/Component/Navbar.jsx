import { Link } from 'react-router-dom';
import logo from '../logo.svg';

const Navbar = () => {
  return (
    <nav className="nav__header">
      <article className="nav__container">
        <Link to="About">
          <img src={logo} alt="portfolio_Logo" className="logo" />
        </Link>
        <ul className="navbar">
          <li className="navbar__item">
            <Link to="about">About</Link>
          </li>
          <li className="navbar__item">
            <Link to="project">Project</Link>
          </li>
        </ul>
      </article>
    </nav>
  );
};
export default Navbar;

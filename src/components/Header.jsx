import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle.jsx';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  const navLinkClass = ({ isActive }) => (isActive ? 'active' : '');

  return (
    <header id="header" className={`header dark-background d-flex flex-column${menuOpen ? ' header-show' : ''}`}>
      <button
        type="button"
        className={`header-toggle-btn d-xl-none bi ${menuOpen ? 'bi-x' : 'bi-list'}`}
        onClick={toggleMenu}
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={menuOpen}
        aria-controls="navmenu"
      ></button>

      <div className="theme-toggle-wrap">
        <ThemeToggle />
      </div>

 <div className="profile-img-container">
  <div className="profile-img-card">
    <div className="profile-img-wrapper">
      <img 
        src="/assets/img/my-profile-img.jpg" 
        alt="Profile" 
        className="profile-photo" 
      />
    </div>
  </div>
</div>

      <NavLink to="/" className="logo d-flex align-items-center justify-content-center" onClick={closeMenu}>
        <h1 className="sitename">Mr. Chheang Samnang</h1>
      </NavLink>

<div className="social-links-wrapper">
  <div className="social-scroll-track">
    <div className="social-scroll-content">
      {/* First set of icons */}
      <a 
        href="https://www.facebook.com/share/194gaVeD4n/?mibextid=wwXIfr" 
        className="social-icon facebook" 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label="Facebook"
      >
        <i className="bi bi-facebook"></i>
        <span className="social-tooltip">Facebook</span>
      </a>
      <a 
        href="https://www.linkedin.com/in/chheang-samnang-b95825406" 
        className="social-icon linkedin" 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label="LinkedIn"
      >
        <i className="bi bi-linkedin"></i>
        <span className="social-tooltip">LinkedIn</span>
      </a>
      <a 
        href="https://github.com/" 
        className="social-icon github" 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label="GitHub"
      >
        <i className="bi bi-github"></i>
        <span className="social-tooltip">GitHub</span>
      </a>
      <a 
        href="mailto:chheangsamnang.wu@gmail.com" 
        className="social-icon email" 
        aria-label="Email"
      >
        <i className="bi bi-envelope"></i>
        <span className="social-tooltip">Email</span>
      </a>
      
      {/* Duplicate set for seamless looping */}
      <a 
        href="https://www.facebook.com/share/194gaVeD4n/?mibextid=wwXIfr" 
        className="social-icon facebook" 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label="Facebook"
      >
        <i className="bi bi-facebook"></i>
        <span className="social-tooltip">Facebook</span>
      </a>
      <a 
        href="https://www.linkedin.com/in/chheang-samnang-b95825406" 
        className="social-icon linkedin" 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label="LinkedIn"
      >
        <i className="bi bi-linkedin"></i>
        <span className="social-tooltip">LinkedIn</span>
      </a>
      <a 
        href="https://github.com/" 
        className="social-icon github" 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label="GitHub"
      >
        <i className="bi bi-github"></i>
        <span className="social-tooltip">GitHub</span>
      </a>
      <a 
        href="mailto:chheangsamnang.wu@gmail.com" 
        className="social-icon email" 
        aria-label="Email"
      >
        <i className="bi bi-envelope"></i>
        <span className="social-tooltip">Email</span>
      </a>
    </div>
  </div>
</div>

      <nav id="navmenu" className="navmenu">
        <ul>
          <li>
            <NavLink to="/" end className={navLinkClass} onClick={closeMenu}>
              <i className="bi bi-house navicon"></i>Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={navLinkClass} onClick={closeMenu}>
              <i className="bi bi-person navicon"></i> About
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className={navLinkClass} onClick={closeMenu}>
              <i className="bi bi-gear navicon"></i> Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/resume" className={navLinkClass} onClick={closeMenu}>
              <i className="bi bi-file-earmark-text navicon"></i> Resume
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolio" className={navLinkClass} onClick={closeMenu}>
              <i className="bi bi-grid-1x2 navicon"></i> Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={navLinkClass} onClick={closeMenu}>
              <i className="bi bi-envelope navicon"></i> Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

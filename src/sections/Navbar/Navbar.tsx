import { useState } from 'react';
import { Button } from '../../components';
import './Navbar.css';

const navItems = [
  { name: 'Inicio', href: '#hero' },
  { name: 'Servicios', href: '#features' },
  { name: 'Planes', href: '#pricing' },
  { name: 'Testimonios', href: '#testimonials' },
  { name: 'Contacto', href: '#contact' }
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#hero" className="logo-text">APOLO FITNESS</a>
      </div>
      
      <button className="menu-toggle" onClick={toggleMenu} aria-label="Abrir menú">
        <span className={isOpen ? 'line line--open' : 'line'}></span>
        <span className={isOpen ? 'line line--open' : 'line'}></span>
        <span className={isOpen ? 'line line--open' : 'line'}></span>
      </button>
      
      <ul className={`navbar-links ${isOpen ? 'is-open' : ''}`}>
        {navItems.map((item) => (
          <li key={item.name}>
            <a href={item.href} onClick={toggleMenu}>{item.name}</a>
          </li>
        ))}
      </ul>
      
      <div className="navbar-cta">
        <Button primary={true}>PRUEBA GRATUITA</Button>
      </div>
    </nav>
  );
};

export default Navbar;
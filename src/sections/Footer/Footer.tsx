import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        <div className="footer-section logo-section">
          <a href="#hero" className="logo-text">APOLO FITNESS</a>
          <p>&copy; 2025 Apolo Fitness. Todos los derechos reservados.</p>
        </div>
        
        <div className="footer-section links-section">
          <h4>NAVEGACIÓN</h4>
          <ul>
            <li><a href="#hero">Inicio</a></li> 
            <li><a href="#features">Nuestros Servicios</a></li> 
            <li><a href="#pricing">Planes y Tarifas</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </div>
        
        <div className="footer-section legal-section">
          <h4>POLÍTICAS</h4>
          <ul>
            <li><a href="#">Política de Privacidad</a></li>
            <li><a href="#">Términos de Servicio</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
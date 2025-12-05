import Button from '../components/Button/Button';
import AnimateOnScroll from '../components/AnimateOnScroll/AnimateOnScroll';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <AnimateOnScroll animationType="fadeIn">
          <h2 className="section-title">¿LISTO PARA EMPEZAR?</h2>
        </AnimateOnScroll>
        
        <div className="contact-layout-grid">
          
          <div className="contact-info-panel">
            <AnimateOnScroll animationType="slideUp">
              <h3>VISÍTANOS O LLÁMANOS</h3>
              <p>Ven a probar una sesión gratuita o contacta a nuestro equipo para resolver tus dudas.</p>
              
              <div className="details">
                <p>📍 <span style={{fontWeight: 'bold'}}>Dirección:</span> Calle Fitness, 123, 28001 Madrid</p>
                <p>📞 <span style={{fontWeight: 'bold'}}>Teléfono:</span> +34 912 345 678</p>
                <p>📧 <span style={{fontWeight: 'bold'}}>Email:</span> info@apolofitness.com</p>
              </div>
              
              <div className="map-container">
                <img src="map.jpg" alt="El mapa de Apolo Fitness" />
              </div>
            </AnimateOnScroll>
          </div>
          
          <div className="contact-form-container">
            <AnimateOnScroll animationType="slideUp">
              <form className="contact-form">
                <h4>ENVÍANOS UN MENSAJE</h4>
                <div className="form-group">
                  <input type="text" placeholder="Tu Nombre" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Tu Email" required />
                </div>
                <div className="form-group">
                  <textarea placeholder="Tu Mensaje" rows={6} required></textarea> 
                </div>
                <Button primary={true}>ENVIAR</Button>
              </form>
            </AnimateOnScroll>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Contact;
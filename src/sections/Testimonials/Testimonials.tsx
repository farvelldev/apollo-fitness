import AnimateOnScroll from '../components/AnimateOnScroll/AnimateOnScroll';
import TestimonialCard from '../components/TestimonialCard/TestimonialCard';
import './Testimonials.css';

const testimonialsData = [
  {
    quote: "Llevo 6 meses y he duplicado mi fuerza. Los coaches son de lo mejor, siempre motivando y corrigiendo. ¡El mejor gimnasio de la ciudad!",
    name: "Andrea M.",
    title: "Miembro Plan Pro",
    avatarURL: "avatars/andrea.jpg" 
  },
  {
    quote: "El acceso 24/7 es un salvavidas. Puedo entrenar antes del trabajo sin problemas. Las instalaciones son modernas y siempre están limpias.",
    name: "Javier L.",
    title: "Miembro Plan Premium",
    avatarURL: "avatars/javier.jpg"
  },
  {
    quote: "Las clases de HIIT son brutales. Nunca pensé que disfrutaría tanto del ejercicio. Lo recomiendo 100% para principiantes.",
    name: "Sofia R.",
    title: "Miembro Plan Básico",
    avatarURL: "avatars/sofia.jpg"
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="testimonials-section">
      <div className="container">
        <AnimateOnScroll animationType="fadeIn">
          <h2 className="section-title">LO QUE DICEN NUESTROS MIEMBROS</h2>
        </AnimateOnScroll>
        <div className="testimonials-grid">
          {testimonialsData.map((testimonial, index) => (
            <AnimateOnScroll key={index} animationType="slideUp" delay={index * 150}>
              <TestimonialCard 
                quote={testimonial.quote} 
                name={testimonial.name} 
                title={testimonial.title} 
                avatarURL={testimonial.avatarURL}
              />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
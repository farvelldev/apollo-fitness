import AnimateOnScroll from '../components/AnimateOnScroll';
import PriceCard from '../components/PriceCard';
import './Pricing.css';

const pricingData = [
  {
    title: 'Plan Básico',
    price: '49',
    duration: 'mes',
    features: ['Acceso ilimitado 6am-10pm', 'Uso de todas las máquinas', 'Ducha y taquilla'],
    isPopular: false,
  },
  {
    title: 'Plan Pro',
    price: '79',
    duration: 'mes',
    features: ['Acceso 24/7', 'Uso de todas las máquinas', 'Ducha y taquilla', '1 clase grupal semanal', 'Asesoría nutricional inicial'],
    isPopular: true,
  },
  {
    title: 'Plan Premium',
    price: '119',
    duration: 'mes',
    features: ['Acceso 24/7', 'Uso de todas las máquinas', 'Ducha y taquilla', 'Clases grupales ilimitadas', '1 sesión con entrenador personal mensual'],
    isPopular: false,
  },
];

const Pricing: React.FC = () => {
  return (
    <section className="pricing-section">
      <div className="container">
        <AnimateOnScroll animationType="fadeIn">
          <h2 className="section-title">ELIGE TU CAMINO AL ÉXITO</h2>
          <p className="section-subtitle">Planes flexibles sin permanencia forzosa.</p>
        </AnimateOnScroll>
        <div className="pricing-grid">
          {pricingData.map((plan, index) => (
            <AnimateOnScroll key={index} animationType="slideUp" delay={index * 150}>
              <PriceCard 
                title={plan.title} 
                price={plan.price} 
                duration={plan.duration} 
                features={plan.features} 
                isPopular={plan.isPopular}
              />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
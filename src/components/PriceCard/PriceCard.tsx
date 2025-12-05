import { Button } from '../';
import './PriceCard.css';

interface PriceCardProps {
  title: string;
  price: string;
  duration: string;
  features: string[];
  isPopular?: boolean;
}

const PriceCard: React.FC<PriceCardProps> = ({ title, price, duration, features, isPopular = false }) => {
    const buttonIsPrimary = !isPopular;
    
    return (
    <div className={`price-card ${isPopular ? 'popular' : ''}`}>
      {isPopular && <div className="popular-badge">⭐ MÁS POPULAR</div>}
      
      <h3>{title}</h3>
      <div className="price-tag">
        <span className="currency">$</span>
        <span className="amount">{price}</span>
        <span className="duration">/{duration}</span>
      </div>

      <ul className="features-list">
        {features.map((feature, index) => (
          <li key={index}>✅ {feature}</li>
        ))}
      </ul>
      
      <Button primary={buttonIsPrimary}>
        {isPopular ? 'EMPEZAR AHORA' : 'SELECCIONAR PLAN'}
      </Button>
    </div>
  );
};

export default PriceCard;
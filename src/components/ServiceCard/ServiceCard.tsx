import './ServiceCard.css';

interface ServiceCardProps {
  imageURL: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ imageURL, title, description }) => {
  return (
    <div 
      className="service-card" 
      style={{ backgroundImage: `url(${imageURL})` }} 
    >
      <div className="card-overlay"></div>
      
      <div className="card-content-image">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      
    </div>
  );
};

export default ServiceCard;
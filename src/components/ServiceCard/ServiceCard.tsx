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
      <div className="card-overlay"></div> {/* Capa oscura para legibilidad */}
      
      <div className="card-content-image">
        {/* Usamos <h3> y <p> como un bloque de contenido en el centro/fondo */}
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      
    </div>
  );
};

export default ServiceCard;
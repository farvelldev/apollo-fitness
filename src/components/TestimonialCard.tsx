import './TestimonialCard.css';

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  avatarURL: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, title, avatarURL }) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-avatar">
        <img src={avatarURL} alt={`Avatar de ${name}`} />
      </div>

      <p className="testimonial-quote">"{quote}"</p>
      
      <div className="testimonial-author">
        <p className="author-name">{name}</p>
        <p className="author-title">{title}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
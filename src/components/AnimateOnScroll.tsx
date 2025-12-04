import { useInView } from 'react-intersection-observer';
import './AnimateOnScroll.css';

interface AnimateOnScrollProps {
  children: React.ReactNode;
  delay?: number;
  animationType?: 'slideUp' | 'fadeIn';
}

const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({ children, delay = 0, animationType = 'slideUp' }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px', 
  });

  const animatedClass = inView ? `aos-animate ${animationType}` : 'aos-initial';
  
  return (
    <div ref={ref} className={`aos-wrapper ${animatedClass}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
};

export default AnimateOnScroll;
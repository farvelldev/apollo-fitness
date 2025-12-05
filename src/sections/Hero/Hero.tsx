import { useState, useEffect } from 'react';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import { Button } from '../../components';
import './Hero.css';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ParallaxBanner className="hero-parallax-banner">
      <ParallaxBannerLayer 
        speed={-15} 
        image="gym-bg.jpg"
        className="hero-image-layer"
      />
    
    <ParallaxBannerLayer 
        speed={-5}
        className="hero-overlay-layer"
      />
      
      <ParallaxBannerLayer className="hero-content-layer">
        <div className={`hero-content ${isLoaded ? 'is-loaded' : ''}`}> 
          <h1>TU TRANSFORMACIÓN EMPIEZA HOY</h1>
          <p>Entrena con los mejores equipos y coaches. ¡Alcanza tu máximo potencial!</p>
          <div className="hero-actions">
            <Button primary={true}>ÚNETE AHORA</Button>
            <Button primary={false}>TOUR VIRTUAL</Button>
          </div>
        </div>
      </ParallaxBannerLayer>
      
    </ParallaxBanner>
  );
};

export default Hero;
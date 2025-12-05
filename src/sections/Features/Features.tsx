import {
  AnimateOnScroll,
  ServiceCard
} from "../../components";

import './Features.css';

const servicesData = [
  {
    imageURL: 'features/equipment.jpg',
    title: 'Equipamiento de Élite',
    description: 'Contamos con máquinas de última generación y peso libre para cada nivel de entrenamiento. ¡Máxima calidad garantizada!',
  },
  {
    imageURL: 'features/classrooms.jpg',
    title: 'Clases Dirigidas',
    description: 'Más de 30 clases semanales de spinning, yoga, HIIT y boxeo. Encuentra tu ritmo con nuestros coaches expertos.',
  },
  {
    imageURL: 'features/coach.jpg',
    title: 'Coaching Personalizado',
    description: 'Trabaja individualmente con un entrenador certificado para alcanzar tus metas de forma eficiente y segura.',
  },
  {
    imageURL: 'features/night.jpg',
    title: 'Acceso 24/7',
    description: 'Entrena cuando quieras. Nuestro gimnasio está abierto 24 horas al día, 7 días a la semana, para que tu horario no sea un problema.',
  },
];

const Features: React.FC = () => {
  return (
    <section className="features-section">
      <div className="container">
        <AnimateOnScroll animationType="fadeIn">
            <h2 className="section-title">¿POR QUÉ ELEGIR APOLO FITNESS?</h2>
        </AnimateOnScroll>
        <div className="cards-grid">
          {servicesData.map((service, index) => (
            <AnimateOnScroll key={index} animationType="slideUp" delay={index * 150}> 
              <ServiceCard 
                imageURL={service.imageURL} 
                title={service.title} 
                description={service.description} 
              />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
import { ParallaxProvider } from 'react-scroll-parallax';

import {
  Contact,
  Features,
  Footer,
  Hero,
  Navbar,
  Pricing,
  Testimonials
} from "./sections";

function App() {
  return (
    <ParallaxProvider>
      <Navbar />
      
      <main>
        <div id="hero"><Hero /></div>
        <div id="features"><Features /></div> 
        <div id="pricing"><Pricing /></div>
        <div id="testimonials"><Testimonials /></div>
        <div id="contact"><Contact /></div>
      </main>

      <Footer />
    </ParallaxProvider>
  );
}

export default App;
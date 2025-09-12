
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(public/images/heroSection.jpeg)`
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-shadow animate-fade-in">
          IT'S TIME TO ADVENTURE
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-shadow opacity-90 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Embark on epic hiking journeys to breathtaking destinations. From sunrise peaks to hidden valleys, 
          your next unforgettable trail adventure awaits.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button asChild size="lg" className="gradient-sunset text-white hover:opacity-90 transition-opacity px-8 py-4 text-lg font-semibold">
            <Link to="/adventures">View Adventures</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold">
            <Link to="/trails">Explore Trails</Link>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ArrowDown className="h-6 w-6" />
      </div>
    </section>
  );
};

export default HeroSection;

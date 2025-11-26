import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import heroImage from '@assets/generated_images/Zurich_cityscape_hero_background_7d5e4f14.png';

export default function Hero() {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight" data-testid="text-hero-title">
          Reliable Taxi Transfers<br />Across United Kingdom
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto" data-testid="text-hero-subtitle">
          Experience premium transportation services with professional drivers, luxury vehicles, and punctual service throughout United Kingdom
        </p>
        <Button
          onClick={scrollToBooking}
          size="lg"
          className="text-lg px-8 py-6"
          data-testid="button-hero-cta"
        >
          Book Your Ride Now
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
}

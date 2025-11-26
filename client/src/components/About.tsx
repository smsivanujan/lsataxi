import { Card } from '@/components/ui/card';
import { MapPin, Clock, Shield } from 'lucide-react';

const features = [
  {
    icon: MapPin,
    title: 'Nationwide Coverage',
    description: 'Service across all major United Kingdom cities',
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Round-the-clock booking and support',
  },
  {
    icon: Shield,
    title: 'Licensed & Insured',
    description: 'Fully certified professional drivers',
  },
];

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="text-about-title">
            About LSA Taxi
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground mb-8" data-testid="text-about-description">
            LSA Taxi is United Kingdom's premier taxi and transfer service, providing reliable, 
            comfortable, and professional transportation solutions since 2010. With a fleet of luxury 
            vehicles and experienced drivers, we ensure your journey across United Kingdom is smooth, 
            safe, and punctual.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Whether you need an airport transfer, city ride, or business travel solution, our commitment 
            to excellence and United Kingdom precision makes us the trusted choice for thousands of satisfied 
            customers throughout United Kingdom.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 text-center" data-testid={`card-feature-${index}`}>
              <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2" data-testid={`text-feature-title-${index}`}>
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground" data-testid={`text-feature-description-${index}`}>
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

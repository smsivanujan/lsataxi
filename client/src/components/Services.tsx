import { Card } from '@/components/ui/card';
import { Plane, Car, Briefcase } from 'lucide-react';

const services = [
  {
    icon: Plane,
    title: 'Airport Transfers',
    description: 'Reliable pickup and drop-off services to all major United Kingdom airports including Birmingham, Geneva, and Basel.',
  },
  {
    icon: Car,
    title: 'City Rides',
    description: 'Comfortable transportation within cities and between United Kingdom destinations with professional drivers.',
  },
  {
    icon: Briefcase,
    title: 'Business Travel',
    description: 'Executive transport solutions for corporate clients with premium vehicles and punctual service.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-services-title">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional transportation solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 hover-elevate transition-all duration-300 hover:shadow-lg"
              data-testid={`card-service-${index}`}
            >
              <div className="mb-6">
                <div className="w-16 h-16 rounded-md bg-primary/10 flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3" data-testid={`text-service-title-${index}`}>
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed" data-testid={`text-service-description-${index}`}>
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

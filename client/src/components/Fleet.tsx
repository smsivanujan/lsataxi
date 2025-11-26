import { Card } from '@/components/ui/card';
import luxurySedan from '@assets/generated_images/Luxury_sedan_vehicle_693c7f65.png';
import spaciousVan from '@assets/generated_images/Spacious_van_vehicle_b7c8a908.png';
import executiveSedan from '@assets/generated_images/Executive_sedan_vehicle_4e66300b.png';

const vehicles = [
  {
    image: luxurySedan,
    name: 'Luxury Sedan',
    description: 'Mercedes S-Class or similar',
    capacity: 'Up to 3 passengers',
    luggage: '3 large bags',
  },
  {
    image: spaciousVan,
    name: 'Spacious Van',
    description: 'Mercedes V-Class or similar',
    capacity: 'Up to 7 passengers',
    luggage: '7 large bags',
  },
  {
    image: executiveSedan,
    name: 'Executive Sedan',
    description: 'BMW 5-Series or similar',
    capacity: 'Up to 3 passengers',
    luggage: '3 large bags',
  },
];

export default function Fleet() {
  return (
    <section id="fleet" className="py-16 md:py-24 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-fleet-title">
            Our Fleet
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Premium vehicles for every journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {vehicles.map((vehicle, index) => (
            <Card
              key={index}
              className="overflow-hidden hover-elevate transition-all duration-300 hover:shadow-lg"
              data-testid={`card-vehicle-${index}`}
            >
              <div className="aspect-video overflow-hidden bg-white">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-contain"
                  data-testid={`img-vehicle-${index}`}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2" data-testid={`text-vehicle-name-${index}`}>
                  {vehicle.name}
                </h3>
                <p className="text-muted-foreground mb-4" data-testid={`text-vehicle-description-${index}`}>
                  {vehicle.description}
                </p>
                <div className="space-y-1 text-sm">
                  <p className="text-muted-foreground" data-testid={`text-vehicle-capacity-${index}`}>
                    <span className="font-medium text-foreground">Capacity:</span> {vehicle.capacity}
                  </p>
                  <p className="text-muted-foreground" data-testid={`text-vehicle-luggage-${index}`}>
                    <span className="font-medium text-foreground">Luggage:</span> {vehicle.luggage}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

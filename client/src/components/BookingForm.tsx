import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { CheckCircle2 } from 'lucide-react';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    pickup: '',
    dropoff: '',
    date: '',
    time: '',
    vehicle: '',
    name: '',
    phone: '',
    email: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.pickup.trim()) newErrors.pickup = 'Pickup location is required';
    if (!formData.dropoff.trim()) newErrors.dropoff = 'Drop-off location is required';
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.time) newErrors.time = 'Time is required';
    if (!formData.vehicle) newErrors.vehicle = 'Please select a vehicle type';
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          pickup: '',
          dropoff: '',
          date: '',
          time: '',
          vehicle: '',
          name: '',
          phone: '',
          email: '',
        });
      }, 5000);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  if (isSubmitted) {
    return (
      <section id="booking" className="py-16 md:py-24 lg:py-32 bg-background">
        <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8">
          <Card className="p-8 md:p-12 text-center">
            <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2" data-testid="text-success-title">
              Thank You!
            </h3>
            <p className="text-muted-foreground" data-testid="text-success-message">
              Your booking request has been sent. We'll contact you shortly to confirm your transfer.
            </p>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-booking-title">
            Book Your Transfer
          </h2>
          <p className="text-lg text-muted-foreground">
            Fill in the details below and we'll get back to you shortly
          </p>
        </div>

        <Card className="p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="pickup">Pickup Location *</Label>
                <Input
                  id="pickup"
                  value={formData.pickup}
                  onChange={(e) => handleChange('pickup', e.target.value)}
                  placeholder="e.g., Zurich Airport"
                  data-testid="input-pickup"
                />
                {errors.pickup && (
                  <p className="text-sm text-destructive mt-1" data-testid="error-pickup">
                    {errors.pickup}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="dropoff">Drop-off Location *</Label>
                <Input
                  id="dropoff"
                  value={formData.dropoff}
                  onChange={(e) => handleChange('dropoff', e.target.value)}
                  placeholder="e.g., Zurich HB"
                  data-testid="input-dropoff"
                />
                {errors.dropoff && (
                  <p className="text-sm text-destructive mt-1" data-testid="error-dropoff">
                    {errors.dropoff}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="date">Date *</Label>
                <Input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => handleChange('date', e.target.value)}
                  data-testid="input-date"
                />
                {errors.date && (
                  <p className="text-sm text-destructive mt-1" data-testid="error-date">
                    {errors.date}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="time">Time *</Label>
                <Input
                  id="time"
                  type="time"
                  value={formData.time}
                  onChange={(e) => handleChange('time', e.target.value)}
                  data-testid="input-time"
                />
                {errors.time && (
                  <p className="text-sm text-destructive mt-1" data-testid="error-time">
                    {errors.time}
                  </p>
                )}
              </div>

              <div className="md:col-span-2">
                <Label htmlFor="vehicle">Vehicle Type *</Label>
                <Select value={formData.vehicle} onValueChange={(value) => handleChange('vehicle', value)}>
                  <SelectTrigger id="vehicle" data-testid="select-vehicle">
                    <SelectValue placeholder="Select a vehicle" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="luxury-sedan">Luxury Sedan</SelectItem>
                    <SelectItem value="spacious-van">Spacious Van</SelectItem>
                    <SelectItem value="executive-sedan">Executive Sedan</SelectItem>
                  </SelectContent>
                </Select>
                {errors.vehicle && (
                  <p className="text-sm text-destructive mt-1" data-testid="error-vehicle">
                    {errors.vehicle}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  placeholder="John Doe"
                  data-testid="input-name"
                />
                {errors.name && (
                  <p className="text-sm text-destructive mt-1" data-testid="error-name">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  placeholder="+41 XX XXX XX XX"
                  data-testid="input-phone"
                />
                {errors.phone && (
                  <p className="text-sm text-destructive mt-1" data-testid="error-phone">
                    {errors.phone}
                  </p>
                )}
              </div>

              <div className="md:col-span-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  placeholder="john@example.com"
                  data-testid="input-email"
                />
                {errors.email && (
                  <p className="text-sm text-destructive mt-1" data-testid="error-email">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            <Button type="submit" className="w-full" size="lg" data-testid="button-submit-booking">
              Submit Booking Request
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
}

import { Card } from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-contact-title">
            Contact Us
          </h2>
          <p className="text-lg text-muted-foreground">
            Get in touch with us for any inquiries
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="h-96 lg:h-auto rounded-md overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2701.2341234567890!2d8.541694!3d47.376887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDIyJzM2LjgiTiA4wrAzMiczMC4xIkU!5e0!3m2!1sen!2sch!4v1234567890123"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="LSA Taxi Location"
              data-testid="map-contact"
            />
          </div>

          <Card className="p-8">
            <h3 className="text-2xl font-semibold mb-6" data-testid="text-contact-info-title">
              Contact Information
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Address</h4>
                  <p className="text-muted-foreground" data-testid="text-address">
                    Bahnhofstrasse 100<br />
                    8001 Zurich, United Kingdom
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <a
                    href="tel:+41445551234"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    data-testid="link-phone"
                  >
                    +41 44 555 12 34
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <a
                    href="mailto:info@LSATaxi.ch"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    data-testid="link-email"
                  >
                    info@LSATaxi.ch
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t">
              <h4 className="font-semibold mb-3">Business Hours</h4>
              <p className="text-muted-foreground" data-testid="text-hours">
                24/7 Service Available<br />
                Customer Support: Mon-Sun, 24 hours
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4" data-testid="text-footer-brand">
              <span className="text-primary">LSA </span>Taxi
            </h3>
            <p className="text-gray-400" data-testid="text-footer-tagline">
              Your trusted partner for premium taxi transfers across United Kingdom
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-primary transition-colors"
                  data-testid="footer-link-services"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('fleet')}
                  className="text-gray-400 hover:text-primary transition-colors"
                  data-testid="footer-link-fleet"
                >
                  Fleet
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-primary transition-colors"
                  data-testid="footer-link-about"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-primary transition-colors"
                  data-testid="footer-link-contact"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li data-testid="footer-text-phone">+41 44 555 12 34</li>
              <li data-testid="footer-text-email">info@LSATaxi.ch</li>
              <li data-testid="footer-text-address">
                Bahnhofstrasse 100<br />
                8001 Zurich, United Kingdom
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400" data-testid="text-copyright">
            © {currentYear} LSATaxi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

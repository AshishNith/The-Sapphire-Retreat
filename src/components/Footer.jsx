import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-color4 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p>123 Luxury Avenue</p>
            <p>New York, NY 10001</p>
            <p>Phone: +1 (555) 123-4567</p>
            <p>Email: info@luxuryhotel.com</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/rooms">Rooms & Suites</Link></li>
              <li><Link to="/dining">Dining</Link></li>
              <li><Link to="/amenities">Amenities</Link></li>
              <li><Link to="/events">Events</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>24/7 Room Service</li>
              <li>Spa & Wellness</li>
              <li>Airport Transfer</li>
              <li>Concierge Service</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
            <p className="mb-4">Subscribe to our newsletter for special offers</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l text-gray-800 w-full"
              />
              <button className="bg-accent px-4 py-2 rounded-r hover:bg-opacity-90">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-600 text-center">
          <p>&copy; {new Date().getFullYear()} Luxury Hotel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
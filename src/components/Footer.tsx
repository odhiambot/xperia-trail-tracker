
import { Mountain } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-forest-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-primary rounded-lg">
                <Mountain className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">Xperia Adventure</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Your gateway to extraordinary hiking experiences. We connect adventurers with breathtaking trails 
              and unforgettable outdoor memories.
            </p>
            <div className="text-gray-400 text-sm">
              © 2024 Xperia Adventure. All rights reserved.
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#adventures" className="hover:text-white transition-colors">Adventures</a></li>
              <li><a href="#trails" className="hover:text-white transition-colors">Trails</a></li>
              <li><a href="#gear" className="hover:text-white transition-colors">Gear</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Email: info@xperiaadventure.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 Mountain View Rd</li>
              <li>Boulder, CO 80301</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

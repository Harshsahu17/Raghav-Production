import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <span className="text-white font-bold text-lg">
                Raghav <span className="text-amber-500">Productions</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Crafting cinematic stories that captivate audiences and bring visions to life through
              innovative video production and creative media solutions.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-500">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-amber-500 transition-colors duration-300 text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-500">Services</h3>
            <ul className="space-y-2">
              {['Video Editing', 'Social Media', 'Podcast Shoot', 'Graphic Design', 'Website Design'].map(
                (service) => (
                  <li key={service}>
                    <Link
                      to="/services"
                      className="text-gray-400 hover:text-amber-500 transition-colors duration-300 text-sm"
                    >
                      {service}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-500">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-amber-500 mt-1" />
                <span className="text-gray-400 text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-amber-500 mt-1" />
                <span className="text-gray-400 text-sm">info@raghavproductions.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-amber-500 mt-1" />
                <span className="text-gray-400 text-sm">Mumbai, Maharashtra, India</span>
              </li>
            </ul>
            <div className="flex space-x-4 mt-6">
              {[
                { Icon: Facebook, link: '#' },
                { Icon: Instagram, link: '#' },
                { Icon: Youtube, link: '#' },
                { Icon: Twitter, link: '#' },
              ].map(({ Icon, link }, index) => (
                <a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-amber-500 hover:to-orange-600 transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Raghav Productions. All rights reserved. Created with passion
            for storytelling.
          </p>
        </div>
      </div>
    </footer>
  );
}

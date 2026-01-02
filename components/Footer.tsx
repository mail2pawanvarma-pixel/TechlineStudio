
import React from 'react';
import { POSTER_DATA } from '../constants';
import { Cpu, Phone, Mail, MapPin, Youtube, Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Cpu className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-black text-white">TECHLINE STUDIO</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Empowering students with practical AI and Cybersecurity skills to prepare for the future. Offline training at Ambikapur.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-slate-800 p-2.5 rounded-xl hover:bg-blue-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-slate-800 p-2.5 rounded-xl hover:bg-blue-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-slate-800 p-2.5 rounded-xl hover:bg-blue-600 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-black mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Course</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Enroll Now</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-black mb-6 text-lg">Location</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-500 shrink-0" />
                <span>{POSTER_DATA.location}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-500 shrink-0" />
                <a href={`tel:${POSTER_DATA.contact}`} className="hover:text-blue-400">{POSTER_DATA.contact}</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-500 shrink-0" />
                <a href={`mailto:${POSTER_DATA.email}`} className="hover:text-blue-400">{POSTER_DATA.email}</a>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h4 className="text-white font-black mb-6 text-lg">Next Batch</h4>
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
              <p className="text-blue-400 font-bold mb-2">18th Jan 2026</p>
              <p className="text-sm">Classes will be conducted daily. Book your seat now!</p>
              <Link to="/contact" className="mt-4 block text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-xl transition-all">
                Book Seat
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Techline Studio. All rights reserved. Powered by Rebrain Solutions.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

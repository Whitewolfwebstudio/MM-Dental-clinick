import React from 'react';
import { Link } from 'react-router-dom';
import { CLINIC_INFO, SERVICES } from '../data/clinicData';
import { Facebook, Instagram, Mail, MapPin, Phone, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white">
                <span className="font-bold text-xl">MM</span>
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                Dental Care
              </span>
            </Link>
            <p className="text-sm leading-relaxed">
              Providing premium dental care in Karachi with a focus on patient comfort and modern technology. Led by Dr. Annas, our clinic ensures your smile is in expert hands.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Our Services</Link></li>
              <li><Link to="/gallery" className="hover:text-blue-400 transition-colors">Before & After</Link></li>
              <li><Link to="/testimonials" className="hover:text-blue-400 transition-colors">Patient Reviews</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Book Appointment</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6">Our Services</h4>
            <ul className="space-y-4 text-sm">
              {SERVICES.slice(0, 5).map(service => (
                <li key={service.id}>
                  <Link to={`/services/${service.id}`} className="hover:text-blue-400 transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin size={20} className="text-blue-500 shrink-0" />
                <span>{CLINIC_INFO.location}</span>
              </li>
              <li className="flex gap-3">
                <Phone size={20} className="text-blue-500 shrink-0" />
                <span>{CLINIC_INFO.phone}</span>
              </li>
              <li className="flex gap-3">
                <Clock size={20} className="text-blue-500 shrink-0" />
                <div>
                  <p>Mon - Sat: {CLINIC_INFO.hours.mon_sat}</p>
                  <p>Sun: {CLINIC_INFO.hours.sun}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© {new Date().getFullYear()} MM Dental Care Clinic. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

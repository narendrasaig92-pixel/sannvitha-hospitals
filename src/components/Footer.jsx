import React from 'react';
import { Heart, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold">
                SH
              </div>
              <h3 className="text-xl font-bold text-white">Sannvitha</h3>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Providing quality healthcare services with compassion and excellence since 2010.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-teal-400 hover:text-teal-300 transition">
                <Heart size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-teal-400 transition">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-teal-400 transition">About Us</a></li>
              <li><a href="#departments" className="text-gray-400 hover:text-teal-400 transition">Departments</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-teal-400 transition">Services</a></li>
              <li><a href="#blog" className="text-gray-400 hover:text-teal-400 transition">Blog</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-teal-400 transition">Emergency Care</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal-400 transition">Outpatient Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal-400 transition">Inpatient Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal-400 transition">Surgical Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-teal-400 transition">Diagnostics</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone size={18} className="text-teal-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-400">+91-XXXXXXXXXX</p>
                  <p className="text-xs text-gray-500">24/7 Helpline</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={18} className="text-teal-400 flex-shrink-0 mt-1" />
                <p className="text-gray-400">info@sannvithahospitals.com</p>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-teal-400 flex-shrink-0 mt-1" />
                <p className="text-gray-400 text-sm">123 Medical Plaza, Healthcare City</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Sannvitha Hospitals. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-teal-400 text-sm transition">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-teal-400 text-sm transition">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-teal-400 text-sm transition">Disclaimer</a>
            <a href="#" className="text-gray-400 hover:text-teal-400 text-sm transition">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

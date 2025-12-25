
import React from 'react';
import { SPA_INFO, NAV_ITEMS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2d2d2d] text-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="col-span-1 md:col-span-2 space-y-6">
          <a href="#home" className="flex flex-col">
            <span className="text-3xl font-bold tracking-widest uppercase text-white">JIN SPA</span>
            <span className="text-xs tracking-[0.3em] font-medium text-[#c5a059]">HOUSTON'S PREMIER MASSAGE</span>
          </a>
          <p className="text-gray-400 max-w-sm leading-relaxed">
            Professional Asian wellness and massage therapy in Houston, TX. Dedicated to providing a high-quality, clean, and peaceful environment for our clients.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-6">
          <h4 className="text-lg font-bold italic border-b border-[#c5a059] pb-2 inline-block">Explore</h4>
          <ul className="space-y-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="text-gray-400 hover:text-[#c5a059] transition-colors">{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div className="space-y-6">
          <h4 className="text-lg font-bold italic border-b border-[#c5a059] pb-2 inline-block">Contact</h4>
          <ul className="space-y-4 text-gray-400">
            <li>{SPA_INFO.address}</li>
            <li>
              <a href={`tel:${SPA_INFO.phoneRaw}`} className="text-[#c5a059] font-bold">{SPA_INFO.phone}</a>
            </li>
            <li>Open Daily: 10am - 10pm</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
        <p>© 2024 Jin Spa Houston. All Rights Reserved.</p>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

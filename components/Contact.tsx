
import React from 'react';
import { SPA_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Info Side */}
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Visit <span className="italic">Us</span></h2>
              <p className="text-gray-500 text-lg leading-relaxed max-w-md">
                We are conveniently located in Houston. Experience the ultimate relaxation at Jin Spa.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="p-4 bg-[#c5a059]/10 rounded-2xl">
                  <svg className="w-6 h-6 text-[#c5a059]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 italic">Location</h4>
                  <p className="text-gray-600">{SPA_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="p-4 bg-[#c5a059]/10 rounded-2xl">
                  <svg className="w-6 h-6 text-[#c5a059]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 italic">Phone</h4>
                  <a href={`tel:${SPA_INFO.phoneRaw}`} className="text-2xl font-bold text-[#c5a059] hover:underline">
                    {SPA_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="p-4 bg-[#c5a059]/10 rounded-2xl">
                  <svg className="w-6 h-6 text-[#c5a059]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 italic">Business Hours</h4>
                  <p className="text-gray-600">{SPA_INFO.hours}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Side */}
          <div className="h-[500px] w-full bg-gray-100 rounded-3xl overflow-hidden shadow-2xl relative border-8 border-white group">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3460.65825488434!2d-95.6946!3d29.865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640d90000000001%3A0x0!2zMTc5MDQgVyBMaXR0bGUgWW9yayBSZCBTdGUgRCwgSG91c3RvbiwgVFggNzcwODQ!5e0!3m2!1sen!2sus!4v1700000000000" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              className="grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
            ></iframe>
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-white shadow-xl rounded-2xl translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
               <div className="flex justify-between items-center">
                  <div>
                    <h5 className="font-bold">Directions</h5>
                    <p className="text-xs text-gray-400">View on Google Maps</p>
                  </div>
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SPA_INFO.address)}`} 
                    target="_blank" 
                    rel="noreferrer"
                    className="p-3 bg-[#c5a059] text-white rounded-full shadow-lg shadow-[#c5a059]/30"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

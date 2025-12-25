
import React from 'react';

const IMAGES = [
  "https://images.unsplash.com/photo-1544161515-4ae6ce6db874?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1537130508986-20f487fe939e?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80"
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-[#faf9f6]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">A Glimpse of <span className="italic">Zen</span></h2>
          <p className="text-gray-500">The serene surroundings of Jin Spa Houston.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {IMAGES.map((src, idx) => (
            <div key={idx} className={`relative group overflow-hidden rounded-xl shadow-lg ${idx === 0 || idx === 3 ? 'md:row-span-2' : ''}`}>
              <img 
                src={src} 
                alt={`Gallery ${idx}`} 
                className="w-full h-full object-cover transition-all duration-700 grayscale-[40%] group-hover:grayscale-0 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#c5a059]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white text-3xl font-light tracking-widest uppercase">+</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

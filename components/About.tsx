
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#faf9f6]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative group">
          <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#c5a059] z-0 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
          <img 
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80" 
            alt="Zen Atmosphere" 
            className="relative z-10 w-full rounded-sm grayscale-[20%] hover:grayscale-0 transition-all duration-700 shadow-2xl"
          />
        </div>
        <div className="space-y-8">
          <div className="inline-block px-4 py-1 bg-[#c5a059]/10 text-[#c5a059] text-xs font-bold tracking-[0.3em] uppercase rounded-full">
            Our Philosophy
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2d2d2d] leading-tight">
            The Art of <span className="italic text-[#c5a059]">Balanced Living</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            At Jin Spa, we blend ancient Asian healing traditions with modern wellness techniques to create a sanctuary for your body and mind. Located in the heart of Houston, our mission is to provide an escape from the daily hustle and bustle.
          </p>
          <div className="grid grid-cols-2 gap-8 pt-4">
            <div>
              <h4 className="font-bold text-xl mb-2 italic">Serenity</h4>
              <p className="text-sm text-gray-500">A peaceful environment designed to calm your senses immediately.</p>
            </div>
            <div>
              <h4 className="font-bold text-xl mb-2 italic">Excellence</h4>
              <p className="text-sm text-gray-500">Highly trained therapists dedicated to your personalized wellness journey.</p>
            </div>
          </div>
          <p className="text-gray-600 text-lg italic border-l-4 border-[#c5a059] pl-6 py-2 bg-white/50">
            "We believe that true health begins when the mind is at peace and the body is free of tension."
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

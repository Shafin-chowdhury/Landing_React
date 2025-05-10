
import React from 'react';
import background from '../assets/Background.jpg';
import sparkle from '../assets/bg0.png';
import sparkle1 from '../assets/bg.png';

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${background})` }}
    >
      
      <img
        src={sparkle}
        alt="sparkle"
        className="absolute top-0 left-0 w-full h-full object-contain z-10 pointer-events-none"
      />
      <img
        src={sparkle1}
        alt="sparkle"
        className="absolute top-0 right-0 w-full h-full object-contain z-10 pointer-events-none"
      />

      
      <div className="absolute inset-0 bg-black/70 z-20"></div>

     
      <div className="relative z-30 text-center px-4 max-w-3xl mx-auto">
        <h1 className="text-6xl sm:text-5xl md:text-6xl font-bold leading-tight">
          <span className="text-gray-400">We Shape Your Ideas Into</span>
          <br />
          <span className="text-white">Awesome Digital Experience</span>
        </h1>

        <p className="mt-6 text-gray-300 text-lg sm:text-xl">
          Lorem ipsum dolor sit amet consectetur. Eget at at nunc lorem.
        </p>

        <div className="mt-8">
          <a
            href="#"
            className="px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-full text-sm font-medium shadow-lg transition"
          >
            Book a call with us
          </a>
        </div>

        
        <div className="mt-50 space-x-5 flex flex-wrap text-2xl justify-center items-center gap-10 opacity-70">
          <span>FIXMYPHONE</span>
          <span>VARDENT</span>
          <span>Duet</span>
          <span>Apex</span>
          <span>LINDHOLMS</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;

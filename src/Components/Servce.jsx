import React from 'react';
import { FiGrid } from 'react-icons/fi';
import { VscListTree } from "react-icons/vsc";
import { CgPathOutline } from "react-icons/cg";
import { MdOutlineEmergency } from "react-icons/md"; 
import service1 from '../assets/s_1.png';
import service2 from '../assets/s_2.png';
import service3 from '../assets/s_3.png';

const services = [
  {
    title: 'All-in-One (AIO) Service',
    desc: 'Our AIO solution tailors your unique vision creating a website that truly reflects.',
    icon: <FiGrid className="text-green-900 text-3xl" />,
    gradient: 'bg-linear-to-r/longer from-black-500 to-teal-700',
  },
  {
    title: 'Project-Based Development',
    desc: 'Ideal for agencies with ready designs, our service focuses on bringing it alive.',
    icon: <VscListTree  className="text-blue-900 text-3xl" />,
    gradient: 'bg-linear-to-r/longer from-black-500 to-blue-900',
  },
  {
    title: 'Scalable Dev Partnership',
    desc: 'Our partnership is designed for businesses needing consistent development support.',
    icon: <CgPathOutline  className="text-pink-900  text-3xl" />,
    gradient: 'bg-linear-to-r/longer from-black-500 to-fuchsia-900',
  },
  {
    title: 'End-to-End Consulting',
    desc: 'Our consulting empowers digital strategies from vision to final launch.',
    icon:  <MdOutlineEmergency   className="text-purple-900 text-3xl" />,
 
    gradient: 'bg-linear-to-r/longer from-black-500 to-purple-900',
  },
];

const Service = () => {
  return (
    <section className="relative bg-radial-[at_50%_50%] from-zinc-900 to-gray-950 to-100%  py-20 px-6 text-black text-center overflow-hidden">
      <div className="absolute -z-10 inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.05)_0%,_transparent_70%)]"></div>

    
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto max-w-7xl gap-8">
        <img src={service1} alt="" className="rounded-2xl" />
        <img src={service2} alt="" className="rounded-2xl" />
        <img src={service3} alt="" className="rounded-2xl" />
      </div>

      
      <div className="max-w-7xl mx-auto mb-20 pt-10 text-white">
        <h2 className="text-2xl md:text-4xl font-light">
          We are a full-service studio creating transformative
          <span className="font-bold"> digital experiences and solutions,</span> specializing in
          <span className="font-bold"> websites and web applications.</span>
        </h2>
      </div>

    
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className={`relative text-white p-8 h-72 rounded-2xl shadow-lg bg-gradient-to-br ${service.gradient} transition duration-300 transform hover:scale-105`}
          >
           
            <div className="absolute top-4 left-4">
              {service.icon}
            </div>

         
            <h3 className="font-semibold text-xl mt-10 mb-3">{service.title}</h3>
            <p className="text-sm opacity-90">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;

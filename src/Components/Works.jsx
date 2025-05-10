import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import project1 from '../assets/w1.png';
import project2 from '../assets/w2.png';
import project3 from '../assets/w3.png';
import project4 from '../assets/w4.png';
import project5 from '../assets/w5.png';

const projects = [
  {
    img: project1,
    title: 'Alcohol Tracker',
    desc: 'All-In-One(AIO) Service.',
  },
  {
    img: project2,
    title: 'Project Two',
    desc: 'All-In-One(AIO) Service',
  },
  {
    img: project3,
    title: 'Project Three',
    desc: 'All-In-One(AIO) Service',
  },
  {
    img: project4,
    title: 'Alcohol Tracker',
    desc: 'All-In-One(AIO) Service',
  },
  {
    img: project5,
    title: 'Alcohol Tracker',
    desc: 'AAll-In-One(AIO) Service',
  },
];

const Work = () => {
  return (
    <section className="py-20 px-6 bg-radial-[at_50%_50%] from-zinc-800 to-gray-950 to-100%">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">Our Most Recent Work</h2>
        <p className="text-gray-100">Lorem ipsum dolor sit amet
            <span >consector.Eget at at nunc lorem</span>
        </p>
      </div>

      
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {projects.slice(0, 2).map((proj, idx) => (
          <div key={idx} className="bg-gray-800  rounded-xl overflow-hidden shadow-lg">
            <img src={proj.img} alt={proj.title} className="w-full h-48 object-cover text-white" />
            <div className="flex justify-between items-start p-6">
              <div className="text-left">
                <h3 className="font-semibold text-lg mb-1 text-white">{proj.title}</h3>
                <p className="text-gray-100 text-sm">{proj.desc}</p>
              </div>
              <button className="flex items-center bg-gray-700 border border-white p-2 rounded-xl text-white hover:text-blue-800 font-medium">
                Open&nbsp;<FiArrowUpRight />
              </button>
            </div>
          </div>
        ))}
      </div>

      
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.slice(2).map((proj, idx) => (
          <div key={idx} className="bg-gray-800 rounded-xl overflow-hidden shadow-lg">
            <img src={proj.img} alt={proj.title} className="w-full h-48 object-cover" />
            <div className="flex justify-between items-start p-6">
              <div className="text-left">
                <h3 className="font-semibold text-gray-100 text-lg mb-1">{proj.title}</h3>
                <p className="text-gray-100 text-sm">{proj.desc}</p>
              </div>
              <button className="flex items-center bg-gray-700 border border-white p-2 rounded-xl text-white hover:text-blue-800 font-medium">
                Open&nbsp;<FiArrowUpRight />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;

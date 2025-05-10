import React from 'react';

const insightsData = [
  'How to Protect Your Identity While Traveling',
  'Top Security Tips for Remote Workers',
  'Design Systems That Scale',
  'Digital Minimalism in Web Projects',
  'Trends in Web Application Architecture',
];

const Insights = () => {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Featured Insights</h1>
        <p className="text-gray-400 text-lg md:text-xl mb-12">
          Lorem ipsum dolor sit amet consectetur.
          <span> Eget at at nunc lorem.</span>
        </p>

        <div className="grid gap-6 max-w-4xl mx-auto">
          {insightsData.map((text, index) => (
            <div
              key={index}
              className="flex  bg-gradient-to-r from-blue-900 via-transparent to-transparent hover:bg-gray-300  transition rounded-lg overflow-hidden shadow-md"
            >
              
              <div className=" h-full " />

              
              <div className="flex justify-between items-center flex-1 px-6 py-4">
                <div className="text-left">
                  <span className="text-gray-400 mr-2 font-mono">
                    {String(index + 1).padStart(2, '0')}.
                  </span>
                  <span>{text}</span>
                </div>
                <span className="text-xl text-gray-400 group-hover:translate-x-1 transition-transform">↗</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-sm font-medium transition">
            View More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Insights;

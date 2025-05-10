import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-radial-[at_50%_50%] from-zinc-900 to-gray-950 to-100% text-white py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-start mb-10">
        
        <div className="space-y-2">
          <p className="text-xl font-semibold ">Have a project in mind?</p>
          <p className="text-4xl pb-4 text-blue-300 font-semibold">Let’s talk</p>
          <a
            href="mailto:hey@pixll.com"
            className=" underline text-4xl pb-3 hover:text-blue-300"
          >
            hey@pixll.com
          </a>
        </div>

        
        <div className="flex flex-col space-y-1 text-sm underline text-gray-400 items-end mt-8 md:mt-0">
          <a href="#" className="hover:text-white transition">LinkedIn</a>
          <a href="#" className="hover:text-white transition">GitHub</a>
          <a href="#" className="hover:text-white transition">Facebook</a>
          <a href="#" className="hover:text-white transition">Instagram</a>
          <a href="#" className="hover:text-white transition">Twitter</a>
        </div>
      </div>

      
      <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-end items-end text-sm text-gray-500 gap-10">
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition underline">Privacy</a>
          <a href="#" className="hover:text-white transition underline">Terms</a>
        </div>
        <p className="text-xs text-right">&copy;  2017-2025 Pixll</p>
      </div>
    </footer>
  );
};

export default Footer;

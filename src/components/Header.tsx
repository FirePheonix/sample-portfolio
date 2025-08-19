import React from 'react';
import { Search, Menu } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="relative z-50 w-full px-4 md:px-8 lg:px-24 py-8">
      <div className="flex items-center justify-between w-full">
        {/* Left section - Search and Menu */}
        <div className="flex items-center gap-10">
          <div className="bg-white rounded-full p-3 cursor-pointer hover:bg-sugar-gray transition-colors">
            <Search className="w-4 h-4 text-black" />
          </div>
          <div className="flex items-center gap-4 cursor-pointer group">
            <span className="text-white font-poppins text-sm tracking-widest uppercase">menu</span>
            <div className="flex flex-col gap-1">
              <div className="w-7 h-0.5 bg-white group-hover:bg-sugar-orange transition-colors"></div>
              <div className="w-5 h-0.5 bg-white group-hover:bg-sugar-orange transition-colors"></div>
            </div>
          </div>
        </div>

        {/* Center - Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <h1 className="text-white font-poppins text-2xl md:text-3xl font-normal tracking-wider">
            shubham
          </h1>
        </div>

        {/* Right section - Social Icons */}
        <div className="flex items-center gap-4">
          {[
            { name: 'fb', color: 'bg-sugar-orange' },
            { name: 'in', color: 'bg-sugar-orange' },
            { name: 'dr', color: 'bg-sugar-orange' },
            { name: 'be', color: 'bg-white' },
          ].map((social, index) => (
            <div key={index} className="flex items-center gap-2">
              <span className="text-white font-poppins text-sm tracking-widest uppercase">
                {social.name}
              </span>
              <div className={`w-1.5 h-1.5 rounded-full ${social.color}`}></div>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;

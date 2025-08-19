import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="relative w-24 h-24 bg-sugar-medium-gray rounded-full flex items-center justify-center group hover:scale-105 transition-transform duration-300">
      {/* Simplified logo representation */}
      <div className="relative">
        <div className="w-8 h-10 bg-black rounded-sm"></div>
        <div className="absolute top-6 left-2 w-3 h-2 bg-sugar-orange rounded-sm"></div>
      </div>
    </div>
  );
};

export default Logo;

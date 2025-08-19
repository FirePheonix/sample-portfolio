import React from 'react';
import { Play } from 'lucide-react';

interface WatchVideoButtonProps {
  onClick?: () => void;
}

const WatchVideoButton: React.FC<WatchVideoButtonProps> = ({ onClick }) => {
  return (
    <div className="relative group cursor-pointer" onClick={onClick}>
      {/* Background circle */}
      <div className="w-28 h-28 bg-sugar-light-gray rounded-full relative flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
        {/* Play icon */}
        <div className="w-12 h-12 bg-sugar-orange rounded-full flex items-center justify-center">
          <Play className="w-6 h-6 text-white fill-white ml-1" />
        </div>
      </div>
      
      {/* Circular text */}
      <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
        <svg className="w-full h-full" viewBox="0 0 112 112">
          <defs>
            <path
              id="circle"
              d="M 56, 56 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
            />
          </defs>
          <text className="text-xs font-roboto tracking-widest uppercase fill-black">
            <textPath href="#circle">
              <span className='text-black'>
              VIEW - MY - PROJECTS - VIEW - MY - PROJECTS - 
              </span>
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  );
};

export default WatchVideoButton;

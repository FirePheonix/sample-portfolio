import React from 'react';

interface ScrollingStripProps {
  items: string[];
  direction: 'left' | 'right';
  background: 'dark' | 'light';
  className?: string;
}

const ScrollingStrip: React.FC<ScrollingStripProps> = ({ 
  items, 
  direction, 
  background,
  className = ''
}) => {
  const bgClass = background === 'dark' 
    ? 'bg-sugar-dark border-sugar-dark' 
    : 'bg-sugar-gray border-sugar-gray';
  
  const textClass = background === 'dark' ? 'text-white' : 'text-sugar-dark';
  
  const animationClass = direction === 'left' 
    ? 'animate-scroll-left' 
    : 'animate-scroll-right';

  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div className={`relative overflow-hidden border-8 ${bgClass} ${className}`}>
      <div className={`flex items-center gap-20 whitespace-nowrap ${animationClass}`}>
        {duplicatedItems.map((item, index) => (
          <div key={index} className="flex items-center gap-6">
            <span className={`font-roboto text-2xl md:text-3xl font-normal tracking-wider uppercase ${textClass}`}>
              {item}
            </span>
            <div className="w-4 h-4 md:w-6 md:h-6 bg-sugar-orange rounded-full flex-shrink-0"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingStrip;

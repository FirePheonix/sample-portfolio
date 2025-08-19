import React, { useState, useEffect } from 'react';

interface LoadingPageProps {
  onLoadingComplete: () => void;
}

const LoadingPage: React.FC<LoadingPageProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsExiting(true);
          setTimeout(() => {
            onLoadingComplete();
          }, 800); // Delay for exit animation
          return 100;
        }
        return prev + 1;
      });
    }, 30); // Adjust speed as needed

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div className={`fixed inset-0 flex items-center justify-center overflow-hidden z-50 transition-all duration-800 ${isExiting ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`} style={{ backgroundColor: '#000000' }}>
      {/* Background blur ellipse - responsive scaling */}
      <div 
        className="absolute opacity-90 rounded-full transform scale-50 md:scale-75 lg:scale-100"
        style={{
          width: '1527px',
          height: '769px',
          left: '124px',
          top: '197px',
          filter: 'blur(392px)',
        }}
      ></div>

      {/* Main content container */}
      <div className={`relative flex flex-col items-center transition-all duration-700 ${isExiting ? 'transform scale-90 opacity-0' : 'transform scale-100 opacity-100'}`}>
        {/* Large "s" letter */}
        <div 
          className="relative flex items-center justify-center"
          style={{
            width: '238px',
            height: '772px',
          }}
        >
          <span 
            className="font-poppins font-normal text-black lowercase leading-tight"
            style={{
              fontSize: 'clamp(200px, 25vw, 454px)',
              WebkitTextStroke: '1px #363636',
              textStroke: '1px #363636',
            }}
          >
            s
          </span>
        </div>

        {/* "shubham" text */}
        <div 
          className="absolute"
          style={{
            bottom: 'clamp(100px, 15vh, 200px)',
          }}
        >
          <span 
            className="font-poppins font-normal text-white lowercase leading-tight"
            style={{
              fontSize: 'clamp(40px, 5vw, 70px)',
            }}
          >
            shubham
          </span>
        </div>

        {/* Progress counter */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="flex items-center gap-4">
            <span className="font-poppins text-white text-2xl font-light">
              {progress.toString().padStart(2, '0')}%
            </span>
            
            {/* Progress bar */}
            <div className="w-32 h-0.5 bg-gray-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-white transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;

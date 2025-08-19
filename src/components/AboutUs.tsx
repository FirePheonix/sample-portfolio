import React from 'react';
import Header from './Header';
import TagsList from './TagsList';
import Logo from './Logo';
import WatchVideoButton from './WatchVideoButton';

interface AboutUsProps {
  onNavigateToProjects: () => void;
}

const AboutUs: React.FC<AboutUsProps> = ({ onNavigateToProjects }) => {
  return (
    <div className="min-h-screen relative overflow-auto" style={{ backgroundColor: '#000000' }}>
      {/* Background blur effect */}
      <div 
        className="fixed opacity-90 rounded-full pointer-events-none"
        style={{
          width: '1527px',
          height: '769px',
          left: '124px',
          top: '197px',
          background: 'rgba(30, 30, 30, 0.9)',
          filter: 'blur(392px)',
        }}
      ></div>
      
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="relative z-10 min-h-screen">
        {/* Left sidebar with Tags and Logo */}
        <div className="fixed left-4 md:left-8 lg:left-24 top-80 z-20">
          <div className="flex flex-col gap-32">
            <TagsList />
            <Logo />
          </div>
        </div>

        {/* Content container with proper spacing */}
        <div className="pt-32 pb-32 px-4 md:px-8 lg:px-24">
          
          {/* Large decorative "s" */}
          <div className="absolute left-64 top-40 pointer-events-none">
            <span 
              className="font-poppins font-normal text-black lowercase leading-tight"
              style={{
                fontSize: 'clamp(200px, 25vw, 454px)',
                WebkitTextStroke: '2px #363636',
                textStroke: '2px #363636',
              }}
            >
              s
            </span>
          </div>

          {/* Main content area */}
          <div className="flex flex-col lg:flex-row gap-16 mt-32">
            
            {/* Left content */}
            <div className="lg:w-1/3 lg:ml-48">
              <h2 className="text-white font-poppins text-4xl font-normal tracking-wider uppercase leading-relaxed mb-6">
                about me
              </h2>
              
              {/* Decorative line */}
              <div className="w-16 h-0.5 bg-sugar-orange mb-8"></div>
            </div>

            {/* Right content */}
            <div className="lg:w-2/3 max-w-4xl">
              {/* Subheading */}
              <h3 className="text-white font-poppins text-2xl md:text-3xl lg:text-4xl font-normal tracking-wider uppercase leading-relaxed mb-8">
                we are a digital production team.
              </h3>

              {/* Main Description */}
              <div className="mb-16">
                <p className="text-white font-poppins text-lg md:text-2xl lg:text-3xl font-normal tracking-wider uppercase leading-relaxed mb-16">
                  shubham is a leading design & software development agency <br className="hidden lg:block" />
                  based in berlin. We help startups & Fortune 500 companies <br className="hidden lg:block" />
                  delight humans on the other side of the screen.
                </p>
                
                {/* Orange accent rectangle */}
                <div className="w-14 h-8 bg-sugar-orange mb-16"></div>
              </div>

              {/* Contact Button */}
              <div className="flex items-center gap-4 mb-32">
                <div className="bg-sugar-orange px-6 py-3 flex items-center justify-center">
                  <div className="w-14 h-8 bg-sugar-orange"></div>
                </div>
                <button className="text-white font-open-sans text-xl md:text-2xl font-normal tracking-wider capitalize hover:text-sugar-orange transition-colors">
                  Contact us
                </button>
              </div>

              {/* Additional content for scrolling */}
              <div className="space-y-16 mb-32">
                <div>
                  <h4 className="text-white font-poppins text-2xl font-normal tracking-wider uppercase mb-4">
                    Our Mission
                  </h4>
                  <p className="text-gray-300 font-poppins text-lg leading-relaxed">
                    To create digital experiences that not only look beautiful but also solve real problems and drive meaningful results for our clients.
                  </p>
                </div>

                <div>
                  <h4 className="text-white font-poppins text-2xl font-normal tracking-wider uppercase mb-4">
                    Our Vision
                  </h4>
                  <p className="text-gray-300 font-poppins text-lg leading-relaxed">
                    To be the most trusted partner for companies looking to transform their digital presence and create lasting impact in their industry.
                  </p>
                </div>

                <div>
                  <h4 className="text-white font-poppins text-2xl font-normal tracking-wider uppercase mb-4">
                    Our Values
                  </h4>
                  <div className="space-y-4">
                    <p className="text-gray-300 font-poppins text-lg leading-relaxed">
                      <span className="text-sugar-orange font-semibold">Innovation:</span> We constantly push boundaries to deliver cutting-edge solutions.
                    </p>
                    <p className="text-gray-300 font-poppins text-lg leading-relaxed">
                      <span className="text-sugar-orange font-semibold">Quality:</span> Every project is crafted with meticulous attention to detail.
                    </p>
                    <p className="text-gray-300 font-poppins text-lg leading-relaxed">
                      <span className="text-sugar-orange font-semibold">Collaboration:</span> We work closely with our clients as partners, not just vendors.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Watch Video Button - Fixed position */}
        <div className="fixed bottom-8 right-8 z-20">
          <WatchVideoButton onClick={onNavigateToProjects} />
        </div>

        {/* Brand Text in Circle - Fixed position */}
        <div className="fixed left-24 top-32 z-20">
          <div className="relative">
            <svg className="w-24 h-24" viewBox="0 0 96 96">
              <defs>
                <path
                  id="brandCircle"
                  d="M 48, 48 m -30, 0 a 30,30 0 1,1 60,0 a 30,30 0 1,1 -60,0"
                />
              </defs>
              <text className="text-xs font-roboto tracking-widest uppercase fill-white">
                <textPath href="#brandCircle">
                  shubham - Creation
                </textPath>
              </text>
            </svg>
          </div>
        </div>

        {/* Floating decorative elements - Fixed position */}
        <div className="fixed top-1/4 right-1/4 w-3 h-3 bg-sugar-orange rounded-full animate-float pointer-events-none"></div>
        <div className="fixed bottom-1/3 left-1/3 w-2 h-2 bg-white rounded-full animate-pulse-slow pointer-events-none"></div>
        <div className="fixed top-2/3 right-1/3 w-4 h-4 bg-sugar-orange rounded-full animate-float pointer-events-none" style={{ animationDelay: '1s' }}></div>
      </main>
    </div>
  );
};

export default AboutUs;

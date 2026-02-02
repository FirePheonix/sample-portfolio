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
                Computer Science Student & Full-Stack Developer
              </h3>

              {/* Main Description */}
              <div className="mb-16">
                <p className="text-white font-poppins text-lg md:text-xl lg:text-2xl font-normal tracking-wide leading-relaxed mb-8">
                  I'm a B.Tech student at <span className="text-sugar-orange">Indira Institute of Information Technology, Sonepat</span>, 
                  passionate about creating innovative solutions at the intersection of AI/ML, Full-Stack Development, and Web3.
                </p>
                
                <p className="text-gray-300 font-poppins text-base md:text-lg leading-relaxed mb-8">
                  With a strong foundation in computer vision, multimodal AI, and modern web technologies, 
                  I specialize in building scalable applications that solve real-world problems. My work spans 
                  from developing assistive technologies for the visually impaired to creating enterprise-level 
                  SaaS platforms.
                </p>

                <p className="text-gray-300 font-poppins text-base md:text-lg leading-relaxed mb-16">
                  I believe in the power of technology to create meaningful impact, combining technical excellence 
                  with user-centric design to build products that truly matter.
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
                  Get in touch
                </button>
              </div>

              {/* Additional content for scrolling */}
              <div className="space-y-16 mb-32">
                <div>
                  <h4 className="text-white font-poppins text-2xl font-normal tracking-wider uppercase mb-4">
                    Achievements
                  </h4>
                  <div className="space-y-3">
                    <p className="text-gray-300 font-poppins text-base leading-relaxed">
                      <span className="text-sugar-orange">•</span> Winner, Infinity CAH Hackathon at IIT Delhi (2025)
                    </p>
                    <p className="text-gray-300 font-poppins text-base leading-relaxed">
                      <span className="text-sugar-orange">•</span> 5x National Hackathon Winner (2025)
                    </p>
                    <p className="text-gray-300 font-poppins text-base leading-relaxed">
                      <span className="text-sugar-orange">•</span> JEE Main Rank: 12,000 among 1.4 million+ candidates (2024)
                    </p>
                    <p className="text-gray-300 font-poppins text-base leading-relaxed">
                      <span className="text-sugar-orange">•</span> BITSAT Score: 292/390 (2024)
                    </p>
                    <p className="text-gray-300 font-poppins text-base leading-relaxed">
                      <span className="text-sugar-orange">•</span> 95% Gold Medal & Blue Blazer for consecutive academic excellence
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="text-white font-poppins text-2xl font-normal tracking-wider uppercase mb-4">
                    Education
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <p className="text-white font-poppins text-lg font-semibold">B.Tech in Computer Science</p>
                      <p className="text-gray-300 font-poppins text-base">Indira Institute of Information Technology, Sonepat</p>
                      <p className="text-sugar-orange font-poppins text-sm">CGPA: 8.4/10.0 • 2024-2028</p>
                    </div>
                    <div>
                      <p className="text-white font-poppins text-lg font-semibold">Class 12 (CBSE)</p>
                      <p className="text-gray-300 font-poppins text-base">Delhi Public School, Ghaziabad</p>
                      <p className="text-sugar-orange font-poppins text-sm">90% • 2020-2024</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-white font-poppins text-2xl font-normal tracking-wider uppercase mb-4">
                    Core Competencies
                  </h4>
                  <div className="space-y-4">
                    <p className="text-gray-300 font-poppins text-base leading-relaxed">
                      <span className="text-sugar-orange font-semibold">AI/ML:</span> Computer Vision, Multimodal AI, Natural Language Processing, Open-Source LLMs
                    </p>
                    <p className="text-gray-300 font-poppins text-base leading-relaxed">
                      <span className="text-sugar-orange font-semibold">Full-Stack:</span> MERN Stack, Next.js, TypeScript, REST APIs, System Architecture
                    </p>
                    <p className="text-gray-300 font-poppins text-base leading-relaxed">
                      <span className="text-sugar-orange font-semibold">DevOps & Tools:</span> Git, Docker, AWS, CI/CD, Agile Methodologies
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

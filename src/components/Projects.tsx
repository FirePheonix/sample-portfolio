import React from 'react';
import Header from './Header';
import TagsList from './TagsList';
import Logo from './Logo';
import WatchVideoButton from './WatchVideoButton';
import { projectsData } from '../data/projects';

interface ProjectsProps {
  onNavigateToProjects: () => void;
}

const Projects: React.FC<ProjectsProps> = ({ onNavigateToProjects }) => {

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
              <h2 className="text-white font-poppins text-4xl font-normal tracking-wide uppercase leading-relaxed mb-6">
                Projects
              </h2>

              {/* Decorative line */}
              <div className="w-16 h-0.5 bg-sugar-orange mb-8"></div>
            </div>

            {/* Right content */}
            <div className="lg:w-2/3 max-w-6xl">
              {/* Large cre8tive text */}
              <div className="mb-16">
                <h3
                  className="text-white font-poppins font-bold uppercase leading-tight mb-16"
                  style={{
                    fontSize: 'clamp(80px, 12vw, 180px)',
                    letterSpacing: '2%',
                    WebkitTextStroke: '1px rgba(77, 77, 77, 0.5)',
                    textStroke: '1px rgba(77, 77, 77, 0.5)',
                    lineHeight: '1.75em'
                  }}
                >
                  cre8tive developer
                </h3>
              </div>

              {/* Project Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
                {projectsData.map((project, index) => (
                  <div key={index} className="flex flex-col items-center gap-6 group cursor-pointer hover:scale-105 transition-transform duration-300">
                    {/* Project Image */}
                    <div className="relative overflow-hidden rounded-lg shadow-2xl w-full">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
                    </div>

                    {/* Project Info */}
                    <div className="flex flex-col items-center gap-2">
                      {/* Project Title */}
                      <h4 className="text-white font-poppins text-xl md:text-2xl font-normal tracking-wide capitalize leading-relaxed text-center">
                        {project.title}
                      </h4>

                      {/* Category Tag */}
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-sugar-orange rounded-full"></div>
                        <span className="text-gray-400 font-open-sans text-base font-normal tracking-wide capitalize">
                          {project.category}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional project showcase section */}
              <div className="space-y-16 mb-32">
                <div>
                  <h4 className="text-white font-poppins text-2xl font-normal tracking-wider uppercase mb-8">
                    Featured Case Studies
                  </h4>
                  <div className="space-y-8">
                    <div className="border-l-4 border-sugar-orange pl-6">
                      <h5 className="text-white font-poppins text-xl font-semibold mb-2">shubham Portfolio Redesign</h5>
                      <p className="text-gray-300 font-poppins text-base leading-relaxed mb-4">
                        Complete redesign of our portfolio website focusing on user experience and modern aesthetics. Increased user engagement by 150% and reduced bounce rate by 40%.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {['UI/UX Design', 'Frontend Development', 'Branding'].map((tag, i) => (
                          <span key={i} className="bg-sugar-orange bg-opacity-20 text-sugar-orange px-3 py-1 rounded-full text-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="border-l-4 border-sugar-orange pl-6">
                      <h5 className="text-white font-poppins text-xl font-semibold mb-2">NFTs Dashboard Platform</h5>
                      <p className="text-gray-300 font-poppins text-base leading-relaxed mb-4">
                        Comprehensive dashboard for NFT collectors and traders. Built with cutting-edge technology to handle real-time data and provide seamless user experience.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {['React', 'Web3 Integration', 'Data Visualization'].map((tag, i) => (
                          <span key={i} className="bg-sugar-orange bg-opacity-20 text-sugar-orange px-3 py-1 rounded-full text-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-white font-poppins text-2xl font-normal tracking-wider uppercase mb-8">
                    Technologies We Use
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {['React', 'TypeScript', 'Node.js', 'Figma', 'Next.js', 'Tailwind CSS', 'MongoDB', 'AWS'].map((tech, i) => (
                      <div key={i} className="bg-gray-800 bg-opacity-50 border border-gray-700 rounded-lg p-4 text-center hover:border-sugar-orange transition-colors">
                        <span className="text-white font-poppins text-sm">{tech}</span>
                      </div>
                    ))}
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
                  id="projectsCircle"
                  d="M 48, 48 m -30, 0 a 30,30 0 1,1 60,0 a 30,30 0 1,1 -60,0"
                />
              </defs>
              <text className="text-xs font-roboto tracking-widest uppercase fill-white">
                <textPath href="#projectsCircle">
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

export default Projects;

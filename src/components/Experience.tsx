import React from 'react';
import Header from './Header';
import TagsList from './TagsList';
import Logo from './Logo';
import WatchVideoButton from './WatchVideoButton';

interface ExperienceProps {
  onNavigateToProjects: () => void;
}

const Experience: React.FC<ExperienceProps> = ({ onNavigateToProjects }) => {
  const experienceItems = [
    {
      title: "Research Consultant",
      company: "WorldQuant",
      period: "Jan 2026 – Present (2 months)",
      type: "Part-time",
      location: "Remote",
      description: "Contributing to quantitative research and data analysis projects, applying advanced statistical methodologies and machine learning techniques."
    },
    {
      title: "Co-Founder",
      company: "gemnar",
      period: "Sep 2025 – Present (6 months)",
      type: "Full-time",
      location: "Remote",
      description: "Founded and co-leading a FGC-AI advertisement generation platform enabling brands to create high-quality, conversational video ads using generative AI and open-source models."
    },
    {
      title: "Technical Lead",
      company: "AlgoZenith IIIT Sonepat",
      period: "Aug 2025 – Present (7 months)",
      type: "Part-time",
      location: "On-site",
      description: "Leading technical initiatives in competitive programming and development, mentoring students and organizing coding competitions and workshops."
    },
    {
      title: "Member - Website Development Lead",
      company: "Sugar Labs",
      period: "Mar 2025 – Present (1 year)",
      type: "Part-time",
      location: "India • Remote",
      description: "Lead for development of www-v2, building and maintaining the organization's web presence and contributing to open-source educational software."
    },
    {
      title: "Core Team Member",
      company: "GDSC IIIT Sonepat",
      period: "Jan 2025 – Present (1 year 2 months)",
      type: "Full-time",
      location: "Haryana, India • Hybrid",
      description: "Core Team member at GDSC - IIIT Sonepat, organizing tech events, workshops, and contributing to community building initiatives."
    },
    {
      title: "Full Stack Development Intern",
      company: "Dualite",
      period: "Jul 2025 – Nov 2025 (5 months)",
      type: "Internship",
      location: "Remote",
      description: "Developed and deployed 100+ creative websites, authored detailed tutorials and documentation, and assisted in onboarding new developers."
    },
    {
      title: "Google Summer of Code Intern",
      company: "Sugar Labs",
      period: "May 2025 – Sep 2025 (5 months)",
      type: "Full-time",
      location: "India • Remote",
      description: "Built Color Sensor for SugarLabs' Music Blocks project - an assistive computer vision-based educational system enabling visually impaired children to learn music using tactile Lego Blocks."
    }
  ];

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

          {/* Large decorative "S" */}
          <div className="absolute left-64 top-40 pointer-events-none">
            <span
              className="font-poppins font-normal text-black lowercase leading-tight"
              style={{
                fontSize: 'clamp(200px, 25vw, 454px)',
                WebkitTextStroke: '2px #363636',
                textStroke: '2px #363636',
              }}
            >
              S
            </span>
          </div>

          {/* Main content area */}
          <div className="flex flex-col lg:flex-row gap-16 mt-32">

            {/* Left content */}
            <div className="lg:w-1/3 lg:ml-48">
              <h2 className="text-white font-poppins text-4xl font-normal tracking-wide uppercase leading-relaxed mb-6">
                experience
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

              {/* Experience Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
                {experienceItems.map((item, index) => (
                  <div key={index} className="flex flex-col gap-6">
                    {/* Card Content */}
                    <div className="flex flex-col gap-4">
                      <h4 className="text-white font-poppins text-2xl md:text-3xl font-normal tracking-wide leading-relaxed">
                        {item.title}
                      </h4>
                      <p className="text-sugar-orange font-poppins text-lg font-medium tracking-wide leading-relaxed">
                        {item.company}
                      </p>
                      <div className="flex flex-wrap gap-3 text-gray-400 font-poppins text-sm">
                        <span>{item.period}</span>
                        <span>•</span>
                        <span>{item.type}</span>
                        <span>•</span>
                        <span>{item.location}</span>
                      </div>
                      <p className="text-gray-300 font-poppins text-base font-normal tracking-wide leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Know More Button */}
                    <div className="flex items-center gap-0">
                      {/* Orange rectangle */}
                      <div className="w-14 h-11 bg-sugar-orange"></div>
                      {/* Button text */}
                      <button className="text-white font-open-sans text-xl md:text-2xl font-normal tracking-wide capitalize hover:text-sugar-orange transition-colors pl-4">
                        Know more
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional scrollable content */}
              <div className="space-y-16 mb-32">
                <div>
                  <h4 className="text-white font-poppins text-2xl font-normal tracking-wider uppercase mb-4">
                    Our Process
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h5 className="text-sugar-orange font-poppins text-lg font-semibold">Discovery</h5>
                      <p className="text-gray-300 font-poppins text-base leading-relaxed">
                        We dive deep into understanding your business, users, and goals to create a solid foundation for your project.
                      </p>
                    </div>
                    <div className="space-y-4">
                      <h5 className="text-sugar-orange font-poppins text-lg font-semibold">Design</h5>
                      <p className="text-gray-300 font-poppins text-base leading-relaxed">
                        Our creative team crafts beautiful, functional designs that align with your brand and user needs.
                      </p>
                    </div>
                    <div className="space-y-4">
                      <h5 className="text-sugar-orange font-poppins text-lg font-semibold">Development</h5>
                      <p className="text-gray-300 font-poppins text-base leading-relaxed">
                        We bring designs to life with clean, efficient code and cutting-edge technology solutions.
                      </p>
                    </div>
                    <div className="space-y-4">
                      <h5 className="text-sugar-orange font-poppins text-lg font-semibold">Delivery</h5>
                      <p className="text-gray-300 font-poppins text-base leading-relaxed">
                        We ensure smooth deployment and provide ongoing support to keep your project running optimally.
                      </p>
                    </div>
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
                  id="experienceCircle"
                  d="M 48, 48 m -30, 0 a 30,30 0 1,1 60,0 a 30,30 0 1,1 -60,0"
                />
              </defs>
              <text className="text-xs font-roboto tracking-widest uppercase fill-white">
                <textPath href="#experienceCircle">
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

export default Experience;

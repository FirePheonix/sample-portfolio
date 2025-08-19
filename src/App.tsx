import React, { useState } from 'react';
import LoadingPage from './components/LoadingPage';
import Header from './components/Header';
import ScrollingStrip from './components/ScrollingStrip';
import WatchVideoButton from './components/WatchVideoButton';
import TagsList from './components/TagsList';
import Logo from './components/Logo';
import AboutUs from './components/AboutUs';
import Experience from './components/Experience';
import Projects from './components/Projects';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showMain, setShowMain] = useState(false);
  const [currentSection, setCurrentSection] = useState<'home' | 'about' | 'experience' | 'projects'>('home');
  const services1 = [ 'ui/ux', 'mern', 'full-stack', 'web3', 'ml','research'];
  const services2 = ['ui/ux', 'mern', 'full-stack', 'web3', 'ml', 'research'];

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setIsTransitioning(true);
    
    // Start the transition sequence
    setTimeout(() => {
      setShowMain(true);
    }, 1000); // Black screen duration
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 2500); // Total transition duration
  };

  const navigateToProjects = () => {
    setCurrentSection('projects');
  };

  if (isLoading) {
    return <LoadingPage onLoadingComplete={handleLoadingComplete} />;
  }

  // Transition screen with black background and animation
  if (isTransitioning) {
    return (
      <div className="fixed inset-0 flex items-center justify-center overflow-hidden z-50" style={{ backgroundColor: '#000000' }}>
        {showMain && (
          <div className="animate-fade-in-up">
            {/* Animated "s" letter that scales in */}
            <div className="relative flex items-center justify-center animate-scale-in">
              <span 
                className="font-poppins font-normal text-white lowercase leading-tight animate-glow"
                style={{
                  fontSize: 'clamp(150px, 20vw, 300px)',
                  textShadow: '0 0 20px rgba(255, 255, 255, 0.5), 0 0 40px rgba(255, 255, 255, 0.3)',
                }}
              >
                s
              </span>
            </div>
            
            {/* "shubham" text that fades in */}
            <div className="text-center mt-8 animate-fade-in-delayed">
              <span 
                className="font-poppins font-normal text-white lowercase leading-tight"
                style={{
                  fontSize: 'clamp(30px, 4vw, 50px)',
                }}
              >
                shubham
              </span>
            </div>

            {/* Subtitle that slides up */}
            <div className="text-center mt-4 animate-slide-up-delayed">
              <span className="font-poppins text-gray-400 text-lg tracking-widest uppercase">
                creative developer
              </span>
            </div>
          </div>
        )}
      </div>
    );
  }

  if (currentSection === 'about') {
    return (
      <div className="relative" style={{ backgroundColor: '#000000' }}>
        <AboutUs onNavigateToProjects={navigateToProjects} />
        {/* Navigation buttons */}
        <div className="fixed top-4 left-4 z-50 flex gap-4">
          <button 
            onClick={() => setCurrentSection('home')}
            className="bg-sugar-orange text-white px-4 py-2 rounded-full font-poppins text-sm uppercase tracking-wider hover:bg-orange-600 transition-colors"
          >
            ← Home
          </button>
          <button 
            onClick={() => setCurrentSection('experience')}
            className="bg-white text-black px-4 py-2 rounded-full font-poppins text-sm uppercase tracking-wider hover:bg-gray-200 transition-colors"
          >
            Experience
          </button>
          <button 
            onClick={() => setCurrentSection('projects')}
            className="bg-white text-black px-4 py-2 rounded-full font-poppins text-sm uppercase tracking-wider hover:bg-gray-200 transition-colors"
          >
            Projects
          </button>
        </div>
      </div>
    );
  }

  if (currentSection === 'experience') {
    return (
      <div className="relative" style={{ backgroundColor: '#000000' }}>
        <Experience onNavigateToProjects={navigateToProjects} />
        {/* Navigation buttons */}
        <div className="fixed top-4 left-4 z-50 flex gap-4">
          <button 
            onClick={() => setCurrentSection('home')}
            className="bg-sugar-orange text-white px-4 py-2 rounded-full font-poppins text-sm uppercase tracking-wider hover:bg-orange-600 transition-colors"
          >
            ← Home
          </button>
          <button 
            onClick={() => setCurrentSection('about')}
            className="bg-white text-black px-4 py-2 rounded-full font-poppins text-sm uppercase tracking-wider hover:bg-gray-200 transition-colors"
          >
            About Me
          </button>
          <button 
            onClick={() => setCurrentSection('projects')}
            className="bg-white text-black px-4 py-2 rounded-full font-poppins text-sm uppercase tracking-wider hover:bg-gray-200 transition-colors"
          >
            Projects
          </button>
        </div>
      </div>
    );
  }

  if (currentSection === 'projects') {
    return (
      <div className="relative" style={{ backgroundColor: '#000000' }}>
        <Projects onNavigateToProjects={navigateToProjects} />
        {/* Navigation buttons */}
        <div className="fixed top-4 left-4 z-50 flex gap-4">
          <button 
            onClick={() => setCurrentSection('home')}
            className="bg-sugar-orange text-white px-4 py-2 rounded-full font-poppins text-sm uppercase tracking-wider hover:bg-orange-600 transition-colors"
          >
            ← Home
          </button>
          <button 
            onClick={() => setCurrentSection('about')}
            className="bg-white text-black px-4 py-2 rounded-full font-poppins text-sm uppercase tracking-wider hover:bg-gray-200 transition-colors"
          >
            About Me
          </button>
          <button 
            onClick={() => setCurrentSection('experience')}
            className="bg-white text-black px-4 py-2 rounded-full font-poppins text-sm uppercase tracking-wider hover:bg-gray-200 transition-colors"
          >
            Experience
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen overflow-hidden relative ${!isTransitioning ? 'animate-main-page' : ''}`} style={{ backgroundColor: '#000000' }}>
      {/* Background blur effect */}
      <div className="absolute top-48 left-32 w-96 h-96 bg-gray-900 rounded-full opacity-90 blur-[200px]"></div>
      
      {/* Header with modified navigation */}
      <div className="relative z-50 w-full px-4 md:px-8 lg:px-24 py-8 animate-element-stagger" style={{ animationDelay: '0.2s' }}>
        <div className="flex items-center justify-between w-full">
          {/* Left section - Search and Menu */}
          <div className="flex items-center gap-10">
            <div className="bg-white rounded-full p-3 cursor-pointer hover:bg-gray-200 transition-colors">
              <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <div className="flex items-center gap-4 cursor-pointer group">
              <span className="text-white font-poppins text-sm tracking-widest uppercase">menu</span>
              <div className="flex flex-col gap-1">
                <div className="w-7 h-0.5 bg-white group-hover:bg-sugar-orange transition-colors"></div>
                <div className="w-5 h-0.5 bg-white group-hover:bg-sugar-orange transition-colors"></div>
              </div>
            </div>
            {/* Navigation links */}
            <button 
              onClick={() => setCurrentSection('about')}
              className="text-white font-poppins text-sm tracking-widest uppercase hover:text-sugar-orange transition-colors"
            >
              About Me
            </button>
            <button 
              onClick={() => setCurrentSection('experience')}
              className="text-white font-poppins text-sm tracking-widest uppercase hover:text-sugar-orange transition-colors"
            >
              Experience
            </button>
            <button 
              onClick={() => setCurrentSection('projects')}
              className="text-white font-poppins text-sm tracking-widest uppercase hover:text-sugar-orange transition-colors"
            >
              Projects
            </button>
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
      </div>

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="px-4 md:px-8 lg:px-24 py-16 md:py-24 animate-element-stagger" style={{ animationDelay: '0.4s' }}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left side - Main text */}
            <div className="lg:col-span-8">
              <h1 className="text-white font-poppins text-4xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight">
                <span className="block">Code.<span className="text-gray-400">Design.</span><span className="text-gray-600">Deploy.</span></span>
                <span className="block mt-2 md:mt-4">Full-Stack-Development.</span>
                <span className="block mt-2 md:mt-4">&More</span>
              </h1>
            </div>

            {/* Right side - Tags and Logo */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-end gap-8">
              <TagsList />
              <Logo />
            </div>
          </div>
        </section>

        {/* Scrolling Strips */}
        <section className="relative -mx-4 md:-mx-8 lg:-mx-24 animate-element-stagger" style={{ animationDelay: '0.6s' }}>
          {/* First strip - Light background, scrolling left */}
          <ScrollingStrip 
            items={services1}
            direction="left"
            background="light"
            className="py-6 md:py-8 mb-4"
          />
          
          {/* Second strip - Dark background, scrolling right */}
          <ScrollingStrip 
            items={services2}
            direction="right"
            background="dark"
            className="py-6 md:py-8"
          />
        </section>

        {/* Watch Video Button */}
        <section className="px-4 md:px-8 lg:px-24 py-16 flex justify-end animate-element-stagger" style={{ animationDelay: '0.8s' }}>
          <WatchVideoButton onClick={navigateToProjects} />
        </section>

        {/* Large decorative G */}
        <div className="absolute bottom-4 left-4 md:left-8 lg:left-44 opacity-20 pointer-events-none">
          <span className="text-white font-poppins text-[20rem] md:text-[25rem] lg:text-[30rem] font-normal leading-none">
            g
          </span>
        </div>

        {/* Floating decorative elements */}
        <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-sugar-orange rounded-full animate-float"></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-white rounded-full animate-pulse-slow"></div>
        <div className="absolute top-2/3 right-1/3 w-4 h-4 bg-sugar-orange rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      </main>
    </div>
  );
}

export default App;

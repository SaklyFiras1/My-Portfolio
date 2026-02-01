'use client'

import { Download, ChevronDown } from 'lucide-react'

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const downloadCV = () => {
    const link = document.createElement('a')
    link.href = 'https://drive.google.com/uc?export=download&id=1NpBo_X_QcRAHs0DScIOjXqRpCd2jsR7q'
    link.download = 'CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6 animate-fade-in">
          {/* Greeting */}
          <p className="text-accent-500 text-lg md:text-xl font-medium">
            Hi, I&apos;m {/* CORRECTION ICI */}
          </p>

          {/* Name */}
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">
            <span className="text-gradient">Sakly Firas</span>
          </h1>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display text-gray-300">
            Full-Stack Software Engineer
          </h2>

          {/* Tagline */}
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            I build scalable and modern web applications that help businesses grow and deliver exceptional user experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button
              onClick={scrollToProjects}
              className="group px-8 py-4 bg-accent-500 hover:bg-accent-600 text-dark-900 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-accent-500/50 w-full sm:w-auto"
            >
              View Projects
            </button>
            <button
              onClick={downloadCV}
              className="group px-8 py-4 border-2 border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-dark-900 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <Download size={20} />
              Download CV
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-accent-500" />
        </div>
      </div>
    </section>
  )
}
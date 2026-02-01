'use client'

import { Download, Briefcase, GraduationCap, Award } from 'lucide-react'

export default function CV() {
  const experiences = [
   
    {
      title: 'Software Engineer ',
      company: '3S(Software Standard Shaing)',
      period: 'January 2025 -July 2025',
      description: 'Design and deployment of an internal web-based continuous training platform for 3S employees, featuring both admin and employee interfaces.',
    },
    {
      title: 'Software Engineer ',
      company: 'Skipt',
      period: 'July 2025 - August 2025',
      description: 'Development of a MEAN Stack web application for managing professional events.',
    },
     {
      title: 'technical informatician ',
      company: 'AlveoData',
      period: 'February 2022 - June 2022',
      description: 'Design and development of a CV database web platform for managing job offers and facilitating candidate and recruiter search.',
    },
    

  ]

  const education = [
     {
      degree: 'Software Engineering',
      school: 'Epi Sousse',
      period: '2022-2025',
      description:''
     
    },
    {
      degree: 'Bachelor of Computer Science',
      school: 'Higher Institute of Computer Science and Mathematics of Monastir',
      period: '2019 - 2022',

    },
        {
      degree: 'Science Baccalaureate',
      school: 'Bourguiba Monastir High School',
      period: '2018 - 2019',

    },
   
  ]


  return (
    <section id="cv" className="py-20 md:py-32 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h3 className="text-accent-500 text-sm md:text-base font-semibold uppercase tracking-wider mb-2">
            Resume
          </h3>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Journey</span>
          </h2>
         <button
  onClick={() =>
    window.open(
      "https://drive.google.com/file/d/1NpBo_X_QcRAHs0DScIOjXqRpCd2jsR7q/view?usp=sharing",
      "_blank"
    )
  }
  className="inline-flex items-center gap-2 px-8 py-4 bg-accent-500 hover:bg-accent-600 text-dark-900 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-accent-500/50 mt-4"
>
  <Download size={20} />
  View My Jouney
</button>

        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-accent-500/10 rounded-lg">
                <Briefcase size={24} className="text-accent-500" />
              </div>
              <h3 className="font-display text-2xl font-bold">Experience</h3>
            </div>

            <div className="space-y-6">
              {experiences.map((exp, idx) => (
                <div
                  key={idx}
                  className="relative pl-8 pb-8 border-l-2 border-accent-500/30 last:pb-0"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-accent-500 rounded-full"></div>
                  <div className="bg-dark-900 rounded-xl p-6 border border-accent-500/20 hover:border-accent-500/40 transition-colors">
                    <div className="text-accent-500 text-sm font-semibold mb-1">
                      {exp.period}
                    </div>
                    <h4 className="font-display text-xl font-bold mb-1">
                      {exp.title}
                    </h4>
                    <div className="text-gray-400 font-medium mb-3">
                      {exp.company}
                    </div>
                    <p className="text-gray-500 text-sm">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-accent-500/10 rounded-lg">
                <GraduationCap size={24} className="text-accent-500" />
              </div>
              <h3 className="font-display text-2xl font-bold">Education</h3>
            </div>

            <div className="space-y-6 mb-12">
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className="relative pl-8 pb-8 border-l-2 border-accent-500/30 last:pb-0"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-accent-500 rounded-full"></div>
                  <div className="bg-dark-900 rounded-xl p-6 border border-accent-500/20 hover:border-accent-500/40 transition-colors">
                    <div className="text-accent-500 text-sm font-semibold mb-1">
                      {edu.period}
                    </div>
                    <h4 className="font-display text-xl font-bold mb-1">
                      {edu.degree}
                    </h4>
                    <div className="text-gray-400 font-medium mb-3">
                      {edu.school}
                    </div>
                    <p className="text-gray-500 text-sm">
                      {edu.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Technologies */}
           

          
          </div>
        </div>
      </div>
    </section>
  )
}

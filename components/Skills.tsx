'use client'

import { Code2, Server, Wrench } from 'lucide-react'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code2,
      skills: [
         { name: 'Angular', level: 95 },
        { name: 'React', level: 95 },
        { name: 'Next.js', level: 90 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'TypeScript', level: 85 },
        { name: 'JavaScript', level: 90 },
      ],
    },
    {
      title: 'Backend Development',
      icon: Server,
      skills: [
             { name: 'SpringBoot', level: 72},
          { name: '.NET', level: 73},
               { name: 'Laravel', level: 75},
        { name: 'Express.js', level: 90 },
        { name: 'NestJS', level: 85 },
        { name: 'MySQL', level: 80 },
        { name: 'PostgreSQL', level: 79 },
          { name: 'MongoDB', level: 80 },
        { name: 'REST APIs', level: 95 },
      ],
    },
    {
      title: 'Tools & Platforms',
      icon: Wrench,
      skills: [
        { name: 'Git', level: 95 },
           { name: 'Docker', level: 75 },
        { name: 'CI/CD', level: 80 },
         { name: 'Ansible', level: 70 },
        { name: 'Terraform', level: 70 },
         { name: 'SonarQube', level: 70 },
          { name: 'SonarQube', level: 70 },
         { name: 'Prometheus', level: 70 },
          { name: 'Grafana', level: 70 },
          { name: 'Azure', level: 70 },
        { name: 'Vercel', level: 90 },
   
       
   
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 md:py-32 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h3 className="text-accent-500 text-sm md:text-base font-semibold uppercase tracking-wider mb-2">
            My Expertise
          </h3>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Technical <span className="text-gradient">Skills</span>
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon
            return (
              <div
                key={category.title}
                className="bg-dark-800 rounded-2xl p-8 border border-accent-500/20 hover:border-accent-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-accent-500/10"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-accent-500/10 rounded-lg">
                    <Icon size={28} className="text-accent-500" />
                  </div>
                  <h3 className="font-display text-xl font-bold">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-accent-500 font-semibold">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-dark-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-accent-500 to-purple-500 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Additional Skills Badges */}
        <div className="mt-16">
          <h3 className="text-center font-display text-2xl font-bold mb-8">
            Additional Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
             
              'Redux',

          
              'WebSockets',
              'JWT',
              'OAuth',
              'Stripe',
              'Figma',
              'Postman',
           
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-dark-700 border border-accent-500/30 rounded-full text-sm font-medium text-gray-300 hover:bg-dark-600 hover:border-accent-500 transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

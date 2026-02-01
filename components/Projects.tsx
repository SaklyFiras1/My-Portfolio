'use client'

import { ExternalLink, Github } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Image from 'next/image'

export default function Projects() {
  const projects = [
    {
      title: 'Corporate E-Learning Platform',
      description:
        'Developed an internal corporate training platform for 3S to optimize employee learning management and performance tracking. Integrated AI-powered analytics to provide personalized learning paths and deep performance insights. Designed and implemented automated CI/CD pipelines using Azure DevOps, significantly improving deployment speed, reliability, and workflow automation.',
      image:
        'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=500&fit=crop',
      tags: ['Next.js', 'NestJS', 'MongoDB', 'FastAPI', 'RabbitMQ', 'Azure DevOps', 'Docker', 'OpenAI'],
      liveUrl: '#',
      githubUrl: '#',
      screenshots: [
        '/images/32.png','/images/33.png','/images/34.png','/images/35.png','/images/36.png',
        '/images/37.png','/images/38.png','/images/39.png','/images/40.png','/images/41.png',
        '/images/42.png','/images/43.png','/images/44.png','/images/45.png','/images/46.png',
        '/images/47.png','/images/48.png','/images/49.png','/images/50.png','/images/51.png',
        '/images/52.png','/images/53.png','/images/54.png','/images/55.png','/images/56.png',
        '/images/57.png','/images/58.png','/images/59.png','/images/60.png','/images/61.png',
        '/images/62.png','/images/63.png','/images/64.png','/images/65.png','/images/66.png',
        '/images/67.png','/images/68.png','/images/69.png','/images/70.png','/images/71.png',
        '/images/72.png','/images/73.png','/images/74.png','/images/75.png','/images/76.png',
        '/images/77.png','/images/78.png','/images/79.png','/images/80.png','/images/81.png',
        '/images/82.png','/images/83.png','/images/84.png'
      ],
    },
    {
      title: 'Event Management Platform – Tunisia Telecom',
      description:
        'Designed and developed an advanced web platform dedicated to professional event orchestration using the MEAN stack (Angular, Express.js, MongoDB). The system automates logistics planning, centralizes participant data, and integrates analytical tools to improve decision-making.',
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
      tags: ['Angular', 'Express.js', 'MongoDB', 'Chart.js'],
      githubUrl: 'https://github.com/SaklyFiras1/tel',
      screenshots: ['/images/T1.png','/images/T2.png','/images/T3.png','/images/T4.png','/images/T5.png','/images/T6.png','/images/C1.png','/images/C2.png','/images/C3.png'],
    },
    {
      title: 'CV Management Web Application',
      description:
        'Designed and deployed a high-performance CV management platform based on the MVC architecture. The application streamlines recruitment by enabling intelligent profile indexing, structured MySQL data management, and a responsive Angular-based user interface.',
      image:
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop',
      tags: ['Angular', 'Express.js', 'Node.js', 'MySQL', 'Git'],
      liveUrl: '#',
      githubUrl: 'https://github.com/SaklyFiras1/Pfe-CVtheque-Frontend',
      screenshots: ['/images/11.png','/images/12.png','/images/13.png','/images/14.png','/images/15.png','/images/16.png','/images/17.png','/images/18.png','/images/19.png','/images/20.png','/images/21.png','/images/22.png','/images/23.png','/images/24.png','/images/25.png','/images/26.png','/images/27.png','/images/28.png','/images/29.png','/images/30.png'],
    },
    {
      title: 'Real-Time Chat Mobile Application',
      description:
        'Designed and developed a real-time chat mobile application using Android Studio and Firebase. Enables instant messaging, file sharing, user authentication, and contact management.',
      image:
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop',
      tags: ['Android Studio', 'Firebase'],
      liveUrl: '#',
      githubUrl: 'https://github.com/SaklyFiras1/projet-Android-studio-Chat-App-2023-',
      screenshots: ['/images/S0.png','/images/S1.png','/images/S2.png','/images/S3.png','/images/S4.png','/images/S5.png','/images/S6.png'],
    },
    {
      title: 'Agency Showcase Website',
      description:
        'Designed and deployed a professional showcase website for a service agency, presenting services with a modern, clean, and responsive design.',
      tags: ['Angular', 'EmailJS'],
      liveUrl: '#',
      githubUrl: 'https://github.com/SaklyFiras1/agency-project-Angular',
      screenshots: ['/images/home.png','/images/w1.png','/images/w2.png','/images/w3.png','/images/w4.png'],
    },
    {
      title: 'Online Movie Ticket Booking System',
      description:
        'Developed an online cinema ticket booking system allowing users to select movies, showtimes, and seats through a modern and responsive interface.',
      image:
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop',
      tags: ['.NET Framework', 'C#', 'SQL Server'],
      liveUrl: '#',
      githubUrl: 'https://github.com/SaklyFiras1/projet-.net-movieE-ticket',
      screenshots: ['/images/N1.png','/images/N2.png'],
    },
    {
      title: 'Library Management System',
      description:
        'Developed a complete library management system with an intuitive user interface. Supports book management, borrowing, users, and reservations.',
      image:
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop',
      tags: ['php','MySQL'],
      liveUrl: '#',
      githubUrl: 'https://github.com/SaklyFiras1/LIBRARY-Manegment-php',
      screenshots: ['/images/library1.png'],
    },
    {
      title: 'To-Do List Application',
      description:
        'Built a task management (To-Do List) application allowing users to create, organize, and track daily tasks using a clean and responsive interface.',
      tags: ['Angular', 'Redux'],
      liveUrl: '#',
      githubUrl: 'https://github.com/SaklyFiras1/todo-app',
      screenshots: ['/images/1.png','/images/2.png','/images/3.png','/images/4.png'],
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h3 className="text-accent-500 text-sm md:text-base font-semibold uppercase tracking-wider mb-2">
            Portfolio
          </h3>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Recent work showcasing my expertise in building modern web applications
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className="group bg-dark-800 rounded-2xl overflow-hidden border border-accent-500/20 hover:border-accent-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-accent-500/20"
            >
              {/* Image Slider */}
              <div className="relative aspect-video overflow-hidden bg-gray-100">
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  navigation
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  loop
                  className="h-full"
                >
                  {project.screenshots.map((screenshot, i) => (
                    <SwiperSlide key={i} className="flex items-center justify-center">
                      <Image
                        src={screenshot}
                        alt={`${project.title} screenshot ${i + 1}`}
                        width={800}
                        height={500}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="font-display text-2xl font-bold mb-3 group-hover:text-accent-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-accent-500/10 border border-accent-500/30 rounded-full text-xs font-medium text-accent-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.githubUrl}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border-2 border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-dark-900 font-semibold rounded-lg transition-all duration-300"
                  >
                    <Github size={18} />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
'use client'

import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-accent-500 to-purple-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-accent-500/30">
              <Image
                src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=800&h=800&fit=crop"
                alt="Developer workspace"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                width={800}
                height={800}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={true}
              />
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-6">
            <div>
              <h3 className="text-accent-500 text-sm md:text-base font-semibold uppercase tracking-wider mb-2">
                About Me
              </h3>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Turning Ideas Into{' '}
                <span className="text-gradient">Reality</span>
              </h2>
            </div>

            <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
              <p>
                I am a Software Engineer with a strong background in full-stack web and mobile development, DevOps practices, and modern application architectures. I have hands-on experience building scalable platforms using technologies such as Next.js, NestJS, Angular, Spring Boot, FastAPI, MongoDB, and MySQL. I have worked on projects involving microservices, CI/CD pipelines, cloud deployment on Azure, and containerized environments with Docker and Kubernetes. Passionate about clean code, system design, and continuous learning, I am motivated to contribute to innovative projects where I can apply my technical skills while growing as a professional engineer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
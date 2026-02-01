'use client'

import { Mail, Linkedin, Github, MessageCircle } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Form submission would be handled here. In production, connect to your email service.')
  }

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'sakly.firas3@gmail.com',
      link: 'mailto:sakly.firas3@gmail.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/saklyfiras',
      link: 'https://linkedin.com/in/saklyfiras',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/saklyfiras1',
      link: 'https://github.com/saklyfiras1',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '+216 22201987',
      link: 'https://wa.me/21622201987',
    },
  ]

  return (
    <section id="contact" className="py-20 md:py-32 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h3 className="text-accent-500 text-sm md:text-base font-semibold uppercase tracking-wider mb-2">
            Get In Touch
          </h3>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Let&apos;s Work <span className="text-gradient">Together</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind? I&apos;d love to hear about it. Drop me a message and let&apos;s create something amazing.
          </p>
        </div>

        <div className="grid lg:grid-cols-1">
          {/* Contact Info */}
          <div className="lg:col-span-4">
            <h3 className="font-display text-2xl font-bold mb-8">
              Contact Information
            </h3>

            <div className="space-y-6 mb-12">
              {contactMethods.map((method) => {
                const Icon = method.icon
                return (
                  <a
                    key={method.label}
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-dark-800 rounded-xl border border-accent-500/20 hover:border-accent-500/40 hover:bg-dark-700 transition-all group"
                  >
                    <div className="p-3 bg-accent-500/10 rounded-lg group-hover:bg-accent-500/20 transition-colors">
                      <Icon size={24} className="text-accent-500" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">
                        {method.label}
                      </div>
                      <div className="font-medium text-gray-300 group-hover:text-accent-500 transition-colors">
                        {method.value}
                      </div>
                    </div>
                  </a>
                )
              })}
            </div>

            {/* Availability */}
            <div className="bg-gradient-to-r from-accent-500/10 to-purple-500/10 rounded-2xl p-8 border border-accent-500/30">
              <h4 className="font-display text-xl font-bold mb-3">
                Available for Freelance and collaborations
              </h4>
              <p className="text-gray-400 mb-4">
                I&apos;m currently available for freelance work and new project opportunities. Let&apos;s discuss how I can help bring your ideas to life.
              </p>
              <div className="flex items-center gap-2 text-accent-500">
                <div className="w-2 h-2 bg-accent-500 rounded-full animate-pulse"></div>
                <span className="font-semibold">Open to new projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
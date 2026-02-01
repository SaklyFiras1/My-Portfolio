'use client'

import { Heart, Github, Linkedin, Mail, Twitter } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: 'https://github.com/SaklyFiras1', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/sakly-firas-473897225/', label: 'LinkedIn' },

    { icon: Mail, href: 'mailto:sakly.firas3@gmail.com', label: 'Email' },
  ]

  const footerLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="bg-dark-800 border-t border-accent-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold text-gradient mb-4">
              {'<Dev />'}
            </h3>
            <p className="text-gray-400 mb-4">
              Building modern web applications with passion and precision.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="p-2 bg-dark-700 rounded-lg hover:bg-accent-500/20 hover:text-accent-500 transition-colors"
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-accent-500 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-bold mb-4">Get in Touch</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="mailto:sakly.firas3@gmail.com" className="hover:text-accent-500 transition-colors">
                  Email : sakly.firas3@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+21696468519" className="hover:text-accent-500 transition-colors">
                 Phone 1 : +216 96 468 519
                </a>
                <br />
                    <a href="tel:+21622201987" className="hover:text-accent-500 transition-colors">
                  Phone 2 : +216 22 201 987
                </a>
              </li>
              <li className="text-gray-500">
                Available for freelance projects and collaborations.
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-accent-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Sakly Firas. All rights reserved.
            </p>
         
          </div>
        </div>
      </div>
    </footer>
  )
}

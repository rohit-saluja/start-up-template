"use client";
import { motion } from "motion/react";
import { Github, Twitter, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Pages",
      links: [
        { name: "Home", href: "#" },
        { name: "About", href: "#" },
        { name: "Features", href: "#" },
        { name: "Pricing", href: "#" },
        { name: "Contact", href: "#" },
        { name: "Blog", href: "#" }
      ]
    },
    {
      title: "Product",
      links: [
        { name: "Documentation", href: "#" },
        { name: "API Reference", href: "#" },
        { name: "Tutorials", href: "#" },
        { name: "Examples", href: "#" },
        { name: "Changelog", href: "#" },
        { name: "Status", href: "#" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Press Kit", href: "#" },
        { name: "Partners", href: "#" },
        { name: "Investors", href: "#" },
        { name: "Security", href: "#" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "Cookie Policy", href: "#" },
        { name: "GDPR", href: "#" },
        { name: "DPA", href: "#" },
        { name: "Compliance", href: "#" }
      ]
    }
  ];

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "#", label: "Email" }
  ];

  return (
    <footer id="contact" className="bg-gray-50 dark:bg-neutral-900/50 border-t border-gray-200 dark:border-neutral-800 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="relative h-[40px] w-[40px] bg-gradient-to-br from-neutral-200 to-neutral-300 dark:from-neutral-700 dark:to-neutral-800 rounded-lg flex items-center justify-center shadow-[0_10px_10px_-3px_rgba(255,255,255,.05)]">
                  <div className="bg-white rounded-full p-1.5 flex items-center justify-center w-[24px] h-[24px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <img 
                      src="/Subtract.svg" 
                      alt="Logo" 
                      className="w-6 h-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                    />
                  </div>
                </div>
                <p className="text-lg font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-neutral-300 bg-clip-text text-transparent">
                  Startup
                </p>
              </div>
              <p className="text-sm text-gray-600 dark:text-neutral-400 mb-6 max-w-sm">
                The fastest way to deploy and scale your applications. 
                Built for developers, trusted by enterprises.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="text-gray-500 dark:text-neutral-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {footerSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-gray-900 dark:text-white font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-gray-600 dark:text-neutral-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-200 dark:border-neutral-800 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 dark:text-neutral-500 text-sm">
              © 2024 Startup. All rights reserved.
            </p>
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-500 dark:text-neutral-400">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-1" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-1" />
                <span>hello@startup.com</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 pt-6 border-t border-gray-200 dark:border-neutral-800"
        >
          <div className="text-center">
            <p className="text-gray-500 dark:text-neutral-500 text-xs">
              Made with ❤️ by{" "}
              <a 
                href="https://x.com/codewithrohit" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
              >
                @rohit
              </a>
              . Deployed on our own platform in under 30 seconds.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
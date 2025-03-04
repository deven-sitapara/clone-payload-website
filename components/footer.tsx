import Link from 'next/link'
import { Github, Twitter, Linkedin, Youtube, ArrowRight, Sun, Mail, Phone, Send } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="border-t border-white/10 relative overflow-hidden">
      <div className="footer-container relative">
        {/* Large background text */}
        <div className="footer-background">
          <div className="footer-background-text">S Deven</div>
        </div>
        
        {/* Footer heading with professional black background */}
        <div className="bg-black py-16 px-4 md:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left column - Title and info */}
              <div className="text-left">
                <h2 
                  className="text-4xl md:text-5xl font-bold footer-heading mb-6"
                  data-text="Deven Sitapara"
                >
                  S Deven
                </h2>
                <p className="text-lg text-white/80 mb-8 max-w-md">
                  I'm always open to discussing product design work or partnership opportunities.
                </p>
                <div className="flex flex-col gap-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <Mail size={18} className="text-white/80" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-white/50">Email</p>
                      <a href="mailto:email@devens.me" className="text-white hover:text-white/80 transition-colors">
                        email@devens.me
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <Phone size={18} className="text-white/80" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-white/50">Phone</p>
                      <a href="tel:+919979907571" className="text-white hover:text-white/80 transition-colors">
                        +91 9979 907 571
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="social-icons">
                  <Link href="https://twitter.com" className="social-icon">
                    <Twitter size={16} />
                  </Link>
                  <Link href="https://github.com" className="social-icon">
                    <Github size={16} />
                  </Link>
                  <Link href="https://linkedin.com" className="social-icon">
                    <Linkedin size={16} />
                  </Link>
                </div>
              </div>
              
              {/* Right column - Contact form */}
              <div className="contact-form-wrapper">
                <h3 className="footer-heading mb-6">Ping me</h3>
                <form className="space-y-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full bg-transparent border border-white/20 rounded py-2.5 px-4 focus:border-white/40 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Your Email" 
                      className="w-full bg-transparent border border-white/20 rounded py-2.5 px-4 focus:border-white/40 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <textarea 
                      placeholder="Your Message" 
                      rows={4}
                      className="w-full bg-transparent border border-white/20 rounded py-2.5 px-4 focus:border-white/40 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <button 
                      type="submit" 
                      className="contact-button px-6 py-3 rounded blue-button w-full flex items-center justify-center gap-2"
                    >
                      <span className="text-white">Send Message</span>
                      <Send size={16} className="text-white" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Footer columns with vertical rulers */}
        <div className="footer-section">
          <div className="footer-column">
            <h3 className="footer-heading">Use Cases</h3>
            <div className="footer-links">
              <Link href="/cms" className="footer-link">Content Management System</Link>
              <Link href="/enterprise" className="footer-link">Enterprise App Builder</Link>
              <Link href="/ecommerce" className="footer-link">Headless E-Commerce</Link>
              <Link href="/dam" className="footer-link">Digital Asset Management</Link>
            </div>
          </div>
          
          <div className="footer-column">
            <h3 className="footer-heading">Developers</h3>
            <div className="footer-links">
              <Link href="/cloud" className="footer-link">Payload Cloud</Link>
              <Link href="/docs" className="footer-link">Documentation</Link>
              <Link href="/community" className="footer-link">Community Help</Link>
              <Link href="/roadmap" className="footer-link">Roadmap</Link>
              <Link href="/templates" className="footer-link">Templates</Link>
              <Link href="/releases" className="footer-link">Releases</Link>
            </div>
          </div>
          
          <div className="footer-column">
            <h3 className="footer-heading">Company</h3>
            <div className="footer-links">
              <Link href="/pricing" className="footer-link">Pricing</Link>
              <Link href="/enterprise" className="footer-link">Enterprise</Link>
              <Link href="/case-studies" className="footer-link">Case Studies</Link>
              <Link href="/partner" className="footer-link">Partner With Us</Link>
              <Link href="/find-partner" className="footer-link">Find a Partner</Link>
              <Link href="/blog" className="footer-link">Blog</Link>
              <Link href="/security" className="footer-link">Security</Link>
              <Link href="/compare" className="footer-link">Compare Payload</Link>
              <Link href="/terms" className="footer-link">Terms of Service</Link>
              <Link href="/privacy" className="footer-link">Privacy Policy</Link>
              <Link href="/contact" className="footer-link">Contact</Link>
            </div>
          </div>
          
          <div className="footer-column">
            <h3 className="footer-heading">Stay Connected</h3>
            <div className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="newsletter-input"
              />
              <button className="newsletter-button">
                <ArrowRight size={16} />
              </button>
            </div>
            
            <div className="social-icons">
              <Link href="https://twitter.com" className="social-icon">
                <Twitter size={16} />
              </Link>
              <Link href="https://discord.com" className="social-icon">
                <Github size={16} />
              </Link>
              <Link href="https://youtube.com" className="social-icon">
                <Youtube size={16} />
              </Link>
              <Link href="https://instagram.com" className="social-icon">
                <Linkedin size={16} />
              </Link>
            </div>
            
            <div className="theme-toggle">
              <Sun size={16} />
              <span>Light</span>
            </div>
          </div>
        </div>
        
        {/* Bottom footer with GitHub link */}
        <div className="border-t border-white/10 py-4 px-6 text-sm text-white/50">
          <Link href="https://github.com/payloadcms/payload/releases" className="hover:text-white transition-colors">
            https://github.com/payloadcms/payload/releases
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
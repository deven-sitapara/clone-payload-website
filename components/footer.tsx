import Link from 'next/link'
import { Github, Twitter, Linkedin, Youtube, ArrowRight, Sun } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 relative">
      <div className="footer-container relative">
        {/* Large background text */}
        <div className="footer-background">
          <div className="footer-background-text">Payload</div>
        </div>
        
        {/* Footer heading with background effect */}
        <div className="py-16 text-center">
          <h2 
            className="text-4xl md:text-4xl font-bold footer-heading"
            data-text="Deven Sitapara"
          >
            Deven Sitapara
          </h2>
          <p
            className="text-1xl md:text-1xl font-bold "
            data-text="Dont hasistate to contact me">
            Dont hasistate to contact me <br/>
            email@devens.me <br/>
            WhatsApp: 91-9979907571<br/>
            Skype: dev.srs 

          </p>
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
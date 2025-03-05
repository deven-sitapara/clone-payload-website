import Link from 'next/link'
import { Github, Twitter, Linkedin, Youtube, ArrowRight, Sun, Mail, Phone, Send, X } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="border-t border-white/10 relative overflow-hidden bg-black">
        {/* Large background text - adjusted to remove bottom space */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center z-0 pointer-events-none overflow-hidden">
          <div 
            className="text-[20vw] font-black text-white/[0.08] whitespace-nowrap select-none leading-[0.8] -mb-2"
          >
            S Deven
          </div>
        </div>
      <div className="relative overflow-hidden">
        
        {/* Content positioned above the background text with higher z-index */}
        <div className="relative z-10">
          {/* Footer heading with professional black background */}
          <div className="py-16 px-4 md:px-8">
            <div className="container mx-auto max-w-6xl">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left column - Title and info */}
                <div className="text-left">
                  <h2 
                    className="text-4xl md:text-5xl font-bold relative inline-block mb-6 uppercase text-white"
                  >
                    S Deven
                  </h2>
                  <p className="text-lg text-white/80 mb-8 max-w-md">
                    I'm always open to discussing product requirement or partnership opportunities.
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
                  
                  <div className="flex gap-4 mt-6">
                    <Link href="https://twitter.com" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                      <X size={16} />
                    </Link>
                    <Link href="https://github.com" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                      <Github size={16} />
                    </Link>
                    <Link href="https://linkedin.com" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                      <Linkedin size={16} />
                    </Link>
                  </div>
                </div>
                
                {/* Right column - Contact form */}
                <div className="relative bg-white/[0.03] rounded-lg p-8 border border-white/10 backdrop-blur-md transition-all hover:-translate-y-1 hover:shadow-[0_10px_30px_-15px_rgba(0,0,0,0.5)]">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                  <h3 className="uppercase text-xs tracking-widest mb-6 font-medium text-white/50">Ping me</h3>
                  <form className="space-y-4">
                    <div>
                      <input 
                        type="text" 
                        placeholder="Your Name" 
                        className="w-full bg-transparent border border-white/20 rounded py-2.5 px-4 focus:border-white/40 focus:outline-none transition-colors focus:bg-gradient-to-b focus:from-white/[0.03] focus:to-transparent focus:shadow-[0_4px_12px_rgba(0,0,0,0.1)]"
                      />
                    </div>
                    <div>
                      <input 
                        type="email" 
                        placeholder="Your Email" 
                        className="w-full bg-transparent border border-white/20 rounded py-2.5 px-4 focus:border-white/40 focus:outline-none transition-colors focus:bg-gradient-to-b focus:from-white/[0.03] focus:to-transparent focus:shadow-[0_4px_12px_rgba(0,0,0,0.1)]"
                      />
                    </div>
                    <div>
                      <textarea 
                        placeholder="Your Message" 
                        rows={4}
                        className="w-full bg-transparent border border-white/20 rounded py-2.5 px-4 focus:border-white/40 focus:outline-none transition-colors focus:bg-gradient-to-b focus:from-white/[0.03] focus:to-transparent focus:shadow-[0_4px_12px_rgba(0,0,0,0.1)]"
                      />
                    </div>
                    <div>
                      <button 
                        type="submit" 
                        className="px-6 py-3 rounded w-full flex items-center justify-center gap-2 relative overflow-hidden z-10 bg-gradient-to-r from-blue-500 to-blue-600/80 hover:before:w-full"
                      >
                        <span className="text-white relative z-10">Send Message</span>
                        <Send size={16} className="text-white relative z-10" />
                        <span className="absolute top-0 left-0 w-0 h-full bg-black/20 transition-all duration-300 ease-out"></span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* Footer columns with vertical rulers */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-white/10">
            <div className="p-8 border-r border-white/10 md:last:border-r-0 md:nth-child(2):border-r-0 lg:nth-child(2):border-r border-b border-white/10 md:border-b md:last:border-b-0">
              <h3 className="uppercase text-xs tracking-widest mb-6 text-white/50">Use Cases</h3>
              <div className="flex flex-col gap-3">
                <Link href="/cms" className="text-white hover:text-white/70 transition-colors">Content Management System</Link>
                <Link href="/enterprise" className="text-white hover:text-white/70 transition-colors">Enterprise App Builder</Link>
                <Link href="/ecommerce" className="text-white hover:text-white/70 transition-colors">Headless E-Commerce</Link>
                <Link href="/dam" className="text-white hover:text-white/70 transition-colors">Digital Asset Management</Link>
              </div>
            </div>
            
            <div className="p-8 border-r border-white/10 md:last:border-r-0 lg:border-r border-b border-white/10 md:border-b md:last:border-b-0">
              <h3 className="uppercase text-xs tracking-widest mb-6 text-white/50">Developers</h3>
              <div className="flex flex-col gap-3">
                <Link href="/cloud" className="text-white hover:text-white/70 transition-colors">Payload Cloud</Link>
                <Link href="/docs" className="text-white hover:text-white/70 transition-colors">Documentation</Link>
                <Link href="/community" className="text-white hover:text-white/70 transition-colors">Community Help</Link>
                <Link href="/roadmap" className="text-white hover:text-white/70 transition-colors">Roadmap</Link>
                <Link href="/templates" className="text-white hover:text-white/70 transition-colors">Templates</Link>
                <Link href="/releases" className="text-white hover:text-white/70 transition-colors">Releases</Link>
              </div>
            </div>
            
            <div className="p-8 border-r border-white/10 md:last:border-r-0 md:nth-child(4):border-r-0 border-b border-white/10 md:border-b md:last:border-b-0">
              <h3 className="uppercase text-xs tracking-widest mb-6 text-white/50">Company</h3>
              <div className="flex flex-col gap-3">
                <Link href="/pricing" className="text-white hover:text-white/70 transition-colors">Pricing</Link>
                <Link href="/enterprise" className="text-white hover:text-white/70 transition-colors">Enterprise</Link>
                <Link href="/case-studies" className="text-white hover:text-white/70 transition-colors">Case Studies</Link>
                <Link href="/partner" className="text-white hover:text-white/70 transition-colors">Partner With Us</Link>
                <Link href="/find-partner" className="text-white hover:text-white/70 transition-colors">Find a Partner</Link>
                <Link href="/blog" className="text-white hover:text-white/70 transition-colors">Blog</Link>
              </div>
            </div>
            
            <div className="p-8">
              <h3 className="uppercase text-xs tracking-widest mb-6 text-white/50">Stay Connected</h3>
              <div className="flex border border-white/20">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-transparent border-none py-3 px-4 text-white flex-grow focus:outline-none"
                />
                <button className="border-none border-l border-white/20 px-4 text-white">
                  <ArrowRight size={16} />
                </button>
              </div>
              
              <div className="flex gap-4 mt-6">
                <Link href="https://twitter.com" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                  <Twitter size={16} />
                </Link>
                <Link href="https://github.com" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                  <Github size={16} />
                </Link>
                <Link href="https://youtube.com" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                  <Youtube size={16} />
                </Link>
                <Link href="https://linkedin.com" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                  <Linkedin size={16} />
                </Link>
              </div>
              
              <div className="flex items-center gap-2 mt-6 text-white/50">
                <Sun size={16} />
                <span>Light</span>
              </div>
            </div>
          </div>
          
          {/* Bottom footer with GitHub link */}
          <div className="border-t border-white/10 py-4 px-6 text-sm text-white/50">
            <Link href="https://github.com/payloadcms/payload/releases" className="hover:text-white transition-colors">
              https://github.com/deven-sitapara
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
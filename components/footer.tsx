"use client";
import Link from 'next/link'
import { Github, Twitter, Linkedin, Youtube, Sun, Mail, Phone, X } from 'lucide-react'
import Form from '@/form';
import StayConnected from '@/stayConnected';

// Add proper TypeScript interfaces

const Footer = () => {

  return (
    <footer className="relative overflow-hidden bg-black border-t border-white/10">
        {/* Large background text - adjusted to remove bottom space */}
        <div className="absolute bottom-0 left-0 right-0 z-0 flex justify-center overflow-hidden pointer-events-none">
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
          <div className="px-4 py-16 md:px-8">
            <div className="container max-w-6xl mx-auto">
              <div className="grid items-center gap-12 md:grid-cols-2">
                {/* Left column - Title and info */}
                <div className="text-left">
                  <h2 
                    className="relative inline-block mb-6 text-4xl font-bold text-white uppercase md:text-5xl"
                  >
                    S Deven
                  </h2>
                  <p className="max-w-md mb-8 text-lg text-white/80">
                    I&apos;m always open to discussing product requirement or partnership opportunities.
                  </p>
                  <div className="flex flex-col gap-4 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10">
                        <Mail size={18} className="text-white/80" />
                      </div>
                      <div>
                        <p className="text-xs tracking-wider uppercase text-white/50">Email</p>
                        <a href="mailto:hello@devens.me" className="text-white transition-colors hover:text-white/80">
                          hello@devens.me
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10">
                        <Phone size={18} className="text-white/80" />
                      </div>
                      <div>
                        <p className="text-xs tracking-wider uppercase text-white/50">Phone</p>
                        <a href="https://wa.link/7ri7tw" className="text-white transition-colors hover:text-white/80">
                          +91 9979 907 571
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 mt-6">
                    <Link href="https://twitter.com/deven_sitapara" className="flex items-center justify-center w-8 h-8 transition-colors rounded-full bg-white/10 hover:bg-white/20">
                      <X size={16} />
                    </Link>
                    <Link href="https://github.com/deven-sitapara" className="flex items-center justify-center w-8 h-8 transition-colors rounded-full bg-white/10 hover:bg-white/20">
                      <Github size={16} />
                    </Link>
                    <Link href="https://linkedin.com/in/deven-sitapara" className="flex items-center justify-center w-8 h-8 transition-colors rounded-full bg-white/10 hover:bg-white/20">
                      <Linkedin size={16} />
                    </Link>
                  </div>
                </div>
                
                {/* Right column - Contact form */}
                <div className="w-full max-w-md mx-auto px-4 relative bg-white/[0.03] rounded-lg p-8 border border-white/10 backdrop-blur-md 
                transition-all  ">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r  "></div>
                  <h3 className="mb-6 text-xs font-medium tracking-widest uppercase text-white/50">Ping me</h3>
                 <div className="flex flex-col gap-6">
                   <Form></Form>
                 </div>
                 </div>
              </div>
            </div>
          </div>

          {/* Footer columns with vertical rulers */}
          <div className="grid grid-cols-1 gap-0 border-t md:grid-cols-2 lg:grid-cols-4 border-white/10">
            <div className="p-8 border-r border-white/10 md:last:border-r-0 md:nth-child(2):border-r-0 lg:nth-child(2):border-r border-b border-white/10 md:border-b md:last:border-b-0">
              <h3 className="mb-6 text-xs tracking-widest uppercase text-white/50">Use Cases</h3>
              <div className="flex flex-col gap-3">
                <Link href="#" className="text-white transition-colors hover:text-white/70">Content Management System</Link>
                <Link href="#" className="text-white transition-colors hover:text-white/70">Enterprise App</Link>
                <Link href="#" className="text-white transition-colors hover:text-white/70">E-Commerce</Link>
                <Link href="#" className="text-white transition-colors hover:text-white/70">SaaS Application</Link>
              </div>
            </div>
            
            <div className="p-8 border-b border-r border-white/10 md:last:border-r-0 lg:border-r md:border-b md:last:border-b-0">
              <h3 className="mb-6 text-xs tracking-widest uppercase text-white/50">Development</h3>
              <div className="flex flex-col gap-3">
                <Link href="/" className="text-white transition-colors hover:text-white/70">Custom Software Development</Link>
                <Link href="/" className="text-white transition-colors hover:text-white/70">Third Party Integration</Link>
                <Link href="/" className="text-white transition-colors hover:text-white/70">Laravel Development</Link>
                <Link href="/" className="text-white transition-colors hover:text-white/70">Nodejs Development</Link>
                <Link href="/" className="text-white transition-colors hover:text-white/70">Python Development</Link>
                <Link href="/" className="text-white transition-colors hover:text-white/70">Django Development</Link>
              </div>
            </div>
            
            <div className="p-8 border-r border-white/10 md:last:border-r-0 md:nth-child(4):border-r-0 border-b border-white/10 md:border-b md:last:border-b-0">
              <h3 className="mb-6 text-xs tracking-widest uppercase text-white/50">Help</h3>
              <div className="flex flex-col gap-3">
                <Link href="/" className="text-white transition-colors hover:text-white/70">Architecture</Link>
                <Link href="/" className="text-white transition-colors hover:text-white/70">Support</Link>
                <Link href="/-studies" className="text-white transition-colors hover:text-white/70">Optimization</Link>
                <Link href="/" className="text-white transition-colors hover:text-white/70">Partner With Us</Link>
                <Link href="/-partner" className="text-white transition-colors hover:text-white/70">Product Management</Link>
                <Link href="/" className="text-white transition-colors hover:text-white/70">Consulting</Link>
              </div>
            </div>
            
            <div className="p-8">
              <h3 className="mb-6 text-xs tracking-widest uppercase text-white/50">Stay Connected</h3>
              
              <StayConnected></StayConnected>
              
              <div className="flex gap-4 mt-6">
                <Link href="https://twitter.com" className="flex items-center justify-center w-8 h-8 transition-colors rounded-full bg-white/10 hover:bg-white/20">
                  <Twitter size={16} />
                </Link>
                <Link href="https://github.com" className="flex items-center justify-center w-8 h-8 transition-colors rounded-full bg-white/10 hover:bg-white/20">
                  <Github size={16} />
                </Link>
                <Link href="https://youtube.com" className="flex items-center justify-center w-8 h-8 transition-colors rounded-full bg-white/10 hover:bg-white/20">
                  <Youtube size={16} />
                </Link>
                <Link href="https://linkedin.com" className="flex items-center justify-center w-8 h-8 transition-colors rounded-full bg-white/10 hover:bg-white/20">
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
          <div className="px-6 py-4 text-sm border-t border-white/10 text-white/50">
            <Link href="https://github.com/payloadcms/payload/releases" className="transition-colors hover:text-white">
              https://github.com/deven-sitapara
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
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
                        <a href="mailto:email@devens.me" className="text-white transition-colors hover:text-white/80">
                          email@devens.me
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10">
                        <Phone size={18} className="text-white/80" />
                      </div>
                      <div>
                        <p className="text-xs tracking-wider uppercase text-white/50">Phone</p>
                        <a href="tel:+919979907571" className="text-white transition-colors hover:text-white/80">
                          +91 9979 907 571
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 mt-6">
                    <Link href="https://twitter.com" className="flex items-center justify-center w-8 h-8 transition-colors rounded-full bg-white/10 hover:bg-white/20">
                      <X size={16} />
                    </Link>
                    <Link href="https://github.com" className="flex items-center justify-center w-8 h-8 transition-colors rounded-full bg-white/10 hover:bg-white/20">
                      <Github size={16} />
                    </Link>
                    <Link href="https://linkedin.com" className="flex items-center justify-center w-8 h-8 transition-colors rounded-full bg-white/10 hover:bg-white/20">
                      <Linkedin size={16} />
                    </Link>
                  </div>
                </div>
                
                {/* Right column - Contact form */}
                <div className="relative bg-white/[0.03] rounded-lg p-8 border border-white/10 backdrop-blur-md transition-all hover:-translate-y-1 hover:shadow-[0_10px_30px_-15px_rgba(0,0,0,0.5)]">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                  <h3 className="mb-6 text-xs font-medium tracking-widest uppercase text-white/50">Ping me</h3>
                 
                 <Form></Form>
                </div>
              </div>
            </div>
          </div>

          {/* Footer columns with vertical rulers */}
          <div className="grid grid-cols-1 gap-0 border-t md:grid-cols-2 lg:grid-cols-4 border-white/10">
            <div className="p-8 border-r border-white/10 md:last:border-r-0 md:nth-child(2):border-r-0 lg:nth-child(2):border-r border-b border-white/10 md:border-b md:last:border-b-0">
              <h3 className="mb-6 text-xs tracking-widest uppercase text-white/50">Use Cases</h3>
              <div className="flex flex-col gap-3">
                <Link href="/cms" className="text-white transition-colors hover:text-white/70">Content Management System</Link>
                <Link href="/enterprise" className="text-white transition-colors hover:text-white/70">Enterprise App Builder</Link>
                <Link href="/ecommerce" className="text-white transition-colors hover:text-white/70">Headless E-Commerce</Link>
                <Link href="/dam" className="text-white transition-colors hover:text-white/70">Digital Asset Management</Link>
              </div>
            </div>
            
            <div className="p-8 border-b border-r border-white/10 md:last:border-r-0 lg:border-r md:border-b md:last:border-b-0">
              <h3 className="mb-6 text-xs tracking-widest uppercase text-white/50">Developers</h3>
              <div className="flex flex-col gap-3">
                <Link href="/cloud" className="text-white transition-colors hover:text-white/70">Payload Cloud</Link>
                <Link href="/docs" className="text-white transition-colors hover:text-white/70">Documentation</Link>
                <Link href="/community" className="text-white transition-colors hover:text-white/70">Community Help</Link>
                <Link href="/roadmap" className="text-white transition-colors hover:text-white/70">Roadmap</Link>
                <Link href="/templates" className="text-white transition-colors hover:text-white/70">Templates</Link>
                <Link href="/releases" className="text-white transition-colors hover:text-white/70">Releases</Link>
              </div>
            </div>
            
            <div className="p-8 border-r border-white/10 md:last:border-r-0 md:nth-child(4):border-r-0 border-b border-white/10 md:border-b md:last:border-b-0">
              <h3 className="mb-6 text-xs tracking-widest uppercase text-white/50">Company</h3>
              <div className="flex flex-col gap-3">
                <Link href="/pricing" className="text-white transition-colors hover:text-white/70">Pricing</Link>
                <Link href="/enterprise" className="text-white transition-colors hover:text-white/70">Enterprise</Link>
                <Link href="/case-studies" className="text-white transition-colors hover:text-white/70">Case Studies</Link>
                <Link href="/partner" className="text-white transition-colors hover:text-white/70">Partner With Us</Link>
                <Link href="/find-partner" className="text-white transition-colors hover:text-white/70">Find a Partner</Link>
                <Link href="/blog" className="text-white transition-colors hover:text-white/70">Blog</Link>
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
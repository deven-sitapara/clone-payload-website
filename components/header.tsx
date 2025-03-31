"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react'

// Add proper TypeScript interfaces
interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  hasDropdown?: boolean;
}

interface MobileNavLinkProps {
  href: string;
  children: React.ReactNode;
}

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Extract inline handler to named function with "handle" prefix
  const handleToggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Night cloth background with animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.8)_100%)] opacity-50 pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] bg-[length:50px_50px] opacity-10 pointer-events-none"></div>
        <motion.div 
          className="absolute inset-0"
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ 
            duration: 20,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
          }}
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80")',
            backgroundSize: '200% 200%',
            opacity: 0.1,
          }}
        />
      </div>

      {/* Announcement banner */}
      <div className="relative overflow-hidden border border-white/10 bg-background/80 backdrop-blur-sm py-2 px-4 text-center text-sm">
        <div className="absolute top-0 left-[-100%] w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-[slide_3s_linear_infinite]"></div>
        <Link href="m" className="inline-flex items-center gap-2 hover:text-white/80 transition-colors">
          <span className="font-mono">contat: hello@devens.me</span>
          <ArrowRight size={14} />
        </Link>
      </div>

      {/* Main navigation */}
      <div className={`relative border-b border-white/10 transition-all ${isScrolled ? 'bg-background/80 backdrop-blur-md' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <span className="text-2xl font-bold">S Deven</span>
              </Link>
              <nav className="hidden md:ml-10 md:flex md:items-center md:space-x-8">
                <NavLink href="/">Services</NavLink>
                <NavLink href="/">Projects</NavLink>
                <NavLink href="/" hasDropdown>Blog</NavLink>
                <NavLink href="/" >Contact</NavLink>
              </nav>
            </div>
            <div className="hidden md:flex md:items-center md:space-x-4">
              <Link href="mailto:hello@devens.me" className="px-4 py-2 rounded-md border border-white/20 hover:border-white/40 transition-colors">
                Schedule a demo
              </Link>
              <Link 
                href="/"
                className="relative px-4 py-2 rounded-md overflow-hidden z-10 group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600/80 -z-10"></span>
                <span className="absolute top-0 left-0 w-0 h-full bg-black/20 transition-all duration-300 ease-out group-hover:w-full -z-10"></span>
                <span className="text-white relative z-10">Get started</span>
              </Link>
            </div>
            <div className="flex md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/10"
                onClick={handleToggleMobileMenu}
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background/95 backdrop-blur-md border-b border-white/10">
          <MobileNavLink href="/">Features</MobileNavLink>
          <MobileNavLink href="/">Documentation</MobileNavLink>
          <MobileNavLink href="/">Pricing</MobileNavLink>
          <MobileNavLink href="/">Blog</MobileNavLink>
          <MobileNavLink href="/">Community</MobileNavLink>
          <div className="pt-4 flex flex-col space-y-3">
            <Link href="/" className="block px-3 py-2 rounded-md border border-white/20 text-center">
              Schedule a demo
            </Link>
            <Link 
              href="/" 
              className="block px-3 py-2 rounded-md text-center relative overflow-hidden z-10 group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600/80 -z-10"></span>
              <span className="absolute top-0 left-0 w-0 h-full bg-black/20 transition-all duration-300 ease-out group-hover:w-full -z-10"></span>
              <span className="text-white relative z-10">Get started</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

const NavLink = ({ href, children, hasDropdown = false }: NavLinkProps) => (
  <Link 
    href={href}
    className="text-white/80 hover:text-white px-3 py-2 text-sm font-medium transition-colors flex items-center"
  >
    {children}
    {hasDropdown && <ChevronDown size={16} className="ml-1" />}
  </Link>
)

const MobileNavLink = ({ href, children }: MobileNavLinkProps) => (
  <Link 
    href={href}
    className="text-white/80 hover:text-white block px-3 py-2 text-base font-medium"
  >
    {children}
  </Link>
)

export default Header
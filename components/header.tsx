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
              <Link href="/" className="flex-shrink-0" title='Devens Logo'>
                <svg  data-logo="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 247 41" className="h-8">
                    <g id="logogram" transform="translate(0, 0)"><path d="M37.603 7.96047L31.641 13.9225C30.687 10.9935 27.934 8.87646 24.686 8.87646C22.746 8.87646 20.886 9.64747 19.514 11.0185L10.142 20.3915C8.77 21.7625 8 23.6235 8 25.5625C8 29.6025 11.274 32.8765 15.313 32.8765C17.253 32.8765 19.113 32.1065 20.485 30.7345L45.858 5.36147C48.729 2.49047 52.624 0.876465 56.686 0.876465C62.114 0.876465 66.883 3.70147 69.603 7.96047L63.641 13.9225C62.687 10.9935 59.933 8.87646 56.686 8.87646C54.746 8.87646 52.886 9.64747 51.514 11.0185L32.625 29.9085L26.142 36.3915C23.27 39.2635 19.375 40.8765 15.313 40.8765C6.856 40.8765 0 34.0205 0 25.5625C0 21.5015 1.613 17.6065 4.485 14.7345L13.858 5.36147C16.729 2.49047 20.624 0.876465 24.686 0.876465C30.114 0.876465 34.883 3.70147 37.603 7.96047ZM77.858 5.36147C80.729 2.49047 84.624 0.876465 88.686 0.876465C97.144 0.876465 104 7.73247 104 16.1905C104 20.2515 102.387 24.1465 99.514 27.0185L90.142 36.3915C87.27 39.2635 83.375 40.8765 79.313 40.8765C73.885 40.8765 69.117 38.0525 66.397 33.7935L72.358 27.8315C73.313 30.7605 76.066 32.8765 79.313 32.8765C81.253 32.8765 83.113 32.1065 84.485 30.7345L93.858 21.3615C95.229 19.9905 96 18.1305 96 16.1905C96 12.1515 92.725 8.87646 88.686 8.87646C86.746 8.87646 84.886 9.64747 83.514 11.0185L58.142 36.3915C55.27 39.2635 51.375 40.8765 47.313 40.8765C41.885 40.8765 37.117 38.0525 34.397 33.7935L40.359 27.8325C41.313 30.7605 44.066 32.8765 47.313 32.8765C49.253 32.8765 51.113 32.1065 52.485 30.7345L77.858 5.36147Z" fill="#FFF"/></g>
                    <g id="logotype" transform="translate(109, 7)"><path fill="#fff" d="M16.25 27.10L16.25 27.10L9.67 27.10L9.67 22.61L16.01 22.61Q18.47 22.61 20.13 21.73Q21.80 20.86 22.64 19.03Q23.47 17.20 23.47 14.35L23.47 14.35Q23.47 11.51 22.63 9.69Q21.78 7.87 20.13 7.00Q18.48 6.13 16.04 6.13L16.04 6.13L9.55 6.13L9.55 1.64L16.35 1.64Q20.18 1.64 22.94 3.17Q25.70 4.70 27.18 7.54Q28.67 10.39 28.67 14.35L28.67 14.35Q28.67 18.33 27.18 21.19Q25.70 24.04 22.91 25.57Q20.12 27.10 16.25 27.10ZM7.31 1.64L12.52 1.64L12.52 27.10L7.31 27.10L7.31 1.64ZM41.93 27.48L41.93 27.48Q39.01 27.48 36.89 26.28Q34.77 25.08 33.64 22.88Q32.50 20.67 32.50 17.65L32.50 17.65Q32.50 14.69 33.63 12.47Q34.76 10.25 36.82 9.00Q38.89 7.75 41.68 7.75L41.68 7.75Q43.56 7.75 45.18 8.35Q46.80 8.95 48.03 10.16Q49.27 11.36 49.96 13.17Q50.65 14.98 50.65 17.44L50.65 17.44L50.65 18.88L34.60 18.88L34.60 15.67L48.14 15.67L45.74 16.52Q45.74 15.03 45.29 13.93Q44.84 12.83 43.94 12.22Q43.04 11.62 41.71 11.62L41.71 11.62Q40.40 11.62 39.46 12.23Q38.53 12.85 38.05 13.90Q37.58 14.95 37.58 16.30L37.58 16.30L37.58 18.57Q37.58 20.23 38.13 21.36Q38.69 22.49 39.69 23.05Q40.69 23.61 42.02 23.61L42.02 23.61Q42.92 23.61 43.66 23.36Q44.39 23.10 44.92 22.60Q45.44 22.09 45.71 21.36L45.71 21.36L50.36 22.23Q49.90 23.80 48.75 24.99Q47.61 26.18 45.89 26.83Q44.17 27.48 41.93 27.48ZM66.20 27.10L60.38 27.10L53.34 7.99L58.79 7.99L62.00 17.91Q62.58 19.77 63.02 21.67Q63.45 23.56 63.91 25.60L63.91 25.60L62.82 25.60Q63.26 23.56 63.69 21.67Q64.12 19.77 64.70 17.91L64.70 17.91L67.88 7.99L73.26 7.99L66.20 27.10ZM85.45 27.48L85.45 27.48Q82.53 27.48 80.41 26.28Q78.29 25.08 77.15 22.88Q76.02 20.67 76.02 17.65L76.02 17.65Q76.02 14.69 77.14 12.47Q78.27 10.25 80.34 9.00Q82.41 7.75 85.19 7.75L85.19 7.75Q87.07 7.75 88.70 8.35Q90.32 8.95 91.55 10.16Q92.78 11.36 93.47 13.17Q94.17 14.98 94.17 17.44L94.17 17.44L94.17 18.88L78.12 18.88L78.12 15.67L91.65 15.67L89.26 16.52Q89.26 15.03 88.81 13.93Q88.35 12.83 87.46 12.22Q86.56 11.62 85.23 11.62L85.23 11.62Q83.91 11.62 82.98 12.23Q82.05 12.85 81.57 13.90Q81.09 14.95 81.09 16.30L81.09 16.30L81.09 18.57Q81.09 20.23 81.65 21.36Q82.20 22.49 83.20 23.05Q84.20 23.61 85.54 23.61L85.54 23.61Q86.44 23.61 87.18 23.36Q87.91 23.10 88.43 22.60Q88.95 22.09 89.23 21.36L89.23 21.36L93.87 22.23Q93.41 23.80 92.27 24.99Q91.12 26.18 89.41 26.83Q87.69 27.48 85.45 27.48ZM103.64 16.04L103.64 16.04L103.64 27.10L98.51 27.10L98.51 7.99L103.35 7.99L103.43 12.76L103.12 12.76Q103.88 10.37 105.40 9.06Q106.93 7.75 109.36 7.75L109.36 7.75Q111.34 7.75 112.81 8.62Q114.28 9.48 115.10 11.10Q115.92 12.71 115.92 14.95L115.92 14.95L115.92 27.10L110.80 27.10L110.80 15.84Q110.80 14.06 109.88 13.05Q108.97 12.04 107.34 12.04L107.34 12.04Q106.27 12.04 105.42 12.51Q104.58 12.98 104.11 13.87Q103.64 14.76 103.64 16.04ZM128.73 27.48L128.73 27.48Q126.42 27.48 124.64 26.82Q122.86 26.16 121.74 24.90Q120.61 23.65 120.28 21.87L120.28 21.87L125.05 21.05Q125.43 22.38 126.37 23.05Q127.31 23.72 128.88 23.72L128.88 23.72Q130.33 23.72 131.19 23.16Q132.04 22.61 132.04 21.75L132.04 21.75Q132.04 21.00 131.44 20.52Q130.83 20.04 129.58 19.79L129.58 19.79L126.28 19.10Q123.51 18.54 122.15 17.18Q120.78 15.82 120.78 13.68L120.78 13.68Q120.78 11.84 121.79 10.51Q122.80 9.19 124.59 8.47Q126.39 7.75 128.81 7.75L128.81 7.75Q131.07 7.75 132.73 8.38Q134.38 9.00 135.41 10.15Q136.43 11.29 136.78 12.85L136.78 12.85L132.23 13.65Q131.94 12.68 131.11 12.05Q130.28 11.43 128.88 11.43L128.88 11.43Q127.62 11.43 126.76 11.96Q125.91 12.49 125.91 13.36L125.91 13.36Q125.91 14.09 126.46 14.59Q127.02 15.09 128.37 15.36L128.37 15.36L131.80 16.04Q134.57 16.61 135.92 17.88Q137.27 19.15 137.27 21.20L137.27 21.20Q137.27 23.08 136.18 24.49Q135.08 25.90 133.16 26.69Q131.24 27.48 128.73 27.48Z"/></g>
                </svg>
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
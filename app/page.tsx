"use client"

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Database, Code, Layers, Settings, Users, Shield, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Home() {
  const [activeFeature, setActiveFeature] = useState(0)
  const [activeUseCase, setActiveUseCase] = useState(3) // Default to Digital Asset Management
  
  // Auto-rotate features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col">
      {/* Hero section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Grid background */}
        <div className="absolute inset-0 grid-background"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              The most powerful headless CMS
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-white/70 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Build scalable, customizable content management systems with the tools developers love.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link href="/get-started" className="inline-flex items-center justify-center h-12 px-6 font-medium rounded-md blue-button">
                <span className="text-white">Get Started</span>
                <ArrowRight size={16} className="ml-2 text-white" />
              </Link>
              <Link href="/demo" className="inline-flex items-center justify-center h-12 px-6 font-medium rounded-md border border-white/20 hover:border-white/40 transition-colors">
                <span>Schedule a Demo</span>
                <ExternalLink size={16} className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Announcement banner */}
      <section className="py-4 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <Link href="/whats-new" className="announcement-link snake-border">
              <span className="font-mono">See what's new in 3.0</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Brands section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-12">Trusted by innovative companies</h2>
          <div className="brand-grid max-w-6xl mx-auto">
            {brands.map((brand, index) => (
              <div key={index} className="brand-item">
                <Image 
                  src={brand.logo} 
                  alt={brand.name} 
                  width={100} 
                  height={40} 
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Powerful features for developers</h2>
            <p className="text-lg text-white/70">
              Everything you need to build powerful content management systems without sacrificing developer experience.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Feature tabs */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`feature-card p-6 rounded-lg cursor-pointer transition-all ${activeFeature === index ? 'bg-secondary' : 'bg-secondary/30 hover:bg-secondary/50'}`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-1">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-white/70">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Feature image */}
            <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden border border-white/10">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className={`absolute inset-0 transition-opacity duration-500 ${activeFeature === index ? 'opacity-100' : 'opacity-0'}`}
                >
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover feature-image"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use cases section */}
      <section className="py-24 bg-black relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-lg mb-4">Use Payload to build anything. Or everything.</p>
              
              <div className="space-y-8">
                {useCases.map((useCase, index) => (
                  <h2 
                    key={index}
                    className={`text-4xl md:text-5xl font-bold use-case-item ${activeUseCase === index ? 'active' : 'text-gray-400'}`}
                    onClick={() => setActiveUseCase(index)}
                  >
                    {useCase.title.split('\n').map((line, i) => (
                      <span key={i} className="block">{line}</span>
                    ))}
                  </h2>
                ))}
              </div>
              
              <div className="mt-12">
                <Link href="/demo" className="cta-button inline-flex items-center px-6 py-3 border border-white/20 rounded-sm text-white hover:border-white/40 transition-colors">
                  <span>Schedule a demo</span>
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
            
            <div className="relative h-[500px]">
              {useCases.map((useCase, index) => (
                <div 
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ${activeUseCase === index ? 'opacity-100' : 'opacity-0'}`}
                >
                  <Image
                    src={useCase.image}
                    alt={useCase.title}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-24 bg-[hsl(var(--payload-blue))/10 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to build something amazing?</h2>
            <p className="text-lg text-white/70 mb-10">
              Join thousands of developers building better content management systems with Payload.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/get-started" className="inline-flex items-center justify-center h-12 px-6 font-medium rounded-md blue-button">
                <span className="text-white">Get started for free</span>
              </Link>
              <Link href="/docs" className="inline-flex items-center justify-center h-12 px-6 font-medium rounded-md border border-white/20 hover:border-white/40 transition-colors cta-button">
                <span>View documentation</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const brands = [
  {
    name: 'Kang',
    logo: 'https://placehold.co/200x80/000000/FFFFFF?text=Kang'
  },
  {
    name: 'Bugatti',
    logo: 'https://placehold.co/200x80/000000/FFFFFF?text=BUGATTI'
  },
  {
    name: 'Accenture',
    logo: 'https://placehold.co/200x80/000000/FFFFFF?text=accenture'
  },
  {
    name: 'Disney',
    logo: 'https://placehold.co/200x80/000000/FFFFFF?text=Disney'
  },
  {
    name: 'Salesforce',
    logo: 'https://placehold.co/200x80/000000/FFFFFF?text=salesforce'
  },
  {
    name: 'Microsoft',
    logo: 'https://placehold.co/200x80/000000/FFFFFF?text=Microsoft'
  }
]

const features = [
  {
    title: 'GraphQL & REST APIs',
    description: 'Automatically generated APIs that you can customize to fit your needs.',
    icon: <Database size={24} className="text-[hsl(var(--payload-blue))]" />,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80'
  },
  {
    title: 'Developer-First',
    description: 'Built with TypeScript and React for a modern development experience.',
    icon: <Code size={24} className="text-[hsl(var(--payload-blue))]" />,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80'
  },
  {
    title: 'Flexible Architecture',
    description: 'Customize every aspect of your CMS to fit your specific requirements.',
    icon: <Layers size={24} className="text-[hsl(var(--payload-blue))]" />,
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80'
  },
  {
    title: 'Powerful Admin UI',
    description: 'Beautiful and intuitive admin interface that your content editors will love.',
    icon: <Settings size={24} className="text-[hsl(var(--payload-blue))]" />,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80'
  },
  {
    title: 'Authentication & Access Control',
    description: 'Built-in user management with granular access control.',
    icon: <Users size={24} className="text-[hsl(var(--payload-blue))]" />,
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80'
  },
  {
    title: 'Enterprise-Grade Security',
    description: 'Secure by default with features like CSRF protection and rate limiting.',
    icon: <Shield size={24} className="text-[hsl(var(--payload-blue))]" />,
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80'
  }
]

const useCases = [
  {
    title: 'Headless CMS',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Headless\neCommerce',
    image: 'https://images.unsplash.com/photo-1556742031-c6961e8560b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Enterprise App\nBuilder',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Digital Asset\nManagement',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
]
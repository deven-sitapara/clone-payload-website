"use client"

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Database, Code, Layers, Settings, Users, Shield, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Home() {
  const [activeFeature, setActiveFeature] = useState(0)
  const [activeExperience, setActiveExperience] = useState(0)
  
  // Auto-rotate features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % skills.length)
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
              Lead Engineer & Consultant
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-white/70 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              🚀 Building Scalable & High-Performance Solutions with Modern Web Technologies.  
              
            </motion.p>
            <motion.p 
              className="text-xl md:text-2xl text-white/70 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              
              Specializing in Full-Stack Engineer 
              | PHP, Laravel, React, Node.js, Python & Solution Architecture Specialist.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link href="/contact" className="inline-flex items-center justify-center h-12 px-6 font-medium rounded-md blue-button">
                <span className="text-white">Hire Me</span>
                <ArrowRight size={16} className="ml-2 text-white" />
              </Link>
              <Link href="/projects" className="inline-flex items-center justify-center h-12 px-6 font-medium rounded-md border border-white/20 hover:border-white/40 transition-colors">
                <span>View Projects</span>
                <ExternalLink size={16} className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience banner */}
      <section className="py-4 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex  justify-center">    
            <Link href="/experience" className="announcement-link snake-border">
              <span className="font-mono">18+ Years of Wide Industry
                 Experience</span>
              <ArrowRight size={14} />
            </Link>
           
          </div>
        </div>
      </section>

      {/* Companies worked with */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-12">Companies I've Worked With</h2>
          <div className="brand-grid max-w-5xl mx-auto">
            {companies.map((company, index) => (
              <div key={index} className="brand-item">
                <Image 
                  src={company.logo} 
                  alt={company.name} 
                  width={300} 
                  height={100} 
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Technical Expertise</h2>
            <p className="text-lg text-white/70">
              Comprehensive skillset in modern sofware development and cloud technologies
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Skills tabs */}
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className={`feature-card p-6 rounded-lg cursor-pointer transition-all ${activeFeature === index ? 'bg-secondary' : 'bg-secondary/30 hover:bg-secondary/50'}`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-1">
                      {skill.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
                      <p className="text-white/70">{skill.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Skill details */}
            <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden border border-white/10">
              {skills.map((skill, index) => (
                <div 
                  key={index} 
                  className={`absolute inset-0 transition-opacity duration-500 ${activeFeature === index ? 'opacity-100' : 'opacity-0'}`}
                >
                  <Image
                    src={skill.image}
                    alt={skill.title}
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

      {/* Experience section */}
      {/* ...remaining sections with updated content... */}
    </div>
  )
}

const companies = [
  {
    name: 'Ecommerce',
    logo: 'https://placehold.co/200x80/000000/FFFFFF?text=E-com.'
  },
  {
    name: 'Sales',
    logo: 'https://placehold.co/200x80/000000/FFFFFF?text=Sales'
  },
  {
    name: 'Telecom',
    logo: 'https://placehold.co/200x80/000000/FFFFFF?text=Telecom'
  },
  {
    name: 'Fintech',
    logo: 'https://placehold.co/200x80/000000/FFFFFF?text=Fintech'
  },
  {
    name: 'Healthcare',
    logo: 'https://placehold.co/200x80/000000/FFFFFF?text=Healthcare'
  },
  {
    name: 'Hospitality',
    logo: 'https://placehold.co/200x80/000000/FFFFFF?text=Hospitality'
  },
  // Add other companies you've worked with
]

const skills = [
  {
    title: 'Web Application Software',
    description: 'Expert in React.js, Next.js, and modern JavaScript frameworks',
    icon: <Code size={24} className="text-[hsl(var(--payload-blue))]" />,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c'
  },
  {
    title: 'SaaS (Software As Service) Software',
    description: 'Node.js, Express, and API development specialist',
    icon: <Database size={24} className="text-[hsl(var(--payload-blue))]" />,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31'
  },
  {
    title: 'Customized ERP Software',
    description: 'Node.js, Express, and API development specialist',
    icon: <Database size={24} className="text-[hsl(var(--payload-blue))]" />,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31'
  },
  {
    title: 'Automation Software',
    description: 'Node.js, Express, and API development specialist',
    icon: <Database size={24} className="text-[hsl(var(--payload-blue))]" />,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31'
  },
  {
    title: 'AI Software',
    description: 'Node.js, Express, and API development specialist',
    icon: <Database size={24} className="text-[hsl(var(--payload-blue))]" />,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31'
  },
  // Add other skills
]
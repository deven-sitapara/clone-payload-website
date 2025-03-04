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
      <section className="pt-40 pb-20 relative overflow-hidden">
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
              Software Consultant
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
              className="text-xl md:text-sm text-white mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="font-mono">
                Tech: PHP, Node.js, Python, PostgreSQL, MongoDB, AWS
              </span>
             </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link href="/contact" className="inline-flex items-center justify-center h-12 px-6 font-medium rounded-md blue-button">
                <span className="text-white">Ping Me</span>
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
        <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
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
      <section className="py-4 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-12">
            Industries I've Worked With</h2>
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
      <section className="py-8 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Technical Services</h2>
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
                  // onClick={() => setActiveFeature(index)}
                  onMouseOver={() => setActiveFeature(index)}
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
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div> */}
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
    description: 'Enhance workflow with custom web applications that improve efficiency, scalability, and user experience. Streamline operations, boost productivity, and integrate seamlessly with your existing systems.',
    icon: <Code size={24} className="text-[hsl(var(--payload-blue))]" />,
    image: 'https://img.freepik.com/premium-vector/ui-ux-infographic-dashboard-ui-design-with-graphs-charts-diagrams-web-interface-template_110554-795.jpg?w=700' // Team working on web app interface
  },
  {
    title: 'SaaS Solutions',
    description: 'Develop scalable and secure SaaS platforms with Node.js and Express, offering seamless service delivery, enhanced performance, and easy maintenance.',
    icon: <Database size={24} className="text-[hsl(var(--payload-blue))]" />,
    image: 'https://img.freepik.com/premium-vector/abstract-technology-saas-illustration_23-2149237077.jpg?w=700' // Cloud infrastructure diagram
  },
  {
    title: 'Customized ERP Software',
    description: 'Create tailored ERP systems that optimize business operations, enhance efficiency, and integrate smoothly with your current infrastructure.',
    icon: <Database size={24} className="text-[hsl(var(--payload-blue))]" />,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f' // Business workflow dashboard
  },
  {
    title: 'Automation Software Development',
    description: 'Boost productivity with custom automation solutions that streamline repetitive tasks, improve workflows, and save time.',
    icon: <Database size={24} className="text-[hsl(var(--payload-blue))]" />,
    image: 'https://img.freepik.com/free-vector/programmer-concept-illustration_114360-2284.jpg?&w=710' // Industrial robot or factory automation
  },
  {
    title: 'AI-Powered Software Solutions',
    description: 'Harness AI to make smarter decisions, enhance user experiences, and drive innovative solutions with custom-built AI software.',
    icon: <Database size={24} className="text-[hsl(var(--payload-blue))]" />,
    image: 'https://img.freepik.com/premium-vector/robotic-cloud-computing-with-engineers_175634-28327.jpg?w=700' // Neural network or AI dashboard
  }
]

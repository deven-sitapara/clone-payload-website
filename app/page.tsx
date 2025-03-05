"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Database, Code, Layers, Settings, Users, Shield, ExternalLink } from 'lucide-react'

export default function Home() {
  const [activeFeature, setActiveFeature] = useState(0)
  
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
        {/* Grid background - replaced with Tailwind utility classes */}
        <div className="absolute inset-0 bg-[length:50px_50px] bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]"></div>
        
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
              <Link href="/contact" className="inline-flex items-center justify-center h-12 px-6 font-medium rounded-md relative overflow-hidden z-10 group bg-gradient-to-r from-blue-500 to-blue-600/80">
                <span className="text-white relative z-10">Ping Me</span>
                <ArrowRight size={16} className="ml-2 text-white relative z-10" />
                <span className="absolute top-0 left-0 w-0 h-full bg-black/20 transition-all duration-300 ease-out group-hover:w-full -z-10"></span>
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
          <div className="flex justify-center">    
            <Link href="/experience" className="inline-flex items-center gap-2 py-2 px-4 rounded bg-black/50 text-white relative overflow-hidden">
              <span className="font-mono">18+ Years of Wide Industry Experience</span>
              <ArrowRight size={14} />
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-blue-500 -translate-x-full animate-[slide_2s_linear_infinite]"></div>
                <div className="absolute right-0 top-0 w-[2px] h-full bg-blue-500 -translate-y-full animate-[slideVertical_2s_linear_infinite_0.5s]"></div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Companies worked with */}
      <section className="py-4 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-12">
            Industries I've Worked With</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[1px] bg-white/5 max-w-5xl mx-auto">
            {companies.map((company, index) => (
              <div key={index} className="aspect-square flex items-center justify-center bg-black/10 relative transition-all hover:bg-black/60 border-r border-b border-white/5">
                <Image 
                  src={company.logo} 
                  alt={company.name} 
                  width={300} 
                  height={100} 
                  className="object-contain"
                />
                <div className="absolute bottom-[-14.2px] right-[-6.2px] text-2xl opacity-50 z-10">+</div>
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
              Comprehensive skillset in modern software development and cloud technologies
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Skills tabs */}
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className={`relative p-6 rounded-lg cursor-pointer transition-all hover:-translate-y-1 ${activeFeature === index ? 'bg-secondary' : 'bg-secondary/30 hover:bg-secondary/50'}`}
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
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
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
    icon: <Code size={24} className="text-blue-500" />,
    image: 'https://img.freepik.com/premium-vector/ui-ux-infographic-dashboard-ui-design-with-graphs-charts-diagrams-web-interface-template_110554-795.jpg?w=700' // Team working on web app interface
  },
  {
    title: 'SaaS Solutions',
    description: 'Develop scalable and secure SaaS platforms with Node.js and Express, offering seamless service delivery, enhanced performance, and easy maintenance.',
    icon: <Database size={24} className="text-blue-500" />,
    image: 'https://img.freepik.com/premium-vector/abstract-technology-saas-illustration_23-2149237077.jpg?w=700' // Cloud infrastructure diagram
  },
  {
    title: 'Customized ERP Software',
    description: 'Create tailored ERP systems that optimize business operations, enhance efficiency, and integrate smoothly with your current infrastructure.',
    icon: <Database size={24} className="text-blue-500" />,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f' // Business workflow dashboard
  },
  {
    title: 'Automation Software Development',
    description: 'Boost productivity with custom automation solutions that streamline repetitive tasks, improve workflows, and save time.',
    icon: <Database size={24} className="text-blue-500" />,
    image: 'https://img.freepik.com/free-vector/programmer-concept-illustration_114360-2284.jpg?&w=710' // Industrial robot or factory automation
  },
  {
    title: 'AI-Powered Software Solutions',
    description: 'Harness AI to make smarter decisions, enhance user experiences, and drive innovative solutions with custom-built AI software.',
    icon: <Database size={24} className="text-blue-500" />,
    image: 'https://img.freepik.com/premium-vector/robotic-cloud-computing-with-engineers_175634-28327.jpg?w=700' // Neural network or AI dashboard
  }
]

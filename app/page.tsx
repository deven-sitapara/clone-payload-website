/* eslint-disable react/no-unescaped-entities */
"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Database, Code, ExternalLink } from 'lucide-react'

// Add proper TypeScript interfaces
interface Company {
  name: string;
  logo: string;
}

interface Skill {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

export default function Home() {
  const [activeFeature, setActiveFeature] = useState(0)
  
  // Auto-rotate features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % skills.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // Extract inline handler to named function with "handle" prefix
  const handleFeatureHover = (index: number) => {
    setActiveFeature(index)
  }

  return (
    <div className="flex flex-col">
      {/* Hero section */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        {/* Grid background - replaced with Tailwind utility classes */}
        <div className="absolute inset-0 bg-[length:50px_50px] bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]"></div>
        
        <div className="container relative z-10 px-4 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="mb-6 text-4xl font-bold md:text-6xl lg:text-7xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Software Development Consultant
            </motion.h1>
            <motion.p 
              className="mb-10 text-xl md:text-2xl text-white/70"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >      
              Supporting teams with practical web technology solutions.
            </motion.p>
            <motion.p 
              className="mb-10 text-xl text-white md:text-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* <span className="font-mono">
                Tech: PHP, Node.js, Python, PostgreSQL, MongoDB, AWS
              </span> */}
             </motion.p>
            <motion.div 
              className="flex flex-col justify-center gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link href="/" className="relative z-10 inline-flex items-center justify-center h-12 px-6 overflow-hidden font-medium rounded-md group bg-gradient-to-r from-blue-500 to-blue-600/80">
                <span className="relative z-10 text-white">Get in Touch</span>
                <ArrowRight size={16} className="relative z-10 ml-2 text-white" />
                <span className="absolute top-0 left-0 w-0 h-full transition-all duration-300 ease-out bg-black/20 group-hover:w-full -z-10"></span>
              </Link>
              <Link href="/" className="inline-flex items-center justify-center h-12 px-6 font-medium transition-colors border rounded-md border-white/20 hover:border-white/40">
                <span>View Projects</span>
                <ExternalLink size={16} className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience banner */}
      <section className="py-4 bg-black">
        <div className="container px-4 py-6 mx-auto sm:px-6 lg:px-8">
          <div className="flex justify-center">    
            <Link href="/" className="relative inline-flex items-center gap-2 px-4 py-2 overflow-hidden text-white rounded bg-black/50">
              <span className="font-mono">
                Offering 18+ years of wide development experience
              </span>
              {/* <ArrowRight size={14} /> */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 -translate-x-full animate-[slide_5s_linear_infinite]"></div>
               </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Companies worked with */}
      <section className="py-4 bg-black">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <h2 className="mb-12 text-2xl font-bold text-center">
            Industries I've Supported
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            {companies.map((company, index) => (
              <div key={index} className="relative flex items-center justify-center transition-all border-b border-r aspect-square bg-black/10 hover:bg-black/60 border-white/5">
                <Image 
                  src={company.logo} 
                  alt={company.name} 
                  width={300} 
                  height={100} 
                  className="object-contain"
                />
                <div className="absolute bottom-[-10.2px] right-[-5.2px] text-l opacity-50 z-10">+</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills section */}
      <section className="relative py-8 overflow-hidden">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-5xl">
            How I Can Help</h2>
            <p className="text-lg text-white/70">
              Focus areas in software development and cloud solutions            </p>
          </div>

          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Skills tabs */}
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className={`relative p-6 rounded-lg cursor-pointer transition-all hover:-translate-y-1 ${activeFeature === index ? 'bg-secondary' : 'bg-secondary/30 hover:bg-secondary/50'}`}
                  onMouseOver={() => handleFeatureHover(index)}
                  onFocus={() => handleFeatureHover(index)}
                  tabIndex={0}
                  role="button"
                  aria-label={`View ${skill.title} details`}
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-1">
                      {skill.icon}
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-bold">{skill.title}</h3>
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

const companies: Company[] = [
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
  {
    name: 'LegalTech',
    logo: 'https://placehold.co/200x80/000000/FFFFFF?text=LegalTech'
  },
  // Add other companies you've worked with
]

const skills: Skill[] = [
  {
    title: 'Web Application Software',
    description: 'Building web applications focused on workflow efficiency and user experience. Designed to work well with your existing systems',
    icon: <Code size={24} className="text-blue-500" />,
    image: 'https://img.freepik.com/premium-vector/ui-ux-infographic-dashboard-ui-design-with-graphs-charts-diagrams-web-interface-template_110554-795.jpg?w=700' // Team working on web app interface
  },
  {
    title: 'SaaS Solutions',
    description: 'Creating reliable SaaS platforms using Node.js and Express, with attention to security and maintainability.',
    icon: <Database size={24} className="text-blue-500" />,
    image: 'https://img.freepik.com/premium-vector/abstract-technology-saas-illustration_23-2149237077.jpg?w=700' // Cloud infrastructure diagram
  },
  {
    title: 'Customized ERP Software',
    description: 'Working on ERP solutions that aim to simplify business operations and connect with your existing tools.',
    icon: <Database size={24} className="text-blue-500" />,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f' // Business workflow dashboard
  },
  {
    title: 'Automation Software Development',
    description: 'Developing automation tools to help with repetitive tasks and improve daily workflows.',
    icon: <Database size={24} className="text-blue-500" />,
    image: 'https://img.freepik.com/free-vector/programmer-concept-illustration_114360-2284.jpg?&w=710' // Industrial robot or factory automation
  },
  {
    title: 'AI-Powered Software Solutions',
    description: 'Implementing AI capabilities to assist with decision-making and improve user experiences.',
    icon: <Database size={24} className="text-blue-500" />,
    image: 'https://img.freepik.com/premium-vector/robotic-cloud-computing-with-engineers_175634-28327.jpg?w=700' // Neural network or AI dashboard
  }
]

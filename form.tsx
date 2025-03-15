"use client";
import { Send } from "lucide-react";
import { FormEvent, useState, ChangeEvent } from 'react'

interface FormData {
  name: string;
  email: string;
  message: string;
}



export default function Form() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: ''
      })
    
      const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        alert('Thank you for your message! We will get back to you soon.')
        setFormData({ name: '', email: '', message: '' })
      }
    
    
      const handleFormChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
          ...prev,
          [name]: value
        }))
      }
  return (
    <form className="space-y-4" onSubmit={handleSubmitForm}>
                    <div>
                      <label htmlFor="name" className="sr-only">Your Name</label>
                      <input 
                        id="name"
                        name="name"
                        type="text" 
                        placeholder="Your Name" 
                        value={formData.name}
                        onChange={handleFormChange}
                        className="w-full bg-transparent border border-white/20 rounded py-2.5 px-4 focus:border-white/40 focus:outline-none transition-colors focus:bg-gradient-to-b focus:from-white/[0.03] focus:to-transparent focus:shadow-[0_4px_12px_rgba(0,0,0,0.1)]"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="sr-only">Your Email</label>
                      <input 
                        id="email"
                        name="email"
                        type="email" 
                        placeholder="Your Email" 
                        value={formData.email}
                        onChange={handleFormChange}
                        className="w-full bg-transparent border border-white/20 rounded py-2.5 px-4 focus:border-white/40 focus:outline-none transition-colors focus:bg-gradient-to-b focus:from-white/[0.03] focus:to-transparent focus:shadow-[0_4px_12px_rgba(0,0,0,0.1)]"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="sr-only">Your Message</label>
                      <textarea 
                        id="message"
                        name="message"
                        placeholder="Your Message" 
                        rows={4}
                        value={formData.message}
                        onChange={handleFormChange}
                        className="w-full bg-transparent border border-white/20 rounded py-2.5 px-4 focus:border-white/40 focus:outline-none transition-colors focus:bg-gradient-to-b focus:from-white/[0.03] focus:to-transparent focus:shadow-[0_4px_12px_rgba(0,0,0,0.1)]"
                        required
                      />
                    </div>
                    <div>
                      <button 
                        type="submit" 
                        className="relative z-10 flex items-center justify-center w-full gap-2 px-6 py-3 overflow-hidden rounded bg-gradient-to-r from-blue-500 to-blue-600/80"
                        aria-label="Send message"
                      >
                        <span className="relative z-10 text-white">Send Message</span>
                        <Send size={16} className="relative z-10 text-white" />
                        <span className="absolute top-0 left-0 w-0 h-full transition-all duration-300 ease-out bg-black/20"></span>
                      </button>
                    </div>
                  </form>
  );
}
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
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{
      message: string;
      type: 'success' | 'error' | null;
    }>({ message: '', type: null });
    
    const handleSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ message: '', type: null });
        
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            
            if (response.ok) {
                setSubmitStatus({
                    message: 'Thank you for your message! We will get back to you soon.',
                    type: 'success'
                });
                setFormData({ name: '', email: '', message: '' });
            } else {
                const error = await response.json();
                throw new Error(error.message || 'Something went wrong');
            }
        } catch (error) {
            setSubmitStatus({
                message: 'Failed to send your message. Please try again later.',
                type: 'error'
            });
            console.error('Form submission error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };
    
    const handleFormChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };
    
    return (
        <form className="relative" onSubmit={handleSubmitForm}>
            {submitStatus.type && (
                <div className={`mb-4 p-3 rounded-md ${
                    submitStatus.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                    {submitStatus.message}
                </div>
            )}
            
            <div className="flex flex-col gap-2 pt-0">
                <label htmlFor="name" className="flex items-center">
                    Name <span className="text-red-500 ml-0.5">*</span>
                </label>
                <input 
                    id="name"
                    name="name"
                    type="text" 
                    placeholder="Your Name" 
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                    className="h-12 border-gray-300 w-full bg-transparent border border-white/15 rounded-md px-4 py-3 text-white placeholder:text-white/50"
                />
            </div>
            
            <div className="flex flex-col gap-2 pt-2">
                <label htmlFor="email" className="flex items-center">
                    Email <span className="text-red-500 ml-0.5">*</span>
                </label>
                <input 
                    id="email"
                    name="email"
                    type="email" 
                    placeholder="Your Email" 
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                    className="h-12 border-gray-300 w-full bg-transparent border border-white/15 rounded-md px-4 text-white placeholder:text-white/50"
                />
            </div>
            
            <div className="flex flex-col gap-2 pt-2">
                <label htmlFor="message" className="flex items-center">
                    Message <span className="text-red-500 ml-0.5">*</span>
                </label>
                <textarea 
                    id="message"
                    name="message"
                    placeholder="Your Message" 
                    rows={4}
                    value={formData.message}
                    onChange={handleFormChange}
                    required
                    className="bg-transparent border border-white/15 rounded-md px-4 py-3 pt-4 text-white placeholder:text-white/50"
                />
            </div>
            
            <div className="flex flex-col gap-2 pt-4">
                <button 
                    type="submit" 
                    className="bg-black text-white hover:bg-black/90 px-5 w-auto flex items-center justify-center rounded-md h-12 disabled:opacity-70"
                    aria-label="Send message"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Sending...' : 'Send Message'} 
                    {!isSubmitting && <Send className="ml-2 h-4 w-4" />}
                </button>
            </div>
        </form>
    );
}
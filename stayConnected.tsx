"use client";
import { ArrowRight } from 'lucide-react';
import { FormEvent, useState, ChangeEvent } from 'react'

export default function StayConnected() {
  const [subscribeEmail, setSubscribeEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    message: string;
    type: 'success' | 'error' | null;
  }>({ message: '', type: null })
  
  const handleSubscribeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSubscribeEmail(e.target.value)
  }
  
  const handleSubscribe = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ message: '', type: null })
    
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: subscribeEmail }),
      })
      
      if (response.ok) {
        setSubmitStatus({
          message: 'Thank you for subscribing to our newsletter!',
          type: 'success'
        })
        setSubscribeEmail('')
      } else {
        const error = await response.json()
        throw new Error(error.message || 'Something went wrong')
      }
    } catch (error) {
      setSubmitStatus({
        message: 'Failed to subscribe. Please try again later.',
        type: 'error'
      })
      console.error('Subscription error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }
  
  return (
    <div className="w-full space-y-4">
      <form onSubmit={handleSubscribe} className="flex flex-col gap-4">
        {submitStatus.type && (
          <div className={`p-3 rounded-md ${
            submitStatus.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}>
            {submitStatus.message}
          </div>
        )}
        
        <div className="flex flex-col gap-2">
          <label htmlFor="subscribeEmail" className="flex items-center text-sm">
            Email for newsletter <span className="text-red-500 ml-0.5">*</span>
          </label>
          <div className="flex">
            <input 
              id="subscribeEmail"
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 h-12 bg-transparent border border-white/15 rounded-l-md px-4 text-white placeholder:text-white/50 focus:outline-none focus:border-white/30"
              value={subscribeEmail}
              onChange={handleSubscribeChange}
              required
            />
            <button 
              type="submit" 
              className="h-12 bg-black text-white hover:bg-black/90 px-4 rounded-r-md border border-l-0 border-white/15 flex items-center justify-center transition-colors disabled:opacity-70"
              aria-label="Subscribe to newsletter"
              disabled={isSubmitting}
            >
              {isSubmitting ? '...' : <ArrowRight className="h-4 w-4" />}
            </button>
          </div>
        </div>
        <p className="text-sm text-white/50">
          Stay up to date with our latest news and updates.
        </p>
      </form>
    </div>
  )
}
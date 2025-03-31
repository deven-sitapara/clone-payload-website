"use client";
import { ArrowRight } from 'lucide-react';
import { FormEvent, useState, ChangeEvent } from 'react'

export default function StayConnected() {
  const [subscribeEmail, setSubscribeEmail] = useState('')
  
  const handleSubscribeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSubscribeEmail(e.target.value)
  }
  
  const handleSubscribe = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert('Thank you for subscribing to our newsletter!')
    setSubscribeEmail('')
  }
  
  return (
    <div className="w-full space-y-4">
      <form onSubmit={handleSubscribe} className="flex flex-col gap-4">
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
              className="h-12 bg-black text-white hover:bg-black/90 px-4 rounded-r-md border border-l-0 border-white/15 flex items-center justify-center transition-colors"
              aria-label="Subscribe to newsletter"
            >
              <ArrowRight className="h-4 w-4" />
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
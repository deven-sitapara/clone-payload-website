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
    <form className="flex border border-white/20" onSubmit={handleSubscribe}>
    <label htmlFor="subscribeEmail" className="sr-only">Email for newsletter</label>
    <input 
      id="subscribeEmail"
      type="email" 
      placeholder="Enter your email" 
      className="flex-grow px-4 py-3 text-white bg-transparent border-none focus:outline-none"
      value={subscribeEmail}
      onChange={handleSubscribeChange}
      required
    />
    <button 
      type="submit" 
      className="px-4 text-white border-l border-none border-white/20"
      aria-label="Subscribe to newsletter"
    >
      <ArrowRight size={16} />
    </button>
  </form>
  )
}
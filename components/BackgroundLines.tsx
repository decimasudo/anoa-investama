'use client'
import { motion } from 'framer-motion'

export default function BackgroundLines() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20">
      <svg className="w-full h-full" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path 
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3, ease: "easeInOut" }}
          d="M-100 200 C 400 100, 800 400, 1540 200" 
          stroke="white" 
          strokeWidth="0.5" 
        />
        <motion.path 
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3.5, ease: "easeInOut", delay: 0.2 }}
          d="M-100 250 C 400 150, 800 450, 1540 250" 
          stroke="white" 
          strokeWidth="0.5" 
        />
        <motion.path 
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 4, ease: "easeInOut", delay: 0.4 }}
          d="M-100 300 C 400 200, 800 500, 1540 300" 
          stroke="white" 
          strokeWidth="0.5" 
        />
      </svg>
    </div>
  )
}
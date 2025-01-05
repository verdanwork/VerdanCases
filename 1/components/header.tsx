'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

export function Header() {
  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="w-full px-6 py-4 border-b"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex items-center justify-center w-12 h-12 bg-white text-blue-600 text-3xl font-bold rounded-full border-2 border-blue-600">
            V
          </div>
          <span className="font-bold text-xl">erdan cases</span>
        </Link>
        <Button 
          asChild
          className="bg-blue-600 hover:bg-blue-700 transition-colors"
        >
          <Link href="https://t.me/Tesshx">
            Связаться с нами
          </Link>
        </Button>
      </div>
    </motion.header>
  )
}


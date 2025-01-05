'use client'

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ChevronRight } from 'lucide-react'
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="w-full px-6 py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Автоматизация бизнес процессов
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            От обработки документов до квалификации лидов: автоматизируйте
            рутинные задачи, улучшайте эффективность работы и сократите
            операционные расходы с помощью ИИ
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 transition-colors inline-flex items-center"
              asChild
            >
              <Link href="https://t.me/Tesshx">
                Начать сейчас
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}


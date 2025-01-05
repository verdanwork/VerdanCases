'use client'

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from 'next/link';

export function CTASection() {
  return (
    <section className="w-full px-6 py-20 bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6">
            Готовы автоматизировать свой бизнес?
          </h2>
          <p className="text-xl mb-8">
            Свяжитесь с нами, чтобы адаптировать решение под ваши нужды
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 transition-colors"
              asChild
            >
              <Link href="https://t.me/Tesshx">
                Получить консультацию
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}


'use client'

import { motion } from "framer-motion"
import { Check } from 'lucide-react'

interface DetailedUseCaseCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
}

export function DetailedUseCaseCard({
  icon,
  title,
  description,
  benefits,
}: DetailedUseCaseCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="p-6 border rounded-lg bg-white hover:shadow-lg transition-shadow"
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="mb-4">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex items-center text-sm text-gray-600 mb-1"
          >
            <Check className="h-4 w-4 text-green-500 mr-2" />
            <span>{benefit}</span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}


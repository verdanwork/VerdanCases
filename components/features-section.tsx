'use client'

import { motion } from "framer-motion"
import { MessageSquare, Bot, BarChart3 } from 'lucide-react'

const features = [
  {
    icon: <MessageSquare className="h-8 w-8 text-blue-600" />,
    title: "Универсальная автоматизация",
    description: "От HR до финансов: единая платформа для автоматизации любых бизнес-процессов"
  },
  {
    icon: <Bot className="h-8 w-8 text-blue-600" />,
    title: "ИИ интеграции",
    description: "Легкая интеграция с CRM, ERP и другими системами через API"
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
    title: "Аналитика и контроль",
    description: "Полная прозрачность процессов и детальная аналитика результатов"
  }
]

function FeatureCard({ icon, title, description }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="p-6 border rounded-lg hover:shadow-lg transition-shadow"
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  )
}

export function FeaturesSection() {
  return (
    <section className="w-full px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Наше решение</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


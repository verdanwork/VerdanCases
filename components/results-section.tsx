'use client'

import { motion } from "framer-motion"
import { Users, Clock, BarChart3, MessageSquare } from 'lucide-react'

const results = [
  {
    icon: <Users className="h-12 w-12 text-blue-600" />,
    metric: "40%",
    description: "Снижение нагрузки на сотрудников"
  },
  {
    icon: <Clock className="h-12 w-12 text-blue-600" />,
    metric: "5-10 сек",
    description: "Время обработки запроса"
  },
  {
    icon: <BarChart3 className="h-12 w-12 text-blue-600" />,
    metric: "+60%",
    description: "Рост конверсии в сделки"
  },
  {
    icon: <MessageSquare className="h-12 w-12 text-blue-600" />,
    metric: "24/7",
    description: "Доступность сервиса"
  }
]

function ResultCard({ icon, metric, description }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 text-center transition-all duration-300 hover:shadow-xl">
      <div className="mb-4 mx-auto w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
        {icon}
      </div>
      <div className="text-4xl font-bold text-blue-600 mb-2">
        {metric}
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

export function ResultsSection() {
  return (
    <section className="w-full px-6 py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Результаты внедрения
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {results.map((result, index) => (
            <ResultCard key={index} {...result} />
          ))}
        </div>
      </div>
    </section>
  )
}


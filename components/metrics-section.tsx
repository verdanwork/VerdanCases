'use client'

import { motion } from "framer-motion"
import { Users, Clock, TrendingUp, HeartPulse } from 'lucide-react'

const metrics = [
  {
    icon: <Users className="w-6 h-6" />,
    value: "40%",
    label: "Снижение нагрузки на сотрудников"
  },
  {
    icon: <Clock className="w-6 h-6" />,
    value: "5-10 сек",
    label: "Время обработки запроса"
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    value: "+60%",
    label: "Рост конверсии в сделки"
  },
  {
    icon: <HeartPulse className="w-6 h-6" />,
    value: "24/7",
    label: "Доступность сервиса"
  }
]

export function MetricsSection() {
  return (
    <section className="py-16">
      <div className="container px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Результаты внедрения
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-12 h-12 mx-auto bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                {metric.icon}
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">{metric.value}</div>
              <div className="text-gray-600">{metric.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


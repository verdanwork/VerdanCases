'use client'

import { motion } from "framer-motion"
import { FileText, DollarSign, HelpCircle, Calendar, BarChart2, FileSearch, ShoppingCart, UserPlus, FileOutput, Mail } from 'lucide-react'

const solutions = [
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Интеллектуальная квалификация лидов",
    description: "Автоматический отбор и классификация потенциальных клиентов",
    features: [
      "Экономия времени и денег",
      "Фокус на тёплых лидах",
      "Ускорение продаж"
    ],
    implementation: "Реализация: nBn + API CRM для обработки заявок"
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: "Обработка счетов-фактур",
    description: "Автоматическое сканирование и обработка финансовых документов",
    features: [
      "Ускорение учёта",
      "Минимизация ошибок",
      "Автоматизация рутины"
    ],
    implementation: "Реализация: OCR + интеграция с бухгалтерской системой"
  },
  {
    icon: <HelpCircle className="w-6 h-6" />,
    title: "Q&A бот для сотрудников",
    description: "Внутренний помощник по документации и регламентам",
    features: [
      "Быстрая адаптация",
      "Доступ к знаниям 24/7",
      "Снижение нагрузки на HR"
    ],
    implementation: "Реализация: Векторная база данных + AI агент"
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: "Умный планировщик встреч",
    description: "Автоматический подбор времени для групповых встреч",
    features: [
      "Экономия времени",
      "Меньше переписок",
      "Эффективное планирование"
    ],
    implementation: "Реализация: Интеграция с календарями + AI логика"
  },
  {
    icon: <BarChart2 className="w-6 h-6" />,
    title: "Генерация отчётов",
    description: "Автоматические аналитические отчёты в реальном времени",
    features: [
      "Актуальная аналитика",
      "Быстрые решения",
      "Экономия ресурсов"
    ],
    implementation: "Реализация: Агрегация данных + BI-визуализация"
  },
  {
    icon: <FileSearch className="w-6 h-6" />,
    title: "Скрининг резюме",
    description: "AI-анализ резюме кандидатов для подбора персонала",
    features: [
      "Экономия времени HR",
      "Качественный отбор",
      "Быстрый найм"
    ],
    implementation: "Реализация: NLP анализ + интеграция с HR системами"
  },
  {
    icon: <ShoppingCart className="w-6 h-6" />,
    title: "Сравнитель цен",
    description: "Автоматический анализ цен поставщиков",
    features: [
      "Оптимизация закупок",
      "Экономия бюджета",
      "Быстрое сравнение"
    ],
    implementation: "Реализация: API интеграция + алгоритм сравнения"
  },
  {
    icon: <UserPlus className="w-6 h-6" />,
    title: "Онбординг клиентов",
    description: "Автоматизация процесса подключения новых клиентов",
    features: [
      "Быстрый старт",
      "Меньше ручной работы",
      "Довольные клиенты"
    ],
    implementation: "Реализация: Автоматические цепочки действий"
  },
  {
    icon: <FileOutput className="w-6 h-6" />,
    title: "Автосаммари документов",
    description: "Автоматическое создание кратких сводок документов",
    features: [
      "Экономия времени",
      "Быстрые решения",
      "Ясность информации"
    ],
    implementation: "Реализация: AI суммаризация + интеграция"
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Классификация тикетов",
    description: "Умная маршрутизация заявок в техподдержку",
    features: [
      "Быстрая реакция",
      "Правильная сортировка",
      "Довольные клиенты"
    ],
    implementation: "Реализация: ML-классификация + тикет-система"
  }
]

export function B2BSolutions() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">B2B Варианты применения</h2>
          <p className="text-gray-600">
            Десять готовых решений для автоматизации бизнес-процессов с помощью ИИ
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                {solution.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
              <p className="text-gray-600 mb-4">{solution.description}</p>
              <ul className="space-y-2 mb-4">
                {solution.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-600 text-sm">• {feature}</li>
                ))}
              </ul>
              <p className="text-sm text-gray-500 border-t pt-4">{solution.implementation}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


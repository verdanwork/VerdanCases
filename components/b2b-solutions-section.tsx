'use client'

import { motion } from "framer-motion"
import { FileText, Receipt, HelpCircle, Calendar, LineChart, FileSearch, ShoppingCart, UserPlus, FileSignature, TicketCheck } from 'lucide-react'
import { DetailedUseCaseCard } from "./detailed-use-case-card"

const solutions = [
  {
    icon: <FileText className="h-8 w-8 text-blue-600" />,
    title: "Интеллектуальная квалификация лидов",
    description: "Автоматический отбор и классификация потенциальных клиентов",
    benefits: [
      "Экономия времени и денег",
      "Фокус на тёплых лидах",
      "Ускорение продаж"
    ],
    implementation: "n8n + API CRM для обработки заявок"
  },
  {
    icon: <Receipt className="h-8 w-8 text-blue-600" />,
    title: "Обработка счетов-фактур",
    description: "Автоматическое сканирование и обработка финансовых документов",
    benefits: [
      "Ускорение учёта",
      "Минимизация ошибок",
      "Автоматизация рутины"
    ],
    implementation: "OCR + интеграция с бухгалтерской системой"
  },
  {
    icon: <HelpCircle className="h-8 w-8 text-blue-600" />,
    title: "Q&A бот для сотрудников",
    description: "Внутренний помощник по документации и регламентам",
    benefits: [
      "Быстрая адаптация",
      "Доступ к знаниям 24/7",
      "Снижение нагрузки на HR"
    ],
    implementation: "Векторная база данных + AI агент"
  },
  {
    icon: <Calendar className="h-8 w-8 text-blue-600" />,
    title: "Умный планировщик встреч",
    description: "Автоматический подбор времени для групповых встреч",
    benefits: [
      "Экономия времени",
      "Меньше переписок",
      "Эффективное планирование"
    ],
    implementation: "Интеграция с календарями + AI логика"
  },
  {
    icon: <LineChart className="h-8 w-8 text-blue-600" />,
    title: "Генерация отчётов",
    description: "Автоматические аналитические отчёты в реальном времени",
    benefits: [
      "Актуальная аналитика",
      "Быстрые решения",
      "Экономия ресурсов"
    ],
    implementation: "Агрегация данных + BI-визуализация"
  },
  {
    icon: <FileSearch className="h-8 w-8 text-blue-600" />,
    title: "Скрининг резюме",
    description: "AI-анализ резюме кандидатов для подбора персонала",
    benefits: [
      "Экономия времени HR",
      "Качественный отбор",
      "Быстрый найм"
    ],
    implementation: "NLP анализ + интеграция с HR системами"
  },
  {
    icon: <ShoppingCart className="h-8 w-8 text-blue-600" />,
    title: "Сравнитель цен",
    description: "Автоматический анализ цен поставщиков",
    benefits: [
      "Оптимизация закупок",
      "Экономия бюджета",
      "Быстрое сравнение"
    ],
    implementation: "API интеграция + алгоритм сравнения"
  },
  {
    icon: <UserPlus className="h-8 w-8 text-blue-600" />,
    title: "Онбординг клиентов",
    description: "Автоматизация процесса подключения новых клиентов",
    benefits: [
      "Быстрый старт",
      "Меньше ручной работы",
      "Довольные клиенты"
    ],
    implementation: "Автоматические цепочки действий"
  },
  {
    icon: <FileSignature className="h-8 w-8 text-blue-600" />,
    title: "Автосаммари документов",
    description: "Автоматическое создание кратких сводок документов",
    benefits: [
      "Экономия времени",
      "Быстрые решения",
      "Ясность информации"
    ],
    implementation: "AI суммаризация + интеграция"
  },
  {
    icon: <TicketCheck className="h-8 w-8 text-blue-600" />,
    title: "Классификация тикетов",
    description: "Умная маршрутизация заявок в техподдержку",
    benefits: [
      "Быстрая реакция",
      "Правильная сортировка",
      "Довольные клиенты"
    ],
    implementation: "ML-классификация + тикет-система"
  }
]

export function B2BSolutionsSection() {
  return (
    <section className="w-full px-6 py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">B2B Варианты применения</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Десять готовых решений для автоматизации бизнес-процессов с помощью ИИ
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <DetailedUseCaseCard {...solution} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


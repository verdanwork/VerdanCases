'use client'

import { useEffect, useRef } from 'react'
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Check } from 'lucide-react'

function ChatSimulation() {
  const messages = [
    { sender: "user", text: "привет", time: "14:42" },
    { sender: "bot", text: "Здравствуйте! Как я могу вам помочь сегодня? Интересуетесь турами на музыкальные мероприятия?", time: "14:42" },
    { sender: "user", text: "да, какие есть в наличии?", time: "14:42" },
    { sender: "bot", text: "У нас есть специальный тур на зимний музыкальный фестиваль 2025 в Альпах. Это уникальная возможность совместить музыку с горнолыжным отдыхом.\n\nОсновные детали тура:\n- Даты: 15-22 марта 2025\n- Место: Французские Альпы\n- Включает: проживание, трансферы, доступ на все мероприятия\n\nХотите узнать подробнее?", time: "14:42" },
    { sender: "user", text: "да мне интересно", time: "14:43" },
    { sender: "bot", text: "Отлично! Для получения подробной информации и бронирования, оставьте, пожалуйста, ваш номер телефона. Наш менеджер свяжется с вами в ближайшее время.", time: "14:43" },
    { sender: "user", text: "7XXXXXXXXXX", time: "14:43" },
    { sender: "bot", text: "Спасибо! Мы получили ваш номер. Наш менеджер свяжется с вами в ближайшее время для обсуждения деталей тура. Если у вас появятся дополнительные вопросы, вы всегда можете обратиться к нам снова!", time: "14:44" },
  ]

  const chatEndRef = useRef(null)

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  return (
    <div className="h-full flex flex-col">
      <div className="bg-gray-100 p-4 rounded-t-lg">
        <h3 className="font-semibold">Демонстрация диалога</h3>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-lg ${message.sender === "user" ? "bg-blue-600 text-white" : "bg-gray-100"}`}
            >
              <p className="whitespace-pre-line">{message.text}</p>
              <span
                className={`text-xs ${message.sender === "user" ? "text-blue-100" : "text-gray-500"}`}
              >
                {message.time}
              </span>
            </div>
          </motion.div>
        ))}
        <div ref={chatEndRef} />
      </div>
    </div>
  )
}

export function CaseStudySection() {
  return (
    <section className="w-full px-6 py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Готовый кейс</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4">
                  Умный бот-консультант для туристической компании
                </h3>
                <div className="space-y-4">
                  <motion.div whileHover={{ scale: 1.02 }} className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Задача:</h4>
                    <p className="text-gray-600">
                      Автоматизировать процесс консультации клиентов, сократить
                      нагрузку на менеджеров и улучшить скорость ответа.
                    </p>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Решение:</h4>
                    <ul className="space-y-2 text-gray-600">
                      {["Обучение на данных компании", "Интеграция с CRM-системой", "Поддержка API-интеграций", "Векторная база данных", "Масштабируемая архитектура"].map((item, index) => (
                        <li key={index} className="flex items-center">
                          <Check className="h-5 w-5 text-green-500 mr-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} className="bg-yellow-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Как работает:</h4>
                    <ol className="list-decimal list-inside space-y-2 text-gray-600">
                      {["Получение сообщения через любой канал", "Мгновенный анализ и ответ", "Автоматическое создание сделок", "Полная фиксация взаимодействий"].map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ol>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white h-[600px] overflow-hidden">
              <CardContent className="p-0 h-full">
                <ChatSimulation />
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


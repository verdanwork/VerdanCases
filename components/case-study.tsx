'use client'

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export function CaseStudy() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Готовый кейс</h2>
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">
              Умный бот-консультант для туристической компании
            </h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Задача:</h4>
                <p className="text-gray-600">
                  Автоматизировать процесс консультации клиентов, сократить нагрузку на менеджеров и улучшить скорость ответа.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Решение:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Обучение на данных компании</li>
                  <li>• Интеграция с CRM-системой</li>
                  <li>• Поддержка API-интеграций</li>
                  <li>• Векторная база данных</li>
                  <li>• Масштабируемая архитектура</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Как работает:</h4>
                <ol className="space-y-2 text-gray-600 list-decimal list-inside">
                  <li>Получение сообщения через любой канал</li>
                  <li>Мгновенный анализ и ответ</li>
                  <li>Автоматическое создание сделок</li>
                  <li>Полная фиксация взаимодействий</li>
                </ol>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gray-100">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-4">Демонстрация диалога</h4>
                <div className="space-y-4">
                  <div className="flex justify-end">
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                    >
                      привет
                    </motion.div>
                  </div>
                  
                  <div className="flex justify-start">
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="bg-white px-4 py-2 rounded-lg max-w-[80%]"
                    >
                      Здравствуйте! Как я могу вам помочь сегодня? Интересуетесь турами на музыкальные мероприятия?
                    </motion.div>
                  </div>

                  <div className="flex justify-end">
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 1 }}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                    >
                      да, какие есть в наличии?
                    </motion.div>
                  </div>

                  <div className="flex justify-start">
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 1.5 }}
                      className="bg-white px-4 py-2 rounded-lg max-w-[80%]"
                    >
                      У нас есть специальный тур на зимний музыкальный фестиваль 2025 в Альпах. Это уникальная возможность совместить музыку с горнолыжным отдыхом.

                      Основные детали тура:
                      - Даты: 15-22 марта 2025
                      - Место: Французские Альпы
                      - Включает: проживание, трансферы, доступ на все мероприятия
                    </motion.div>
                  </div>

                  <div className="flex justify-end">
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 2 }}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                    >
                      да мне интересно
                    </motion.div>
                  </div>

                  <div className="flex justify-start">
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 2.5 }}
                      className="bg-white px-4 py-2 rounded-lg max-w-[80%]"
                    >
                      Отлично! Для получения подробной информации и бронирования, оставьте, пожалуйста, ваш номер телефона. Наш менеджер свяжется с вами в ближайшее время.
                    </motion.div>
                  </div>

                  <div className="flex justify-end">
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 3 }}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                    >
                      7XXXXXXXXXX
                    </motion.div>
                  </div>

                  <div className="flex justify-start">
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 3.5 }}
                      className="bg-white px-4 py-2 rounded-lg max-w-[80%]"
                    >
                      Спасибо! Мы получили ваш номер. Наш менеджер свяжется с вами в ближайшее время для обсуждения деталей тура. Если у вас появятся дополнительные вопросы, вы всегда можете обратиться к нам снова!
                    </motion.div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


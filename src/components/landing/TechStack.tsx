import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Palette, LayoutTemplate, BarChart2, ShoppingBag, Image, Layers } from "lucide-react"

export default function TechStack() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const technologies = {
    design: {
      icon: <Palette className="h-6 w-6" />,
      title: "Дизайн и графика",
      description: "Инструменты для создания визуала",
      skills: [
        { name: "Figma", level: 95 },
        { name: "Adobe Photoshop", level: 92 },
        { name: "Adobe Illustrator", level: 88 },
        { name: "Canva Pro", level: 85 },
      ],
    },
    infographics: {
      icon: <BarChart2 className="h-6 w-6" />,
      title: "Инфографика",
      description: "Визуализация преимуществ товара",
      skills: [
        { name: "Размерные схемы", level: 95 },
        { name: "Сравнительные таблицы", level: 90 },
        { name: "Иконографика", level: 92 },
        { name: "Упаковочные составы", level: 88 },
        { name: "Инструкции", level: 85 },
      ],
    },
    marketplaces: {
      icon: <ShoppingBag className="h-6 w-6" />,
      title: "Маркетплейсы",
      description: "Платформы, с которыми работаю",
      skills: [
        { name: "Wildberries", level: 98 },
        { name: "Ozon", level: 95 },
        { name: "Яндекс Маркет", level: 90 },
        { name: "AliExpress", level: 80 },
        { name: "СберМегаМаркет", level: 78 },
      ],
    },
    cards: {
      icon: <LayoutTemplate className="h-6 w-6" />,
      title: "Типы карточек",
      description: "Форматы работ",
      skills: [
        { name: "Главное фото", level: 95 },
        { name: "Галерея продукта", level: 93 },
        { name: "Rich-контент", level: 88 },
        { name: "A+ контент", level: 85 },
        { name: "Видеообложки", level: 80 },
      ],
    },
    photo: {
      icon: <Image className="h-6 w-6" />,
      title: "Работа с фото",
      description: "Обработка и ретушь предметки",
      skills: [
        { name: "Предметная ретушь", level: 92 },
        { name: "Удаление фона", level: 98 },
        { name: "Цветокоррекция", level: 90 },
        { name: "Композитинг", level: 85 },
      ],
    },
    niches: {
      icon: <Layers className="h-6 w-6" />,
      title: "Ниши",
      description: "Категории товаров в портфолио",
      skills: [
        { name: "Одежда и мода", level: 95 },
        { name: "Косметика и уход", level: 92 },
        { name: "Дом и интерьер", level: 90 },
        { name: "Электроника", level: 85 },
        { name: "Детские товары", level: 88 },
        { name: "Спорт и туризм", level: 82 },
      ],
    },
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  }

  return (
    <section id="tech-stack" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            Навыки
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Моя экспертиза</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(technologies).map(([key, category]) => (
            <motion.div
              key={key}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              variants={scaleUp}
            >
              <Card
                className={`h-full cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  selectedCategory === key ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => setSelectedCategory(selectedCategory === key ? null : key)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-primary/10 p-3 rounded-full">{category.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold">{category.title}</h3>
                      <p className="text-sm text-muted-foreground">{category.description}</p>
                    </div>
                  </div>

                  <AnimatePresence>
                    {selectedCategory === key && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4"
                      >
                        {category.skills.map((skill, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="space-y-2"
                          >
                            <div className="flex justify-between text-sm">
                              <span className="font-medium">{skill.name}</span>
                              <span className="text-muted-foreground">{skill.level}%</span>
                            </div>
                            <div className="w-full bg-muted rounded-full h-1.5">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.level}%` }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-primary h-1.5 rounded-full"
                              />
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {selectedCategory !== key && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {category.skills.slice(0, 3).map((skill, index) => (
                        <Badge key={index} variant="secondary">
                          {skill.name}
                        </Badge>
                      ))}
                      {category.skills.length > 3 && (
                        <Badge variant="secondary">+{category.skills.length - 3} ещё</Badge>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          variants={fadeIn}
          className="mt-12 text-center text-muted-foreground"
        >
          <p className="max-w-2xl mx-auto">
            Глубокое понимание алгоритмов маркетплейсов и психологии покупателя позволяет создавать
            инфографику, которая не просто красиво выглядит, но реально увеличивает продажи.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

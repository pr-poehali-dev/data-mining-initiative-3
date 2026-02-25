import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ExternalLink, ChevronDown } from "lucide-react"

interface Project {
  id: number
  title: string
  shortDescription: string
  description: string
  image: string
  tags: string[]
  features: string[]
  demoLink: string
  fullDescription: string
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [expandedProject, setExpandedProject] = useState<number | null>(null)

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const projects: Project[] = [
    {
      id: 1,
      title: "Карточки для бренда одежды",
      shortDescription: "Полный комплект из 8 карточек для женской одежды на Wildberries.",
      description: "Полный комплект из 8 карточек для женской одежды на Wildberries с инфографикой состава и размерной сетки.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Wildberries", "Одежда", "Инфографика", "Размерная сетка"],
      features: [
        "Главное фото с цепляющим оффером",
        "Инфографика состава ткани",
        "Размерная таблица с замерами",
        "Карточка ухода за изделием",
        "Слайд с преимуществами бренда",
      ],
      demoLink: "#",
      fullDescription:
        "Разработала полный комплект карточек для женской одежды. Основной акцент — на качестве ткани и точной размерной сетке, которые закрывают главные возражения покупателей в категории одежды. После замены карточек конверсия клиента выросла на 34%.",
    },
    {
      id: 2,
      title: "Инфографика косметического бренда",
      shortDescription: "Rich-контент для линейки уходовой косметики на Ozon.",
      description: "Rich-контент и A+ карточки для линейки уходовой косметики на Ozon.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Ozon", "Косметика", "Rich-контент", "A+"],
      features: [
        "Визуализация состава ингредиентов",
        "Схема применения продукта",
        "Сравнение с аналогами",
        "Результаты «до/после»",
        "Сертификаты и награды",
      ],
      demoLink: "#",
      fullDescription:
        "Создала rich-контент для уходовой линейки: наглядно показала состав, схему применения и результаты. Визуальное сравнение с конкурентами помогло выделить ключевые преимущества. Клиент отметил рост добавлений в корзину на 28% после обновления карточек.",
    },
    {
      id: 3,
      title: "Электроника — умный дом",
      shortDescription: "Карточки для товаров категории «умный дом» на Яндекс Маркете.",
      description: "Карточки с технической инфографикой для устройств умного дома на Яндекс Маркете.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Яндекс Маркет", "Электроника", "Техническая инфографика"],
      features: [
        "Схема подключения устройства",
        "Технические характеристики в иконках",
        "Совместимость с платформами",
        "Инструкция по установке",
        "Гарантийные условия",
      ],
      demoLink: "#",
      fullDescription:
        "Разработала серию карточек для умных розеток и датчиков. Сложные технические характеристики перевела в понятные иконки и схемы. Особое внимание уделила инструкции по установке — главному страху покупателей в этой категории.",
    },
    {
      id: 4,
      title: "Детские товары",
      shortDescription: "Яркие карточки для детских игрушек с упором на безопасность.",
      description: "Яркие продающие карточки для детских игрушек с акцентом на безопасность и развитие.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Wildberries", "Детские товары", "Безопасность"],
      features: [
        "Сертификаты безопасности",
        "Возрастные рекомендации",
        "Развивающий потенциал",
        "Материалы и состав",
        "Комплектация с фото",
      ],
      demoLink: "#",
      fullDescription:
        "Создала карточки для линейки деревянных игрушек. Главный упор — на экологичность материалов и наличие сертификатов безопасности, что критически важно для мам. Карточки сочетают яркость, привлекающую детей, с информацией, убеждающей родителей.",
    },
    {
      id: 5,
      title: "Товары для спорта и туризма",
      shortDescription: "Карточки для туристического снаряжения с характеристиками в инфографике.",
      description: "Карточки для туристического снаряжения — палатки, рюкзаки, спальники.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Ozon", "Спорт", "Туризм", "Характеристики"],
      features: [
        "Схема сборки/раскладки",
        "Характеристики в иконках",
        "Сравнение с аналогами",
        "Сезонность применения",
        "Сцены использования",
      ],
      demoLink: "#",
      fullDescription:
        "Разработала карточки для туристического снаряжения: наглядно показала размеры в сложенном виде, вес, температурный диапазон. Схемы сборки палатки убрали сомнения покупателей в сложности установки.",
    },
    {
      id: 6,
      title: "Товары для дома и интерьера",
      shortDescription: "Стильные карточки для декора и предметов интерьера.",
      description: "Стильные карточки для декора, текстиля и предметов интерьера.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Wildberries", "Дом", "Интерьер", "Декор"],
      features: [
        "Визуализация в интерьере",
        "Размеры и габариты",
        "Варианты цветов",
        "Материалы и уход",
        "Сочетаемость со стилями",
      ],
      demoLink: "#",
      fullDescription:
        "Создала карточки для постельного белья и декоративных подушек. Визуализация в реальных интерьерах помогает покупателю представить товар у себя дома. Акцент на качество материалов и лёгкость ухода — ключевые факторы выбора в этой категории.",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-muted/30">
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
            Портфолио
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Избранные работы</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={fadeIn}
            >
              <Card
                className={`group h-full cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  expandedProject === project.id ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-background/20 p-6 flex flex-col justify-end">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground text-sm">{project.shortDescription}</p>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <AnimatePresence>
                      {expandedProject === project.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <p className="text-muted-foreground text-sm mb-4">{project.fullDescription}</p>
                          <ul className="space-y-2 mb-4">
                            {project.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center gap-2 text-sm">
                                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                          <div className="flex gap-3">
                            <Button
                              size="sm"
                              variant="outline"
                              className="gap-2"
                              onClick={(e) => {
                                e.stopPropagation()
                                setSelectedProject(project)
                              }}
                            >
                              <ExternalLink className="h-4 w-4" />
                              Подробнее
                            </Button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="flex items-center gap-1 text-muted-foreground text-sm mt-2">
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${expandedProject === project.id ? "rotate-180" : ""}`}
                      />
                      {expandedProject === project.id ? "Свернуть" : "Подробнее"}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>{selectedProject?.title}</DialogTitle>
              <DialogDescription>{selectedProject?.description}</DialogDescription>
            </DialogHeader>
            <div className="mt-4">
              <img
                src={selectedProject?.image || "/placeholder.svg"}
                alt={selectedProject?.title}
                className="w-full rounded-lg aspect-video object-cover mb-4"
              />
              <p className="text-muted-foreground">{selectedProject?.fullDescription}</p>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}

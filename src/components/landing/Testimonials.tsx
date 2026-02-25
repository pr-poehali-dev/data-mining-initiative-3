import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Star, StarHalf } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export default function Testimonials() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const testimonials = [
    {
      id: 1,
      name: "Анна Краснова",
      position: "Продавец на Wildberries, категория «Одежда»",
      content:
        "Кристина полностью переработала мои карточки. Раньше товар просто лежал в поиске — теперь органически выходит в топ. Конверсия выросла вдвое за первый месяц. Работает быстро, сдаёт в срок, вносит правки без лишних вопросов.",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      name: "Михаил Дорошенко",
      position: "Бренд косметики, Ozon и WB",
      content:
        "Заказывали rich-контент для новой линейки сыворотки. Кристина разобралась в составе лучше нашего маркетолога и сделала инфографику, которая реально объясняет ценность продукта. Продажи пошли сразу после публикации.",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 3,
      name: "Светлана Морозова",
      position: "Детские товары, Wildberries",
      content:
        "Очень внимательно отнеслась к нашей нише — детские игрушки требуют особого подхода. Выделила все сертификаты и безопасные материалы так, что мамы это сразу видят. Количество отзывов с упоминанием «красивые фото» выросло заметно.",
      rating: 4.5,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 4,
      name: "Роман Ткачёв",
      position: "Туристическое снаряжение, Ozon",
      content:
        "Работаем с Кристиной уже полгода — отдали ей весь каталог. Она умеет разбираться в технических характеристиках и переводить их в понятный визуал. После обновления карточек CTR вырос на 40%, это реальные цифры из аналитики.",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 5,
      name: "Ольга Семёнова",
      position: "Товары для дома, Яндекс Маркет",
      content:
        "Обратилась после того, как долго не могла понять, почему товар не продаётся. Кристина за день нашла проблему — унылые фото без контекста. После редизайна карточек с визуализацией в интерьере продажи оживились.",
      rating: 4.5,
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="h-5 w-5 fill-primary text-primary" />)
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="h-5 w-5 fill-primary text-primary" />)
    }

    return <div className="flex">{stars}</div>
  }

  return (
    <section id="testimonials" className="py-20">
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
            Отзывы
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Довольные клиенты</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          variants={fadeIn}
        >
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 p-2">
                  <Card className="h-full">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden">
                          <img
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground flex-grow mb-4">"{testimonial.content}"</p>
                      <div className="mt-auto">{renderStars(testimonial.rating)}</div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="relative static translate-y-0 mr-2" />
              <CarouselNext className="relative static translate-y-0" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  )
}

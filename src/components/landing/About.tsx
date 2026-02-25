import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Eye, Target, Zap } from "lucide-react"

export default function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="py-20 bg-muted/30">
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
            Обо мне
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Кто я</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeIn}
          >
            <h3 className="text-2xl font-bold mb-4">Дизайнер инфографики для маркетплейсов</h3>
            <p className="text-muted-foreground mb-6">
              Я специализируюсь на создании продающих карточек и инфографики для маркетплейсов —
              Wildberries, Ozon, Яндекс Маркет. Моя задача — сделать так, чтобы ваш товар
              выделялся среди конкурентов и конвертировал просмотры в покупки.
            </p>
            <p className="text-muted-foreground mb-6">
              За годы работы я разработала сотни карточек для продавцов в самых разных нишах:
              одежда, косметика, электроника, товары для дома. Каждый проект — это глубокое
              погружение в продукт и целевую аудиторию.
            </p>
            <p className="text-muted-foreground">
              Когда я не работаю над новыми проектами, изучаю тренды визуального маркетинга
              и аналитику поведения покупателей на маркетплейсах.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              variants={fadeIn}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Eye className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Цепляющий визуал</h4>
                      <p className="text-muted-foreground">
                        Создаю карточки, которые останавливают взгляд в ленте и вызывают желание
                        узнать о товаре больше.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              variants={fadeIn}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Фокус на конверсию</h4>
                      <p className="text-muted-foreground">
                        Каждый элемент инфографики работает на продажу: закрываю возражения,
                        подчёркиваю преимущества, усиливаю доверие.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              variants={fadeIn}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Zap className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Быстрые сроки</h4>
                      <p className="text-muted-foreground">
                        Понимаю, что время — деньги. Работаю чётко по срокам,
                        без лишних правок и затянутых согласований.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

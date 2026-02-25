import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const images = [
  {
    id: 1,
    url: "https://cdn.poehali.dev/projects/61c39d62-8dff-4717-9b07-abac450ff076/bucket/92609513-fbea-4f25-8889-8ee48bbf32c1.png",
    title: "Яндекс.Станция Мини",
    tag: "Электроника",
  },
  {
    id: 2,
    url: "https://cdn.poehali.dev/projects/61c39d62-8dff-4717-9b07-abac450ff076/bucket/4931ee17-e8e0-4e41-90d8-80c36bd5cd0d.png",
    title: "Яндекс.Станция — автономность",
    tag: "Электроника",
  },
  {
    id: 3,
    url: "https://cdn.poehali.dev/projects/61c39d62-8dff-4717-9b07-abac450ff076/bucket/f66fb6b6-bf80-4e9f-8994-7da62115cf90.png",
    title: "Звуковая зубная щётка",
    tag: "Косметика и уход",
  },
  {
    id: 4,
    url: "https://cdn.poehali.dev/projects/61c39d62-8dff-4717-9b07-abac450ff076/bucket/71a15dec-3a65-4d87-8eb9-c9d26222c22e.png",
    title: "Зубная щётка — характеристики",
    tag: "Косметика и уход",
  },
  {
    id: 5,
    url: "https://cdn.poehali.dev/projects/61c39d62-8dff-4717-9b07-abac450ff076/bucket/fb26e062-f59c-427c-80b8-8604331d7637.png",
    title: "Зубная щётка — режимы",
    tag: "Косметика и уход",
  },
]

export default function Projects() {
  const [lightbox, setLightbox] = useState<number | null>(null)

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const prev = () => {
    if (lightbox === null) return
    setLightbox(lightbox === 0 ? images.length - 1 : lightbox - 1)
  }

  const next = () => {
    if (lightbox === null) return
    setLightbox(lightbox === images.length - 1 ? 0 : lightbox + 1)
  }

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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Мои работы</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {images.map((img, index) => (
            <motion.div
              key={img.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              variants={fadeIn}
              className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-xl"
              onClick={() => setLightbox(index)}
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105 rounded-xl"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 rounded-xl flex items-end p-4 opacity-0 group-hover:opacity-100">
                <div>
                  <p className="text-white font-semibold text-sm">{img.title}</p>
                  <Badge variant="secondary" className="mt-1 text-xs">{img.tag}</Badge>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
              onClick={() => setLightbox(null)}
            >
              <X className="h-8 w-8" />
            </button>

            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors"
              onClick={(e) => { e.stopPropagation(); prev() }}
            >
              <ChevronLeft className="h-10 w-10" />
            </button>

            <motion.img
              key={lightbox}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              src={images[lightbox].url}
              alt={images[lightbox].title}
              className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors"
              onClick={(e) => { e.stopPropagation(); next() }}
            >
              <ChevronRight className="h-10 w-10" />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
              <p className="text-white font-medium">{images[lightbox].title}</p>
              <p className="text-white/60 text-sm mt-1">{lightbox + 1} / {images.length}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

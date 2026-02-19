import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "MIG/MAG сварка",
    description: "Полуавтоматические аппараты для промышленной сварки в среде защитных газов. Стабильная дуга и высокая производительность.",
    icon: "⚡",
    badge: "Популярное",
  },
  {
    title: "TIG сварка",
    description: "Аргонодуговая сварка для высокоточных работ с нержавеющей сталью, алюминием и титаном.",
    icon: "🎯",
    badge: "Точность",
  },
  {
    title: "MMA аппараты",
    description: "Надёжные инверторные аппараты ручной дуговой сварки для строительства и ремонтных работ.",
    icon: "🔧",
    badge: "Надёжность",
  },
  {
    title: "Плазменная резка",
    description: "Высокоскоростная резка металла толщиной до 50 мм с чистым краем и минимальной деформацией.",
    icon: "🔥",
    badge: "Скорость",
  },
  {
    title: "Сварочные материалы",
    description: "Полный ассортимент проволоки, электродов и защитных газов от ведущих производителей.",
    icon: "📦",
    badge: "Расходники",
  },
  {
    title: "Сервис и гарантия",
    description: "Гарантия до 3 лет на всё оборудование. Собственный сервисный центр с оригинальными запчастями.",
    icon: "🛡️",
    badge: "Гарантия",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Наше оборудование</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Профессиональное сварочное оборудование для любых задач — от мастерской до крупного производства
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">{feature.icon}</span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

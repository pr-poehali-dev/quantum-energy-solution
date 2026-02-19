import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Алексей Петров",
    role: "Начальник цеха, ЗАО «МеталлСтрой»",
    avatar: "/cybersecurity-expert-man.jpg",
    content:
      "Перешли на оборудование ПроСварка два года назад — простои сократились на 40%. Аппараты работают в три смены без нареканий.",
  },
  {
    name: "Ирина Волкова",
    role: "Владелица автосервиса «АвтоМастер»",
    avatar: "/professional-woman-scientist.png",
    content:
      "Для кузовного ремонта — идеально. TIG-аппарат варит тонкий металл как по маслу, а сервис реагирует за день.",
  },
  {
    name: "Дмитрий Ковалёв",
    role: "Прораб, строительная компания «Основа»",
    avatar: "/asian-woman-tech-developer.jpg",
    content:
      "На стройке важна надёжность. За сезон ни одной поломки, аппараты лёгкие и удобные для работы на высоте.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Нам доверяют профессионалы</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Что говорят наши клиенты о сварочном оборудовании ПроСварка
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

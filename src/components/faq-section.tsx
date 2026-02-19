import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Какие виды сварки поддерживает ваше оборудование?",
      answer:
        "Мы предлагаем полный спектр: MIG/MAG (полуавтоматическая), TIG (аргонодуговая), MMA (ручная дуговая) и оборудование для плазменной резки. Подберём аппарат под ваши задачи.",
    },
    {
      question: "Какая гарантия на оборудование?",
      answer:
        "Гарантия от 2 до 3 лет в зависимости от модели. У нас собственный сервисный центр с оригинальными запчастями. Среднее время ремонта — 2 рабочих дня.",
    },
    {
      question: "Есть ли доставка по России?",
      answer:
        "Да, доставляем по всей России транспортными компаниями. По Москве и области — собственная доставка за 1-2 дня. Для оптовых заказов — бесплатная доставка.",
    },
    {
      question: "Можно ли взять оборудование на тестирование?",
      answer:
        "Да, для корпоративных клиентов доступен тест-драйв оборудования на 3-5 дней. Вы сможете проверить аппарат на реальных задачах перед покупкой.",
    },
    {
      question: "Работаете ли вы с юридическими лицами?",
      answer:
        "Конечно. Работаем по безналичному расчёту с НДС, предоставляем полный комплект документов. Есть специальные условия для постоянных клиентов и оптовиков.",
    },
    {
      question: "Помогаете ли с подбором оборудования?",
      answer:
        "Да, наши инженеры бесплатно проконсультируют и помогут подобрать оборудование под ваши задачи, материалы и бюджет. Звоните или оставьте заявку на сайте.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Ответы на популярные вопросы о нашем сварочном оборудовании, доставке и сервисе.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

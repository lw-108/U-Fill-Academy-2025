"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    q: "What programs does U-Fill Academy offer for young learners?",
    a: "We offer specially designed programs that foster creativity and foundational skills for children of all ages.",
  },
  {
    q: "How does U-Fill support holistic learning?",
    a: "Our approach balances academics, creativity, and well-being—combining projects, mentorship, and reflection.",
  },
  {
    q: "Is there global collaboration in the curriculum?",
    a: "Yes. Students participate in cross-cultural projects and virtual exchanges that broaden perspectives.",
  },
  {
    q: "How can I apply?",
    a: "Use the Apply Now button or contact our admissions team—we’ll guide you through each step.",
  },
]

export default function FAQSection() {
  return (
    <section id="faq" className="relative z-10 px-6 py-16 md:py-24 bg-background">
      <div className="max-w-3xl mx-auto">
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="font-bowlby text-4xl md:text-6xl text-center font-normal text-foreground">
            Frequently Asked Questions
          </h2>
        </div>
        <Accordion type="single" collapsible className="w-full text-5xl">
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`item-${i + 1}`} className="border-border">
              <AccordionTrigger className="text-left text-foreground">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      {/* Call to Action */}
      <div className="text-center mt-20">
        <div className="bg-card border border-foreground/20 rounded-xl p-8 max-w-2xl mx-auto shadow-lg">
          <h3 className="text-2xl font-bold text-foreground mb-4 font-frijole">
            Ready to Start Your Learning Journey?
          </h3>
          <p className="text-muted-foreground mb-6">
            Join U-Fill Academy and unlock your potential with expert-guided courses
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-foreground text-background px-8 py-3 rounded-lg font-semibold hover:bg-foreground/90 transition-colors shadow-lg border-2 border-foreground">
              Enroll Now
            </button>
            <button className="border-2 border-foreground text-foreground px-8 py-3 rounded-lg font-semibold hover:bg-foreground hover:text-background transition-colors">
              View All Courses
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

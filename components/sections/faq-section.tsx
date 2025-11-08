import { Check, PhoneCall, BookOpen, Users, Calendar, CreditCard } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export const FAQ1 = () => (
  <div className="w-full py-20 lg:py-40 bg-background">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Left Content Section */}
        <div className="flex gap-10 flex-col">
          <div className="flex gap-6 flex-col p-6 lg:p-8 bg-card rounded-2xl border border-border shadow-sm">
            <div className="flex gap-2 flex-col">
              <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-left font-bowlby">
                Your Questions Answered
              </h4>
              <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left mt-4">
                Find answers to common questions about U-Fill Academy's programs, admissions process, and learning approach. We're here to help you make the best educational decisions.
              </p>
            </div>
            
            <div className="flex flex-col gap-4 mt-4 p-4 bg-muted/50 rounded-xl">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span>Personalized learning paths</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span>Expert certified tutors</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span>Flexible scheduling options</span>
              </div>
            </div>
            
            <div className="flex gap-4 mt-4 pt-4 border-t border-border">
              <Button className="gap-4 px-6 py-3" variant="outline">
                Have questions? Call us <PhoneCall className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Right Accordion Section */}
        <div className="p-6 lg:p-8 bg-card rounded-2xl border border-border shadow-sm">
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="admission-process" className="border border-border rounded-lg px-4 hover:border-muted-foreground/20 transition-colors">
              <AccordionTrigger className="text-left py-4 hover:no-underline">
                What is the admission process at U-Fill Academy?
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-muted-foreground">
                Our admission process includes an initial consultation, academic assessment, and personalized learning plan development. We welcome students of all levels and focus on finding the right program fit for each individual's needs and goals.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="age-groups" className="border border-border rounded-lg px-4 hover:border-muted-foreground/20 transition-colors">
              <AccordionTrigger className="text-left py-4 hover:no-underline">
                What age groups do you serve?
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-muted-foreground">
                We offer programs for students from elementary school through high school (ages 6-18). Our curriculum is tailored to different developmental stages, ensuring age-appropriate learning experiences for all students.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="class-sizes" className="border border-border rounded-lg px-4 hover:border-muted-foreground/20 transition-colors">
              <AccordionTrigger className="text-left py-4 hover:no-underline">
                What are your class sizes?
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-muted-foreground">
                We maintain small class sizes with a maximum 8:1 student-to-teacher ratio for group sessions. Private one-on-one tutoring is also available. This ensures personalized attention and optimal learning outcomes for every student.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="subjects-offered" className="border border-border rounded-lg px-4 hover:border-muted-foreground/20 transition-colors">
              <AccordionTrigger className="text-left py-4 hover:no-underline">
                What subjects do you offer?
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-muted-foreground">
                We offer comprehensive programs in Mathematics, Science, Coding & Robotics, Creative Arts, Language Arts, Test Preparation, and Life Skills. Our curriculum evolves to include emerging fields and student interests.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="schedule-flexibility" className="border border-border rounded-lg px-4 hover:border-muted-foreground/20 transition-colors">
              <AccordionTrigger className="text-left py-4 hover:no-underline">
                How flexible are your schedules?
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-muted-foreground">
                We offer flexible scheduling with morning, afternoon, evening, and weekend sessions. Both in-person and online options are available to accommodate busy family schedules and different learning preferences.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="qualifications" className="border border-border rounded-lg px-4 hover:border-muted-foreground/20 transition-colors">
              <AccordionTrigger className="text-left py-4 hover:no-underline">
                What qualifications do your tutors have?
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-muted-foreground">
                All our tutors are certified educators with advanced degrees in their respective fields. They undergo rigorous training in our teaching methodology and participate in continuous professional development programs.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="progress-tracking" className="border border-border rounded-lg px-4 hover:border-muted-foreground/20 transition-colors">
              <AccordionTrigger className="text-left py-4 hover:no-underline">
                How do you track student progress?
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-muted-foreground">
                We use a comprehensive assessment system including regular progress reports, portfolio reviews, standardized testing preparation, and parent-teacher conferences. Parents receive monthly updates on their child's academic growth.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="trial-classes" className="border border-border rounded-lg px-4 hover:border-muted-foreground/20 transition-colors">
              <AccordionTrigger className="text-left py-4 hover:no-underline">
                Do you offer trial classes?
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-muted-foreground">
                Yes! We offer complimentary trial sessions for all new students. This allows us to assess learning styles and academic needs while giving families the opportunity to experience our teaching approach before committing.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  </div>
);
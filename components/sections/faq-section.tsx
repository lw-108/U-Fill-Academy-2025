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
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-2 gap-10">
        <div className="flex gap-10 flex-col">
          <div className="flex gap-4 flex-col">
            <div>
              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800">
                Frequently Asked Questions
              </Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-left font-bowlby">
                Your Questions Answered
              </h4>
              <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left">
                Find answers to common questions about U-Fill Academy's programs, admissions process, and learning approach. We're here to help you make the best educational decisions.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="w-4 h-4 text-green-500" />
                <span>Personalized learning paths</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="w-4 h-4 text-green-500" />
                <span>Expert certified tutors</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="w-4 h-4 text-green-500" />
                <span>Flexible scheduling options</span>
              </div>
            </div>
            <div className="flex gap-4">
              <Button className="gap-4" variant="outline">
                Have questions? Call us <PhoneCall className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="admission-process">
            <AccordionTrigger className="text-left">
              What is the admission process at U-Fill Academy?
            </AccordionTrigger>
            <AccordionContent>
              Our admission process includes an initial consultation, academic assessment, and personalized learning plan development. We welcome students of all levels and focus on finding the right program fit for each individual's needs and goals.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="age-groups">
            <AccordionTrigger className="text-left">
              What age groups do you serve?
            </AccordionTrigger>
            <AccordionContent>
              We offer programs for students from elementary school through high school (ages 6-18). Our curriculum is tailored to different developmental stages, ensuring age-appropriate learning experiences for all students.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="class-sizes">
            <AccordionTrigger className="text-left">
              What are your class sizes?
            </AccordionTrigger>
            <AccordionContent>
              We maintain small class sizes with a maximum 8:1 student-to-teacher ratio for group sessions. Private one-on-one tutoring is also available. This ensures personalized attention and optimal learning outcomes for every student.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="subjects-offered">
            <AccordionTrigger className="text-left">
              What subjects do you offer?
            </AccordionTrigger>
            <AccordionContent>
              We offer comprehensive programs in Mathematics, Science, Coding & Robotics, Creative Arts, Language Arts, Test Preparation, and Life Skills. Our curriculum evolves to include emerging fields and student interests.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="schedule-flexibility">
            <AccordionTrigger className="text-left">
              How flexible are your schedules?
            </AccordionTrigger>
            <AccordionContent>
              We offer flexible scheduling with morning, afternoon, evening, and weekend sessions. Both in-person and online options are available to accommodate busy family schedules and different learning preferences.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="qualifications">
            <AccordionTrigger className="text-left">
              What qualifications do your tutors have?
            </AccordionTrigger>
            <AccordionContent>
              All our tutors are certified educators with advanced degrees in their respective fields. They undergo rigorous training in our teaching methodology and participate in continuous professional development programs.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="progress-tracking">
            <AccordionTrigger className="text-left">
              How do you track student progress?
            </AccordionTrigger>
            <AccordionContent>
              We use a comprehensive assessment system including regular progress reports, portfolio reviews, standardized testing preparation, and parent-teacher conferences. Parents receive monthly updates on their child's academic growth.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="trial-classes">
            <AccordionTrigger className="text-left">
              Do you offer trial classes?
            </AccordionTrigger>
            <AccordionContent>
              Yes! We offer complimentary trial sessions for all new students. This allows us to assess learning styles and academic needs while giving families the opportunity to experience our teaching approach before committing.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  </div>
);
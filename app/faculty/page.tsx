"use client"
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import MegaNavbar from "@/components/sections/MegaNavbar";
import BlendCursor from "@/components/BlendCursor";

const testimonials = [
  {
    quote:
      "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
    name: " Dhivya Dharshini",
    designation: "Director",
    src: "https://i.guim.co.uk/img/media/16ee4da6a64461a4dfd4875030ab428f4c01673c/0_452_2771_1663/master/2771.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=1fcd9bb965cb19d7c4979308db0954d0",
  },
  {
    quote:
      "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
    name: "Vigneshkumar",
    designation: "Brand Ambassador",
    src: "https://images.squarespace-cdn.com/content/v1/5d27506e05089200010ed4d5/1565032930169-1Q8XRWWJKRZDOP3WZYHQ/gettyimages-96372752-170667a.jpg",
  },
  {
    quote:
      "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
    name: "Lingeshwarma M.K",
    designation: " Technical Head",
    src: "https://www.worldhistory.org/uploads/images/6161.jpg",
  },
  {
    quote:
      "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
    name: "Durga",
    designation: "Secretary",
    src: "https://cdn.thecollector.com/wp-content/uploads/2024/10/author-unknown-hypatia-painting.jpg?width=914&quality=100&dpr=2",
  },
  // {
  //   quote:
  //     "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
  //   name: "Lisa Thompson",
  //   designation: "VP of Technology at FutureNet",
  //   src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  // },
]

export default function FacultyPage() {
  return (
    <section id="faculty" className="relative z-10 px-6 py-16 md:py-24 bg-background mt-5">
      <MegaNavbar />
      <BlendCursor />
      <div className="max-w-6xl mx-auto">
        <section id="about" className="relative z-10 px-6 py-16 md:py-24 bg-background">
          <div className="max-w-4xl mx-auto mt-12">
            <h2 className="font-bowlby text-4xl md:text-6xl text-center font-normal text-foreground">
              Meet Our Faculty Members
            </h2>
          </div>
        </section>
        <AnimatedTestimonials testimonials={testimonials} />
      </div>
    </section>
  )
}

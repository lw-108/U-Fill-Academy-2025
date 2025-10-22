"use client"

import { DraggableCardBody, DraggableCardContainer } from "@/components/ui/draggable-card";

type Project = { title: string; description: string }

export default function StudentProjectsSection() {
  const studentProjects = [
    {
      title: "Eco-City Model",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2000&auto=format&fit=crop",
      className: "absolute top-10 left-[20%] rotate-[-5deg]",
      description: "Sustainable urban planning with recycled materials"
    },
    {
      title: "AI Learning Assistant",
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=2000&auto=format&fit=crop",
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
      description: "Chatbot for homework help using machine learning"
    },
    {
      title: "Renewable Energy Monitor",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2000&auto=format&fit=crop",
      className: "absolute top-5 left-[40%] rotate-[8deg]",
      description: "IoT device tracking energy consumption"
    },
    {
      title: "Cultural Heritage App",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=2000&auto=format&fit=crop",
      className: "absolute top-32 left-[55%] rotate-[10deg]",
      description: "Mobile app preserving local cultural stories"
    },
    {
      title: "Robotic Gardening",
      image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=2000&auto=format&fit=crop",
      className: "absolute top-20 right-[35%] rotate-[2deg]",
      description: "Automated plant care system using robotics"
    },
  ];

  return (
    <section id="projects" className="relative z-10 px-6 py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto">
        <section id="about" className="relative z-10 px-6 py-16 md:py-24 bg-background">
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="font-climate-crisis text-4xl md:text-6xl text-center font-normal text-foreground">
              Student projects
            </h2>
          </div>
        </section>
        <p className="text-muted-foreground text-center mb-12 text-3xl max-w-2xl mx-auto">
          Explore the innovative projects created by our students. Drag the cards to interact with them!
        </p>
      </div>

      <div className="h-[600px] w-full">
        <DraggableCardContainer className="relative flex h-full w-full items-center justify-center overflow-clip">
          {studentProjects.map((project, index) => (
            <DraggableCardBody key={index} className={project.className}>
              <img
                src={project.image}
                alt={project.title}
                className="pointer-events-none relative z-10 h-64 w-64 object-cover rounded-lg"
              />
              <h3 className="mt-4 text-center text-xl font-bold text-foreground">
                {project.title}
              </h3>
              <p className="mt-2 text-center text-sm text-muted-foreground">
                {project.description}
              </p>
            </DraggableCardBody>
          ))}
        </DraggableCardContainer>
      </div>
    </section>
  )
}
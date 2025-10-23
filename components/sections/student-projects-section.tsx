"use client";

import { DraggableCardBody, DraggableCardContainer } from "@/components/ui/draggable-card";

export default function StudentProjectsSection() {
  const studentProjects = [
    {
      title: "Eco-City Model",
      image:
        "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2000&auto=format&fit=crop",
      className: "absolute top-10 left-[15%] sm:left-[20%] rotate-[-5deg]",
      description: "Sustainable urban planning with recycled materials",
    },
    {
      title: "AI Learning Assistant",
      image:
        "https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=2000&auto=format&fit=crop",
      className: "absolute top-40 left-[20%] sm:left-[25%] rotate-[-7deg]",
      description: "Chatbot for homework help using machine learning",
    },
    {
      title: "Renewable Energy Monitor",
      image:
        "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2000&auto=format&fit=crop",
      className: "absolute top-8 left-[35%] sm:left-[40%] rotate-[8deg]",
      description: "IoT device tracking energy consumption",
    },
    {
      title: "Cultural Heritage App",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=2000&auto=format&fit=crop",
      className: "absolute top-32 left-[50%] sm:left-[55%] rotate-[10deg]",
      description: "Mobile app preserving local cultural stories",
    },
    {
      title: "Robotic Gardening",
      image:
        "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=2000&auto=format&fit=crop",
      className: "absolute top-20 right-[30%] sm:right-[35%] rotate-[2deg]",
      description: "Automated plant care system using robotics",
    },
  ];

  return (
    <section
      id="projects"
      className="relative z-10 px-4 sm:px-6 md:px-10 py-12 sm:py-16 md:py-20 bg-background transition-colors duration-500"
    >
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-8 sm:mb-12">
        <h2
          className="font-bowlby text-[clamp(1.8rem,5vw,4rem)] font-normal text-foreground dark:text-white leading-tight"
        >
          Student Projects
        </h2>
        <p
          className="text-muted-foreground mt-4 mx-auto max-w-3xl text-[clamp(0.9rem,2.5vw,1.25rem)] leading-relaxed text-balance"
        >
          Explore the innovative projects created by our students. You can drag
          the cards to interact with them!
        </p>
      </div>

      {/* Draggable Cards */}
      <div className="h-[420px] sm:h-[500px] md:h-[600px] w-full">
        <DraggableCardContainer className="relative flex h-full w-full items-center justify-center overflow-hidden">
          {studentProjects.map((project, index) => (
            <DraggableCardBody
              key={index}
              className={`${project.className} scale-75 sm:scale-90 md:scale-100 transition-transform duration-300`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="pointer-events-none relative z-10 h-[clamp(8rem,14vw,16rem)] w-[clamp(8rem,14vw,16rem)] object-cover rounded-xl shadow-lg"
              />
              <div className="mt-3 sm:mt-4 text-center px-2 sm:px-4">
                <h3
                  className="font-bold text-foreground dark:text-white leading-snug text-[clamp(1rem,2.5vw,1.5rem)]"
                >
                  {project.title}
                </h3>
                <p
                  className="mt-1 text-muted-foreground leading-relaxed text-pretty text-[clamp(0.75rem,2vw,1rem)]"
                >
                  {project.description}
                </p>
              </div>
            </DraggableCardBody>
          ))}
        </DraggableCardContainer>
      </div>
    </section>
  );
}

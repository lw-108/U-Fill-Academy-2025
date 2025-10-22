"use client"

const items = [
  { title: "Campus Life", alt: "Students collaborating on campus", q: "campus life students collaborating" },
  { title: "Makerspace", alt: "Learners building in makerspace", q: "makerspace learner building" },
  { title: "Art Studio", alt: "Painting and creative work", q: "art studio painting creativity" },
  { title: "Outdoor Learning", alt: "Field exploration and nature study", q: "outdoor learning nature study" },
  { title: "Robotics Lab", alt: "Students testing robots", q: "robotics lab students testing" },
  { title: "Global Exchange", alt: "Virtual collaboration session", q: "global exchange virtual class" },
]

export default function GallerySection() {
  return (
    <section id="gallery" className="relative z-10 px-6 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-medium text-white mb-8">Gallery</h3>
        <div className="grid gap-4 grid-cols-2 md:grid-cols-3">
          {items.map((it) => (
            <figure key={it.title} className="overflow-hidden rounded-lg border border-white/10 bg-white/5">
              <img
                src={`/.jpg?height=480&width=720&query=${encodeURIComponent(it.q)}`}
                alt={it.alt}
                className="w-full h-40 object-cover"
              />
              <figcaption className="p-3 text-white/80 text-sm">{it.title}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

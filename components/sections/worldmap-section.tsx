"use client"
import { DottedMap } from "@/components/ui/dotted-map"

const markers = [
  {
    lat: 40.7128,
    lng: -74.006,
    size: 0.3,
  }, // New York
  {
    lat: 34.0522,
    lng: -118.2437,
    size: 0.3,
  }, // Los Angeles
  {
    lat: 51.5074,
    lng: -0.1278,
    size: 0.3,
  }, // London
  {
    lat: -33.8688,
    lng: 151.2093,
    size: 0.3,
  }, // Sydney
  {
    lat: 48.8566,
    lng: 2.3522,
    size: 0.3,
  }, // Paris
  {
    lat: 35.6762,
    lng: 139.6503,
    size: 0.3,
  }, // Tokyo
  {
    lat: 55.7558,
    lng: 37.6176,
    size: 0.3,
  }, // Moscow
  {
    lat: 39.9042,
    lng: 116.4074,
    size: 0.3,
  }, // Beijing
  {
    lat: 28.6139,
    lng: 77.209,
    size: 0.3,
  }, // New Delhi
  {
    lat: -23.5505,
    lng: -46.6333,
    size: 0.3,
  }, // São Paulo
  {
    lat: 1.3521,
    lng: 103.8198,
    size: 0.3,
  }, // Singapore
  {
    lat: 25.2048,
    lng: 55.2708,
    size: 0.3,
  }, // Dubai
  {
    lat: 52.52,
    lng: 13.405,
    size: 0.3,
  }, // Berlin
  {
    lat: 19.4326,
    lng: -99.1332,
    size: 0.3,
  }, // Mexico City
  {
    lat: -26.2041,
    lng: 28.0473,
    size: 0.3,
  }, // Johannesburg
]

export default function WorldmapSection() {
  return (
    <section id="worldmap" className="relative z-10 px-6 py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-4xl mx-auto mb-12">
          <section id="about" className="relative z-10 px-6 py-16 md:py-24 bg-background">
            <div className="max-w-4xl mx-auto mb-12">
        <h2 className="font-climate-crisis text-4xl md:text-6xl text-center font-normal text-foreground">
          Learning Without Borders
        </h2>
      </div>
          </section>
          <p className="text-muted-foreground text-black leading-relaxed text-3xl">
            U-Fill Academy connects classrooms across continents, championing diversity and cross-cultural collaboration.
            From virtual partnerships to global projects, our learners explore ideas with peers worldwide-broadening
            perspectives and building empathy through shared discovery.
          </p>
        </div>

        <div className="relative h-[500px] w-full overflow-hidden rounded-lg border">
          <div className="to-background absolute inset-0 bg-radial from-transparent to-70%" />
          <DottedMap markers={markers} />
        </div>
      </div>
    </section>
  )
}
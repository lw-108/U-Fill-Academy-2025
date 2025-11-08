"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import MegaNavbar from "@/components/sections/MegaNavbar";
import BlendCursor from "@/components/BlendCursor";

export default function VideosPage() {
  const videos = [
    {
      id: 1,
      title: "Photon Rider",
      desc: "A Smart Light Source following Robot developed by our students using Arduino and basic electronics.",
      author: "Vigneshwaran",
      badge: "Education",
      thumbnail: "/images/photon-rider.png",
      videoUrl: "/vids/photon-rider-u-fill.mp4",
    },
    // {
    //   id: 2,
    //   title: "App Development Workshop",
    //   desc: "Free App Development session for school students using React Native and Firebase.",
    //   author: "Sahana R",
    //   badge: "Workshop",
    //   file: "/videos/app-dev.mp4",
    //   thumbnail: "/videos/thumbs/appdev.jpg",
    // },
    // {
    //   id: 3,
    //   title: "AI & Robotics Training",
    //   desc: "AI & Robotics workshop conducted for Meenakshi Academy students introducing ML concepts.",
    //   author: "Pravin D",
    //   badge: "Innovation",
    //   file: "/videos/ai-robotics.mp4",
    //   thumbnail: "/videos/thumbs/ai.jpg",
    // },
    // {
    //   id: 4,
    //   title: "Tamil Orientation Event",
    //   desc: "Orientation event conducted on International Peace Day celebrating Tamil culture and unity.",
    //   author: "Anitha S",
    //   badge: "Event",
    //   file: "/videos/tamil-orientation.mp4",
    //   thumbnail: "/videos/thumbs/tamil.jpg",
    // },
  ];

  return (
    <div className="w-full bg-[#0a0a0a] text-white min-h-screen">
      <MegaNavbar />
      <BlendCursor />

      {/* === Page Header === */}
      <section className="container mx-auto px-6 sm:px-8 lg:px-12 py-20 lg:py-32">
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-bowlby text-3xl md:text-4xl lg:text-6xl font-normal text-foreground mb-6"
          >
            Explore Our <br />
            Educational Videos
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto"
          >
            Watch recorded webinars, events, and workshops by our U-Fill Academy faculty and students.
          </motion.p>
        </div>



        {/* === Video Grid === */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {videos.map((video) => (
            <div
              key={video.id}
              className="group flex flex-col gap-4 bg-white/5 border border-white/10 rounded-2xl p-4 hover:scale-[1.02] transition-all duration-300"
            >
              {/* Video Player */}
              <div className="relative aspect-video rounded-xl overflow-hidden">
                <video
                  src={video.videoUrl}
                  poster={video.thumbnail}
                  controls
                  preload="metadata"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              {/* Meta Info */}
              <div className="flex items-center gap-3 mt-2">
                <Badge>{video.badge}</Badge>
                <p className="flex items-center gap-2 text-sm">
                  <span className="text-white/60">By</span>
                  <Avatar className="h-6 w-6">
                    <AvatarImage src={`https://ui-avatars.com/api/?name=${video.author}`} />
                    <AvatarFallback>{video.author[0]}</AvatarFallback>
                  </Avatar>
                  <span>{video.author}</span>
                </p>
              </div>

              {/* Description */}
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
                  {video.title}
                </h3>
                <p className="text-white/70 text-sm md:text-base leading-relaxed">
                  {video.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

"use client"

import React from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { Play, Pause, Volume2, VolumeX, PictureInPicture, Maximize, Loader } from "lucide-react"

const videos = [
  { 
    title: "Photon-Rider", 
    poster: "/images/photon-rider.png", // Keeping original name
    src: "/vids/photon-rider-u-fill.mp4" // Keeping original path
  },
  { 
    title: "Makerspace Demo", 
    poster: "/makerspace-demo-poster.jpg", // Keeping original name
    src: "/videos/makerspace-demo.mp4" // Keeping original path
  },
  { 
    title: "Global Classroom", 
    poster: "/global-classroom-poster.jpg", // Keeping original name
    src: "/videos/global-classroom.mp4" // Keeping original path
  },
]

export default function VideoCarouselSection() {
  return (
    <section id="videos" className="relative z-10 px-4 py-12 md:py-16 lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-bowlby text-3xl md:text-4xl lg:text-5xl font-normal text-foreground mb-3">
            Campus Life
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
            Explore our facilities, innovative spaces, and global learning environment
          </p>
        </div>

        {/* Carousel */}
        <Carousel 
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {videos.map((video, idx) => (
              <CarouselItem 
                key={video.title} 
                className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <VideoCard {...video} idx={idx} />
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Navigation - Hidden on mobile, shown on tablet+ */}
          <div className="flex items-center justify-center gap-4 mt-6 md:mt-8">
            <CarouselPrevious className="static md:relative transform-none border border-border text-foreground hover:bg-muted h-8 w-8 md:h-10 md:w-10" />
            <CarouselNext className="static md:relative transform-none border border-border text-foreground hover:bg-muted h-8 w-8 md:h-10 md:w-10" />
          </div>
        </Carousel>
      </div>
    </section>
  )
}

function VideoCard({ title, poster, src, idx }: { title: string; poster: string; src: string; idx: number }) {
  const videoRef = React.useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = React.useState(false)
  const [isMuted, setIsMuted] = React.useState(true)
  const [isLoading, setIsLoading] = React.useState(true)
  const [hasError, setHasError] = React.useState(false)

  const onPlay = () => {
    videoRef.current?.play()
    setIsPlaying(true)
  }

  const onPause = () => {
    videoRef.current?.pause()
    setIsPlaying(false)
  }

  const onMuteToggle = () => {
    if (!videoRef.current) return
    videoRef.current.muted = !videoRef.current.muted
    setIsMuted(videoRef.current.muted)
  }

  const onPip = async () => {
    try {
      if (document.pictureInPictureElement) {
        await document.exitPictureInPicture()
      } else if (videoRef.current && document.pictureInPictureEnabled) {
        await videoRef.current.requestPictureInPicture()
      }
    } catch (error) {
      console.log("PiP not supported")
    }
  }

  const onFullscreen = async () => {
    try {
      if (!videoRef.current) return
      if (!document.fullscreenElement) {
        await videoRef.current.requestFullscreen()
      } else {
        await document.exitFullscreen()
      }
    } catch (error) {
      console.log("Fullscreen not supported")
    }
  }

  // Handle video events
  const handlePlay = () => setIsPlaying(true)
  const handlePause = () => setIsPlaying(false)
  const handleEnded = () => setIsPlaying(false)
  const handleLoadStart = () => setIsLoading(true)
  const handleLoadedData = () => setIsLoading(false)
  const handleError = () => {
    setHasError(true)
    setIsLoading(false)
  }

  return (
    <div className="rounded-xl border border-border/50 bg-card p-3 md:p-4 shadow-sm hover:shadow-md transition-all duration-300 group">
      {/* Video Container */}
      <div className="aspect-video w-full overflow-hidden rounded-lg md:rounded-xl border border-border bg-muted relative">
        
        {/* Loading State */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-muted z-10">
            <Loader className="h-6 w-6 animate-spin text-muted-foreground" />
          </div>
        )}

        {/* Error State */}
        {hasError && (
          <div className="absolute inset-0 flex items-center justify-center bg-red-50 z-20">
            <p className="text-red-600 text-sm">Video failed to load</p>
          </div>
        )}

        <video
          ref={videoRef}
          controls={false}
          muted={isMuted}
          playsInline
          preload="metadata"
          poster={poster}
          className="w-full h-full object-cover"
          aria-label={title}
          onPlay={handlePlay}
          onPause={handlePause}
          onEnded={handleEnded}
          onLoadStart={handleLoadStart}
          onLoadedData={handleLoadedData}
          onError={handleError}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Play/Pause Overlay Button */}
        {!isLoading && !hasError && (
          <button
            onClick={isPlaying ? onPause : onPlay}
            className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-30"
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            <div className="bg-black/50 rounded-full p-2 md:p-3 backdrop-blur-sm">
              {isPlaying ? (
                <Pause className="h-5 w-5 md:h-6 md:w-6 text-white" />
              ) : (
                <Play className="h-5 w-5 md:h-6 md:w-6 text-white ml-0.5" />
              )}
            </div>
          </button>
        )}
      </div>

      {/* Compact Controls */}
      <div className="mt-3 md:mt-4 space-y-2">
        {/* Title */}
        <h4 className="text-foreground font-semibold text-sm md:text-base line-clamp-1">
          {title}
        </h4>

        {/* Compact Control Buttons */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Button
              size="sm"
              variant="ghost"
              className="h-7 w-7 p-0 hover:bg-muted"
              onClick={isPlaying ? onPause : onPlay}
              disabled={hasError}
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <Pause className="h-3 w-3" />
              ) : (
                <Play className="h-3 w-3 ml-0.5" />
              )}
            </Button>

            <Button
              size="sm"
              variant="ghost"
              className="h-7 w-7 p-0 hover:bg-muted"
              onClick={onMuteToggle}
              disabled={hasError}
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? (
                <VolumeX className="h-3 w-3" />
              ) : (
                <Volume2 className="h-3 w-3" />
              )}
            </Button>
          </div>

          <div className="flex items-center gap-1">
            <Button
              size="sm"
              variant="ghost"
              className="h-7 w-7 p-0 hover:bg-muted hidden sm:flex"
              onClick={onPip}
              disabled={hasError}
              aria-label="Picture in Picture"
            >
              <PictureInPicture className="h-3 w-3" />
            </Button>

            <Button
              size="sm"
              variant="ghost"
              className="h-7 w-7 p-0 hover:bg-muted"
              onClick={onFullscreen}
              disabled={hasError}
              aria-label="Fullscreen"
            >
              <Maximize className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
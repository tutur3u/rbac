import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import { Badge } from "lucide-react";
import Image from "next/image";
import React, { useRef } from "react";

export default function FinalistList({
  currentSeason,
  rootUrl,
}: {
  currentSeason: {
    highlightJoiner: { name: string; width: number; height: number }[];
  };
  rootUrl: string;
}) {
  const getColorClasses = (index: number) => {
    const colors = [
      "bg-blue-500/50 border-blue-400/20 from-blue-400 to-purple-400 hover:border-blue-400/50 group-hover:text-blue-300",
      "bg-purple-500/50 border-purple-400/20 from-purple-400 to-pink-400 hover:border-purple-400/50 group-hover:text-purple-300",
      "bg-cyan-500/50 border-cyan-400/20 from-cyan-400 to-blue-400 hover:border-cyan-400/50 group-hover:text-cyan-300",
      "bg-emerald-500/50 border-emerald-400/20 from-emerald-400 to-teal-400 hover:border-emerald-400/50 group-hover:text-emerald-300",
      "bg-rose-500/50 border-rose-400/20 from-rose-400 to-orange-400 hover:border-rose-400/50 group-hover:text-rose-300",
      "bg-indigo-500/50 border-indigo-400/20 from-indigo-400 to-violet-400 hover:border-indigo-400/50 group-hover:text-indigo-300",
    ];
    return colors[index % colors.length];
  };
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <Carousel
      plugins={[plugin.current]}
      className="mb-12 relative bg-transparent border-transparent shadow-none"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="p-0">
        {currentSeason.highlightJoiner.map((image, index) => {
          const colorClasses = getColorClasses(index);
          return (
            <div key={index} className="flex-shrink-0 p-8 relative w-120">
              <div className="relative overflow-hidden h-fit rounded-sm">
                <Image
                  src={`${rootUrl}/${image.name}` || "/placeholder.svg"}
                  alt={`Highlighted participant ${index + 1}`}
                  width={image.width}
                  height={image.height}
                  className="overflow-hidden select-none 
                            object-contain transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div
                className={cn(
                  `absolute top-8 left-5 -translate-y-1/2 rounded-sm 
                  flex items-center justify-center
              backdrop-blur-sm text-white w-12 h-12 text-2xl font-bold`,
                  colorClasses
                )}
              >
                {index + 1}
              </div>
            </div>
          );
        })}
      </CarouselContent>
      <CarouselPrevious
        className="w-15 h-15 backdrop-blur-sm left-3
            bg-gradient-to-bl from-primary/90 to-secondary-foreground/60 border-secondary/30! text-primary-foreground"
      />
      <CarouselNext
        className="w-15 h-15 backdrop-blur-sm right-3
            bg-gradient-to-br from-primary/90 to-secondary-foreground/60 border-secondary/30! text-primary-foreground"
      />
    </Carousel>
  );
}

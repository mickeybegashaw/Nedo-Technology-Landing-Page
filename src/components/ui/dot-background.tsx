import { cn } from "@/lib/utility";
import React from "react";

export function DotBackground({children}: { children: React.ReactNode }) {
  return (
    <div className="relative flex h-[30rem] w-full items-center justify-center">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:30px_30px]",
          "[background-image:radial-gradient(#d4d4d4_000px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center  [mask-image:radial-gradient(ellipse_at_center,transparent_70%,black)] "></div>
     
     {children}
    </div>
  );
}

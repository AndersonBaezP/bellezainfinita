"use client";

import { useState, useRef } from "react";
import Image from "next/image";

interface ImageZoomProps {
  src: string;
  alt: string;
}

export function ImageZoom({ src, alt }: ImageZoomProps) {
  const [isZooming, setIsZooming] = useState(false);
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setPosition({ x, y });
  };

  return (
    <div
      ref={containerRef}
      className="aspect-square relative rounded-xl overflow-hidden cursor-zoom-in group"
      onMouseEnter={() => setIsZooming(true)}
      onMouseLeave={() => setIsZooming(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Imagen normal */}
      <Image
        src={src}
        alt={alt}
        fill
        sizes="400px"
        className={`object-contain p-4 transition-opacity duration-300 ${
          isZooming ? "opacity-0" : "opacity-100"
        }`}
        priority
      />

      {/* Imagen con zoom */}
      <div
        className={`absolute inset-0 transition-opacity duration-300 ${
          isZooming ? "opacity-100" : "opacity-0"
        }`}
        style={{
          backgroundImage: `url(${src})`,
          backgroundPosition: `${position.x}% ${position.y}%`,
          backgroundSize: "200%",
          backgroundRepeat: "no-repeat",
        }}
      />
    </div>
  );
}

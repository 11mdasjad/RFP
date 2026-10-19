"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useData } from "@/context/DataContext";
import { 
  Maximize2, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ZoomIn, 
  ZoomOut,
  ImageIcon
} from "lucide-react";

export default function GalleryPage() {
  const { galleryItems } = useData();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  const total = galleryItems.length;

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setZoomLevel(1);
  };

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    setZoomLevel(1);
  }, []);

  const showPrev = useCallback(() => {
    if (lightboxIndex === null || total === 0) return;
    setLightboxIndex((prev) => ((prev! - 1 + total) % total));
    setZoomLevel(1);
  }, [lightboxIndex, total]);

  const showNext = useCallback(() => {
    if (lightboxIndex === null || total === 0) return;
    setLightboxIndex((prev) => ((prev! + 1) % total));
    setZoomLevel(1);
  }, [lightboxIndex, total]);

  const toggleZoom = useCallback(() => {
    setZoomLevel((prev) => (prev === 1 ? 1.6 : 1));
  }, []);

  // Keyboard navigation & body scroll lock
  useEffect(() => {
    if (lightboxIndex === null) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeLightbox();
      } else if (e.key === "ArrowLeft") {
        showPrev();
      } else if (e.key === "ArrowRight") {
        showNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxIndex, closeLightbox, showPrev, showNext]);

  const currentItem = lightboxIndex !== null ? galleryItems[lightboxIndex] : null;

  return (
    <main className="relative min-h-screen bg-[#0e0d12] text-[#f4f2f7] font-sans antialiased selection:bg-[#6b54ee] selection:text-white">
      {/* Navigation Header */}
      <Header />

      {/* Hero Header Section */}
      <section className="relative pt-32 pb-10 sm:pt-40 sm:pb-14 overflow-hidden border-b border-white/[0.08]">
        {/* Ambient Gradient Background Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-[#7c6af2]/20 via-[#a89bfa]/10 to-transparent blur-[140px] pointer-events-none rounded-full" />
        <div className="absolute -top-10 right-10 w-96 h-96 bg-[#D4AF37]/10 blur-[130px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-xs font-mono uppercase tracking-[0.2em] text-[#a89bfa] mb-4">
            <ImageIcon className="w-3.5 h-3.5 text-[#E6C665]" />
            <span>Image Archive</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-3">
            Visual Gallery
          </h1>

          {/* Subtitle with Count */}
          <p className="text-sm sm:text-base text-white/60 font-light max-w-xl mx-auto">
            {total} Production Stills & Photographs · Click any image to view in high resolution
          </p>
        </div>
      </section>

      {/* Pure Image Grid */}
      <section className="py-8 sm:py-12 max-w-[1600px] mx-auto px-3 sm:px-6 lg:px-8">
        {total === 0 ? (
          <div className="py-24 text-center border border-dashed border-white/[0.1] rounded-3xl bg-white/[0.01]">
            <ImageIcon className="w-12 h-12 text-white/30 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">No Images Available</h3>
            <p className="text-sm text-white/60">Images are being loaded...</p>
          </div>
        ) : (
          <div className="flex flex-wrap gap-2.5 sm:gap-4">
            {galleryItems.map((item, idx) => (
              <button
                key={item.id || idx}
                onClick={() => openLightbox(idx)}
                className="group relative aspect-square sm:aspect-[4/3] min-w-0 grow basis-[calc((100%-0.625rem)/2)] sm:basis-[calc((100%-2rem)/3)] md:basis-[calc((100%-3rem)/4)] lg:basis-[calc((100%-4rem)/5)] xl:basis-[calc((100%-5rem)/6)] overflow-hidden rounded-xl bg-[#17161d] border border-white/[0.08] hover:border-[#a89bfa]/60 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#a89bfa]"
                aria-label={`View photo ${idx + 1}`}
              >
                <img
                  src={item.image}
                  alt={`Photo ${idx + 1}`}
                  loading={idx < 6 ? undefined : "lazy"}
                  fetchPriority={idx === 0 ? "high" : undefined}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-108"
                />

                {/* Subtle Hover Gradient & Zoom Indicator */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[#a89bfa] flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300 shadow-xl">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}
      </section>

      {/* Lightbox Enlargement Modal */}
      {lightboxIndex !== null && currentItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center select-none"
          onClick={closeLightbox}
        >
          {/* Top Bar Controls */}
          <div 
            className="absolute top-0 inset-x-0 p-4 sm:p-6 flex items-center justify-between z-10 bg-gradient-to-b from-black/80 to-transparent"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Counter */}
            <div className="text-xs sm:text-sm font-mono text-white/70 tracking-wider bg-white/[0.08] px-3.5 py-1.5 rounded-full border border-white/[0.1] backdrop-blur-md">
              {lightboxIndex + 1} / {total}
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-2">
              <button
                onClick={toggleZoom}
                className="w-10 h-10 rounded-full bg-white/[0.08] hover:bg-white/[0.15] text-white/80 hover:text-white border border-white/[0.1] backdrop-blur-md flex items-center justify-center transition-all"
                title={zoomLevel === 1 ? "Zoom in" : "Reset zoom"}
                aria-label={zoomLevel === 1 ? "Zoom in" : "Reset zoom"}
              >
                {zoomLevel === 1 ? <ZoomIn className="w-4 h-4" /> : <ZoomOut className="w-4 h-4" />}
              </button>

              <button
                onClick={closeLightbox}
                className="w-10 h-10 rounded-full bg-white/[0.08] hover:bg-white/[0.2] text-white border border-white/[0.1] backdrop-blur-md flex items-center justify-center transition-all hover:rotate-90 duration-200"
                title="Close (Esc)"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black/50 hover:bg-black/80 text-white/80 hover:text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all z-10 hover:scale-105 active:scale-95"
            title="Previous (Left Arrow)"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black/50 hover:bg-black/80 text-white/80 hover:text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all z-10 hover:scale-105 active:scale-95"
            title="Next (Right Arrow)"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
          </button>

          {/* Main Enlarged Image Container */}
          <div
            className="relative max-w-[92vw] max-h-[86vh] flex items-center justify-center p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentItem.image}
              alt={`Photo ${lightboxIndex + 1}`}
              className={`max-w-[92vw] max-h-[85vh] object-contain rounded-lg shadow-2xl transition-transform duration-300 ease-out cursor-zoom-in ${
                zoomLevel > 1 ? "scale-150 cursor-zoom-out" : ""
              }`}
              onClick={toggleZoom}
            />
          </div>

          {/* Bottom Hint */}
          <div 
            className="absolute bottom-4 sm:bottom-6 text-center text-[11px] font-mono text-white/40 tracking-wider pointer-events-none"
          >
            Use ← → arrows to navigate · Esc to close · Click image to zoom
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </main>
  );
}

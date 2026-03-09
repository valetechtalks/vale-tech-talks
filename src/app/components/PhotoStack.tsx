"use client";

import { useState, CSSProperties } from "react";
import { ChevronRight } from "lucide-react";

const photos = [
  {
    src: "images/20250412_102644.jpg",
  },
  {
    src: "images/highres_459571805.avif",
  },
  {
    src: "images/PHOTO-2025-04-12-10-00-18.jpg",
  },
  {
    src: "images/PHOTO-2025-08-30-11-17-52.jpg",
  },
  {
    src: "images/PHOTO-2025-08-30-12-49-43.jpg",
  }
];

const SLIDE_LEFT_MS = 320;
const SLIDE_BACK_MS = 450;

type Phase = "idle" | "left" | "back";

export function PhotoStack() {
  const [stack, setStack] = useState(photos);
  const [phase, setPhase] = useState<Phase>("idle");

  const handleNext = () => {
    if (phase !== "idle") return;

    // Phase 1: slide the top card to the left
    setPhase("left");

    // Phase 2: slide it to the back; simultaneously start animating the next card forward.
    // The stack does NOT rotate here — same DOM order is preserved so the exiting card's
    // CSS transition continues uninterrupted from where the left animation left off.
    setTimeout(() => setPhase("back"), SLIDE_LEFT_MS);

    // Phase 3: rotate the stack now that everything is in its final visual position.
    setTimeout(() => {
      setStack((prev) => [...prev.slice(1), prev[0]]);
      setPhase("idle");
    }, SLIDE_LEFT_MS + SLIDE_BACK_MS);
  };

  const getCardStyle = (index: number): CSSProperties => {
    // ── Top card (position 0) ──────────────────────────────────────────────
    if (index === 0) {
      if (phase === "left") {
        return {
          zIndex: 30,
          transform: "translateX(-80%) rotate(-12deg) scale(0.88)",
          transition: `transform ${SLIDE_LEFT_MS}ms ease-in`,
          cursor: "default",
        };
      }
      if (phase === "back") {
        // Drop z-index so it slides behind the others; transition picks up
        // from the browser's current computed position (end of the left slide).
        return {
          zIndex: 1,
          transform: "rotate(8deg) translateY(24px) scale(0.88)",
          transition: `transform ${SLIDE_BACK_MS}ms ease-out`,
          cursor: "default",
        };
      }
      // idle
      return {
        zIndex: 30,
        transform: "rotate(0deg) translateY(0) scale(1)",
        transition: "transform 400ms ease-out",
        cursor: "pointer",
      };
    }

    // ── Next card (position 1) ─────────────────────────────────────────────
    if (index === 1) {
      if (phase === "back") {
        // Start moving to the top while the exiting card is still animating
        return {
          zIndex: 20,
          transform: "rotate(0deg) translateY(0) scale(1)",
          transition: "transform 400ms ease-out",
        };
      }
      return {
        zIndex: 20,
        transform: "rotate(4deg) translateY(12px) scale(0.94)",
        transition: "transform 400ms ease",
      };
    }

    // ── Third card (position 2) ────────────────────────────────────────────
    if (index === 2) {
      return {
        zIndex: 10,
        transform: "rotate(8deg) translateY(24px) scale(0.88)",
        transition: "transform 400ms ease",
      };
    }

    return { zIndex: 0, opacity: 0, pointerEvents: "none" };
  };

  // Caption and controls follow the next card during the back phase
  const activeDisplayIndex = phase === "back" ? 1 : 0;
  const activePhoto = stack[activeDisplayIndex];
  const activeIndex = photos.indexOf(stack[0]);

  return (
    <div className="flex flex-col items-center gap-12">
      {/* Card stack — always renders the same 4 DOM elements in the same order */}
      <div className="relative" style={{ width: 500, height: 375 }}>
        {stack.slice(0, 4).map((photo, index) => (
          <div
            key={photo.caption}
            className="absolute inset-0 rounded-2xl overflow-hidden border border-border shadow-2xl select-none group"
            style={getCardStyle(index)}
            onClick={index === 0 && phase === "idle" ? handleNext : undefined}
          >
            <img
              src={photo.src}
              alt={photo.caption}
              className="w-full h-full object-cover"
              draggable={false}
            />

            {/* Hover overlay — only on the interactive top card */}
            {index === 0 && phase === "idle" && (
              <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            )}

            {/* Caption — follows whichever card is visually on top */}
            {index === activeDisplayIndex && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-5">
                <p className="text-white font-semibold text-sm">
                  {activePhoto.caption}
                </p>
                <p className="text-white/60 text-xs mt-1">{activePhoto.date}</p>
              </div>
            )}

            {/* Hover hint */}
            {index === 0 && phase === "idle" && (
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-black/60 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-1.5">
                  <span className="text-white text-xs font-medium">Próxima</span>
                  <ChevronRight className="h-3 w-3 text-white" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Dots + button */}
      <div className="flex items-center gap-6">
        <div className="flex gap-2">
          {photos.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === activeIndex ? "w-6 bg-accent" : "w-1.5 bg-border"
              }`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          disabled={phase !== "idle"}
          className="inline-flex items-center gap-2 rounded-lg border border-border bg-card/50 px-4 py-2 text-sm text-muted hover:text-foreground hover:border-accent/50 transition-all disabled:opacity-50"
        >
          Próxima foto
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

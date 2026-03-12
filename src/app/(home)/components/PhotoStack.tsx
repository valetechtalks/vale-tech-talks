"use client";

import { useState, CSSProperties } from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

const photos = [
  { src: "images/20250412_102644.jpg" },
  { src: "images/highres_459571805.avif" },
  { src: "images/PHOTO-2025-04-12-10-00-18.jpg" },
  { src: "images/PHOTO-2025-08-30-12-49-27.jpg" },
  { src: "images/highres_459571810.avif" },
  { src: "images/PHOTO-2025-08-30-12-49-43.jpg" },
];

const SLIDE_LEFT_MS = 320;
const SLIDE_BACK_MS = 450;

// Visual positions for idle state — spread like photos on a table
const TOP    = "rotate(0deg) translateY(0) scale(1)";
const MIDDLE = "rotate(-7deg) translateX(22px) translateY(8px) scale(0.92)";
const BOTTOM = "rotate(11deg) translateX(-10px) translateY(16px) scale(0.86)";

type Phase = "idle" | "left" | "back";

export function PhotoStack() {
  const [stack, setStack] = useState(photos);
  const [phase, setPhase] = useState<Phase>("idle");

  const handleNext = () => {
    if (phase !== "idle") return;

    setPhase("left");
    setTimeout(() => setPhase("back"), SLIDE_LEFT_MS);

    // Rotate only after every card is already in its post-rotation visual position,
    // so the state change causes zero visible movement.
    setTimeout(() => {
      setStack((prev) => [...prev.slice(1), prev[0]]);
      setPhase("idle");
    }, SLIDE_LEFT_MS + SLIDE_BACK_MS);
  };

  const getCardStyle = (index: number): CSSProperties => {
    // ── Position 0 — current top card ─────────────────────────────────────
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
        // z-index drops immediately so it sinks behind the stack;
        // the transform transition picks up from where the left-slide left off.
        return {
          zIndex: 1,
          transform: BOTTOM,
          transition: `transform ${SLIDE_BACK_MS}ms ease-out`,
          cursor: "default",
        };
      }
      return {
        zIndex: 30,
        transform: TOP,
        transition: "transform 400ms ease-out",
        cursor: "pointer",
      };
    }

    // ── Position 1 — will become the new top ──────────────────────────────
    if (index === 1) {
      if (phase === "back") {
        // Animate to the top position in parallel with the exiting card.
        return {
          zIndex: 20,
          transform: TOP,
          transition: "transform 400ms ease-out",
        };
      }
      return {
        zIndex: 20,
        transform: MIDDLE,
        transition: "transform 400ms ease",
      };
    }

    // ── Position 2 — will become the new middle ────────────────────────────
    if (index === 2) {
      if (phase === "back") {
        // Pre-animate to the middle position so the stack rotation at the end
        // finds this card already in place — no visible jump.
        return {
          zIndex: 10,
          transform: MIDDLE,
          transition: "transform 400ms ease",
        };
      }
      return {
        zIndex: 10,
        transform: BOTTOM,
        transition: "transform 400ms ease",
      };
    }

    // ── Position 3 — will become the new bottom ────────────────────────────
    if (index === 3) {
      if (phase === "back") {
        // Pre-position at the bottom (no transition) while staying invisible,
        // so it's already in place when the stack rotates and it becomes visible.
        return {
          zIndex: 0,
          opacity: 0,
          transform: BOTTOM,
          transition: "none",
        };
      }
      return { zIndex: 0, opacity: 0, pointerEvents: "none" };
    }

    return { zIndex: 0, opacity: 0, pointerEvents: "none" };
  };

  const activeIndex = photos.indexOf(stack[0]);

  return (
    <div className="flex flex-col items-center gap-12 w-full">
      {/* Card stack — always renders the same DOM elements in the same order */}
      <div className="relative w-full max-w-[500px]" style={{ aspectRatio: "4/3" }}>
        {stack.slice(0, 4).map((photo, index) => (
          <div
            key={photo.src}
            className="absolute inset-0 rounded-2xl overflow-hidden border border-border shadow-2xl select-none group"
            style={getCardStyle(index)}
            onClick={index === 0 && phase === "idle" ? handleNext : undefined}
          >
            <Image
              src={photo.src}
              alt=""
              fill
              className="object-cover"
              draggable={false}
            />

            {/* Hover overlay */}
            {index === 0 && phase === "idle" && (
              <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
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

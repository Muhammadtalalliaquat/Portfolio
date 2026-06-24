"use client";
import Image from "next/image";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#ffff]">
      {/* Subtle purple radial glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(99,60,255,0.12),transparent_70%)]" />

      {/* Spinning ring + GIF */}
      <div className="relative mb-7 h-[100px] w-[100px]">
        <svg
          className="absolute inset-0 animate-spin"
          style={{ animationDuration: "1.4s" }}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="50"
            cy="50"
            r="44"
            stroke="rgba(255,255,255,0.07)"
            strokeWidth="2.5"
          />
          <circle
            cx="50"
            cy="50"
            r="44"
            stroke="#7c5cfc"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray="220"
            strokeDashoffset="60"
            transform="rotate(-90 50 50)"
            style={{ filter: "drop-shadow(0 0 6px rgba(124,92,252,0.7))" }}
          />
        </svg>
        <Image
          src="https://i.postimg.cc/FzGLHWtt/output-onlinegiftools.gif"
          alt="Loading..."
          width={54}
          height={54}
          className="absolute inset-0 m-auto animate-pulse rounded-full object-cover"
          style={{ animationDuration: "2.4s" }}
        />
      </div>

      {/* Name */}
      <h1 className="animate-fade-up text-[22px] font-medium tracking-[0.04em] text-black">
        Talal Liaquat<span className="text-[#7c5cfc]">.</span>
      </h1>

      {/* Subtitle */}
      <p className="mt-1.5 text-[11px] uppercase tracking-[0.2em] text-black/35">
        Portfolio loading
      </p>

      {/* Progress bar */}
      {/* <div className="relative mt-7 h-[2px] w-[200px] overflow-hidden rounded-full bg-black/[0.08]">
        <div
          className="h-full rounded-full"
          style={{
            background: "linear-gradient(90deg, #534ab7, #7c5cfc, #a48cfd)",
            animation: "progress 2s ease-in-out infinite",
          }}
        />
      </div>

      <div className="mt-4 flex gap-1.5">
        {[0, 200, 400].map((delay) => (
          <div
            key={delay}
            className="h-1 w-1 animate-pulse rounded-full bg-black/20"
            style={{ animationDelay: `${delay}ms` }}
          />
        ))}
      </div> */}

      <style jsx global>{`
        @keyframes progress {
          0% {
            width: 0%;
          }
          60% {
            width: 65%;
          }
          100% {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}

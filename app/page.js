"use client";

import { useState } from "react";
import Loader from "../components/Loader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  if (loading) return <Loader onFinish={() => setLoading(false)} />;

  return (
    <main className="h-screen w-full bg-black text-white overflow-hidden relative">

      {/* =========================
          BACKGROUND (YOU WILL REPLACE IMAGE)
      ========================= */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/bg.jpg')" }}
      />

      {/* =========================
          TOP NAVBAR
      ========================= */}
      <div className="absolute top-0 left-0 w-full flex items-center justify-between px-10 py-6 z-20">

        {/* LEFT LOGO */}
        <div className="tracking-[0.4em] text-sm">
          PARALLEL
        </div>

        {/* CENTER NAV */}
        <div className="hidden md:flex gap-12 text-xs tracking-[0.3em] opacity-70">
          <span>ABOUT</span>
          <span>VENTURES</span>
          <span>CONTACT</span>
        </div>

        {/* RIGHT MENU */}
        <div className="flex items-center gap-4 text-xs tracking-[0.3em]">
          <span className="opacity-70">MENU</span>
          <div className="flex flex-col gap-[4px]">
            <span className="w-6 h-[1px] bg-white"></span>
            <span className="w-6 h-[1px] bg-white"></span>
          </div>
        </div>

      </div>

      {/* =========================
          LEFT CONTENT
      ========================= */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 z-20 max-w-md">

        <div className="mb-6 flex items-center gap-4 opacity-60">
          <span className="text-sm">01</span>
          <span className="w-10 h-[1px] bg-white/50"></span>
        </div>

        <h1 className="text-[40px] md:text-[72px] tracking-[0.3em] font-light mb-6">
          PARALLEL
        </h1>

        <p className="text-sm opacity-60 leading-relaxed tracking-wide">
          BUILT THROUGH EXECUTION. <br />
          OPERATED WITH STRUCTURE.
        </p>

      </div>

      {/* =========================
          RIGHT PROGRESS NAV
      ========================= */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center">

        {/* LINE */}
        <div className="w-[1px] h-64 bg-white/20 relative">

          {/* ACTIVE DOT */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full"></div>

        </div>

        {/* LABELS */}
        <div className="mt-6 text-xs tracking-[0.3em] opacity-60 space-y-6 text-right">

          <div>
            <div>01</div>
            <div className="opacity-40">HOME</div>
          </div>

          <div>
            <div>02</div>
            <div className="opacity-40">ABOUT</div>
          </div>

          <div>
            <div>03</div>
            <div className="opacity-40">VENTURES</div>
          </div>

          <div>
            <div>04</div>
            <div className="opacity-40">CONTACT</div>
          </div>

        </div>

      </div>

      {/* =========================
          CENTER LIGHT SLIT
      ========================= */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">

        <div className="w-[3px] h-[60%] bg-white blur-[6px] opacity-90"></div>

      </div>

      {/* =========================
          BOTTOM SCROLL TEXT
      ========================= */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-xs tracking-[0.3em] opacity-60">
        SCROLL TO ENTER
      </div>

    </main>
  );
}
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Loader from "../components/Loader";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [pageReady, setPageReady] = useState(false);
  const [section, setSection] = useState(0);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const vh = window.innerHeight;
      const current = Math.round(window.scrollY / vh);
      setSection(Math.min(current, 3));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fade after loader
  useEffect(() => {
    if (!loading) {
      const t = setTimeout(() => setPageReady(true), 150);
      return () => clearTimeout(t);
    }
  }, [loading]);

  // Custom cursor
  useEffect(() => {
    const move = (e) => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const scrollToSection = (index) => {
    const vh = window.innerHeight;
    window.scrollTo({
      top: index * vh,
      behavior: "smooth",
    });
  };

  if (loading) return <Loader onFinish={() => setLoading(false)} />;

  const content = [
    { number: "01", title: "PARALLEL", desc: "" },
    {
      number: "02",
      title: "ABOUT",
      desc: "Parallel is a centralized operating company that builds, runs, and scales ventures through a unified execution system.",
    },
    { number: "03", title: "VENTURES", desc: "" },
    {
      number: "04",
      title: "CONNECT",
      desc: "connect@parallel.click",
    },
  ];

  const ventures = [
    "FEZA",
    "THE MARKER",
    "MASALACHA",
    "VYKING",
    "JAO ABROAD",
    "ATNATION",
  ];

  return (
    <main
      className={`h-[400vh] w-full bg-black text-white relative overflow-y-scroll snap-y snap-mandatory transition-opacity duration-700 ${
        pageReady ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* CUSTOM CURSOR */}
      <div
        className="fixed z-[999] pointer-events-none mix-blend-difference"
        style={{
          left: cursor.x,
          top: cursor.y,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className="w-5 h-5 border border-white rounded-full"></div>
      </div>

      {/* BACKGROUND */}
      <div
        className="fixed inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/bg.jpg')" }}
      />

      {/* ================= NAV (ONLY LOGO) ================= */}
      <div className="fixed top-0 left-0 w-full flex items-center justify-between px-6 md:px-10 py-6 z-20">

        <div
          onClick={() => scrollToSection(0)}
          className="cursor-pointer group"
        >
          <div className="w-10 md:w-14">
            <Image
              src="/logo.png"
              alt="logo"
              width={500}
              height={500}
              className="w-full h-auto opacity-90 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:scale-[1.04]"
              priority
            />
          </div>
        </div>

      </div>

      {/* ================= LEFT CONTENT ================= */}
      <div className="fixed left-6 md:left-10 top-1/2 -translate-y-1/2 z-20 max-w-sm">

        <div key={section} className="transition-all duration-700">

          <div className="mb-5 flex items-center gap-4 opacity-50">
            <span className="text-[11px] tracking-[0.2em]">
              {content[section].number}
            </span>
            <span className="w-8 h-[1px] bg-white/40"></span>
          </div>

          <h1 className="text-[28px] md:text-[64px] tracking-[0.22em] font-light mb-6">
            {content[section].title}
          </h1>

          {section !== 2 && content[section].desc && (
            <p className="text-[12px] md:text-sm opacity-50 leading-relaxed">
              {content[section].desc}
            </p>
          )}

          {/* VENTURES */}
          {section === 2 && (
            <div className="mt-6 space-y-3">
              {ventures.map((item, i) => (
                <div
                  key={i}
                  className="cursor-pointer opacity-60 hover:opacity-100 hover:translate-x-1 transition-all duration-300"
                >
                  {item}
                </div>
              ))}
            </div>
          )}

        </div>

      </div>

      {/* ================= RIGHT NAV ================= */}
      <div className="hidden md:flex fixed right-10 top-1/2 -translate-y-1/2 z-20 items-center gap-6">

        <div className="relative h-64 flex flex-col justify-between items-center">
          <div className="absolute w-[1px] h-full bg-white/15"></div>

          <div
            className="absolute left-1/2 -translate-x-1/2 w-[6px] h-[6px] bg-white rounded-full transition-all duration-700"
            style={{
              top: `${(section / 3) * 100}%`,
              transform: "translate(-50%, -50%)",
            }}
          />
        </div>

        <div className="flex flex-col justify-between h-64 text-[11px] tracking-[0.25em] text-right">
          {["HOME", "ABOUT", "VENTURES", "CONNECT"].map((label, i) => (
            <div
              key={i}
              onClick={() => scrollToSection(i)}
              className={`cursor-pointer transition-all duration-300 ${
                section === i ? "opacity-100" : "opacity-30"
              } hover:opacity-100 hover:tracking-[0.3em]`}
            >
              {label}
            </div>
          ))}
        </div>

      </div>

      {/* ================= MOBILE SCROLL INDICATOR ================= */}
      <div className="md:hidden fixed bottom-8 right-6 z-20 flex items-center gap-2 opacity-80 mix-blend-difference">

        <span className="text-[12px] tracking-[0.2em]">
          SCROLL
        </span>

        {/* Arrow */}
        <div className="flex flex-col items-center animate-bounce-slow">
          <span className="w-[1px] h-4 bg-white"></span>
          <span className="w-2 h-2 border-r border-b border-white rotate-45 -mt-1"></span>
        </div>

      </div>

      {/* LIGHT SLIT */}
      <div
        className={`fixed inset-0 flex justify-center items-center pointer-events-none transition-opacity duration-700 ${
          pageReady ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="w-[2px] h-[55%] bg-white opacity-70 blur-[8px]"></div>
      </div>

      {/* SNAP SECTIONS */}
      {[0, 1, 2, 3].map((i) => (
        <section key={i} className="h-screen snap-start"></section>
      ))}

      <style jsx>{`
      @keyframes bounceSlow {
        0%, 100% {
          transform: translateY(0);
          opacity: 0.6;
        }
        50% {
          transform: translateY(6px);
          opacity: 1;
        }
      }

      .animate-bounce-slow {
        animation: bounceSlow 1.8s ease-in-out infinite;
      }
    `}</style>

    </main>
  );
}
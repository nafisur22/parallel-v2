"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function Loader({ onFinish }) {
  useEffect(() => {
    const t = setTimeout(() => {
      onFinish();
    }, 1600);

    return () => clearTimeout(t);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-[9999]">

      <div className="animate-fade">
        <Image
          src="/logo.png"
          alt="Parallel Logo"
          width={70}
          height={70}
          style={{ width: 'auto', height: 'auto' }}
          priority
        />
      </div>

      <style jsx>{`
        @keyframes fade {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
          100% {
            opacity: 0.95;
            transform: scale(1.02);
          }
        }

        .animate-fade {
          animation: fade 1.6s ease-in-out forwards;
        }
      `}</style>

    </div>
  );
}
"use client";

import { useState } from "react";

export default function Instrucciones({ texto }: { texto: string }) {
  const [abierto, setAbierto] = useState(false);

  return (
    <div className="mt-1.5">
      <button
        onClick={() => setAbierto(!abierto)}
        className="text-[11px] font-semibold text-navy/50 hover:text-navy/80 transition-colors flex items-center gap-1 cursor-pointer select-none"
      >
        <span className="text-[10px]">{abierto ? "▼" : "▶"}</span>
        Instrucciones
      </button>
      {abierto && (
        <div className="mt-1.5 text-[11px] leading-relaxed text-navy/60 bg-navy/5 rounded-lg px-3 py-2 border border-navy/10 whitespace-pre-line">
          {texto}
        </div>
      )}
    </div>
  );
}

"use client";

import { useState } from "react";

export default function BibliotecaItem({ archivo }: { archivo: string }) {
  const [abierto, setAbierto] = useState(false);
  const nombre = archivo.replace(/\.pdf$/i, "");
  const url = `/biblioteca/${encodeURIComponent(archivo)}`;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-navy/10 overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3">
        <button
          onClick={() => setAbierto(!abierto)}
          className="flex items-center gap-3 flex-1 min-w-0 text-left cursor-pointer"
        >
          <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-geb-orange/10 text-xl shrink-0">
            📄
          </span>
          <span className="min-w-0">
            <span className="block text-sm font-semibold text-navy truncate">
              {nombre}
            </span>
            <span className="block text-xs text-navy/40">
              {abierto ? "Cerrar lector" : "Tocar para leer"}
            </span>
          </span>
        </button>
        <a
          href={url}
          download
          className="flex items-center justify-center w-10 h-10 rounded-xl bg-navy/5 hover:bg-navy/10 text-navy/60 transition-colors shrink-0"
          title="Descargar"
          aria-label={`Descargar ${nombre}`}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </a>
      </div>

      {abierto && (
        <div className="border-t border-navy/10">
          <iframe
            src={url}
            title={nombre}
            className="w-full h-[75vh] bg-gray-100"
          />
        </div>
      )}
    </div>
  );
}

"use client";

import { useState } from "react";
import type { Libro } from "./libros";
import PdfCover from "./pdf-cover";

export default function LibroCard({ libro }: { libro: Libro }) {
  const [abierto, setAbierto] = useState(false);
  const url = `/biblioteca/${encodeURIComponent(libro.archivo)}`;

  return (
    <div className="bg-surface rounded-2xl shadow-sm border border-border overflow-hidden">
      <div className="flex gap-4 p-4">
        {/* Portada */}
        <button
          onClick={() => setAbierto(!abierto)}
          className="shrink-0 w-24 sm:w-28 rounded-lg overflow-hidden shadow-md cursor-pointer hover:shadow-lg transition-shadow"
          aria-label={`Leer ${libro.titulo}`}
        >
          <PdfCover file={libro.archivo} className="aspect-[3/4] bg-surface-muted" />
        </button>

        {/* Info */}
        <div className="flex flex-col min-w-0 flex-1">
          <h2 className="text-sm font-bold text-ink leading-snug line-clamp-2">
            {libro.titulo}
          </h2>
          {libro.autor && (
            <p className="text-xs text-geb-orange font-medium mt-1 truncate">
              {libro.autor}
            </p>
          )}
          <div className="mt-auto pt-3 flex items-center gap-2">
            <button
              onClick={() => setAbierto(!abierto)}
              className="flex-1 text-xs font-semibold bg-geb-orange hover:bg-geb-orange-dark text-white py-2 px-3 rounded-lg transition-colors cursor-pointer"
            >
              {abierto ? "Cerrar" : "Leer"}
            </button>
            <a
              href={url}
              download
              className="flex items-center justify-center w-9 h-9 rounded-lg bg-surface-muted hover:bg-border text-ink-muted transition-colors shrink-0"
              title="Descargar"
              aria-label={`Descargar ${libro.titulo}`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Lector embebido */}
      {abierto && (
        <div className="border-t border-border">
          <iframe
            src={url}
            title={libro.titulo}
            className="w-full h-[75vh] bg-gray-100 dark:bg-gray-900"
          />
        </div>
      )}
    </div>
  );
}

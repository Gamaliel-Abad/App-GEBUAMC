"use client";

import { useState } from "react";
import type { DeclaracionSection } from "@/declaracion";

export default function IndiceDesplegable({
  secciones,
}: {
  secciones: DeclaracionSection[];
}) {
  const [abierto, setAbierto] = useState(false);

  const grupos = [
    {
      titulo: "Doctrinal",
      ids: secciones.filter((s) => s.id.startsWith("doctrinal")),
    },
    {
      titulo: "Evangelio",
      ids: secciones.filter((s) => s.id.startsWith("evangelio")),
    },
    {
      titulo: "Identidad GEBUAMC",
      ids: secciones.filter((s) => s.id.startsWith("identidad")),
    },
    {
      titulo: "Pacto del Líder",
      ids: secciones.filter((s) => s.id.startsWith("pacto")),
    },
  ];

  return (
    <div className="sticky top-[60px] z-20 shrink-0">
      <div className="bg-white border-b border-navy/10 shadow-md">
        <button
          onClick={() => setAbierto(!abierto)}
          className="w-full flex items-center justify-between px-4 py-4 text-left cursor-pointer select-none active:bg-navy/5"
        >
          <span className="font-bold text-navy text-base">
            📑 Índice
          </span>
          <span
            className={`text-navy/50 font-bold text-base transition-transform ${abierto ? "rotate-180" : ""}`}
          >
            ▼
          </span>
        </button>

        {abierto && (
          <div className="px-4 pb-4 max-h-[60vh] overflow-y-auto overscroll-contain">
            {grupos.map(
              (grupo) =>
                grupo.ids.length > 0 && (
                  <div key={grupo.titulo} className="mb-4 last:mb-0">
                    <span className="text-[11px] font-bold text-geb-orange uppercase tracking-wider">
                      {grupo.titulo}
                    </span>
                    <ul className="mt-1.5 flex flex-col gap-1">
                      {grupo.ids.map((sec, i) => (
                        <li key={sec.id}>
                          <a
                            href={`#${sec.id}`}
                            onClick={() => setAbierto(false)}
                            className="text-sm text-navy/70 hover:text-geb-orange hover:bg-geb-orange/5 transition-all py-1.5 px-3 block rounded-lg"
                          >
                            <span className="text-navy/30 font-mono text-xs mr-2">
                              {i + 1}.
                            </span>
                            {sec.titulo}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
            )}
          </div>
        )}
      </div>
    </div>
  );
}

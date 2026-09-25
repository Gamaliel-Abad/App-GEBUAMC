import Link from "next/link";
import { secciones } from "@/declaracion";
import IndiceDesplegable from "./indice";

export default function DeclaracionPage() {
  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <header className="sticky top-0 z-30 bg-navy px-4 py-4 shadow-md">
        <div className="max-w-lg mx-auto flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 transition-colors text-white font-bold text-lg shrink-0"
            aria-label="Regresar"
          >
            ←
          </Link>
          <h1 className="text-lg sm:text-xl font-bold text-white truncate">
            Declaración de Fe
          </h1>
        </div>
      </header>

      <IndiceDesplegable secciones={secciones} />

      <main className="flex-1 w-full max-w-lg mx-auto px-4 py-4 flex flex-col gap-5 shrink-0">
        {secciones.map((sec) => (
          <section key={sec.id} id={sec.id} className="scroll-mt-[120px]">
            <div className="bg-white rounded-2xl shadow-sm border border-navy/10 overflow-hidden">
              <div className="bg-navy/5 border-b border-navy/10 px-4 py-3">
                <h2 className="text-sm font-bold text-navy leading-snug">
                  {sec.titulo}
                </h2>
              </div>
              <div className="px-4 py-4">
                <div className="text-sm leading-relaxed text-navy/70 whitespace-pre-line">
                  {sec.contenido}
                </div>
              </div>
            </div>
          </section>
        ))}

        <div className="mt-4 flex flex-col items-center gap-3">
          <a
            href="/Declaracion_de_Fe_GEBUAMC.pdf"
            download
            className="flex items-center justify-center gap-2 w-full bg-geb-orange hover:bg-geb-orange-dark text-white font-bold py-4 px-6 rounded-2xl shadow-md hover:shadow-lg transition-all active:scale-[0.98] text-base"
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
            Descargar Declaración de Fe (PDF)
          </a>
        </div>
      </main>

      <footer className="py-4 text-center text-xs text-navy/40">
        GEBUAMC · Trimestre 26-O
      </footer>
    </div>
  );
}

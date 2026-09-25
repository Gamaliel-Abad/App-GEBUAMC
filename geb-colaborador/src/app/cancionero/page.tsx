import Link from "next/link";
import { canciones } from "@/canciones";

export default function CancioneroPage() {
  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <header className="sticky top-0 z-10 bg-navy px-4 py-4 shadow-md">
        <div className="max-w-md mx-auto flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 transition-colors text-white font-bold text-lg"
            aria-label="Regresar"
          >
            ←
          </Link>
          <h1 className="text-xl sm:text-2xl font-bold text-white truncate">
            Cancionero GEBUAMC
          </h1>
        </div>
      </header>

      <main className="flex-1 w-full max-w-md mx-auto px-4 py-6 flex flex-col gap-3">
        <p className="text-center text-sm text-navy/50 mb-2">
          16 cantos · 26 Otoño
        </p>

        {canciones.map((cancion) => (
          <Link
            key={cancion.id}
            href={`/cancionero/${cancion.id}`}
            className="flex items-center gap-3 bg-white hover:bg-navy/5 rounded-2xl shadow-sm border border-navy/10 px-4 py-4 transition-all active:scale-[0.98]"
          >
            <span className="flex items-center justify-center w-9 h-9 rounded-full bg-navy/10 text-navy font-bold text-sm shrink-0">
              {cancion.id}
            </span>
            <div className="flex flex-col min-w-0 flex-1">
              <span className="font-semibold text-navy text-sm leading-tight truncate">
                {cancion.titulo}
              </span>
              <span className="text-xs text-navy/50 truncate">
                {cancion.artista}
              </span>
            </div>
            <svg
              className="w-5 h-5 text-navy/30 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        ))}

        <div className="mt-6 flex flex-col items-center gap-3">
          <a
            href="/Cancionero_GEBUAMC.pdf"
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
            Descargar Cancionero (PDF)
          </a>
          <p className="text-xs text-navy/40 text-center">
            Archivo PDF con acordes y letras
          </p>
        </div>
      </main>

      <footer className="py-4 text-center text-xs text-navy/40">
        GEBUAMC · Trimestre 26-O
      </footer>
    </div>
  );
}

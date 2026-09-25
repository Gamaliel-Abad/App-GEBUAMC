import Link from "next/link";
import Image from "next/image";
import { colaboradores } from "@/data";

export default function ColaboradoresHome() {
  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <header className="sticky top-0 z-10 bg-geb-orange px-4 py-4 shadow-md">
        <div className="max-w-md mx-auto flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 transition-colors text-white font-bold text-lg"
            aria-label="Regresar"
          >
            ←
          </Link>
          <h1 className="text-xl sm:text-2xl font-bold text-white truncate">
            Colaboradores
          </h1>
        </div>
      </header>

      <main className="flex-1 w-full max-w-md mx-auto px-4 py-6 flex flex-col gap-3">
        {colaboradores.map((col) => (
          <Link
            key={col.nombre}
            href={`/colaboradores/${encodeURIComponent(col.nombre)}`}
            className="block w-full bg-geb-orange hover:bg-geb-orange-dark text-white font-semibold text-center py-4 px-6 rounded-2xl shadow-md hover:shadow-lg transition-all active:scale-[0.98] text-lg"
          >
            {col.nombre}
          </Link>
        ))}
      </main>

      <footer className="py-4 text-center text-xs text-navy/40">
        GEBUAMC · Trimestre 26-O
      </footer>
    </div>
  );
}

import Link from "next/link";
import fs from "fs";
import path from "path";
import BibliotecaItem from "./biblioteca-item";

function getArchivos(): string[] {
  const dir = path.join(process.cwd(), "public", "biblioteca");
  try {
    return fs
      .readdirSync(dir)
      .filter((f) => f.toLowerCase().endsWith(".pdf"))
      .sort();
  } catch {
    return [];
  }
}

export default function BibliotecaPage() {
  const archivos = getArchivos();

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
            📚 Biblioteca
          </h1>
        </div>
      </header>

      <main className="flex-1 w-full max-w-lg mx-auto px-4 py-6 flex flex-col gap-3">
        <p className="text-xs text-navy/40 text-center mb-2">
          {archivos.length} archivo{archivos.length !== 1 ? "s" : ""} PDF
          disponible{archivos.length !== 1 ? "s" : ""}
        </p>

        {archivos.length === 0 ? (
          <div className="bg-white rounded-2xl border border-navy/10 px-4 py-10 text-center">
            <p className="text-4xl mb-2">📂</p>
            <p className="text-sm text-navy/50">
              Coloca archivos PDF en la carpeta{" "}
              <code className="bg-navy/5 px-1.5 py-0.5 rounded">
                public/biblioteca/
              </code>{" "}
              y volverán a aparecer aquí.
            </p>
          </div>
        ) : (
          archivos.map((archivo) => (
            <BibliotecaItem key={archivo} archivo={archivo} />
          ))
        )}
      </main>

      <footer className="py-4 text-center text-xs text-navy/40">
        GEBUAMC · Trimestre 26-O
      </footer>
    </div>
  );
}

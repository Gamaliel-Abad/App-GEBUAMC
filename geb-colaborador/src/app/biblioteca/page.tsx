import Link from "next/link";
import fs from "fs";
import path from "path";
import { getLibros } from "./libros";
import LibroCard from "./libro-card";

function getArchivos(): string[] {
  const dir = path.join(process.cwd(), "public", "biblioteca");
  try {
    return fs.readdirSync(dir).filter((f) => f.toLowerCase().endsWith(".pdf"));
  } catch {
    return [];
  }
}

export default function BibliotecaPage() {
  const libros = getLibros(getArchivos());

  return (
    <div className="min-h-screen flex flex-col bg-bg">
      <header className="sticky top-0 z-30 bg-header-bg px-4 py-4 shadow-md">
        <div className="max-w-lg mx-auto flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 transition-colors text-white font-bold text-lg shrink-0"
            aria-label="Regresar"
          >
            ←
          </Link>
          <div className="flex flex-col min-w-0">
            <h1 className="text-lg sm:text-xl font-bold text-white truncate">
              📚 Biblioteca
            </h1>
            <span className="text-xs text-white/50">
              {libros.length} recurso{libros.length !== 1 ? "s" : ""}
            </span>
          </div>
        </div>
      </header>

      <main className="flex-1 w-full max-w-lg mx-auto px-4 py-5">
        {libros.length === 0 ? (
          <div className="bg-surface rounded-2xl border border-border px-4 py-10 text-center">
            <p className="text-4xl mb-2">📂</p>
            <p className="text-sm text-ink-muted">
              Coloca archivos PDF en la carpeta{" "}
              <code className="bg-surface-muted px-1.5 py-0.5 rounded">
                public/biblioteca/
              </code>{" "}
              y aparecerán aquí automáticamente.
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {libros.map((libro) => (
              <LibroCard key={libro.archivo} libro={libro} />
            ))}
          </div>
        )}
      </main>

      <footer className="py-4 text-center text-xs text-ink-faint">
        GEBUAMC · Trimestre 26-O
      </footer>
    </div>
  );
}

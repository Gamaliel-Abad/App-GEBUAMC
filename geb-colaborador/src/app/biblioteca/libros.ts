export interface Libro {
  archivo: string;
  titulo: string;
  autor: string;
}

function parseFilename(filename: string): { titulo: string; autor: string } {
  const base = filename.replace(/\.pdf$/i, "");

  const parts = base.split(" - ");
  if (parts.length >= 2) {
    const autor = parts[parts.length - 1].trim();
    const titulo = parts.slice(0, -1).join(" - ").trim();
    if (titulo && autor) return { titulo, autor };
  }

  return { titulo: base, autor: "" };
}

export function getLibros(archivos: string[]): Libro[] {
  return archivos
    .filter((f) => f.toLowerCase().endsWith(".pdf"))
    .sort()
    .map((archivo) => {
      const { titulo, autor } = parseFilename(archivo);
      return { archivo, titulo, autor };
    });
}

import Link from "next/link";
import { notFound } from "next/navigation";
import { canciones } from "@/canciones";

export default async function CancionPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const cancion = canciones.find((c) => c.id === id);

  if (!cancion) {
    notFound();
  }

  const videoId = cancion.youtube.includes("youtu.be")
    ? cancion.youtube.split("youtu.be/")[1]?.split("?")[0]
    : new URL(cancion.youtube).searchParams.get("v");

  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <header className="sticky top-0 z-10 bg-navy px-4 py-4 shadow-md">
        <div className="max-w-lg mx-auto flex items-center gap-3">
          <Link
            href="/cancionero"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 transition-colors text-white font-bold text-lg shrink-0"
            aria-label="Regresar"
          >
            ←
          </Link>
          <div className="flex flex-col min-w-0">
            <h1 className="text-lg sm:text-xl font-bold text-white truncate">
              {cancion.titulo}
            </h1>
            <span className="text-xs text-white/60 truncate">
              {cancion.artista} · 
              {/*Tono: {cancion.tono} */}
            </span>
          </div>
        </div>
      </header>

      <main className="flex-1 w-full max-w-lg mx-auto px-4 py-6 flex flex-col gap-6">
        {videoId && (
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg bg-black">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              title={cancion.titulo}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        )}

        <div className="bg-white rounded-2xl shadow-sm border border-navy/10 p-5">
          <h2 className="text-sm font-bold text-navy/40 uppercase tracking-wide mb-4">
            Letra
          </h2>
          <div className="text-base leading-loose text-navy/80 whitespace-pre-line font-mono">
            {cancion.letra}
          </div>
        </div>

        <a
          href={cancion.youtube}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-6 rounded-2xl shadow-md hover:shadow-lg transition-all active:scale-[0.98] text-base"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
          Ver en YouTube
        </a>
      </main>

      <footer className="py-4 text-center text-xs text-navy/40">
        GEBUAMC · Trimestre 26-O
      </footer>
    </div>
  );
}

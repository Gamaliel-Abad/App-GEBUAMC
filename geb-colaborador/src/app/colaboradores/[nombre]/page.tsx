import Link from "next/link";
import { notFound } from "next/navigation";
import { colaboradores } from "@/data";
import Instrucciones from "./instrucciones";

const areaColors: Record<string, string> = {
  Multimedia: "bg-geb-orange/10 text-geb-orange-dark border-geb-orange/30",
  "Exposición Bíblica": "bg-navy/10 text-navy border-navy/30",
  Alabanza: "bg-green-100 text-green-800 border-green-300",
};

const areaIcons: Record<string, string> = {
  Multimedia: "📱",
  "Exposición Bíblica": "📖",
  Alabanza: "🎵",
};

export default async function ColaboradorPage({
  params,
}: {
  params: Promise<{ nombre: string }>;
}) {
  const { nombre } = await params;
  const decoded = decodeURIComponent(nombre);
  const colaborador = colaboradores.find(
    (c) => c.nombre.toLowerCase() === decoded.toLowerCase()
  );

  if (!colaborador) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <header className="sticky top-0 z-10 bg-geb-orange px-4 py-4 shadow-md">
        <div className="max-w-md mx-auto flex items-center gap-3">
          <Link
            href="/colaboradores"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 transition-colors text-white font-bold text-lg"
            aria-label="Regresar"
          >
            ←
          </Link>
          <h1 className="text-xl sm:text-2xl font-bold text-white truncate">
            {colaborador.nombre}
          </h1>
        </div>
      </header>

      <main className="flex-1 w-full max-w-md mx-auto px-4 py-6 flex flex-col gap-4">
        {colaborador.semanas.length === 0 ? (
          <p className="text-center text-navy/50 mt-12">
            No hay asignaciones para este colaborador.
          </p>
        ) : (
          colaborador.semanas.map((sem) => (
            <div
              key={sem.semana}
              className="bg-white rounded-2xl shadow-sm border border-navy/10 overflow-hidden"
            >
              <div className="bg-navy px-4 py-3">
                <h2 className="text-white font-bold text-lg">
                  Semana {sem.semana}
                </h2>
              </div>
              <div className="px-4 py-3 flex flex-col gap-2">
                {sem.tareas.map((tarea, i) => (
                  <div
                    key={i}
                    className={`rounded-xl px-3 py-2 border ${
                      areaColors[tarea.area] ?? "bg-gray-50 text-gray-700 border-gray-200"
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      <span className="text-lg mt-0.5 shrink-0">
                        {areaIcons[tarea.area] ?? "📌"}
                      </span>
                      <div className="flex flex-col">
                        <span className="text-xs font-semibold uppercase tracking-wide opacity-70">
                          {tarea.area}
                        </span>
                        <span className="font-medium text-sm">{tarea.rol}</span>
                        {tarea.detalle && (
                          <span className="text-xs opacity-70 mt-0.5">
                            {tarea.detalle}
                          </span>
                        )}
                      </div>
                    </div>
                    {tarea.instrucciones && (
                      <div className="ml-8">
                        <Instrucciones texto={tarea.instrucciones} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </main>

      <footer className="py-4 text-center text-xs text-navy/40">
        GEBUAMC · Trimestre 26-O
      </footer>
    </div>
  );
}

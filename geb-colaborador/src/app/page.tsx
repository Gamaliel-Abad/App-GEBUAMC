import Image from "next/image";
import Link from "next/link";
import { canciones } from "@/canciones";

// ═══════════════════════════════════════════════
// CAMBIA EL TÍTULO DE LA ENSEÑANZA AQUÍ:
const ENSENANZA_TITULO = "¿El evangelio se vive ganando o perdiendo?";
const ENSENANZA_REFERENCIA = "Mateo 18:23-35";
const ENSENANZA_FECHA = "Trimestre 26-O — Semana Actual";
// ═══════════════════════════════════════════════

// ═══════════════════════════════════════════════
// PON LOS 3 CANTOS AQUÍ (por su ID del cancionero):

const CANTOS_SEMANA = ["5", "11", "11"];
// ═══════════════════════════════════════════════

const cantosSeleccionados = CANTOS_SEMANA.map(
  (id) => canciones.find((c) => c.id === id)
).filter(Boolean);

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-[#fffcf7] px-4 py-10">
      <header className="flex flex-col items-center mb-8">
        <Image
          src="/geb-logo.png"
          alt="GEB UAM C"
          width={200}
          height={200}
          priority
          className="w-44 h-auto sm:w-52"
        />
        <h1 className="mt-4 text-2xl sm:text-3xl font-bold text-navy text-center">
          GEBUAMC App
        </h1>
        <p className="mt-1 text-sm text-navy/50 text-center">
          Trimestre 26-O
        </p>
      </header>

      <main className="w-full max-w-sm flex flex-col gap-4">
        {/* Enseñanza de la semana */}
        <div className="bg-white rounded-2xl shadow-sm border border-navy/10 px-4 py-4">
          <span className="text-[10px] font-bold text-geb-orange uppercase tracking-wide">
            Enseñanza
          </span>
          <h2 className="mt-1 text-lg font-bold text-navy leading-snug">
            {ENSENANZA_TITULO}
          </h2>
          <p className="text-xs text-navy/50 mt-1">
            {ENSENANZA_REFERENCIA} · {ENSENANZA_FECHA}
          </p>
        </div>

        {/* Cantos de la semana */}
        {cantosSeleccionados.length > 0 && (
          <div className="bg-white rounded-2xl shadow-sm border border-navy/10 overflow-hidden">
            <div className="px-4 py-3 border-b border-navy/10">
              <span className="text-[10px] font-bold text-geb-orange uppercase tracking-wide">
                Cantos para hoy
              </span>
            </div>
            <div className="flex flex-col divide-y divide-navy/5">
              {cantosSeleccionados.map(
                (c) =>
                  c && (
                    <Link
                      key={c.id}
                      href={`/cancionero/${c.id}`}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-navy/5 transition-colors"
                    >
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-geb-orange/10 text-geb-orange font-bold text-sm shrink-0">
                        {c.id}
                      </span>
                      <div className="flex flex-col min-w-0">
                        <span className="text-sm font-semibold text-navy truncate">
                          {c.titulo}
                        </span>
                        <span className="text-xs text-navy/40 truncate">
                          {c.artista}
                        </span>
                      </div>
                      <span className="ml-auto text-navy/30 text-lg shrink-0">
                        ›
                      </span>
                    </Link>
                  )
              )}
            </div>
          </div>
        )}

        {/* Botones principales */}
        <Link
          href="/colaboradores"
          className="flex flex-col items-center justify-center w-full bg-geb-orange hover:bg-geb-orange-dark text-white font-bold py-7 px-6 rounded-3xl shadow-lg hover:shadow-xl transition-all active:scale-[0.97] text-lg text-center gap-2"
        >
          <span className="text-3xl">👥</span>
          Colaboradores GEBUAMC
        </Link>

        <Link
          href="/cancionero"
          className="flex flex-col items-center justify-center w-full bg-navy hover:bg-navy-light text-white font-bold py-7 px-6 rounded-3xl shadow-lg hover:shadow-xl transition-all active:scale-[0.97] text-lg text-center gap-2"
        >
          <span className="text-3xl">🎵</span>
          Cancionero
        </Link>

        <Link
          href="/declaracion"
          className="flex flex-col items-center justify-center w-full bg-geb-orange-dark hover:bg-geb-orange text-white font-bold py-7 px-6 rounded-3xl shadow-lg hover:shadow-xl transition-all active:scale-[0.97] text-lg text-center gap-2"
        >
          <span className="text-3xl">📖</span>
          Declaración de Fe
        </Link>
      </main>

      <footer className="mt-12 mb-6 text-xs text-navy/40 text-center">
        GEBUAMC · Trimestre 26-O
      </footer>
    </div>
  );
}

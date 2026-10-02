import Image from "next/image";
import Link from "next/link";
import { canciones } from "@/canciones";
import BotonInstalar from "./boton-instalar";

// ═══════════════════════════════════════════════
// CAMBIA EL TÍTULO DE LA ENSEÑANZA AQUÍ:
const ENSENANZA_TITULO = "Confía en el Rey";
const ENSENANZA_REFERENCIA = "Mateo 13:24-30";
const ENSENANZA_FECHA = "Trimestre 26-O — Semana Actual";
// ═══════════════════════════════════════════════

// ═══════════════════════════════════════════════
// PON LOS 3 CANTOS AQUÍ (por su ID del cancionero):

const CANTOS_SEMANA = ["3", "4", "10"];
// ═══════════════════════════════════════════════

const cantosSeleccionados = CANTOS_SEMANA.map(
  (id) => canciones.find((c) => c.id === id)
).filter(Boolean);

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-bg px-4 py-10">
      <header className="flex flex-col items-center mb-8">
        <Image
          src="/geb-logo.png"
          alt="GEB UAM C"
          width={200}
          height={200}
          priority
          className="w-44 h-auto sm:w-52"
        />
        <h1 className="mt-4 text-2xl sm:text-3xl font-bold text-ink text-center">
          GEBUAMC App
        </h1>
        <p className="mt-1 text-sm text-ink-muted text-center">
          Trimestre 26-O
        </p>
      </header>

      <main className="w-full max-w-sm flex flex-col gap-4">
        {/* Enseñanza de la semana */}
        <div className="bg-surface rounded-2xl shadow-sm border border-border px-4 py-4">
          <span className="text-[10px] font-bold text-geb-orange uppercase tracking-wide">
            Enseñanza
          </span>
          <h2 className="mt-1 text-lg font-bold text-ink leading-snug">
            {ENSENANZA_TITULO}
          </h2>
          <p className="text-xs text-ink-muted mt-1">
            {ENSENANZA_REFERENCIA} · {ENSENANZA_FECHA}
          </p>
        </div>

        {/* Cantos de la semana */}
        {cantosSeleccionados.length > 0 && (
          <div className="bg-surface rounded-2xl shadow-sm border border-border overflow-hidden">
            <div className="px-4 py-3 border-b border-border">
              <span className="text-[10px] font-bold text-geb-orange uppercase tracking-wide">
                Cantos para hoy
              </span>
            </div>
            <div className="flex flex-col divide-y divide-border">
              {cantosSeleccionados.map(
                (c) =>
                  c && (
                    <Link
                      key={c.id}
                      href={`/cancionero/${c.id}`}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-surface-muted transition-colors"
                    >
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-geb-orange/10 text-geb-orange font-bold text-sm shrink-0">
                        {c.id}
                      </span>
                      <div className="flex flex-col min-w-0">
                        <span className="text-sm font-semibold text-ink truncate">
                          {c.titulo}
                        </span>
                        <span className="text-xs text-ink-faint truncate">
                          {c.artista}
                        </span>
                      </div>
                      <span className="ml-auto text-ink-faint text-lg shrink-0">
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
          href="/biblioteca"
          className="flex flex-col items-center justify-center w-full bg-geb-orange-dark hover:bg-geb-orange text-white font-bold py-7 px-6 rounded-3xl shadow-lg hover:shadow-xl transition-all active:scale-[0.97] text-lg text-center gap-2"
        >
          <span className="text-3xl">📚</span>
          Biblioteca
        </Link>

        <Link
          href="/declaracion"
          className="flex flex-col items-center justify-center w-full bg-navy-light hover:bg-navy text-white font-bold py-7 px-6 rounded-3xl shadow-lg hover:shadow-xl transition-all active:scale-[0.97] text-lg text-center gap-2"
        >
          <span className="text-3xl">📖</span>
          Declaración de Fe
        </Link>
      </main>

      <footer className="mt-12 mb-6 flex flex-col items-center gap-4">
        <BotonInstalar />
        <span className="text-xs text-ink-faint text-center">
          GEBUAMC · Trimestre 26-O
        </span>
      </footer>
    </div>
  );
}

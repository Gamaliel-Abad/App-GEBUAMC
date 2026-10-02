"use client";

import { useEffect, useState } from "react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export default function BotonInstalar() {
  const [prompt, setPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [instalado, setInstalado] = useState(false);
  const [instrucciones, setInstrucciones] = useState(false);

  useEffect(() => {
    if (
      window.matchMedia("(display-mode: standalone)").matches ||
      window.matchMedia("(display-mode: minimal-ui)").matches
    ) {
      setInstalado(true);
    }

    const handler = (e: Event) => {
      e.preventDefault();
      setPrompt(e as BeforeInstallPromptEvent);
    };
    window.addEventListener("beforeinstallprompt", handler);

    const installedHandler = () => {
      setInstalado(true);
      setPrompt(null);
    };
    window.addEventListener("appinstalled", installedHandler);

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
      window.removeEventListener("appinstalled", installedHandler);
    };
  }, []);

  if (instalado) return null;

  const instalar = async () => {
    if (prompt) {
      await prompt.prompt();
      const { outcome } = await prompt.userChoice;
      if (outcome === "accepted") setInstalado(true);
      setPrompt(null);
    } else {
      setInstrucciones((v) => !v);
    }
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <button
        onClick={instalar}
        className="flex items-center gap-1.5 text-[11px] text-navy/40 hover:text-navy/70 underline underline-offset-2 transition-colors cursor-pointer"
      >
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          />
        </svg>
        {prompt ? "Instalar app en tu teléfono" : "¿Cómo instalar la app?"}
      </button>

      {instrucciones && !prompt && (
        <div className="bg-white rounded-xl border border-navy/10 px-4 py-3 max-w-xs text-center">
          <p className="text-xs text-navy/60 leading-relaxed">
            Abre el menú del navegador
            <span className="font-bold"> ⋮ </span>
            y elige{" "}
            <span className="font-semibold text-navy">
              «Instalar aplicación»
            </span>{" "}
            o «Agregar a pantalla de inicio».
          </p>
        </div>
      )}
    </div>
  );
}

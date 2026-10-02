"use client";

import { useEffect, useRef, useState } from "react";
import * as pdfjsLib from "pdfjs-dist";

pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

interface PdfCoverProps {
  file: string;
  className?: string;
}

export default function PdfCover({ file, className = "" }: PdfCoverProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!visible || loaded) return;
    let cancelled = false;

    (async () => {
      try {
        const url = `/biblioteca/${encodeURIComponent(file)}`;
        const loadingTask = pdfjsLib.getDocument({ url });
        const doc = await loadingTask.promise;
        if (cancelled) {
          loadingTask.destroy();
          return;
        }

        const page = await doc.getPage(1);
        const baseViewport = page.getViewport({ scale: 1 });
        const targetWidth = 400;
        const scale = targetWidth / baseViewport.width;
        const viewport = page.getViewport({ scale });

        const canvas = canvasRef.current;
        if (!canvas) {
          loadingTask.destroy();
          return;
        }
        canvas.width = viewport.width;
        canvas.height = viewport.height;

        const ctx = canvas.getContext("2d");
        if (!ctx) {
          loadingTask.destroy();
          return;
        }

        await page.render({ canvas, viewport }).promise;
        if (!cancelled) setLoaded(true);
        loadingTask.destroy();
      } catch {
        if (!cancelled) setError(true);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [visible, loaded, file]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {!loaded && !error && (
        <div className="absolute inset-0 flex items-center justify-center bg-surface-muted animate-pulse">
          <span className="text-2xl">📄</span>
        </div>
      )}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-surface-muted">
          <span className="text-3xl">📕</span>
        </div>
      )}
      <canvas
        ref={canvasRef}
        className={`w-full h-auto block transition-opacity duration-300 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}

"use client";

export default function ThemeInit() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `(function(){try{var t=localStorage.getItem("geb-theme");if(t==="dark")document.documentElement.classList.add("dark")}catch(e){}})()`,
      }}
    />
  );
}

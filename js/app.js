/* Página principal: contador, canciones, galería y mensajitos. */
(() => {
  const $ = id => document.getElementById(id);
  const pad = n => String(n).padStart(2, "0");

  // Contador
  const ids = { d: $("c-dias"), h: $("c-horas"), m: $("c-minutos"), s: $("c-segundos") };
  function actualizar() {
    let t = Math.max(0, Math.floor((Date.now() - CONFIG.fechaInicio.getTime()) / 1000));
    const d = Math.floor(t / 86400); t -= d * 86400;
    const h = Math.floor(t / 3600);  t -= h * 3600;
    const m = Math.floor(t / 60);
    ids.d.textContent = d;
    ids.h.textContent = pad(h);
    ids.m.textContent = pad(m);
    ids.s.textContent = pad(t - m * 60);
  }
  actualizar();
  setInterval(actualizar, 1000);

  // Canciones de Spotify
  $("songs").innerHTML = CONFIG.canciones.map((id, i) =>
    `<div class="song"><iframe title="Canción ${i + 1} en Spotify" loading="lazy"
      src="https://open.spotify.com/embed/track/${id}"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
      <a href="https://open.spotify.com/track/${id}" target="_blank" rel="noopener">Abrir en Spotify</a></div>`
  ).join("");

  // Mensajitos
  CONFIG.mensajes.forEach(t => {
    const p = document.createElement("p");
    p.className = "note-card";
    p.textContent = t;
    $("notes").appendChild(p);
  });

  // Galería: un bloque por fecha
  const fechaTexto = d => d === "99999999" ? "Más recuerdos"
    : new Date(+d.slice(0, 4), +d.slice(4, 6) - 1, +d.slice(6, 8))
        .toLocaleDateString("es", { day: "numeric", month: "long", year: "numeric" });
  const caja = $("lightbox"), grande = $("lightbox-img");

  function figura(r) {
    const fig = document.createElement("figure");
    fig.style.aspectRatio = `${r.w} / ${r.h}`;
    let media;
    if (r.t === "video") {
      media = document.createElement("video");
      media.controls = true;
      media.playsInline = true;
      media.preload = "none";
      media.poster = r.poster;
      media.src = r.src;
    } else {
      media = document.createElement("img");
      media.loading = "lazy";
      media.alt = "Recuerdo del " + fechaTexto(r.d).toLowerCase();
      media.src = r.src;
      fig.classList.add("zoom");
      fig.addEventListener("click", () => { grande.src = r.src; caja.showModal(); });
    }
    fig.appendChild(media);
    return fig;
  }

  const grupos = new Map();
  CONFIG.recuerdos.forEach(r => grupos.set(r.d, [...(grupos.get(r.d) || []), r]));
  const galeria = $("gallery");
  grupos.forEach((lista, d) => {
    const h = document.createElement("h3");
    h.textContent = fechaTexto(d);
    const bloque = document.createElement("div");
    bloque.className = "gallery";
    bloque.append(...lista.map(figura));
    galeria.append(h, bloque);
  });

  caja.addEventListener("click", () => caja.close());
  caja.addEventListener("close", () => { grande.removeAttribute("src"); });
})();

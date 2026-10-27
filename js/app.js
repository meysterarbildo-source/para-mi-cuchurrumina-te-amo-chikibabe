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
    const s = t - m * 60;
    ids.d.textContent = d;
    ids.h.textContent = pad(h);
    ids.m.textContent = pad(m);
    ids.s.textContent = pad(s);
  }
  actualizar();
  setInterval(actualizar, 1000);

  // Canciones de Spotify
  $("songs").innerHTML = CONFIG.canciones.map((id, i) =>
    `<iframe title="Canción ${i + 1} en Spotify" loading="lazy"
      src="https://open.spotify.com/embed/track/${id}?utm_source=generator&theme=0"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`
  ).join("");

  // Mensajitos
  $("notes").innerHTML = CONFIG.mensajes.map(t => {
    const p = document.createElement("p");
    p.className = "note-card";
    p.textContent = t;
    return p.outerHTML;
  }).join("");

  // Galería: recuerdos fijos + los del almacenamiento externo
  const esVideo = src => /\.(mp4|mov|webm|m4v)(\?|$)/i.test(src);
  function figura({ src, texto }) {
    const fig = document.createElement("figure");
    let media;
    if (esVideo(src)) {
      media = document.createElement("video");
      media.controls = true;
      media.playsInline = true;
      media.preload = "metadata";
    } else {
      media = document.createElement("img");
      media.loading = "lazy";
      media.alt = texto || "Recuerdo";
    }
    media.src = src;
    fig.appendChild(media);
    if (texto) {
      const cap = document.createElement("figcaption");
      cap.textContent = texto;
      fig.appendChild(cap);
    }
    return fig;
  }

  async function cargarGaleria() {
    const remotos = await Almacen.listar().catch(() => []);
    const todos = [...CONFIG.recuerdos, ...remotos];
    const galeria = $("gallery");
    galeria.replaceChildren(...todos.map(figura));
    $("gallery-empty").hidden = todos.length > 0;
  }
  cargarGaleria();
})();

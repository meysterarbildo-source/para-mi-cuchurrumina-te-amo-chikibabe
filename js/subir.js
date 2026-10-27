/* Página de subida: selección, vista previa local y envío al almacenamiento. */
(() => {
  const $ = id => document.getElementById(id);
  const input = $("file-input"), previews = $("previews"), bar = $("upload-bar");
  const count = $("upload-count"), btn = $("upload-btn"), status = $("status");

  let items = []; // { file, url, nodo }

  const mb = bytes => (bytes / 1048576).toFixed(1) + " MB";

  function refrescar() {
    const total = items.reduce((s, i) => s + i.file.size, 0);
    bar.hidden = items.length === 0;
    count.textContent = `${items.length} archivo(s) · ${mb(total)}`;
    btn.disabled = items.length === 0;
  }

  function agregar(file) {
    const url = URL.createObjectURL(file);
    const nodo = document.createElement("div");
    nodo.className = "preview";

    const media = document.createElement(file.type.startsWith("video/") ? "video" : "img");
    media.src = url;
    if (media.tagName === "VIDEO") { media.muted = true; media.playsInline = true; media.preload = "metadata"; }
    else { media.alt = file.name; }

    const quitar = document.createElement("button");
    quitar.type = "button";
    quitar.className = "preview__remove";
    quitar.setAttribute("aria-label", `Quitar ${file.name}`);
    quitar.textContent = "×";

    const etiqueta = document.createElement("span");
    etiqueta.className = "preview__tag";
    etiqueta.textContent = mb(file.size);

    nodo.append(media, quitar, etiqueta);
    previews.appendChild(nodo);

    const item = { file, url, nodo };
    quitar.addEventListener("click", () => quitarItem(item));
    items.push(item);
  }

  function quitarItem(item) {
    URL.revokeObjectURL(item.url);
    item.nodo.remove();
    items = items.filter(i => i !== item);
    refrescar();
  }

  input.addEventListener("change", () => {
    [...input.files]
      .filter(f => f.type.startsWith("image/") || f.type.startsWith("video/"))
      .forEach(agregar);
    input.value = ""; // permite volver a elegir los mismos archivos
    status.textContent = "";
    refrescar();
  });

  $("clear-btn").addEventListener("click", () => [...items].forEach(quitarItem));

  btn.addEventListener("click", async () => {
    if (!Almacen.activo()) {
      status.textContent = "Aún no hay un almacenamiento conectado. Mira las instrucciones de abajo.";
      return;
    }
    btn.disabled = true;
    let ok = 0, fallos = 0;
    for (const [i, item] of items.entries()) {
      status.textContent = `Subiendo ${i + 1} de ${items.length}…`;
      try {
        await Almacen.subir(item.file);
        item.nodo.dataset.estado = "ok";
        ok++;
      } catch {
        item.nodo.dataset.estado = "error";
        fallos++;
      }
    }
    status.textContent = fallos
      ? `Se subieron ${ok} y fallaron ${fallos}. Revisa tu conexión y vuelve a intentarlo.`
      : `Listo: se subieron ${ok} recuerdos. Ya aparecen en el inicio.`;
    items.filter(i => i.nodo.dataset.estado === "ok").forEach(quitarItem);
    refrescar();
    btn.disabled = items.length === 0;
  });

  refrescar();
})();

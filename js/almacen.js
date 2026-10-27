/* Capa de almacenamiento. Para usar otro servicio, reemplaza subir() y listar(). */
const Almacen = (() => {
  const c = CONFIG.almacenamiento;
  const base = () => `${c.supabaseUrl.replace(/\/$/, "")}/storage/v1/object`;
  const cabeceras = () => ({ apikey: c.supabaseKey, Authorization: `Bearer ${c.supabaseKey}` });

  const activo = () => c.proveedor === "supabase" && !!c.supabaseUrl && !!c.supabaseKey;

  async function subir(file) {
    const limpio = file.name.replace(/[^\w.\-]+/g, "_");
    const ruta = `${Date.now()}-${limpio}`;
    const res = await fetch(`${base()}/${c.bucket}/${ruta}`, {
      method: "POST",
      headers: { ...cabeceras(), "Content-Type": file.type || "application/octet-stream" },
      body: file
    });
    if (!res.ok) throw new Error(`Error ${res.status}`);
    return `${base()}/public/${c.bucket}/${ruta}`;
  }

  async function listar() {
    if (!activo()) return [];
    const res = await fetch(`${base()}/list/${c.bucket}`, {
      method: "POST",
      headers: { ...cabeceras(), "Content-Type": "application/json" },
      body: JSON.stringify({ prefix: "", limit: 100, sortBy: { column: "created_at", order: "desc" } })
    });
    if (!res.ok) return [];
    const items = await res.json();
    return items
      .filter(i => i.name && !i.name.startsWith("."))
      .map(i => ({ src: `${base()}/public/${c.bucket}/${encodeURIComponent(i.name)}`, texto: "" }));
  }

  return { activo, subir, listar };
})();

/* Todo lo que puedes personalizar está en este archivo. */
const CONFIG = {
  // Inicio del contador: 8 de julio de 2026, 16:12 (mes 0-11, 6 = julio).
  fechaInicio: new Date(2026, 6, 8, 16, 12, 0),

  // IDs de las canciones de Spotify (lo que va después de /track/ en el enlace).
  canciones: [
    "2Fre1PL4oz1101K5vhYm86",
    "6r6IPuFvUX72kQGc9b46rk",
    "53AEbGZ00V8mnDM7HgnlNk",
    "1bteISG6lnlop62KsGT6CL",
    "3R0PgPUdZUtd6dGq6yRwc7",
    "1H7ktqkQx1PIuPfNtqvaBs"
  ],

  // Recuerdos fijos: guarda los archivos en la carpeta /img y escríbelos aquí.
  // Ejemplo: { src: "img/primer-dia.jpg", texto: "Nuestro primer día" }
  recuerdos: [],

  // Mensajitos que se muestran en la página principal. Cámbialos por los tuyos.
  mensajes: [
    "Contigo aprendí que el amor no se busca: aparece cuando menos lo esperas y se queda.",
    "Cada canción de esta lista guarda un pedacito de ti.",
    "Tu risa es mi sonido favorito, incluso más que cualquier canción.",
    "Contigo hasta lo más simple se vuelve especial.",
    "Si pudiera elegir mil veces, mil veces caminaría hacia ti.",
    "Me haces querer ser mejor, y también me haces sentir que ya soy suficiente.",
    "No sé qué hice para merecerte, pero cada día quiero cuidarte más.",
    "Gracias por llegar a mi vida y por quedarte."
  ],

  // Almacenamiento externo para las fotos y videos que se suben desde el teléfono.
  almacenamiento: {
    proveedor: "ninguno",   // cambia a "supabase" cuando lo conectes
    supabaseUrl: "",        // ej.: "https://xxxx.supabase.co"
    supabaseKey: "",        // clave "anon public"
    bucket: "recuerdos"
  }
};

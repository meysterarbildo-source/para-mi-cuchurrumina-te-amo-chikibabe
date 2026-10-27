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

  // Fotos y videos (están en la carpeta /media). t = "foto" o "video"; d = fecha AAAAMMDD (99999999 = sin fecha).
  recuerdos: [{"t": "video", "src": "media/videos/v01.mp4", "d": "20260710", "w": 640, "h": 1138, "poster": "media/videos/v01.jpg"}, {"t": "foto", "src": "media/fotos/f01.jpg", "d": "20260710", "w": 1200, "h": 1600}, {"t": "foto", "src": "media/fotos/f02.jpg", "d": "20260710", "w": 1600, "h": 1200}, {"t": "foto", "src": "media/fotos/f03.jpg", "d": "20260710", "w": 1600, "h": 1200}, {"t": "foto", "src": "media/fotos/f04.jpg", "d": "20260710", "w": 1200, "h": 1600}, {"t": "foto", "src": "media/fotos/f05.jpg", "d": "20260710", "w": 900, "h": 1600}, {"t": "video", "src": "media/videos/v02.mp4", "d": "20260710", "w": 640, "h": 1138, "poster": "media/videos/v02.jpg"}, {"t": "foto", "src": "media/fotos/f06.jpg", "d": "20260811", "w": 1600, "h": 1200}, {"t": "foto", "src": "media/fotos/f07.jpg", "d": "20260811", "w": 1600, "h": 1200}, {"t": "foto", "src": "media/fotos/f08.jpg", "d": "20260811", "w": 1600, "h": 1200}, {"t": "foto", "src": "media/fotos/f09.jpg", "d": "20260811", "w": 1600, "h": 1200}, {"t": "foto", "src": "media/fotos/f10.jpg", "d": "20260811", "w": 1600, "h": 1200}, {"t": "foto", "src": "media/fotos/f11.jpg", "d": "20260811", "w": 1600, "h": 1200}, {"t": "foto", "src": "media/fotos/f12.jpg", "d": "20260811", "w": 1200, "h": 1600}, {"t": "foto", "src": "media/fotos/f13.jpg", "d": "20260811", "w": 1200, "h": 1600}, {"t": "video", "src": "media/videos/v05.mp4", "d": "20260822", "w": 640, "h": 1138, "poster": "media/videos/v05.jpg"}, {"t": "foto", "src": "media/fotos/f14.jpg", "d": "20260822", "w": 1200, "h": 1600}, {"t": "foto", "src": "media/fotos/f15.jpg", "d": "20260822", "w": 1200, "h": 1600}, {"t": "foto", "src": "media/fotos/f16.jpg", "d": "20260822", "w": 1200, "h": 1600}, {"t": "foto", "src": "media/fotos/f17.jpg", "d": "20260822", "w": 1200, "h": 1600}, {"t": "foto", "src": "media/fotos/f18.jpg", "d": "20260822", "w": 1200, "h": 1600}, {"t": "foto", "src": "media/fotos/f19.jpg", "d": "20260822", "w": 1200, "h": 1600}, {"t": "foto", "src": "media/fotos/f20.jpg", "d": "20260822", "w": 1200, "h": 1600}, {"t": "foto", "src": "media/fotos/f21.jpg", "d": "20260822", "w": 1200, "h": 1600}, {"t": "video", "src": "media/videos/v03.mp4", "d": "20260822", "w": 640, "h": 1138, "poster": "media/videos/v03.jpg"}, {"t": "video", "src": "media/videos/v04.mp4", "d": "20260822", "w": 640, "h": 1138, "poster": "media/videos/v04.jpg"}, {"t": "foto", "src": "media/fotos/f22.jpg", "d": "20260822", "w": 1067, "h": 1600}, {"t": "foto", "src": "media/fotos/f23.jpg", "d": "20260831", "w": 900, "h": 1600}, {"t": "foto", "src": "media/fotos/f24.jpg", "d": "20260907", "w": 1200, "h": 1600}, {"t": "foto", "src": "media/fotos/f25.jpg", "d": "20260911", "w": 1600, "h": 1200}, {"t": "foto", "src": "media/fotos/f26.jpg", "d": "20260911", "w": 1200, "h": 1600}, {"t": "foto", "src": "media/fotos/f27.jpg", "d": "20260911", "w": 1200, "h": 1600}, {"t": "foto", "src": "media/fotos/f28.jpg", "d": "20260912", "w": 1200, "h": 1600}, {"t": "foto", "src": "media/fotos/f29.jpg", "d": "20260912", "w": 1600, "h": 1200}, {"t": "foto", "src": "media/fotos/f30.jpg", "d": "20260912", "w": 1600, "h": 1200}, {"t": "foto", "src": "media/fotos/f31.jpg", "d": "20260912", "w": 1200, "h": 1600}, {"t": "video", "src": "media/videos/v06.mp4", "d": "99999999", "w": 640, "h": 360, "poster": "media/videos/v06.jpg"}, {"t": "foto", "src": "media/fotos/f32.jpg", "d": "99999999", "w": 1080, "h": 1440}],

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
  ]
};

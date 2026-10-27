/* Perrito animado (diseño propio) que mueve la cola, las orejas y manda corazones. */
(() => {
  const PUP = `<svg class="pup-svg" viewBox="0 0 140 110">
    <g class="pup-heart"><path d="M104 22c-3-6-12-4-12 3 0 6 12 13 12 13s12-7 12-13c0-7-9-9-12-3z" fill="#e8607f"/></g>
    <path class="tail" d="M34 70c-12-4-16-18-10-26" fill="none" stroke="#c98a4b" stroke-width="8" stroke-linecap="round"/>
    <ellipse cx="62" cy="76" rx="32" ry="20" fill="#e0a869"/>
    <rect x="40" y="86" width="11" height="18" rx="5" fill="#d29a5c"/><rect x="70" y="86" width="11" height="18" rx="5" fill="#d29a5c"/>
    <circle cx="88" cy="50" r="22" fill="#e0a869"/>
    <ellipse class="ear" cx="70" cy="46" rx="9" ry="17" fill="#8a5a2b"/>
    <ellipse class="ear ear2" cx="106" cy="46" rx="9" ry="17" fill="#8a5a2b"/>
    <ellipse cx="94" cy="58" rx="13" ry="10" fill="#f6e3c8"/>
    <circle cx="99" cy="53" r="4" fill="#2b1a14"/>
    <circle cx="84" cy="46" r="3" fill="#2b1a14"/><circle cx="98" cy="44" r="3" fill="#2b1a14"/>
    <path d="M92 63q4 4 9 0" stroke="#2b1a14" stroke-width="2" fill="none" stroke-linecap="round"/>
  </svg>`;
  document.querySelectorAll(".pup").forEach(el => { el.innerHTML = PUP; });
})();

/* Gatitos animados (diseño propio): parpadean, mueven la cola y saltan al tocarlos. */
(() => {
  const host = document.getElementById("kittens");
  if (!host) return;
  const GATOS = [["#f2a65a","#2b1a14"],["#9b9bab","#2b1a14"],["#f4efe6","#2b1a14"],["#3b3340","#ffd54a"],["#d9b38c","#2b1a14"],["#c7a27c","#2b1a14"],["#e8e1d6","#2b1a14"],["#7a6f86","#ffd54a"]];
  const gato = (c, o) => `<svg class="kit-svg" viewBox="0 0 100 100" aria-hidden="true">
    <path class="kit-tail" d="M72 84c16 0 22-14 14-26" fill="none" stroke="${c}" stroke-width="9" stroke-linecap="round"/>
    <ellipse cx="50" cy="78" rx="25" ry="19" fill="${c}"/>
    <circle cx="50" cy="46" r="23" fill="${c}"/>
    <g class="kit-ear"><polygon points="30,36 32,12 49,27" fill="${c}"/><polygon points="35,31 35,19 43,27" fill="#f4a9b8"/></g>
    <g class="kit-ear kit-ear2"><polygon points="70,36 68,12 51,27" fill="${c}"/><polygon points="65,31 65,19 57,27" fill="#f4a9b8"/></g>
    <ellipse class="kit-eye" cx="41" cy="46" rx="3.2" ry="4.2" fill="${o}"/>
    <ellipse class="kit-eye" cx="59" cy="46" rx="3.2" ry="4.2" fill="${o}"/>
    <polygon points="47,54 53,54 50,58" fill="#f08aa0"/>
    <path d="M50 58q-4 5-8 2M50 58q4 5 8 2" stroke="#2b1a14" stroke-width="1.6" fill="none" stroke-linecap="round" opacity=".7"/>
    <path d="M30 54l-12-2M30 58l-12 3M70 54l12-2M70 58l12 3" stroke="#2b1a14" stroke-width="1.2" opacity=".35"/>
  </svg>`;
  host.innerHTML = GATOS.map(([c, o], i) => `<button type="button" class="kit" style="--d:${(i * 0.37).toFixed(2)}s" aria-label="Gatito ${i + 1}">${gato(c, o)}</button>`).join("");
  const DICHOS = ["¡Miau!", "Te quiero", "♡", "Prrr…", "¡Miau miau!"];
  let n = 0;
  host.addEventListener("click", e => {
    const k = e.target.closest(".kit"); if (!k) return;
    k.animate([
      { transform: "translateY(0) rotate(0deg)" },
      { transform: "translateY(-22px) rotate(-6deg) scale(1.08)", offset: .4 },
      { transform: "translateY(0) rotate(4deg)", offset: .7 },
      { transform: "none" }
    ], { duration: 650, easing: "ease-out" });
    const b = document.createElement("span");
    b.className = "kit-say"; b.textContent = DICHOS[n++ % DICHOS.length];
    k.appendChild(b); setTimeout(() => b.remove(), 1100);
  });
})();

/* ── CUSTOM CURSOR ─────────────────────────────────────────── */
const dot = document.getElementById("cursor-dot");
const ring = document.getElementById("cursor-ring");
let rx = 0, ry = 0, mx = 0, my = 0;

document.addEventListener("mousemove", (e) => {
  mx = e.clientX;
  my = e.clientY;
  dot.style.left = mx + "px";
  dot.style.top = my + "px";
});

(function lerpRing() {
  // Snappier lerp for a more "digital" feel
  rx += (mx - rx) * 0.2; 
  ry += (my - ry) * 0.2;
  ring.style.left = rx + "px";
  ring.style.top = ry + "px";
  requestAnimationFrame(lerpRing);
})();

/* ── HACKER MARQUEE ────────────────────────────────────────── */
const items = [
  "SYSTEM_BREACH",
  "KERNEL_INJECTION",
  "ENCRYPTING...",
  "PACKET_SNIFFER",
  "ZERO_DAY_FOUND",
  "ROOT_ACCESS",
  "BYPASS_FIREWALL",
  "ANONYMOUS",
  "TRACE_CLEARED"
];
const track = document.getElementById("marquee");
const make = () =>
  items
    .map(
      (t) =>
        `<span class="marquee-item">${t}</span><span class="marquee-sep"> >> </span>`
    )
    .join("");
track.innerHTML = make() + make();

/* ── 3D TILT ─────────────────────────────────────────── */
document.querySelectorAll("[data-tilt]").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    // Tighter tilt for a more high-end tech feel
    card.style.transform = `perspective(1000px) rotateY(${x * 8}deg) rotateX(${
      -y * 8
    }deg) scale(1.02)`;
  });
  card.addEventListener("mouseleave", () => {
    card.style.transition = "transform .4s ease";
    card.style.transform = "";
  });
});

/* ── DECRYPTION SCRAMBLE ───────────────────────────────────── */
// Added more binary and block characters for a heavier hacker aesthetic
const CHARS = "01010101#@$%&*<>░▒▓█║╬═╝╚╗╔";
const scrambleEl = document.getElementById("scramble-text");
const PHRASES = [
  "ACCESS_GRANTED: Welcome Jared.",
  "DECRYPTING_DATABASE...",
  "PAYLOAD_DELIVERED.",
  "ENCRYPTION_STRENGTH: 4096-BIT",
  "LOCAL_HOST_BREACHED."
];
let phraseIdx = 0;
let scrambleTimer = null;

function scramble(el, newText) {
  clearInterval(scrambleTimer);
  const len = Math.max(el.innerText.length, newText.length);
  let iter = 0;
  scrambleTimer = setInterval(() => {
    el.innerText = newText
      .split("")
      .map((ch, i) => {
        if (i < iter) return newText[i];
        if (ch === " ") return " ";
        return CHARS[Math.floor(Math.random() * CHARS.length)];
      })
      .join("");
    if (iter >= len + 4) clearInterval(scrambleTimer);
    iter += 0.8; // Faster decryption speed
  }, 30);
}

scrambleEl.addEventListener("mouseenter", () => {
  phraseIdx = (phraseIdx + 1) % PHRASES.length;
  scramble(scrambleEl, PHRASES[phraseIdx]);
});

scramble(scrambleEl, PHRASES[0]);

/* ── RADAR SPOTLIGHT CANVAS ─────────────────────────────── */
const spotSection = document.querySelector(".spotlight-section");
const canvas = document.getElementById("spotlight-canvas");
const ctx = canvas.getContext("2d");
let slx = -999, sly = -999;

function resizeCanvas() {
  const r = spotSection.getBoundingClientRect();
  canvas.width = r.width;
  canvas.height = r.height;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

spotSection.addEventListener("mousemove", (e) => {
  const r = spotSection.getBoundingClientRect();
  slx = e.clientX - r.left;
  sly = e.clientY - r.top;
});

spotSection.addEventListener("mouseleave", () => {
  slx = -999; sly = -999;
});

(function drawSpotlight() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (slx !== -999) {
    const g = ctx.createRadialGradient(slx, sly, 0, slx, sly, 280);
    // Green phosphor glow instead of blue/pink
    g.addColorStop(0, "rgba(0, 255, 65, 0.15)");
    g.addColorStop(0.6, "rgba(0, 59, 0, 0.05)");
    g.addColorStop(1, "transparent");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Optional: Tiny tracking square (radar style)
    ctx.strokeStyle = "rgba(0, 255, 65, 0.3)";
    ctx.strokeRect(slx - 20, sly - 20, 40, 40);
  }
  requestAnimationFrame(drawSpotlight);
})();

/* ── SCROLL REVEAL ───────────────────────────────────── */
const reveals = document.querySelectorAll(".reveal");
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("in-view");
    });
  },
  { threshold: 0.1 }
);
reveals.forEach((el) => io.observe(el));

/* ============================================================
   EDIT THIS FILE ONLY. Everything on the site comes from here.
   Save it, refresh index.html, done.
   ============================================================ */
window.CONFIG = {

  /* ---------- NAMES ---------- */
  herName: "Pritha",          // her name (big on the first screen)
  hisName: "Sayan",           // your name (signs the letter)

  /* ---------- DATE YOU GOT TOGETHER (YYYY-MM-DD) ---------- */
  startDate: "2025-04-21",

  /* ---------- TEXT ---------- */
  heroTag: "A little website, just for you",
  heroSub: "I made you something. Scroll slowly, it’s all for you 💗",
  letter:  "I don’t say it enough, but having you in my life is the best thing that ever happened to me. You make every ordinary day feel like a celebration.",
  finalLine: "I love you,",     // followed by her name

  /* ---------- PROMISES (add or remove lines freely) ---------- */
  promises: [
    "Reply to your texts, even when I’m busy",
    "Show up when it matters, without being asked",
    "Keep your secrets, forever",
    "Make you laugh on your bad days",
    "Always choose us",
    "Gacher pata Sobuj"
  ],

  /* ---------- MUSIC (plays in a loop) ----------
     Put an .mp3 inside assets/music/ and write its name here.
     Leave file as "" for no music. */
  music: {
    file: "assets/music/song.mp3",
    volume: 0.6
  },

  /* ---------- PHOTOS (shown as polaroids) ----------
     Put images inside assets/photos/ and list them here. */
  photos: [
    { file: "assets/photos/1.jpg", caption: "Our first date" },
    { file: "assets/photos/2.jpg", caption: "That day I realised that, I LOVE U" },
    { file: "assets/photos/3.jpg", caption: "Us, always" },
  ],

  /* ---------- CORNER GIFS (all 4 corners of every section) ----------
     Needs the corner code in js/main.js (inside render()).
     tl = top-left, tr = top-right, bl = bottom-left, br = bottom-right
     Put the gif files in assets/gifs/ and match the names below.
     To turn corner gifs off completely, delete the defaultCorners block. */
  cornerSize: 90,                 // gif width in pixels

  // The same 4 gifs in every section:
  defaultCorners: {
    tl: "assets/gifs/hug.gif",
    tr: "assets/gifs/heart.gif",
    bl: "assets/gifs/kiss.gif",
    br: "assets/gifs/love.gif"
  },

  // Optional: different gifs for one section (this overrides defaultCorners).
  // Sections: hero | mq | band | gal | count | letter | promises | end
  // To use, remove the // at the start of a line and change the file names.
  cornerGifs: {
    // hero: { tl: "assets/gifs/a.gif", tr: "assets/gifs/b.gif", bl: "assets/gifs/c.gif", br: "assets/gifs/d.gif" },
    // end:  { tl: "assets/gifs/e.gif", tr: "assets/gifs/f.gif", bl: "assets/gifs/g.gif", br: "assets/gifs/h.gif" },
  },

  /* ---------- FLOATING GIFS (along the left and right edges) ----------
     Put the files in assets/gifs/ and name them gif1.gif ... gif14.gif,
     or change the names below to match yours.
     section: hero | mq | band | gal | count | letter | promises | end
     x, y   : position inside that section (0-100 percent; x 0 = left, y 0 = top)
     size   : width in pixels
     Don't have enough gifs yet? Put // at the start of any line to switch it off.
     Want more? Copy a line, paste it below, change the name and x/y.
     Keep the comma at the end of every line except the very last one. */
  gifs: [
    // ---- hero (opening) ----
    { file: "assets/gifs/hug.gif",    section: "hero",     x: 5,  y: 55, size: 120 },
    { file: "assets/gifs/gif1.gif",   section: "hero",     x: 78, y: 40, size: 110 },
    { file: "assets/gifs/gif2.gif",   section: "hero",     x: 75, y: 72, size: 100 },

    // ---- moving "I LOVE YOU" strip ----
    { file: "assets/gifs/gif3.gif",   section: "mq",       x: 8,  y: 10, size: 90  },
    { file: "assets/gifs/gif4.gif",   section: "mq",       x: 80, y: 55, size: 90  },

    // ---- threads ----
    { file: "assets/gifs/gif5.gif",   section: "band",     x: 6,  y: 40, size: 110 },
    { file: "assets/gifs/gif6.gif",   section: "band",     x: 78, y: 62, size: 110 },

    // ---- photos ----
    { file: "assets/gifs/gif7.gif",   section: "gal",      x: 4,  y: 62, size: 110 },
    { file: "assets/gifs/gif8.gif",   section: "gal",      x: 80, y: 20, size: 100 },

    // ---- days together ----
    { file: "assets/gifs/heart.gif",  section: "count",    x: 72, y: 30, size: 110 },
    { file: "assets/gifs/gif9.gif",   section: "count",    x: 5,  y: 55, size: 110 },

    // ---- letter ----
    { file: "assets/gifs/gif10.gif",  section: "letter",   x: 5,  y: 38, size: 110 },
    { file: "assets/gifs/gif11.gif",  section: "letter",   x: 78, y: 62, size: 110 },

    // ---- promises (a long section, so spread them down it) ----
    { file: "assets/gifs/love.gif",   section: "promises", x: 74, y: 15, size: 100 },
    { file: "assets/gifs/gif12.gif",  section: "promises", x: 4,  y: 40, size: 100 },
    { file: "assets/gifs/gif13.gif",  section: "promises", x: 76, y: 65, size: 100 },

    // ---- ending ----
    { file: "assets/gifs/kiss.gif",   section: "end",      x: 6,  y: 40, size: 120 },
    { file: "assets/gifs/gif14.gif",  section: "end",      x: 76, y: 60, size: 120 }
  ]
};

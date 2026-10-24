# The Museum of Us 💌

A scroll-animated love website. You only ever edit **one file**: `js/config.js`.

## Folder map

```
museum-of-us/
├── index.html          ← the page (don't need to touch)
├── css/style.css       ← colours and layout (optional tweaks)
├── js/
│   ├── config.js       ← ✏️ EDIT THIS: names, promises, letter, photos, gifs, music
│   └── main.js         ← animations (don't need to touch)
└── assets/
    ├── photos/         ← put your photos here (.jpg / .png)
    ├── gifs/           ← put cute gifs / stickers here (.gif / .webp / .png)
    └── music/          ← put your song here (.mp3), it loops forever
```

## Add things in 3 steps

**Photos**
1. Copy photos into `assets/photos/` (keep each under ~1 MB so it loads fast).
2. In `config.js`, under `photos`, add a line per photo:
   `{ file: "assets/photos/1.jpg", caption: "Our first date" },`

**Music (loops)**
1. Copy an mp3 into `assets/music/` and name it `song.mp3` (or change the name in `config.js`).
2. That's it. It starts when she taps "Tap to open" and loops. She can mute with the 🔊 button.
   (Phones only allow sound after a tap, which is why the opening screen exists.)

**Cute GIFs**
1. Copy gifs into `assets/gifs/`, or paste a web link (https://...) instead of a file name.
2. In `config.js`, under `gifs`, add a line:
   `{ file: "assets/gifs/hug.gif", section: "hero", x: 6, y: 68, size: 120 },`
   - `section` is where it appears: hero, mq, band, gal, count, letter, promises or end
   - `x` and `y` are percentages across and down that section
   - `size` is the width in pixels
   Stickers float, wiggle and pop in as she scrolls.

**Names, date, letter, promises**: all at the top of `config.js`. Add or delete promise lines freely.

## Test it
Double-click `index.html`. (It needs internet for the animation libraries and fonts.)

## Put it online so you can send her a link (free)
- **Netlify Drop**: go to app.netlify.com/drop and drag the whole `museum-of-us` folder in. You get a link in seconds.
- **GitHub Pages** or **Vercel** also work: upload the folder and publish.
Tip: rename the link to something cute, and send it with a text like "open this when you're alone 💗".

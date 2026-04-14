# Dark Mode Toggle - Chrome Extension

A lightweight Chrome extension that instantly applies dark mode to all open web pages with a simple on/off toggle. No configuration needed.

---

## Features

- One-click toggle - turn dark mode on or off from the toolbar popup
- Applies to all open tabs instantly when toggled
- Persists across sessions - your preference is remembered even after restarting Chrome
- New tabs automatically open in dark mode when the feature is enabled
- Smart image handling - images and videos are re-inverted to preserve their natural colors
- No external dependencies - pure vanilla JS, no frameworks

---

## Installation (Developer Mode)

The extension is not on the Chrome Web Store yet. Install it manually in a few steps.

1. Download or clone this repository
2. Open Chrome and go to `chrome://extensions`
3. Enable **Developer mode** (toggle in the top-right corner)
4. Click **"Load unpacked"**
5. Select the folder containing this repository
6. The moon icon will appear in your Chrome toolbar

---

## How It Works

Dark mode is achieved using CSS filters:

```css
html {
    filter: invert(1) hue-rotate(180deg);
  }
img, video, canvas, iframe {
    filter: invert(1) hue-rotate(180deg);
  }
```

The first rule inverts all colors on the page. The second re-inverts images and media so they display in their original colors.

### File overview

- `manifest.json` - Extension configuration (Manifest V3)
- `content.js` - Injected into every page, applies/removes dark mode CSS
- `background.js` - Service worker, handles newly opened tabs
- `popup.html` / `popup.js` - Toolbar popup with the on/off toggle

---

## Project Structure

```
chrome-dark-mode-extension/
├── manifest.json
├── content.js
├── background.js
├── popup.html
├── popup.js
└── icons/
    ├── icon16.png
    ├── icon48.png
    └── icon128.png
```

---

## License

MIT - free to use, modify, and distribute.

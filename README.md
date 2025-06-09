# 🧠 Google AI Overview Blocker (Chrome Extension)

This Chrome extension removes Google's **AI Overview** block from search results.  
No flicker. No delay. No CSS tricks — just clean JavaScript.

---

## 🚀 Features

- ✅ Instantly removes the AI Overview block
- ✅ No style hacks or hidden elements
- ✅ Works silently in the background
- ✅ Minimal and efficient — <1 KB

---

## 📦 How to Install (Unpacked)

1. Download or clone this repo
2. Open Chrome and go to:  
   `chrome://extensions`
3. Enable **Developer mode** (top right)
4. Click **"Load unpacked"**
5. Select the folder containing:
   - `manifest.json`
   - `content_script.js`

That’s it! Now when you search on Google, the **AI Overview section will be automatically removed**.

---

## 💻 How It Works

- Detects any `<h1>`, `<h2>`, or `<strong>` tag with the text **"AI Overview"**
- Walks up the DOM to find the parent block
- Removes the full container if it's large and includes “AI Overview” content
- Uses a lightweight polling loop to catch it before it renders visually

No class names. No dependencies. No CSS.

---

## 🧪 Compatibility

- ✅ Chrome (latest)
- ✅ Chromium-based browsers (e.g. Edge)
- ⚠️ Only works on `https://www.google.com/search*`

---


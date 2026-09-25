<div align="center">

# 🧠 AI Prompt Builder

### The Luminance Master — Craft perfect prompts for AI image generators

A zero-dependency, single-file web app that builds optimized prompts for **Midjourney**, **FLUX.1**, **Stable Diffusion**, and **DALL-E 3**.

[![Version](https://img.shields.io/badge/version-22.12-blue?style=flat-square)](https://github.com/tekideki/AI-Prompt-Builder)
[![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)](LICENSE)
[![Dependencies](https://img.shields.io/badge/dependencies-0-brightgreen?style=flat-square)](#)
[![Made with](https://img.shields.io/badge/made%20with-vanilla%20JS-yellow?style=flat-square)](#)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=flat-square)](../../pulls)
[![GitHub stars](https://img.shields.io/github/stars/tekideki/AI-Prompt-Builder?style=social)](https://github.com/tekideki/AI-Prompt-Builder/stargazers)

### 🚀 **[Try it live →](https://tekideki.github.io/AI-Prompt-Builder/)**

[Report Bug](../../issues/new) · [Request Feature](../../issues/new) · [Discussions](../../discussions)

</div>

---

## 🌐 Live Demo

**👉 [https://tekideki.github.io/AI-Prompt-Builder/](https://tekideki.github.io/AI-Prompt-Builder/)**

No installation needed. Works in any modern browser (Chrome, Firefox, Safari, Edge).

---

## 📖 About

**AI Prompt Builder** is a browser-based tool that helps you craft high-quality, structured prompts for AI image generators. Instead of guessing what words work, you select from curated dropdowns covering **lighting**, **composition**, **camera optics**, **film stock**, **atmosphere**, and more — and the tool assembles a coherent, engine-specific prompt.

The app runs **100% client-side**. No build step, no backend, no tracking. All data stays in your browser via `localStorage` / `sessionStorage`.

---

## ✨ Features

- 🎯 **Multi-Engine Support** — Midjourney, FLUX.1, Stable Diffusion, DALL-E 3
- 🎨 **14 Built-in Presets** — Cinematic Portrait, Epic Landscape, Neon Cyberpunk, Vintage Film, and more
- 💾 **Custom Presets** — Save your favorite configurations with one click
- 📦 **18 SD Models Included** — Each with trigger words, VAE info, and recommended CFG / steps / sampler
- 🎲 **Smart Randomize** — Context-aware randomization that respects your subject
- 🚫 **Conflict Detection** — Warns when settings contradict each other
- 📊 **Live Prompt Score** — Weighted 0–100 rating with visual feedback
- 📜 **Prompt History** — Last 20 prompts, click to restore & copy
- 🗂️ **Batch Processing** — Upload a `.txt` of subjects → generate all prompts at once
- 🎯 **Multi-Engine Batch** — Generate the same prompt for all 4 engines simultaneously
- 📤 **Export SD Batch** — Download all queued prompts as a single `.txt`
- 📥 **JSON Import/Export** — Full backup with strict validation (prototype-pollution safe)
- 🎭 **AI Analysis Panel** — Keyword-based semantic mapping
- 🌓 **Dark / Light / Auto Theme**
- ⌨️ **Keyboard Shortcuts**
- 🔒 **Session Persistence** — Queue survives refresh
- 📱 **Fully Responsive**

---

## 🚀 Quick Start

### Option 1 — Use the Live Demo (Simplest)

**👉 [https://tekideki.github.io/AI-Prompt-Builder/](https://tekideki.github.io/AI-Prompt-Builder/)**

Nothing to install. Just open and start building prompts.

### Option 2 — Clone & Run Locally

```bash
git clone https://github.com/tekideki/AI-Prompt-Builder.git
cd AI-Prompt-Builder
```

Then either:

**a) Double-click `index.html`** — works, but clipboard / `localStorage` may be restricted in Chrome/Edge under `file://`.

**b) Run a local server** (recommended for full functionality):

```bash
# Pick any static server
python -m http.server 8000
# or
npx serve
# or
php -S localhost:8000
```

Then open **http://localhost:8000**

### Option 3 — Fork & Deploy to Your Own GitHub Pages

1. **Fork** this repository
2. Go to **Settings → Pages**
3. Source: `Deploy from a branch` → Branch: `main` → Folder: `/ (root)`
4. Save → your app will be live at `https://YOUR-USERNAME.github.io/AI-Prompt-Builder/`

---

## 🎮 Usage

### Basic Workflow

1. **Enter a subject** — e.g., `a young woman in a red dress`
2. **Pick a preset** or configure manually:
   - 🎭 Visual Style
   - 📐 Composition
   - 💡 Lighting (source · direction · quality · temperature)
   - 📷 Camera (focal length · aperture · motion)
   - 🎞️ Film Stock & Quality
   - 🎨 Color Palette
   - ⚙️ Render Tech & Environment Interaction
   - 🌍 Background
3. **Choose your engine** in the `🎯 Target AI Engine` dropdown
4. **Click 🚀 Generate Prompt** (or press <kbd>Ctrl</kbd>+<kbd>Enter</kbd>)
5. **Copy** and paste into your AI tool

### Keyboard Shortcuts

| Shortcut | Action |
|---|---|
| <kbd>Ctrl</kbd> + <kbd>S</kbd> | Save settings |
| <kbd>Ctrl</kbd> + <kbd>Enter</kbd> | Generate prompt |
| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd> | Smart Randomize |
| <kbd>Ctrl</kbd> + <kbd>E</kbd> | Export SD batch |
| <kbd>Ctrl</kbd> + <kbd>H</kbd> | Toggle history |
| <kbd>Ctrl</kbd> + <kbd>K</kbd> | Focus AI input |
| <kbd>Esc</kbd> | Blur active field |

> On macOS, use <kbd>Cmd</kbd> instead of <kbd>Ctrl</kbd>. Auto-detected.

### Batch Processing

Create a `.txt` file with one subject per line:

```text
a young woman in a red dress
an old fisherman on a boat
a cyberpunk samurai
a medieval castle at sunset
```

Drag & drop it onto the upload zone, then use `⏮️ Prev` / `⏭️ Next` to navigate. Click `💾 Export SD Batch` to download all generated prompts.

---

## 🎯 Supported Engines

| Engine | Syntax Style | Special Parameters |
|--------|--------------|-------------------|
| **Midjourney v6/v7** | Parametric + Discord flags | `--ar`, `--stylize`, `--chaos`, `--weird`, `--style raw`, `--no` |
| **FLUX.1** | Natural language | `guidance`, `steps`, `seed`, `aspect` |
| **Stable Diffusion** | Tag-based with weights | `CFG`, `Steps`, `Sampler`, `Hires Fix`, `Refiner`, `Face Restoration` |
| **DALL-E 3** | Descriptive prose | `Vivid` / `Natural`, `HD` boost |

---

## 📦 Stable Diffusion Models Included

<details>
<summary><strong>Click to expand the full model list (18 models)</strong></summary>

### SDXL 1.0 (Recommended)
| Model | Category | Best For |
|-------|----------|----------|
| Juggernaut XL v9 | Human Realism | General realistic photography |
| CyberRealistic XL | Human Realism | Portraits, skin detail |
| AbsoluteReality | Human Realism | Natural colors, female portraits |
| OdysseyXL-MK2-Alpha | Landscape | Epic landscapes, architecture |
| Illustrious Anime v4 | Anime | Modern SDXL anime |
| Pony Diffusion V6 XL | Anime | Anime (requires trigger words) |
| DreamShaper XL Lightning | Turbo | Ultra-fast (6 steps) |

### SDXL Turbo
| Model | Category | Best For |
|-------|----------|----------|
| SDXL Lightning | Turbo | 4-step generation |
| Realistic Vision Lightning | Turbo | Fast realism, batches |

### SD 3.5
| Model | Category | Best For |
|-------|----------|----------|
| SD 3.5 Large | General | Latest Stability model |
| SD 3.5 Large Turbo | Turbo | 4-step version |
| SD 3.5 Medium | General | Limited VRAM (8GB) |

### SD 1.5 / SD 2.1 (Legacy)
| Model | Category | Best For |
|-------|----------|----------|
| Realistic Vision v5.1 | Human Realism | SD 1.5 classic |
| DreamShaper 8 | General | Versatile |
| Rev Animated | General | Fantasy, illustration |
| Poralus-Image-1357 | Landscape | SD 1.5 landscapes |
| SD 2.1 768-v | General | Official Stability model |
| SD 2.1 Base | General | Faster than 768-v |

</details>

Each model entry includes architecture compatibility, trigger words, file size, native resolution, recommended CFG/steps/sampler, and VAE requirements.

**Add your own custom models** via the `➕ Add custom model` button.

---

## 🏗️ Architecture

### Single-File Design

```
index.html  (~2,500 lines, zero dependencies)
├── <style>    → ~700 lines CSS (theme via custom properties)
├── <body>     → ~450 lines HTML (static UI)
└── <script>   → ~1,350 lines vanilla JS
    ├── State management
    ├── Storage (localStorage + sessionStorage)
    ├── Theme management
    ├── History
    ├── Custom presets & models
    ├── MODEL_DATABASE       (18 SD models)
    ├── ENGINE_CONFIGS       (4 engines)
    ├── PRESETS              (14 built-in)
    ├── Prompt builders      (per engine)
    ├── Score calculator     (weighted)
    ├── Conflict detector    (11 rules)
    ├── Batch processors
    ├── Import / Export
    └── Event handlers
```

### Design Principles

- **Zero dependencies** — no frameworks, no build step, no network calls
- **Config-driven** — Add a new engine by adding one `ENGINE_CONFIG` + one `ENGINE_BADGES` entry + one `buildPromptString` case
- **Event delegation** — One listener per container, not per element
- **Debounced writes** — `localStorage` writes debounced to 400 ms
- **Graceful degradation** — Fallbacks for clipboard, `file://` protocol, missing VAE

### Local Storage Keys

| Key | Scope | Purpose |
|-----|-------|---------|
| `aiPromptBuilder_v22` | `localStorage` | Main settings |
| `aiPromptBuilder_history` | `localStorage` | Prompt history (max 20) |
| `aiPromptBuilder_theme` | `localStorage` | Theme preference |
| `aiPromptBuilder_customPresets` | `localStorage` | User presets |
| `aiPromptBuilder_customModels` | `localStorage` | User SD models |
| `aiPromptBuilder_subjectQueue` | `sessionStorage` | Current batch queue |
| `aiPromptBuilder_subjectQueueIndex` | `sessionStorage` | Queue position |

---

## 🌐 Browser Support

| Browser | Status | Notes |
|---------|:------:|-------|
| Chrome / Edge 90+ | ✅ | Recommended |
| Firefox 88+ | ✅ | Best `file://` support |
| Safari 15+ | ✅ | Minor CSS differences |
| Brave / Vivaldi / Opera | ✅ | Chromium-based |
| Mobile Chrome / Safari | ✅ | Responsive layout |

**Live version tested on:** [tekideki.github.io/AI-Prompt-Builder](https://tekideki.github.io/AI-Prompt-Builder/) ✅

### `file://` Limitations

When opening the file directly:

- ⚠️ `localStorage` may be blocked → falls back to in-memory (session only)
- ⚠️ `navigator.clipboard` may fail → automatic `document.execCommand` fallback
- ⚠️ `sessionStorage` works but doesn't persist across tabs

**Recommendation:** Use the [live demo](https://tekideki.github.io/AI-Prompt-Builder/) or a local HTTP server.

---

## 🐛 Troubleshooting

<details>
<summary><strong>Prompt doesn't update when I change a dropdown</strong></summary>

Check the browser console for errors. Try a hard refresh (<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>R</kbd>).
</details>

<details>
<summary><strong>Score doesn't change when I switch options</strong></summary>

The score varies based on **prompt length and completeness**, not on the semantic quality of each choice. Two options of similar length produce the same score. This is by design — see `calculatePromptScore()`.
</details>

<details>
<summary><strong>Copy button doesn't work</strong></summary>

If on `file://`, the app falls back to `document.execCommand('copy')`. If that also fails, check your browser's clipboard permissions at `chrome://settings/content/clipboard`.
</details>

<details>
<summary><strong>Import JSON shows "Missing or invalid settings field"</strong></summary>

The file isn't a valid Prompt Builder export. Verify it's the JSON downloaded from this tool, not manually edited.
</details>

<details>
<summary><strong>Settings lost after refresh</strong></summary>

You're on `file://` with `localStorage` disabled. Use the [live demo](https://tekideki.github.io/AI-Prompt-Builder/) or switch to Firefox.
</details>

<details>
<summary><strong>Queue disappeared after closing the tab</strong></summary>

By design — the queue uses `sessionStorage`, cleared when the tab closes. To persist across sessions, change `SUBJECT_QUEUE_KEY` to use `localStorage` in the code.
</details>

---

## 🗺️ Roadmap

- [x] Multi-engine support (MJ, FLUX, SD, DALL-E 3)
- [x] 14 built-in presets
- [x] 18 SD models with trigger words
- [x] Batch processing with queue persistence
- [x] Custom presets & models
- [x] Import / export JSON
- [x] Live prompt score
- [x] Dark / Light / Auto theme
- [x] Live demo on GitHub Pages
- [ ] Add **Ideogram**, **Recraft**, **Playground v3** engines
- [ ] **ComfyUI** workflow export (JSON format)
- [ ] LoRA selector for SD
- [ ] A/B prompt comparison view
- [ ] Prompt library with tags & search
- [ ] PWA support (offline install)

---

## 🤝 Contributing

Contributions are welcome!

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m "Add amazing feature"`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Code style

- **No dependencies** — keep it vanilla
- **Single file** — everything stays in `index.html`
- **Comment non-obvious logic**
- **Test on Firefox + Chrome** before submitting

---

## 📝 Changelog

### v22.12 — Current

**Fixes**
- `copyPrompt()` no longer relies on `window.event` — works on Firefox now
- `applyRecommended()` no longer pollutes prompt history
- No more duplicate event listeners on `sdModel` / `sdVersion` (event delegation)
- Debounced `generatePrompt` (200 ms) for smoother typing
- Replaced deprecated `navigator.platform` with `detectMacPlatform()`
- Strict JSON import validation (anti prototype-pollution)
- Subject queue persists via `sessionStorage` + Clear button
- Live prompt score with weighted calculation and visual feedback
- Unified `applyPreset` / `applyCustomPreset` code paths

**Improvements**
- Inline SVG favicon (no more 404)
- Score animation (green/red flash on change)
- Combo bonuses in scoring (realism, technical, pictorial, light stack)
- Score penalty tuned (errors: −10, warnings: −4)

### v22.8 — Initial Release

- Multi-engine support (MJ, FLUX, SD, DALL-E 3)
- 14 presets, 18 SD models, batch processing

---

## 📜 License

Distributed under the **MIT License**. See [LICENSE](LICENSE) for more information.

---

## 🙏 Credits

**Original concept & UI:** [@tekideki](https://github.com/tekideki)
**Model database:** Community-curated info from [Civitai](https://civitai.com/) and [Hugging Face](https://huggingface.co/)

**Special thanks** to the AI art community for ongoing feedback.

---

## 🔗 Resources

- 🌐 **[Live Demo](https://tekideki.github.io/AI-Prompt-Builder/)**
- [Midjourney Documentation](https://docs.midjourney.com/)
- [FLUX.1 by Black Forest Labs](https://blackforestlabs.ai/)
- [Stable Diffusion (Stability AI)](https://stability.ai/)
- [Civitai — Model Repository](https://civitai.com/)
- [DALL-E 3 (OpenAI)](https://openai.com/dall-e-3)

---

<div align="center">

### ⭐ If this tool helped you, please give it a star!

**Built with ❤️ for the AI art community**

[⬆ Back to Top](#-ai-prompt-builder)

</div>

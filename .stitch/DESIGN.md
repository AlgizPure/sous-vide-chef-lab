---
name: Sous-Vide Chef Lab Design System
colors:
  primary: "#f59e0b"
  primary_hover: "#d97706"
  background: "#0a0c10"
  surface: "#12161f"
  surface_hover: "#1a202c"
  surface_highlight: "#242d3d"
  border: "#1e293b"
  border_subtle: "rgba(255, 255, 255, 0.08)"
  text_primary: "#f8fafc"
  text_secondary: "#94a3b8"
  text_muted: "#64748b"
  accent_amber: "#f59e0b"
  accent_amber_glow: "rgba(245, 158, 11, 0.18)"
  accent_emerald: "#10b981"
  accent_emerald_glow: "rgba(16, 185, 129, 0.18)"
  accent_sky: "#38bdf8"
  accent_sky_glow: "rgba(56, 189, 248, 0.18)"
  accent_ruby: "#ef4444"
  accent_ruby_glow: "rgba(239, 68, 68, 0.18)"
typography:
  font_sans: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
  font_mono: "'JetBrains Mono', 'SF Mono', Consolas, monospace"
  heading_1: { fontSize: "1.25rem", fontWeight: 700, letterSpacing: "-0.02em" }
  heading_2: { fontSize: "1.1rem", fontWeight: 700, letterSpacing: "-0.01em" }
  body: { fontSize: "0.9rem", lineHeight: 1.5 }
  caption: { fontSize: "0.75rem", fontWeight: 600 }
  temperature: { fontSize: "1.05rem", fontWeight: 800, fontFamily: "monospace" }
spacing:
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "24px"
rounded:
  sm: "6px"
  md: "10px"
  lg: "14px"
  full: "9999px"
elevation:
  card: "0 4px 16px rgba(0, 0, 0, 0.25)"
  header_sticky: "0 4px 20px rgba(0, 0, 0, 0.28)"
  modal: "0 20px 40px rgba(0, 0, 0, 0.6)"
---

# Sous-Vide Chef Lab — Design System Specification

## 1. Overview & Aesthetic Vibe
A professional culinary workstation for precision low-temperature cooking (Sous-Vide).
- **Vibe:** Dark luxury Michelin kitchen, tactile culinary instrument, sleek precision hardware.
- **Lighting & Depth:** Deep obsidian black canvas (`#0a0c10`), midnight card surfaces (`#12161f`) with frosted glass blur effects (`backdrop-filter: blur(18px)`), warm chef's amber accents (`#f59e0b`), fresh emerald badges (`#10b981`), and high-contrast typography.
- **Target Platform:** Mobile-First Web PWA (390px viewport, responsive to 640px max-width container).

## 2. Color Palette & Hierarchy
- **Canvas Base:** `#0a0c10` (Dark obsidian).
- **Card Surfaces:** `#12161f` with 1px border `#1e293b`.
- **Primary Brand / Action:** Warm Chef Amber `#f59e0b` with amber halo glow.
- **Temperature & Timing Indicator:** Monospace emerald `#10b981` (optimal temperature) / Sky blue `#38bdf8` (holding/cooling) / Ruby `#ef4444` (high sear/safety).
- **Text Layers:** Primary text `#f8fafc`, secondary labels `#94a3b8`, muted helper text `#64748b`.

## 3. Core Component Architecture

### A. Sticky Compact Header (`.app-header`)
- **Initial Normal State:** Height ~68px, Brand Title "Sous-Vide Lab", version badge "v3.14", subtitle "Chef Guide & Timer". Left menu drawer trigger button with recipe count badge `104`. Right action buttons (Search, Theme, Add recipe, Notifications).
- **Scrolled Compact State (`.header-compact`):** Pinned to viewport top (`position: sticky; top: 0; z-index: 95;`), height shrinks to 49px, frosted glass background (`rgba(18, 22, 31, 0.94)` with `backdrop-filter: blur(18px)`), subtitle collapses smoothly, brand title drops to 0.98rem.
- **Expandable Compact Search:** Clicking search reveals inline input with instant live recipe filtering.

### B. Recipe Cookbook Cards (`.card-recipe`)
- **Hero Media Banner:** Full-width appetizing food photograph with gradient fade, top-left pill badge `📸 Реальное фото`, and top-right cooking temp & time pill (`55°C • 80 мин`).
- **Card Body:** Recipe title, culinary technique tags (e.g. `Су-вид Steba SV-1`, `Anti-Albumin`, `Сливочное масло + тимьян`).
- **Action Buttons Bar:** Favorite button ❤️, Add to Single-Unit Planner ⚡️, Add to Shopping List 🛒, and Expand Tech Card accordion `📖 Техкарта ▾`.

### C. Single Sous-Vide Cascade Planner (`.view-planner`)
- **Physics Protocol:** High-to-Low cascading temperature timeline (85°C ➔ 80°C ➔ 75°C ➔ 64°C ➔ 55°C).
- **Active Stage Card:** Circular countdown timer, current bath temperature, and rapid temperature drop guidance (water / ice cubes needed).
- **Warm Holding Tray:** List of prepared dishes held safely at 55°C until service.
- **Chef Preset Pills:** "Шеф-Ужин", "Воскресный бранч", "Meal Prep заготовки".

### D. Salt Cure Calculator (`.view-calculator`)
- **Chef Formula Card:** Salt (2%) & Sugar (1%) per raw meat weight with interactive gram slider.
- **Toggle Switches:** Dense cure mode (20g/10g per kg), Salty sauce reduction (-50% salt).
- **Quick Timer Trigger:** One-click launch for 30-min dry brine timer.

### E. Categorized Shopping List (`.view-shopping`)
- **Category Filter Chips:** Все, Мясо, Рыба, Десерты, Овощи, Специи.
- **Chef Demian Spice Recommendations:** Dedicated spice badge pills (Нитритная соль, Розмарин, Тимьян, Мускатный орех).
- **Telegram Export:** Floating action button to export shopping checklist to Telegram bot.

### F. Fixed Bottom Navigation Bar (`.bottom-nav`)
- 5 primary tabs: 🍽 Рецепты, ⚡️ Планировщик, 🧂 Калькулятор, 🛒 Покупки, 📖 База знаний.
- Frosted glass backdrop with active amber indicator and subtle icons.

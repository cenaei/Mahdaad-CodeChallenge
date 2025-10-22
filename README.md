# 🧩 Mahdaad Front-End Problem-Solving Tasks

This repository contains seven advanced front-end challenges designed to evaluate problem-solving, architecture, and modern Vue 3 development practices.  
Each scenario focuses on real-world requirements such as **state management, reactivity, performance optimization, API handling, and responsive UI design**.

> Built with **Vue 3 + Vite + Tailwind CSS**, following clean code and Composition API best practices.

---

## 📂 Project Directory Structure

```
src
├── App.vue
├── assets
│   ├── logo.svg
│   └── main.css
├── components
│   ├── Scenario01
│   ├── Scenario02
│   │   ├── Header.vue
│   │   └── ProductCard.vue
│   ├── Scenario04
│   │   └── VirtualScroll.vue
│   └── icons
│       ├── IconCommunity.vue
│       ├── IconDocumentation.vue
│       ├── IconEcosystem.vue
│       ├── IconSupport.vue
│       └── IconTooling.vue
├── main.js
├── plugins
│   └── axios.js
├── router
│   └── index.js
├── stores
│   ├── cart.js
│   ├── data.js
│   ├── prefrences.js
│   ├── stock.js
│   └── user.js
└── views
    ├── HomeView.vue
    ├── Scenario01View.vue
    ├── Scenario02View.vue
    ├── Scenario02_AnalysisView.vue
    ├── Scenario02_CartView.vue
    ├── Scenario02_CheckoutView.vue
    ├── Scenario03View.vue
    ├── Scenario04View.vue
    ├── Scenario05View.vue
    ├── Scenario06View.vue
    └── Scenario07View.vue
```

---

## ⚙️ Tech Stack

| Category | Tool |
|-----------|------|
| Framework | [Vue 3](https://vuejs.org/) |
| Build Tool | [Vite](https://vitejs.dev/) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) |
| State Management | [Pinia](https://pinia.vuejs.org/) |
| HTTP Client | [Axios](https://axios-http.com/) |
| Routing | [Vue Router](https://router.vuejs.org/) |

---

## 🚀 Setup & Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 🧠 Scenario Overview

### 1️⃣ Scenario 01 — User Preferences Persistence
Manage user settings such as **theme** and **font size** with automatic persistence in `localStorage`.  
Reactivity ensures that preferences are instantly applied and saved.

### 2️⃣ Scenario 02 — E-Commerce Cart & Data Analysis
Implements a full e-commerce experience with **product listing, cart, checkout, and analysis** views.  
Uses Pinia for centralized state, dynamic recommendations, and city-based filtering.

### 3️⃣ Scenario 03 — API Circuit Breaker
Fetch stock market data from a rate-limited API using Axios.  
Implements **Circuit Breaker pattern**, throttling, and user feedback for downtime.

### 4️⃣ Scenario 04 — Virtual Scroll Optimization
Efficiently renders 10,000+ logs with a **VirtualScroll.vue** component.  
Supports dynamic row heights and infinite scrolling for a lag-free experience.

### 5️⃣ Scenario 05 — Latest API Request Cache
Only the latest API call for a given userId is valid.  
Cancels previous requests, caches results, and prevents redundant fetching.

### 6️⃣ Scenario 06 — Fixed Header/Footer Layout
Tailwind-powered responsive layout with a fixed header and footer, and a scrollable middle content area.

### 7️⃣ Scenario 07 — Mixed Flex-Fixed Layout
Displays rows combining fixed and flexible width elements.  
Item 3 grows dynamically while others maintain consistent sizing.

---

## 🧩 Branch Naming Convention

| Scenario | Branch Name | View Component |
|-----------|--------------|----------------|
| 1 | `feature/scenario-1-preferences` | `Scenario01View.vue` |
| 2 | `feature/scenario-2-ecommerce` | `Scenario02View.vue` |
| 3 | `feature/scenario-3-circuit-breaker` | `Scenario03View.vue` |
| 4 | `feature/scenario-4-virtual-scroll` | `Scenario04View.vue` |
| 5 | `feature/scenario-5-latest-request` | `Scenario05View.vue` |
| 6 | `feature/scenario-6-fixed-layout` | `Scenario06View.vue` |
| 7 | `feature/scenario-7-flex-layout` | `Scenario07View.vue` |

---

## 🧰 Developer Environment

- **VS Code** + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
- Disable Vetur
- Enable [Vue.js DevTools](https://devtools.vuejs.org/)
- Browser: Chromium / Firefox (with Object Formatter)

---

## 👨‍💻 Author

**Developer:** Sina   
**GitHub:** [@Sina](https://github.com/cenaei)  
**Project:** Mahdaad Front-End Problem Solving — Vue 3 + Tailwind CSS

---

## 🪶 License

This project is for **evaluation and educational purposes only**.  
Unauthorized distribution of the assessment tasks is prohibited.

<div align="center">

<h1>🚀 Ziya Khan — Advanced Portfolio</h1>

<p><strong>A cinematic, 3D-powered personal portfolio built for first impressions that last.</strong><br/>
An immersive developer portfolio featuring a real-time animated 3D robot, physics-based interactions, smooth GSAP scroll storytelling, and a responsive project showcase.</p>

<img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black"/>
<img src="https://img.shields.io/badge/TypeScript-5.5-3178C6?style=for-the-badge&logo=typescript&logoColor=white"/>
<img src="https://img.shields.io/badge/Three.js-0.168-black?style=for-the-badge&logo=three.js&logoColor=white"/>
<img src="https://img.shields.io/badge/GSAP-3.15-88CE02?style=for-the-badge&logo=greensock&logoColor=black"/>
<img src="https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white"/>
<img src="https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white"/>

</div>

---

## ✨ Overview

This is my personal **Advanced Portfolio** website — a premium, interactive experience designed to stand out. It features a **real-time 3D animated robot character** that reacts to your cursor, a full **GSAP scroll-driven story** across sections, **physics-based floating tech logos**, and a clean responsive layout built with React + TypeScript.

> 🔗 **Live:** [https://advanced-portfolio-ziya.vercel.app](https://advanced-portfolio-ziya.vercel.app)
> 📧 **Contact:** ziyak5344@gmail.com
> 💼 **LinkedIn:** [linkedin.com/in/ziyakhan](https://linkedin.com/in/ziyakhan)
> 🐙 **GitHub:** [github.com/ZIYA8909](https://github.com/ZIYA8909)

---

## 🎬 Sections

| Section | Description |
|---|---|
| 🏠 **Landing** | Hero with name, animated taglines, and 3D robot character |
| 👤 **About** | Personal bio with scroll-triggered parallax reveal |
| 💡 **What I Do** | DEVELOP and DESIGN panels with interactive hover/tap |
| 💼 **My Work** | 4 live projects in a responsive 3-column grid |
| 🧑‍💻 **Career** | Animated experience timeline with scroll-driven progress |
| 🧰 **Tech Stack** | Physics-powered floating tech logo sphere simulation |
| 📬 **Contact** | Email, GitHub, LinkedIn links with full-bleed dark footer |

---

## 🤖 3D Character — Key Highlights

- Loaded from an **encrypted `.enc` model file** (`character.enc`) — decrypted in-browser for security
- **Real-time head tracking** — the robot looks toward your mouse cursor
- **Scroll-driven animations** via GSAP ScrollTrigger:
  - Rotates to face you as you scroll past the landing
  - Pulls back to reveal the About section
  - Slides into the What I Do section with a laptop reveal
  - Ascends off-screen when scrolling to the Tech Stack
- **Rendered with Three.js** using ACES filmic tone mapping and DRACO-compressed GLTF

---

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| **Framework** | React 18, TypeScript, Vite 5 |
| **3D / WebGL** | Three.js 0.168, @react-three/fiber, @react-three/drei, @react-three/rapier |
| **Animations** | GSAP 3.15 (ScrollTrigger, ScrollSmoother, SplitText) |
| **Styling** | Vanilla CSS with CSS custom properties |
| **Icons** | react-icons |
| **Marquee** | react-fast-marquee |
| **Analytics** | @vercel/analytics |
| **Deployment** | Vercel |

---

## 💼 Featured Projects

### 01 — DATAPULSE
> **Business Intelligence Dashboard**
> Next.js 16, TypeScript, shadcn/ui, Recharts, Auth.js v5, Prisma v7, Neon PostgreSQL, Zod
> [GitHub](https://github.com/ZIYA8909/DATAPULSE) · [Live Demo](https://datapulse-y7x1.vercel.app/)

### 02 — ZipKart
> **E-Commerce Marketplace Analytics**
> Next.js 16 (App Router and Server Actions), Prisma v7, Neon PostgreSQL, Auth.js v5, Recharts 3, Tailwind CSS v4, Framer Motion
> [GitHub](https://github.com/ZIYA8909/ZipKart/) · [Live Demo](https://zip-kart-swart.vercel.app/)

### 03 — NEXUS-CRM
> **Enterprise CRM Platform**
> React 18, Vite, TypeScript, Node.js, Express, MongoDB, JWT, Recharts
> [GitHub](https://github.com/ZIYA8909/NEXUS-CRM) · [Live Demo](https://nexus-crm-snowy-tau.vercel.app/)

### 04 — Crypt-Solver
> **AI Crypt-Arithmetic Solver**
> JavaScript, CSS3, HTML5, AI Constraint Satisfaction (CSP), Backtracking Search
> [GitHub](https://github.com/ZIYA8909/Crypt-Solver) · [Live Demo](https://cryptsolve.vercel.app/)

---

## 🧑‍💻 Experience

| Role | Company | Date |
|---|---|---|
| **Web Developer Intern** | Codec Technologies | May 2026 – Present |
| **Frontend Web Developer Intern** | Codtech IT Solutions | Jan 2026 – Feb 2026 |
| **Certified Agentforce Specialist** | Salesforce | Dec 2025 |

---

## 📁 Project Structure

```
port/
├── public/
│   ├── images/           # Project screenshots
│   ├── models/
│   │   ├── character.enc # Encrypted 3D robot model
│   │   └── char_enviorment.hdr
│   └── draco/            # DRACO decoder for GLTF
├── src/
│   ├── components/
│   │   ├── Character/    # 3D robot scene, animations, decrypt utils
│   │   ├── styles/       # Per-component CSS files
│   │   ├── utils/        # GSAP timelines, split text, FX
│   │   ├── About.tsx
│   │   ├── Career.tsx
│   │   ├── Contact.tsx
│   │   ├── Landing.tsx
│   │   ├── Navbar.tsx
│   │   ├── TechStack.tsx
│   │   ├── WhatIDo.tsx
│   │   └── Work.tsx
│   ├── context/
│   │   └── LoadingProvider.tsx
│   └── data/
│       └── boneData.ts
├── index.html
├── vite.config.ts
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js >= 18
- npm or yarn

### Install and Run

```bash
# Clone the repository
git clone https://github.com/ZIYA8909/ADVANCED-PORTFOLIO.git
cd ADVANCED-PORTFOLIO

# Install dependencies
npm install

# Start development server
npm run dev
```

Open **http://localhost:5173** in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

---

## 🌐 Deployment

This portfolio is deployed on **Vercel** with automatic CI/CD — every push to `main` triggers a new production build.

---

## ⚠️ Note on the 3D Character

The 3D robot character model is **encrypted** and bundled as `character.enc`. It is decrypted entirely **in-browser** using a built-in decryption key — no server involved. This protects the original model asset from direct extraction while keeping the portfolio fully client-side.

---

## 📄 License

This project is shared for **learning and inspiration purposes only**.

Please do **NOT**:
- Clone and re-deploy with your own content without building your own version
- Use this project for commercial/client work
- Redistribute the 3D character model

---

<div align="center">

Made with ❤️ by **Ziya Khan**

[![GitHub](https://img.shields.io/badge/GitHub-ZIYA8909-181717?style=for-the-badge&logo=github)](https://github.com/ZIYA8909)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Ziya_Khan-0A66C2?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/ziyakhan)
[![Email](https://img.shields.io/badge/Email-ziyak5344@gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:ziyak5344@gmail.com)

</div>

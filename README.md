# Panopticon — Civic Intelligence Platform

[![Live Application](https://img.shields.io/badge/Live%20App-panopticon--civic.onrender.com-blue?style=for-the-badge&logo=render)](https://panopticon-civic.onrender.com/)

🌐 **Live Demo:** [https://panopticon-civic.onrender.com/](https://panopticon-civic.onrender.com/)

Panopticon is a visual, source-first political accountability and civic-intelligence mapping application tailored for Indian political leadership, party structures, rights explainers, and real-time news desk verification.

---

## 🌟 Key Features

- **Hierarchy & Power Mapping**: Explore national leadership, party directories, and individual member profiles linked to official public sources.
- **Source-First Accountability**: Detailed political leader cards featuring declared education, financial disclosure history (ADR/ECI affidavits), declared case history, and parliamentary participation.
- **Constitutional Literacy & Rights Library**: Plain-language legal explainers for Articles 14, 19, 21, 22 of the Constitution of India and BNSS 2023 police arrest procedures with NALSA legal aid routing.
- **Bounded Civic AI Explainer**: Interactive source-first assistant that answers general constitutional questions, tags uncertainty levels, and strictly refuses personalized legal advice.
- **Live News Desk**: Verified civic and legislative developments with topic-based filtering and publisher attribution.
- **Method-First Comparison Studio**: Side-by-side leader comparison using sworn ECI affidavits — education, assets, criminal history, and policy contributions.
- **State Power Map**: Interactive vector SVG map of India with real-time party control, state-wise Chief Minister badges, and party filtering.
- **Parliament Desk**: Verified Lok Sabha & Rajya Sabha debate records with bill topics, speaker lists, and status tracking.
- **Caricature Avatars**: High-quality custom cartoon caricature portraits for 49+ Indian political leaders, directly imported from the `cartoon/` asset directory.

---

## 🛠️ Technology Stack

- **Frontend**: React 18, Vite, TypeScript, Tailwind CSS, Lucide Icons, Shadcn UI
- **Backend**: Node.js, Express, tRPC (type-safe APIs)
- **Database Layer**: Drizzle ORM / SQLite
- **Styling**: Modern dual-theme (light & dark) with glassmorphism, custom paper-texture design system, full CSS variable token architecture

---

## 🚀 Quick Start & Installation

### Prerequisites
- Node.js (v18+ recommended)
- npm or pnpm

### 1. Clone the Repository
```bash
git clone https://github.com/snehapandit2006/Panopticon.git
cd Panopticon
```

### 2. Install Dependencies
```bash
npm install --legacy-peer-deps
```

### 3. Run Development Server
```bash
npm run dev
```
The server will start at **http://localhost:3002/** with live hot-reloading for both backend and frontend.

### 4. Build for Production
```bash
npm run build
npm start
```

---

## 🎨 Design System

- **Light Theme**: Paper-white `#f7f4ed` background with ink `#1c2226` text — all text elements tested for WCAG contrast compliance.
- **Dark Theme**: Deep navy `#0b0f17` background with slate-white text.
- **Glassmorphism**: All cards use `backdrop-filter: blur` + `var(--glass)` backgrounds that adapt automatically across themes.
- **3D Caricature Stage**: Custom CSS perspective/transform rig for hover-lift effect on cartoon leader cards.

---

## 📝 Recent Changes (v1.2)

| Change | Details |
|--------|---------|
| **Leader Name Update** | Renamed "Nitin Nabin" → **Nitin Gadkari** (Union Minister for Road Transport & Highways) across all data files |
| **Caricature Asset Migration** | Replaced all 49 placeholder avatars with custom cartoon images from `cartoon/` directory |
| **Light-Theme Text Fixes** | Added all missing CSS classes (`page-copy`, `back-link`, `ink-button`, `outline-button`, `paper-grain`) and fixed filter tab button borders for light-mode contrast |
| **AI Chat Styling** | Added complete `.ai-chat`, `.chat-bubble`, `.chat-empty`, `.chat-input`, `.citations`, `.uncertainty` CSS definitions |
| **Analytics Script** | Removed un-populated analytics `<script>` from `index.html` that caused `URIError` on dev server |

---

## 📄 Source Attributions & References

- **Legislative Department**: [Constitution of India](https://legislative.gov.in/constitution-of-india)
- **India Code**: [BNSS 2023](https://www.indiacode.nic.in/handle/123456789/20099)
- **NALSA**: [National Legal Services Authority](https://nalsa.gov.in/legal-aid/)
- **ADR / MyNeta**: [Association for Democratic Reforms](https://adrindia.org/)
- **Election Commission of India**: [Candidate Affidavits](https://affidavit.eci.gov.in/)
- **PRS Legislative Research**: [Parliament Track](https://prsindia.org/)

---

## 📜 License
Distributed under the MIT License.


---

## 🛠️ Technology Stack

- **Frontend**: React 18, Vite, TypeScript, Tailwind CSS, Lucide Icons, Shadcn UI
- **Backend**: Node.js, Express, tRPC (type-safe APIs)
- **Database Layer**: Drizzle ORM / SQLite
- **Styling**: Modern dark/light theme with glassmorphism and custom paper-texture design system

---

## 🚀 Quick Start & Installation

### Prerequisites
- Node.js (v18+ recommended)
- npm or pnpm

### 1. Clone the Repository
```bash
git clone https://github.com/snehapandit2006/Panopticon.git
cd Panopticon
```

### 2. Install Dependencies
```bash
npm install --legacy-peer-deps
```

### 3. Run Development Server
```bash
npm run dev
```
The server will start at **http://localhost:3002/** with live hot-reloading for both backend and frontend.

### 4. Build for Production
```bash
npm run build
npm start
```

---

## 📄 Source Attributions & References

- **Legislative Department**: [Constitution of India](https://legislative.gov.in/constitution-of-india)
- **India Code**: [BNSS 2023](https://www.indiacode.nic.in/handle/123456789/20099)
- **NALSA**: [National Legal Services Authority](https://nalsa.gov.in/legal-aid/)
- **ADR / MyNeta**: [Association for Democratic Reforms](https://adrindia.org/)
- **Election Commission of India**: [Candidate Affidavits](https://affidavit.eci.gov.in/)
- **PRS Legislative Research**: [Parliament Track](https://prsindia.org/)

---

## 📜 License
Distributed under the MIT License.

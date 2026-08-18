# Panopticon — Civic Intelligence Platform

Panopticon is a visual, source-first political accountability and civic-intelligence mapping application tailored for Indian political leadership, party structures, rights explainers, and real-time news desk verification.

---

## 🌟 Key Features

- **Hierarchy & Power Mapping**: Explore national leadership, party directories, and individual member profiles linked to official public sources.
- **Source-First Accountability**: Detailed political leader cards featuring declared education, financial disclosure history (ADR/ECI affidavits), declared case history, and parliamentary participation.
- **Constitutional Literacy & Rights Library**: Plain-language legal explainers for Articles 14, 19, 21, 22 of the Constitution of India and BNSS 2023 police arrest procedures with NALSA legal aid routing.
- **Bounded Civic AI Explainer**: Interactive source-first assistant that answers general constitutional questions, tags uncertainty levels, and strictly refuses personalized legal advice.
- **Live News Desk**: Real-time RSS feed integration with NDTV news desk, deduplicated and attributed with publisher links and refresh timestamps.
- **Method-First Comparison Studio**: Inspect data coverage, source origin, and metric definitions before comparing political entities.
- **Vector Cartoon Avatars**: Custom clean SVG vector avatars for major leaders (`Narendra Modi`, `Rahul Gandhi`, `Mallikarjun Kharge`, `Mamata Banerjee`, `Arvind Kejriwal`).

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

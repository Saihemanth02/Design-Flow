# 🎨 Design-Flow

> A full-stack monorepo web application featuring **GVP Prompt Studio** — an AI-powered design prompt generator built for Gayatri Vidya Parishad College.

![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?logo=typescript)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)
![Express](https://img.shields.io/badge/Express-5-black?logo=express)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Drizzle_ORM-336791?logo=postgresql)
![License](https://img.shields.io/badge/License-MIT-green)

---

## ✨ Features

- 🖼️ **GVP Prompt Studio** — Generate Claude-optimized design prompts for posters, thumbnails, Instagram posts, reels, college banners, and logos
- 🎨 **Style Presets** — Neon Gold, Cyberpunk, Cosmic, Luxury Marble, Brutalist, and Desi Fest themes
- 📐 **Size Options** — 1920×1080, 1080×1080, 1080×1920, and A4 Portrait
- 📋 **One-click Copy** — Instantly copy generated prompts to clipboard
- 🧩 **Mockup Sandbox** — Live preview renderer for React UI components
- 🔗 **REST API** — Express 5 backend with OpenAPI spec and auto-generated TypeScript types
- 🗄️ **Database** — PostgreSQL with Drizzle ORM for schema management

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | React 18, TypeScript, Tailwind CSS, Radix UI, Framer Motion |
| **Backend** | Express 5, Node.js 24 |
| **Database** | PostgreSQL, Drizzle ORM |
| **Validation** | Zod v4, drizzle-zod |
| **API Codegen** | Orval (OpenAPI → TypeScript + React Query) |
| **Build Tools** | Vite, esbuild |
| **Monorepo** | pnpm workspaces |

---

## 📁 Project Structure
Design-Flow/
├── artifacts/
│   ├── api-server/           # Express 5 REST API server
│   ├── gvp-prompt-studio/    # Main React frontend application
│   └── mockup-sandbox/       # Component live preview sandbox
├── lib/
│   ├── api-spec/             # OpenAPI 3.1 spec + Orval codegen config
│   ├── api-client-react/     # Auto-generated React Query hooks
│   ├── api-zod/              # Auto-generated Zod validation schemas
│   └── db/                   # Drizzle ORM schema & DB connection
├── scripts/                  # Utility TypeScript scripts
├── pnpm-workspace.yaml
├── tsconfig.base.json
└── package.json
---

## ⚙️ Getting Started

### Prerequisites

- Node.js 24+
- pnpm
- PostgreSQL database

### Installation

```bash
# Clone the repo
git clone https://github.com/Saihemanth02/Design-Flow.git
cd Design-Flow

# Install all dependencies
pnpm install
```

### Running the App

```bash
# Start the API server
pnpm --filter @workspace/api-server run dev

# Start the GVP Prompt Studio frontend
pnpm --filter @workspace/gvp-prompt-studio run dev

# Start the Mockup Sandbox
pnpm --filter @workspace/mockup-sandbox run dev
```

### Build & Typecheck

```bash
# Typecheck the entire monorepo
pnpm run typecheck

# Build all packages
pnpm run build
```

---

## 🗄️ Database Setup

Set your environment variable:

```env
DATABASE_URL=postgresql://user:password@localhost:5432/yourdb
```

Push the schema:

```bash
pnpm --filter @workspace/db run push
```

---

## 🔄 API Codegen

To regenerate TypeScript types and React Query hooks from the OpenAPI spec:

```bash
pnpm --filter @workspace/api-spec run codegen
```

This outputs into:
- `lib/api-client-react/src/generated/` — React Query hooks
- `lib/api-zod/src/generated/` — Zod schemas

---

## 📜 License

MIT © [Sai Hemanth](https://github.com/Saihemanth02)

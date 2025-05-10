# React Monorepo

A professional React monorepo setup with shared UI components built with pnpm workspaces.

## Features

- React admin application using Vite
- Next.js documentation site
- Shared UI component library with Shadcn UI
- TailwindCSS 4 styling
- pnpm workspaces for efficient package management

## Requirements

- Node.js (v18 or newer)
- pnpm (v8 or newer)

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/react-monorepo.git
   cd react-monorepo
   ```

## Project Structure

react-monorepo/
├── apps/
│ ├── admin/ # React admin app
│ └── docs/ # Next.js documentation site
├── packages/
│ └── ui/ # Shared UI component library
├── package.json
└── pnpm-workspace.yaml

## Commands

- pnpm dev - Run all applications
- pnpm build - Build all applications
- pnpm dev:admin - Run only the admin app
- pnpm dev:docs - Run only the docs site
- pnpm ui [component-name] - Add a new Shadcn UI component

# monorepo-template

# monorepo-template

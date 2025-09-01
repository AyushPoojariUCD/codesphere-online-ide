# CodeSphere - Cloud-Based Collaborative Code Editor

CodeSphere is a cloud-based collaborative code editor inspired by VS Code & Replit.  
Write, run, and share code in multiple languages directly from your browser with real-time collaboration, syntax highlighting, and an integrated terminal.  

This project uses **Next.js** for the frontend, **Clerk** for authentication, **Convex** for the database, and is deployable on **Vercel**.

---

## 🎬 Demo

Experience CodeSphere in action:

![CodeSphere Demo](https://github.com/AyushPoojariUCD/codesphere-online-ide/blob/main/demo/demo-video.gif)

This GIF shows real-time collaborative editing, running code, and managing snippets.

---

## Features

- Real-time collaborative code editing
- Run code in multiple languages
- Syntax highlighting
- Integrated terminal/output
- Code snippet saving, starring, and commenting
- User authentication via Clerk
- Cloud database via Convex
- Responsive and modern UI

---

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd <your-repo-folder>
```

### 2. Install dependencies
```
npm install
# or
yarn install
# or
pnpm install
```
### 3. Set environment variables

#### Create a .env file in the root of your project and add the following:
``` bash
# Convex cloud deployment
NEXT_PUBLIC_CONVEX_URL=

# Clerk authentication keys
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
CLERK_JWT_ISSUER_DOMAIN=

# Convex deployment used by `npx convex dev`
CONVEX_DEPLOYMENT=

# Clerk webhook secret for Convex dashboard
CLERK_WEBHOOK_SECRET=
```

- Make sure to fill in the values with your Clerk and Convex credentials.

### 4. Run the development server
``` bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

### 5. Run Convex local development
``` bash
If you want to run Convex locally for development:

npx convex dev
```

- This will start a local Convex instance connected to your Next.js app.

---
## Tech Stack

- Frontend: Next.js, React, Tailwind CSS

- Authentication: Clerk

- Database: Convex

---

## Contributing

- Fork the repository

- Create a new branch (git checkout -b feature/YourFeature)

- Commit your changes (git commit -m "Add some feature")

- Push to the branch (git push origin feature/YourFeature)

- Open a Pull Request

- Deployment: Vercel

---

# Book-A-Session

A session booking app built with **React + TypeScript**, developed as a hands-on exercise for practicing modern React patterns.

Users can browse available mentoring sessions, view session details, and book a session through a modal form. Booked sessions appear in an "Upcoming Sessions" overview, where they can also be cancelled.

## Features

-  **Browse sessions** — a responsive grid of available mentoring sessions
-  **Session details** — dedicated page per session with full description
-  **Book a session** — modal dialog with a controlled booking form
-  **Upcoming sessions** — overview of booked sessions with cancel option
-  **Client-side routing** — powered by React Router

## Tech Stack & Patterns

- **React 18** with **TypeScript**
- **Vite** for tooling and dev server
- **React Router** for navigation
- **Context API + `useReducer`** for global session state management
- **`createPortal`** for rendering the modal outside the component tree
- **`forwardRef` + `useImperativeHandle`** for imperative modal control
- **Polymorphic components** for flexible, type-safe reusable UI (e.g. a `Button` that renders as `<button>` or `<Link>`)
- **`ComponentPropsWithoutRef`** for extending native element props

## Getting Started

```bash
# Clone the repository
git clone https://github.com/Thetis-Maria/Book-A-Session.git
cd Book-A-Session

# Install dependencies
npm install

# Start the dev server
npm run dev
```

The app will be available at `http://localhost:5173`.

## Project Structure

```
src/
├── components/
│   ├── Sessions/       # SessionsList, SessionItem, booking components
│   └── UI/             # Reusable UI (Button, Modal, ...)
├── pages/              # Route components (Home, Sessions, Session details)
├── store/              # Context + reducer for session state
├── dummy-sessions.ts   # Mock session data
└── App.tsx
```

## What I Practiced

This project focuses on advanced React + TypeScript patterns beyond the basics:

- Designing **type-safe polymorphic components** with generics
- Managing complex state with **`useReducer` and Context** instead of prop drilling
- Controlling modals imperatively via **refs** while keeping a declarative API
- Structuring a multi-page app with **React Router** and shared layouts

---

*Built as part of my journey learning advanced React patterns — feedback welcome!*
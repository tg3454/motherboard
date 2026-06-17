---
name: nextjs-best-practices
description: Next.js App Router principles. Server Components, data fetching, routing patterns.
license: MIT
---

# Next.js App Router Best Practices

## 1. Server vs. Client Components
* **Default to Server Components (RSC):** All components in the `app` router are Server Components by default. Keep them as Server Components to reduce client-side bundle size.
* **Use Client Components (`"use client"`) only when necessary:**
  * Interactive elements using state/effects (`useState`, `useEffect`, `useReducer`).
  * Browser-only APIs (e.g., `window`, `document`, `localStorage`).
  * Custom hooks depending on state or context.
* **Component Placement:** Push client-side interactivity to the leaves of your component tree. Do not mark entire pages as `"use client"` if only a small button needs interactivity.

## 2. Data Fetching & Caching
* **Fetch Data on the Server:** Perform data fetching inside Server Components using standard async/await `fetch` or direct database queries.
* **Parallel vs. Sequential Fetching:**
  * **Parallel:** Trigger requests concurrently to avoid waterfalls (e.g., `Promise.all([getUsers(), getPosts()])`).
  * **Sequential:** Fetch sequentially if one request depends on the result of another.
* **Caching (Next.js 15 / React 19):**
  * Use standard `fetch` which handles caching options naturally.
  * Utilize dynamic APIs (`cookies`, `headers`, `searchParams`) carefully as their usage opts the route into dynamic rendering.
  * For database queries (like Drizzle), wrap calls in React's `cache` helper if the same data is requested multiple times in a single render pass.

## 3. Routing Patterns & Layouts
* **Layouts (`layout.tsx`):** Use layouts for shared UI elements (sidebars, navbars). Layouts do not re-render on navigation; they preserve state.
* **Templates (`template.tsx`):** Similar to layouts but mount a new instance on navigation. Use templates when you need to force mount/unmount animations or reset state.
* **Error Boundaries (`error.tsx`):** Define error boundaries at route segments to gracefully catch runtime rendering errors and isolate failures.
* **Loading UI (`loading.tsx`):** Use React Suspense-driven loading components to display instant loading states during page transitions.

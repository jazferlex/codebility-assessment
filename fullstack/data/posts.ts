
export const posts = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    excerpt: "Learn the basics of Next.js and how to create your first app",
    content:
      "Next.js is a React framework that enables server-side rendering and generating static websites. With the App Router, you can build pages using Server Components by default and add client interactivity when needed.",
    date: "2025-04-15",
  },
  {
    id: 2,
    title: "Styling in Next.js",
    excerpt: "Different ways to style your Next.js application",
    content:
      "There are multiple ways to style your Next.js application including global CSS, CSS Modules, Tailwind CSS, and styled-components. For small apps, global CSS is totally fine.",
    date: "2025-04-16",
  },
  {
    id: 3,
    title: "API Routes in Next.js",
    excerpt: "Build simple endpoints inside your Next app",
    content:
      "With App Router, API routes live under app/api. You can return JSON with NextResponse, and you can create dynamic routes like app/api/posts/[id]/route.js.",
    date: "2026-02-17",
  },
  {
    id: 4,
    title: "Routing Basics",
    excerpt: "Link between pages and handle dynamic routes",
    content:
      "The folder structure is the router. Create folders for routes, and use [param] folders for dynamic segments. Use next/link for client-side navigation.",
    date: "2026-02-18",
  },
];

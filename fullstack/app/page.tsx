import Link from "next/link";
import { posts } from "@/data/posts";
import ThemeToggle from "@/components/ThemeToggle";

export default function HomePage() {
  const sorted = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <main className="container">
      <header className="header flex justify-between items-center">
        <div>
          <h1>tiny blog</h1>
          <p>because every assessment needs a blog</p>
        </div>
        <div>
          <ThemeToggle />
        </div>
      </header>

      <section className="grid">
        {sorted.map((post) => (
          <article key={post.id} className="card">
            <div className="meta">{post.date}</div>
            <h2 className="title">{post.title}</h2>
            <p className="excerpt">{post.excerpt}</p>

            <Link className="link" href={`/posts/${post.id}`}>
              read more
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}

import Link from "next/link";
import { posts } from "@/data/posts";

type Props = {
  params: Promise<{ id: string }> | { id: string };
};

export default async function PostPage({ params }: Props) {
  const resolved = await params;
  const id = Number(resolved.id);
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <main className="container">
        <p>Post not found.</p>
        <Link className="back" href="/">
          ← back
        </Link>
      </main>
    );
  }

  return (
    <main className="container">
      <Link className="back" href="/">
        ← back
      </Link>

      <article className="post">
        <div className="meta">{post.date}</div>
        <h1 className="postTitle">{post.title}</h1>
        <div className="content">{post.content}</div>
      </article>
    </main>
  );
}

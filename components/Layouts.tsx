import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header style={{ padding: "1.5rem 4rem", borderBottom: "1px solid #ddd" }}>
        <nav style={{ display: "flex", gap: "1.5rem" }}>
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/about">About</Link>
          <Link href="/resume">Resume</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      <main style={{ padding: "4rem" }}>
        {children}
      </main>
    </>
  );
}
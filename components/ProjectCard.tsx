import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description: string;
  tech: string;
  slug: string;
  status?: string;
};

export default function ProjectCard({
  title,
  description,
  tech,
  slug,
  status,
}: ProjectCardProps) {
  return (
    <Link href={`/projects/${slug}`} style={{ textDecoration: "none", color: "inherit" }}>
      <div
        style={{
          border: "1px solid #ddd",
          padding: "1.5rem",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        <h3>{title}</h3>
        <p>{description}</p>
        <p><strong>Tech:</strong> {tech}</p>
        {status && <p><em>{status}</em></p>}
      </div>
    </Link>
  );
}
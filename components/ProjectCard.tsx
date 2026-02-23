type ProjectCardProps = {
  title: string;
  description: string;
  tech: string;
  status?: string;
};

export default function ProjectCard({
  title,
  description,
  tech,
  status,
}: ProjectCardProps) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "1.5rem",
        borderRadius: "6px",
      }}
    >
      <h3>{title}</h3>
      <p>{description}</p>
      <p><strong>Tech:</strong> {tech}</p>
      {status && <p><em>{status}</em></p>}
    </div>
  );
}
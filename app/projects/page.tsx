import ProjectCard from "../../components/ProjectCard";

export default function Projects() {
    return (
        <>
            <h1>Projects</h1>

            <p>
                A selection of gameplay systems, interactive projects, and software
                work designed to demonstrate real-world engineering skills.
            </p>

            <section style={{ marginTop: "3rem" }}>
                <h2>Gameplay Systems</h2>

                <div style={{ display: "grid", gap: "1.5rem", marginTop: "1rem" }}>
                    <ProjectCard
                        title="Gameplay Ability System"
                        description="A modular gameplay ability system featuring cooldowns, state handling, and animation-driven timing."
                        tech="Unity, C#"
                        slug="gameplay-ability-system"
                        status="In Progress"

                    />
                </div>
            </section>

            <section style={{ marginTop: "3rem" }}>
                <h2>Games</h2>

                <div style={{ display: "grid", gap: "1.5rem", marginTop: "1rem" }}>
                    <ProjectCard
                        title="Small Polished Game"
                        description="A focused, mechanics-driven game emphasizing feel, responsiveness, and tuning."
                        tech="Unity, C#"
                        slug="small-polished-game"
                        status="Planned"
                    />
                </div>
            </section>

            <section style={{ marginTop: "3rem" }}>
                <h2>Software & Tools</h2>

                <div style={{ display: "grid", gap: "1.5rem", marginTop: "1rem" }}>
                    <ProjectCard
                        title="Internal Systems Demo"
                        description="A professional-style system demonstrating clean architecture, documentation, and extensibility."
                        tech="TypeScript, Node.js"
                        slug="internal-systems-demo"
                        status="Planned"
                    />
                </div>
            </section>
        </>
    );
}
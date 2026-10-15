
import Link from "next/link";

const projects = [
  {
    number: "01",
    category: "BACKEND DEVELOPMENT",
    title: "Laravel Task Management API",
    description:
      "Exploring API development, task management, authentication, and notification features.",
    tags: ["Laravel", "REST API", "PHP"],
    href: "/backend",
  },
  {
    number: "02",
    category: "PERSONAL EXPERIENCE",
    title: "PASKADEMA SENANJAYA",
    description:
      "A journey shaped by discipline, teamwork, competition, and meaningful memories.",
    tags: ["Paskibra", "Teamwork", "Growth"],
    href: "/paskibra",
  },
];

export default function HomePage() {
  return (
    <main>
      <section className="container hero">
        <p className="eyebrow">PERSONAL PORTFOLIO — 2026</p>

        <h1 className="hero-title">
          Building with
          <br />
          curiosity.
          <br />
          Growing through
          <br />
          <em>every experience.</em>
        </h1>

        <div className="hero-intro">
          <p>
            I&apos;m Satria, an aspiring backend developer exploring
            how applications work beneath the surface, while
            learning discipline, responsibility, and teamwork
            through Paskibra.
          </p>

          <div className="hero-links">
            <Link href="/backend" className="text-link">
              Explore backend projects <span>↗</span>
            </Link>

            <Link href="/paskibra" className="text-link">
              Discover my Paskibra journey <span>↗</span>
            </Link>
          </div>
        </div>

        <div className="hero-meta">
          <span>BACKEND DEVELOPMENT</span>
          <i />
          <span>PERSONAL GROWTH</span>
          <i />
          <span>PASKIBRA</span>
        </div>
      </section>

      <div className="container">
        <hr className="divider" />
      </div>

      <section className="container work-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / SELECTED WORK</p>
            <h2 className="section-title">
              Learning by
              <br />
              <em>building.</em>
            </h2>
          </div>

          <p className="section-description">
            A collection of projects and experiences that reflect
            what I&apos;m learning and who I&apos;m becoming.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <Link
              href={project.href}
              className="project-card"
              key={project.number}
            >
              <div>
                <div className="project-top">
                  <span>
                    {project.number} — {project.category}
                  </span>
                  <span className="project-arrow">↗</span>
                </div>

                <h3>{project.title}</h3>
                <p className="project-description">
                  {project.description}
                </p>
              </div>

              <div className="tag-list">
                {project.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="container closing-section">
        <div className="closing-card">
          <p className="eyebrow">A CONTINUOUS JOURNEY</p>
          <h2>
            Still learning.
            <br />
            Still becoming.
          </h2>
          <p>
            Every project and every challenge is another opportunity
            to learn, improve, and move forward.
          </p>
          <Link href="/about" className="text-link">
            A little more about me <span>↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}

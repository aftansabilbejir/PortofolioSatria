import Link from "next/link";

const projects = [
  {
    number: "01",
    category: "LARAVEL / REST API",
    title: "Laravel Task Management API",
    image: "/backend/image.png",
    description:
      "A task management API built with Laravel, focused on organizing and managing tasks. My contribution includes working with notification features and understanding how they connect to the wider application workflow.",
    tags: ["Laravel", "PHP", "REST API", "Notifications"],
    note: "Task workflows, API structure, and notification implementation.",
  },
  {
    number: "02",
    category: "AUTHENTICATION / SECURITY",
    title: "Authentication",
    image: "/backend/login.png",
    description:
      "Working with authentication flows and the backend logic that protects access to application resources, including request validation and login behaviour.",
    tags: ["Laravel", "Authentication", "Validation"],
    note: "Understanding login flows, validation, and protected endpoints.",
  },
{
  number: "03",
  category: "TASK MANAGEMENT / NOTIFICATIONS",
  title: "Notification System",
  image: "/backend/notifikasi.png",
  description:
    "Developing notification features for a task management application, covering updates about new tasks, approaching deadlines, overdue tasks, mentions, reject and newly created projects.",
  tags: [
    "Laravel",
    "Notifications",
    "Task Management",
    "Automation",
  ],
  note:
    "Keeping users informed about task updates, deadlines, mentions, and project activity.",
},
];

const technologies = [
  "PHP",
  "Laravel",
  "REST API",
  "MySQL",
  "Git",
  "Postman",
];

export default function BackendPage() {
  return (
    <main className="container inner-page backend-page">
      <p className="eyebrow">03 / BACKEND DEVELOPMENT</p>

      <div className="backend-heading-row">
        <h1 className="inner-title">
          Understanding
          <br />
          what&apos;s beneath
          <br />
          <em>the surface.</em>
        </h1>

        <p className="backend-intro-copy">
          I&apos;m learning to build the logic behind applications:
          designing API workflows, managing data, and making features
          work reliably behind the scenes.
        </p>
      </div>

      <hr className="divider about-divider" />

      <div className="backend-section-heading">
        <p className="eyebrow">SELECTED PROJECTS</p>
        <p className="backend-section-note">
          A closer look at what I&apos;ve been working on.
        </p>
      </div>

      <div className="backend-project-grid">
        {projects.map((project) => (
          <article
            className="backend-project-card"
            key={project.number}
          >
          <div className="backend-project-image">
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              />
            </div>

            <div className="backend-project-top">
              <span>
                {project.number} — {project.category}
              </span>
              <span className="backend-arrow" aria-hidden="true">
                ↗
              </span>
            </div>

            <h2>{project.title}</h2>

            <p className="backend-project-description">
              {project.description}
            </p>

            <div className="tag-list">
              {project.tags.map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>

            <div className="backend-project-note">
              <span className="eyebrow">FOCUS</span>
              <p>{project.note}</p>
            </div>
          </article>
        ))}
      </div>

      <section className="backend-section backend-tools-section">
        <p className="eyebrow">TOOLS &amp; TECHNOLOGIES</p>

        <div className="backend-tech-grid">
          {technologies.map((technology, index) => (
            <div className="backend-tech" key={technology}>
              <span>
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{technology}</h3>
            </div>
          ))}
        </div>
      </section>

      <div className="about-next">
        <p className="eyebrow">BEYOND THE TERMINAL</p>
        <h2>Discipline is built outside the screen, too.</h2>

        <Link href="/paskibra" className="text-link">
          Explore my Paskibra journey <span>↗</span>
        </Link>
      </div>
    </main>
  );
}
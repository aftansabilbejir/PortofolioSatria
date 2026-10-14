
import Link from "next/link";

const contacts = [
  {
    label: "INSTAGRAM",
    value: "@aftansabill",
    href: "https://www.instagram.com/aftansabill/",
  },
  {
    label: "GITHUB",
    value: "View my repositories",
    href: "https://github.com/aftansabilbejir",
  },
  {
    label: "EMAIL",
    value: "Send me an email",
    href: "mailto:aftansabils@gmail.com",
  },
];

export default function ContactPage() {
  return (
    <main className="container inner-page contact-page">
      <p className="eyebrow">05 / CONTACT</p>

      <h1 className="inner-title">
        Have something
        <br />
        in mind?
        <br />
        <em>Let&apos;s connect.</em>
      </h1>

      <div className="contact-intro">
        <p>
          I&apos;m always open to learning, exchanging ideas,
          and connecting with people who are building something
          meaningful.
        </p>
      </div>

      <hr className="divider about-divider" />

      <p className="eyebrow">FIND ME HERE</p>

      <div className="contact-list">
        {contacts.map((contact, index) => (
          <a
            className="contact-item"
            href={contact.href}
            key={contact.label}
            target={
              contact.href.startsWith("mailto:") ? undefined : "_blank"
            }
            rel={
              contact.href.startsWith("mailto:")
                ? undefined
                : "noopener noreferrer"
            }
          >
            <span className="contact-number">
              0{index + 1}
            </span>

            <div>
              <p className="contact-label">{contact.label}</p>
              <h2>{contact.value}</h2>
            </div>

            <span className="contact-arrow">↗</span>
          </a>
        ))}
      </div>

      <section className="contact-note">
        <p className="eyebrow">A SMALL REMINDER</p>
        <h2>
          Keep learning.
          <br />
          Keep showing up.
        </h2>
        <Link href="/" className="text-link">
          Back to the beginning <span>↗</span>
        </Link>
      </section>
    </main>
  );
}

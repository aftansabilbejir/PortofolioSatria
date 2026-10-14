import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="container inner-page">
      <p className="eyebrow">02 / ABOUT ME</p>

      <h1 className="inner-title">
        More than code.
        <br />
        <em>A work in progress.</em>
      </h1>

      <div className="about-grid">
        <div className="about-profile">
         <img
              src="/about/oren.jpeg"
              alt="Portrait of Satria"
              className="about-portrait"
/>
          <p className="about-label">A LITTLE INTRODUCTION</p>
        </div>

        <div className="about-copy">
          <p>
            I&apos;m Satria, a vocational student interested in
            backend development and the systems that power
            applications behind the scenes.
          </p>

          <p>
            My journey is not only about writing code. Through
            projects, new challenges, and Paskibra, I continue
            learning about discipline, responsibility, and
            working with other people.
          </p>

          <p>
            I believe progress comes from staying curious,
            learning from mistakes, and being willing to improve.
          </p>
        </div>
      </div>

      <hr className="divider about-divider" />

      <p className="eyebrow">WHAT SHAPES ME</p>

      <div className="about-values">
        <article>
          <span>01</span>
          <h2>Curiosity</h2>
          <p>
            Understanding how things work instead of simply
            making them work.
          </p>
        </article>

        <article>
          <span>02</span>
          <h2>Discipline</h2>
          <p>
            Showing up, practicing consistently, and taking
            responsibility for the process.
          </p>
        </article>

        <article>
          <span>03</span>
          <h2>Growth</h2>
          <p>
            Accepting feedback, learning from mistakes, and
            becoming better with every experience.
          </p>
        </article>
      </div>

      <div className="about-next">
        <p className="eyebrow">KEEP EXPLORING</p>
        <h2>See what I&apos;ve been working on.</h2>
        <Link href="/backend" className="text-link">
          Explore backend projects <span>↗</span>
        </Link>
      </div>
    </main>
  );
}
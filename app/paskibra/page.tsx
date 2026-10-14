import Link from "next/link";

const trainingPhotos = [
  {
    image: "/paskibra/msft.jpeg",
    alt: "Abyakta Dream Team during preparation",
    label: "ABYAKTA BEFORE THE PERFORMANCE",
  },
  {
    image: "/paskibra/MMT.jpeg",
    alt: "Mammoth Team at the competition",
    label: "MAMMOTH AT LKBB SURAWIRAAJI PASURUAN 2025",
  },
  {
    image: "/paskibra/JUR.jpeg",
    alt: "Abyakta Dream Team celebrating its achievement",
    label: "TOP 6 BEST & TOP 3 BEST PBB IN MALANG",
  },
];
const milestones = [
  {
    number: "01",
    title: "Juara Utama 1",
    event: "LOBB MAFEST 2025",
    date: "22 November 2025",
    tingkat: "SMA/SMK Se-Derajat Malang Raya",
  },
  {
    number: "02",
    title: "TOP BEST 6",
    event: "LPKBB JURAGAN 3 (FINAL)",
    date: "10 Januari 2026",
    tingkat: "SMA/SMK Se-Derajat Malang Raya",
  },
  {
    number: "03",
    title: "BEST PBB 3",
    event: "LPKBB JURAGAN 3 (FINAL)",
    date: "10 Januari 2026",
    tingkat: "SMA/SMK Se-Derajat Malang Raya",
  },
  {
    number: "04",
    title: "MADYA 1",
    event: "LKBB DIESNATALIS POLTEKAD KE-35",
    date: "04 Oktober 2025",
    tingkat: "SMA/SMK Se-Derajat Malang Raya",
  },
  {
    number: "05",
    title: "MADYA 3",
    event: "LPKBB PRASASSTI LAMPAHREKSO",
    date: "18 Oktober 2025",
    tingkat: "Purna Se-Malang Raya",
  },
  {
    number: "06",
    title: "MADYA 3",
    event: "LPKBB PRASASSTI LAMPAHREKSO",
    date: "19 Oktober 2025",
    tingkat: "Purna Se-Malang Raya",
  },
  {
    number: "07",
    title: "BINA 2",
    event: "RAMADHAN CHAMPIONSHIP 2025",
    date: "15 Maret 2025",
    tingkat: "SMA/SMK Se-Derajat Malang Raya",
  },
  {
    number: "08",
    title: "BINA 2",
    event: "LKBB SURAWIRAAJI 2025 (SEASON 2)",
    date: "8 Maret 2025",
    tingkat: "SMA/SMK Se-Derajat Jawa Timur",
  },
  {
    number: "09",
    title: "MULA 4",
    event: "LKBB JURAGAN EXHIBITION 2024",
    date: "28 September 2024",
    tingkat: "SMA/SMK Se-Derajat Malang Raya",
  },
];

export default function PaskibraPage() {
  return (
    <main className="pask-page">
      {/* JOURNAL INTRODUCTION */}
      <section className="pask-journal-intro">
        <p className="pask-eyebrow">
          Paskibra / A personal journal
        </p>

        <div className="pask-journal-headline">
          <h1>
            Journey Of
            <br />
            PASKADEMA
          </h1>

          <p className="pask-journal-context">
            Another part of who I am. A space for my Paskibra
            journey — the competition moments, the training,
            and the reflections in between.
          </p>
        </div>
      </section>

      {/* MAIN COMPETITION SCRAPBOOK */}
      <section className="pask-competition">
        <div className="pask-divider" />

        <div className="pask-competition-spread">
          <div className="pask-photo-mount">
            <div className="pask-main-photo">
              <img
                src="/paskibra/MAFEST.jpeg"
                alt="Abyakta Dream Team at LOBB MAFEST 2025"
              />

              <span className="pask-photo-mark">↗</span>
            </div>

            <div className="pask-photo-caption">
              <h2>LOBB MAFEST 2025</h2>
              <span>26 NOV 2025</span>
            </div>
          </div>

          <div className="pask-competition-story">
            <h2>LOBB MAFEST 2025</h2>

            <p className="pask-story-lead">
              Our final performance alongside our seniors,
              and Abyakta&apos;s last competition of the year.
            </p>

            <div className="pask-paper-note">
              <h3>A memory to keep.</h3>

              <p>
                The final competition for Abyakta Dream Team
                before we went our separate ways to focus on
                school and internships.
              </p>

              <p>
                We gave this competition everything we had.
                After long days of training, from morning until
                night, we came together one last time to give
                our best performance.
              </p>

              <p>
                And by God&apos;s grace, with the guidance and
                dedication of our coaches, our journey ended
                with a result beyond what we could have hoped
                for: Juara Utama 1.
              </p>

              <p>
                A moment filled with happiness, tears, and pride
                after two years of working to reach this level
                once again.
              </p>

              <p>
                Thank you to our coaches for guiding us, and
                to every member of Abyakta Dream Team for the
                effort, the memories, and the journey we shared.
              </p>

              <p>
                This may be the end of one chapter, but it is
                not the end of our story.
              </p>

              <p className="pask-paper-emphasis">
                The Best Coach. The Best Team. An Everlasting Bond.
              </p>

              <p>Until we meet again, Abyakta Dream Team.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TRAINING PHOTO GALLERY */}
      <section className="pask-training">
        <div className="pask-training-heading">
          <p className="pask-eyebrow">THE DAYS IN BETWEEN</p>
          <h2>Between the big moments.</h2>
        </div>

        <div className="pask-training-gallery">
          {trainingPhotos.map((photo, index) => (
            <figure
              className={`pask-gallery-item pask-gallery-item-${index + 1}`}
              key={photo.image}
            >
              <div className="pask-gallery-image">
                <img src={photo.image} alt={photo.alt} loading="lazy" />
              </div>

              <figcaption>
                <span>0{index + 1}</span>
                <span>{photo.label}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="pask-gallery-note">
          Not every meaningful moment happens in front of an audience.
          Some of the best memories are made during the journey itself.
        </p>
      </section>

      {/* COMPETITIVE RECORD */}
      <section className="pask-milestones">
        <div className="pask-milestone-heading">
          <p className="pask-eyebrow">
            Competitive record | 2024–2026
          </p>

          <h2>EARNED, NOT GIVEN.</h2>

          <p className="pask-milestone-subtitle">
            Every competition leaves a lesson. Every achievement
            marks a step forward.
          </p>
        </div>

        <div className="pask-milestone-list">
          {milestones.map((milestone) => (
            <article
              className="pask-milestone"
              key={milestone.number}
            >
              <span className="pask-milestone-number">
                {milestone.number}
              </span>

              <div className="pask-milestone-content">
                <h3>{milestone.title}</h3>

                <p className="pask-milestone-event">
                  {milestone.event}
                </p>

                <span className="pask-milestone-date">
                  {milestone.date}
                  </span>

                {milestone.tingkat && (
                  <span className="pask-milestone-level">
                    {milestone.tingkat}
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="pask-closing-note">
          <p className="pask-eyebrow">UNTIL WE MEET AGAIN</p>

          <h2>
            The chapter ends.
            <br />
            <em>The bond remains.</em>
          </h2>

          <p>
            To every coach, senior, and teammate who became
            part of this journey: thank you. The result will
            always be a memory, but the lessons and bonds will
            stay with us.
          </p>

          <p className="pask-closing-signature">
            Abyakta Dream Team.
          </p>
        </div>
      </section>

      {/* NEXT PAGE */}
      <section className="pask-next">
        <p className="pask-eyebrow">LET&apos;S CONNECT</p>
        <h2>Every journey starts with a conversation.</h2>

        <Link href="/contact" className="text-link">
          Get in touch <span>↗</span>
        </Link>
      </section>
    </main>
  );
}
import Nav from "./components/Nav";
import { EVENT, HACKATHON_PRIZES, SESSIONS, MENTORS } from "@/data/bootcamp";

// ─────────────────────────────────────────────────────────────────────────────
// HERO
// ─────────────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section
      style={{
        position: "relative",
        height: "851px",
        overflow: "hidden",
      }}
    >
      {/* Sky gradient base */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(
            to bottom,
            #001830 0%,
            #002a50 25%,
            #1a4a7a 45%,
            #6b3820 65%,
            #b86030 80%,
            #d4853a 92%,
            #e8a050 100%
          )`,
        }}
      />

      {/* Mountain terrain band — panoramic, full-width, bottom of hero */}
      <img
        src="/logos/mountain-bg.png"
        alt=""
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          minWidth: "1920px",
          height: "auto",
          pointerEvents: "none",
          zIndex: 5,
        }}
      />

      {/* Alien on peak — right-anchored, sized to appear dramatically in hero */}
      <img
        src="/logos/human-main.webp"
        alt=""
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 0,
          right: "2%",
          height: "660px",
          width: "auto",
          pointerEvents: "none",
          zIndex: 6,
          maskImage: "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
        }}
      />

      {/* Bottom fade — blends hero into next section */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "140px",
          background: "linear-gradient(to bottom, transparent, white)",
          pointerEvents: "none",
          zIndex: 20,
        }}
      />

      {/* Content — centered, roughly lower 2/3 */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "120px 24px 60px",
          gap: "20px",
        }}
      >
        {/* Presented by */}
        <p
          style={{
            fontSize: "13px",
            fontWeight: 500,
            letterSpacing: "0.608px",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.7)",
            margin: 0,
          }}
        >
          Presented by
        </p>

        {/* Org names */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <span
            style={{
              fontSize: "16px",
              fontWeight: 600,
              color: "white",
              letterSpacing: "-0.16px",
            }}
          >
            Superteam SG
          </span>
          <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "18px" }}>×</span>
          <span
            style={{
              fontSize: "16px",
              fontWeight: 600,
              color: "white",
              letterSpacing: "-0.16px",
            }}
          >
            Colosseum Frontier
          </span>
        </div>

        {/* Date */}
        <p
          style={{
            fontSize: "14px",
            fontWeight: 400,
            letterSpacing: "0.32px",
            color: "rgba(255,255,255,0.9)",
            textTransform: "uppercase",
            margin: 0,
          }}
        >
          April 11th – May 11th 2026 · Singapore
        </p>

        {/* Main wordmark */}
        <div
          style={{
            fontFamily: "var(--font-instrument-serif), Georgia, serif",
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: "clamp(5rem, 11vw, 9.5rem)",
            lineHeight: 0.95,
            letterSpacing: "-0.03em",
            color: "white",
            marginTop: "8px",
            textShadow: "0 4px 40px rgba(0,0,0,0.3)",
          }}
        >
          Hackathon
          <br />
          <span style={{ color: "rgba(255,255,255,0.85)" }}>Bootcamp</span>
        </div>

        {/* Sub label */}
        <p
          style={{
            fontSize: "15px",
            letterSpacing: "-0.15px",
            color: "rgba(255,255,255,0.7)",
            maxWidth: "480px",
            lineHeight: "20px",
            margin: "8px 0 0",
          }}
        >
          A 5-session programme for Singapore builders competing in the Colosseum Frontier global hackathon.
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", gap: "16px", marginTop: "8px", alignItems: "center" }}>
          <a className="register-btn" href={EVENT.lumaUrl} target="_blank" rel="noopener noreferrer">
            <span className="register-btn-inner">Apply for Bootcamp ▶</span>
          </a>
          <a
            href={EVENT.hackathonUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "14px",
              fontWeight: 400,
              color: "rgba(255,255,255,0.75)",
              letterSpacing: "0.26px",
              textDecoration: "underline",
              textUnderlineOffset: "3px",
              textDecorationColor: "rgba(255,255,255,0.3)",
            }}
          >
            View Frontier Hackathon ↗
          </a>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// BOOTCAMP BENEFITS (adapts Accelerator section)
// ─────────────────────────────────────────────────────────────────────────────

const BENEFITS = [
  {
    img: "/logos/funding.png",
    alt: "Funding",
    amount: "$250,000",
    desc: "Pre-seed funding for hackathon winners through Colosseum's accelerator programme",
  },
  {
    img: "/logos/network.png",
    alt: "Network",
    amount: "Elite Network",
    desc: "Exclusive access to an elite founder network and Solana ecosystem connections",
  },
  {
    img: "/logos/mentorship.png",
    alt: "Mentorship",
    amount: "1:1 Mentorship",
    desc: "Direct ecosystem connections and 1:1 mentorship from leading Solana operators",
  },
];

function Benefits() {
  return (
    <section
      style={{
        backgroundColor: "white",
        padding: "120px 24px",
      }}
    >
      <div
        className="container-wide"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "72px",
        }}
      >
        {/* Section heading */}
        <div style={{ textAlign: "center" }}>
          <h2
            className="section-heading"
            style={{
              fontSize: "clamp(3rem, 5vw, 5rem)",
              margin: 0,
            }}
          >
            What you get
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: "rgba(23,22,21,0.6)",
              maxWidth: "560px",
              margin: "16px auto 0",
              lineHeight: "1.6",
              letterSpacing: "-0.16px",
            }}
          >
            All bootcamp participants get access to local programming.
            Top finishers in the global hackathon are considered for Colosseum&apos;s accelerator programme.
          </p>
        </div>

        {/* Three benefit cards */}
        <div
          style={{
            display: "flex",
            gap: "96px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {BENEFITS.map((b) => (
            <div
              key={b.amount}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "16px",
                maxWidth: "300px",
                textAlign: "center",
              }}
            >
              {/* Colosseum illustration — mix-blend-multiply so white disappears on white bg */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={b.img}
                alt={b.alt}
                style={{
                  width: "300px",
                  height: "300px",
                  objectFit: "contain",
                  mixBlendMode: "multiply",
                }}
              />

              <div className="display-number">{b.amount}</div>

              <p
                style={{
                  fontSize: "16px",
                  color: "rgba(23,22,21,0.6)",
                  letterSpacing: "-0.16px",
                  lineHeight: "1.5",
                  margin: 0,
                }}
              >
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// PRIZES — static 4-card grid
// ─────────────────────────────────────────────────────────────────────────────

function Prizes() {
  return (
    <section id="prizes" style={{ backgroundColor: "white", padding: "96px 24px" }}>
      <div className="container-wide">
        <div style={{ marginBottom: "48px" }}>
          <h2
            className="section-heading"
            style={{ fontSize: "clamp(2.5rem, 4vw, 4rem)", margin: 0 }}
          >
            Prizes
          </h2>
          <p style={{ fontSize: "16px", color: "rgba(23,22,21,0.6)", marginTop: "12px", letterSpacing: "-0.16px" }}>
            Global hackathon prizes — April 6 to May 11, 2026
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            borderTop: "1px solid rgba(0,0,0,0.1)",
          }}
        >
          {HACKATHON_PRIZES.map((prize, i) => (
            <div
              key={prize.label}
              style={{
                padding: "40px 32px",
                borderRight: i < HACKATHON_PRIZES.length - 1 ? "1px solid rgba(0,0,0,0.1)" : "none",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <div className="display-large">{prize.amount}</div>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                  letterSpacing: "0.26px",
                  color: "rgba(23,22,21,0.6)",
                  margin: 0,
                }}
              >
                {prize.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MENTORS (adapts Judges section)
// ─────────────────────────────────────────────────────────────────────────────

function Mentors() {
  return (
    <section
      id="mentors"
      style={{
        backgroundColor: "white",
        padding: "96px 24px",
      }}
    >
      <div className="container-wide">
        <h2
          className="section-heading"
          style={{
            fontSize: "clamp(2.5rem, 4vw, 4rem)",
            margin: "0 0 48px 0",
          }}
        >
          Mentors &amp; Hosts
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
            gap: "24px 24px",
          }}
        >
          {MENTORS.map((mentor) => (
            <div key={mentor.name} className="mentor-card">
              {/* Photo / avatar */}
              <div
                className="mentor-photo"
                style={{
                  width: "96px",
                  height: "96px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  flexShrink: 0,
                  background: "#ddd8d0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "28px",
                  fontWeight: 600,
                  color: "#888",
                }}
              >
                {mentor.avatar ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={mentor.avatar}
                    alt={mentor.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                ) : (
                  mentor.name.charAt(0)
                )}
              </div>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#171615",
                  textAlign: "center",
                  margin: "4px 0 0",
                  letterSpacing: "0",
                }}
              >
                {mentor.name}
              </p>
              <p
                style={{
                  fontSize: "13px",
                  color: "rgba(23,22,21,0.6)",
                  textAlign: "center",
                  margin: 0,
                  letterSpacing: "0.32px",
                }}
              >
                {mentor.org}
              </p>
              {mentor.twitter && (
                <a
                  href={`https://x.com/${mentor.twitter}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: "12px",
                    color: "rgba(23,22,21,0.4)",
                    textDecoration: "none",
                    letterSpacing: "0",
                  }}
                >
                  @{mentor.twitter}
                </a>
              )}
            </div>
          ))}

          {/* Coming soon slots */}
          {[1, 2, 3, 4].map((n) => (
            <div key={`soon-${n}`} className="mentor-card" style={{ opacity: 0.35 }}>
              <div
                style={{
                  width: "96px",
                  height: "96px",
                  borderRadius: "8px",
                  background: "#f0ece4",
                  border: "1px dashed rgba(23,22,21,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "24px",
                  color: "rgba(23,22,21,0.2)",
                }}
              >
                ?
              </div>
              <p style={{ fontSize: "13px", color: "rgba(23,22,21,0.4)", margin: "4px 0 0", textAlign: "center" }}>
                Coming soon
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// WORKSHOPS / SESSIONS (adapts Workshop section)
// ─────────────────────────────────────────────────────────────────────────────

function WorkshopLogo({ src, alt }: { src: string; alt: string }) {
  return (
    <div
      className="workshop-thumb"
      style={{ background: "#fff", borderRadius: "20px", padding: "10px" }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          mixBlendMode: "multiply",
        }}
      />
    </div>
  );
}

function WorkshopsSection() {
  return (
    <section
      id="workshops"
      style={{
        background: "linear-gradient(180deg, #ffffff 0%, #fdfcfa 15%, #fdfcfa 100%)",
        paddingTop: "96px",
        paddingBottom: "96px",
      }}
    >
      <div className="container-wide" id="schedule">
        {/* Heading */}
        <div style={{ marginBottom: "48px" }}>
          <h2
            className="section-heading"
            style={{ fontSize: "clamp(2.5rem, 4vw, 4rem)", margin: "0 0 12px" }}
          >
            Sessions &amp; Workshops
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: "rgba(23,22,21,0.6)",
              letterSpacing: "-0.16px",
              maxWidth: "560px",
            }}
          >
            Five weeks of programming for Singapore builders. More sessions will be announced as partners confirm.
          </p>
        </div>

        {/* Session blocks */}
        {SESSIONS.map((session) => (
          <div key={session.id} style={{ marginBottom: "48px" }}>
            {/* Session header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "16px",
                padding: "16px 0",
                borderBottom: "2px solid #171615",
              }}
            >
              <div style={{ display: "flex", alignItems: "baseline", gap: "16px", flexWrap: "wrap" }}>
                <span
                  style={{
                    fontSize: "13px",
                    fontWeight: 600,
                    letterSpacing: "0.32px",
                    textTransform: "uppercase",
                    color: "rgba(23,22,21,0.5)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {session.date} · {session.time}
                </span>
                <span
                  style={{
                    fontSize: "17.92px",
                    fontWeight: 500,
                    letterSpacing: "-0.188px",
                    color: "#171615",
                  }}
                >
                  {session.title}
                </span>
              </div>
              {session.tag && (
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    padding: "4px 10px",
                    borderRadius: "4px",
                    background: session.inviteOnly ? "rgba(8,74,94,0.08)" : "rgba(23,22,21,0.06)",
                    color: session.inviteOnly ? "#084a5e" : "rgba(23,22,21,0.5)",
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                  }}
                >
                  {session.tag}
                </span>
              )}
            </div>

            {/* Agenda rows (sessions without agenda show description row) */}
            {session.agenda.length === 0 ? (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  padding: "16px 40px 16px 0",
                  height: "80px",
                  borderTop: "1px solid rgba(0,0,0,0.06)",
                }}
              >
                <WorkshopLogo src={session.logo} alt={session.title} />
                <p style={{ fontSize: "15px", color: "rgba(23,22,21,0.6)", margin: 0, letterSpacing: "-0.15px" }}>
                  {session.description}
                </p>
              </div>
            ) : null}

            {session.agenda.map((item, i) => (
              <a
                key={i}
                href={EVENT.lumaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="workshop-row"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  padding: "16px 40px 16px 0",
                  height: "112px",
                  textDecoration: "none",
                }}
              >
                <WorkshopLogo
                  src={item.logo ?? session.logo}
                  alt={item.item}
                />

                {/* Title + presenter */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p
                    style={{
                      fontSize: "17.92px",
                      fontWeight: 500,
                      letterSpacing: "-0.188px",
                      lineHeight: "22.8px",
                      color: "#171615",
                      margin: "0 0 4px",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {item.item}
                  </p>
                  <p
                    style={{
                      fontSize: "15px",
                      color: "rgba(23,22,21,0.6)",
                      letterSpacing: "-0.15px",
                      margin: 0,
                    }}
                  >
                    {item.speaker || "Superteam SG"}
                  </p>
                </div>

                {/* Time */}
                <p
                  style={{
                    fontSize: "14px",
                    color: "rgba(23,22,21,0.6)",
                    letterSpacing: "0.26px",
                    textAlign: "right",
                    flexShrink: 0,
                    margin: 0,
                  }}
                >
                  {item.time}
                  <br />
                  <span style={{ fontSize: "13px", opacity: 0.7 }}>SGT</span>
                </p>
              </a>
            ))}
          </div>
        ))}

      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// CTA STRIP
// ─────────────────────────────────────────────────────────────────────────────

function CTAStrip() {
  return (
    <section
      style={{
        backgroundColor: "white",
        padding: "96px 24px",
        textAlign: "center",
      }}
    >
      <div className="container-wide" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "24px" }}>
        <h2
          className="section-heading"
          style={{ fontSize: "clamp(3rem, 5vw, 5.5rem)", margin: 0 }}
        >
          Build for the Frontier
        </h2>
        <p
          style={{
            fontSize: "16px",
            color: "rgba(23,22,21,0.6)",
            maxWidth: "480px",
            lineHeight: "1.6",
            letterSpacing: "-0.16px",
            margin: 0,
          }}
        >
          Join Singapore&apos;s Solana community. Register for the global hackathon first, then apply for the Superteam SG bootcamp.
        </p>
        <div style={{ display: "flex", gap: "16px", alignItems: "center", flexWrap: "wrap", justifyContent: "center" }}>
          <a className="register-btn" href={EVENT.lumaUrl} target="_blank" rel="noopener noreferrer">
            <span className="register-btn-inner">Apply for Bootcamp ▶</span>
          </a>
          <a
            href={EVENT.hackathonUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "14px",
              color: "rgba(23,22,21,0.5)",
              letterSpacing: "0.26px",
              textDecoration: "underline",
              textUnderlineOffset: "3px",
              textDecorationColor: "rgba(23,22,21,0.2)",
            }}
          >
            Register for Frontier Hackathon first ↗
          </a>
        </div>
        <p style={{ fontSize: "14px", color: "rgba(23,22,21,0.4)", margin: 0, letterSpacing: "-0.14px" }}>
          Free · Singapore only · Approval required
        </p>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// FOOTER
// ─────────────────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#fdfcfa",
        padding: "32px 24px",
        borderTop: "1px solid rgba(0,0,0,0.08)",
      }}
    >
      <div
        className="container-wide"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        <span style={{ fontSize: "14px", color: "rgba(23,22,21,0.5)", letterSpacing: "-0.14px" }}>
          Superteam SG · Colosseum Frontier Hackathon · April–May 2026
        </span>
        <div style={{ display: "flex", gap: "24px" }}>
          <a
            href={EVENT.hackathonUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: "14px", color: "rgba(23,22,21,0.5)", textDecoration: "underline", textUnderlineOffset: "3px", letterSpacing: "-0.14px" }}
          >
            View Official Hackathon Rules
          </a>
          <a
            href={EVENT.lumaUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: "14px", color: "rgba(23,22,21,0.5)", textDecoration: "underline", textUnderlineOffset: "3px", letterSpacing: "-0.14px" }}
          >
            RSVP on Luma
          </a>
        </div>
      </div>
    </footer>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Benefits />
        <Prizes />
        <Mentors />
        <WorkshopsSection />
        <CTAStrip />
      </main>
      <Footer />
    </>
  );
}

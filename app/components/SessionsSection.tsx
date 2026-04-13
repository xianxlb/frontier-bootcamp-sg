"use client";

import { useState } from "react";
import { SESSIONS, EVENT, type Session } from "@/data/bootcamp";

function WorkshopLogo({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="workshop-thumb">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </div>
  );
}

function SessionBlock({ session, isPast }: { session: Session; isPast: boolean }) {
  return (
    <div
      key={session.id}
      style={{
        marginBottom: "48px",
        opacity: isPast ? 0.45 : 1,
        transition: "opacity 0.2s",
      }}
    >
      {/* Session header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
          padding: "16px 0",
          borderBottom: isPast ? "2px solid rgba(23,22,21,0.25)" : "2px solid #171615",
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
              color: isPast ? "rgba(23,22,21,0.5)" : "#171615",
            }}
          >
            {session.title}
          </span>
        </div>
        <span
          style={{
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            padding: "4px 10px",
            borderRadius: "4px",
            background: isPast
              ? "rgba(23,22,21,0.06)"
              : "rgba(16,124,96,0.1)",
            color: isPast
              ? "rgba(23,22,21,0.4)"
              : "#0d7a5f",
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}
        >
          {isPast ? "PASSED" : session.tag ?? "UPCOMING"}
        </span>
      </div>

      {/* Agenda rows */}
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
            minHeight: "112px",
            textDecoration: "none",
            pointerEvents: isPast ? "none" : "auto",
          }}
        >
          <WorkshopLogo src={item.logo ?? session.logo} alt={item.item} />

          <div style={{ flex: 1, minWidth: 0 }}>
            <p
              style={{
                fontSize: "17.92px",
                fontWeight: 500,
                letterSpacing: "-0.188px",
                lineHeight: "22.8px",
                color: isPast ? "rgba(23,22,21,0.5)" : "#171615",
                margin: "0 0 4px",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {item.item}
            </p>
            {item.speaker && (
              <p
                style={{
                  fontSize: "15px",
                  color: "rgba(23,22,21,0.6)",
                  letterSpacing: "-0.15px",
                  margin: "0 0 2px",
                }}
              >
                {item.speaker}
              </p>
            )}
            {item.description && (
              <p
                style={{
                  fontSize: "13px",
                  color: "rgba(23,22,21,0.45)",
                  letterSpacing: "-0.13px",
                  lineHeight: "1.5",
                  margin: 0,
                  whiteSpace: "normal",
                }}
              >
                {item.description}
              </p>
            )}
          </div>

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
  );
}

export default function SessionsSection() {
  const past = SESSIONS.filter((s) => s.status === "past");
  const upcoming = SESSIONS.filter((s) => s.status !== "past");
  const [tab, setTab] = useState<"upcoming" | "past">("upcoming");

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
        {/* Heading row: title+description left, tabs right (bottom-aligned) */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "24px",
            marginBottom: "48px",
            flexWrap: "wrap",
          }}
        >
          <div>
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
                margin: 0,
              }}
            >
              Five weeks of programming for Singapore builders. More sessions will be announced as partners confirm.
            </p>
          </div>

          {/* Tabs — underline style matching site typography */}
          <div style={{ display: "flex", gap: "0", flexShrink: 0 }}>
            {(["upcoming", "past"] as const).map((t, i) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                style={{
                  fontSize: "13px",
                  fontWeight: 600,
                  letterSpacing: "0.32px",
                  textTransform: "uppercase",
                  padding: "8px 16px",
                  background: "none",
                  border: "none",
                  borderBottom: tab === t ? "2px solid #171615" : "2px solid rgba(23,22,21,0.12)",
                  color: tab === t ? "#171615" : "rgba(23,22,21,0.35)",
                  cursor: "pointer",
                  marginLeft: i === 0 ? 0 : "0",
                  transition: "color 0.15s, border-color 0.15s",
                }}
              >
                {t === "upcoming" ? `Upcoming (${upcoming.length})` : `Past (${past.length})`}
              </button>
            ))}
          </div>
        </div>

        {/* Session blocks */}
        {tab === "upcoming"
          ? upcoming.map((s) => <SessionBlock key={s.id} session={s} isPast={false} />)
          : past.map((s) => <SessionBlock key={s.id} session={s} isPast={true} />)}
      </div>
    </section>
  );
}

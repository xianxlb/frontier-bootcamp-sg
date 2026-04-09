"use client";

import { useEffect, useState } from "react";
import { EVENT } from "@/data/bootcamp";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const linkColor = scrolled ? "#171615" : "rgba(255,255,255,0.9)";

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        height: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: scrolled ? "rgba(255,255,255,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        transition: "background-color 300ms, backdrop-filter 300ms",
      }}
    >
      <div
        className="container-wide"
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "2rem",
        }}
      >
        {/* Logo / Wordmark */}
        <a
          href="/"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span
            style={{
              fontSize: "14px",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: linkColor,
              transition: "color 300ms",
            }}
          >
            Superteam SG
          </span>
          <span style={{ color: scrolled ? "rgba(23,22,21,0.3)" : "rgba(255,255,255,0.3)" }}>
            ×
          </span>
          <span
            style={{
              fontSize: "14px",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: scrolled ? "#084a5e" : "rgba(255,255,255,0.7)",
              transition: "color 300ms",
            }}
          >
            Colosseum Frontier
          </span>
        </a>

        {/* Nav links */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "32px",
          }}
        >
          {[
            ["Sessions", "#schedule"],
            ["Mentors", "#mentors"],
            ["Prizes", "#prizes"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              style={{
                fontSize: "16px",
                fontWeight: 400,
                letterSpacing: "-0.16px",
                color: linkColor,
                textDecoration: "none",
                transition: "color 300ms",
              }}
            >
              {label}
            </a>
          ))}

          <a className="register-btn" href={EVENT.lumaUrl} target="_blank" rel="noopener noreferrer">
            <span className="register-btn-inner">Register Now ▶</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

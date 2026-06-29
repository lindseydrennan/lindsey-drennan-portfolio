"use client";

import { useState } from "react";
import Link from "next/link";

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.33 8h9.34M8.67 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function TextCTA({
  eyebrow,
  title,
  subtitle,
  buttonLabel,
  buttonHref,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  buttonLabel: string;
  buttonHref: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link href={buttonHref} className="no-underline">
      <div
        className="group relative overflow-hidden rounded-lg border border-[#E5E7EB] bg-white p-6 transition-transform duration-200 ease-out hover:-translate-y-1"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          className="pointer-events-none absolute left-1/2 -translate-x-1/2 z-0 h-[300px] w-[700px] transition-all duration-500 ease-out"
          style={{
            bottom: hovered ? "-20px" : "-40px",
            opacity: hovered ? 1 : 0.7,
            background: "radial-gradient(78% 60% at 50% 100%, #C7F1D5 0%, #FFF 70%)",
            filter: "blur(50px)",
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 flex items-center justify-between gap-8">
          <div>
            <p
              className="mb-1.5 !text-[12px] font-bold uppercase tracking-[0.08em]"
              style={{ fontFamily: "var(--font-inter), sans-serif", color: "#067748" }}
            >
              {eyebrow}
            </p>
            <p
              className="mb-0.5 !text-[22px] !font-bold leading-tight"
              style={{ fontFamily: "var(--font-inter), sans-serif", color: "#14352E", letterSpacing: "-0.02em" }}
            >
              {title}
            </p>
            <p
              className="text-sm"
              style={{ fontFamily: "var(--font-inter), sans-serif", color: "#6B7280" }}
            >
              {subtitle}
            </p>
          </div>
          <span
            className="flex shrink-0 items-center gap-2 text-sm font-semibold transition-colors"
            style={{ fontFamily: "var(--font-inter), sans-serif", color: "#067748" }}
          >
            {buttonLabel} <ArrowIcon />
          </span>
        </div>
      </div>
    </Link>
  );
}

const CODE = `const TextCTA = ({ eyebrow, title, button }) => {
  const ctaContent = (
    <div
      className={\`relative bg-white overflow-hidden
        max-w-4xl p-6 mx-auto border border-gray-100
        rounded flex flex-col md:items-center
        md:justify-between md:flex-row
        transition-transform ease-in-out
        hover:-translate-y-1\`}
    >
      {/* Gradient half-circle background */}
      <div
        className="pointer-events-none absolute
          left-1/2 -bottom-8 -translate-x-1/2
          w-[900px] h-[400px] z-0"
        style={{
          background: \`radial-gradient(
            78.44% 59.77% at 50% 100%,
            #C7F1D5 0%, #FFF 70%
          )\`,
          filter: 'blur(50px)',
        }}
      />
      <div className="md:mr-12 z-10 relative">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="h3"
          dangerouslySetInnerHTML={{
            __html: title.replace(/\\n/g, '<br />')
          }}
        />
      </div>
      <div className="flex whitespace-nowrap z-10">
        <Button {...button} arrow />
      </div>
    </div>
  );

  return button?.href
    ? <Link href={button.href}>{ctaContent}</Link>
    : ctaContent;
};`;

export default function ComponentShowcase() {
  return (
    <div className="flex w-full flex-col gap-6">
      <div className="grid w-full grid-cols-2 gap-6 max-md:grid-cols-1">
        {/* Live preview */}
        <div className="flex flex-col gap-4 rounded-2xl p-8 max-sm:p-4" style={{ border: "1px solid var(--borders)", backgroundColor: "var(--cream)" }}>
          <span className="text-xs font-semibold uppercase tracking-[0.1em] text-green">
            Live component
          </span>

          <div className="flex flex-1 flex-col justify-center gap-4 rounded-xl bg-[#F1F0EB] p-6 max-sm:p-3">
            <TextCTA
              eyebrow="Upcoming Webinar"
              title="Fleetio Live Demo"
              subtitle="May 21st  |  11am CST"
              buttonLabel="Register now"
              buttonHref="#"
            />
          </div>
        </div>

        {/* Code panel */}
        <div className="flex flex-col gap-4 rounded-2xl bg-[#14352E] p-8 max-sm:p-4" style={{ border: "1px solid var(--borders)" }}>
          <span
            className="text-xs font-semibold uppercase tracking-[0.1em]"
            style={{ fontFamily: "var(--font-inter), sans-serif", color: "#6B917E" }}
          >
            React implementation
          </span>
          <pre
            className="flex-1 overflow-x-auto rounded-xl bg-[#0D2923] p-6 max-sm:p-3 text-[13px] max-sm:text-[11px] leading-relaxed"
            style={{ fontFamily: "var(--font-ibm-plex-mono), monospace", color: "#B8C9C0" }}
          >
            <code>{CODE}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

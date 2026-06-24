import type { Metadata } from "next";
import Link from "next/link";
import Headshot from "@/components/atoms/Headshot";
import FadeIn from "@/components/atoms/FadeIn";

export const metadata: Metadata = {
  title: "About",
  description:
    "Hi! I'm Lindsey, a brand designer and developer who thrives at the intersection of creativity and functionality.",
};

const traits = [
  ["4w3", "ISFJ", "the individualist"],
  ["baker", "dog lover", "crafter"],
];

export default function About() {
  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col items-center overflow-hidden px-12 pt-24 pb-20 max-sm:px-6 max-sm:pt-8">
      <Headshot className="relative top-6 max-w-sm max-sm:top-4 max-sm:max-w-[200px]" />

      {/* Trait table */}
      <div className="flex w-full max-w-lg flex-col rounded border border-[#cdd9c5]">
        {traits.map((row, i) => (
          <div key={i}>
            {i > 0 && <div className="h-px w-full bg-light-green" />}
            <div className="flex h-12 w-full items-center justify-between px-6 max-sm:flex-wrap max-sm:px-3">
              {row.map((trait, j) => (
                <div key={j} className="flex items-center justify-center">
                  {j > 0 && (
                    <div className="mx-3 h-full min-h-12 w-px bg-light-green max-sm:mx-2" />
                  )}
                  <span className="font-jakarta text-md font-semibold uppercase tracking-wider text-green max-sm:text-sm">
                    {trait}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bio */}
      <FadeIn delay={200}>
      <p className="pt-6 max-w-2xl text-center">
        Hi! I&apos;m Lindsey, a brand designer and developer who thrives at the
        intersection of creativity and functionality. From crafting dynamic brand
        systems to refining user experiences, I&apos;m driven by a passion for
        design quality and seamless execution. When I&apos;m not designing or coding, you&apos;ll find me renovating my
        home, baking something sweet, or adventuring with Aiden, my sweet Duck
        Tolling Retriever.
      </p>

      </FadeIn>

      {/* Resume */}
      <FadeIn delay={400}>
      <Link
        href="/lindsey-drennan-resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-base mt-6"
      >
        Download Resume
      </Link>
      </FadeIn>
    </section>
  );
}

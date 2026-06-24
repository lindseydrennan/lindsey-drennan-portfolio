import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/atoms/FadeIn";
import Headshot from "@/components/atoms/Headshot";

export const metadata: Metadata = {
  title: "Lindsey Drennan - Brand & Web Designer",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  name: "Lindsey Drennan - Brand & Web Designer",
  url: "https://www.lindseyadrennan.com",
  mainEntity: {
    "@type": "Person",
    name: "Lindsey Drennan",
    jobTitle: "Brand & Web Designer",
    description:
      "Brand designer, web designer, front-end developer and photographer. Passionate about brand standards and design systems.",
    sameAs: [
      "https://dribbble.com/lindseydrennan",
      "https://www.linkedin.com/in/lindsey-drennan-183b63b3/",
      "https://github.com/lindseydrennan",
    ],
  },
};

export default function Home() {
  return (
    <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
    <section className="mx-auto flex w-full max-w-[1280px] items-center px-12 pt-[250px] pb-[70px] max-sm:flex-col max-sm:items-center max-sm:px-6 max-sm:pt-10">
      {/* Headshot — mobile: top, desktop: absolute overlay */}
      <Headshot className="mb-6 hidden !max-w-sm self-center max-sm:block" delay={300} />

      <div className="relative flex w-full flex-col items-start gap-5 max-sm:items-center">
        <FadeIn>
          <h1 className="max-w-[850px] max-sm:text-center">
            I&apos;m a brand designer, web designer, front-end developer and
            photographer. Passionate about brand standards and design systems.
          </h1>
        </FadeIn>

        <FadeIn className="flex gap-[19px]" delay={300}>
          <Link href="/about" className="btn btn-base">
            About
          </Link>
          <Link href="/my-work" className="btn btn-base">
            My Work
          </Link>
        </FadeIn>

        {/* Desktop only — absolute positioned */}
        <Headshot className="absolute -top-[200px] left-[757px] z-0 max-w-[600px] max-sm:hidden" />
      </div>
    </section>
    </>
  );
}

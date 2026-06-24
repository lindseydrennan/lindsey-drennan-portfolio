import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/atoms/FadeIn";
import Headshot from "@/components/atoms/Headshot";

export const metadata: Metadata = {
  title: "Lindsey Drennan - Brand & Web Designer",
};

export default function Home() {
  return (
    <section className="mx-auto flex w-full max-w-[1280px] items-center px-12 pt-[250px] pb-[70px] max-sm:flex-col max-sm:items-center max-sm:px-0 max-sm:pt-[200px]">
      <div className="relative flex w-full flex-col items-start gap-5 max-sm:items-center">
        <FadeIn>
          <h1 className="max-w-[850px]">
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

        <Headshot className="absolute -top-[200px] left-[757px] z-0 max-w-[600px] max-md:static max-md:mt-8 max-md:self-center" />
      </div>
    </section>
  );
}

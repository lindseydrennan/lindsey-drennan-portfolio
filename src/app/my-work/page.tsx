import type { Metadata } from "next";
import Image from "next/image";
import FadeIn from "@/components/atoms/FadeIn";
import ComponentShowcase from "@/components/organisms/ComponentShowcase";

export const metadata: Metadata = {
  title: "My Work",
  description:
    "Portfolio of brand design systems, component libraries, and visual identities built for Fleetio, Move & Store, and more.",
};

function SkillGrid({ skills }: { skills: string[] }) {
  return (
    <div className="flex w-full flex-wrap gap-3">
      {skills.map((s) => (
        <div
          key={s}
          className="rounded-lg px-4 py-2 text-sm leading-5"
          style={{ border: "1px solid var(--borders)" }}
        >
          {s}
        </div>
      ))}
    </div>
  );
}

function SectionHeader({
  role,
  location,
  years,
}: {
  role: string;
  location: string;
  years: string;
}) {
  return (
    <div className="flex w-full flex-wrap items-center justify-between gap-2 max-sm:flex-col max-sm:items-start max-sm:gap-1">
      <div className="flex flex-wrap items-center gap-2.5">
        <span className="font-jakarta text-sm font-semibold uppercase tracking-[0.1em] text-copy">
          {role}
        </span>
        <span className="font-jakarta text-sm font-semibold uppercase tracking-[0.1em] text-peach">
          {"//"}
        </span>
        <span className="font-jakarta text-sm font-semibold uppercase tracking-[0.1em] text-copy">
          {location}
        </span>
      </div>
      <span className="font-jakarta text-sm font-semibold uppercase tracking-[0.1em] text-copy max-sm:text-left">
        {years}
      </span>
    </div>
  );
}

function ContentBlock({
  eyebrow,
  heading,
  paragraphs,
}: {
  eyebrow: string;
  heading: string;
  paragraphs: string[];
}) {
  return (
    <FadeIn>
      <div className="flex flex-col items-start gap-3.5">
        <span className="font-jakarta text-sm font-semibold uppercase tracking-[0.1em] text-copy">
          {eyebrow}
        </span>
        <h3 className="">
          {heading}
        </h3>
        <div className="flex w-full flex-wrap gap-9 max-sm:gap-5">
          {paragraphs.map((p, i) => (
            <p
              key={i}
              className="w-full flex-1 basis-[280px]"
            >
              {p}
            </p>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}

function CaseImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <FadeIn className="w-full">
      <Image
        src={src}
        alt={alt}
        width={2304}
        height={948}
        quality={95}
        loading="eager"
        sizes="(max-width: 1280px) 100vw, 1152px"
        className="w-full"
      />
    </FadeIn>
  );
}

function FullWidthImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <FadeIn className="w-full">
      <Image
        src={src}
        alt={alt}
        width={2304}
        height={1200}
        quality={95}
        loading="eager"
        sizes="(max-width: 1280px) 100vw, 1280px"
        className="w-full"
      />
    </FadeIn>
  );
}

export default function MyWork() {
  return (
    <div className="mx-auto flex max-w-[1280px] my-24 flex-col gap-10 px-12 max-sm:px-6">
      <h1 className="sr-only">My Work — Portfolio Case Studies</h1>
      {/* === FLEETIO === */}
      <section className="mt-16 flex flex-col gap-10">
        <div className="flex flex-col gap-7">
          <SectionHeader
            role="Senior brand designer"
            location="remote"
            years="2021-2026"
          />
          <FadeIn>
            <h2 className="">
              At Fleetio, I built comprehensive design systems from the ground
              up — establishing foundational color tokens, scaling them into a
              complete component library, and engineering the front-end
              architecture that brought it all together into a cohesive brand
              identity.
            </h2>
          </FadeIn>
          <span className="font-jakarta text-sm font-bold uppercase tracking-[0.1em] text-copy">
            Technical skills
          </span>
          <SkillGrid
            skills={[
              "React/NextJS/Tailwind",
              "Codex/Claude Code/n8n",
              "Sanity CMS",
              "Creative Cloud",
              "HTML/CSS/Javascript",
              "Vercel/Netlify",
              "VSCode/Github",
              "Figma",
            ]}
          />
        </div>

        <CaseImage
          src="/images/fleetio-accessibility.png"
          alt="Comparison of two Fleetio webpage screenshots highlighting text contrast differences with contrast ratio scores and accessibility pass or fail results."
        />

        <ContentBlock
          eyebrow="context"
          heading="The pieces were there. The system wasn't."
          paragraphs={[
            "Fleetio had color tokens. It had components. But they existed in isolation, without the connective tissue that turns a collection of assets into a living design system. Components in Figma weren't wired together, so a single brand update meant hunting down changes manually across dozens of files. There was no system for social graphics, no shared framework for new surface areas, and the Figma component library didn't reflect the actual props and variants available in code.",
            "I came in to fix that. I unified the existing foundations, closed the gap between design and engineering, extended the system to cover every surface across all design assets and drove new design decisions that became part of the Fleetio brand going forward.",
          ]}
        />

        <CaseImage
          src="/images/fleetio-design-system.png"
          alt="Typography scale with headings and body text sizes, examples of button styles, shadow effect samples, color palettes, icon sizes, and a partial vehicle management software screen."
        />
          <FullWidthImage
          src="/images/swag-examples.png"
          alt="Showing examples of Fleetio branded swag"
        />

        <ContentBlock
          eyebrow="foundation"
          heading="Building the foundation that everything else could stand on."
          paragraphs={[
            "Before I could unify anything, I needed to establish a proper token architecture in Figma. Fleetio had no dark mode or mobile variables, so I built that system from the ground up for web, and translated our Tailwind class structure directly into Figma variables so that design and code were speaking the same language.",
            "I created complete type style libraries spanning web, print, and social scales, so that typography decisions made in one context could inform all the others. I also built out component systems for each of our iconography families, with consistent sizing scales across every icon set. The result was a clean Figma that aligned with our website.",
          ]}
        />

        <FullWidthImage
          src="/images/fleetio-webpages-2.png"
          alt="Laptop and tablet displaying Fleetio fleet management blog and resources."
        />
        <FullWidthImage
          src="/images/fleetio-webpages.png"
          alt="Construction equipment management software webpage showing fleet job management features and partner logos."
        />

        <ContentBlock
          eyebrow="Components"
          heading="Closing the gap between design and code, one component at a time."
          paragraphs={[
            "The component library had accumulated inconsistencies over time. Props were named differently across components, variants didn't map to what actually existed in code, and there was no reliable way for engineers to know what a Figma file was really telling them to build. I audited the entire library, standardized prop naming conventions across every component, and rebuilt Figma components to be a true one-to-one mirror of their coded counterparts.",
            "I integrated a Figma plugin linked directly to GitHub so that engineers could surface component code automatically from the design file. I also worked in the codebase during this process, making structural updates to ensure the alignment went both ways. Beyond the audit, I designed and implemented entirely new web components, introduced new visual patterns including mesh gradients, and created templates for surfaces that had never had a system behind them.",
          ]}
        />

        <FadeIn className="w-full">
          <ComponentShowcase />
        </FadeIn>

        <ContentBlock
          eyebrow="Design to code"
          heading="Building the components I designed — and designing the ones I built."
          paragraphs={[
            "My role at Fleetio wasn't just design. I worked directly in the Next.js codebase alongside engineers, writing production React components styled with Tailwind CSS. When I designed a new component in Figma, I also wrote the front-end implementation — ensuring that what shipped matched the design file exactly, with every prop, variant, and interaction state accounted for.",
            "I built reusable components like the TextCTA shown above, where small details matter: the radial gradient that shifts on hover, the responsive layout that adapts from stacked to inline, the conditional Link wrapper. I also integrated AI tools like Claude Code and Codex into my workflow to accelerate component development and automate repetitive design-to-code translation tasks, reducing turnaround from days to hours.",
          ]}
        />
      </section>

      {/* === MOVE & STORE === */}
      <section className="mt-24 pt-24 flex flex-col gap-10">
        <div className="flex flex-col gap-7">
          <SectionHeader
            role="Marketing director"
            location="birmingham, al"
            years="2018-2021"
          />
          <FadeIn>
            <h2 className="">
              At Move &amp; Store, I rebranded three distinct companies from the
              ground up, building design systems across web, email, ads, and
              social where none had existed before.
            </h2>
          </FadeIn>
          <span className="font-jakarta text-sm font-bold uppercase tracking-[0.1em] text-copy">
            Technical skills
          </span>
          <SkillGrid
            skills={[
              "Figma",
              "Salesforce",
              "Mailchimp",
              "Creative Cloud",
              "HTML/CSS/Javascript",
              "GSuite",
              "VSCode/Github",
            ]}
          />
        </div>

        <CaseImage
          src="/images/move-store-1.png"
          alt="Comparison of old and redesigned Move & Store logos."
        />
        <CaseImage
          src="/images/admiral-movers-1.png"
          alt="Comparison of Admiral Movers logos showing old and redesigned versions."
        />

        <ContentBlock
          eyebrow="context"
          heading="Three brands. Three blank slates. One designer."
          paragraphs={[
            "Move & Store was growing through acquisition, and each new brand came with no visual system, no consistency, and no foundation to build on. New Latitude Movers and Admiral Movers each needed their own identity that could stand on its own while being built with the same level of craft and intention.",
            "I led and executed every aspect of the work myself, combining design and photography skills to build each brand from scratch across every surface. The result was three distinct, cohesive identities that looked nothing like each other and everything like a brand that knew exactly what it was.",
          ]}
        />

        <CaseImage
          src="/images/new-latitude-1.png"
          alt="Comparison of old and redesigned New Latitude Moving and Storage logos."
        />
      </section>

      {/* === PLATYPI === */}
      <section className="mt-16 mb-16 flex flex-col gap-10">
        <div className="flex flex-col gap-7">
          <SectionHeader
            role="Graphic designer"
            location="birmingham, al"
            years="2016-2017"
          />
          <FadeIn>
            <h2 className="">
              At Platypi, I found my footing as a designer, learning to
              translate client ideas into polished brand identities and websites
              across a wide range of industries.
            </h2>
          </FadeIn>
          <span className="font-jakarta text-sm font-bold uppercase tracking-[0.1em] text-copy">
            Technical skills
          </span>
          <SkillGrid
            skills={[
              "Creative Cloud",
              "Platypi CMS",
              "Various PM Tools",
              "HTML/CSS",
            ]}
          />
        </div>

        <CaseImage
          src="/images/platypi-portfolio-1.png"
          alt="The Bright Star Catering Company logo and online menu screenshot."
        />
        <FullWidthImage
          src="/images/platypi-portfolio-2.png"
          alt="Portfolio work samples from Platypi."
        />

        <ContentBlock
          eyebrow="context"
          heading="My first clients. My first websites. Where it all started."
          paragraphs={[
            "Platypi was where I learned what it actually means to work with clients. Taking a brief, asking the right questions, and turning someone's vision into something real and designed with intention. The work spanned industries and formats, and no two projects looked alike.",
            "It was also where I built my web design foundation. Designing for real products with real constraints pushed me to think beyond aesthetics and start solving problems with design, a skill that has shaped everything I've done since.",
          ]}
        />

      </section>
    </div>
  );
}

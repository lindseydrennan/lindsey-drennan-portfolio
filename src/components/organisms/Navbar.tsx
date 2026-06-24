"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import LottieLogo from "../atoms/LottieLogo";

function LinkedInIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.37 3.26c0 1.4-1.12 2.53-2.5 2.53S.37 4.66.37 3.26C.37 1.86 1.49.74 2.87.74s2.5 1.12 2.5 2.52zM5.39 7.8H.35v16.2h5.04V7.8zm8.07 0H8.44v16.2h5.03V15.5c0-4.73 6.09-5.12 6.09 0v8.5h5.05V13.73c0-7.98-9.02-7.69-11.14-3.76V7.8z" fill="currentColor"/>
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 .3a12 12 0 00-3.79 23.4c.6.1.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 016.02 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18a4.65 4.65 0 011.24 3.22c0 4.61-2.8 5.63-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.21.7.82.58A12 12 0 0012 .3z" fill="currentColor"/>
    </svg>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className="group relative px-5 py-5 font-jakarta text-sm font-semibold tracking-wide text-dark-green"
    >
      {children}
      <span
        className={`absolute bottom-3 left-5 right-5 h-[2px] bg-peach transition-transform duration-300 ease-out origin-left ${
          isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
        }`}
      />
    </Link>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const iconLinkClass =
    "btn-base border border-borders bg-bg text-dark-green fill-dark-green hover:bg-dark-green hover:text-white hover:fill-white hover:border-dark-green rounded-xl px-[15px] py-[10px]";

  return (
    <nav
      role="banner"
      className="sticky top-0 z-50 flex w-full justify-center bg-cream"
      style={{ viewTransitionName: "site-header" }}
    >
      <div className={`flex w-full max-w-[1280px] items-center justify-between px-6 transition-all duration-300 ${scrolled ? "py-3" : "py-6"}`}>
        <Link href="/" aria-label="Home">
          <LottieLogo className={`transition-all duration-300 max-sm:w-[70px] ${scrolled ? "w-[75px] max-md:w-[60px]" : "w-[150px] max-md:w-[120px]"}`} />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-0 md:flex">
          <NavLink href="/about">About</NavLink>
          <NavLink href="/my-work">My Work</NavLink>
          <div className="ml-2 flex items-center gap-5">
            <Link
              href="https://www.linkedin.com/in/lindsey-drennan-183b63b3/"
              target="_blank"
              rel="noopener noreferrer"
              className={iconLinkClass}
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </Link>
            <Link
              href="https://github.com/lindseydrennan"
              target="_blank"
              rel="noopener noreferrer"
              className={iconLinkClass}
              aria-label="GitHub"
            >
              <GitHubIcon />
            </Link>
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          className="text-dark-green md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-light-green p-6 md:hidden">
          <div className="flex flex-col items-center gap-4">
            <NavLink href="/about">About</NavLink>
            <NavLink href="/my-work">My Work</NavLink>
            <div className="flex gap-5 pt-2">
              <Link
                href="https://www.linkedin.com/in/lindsey-drennan-183b63b3/"
                target="_blank"
                rel="noopener noreferrer"
                className={iconLinkClass}
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </Link>
              <Link
                href="https://github.com/lindseydrennan"
                target="_blank"
                rel="noopener noreferrer"
                className={iconLinkClass}
                aria-label="GitHub"
              >
                <GitHubIcon />
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

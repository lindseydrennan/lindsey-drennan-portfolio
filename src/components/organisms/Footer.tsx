import Image from "next/image";
import Link from "next/link";

const footerLink = "footer-link text-base leading-[140%]";

export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-[1280px] px-6 pt-16 pb-2 max-sm:px-6">
      <div className="flex flex-col gap-3.5">
        <div className="flex w-full items-start gap-12 max-md:flex-col max-md:items-start max-md:gap-5">
          <Image
            src="/images/lindsey-logo.svg"
            alt="Lindsey Drennan logo"
            width={50}
            height={106}
          />
          <div className="flex w-full max-w-[302px] gap-6">
            <div className="flex flex-col gap-4">
              <h4 className="text-dark-green">
                Links
              </h4>
              <Link href="/about" className={footerLink}>
                About
              </Link>
              <Link href="/my-work" className={footerLink}>
                My Work
              </Link>
            </div>
          </div>
          <div className="flex w-full gap-6">
            <div className="flex flex-col gap-4">
              <h4 className="text-dark-green">
                Get in touch
              </h4>
              <Link
                href="https://dribbble.com/lindseydrennan"
                target="_blank"
                rel="noopener noreferrer"
                className={footerLink}
              >
                Dribbble
              </Link>
              <Link
                href="https://www.linkedin.com/in/lindsey-drennan-183b63b3/"
                target="_blank"
                rel="noopener noreferrer"
                className={footerLink}
              >
                LinkedIn
              </Link>
              <Link
                href="https://github.com/lindseydrennan"
                target="_blank"
                rel="noopener noreferrer"
                className={footerLink}
              >
                GitHub
              </Link>
            </div>
          </div>
        </div>
        <div className="flex w-full items-center justify-start border-t border-borders py-4">
          <p>
            Copyright &copy; {new Date().getFullYear()}, Lindsey Drennan
          </p>
        </div>
      </div>
    </footer>
  );
}

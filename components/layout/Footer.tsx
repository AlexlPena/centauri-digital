import { Container } from "@/components/ui/Container";
import { CornerStar } from "@/components/ui/ClippedCorner";

const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#approach", label: "Approach" },
  { href: "#about", label: "About" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-background">
      <Container className="flex flex-col gap-9 py-11">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="flex max-w-[32ch] flex-col gap-3">
            <a
              href="#top"
              className="relative inline-flex w-fit items-center font-sans text-lg tracking-technical uppercase text-text-primary"
            >
              Centauri
              <CornerStar size={10} className="absolute -top-1 -right-3" />
            </a>
            <p className="text-sm leading-body text-text-secondary">
              AI architecture, automation, and internal tools designed around
              the way teams actually work.
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-text-secondary transition-colors duration-200 ease-standard hover:text-text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href="#contact"
            className="text-sm text-text-primary transition-colors duration-200 ease-standard hover:text-accent"
          >
            Start a conversation →
          </a>
        </div>

        <p className="text-xs text-text-secondary">
          © {year} Centauri Digital Solutions. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}

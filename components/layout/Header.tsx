"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CornerStar } from "@/components/ui/ClippedCorner";

const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#approach", label: "Approach" },
  { href: "#about", label: "About" },
];

function Wordmark() {
  return (
    <a
      href="#top"
      className="relative inline-flex w-fit items-center font-sans text-lg tracking-technical uppercase text-text-primary"
    >
      Centauri
      <CornerStar size={10} className="absolute -top-1 -right-3" />
    </a>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur">
      <Container
        as="nav"
        aria-label="Primary"
        className="flex items-center justify-between py-5"
      >
        <Wordmark />

        <ul className="hidden md:flex items-center gap-8">
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

        <div className="hidden md:block">
          <Button as="a" href="#contact" icon="plus">
            Start a conversation
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="flex h-[2.75rem] w-[2.75rem] items-center justify-center rounded-control text-text-primary md:hidden"
        >
          <svg viewBox="0 0 24 24" width={22} height={22} aria-hidden="true">
            {menuOpen ? (
              <path
                d="M6 6l12 12M18 6 6 18"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </Container>

      {menuOpen ? (
        <div
          id="mobile-nav"
          className="border-t border-line bg-background md:hidden"
        >
          <Container as="ul" className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex min-h-[2.75rem] items-center text-md text-text-secondary transition-colors duration-200 ease-standard hover:text-text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-3">
              <Button
                as="a"
                href="#contact"
                icon="plus"
                className="w-full justify-center"
                onClick={() => setMenuOpen(false)}
              >
                Start a conversation
              </Button>
            </li>
          </Container>
        </div>
      ) : null}
    </header>
  );
}

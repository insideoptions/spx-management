"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    // An observer avoids updating React on every scroll event.
    const marker = document.getElementById("header-threshold");
    if (!marker) return;
    const observer = new IntersectionObserver(([entry]) => setScrolled(!entry.isIntersecting));
    observer.observe(marker);
    return () => observer.disconnect();
  }, []);
  const links = [
    ["/strategy", "Our approach"],
    ["/about", "Our founder"],
    ["/media", "Insights & media"],
    ["/contact", "Let’s talk ↗"],
  ];
  return (
    <>
    <span id="header-threshold" aria-hidden="true" />
    <header className={`site-header${scrolled || open ? " is-scrolled" : ""}`}>
      <div className="header-inner">
        <Link
          className="brand"
          href="/"
          aria-label="SPX MGMT home"
          onClick={() => setOpen(false)}
        >
          <svg viewBox="0 0 32 32" aria-hidden="true">
            <path
              d="M2 25 11 7h8L10 25zm12 0L23 7h7l-9 18z"
              fill="currentColor"
            />
          </svg>
          <span>
            SPX<span className="brand-light">MGMT</span>
            <small>ALTERNATIVE INVESTMENTS</small>
          </span>
        </Link>
        <button
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close −" : "Menu +"}
        </button>
        <nav
          id="navigation"
          className={open ? "navigation open" : "navigation"}
          aria-label="Main navigation"
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              setOpen(false);
              document.querySelector(".menu-toggle")?.focus();
            }
          }}
        >
          {links.map(([href, label]) => (
            <Link
              key={href}
              href={href}
              className={`${href === "/contact" ? "nav-contact" : ""} ${pathname === href ? "active" : ""}`}
              aria-current={pathname === href ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
    </>
  );
}

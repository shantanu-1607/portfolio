"use client";

import { useState } from "react";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";

const navigation = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#open-source", label: "Open source" },
  { href: "#contact", label: "Contact" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <header className="site-header">
      <div className="header-inner shell">
        <a
          href="#home"
          className="brand"
          aria-label="Shantanu Singh, back to top"
        >
          <span className="brand-mark">
            s<span>.</span>
          </span>
          <span>
            shantanu<span className="brand-surname"> singh</span>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <a
            className="resume-link"
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Résumé <ArrowUpRight size={14} />
          </a>
          <button
            className="icon-button theme-toggle"
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
            aria-label="Toggle color theme"
          >
            <Sun className="sun-icon" size={17} />
            <Moon className="moon-icon" size={17} />
          </button>
          <button
            className="icon-button menu-toggle"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>
      {open && (
        <nav
          id="mobile-navigation"
          className="mobile-nav shell"
          aria-label="Mobile navigation"
        >
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
              <ArrowUpRight size={16} />
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

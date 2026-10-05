import { useEffect, useState } from "react";

const links = [
  { href: "#home", label: "Bosh sahifa" },
  { href: "#products", label: "Mahsulotlar" },
  { href: "#about", label: "Biz haqimizda" },
  { href: "#contact", label: "Bog'lanish" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#home" className="logo" onClick={() => setOpen(false)}>
          <span className="logo-mark">S</span>
          <span className="logo-text">
            SARVAR <em>PARFUME</em>
          </span>
        </a>

        <nav className={`nav-links ${open ? "is-open" : ""}`}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn nav-cta"
            onClick={() => setOpen(false)}
          >
            Buyurtma berish
          </a>
        </nav>

        <button
          className="burger"
          aria-label={open ? "Menyuni yopish" : "Menyuni ochish"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>

        {open && (
          <div className="nav-backdrop" onClick={() => setOpen(false)} />
        )}
      </div>
    </header>
  );
}

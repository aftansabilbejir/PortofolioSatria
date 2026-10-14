import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/backend", label: "Backend" },
  { href: "/paskibra", label: "Paskibra" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="nav-container" aria-label="Main navigation">
        <Link href="/" className="nav-brand" aria-label="Home">
          <span className="nav-brand-mark">S.</span>
          <span className="nav-brand-name">
            Rifky Satria Aftansabil
          </span>
        </Link>

        <div className="nav-links">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
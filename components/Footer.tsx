
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <Link href="/" className="footer-brand">
          S<span>.</span>
        </Link>

        <p>
          Built with curiosity. Driven by growth.
        </p>

        <span className="footer-copy">
          © {new Date().getFullYear()} Satria
        </span>
      </div>
    </footer>
  );
}

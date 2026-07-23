import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-label">WeDigMark</span>

        <h1 className="hero-title">
          Only marketing that would{" "}
          <span className="accent">make us buy.</span>
        </h1>

        <p className="hero-description">
          Research-first creative, performance marketing, SEO and websites
          built to grow businesses—not just look impressive.
        </p>

        <div className="hero-buttons">
          <Link href="/contact" className="btn-primary">
            Book a Strategy Call
          </Link>

          <Link href="/portfolio" className="btn-secondary">
            See Our Work
          </Link>
        </div>
      </div>
    </section>
  );
}

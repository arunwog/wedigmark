const footerLinks = [
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] px-6 pb-10 pt-20 text-white">
      <div className="mx-auto max-w-6xl border-t border-white/15 pt-12">
        <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-orange-500">
              WeDigMark
            </p>

            <h2 className="mt-6 max-w-2xl text-3xl font-bold leading-tight tracking-[-0.03em] md:text-5xl">
              Marketing built with thought before spend.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
              Creative strategy, performance marketing, SEO, and email...
              working together to help good businesses grow better.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-x-10 gap-y-5 md:justify-self-end">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-400 transition-colors hover:text-orange-500"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 WeDigMark. All rights reserved.</p>

          <div className="flex gap-6">
            <a
              href="mailto:hello@wedigmark.online"
              className="transition-colors hover:text-white"
            >
              Email
            </a>

            <a
              href="#"
              className="transition-colors hover:text-white"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
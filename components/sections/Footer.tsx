export default function Footer() {
  return (
    <footer className="border-t border-orange-500/20 bg-transparent px-8 py-24">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-20 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
            Ready?
          </p>

          <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-bold md:text-6xl">
            Let's stop browsing.
            <br />
            Let's start building.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
            Tell us what you're building, where you're getting stuck,
            and what success would look like.
          </p>
        </div>

        {/* Main Footer */}
        <div className="grid gap-12 rounded-3xl border border-white/10 bg-white/[0.03] p-10 md:grid-cols-[1fr_1.4fr]">

          {/* Left */}
          <div>
            <h3 className="text-3xl font-bold">
              We<span className="text-orange-500">Dig</span>Mark
            </h3>

            <p className="mt-5 max-w-sm leading-relaxed text-gray-400">
              Only marketing we'd buy ourselves.
            </p>

            <div className="mt-10 space-y-3 text-gray-300">
              <p>Creative Strategy</p>
              <p>Performance Marketing</p>
              <p>SEO & GEO</p>
              <p>Web Development</p>
              <p>Email Marketing</p>
            </div>

            <div className="mt-12 space-y-2">
              <a
                href="mailto:ceo@wedigmark.online"
                className="block transition hover:text-orange-500"
              >
                ceo@wedigmark.online
              </a>

              <p className="text-gray-400">
                Bengaluru, India
              </p>

              <p className="text-sm text-gray-500">
                We typically reply within one business day.
              </p>
            </div>
          </div>

          {/* Right */}
          <form className="space-y-5">

            <div className="grid gap-5 md:grid-cols-2">

              <input
                type="text"
                placeholder="Name"
                className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 outline-none transition focus:border-orange-500"
              />

              <input
                type="email"
                placeholder="Email"
                className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 outline-none transition focus:border-orange-500"
              />

            </div>

            <div className="grid gap-5 md:grid-cols-2">

              <input
                type="text"
                placeholder="Company"
                className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 outline-none transition focus:border-orange-500"
              />

              <input
                type="text"
                placeholder="Website (optional)"
                className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 outline-none transition focus:border-orange-500"
              />

            </div>

            <textarea
              rows={7}
              placeholder="Tell us about your business..."
              className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 outline-none transition focus:border-orange-500"
            />

            <button
              type="submit"
              className="rounded-full bg-orange-500 px-8 py-4 font-semibold transition duration-300 hover:-translate-y-1 hover:bg-orange-600"
            >
              Let's Talk
            </button>

          </form>

        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-gray-500 md:flex-row">

          <p>
            © 2026 WeDigMark. All rights reserved.
          </p>

          <div className="flex gap-6">

            <a
              href="/about"
              className="transition hover:text-orange-500"
            >
              About
            </a>

            <a
              href="/services"
              className="transition hover:text-orange-500"
            >
              Services
            </a>

            <a
              href="/portfolio"
              className="transition hover:text-orange-500"
            >
              Portfolio
            </a>

            <a
              href="/insights"
              className="transition hover:text-orange-500"
            >
              Insights
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
}
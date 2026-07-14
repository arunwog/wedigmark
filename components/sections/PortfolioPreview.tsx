const projects = [
  {
    name: "Thesis Nootropics",
    category: "Cognitive performance",
  },
  {
    name: "Cozy Earth",
    category: "Premium comfort",
  },
  {
    name: "Lume",
    category: "Personal care",
  },
  {
    name: "Cuts",
    category: "Modern apparel",
  },
  {
    name: "Hiya",
    category: "Children’s wellness",
  },
];

export default function PortfolioPreview() {
  return (
    <section className="bg-[#0D0D0D] px-6 py-32 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="mb-6 text-sm uppercase tracking-[0.35em] text-orange-500">
            Portfolio
          </p>

          <h2 className="text-4xl font-bold leading-tight tracking-[-0.03em] md:text-6xl">
            Built to think better.
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-400">
            Independent strategy studies built to sharpen how we research,
            position, and create.
          </p>
        </div>

        <div className="mt-20 border-t border-white/15">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group flex items-center justify-between border-b border-white/15 py-8"
            >
              <div>
                <h3 className="text-2xl font-semibold transition-colors duration-300 group-hover:text-orange-500 md:text-3xl">
                  {project.name}
                </h3>

                <p className="mt-2 text-gray-400">{project.category}</p>
              </div>

              <span className="text-2xl text-orange-500 transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </div>
          ))}
        </div>

        <a
          href="/portfolio"
          className="mt-12 inline-flex items-center gap-3 text-lg font-semibold text-white transition-colors hover:text-orange-500"
        >
          Explore the portfolio
          <span>→</span>
        </a>
      </div>
    </section>
  );
}
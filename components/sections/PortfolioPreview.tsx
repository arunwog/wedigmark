const projects = [
  {
    name: "Thesis",
    logo: "/logos/thesis.png",
    category: "Cognitive Performance",
    logoClass: "w-[230px] brightness-300",
  },
  {
    name: "Cozy Earth",
    logo: "/logos/cozy-earth.png",
    category: "Premium Comfort",
    logoClass: "w-[155px]",
  },
  {
    name: "Lume",
    logo: "/logos/Lume.png",
    category: "Personal Care",
    logoClass: "w-[280px]",
  },
  {
    name: "Cuts",
    logo: "/logos/cuts.png",
    category: "Modern Apparel",
    logoClass: "w-[300px]",
  },
  {
    name: "Hiya",
    logo: "/logos/hiya.png",
    category: "Children’s Wellness",
    logoClass: "w-[165px]",
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
 
<p className="mt-8 text-sm font-medium uppercase tracking-[0.28em] text-gray-400">
  Creative Strategy:
</p>

          <h2 className="text-4xl font-bold leading-tight tracking-[-0.03em] md:text-6xl">
            Built to think better.
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-400">
            Independent strategy studies across five brands... each one built
            to sharpen how we research, position, and create.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => {
            const isLastProject = index === projects.length - 1;

            return (
              <div
                key={project.name}
                className={`
                  flex min-h-[260px] w-full flex-col justify-between
                  rounded-3xl border border-[#454545] bg-[#1A1A1A] border border-white/10 p-10
                  ${
                    isLastProject
                      ? "md:col-span-2 md:w-[calc(50%-1rem)] md:justify-self-center"
                      : ""
                  }
                `}
              >
                <div className="flex h-40 items-center overflow-hidden">
                  <img
                    src={project.logo}
                    alt={`${project.name} logo`}
                    className={`max-h-40 object-contain object-left ${project.logoClass}`}
                  />
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[0.22em] text-orange-500">
                    {project.category}
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold">
                    {project.name}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        <a
          href="/portfolio"
          className="mt-12 inline-flex items-center gap-3 text-lg font-semibold text-white transition-colors hover:text-orange-500"
        >
          Explore the Portfolio
          <span>→</span>
        </a>
      </div>
    </section>
  );
}
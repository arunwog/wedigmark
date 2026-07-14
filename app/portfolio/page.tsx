const projects = [
    {
        name: "Thesis",
        logo: "/logos/thesis.png",
        category: "Cognitive Performance",
        logoClass: "w-[230px] brightness-[3]",
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

export default function PortfolioPage() {
    return (
        <main className="min-h-screen bg-[#0D0D0D] px-6 py-32 text-white">
            <div className="mx-auto max-w-6xl">
                <div className="max-w-4xl">
                    <p className="mb-6 text-sm uppercase tracking-[0.35em] text-orange-500">
                        Portfolio
                    </p>

                    <p className="mt-6 text-sm font-medium uppercase tracking-[0.28em] text-gray-400">
                        Creative Strategy:
                    </p>

                    <h1 className="mt-2 text-5xl font-bold leading-tight tracking-[-0.04em] md:text-7xl">
                        Built to think better.
                    </h1>

                    <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
                        Independent strategy studies across five brands... each one built
                        to sharpen how we research, position, and create.
                    </p>

                    <p className="mt-5 max-w-3xl text-base leading-7 text-gray-500">
                        These are independent spec projects created to demonstrate our
                        process and thinking. They are not client engagements.
                    </p>
                </div>

                <div className="mt-20 grid gap-8 md:grid-cols-2">
                    {projects.map((project, index) => {
                        const isLastProject = index === projects.length - 1;

                        return (
                            <article
                                key={project.name}
                                className={`
                  flex min-h-[260px] w-full flex-col justify-between
                  rounded-3xl border border-white/10 bg-[#1A1A1A] p-10
                  ${isLastProject
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

                                    <h2 className="mt-3 text-2xl font-semibold">
                                        {project.name}
                                    </h2>
                                </div>
                            </article>
                        );
                    })}
                </div>

                <div className="mt-24 border-t border-white/15 pt-12">
                    <p className="max-w-3xl text-2xl font-semibold leading-relaxed md:text-3xl">
                        Detailed breakdowns will appear here as the work is completed.
                    </p>
                </div>
            </div>
        </main>
    );
}
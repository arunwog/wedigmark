const brands = [
    {
        name: "Thesis",
        label: "Cognitive Performance",
        description:
            "Positioning, messaging and ad concepts built around personalised nootropic routines and sharper daily performance.",
    },
    {
        name: "Cozy Earth",
        label: "Premium Comfort",
        description:
            "Creative strategy focused on luxury, comfort, gifting and the emotional pull of upgrading everyday essentials.",
    },
    {
        name: "Lume",
        label: "Personal Care",
        description:
            "Ad angles and messaging designed around awkward problems, product education and high-trust conversion.",
    },
    {
        name: "Cuts",
        label: "Modern Apparel",
        description:
            "Performance creative built around identity, fit, versatility and the aspirational appeal of modern menswear.",
    },
    {
        name: "Hiya",
        label: "Children’s Wellness",
        description:
            "Creative direction focused on parental trust, clean ingredients, habit-building and reducing supplement friction.",
    },
];

export default function CreativePerformancePage() {
    return (
        <main className="min-h-screen bg-[#0D0D0D] px-8 pb-24 pt-36 text-white">
            <section className="mx-auto max-w-7xl">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
                    Portfolio
                </p>

                <h1 className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
                    Creative Strategy &amp; Performance Marketing
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
                    Strategic ad concepts, creative analysis, messaging, hooks, scripts,
                    briefs and paid-growth thinking built around real brands.
                </p>

                <div className="mt-16 grid gap-6 md:grid-cols-2">
                    {brands.map((brand) => (
                        <div
                            key={brand.name}
                            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:-translate-y-1 hover:border-orange-500/40 hover:bg-white/[0.05]"
                        >
                            <p className="text-sm uppercase tracking-[0.18em] text-gray-500">
                                {brand.label}
                            </p>

                            <h2 className="mt-3 text-3xl font-semibold transition-colors duration-300 group-hover:text-orange-500">
                                {brand.name}
                            </h2>

                            <p className="mt-4 max-w-xl leading-relaxed text-gray-400">
                                {brand.description}
                            </p>

                            <div className="mt-8 flex items-center justify-between">
                                <p className="text-sm font-semibold text-orange-500 transition-colors duration-300 group-hover:text-white">
                                    Case study coming soon
                                </p>
                                <span className="text-lg text-orange-500 transition-transform duration-300 group-hover:translate-x-1">
                                    →
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
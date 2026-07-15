const deliverables = [
    {
        title: "Technical SEO",
        description:
            "A review of crawlability, indexing, site architecture, page speed, internal linking and technical issues that can limit organic visibility.",
    },
    {
        title: "Keyword & Content Strategy",
        description:
            "Search research mapped to customer intent, commercial opportunity and content priorities instead of chasing traffic for its own sake.",
    },
    {
        title: "On-Page Optimisation",
        description:
            "Page structure, metadata, internal links and content improvements designed to make important pages clearer to both search engines and people.",
    },
    {
        title: "GEO & AI Visibility",
        description:
            "Content and authority improvements designed to increase the chances of a brand being understood, cited and surfaced across AI-driven search experiences.",
    },
];

const process = [
    {
        number: "01",
        title: "Audit",
        description:
            "We review the website, current visibility, technical health, content structure and competitive search landscape.",
    },
    {
        number: "02",
        title: "Prioritise",
        description:
            "We identify the highest-impact technical, content and authority opportunities instead of producing an endless checklist.",
    },
    {
        number: "03",
        title: "Optimise",
        description:
            "We improve pages, site structure, search targeting and content signals around clear business priorities.",
    },
    {
        number: "04",
        title: "Measure",
        description:
            "We track visibility, rankings, traffic quality and emerging AI-search signals to refine the strategy over time.",
    },
];

export default function SeoGeoPage() {
    return (
        <main className="min-h-screen bg-[#0D0D0D] text-white">
            {/* Hero */}
            <section className="px-8 pb-24 pt-40">
                <div className="mx-auto max-w-7xl">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
                        SEO &amp; GEO
                    </p>

                    <h1 className="max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
                        Be easier to find.
                        <span className="text-orange-500"> And easier to trust.</span>
                    </h1>

                    <p className="mt-8 max-w-3xl text-lg leading-relaxed text-gray-400">
                        We improve how brands are discovered across traditional search and
                        emerging AI-driven search experiences through stronger technical
                        foundations, clearer content and better authority signals.
                    </p>

                    <div className="mt-10 flex flex-wrap gap-4">
                        <a
                            href="/contact"
                            className="inline-flex rounded-full bg-orange-500 px-8 py-4 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-orange-600"
                        >
                            Let&apos;s Talk Search
                        </a>

                        <a
                            href="/portfolio/seo-geo"
                            className="inline-flex rounded-full border border-white/15 px-8 py-4 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-orange-500/50 hover:text-orange-500"
                        >
                            View SEO &amp; GEO Work
                        </a>
                    </div>
                </div>
            </section>

            {/* Problem */}
            <section className="border-t border-white/10 px-8 py-24">
                <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
                            The Problem
                        </p>

                        <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                            A good website is useless if nobody can find it.
                        </h2>
                    </div>

                    <div className="space-y-6 text-lg leading-relaxed text-gray-400">
                        <p>
                            Many brands publish content, redesign pages and add keywords
                            without fixing the technical and structural issues that shape
                            whether search engines can understand them.
                        </p>

                        <p>
                            Search is also changing. Customers increasingly use AI tools to
                            compare products, research companies and ask for recommendations.
                            Brands now need to be clear, credible and discoverable across both
                            traditional and AI-driven search.
                        </p>
                    </div>
                </div>
            </section>

            {/* Deliverables */}
            <section className="border-t border-white/10 px-8 py-24">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-14">
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
                            What You Get
                        </p>

                        <h2 className="mt-4 max-w-3xl text-4xl font-bold md:text-5xl">
                            Stronger foundations for sustainable visibility.
                        </h2>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                        {deliverables.map((item) => (
                            <article
                                key={item.title}
                                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:-translate-y-1 hover:border-orange-500/40 hover:bg-white/[0.05]"
                            >
                                <h3 className="text-3xl font-semibold transition-colors duration-300 group-hover:text-orange-500">
                                    {item.title}
                                </h3>

                                <p className="mt-4 leading-relaxed text-gray-400">
                                    {item.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="border-t border-white/10 px-8 py-24">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-14">
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
                            Our Process
                        </p>

                        <h2 className="mt-4 max-w-3xl text-4xl font-bold md:text-5xl">
                            Fix what matters. Build what compounds.
                        </h2>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {process.map((step) => (
                            <div
                                key={step.title}
                                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:border-orange-500/40 hover:bg-white/[0.05]"
                            >
                                <span className="text-sm font-semibold text-orange-500">
                                    {step.number}
                                </span>

                                <h3 className="mt-8 text-2xl font-semibold transition-colors duration-300 group-hover:text-orange-500">
                                    {step.title}
                                </h3>

                                <p className="mt-4 leading-relaxed text-gray-400">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Closing CTA */}
            <section className="border-t border-white/10 px-8 py-24">
                <div className="mx-auto max-w-7xl">
                    <div className="rounded-3xl border border-orange-500/20 bg-white/[0.03] px-8 py-16 text-center md:px-16">
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
                            Build Visibility
                        </p>

                        <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-bold md:text-6xl">
                            Make your brand easier to discover wherever people search.
                        </h2>

                        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
                            Tell us where your search visibility stands today and which
                            customers you want to reach next.
                        </p>

                        <a
                            href="/contact"
                            className="mt-10 inline-flex rounded-full bg-orange-500 px-8 py-4 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-orange-600"
                        >
                            Let&apos;s Talk Search
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
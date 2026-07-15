import PortfolioSubnav from "@/components/portfolio/PortfolioSubnav";

const projects = [
    {
        name: "Technical SEO Audit",
        label: "SEO",
        description:
            "A full review of crawlability, indexing, architecture, speed, internal linking and technical issues limiting organic growth.",
    },
    {
        name: "Keyword & Content Strategy",
        label: "SEO",
        description:
            "Search opportunities mapped to customer intent, commercial value and clear content priorities.",
    },
    {
        name: "GEO Strategy",
        label: "AI Search Visibility",
        description:
            "Content and authority recommendations designed to improve how brands are understood and surfaced across AI-driven search.",
    },
    {
        name: "Custom-Coded Website",
        label: "Web Development",
        description:
            "Fast, responsive websites built with modern frameworks around brand clarity, usability and conversion.",
    },
    {
        name: "WordPress Development",
        label: "Web Development",
        description:
            "Flexible WordPress websites built for easier management, practical scalability and straightforward maintenance.",
    },
    {
        name: "Website Redesign & Refinement",
        label: "UX & Conversion",
        description:
            "Improvements to structure, messaging, performance and user journeys for websites that need more than a cosmetic refresh.",
    },
];

export default function SeoGeoPage() {
    return (
        <main className="min-h-screen bg-[#0D0D0D] px-8 pb-24 pt-52 text-white">
            <PortfolioSubnav />
            <section className="mx-auto max-w-7xl">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
                    Portfolio
                </p>

                <h1 className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
                    SEO &amp; GEO
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
                    Search strategy, AI-search visibility, technical optimisation and web
                    development work built to help brands get discovered, earn trust and
                    convert attention into action.
                </p>

                <div className="mt-16 grid gap-6 md:grid-cols-2">
                    {projects.map((project) => (
                        <div
                            key={project.name}
                            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:-translate-y-1 hover:border-orange-500/40 hover:bg-white/[0.05]"
                        >
                            <p className="text-sm uppercase tracking-[0.18em] text-gray-500">
                                {project.label}
                            </p>

                            <h2 className="mt-3 text-3xl font-semibold transition-colors duration-300 group-hover:text-orange-500">
                                {project.name}
                            </h2>

                            <p className="mt-4 max-w-xl leading-relaxed text-gray-400">
                                {project.description}
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
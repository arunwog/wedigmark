import ServicesSubnav from "@/components/services/ServicesSubnav";

const deliverables = [
    {
        title: "Custom-Coded Websites",
        description:
            "Fast, flexible websites built with modern frameworks when the business needs more control, performance or custom functionality.",
    },
    {
        title: "WordPress Development",
        description:
            "Professional WordPress websites built for easier content management, practical scalability and straightforward maintenance.",
    },
    {
        title: "Website Redesign & Refinement",
        description:
            "Improvements to existing websites that feel dated, confusing, slow or disconnected from the brand’s current direction.",
    },
    {
        title: "Performance, UX & Conversion",
        description:
            "Page speed, user journeys, messaging and conversion points refined so the website does more than simply look respectable.",
    },
];

const process = [
    {
        number: "01",
        title: "Scope",
        description:
            "We define what the website needs to achieve, who it serves and which platform makes the most sense.",
    },
    {
        number: "02",
        title: "Structure",
        description:
            "We map the pages, user journey, messaging hierarchy and conversion path before development begins.",
    },
    {
        number: "03",
        title: "Build",
        description:
            "The website is developed responsively with attention to performance, usability and brand consistency.",
    },
    {
        number: "04",
        title: "Refine",
        description:
            "We test, improve and polish the experience so the final website feels clear, credible and commercially useful.",
    },
];

export default function WebDevelopmentPage() {
    return (
        <main className="min-h-screen bg-[#0D0D0D] text-white">
            <ServicesSubnav />
            {/* Hero */}
            <section className="px-8 pb-24 pt-56">                <div className="mx-auto max-w-7xl">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
                    Web Development
                </p>

                <h1 className="max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
                    Your website should help people decide.
                    <span className="text-orange-500"> Not make them hesitate.</span>
                </h1>

                <p className="mt-8 max-w-3xl text-lg leading-relaxed text-gray-400">
                    We build and refine WordPress and custom-coded websites designed
                    around speed, credibility, usability and conversion.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                    <a
                        href="/contact"
                        className="inline-flex rounded-full bg-orange-500 px-8 py-4 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-orange-600"
                    >
                        Let&apos;s Talk Web
                    </a>

                    <a
                        href="/portfolio/seo-geo"
                        className="inline-flex rounded-full border border-white/15 px-8 py-4 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-orange-500/50 hover:text-orange-500"
                    >
                        View Web &amp; Search Work
                    </a>
                </div>
            </div>
            </section>

            {/* Problem */}
            <section className="border-t border-white/10 px-8 py-24">
                <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
                            First Impressions Matter
                        </p>

                        <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                            A website can look polished and still quietly lose customers.
                        </h2>
                    </div>

                    <div className="space-y-6 text-lg leading-relaxed text-gray-400">
                        <p>
                            Slow pages, unclear messaging, awkward navigation and weak calls
                            to action create doubt at exactly the moment a prospect should be
                            gaining confidence.
                        </p>

                        <p>
                            Good web development connects design, structure, performance and
                            persuasion so the next step feels obvious.
                        </p>
                    </div>
                </div>
            </section>

            {/* Deliverables */}
            <section className="border-t border-white/10 px-8 py-24">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-14">
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
                            What We Build
                        </p>

                        <h2 className="mt-4 max-w-3xl text-4xl font-bold md:text-5xl">
                            The right website for the way your business actually works.
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
                            Clear structure before decorative chaos.
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
                            Build Something Better
                        </p>

                        <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-bold md:text-6xl">
                            Your website should earn trust before anyone speaks to you.
                        </h2>

                        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
                            Tell us whether you need a new build, a redesign or targeted
                            improvements to the website you already have.
                        </p>

                        <a
                            href="/contact"
                            className="mt-10 inline-flex rounded-full bg-orange-500 px-8 py-4 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-orange-600"
                        >
                            Let&apos;s Talk Web
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
import ServicesSubnav from "@/components/services/ServicesSubnav";
import Reveal from "@/components/Reveal";

const deliverables = [
    {
        title: "Campaign Strategy",
        description:
            "Account structure, offer positioning, audience planning and campaign architecture designed before the first rupee is spent.",
    },
    {
        title: "Media Buying",
        description:
            "Meta and Google Ads managed through disciplined testing, clear hypotheses and data-driven optimisation.",
    },
    {
        title: "Creative Performance",
        description:
            "Creative analysis to identify what earns attention, drives conversions and deserves additional budget.",
    },
    {
        title: "Scaling & Optimisation",
        description:
            "Continuous optimisation of audiences, budgets, placements and creatives to improve efficiency over time.",
    },
];

const process = [
    {
        number: "01",
        title: "Plan",
        description:
            "We define objectives, offers, audiences, tracking and campaign structure before launching anything.",
    },
    {
        number: "02",
        title: "Launch",
        description:
            "Campaigns go live with structured testing across creatives, audiences and messaging.",
    },
    {
        number: "03",
        title: "Optimise",
        description:
            "We analyse performance daily, removing waste and doubling down on what actually works.",
    },
    {
        number: "04",
        title: "Scale",
        description:
            "Winning campaigns receive additional investment through measured, sustainable scaling.",
    },
];

export default function PerformanceMarketingPage() {
    return (
        <main className="min-h-screen bg-[#0D0D0D] text-white">
            <ServicesSubnav />

            {/* Hero */}
            <section className="px-8 pb-24 pt-56">
                <div className="mx-auto max-w-7xl">
                    <Reveal y={16}>
                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
                            Performance Marketing
                        </p>
                    </Reveal>

                    <Reveal delay={0.08} y={26}>
                        <h1 className="max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
                            Advertising should generate profit,
                            <span className="text-orange-500">
                                {" "}
                                not just impressions.
                            </span>
                        </h1>
                    </Reveal>

                    <Reveal delay={0.16} y={20}>
                        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-gray-400">
                            We manage Meta and Google Ads through disciplined
                            testing, strategic creative decisions and continuous
                            optimisation designed to produce sustainable growth.
                        </p>
                    </Reveal>

                    <Reveal delay={0.24} y={18}>
                        <div className="mt-10 flex flex-wrap gap-4">
                            <a
                                href="/contact"
                                className="inline-flex rounded-full bg-orange-500 px-8 py-4 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-orange-600"
                            >
                                Let&apos;s Talk Performance
                            </a>

                            <a
                                href="/portfolio/creative-performance"
                                className="inline-flex rounded-full border border-white/15 px-8 py-4 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-orange-500/50 hover:text-orange-500"
                            >
                                View Campaign Work
                            </a>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Problem */}
            <section className="border-t border-white/10 px-8 py-24">
                <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
                    <div>
                        <Reveal y={16}>
                            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
                                The Problem
                            </p>
                        </Reveal>

                        <Reveal delay={0.08} y={24}>
                            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                                Spending more is rarely the real solution.
                            </h2>
                        </Reveal>
                    </div>

                    <div className="space-y-6 text-lg leading-relaxed text-gray-400">
                        <Reveal delay={0.1} y={20}>
                            <p>
                                Most advertising accounts don&apos;t struggle
                                because the budget is too small. They struggle
                                because strategy, creative, targeting and
                                optimisation are disconnected.
                            </p>
                        </Reveal>

                        <Reveal delay={0.18} y={20}>
                            <p>
                                Good media buying connects those pieces into one
                                system where every decision is backed by
                                performance data instead of guesswork.
                            </p>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Deliverables */}
            <section className="border-t border-white/10 px-8 py-24">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-14">
                        <Reveal y={16}>
                            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
                                What You Get
                            </p>
                        </Reveal>

                        <Reveal delay={0.08} y={24}>
                            <h2 className="mt-4 max-w-3xl text-4xl font-bold md:text-5xl">
                                Paid media managed like an investment.
                            </h2>
                        </Reveal>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                        {deliverables.map((item, index) => (
                            <Reveal
                                key={item.title}
                                delay={index * 0.08}
                                y={22}
                            >
                                <article className="group h-full rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:-translate-y-1 hover:border-orange-500/40 hover:bg-white/[0.05]">
                                    <h3 className="text-3xl font-semibold transition-colors duration-300 group-hover:text-orange-500">
                                        {item.title}
                                    </h3>

                                    <p className="mt-4 leading-relaxed text-gray-400">
                                        {item.description}
                                    </p>
                                </article>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="border-t border-white/10 px-8 py-24">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-14">
                        <Reveal y={16}>
                            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
                                Our Process
                            </p>
                        </Reveal>

                        <Reveal delay={0.08} y={24}>
                            <h2 className="mt-4 max-w-3xl text-4xl font-bold md:text-5xl">
                                Test. Learn. Improve. Repeat.
                            </h2>
                        </Reveal>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {process.map((step, index) => (
                            <Reveal
                                key={step.title}
                                delay={index * 0.08}
                                y={22}
                            >
                                <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-orange-500/40 hover:bg-white/[0.05]">
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
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="border-t border-white/10 px-8 py-24">
                <div className="mx-auto max-w-7xl">
                    <Reveal y={28}>
                        <div className="rounded-3xl border border-orange-500/20 bg-white/[0.03] px-8 py-16 text-center md:px-16">
                            <Reveal y={16}>
                                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
                                    Ready to Scale?
                                </p>
                            </Reveal>

                            <Reveal delay={0.08} y={24}>
                                <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-bold md:text-6xl">
                                    Let&apos;s build advertising that earns the
                                    right to scale.
                                </h2>
                            </Reveal>

                            <Reveal delay={0.16} y={20}>
                                <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
                                    Tell us about your business, your goals and
                                    where your current campaigns are falling
                                    short.
                                </p>
                            </Reveal>

                            <Reveal delay={0.24} y={18}>
                                <a
                                    href="/contact"
                                    className="mt-10 inline-flex rounded-full bg-orange-500 px-8 py-4 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-orange-600"
                                >
                                    Let&apos;s Talk Performance
                                </a>
                            </Reveal>
                        </div>
                    </Reveal>
                </div>
            </section>
        </main>
    );
}
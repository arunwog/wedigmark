import ServicesSubnav from "@/components/services/ServicesSubnav";
import Reveal from "@/components/Reveal";

const deliverables = [
    {
        title: "Creative Research",
        description:
            "Competitor analysis, customer research, offer analysis and market pattern recognition to uncover what actually deserves testing.",
    },
    {
        title: "Angles & Concepts",
        description:
            "Strategic campaign angles and creative concepts built around customer pains, desires, objections and buying triggers.",
    },
    {
        title: "Hooks, Scripts & Briefs",
        description:
            "Production-ready hooks, scripts and briefs that give editors, creators and media buyers a clear direction.",
    },
    {
        title: "Testing Strategy",
        description:
            "A structured testing roadmap for formats, angles, hooks, offers and audiences so creative decisions are driven by evidence.",
    },
];

const process = [
    {
        number: "01",
        title: "Research",
        description:
            "We study the product, audience, competitors, reviews, existing ads and market language.",
    },
    {
        number: "02",
        title: "Diagnose",
        description:
            "We identify gaps in messaging, positioning, creative variety and customer relevance.",
    },
    {
        number: "03",
        title: "Develop",
        description:
            "We turn the findings into angles, concepts, hooks, scripts and creative briefs.",
    },
    {
        number: "04",
        title: "Refine",
        description:
            "We improve the strategy using performance data, creative learnings and customer response.",
    },
];

export default function CreativeStrategyPage() {
    return (
        <main className="min-h-screen bg-[#0D0D0D] text-white">
            <ServicesSubnav />

            {/* Hero */}
            <section className="px-8 pb-24 pt-56">
                <div className="mx-auto max-w-7xl">
                    <Reveal y={16}>
                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
                            Creative Strategy
                        </p>
                    </Reveal>

                    <Reveal delay={0.08} y={26}>
                        <h1 className="max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
                            Better ads begin before anyone opens the editor.
                        </h1>
                    </Reveal>

                    <Reveal delay={0.16} y={20}>
                        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-gray-400">
                            We build the research, messaging, angles, concepts, hooks,
                            scripts and briefs that give paid creative a clear strategic
                            reason to exist.
                        </p>
                    </Reveal>

                    <Reveal delay={0.24} y={18}>
                        <div className="mt-10 flex flex-wrap gap-4">
                            <a
                                href="/contact"
                                className="inline-flex rounded-full bg-orange-500 px-8 py-4 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-orange-600"
                            >
                                Let&apos;s talk Creative →
                            </a>

                            <a
                                href="/portfolio/creative-performance"
                                className="inline-flex rounded-full border border-white/15 px-8 py-4 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-orange-500/50 hover:text-orange-500"
                            >
                                View Creative Work
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
                                Most ads do not fail because the editing was bad.
                            </h2>
                        </Reveal>
                    </div>

                    <div className="space-y-6 text-lg leading-relaxed text-gray-400">
                        <Reveal delay={0.1} y={20}>
                            <p>
                                They fail because the angle was weak, the message was
                                generic, the hook did not earn attention or the concept
                                had no clear reason to resonate.
                            </p>
                        </Reveal>

                        <Reveal delay={0.18} y={20}>
                            <p>
                                Creative strategy solves that problem before production
                                begins. It gives every ad a defined audience, belief,
                                angle, objective and testing purpose.
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
                                The thinking behind stronger creative.
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
                                Research first. Concepts second. Testing always.
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
                                <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:border-orange-500/40 hover:bg-white/[0.05]">
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

            {/* Closing CTA */}
            <section className="border-t border-white/10 px-8 py-24">
                <div className="mx-auto max-w-7xl">
                    <Reveal y={26}>
                        <div className="rounded-3xl border border-orange-500/20 bg-white/[0.03] px-8 py-16 text-center md:px-16">
                            <Reveal y={16}>
                                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
                                    Build Better Creative
                                </p>
                            </Reveal>

                            <Reveal delay={0.08} y={24}>
                                <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-bold md:text-6xl">
                                    Stop producing more ads. Start producing
                                    better reasons to buy.
                                </h2>
                            </Reveal>

                            <Reveal delay={0.16} y={20}>
                                <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
                                    Tell us what you sell, who you sell it to
                                    and where your current creative is getting
                                    stuck.
                                </p>
                            </Reveal>

                            <Reveal delay={0.24} y={18}>
                                <a
                                    href="/contact"
                                    className="mt-10 inline-flex rounded-full bg-orange-500 px-8 py-4 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-orange-600"
                                >
                                    Let&apos;s Talk
                                </a>
                            </Reveal>
                        </div>
                    </Reveal>
                </div>
            </section>
        </main>
    );
}
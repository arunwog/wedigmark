import ServicesSubnav from "@/components/services/ServicesSubnav";
import Reveal from "@/components/Reveal";

const deliverables = [
    {
        title: "Welcome & Nurture Sequences",
        description:
            "Automated email journeys that introduce your brand, build trust and guide new subscribers toward becoming customers.",
    },
    {
        title: "Promotional Campaigns",
        description:
            "Launches, seasonal campaigns, newsletters and sales emails designed to drive immediate revenue without sacrificing long-term trust.",
    },
    {
        title: "Retention & Lifecycle Flows",
        description:
            "Email systems that encourage repeat purchases, recover abandoned carts and strengthen customer relationships over time.",
    },
    {
        title: "Copy & Optimisation",
        description:
            "Subject lines, messaging, calls-to-action and campaign performance refined through continuous testing and iteration.",
    },
];

const process = [
    {
        number: "01",
        title: "Understand",
        description:
            "We learn your customers, products, buying journey and current email performance before writing a single word.",
    },
    {
        number: "02",
        title: "Write",
        description:
            "Every email is built around clear messaging, persuasive copy and a specific business objective.",
    },
    {
        number: "03",
        title: "Automate",
        description:
            "Campaigns and flows are organised into systems that work continuously rather than relying on manual effort.",
    },
    {
        number: "04",
        title: "Improve",
        description:
            "Open rates, click-through rates and revenue are analysed to improve future campaigns.",
    },
];

export default function EmailMarketingPage() {
    return (
        <main className="min-h-screen bg-[#0D0D0D] text-white">
            <ServicesSubnav />

            {/* Hero */}
            <section className="px-8 pb-24 pt-56">
                <div className="mx-auto max-w-7xl">
                    <Reveal y={16}>
                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
                            Email Marketing
                        </p>
                    </Reveal>

                    <Reveal delay={0.08} y={26}>
                        <h1 className="max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
                            The most valuable customer
                            <span className="text-orange-500">
                                {" "}
                                is the one who comes back.
                            </span>
                        </h1>
                    </Reveal>

                    <Reveal delay={0.16} y={20}>
                        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-gray-400">
                            We create email systems that welcome, nurture,
                            retain and re-engage customers through thoughtful
                            messaging rather than inbox noise.
                        </p>
                    </Reveal>

                    <Reveal delay={0.24} y={18}>
                        <div className="mt-10 flex flex-wrap gap-4">
                            <a
                                href="/contact"
                                className="inline-flex rounded-full bg-orange-500 px-8 py-4 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-orange-600"
                            >
                                Let&apos;s Talk Email
                            </a>

                            <a
                                href="/portfolio/creative-performance"
                                className="inline-flex rounded-full border border-white/15 px-8 py-4 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-orange-500/50 hover:text-orange-500"
                            >
                                View Copy Portfolio
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
                                Relationships Compound
                            </p>
                        </Reveal>

                        <Reveal delay={0.08} y={24}>
                            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                                Not every sale should begin with another ad.
                            </h2>
                        </Reveal>
                    </div>

                    <div className="space-y-6 text-lg leading-relaxed text-gray-400">
                        <Reveal delay={0.10} y={20}>
                            <p>
                                Acquiring customers is expensive. Retaining them
                                is usually far more profitable. Email gives
                                brands a direct relationship with people who
                                have already shown interest.
                            </p>
                        </Reveal>

                        <Reveal delay={0.18} y={20}>
                            <p>
                                Good email marketing builds familiarity, trust
                                and repeat revenue instead of disappearing after
                                the first purchase.
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
                                Email that people actually want to read.
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
                                Build relationships. Then build revenue.
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
                                    Stay Top of Mind
                                </p>
                            </Reveal>

                            <Reveal delay={0.08} y={24}>
                                <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-bold md:text-6xl">
                                    Better relationships create better
                                    businesses.
                                </h2>
                            </Reveal>

                            <Reveal delay={0.16} y={20}>
                                <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
                                    Let&apos;s build email systems your
                                    customers look forward to hearing from.
                                </p>
                            </Reveal>

                            <Reveal delay={0.24} y={18}>
                                <a
                                    href="/contact"
                                    className="mt-10 inline-flex rounded-full bg-orange-500 px-8 py-4 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-orange-600"
                                >
                                    Let&apos;s Talk Email
                                </a>
                            </Reveal>
                        </div>
                    </Reveal>
                </div>
            </section>
        </main>
    );
}
const principles = [
    {
        number: "01",
        title: "Think Before We Spend",
        description:
            "We do not rush into execution just to look busy. We study the market, the offer, the audience and the buying journey before deciding what deserves attention.",
    },
    {
        number: "02",
        title: "Make the Next Step Obvious",
        description:
            "Good marketing reduces hesitation. Every ad, page, email and campaign should make it easier for the right person to understand, trust and act.",
    },
    {
        number: "03",
        title: "Learn Faster Than the Market",
        description:
            "We treat performance as feedback. The goal is not to be emotionally attached to an idea—it is to learn quickly, improve decisively and compound what works.",
    },
    {
        number: "04",
        title: "Care About the Details",
        description:
            "Small decisions shape perception. Copy, spacing, structure, speed and consistency all influence whether a brand feels credible or forgettable.",
    },
];

const team = [
    {
        name: "Amogh",
        companyRole: "Co-Founder & CEO",
        department: "Head of Creative & Performance",
        expertise: "Creative Strategy • Performance Marketing",
        description:
            "Research, positioning, messaging, creative strategy and the commercial thinking that connects every part of the marketing system—from the first impression to the final conversion.",
    },
    {
        name: "Harsha",
        companyRole: "Co-Founder & CTO",
        department: "Head of Search, AI & Web",
        expertise: "SEO • GEO • Web Development",
        description:
            "Technical execution across websites, SEO and AI-search optimisation, ensuring brands are easy to discover, fast to experience and built to convert.",
    },

    {
        name: "Srinivas",
        companyRole: "Co-Founder",
        department: "Head of Email Marketing & Automation",
        expertise: "Email Marketing • Lifecycle • Automation",
        description:
            "Designs email marketing systems and customer automations that strengthen retention, increase customer lifetime value and build long-term relationships beyond the first purchase.",
    },

];
export default function AboutPage() {
    return (
        <main className="min-h-screen bg-transparent text-white">
            {/* Hero */}
            <section className="px-8 pb-24 pt-40">
                <div className="mx-auto max-w-7xl">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
                        About WeDigMark
                    </p>

                    <h1 className="max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
                        We care about what happens
                        <span className="text-orange-500"> before the click.</span>
                    </h1>

                    <p className="mt-8 max-w-3xl text-lg leading-relaxed text-gray-400">
                        WeDigMark is a strategy-led digital marketing agency built around a
                        simple belief: better execution begins with better thinking.
                    </p>
                </div>
            </section>

            {/* Why We Exist */}
            <section className="border-t border-white/10 px-8 py-24">
                <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
                            Why We Exist
                        </p>

                        <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                            Too much marketing begins with tactics and ends with excuses.
                        </h2>
                    </div>

                    <div className="space-y-6 text-lg leading-relaxed text-gray-400">
                        <p>
                            Ads are launched before the message is clear. Websites are built
                            before the buyer journey is understood. Content is published
                            because consistency sounds responsible, even when nobody can
                            explain what it is supposed to achieve.
                        </p>

                        <p>
                            We built WeDigMark to work the other way around: understand the
                            problem, identify the highest-leverage opportunity and execute
                            with a clear reason behind every decision.
                        </p>
                    </div>
                </div>
            </section>

            {/* Philosophy */}
            <section className="border-t border-white/10 px-8 py-24">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-14">
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
                            How We Think
                        </p>

                        <h2 className="mt-4 max-w-3xl text-4xl font-bold md:text-5xl">
                            The principles behind the work.
                        </h2>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                        {principles.map((principle) => (
                            <article
                                key={principle.title}
                                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:-translate-y-1 hover:border-orange-500/40 hover:bg-white/[0.05]"
                            >
                                <span className="text-sm font-semibold text-orange-500">
                                    {principle.number}
                                </span>

                                <h3 className="mt-8 text-3xl font-semibold transition-colors duration-300 group-hover:text-orange-500">
                                    {principle.title}
                                </h3>

                                <p className="mt-4 leading-relaxed text-gray-400">
                                    {principle.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            {/* Who You'll Work With */}
            <section className="border-t border-white/10 px-8 py-24">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-14">
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
                            Who You&apos;ll Work With
                        </p>

                        <h2 className="mt-4 max-w-3xl text-4xl font-bold md:text-5xl">
                            Small by design. Serious about the work.
                        </h2>

                        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
                            We keep the team intentionally small so strategy stays close to
                            execution. The people you meet are the people doing the work.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                        {team.map((member, index) => (
                            <div
                                key={member.name}
                                className={index === 2 ? "md:col-span-2 flex justify-center" : ""}
                            >
                                <article
                                    className={`group rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:-translate-y-1 hover:border-orange-500/40 hover:bg-white/[0.05] ${index === 2 ? "w-full md:max-w-[48%]" : ""
                                        }`}
                                >
                                    <h3 className="text-3xl font-semibold transition-colors duration-300 group-hover:text-orange-500">
                                        {member.name}
                                    </h3>

                                    <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-orange-500">
                                        {member.companyRole}
                                    </p>

                                    <p className="mt-5 text-xl font-semibold text-white">
                                        {member.department}
                                    </p>

                                    <p className="mt-2 text-sm uppercase tracking-[0.18em] text-gray-500">
                                        {member.expertise}
                                    </p>

                                    <p className="mt-6 leading-relaxed text-gray-400">
                                        {member.description}
                                    </p>
                                </article>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Difference */}
            <section className="border-t border-white/10 px-8 py-24">
                <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
                            What Makes Us Different
                        </p>

                        <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                            We do not separate strategy from execution.
                        </h2>
                    </div>

                    <div className="space-y-6 text-lg leading-relaxed text-gray-400">
                        <p>
                            Creative strategy influences media buying. Search affects website
                            structure. Website friction changes campaign performance. Email
                            changes customer value.
                        </p>

                        <p>
                            We look at those disciplines as one connected growth system
                            instead of five unrelated services competing for attention.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="border-t border-white/10 px-8 py-24">
                <div className="mx-auto max-w-7xl">
                    <div className="rounded-3xl border border-orange-500/20 bg-white/[0.03] px-8 py-16 text-center md:px-16">
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
                            Work With Us
                        </p>

                        <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-bold md:text-6xl">
                            Good work begins with an honest conversation.
                        </h2>

                        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
                            Tell us what you are building, where growth is getting stuck and
                            what a meaningful win would look like.
                        </p>

                        <a
                            href="/contact"
                            className="mt-10 inline-flex rounded-full bg-orange-500 px-8 py-4 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-orange-600"
                        >
                            Let&apos;s Talk
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
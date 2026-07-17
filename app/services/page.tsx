import Link from "next/link";

import Reveal from "@/components/Reveal";

const services = [
    {
        number: "01",
        name: "Creative Strategy",
        label: "Ideas Built to Perform",
        href: "/services/creative-strategy",
        description:
            "Research-led ad concepts, hooks, scripts, briefs and messaging systems designed to give creative production a clear strategic direction.",
        deliverables: [
            "Creative research and competitor analysis",
            "Ad angles and campaign concepts",
            "Hooks, scripts and creative briefs",
            "Creative testing recommendations",
        ],
    },
    {
        number: "02",
        name: "Performance Marketing",
        label: "Paid Growth",
        href: "/services/performance-marketing",
        description:
            "Meta and Google advertising built around disciplined testing, clear measurement and decisions grounded in performance rather than guesswork.",
        deliverables: [
            "Campaign setup and management",
            "Audience and offer testing",
            "Creative performance analysis",
            "Budget and scaling recommendations",
        ],
    },
    {
        number: "03",
        name: "SEO & GEO",
        label: "Search Visibility",
        href: "/services/seo-geo",
        description:
            "Organic search and AI-search optimisation designed to help brands appear wherever customers now look for answers, products and recommendations.",
        deliverables: [
            "Technical and on-page SEO",
            "Keyword and content strategy",
            "AI-search visibility optimisation",
            "Search performance recommendations",
        ],
    },
    {
        number: "04",
        name: "Web Development",
        label: "Digital Infrastructure",
        href: "/services/web-development",
        description:
            "Fast, responsive and conversion-aware websites that give the rest of your marketing somewhere credible to send people.",
        deliverables: [
            "Custom-coded websites",
            "WordPress development",
            "Website redesign & refinement",
            "Performance, UX & conversion optimisation",
        ],
    },
    {
        number: "05",
        name: "Email Marketing",
        label: "Retention & Revenue",
        href: "/services/email-marketing",
        description:
            "Email systems built to turn attention into repeat revenue through stronger messaging, thoughtful automation and consistent customer communication.",
        deliverables: [
            "Tailored email sequences",
            "Promotional campaigns",
            "Customer retention flows",
            "Email copy and optimisation",
        ],
    },
];

const process = [
    {
        number: "01",
        title: "Understand",
        description:
            "We study the offer, audience, competitors, customer journey and existing performance before touching execution.",
    },
    {
        number: "02",
        title: "Strategise",
        description:
            "We identify the highest-leverage opportunities and build a practical plan around them.",
    },
    {
        number: "03",
        title: "Execute",
        description:
            "Creative, campaigns, search and web improvements are produced around one coherent strategy.",
    },
    {
        number: "04",
        title: "Optimise",
        description:
            "We use real performance data to improve what works, remove what does not and uncover the next opportunity.",
    },
];

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-[#0D0D0D] text-white">
            {/* Hero */}
            <section className="px-8 pb-24 pt-40">
                <div className="mx-auto max-w-7xl">
                    <Reveal y={16}>
                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
                            What We Do
                        </p>
                    </Reveal>

                    <Reveal delay={0.08} y={26}>
                        <h1 className="max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
                            Marketing services built around one thing:
                            <span className="text-orange-500">
                                {" "}
                                making growth happen.
                            </span>
                        </h1>
                    </Reveal>

                    <Reveal delay={0.16} y={20}>
                        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-gray-400">
                            We combine creative strategy, paid media, search, web
                            development and email marketing into systems designed to
                            attract attention, convert demand and compound growth.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* Services */}
            <section className="border-t border-white/10 px-8 py-24">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-14">
                        <Reveal y={16}>
                            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
                                Capabilities
                            </p>
                        </Reveal>

                        <Reveal delay={0.08} y={24}>
                            <h2 className="mt-4 max-w-3xl text-4xl font-bold md:text-5xl">
                                Different disciplines. One growth system.
                            </h2>
                        </Reveal>
                    </div>

                    <div className="grid gap-6">
                        {services.map((service, index) => (
                            <Reveal
                                key={service.name}
                                delay={index * 0.08}
                                y={24}
                            >
                                <Link
                                    href={service.href}
                                    className="group grid h-full gap-8 rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:-translate-y-1 hover:border-orange-500/40 hover:bg-white/[0.05] md:grid-cols-[120px_1fr_1fr]"
                                >
                                    <div>
                                        <span className="text-sm font-semibold text-orange-500">
                                            {service.number}
                                        </span>
                                    </div>

                                    <div>
                                        <p className="text-sm uppercase tracking-[0.18em] text-gray-500">
                                            {service.label}
                                        </p>

                                        <h3 className="mt-3 text-3xl font-semibold transition-colors duration-300 group-hover:text-orange-500">
                                            {service.name}
                                        </h3>

                                        <p className="mt-5 max-w-xl leading-relaxed text-gray-400">
                                            {service.description}
                                        </p>
                                    </div>

                                    <div className="md:border-l md:border-white/10 md:pl-8">
                                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-gray-500">
                                            What this includes
                                        </p>

                                        <ul className="space-y-3">
                                            {service.deliverables.map(
                                                (deliverable) => (
                                                    <li
                                                        key={deliverable}
                                                        className="flex items-start gap-3 text-gray-300"
                                                    >
                                                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />

                                                        <span>
                                                            {deliverable}
                                                        </span>
                                                    </li>
                                                ),
                                            )}
                                        </ul>
                                    </div>
                                </Link>
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
                                How We Work
                            </p>
                        </Reveal>

                        <Reveal delay={0.08} y={24}>
                            <h2 className="mt-4 max-w-3xl text-4xl font-bold md:text-5xl">
                                Strategy first. Execution second. Optimisation
                                always.
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

            {/* Closing CTA */}
            <section className="border-t border-white/10 px-8 py-24">
                <div className="mx-auto max-w-7xl">
                    <Reveal y={28}>
                        <div className="rounded-3xl border border-orange-500/20 bg-white/[0.03] px-8 py-16 text-center md:px-16">
                            <Reveal y={16}>
                                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
                                    Let&apos;s Build
                                </p>
                            </Reveal>

                            <Reveal delay={0.08} y={24}>
                                <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-bold md:text-6xl">
                                    Good marketing should create momentum, not
                                    merely activity.
                                </h2>
                            </Reveal>

                            <Reveal delay={0.16} y={20}>
                                <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
                                    Tell us what you are building, where growth
                                    is getting stuck and what a meaningful win
                                    would look like.
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
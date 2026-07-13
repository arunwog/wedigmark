const steps = [
    {
        number: "01",
        title: "Understand.",
        description:
            "We learn your business, product, customers, and competitors before writing a single headline.",
    },
    {
        number: "02",
        title: "Research.",
        description:
            "We study customer language, market patterns, creator behaviour, and the ideas already earning attention.",
    },
    {
        number: "03",
        title: "Strategize.",
        description:
            "We turn the research into positioning, angles, hooks, offers, and a clear creative direction.",
    },
    {
        number: "04",
        title: "Execute.",
        description:
            "Only then do we build the ads, landing pages, emails, and campaigns... each launched with a reason, not a guess.",
    },
];

export default function Process() {
    return (
        <section className="bg-[#0D0D0D] px-6 py-32 text-white">
            <div className="mx-auto max-w-6xl">
                <div className="max-w-3xl">
                    <p className="mb-6 text-sm uppercase tracking-[0.35em] text-orange-500">
                        How We Work
                    </p>

                    <h2 className="text-4xl font-bold leading-tight tracking-[-0.03em] md:text-6xl">
                        The strategy <span className="text-orange-500">before</span>
                        <br />
                        the marketing.
                    </h2>

                    <p className="mt-3 max-w-2xl text-lg leading-8 text-gray-400">
                        We understand first, execute second, and improve for as long as
                        there is something worth improving.
                    </p>
                </div>

                <div className="mt-20 border-t border-white/15">
                    {steps.map((step) => (
                        <div
                            key={step.number}
                            className="grid gap-6 border-b border-white/10 py-10 md:grid-cols-[120px_1fr_1.4fr] md:items-start"
                        >
                            <p className="text-sm font-semibold tracking-[0.25em] text-orange-500">
                                {step.number}
                            </p>

                            <h3 className="text-2xl font-semibold md:text-3xl">
                                {step.title}
                            </h3>

                            <p className="max-w-xl text-lg leading-8 text-gray-400">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>

                <p className="mt-16 max-w-3xl text-2xl font-semibold leading-relaxed text-white md:text-3xl">
                    Great marketing rarely starts in <span className="text-orange-500">Ads Manager.

                    {" "}
                    It starts with</span> understanding people.

                </p>
            </div>
        </section>
    );
}
const articles = [
    {
        category: "Creative Strategy",
        title: "Your Customer Doesn't Care About Your USP",
        description:
            "Features don't persuade. Meaning does. Here's why positioning beats differentiation.",
    },
    {
        category: "Performance Marketing",
        title: "When Turning Ads Off Makes More Money",
        description:
            "Scaling isn't always the answer. Sometimes restraint is the highest-ROI decision.",
    },
    {
        category: "SEO & GEO",
        title: "Why AI Search Changes Everything (And Almost Nothing)",
        description:
            "AI is changing how people discover brands—but the fundamentals of trust remain remarkably familiar.",
    },
    {
        category: "Web Development",
        title: "The Best Landing Pages Feel Boring",
        description:
            "The pages that convert rarely scream for attention. They remove friction instead.",
    },
];

const moreArticles = [{
    category: "Opinion",
    title: "Your Website Isn't Always the Problem",
    description:
        "Sometimes the landing page is innocent. Sometimes the offer never stood a chance.",
},
{
    category: "Performance",
    title: "Stop Optimising Campaigns Nobody Wants",
    description:
        "Efficiency is useless when you're scaling the wrong message.",
},
];

export default function InsightsPage() {
    return (
        <main className="min-h-screen bg-transparent text-white">

            {/* Hero */}

            <section className="px-8 pb-24 pt-40">
                <div className="mx-auto max-w-7xl">

                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
                        Insights
                    </p>

                    <h1 className="max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
                        Ideas worth stealing.
                        <br />
                        Opinions worth challenging.
                    </h1>

                    <p className="mt-8 max-w-3xl text-lg leading-relaxed text-gray-400">
                        Marketing changes. Human behaviour doesn't.
                        Here you'll find our thinking on strategy,
                        creative, search, performance and what
                        actually moves people to buy.
                    </p>

                </div>
            </section>

            {/* Featured */}

            <section className="border-t border-white/10 px-8 py-24">
                <div className="mx-auto max-w-7xl">

                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
                        Featured Insight
                    </p>

                    <article className="group mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-12 transition duration-300 hover:border-orange-500/40 hover:bg-white/[0.05]">

                        <p className="text-sm uppercase tracking-[0.18em] text-orange-500">
                            Creative Strategy
                        </p>

                        <h2 className="mt-6 max-w-4xl text-4xl font-bold md:text-6xl transition-colors duration-300 group-hover:text-orange-500">
                            Your Customer Doesn't Care About Your USP
                        </h2>

                        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-gray-400">
                            Features don't persuade. Meaning does. Here's why positioning beats differentiation.
                        </p>

                        <button className="mt-10 rounded-full border border-white/10 px-7 py-3 font-semibold transition hover:border-orange-500 hover:text-orange-500">
                            Coming Soon
                        </button>

                    </article>

                </div>
            </section>

            {/* Articles */}

            <section className="border-t border-white/10 px-8 py-24">
                <div className="mx-auto max-w-7xl">

                    <div className="mb-14">

                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
                            Latest Insights
                        </p>

                        <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                            Thinking in public.
                        </h2>

                    </div>

                    <div className="grid gap-6 md:grid-cols-2">

                        {articles.map((article) => (

                            <article
                                key={article.title}
                                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:-translate-y-1 hover:border-orange-500/40 hover:bg-white/[0.05]"
                            >

                                <p className="text-sm uppercase tracking-[0.18em] text-orange-500">
                                    {article.category}
                                </p>

                                <h3 className="mt-5 text-3xl font-semibold transition-colors duration-300 group-hover:text-orange-500">
                                    {article.title}
                                </h3>

                                <p className="mt-5 leading-relaxed text-gray-400">
                                    {article.description}
                                </p>

                                <p className="mt-8 font-semibold text-gray-500 transition group-hover:text-orange-500">
                                    Coming Soon →
                                </p>

                            </article>

                        ))}

                    </div>

                </div>
            </section>

            {/* Closing */}

            <section className="border-t border-white/10 px-8 py-24">
                <div className="mx-auto max-w-5xl text-center">

                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
                        More Coming
                    </p>

                    <h2 className="mt-5 text-4xl font-bold md:text-6xl">
                        We're just getting started.
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
                        As we work with more brands, test more ideas and learn
                        more lessons, this library will continue to grow.
                    </p>

                </div>
            </section>

        </main>
    );
}
const contactOptions = [
    {
        title: "Email",
        value: "ceo@wedigmark.online",
        href: "mailto:ceo@wedigmark.online",
    },
    {
        title: "Location",
        value: "Bengaluru, India",
    },
    {
        title: "Response Time",
        value: "Usually within one business day",
    },
];

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-transparent text-white">

            {/* Hero */}
            <section className="px-8 pb-24 pt-40">
                <div className="mx-auto max-w-7xl">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
                        Contact
                    </p>

                    <h1 className="max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
                        Let&apos;s talk about what&apos;s
                        <span className="text-orange-500"> getting in the way of growth.</span>
                    </h1>

                    <p className="mt-8 max-w-3xl text-lg leading-relaxed text-gray-400">
                        Tell us what you&apos;re building, where things are getting stuck
                        and what a meaningful win would look like. No generic pitch.
                        No theatre. Just an honest conversation.
                    </p>
                </div>
            </section>

            {/* Contact Details */}
            <section className="border-t border-white/10 px-8 py-24">
                <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
                    {contactOptions.map((item) => (
                        <article
                            key={item.title}
                            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:-translate-y-1 hover:border-orange-500/40 hover:bg-white/[0.05]"
                        >
                            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-500">
                                {item.title}
                            </p>

                            {item.href ? (
                                <a
                                    href={item.href}
                                    className="mt-4 block text-2xl font-semibold transition-colors duration-300 group-hover:text-orange-500"
                                >
                                    {item.value}
                                </a>
                            ) : (
                                <p className="mt-4 text-2xl font-semibold transition-colors duration-300 group-hover:text-orange-500">
                                    {item.value}
                                </p>
                            )}
                        </article>
                    ))}
                </div>
            </section>

            {/* Main Contact Section */}
            <section className="border-t border-white/10 px-8 py-24">
                <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.9fr_1.1fr]">

                    {/* Left */}
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
                            Start the Conversation
                        </p>

                        <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                            You don&apos;t need to have everything figured out.
                        </h2>

                        <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-400">
                            You might already know exactly what you need. You might only
                            know that growth feels harder than it should. Either way,
                            give us the context and we&apos;ll tell you where we&apos;d start.
                        </p>

                        <div className="mt-10 space-y-5 text-gray-300">
                            <div className="flex items-start gap-3">
                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />

                                <p>
                                    No pressure to commit before the problem is clear.
                                </p>
                            </div>

                            <div className="flex items-start gap-3">
                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />

                                <p>
                                    No generic package forced onto every business.
                                </p>
                            </div>

                            <div className="flex items-start gap-3">
                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />

                                <p>
                                    No account-manager maze between strategy and execution.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right */}
                    <form className="space-y-5 rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
                        <div className="grid gap-5 md:grid-cols-2">
                            <input
                                type="text"
                                placeholder="Name"
                                className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 outline-none transition focus:border-orange-500"
                            />

                            <input
                                type="email"
                                placeholder="Email"
                                className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 outline-none transition focus:border-orange-500"
                            />
                        </div>

                        <div className="grid gap-5 md:grid-cols-2">
                            <input
                                type="text"
                                placeholder="Company"
                                className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 outline-none transition focus:border-orange-500"
                            />

                            <input
                                type="text"
                                placeholder="Website (optional)"
                                className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 outline-none transition focus:border-orange-500"
                            />
                        </div>

                        <select
                            defaultValue=""
                            className="w-full rounded-xl border border-white/10 bg-[#151515] px-5 py-4 text-gray-300 outline-none transition focus:border-orange-500"
                        >
                            <option value="" disabled>
                                What do you need help with?
                            </option>

                            <option value="creative-strategy">
                                Creative Strategy
                            </option>

                            <option value="performance-marketing">
                                Performance Marketing
                            </option>

                            <option value="seo-geo">
                                SEO & GEO
                            </option>

                            <option value="web-development">
                                Web Development
                            </option>

                            <option value="email-marketing">
                                Email Marketing
                            </option>

                            <option value="not-sure">
                                Not sure yet
                            </option>
                        </select>

                        <textarea
                            rows={8}
                            placeholder="Tell us about your business, the problem and what you want to achieve..."
                            className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 outline-none transition focus:border-orange-500"
                        />

                        <button
                            type="submit"
                            className="rounded-full bg-orange-500 px-8 py-4 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-orange-600"
                        >
                            Start the Conversation
                        </button>

                        <p className="text-sm leading-relaxed text-gray-500">
                            This form is currently visual only. We&apos;ll connect submissions
                            to your inbox next.
                        </p>
                    </form>
                </div>
            </section>

        </main>
    );
}
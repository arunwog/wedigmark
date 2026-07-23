"use client";

import { FormEvent, useState } from "react";
import Reveal from "@/components/Reveal";

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

type FormStatus = "idle" | "sending" | "success" | "error";

export default function ContactPage() {
    const [status, setStatus] = useState<FormStatus>("idle");

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setStatus("sending");

        const form = event.currentTarget;
        const formData = new FormData(form);

        const payload = {
            name: String(formData.get("name") || "").trim(),
            email: String(formData.get("email") || "").trim(),
            company: String(formData.get("company") || "").trim(),
            website: String(formData.get("website") || "").trim(),
            service: String(formData.get("service") || "").trim(),
            message: String(formData.get("message") || "").trim(),
        };

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            const result = await response.json();

            if (!response.ok || !result.success) {
                throw new Error("The message could not be sent.");
            }

            form.reset();
            setStatus("success");
        } catch (error) {
            console.error("Contact form error:", error);
            setStatus("error");
        }
    }

    return (
        <main className="min-h-screen bg-transparent text-white">
            {/* Hero */}
            <section className="px-8 pb-24 pt-40">
                <div className="mx-auto max-w-7xl">
                    <Reveal y={16}>
                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
                            Contact
                        </p>
                    </Reveal>

                    <Reveal delay={0.08} y={26}>
                        <h1 className="max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
                            Let&apos;s talk about what&apos;s
                            <span className="text-orange-500">
                                {" "}
                                getting in the way of growth.
                            </span>
                        </h1>
                    </Reveal>

                    <Reveal delay={0.16} y={20}>
                        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-gray-400">
                            Tell us what you&apos;re building, where things are getting
                            stuck and what a meaningful win would look like. No generic
                            pitch. No theatre. Just an honest conversation.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* Contact Details */}
            <section className="border-t border-white/10 px-8 py-24">
                <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
                    {contactOptions.map((item, index) => (
                        <Reveal
                            key={item.title}
                            delay={index * 0.08}
                            y={22}
                            className="h-full"
                        >
                            <article className="group h-full rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:-translate-y-1 hover:border-orange-500/40 hover:bg-white/[0.05]">
                                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-500">
                                    {item.title}
                                </p>

                                {item.href ? (
                                    <a
                                        href={item.href}
                                        className="mt-4 block break-words text-2xl font-semibold transition-colors duration-300 group-hover:text-orange-500"
                                    >
                                        {item.value}
                                    </a>
                                ) : (
                                    <p className="mt-4 text-2xl font-semibold transition-colors duration-300 group-hover:text-orange-500">
                                        {item.value}
                                    </p>
                                )}
                            </article>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* Main Contact Section */}
            <section className="border-t border-white/10 px-8 py-24">
                <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.9fr_1.1fr]">
                    {/* Left */}
                    <div>
                        <Reveal y={16}>
                            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
                                Start the Conversation
                            </p>
                        </Reveal>

                        <Reveal delay={0.08} y={24}>
                            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                                You don&apos;t need to have everything figured out.
                            </h2>
                        </Reveal>

                        <Reveal delay={0.16} y={20}>
                            <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-400">
                                You might already know exactly what you need. You might
                                only know that growth feels harder than it should. Either
                                way, give us the context and we&apos;ll tell you where
                                we&apos;d start.
                            </p>
                        </Reveal>

                        <div className="mt-10 space-y-5 text-gray-300">
                            <Reveal delay={0.22} y={14}>
                                <div className="flex items-start gap-3">
                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />

                                    <p>
                                        No pressure to commit before the problem is clear.
                                    </p>
                                </div>
                            </Reveal>

                            <Reveal delay={0.28} y={14}>
                                <div className="flex items-start gap-3">
                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />

                                    <p>
                                        No generic package forced onto every business.
                                    </p>
                                </div>
                            </Reveal>

                            <Reveal delay={0.34} y={14}>
                                <div className="flex items-start gap-3">
                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />

                                    <p>
                                        No account-manager maze between strategy and
                                        execution.
                                    </p>
                                </div>
                            </Reveal>
                        </div>
                    </div>

                    {/* Right */}
                    <Reveal delay={0.1} y={28}>
                        <form
                            onSubmit={handleSubmit}
                            className="space-y-5 rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10"
                        >
                            <div className="grid gap-5 md:grid-cols-2">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    autoComplete="name"
                                    required
                                    disabled={status === "sending"}
                                    className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 outline-none transition focus:border-orange-500 disabled:cursor-not-allowed disabled:opacity-60"
                                />

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    autoComplete="email"
                                    required
                                    disabled={status === "sending"}
                                    className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 outline-none transition focus:border-orange-500 disabled:cursor-not-allowed disabled:opacity-60"
                                />
                            </div>

                            <div className="grid gap-5 md:grid-cols-2">
                                <input
                                    type="text"
                                    name="company"
                                    placeholder="Company"
                                    autoComplete="organization"
                                    disabled={status === "sending"}
                                    className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 outline-none transition focus:border-orange-500 disabled:cursor-not-allowed disabled:opacity-60"
                                />

                                <input
                                    type="text"
                                    name="website"
                                    placeholder="Website"
                                    autoComplete="text"
                                    disabled={status === "sending"}
                                    className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 outline-none transition focus:border-orange-500 disabled:cursor-not-allowed disabled:opacity-60"
                                />
                            </div>

                            <select
                                name="service"
                                defaultValue=""
                                disabled={status === "sending"}
                                className="w-full rounded-xl border border-white/10 bg-[#151515] px-5 py-4 text-gray-300 outline-none transition focus:border-orange-500 disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                <option value="" disabled>
                                    What do you need help with?
                                </option>

                                <option value="Creative Strategy">
                                    Creative Strategy
                                </option>

                                <option value="Performance Marketing">
                                    Performance Marketing
                                </option>

                                <option value="SEO & GEO">
                                    SEO &amp; GEO
                                </option>

                                <option value="Web Development">
                                    Web Development
                                </option>

                                <option value="Email Marketing">
                                    Email Marketing
                                </option>

                                <option value="Not sure yet">
                                    Not sure yet
                                </option>
                            </select>

                            <textarea
                                rows={8}
                                name="message"
                                placeholder="Tell us about your business, the problem and what you want to achieve..."
                                required
                                disabled={status === "sending"}
                                className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 outline-none transition focus:border-orange-500 disabled:cursor-not-allowed disabled:opacity-60"
                            />

                            <button
                                type="submit"
                                disabled={status === "sending"}
                                className="rounded-full bg-orange-500 px-8 py-4 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-orange-600 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:opacity-60"
                            >
                                {status === "sending"
                                    ? "Sending..."
                                    : "Start the Conversation"}
                            </button>

                            {status === "success" && (
                                <div
                                    role="status"
                                    className="rounded-xl border border-green-500/20 bg-green-500/10 px-5 py-4"
                                >
                                    <p className="font-semibold text-green-400">
                                        Message sent successfully.
                                    </p>

                                    <p className="mt-1 text-sm text-gray-400">
                                        We&apos;ll get back to you within one business
                                        day.
                                    </p>
                                </div>
                            )}

                            {status === "error" && (
                                <div
                                    role="alert"
                                    className="rounded-xl border border-red-500/20 bg-red-500/10 px-5 py-4"
                                >
                                    <p className="font-semibold text-red-400">
                                        Something went wrong.
                                    </p>

                                    <p className="mt-1 text-sm text-gray-400">
                                        Please try again or email us directly at{" "}
                                        <a
                                            href="mailto:ceo@wedigmark.online"
                                            className="text-white underline decoration-orange-500 underline-offset-4"
                                        >
                                            ceo@wedigmark.online
                                        </a>
                                        .
                                    </p>
                                </div>
                            )}
                        </form>
                    </Reveal>
                </div>
            </section>
        </main>
    );
}
"use client";

import { FormEvent, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Reveal from "@/components/Reveal";

type FormStatus = "idle" | "sending" | "success" | "error";

const faqs = [
  {
    question: "Why don’t you list your pricing?",
    answer:
      "Every business starts from a different place. A company launching its first product has very different needs from one already investing six figures every month in marketing. Rather than force every client into a fixed package, we’d rather understand your business, identify the bottlenecks and recommend only what’s genuinely needed.",
  },
  {
    question: "What happens after we book a call?",
    answer:
      "The first conversation isn’t a sales pitch. It’s an opportunity for us to understand your business, where you’re trying to go, what’s getting in the way and whether we’re the right people to help. If we think we can genuinely add value, we’ll propose a way forward. If we don’t, we’ll tell you honestly.",
  },
  {
    question: "Can you guarantee results?",
    answer:
      "No. Anyone who guarantees specific marketing results before understanding your business is making a promise they can’t honestly keep. What we do guarantee is thoughtful strategy, transparent communication, rigorous execution and a team that keeps testing, learning and improving.",
  },
  {
    question: "Can you work with our existing marketing team or agency?",
    answer:
      "Absolutely. We don’t believe every engagement requires replacing an existing team. Sometimes we’re brought in for creative strategy, performance marketing, website optimisation or simply a second perspective. If working alongside your current team gets the best result, we’re happy to do exactly that.",
  },
  {
    question: "Will we work directly with the founders?",
    answer:
      "Yes. We’re intentionally keeping WeDigMark small so every client receives direct involvement from the people responsible for the work. You won’t be handed off to multiple layers of account managers after signing the contract.",
  },
  {
    question: "Do you work with businesses outside India?",
    answer:
      "Absolutely. We primarily partner with businesses in North America, Europe, the UK and Australia, while also being very happy to work with ambitious companies in India. Great marketing isn’t limited by geography, and neither are we.",
  },
  {
    question: "How do you decide whether we’re a good fit?",
    answer:
      "We’re looking for businesses that value long-term growth over quick tricks. If we don’t believe we’re the right team for the challenge, we’ll tell you. We’d rather walk away from a project than take one on knowing someone else could do a better job.",
  },
  {
    question: "Do you work with competing businesses?",
    answer:
      "Sometimes, but never in a way that compromises trust. If we believe working with two direct competitors would create a conflict of interest, we’ll be transparent about it before moving forward. Long-term relationships matter more than short-term revenue.",
  },
  {
    question: "Why should we choose WeDigMark over another agency?",
    answer:
      "Because we don’t start with ads. We start with understanding why someone should buy in the first place. Strategy shapes messaging. Messaging shapes creative. Creative shapes performance. That’s why we spend more time understanding your business than chasing trends or copying competitors.",
  },
  {
    question: "What if we only need one service instead of everything?",
    answer:
      "That’s completely fine. Some clients only need creative strategy. Others come to us solely for SEO, websites, email marketing or performance marketing. We’re here to solve problems, not sell services you don’t need.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "It depends on what we’re working on. Performance marketing can generate useful insights relatively quickly, while SEO, brand building and organic growth naturally take longer. We’ll set expectations based on your goals, your market and the work involved.",
  },
  {
    question: "Who owns the work we create?",
    answer:
      "You do. Whether it’s strategy documents, copy, landing pages or creative assets, the work created specifically for your business belongs to your business. Clients should never feel trapped because they don’t own their own marketing.",
  },
  {
    question: "What if we’re not the right fit for each other?",
    answer:
      "That’s completely okay. Not every business is the right fit for WeDigMark, and we’re not the right fit for every business. If we don’t believe we can create meaningful value, we’ll tell you honestly. Long-term trust matters more than short-term revenue.",
  },
];

const footerLinks = [
  {
    label: "Home",
    href: "/",
    section: "/",
  },
  {
    label: "About",
    href: "/about",
    section: "/about",
  },
  {
    label: "Services",
    href: "/services",
    section: "/services",
  },
  {
    label: "Portfolio",
    href: "/portfolio/creative-performance",
    section: "/portfolio",
  },
  {
    label: "Insights",
    href: "/insights",
    section: "/insights",
  },
  {
    label: "Contact",
    href: "/contact",
    section: "/contact",
  },
];

export default function Footer() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const pathname = usePathname();

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  async function handleFooterSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();
    setFormStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      company: String(formData.get("company") || "").trim(),
      website: String(formData.get("website") || "").trim(),
      service: "Footer enquiry",
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
      setFormStatus("success");
    } catch (error) {
      console.error("Footer contact form error:", error);
      setFormStatus("error");
    }
  }

  const visibleFooterLinks = footerLinks.filter((link) => {
    if (link.section === "/") {
      return pathname !== "/";
    }

    return !pathname.startsWith(link.section);
  });

  return (
    <footer className="border-t border-orange-500/20 bg-transparent px-8 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Contact heading */}
        <Reveal y={24}>
          <div className="mb-20 border-t border-white/10 pt-24 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
              Ready?
            </p>

            <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-bold md:text-6xl">
              Let&apos;s stop browsing.
              <br />
              Let&apos;s start building.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
              Tell us what you&apos;re building, where you&apos;re getting
              stuck and what success would look like.
            </p>
          </div>
        </Reveal>

        {/* Main footer */}
        <Reveal y={28}>
          <div className="grid gap-12 rounded-3xl border border-white/10 bg-white/[0.03] p-10 md:grid-cols-[1fr_1.4fr]">
            {/* Left */}
            <div>
              <h3 className="text-3xl font-bold">
                We<span className="text-orange-500">Dig</span>Mark
              </h3>

              <p className="mt-5 max-w-sm leading-relaxed text-gray-400">
                Only marketing we&apos;d buy ourselves.
              </p>

              <div className="mt-10 flex flex-col items-start gap-3 text-gray-300">
                <Link
                  href="/services/creative-strategy"
                  className="transition hover:text-orange-500"
                >
                  Creative Strategy
                </Link>

                <Link
                  href="/services/performance-marketing"
                  className="transition hover:text-orange-500"
                >
                  Performance Marketing
                </Link>

                <Link
                  href="/services/seo-geo"
                  className="transition hover:text-orange-500"
                >
                  SEO &amp; GEO
                </Link>

                <Link
                  href="/services/web-development"
                  className="transition hover:text-orange-500"
                >
                  Web Development
                </Link>

                <Link
                  href="/services/email-marketing"
                  className="transition hover:text-orange-500"
                >
                  Email Marketing
                </Link>
              </div>

              <div className="mt-12 space-y-2">
                <a
                  href="mailto:ceo@wedigmark.online"
                  className="block transition hover:text-orange-500"
                >
                  ceo@wedigmark.online
                </a>

                <p className="text-gray-400">
                  Built in Bengaluru.
                  <br />
                  Working with brands worldwide.
                </p>

                <p className="text-sm text-gray-500">
                  We typically reply within one business day.
                </p>
              </div>
            </div>

            {/* Contact form */}
            <form
              onSubmit={handleFooterSubmit}
              className="space-y-5"
            >
              <div className="grid gap-5 md:grid-cols-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  autoComplete="name"
                  required
                  disabled={formStatus === "sending"}
                  className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 outline-none transition focus:border-orange-500 disabled:cursor-not-allowed disabled:opacity-60"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  autoComplete="email"
                  required
                  disabled={formStatus === "sending"}
                  className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 outline-none transition focus:border-orange-500 disabled:cursor-not-allowed disabled:opacity-60"
                />
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <input
                  type="text"
                  name="company"
                  placeholder="Company"
                  autoComplete="organization"
                  disabled={formStatus === "sending"}
                  className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 outline-none transition focus:border-orange-500 disabled:cursor-not-allowed disabled:opacity-60"
                />

                <input
                  type="url"
                  name="website"
                  placeholder="Website (optional)"
                  autoComplete="url"
                  disabled={formStatus === "sending"}
                  className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 outline-none transition focus:border-orange-500 disabled:cursor-not-allowed disabled:opacity-60"
                />
              </div>

              <textarea
                rows={7}
                name="message"
                placeholder="Tell us about your business..."
                required
                disabled={formStatus === "sending"}
                className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 outline-none transition focus:border-orange-500 disabled:cursor-not-allowed disabled:opacity-60"
              />

              <button
                type="submit"
                disabled={formStatus === "sending"}
                className="rounded-full bg-orange-500 px-8 py-4 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-orange-600 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:opacity-60"
              >
                {formStatus === "sending"
                  ? "Sending..."
                  : "Let\u0027s Talk"}
              </button>

              {formStatus === "success" && (
                <div
                  role="status"
                  className="rounded-xl border border-green-500/20 bg-green-500/10 px-5 py-4"
                >
                  <p className="font-semibold text-green-400">
                    Message sent successfully.
                  </p>

                  <p className="mt-1 text-sm text-gray-400">
                    We&apos;ll get back to you within one business day.
                  </p>
                </div>
              )}

              {formStatus === "error" && (
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
          </div>
        </Reveal>

        {/* FAQ */}
        <section className="pb-16 pt-28">
          <Reveal y={20}>
            <div className="mb-10">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-500 sm:text-sm">
                Frequently Asked Questions (FAQ)
              </p>

              <h2 className="mt-4 max-w-4xl text-3xl font-bold leading-tight md:text-5xl">
                The questions worth asking before we work together.
              </h2>
            </div>
          </Reveal>

          <div className="border-t border-white/10">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <Reveal
                  key={faq.question}
                  delay={index * 0.025}
                  y={14}
                >
                  <div className="border-b border-white/10">
                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      aria-expanded={isOpen}
                      className="group flex w-full items-center justify-between gap-6 py-4 text-left md:py-5"
                    >
                      <span
                        className={`text-base font-semibold leading-snug transition-colors duration-300 md:text-lg ${isOpen
                          ? "text-orange-500"
                          : "text-white group-hover:text-orange-500"
                          }`}
                      >
                        {faq.question}
                      </span>

                      <span
                        className={`shrink-0 text-xl text-orange-500 transition-transform duration-300 ${isOpen ? "rotate-45" : ""
                          }`}
                      >
                        +
                      </span>
                    </button>

                    <div
                      className={`grid transition-all duration-300 ${isOpen
                        ? "grid-rows-[1fr] pb-5 opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                        }`}
                    >
                      <div className="overflow-hidden">
                        <p className="max-w-4xl text-sm leading-relaxed text-gray-400 md:text-base">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* Bottom */}
        <Reveal y={16}>
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-gray-500 md:flex-row">
            <p>© 2026 WeDigMark. All rights reserved.</p>

            <div className="flex flex-wrap justify-center gap-6">
              {visibleFooterLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="transition hover:text-orange-500"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
"use client";

import {
    FormEvent,
    useEffect,
    useRef,
    useState,
} from "react";
import { usePathname } from "next/navigation";

type FormStatus = "idle" | "sending" | "success" | "error";

const STORAGE_KEY = "wedigmark-strategy-popup-dismissed";

export default function StrategyCallPopup() {
    const pathname = usePathname();

    const [isOpen, setIsOpen] = useState(false);
    const [rememberChoice, setRememberChoice] = useState(false);
    const [status, setStatus] = useState<FormStatus>("idle");

    const hasOpened = useRef(false);

    useEffect(() => {
        const wasDismissed =
            window.localStorage.getItem(STORAGE_KEY) === "true";

        if (wasDismissed || pathname === "/contact") {
            return;
        }

        const openPopup = () => {
            if (hasOpened.current) {
                return;
            }

            hasOpened.current = true;
            setIsOpen(true);
        };

        const timer = window.setTimeout(openPopup, 5000);

        const handleScroll = () => {
            const documentHeight =
                document.documentElement.scrollHeight -
                window.innerHeight;

            if (documentHeight <= 0) {
                return;
            }

            const scrollProgress = window.scrollY / documentHeight;

            if (scrollProgress >= 0.6) {
                openPopup();
            }
        };

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            window.clearTimeout(timer);
            window.removeEventListener("scroll", handleScroll);
        };
    }, [pathname]);

    useEffect(() => {
        if (!isOpen) {
            return;
        }

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                closePopup();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, rememberChoice]);

    function closePopup() {
        if (rememberChoice) {
            window.localStorage.setItem(STORAGE_KEY, "true");
        }

        setIsOpen(false);
    }

    async function handleSubmit(
        event: FormEvent<HTMLFormElement>
    ) {
        event.preventDefault();
        setStatus("sending");

        const form = event.currentTarget;
        const formData = new FormData(form);

        const payload = {
            name: String(formData.get("name") || "").trim(),
            email: String(formData.get("email") || "").trim(),
            company: String(
                formData.get("company") || ""
            ).trim(),
            website: String(
                formData.get("website") || ""
            ).trim(),
            service: "Strategy Call",
            message: String(
                formData.get("message") || ""
            ).trim(),
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
                throw new Error(
                    "The strategy call request could not be sent."
                );
            }

            form.reset();
            setStatus("success");

            window.localStorage.setItem(STORAGE_KEY, "true");
        } catch (error) {
            console.error(
                "Strategy call popup error:",
                error
            );

            setStatus("error");
        }
    }

    if (!isOpen) {
        return null;
    }

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/75 px-4 py-8 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            aria-labelledby="strategy-call-title"
            onMouseDown={(event) => {
                if (event.target === event.currentTarget) {
                    closePopup();
                }
            }}
        >
            <div className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-[#111111] shadow-2xl">
                <button
                    type="button"
                    onClick={closePopup}
                    aria-label="Close strategy call popup"
                    className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/30 text-xl text-gray-400 transition hover:border-orange-500/50 hover:text-orange-500"
                >
                    ×
                </button>

                <div className="grid md:grid-cols-[0.85fr_1.15fr]">
                    {/* Left */}
                    <div className="border-b border-white/10 p-8 md:border-b-0 md:border-r md:p-10">
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
                            Need another perspective?
                        </p>

                        <h2
                            id="strategy-call-title"
                            className="mt-5 text-4xl font-bold leading-tight"
                        >
                            Book a strategy call.
                        </h2>

                        <p className="mt-5 leading-relaxed text-gray-400">
                            Tell us where growth is getting stuck
                            and what you&apos;re trying to achieve.
                            We&apos;ll review the context before
                            getting in touch to schedule the call.
                        </p>

                        <div className="mt-8 space-y-4 text-sm text-gray-300">
                            <div className="flex items-start gap-3">
                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />

                                <p>
                                    No generic sales presentation.
                                </p>
                            </div>

                            <div className="flex items-start gap-3">
                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />

                                <p>
                                    No pressure to commit on the call.
                                </p>
                            </div>

                            <div className="flex items-start gap-3">
                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />

                                <p>
                                    Just an honest look at what
                                    we&apos;d do first.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right */}
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-4 p-8 md:p-10"
                    >
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            autoComplete="name"
                            required
                            disabled={status === "sending"}
                            className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 outline-none transition focus:border-orange-500 disabled:cursor-not-allowed disabled:opacity-60"
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            autoComplete="email"
                            required
                            disabled={status === "sending"}
                            className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 outline-none transition focus:border-orange-500 disabled:cursor-not-allowed disabled:opacity-60"
                        />

                        <div className="grid gap-4 sm:grid-cols-2">
                            <input
                                type="text"
                                name="company"
                                placeholder="Company"
                                autoComplete="organization"
                                disabled={status === "sending"}
                                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 outline-none transition focus:border-orange-500 disabled:cursor-not-allowed disabled:opacity-60"
                            />

                            <input
                                type="url"
                                name="website"
                                placeholder="Website"
                                autoComplete="url"
                                disabled={status === "sending"}
                                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 outline-none transition focus:border-orange-500 disabled:cursor-not-allowed disabled:opacity-60"
                            />
                        </div>

                        <textarea
                            name="message"
                            rows={5}
                            placeholder="Where is growth getting stuck?"
                            required
                            disabled={status === "sending"}
                            className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 outline-none transition focus:border-orange-500 disabled:cursor-not-allowed disabled:opacity-60"
                        />

                        <label className="flex cursor-pointer items-start gap-3 text-sm text-gray-400">
                            <input
                                type="checkbox"
                                checked={rememberChoice}
                                onChange={(event) =>
                                    setRememberChoice(
                                        event.target.checked
                                    )
                                }
                                className="mt-1 h-4 w-4 accent-orange-500"
                            />

                            <span>
                                Remember my choice and don&apos;t
                                show this again.
                            </span>
                        </label>

                        <button
                            type="submit"
                            disabled={status === "sending"}
                            className="w-full rounded-full bg-orange-500 px-8 py-4 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-orange-600 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:opacity-60"
                        >
                            {status === "sending"
                                ? "Sending..."
                                : "Book a Strategy Call"}
                        </button>

                        {status === "success" && (
                            <div
                                role="status"
                                className="rounded-xl border border-green-500/20 bg-green-500/10 px-5 py-4"
                            >
                                <p className="font-semibold text-green-400">
                                    Request received.
                                </p>

                                <p className="mt-1 text-sm text-gray-400">
                                    We&apos;ll contact you within one
                                    business day to arrange the call.
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
                                    Try again or email us at{" "}
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
            </div>
        </div>
    );
}
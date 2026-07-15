"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#0D0D0D]/70 backdrop-blur-xl">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
                {/* Logo */}
                <h1 className="text-2xl font-bold text-white">
                    <Link href="/" onClick={() => setIsOpen(false)}>
                        We<span className="text-orange-500">Dig</span>Mark
                    </Link>
                </h1>

                {/* Desktop navigation */}
                <div className="hidden items-center gap-8 text-gray-300 md:flex">
                    <Link
                        href="/"
                        className={`transition hover:text-orange-500 ${pathname === "/" ? "text-orange-500" : ""
                            }`}
                    >
                        Home
                    </Link>

                    {/* Services dropdown */}
                    <div className="group relative">
                        <Link
                            href="/services"
                            className={`flex items-center gap-1 transition hover:text-orange-500 ${pathname.startsWith("/services")
                                ? "text-orange-500"
                                : ""
                                }`}
                        >
                            Services

                            <svg
                                className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </Link>

                        <div className="invisible absolute left-0 top-full pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                            <div className="min-w-80 rounded-xl border border-white/10 bg-[#111111] p-2 shadow-2xl">
                                <Link
                                    href="/services/creative-strategy"
                                    className="group/item block rounded-lg px-4 py-3 transition hover:bg-white/5"
                                >
                                    <p className="text-sm font-semibold text-white transition-colors group-hover/item:text-orange-500">
                                        Creative Strategy
                                    </p>

                                    <p className="mt-1 text-xs text-gray-500">
                                        Research, hooks, concepts and briefs
                                    </p>
                                </Link>

                                <Link
                                    href="/services/performance-marketing"
                                    className="group/item block rounded-lg px-4 py-3 transition hover:bg-white/5"
                                >
                                    <p className="text-sm font-semibold text-white transition-colors group-hover/item:text-orange-500">
                                        Performance Marketing
                                    </p>

                                    <p className="mt-1 text-xs text-gray-500">
                                        Meta, Google and paid growth
                                    </p>
                                </Link>

                                <Link
                                    href="/services/seo-geo"
                                    className="group/item block rounded-lg px-4 py-3 transition hover:bg-white/5"
                                >
                                    <p className="text-sm font-semibold text-white transition-colors group-hover/item:text-orange-500">
                                        SEO &amp; GEO
                                    </p>

                                    <p className="mt-1 text-xs text-gray-500">
                                        Search and AI visibility
                                    </p>
                                </Link>

                                <Link
                                    href="/services/web-development"
                                    className="group/item block rounded-lg px-4 py-3 transition hover:bg-white/5"
                                >
                                    <p className="text-sm font-semibold text-white transition-colors group-hover/item:text-orange-500">
                                        Web Development
                                    </p>

                                    <p className="mt-1 text-xs text-gray-500">
                                        WordPress, custom builds and refinement
                                    </p>
                                </Link>

                                <Link
                                    href="/services/email-marketing"
                                    className="group/item block rounded-lg px-4 py-3 transition hover:bg-white/5"
                                >
                                    <p className="text-sm font-semibold text-white transition-colors group-hover/item:text-orange-500">
                                        Email Marketing
                                    </p>

                                    <p className="mt-1 text-xs text-gray-500">
                                        Sequences, campaigns and retention
                                    </p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* Portfolio dropdown */}
                    <div className="group relative">
                        <Link
                            href="/portfolio/creative-performance"
                            className={`flex items-center gap-1 transition hover:text-orange-500 ${pathname.startsWith("/portfolio")
                                ? "text-orange-500"
                                : ""
                                }`}
                        >
                            Portfolio

                            <svg
                                className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </Link>

                        <div className="invisible absolute left-0 top-full pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                            <div className="min-w-64 rounded-xl border border-white/10 bg-[#111111] p-2 shadow-2xl">
                                <Link
                                    href="/portfolio/creative-performance"
                                    className="group/item block rounded-lg px-4 py-3 transition hover:bg-white/5"
                                >
                                    <p className="text-sm font-semibold text-white transition-colors group-hover/item:text-orange-500">
                                        Creative &amp; Performance
                                    </p>

                                    <p className="mt-1 text-xs text-gray-500">
                                        Creative strategy, paid media &amp; email marketing
                                    </p>
                                </Link>

                                <Link
                                    href="/portfolio/seo-geo"
                                    className="group/item block rounded-lg px-4 py-3 transition hover:bg-white/5"
                                >
                                    <p className="text-sm font-semibold text-white transition-colors group-hover/item:text-orange-500">
                                        Search &amp; Web
                                    </p>

                                    <p className="mt-1 text-xs text-gray-500">
                                        SEO, GEO, web development &amp; optimisation
                                    </p>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <Link
                        href="/insights"
                        className={`transition hover:text-orange-500 ${pathname === "/insights"
                            ? "text-orange-500"
                            : ""
                            }`}
                    >
                        Insights
                    </Link>

                    <Link
                        href="/about"
                        className={`transition hover:text-orange-500 ${pathname === "/about"
                            ? "text-orange-500"
                            : ""
                            }`}
                    >
                        About
                    </Link>

                    <Link
                        href="/contact"
                        className={`transition hover:text-orange-500 ${pathname === "/contact"
                            ? "text-orange-500"
                            : ""
                            }`}                     >
                        Contact
                    </Link>
                </div>

                {/* Desktop button */}
                <div className="hidden md:block">
                    <Button>Let&apos;s Talk</Button>
                </div>

                {/* Mobile hamburger */}
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex flex-col gap-1.5 md:hidden"
                    aria-label="Toggle navigation menu"
                    aria-expanded={isOpen}
                >
                    <span className="h-0.5 w-6 bg-white"></span>
                    <span className="h-0.5 w-6 bg-white"></span>
                    <span className="h-0.5 w-6 bg-white"></span>
                </button>
            </div>

            {/* Mobile navigation */}
            {isOpen && (
                <div className="max-h-[calc(100vh-81px)] overflow-y-auto border-t border-white/10 bg-[#0D0D0D] px-8 py-6 md:hidden">
                    <div className="flex flex-col gap-5 text-gray-300">
                        <Link
                            href="/"
                            onClick={() => setIsOpen(false)}
                            className="transition hover:text-orange-500"
                        >
                            Home
                        </Link>

                        {/* Mobile Services */}
                        <div>
                            <Link
                                href="/services"
                                onClick={() => setIsOpen(false)}
                                className="font-semibold text-white transition hover:text-orange-500"
                            >
                                Services
                            </Link>

                            <div className="mt-3 flex flex-col gap-3 border-l border-white/10 pl-4">
                                <Link
                                    href="/services/creative-strategy"
                                    onClick={() => setIsOpen(false)}
                                    className="transition hover:text-orange-500"
                                >
                                    Creative Strategy
                                </Link>

                                <Link
                                    href="/services/performance-marketing"
                                    onClick={() => setIsOpen(false)}
                                    className="transition hover:text-orange-500"
                                >
                                    Performance Marketing
                                </Link>

                                <Link
                                    href="/services/seo-geo"
                                    onClick={() => setIsOpen(false)}
                                    className="transition hover:text-orange-500"
                                >
                                    SEO–GEO &amp; Web
                                </Link>

                                <Link
                                    href="/services/web-development"
                                    onClick={() => setIsOpen(false)}
                                    className="transition hover:text-orange-500"
                                >
                                    Web Development
                                </Link>

                                <Link
                                    href="/services/email-marketing"
                                    onClick={() => setIsOpen(false)}
                                    className="transition hover:text-orange-500"
                                >
                                    Email Marketing
                                </Link>
                            </div>
                        </div>

                        {/* Mobile Portfolio */}
                        <div>
                            <Link
                                href="/portfolio/creative-performance"
                                onClick={() => setIsOpen(false)}
                                className="font-semibold text-white transition hover:text-orange-500"
                            >
                                Portfolio
                            </Link>

                            <div className="mt-3 flex flex-col gap-3 border-l border-white/10 pl-4">
                                <Link
                                    href="/portfolio/creative-performance"
                                    onClick={() => setIsOpen(false)}
                                    className="transition hover:text-orange-500"
                                >
                                    Creative Performance
                                </Link>

                                <Link
                                    href="/portfolio/seo-geo"
                                    onClick={() => setIsOpen(false)}
                                    className="transition hover:text-orange-500"
                                >
                                    SEO–GEO &amp; Web
                                </Link>
                            </div>
                        </div>

                        <Link
                            href="/insights"
                            onClick={() => setIsOpen(false)}
                            className="transition hover:text-orange-500"
                        >
                            Insights
                        </Link>

                        <Link
                            href="/about"
                            onClick={() => setIsOpen(false)}
                            className="transition hover:text-orange-500"
                        >
                            About
                        </Link>

                        <Link
                            href="/contact"
                            onClick={() => setIsOpen(false)}
                            className="transition hover:text-orange-500"
                        >
                            Contact
                        </Link>

                        <Link
                            href="/contact"
                            onClick={() => setIsOpen(false)}
                            className="mt-2 rounded-full bg-orange-500 px-6 py-3 text-center font-bold text-white transition hover:bg-orange-600"
                        >
                            Let&apos;s Talk
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
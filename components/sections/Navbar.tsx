"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Image from "next/image";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const isHome = pathname === "/";
    const isServices = pathname.startsWith("/services");
    const isPortfolio = pathname.startsWith("/portfolio");
    const isInsights = pathname.startsWith("/insights");
    const isAbout = pathname.startsWith("/about");
    const isContact = pathname.startsWith("/contact");

    const closeMobileMenu = () => setIsOpen(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#0D0D0D]/70 backdrop-blur-xl">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
                {/* Logo */}
                <Link
                    href="/"
                    onClick={closeMobileMenu}
                    aria-label="WeDigMark Home"
                    className="shrink-0"
                >
                    <Image
                        src="/WDM-wordmark-cropped.png"
                        alt="WeDigMark"
                        width={180}
                        height={40}
                        priority
                        className="h-10.5 w-auto object-contain"
                    />
                </Link>

                {/* Desktop navigation */}
                <div className="hidden items-center gap-8 text-gray-300 md:flex">
                    <Link
                        href="/"
                        className={`transition hover:text-orange-500 ${isHome ? "text-orange-500" : ""
                            }`}
                    >
                        Home
                    </Link>

                    {/* Services dropdown */}
                    <div className="group relative">
                        <Link
                            href="/services"
                            className={`flex items-center gap-1 transition hover:text-orange-500 ${isServices ? "text-orange-500" : ""
                                }`}
                        >
                            Services

                            <svg
                                className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
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
                            className={`flex items-center gap-1 transition hover:text-orange-500 ${isPortfolio ? "text-orange-500" : ""
                                }`}
                        >
                            Portfolio

                            <svg
                                className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
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
                        className={`transition hover:text-orange-500 ${isInsights ? "text-orange-500" : ""
                            }`}
                    >
                        Insights
                    </Link>

                    <Link
                        href="/about"
                        className={`transition hover:text-orange-500 ${isAbout ? "text-orange-500" : ""
                            }`}
                    >
                        About
                    </Link>

                    <Link
                        href="/contact"
                        className={`transition hover:text-orange-500 ${isContact ? "text-orange-500" : ""
                            }`}
                    >
                        Contact
                    </Link>
                </div>

                {/* Desktop CTA */}
                <div className="hidden md:block">
                    <Link href="/contact">
                        <Button>Let&apos;s Talk</Button>
                    </Link>
                </div>

                {/* Mobile hamburger */}
                <button
                    type="button"
                    onClick={() => setIsOpen((current) => !current)}
                    className="flex flex-col gap-1.5 md:hidden"
                    aria-label="Toggle navigation menu"
                    aria-expanded={isOpen}
                >
                    <span className="h-0.5 w-6 bg-white" />
                    <span className="h-0.5 w-6 bg-white" />
                    <span className="h-0.5 w-6 bg-white" />
                </button>
            </div>

            {/* Mobile navigation */}
            {isOpen && (
                <div className="max-h-[calc(100vh-81px)] overflow-y-auto border-t border-white/10 bg-[#0D0D0D] px-8 py-6 md:hidden">
                    <div className="flex flex-col gap-5 text-gray-300">
                        <Link
                            href="/"
                            onClick={closeMobileMenu}
                            className={`transition hover:text-orange-500 ${isHome ? "text-orange-500" : ""
                                }`}
                        >
                            Home
                        </Link>

                        {/* Mobile Services */}
                        <div>
                            <Link
                                href="/services"
                                onClick={closeMobileMenu}
                                className={`font-semibold transition hover:text-orange-500 ${isServices ? "text-orange-500" : "text-white"
                                    }`}
                            >
                                Services
                            </Link>

                            <div className="mt-3 flex flex-col gap-3 border-l border-white/10 pl-4">
                                <Link
                                    href="/services/creative-strategy"
                                    onClick={closeMobileMenu}
                                    className="transition hover:text-orange-500"
                                >
                                    Creative Strategy
                                </Link>

                                <Link
                                    href="/services/performance-marketing"
                                    onClick={closeMobileMenu}
                                    className="transition hover:text-orange-500"
                                >
                                    Performance Marketing
                                </Link>

                                <Link
                                    href="/services/seo-geo"
                                    onClick={closeMobileMenu}
                                    className="transition hover:text-orange-500"
                                >
                                    SEO &amp; GEO
                                </Link>

                                <Link
                                    href="/services/web-development"
                                    onClick={closeMobileMenu}
                                    className="transition hover:text-orange-500"
                                >
                                    Web Development
                                </Link>

                                <Link
                                    href="/services/email-marketing"
                                    onClick={closeMobileMenu}
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
                                onClick={closeMobileMenu}
                                className={`font-semibold transition hover:text-orange-500 ${isPortfolio ? "text-orange-500" : "text-white"
                                    }`}
                            >
                                Portfolio
                            </Link>

                            <div className="mt-3 flex flex-col gap-3 border-l border-white/10 pl-4">
                                <Link
                                    href="/portfolio/creative-performance"
                                    onClick={closeMobileMenu}
                                    className="transition hover:text-orange-500"
                                >
                                    Creative &amp; Performance
                                </Link>

                                <Link
                                    href="/portfolio/seo-geo"
                                    onClick={closeMobileMenu}
                                    className="transition hover:text-orange-500"
                                >
                                    Search &amp; Web
                                </Link>
                            </div>
                        </div>

                        <Link
                            href="/insights"
                            onClick={closeMobileMenu}
                            className={`transition hover:text-orange-500 ${isInsights ? "text-orange-500" : ""
                                }`}
                        >
                            Insights
                        </Link>

                        <Link
                            href="/about"
                            onClick={closeMobileMenu}
                            className={`transition hover:text-orange-500 ${isAbout ? "text-orange-500" : ""
                                }`}
                        >
                            About
                        </Link>

                        <Link
                            href="/contact"
                            onClick={closeMobileMenu}
                            className={`transition hover:text-orange-500 ${isContact ? "text-orange-500" : ""
                                }`}
                        >
                            Contact
                        </Link>

                        <Link
                            href="/contact"
                            onClick={closeMobileMenu}
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

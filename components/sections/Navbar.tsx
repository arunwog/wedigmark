"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import Link from "next/link";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

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
                        className="transition hover:text-orange-500"
                    >
                        Home
                    </Link>

                    <Link
                        href="/services"
                        className="transition hover:text-orange-500"
                    >
                        Services
                    </Link>

                    <Link
                        href="/portfolio"
                        className="transition hover:text-orange-500"
                    >
                        Portfolio
                    </Link>

                    <Link
                        href="/insights"
                        className="transition hover:text-orange-500"
                    >
                        Insights
                    </Link>

                    <Link
                        href="/about"
                        className="transition hover:text-orange-500"
                    >
                        About
                    </Link>

                    <Link
                        href="/contact"
                        className="transition hover:text-orange-500"
                    >
                        Contact
                    </Link>
                </div>

                {/* Desktop button */}
                <div className="hidden md:block">
                    <Button>Let's Talk</Button>
                </div>

                {/* Mobile hamburger button */}
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

            {/* Mobile dropdown menu */}
            {isOpen && (
                <div className="border-t border-white/10 bg-[#0D0D0D] px-8 py-6 md:hidden">
                    <div className="flex flex-col gap-5 text-gray-300">
                        <Link
                            href="/"
                            onClick={() => setIsOpen(false)}
                            className="transition hover:text-orange-500"
                        >
                            Home
                        </Link>

                        <Link
                            href="/services"
                            onClick={() => setIsOpen(false)}
                            className="transition hover:text-orange-500"
                        >
                            Services
                        </Link>

                        <Link
                            href="/portfolio"
                            onClick={() => setIsOpen(false)}
                            className="transition hover:text-orange-500"
                        >
                            Portfolio
                        </Link>

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
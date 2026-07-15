"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const serviceTabs = [
    {
        label: "Creative Strategy",
        href: "/services/creative-strategy",
    },
    {
        label: "Performance Marketing",
        href: "/services/performance-marketing",
    },
    {
        label: "SEO & GEO",
        href: "/services/seo-geo",
    },
    {
        label: "Web Development",
        href: "/services/web-development",
    },
    {
        label: "Email Marketing",
        href: "/services/email-marketing",
    },
];

export default function ServicesSubnav() {
    const pathname = usePathname();

    return (
        <div className="fixed left-0 right-0 top-[81px] z-40 border-b border-white/10 bg-[#0D0D0D]/95 backdrop-blur-xl">
            <div className="mx-auto flex h-12 max-w-7xl justify-center overflow-x-auto px-4">
                {serviceTabs.map((tab) => {
                    const isActive = pathname === tab.href;

                    return (
                        <Link
                            key={tab.href}
                            href={tab.href}
                            className={`flex h-12 min-w-[210px] shrink-0 items-center justify-center px-8 text-center text-sm font-semibold transition duration-300 ${isActive
                                ? "bg-orange-500 text-white"
                                : "bg-[#171717] text-white hover:bg-[#202020] hover:text-orange-500"
                                }`}
                            style={{
                                clipPath: "polygon(0 0, 100% 0, 90% 100%, 10% 100%)",
                            }}
                        >
                            <span className="block whitespace-nowrap leading-normal">
                                {tab.label}
                            </span>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function PortfolioSubnav() {
    const pathname = usePathname();

    const isCreative = pathname.includes("/portfolio/creative-performance");
    const isSearch = pathname.includes("/portfolio/seo-geo");

    return (
        <div className="fixed left-0 right-0 top-[81px] z-40 border-b border-white/10 bg-[#0D0D0D]/95 backdrop-blur-xl">
            <div className="mx-auto flex max-w-7xl items-start justify-center px-6">
                <Link
                    href="/portfolio/creative-performance"
                    className={`relative flex min-h-14 min-w-[250px] items-center justify-center px-10 text-sm font-semibold transition duration-300 ${isCreative
                            ? "bg-orange-500 text-white"
                            : "bg-[#171717] text-gray-300 hover:bg-[#202020] hover:text-orange-500"
                        }`}
                    style={{
                        clipPath:
                            "polygon(0 0, 100% 0, 88% 100%, 12% 100%)",
                    }}
                >
                    Creative &amp; Performance
                </Link>

                <Link
                    href="/portfolio/seo-geo"
                    className={`relative flex min-h-14 min-w-[250px] items-center justify-center px-10 text-sm font-semibold transition duration-300 ${isSearch
                            ? "bg-orange-500 text-white"
                            : "bg-[#171717] text-gray-300 hover:bg-[#202020] hover:text-orange-500"
                        }`}
                    style={{
                        clipPath:
                            "polygon(12% 0, 88% 0, 100% 100%, 0 100%)",
                    }}
                >
                    Search &amp; Web
                </Link>
            </div>
        </div>
    );
}
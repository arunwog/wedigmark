import Button from "@/components/ui/Button";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0D0D0D]/70 backdrop-blur-xl border-b border-white/10">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">

                <h1 className="text-2xl font-bold text-white">
                    We<span className="text-orange-500">Dig</span>Mark
                </h1>

                <div className="hidden md:flex items-center gap-8 text-gray-300">
                    <a
                        href="/services"
                        className="transition hover:text-orange-500"
                    >
                        Services
                    </a>

                    <a
                        href="/portfolio"
                        className="transition hover:text-orange-500"
                    >
                        Portfolio
                    </a>
                    <a
                        href="/insights"
                        className="transition hover:text-orange-500"
                    >
                        Insights
                    </a>
                    <a
                        href="/about"
                        className="transition hover:text-orange-500"
                    >
                        About
                    </a>
                    <a
                        href="/contact"
                        className="transition hover:text-orange-500"
                    >
                        Contact
                    </a>
                </div>

                <Button>Let's Talk</Button>

            </div>
        </nav>
    );
}
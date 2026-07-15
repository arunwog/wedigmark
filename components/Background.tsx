export default function Background() {
    return (
        <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#0D0D0D]"
        >
            {/* Top-left orange glow */}
            <div className="absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full bg-orange-500/[0.07] blur-[140px]" />

            {/* Lower-right orange glow */}
            <div className="absolute -bottom-60 -right-40 h-[700px] w-[700px] rounded-full bg-orange-500/[0.05] blur-[170px]" />

            {/* Very subtle centre glow */}
            <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-white/[0.015] blur-[150px]" />

            {/* Subtle topographic pattern */}
            <svg
                className="absolute inset-0 h-full w-full opacity-[0.055]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1600 1000"
                preserveAspectRatio="xMidYMid slice"
            >
                <g
                    fill="none"
                    stroke="rgb(249 115 22)"
                    strokeWidth="1"
                >
                    <path d="M-100 220C120 80 320 110 450 230C570 340 720 350 850 240C1030 90 1270 80 1700 290" />
                    <path d="M-120 270C120 130 310 150 440 270C570 390 730 400 880 280C1060 140 1290 120 1720 330" />
                    <path d="M-140 320C110 180 300 200 430 320C570 440 740 450 900 330C1080 190 1310 170 1740 380" />

                    <path d="M-100 650C120 500 340 530 480 660C610 780 790 790 940 670C1120 520 1350 500 1700 700" />
                    <path d="M-120 700C110 550 330 580 470 710C610 830 800 840 960 720C1140 570 1370 550 1720 750" />
                    <path d="M-140 750C100 600 320 630 460 760C610 880 810 890 980 770C1160 620 1390 600 1740 800" />

                    <path d="M260 50C180 170 200 310 310 400C420 490 430 620 340 730C250 850 270 940 390 1040" />
                    <path d="M310 20C230 150 250 290 360 380C470 470 480 600 390 710C300 830 320 920 440 1020" />

                    <path d="M1240 -40C1140 100 1160 240 1280 330C1400 420 1410 550 1320 670C1230 790 1250 900 1380 1030" />
                    <path d="M1300 -70C1200 80 1220 220 1340 310C1460 400 1470 530 1380 650C1290 770 1310 880 1440 1010" />
                </g>
            </svg>

            {/* Fine grid */}
            <div
                className="absolute inset-0 opacity-[0.025]"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)",
                    backgroundSize: "64px 64px",
                }}
            />

            {/* Soft grain */}
            <div
                className="absolute inset-0 opacity-[0.035]"
                style={{
                    backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.55'/%3E%3C/svg%3E\")",
                }}
            />

            {/* Dark overlay to keep everything restrained */}
            <div className="absolute inset-0 bg-black/20" />
        </div>
    );
}
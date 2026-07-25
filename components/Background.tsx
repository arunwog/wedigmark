export default function Background() {
    return (
        <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#03040b]"
        >
            <style jsx global>{`
                @keyframes drift {
                    0%,
                    100% {
                        transform: translate3d(0, 0, 0) scale(1);
                    }
                    50% {
                        transform: translate3d(3%, -2%, 0) scale(1.04);
                    }
                }

                @keyframes pulse {
                    0%,
                    100% {
                        opacity: 0.5;
                        transform: scale(1);
                    }
                    50% {
                        opacity: 0.9;
                        transform: scale(1.05);
                    }
                }
            `}</style>

            {/* Atmospheric field */}
            <div
                className="absolute inset-0 opacity-95"
                style={{
                    backgroundImage: `
                        radial-gradient(680px circle at 18% 24%, rgba(96, 165, 250, 0.14), transparent 58%),
                        radial-gradient(760px circle at 80% 16%, rgba(168, 85, 247, 0.12), transparent 56%),
                        radial-gradient(860px circle at 50% 112%, rgba(251, 191, 36, 0.08), transparent 64%),
                        linear-gradient(135deg, rgba(255, 255, 255, 0.04), transparent 42%, rgba(96, 165, 250, 0.05) 100%)
                    `,
                }}
            />

            {/* Soft haze */}
            <div
                className="absolute inset-0 opacity-80"
                style={{
                    backgroundImage: `
                        linear-gradient(120deg, rgba(255,255,255,0.04) 0%, transparent 28%, rgba(255,255,255,0.03) 100%),
                        conic-gradient(from 220deg at 50% 50%, rgba(255,255,255,0.03), transparent 24%, rgba(96,165,250,0.04) 48%, transparent 70%)
                    `,
                }}
            />

            {/* Large drifting glows */}
            <div
                className="absolute left-[-7rem] top-[-4rem] h-[24rem] w-[24rem] rounded-full bg-sky-500/15 blur-[200px]"
                style={{ animation: "drift 18s ease-in-out infinite" }}
            />
            <div
                className="absolute right-[-6rem] top-[14%] h-[30rem] w-[30rem] rounded-full bg-fuchsia-500/12 blur-[250px]"
                style={{ animation: "drift 22s ease-in-out infinite reverse" }}
            />
            <div
                className="absolute bottom-[-9rem] left-[34%] h-[28rem] w-[28rem] rounded-full bg-amber-400/10 blur-[220px]"
                style={{ animation: "pulse 16s ease-in-out infinite" }}
            />

            {/* Vignette */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage:
                        "radial-gradient(circle at center, transparent 0%, transparent 54%, rgba(0,0,0,0.6) 100%)",
                }}
            />

            {/* Silky structural lines */}
            <svg
                className="absolute inset-0 h-full w-full opacity-[0.055]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1600 1000"
                preserveAspectRatio="xMidYMid slice"
            >
                <path
                    d="M-80 300C240 140 470 150 620 320C770 490 1040 520 1420 330"
                    stroke="rgba(255,255,255,0.8)"
                    strokeWidth="1"
                    fill="none"
                />
                <path
                    d="M120 620C340 470 560 470 760 660C940 840 1180 860 1500 700"
                    stroke="rgba(96,165,250,0.9)"
                    strokeWidth="1.1"
                    fill="none"
                />
                <path
                    d="M280 60C470 180 610 300 690 420C765 530 860 640 1030 720"
                    stroke="rgba(168,85,247,0.75)"
                    strokeWidth="1"
                    fill="none"
                />
            </svg>

            {/* Fine texture */}
            <div
                className="absolute inset-0 opacity-[0.07]"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.36) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.36) 1px, transparent 1px)",
                    backgroundSize: "80px 80px",
                }}
            />

            <div
                className="absolute inset-0 opacity-[0.09]"
                style={{
                    backgroundImage:
                        "radial-gradient(circle, rgba(255,255,255,0.7) 0.8px, transparent 0.8px)",
                    backgroundSize: "16px 16px",
                }}
            />
        </div>
    );
}
import {
  Target,
  Search,
  TrendingUp,
  Mail,
} from "lucide-react";

import Reveal from "@/components/Reveal";

const services = [
  {
    icon: Target,
    title: "Creative Strategy",
    description:
      "Creator-first marketing built to win attention today... and tomorrow... and the day after.",
  },
  {
    icon: Search,
    title: "SEO",
    description:
      "Make Google your hardest-working salesperson, be found before you're searched for.",
  },
  {
    icon: TrendingUp,
    title: "Performance Marketing",
    description:
      "Spend smarter before spending more... because marketing should pay for itself.",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description:
      "Relationships don't end at checkout... neither should your marketing.",
  },
];

export default function Services() {
  return (
    <section className="bg-[#0D0D0D] px-6 py-32 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <Reveal delay={0.05} y={16}>
            <p className="mb-6 text-sm uppercase tracking-[0.35em] text-orange-500">
              What We Do
            </p>
          </Reveal>

          <Reveal delay={0.12} y={24}>
            <h2 className="text-4xl font-bold leading-tight tracking-[-0.03em] md:text-6xl">
              <span className="text-orange-500">Everything</span> your marketing needs.
              <br />
              Nothing it doesn&apos;t.
            </h2>
          </Reveal>

          <Reveal delay={0.2} y={20}>
            <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-400">
              Creative strategy, SEO, performance marketing and email
              marketing, all working together to grow your business.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Reveal
                key={service.title}
                delay={0.08 * index}
                y={28}
              >
                <div
                  className="
                    h-full
                    rounded-3xl
                    border
                    border-white/10
                    bg-[#121212]
                    p-10
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:border-orange-500
                  "
                >
                  <Icon
                    size={36}
                    className="mb-8 text-orange-500"
                  />

                  <h3 className="mb-4 text-2xl font-semibold">
                    {service.title}
                  </h3>

                  <p className="leading-8 text-gray-400">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
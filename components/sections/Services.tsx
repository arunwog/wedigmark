import {
  Target,
  Search,
  TrendingUp,
  Mail,
} from "lucide-react";

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
    <section className="bg-[#0D0D0D] text-white px-6 py-32">
      <div className="max-w-6xl mx-auto">

        <div className="text-center">

          <p className="uppercase tracking-[0.35em] text-orange-500 text-sm mb-6">
            What We Do
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight tracking-[-0.03em]">
             <span className="text-orange-500">Everything</span> your marketing needs.
            <br />
            Nothing it doesn't.
          </h2>

          <p className="mt-5 text-gray-400 text-lg max-w-3xl mx-auto">
            Creative strategy, SEO, performance marketing, and email
            marketing—all working together to grow your business.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-20">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="
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
                  className="text-orange-500 mb-8"
                />

                <h3 className="text-2xl font-semibold mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-8">
                  {service.description}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
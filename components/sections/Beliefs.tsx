const beliefs = [
  {
    number: "01",
    title: "Spend with intent.",
    description:
      "Running ads is easy. Knowing why they'll work before you launch them is the hard part. We'd rather solve that first.",
  },
  {
    number: "02",
    title: "Attention is earned.",
    description:
      "Algorithms can put your ad in front of people. They can't make people care. That's the job of the creative.",
  },
  {
    number: "03",
    title: "Research is a competitive advantage.",
    description:
      "We'd rather spend another hour understanding your customer than another thousand rupees hoping Meta figures it out.",
  },
  {
    number: "04",
    title: "Marketing should compound.",
    description:
      "Every campaign should leave your business in a better place than it found it... better insights, better creatives, and a clearer understanding of your customers.",
  },
];

export default function Beliefs() {
  return (
    <section className="bg-[#0D0D0D] px-6 py-32 text-white">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm uppercase tracking-[0.35em] text-orange-500">
          OUR BELIEFS
        </p>

        <h2 className="mt-6 max-w-3xl text-5xl font-bold leading-tight tracking-[-0.03em] md:text-7xl">
          Algorithms change.
          <br />
          People don't.
        </h2>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">
          Platforms evolve. AI improves. Algorithms get rewritten. Human
          psychology rarely does. That's the layer we choose to build on.
        </p>

        <div className="mt-20 border-t border-white/10">
          {beliefs.map((belief) => (
            <div
              key={belief.number}
              className="grid gap-8 border-b border-white/10 py-10 md:grid-cols-[80px_280px_1fr]"
            >
              <p className="text-sm font-semibold tracking-[0.25em] text-orange-500">
                {belief.number}
              </p>

              <h3 className="text-3xl font-semibold">
                {belief.title}
              </h3>

              <p className="max-w-2xl text-lg leading-8 text-gray-400">
                {belief.description}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-24 max-w-4xl text-4xl font-bold leading-tight tracking-[-0.03em] md:text-6xl">
          <span className="block">Platforms change.</span>
          <span className="mt-2 block text-orange-500">People won't.</span>
        </p>
      </div>
    </section>
  );
}
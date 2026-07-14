const obsessions = [
  {
    id: "customer-psychology",
    title: "Customer Psychology",
    description:
      "Understanding why people buy before deciding how to sell.",
  },
  {
    id: "research",
    title: "Research",
    description:
      "The better the questions, the better the strategy. We don't skip this part.",
  },
  {
    id: "positioning",
    title: "Positioning",
    description:
      "Helping businesses become the obvious choice instead of the loudest one.",
  },
  {
    id: "growth",
    title: "Growth",
    description:
      "Built to compound over time, not disappear the moment you stop spending.",
  },
];

export default function AboutPreview() {
  return (
    <section className="bg-[#0D0D0D] px-6 py-32 text-white">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm uppercase tracking-[0.35em] text-orange-500">
          About
        </p>

        <div className="mt-6 grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-24">
          <div>
            <h2 className="max-w-3xl text-5xl font-bold leading-tight tracking-[-0.03em] md:text-7xl">
              What we&apos;re <span className="text-orange-500">obsessed</span> with.
            </h2>

            <div className="mt-10 max-w-2xl space-y-6 text-lg leading-8 text-gray-400">
              <p>
                WeDigMark exists because we can&apos;t help asking the same
                question every time we see a great brand:
              </p>

              <p className="text-2xl font-semibold text-white">
                Why did this work?
              </p>

              <p>
                Not just why it got clicks. Why it earned attention. Why people
                believed it. Why they bought. Why they came back.
              </p>

              <p>
                That&apos;s what we enjoy figuring out. The research before the
                headline. The positioning before the campaign. The strategy
                that makes everything after it work harder.
              </p>

              <p>
                We&apos;d rather show you how we think than spend three
                paragraphs telling you we&apos;re different.
              </p>
            </div>
          </div>

          <div className="border-t border-white/15">
            {obsessions.map((item) => (
              <div
                key={item.id}
                className="border-b border-white/15 py-8"
              >
                <h3 className="text-2xl font-semibold">{item.title}</h3>

                <p className="mt-3 max-w-md text-lg leading-8 text-gray-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-24 max-w-4xl text-4xl font-bold leading-tight tracking-[-0.03em] md:text-6xl">
          <span className="block">The best marketing rarely begins</span>
          <span className="block">with marketing.</span>
          <span className="mt-3 block text-orange-500">
            It begins with people.
          </span>
        </p>
      </div>
    </section>
  );
}
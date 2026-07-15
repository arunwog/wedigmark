import Button from "@/components/ui/Button";
export default function Hero() {
  return (
    <section className="min-h-screen pt-28 bg-[#0D0D0D] text-white flex items-center justify-center px-6">
      <div className="max-w-4xl text-center">
        <p className="uppercase tracking-[0.35em] text-orange-500 text-sm mb-6">
          We Dig Mark
        </p>

        <h1 className="text-5xl md:text-7xl font-bold leading-[0.95] tracking-[-0.04em]">
          We don't launch <span className="text-orange-500">marketing</span>
          <br />
          that we wouldn't buy from  ourselves.
        </h1>

        <p className="mt-2 text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
          We treat your budget like our own.
          <br />
          Expect transparent strategy, clear communication, and real results
        </p>
        <div className="mt-16">
          <Button>Book a Strategy Call</Button>
        </div>
      </div>
    </section>
  );
}
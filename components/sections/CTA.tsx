import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <section className="bg-[#0D0D0D] px-6 py-32 text-white">
      <div className="mx-auto max-w-5xl rounded-[40px] border border-[#3A3A3A] bg-[#202020] px-10 py-20 text-center md:px-20">
        <p className="text-sm uppercase tracking-[0.35em] text-orange-500">
          LET'S TALK
        </p>

        <h2 className="mt-6 text-4xl font-bold leading-tight tracking-[-0.03em] md:text-6xl">
          Good marketing begins
          <br />
          with a good conversation.
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-400">
          Whether you're launching something new, trying to scale what already
          works, or simply looking for a fresh perspective... we'd love to hear
          what you're building.
        </p>

        <div className="mt-14">
          <Button>Book a Strategy Call</Button>
        </div>
      </div>
    </section>
  );
}
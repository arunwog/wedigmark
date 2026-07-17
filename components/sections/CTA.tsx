"use client";

import Button from "@/components/ui/Button";
import Reveal from "@/components/Reveal";

export default function CTA() {
  function openStrategyCall() {
    window.dispatchEvent(new Event("open-strategy-call"));
  }

  return (
    <section className="bg-[#0D0D0D] px-6 py-32 text-white">
      <Reveal y={30}>
        <div className="mx-auto max-w-5xl rounded-[40px] border border-[#3A3A3A] bg-[#202020] px-10 py-20 text-center md:px-20">
          <Reveal delay={0.1} y={14}>
            <p className="text-sm uppercase tracking-[0.35em] text-orange-500">
              LET&apos;S TALK
            </p>
          </Reveal>

          <Reveal delay={0.18} y={22}>
            <h2 className="mt-6 text-4xl font-bold leading-tight tracking-[-0.03em] md:text-6xl">
              Good marketing begins
              <br />
              with a good conversation.
            </h2>
          </Reveal>

          <Reveal delay={0.26} y={18}>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-400">
              Whether you&apos;re launching something new, trying to scale what
              already works, or simply looking for a fresh perspective...
              we&apos;d love to hear what you&apos;re building.
            </p>
          </Reveal>

          <Reveal delay={0.34} y={16}>
            <div className="mt-14" onClick={openStrategyCall}>
              <Button>Book a Strategy Call</Button>
            </div>
          </Reveal>
        </div>
      </Reveal>
    </section>
  );
}
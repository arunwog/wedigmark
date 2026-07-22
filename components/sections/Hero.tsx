"use client";

import Button from "@/components/ui/Button";
import Reveal from "@/components/Reveal";
import Image from "next/image";

export default function Hero() {
  function openStrategyCall() {
    window.dispatchEvent(new Event("open-strategy-call"));
  }

  return (
    <section className="flex min-h-screen items-center justify-center bg-[#0D0D0D] px-6 pt-20 text-white">
      <div className="-translate-y-8 max-w-4xl text-center">
        <Reveal delay={0.05} y={16}>
          <Image
            src="/wedigmark-herologo.png"
            alt="WeDigMark"
            width={320}
            height={60}
            priority
            className="mx-auto -mb-15 h-45 w-auto object-contain"
          />
        </Reveal>

        <Reveal delay={0.15} y={28}>
          <h1 className="text-5xl font-bold leading-tight tracking-[-0.04em] md:text-7xl">
            We Don&apos;t Launch{" "}
            <span className="text-orange-500">Marketing</span>
            <br />
            That Feels Like Marketing.
          </h1>
        </Reveal>

        <Reveal delay={0.28} y={22}>
          <p className="mx-auto mt-1.5 max-w-3xl text-lg leading-relaxed text-gray-400 md:text-xl">
            We treat your budget like our own.
            <br />
            Expect transparent strategy, clear communication and real results.
          </p>
        </Reveal>

        <Reveal delay={0.4} y={18}>
          <div className="mt-18" onClick={openStrategyCall}>
            <Button>Book a Strategy Call</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
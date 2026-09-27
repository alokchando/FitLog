import React from "react";
import Image from "next/image";
import Link from "next/link";
import banner from "@/assets/banner.png";

const Hero = () => {
  return (
    <section className="border-b border-gray-800 bg-[#0b0f17] px-4 py-16 text-white md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">
        <div>
          <p className="mb-4 text-sm font-bold tracking-[0.25em] text-[#ccff00]">
            WORKOUT LIBRARY
          </p>

          <h1 className="max-w-2xl text-4xl font-extrabold uppercase leading-tight tracking-tight md:text-6xl">
            TRAIN WITH INTENT. LOG EVERY SET.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-gray-400">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <Link
            href="#workouts"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#ccff00] px-5 py-3 text-sm font-bold text-black transition hover:bg-[#b3e600]"
          >
            BROWSE WORKOUTS
          </Link>
        </div>

        <div className="overflow-hidden rounded-2xl border border-gray-800">
          <Image
            src={banner}
            alt="Workout training"
            width={900}
            height={1200}
            className="h-80 w-full object-fit md:h-[450px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

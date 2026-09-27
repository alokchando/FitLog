"use client";

import { useContext, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Clock3, Flame, Star } from "lucide-react";
import { workoutContext } from "@/context/context";

const MyPlan = () => {
  const { saved, setSaved, later, setLater } = useContext(workoutContext);
  const [activeTab, setActiveTab] = useState("plan");
  const workouts = activeTab === "plan" ? saved : later;

  const handleRemove = (id) => {
    if (activeTab === "plan") {
      setSaved(saved.filter((workout) => workout.id !== id));
    } else {
      setLater(later.filter((workout) => workout.id !== id));
    }
  };

  const handleDone = (id) => {
    setSaved(saved.filter((workout) => workout.id !== id));
  };

  return (
    <main className="min-h-screen bg-[#0b0f17] px-4 py-10 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold tracking-wide">MY PLAN</h1>

          <p className="mt-2 text-sm text-gray-400">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-gray-800 bg-[#151b26] p-5">
            <p className="text-xs uppercase tracking-widest text-gray-400">
              Exercises
            </p>
            <p className="mt-2 text-3xl font-bold">{saved.length}</p>
          </div>

          <div className="rounded-xl border border-gray-800 bg-[#151b26] p-5">
            <p className="text-xs uppercase tracking-widest text-gray-400">
              Minutes
            </p>
            <p className="mt-2 text-3xl font-bold">
              {saved.reduce(
                (total, workout) => total + Number(workout.duration),
                0,
              )}
            </p>
          </div>

          <div className="rounded-xl border border-gray-800 bg-[#151b26] p-5">
            <p className="text-xs uppercase tracking-widest text-gray-400">
              Calories
            </p>
            <p className="mt-2 text-3xl font-bold">
              {saved.reduce(
                (total, workout) => total + Number(workout.caloriesBurned),
                0,
              )}
            </p>
          </div>
        </div>

        <div className="mb-6 flex gap-2 border-b border-gray-800">
          <button
            onClick={() => setActiveTab("plan")}
            className={`px-4 py-3 text-sm font-semibold ${
              activeTab === "plan"
                ? "border-b-2 border-[#ccff00] text-[#ccff00]"
                : "text-gray-400"
            }`}
          >
            Today&apos;s Plan
          </button>

          <button
            onClick={() => setActiveTab("saved")}
            className={`px-4 py-3 text-sm font-semibold ${
              activeTab === "saved"
                ? "border-b-2 border-[#ccff00] text-[#ccff00]"
                : "text-gray-400"
            }`}
          >
            Saved
          </button>
        </div>

        {workouts.length === 0 ? (
          <div className="flex min-h-80 flex-col items-center justify-center rounded-2xl border border-gray-800 bg-[#0f141d] px-6 text-center">
            <h2 className="text-xl font-bold">NOTHING HERE YET</h2>

            <p className="mt-2 max-w-md text-sm text-gray-400">
              Browse the library and add a lift to get today moving.
            </p>

            <Link
              href="/"
              className="mt-6 rounded-lg bg-[#ccff00] px-5 py-3 text-sm font-bold text-black"
            >
              Go to workouts
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {workouts.map((workout) => (
              <div
                key={workout.id}
                className="flex flex-col gap-5 rounded-2xl border border-gray-800 bg-[#0f141d] p-4 md:flex-row"
              >
                <Image
                  src={workout.image}
                  alt={workout.name}
                  width={640}
                  height={480}
                  className="h-48 w-full rounded-xl object-cover md:h-32 md:w-40"
                />

                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <h2 className="text-lg font-bold">{workout.name}</h2>

                    <p className="mt-1 text-sm text-gray-400">
                      {workout.equipment}
                    </p>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-5 text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <Clock3 size={15} />
                      {workout.duration} min
                    </span>

                    <span className="flex items-center gap-1">
                      <Flame size={15} />
                      {workout.caloriesBurned} cal
                    </span>

                    <span className="flex items-center gap-1">
                      <Star size={15} />
                      {workout.rating}
                    </span>
                  </div>
                </div>

                <div className="flex  items-center gap-2 md: md: md:justify-center">
                  <Link
                    href={`/workouts/${workout.id}`}
                    className="rounded-lg border border-gray-700 px-4 py-2 text-center text-xs font-semibold text-gray-300 hover:bg-gray-800"
                  >
                    View Details
                  </Link>

                  {activeTab === "plan" && (
                    <button
                      onClick={() => handleDone(workout.id)}
                      className="rounded-lg bg-[#ccff00] px-4 py-2 text-xs font-bold text-black"
                    >
                      Mark as Done
                    </button>
                  )}

                  <button
                    onClick={() => handleRemove(workout.id)}
                    className="rounded-lg border border-red-900 px-4 py-2 text-xs font-bold text-red-400 hover:bg-red-950"
                  >
                    X
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default MyPlan;

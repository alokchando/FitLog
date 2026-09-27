"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { workoutContext } from "@/context/context";

const Navbar = () => {
  const pathname = usePathname();
  const { saved, later } = useContext(workoutContext);

  const isActive = (path) => pathname === path;

  return (
    <nav className="border-b border-gray-800 bg-[#0b0f17]">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6">
        
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-wide text-white"
        >
          Fit<span className="text-[#ccff00]">Log</span>
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
              isActive("/")
                ? "bg-[#ccff00] text-black"
                : "text-gray-300 hover:bg-gray-800 hover:text-white"
            }`}
          >
            Workout
          </Link>

          <Link
            href="/workouts/my-plan"
            className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
              isActive("/workouts/my-plan")
                ? "bg-[#ccff00] text-black"
                : "text-gray-300 hover:bg-gray-800 hover:text-white"
            }`}
          >
            My Plan
          </Link>
        </div>

        {/* Counters */}
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-[#ccff00] px-3 py-1.5 text-xs font-bold text-black">
            Plan {saved.length}
          </div>

          <div className="rounded-full border border-gray-600 px-3 py-1.5 text-xs font-medium text-gray-300">
            Saved {later.length}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
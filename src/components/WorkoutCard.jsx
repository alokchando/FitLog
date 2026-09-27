import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock3, Flame, Star } from "lucide-react";

const WorkoutCard = ({ workouts }) => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {workouts.map((workout) => (
          <Link href={`/workouts/${workout.id}`} key={workout.id}>
            <div className="flex h-full flex-col gap-4 rounded-2xl bg-[#20242E] p-5 transition hover:-translate-y-1 hover:shadow-lg">
              <Image
                src={workout.image}
                alt={workout.name}
                width={370}
                height={360}
                className="h-60 w-full rounded-xl object-cover"
              />
              <div className="flex flex-wrap gap-2">
                {workout.muscleGroups.map((muscle) => (
                  <span
                    key={muscle}
                    className="rounded-full bg-green-500 px-3 py-1 text-xs font-medium text-[#333]"
                  >
                    {muscle}
                  </span>
                ))}
              </div>
              <h2 className="text-xl font-bold text-white"> {workout.name} </h2>
              <p className="text-sm text-gray-400"> {workout.equipment} </p>
              <div className="mt-auto flex items-center justify-between gap-2 text-sm text-gray-400">
                <div className="flex items-center gap-1.5">
                  <Clock3 size={16} /> <span>{workout.duration} min</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Flame size={16} />
                  <span>{workout.caloriesBurned} cal</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Star size={16} /> <span>{workout.rating}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default WorkoutCard;

import { getWorkout } from "@/api/workoutApi";
import Image from "next/image";

const WorkoutDetails = async ({ params }) => {
  const { id } = await params;
  const workout = await getWorkout(id);

  return (
    <main className="min-h-screen bg-[#0b0f17] px-4 py-8 text-gray-100 md:px-8">
      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-8 rounded-2xl border border-gray-800 bg-[#0f141d] p-6 shadow-2xl md:grid-cols-2">
        <div className="min-h-[350px] w-full md:min-h-[450px]">
          <Image
            src={workout.image}
            alt={workout.name}
            width={600}
            height={600}
            className="h-full w-full rounded-xl object-cover"
          />
        </div>

        <div className="flex flex-col justify-between space-y-6">
          <div>
            <h1 className="mb-2 text-3xl font-extrabold uppercase tracking-wide text-white">
              {workout.name}
            </h1>

            <p className="mb-4 text-sm leading-relaxed text-gray-400">
              {workout.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {workout.muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="rounded-full bg-[#ccff00] px-3 py-1 text-xs font-semibold text-black"
                >
                  {muscle}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-2.5 rounded-xl border border-gray-800/50 bg-[#151b26] p-4 text-xs">
            <div className="flex items-center justify-between py-1">
              <span className="font-medium uppercase tracking-wider text-gray-400">
                Equipment
              </span>
              <span className="font-medium text-gray-200">
                {workout.equipment}
              </span>
            </div>

            <div className="flex items-center justify-between py-1">
              <span className="font-medium uppercase tracking-wider text-gray-400">
                Difficulty
              </span>
              <span className="font-medium text-gray-200">
                {workout.difficulty}
              </span>
            </div>

            <div className="flex items-center justify-between py-1">
              <span className="font-medium uppercase tracking-wider text-gray-400">
                Sets
              </span>
              <span className="font-medium text-gray-200">{workout.sets}</span>
            </div>

            <div className="flex items-center justify-between py-1">
              <span className="font-medium uppercase tracking-wider text-gray-400">
                Reps
              </span>
              <span className="font-medium text-gray-200">{workout.reps}</span>
            </div>

            <div className="flex items-center justify-between py-1">
              <span className="font-medium uppercase tracking-wider text-gray-400">
                Duration
              </span>
              <span className="font-medium text-gray-200">
                {workout.duration} min
              </span>
            </div>

            <div className="flex items-center justify-between py-1">
              <span className="font-medium uppercase tracking-wider text-gray-400">
                Calories
              </span>
              <span className="font-medium text-gray-200">
                {workout.caloriesBurned} kcal
              </span>
            </div>

            <div className="flex items-center justify-between py-1">
              <span className="font-medium uppercase tracking-wider text-gray-400">
                Rating
              </span>
              <span className="font-medium text-gray-200">
                {workout.rating}
              </span>
            </div>
          </div>

          <div>
            <h2 className="mb-3 text-xs font-bold uppercase tracking-widest text-white">
              Instructions
            </h2>

            <ol className="space-y-2 text-xs leading-relaxed text-gray-300">
              {workout.instructions.map((instruction, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-gray-400">{index + 1}.</span>
                  <span>{instruction}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button className="rounded-lg bg-[#ccff00] px-4 py-2.5 text-xs font-semibold text-black transition-colors duration-200 hover:bg-[#b3e600]">
              Add to today's plan
            </button>

            <button className="rounded-lg border border-gray-700 px-4 py-2.5 text-xs font-medium text-gray-300 transition-colors duration-200 hover:bg-gray-800">
              Save for later
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WorkoutDetails;

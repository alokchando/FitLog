import { getWorkouts } from "@/api/workoutApi";
import Hero from "@/components/Hero";
import WorkoutCard from "@/components/WorkoutCard";
import React from "react";

const Home = async () => {
  const workouts = await getWorkouts();
  return (
    <main>
      <Hero />
      <WorkoutCard workouts={workouts} />
    </main>
  );
};

export default Home;

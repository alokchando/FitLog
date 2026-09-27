import { getWorkouts } from '@/api/workoutApi';
import WorkoutCard from '@/components/WorkoutCard';
import React from 'react';

const Home = async () => {
    const workouts = await getWorkouts()
    return (
        <main>
             <WorkoutCard workouts={workouts} />
        </main>
    );
};

export default Home;
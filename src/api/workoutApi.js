export const getWorkouts = async () => {
  const res = await fetch("https://api.api-store.workers.dev/api/fitlog");

  if (!res.ok) {
    throw new Error("Failed to fetch workouts");
  }

  return res.json();
};

export const getWorkout = async (id) => {
  const res = await fetch(`https://api.api-store.workers.dev/api/fitlog/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch workout");
  }

  return res.json();
};

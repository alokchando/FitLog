"use client";

import { createContext, useState } from "react";

export const workoutContext = createContext();

const WorkoutProvider = ({ children }) => {
  const [saved, setSaved] = useState([]);
  const [later, setLater] = useState([]);

  return (
    <workoutContext.Provider value={{ saved, setSaved,later,setLater }}>
      {children}
    </workoutContext.Provider>
  );
};

export default WorkoutProvider;